<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Library\QueryResult;

class UserController extends Controller {

    public function listAction() {
        $users = User::all()->all();
        return view("admin.user.list", array("user_list" => $users, 'currentUserId'=>Auth::user()->id, 'include_css'=>['admin/admin_user.css']));
    }

    public function editAction($id) {
        $user = User::find($id);
        return view("admin.user.edit", array("formData" => $user));
    }

    public function newAction() {
        $user = new User();
        return view("admin.user.edit", array("formData" => $user));
    }
    
    public function saveAction(Request $request) {
       
        $request->merge(['is_active' => $request->get("is_active") == null ? 0 : 1]);
        $request->merge(['superior_id' => $request->get("superior_id") == null ? 0 : $request->get("superior_id")]);
        $id = $request->get("id");
        $userObj = ($id) ? User::find($id) : new User();
        $obj_and_status = $userObj->saveFromRequest($request);
        
        if ($id) {
            $qrCode = ($obj_and_status["status"]) ? QueryResult::UPDATE_SUCCESS : QueryResult::UPDATE_ERROR;
        } else {
            $qrCode = ($obj_and_status["status"]) ? QueryResult::ADD_SUCCESS : QueryResult::ADD_ERROR;
        }
        $request->session()->put("QueryResult", $qrCode);
        return redirect()->route('ADMIN.users');
    }
    
     public function deleteAction($id) {
        $userObj = User::find($id);
        $status = $userObj->delete();
        session()->put("QueryResult", ($status) ? QueryResult::DELETE_SUCCESS : QueryResult::DELETE_ERROR);
        return redirect()->route('ADMIN.users');
    }

}
