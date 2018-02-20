<?php

namespace App\Repositories\Go;

use App\ViewModel\Go\Component;
use App\ProdorderOperation;
use App\OperationStatus;
//use App\ProdorderOperationChecklistItem;
use App\ViewModel\Go\CheckList;
use App\Library\ChecklistGenerator;
use DB;

/**
 * Get data from MySQL database 'productionboard' for the right view in the operation-overview and parallel-sequence tab on the board page.
 *
 */
class OperationRepository {

    /**
     * Get check list for selected working step
     *
     * @return array representing 'checkList', 'isCheckListChecked' and 'workingStepStatus'
     */
    public function getCheckList(int $prodorderOperationId) {
        $prodorderOperation = ProdorderOperation::find($prodorderOperationId);
        $checklist = null;
        if(\App\ProdorderChecklist::where('prodorder_operation_id', $prodorderOperationId)->count() === 0) {
            \Illuminate\Support\Facades\Log::debug('found no items. need to parse');
            $checklist = $this->parseChecklist($prodorderOperation);
            
        } else {
            \Illuminate\Support\Facades\Log::debug('found items in db.');
            // get models form database
            $checklist = \App\ProdorderChecklist::where('prodorder_operation_id', $prodorderOperationId)->get();
        }
        \Illuminate\Support\Facades\Log::debug('returning checkist items. Num: ' . count($checklist));
        \Illuminate\Support\Facades\Log::debug('returning checkist array: ' . print_r(compact('checklist'), true));
//        return view('admin.checklist.frame', compact('checklist'))->render();
        return $checklist;

    }
    
    public function getStatus(int $prodorderOperationId) {
        return ProdorderOperation::find($prodorderOperationId)->prodorder_status_id;
    }

    /**
     * Get list of components for selected working step.
     *
     *  @return $components[] of objects of type App\ViewModel\Component
     */
    public function getComponentsForWorkingStep(int $productWorkingstepId) {

        // Component Overview for working step
        $componentsData = DB::table('prodorder_operations')->select(
                'prodorder_operations.id AS prodorder_operation_id',
                'prodorder_operations.material_status',
                'prodorder_components.id AS prodorder_component_id',
                'prodorder_components.item_number',
                'prodorder_components.missing',
                'prodorder_component_texts.material',
                'prodorder_components.required_quantity',
                'prodorder_components.required_quantity_unit',
                'prodorder_component_texts.material_text',
                'prodorder_operations.prodorder_status_id')
                ->join('prodorder_statuses', 'prodorder_statuses.id', '=', 'prodorder_operations.prodorder_status_id')
                ->join('prodorder_components', 'prodorder_operations.id', '=', 'prodorder_components.prodorder_operation_id')
                ->join('prodorder_component_texts', 'prodorder_components.prodorder_component_text_id', '=', 'prodorder_component_texts.id')
                ->where('prodorder_operations.id', '=', $productWorkingstepId)
                ->whereIn('prodorder_operations.prodorder_status_id', array(2, 3, 4, 5, 6, 20, 91, 1))
                ->whereNotNull('prodorder_components.id')
                ->get();

        if (!$componentsData->isEmpty() && $componentsData[0]->item_number != null) { // check if operation step contains components
            $stepComponents = [];

            foreach ($componentsData as $row) {
                $stepComponent = new Component($row->prodorder_operation_id, $row->item_number, $row->material, $row->material_text, $row->required_quantity, $row->required_quantity_unit, $row->material_status, $row->prodorder_component_id, $row->missing, $row->prodorder_status_id);
                $stepComponents[] = $stepComponent;
            }
        } else {
            $stepComponents[] = null; // operation step does not contain components
        }

        return $stepComponents;
    }

    private function parseChecklist(ProdorderOperation $prodorderOperation) {
        \Illuminate\Support\Facades\Log::debug('parsing checklist for operation ' . $prodorderOperation);
        // parse checklist from longtext.
        $parser = new \App\Library\Checklist\Parser();
        $parser->parse($prodorderOperation->operation_long_text);
        $checklist = null;
        if($parser->hasNoError()) {
            \Illuminate\Support\Facades\Log::debug('checklist parsing successful');
            $parser->storeItems($prodorderOperation->id);
            \Illuminate\Support\Facades\Log::debug('checklist items stored with id ' . $prodorderOperation->id);
            $checklist = $parser->getRecords($prodorderOperation->id);
            \Illuminate\Support\Facades\Log::debug('checklist: ' . print_r($checklist, true));
        } else {
            \Illuminate\Support\Facades\Log::debug('Parsing of Longtext for operation ' . $prodorderOperation->id . ' failed. Error: ' . $parser->getErrorMessage());
        }
        return $checklist;
    }
    
}
