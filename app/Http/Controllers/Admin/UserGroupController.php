<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\UserGroup;
use App\Library\QueryResult;

/**
 * Description of UserGroupController
 */
class UserGroupController extends Controller {
    
    public function listAction() {
        $userGroups = UserGroup::all()->all();
        return view("admin.user.group.list", array("group_list" => $userGroups, 'currentUserId'=>Auth::user()->id));
    }

    public function editAction($id) {
        $userGroup = UserGroup::find($id);
        return view("admin.user.group.edit", array("formData" => $userGroup));
    }

    public function newAction() {
        $userGroup = new UserGroup();
        return view("admin.user.group.edit", array("formData" => $userGroup));
    }
    
    public function saveAction(Request $request) {
        
        $id = $request->get("id");
        $userGroupObj = ($id) ? UserGroup::find($id) : new UserGroup();
        $obj_and_status = $userGroupObj->saveFromRequest($request);
        
        if ($id) {
            $qrCode = ($obj_and_status["status"]) ? QueryResult::UPDATE_SUCCESS : QueryResult::UPDATE_ERROR;
        } else {
            $qrCode = ($obj_and_status["status"]) ? QueryResult::ADD_SUCCESS : QueryResult::ADD_ERROR;
        }
        $request->session()->put("QueryResult", $qrCode);
        return redirect()->route('ADMIN.USER.groups');
    }

    public function deleteAction($id) {
        $userGroupObj = UserGroup::find($id);
        $status = $userGroupObj->delete();
        session()->put("QueryResult", ($status) ? QueryResult::DELETE_SUCCESS : QueryResult::DELETE_ERROR);
        return redirect()->route('ADMIN.USER.groups');
    }
}
