<?php

namespace App\Repositories\Go;

use App\ProdorderComponent;
use App\Repositories\Go\ButtonsRepository;
use App\SalesorderItem;
use App\ProdorderOperation;

/**
 * Update status 'missing' in the table 'product_material' and status 'operation_statusId' in the table 'product_workingstep'.
 * Update material_status in the table 'prodorder_operations'.
 * Update zkm status 'missing' in the table 'salesorder_items'.
 *
 */
class MissingPartRepository {

    /**
     * Update status 'missing' in the table 'product_material' for selected component/material with new status ( 1 => for missing material, 0 => not missing)
     * 
     * @return TRUE if status is updated or FALSE if update fails
     */
    public function updateComponentStatus(int $productMaterialId, int $missing, int $productWorkingstepId, ButtonsRepository $buttonsRepository) {

        // update status for component ( one working step may contain more components)

        $resultBoolean = false;
        $productMaterial = ProdorderComponent::find($productMaterialId);
        $productMaterial->missing = $missing;
        $saveMissing = !$productMaterial->isDirty() || $productMaterial->save();

        if ($saveMissing) {
            // update material_status in the table 'prodorder_operations' 
            $productWorkingstep = ProdorderOperation::find($productWorkingstepId);

            // timestamp updated_at is used to mark change for prod_order_list_status_id, which is used to store 'real_start_time' in the table 'timesheets'
            $productWorkingstep->timestamps = false;

            // status is 0 if all materials are available
            // status is 1 if at least one material is missing
            $productWorkingstep->material_status = $buttonsRepository->hasMissingParts($productWorkingstepId) ? 1 : 0;

            $resultBoolean = !$productWorkingstep->isDirty() || $productWorkingstep->save(); // save without change of timestamp
        }


        return $resultBoolean;
    }

    /**
     * Update zkm status 'missing' in the table 'salesorder_items' for selected component/material with new status ( 1 => for missing material, 0 => not missing)
     * 
     * @return TRUE if status is updated or FALSE if update fails
     */
    public function updateZkmComponentStatus(int $salesorderItemsId,  int $missing) {
        
        // update status for zkm component

        $salesorderItem = SalesorderItem::find($salesorderItemsId);
        $salesorderItem->missing = $missing;
        $resultBoolean = !$salesorderItem->isDirty() || $salesorderItem->save();
        
        return $resultBoolean;                                    
    }

}
