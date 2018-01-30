<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use App\Library\Checklist\Parser;

class ChecklistController extends Controller {
    public function validateText(Request $request) {
        $params = $request->all();
        $parser = new Parser();
        $checklist = null;
        if(!empty($params['data'])) {
            $parser->parse($params['data']);
            $checklist = $parser->getItemModels();
            \Illuminate\Support\Facades\Log::debug('parse->getModels: #' . print_r(compact('checklist'), true) . '*');
        }
        $ret = view('admin.checklist.frame', compact('checklist'));
        exit($ret); 
    }
    public function displayValidator(Request $request) {
        
        $items = [
            (object)[   'prodorder_operation_id' => 0,
                'name' => '',
                'is_active' => 1,
                'item_type' => 'TEXT',
                'option1' => null,
                'option2' => null,
                'label' => 'Dies ist ein Text',
                'line_break' => 1,
                'value' => '',
            ],
            (object)[   'prodorder_operation_id' => 0,
                'name' => 'CB1',
                'is_active' => 1,
                'item_type' => 'IT',
                'option1' => null,
                'option2' => null,
                'label' => 'Dies ist eine Checkbox',
                'line_break' => 1,
                'value' => '',
            ],
            (object)[   'prodorder_operation_id' => 0,
                'name' => '',
                'is_active' => 1,
                'item_type' => 'TEXT',
                'option1' => null,
                'option2' => null,
                'label' => 'Dies ist noch ein Text',
                'line_break' => 1,
                'value' => '',
            ],
            (object)[   'prodorder_operation_id' => 0,
                'name' => 'CB2',
                'is_active' => 1,
                'item_type' => 'IT2',
                'option1' => null,
                'option2' => null,
                'label' => 'Dies ist eine eingerückte Checkbox',
                'line_break' => 1,
                'value' => '1',
            ],
            (object)[   'prodorder_operation_id' => 0,
                'name' => 'INP1',
                'is_active' => 1,
                'item_type' => 'INP',
                'option1' => null,
                'option2' => null,
                'label' => 'Dies ist ein Eingabefeld',
                'line_break' => 1,
                'value' => '',
            ],
            (object)[   'prodorder_operation_id' => 0,
                'name' => 'MW1',
                'is_active' => 1,
                'item_type' => 'MW',
                'option1' => 'unter text',
                'option2' => '1<MW1&&MW1<5',
                'label' => 'Dies ist ein Messwertfeld',
                'line_break' => 1,
                'value' => '',
            ],
            (object)[   'prodorder_operation_id' => 0,
                'name' => 'REF1',
                'is_active' => 1,
                'item_type' => 'REF',
                'option1' => 'www.google.com',
                'option2' => '',
                'label' => 'Dies ist eine Testreferenz',
                'line_break' => 1,
                'value' => '',
            ],
            (object)[   'prodorder_operation_id' => 0,
                'name' => 'HTTP1',
                'is_active' => 1,
                'item_type' => 'HTTP',
                'option1' => 'www.google.com',
                'option2' => '',
                'label' => 'Dies ist ein Hyperlink',
                'line_break' => 1,
                'value' => '',
            ],
            (object)[   'prodorder_operation_id' => 0,
                'name' => 'HTTPS1',
                'is_active' => 1,
                'item_type' => 'HTTPS',
                'option1' => 'https://www.google.com',
                'option2' => '1<MW1&&MW1<5',
                'label' => 'Dies ist ein sicherer Hyperlink',
                'line_break' => 1,
                'value' => '',
            ],
            (object)[   'prodorder_operation_id' => 0,
                'name' => 'FILE1',
                'is_active' => 1,
                'item_type' => 'FILE',
                'option1' => '',
                'option2' => '',
                'label' => 'Datei auswählen',
                'line_break' => 1,
                'value' => '',
            ],
            (object)[   'prodorder_operation_id' => 0,
                'name' => 'TEXT3',
                'is_active' => 1,
                'item_type' => 'TEXT',
                'option1' => '',
                'option2' => '',
                'label' => 'Hier wird der Wert von 0_INP1 angezeigt ',
                'line_break' => 1,
                'value' => '',
            ],
            (object)[   'prodorder_operation_id' => 0,
                'name' => 'VAL1',
                'is_active' => 1,
                'item_type' => 'VAL',
                'option1' => '0_INP1',
                'option2' => '',
                'label' => 'blah',
                'line_break' => 0,
                'value' => '',
            ],
        ];
//        $items =[];
        
        return view('admin.checklist.validator', [
            'checklist' => $items,
            'include_css' => ['checklist.css'],
            'include_blade_js' => [
                'admin.checklist.js.validator',
                'admin.checklist.items.js.base',
                'admin.checklist.items.js.text',
                'admin.checklist.items.js.checkBox',
                'admin.checklist.items.js.input',
                'admin.checklist.items.js.measurement',
                'admin.checklist.items.js.val',
                'admin.checklist.js.frame'     //always include last
            ],
        ]);
    }
}