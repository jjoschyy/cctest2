<?php

namespace App\Http\Controllers\Go;

use App\Http\Controllers\Controller;
use App\Repositories\BoardRepository;

/**
 * Get data form repository for board page and return default view: board.index.blade.php
 */
class BoardController extends Controller {

    /**
     * Starts board application, load board data
     *
     * @return 'resources/views/go/board/index.blade.php'
     */
    public function index($zkm, $fauf, BoardRepository $board) {
        
        $userData=Auth::user();
        // get maximum character length for status text
         $maxStatusLength = $board->getMaxStatusLength();

        // operation overview tab
        $workingSteps = $board->getWorkingSteps($zkm, $fauf, $userData->id); 
        
        // parallel sequence tab
        $parallelWorkingSteps = $board->getParallelSequenceWorkingSteps($zkm, $fauf, $userData->id);

        // component overview tab
        $components = $board->getAllComponents($zkm, $fauf, $userData->id);

        // zkm component overview tab
        $zkmComponents = $board->getZkmComponents($zkm, $fauf, $userData->id);

        // get error categories for error report
        $errorCategories = $board->getErrorCategories();

        // get pause categories for pause report
        $pauseCategories = $board->getPauseCategories();

        // get categories for 'Report/received missing part' => sub-categories for category 'Waiting for Parts'/'Warten auf Material'
        $missingPartsCategories = $board->getMissingPartsCategories();
        
        return view ('go.board.index',['workingSteps' => $workingSteps, 'parallelWorkingSteps' => $parallelWorkingSteps, 'components' => $components,
                    'zkmComponents' => $zkmComponents, 'userData' => $userData, 'zkm' => $zkm, 'fauf' => $fauf,
                    'errorCategories' => $errorCategories, 'pauseCategories' => $pauseCategories, 'missingPartsCategories' => $missingPartsCategories,
                    'include_css'=>['go/board.css'],
                    'maxStatusLength' => $maxStatusLength
                    ]);
    }   
}
