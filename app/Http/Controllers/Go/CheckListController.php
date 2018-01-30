<?php

namespace App\Http\Controllers\Go;

use App\Http\Controllers\Controller;
use App\Repositories\CheckListRepository;
use App\Repositories\ButtonsRepository;
use Illuminate\Http\Request;

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
            $status = __('bgo.complete');
            $stausUpdated = $buttonsRepository->updateWorkingStepStatus($workingStepId, $newStatusId);
            $saveOperationStatus = $buttonsRepository->saveOperationStatus($workingStepId, $newStatusId);
        }

        if ($previousStatusId == '20' && (!$isCheckListCompleted || $hasMissingParts)) { // update working step status to 'Production'
            $newStatusId = 2;
            $status = __('bgo.production');
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
    
}
