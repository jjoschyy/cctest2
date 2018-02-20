<?php

namespace App\Http\Controllers\Sap;

//use Mail;
//use Illuminate\Mail\Mailer;
//use App\Mail\ComponentDemand;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Library\Sap\Logger;

class DeliveryController extends Controller {

    /**
     * Update sap delivery dataset and log relevant information (not implemented yet)
     * 
     * @param Request $request  The incoming http request
     * @return Response The response containing information about processing success
     */
    public function update(Request $request) {
        $response = new Response();
        Logger::write($request, $response);
        return $response;

//        $component = \App\ProdorderComponent::find(43699);
//        Mail::send(new ComponentDemand($component));
//        return new Response();
    }

}
