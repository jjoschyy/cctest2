<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Language extends Model {

    const DE = 'de';
    const EN = 'en';

    protected $guarded = [];

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function users() {
        return $this->hasMany(User::class);
    }

    public function locations() {
        return $this->hasMany(Location::class);
    }

}
