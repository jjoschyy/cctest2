<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Timesheet extends Model {

    protected $guarded = [];
    protected $dates = ['start_time', 'real_start_time', 'stop_time', 'real_stop_time'];

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function location() {
        return $this->belongsTo(Location::class);
    }

    public function prodorder() {
        return $this->belongsTo(Prodorder::class);
    }

    public function prodorderOperation() {
        return $this->belongsTo(ProdorderOperation::class);
    }

    public function timesheetMainCategory() {
        return $this->belongsTo(TimesheetMainCategory::class);
    }

    public function timesheetSubCategory() {
        return $this->belongsTo(TimesheetSubCategory::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

}
