<?php

namespace App\Library\Formbuilder\Element\Input;

class Numeric extends \App\Library\Formbuilder\Element\InputAbstract
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
    public function __construct($config) {
        if (is_numeric($config['value'])) {
            $objNumberFormatter = Pb_Session::getInstance()->getUser()->getDecimalNumberFormatter();
            if (array_key_exists('isFloat', $config) && $config['isFloat']) {
                $objNumberFormatter->setPattern(Pb_Configuration::get('application.locale.numberFormatter.amountPattern'));
            }
            $config['value'] = $objNumberFormatter->format($config['value']);
        }

        parent::__construct($config);
    }

}
