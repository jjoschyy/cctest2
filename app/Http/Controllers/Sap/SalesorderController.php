<?php

namespace App\Http\Controllers\Sap;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Library\Sap\UpdateSalesorder;
use App\Library\Sap\Logger;

class SalesorderController extends Controller {

    public function update(Request $request) {
        $updater = new UpdateSalesorder($request->all());
        $updater->process();

        Logger::write($request, $updater->getHttpResponse(), 'SalesOrderNumber');
        return $updater->getHttpResponse();
    }

}
