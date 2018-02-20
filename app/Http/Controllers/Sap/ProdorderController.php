<?php

namespace App\Http\Controllers\Sap;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Library\Sap\UpdateProdorder;
use App\Library\Sap\Logger;

class ProdorderController extends Controller {

    /**
     * Update sap production order dataset and log relevant information
     * 
     * @param Request $request The incoming http request
     * @return Response The response containing information about processing success
     */
    public function update(Request $request) {
        $updater = new UpdateProdorder($request->all());
        $updater->process();

        Logger::write($request, $updater->getHttpResponse(), 'ProductionOrder.OrderNumber');
        return $updater->getHttpResponse();
    }

}
