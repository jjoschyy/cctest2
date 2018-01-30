<?php

namespace App\Http\Controllers\Go;

use App\Http\Controllers\Controller;
use App\Repositories\Go\OrdersRepository;
use Illuminate\Support\Facades\Auth;

/**
 * Get employee data from registered user id.
 * Get zkms and faufs from registered user id.
 *
 */
class OrdersController extends Controller {

    /**
     * Get employee data and store in session.
     * Get zkms (Customer order) and faufs (Production order) which belong to registered employee.
     * 
     * @return resources/views/go/orders/index.blade.php
     */
    public function index(OrdersRepository $ordersRepository) {

        // get zkms and faufs
        $zkms = $ordersRepository->getOrders(Auth::user()->id);

        return view('go.orders.index', ['zkms' => $zkms, 'userData' => Auth::user(), 'include_css' => ['go/orders.css']]);
    }

}
