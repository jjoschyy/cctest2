<?php

namespace App\ViewModel\Go;

use JsonSerializable;

/**
 * Description of CheckList
 *
 */
class CheckList implements JsonSerializable {

    public $productionOrderOperationId;
    public $checkListItemType;
    public $condition;
    public $displaySnippet;
    public $isActive;
    public $isChecked;
    public $isRequired;
    public $value;
    public $preText;
    public $text;
    public $name;
    public $ruleDetails;

    function __construct($productionOrderOperationId, $checkListItemType, $condition, $displaySnippet, $isActive, $isChecked, $isRequired, $value, $preText, $text, $name, $ruleDetails) {

        $this->productionOrderOperationId = $productionOrderOperationId;
        $this->checkListItemType = $checkListItemType;
        $this->condition = $condition;
        $this->isActive = $isActive;
        $this->isChecked = $isChecked;
        $this->isRequired = $isRequired;
        $this->value = $value;
        $this->preText = $preText;
        $this->text = $text;
        $this->name = $name;

        switch ($checkListItemType) {

            case 'IT2':
            case 'IT':
                $checkBoxAdd = "";
                if (!$isActive) {
                    $checkBoxAdd .= " disabled ";
                }

                if ($isChecked) {
                    $checkBoxAdd .= " checked";
                }

                $pos = strpos(trim($displaySnippet), "type=");
                $displaySnippet = substr_replace($displaySnippet, $checkBoxAdd, $pos - 1, 0);

                break;
            case 'MW':
                $displaySnippet = "<div class='mw'>" . $displaySnippet . $text . "</div>";
            case 'INP':
                $val = " value='" . $value . "'";
                $pos = strpos(trim($displaySnippet), "type");
                $displaySnippet = substr_replace($displaySnippet, $val, $pos - 1, 0);
                break;
            case 'RADIO':
                // default is "no"
                if ($value == 'yes') {
                    $displaySnippetClean = str_replace("checked", "", $displaySnippet);
                    $pos = strpos($displaySnippet, "value='yes'");
                    $displaySnippet = substr_replace($displaySnippetClean, " checked", $pos - 1, 0);
                }
                break;

            default:
            //  
        }

        $this->displaySnippet = $displaySnippet;
        $this->ruleDetails = $ruleDetails;
    }

    public function jsonSerialize() {
        // Return attributes with mutations applied           
        return [
                'productionOrderOperationId' => "$this->productionOrderOperationId",
                'checkListItemType' => "$this->checkListItemType",
                'condition' => "$this->condition",
                'displaySnippet' => "$this->displaySnippet",
                'isActive' => "$this->isActive",
                'isChecked' => "$this->isChecked",
                'isRequired' => "$this->isRequired",
                'value' => "$this->value",
                'preText' => "$this->preText",
                'text' => "$this->text",
                'name' => "$this->name",
                'ruleDetails' => "$this->ruleDetails",
        ];
    }

}
