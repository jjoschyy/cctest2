<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProdorderNonstandard extends Model {

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

    public function prodorderDocuments() {
        return $this->hasMany(ProdorderDocument::class);
    }

}
