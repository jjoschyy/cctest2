<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Library\Helper\LanguageHelper;

class Country extends Model {

    const FLAGS = ['50' => 'china', '108' => 'india', '236' => 'united-states', '59' => 'germany'];

    protected $guarded = [];
    protected $casts = ['title_text' => 'array'];

    public function flag() {
        return self::FLAGS[$this->id];
    }

    /////////////////////////////////////////
    // language getter & setter
    /////////////////////////////////////////
    public function getTitleText($lang = null) {
        return LanguageHelper::get($this->title_text, $lang);
    }

    public function setTitleText(array $data) {
        $this->title_text = LanguageHelper::set($data, $this->title_text);
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
