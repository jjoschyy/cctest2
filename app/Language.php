<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Language extends Model {

    const DE = 'de';
    const EN = 'en';
    const DE_ID = 1;
    const EN_ID = 2;

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

    public function prodorderDocuments() {
        return $this->hasMany(ProdorderDocument::class);
    }

}
