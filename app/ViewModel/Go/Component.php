<?php

namespace App\ViewModel\Go;

use JsonSerializable;
use App\Library\Helper\LanguageHelper;

/**
 * Get output model for component used in the operation-overview, component-overview and zkm tab.
 *
 */
class Component implements JsonSerializable {

    public $productWorkingstepId;
    public $itemNumber;
    public $material;
    public $serialNumber;
    public $contentData;
    public $requiredQuantity;
    public $requiredQuantityUnit;
    public $statusMissingPart;
    public $productMaterialId;
    public $missing;
    public $productListStatusId;

    // more than ~500 objects (zkm components) error in conversion => solution => removed type (int or string)
    function __construct($productWorkingstepId, $itemNumber, $material, $contentData, $requiredQuantity, $requiredQuantityUnit, $statusMissingPart, $productMaterialId, $missing, $productListStatusId,$serialnumber="") {
        $this->productWorkingstepId = $productWorkingstepId;
        $this->itemNumber = $itemNumber;
        $this->material = $material;
        $this->serialNumber=$serialnumber;
        $this->contentData =  $this->isJson($contentData) ? LanguageHelper::get(json_decode($contentData, true)) : $contentData;
        $this->requiredQuantity = $requiredQuantity;
        $this->requiredQuantityUnit = $requiredQuantityUnit;
        $this->statusMissingPart = $statusMissingPart;
        $this->productMaterialId = $productMaterialId;
        $this->missing = $missing;
        $this->productListStatusId = $productListStatusId;
    }

    /**
     * Check exception for column in zkm components salesorder_items.short_text which is missing translation in JSON format.
     *
     * @return boolean
     */
    public function isJson($string) {
        json_decode($string);
        return (json_last_error() == JSON_ERROR_NONE);
   }

    public function jsonSerialize() {
        // Return attributes with mutations applied           
        return [
                'productWorkingstepId' => "$this->productWorkingstepId",
                'itemNumber' => "$this->itemNumber",
                'material' => "$this->material",
                'serialNumber' => "$this->serialNumber",
                'contentData' => "$this->contentData",
                'requiredQuantity' => "$this->requiredQuantity",
                'requiredQuantityUnit' => "$this->requiredQuantityUnit",
                'statusMissingPart' => "$this->statusMissingPart",
                'productMaterialId' => "$this->productMaterialId",
                'missing' => "$this->missing",
                'productListStatusId' => "$this->productListStatusId"
        ];
    }

}
