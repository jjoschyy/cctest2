<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prodorder extends Model {

    protected $guarded = [];
    protected $dates = ['basic_finish_date', 'basic_start_date', 'scheduled_finish_date', 'scheduled_start_date'];

    /**
     * Return serial number of production order retrieved out of related sales order subitem     
     */
    public function serialNumber() {
        return $this->salesorderSubitem() ? $this->salesorderSubitem()->serial_number : null;
    }

    public function prodlineTitle() {
        return $this->prodline()->value('title');
    }

    public function prodlineStallTitle() {
        return $this->prodlineStall()->value('title');
    }

    public function productTypeTitle() {
        return $this->productType ? $this->productType->getMaterialText() : null;     // temporary necessary because of inconsistent test data that causes invalid product type relations
    }
    
    public function productSubTypeTitle() {
        return $this->productSubType ? $this->productSubType->getMaterialText() : null;     // temporary necessary because of inconsistent test data that causes invalid product type relations
    }    

    public function salesorderSubItem() {
        return $this->salesorderItem ? $this->salesorderItem->children()->first() : null;
    }

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function productType() {
        return $this->belongsTo(ProductType::class);
    }

    public function productSubtype() {
        return $this->belongsTo(ProductType::class);
    }

    public function location() {
        return $this->belongsTo(Location::class);
    }

    public function customer() {
        return $this->belongsTo(Customer::class);
    }

    public function salesorder() {
        return $this->belongsTo(Salesorder::class);
    }

    public function salesorderItem() {
        return $this->belongsTo(SalesorderItem::class);
    }

    public function prodlineStall() {
        return $this->belongsTo(ProdlineStall::class);
    }

    public function prodline() {
        return $this->belongsTo(Prodline::class);
    }

    public function prodorderChecklists() {
        return $this->hasManyThrough(ProdorderChecklist::class, ProdorderOperation::class);
    }

    public function prodorderComponents() {
        return $this->hasManyThrough(ProdorderComponent::class, ProdorderOperation::class);
    }

    public function prodorderOperations() {
        return $this->hasMany(ProdorderOperation::class);
    }

    public function timesheets() {
        return $this->hasManyThrough(Timesheet::class, ProdorderOperation::class);
    }

    public function prodorderDocuments() {
        return $this->hasMany(ProdorderDocument::class);
    }

    public function prodorderNonstandards() {
        return $this->hasMany(ProdorderNonstandard::class);
    }

}
