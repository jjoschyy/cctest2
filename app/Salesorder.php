<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Salesorder extends Model {

    protected $guarded = [];

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function customer() {
        return $this->belongsTo(Customer::class);
    }

    public function location() {
        return $this->belongsTo(Location::class);
    }

    public function salesorderPartners() {
        return $this->hasMany(SalesorderPartner::class);
    }

    public function salesorderItems() {
        return $this->hasMany(SalesorderItem::class);
    }

    public function prodorders() {
        return $this->hasMany(Prodorder::class);
    }

}
