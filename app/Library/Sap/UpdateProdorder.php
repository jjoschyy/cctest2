<?php

namespace App\Library\Sap;

use App\Library\Helper\TimeHelper;
use App\Library\Helper\LanguageHelper;
use App\Library\Checklist\Parser;
use App\Library\Sap\Update;
use App\Http\Requests\Sap\Prodorder;
use Illuminate\Support\Facades\DB;

class UpdateProdorder extends Update {

    const TIMEUNIT = ['MIN' => 60, 'STD' => 3600, 'H' => 3600, '10' => 3600];
    const LANGUAGE = ['D' => \App\Language::DE_ID, 'E' => \App\Language::EN_ID];
    const FALLBACK = \App\Language::DE_ID;

    private $location;
    private $customer;
    private $salesorder;
    private $salesorderItem;
    private $salesorderSubitem;
    private $productType;
    private $productSubtype;
    private $prodorder;

    public function __construct($data) {
        parent::__construct($this->prepare($data), Prodorder::rules());
    }

    private function prepare($data) {
        isset($data['Documents']) || $data['Documents'] = array();
        isset($data['NSPs']) || $data['NSPs'] = array();
        return $data;
    }

    /**
     * Start validation and saving of incoming sap production order data
     */
    public function process() {
        $this->validate() && $this->update();
    }

    private function update() {
        DB::beginTransaction();
        try {
            $this->updateProdorder();
            $this->syncProdorderOperations();
            $this->updateProdorderComponents();
            $this->updateProdorderDocuments();
            $this->updateProdorderNonstandards();
            DB::commit();
        } catch (\Exception $ex) {
            DB::rollBack();
            $this->setInternalServerError($ex->getMessage());
        }
    }

    private function updateProdorder() {
        $data = $this->data['ProductionOrder'];
        $this->prodorder = \App\Prodorder::firstOrNew(['prodorder_number' => $data['OrderNumber']]);
        $this->prodorder->productType()->associate($this->getProductType());
        $this->prodorder->productSubtype()->associate($this->getProductSubtype());
        $this->prodorder->location()->associate($this->getLocation());
        $this->prodorder->customer()->associate($this->getCustomer());
        $this->prodorder->salesorder()->associate($this->getSalesorder());
        $this->prodorder->salesorderItem()->associate($this->getSalesorderItem());
        $this->prodorder->prodorder_number = $data['OrderNumber'];
        $this->prodorder->order_type = $data['OrderType'];
        $this->prodorder->order_category = $data['OrderCategory'];
        $this->prodorder->basic_finish_date = $data['BasicFinishDate'];
        $this->prodorder->basic_start_date = $data['BasicStartDate'];
        $this->prodorder->scheduled_finish_date = $data['ScheduledFinishDate'];
        $this->prodorder->scheduled_start_date = $data['ScheduledStartDate'];
        $this->prodorder->save();
    }

    private function getLocation() {
        if (!$this->location)
            $this->location = \App\Location::unique()->where('plant', $this->data['ProductionOrder']['Plant'])->firstOrFail();
        return $this->location;
    }

    private function getSalesorder() {
        if (!$this->salesorder)
            $this->salesorder = \App\Salesorder::firstOrNew(['salesorder_number' => $this->data['ProductionOrder']['Items'][0]['CustomerOrderNumber']]);
        return $this->salesorder;
    }

    private function getSalesorderItem() {
        if (!$this->salesorderItem)
            $this->salesorderItem = $this->getSalesorder()->salesorderItems()->firstOrNew(['item_number' => $this->data['ProductionOrder']['Items'][0]['CustomerOrderItemNumber']]);
        return $this->salesorderItem;
    }

    private function getSalesorderSubitem() {
        if (!$this->salesorderSubitem)
            $this->salesorderSubitem = $this->getSalesorderItem()->children()->firstOrNew([]);
        return $this->salesorderSubitem;
    }

    private function getCustomer() {
        if (!$this->customer)
            $this->customer = $this->getSalesorder()->customer;
        return $this->customer;
    }

    private function getProductType() {
        if (!$this->productType) {
            $this->productType = \App\ProductType::firstOrNew(['material' => $this->data['ProductionOrder']['Material']]);
            $this->productType->setMaterialText($this->data['ProductionOrder']['MaterialTexts']);
            $this->productType->save();
        }
        return $this->productType;
    }

    private function getProductSubtype() {
        if (!$this->productSubtype) {
            $this->productSubtype = \App\ProductType::firstOrNew(['material' => $this->getSalesorderSubitem()->material]);
            $this->productSubtype->setMaterialText([['Language' => $this->getLocation()->language, 'Text' => $this->getSalesorderSubitem()->short_text]]);
            $this->productSubtype->parent()->associate($this->getProductType());
            $this->getSalesorderSubitem()->exists && $this->productSubtype->save();
        }
        return $this->productSubtype;
    }

    private function syncProdorderOperations() {
        $prodorderOperationIds = [];
        $this->prodorder->prodorderOperations()->withTrashed()->restore();
        foreach ($this->data['ProductionOrder']['Operations'] as $key => $data) {
            $prodorderOperationIds[] = $this->updateProdorderOperation($data)->id;
            $this->data['ProductionOrder']['Operations'][$key]['id'] = end($prodorderOperationIds);
        }
        $this->prodorder->prodorderOperations()->whereNotIn('id', $prodorderOperationIds)->delete();
    }

    private function updateProdorderOperation($data) {
        $operation = $this->prodorder->prodorderOperations()->firstOrNew(['completion_confirmation_number' => $data['CompletionConfirmationNumber']]);
        $operation->routing_number = $data['RoutingNumber'];
        $operation->general_counter = $data['GeneralCounter'];
        $operation->version = $data['Version'];
        $operation->latest_scheduled_date = $data['LatestScheduledDate'];
        $operation->work_center = $data['WorkCenter'];
        $operation->control_key = $data['ControlKey'];
        $operation->operation_long_text = $data['OperationLongText'];
        $operation->system_status = $data['SystemStatus'];
        $operation->external_item_identification = $data['ExternalItemIdentification'];
        $operation->duration = $this->getProdorderOperationDuration($data);
        $operation->prodorderOperationStep()->associate($this->getProdorderOperationStep($data));
        $operation->save();
        if ($operation->hasNoChecklistValues())
            $this->updateProdorderChecklists($data, $operation);
        return $operation;
    }

    private function getProdorderOperationDuration($data) {
        return $data['StandardValueUnit'] ? TimeHelper::timestampToTime(floatval($data['StandardValue']) * self::TIMEUNIT[$data['StandardValueUnit']]) : null;
    }

    private function getProdorderOperationStep($data) {
        return \App\ProdorderOperationStep::firstOrCreate([
                        'location_id' => $this->getLocation()->id,
                        'product_type_id' => $this->getProductType()->id,
                        'sequence_number' => $data['SequenceNo'],
                        'operation_number' => $data['OperationNumber'],
                        'operation_short_text' => $data['OperationShortText']
        ]);
    }

    private function updateProdorderChecklists($data, $operation) {
        $parser = new Parser();
        $parser->parse($data['OperationLongText']);
        $operation->prodorderChecklists()->delete();
        $operation->parsing_error = $parser->getErrorMessage();
        $operation->save();
        if ($parser->hasNoError())
            $parser->storeItems($operation->id);
    }

    private function updateProdorderComponents() {
        \App\ProdorderComponent::whereIn('id', $this->prodorder->prodorderComponents->modelKeys())->delete();        // required by hasManyThrough relation
        foreach ($this->data['ProductionOrder']['Components'] as $data)
            $this->updateProdorderComponent($data);
    }

    private function updateProdorderComponent($data) {
        $component = new \App\ProdorderComponent();
        $component->item_number = $data['ItemNumber'];
        $component->required_quantity = $data['RequiredQuantity'];
        $component->required_quantity_unit = $data['RequiredQuantityUnit'];
        $component->confirmed_quantity = $data['ConfirmedQuantity'];
        $component->confirmed_quantity_unit = $data['ConfirmedQuantityUnit'];
        $component->withdrawn_quantity = $data['WithdrawnQuantity'];
        $component->withdrawn_quantity_unit = $data['WithdrawnQuantityUnit'];
        $component->quantity_reservation_time = $data['QuantityReserverationTime'];
        $component->order_level = $data['OrderLevel'];
        $component->order_path = $data['OrderPath'];
        $component->bulk_material = $data['BulkMaterial'];
        $component->backflush = $data['Backflush'];
        $component->phantom_item = $data['PhantomItem'];
        $component->storage_location = $data['StorageLocation'];
        $component->external_item_identification = $data['ExternalItemIdentification'];
        $component->prodorderComponentText()->associate($this->getProdorderComponentText($data));
        $component->prodorderOperation()->associate($this->getProdorderOperation($data));
        $component->save();
    }

    private function getProdorderComponentText($data) {
        $text = \App\ProdorderComponentText::where('material', $data['Material'])->when(!$data['Material'], function ($query) use($data) {
                    $this->getProdorderComponentTextQuery($query, $data);
                })->firstOrNew([]);
        $text->material = $data['Material'];
        $text->setMaterialText($data['MaterialTexts']);
        $text->save();
        return $text;
    }

    private function getProdorderComponentTextQuery($query, $data) {
        $query->where(function ($query) use ($data) {
            foreach (LanguageHelper::cast($data['MaterialTexts']) as $language => $translation)
                $query->orWhere('material_text->' . $language, $translation);
        });
    }

    private function getProdorderOperation($data) {
        foreach ($this->data['ProductionOrder']['Operations'] as $operation) {
            if ($operation['SequenceNo'] == $data['SequenceNo'] && $operation['OperationNumber'] == $data['OperationNumber'])
                return new \App\ProdorderOperation(['id' => $operation['id']]);
        }
    }

    private function updateProdorderDocuments() {
        $this->prodorder->prodorderDocuments()->delete();
        foreach ($this->data['Documents'] as $data)
            $this->updateProdorderDocument($data);
    }

    private function updateProdorderDocument($data, $nonstandard = null) {
        $document = new \App\ProdorderDocument();
        $document->download_id = $data['DownloadId'];
        $document->title = $data['Title'];
        $document->filename = $data['Name'];
        $document->extension = $data['Type'];
        $document->prodorder()->associate($this->prodorder);
        $document->prodorderOperation()->associate($this->getProdorderOperation($data));
        $document->prodorderNonstandard()->associate($nonstandard);
        $document->language()->associate($this->getLanguage($data));
        $document->save();
    }

    private function getLanguage($data) {
        $languageId = array_key_exists($data['Language'], self::LANGUAGE) ? self::LANGUAGE[$data['Language']] : self::FALLBACK;
        return new \App\Language(['id' => $languageId]);
    }

    private function updateProdorderNonstandards() {
        $this->prodorder->prodorderNonstandards()->delete();
        foreach ($this->data['NSPs'] as $data)
            $this->updateProdorderNonstandard($data);
    }

    private function updateProdorderNonstandard($data) {
        $nonstandard = new \App\ProdorderNonstandard();
        $nonstandard->title = $data['Title'];
        $nonstandard->content = $data['Content'];
        $nonstandard->prodorder()->associate($this->prodorder);
        $nonstandard->prodorderOperation()->associate($this->getProdorderOperation($data));
        $nonstandard->save();
        $this->updateProdorderNonstandardDocuments($data, $nonstandard);
    }

    private function updateProdorderNonstandardDocuments($data, $nonstandard) {
        foreach ($data['Documents'] as $document) {
            $document['OperationNumber'] = $data['OperationNumber'];
            $document['SequenceNo'] = $data['SequenceNo'];
            $this->updateProdorderDocument($document, $nonstandard);
        }
    }

}
