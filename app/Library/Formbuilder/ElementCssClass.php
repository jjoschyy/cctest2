<?php

namespace App\Library\Formbuilder;

class ElementCssClass {

    /** @var array */
    private $defaultCssClasses = array
        (
        \App\Library\Formbuilder\ElementType::BUTTON => 'btn btn-default',
        \App\Library\Formbuilder\ElementType::CANCEL => 'btn btn-default',
        \App\Library\Formbuilder\ElementType::CHECKBOX => '',
        \App\Library\Formbuilder\ElementType::CHECKBOX_GROUP => '',
        \App\Library\Formbuilder\ElementType::CLOSE => 'btn btn-default',
        \App\Library\Formbuilder\ElementType::DATE => 'input-block-level',
        \App\Library\Formbuilder\ElementType::DATE_RANGE_PICKER => 'input-block-level',
        \App\Library\Formbuilder\ElementType::DATETIME => 'input-block-level',
        \App\Library\Formbuilder\ElementType::DOWNLOAD => 'btn btn-default',
        \App\Library\Formbuilder\ElementType::DROPDOWN => 'input-block-level form-control',
        \App\Library\Formbuilder\ElementType::EXPORT => 'btn btn-default',
        \App\Library\Formbuilder\ElementType::FILTER => 'btn btn-default',
        \App\Library\Formbuilder\ElementType::HELPTEXT => 'help-block',
        \App\Library\Formbuilder\ElementType::HIDDEN => '',
        \App\Library\Formbuilder\ElementType::LABEL => '',
        \App\Library\Formbuilder\ElementType::MULTISELECT => '',
        \App\Library\Formbuilder\ElementType::NUMERIC => 'text-right',
        \App\Library\Formbuilder\ElementType::PLUS_MINUS => 'input-block-level',
        \App\Library\Formbuilder\ElementType::RADIO => '',
        \App\Library\Formbuilder\ElementType::RADIO_GROUP => '',
        \App\Library\Formbuilder\ElementType::SEARCH => 'btn btn-default',
        \App\Library\Formbuilder\ElementType::SUBMIT => 'btn btn-default',
        \App\Library\Formbuilder\ElementType::SUBMIT_AND_CLOSE => 'btn btn-default',
        \App\Library\Formbuilder\ElementType::SUBMIT_AS_NEW => 'btn btn-default',
        \App\Library\Formbuilder\ElementType::PASSWORD => 'input-block-level',
        \App\Library\Formbuilder\ElementType::TEXT => 'input-block-level',
        \App\Library\Formbuilder\ElementType::TEXTAREA => 'input-block-level',
        \App\Library\Formbuilder\ElementType::TIME => 'input-block-level form-control',
        \App\Library\Formbuilder\ElementType::TYPE_AHEAD => 'input-block-level',
    );

    /**
     * Gets default class
     * @param string $type
     * @return string
     */
    public function getDefaultCssClass($type) {
        $strDefaultCssClass = '';
        if (array_key_exists($type, $this->getDefaultCssClasses())) {
            $strDefaultCssClass = $this->defaultCssClasses[$type];
        }
        return $strDefaultCssClass;
    }

    /**
     * Gets defaultCssClasses
     * @return array
     */
    private function getDefaultCssClasses() {
        return $this->defaultCssClasses;
    }

    /**
     * Sets a new defaultCssClasses
     * @param array $defaultCssClasses
     * @return $this
     */
    private function setDefaultCssClasses(array $defaultCssClasses) {
        $this->defaultCssClasses = $defaultCssClasses;
        return $this;
    }

}
