<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

use Encore\Admin\Traits\AdminBuilder;
use Encore\Admin\Traits\ModelTree;


class Menue extends Model {
    use AdminBuilder, ModelTree;
    protected $guarded = [];


    public function parent(){
      return $this->belongsTo(self::class);
    }


    public function children(){
      return $this->hasMany(self::class, 'parent_id');
    }
}
