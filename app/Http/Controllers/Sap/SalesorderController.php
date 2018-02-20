<?php

namespace App\Http\Controllers\Sap;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Library\Sap\UpdateSalesorder;
use App\Library\Sap\Logger;

class SalesorderController extends Controller {

    /**
     * Update sap sales order dataset and log relevant information
     * 
     * @param Request $request The incoming http request
     * @return Response The response containing information about processing success
     */
    public function update(Request $request) {
        $updater = new UpdateSalesorder($request->all());
        $updater->process();

        Logger::write($request, $updater->getHttpResponse(), 'SalesOrder.SalesOrderNumber');
        return $updater->getHttpResponse();
    }

}
