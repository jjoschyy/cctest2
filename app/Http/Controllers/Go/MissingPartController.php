<?php

namespace App\Http\Controllers\Go;

use App\Http\Controllers\Controller;
use App\Repositories\MissingPartRepository;
use App\Repositories\CheckListRepository;
use App\Repositories\ButtonsRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

/**
 * Report missing part in operation-overview, parallel-sequence and component-overview tab.
 * Report missing part in Zkm components.
 *
 */
class MissingPartController extends Controller {

    /**
     * Report missing part for click on buttons 'Report missing part' in operation-overview, parallel-sequence and component-overview tab.
     * Store 'missing' status for clicked button (missing material) and optionally status 'Error/Fehler' for working step in which is located missing material.
     * 
     * Report Received missing part for click on buttons 'Missing part reported' in operation-overview, parallel-sequence and component-overview tab.
     * Store 'not-missing' status for clicked button (missing material) and optionally status 'Production' for working step in which is located missing material.
     *
     * @return $status String ( "2" => Production, "4" => Error, "equal" => no change in status) or empty String if update fails.
     *  return JSON format to caller: public/js/go/app/missingPartController.js
     */
    public function reportMissingPart(Request $request, MissingPartRepository $missingPartRepository, ButtonsRepository $buttonsRepository, CheckListRepository $checkListRepository) {

        $status = "";
        $addRecordForReceivedMissingPart = true;
        $workingStepStatusId = $request->workingStepStatus;
        $workingStepId = $request->productWorkingstepId;

        // '1' => material is missing / '0' => material is not missing 
        $stausUpdatedComponent = $missingPartRepository->updateComponentStatus($request->productMaterialId, $request->missingMaterial, $workingStepId, $buttonsRepository);

        // if clicked 'Report missing part' => $request->missingMaterial is 1 => material is missing
        if ($request->missingMaterial) {
            Log::info('Sending request to REST API for reported missing part with prod_order_component_id ' . $request->productMaterialId . ' and working step id ' . $workingStepId); // TODO
        }

        $hasMissingParts = $buttonsRepository->hasMissingParts($workingStepId) ? 1 : 0;
        $isCheckListChecked = $checkListRepository->isCheckListChecked($workingStepId);

        if ($isCheckListChecked && !$hasMissingParts) {
            $request->previousStatusId = 20; // set status to 'Complete'
            $workingStepStatusId = 20;
        }

        if ($workingStepStatusId > 0) {
            if ($request->sendReportStatus == "1") {
                // store report in 'timesheets' table
                $addRecordForReceivedMissingPart = $buttonsRepository->addRecordForReceivedMissingPart($request);
            }

            $stausUpdatedWorkingStep = $buttonsRepository->updateWorkingStepStatus($workingStepId, $workingStepStatusId);
            $saveOperationStatus = $buttonsRepository->saveOperationStatus($workingStepId, $workingStepStatusId);
        } else {
            $stausUpdatedWorkingStep = true;
            $saveOperationStatus = true;
        }

       if ($stausUpdatedWorkingStep && $stausUpdatedComponent && $saveOperationStatus && $addRecordForReceivedMissingPart) {

           switch ($workingStepStatusId) {
                        case 2:
                            $status = __('bgo.production');
                            break;
                        case 6:
                            $status = __('bgo.missing');
                            break;
                        case 20:
                            $status = __('bgo.complete');
                            break;
                        default:
                            $status = 'equal';
                    }
            
         // get border color for new status
        $borderColor = ($workingStepStatusId != null) ? $buttonsRepository->getBorderColor($workingStepStatusId) : "#000";
        
        // get background color for new status
        $backgroundColor = ($workingStepStatusId != null) ? $buttonsRepository->getBackgroundColor($workingStepStatusId) : "#000";
           
           return ['status' => $status, 'statusId' => $workingStepStatusId, 'hasMissingParts' => $hasMissingParts,
                   'borderColor' => $borderColor, 'backgroundColor' => $backgroundColor];
       }
       else {
           return ['status' => '', 'statusId' => 0];
       }             
    }

    /**
     * Report missing part for click on buttons 'Report missing part' in Zkm tab.
     * Store 'missing' status for clicked button (missing material).
     *
     * @return $status String 
     */
    public function  reportZkmMissingPart(int $salesorderItemsId,  int $missingMaterial, MissingPartRepository $missingPartRepository){
        
        
        $stausUpdatedZkmComponent = $missingPartRepository->updateZkmComponentStatus($salesorderItemsId, $missingMaterial); // '1' => material is missing
                       
       if ($stausUpdatedZkmComponent) {
           $status = 'updatedZkmComponent';
           return $status;
       }
       else {
           return "";
       }             
    }

}
