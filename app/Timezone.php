<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Timezone extends Model {

    protected $guarded = [];

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function locations() {
        return $this->hasMany(Location::class);
    }

}
