<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProdorderOperation extends Model {

    use SoftDeletes;

    protected $guarded = [];
    protected $dates = ['latest_scheduled_date'];

    public function hasNoChecklistValues() {
        return !$this->prodorderChecklists()->filled()->exists();
    }

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function prodorder() {
        return $this->belongsTo(Prodorder::class);
    }

    public function prodorderOperationStep() {
        return $this->belongsTo(ProdorderOperationStep::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function prodorderStatuses() {
        return $this->belongsToMany(ProdorderStatus::class, 'prodorder_operation_status')->withTimestamps();
    }

    public function prodorderChecklists() {
        return $this->hasMany(ProdorderChecklist::class);
    }

    public function prodorderComponents() {
        return $this->hasMany(ProdorderComponent::class);
    }

    public function timesheets() {
        return $this->hasMany(Timesheet::class);
    }

    public function prodorderDocuments() {
        return $this->hasMany(ProdorderDocument::class);
    }

    public function prodorderNonstandards() {
        return $this->hasMany(ProdorderNonstandard::class);
    }

}
