<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProdlineStall extends Model {

    use SoftDeletes;

    protected $guarded = [];
    
    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function prodline() {
        return $this->belongsTo(Prodline::class);
    }
    
    public function prodorders() {
        return $this->hasMany(Prodorder::class);
    }    

}
