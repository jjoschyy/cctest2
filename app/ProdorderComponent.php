<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
//use Illuminate\Database\Eloquent\SoftDeletes;

class ProdorderComponent extends Model {

//    use SoftDeletes;

    protected $guarded = [];

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function prodorder() {
        return $this->belongsTo(Prodorder::class);
    }

    public function prodorderOperation() {
        return $this->belongsTo(ProdorderOperation::class);
    }

    public function prodorderComponentText() {
        return $this->belongsTo(ProdorderComponentText::class);
    }

}
