<?php

namespace App\Http\Controllers\Sap;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Library\Sap\Logger;

class PlanorderController extends Controller {

    /**
     * Update sap planned order dataset and log relevant information (not implemented yet)
     * 
     * @param Request $request The incoming http request
     * @return Response The response containing information about processing success
     */
    public function update(Request $request) {
        $response = new Response();
        Logger::write($request, $response);
        return $response;
    }

}
