<?php

namespace App\Library\Formbuilder\Element\Select;

class MultiSelectPlus extends \App\Library\Formbuilder\ElementAbstract {

    const TEMPLATE_LABEL = '<h4%s>%s</h4>';
    const TEMPLATE_SELECT = '<select multiple="multiple" data-toggle="multi-select" id="%1$s" name="%1$s[]"%2$s>';
    const TEMPLATE_OPTION_GROUP = '<option value="%s" %s ref="%s" refval="%s">%s</option>';
    const TEMPLATE_OPTION_DEFAULT = '<option value="%s" %s ref=\'%s\'>%s</option>';
    const VALUES_DELIMITER = ',';
    const MULTI_SELECT_INITIATOR = '$("#%s").multiSelectPlus({ type: \'%s\',height:\'%s\'});';

    /** @var array */
    protected $listValues = array();

    /** @var string */
    protected $filtertype = false;

    /** @var string */
    protected $height = false;

    /**
     * Constructor
     * @param array $config
     */
    public function __construct($config) {
        if (array_key_exists('listValues', $config) && array_key_exists('value', $config) && is_array($config['value'])) {
            $arrListValueList = array();

            foreach ($config['listValues'] as $mixListValue) {
                if (is_array($mixListValue)) {
                    $mixListValue['selected'] = in_array($mixListValue['value'], $config['value']);
                    $arrListValueList[] = $mixListValue;
                } else {
                    $mixListValue = array(
                            'value' => $mixListValue,
                            'name' => $mixListValue,
                            'selected' => in_array($mixListValue, $config['value']),
                    );
                    $arrListValueList[] = $mixListValue;
                }
            }
            unset($config['value']);
            $config['listValues'] = $arrListValueList;
        }
        parent::__construct($config);
        $this->removeAttribute('listValues');
    }

    /**
     * Renders label
     * @return string
     */
    protected function renderLabel() {
        $objLabel = \App\Library\Formbuilder\ElementFactory::create(App\Library\Formbuilder\ElementType::LABEL, array('value' => $this->__get('label'), 'class' => ''));
        return $objLabel->render();
    }

    /**
     * Renders form element
     * @return string
     */
    protected function renderElement() {
        $arrMultiSelect = array();
        $arrMultiSelect[] = '<script type="text/javascript">$(document).ready(function(){' . sprintf(self::MULTI_SELECT_INITIATOR, $this->__get('id'), ( ($this->__get('filtertype')) ? $this->__get('filtertype') : 'none'), $this->__get('height')) . '});</script>';
        $arrMultiSelect[] = sprintf(self::TEMPLATE_SELECT, $this->__get('id'), $this->renderDisabled());
        foreach ($this->__get('listValues') as $mixListValue) {
            if (is_array($mixListValue)) {
                $mixValue = $mixListValue['value'];
                $mixLabel = $mixListValue['name'];
                $ref = isset($mixListValue['ref']) ? $mixListValue['ref'] : "";
                $refVal = isset($mixListValue['refval']) ? $mixListValue['refval'] : "";
                $strSelected = isset($mixListValue['selected']) && $mixListValue['selected'] == true ? ' selected' : '';
            } else {
                $mixValue = $mixListValue;
                $mixLabel = $mixListValue;
                $strSelected = '';
                $ref = '';
                $refVal = '';
            }
            if ($refVal) {
                $arrMultiSelect[] = sprintf(self::TEMPLATE_OPTION_GROUP, $mixValue, $strSelected, $ref, $refVal, $mixLabel);
            } else {
                $arrMultiSelect[] = sprintf(self::TEMPLATE_OPTION_DEFAULT, $mixValue, $strSelected, $ref, $mixLabel);
            }
        }
        $arrMultiSelect[] = '</select>';

        return implode("\n\r", $arrMultiSelect);
    }

}
