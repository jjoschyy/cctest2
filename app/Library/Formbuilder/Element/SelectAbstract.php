<?php

namespace App\Library\Formbuilder\Element;

abstract class SelectAbstract extends \App\Library\Formbuilder\ElementAbstract {

    /** @var string */
    protected $onchange = '';

    /** @var array */
    protected $listValues = array();

    /** @var String */
    protected $dropDownPlus_ref = "";

    /** @var bool */
    protected $allowNullSelection = false;

    /** @var string */
    protected $emptyValueName = '';

    /**
     * Constructor
     * @param array $config
     */
    public function __construct($config) {
        parent::__construct($config);
        foreach (array('listValues', 'allowNullSelection') as $strAttributeName) {
            $this->removeAttribute($strAttributeName);
        }
    }

}
