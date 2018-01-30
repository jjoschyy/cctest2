<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SalesorderPartner extends Model {

    protected $guarded = [];

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function salesorder() {
        return $this->belongsTo(Salesorder::class);
    }

}
