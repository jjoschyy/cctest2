<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserRight extends Model {

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function userGroups() {
        return $this->belongsToMany(UserGroup::class)->withTimestamps();
    }

    
    
    static public function getRightList($type = false) {
        $rightList = UserRight::all();
        switch ($type) {
            case "form":
                $formList = array();
                foreach ($rightList as $item) {
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
     * Save Permission item from Request
     * @param Request $request
     * @return type
     */
    public function saveFromRequest(Request $request) {
        $isNew = $request->get("id") ? FALSE : TRUE;
        
        $this->setAttribute("name", $request->get("name"));
        $this->setAttribute("module", $request->get("module"));
        $this->setAttribute("type", $request->get("type"));
        $this->setAttribute("param_a", $request->get("param_a"));
        $this->setAttribute("param_b", $request->get("param_b"));
        return array("obj" => $this, "status" => ($isNew) ? $this->save() : $this->update());
    }
}
