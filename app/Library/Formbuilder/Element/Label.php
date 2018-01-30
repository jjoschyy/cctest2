<?php

namespace App\Library\Formbuilder\Element;

class Label extends \App\Library\Formbuilder\ElementAbstract {

    /** @var string */
    protected $for = '';

    /**
     * Renders label
     * @return string
     */
    public function renderElement() {
        $this->removeAttribute('value');
        $this->removeAttribute('required');
        $strLabel = '';
        if ($this->__get('value') !== '') {
            $strLabel = sprintf($this->getLabelTemplate(), $this->renderAttributes(), $this->__get('value'), (($this->__get('required')) ? " *" : ""));
        }
        return $strLabel;
    }

}
