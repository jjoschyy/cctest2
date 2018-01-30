<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProdorderChecklist extends Model {

    protected $guarded = [];

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function prodorderOperation() {
        return $this->belongsTo(ProdorderOperation::class);
    }

}
