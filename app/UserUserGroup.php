<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\Pivot;
use App\Library\Helper\LocationHelper;

class UserUserGroup extends Pivot {

    protected $guarded = [];
    protected $casts = ['location_id_list' => 'array'];

    /////////////////////////////////////////
    // location check
    /////////////////////////////////////////
    public function hasLocation($location) {
        return LocationHelper::check($this->location_id_list, $location);
    }
    
    public function getGroupsIds() {
        return implode(",", $this::where('user_id', '=', $this->user_id)->pluck('user_group_id')->toArray());
    }
    
    public function getSelectedLocationList($type = false) {
        return Helper::getSelectedLocationList($this, $type);
    }
    
    public function getSelectedGroupList($type = false) {
        $user_GroupList = explode(",", $this->getGroupsIds());
        $groupList = UserGroup::getGroupList($type);
        switch ($type) {
            case "form":
                foreach ($groupList as $key => $item) {
                    if (in_array($item['value'], $user_GroupList)) {
                        $groupList[$key]['selected'] = true;
                    }
                }
                break;
            default:
                foreach ($groupList as $key => $item) {
                    if (!in_array($item->id, $user_GroupList)) {
                        unset($groupList[$key]);
                    }
                }
                break;
        }
        return $groupList;
    }
    
    /**
     * Save User Group Accesses items from Request
     * @param Request $request
     * @return type
     */
    public function saveFromRequest(Request $request,int $groupId) {
        $selectedLocations = implode(",", $request->get("selected_locations"));
        
        $this->setAttribute("user_id", $request->get("user_id"));
        $this->setAttribute("user_group_id", $groupId);
        $this->setAttribute("location_ids", $selectedLocations);
        return $this->save();
    }    

}
