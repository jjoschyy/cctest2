<?php

namespace App\Repositories\Go;

use App\ViewModel\Component;
use App\OperationStatus;
use App\TimesheetMainCategory;
use App\TimesheetSubCategory;
use DB;

/**
 * Get data from MySQL database 'productionboard' for board page.
 *
 */
class BoardRepository {

    /**
     * Get working steps for given $zkm (Customer order), $fauf (Production order) and $userId.
     * Query is using eloquent mutator for description_data in model app/OperationStatus.php.
     *
     * @return $workingSteps[] array of objects of type app/ProdOrderOperation.php joined with app/ProdOrder.php and app/OperationStatus.php
     */
    public function getWorkingSteps(int $zkm, string $fauf, int $userId) { // test user => Alexander: zkm = 1027040388, fauf = 100004503993, userId = 238
        // ### PDO - original query ### // @return $workingSteps[] of objects of type App\ViewModel\WorkingStep
//        $pdo = DB::connection()->getPdo();
//        $statement = $pdo->prepare("SELECT  prodorder_operations.id AS prod_order_operation_id, operation_number, operation_short_text, description_data AS status
//                                    FROM prodorder_operations
//                                    LEFT JOIN prodorders ON prodorders.id = prodorder_operations.prod_order_id
//                                    LEFT JOIN operation_statuses ON operation_statuses.id = prodorder_operations.operation_status_id
//                                    WHERE zkm = :zkm
//                                    AND production_order = :fauf
//                                    AND control_key != 'ZJ39'
//                                    AND user_id = :userId
//                                    ");        
//        $statement->execute(array(':zkm' => $zkm, ':fauf' => $fauf, ':userId' => $userId));
//        $workingStepsData = $statement->fetchAll(PDO::FETCH_OBJ);
//
//        $workingSteps = [];
//        
//        foreach($workingStepsData as $row) {                                                                      
//                                                $workingStep = new WorkingStep($row->prod_order_operation_id, $row->operation_number, $row->operation_short_text, $row->status);
//                                                $workingSteps[] =  $workingStep;
//                                            }
        // enable query log 
        // DB::connection()->enableQueryLog(); // test => dennis.himmelspach@zeiss.com id: 1074, zkm: 1027120646 , fauf: 100004627113
     
        $workingSteps = OperationStatus::
                        join('prodorder_operations', 'operation_statuses.id', '=', 'prodorder_operations.operation_status_id')
                        ->join('prodorders', 'prodorders.id', '=', 'prodorder_operations.prod_order_id')
                        ->where('zkm', '=', $zkm)
                        ->where('production_order', '=', $fauf)
                        ->where('control_key', '!=', 'ZJ39')
                        ->where('user_id', '=', $userId)
                        ->orderBy('operation_number')
                        ->get(['prodorder_operations.id',
                               'operation_number',
                               'operation_short_text',
                               'description_data',
                               'border_color',
                               'background_color',
                               'percent_completed',
                               'prodorder_operations.operation_status_id']);
 
//        $query = DB::getQueryLog();
//        $lastQuery = end($query);
//        dd($lastQuery); 

        return $workingSteps;
    }

    /**
     * Get parallel sequence working steps for given $zkm (Customer order), $fauf (Production order) and $userId.
     * Query is using eloquent mutator for description_data in model app/OperationStatus.php.
     *
     * @return $parallelWorkingSteps[] array of objects of type app/ProdOrderOperation.php joined with app/ProdOrder.php and app/OperationStatus.php
     */
    public function getParallelSequenceWorkingSteps(int $zkm, string $fauf, int $userId) {

        // get parallel sequence working steps
        $parallelWorkingSteps = OperationStatus::
                        join('prodorder_operations', 'operation_statuses.id', '=', 'prodorder_operations.operation_status_id')
                        ->join('prodorders', 'prodorders.id', '=', 'prodorder_operations.prod_order_id')
                        ->where('zkm', '=', $zkm)
                        ->where('production_order', '=', $fauf)
                        ->where('control_key', '=', 'ZJ39')
                        ->where('user_id', '=', $userId)
                        ->orderBy('operation_number')
                        ->get(['prodorder_operations.id',
                               'operation_number',
                               'operation_short_text',
                               'description_data',
                               'border_color',
                               'background_color',
                               'percent_completed',
                               'prodorder_operations.operation_status_id']);
                                            
        return $parallelWorkingSteps;
    }

    /**
     * Get all components for given $userId
     *
     * @return $components[] of objects of type App\ViewModel\Component
     */
    public function getAllComponents(int $zkm, string $fauf, int $userId) {

        $components = [];

        // get all components
        $componentsData = DB::table('prodorder_operations')->select('prodorder_operations.id AS prod_order_operation_id','prodorder_operations.material_status',
                        'prod_order_components.id AS prod_order_component_id','prod_order_components.item_number','prod_order_components.missing',
                        'prod_order_list_components.material','prod_order_components.required_quantity','prod_order_components.required_quantity_unit',
                        'prod_order_list_components.content_data','prodorder_operations.operation_status_id')
                        ->join('prodorders', 'prodorders.id', '=', 'prodorder_operations.prod_order_id')
                        ->join('operation_statuses', 'operation_statuses.id', '=', 'prodorder_operations.operation_status_id')
                        ->join('prod_order_components', 'prodorder_operations.id', '=', 'prod_order_components.prod_order_operation_id')
                        ->join('prod_order_list_components', 'prod_order_components.prod_order_list_component_id', '=', 'prod_order_list_components.id')
                        ->where('user_id', '=', $userId)
                        ->where('zkm', '=', $zkm)
                        ->where('production_order', '=', $fauf)
                        ->whereIn('prodorder_operations.operation_status_id', array(2, 3, 4, 5, 6, 20, 91, 1))
                        ->whereNotNull('prod_order_components.id')
                        ->orderByRaw('CASE
                                        WHEN (prodorder_operations.operation_status_id = 3) THEN 1
                                        ELSE 0
                                      END')
                        ->get();
        
        foreach($componentsData as $row) {                                                                       
                                    $component = new Component($row->prod_order_operation_id, $row->item_number, $row->material, $row->content_data, $row->required_quantity,
                                                               $row->required_quantity_unit, $row->material_status, $row->prod_order_component_id, $row->missing, $row->operation_status_id);
                                    $components[] =  $component;
                                }
                                
        return $components;
    }

    /**
     * Get Zkm components for given $zkm (Customer order), $fauf (Production order) and $userId
     *
     * @return $zkmComponents[] of objects of type App\ViewModel\Component
     */
    public function getZkmComponents(int $zkm, string $fauf, int $userId) {

        // get zkm components

        $zkmComponents = [];
        
        $componentsData = DB::table('prodorders')->select('salesorder_items.id AS salesorder_items_id','item_number','required_quantity',
                        'required_quantity_unit','material','salesorder_items.short_text AS content_data','prodorder_operations.id AS prod_order_operation_id',
                        'prodorder_operations.material_status','salesorder_items.missing','prodorder_operations.operation_status_id')
                        ->join('prodorder_operations', 'prodorders.id', '=', 'prodorder_operations.prod_order_id')
                        ->join('salesorders', 'salesorders.id', '=', 'prodorders.salesorder_id')
                        ->join('salesorder_items', 'salesorder_items.salesorder_id', '=', 'salesorders.id')
                        ->where('user_id', '=', $userId)
                        ->where('zkm', '=', $zkm)
                        ->where('production_order', '=', $fauf)
                        ->whereNotIn('prodorder_operations.operation_status_id', [3,91])
                        ->groupBy('salesorder_items.id')   // https://stackoverflow.com/questions/36228836/syntax-error-or-access-violation-1055-expression-8-of-select-list-is-not-in-gr
                        ->get();                            // https://github.com/laravel/framework/issues/14997
                                                            // config/database.php => 'strict' => false
               
        foreach($componentsData as $row) {   
                                
                                    $zkmComponent = new Component($row->prod_order_operation_id, $row->item_number, $row->material, $row->content_data, $row->required_quantity,
                                                                  $row->required_quantity_unit, $row->material_status, $row->salesorder_items_id, $row->missing, $row->operation_status_id); 
                                    $zkmComponents[] =  $zkmComponent;
                                }
                 
        return $zkmComponents;
    }

    /**
     * Get error categories to display in the dropdown for the  modal window 'Error report' on the 'Board' page after click on button 'Continue' if previous stauts was 'Error'
     *      
     * @return $categories[] of objects of type App\TimesheetMainCategory.php
     */
    public function getErrorCategories() {

        // get error categories
        $errorCategories = TimesheetMainCategory::where('timesheet_type', '=', 'TEC')
                                                 ->get(['id','content_data']);
        
        return $errorCategories;
    }

    /**
     * Get pause categories to display in the dropdown for the  modal window 'Pause report' on the 'Board' page after click on button 'Continue' if previous stauts was 'Pause'
     *      
     * @return $categories[] of objects of type App\TimesheetMainCategory.php
     */
    public function getPauseCategories() {

        // get pause categories
        $pauseCategories = TimesheetMainCategory::where('timesheet_type', '=', 'ORG')
                                                 ->get(['id','content_data']);
        
        return $pauseCategories;
    }

    /**
     * Get missing part categories to display in the dropdown for the  modal window 'Received missing part'
     * on the 'Board' page after click on button 'Received missing part'.
     * Select categories from the table 'timesheet_list_category_sub' where timesheet_list_category_mainId is 18 ('Waiting for Parts'/'Warten auf Material').
     *      
     * @return $missingPartscategories[] of objects of type App\TimesheetSubCategory.php
     */
    public function getMissingPartsCategories() {

        // get missing parts categories => sub-categories for category 'Waiting for Parts'/'Warten auf Material'
        $missingPartsCategories = TimesheetSubCategory::where('id', '=', '18')
                                                            ->get(['id','content_data']);
        
        return $missingPartsCategories;
    }
    
    /**
     * Get maximum character length for the status text from the field 'description_data' in the table 'operation_statuses'
     * for selected user language.
     *      
     * @return $maxStatusLength int
     */
    public function getMaxStatusLength() {
        
        // Get maximum character length for statuses in the registered user language
        $statuses = OperationStatus::all();
        
        foreach ($statuses as $status) {
            $arrStatuses[] = $status->description_data;
        }
       
        $lengthsStatuses = array_map('strlen', $arrStatuses);
        $maxStatusLength = max($lengthsStatuses);
  
        return $maxStatusLength;
    }
}
