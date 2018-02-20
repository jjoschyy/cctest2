<?php

namespace App\Http\Controllers\Go;

use App\Http\Controllers\Controller;
use App\Repositories\Go\ButtonsRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

/**
 * Update status for selected working step with selected button (opration-overview and parallel-sequence).
 * Implement functionalities for 'Error report' after click on 'Error' button.
 *
 */
class ButtonsController extends Controller {

    /**
     * Update status for selected working step with selected button.
     *
     * STATUSES => pause:5, error:4, finished:3, start:2
     * 
     * All Statuses => SELECT distinct operation_status_id FROM `prodorder_operations` => 1 2 3 5 20 91 null
     * 
     * @return string representing button Id (staus name) or empty string if update fails
     */
    public function selectedBtn(string $selectedBtn, int $selectedWorkingStepId, int $previousStatusId, ButtonsRepository $buttonsRepository) {

        $hasMissingParts = false;
        $stausUpdated = true;
        $saveOperationStatus = true;
        $status = "";

        switch ($selectedBtn) {
            case 'Started':
                // check if penultimate status 'Production' or 'Complete'
                $penultimateStatus = $buttonsRepository->checkPenultimateStatus($selectedWorkingStepId);
                if ($penultimateStatus == 20) { // complete
                    $newStatusId = 20;
                    $status = __('go.complete');
                } else {
                    $newStatusId = 2;
                    $status = __('go.production');

                    if ($previousStatusId == 1) {
                        Log::info('Sending request to REST API => starting operation for the first time with the status PRODUCTION for working step ' . $selectedWorkingStepId); // TODO
                    }
                }
                break;
            case 'Paused':
                $newStatusId = 5;
                $status = __('go.pause');
                break;
            case 'Error':
                $newStatusId = 4;
                $status = __('go.error');
                break;
            case 'Confirmed':
                $newStatusId = 91;
                $status = __('go.confirmation');
                $hasMissingParts = $buttonsRepository->hasMissingParts($selectedWorkingStepId);
                if ($hasMissingParts) {
                    $newStatusId = -91;
                } else {
                    Log::info('Sending request to REST API with status COMPLETE for working step ' . $selectedWorkingStepId); // TODO
                }

                break;
            default:
                $newStatusId = 0;
        }

        if (!$hasMissingParts) {
            $stausUpdated = $buttonsRepository->updateWorkingStepStatus($selectedWorkingStepId, $newStatusId);
            $saveOperationStatus = $buttonsRepository->saveOperationStatus($selectedWorkingStepId, $newStatusId);
        }
       
        // get border color for new status
        $borderColor = ($newStatusId != 0) ? $buttonsRepository->getBorderColor($newStatusId) : "#000";
        
        // get background color for new status
        $backgroundColor = ($newStatusId != 0) ? $buttonsRepository->getBackgroundColor($newStatusId) : "#000";
        
        
       // check if clicked buttons 'Start/Continue' or 'Confirm'
//       if($newStatusId == 2)
//       {
//           // update all statuses 'missing' to '0' in the table 'product_material' for selected working step
//           $stausEnableDisabledBtns = $buttonsRepository->updateDisabledComponentsInWorkingStep($selectedWorkingStepId, 0); // '0' => material is not missing
//           $stausUpdated = $stausUpdated && $stausEnableDisabledBtns;
//       }
       
       if ($stausUpdated && $saveOperationStatus) {
           return ['status' => $status, 'statusId' => $newStatusId,
                   'borderColor' => $borderColor, 'backgroundColor' => $backgroundColor];
       }
       else {
           return ['status' => '', 'statusId' => 0];
       }       
    }

    /**
     * Get list of sub-categories for selected main category.
     * 
     * @param  int categoryId 
     * 
     * @return JSON representing list of sub-categories including sub-category ID and sub-category name
     */
    public function getSubCategories(int $categoryId, ButtonsRepository $buttonsRepository) {

        // get sub-categories for error report
        $subCategories = $buttonsRepository->getSubCategories($categoryId);

        return $subCategories;
    }

    /**
     * Receive error report and send data for storing in data base.
     * 
     * @param  \Illuminate\Http\Request  request
     * 
     * @return boolean
     */
    public function sendErrorReport(Request $request, ButtonsRepository $buttonsRepository) {

        $addRecordForErrorReport = $buttonsRepository->addRecordForErrorReport($request);

        return "$addRecordForErrorReport";
    }

    /**
     * Receive pause report and send data for storing in data base.
     * 
     * @param  \Illuminate\Http\Request  request
     * 
     * @return boolean
     */
    public function sendPauseReport(Request $request, ButtonsRepository $buttonsRepository) {

        $addRecordForPauseReport = true;

        if ($request->sendReportStatus == "1") {
            // store report in 'timesheets' table
            $addRecordForPauseReport = $buttonsRepository->addRecordForPauseReport($request);
        }

        return "$addRecordForPauseReport";
    }

}
