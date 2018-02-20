<?php

namespace App\Repositories\Go;

use App\ViewModel\Go\Component;
use App\TimesheetMainCategory;
use App\TimesheetSubCategory;
use App\ProdorderStatus;
use DB;

/**
 * Get data from MySQL database 'productionboard' for board page.
 *
 */
class BoardRepository {

    /**
     * Get working steps
     * 
     * test user => Alexander: salesorder_number = 1027040388, prodorder_number = 100004503993, userId = 238
     * 
     * @return $workingSteps[] array of objects of type app/ProdorderOperation.php joined with app/Prodorder.php and app/OperationStatus.php
     */
    public function getWorkingSteps(\App\Prodorder $product, \App\User $user) {
        $workingStepList = ProdorderStatus::
                join('prodorder_operations', 'prodorder_statuses.id', '=', 'prodorder_operations.prodorder_status_id')
                ->join('prodorder_operation_steps', 'prodorder_operation_steps.id', '=', 'prodorder_operations.prodorder_operation_step_id')
                ->join('prodorders', 'prodorders.id', '=', 'prodorder_operations.prodorder_id')
                ->join('salesorders', 'prodorders.salesorder_id', '=', 'salesorders.id')
                ->where('prodorders.id', '=', $product->id)
                //->where('control_key', '!=', 'ZJ39')
                ->where('user_id', '=', $user->id)
                ->orderBy('sequence_number')
                ->orderBy('prodorder_operation_steps.operation_number')                
                ->get(['prodorder_operations.id AS prodorder_operations_id',
            'sequence_number',
            'operation_number',
            'operation_short_text',
            'title_text',
            'border',
            'background',
            'percent_completed',
            'prodorder_operations.prodorder_status_id']);

        $temp = array();
        foreach ($workingStepList as $item) {
            $temp[(int) $item->sequence_number][] = $item;
        }
        return $temp;
    }

    /**
     * Get all components for given $userId
     *
     * @return $components[] of objects of type App\ViewModel\Component
     */
    public function getAllComponents(\App\Prodorder $product, \App\User $user) {

        $components = [];

        // get all components
        $componentsData = DB::table('prodorder_operations')->select('prodorder_operations.id AS prodorder_operation_id', 'prodorder_operations.material_status', 'prodorder_components.id AS prodorder_component_id', 'prodorder_components.item_number', 'prodorder_components.missing', 'prodorder_component_texts.material', 'prodorder_components.required_quantity', 'prodorder_components.required_quantity_unit', 'prodorder_component_texts.material_text', 'prodorder_operations.prodorder_status_id')
                ->join('prodorders', 'prodorders.id', '=', 'prodorder_operations.prodorder_id')
                ->join('salesorders', 'salesorders.id', '=', 'prodorders.salesorder_id')
                ->join('prodorder_statuses', 'prodorder_statuses.id', '=', 'prodorder_operations.prodorder_status_id')
                ->join('prodorder_components', 'prodorder_operations.id', '=', 'prodorder_components.prodorder_operation_id')
                ->join('prodorder_component_texts', 'prodorder_components.prodorder_component_text_id', '=', 'prodorder_component_texts.id')
                ->where('user_id', '=', $user->id)
                ->where('prodorders.id', '=', $product->id)
                ->whereIn('prodorder_operations.prodorder_status_id', array(2, 3, 4, 5, 6, 20, 91, 1))
                ->whereNotNull('prodorder_components.id')
                ->orderByRaw('CASE WHEN (prodorder_operations.prodorder_status_id = 3) THEN 1 ELSE 0 END')
                ->get();

        foreach ($componentsData as $row) {
            $component = new Component($row->prodorder_operation_id, $row->item_number, $row->material, $row->material_text, $row->required_quantity, $row->required_quantity_unit, $row->material_status, $row->prodorder_component_id, $row->missing, $row->prodorder_status_id);
            $components[] = $component;
        }

        return $components;
    }

    /**
     * Get salesorder_number components
     *
     * @return $salesorder_numberComponents[] of objects of type App\ViewModel\Component
     */
    public function getZkmComponents(\App\Prodorder $product, \App\User $user) {

        // get salesorder_number components

        $salesorder_numberComponents = [];

        $componentsData = DB::table('prodorders')->select('salesorder_items.serial_number','salesorder_items.id AS salesorder_items_id', 'item_number', 'required_quantity', 'required_quantity_unit', 'material', 'salesorder_items.short_text AS content_data', 'prodorder_operations.id AS prodorder_operation_id', 'prodorder_operations.material_status', 'salesorder_items.missing', 'prodorder_operations.prodorder_status_id')
                ->join('prodorder_operations', 'prodorders.id', '=', 'prodorder_operations.prodorder_id')
                ->join('salesorders', 'salesorders.id', '=', 'prodorders.salesorder_id')
                ->join('salesorder_items', 'salesorder_items.salesorder_id', '=', 'salesorders.id')
                ->where('user_id', '=', $user->id)
                ->where('prodorders.id', '=', $product->id)
                ->whereNotIn('prodorder_operations.prodorder_status_id', [3, 91])
                ->groupBy('salesorder_items.id')
                ->get();

        foreach ($componentsData as $row) {
            $salesorder_numberComponent = new Component($row->prodorder_operation_id, $row->item_number, $row->material, $row->content_data, $row->required_quantity, $row->required_quantity_unit, $row->material_status, $row->salesorder_items_id, $row->missing, $row->prodorder_status_id,$row->serial_number);
            $salesorder_numberComponents[] = $salesorder_numberComponent;
        }

        return $salesorder_numberComponents;
    }

    /**
     * Get documents from database table ( TODO - still not defined).
     * Sort documents by title with eloquent query (TODO - still table does not exist).
     * Send JSON with sorted titles of documents to view tab resources/views/go/board/documents.blade.php.
     *
     * @return JSON array with document's titles for view tab resources/views/go/board/documents.blade.php
     */
    public function getDocuments(\App\User $user) {

        // get documents
        // $documents = [];
        // $documentData = "eloquent query - sorted by titles"; // TODO
        // dummy data
        $dummyDocs = '[
                        {
                            "id": "1",
                            "link": "https://www.zeiss.de/corporate/home.html",
                            "title": "document A"
                        },
                        {
                            "id": "2",
                            "link": "https://www.zeiss.de/corporate/ueber-zeiss.html",
                            "title": "document D"
                        },
                        {
                            "id": "3",
                            "link": "https://www.zeiss.de/corporate/geschichte/gruender/carl-zeiss.html",
                            "title": "document C"
                        },
                        {
                            "id": "4",
                            "link": "https://www.zeiss.de/corporate/verantwortung/entwicklung.html",
                            "title": "document B"
                        }
            ]';

        $sortedCollection = collect(json_decode($dummyDocs, true))->sortBy('title');
        // return dummy data TODO
        return (array) json_decode($sortedCollection->toJson());
    }

    /**
     * Get error categories to display in the dropdown for the  modal window 'Error report' on the 'Board' page after click on button 'Continue' if previous stauts was 'Error'
     *      
     * @return $categories[] of objects of type App\TimesheetMainCategory.php
     */
    public function getErrorCategories() {

        // get error categories
        $errorCategories = TimesheetMainCategory::where('timesheet_type', '=', 'TEC')
                ->get(['id', 'title_text']);

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
                ->get(['id', 'title_text']);

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
                ->get(['id', 'title_text']);

        return $missingPartsCategories;
    }

    /**
     * Get maximum character length for the status text from the field 'description' in the table 'operation_statuses'
     * for selected user language.
     *      
     * @return $maxStatusLength int
     */
    public function getMaxStatusLength() {

        // Get maximum character length for statuses in the registered user language
        $statuses = ProdorderStatus::all();

        foreach ($statuses as $status) {
            $arrStatuses[] = $status->getTitleText();
        }

        $lengthsStatuses = array_map('strlen', $arrStatuses);
        $maxStatusLength = max($lengthsStatuses);

        return $maxStatusLength;
    }
    
    /**
     * Get all areas (Bereiche) for selected country and city.
     * Area should be selected in modal display for "Order material".
     *      
     * @return JSON array with area names and id-s.
     */
    public function getAreasForOrderMaterial() {

        // get Areas from Source => TODO  => Areas are different for each City
        
        $dummyArreas = '[{"id": "1","name": "Area 1"},{"id": "2","name": "Area 2"},{"id": "3","name": "Area 3"},{"id": "4","name": "Area 4"},
                        {"id": "5","name": "Area 5"},{"id": "6","name": "Area 6"},{"id": "7","name": "Area 7"},{"id": "8","name": "Area 8"},{"id": "8","name": "Area 9"}]';

        $sortedCollection = collect(json_decode($dummyArreas, true))->sortBy('name');
        // return dummy data - TODO
        return (array) json_decode($sortedCollection->toJson());
    }
    
    /**
     * Get all Error Types for selection in modal display for "Order material".
     *      
     * @return JSON array with Error Types names and id-s.
     */
    public function getErrorTypesForOrderMaterial() {

        // get Error Types from Source => TODO => Error Types are only different for United States
        
        $dummyErrorTypes = '[{"id": "1","name": "Error Type 1"},{"id": "2","name": "Error Type 2"},{"id": "3","name": "Error Type 3"},{"id": "4","name": "Error Type 4"},
                        {"id": "5","name": "Error Type 5"},{"id": "6","name": "Error Type 6"}]';
        
        $sortedCollection = collect(json_decode($dummyErrorTypes, true))->sortBy('name');
        // return dummy data - TODO
        return (array) json_decode($sortedCollection->toJson());
    }

}
