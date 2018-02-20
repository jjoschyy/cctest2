<?php

namespace App\Repositories\Go;

use App\TimesheetSubCategory;
use Illuminate\Http\Request;
use App\Timesheet;
use App\ProdorderOperationStatus;
use App\ProdorderStatus;
use App\User;
use App\ProdorderOperation;
use App\ProdorderComponent;
use Auth,
    DateTime;

/**
 * Update status for selected working step with buttons 'Start', 'Pause', 'Error' and 'Confirm' at the tab 
 * component-overview and parallel-sequence in view page resources/views/go/board/index.blade.php.
 * 
 * Handle 'Error report' after click on 'Error' button.
 *
 */
class ButtonsRepository {

    /**
     * Update status 'operation_statusId' in the table 'prodorder_operations' for selected working step with new status.
     * Update material_status in the table 'prodorder_operations' for selected working step.
     * 
     * @return TRUE if updated or FALSE if update fails
     */
    public function updateWorkingStepStatus(int $selectedWorkingStepId, int $newStatusId) {

        // update status for working step
        $resultBoolean = false;
        $productWorkingstep = ProdorderOperation::find($selectedWorkingStepId);
        $productWorkingstep->prodorder_status_id = $newStatusId;

        // https://stackoverflow.com/questions/39281308/now-save-return-false-in-laravel-5-3
        $saveSuccess = !$productWorkingstep->isDirty() || $productWorkingstep->save();

        if ($saveSuccess) {
            if ($newStatusId == 4 || $newStatusId == 5 || $newStatusId == 6) { // record real start time
                // instead 'update_at' use new attribute 'real_start_time' => to avoid potential update of other attribute from other source which could change 'update_at'
                // 'real_start_time' is time when status is changed to 'Pause', 'Error' or 'Missing part'
                $productWorkingstep = ProdorderOperation::find($selectedWorkingStepId);
                $updatedAt = $productWorkingstep->updated_at;
                $productWorkingstep->real_start_time = $updatedAt;
                $resultBoolean = !$productWorkingstep->isDirty() || $productWorkingstep->save();
            } else {
                $resultBoolean = true;
            }
        }

        return $resultBoolean;
    }

    /**
     * Update all statuses 'missing' to '0' in the table 'product_material' for selected working step ( 1 => for missing material, 0 => not missing),
     * after click on buttons 'Start/Continue' or 'Confirm'.
     * => enable all buttons 'Missing material reported' for selected working step.
     * 
     * Method is not used as team made deceision to change implemetation!
     * 
     * @return TRUE if status is updated or FALSE if update fails
     */
    public function updateDisabledComponentsInWorkingStep(int $selectedWorkingStepId, int $missing) {

        // update all statuses 'missing' to '0' in the table 'product_material' for selected working step ( one working step may contain more components/materials)
//        $pdo = DB::connection()->getPdo();
//        $statement = $pdo->prepare("UPDATE prodorder_components
//                                    SET missing = :missing
//                                    WHERE prodorder_operation_id = :selectedWorkingStepId
//                                    ");        
//        $resultBoolean = $statement->execute(array(':selectedWorkingStepId' => $selectedWorkingStepId, ':missing' => $missing));

        $productMaterialUpdate = ProdorderComponent::where('prodorder_operation_id', '=', $selectedWorkingStepId)
                ->update(['missing' => $missing]);

        return $productMaterialUpdate;
    }

    /**
     * Find if working step has reported missing parts in the table 'product_material'
     * after click on button 'Confirm'.
     * 
     * @return TRUE if working step has reported missing parts
     */
    public function hasMissingParts(int $selectedWorkingStepId) {

        // find missing parts in working step
        $missingPartsExist = ProdorderComponent::where('prodorder_operation_id', '=', $selectedWorkingStepId)
                        ->where('missing', '=', '1')->exists();

        return $missingPartsExist;
    }

    /**
     * Get sub-categories to display in the dropdown for the modal window 'Error report' on the 'Board' page after click on button 'Error'
     *      
     * @return $subCategories[] of objects of type App\TimesheetSubCategory.php
     */
    public function getSubCategories(int $categoryId) {

        // get sub-categories
        $subCategories = TimesheetSubCategory::where('timesheet_main_category_id', '=', $categoryId)->get(['id', 'title_text', 'receiver_no']);

        return $subCategories;
    }

    /**
     * Insert record in the table 'timesheets' for given 'Error report'
     *      
     * @return TRUE on input success
     */
    public function addRecordForErrorReport(Request $request) {

        // attributes for sub-category
        $timesheetListSubCategory = TimesheetSubCategory::find($request->subCategoryId);

        // attributes from registered user
        $user = User::find(Auth::user()->id);

        // attributes for table 'prodorder_operations'
        $productWorkingStep = ProdorderOperation::find($request->workingStepId);

        // insert 'Error report'
        $timeSheet = new Timesheet();

        switch ($request->failureSource) {
            case 'WORKERS_FAULT':
                $wageType = "9722";
                break;
            case 'SUPPLIERS_FAULT':
                $wageType = "9726";
                break;
            case 'UNCLEAR_FAULT':
                $wageType = "9721";
                break;
            default:
                $wageType = "9721";
        }

        $format = 'Y-m-d H:i:s';
        $dateTimeStart = DateTime::createFromFormat($format, $request->dateTimeStart);
        $dateTimeEnd = DateTime::createFromFormat($format, $request->dateTimeEnd);
        $duration = $dateTimeEnd->diff($dateTimeStart)->format('%H:%I:%S');
        ;

        $timeSheet->timesheet_type = 'TEC';
        $timeSheet->timesheet_main_category_id = $request->categoryId;
        $timeSheet->timesheet_sub_category_id = $request->subCategoryId;
        $timeSheet->failure_source = $request->failureSource;
        $timeSheet->location_id = $user->location_id;
        $timeSheet->user_id = Auth::user()->id;
        $timeSheet->employee_number = $user->employee_number;
        $timeSheet->employee_cost_center = $user->cost_center;
        $timeSheet->employee_department_id = $user->department_id;
        $timeSheet->prodorder_id = $productWorkingStep->prodorder_id;
        $timeSheet->prodorder_operation_id = $request->workingStepId;
        $timeSheet->start_time = $dateTimeStart; // start time inserted in input field by user
        $timeSheet->real_start_time = $productWorkingStep->real_start_time; // when 'Error' button was pressed - stored in the table 'prodorder_operations'
        $timeSheet->stop_time = $dateTimeEnd; // end time inserted in input field by user
        $timeSheet->real_stop_time = now(); // time when 'Error report' was sent
        $timeSheet->duration = $duration; // $dateTimeEnd - $dateTimeStart (defined by user in input fields)
        $timeSheet->description = $request->message;
        $timeSheet->state = 'CREATED';
        $timeSheet->history = $productWorkingStep->real_start_time . "," . Auth::user()->id . ",CREATED";
        $timeSheet->data_entry_profile = $timesheetListSubCategory->data_entry_profile;
        $timeSheet->activity_type = $timesheetListSubCategory->activity_type;
        $timeSheet->wage_type = $wageType;
        $timeSheet->assignment_type = $timesheetListSubCategory->assignment_type;
        $timeSheet->account_assignment = $timesheetListSubCategory->account_assignment;
        $timeSheet->sender_cost_center = $timesheetListSubCategory->sender_cost_center;
        $timeSheet->receiver_no = $request->receiverNumber;
        $timeSheet->receiver_no_pos = $request->receiverNumberPosition;
        $timeSheet->receiver_no_type = $request->receiverType;
        $timeSheet->delivery_info = null;

        $resultBoolean = !$timeSheet->isDirty() || $timeSheet->save();

        return $resultBoolean;
    }

    /**
     * Insert record in the table 'timesheets' for given 'Pause report'
     *      
     * @return TRUE on input success
     */
    public function addRecordForPauseReport(Request $request) {

        // attributes for sub-category
        $timesheetListSubCategory = TimesheetSubCategory::find($request->subCategoryId);

        // attributes from registered user
        $user = User::find(Auth::user()->id);

        // attributes for table 'prodorder_operations'
        $productWorkingStep = ProdorderOperation::find($request->workingStepId);

        // insert 'Pause report'
        $timeSheet = new Timesheet();

        $format = 'Y-m-d H:i:s';
        $dateTimeStart = DateTime::createFromFormat($format, $request->dateTimeStart);
        $dateTimeEnd = DateTime::createFromFormat($format, $request->dateTimeEnd);
        $duration = $dateTimeEnd->diff($dateTimeStart)->format('%H:%I:%S');
        ;

        $timeSheet->timesheet_type = 'ORG';
        $timeSheet->timesheet_main_category_id = $request->categoryId;
        $timeSheet->timesheet_sub_category_id = $request->subCategoryId;
        $timeSheet->failure_source = null;
        $timeSheet->location_id = $user->location_id;
        $timeSheet->user_id = Auth::user()->id;
        $timeSheet->employee_number = $user->employee_number;
        $timeSheet->employee_cost_center = $user->cost_center;
        $timeSheet->employee_department_id = $user->department_id;
        $timeSheet->prodorder_id = $productWorkingStep->prodorder_id;
        $timeSheet->prodorder_operation_id = $request->workingStepId;
        $timeSheet->start_time = $dateTimeStart; // start time inserted in input field by user
        $timeSheet->real_start_time = $productWorkingStep->real_start_time; // when 'Pause' button was pressed - stored in the table 'prodorder_operations'
        $timeSheet->stop_time = $dateTimeEnd; // end time inserted in input field by user
        $timeSheet->real_stop_time = now(); // time when 'Pause report' was sent
        $timeSheet->duration = $duration; // $dateTimeEnd - $dateTimeStart (defined by user in input fields)
        $timeSheet->description = $request->message;
        $timeSheet->state = 'CREATED';
        $timeSheet->history = $productWorkingStep->real_start_time . "," . Auth::user()->id . ",CREATED";
        $timeSheet->data_entry_profile = $timesheetListSubCategory->data_entry_profile;
        $timeSheet->activity_type = $timesheetListSubCategory->activity_type;
        $timeSheet->wage_type = $timesheetListSubCategory->wage_type;   // TODO - check
        $timeSheet->assignment_type = $timesheetListSubCategory->assignment_type;
        $timeSheet->account_assignment = $timesheetListSubCategory->account_assignment;
        $timeSheet->sender_cost_center = $timesheetListSubCategory->sender_cost_center;
        $timeSheet->receiver_no = null;  // TODO - check if OK
        $timeSheet->receiver_no_pos = null;
        $timeSheet->receiver_no_type = null;
        $timeSheet->delivery_info = null;


        $resultBoolean = !$timeSheet->isDirty() || $timeSheet->save();

        return $resultBoolean;
    }

    /**
     * Insert record in the table 'timesheets' for given 'Received missing part' report
     *      
     * @return TRUE on input success
     */
    public function addRecordForReceivedMissingPart(Request $request) {

        // attributes for sub-category
        $timesheetListSubCategory = TimesheetSubCategory::find($request->categoryId); // we have only one main category with id 18
        // attributes from registered user
        $user = User::find(Auth::user()->id);

        // attributes for table 'prodorder_operations'
        $productWorkingStep = ProdorderOperation::find($request->productWorkingstepId);

        // insert report 'Received missing part'
        $timeSheet = new Timesheet();

        $format = 'Y-m-d H:i:s';
        $dateTimeStart = DateTime::createFromFormat($format, $request->dateTimeStart);
        $dateTimeEnd = DateTime::createFromFormat($format, $request->dateTimeEnd);
        $duration = $dateTimeEnd->diff($dateTimeStart)->format('%H:%I:%S');
        ;

        $timeSheet->timesheet_type = 'MPA';
        $timeSheet->timesheet_main_category_id = 18;
        $timeSheet->timesheet_sub_category_id = $request->categoryId;
        $timeSheet->failure_source = null;
        $timeSheet->location_id = $user->location_id;
        $timeSheet->user_id = Auth::user()->id;
        $timeSheet->employee_number = $user->employee_number;
        $timeSheet->employee_cost_center = $user->cost_center;
        $timeSheet->employee_department_id = $user->department_id;
        $timeSheet->prodorder_id = $productWorkingStep->prodorder_id;
        $timeSheet->prodorder_operation_id = $request->productWorkingstepId;
        $timeSheet->start_time = $dateTimeStart; // start time inserted in input field by user
        $timeSheet->real_start_time = $productWorkingStep->real_start_time; // when 'Missing part' status was set - stored in the table 'prodorder_operations'
        $timeSheet->stop_time = $dateTimeEnd; // end time inserted in input field by user
        $timeSheet->real_stop_time = now(); // time when 'Pause report' was sent
        $timeSheet->duration = $duration; // $dateTimeEnd - $dateTimeStart (defined by user in input fields)
        $timeSheet->description = $request->message;
        $timeSheet->state = 'CREATED';
        $timeSheet->history = $productWorkingStep->real_start_time . "," . Auth::user()->id . ",CREATED";
        $timeSheet->data_entry_profile = $timesheetListSubCategory->data_entry_profile;
        $timeSheet->activity_type = $timesheetListSubCategory->activity_type;
        $timeSheet->wage_type = $timesheetListSubCategory->wage_type;   // TODO - check
        $timeSheet->assignment_type = $timesheetListSubCategory->assignment_type;
        $timeSheet->account_assignment = $timesheetListSubCategory->account_assignment;
        $timeSheet->sender_cost_center = $timesheetListSubCategory->sender_cost_center;
        $timeSheet->receiver_no = null;  // TODO - check if OK
        $timeSheet->receiver_no_pos = null;
        $timeSheet->receiver_no_type = null;
        $timeSheet->delivery_info = null;


        $resultBoolean = !$timeSheet->isDirty() || $timeSheet->save();

        return $resultBoolean;
    }

    /**
     * Insert record in the table 'prodorder_operation_status' for new status triggered by clicks
     * with operation buttons (Start/Continue, Pause, Error or Confirm) 
     * or with buttons for reporting/receiving missing part if selected option to change status on Error/Production.
     *      
     * @return TRUE on insert success
     */
    public function saveOperationStatus(int $operationId, int $statusId) {
        ProdorderOperation::find($operationId)->prodorderStatuses()->attach($statusId);
        return true;
    }

    /**
     * Check status ('prodorder_status_id') before previous (penultimate status) in the table 'prodorder_operation_status'.
     * 
     * Return from 'Pause' or 'Error' with press on 'Continue' => to status 'Production' or 'Complete' (see diagram in documentaion).
     *      
     * @return $penultimateStatus int 
     */
    public function checkPenultimateStatus(int $operationId) {
        return ProdorderOperation::find($operationId)->prodorderStatuses()->orderPivotDesc()->skip(1)->value('prodorder_status_id');        
    }

    /**
     * Get border color for new operation status
     */
    public function getBorderColor(int $statusId) {
        return ProdorderStatus::find($statusId)->value('border');
    }

    /**
     * Get background color for new operation status          
     */
    public function getBackgroundColor(int $statusId) {
        return ProdorderStatus::find($statusId)->value('background');
    }

}
