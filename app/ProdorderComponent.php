<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProdorderComponent extends Model {

    protected $guarded = [];

    public function prodorder() {
        return $this->prodorderOperation->prodorder;
    }

    public function material() {
        return $this->prodorderComponentText->material;
    }

    public function materialText($lang = null) {
        return $this->prodorderComponentText->getMaterialText($lang);
    }

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function prodorderOperation() {
        return $this->belongsTo(ProdorderOperation::class);
    }

    public function prodorderComponentText() {
        return $this->belongsTo(ProdorderComponentText::class);
    }

}
