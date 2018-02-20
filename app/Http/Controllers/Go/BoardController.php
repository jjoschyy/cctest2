<?php

namespace App\Http\Controllers\Go;

use App\Http\Controllers\Controller;
use App\Repositories\Go\BoardRepository;
use App\Prodorder;

/**
 * Get data form repository for board page and return default view: board.index.blade.php
 */
class BoardController extends Controller {

    /**
     * Starts board application, load board data
     *
     * @return 'resources/views/go/board/index.blade.php'
     */
    public function index($id, BoardRepository $board) {
        
        session(['productId' => $id]);
        $product = Prodorder::find($id);
        $user = \Auth::user();

        // get maximum character length for status text
        $maxStatusLength = $board->getMaxStatusLength();

        // operation overview tab
        $workingSteps = $board->getWorkingSteps($product, $user);

        // component overview tab
        $components = $board->getAllComponents($product, $user);

        // zkm component overview tab
        $zkmComponents = $board->getZkmComponents($product, $user);

        // documents overview tab
        $documents = $board->getDocuments($user); // TODO - params? - table still not defined - in the ticket does not specify if docs belong to user, fauf or something else?
       
        // get error categories for error report
        $errorCategories = $board->getErrorCategories();

        // get pause categories for pause report
        $pauseCategories = $board->getPauseCategories();

        // get categories for 'Report/received missing part' => sub-categories for category 'Waiting for Parts'/'Warten auf Material'
        $missingPartsCategories = $board->getMissingPartsCategories();
        
        // get all Areas (Bereiche) for selected country and city
        $areas = $board->getAreasForOrderMaterial();
        
        // get all Error Types
        $errorTypes = $board->getErrorTypesForOrderMaterial();
        
        return view('go.board.index', ['workingSteps' => $workingSteps, 'components' => $components,
            'zkmComponents' => $zkmComponents, 'langAbbreviation' => $user->language->iso_code, 'product' => $product, 'documents' => $documents,
            'errorCategories' => $errorCategories, 'pauseCategories' => $pauseCategories, 'missingPartsCategories' => $missingPartsCategories,
            'areas' => $areas, 'errorTypes' => $errorTypes,
            'include_css' => ['go/board.css'],
            'include_js' => array(
                'go/board/initController.js',
                'go/board/operationController.js',
                'go/board/buttonsController.js',
                'go/board/missingPartController.js',
                'go/board/checkListController.js',
                'go/board/orderMaterialController.js',
                'checklist/items/base.js',
                'checklist/items/checkBox.js',
                'checklist/items/input.js',
                'checklist/items/measurement.js',
                'checklist/items/val.js',
                'checklist/items/radio.js',
                'checklist/frame.js'     //always include last
            ),
            'maxStatusLength' => $maxStatusLength,
            'hideBreadcrumb' => true
        ]);
    }

}
