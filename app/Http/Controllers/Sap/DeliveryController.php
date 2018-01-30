<?php

namespace App\Http\Controllers\Sap;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Library\Sap\Logger;

class DeliveryController extends Controller {

    public function update(Request $request) {
        $response = new Response();
        Logger::write($request, $response);
        return $response;
    }

}
