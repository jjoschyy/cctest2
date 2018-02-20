<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model {

    protected $guarded = [];

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function salesorders() {
        return $this->hasMany(Salesorder::class);
    }

    public function prodorders() {
        return $this->hasMany(Prodorder::class);
    }

}
