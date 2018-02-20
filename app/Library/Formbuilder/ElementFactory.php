<?php

namespace App\Library\Formbuilder;

class ElementFactory {

    const CLASS_NAME_TEMPLATE = '\App\Library\Formbuilder\Element\%s';

    /**
     * Factory method for form element object instantiation
     *
     * @static
     * @param string $type
     * @param array $config
     * @return \App\Library\Formbuilder\Element\CLASS
     */
    public static function create($type, array $config = array()) {
        $strClassName = sprintf(self::CLASS_NAME_TEMPLATE, $type);
        return new $strClassName($config);
    }

}
