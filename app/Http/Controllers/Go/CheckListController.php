<?php

namespace App\Http\Controllers\Go;

use App\Http\Controllers\Controller;
use App\Repositories\Go\CheckListRepository;
use App\Repositories\Go\ButtonsRepository;
use \Illuminate\Http\Request;
use \Illuminate\Http\Response;
use \Illuminate\Support\Facades\Storage;

/**
 * Update checklist if any item is changed.
 * Change status for working step if checklist becomes completed or uncompleted.
 *
 */
class CheckListController extends Controller {
   
     /**
     * Update checklist for every valid input of required check item.
     * Change status to 'Complete' for working step if no more missing parts and if checklist completed.
     * Change status  to 'Production' for working step if there are missing parts and if checklist becomes uncompleted (as some item is unchecked or having invalid input).
     *
     * @return JSON array with elements $isCheckListCompleted boolean, $status string and $newStatusId int (new status for working step can be 'Complete' or 'Production')
     */
    public function checkList(Request $request, CheckListRepository $checkListRepository, ButtonsRepository $buttonsRepository) {
        $previousStatusId = $request->previousStatusId;
        $workingStepId = $request->workingStepId;
        $status = '';
        $newStatusId = $previousStatusId;

       // check if checklist is completed for working step
       $isCheckListCompleted =  $checkListRepository->updateCheckList($request);
       
       $hasMissingParts = $buttonsRepository->hasMissingParts($workingStepId); // has missing parts => 1 / does not have => 0
              
       if ($isCheckListCompleted && $previousStatusId == '2' && !$hasMissingParts) // update working step status to 'Complete'
        {
            $newStatusId = 20;
            $status = __('go.complete');
            $stausUpdated = $buttonsRepository->updateWorkingStepStatus($workingStepId, $newStatusId);
            $saveOperationStatus = $buttonsRepository->saveOperationStatus($workingStepId, $newStatusId);
        }

        if ($previousStatusId == '20' && (!$isCheckListCompleted || $hasMissingParts)) { // update working step status to 'Production'
            $newStatusId = 2;
            $status = __('go.production');
            $stausUpdated = $buttonsRepository->updateWorkingStepStatus($workingStepId, $newStatusId);
            $saveOperationStatus = $buttonsRepository->saveOperationStatus($workingStepId, $newStatusId);
        }
         
        // get border color for new status
        $borderColor = ($newStatusId != 0) ? $buttonsRepository->getBorderColor($newStatusId) : "#000";
        
        // get background color for new status
        $backgroundColor = ($newStatusId != 0) ? $buttonsRepository->getBackgroundColor($newStatusId) : "#000";
        
        return [ 'hasMissingParts' => $hasMissingParts, 'isCheckListCompleted' => "$isCheckListCompleted",
                'status' => $status, 'previousStatusId' => $previousStatusId, 'statusId' => $newStatusId,
                'borderColor' => $borderColor, 'backgroundColor' => $backgroundColor];
    }
    
    /**
     * Update state of radio button and visibility conditions in checklist.
     *
     * @return $checkList as JSON array with updated checklist
     */
    public function checkListRadio(Request $request, CheckListRepository $checkListRepository)
    {
        $checkList =  $checkListRepository->updateRadioConditions($request);
         
        return $checkList;
    }
    
    /**
     * Update the value of an item specified by prodorder_operation_id and itemname
     * @param Request $request
     * @param CheckListRepository $checkListRepository dependency injection for CheckListRepostiory
     * @param $pretend Boolean flag default: false. If true, don't write to db, useful for testing or validation of checklists
     */
    public function updateItem(Request $request, CheckListRepository $checkListRepository, $pretend = false) {
        $name = $request->get('name');
        $prodorder_operation_id = $request->get('prodorder_operation_id');
        $value = $request->get('value');
        $ret = null;
        if($pretend) {
            \Illuminate\Support\Facades\Log::info('pretending to update checklist item ' . $name . ' with prodorder_operation_id ' . $prodorder_operation_id . ' and value ' . $value);
            $ret = true;
        } else {
            $ret = $checkListRepository->updateItem($request);
        }
    }
    
    /**
     * Export the checklist for a specific ProdorderOperation as XML
     * @param Request $request
     * @param CheckListRepository $checkListRepository dependency injection
     * @param type $prodorder_operation_id the id of the ProdorderOperation
     * @return response XML
     */
    public function exportXML(Request $request, CheckListRepository $checkListRepository, $prodorder_operation_id = 0) {
        $fileName = 'prodorderOperation_' . $prodorder_operation_id . '_export.xml';
        $downloadPath = storage_path('app\\temp\\' . $fileName);
        $content = $this->xmlExport($checkListRepository->getItems($prodorder_operation_id));
        Storage::disk('temp')->put($fileName, $content);
        $header = [
            'Content-Type' =>'text/xml',
            'Content-Disposition' => 'attachment; filename=' . $fileName,
            'Content-Length' => Storage::disk('temp')->size($fileName),
            'Content-Transfer-Encoding' => 'binary'
        ];
        $resp = response()->download($downloadPath, $fileName, $header)->deleteFileAfterSend(true);
        \Illuminate\Support\Facades\Log::debug('called exportXML ' . print_r($resp, true));
        return $resp;
    }
    
    /**
     * Prepare XML for export
     * @param array $items Array of ProdorderChecklist
     * @return string XML content
     */
    private function xmlExport($items) {
        $xml = new \XMLWriter();
        $xml->openMemory();
        $xml->startDocument();
        $xml->startElement('checklist');
        $xml->WriteAttribute('prodorder_operatioin_id', count($items)>0 ? $items[0]->prodorder_operation_id : null);
        foreach($items as $item) {
            $xml->startElement('item');
            $xml->WriteAttribute('type', $item->type);
            $xml->WriteAttribute('name', $item->name);
            $xml->WriteAttribute('label', $item->label);
            $xml->WriteAttribute('option1', $item->option1);
            $xml->WriteAttribute('option2', $item->option2);
            $xml->WriteAttribute('option3', $item->option3);
            $xml->WriteAttribute('is_new_group', $item->is_new_group);
            $xml->WriteAttribute('is_active', $item->is_active);
            $xml->WriteAttribute('value', $item->value);
            $xml->endElement();
        }
        $xml->endElement();
        $xml->endDocument();
        return $xml->outputMemory();
    }
}
