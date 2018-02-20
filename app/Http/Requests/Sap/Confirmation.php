<?php

namespace App\Http\Requests\Sap;

class Confirmation {

    /**
     * Get the validation rules that apply to the sap confirmation request.
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
 * Sample confirmation 2017-12-01
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
//    }
//}

