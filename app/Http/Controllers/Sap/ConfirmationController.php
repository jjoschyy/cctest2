<?php

namespace App\Http\Controllers\Sap;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Library\Sap\UpdateConfirmation;
use App\Library\Sap\Logger;

class ConfirmationController extends Controller {

    /**
     * Update sap confirmation dataset and log relevant information
     * 
     * @param Request $request The incoming http request
     * @return Response The response containing information about processing success
     */
    public function update(Request $request) {
        $updater = new UpdateConfirmation($request->all());
        $updater->process();

        Logger::write($request, $updater->getHttpResponse(), 'Order_Confirmation.ConfirmationNumber');
        return $updater->getHttpResponse();
    }

}
