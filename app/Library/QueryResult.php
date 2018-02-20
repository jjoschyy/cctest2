<?php

namespace App\Library;

class QueryResult {

    const ADD_SUCCESS = "add_success";
    const ADD_ERROR = "add_error";
    const UPDATE_SUCCESS = "update_success";
    const UPDATE_ERROR = "update_error";
    const DELETE_SUCCESS = "delete_success";
    const DELETE_ERROR = "delete_error";

    static public function getDescription($code) {
        return ($code) ? __('querystring.' . $code) : "";
    }

    static public function getColorCode($code) {
        $colorCodes = array(
            "add_success" => "success",
            "add_error" => "error",
            "update_success" => "success",
            "update_error" => "error",
            "delete_success" => "success",
            "delete_error" => "error"
        );
        return isset($colorCodes[$code]) ? $colorCodes[$code] : FALSE;
    }

    static public function getScript($code) {
        $color = \App\Library\QueryResult::getColorCode($code);
        $description = \App\Library\QueryResult::getDescription($code);
        if ($description) {
            return sprintf('toastr.%s(\'%s\');', ($color) ? $color : "info", $description);
        } else {
            return "";
        }
    }

}
