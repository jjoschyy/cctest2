<?php

namespace App\Repositories\Go;

use App\Library\LanguageHelper;
use DB;

/**
 * Get data from MySQL database 'productionboard' for orders page
 *
 */
class OrdersRepository {

    /**
     * Get list of faufs (Production order) and zkms (Customer order) which belong to selected employee.
     * 
     * employee numbers with faufs: 87386 5006623 5012235 86076 86091 82168 85177 5005865 95106 5016571 5010077 5013389 5015375 5015346 5014160 5018058
     * 
     * employee ids with faufs:: 71 132 158 191 200 232 237 238 253 457 503 620 809 819 917 1074
     *
     * @return $zkms[] array of objects of type app/ProdOrder.php joined with app/ProdOrderOperation.php
     */
    public function getOrders(int $userId) {

        // ### PDO - original query ### @return $zkms[] array of objects of type App\ViewModel\Zkm
//        $pdo = DB::connection()->getPdo();
//        $statement = $pdo->prepare("SELECT zkm, production_order AS fauf
//                                    FROM production_orders
//                                    LEFT JOIN prodorder_operations ON production_orders.id = prodorder_operations.prod_order_id
//                                    WHERE user_id  = :userId
//                                    AND operation_status_id NOT IN (1,3,91)
//                                    GROUP BY production_orders.id
//                                    ");
//       
//        $statement->execute(array(':userId' => $userId)); // Alexander => 238
//        $zkmData = $statement->fetchAll(PDO::FETCH_OBJ);
//        
//        $zkms = [];
//        
//        foreach($zkmData as $row) {                                                                      
//                                    $zkm = new Zkm($row->zkm, $row->fauf);
//                                    $zkms[] =  $zkm;
//                                  }
//  
        // FOR TESTING => enable query log 
        // DB::connection()->enableQueryLog();
        
         // get zkms and faufs granted to employee
         
         $zkms = DB::table('prodorders')
            ->select('zkm AS zkmId', 'production_order AS faufId')
            ->join('prodorder_operations', 'prodorders.id', '=', 'prodorder_operations.prod_order_id')
            ->where('user_id', '=', $userId)
            ->whereIn('operation_status_id', [2, 4, 5, 6, 20, 91, 1])
            ->groupBy('prodorders.id')
            ->get();
         
        // test query transformed in SQL
//         $query = DB::getQueryLog();
//         $lastQuery = end($query);
//         dd($lastQuery); 

        return $zkms;
    }

}
