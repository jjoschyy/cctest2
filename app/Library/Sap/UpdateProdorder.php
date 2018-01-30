<?php

namespace App\Library\Sap;

use App\Library\Helper\LanguageHelper;
use App\Library\Helper\TimeHelper;
use App\Library\Sap\Update;
use App\Http\Requests\Sap\Prodorder;
use Illuminate\Support\Facades\DB;

class UpdateProdorder extends Update {

    const FACTOR = ['MIN' => 60, 'STD' => 3600, 'H' => 3600, '10' => 3600];

    private $location;
    private $customer;
    private $salesorder;
    private $salesorderItem;
    private $salesorderSubItem;
    private $productType;
    private $productSubType;
    private $prodorder;
    private $prodorderOperationIds;
    private $prodorderComponentIds;

    public function __construct($data) {
        parent::__construct($data, Prodorder::rules());
        $this->prodorderOperationIds = array();
        $this->prodorderComponentIds = array();
    }

    public function process() {
        $this->validate() && $this->update();
    }

    private function update() {
        DB::beginTransaction();
        try {
            $this->updateProdorder();
            $this->updateProdorderOperations();
            $this->updateProdorderComponents();
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
        $this->prodorder->productSubType()->associate($this->getProductSubType());
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

    private function getSalesorderSubItem() {
        if (!$this->salesorderSubItem)
            $this->salesorderSubItem = $this->getSalesorderItem()->children()->firstOrNew([]);
        return $this->salesorderSubItem;
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

    private function getProductSubType() {
        if (!$this->productSubType) {
            $this->productSubType = \App\ProductType::firstOrNew(['material' => $this->getSalesorderSubItem()->material]);
            $this->productSubType->setMaterialText([['Language' => $this->getLocation()->language, 'Text' => $this->getSalesorderSubItem()->short_text]]);
            $this->productSubType->parent()->associate($this->getProductType());
            $this->getSalesorderSubItem()->exists && $this->productSubType->save();
        }
        return $this->productSubType;
    }

    private function updateProdorderOperations() {
        $this->prodorder->prodorderOperations()->restore();
        foreach ($this->data['ProductionOrder']['Operations'] as $key => $data) {
            $operation = $this->updateProdorderOperation($data);
            $this->prodorderOperationIds[] = $operation->id;
            $this->data['ProductionOrder']['Operations'][$key]['id'] = $operation->id;
        }
        $this->prodorder->prodorderOperations()->whereNotIn('id', $this->prodorderOperationIds)->delete();
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
        $operation->duration = $this->getOperationDuration($data);
        $operation->prodorderOperationStep()->associate($this->getProdorderOperationStep($data));
        $operation->save();
        return $operation;
    }

    private function getOperationDuration($data) {
        return $data['StandardValueUnit'] ? TimeHelper::timestampToTime(floatval($data['StandardValue']) * self::FACTOR[$data['StandardValueUnit']]) : null;
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

    private function updateProdorderComponents() {
//        $this->prodorder->prodorderComponents()->restore();
        $this->prodorder->prodorderComponents()->delete();
        foreach ($this->data['ProductionOrder']['Components'] as $data) {
            $this->prodorderComponentIds[] = $this->updateProdorderComponent($data)->id;
        }
//        $this->prodorder->prodorderComponents()->whereNotIn('id', $this->prodorderComponentIds)->delete();
    }

    private function updateProdorderComponent($data) {
        $component = $this->prodorder->prodorderComponents()->firstOrNew(['item_number' => $data['ItemNumber']]);
//        $component = new \App\ProdorderComponent();   
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
        return $component;
    }

    private function getProdorderComponentText($data) {
        $text = \App\ProdorderComponentText::where('material', $data['Material'])->when(!$data['Material'], function ($query) use($data) {
                    $query->where(function ($query) use ($data) {
                        $this->getTextpositionQuery($query, $data);
                    });
                })->firstOrNew([]);
        $text->setMaterialText($data['MaterialTexts']);
        $text->save();
        return $text;
    }

    private function getTextpositionQuery($query, $data) {
        foreach (LanguageHelper::cast($data['MaterialTexts']) as $language => $translation) {
            $query->orWhere('material_text->' . $language, $translation);
        }
        return $query;
    }

    private function getProdorderOperation($data) {
        foreach ($this->data['ProductionOrder']['Operations'] as $operation) {
            if ($operation['SequenceNo'] == $data['SequenceNo'] && $operation['OperationNumber'] == $data['OperationNumber'])
                return new \App\ProdorderOperation(['id' => $operation['id']]);
        }
    }

}
