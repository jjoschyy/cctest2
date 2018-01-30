<?php

namespace App\Library\Formbuilder\Element\Input;

class TypeAhead extends \App\Library\Formbuilder\Element\InputAbstract
{

    const TYPE = 'text';

    /*     * ********************************************************************
     *
     * Properties
     *
     * ******************************************************************* */

    /**
     * @var string
     */
    protected $dataProvide = 'typeahead';

    /**
     * @var int
     */
    protected $dataItems = 5;

    /**
     * @var array
     */
    protected $dataSource = array();

    /**
     * @var string
     */
    protected $autocomplete = 'off';

    /** @var string */
    protected $style = '';

    /**
     * @var array
     */
    protected $defaultConfig = array
            (
            'dataProvide' => 'typeahead',
            'dataItems' => 5,
            'autocomplete' => 'off',
            'dataSource' => array(),
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
        $config['dataSource'] = htmlentities(json_encode($config['dataSource']));

        parent::__construct($config);

        $attributeNameConversion = array
                (
                'dataProvide' => 'data-provide',
                'dataItems' => 'data-items',
                'dataSource' => 'data-source',
        );
        foreach ($attributeNameConversion as $strAttributeName => $strConvertedName) {
            $this->addAttributeNameConversion($strAttributeName, $strConvertedName);
        }
    }

}
