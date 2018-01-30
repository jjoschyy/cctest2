<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Library\Helper\LanguageHelper;
use App\Library\Helper\LocationHelper;

class ProdorderChecklistLookup extends Model {

    use SoftDeletes;

    protected $guarded = [];
    protected $casts = ['title_text' => 'array', 'location_id_list' => 'array'];

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
    // location check
    /////////////////////////////////////////
    public function hasLocation($location) {
        return LocationHelper::check($this->location_id_list, $location);
    }

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function parent() {
    return $this->belongsTo(self::class);

    }

public function children() {
    return $this->hasMany(self::class, 'parent_id');
}

}
