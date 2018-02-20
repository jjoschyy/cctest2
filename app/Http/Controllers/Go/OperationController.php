<?php

namespace App\Http\Controllers\Go;

use App\Http\Controllers\Controller;
use App\Repositories\Go\OperationRepository;

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
    public function operationOverviewRight($productWorkingstepId, OperationRepository $operationRepo) {
        $checklist = $operationRepo->getCheckList($productWorkingstepId);
        $workingStepStatus = $operationRepo->getStatus($productWorkingstepId);
        $stepComponents = $operationRepo->getComponentsForWorkingStep($productWorkingstepId);
        $overviewRight = ["isCheckListChecked" => '',
            "checklist" => view('admin.checklist.frame', compact('checklist'))->render(),
            "workingStepStatus" => $workingStepStatus, 
            "components" => $stepComponents
        ];

        return $overviewRight;
    }
    
//    private function renderChecklist(int $prodorderId, string $longText) {
//        $parser = new \App\Library\Checklist\Parser();
//        $parser->parse($longText);
//        if($parser->hasNoError()) {
//            $operation = new \App\ProdorderOperation(['id' => $prodorderId]);
//            $checklist = $parser->getRecords($operation->id);
//            $checklistNumber = $operation->id;
//            $ret = view('admin.checklist.frame', compact('checklistNumber', 'checklist'))->render();
//        }
//        else {
//            $errorMsg = $parser->getErrorMessage();
//            $ret = view('admin.checklist.error', compact('$errorMsg'))->render();
//        }
//        return $ret;
//    }

}
