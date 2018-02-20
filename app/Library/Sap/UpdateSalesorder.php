<?php

namespace App\Library\Sap;

use App\Library\Sap\Update;
use App\Http\Requests\Sap\Salesorder;
use Illuminate\Support\Facades\DB;

class UpdateSalesorder extends Update {

    private $customer;
    private $salesorder;

    public function __construct($data) {
        parent::__construct($data, Salesorder::rules());
    }

    /**
     * Start validation and saving of incoming sap sales order data
     */
    public function process() {
        $this->validate() && $this->update();
    }

    private function update() {
        DB::beginTransaction();
        try {
            $this->updateCustomer();
            $this->updateSalesorder();
            $this->syncSalesorderItems();
            $this->updateSalesorderPartners();
            DB::commit();
        } catch (\Exception $ex) {
            DB::rollBack();
            $this->setInternalServerError($ex->getMessage());
        }
    }

    private function updateCustomer() {
        $data = $this->data['SalesOrder']['SoldToCustomer'];
        $this->customer = \App\Customer::firstOrNew(['customer_number' => $data['CustomerNumber']]);
        $this->customer->country = $data['Country'];
        $this->customer->name1 = $data['Name1'];
        $this->customer->name2 = $data['Name2'];
        $this->customer->city = $data['City'];
        $this->customer->postal_code = $data['PostalCode'];
        $this->customer->region = $data['Region'];
        $this->customer->street_address = $data['StreetAddress'];
        $this->customer->location_number_part1 = $data['LocationNumberPart1'];
        $this->customer->location_number_part2 = $data['LocationNumberPart2'];
        $this->customer->save();
    }

    private function updateSalesorder() {
        $data = $this->data['SalesOrder'];
        $this->salesorder = \App\SalesOrder::firstOrNew(['salesorder_number' => $data['SalesOrderNumber']]);
        $this->salesorder->sales_org = $data['SalesOrg'];
        $this->salesorder->distr_chann = $data['DistrChann'];
        $this->salesorder->sales_office = $data['SalesOffice'];
        $this->salesorder->division = $data['Division'];
        $this->salesorder->shipping_plant = $data['ShippingPlant'];
        $this->salesorder->document_category = $data['DocumentCategory'];
        $this->salesorder->document_type = $data['DocumentType'];
        $this->salesorder->order_reason = $data['OrderReason'];
        $this->salesorder->net_value = $data['NetValue'];
        $this->salesorder->document_currency = $data['DocumentCurrency'];
        $this->salesorder->customer_purchase_order_number = $data['CustomerPurchaseOrderNumber'];
        $this->salesorder->customer_purchase_order_type = $data['CustomerPurchaseOrderType'];
        $this->salesorder->customer_purchase_order_date = $data['CustomerPurchaseOrderDate'];
        $this->salesorder->requested_delivery_date = $data['RequestedDeliveryDate'];
        $this->salesorder->non_standard_product = $data['NonStandardProduct'];
        $this->salesorder->header_note1 = $data['HeaderNote1'];
        $this->salesorder->header_note2 = $data['HeaderNote2'];
        $this->salesorder->header_note3 = $data['HeaderNote3'];
        $this->salesorder->header_note4 = $data['HeaderNote4'];
        $this->salesorder->other_contractual_stipulations = $data['OtherContractualStipulations'];
        $this->salesorder->customer()->associate($this->customer);
        $this->salesorder->location()->associate($this->getLocation());
        $this->salesorder->save();
        $this->salesorder = $this->salesorder;
    }

    private function getLocation() {
        return \App\Location::unique()->where('plant', $this->data['SalesOrder']['Plant'])->firstOrFail();
    }

    private function syncSalesorderItems() {
        $salesorderItemIds = [];
        $this->salesorder->salesorderItems()->withTrashed()->restore();
        foreach ($this->data['SalesOrder']['Items'] as $key => $data) {
            $salesorderItemIds[] = $this->updateSalesorderItem($data)->id;
            $this->data['SalesOrder']['Items'][$key]['id'] = end($salesorderItemIds);            
        }
        $this->salesorder->salesorderItems()->whereNotIn('id', $salesorderItemIds)->delete();
    }

    private function updateSalesorderItem($data) {
        $item = $this->salesorder->salesorderItems()->firstOrNew(['item_number' => $data['ItemNumber']]);
        $item->material = $data['Material'];
        $item->material_group = $data['MaterialGroup'];
        $item->short_text = $data['ShortText'];
        $item->required_quantity = $data['RequiredQuantity'];
        $item->required_quantity_unit = $data['RequiredQuantityUnit'];
        $item->quantity = $data['Quantity'];
        $item->quantity_unit = $data['QuantityUnit'];
        $item->serial_number = $data['SerialNumber'];
        $item->rejection_reason = $data['RejectionReason'];
        $item->item_category = $data['ItemCategory'];
        $item->item_type = $data['ItemType'];
        $item->inco_terms1 = $data['IncoTerms1'];
        $item->inco_terms2 = $data['IncoTerms2'];
        $item->schedule_lines = $data['ScheduleLines'];
        $item->parent()->associate($this->getSalesorderItem($data));
        $item->save();
        return $item;
    }

    private function getSalesorderItem($data) {
        foreach ($this->data['SalesOrder']['Items'] as $item) {
            if ($item['ItemNumber'] == $data['HigherLevelItemNumber'])
                return new \App\SalesorderItem(['id' => $item['id']]);
        }
    }

    private function updateSalesorderPartners() {
        $this->salesorder->salesorderPartners()->delete();
        foreach ($this->data['SalesOrder']['Partners'] as $data)
            $this->updateSalesorderPartner($data);
    }

    private function updateSalesorderPartner($data) {
        $partner = new \App\SalesorderPartner();
        $partner->item_number = $data['ItemNumber'];
        $partner->partner_function = $data['PartnerFunction'];
        $partner->customer_number = $data['CustomerNumber'];
        $partner->country = $data['Country'];
        $partner->name1 = $data['Name1'];
        $partner->name2 = $data['Name2'];
        $partner->city = $data['City'];
        $partner->postal_code = $data['PostalCode'];
        $partner->region = $data['Region'];
        $partner->street_address = $data['StreetAddress'];
        $partner->location_number_part1 = $data['LocationNumberPart1'];
        $partner->location_number_part2 = $data['LocationNumberPart2'];
        $partner->salesorder()->associate($this->salesorder);
        $partner->save();
    }

}
