<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Library\Helper\LanguageHelper;

class ProductType extends Model {

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
    public function productGroup() {
        return $this->belongsTo(ProductGroup::class);
    }

    public function parent() {
        return $this->belongsTo(self::class);
    }

    public function children() {
        return $this->hasMany(self::class, 'parent_id');
    }

    public function prodorders() {
        return $this->hasMany(Prodorder::class);
    }

    public function subProdorders() {
        return $this->hasMany(Prodorder::class, 'product_subtype_id');
    }

    public function prodorderOperationSteps() {
        return $this->hasMany(ProdorderOperationStep::class);
    }

}
