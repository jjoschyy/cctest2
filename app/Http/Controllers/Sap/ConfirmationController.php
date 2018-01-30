<?php

namespace App\Http\Controllers\Sap;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Library\Sap\UpdateConfirmation;
use App\Library\Sap\Logger;

class ConfirmationController extends Controller {

    public function update(Request $request) {
        $updater = new UpdateConfirmation($request->all());
        $updater->process();

        Logger::write($request, $updater->getHttpResponse(), 'Order_Confirmation.ConfirmationNumber');
        return $updater->getHttpResponse();
    }

}
