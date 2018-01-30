<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prodorder extends Model {

    protected $guarded = [];
    protected $dates = ['basic_finish_date','basic_start_date','scheduled_finish_date','scheduled_start_date'];
    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function productType() {
        return $this->belongsTo(ProductType::class);
    }

    public function productSubType() {
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

    public function prodorderComponents() {
        return $this->hasMany(ProdorderComponent::class);
    }

    public function prodorderOperations() {
        return $this->hasMany(ProdorderOperation::class);
    }

    public function timesheets() {
        return $this->hasMany(Timesheet::class);
    }

}
