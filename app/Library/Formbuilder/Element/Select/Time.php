<?php

namespace App\Library\Formbuilder\Element\Select;

class Time extends App\Library\Formbuilder\Element\Select\DropDown {

    /**
     * Constructor
     * @param array $config
     */
    public function __construct($config) {
        parent::__construct($config);
        if (count($this->__get('listValues')) === 0) {
            $this->__set('listValues', $this->generateDefaultListValues());
            $this->removeAttribute('listValues');
        }
    }

    /**
     * Generates default list values
     * @return array
     */
    private function generateDefaultListValues() {
        $arrDefaultListValues = array();
        $intTime = mktime(0, 0, 0);
        while (date(PB_DATE_FORMAT, $intTime) === date(PB_DATE_FORMAT)) {
            $arrDefaultListValues[] = array
                    (
                    'value' => date(PB_TIME_FORMAT, $intTime),
                    'name' => date(PB_TIME_SHORT_FORMAT, $intTime),
            );
            $intTime = strtotime('+15 MINUTE', $intTime);
        }

        return $arrDefaultListValues;
    }

}
