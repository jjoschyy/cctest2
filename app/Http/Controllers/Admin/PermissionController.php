<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\UserRight;
use App\Library\QueryResult;

class PermissionController extends Controller {

    public function listAction() {
        $userRights = UserRight::all()->all();
        return view("admin.permission.list", array("permission_list" => $userRights, 'currentUserId'=>Auth::user()->id));
    }

    public function editAction($id) {
        $userRight = UserRight::find($id);
        return view("admin.permission.edit", array("formData" => $userRight));
    }

    public function newAction() {
        $userRight = new UserRight();
        return view("admin.permission.edit", array("formData" => $userRight));
    }
    
    public function saveAction(Request $request) {
       
        $id = $request->get("id");
        $permissionObj = ($id) ? UserRight::find($id) : new UserRight();
        $obj_and_status = $permissionObj->saveFromRequest($request);
        
        if ($id) {
            $qrCode = ($obj_and_status["status"]) ? QueryResult::UPDATE_SUCCESS : QueryResult::UPDATE_ERROR;
        } else {
            $qrCode = ($obj_and_status["status"]) ? QueryResult::ADD_SUCCESS : QueryResult::ADD_ERROR;
        }
        $request->session()->put("QueryResult", $qrCode);
        return redirect()->route('ADMIN.permissions');
    }

    public function deleteAction($id) {
        $permissionObj = UserRight::find($id);
        $status = $permissionObj->delete();
        session()->put("QueryResult", ($status) ? QueryResult::DELETE_SUCCESS : QueryResult::DELETE_ERROR);
        return redirect()->route('ADMIN.permissions');
    }
}
