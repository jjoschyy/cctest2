<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProdlineStation extends Model {

    use SoftDeletes;

    protected $guarded = [];

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function prodline() {
        return $this->belongsTo(Prodline::class);
    }

    public function previous() {
        return $this->belongsTo(self::class, 'prev_station_id');
    }

    public function next() {
        return $this->belongsTo(self::class, 'next_station_id');
    }

    public function prodorderOperationSteps() {
        return $this->belongsToMany(ProdorderOperationStep::class, 'prodline_station_step')->withTimestamps();
    }

}
