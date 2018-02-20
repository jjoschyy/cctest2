<?php

namespace App\Library\Formbuilder\Element\Input;

class Hidden extends \App\Library\Formbuilder\Element\InputAbstract
{

    const TYPE = 'hidden';

    /*     * ********************************************************************
     *
     * Methods
     *
     * ******************************************************************* */

    /**
     * Constructor
     *
     * @param array $config
     */
    public function __construct(array $config) {
        unset($config['label']);
        unset($config['helpText']);
        parent::__construct($config);
    }

}
