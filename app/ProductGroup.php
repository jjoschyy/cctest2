<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Library\Helper\LanguageHelper;

class ProductGroup extends Model {

    protected $guarded = [];
    protected $casts = ['title_text' => 'array'];

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
    public function productTypes() {
        return $this->hasMany(ProductType::class);
    }

}
