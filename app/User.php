<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Language;
use App\Location;
use Illuminate\Http\Request;

class User extends Authenticatable {

    use Notifiable;
    use SoftDeletes;

    protected $fillable = [
            'name', 'first_name', 'last_name', 'employee_number', 'email', 'password',
    ];
    protected $hidden = [
            'password', 'remember_token',
    ];
    private $userRights = [
    ];

    /////////////////////////////////////////
    // public functions
    /////////////////////////////////////////
    public function getPhoneNumber($lastNumber = null) {
        return $this->phone ?: ($this->superior->phone ?: $lastNumber);
    }

    /**
     * Eloquent: Mutator
     */
    public function getFullNameAttribute($value)
    {
       return $this->name . ': ' . $this->last_name . ' ' . $this->first_name;
    }
    
    public function hasAccess($module, $title) {
        $rights = $this->getUserRights();
        return isset($rights[$module][$title]);
    }

    public function getUserRights() {
        return $this->userRights ?: $this->setUserRights();
    }

    private function setUserRights() {
        foreach ($this->userGroups as $group) {
            foreach ($group->userRights as $right) {
                $this->userRights[$right->module][$right->title] = true;
            }
        }
        return $this->userRights;
    }

    public function getLocationList($type = false) {
        switch ($type) {
            case "form":
                $formList = array();
                foreach (Location::select('id','name')->get() as $item) {
                    $formList[] = array(
                        "value" => $item->id,
                        "name" => $item->name,
                    );
                }
                break;
            default:
                $formList = Location::get();
                break;
        }
        return $formList;
    }
    
    public function getLanguageList($type = false) {
        switch ($type) {
            case "form":
                $formList = array();
                foreach (Language::select('id','name')->get() as $item) {
                    $formList[] = array(
                        "value" => $item->id,
                        "name" => $item->name,
                    );
                }
                break;
            default:
                $formList = Location::get();
                break;
        }
        return $formList;
    }
    
    public function getSuperiorList($type = false) {
        switch ($type) {
            case "form":
                $formList = array();
                foreach (User::all()->where('superior_id', '!=', 0)->sortBy("full_name") as $item) {
                    $formList[] = array(
                        "value" => $item->id,
                        "name" => $item->full_name,
                    );
                }
                break;
            default:
                $formList = Location::get();
                break;
        }
        return $formList;
    }
    
    public function getFullName() {
        return $this->first_name . " " . $this->last_name;
    }
    
    public function getLocationName() {
        return Location::find($this->location_id)->name;
    }
    
    public function getLanguageName() {
        return Language::find($this->language_id)->name;
    }
    
    public function getSuperior() {
        return ($this->superior_id) ? \App\User::find($this->superior_id) : new \App\User();
    }
    
    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function location() {
        return $this->belongsTo(Location::class);
    }

    public function language() {
        return $this->belongsTo(Language::class);
    }

    public function superior() {
        return $this->belongsTo(self::class);
    }

    public function members() {
        return $this->hasMany(self::class, 'superior_id');
    }

    public function prodorderOperations() {
        return $this->hasMany(ProdorderOperation::class);
    }

    public function timesheets() {
        return $this->hasMany(Timesheet::class);
    }

    public function userGroups() {
        return $this->belongsToMany(UserGroup::class)->using(UserUserGroup::class)->withPivot('location_id_list')->withTimestamps();
    }
    
    /**
     * Save User from Request
     * @param Request $request
     * @return type
     */
    public function saveFromRequest(Request $request) {
        $isNew = $request->get("id") ? FALSE : TRUE;

        $this->setAttribute("name", $request->get("name"));
        $this->setAttribute("email", $request->get("email"));
        $this->setAttribute("first_name", $request->get("first_name"));
        $this->setAttribute("last_name", $request->get("last_name"));
        $this->setAttribute("employee_number", $request->get("employee_number"));
        $this->setAttribute("cost_center", $request->get("cost_center"));
        $this->setAttribute("superior_id", $request->get("superior_id"));
        $this->setAttribute("is_active", $request->get("is_active"));
        $this->setAttribute("language_id", $request->get("language_id"));
        $this->setAttribute("location_id", $request->get("location_id"));
        return array("obj" => $this, "status" => ($isNew) ? $this->save() : $this->update());
    }

}
