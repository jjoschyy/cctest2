<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Library\Helper\LanguageHelper;

class ProdorderStatus extends Model {

    use SoftDeletes;

    const FINISHED = 3;

    protected $guarded = [];
    protected $casts = ['title_text' => 'array'];

    /////////////////////////////////////////
    // local scopes
    /////////////////////////////////////////
    public function scopeOrderPivotDesc($query) {
        return $query->orderBy('prodorder_operation_status.created_at', 'desc');
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
    public function prodorderOperations() {
        return $this->belongsToMany(ProdorderOperation::class, 'prodorder_operation_status')->withTimestamps();
    }

    public function timesheetMainCategories() {
        return $this->hasMany(TimesheetMainCategory::class);
    }

}
