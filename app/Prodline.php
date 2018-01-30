<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Prodline extends Model {

    use SoftDeletes;

    protected $guarded = [];

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function location() {
        return $this->belongsTo(Location::class);
    }

    public function prodlineStalls() {
        return $this->hasMany(ProdlineStall::class);
    }

    public function prodlineStations() {
        return $this->hasMany(ProdlineStation::class);
    }

}
