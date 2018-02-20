<?php

namespace App\Library\Formbuilder\Element\Input;

class Password extends \App\Library\Formbuilder\Element\InputAbstract
{

    const TYPE = 'password';

    /*     * ********************************************************************
     *
     * Properties
     *
     * ******************************************************************* */

    /**
     * @var string
     */
    protected $autocomplete = '';

    /**
     * @var array
     */
    protected $defaultConfig = array
            (
            'autocomplete' => 'off',
    );

    /*     * ********************************************************************
     *
     * Methods
     *
     * ******************************************************************* */

    /**
     * @inheritdoc
     */
    public function __construct(array $config) {
        $config = array_merge($this->defaultConfig, $config);
        parent::__construct($config);
    }

}
