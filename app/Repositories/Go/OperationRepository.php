<?php

namespace App\Repositories\Go;

use App\ViewModel\Component;
use App\ProdOrderOperation;
use App\OperationStatus;
use App\ProdOrderOperationChecklistItem;
use App\ViewModel\CheckList;
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
    public function getCheckList(int $productWorkingstepId) {

        $productWorkingstep = ProdOrderOperation::find($productWorkingstepId);

        $productionOrderOperationChecklistItemExists = ProdOrderOperationChecklistItem::where('prod_order_operation_id', '=', $productWorkingstepId)->exists();

        $sequnceNo = $productWorkingstep->control_key != "ZJ39" ? '0' : '1';

        $isCheckListChecked = false;

        $checkList = [];

        $operationLongText = $productWorkingstep->operation_long_text;

        if (!$productionOrderOperationChecklistItemExists && strlen(trim($operationLongText)) > 0) { // if operation_long_text is not converted to checklist
            // creste check list for working step
            $checkListCreated = ChecklistGenerator::createChecklist($operationLongText, $productWorkingstepId, $sequnceNo);
        }

        if (strlen(trim($operationLongText)) > 0) {
            $checkListData = ProdOrderOperationChecklistItem::select()
                            ->where('prod_order_operation_id', '=', $productWorkingstepId)->get();

            $isCheckListChecked = !ProdOrderOperationChecklistItem::select()
                            ->where('prod_order_operation_id', '=', $productWorkingstepId)
                            ->where('is_required', '=', 1)
                            ->where('is_checked', '=', 0)
                            ->exists();

            foreach ($checkListData as $row) {
                $checkListElement = new CheckList($row->prod_order_operation_id, $row->check_list_item_type, $row->condition, $row->display_snippet, $row->is_active, $row->is_checked, $row->is_required, $row->value, $row->pre_text, $row->text, $row->name, $row->rule_details);
                $checkList[] = $checkListElement;
            }
        } else {
            $isCheckListChecked = true;
            $checkList = [];
        }

        // get working step status id
        $workingStepStatus = $productWorkingstep->prod_order_list_status_id;

        return ['checkList' => $checkList, 'isCheckListChecked' => $isCheckListChecked, 'workingStepStatus' => $workingStepStatus];
    }

    /**
     * Get list of components for selected working step.
     *
     *  @return $components[] of objects of type App\ViewModel\Component
     */
    public function getComponentsForWorkingStep(int $productWorkingstepId) {

        // Component Overview for working step

        $componentsData = DB::table('prodorder_operations')->select('prodorder_operations.id AS prod_order_operation_id', 'prodorder_operations.material_status', 'prod_order_components.id AS prod_order_component_id', 'prod_order_components.item_number', 'prod_order_components.missing', 'prod_order_list_components.material', 'prod_order_components.required_quantity', 'prod_order_components.required_quantity_unit', 'prod_order_list_components.content_data', 'prodorder_operations.prod_order_list_status_id')
                ->join('prod_order_list_statuses', 'prod_order_list_statuses.id', '=', 'prodorder_operations.prod_order_list_status_id')
                ->join('prod_order_components', 'prodorder_operations.id', '=', 'prod_order_components.prod_order_operation_id')
                ->join('prod_order_list_components', 'prod_order_components.prod_order_list_component_id', '=', 'prod_order_list_components.id')
                ->where('prodorder_operations.id', '=', $productWorkingstepId)
                ->whereIn('prodorder_operations.prod_order_list_status_id', array(2, 3, 4, 5, 6, 20, 91, 1))
                ->whereNotNull('prod_order_components.id')
                ->get();

        if (!$componentsData->isEmpty() && $componentsData[0]->item_number != null) { // check if operation step contains components
            $stepComponents = [];

            foreach ($componentsData as $row) {
                $stepComponent = new Component($row->prod_order_operation_id, $row->item_number, $row->material, $row->content_data, $row->required_quantity, $row->required_quantity_unit, $row->material_status, $row->prod_order_component_id, $row->missing, $row->prod_order_list_status_id);
                $stepComponents[] = $stepComponent;
            }
        } else {
            $stepComponents[] = null; // operation step does not contain components
        }

        return $stepComponents;
    }

}
