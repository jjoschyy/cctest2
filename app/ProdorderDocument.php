<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProdorderDocument extends Model {

    protected $guarded = [];

    /////////////////////////////////////////
    // local scopes
    /////////////////////////////////////////
    public function scopeWithoutNonstandards($query) {
        return $query->whereNull('prodorder_nonstandard_id');
    }

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function prodorder() {
        return $this->belongsTo(Prodorder::class);
    }

    public function prodorderOperation() {
        return $this->belongsTo(ProdorderOperation::class);
    }

    public function prodorderNonstandard() {
        return $this->belongsTo(ProdorderNonstandard::class);
    }

    public function language() {
        return $this->belongsTo(Language::class);
    }

}
