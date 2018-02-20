<?php

namespace App\Library\Formbuilder\Element;

class HelpText extends \App\Library\Formbuilder\ElementAbstract {

    /**
     * 
     * @param array $config
     */
    public function __construct(array $config) {
        unset($config['label']);
        unset($config['helpText']);
        parent::__construct($config);
    }

    /**
     * Renders label
     *
     * @return string
     */
    public function renderElement() {
        $strHelpText = '';
        if ($this->__get('value') !== '') {
            $strHelpText = sprintf($this->getHelpTextTemplate(), $this->__get('value'));
        }
        return $strHelpText;
    }

}
