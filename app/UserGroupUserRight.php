<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Http\Request;

class UserGroupUserRight extends Pivot {
        
    public function getRightsIds() {
        return implode(",", $this::where('user_group_id', '=', $this->user_group_id)->pluck('user_right_id')->toArray());
    }
    
    public function getSelectedRightList($type = false) {
        $user_RightList = explode(",", $this->getRightsIds());
        $rightList = UserRight::getRightList($type);
        switch ($type) {
            case "form":
                foreach ($rightList as $key => $item) {
                    if (in_array($item['value'], $user_RightList)) {
                        $rightList[$key]['selected'] = true;
                    }
                }
                break;
            default:
                foreach ($rightList as $key => $item) {
                    if (!in_array($item->id, $user_RightList)) {
                        unset($rightList[$key]);
                    }
                }
                break;
        }
        return $rightList;
    }
    
    /**
     * Save User Group Rights items from Request
     * @param Request $request
     * @return type
     */
    public function saveFromRequest(Request $request, int $rightId) {
        $this->setAttribute("user_group_id", $request->get("user_group_id"));
        $this->setAttribute("user_right_id", $rightId);
        return $this->save();
    }
    
}
