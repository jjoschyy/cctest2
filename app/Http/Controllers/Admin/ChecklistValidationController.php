<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use App\Library\Checklist\Parser;

class ChecklistValidationController extends Controller {
    public function validateText(Request $request) {
        $params = $request->all();
        $checklist = null;
        if(!empty($params['data'])) {
            $checklist = $this->validateData($params['data']);
        }       
        exit($checklist); 
    }
    public function displayValidator(Request $request) {
        return view('admin.checklist.validator', [
            'checklistNumber' => '0',
            'include_css' => ['admin/checklist.css'],
            'include_js' => [
                'checklist/validator.js',
                'checklist/items/base.js',
                'checklist/items/checkBox.js',
                'checklist/items/input.js',
                'checklist/items/measurement.js',
                'checklist/items/val.js',
                'checklist/items/radio.js',
                'checklist/items/button.js',
                'checklist/frame.js'     //always include last
            ],
        ]);
    }
    
    private function validateData(string $data) {
        $ret = null;
        $parser = new Parser();
        $parser->parse($data);
        if($parser->hasNoError()) {
            $checklistNumber = 0;
            $checklist = $parser->getRecords($checklistNumber);
            $ret = view('admin.checklist.frame', compact('checklist'))->render();
        }
        else {
            $errorMsg = $parser->getErrorMessage();
            $ret = view('admin.checklist.error', compact('$errorMsg'))->render();
        }
        return $ret;
    }
}