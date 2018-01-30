<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Menue;
use App\Library\QueryResult;

class MenueController extends Controller {

    public function listAction() {
        $menues = Menue::all()->all();
        //var_dump(Session::get("QueryResult"));
        //die();
        return view("admin.menue.list", array("menue_list" => $menues, 'currentUserId'=>Auth::user()->id));
    }

    public function editAction($id) {
        $menue = Menue::find($id);
        return view("admin.menue.edit", array("formData" => $menue));
    }

    public function newAction() {
        $menue = new Menue();
        return view("admin.menue.edit", array("formData" => $menue));
    }

    public function saveAction(Request $request) {
        //$request->merge(['is_active' => $request->get("is_active") == null ? 0 : 1]);
        $id = $request->get("id");
        $menueObj = ($id) ? Menue::find($id) : new Menue();
        $obj_and_status = $menueObj->saveFromRequest($request);
        //$id = $obj_and_status["obj"]->id;
        if ($id) {
            $qrCode = ($obj_and_status["status"]) ? QueryResult::UPDATE_SUCCESS : QueryResult::UPDATE_ERROR;
        } else {
            $qrCode = ($obj_and_status["status"]) ? QueryResult::ADD_SUCCESS : QueryResult::ADD_ERROR;
        }
        $request->session()->put("QueryResult", $qrCode);
        return redirect()->route('ADMIN.menues');
    }

    public function deleteAction($id) {
        /* @var $menueObj \App\Menue */
        $menueObj = Menue::find($id);
        $status = $menueObj->delete();
        session()->put("QueryResult", ($status) ? QueryResult::DELETE_SUCCESS : QueryResult::DELETE_ERROR);
        return redirect()->route('ADMIN.menues');
    }

}
