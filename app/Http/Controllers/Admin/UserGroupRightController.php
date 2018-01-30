<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\UserGroupUserRight;
use App\UserRight;
use App\UserGroup;
use App\Library\QueryResult;

/**
 * Description of UserGroupRight
 */
class UserGroupRightController extends Controller {
    
    public function listAction() {
        $userGroupRights = UserGroupUserRight::select()->groupBy('user_group_id')->get();
        return view("admin.user.group.right.list", array("group_right_list" => $userGroupRights, 'currentUserId'=>Auth::user()->id));
    }

    public function editAction($id) {
        $userGroupRight = UserGroupUserRight::find($id);
        return view("admin.user.group.right.edit", array("formData" => $userGroupRight, "userGroupIds" => UserGroup::pluck('id'), "userGroupRights" => UserRight::pluck('id')));
    }

    public function newAction() {
        $userGroupAccess = new UserGroupUserRight();
        return view("admin.user.group.right.edit", array("formData" => $userGroupAccess, "userGroupIds" => UserGroup::pluck('id'), "userGroupRights" => UserRight::pluck('id')));
    }
    
    public function saveAction(Request $request) {
        
        $id = $request->get("id");
        $selectedRights = $request->get("selected_rights");
        if($id) // Update
        {
            UserGroupUserRight::where('user_group_id', '=', $request->get("user_group_id"))->delete();
        }
        else // Create - delete if user_group_id exists
        {
            if(UserGroupUserRight::select()->where('user_group_id', '=', $request->get("user_group_id"))->exists())
            {
                UserGroupUserRight::where('user_group_id', '=', $request->get("user_group_id"))->delete();
            }
        }
        // Create
        $status = true;
        foreach ($selectedRights as $rightId) {
            $userGroupRightObj = new UserGroupUserRight();
            $rez = $userGroupRightObj->saveFromRequest($request, $rightId);
            $status = $status && $rez;
        }
        
        if ($id) {
            $qrCode = ($status) ? QueryResult::UPDATE_SUCCESS : QueryResult::UPDATE_ERROR;
        } else {
            $qrCode = ($status) ? QueryResult::ADD_SUCCESS : QueryResult::ADD_ERROR;
        }
        $request->session()->put("QueryResult", $qrCode);
        return redirect()->route('ADMIN.USER.GROUP.rights');
    }

    public function deleteAction($userGroupId) {
        $userGroupRightObj = UserGroupUserRight::where('user_group_id', '=', $userGroupId);
        $status = $userGroupRightObj->delete();
        session()->put("QueryResult", ($status) ? QueryResult::DELETE_SUCCESS : QueryResult::DELETE_ERROR);
        return redirect()->route('ADMIN.USER.GROUP.rights');
    }
}
