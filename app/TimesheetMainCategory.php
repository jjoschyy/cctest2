<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Library\Helper\LanguageHelper;
use App\Library\Helper\LocationHelper;

class TimesheetMainCategory extends Model {

    use SoftDeletes;

    protected $guarded = [];
    protected $casts = ['title_text' => 'array', 'description_text' => 'array', 'location_id_list' => 'array'];

    /////////////////////////////////////////
    // language getter & setter
    /////////////////////////////////////////
    public function getTitleText($lang = null) {
        return LanguageHelper::get($this->title_text, $lang);
    }

    public function setTitleText(array $data) {
        $this->title_text = LanguageHelper::set($data, $this->title_text);
    }

    public function getDescriptionText($lang = null) {
        return LanguageHelper::get($this->description_text, $lang);
    }

    public function setDescriptionText(array $data) {
        $this->description_text = LanguageHelper::set($data, $this->description_text);
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
    public function prodorderStatus() {
        return $this->belongsTo(ProdorderStatus::class);
    }

    public function timesheets() {
        return $this->hasMany(Timesheet::class);
    }

    public function timesheetSubCategories() {
        return $this->hasMany(TimesheetSubCategory::class);
    }

}
