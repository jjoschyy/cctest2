<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model {

    protected $guarded = [];

    public static function getLocationList($type = false) {
        $locationList = \App\Location::all();
        switch ($type) {
            case "form":
                $formList = array();
                foreach ($locationList as $item) {
                    $formList[] = array(
                            "value" => $item->id,
                            "name" => $item->title,
                    );
                }
                break;
            default:
                $formList = $locationList->all();
                break;
        }
        return $formList;
    }

    /////////////////////////////////////////
    // local scopes
    /////////////////////////////////////////
    public function scopeUnique($query) {
        // no separate plant number for id=1 (Oberkochen), id=4 (Wangen), id=6 (Ebnat), id=7 (Bochingen)
        return $query->whereNotIn('id', [4, 6, 7]);
    }

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function country() {
        return $this->belongsTo(Country::class);
    }

    public function language() {
        return $this->belongsTo(Language::class);
    }

    public function timezone() {
        return $this->belongsTo(Timezone::class);
    }

    public function users() {
        return $this->hasMany(User::class);
    }

    public function salesorders() {
        return $this->hasMany(Salesorder::class);
    }

    public function prodorders() {
        return $this->hasMany(Prodorder::class);
    }

    public function prodlines() {
        return $this->hasMany(Prodline::class);
    }

    public function prodorderOperationSteps() {
        return $this->hasMany(ProdorderOperationStep::class);
    }

    public function timesheets() {
        return $this->hasMany(Timesheet::class);
    }

}
