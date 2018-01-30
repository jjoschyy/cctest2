<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProdorderOperationStep extends Model {

    protected $guarded = [];

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function location() {
        return $this->belongsTo(Location::class);
    }

    public function productType() {
        return $this->belongsTo(ProductType::class);
    }

    public function prodorderOperations() {
        return $this->hasMany(ProdorderOperation::class);
    }

    public function prodlineStations() {
        return $this->belongsToMany(ProdlineStation::class, 'prodline_station_step')->withTimestamps();
    }

}
