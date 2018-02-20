<?php

namespace App\Http\Controllers\Go;

use App\Http\Controllers\Controller;
use App\Library\Email\OrderMaterialEmailManager;
use \Illuminate\Http\Request;
use App\Prodorder;
use Auth;

/**
 * Receive params from "Order Material" modal window and send data to App\Library\Email\OrderMaterialEmailManager.
 * 
 */
class OrderMaterialController extends Controller {

     /**
     * Receive params from "Order Material" modal window, which is triggered form Components and Components-ZKM view.
     * Find selected $product of type App\Prodorder and logged $user of type App\User.
     * Send all params to Email Manager.
     *
     * @return string $statusMessage
     */
    public function sendOrderMaterial(Request $request, OrderMaterialEmailManager $orderMaterialEmailManager) {
       
        $product = Prodorder::find(session('productId'));
        $user = Auth::user();
        
        // send params to email manager
        $statusMessage = $orderMaterialEmailManager->sendEmailOrderMaterial($request, $product, $user);
        
        return $statusMessage;
    }

}
