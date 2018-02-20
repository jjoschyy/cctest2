<?php

namespace App\ViewModel\Go;

use JsonSerializable;
use App\Library\LanguageHelper;

/**
 * Get output model for working step.
 * WorkingStep VievModel was used with original raw sql query.
 * It could be used in case if needed to modify output with additional params or applay attribute mutation
 *
 */
class WorkingStep implements JsonSerializable {

    public $product_workingstepId;
    public $operationNumber;
    public $operationShortText;
    public $status;

    function __construct(int $product_workingstepId, string $operationNumber, string $operationShortText, string $status) {
        $this->product_workingstepId = $product_workingstepId;
        $this->operationNumber = $operationNumber;
        $this->operationShortText = $operationShortText;
        $this->status = LanguageHelper::getLanguageData($status);
    }

    public function jsonSerialize() {
        // Return attributes with mutations applied          
        return [
                'product_workingstepId' => "$this->product_workingstepId",
                'operationNumber' => "$this->operationNumber",
                'operationShortText' => "$this->operationShortText",
                'status' => "$this->status"
        ];
    }

}
