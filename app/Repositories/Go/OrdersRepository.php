<?php

namespace App\Repositories\Go;

use App\Prodorder;

/**
 * Get data from MySQL database 'productionboard' for orders page
 *
 */
class OrdersRepository {

    /**
     * Get list of products which belong to selected employee.
     * 
     * employee numbers with faufs: 87386 5006623 5012235 86076 86091 82168 85177 5005865 95106 5016571 5010077 5013389 5015375 5015346 5014160 5018058
     * 
     * employee ids with faufs:: 71 132 158 191 200 232 237 238 253 457 503 620 809 819 917 1074
     *
     * @return $products array of objects of type app/ProdOrder.php joined with app/ProdOrderOperation.php
     */
    public function getOrders(int $userId) {

        $products = Prodorder::
                join('prodorder_operations', 'prodorders.id', '=', 'prodorder_operations.prodorder_id')
                ->where('user_id', '=', $userId)
                ->whereIn('prodorder_status_id', [2, 4, 5, 6, 20, 91, 1])
                ->groupBy('prodorders.id')
                ->get(['*','prodorders.id AS prodorder_id']);
        return $products;
    }

}
