<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\UserGroupAccess;
use App\User;
use App\UserGroup;
use App\Library\QueryResult;

/**
 * Description of UserGroupAccess
 */
class UserGroupAccessController extends Controller {
    
   public function listAction() {
        $userGroupAccesses = UserGroupAccess::select()->groupBy('user_id')->get();
        return view("admin.user.group.access.list", array("group_access_list" => $userGroupAccesses, 'currentUserId'=>Auth::user()->id));
    }

    public function editAction($id) {
        $userGroupAccess = UserGroupAccess::find($id);
        return view("admin.user.group.access.edit", array("formData" => $userGroupAccess, "userIds" => User::pluck('id'), "userGroupsIds" => UserGroup::pluck('id')));
    }

    public function newAction() {
        $userGroupAccess = new UserGroupAccess();
        return view("admin.user.group.access.edit", array("formData" => $userGroupAccess, "userIds" => User::pluck('id'), "userGroupsIds" => UserGroup::pluck('id')));
    }
    
    public function saveAction(Request $request) {
        
        $id = $request->get("id");
        $selectedGroups = $request->get("selected_groups");
        if($id) // Update
        {
            UserGroupAccess::where('user_id', '=', $request->get("user_id"))->delete();
        }
        else // Create - delete if user_id exists
        {
            if(UserGroupAccess::select()->where('user_id', '=', $request->get("user_id"))->exists())
            {
                UserGroupAccess::where('user_id', '=', $request->get("user_id"))->delete();
            }
        }
        // Create
        $status = true;
        foreach ($selectedGroups as $groupId) {
            $userGroupAccessObj = new UserGroupAccess();
            $rez = $userGroupAccessObj->saveFromRequest($request, $groupId);
            $status = $status && $rez;
        }
        
        if ($id) {
            $qrCode = ($status) ? QueryResult::UPDATE_SUCCESS : QueryResult::UPDATE_ERROR;
        } else {
            $qrCode = ($status) ? QueryResult::ADD_SUCCESS : QueryResult::ADD_ERROR;
        }
        $request->session()->put("QueryResult", $qrCode);
        return redirect()->route('ADMIN.USER.GROUP.accesses');
    }

    public function deleteAction($userId) {
        $userGroupAccessObj = UserGroupAccess::where('user_id', '=', $userId);
        $status = $userGroupAccessObj->delete();
        session()->put("QueryResult", ($status) ? QueryResult::DELETE_SUCCESS : QueryResult::DELETE_ERROR);
        return redirect()->route('ADMIN.USER.GROUP.accesses');
    }
}
