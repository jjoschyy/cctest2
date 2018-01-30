<?php

namespace App\ViewModel\Go;

use JsonSerializable;
use App\Library\LanguageHelper;

/**
 * Get output model for component used in the operation-overview, component-overview and zkm tab.
 *
 */
class Component implements JsonSerializable {

    public $productWorkingstepId;
    public $itemNumber;
    public $material;
    public $contentData;
    public $requiredQuantity;
    public $requiredQuantityUnit;
    public $statusMissingPart;
    public $productMaterialId;
    public $missing;
    public $productListStatusId;

    // more than ~500 objects (zkm components) error in conversion => solution => removed type (int or string)
    function __construct($productWorkingstepId, $itemNumber, $material, $contentData, $requiredQuantity, $requiredQuantityUnit, $statusMissingPart, $productMaterialId, $missing, $productListStatusId) {
        $this->productWorkingstepId = $productWorkingstepId;
        $this->itemNumber = $itemNumber;
        $this->material = $material;

        // check if $contentData has translation (zkm components does not have translation)
        if (strpos($contentData, '#LD#') !== false) {
            $contentData = LanguageHelper::getLanguageData($contentData);
        }

        $this->contentData = $contentData;
        $this->requiredQuantity = $requiredQuantity;
        $this->requiredQuantityUnit = $requiredQuantityUnit;
        $this->statusMissingPart = $statusMissingPart;
        $this->productMaterialId = $productMaterialId;
        $this->missing = $missing;
        $this->productListStatusId = $productListStatusId;
    }

    public function jsonSerialize() {
        // Return attributes with mutations applied           
        return [
                'productWorkingstepId' => "$this->productWorkingstepId",
                'itemNumber' => "$this->itemNumber",
                'material' => "$this->material",
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
