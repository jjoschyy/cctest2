<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model {

    const FLAGS = ['50' => 'china', '108' => 'india', '236' => 'united-states', '59' => 'germany'];

    protected $guarded = [];

    public function title() {
        return __(sprintf('countries.%s', $this->iso_code));
    }

    public function flag() {
        return self::FLAGS[$this->id];
    }

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function locations() {
        return $this->hasMany(Location::class);
    }

    public function users() {
        return $this->hasManyThrough(User::class, Location::class);
    }

}
