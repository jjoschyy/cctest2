<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class UserGroup extends Model {

    protected $guarded = [];

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function userRights() {
        return $this->belongsToMany(UserRight::class)->withTimestamps();
    }

    public function users() {
        return $this->belongsToMany(User::class)->using(UserUserGroup::class)->withPivot('location_id_list')->withTimestamps();
    }

    
    
    
    static public function getGroupList($type = false) {
        $groupList = UserGroup::all();
        switch ($type) {
            case "form":
                $formList = array();
                foreach ($groupList as $item) {
                    $formList[] = array(
                            "value" => $item->id,
                            "name" => $item->name,
                    );
                }
                break;
            default:
                $formList = $this->all();
                break;
        }
        return $formList;
    }

    /**
     * Save User Group item from Request
     * @param Request $request
     * @return type
     */
    public function saveFromRequest(Request $request) {
        $isNew = $request->get("id") ? FALSE : TRUE;

        $this->setAttribute("name", $request->get("name"));
        $this->setAttribute("description", $request->get("description"));
        return array("obj" => $this, "status" => ($isNew) ? $this->save() : $this->update());
    }

}
