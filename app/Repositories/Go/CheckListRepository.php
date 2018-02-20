<?php

namespace App\Repositories\Go;

use App\ViewModel\Go\CheckList;
use Illuminate\Http\Request;

/**
 * Update checklist and check if completed or not.
 *
 */
class CheckListRepository {

    /**
     * Update table 'prod_order_operation_checklist_items' if checklist item is changed.
     * Check if all required items in checklist are checked ( attributes 'is_checked' and 'is_required'). 
     *
     * @return $isCheckListChecked boolean
     */
    public function updateCheckList(Request $request) {
        
        return false; // HIER NEUER CHECKLIST PARSER

        $isCheckListChecked = false;
        $isChecked = false;
        
        $checkListRow = ProdorderOperationChecklistItem::where('prod_order_operation_id', '=', $request->workingStepId)
                        ->where('check_list_item_number', '=', $request->checkListItemNumber)->first();

        $inputType = $request->inputType;

        switch ($inputType) {
            case 'INP':
                if (strlen($request->itemValue) > 2) // sample for validation - TODO
                    $isChecked = true;
                break;
            case 'MW':
                // - TODO - server validation
                if (strlen($request->itemValue) > 0)
                    $isChecked = true;
                break;
            case 'IT2':
            case 'IT':
                if ($request->inputValue == 'true')
                    $isChecked = true;
                break;
            default:
                $isChecked = false;
        }

        $checkListRow->is_checked = $isChecked;
        $checkListRow->value = $request->itemValue;

        $resultBoolean = !$checkListRow->isDirty() || $checkListRow->save();

        if ($resultBoolean) {
            // check if all items on checklist are checked 
            $isCheckListChecked = $this->isCheckListChecked($request->workingStepId);
        }

        return $isCheckListChecked;
    }

    /**
     * Check if all items on checklist are checked.
     *
     * @return $isCheckListChecked boolean
     */
    public function isCheckListChecked(int $workingStepId) {
        
        return false; // HIER NEUER CHECKLIST PARSER

        $isCheckListChecked = !ProdorderOperationChecklistItem::select()
                        ->where('prod_order_operation_id', '=', $workingStepId)
                        ->where('is_required', '=', 1)
                        ->where('is_checked', '=', 0)
                        ->exists();
        return $isCheckListChecked;
    }

    /**
     * Update value for radio button in the table 'prod_order_operation_checklist_items'.
     * Update 'condition' in all rows where 'condition_name' is radio 'name', if radio button has associated conditions.
     *
     * @return checkList as JSON array with updated checklist
     */
    public function updateRadioConditions(Request $request) {

        return []; // HIER NEUER CHECKLIST PARSER
        
        $itemValue = $request->itemValue;
        $conditionValue = $request->conditionValue;
        $workingStepId = $request->workingStepId;

        $checkListRadioRow = ProdorderOperationChecklistItem::where('prod_order_operation_id', '=', $workingStepId)
                        ->where('check_list_item_number', '=', $request->checkListItemNumber)->first();

        $radioName = $checkListRadioRow->name;

        // update radio value
        $checkListRadioRow->value = $itemValue;
        $resultSave = !$checkListRadioRow->isDirty() || $checkListRadioRow->save();

        $condition = (($itemValue == 'yes' && $conditionValue == 1) || ($itemValue == 'no' && $conditionValue == 0)) ? '0' : '1';

        // update radio conditions
        if ($resultSave) {
            $updatedRows = ProdorderOperationChecklistItem::where('prod_order_operation_id', '=', $workingStepId)
                    ->where('condition_name', '=', $radioName)
                    ->update(['condition' => $condition]);
        }

        if ($updatedRows > 0) {
            $checkListData = ProdorderOperationChecklistItem::select()
                            ->where('prod_order_operation_id', '=', $workingStepId)->get();

            foreach ($checkListData as $row) {
                $checkListElement = new CheckList($row->production_order_operation_id, $row->check_list_item_type, $row->condition, $row->display_snippet, $row->is_active, $row->is_checked, $row->is_required, $row->value, $row->pre_text, $row->text, $row->name, $row->rule_details);
                $checkList[] = $checkListElement;
            }
        } else {
            $checkList = [];
        }

        return $checkList;
    }
    
    public function updateItem(Request $request) {
        $name = $request->get('name');
        $prodorder_operation_id = $request->get('prodorder_operation_id');
        $value = $request->get('value');
        \Illuminate\Support\Facades\Log::debug('update model with name: ' . $name . ' prodorder_id: ' . $prodorder_operation_id . ' and value: ' . $value);
        \App\ProdorderChecklist::where('prodorder_operation_id', $prodorder_operation_id)
            ->where('name', $name)
            ->update(['value' =>$value]);
    }
    
    public function getItems($prodorder_operation_id) {
        \Illuminate\Support\Facades\Log::debug('getItems for Operation ' . $prodorder_operation_id);
        return \App\ProdorderChecklist::where('prodorder_operation_id', $prodorder_operation_id)->get();
    }

}
