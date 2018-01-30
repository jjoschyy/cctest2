<?php

namespace App\Http\Controllers\Go;

use App\Http\Controllers\Controller;
use App\Repositories\OperationRepository;

/**
 * Get data form repository for operation-overview and parallel-sequence tab on board page.
 * Return right view (check list and component overview) for selected working step.
 *
 */
class OperationController extends Controller {

    /**
     * Get check list and component overview in operation-overview tab for selected working step and return JSON to caller: public/js/go/app/operationController.js
     * Get check list and component overview in parallel-sequence tab for selected working step and return JSON to caller: public/js/go/app/parallelController.js
     *
     * @return JSON representing 'isCheckListChecked', 'checkList', 'workingStepStatus' and 'components' array
     */
    public function operationOverviewRight($productWorkingstepId, OperationRepository $operationOverviewRight) {

        $checkList = $operationOverviewRight->getCheckList($productWorkingstepId)['checkList'];

        $isCheckListChecked = $operationOverviewRight->getCheckList($productWorkingstepId)['isCheckListChecked'];

        $workingStepStatus = $operationOverviewRight->getCheckList($productWorkingstepId)['workingStepStatus'];

        $stepComponents = $operationOverviewRight->getComponentsForWorkingStep($productWorkingstepId);

        $overviewRight[] = ["isCheckListChecked" => $isCheckListChecked, "checkList" => $checkList,
                "workingStepStatus" => $workingStepStatus, "components" => $stepComponents];

        return $overviewRight;
    }

}
