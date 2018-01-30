<?php

namespace App\Library\Formbuilder\Element\Input;

class Datetime extends \App\Library\Formbuilder\Element\Input\Date
{

    const TYPE = 'text';

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
        parent::__construct($config);
        $this->setCalendarShowTime(true);
        foreach (array('calendarDateFormat', 'calendarShowTime') as $strAttributeName) {
            $this->removeAttribute($strAttributeName);
        }
    }

}
