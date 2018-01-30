<?php

namespace App\Http\Requests\Sap;

use Illuminate\Foundation\Http\FormRequest;

class Confirmation extends FormRequest {

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize() {
        return true;
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public static function rules() {
        return [
                'Order_Confirmation' => 'required|array',
                'Order_Confirmation.ConfirmationNumber' => 'required|string|digits:10'
        ];
    }

}

/*
     * Sample Confirmation 2017-12-01
     */

//    {
//    "Order_Confirmation": {
//        "Plant": "1014",
//        "ConfirmationNumber": "0070511931",
//        "OrderNumber": "100004691097",
//        "Sequence": "000000",
//        "Operation": "9900",
//        "Yield": "2",
//        "Scrap": "0",
//        "EmployeeNumber": "00000000",
//        "ConfirmedActivity": "0.000 ",
//        "ConfirmedActivityUnit": "STD"
//    },
//    "id": "34e55c74-115a-447d-931d-c538c367440b",
//    "_lastUpdate": "2017-11-29T11:51:03.0209810+00:00",
//    "_esbSystem": "Azure.Function",
//    "_esbCorrelationId": "e1091330-84e3-4390-96ab-feb707a462ce"
//}

