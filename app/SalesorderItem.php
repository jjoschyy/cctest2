<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SalesorderItem extends Model {

    use SoftDeletes;

    protected $guarded = [];
    protected $casts = ['schedule_lines'=>'array'];

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function salesorder() {
        return $this->belongsTo(Salesorder::class);
    }

    public function parent() {
        return $this->belongsTo(self::class);
    }

    public function children() {
        return $this->hasMany(self::class, 'parent_id');
    }

    public function prodorder() {
        return $this->hasMany(Prodorder::class);
    }

}
