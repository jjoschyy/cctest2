<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Library\Helper\LanguageHelper;

class ProdorderComponentText extends Model {

    protected $guarded = [];
    protected $casts = ['material_text' => 'array'];

    /////////////////////////////////////////
    // language getter & setter
    /////////////////////////////////////////
    public function getMaterialText($lang = null) {
        return LanguageHelper::get($this->material_text, $lang);
    }

    public function setMaterialText(array $data) {
        $this->material_text = LanguageHelper::set($data, $this->material_text);
    }

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function prodorderComponents() {
        return $this->hasMany(ProdorderComponent::class);
    }

}
