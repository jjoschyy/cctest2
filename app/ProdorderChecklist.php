<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProdorderChecklist extends Model {

    protected $guarded = [];

    public function prodorder() {
        return $this->prodorderOperation->prodorder;
    }
    
    /////////////////////////////////////////
    // local scopes
    /////////////////////////////////////////
    public function scopeFilled($query) {
        return $query->whereNotNull('value');
    }

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function prodorderOperation() {
        return $this->belongsTo(ProdorderOperation::class);
    }

}
