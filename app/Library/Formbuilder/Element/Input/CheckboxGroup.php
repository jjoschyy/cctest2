<?php

namespace App\Library\Formbuilder\Element\Input;

class CheckboxGroup extends \App\Library\Formbuilder\Element\InputAbstract
{

    /**
     * listValues
     *
     * @var array
     */
    protected $listValues = array();

    /** @var string */
    protected $columns = 1;

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
        parent::__construct($config);
        $this->removeAttribute('listValues');
    }

    /**
     * Renders checkbox group
     *
     * @return string
     */
    public function render($fieldoptions = array()) {
        $arrElement = array();
        $arrElement[] = $this->renderLabel();
        $iColumns = $this->__get('columns');

        //$iColumns=1;
        $arrElement[] = sprintf('<div id="%s" class="%s">', $this->__get('id'), $this->__get('class'));
        $arrElement[] = '<table border="0" width="100%">';
        if ($iColumns == 1)
            $arrElement[] = '<tr><td>';
        $iCol = 0;
        foreach ($this->getListValues() as $intKey => $arrValue) {
            if ($iColumns > 1) {
                $iCol++;
                if ($iCol > $iColumns) {
                    $arrElement[] = '</tr>';
                    $iCol = 1;
                }
                if ($iCol == 1) {
                    $arrElement[] = '<tr>';
                }
                $arrElement[] = '<td>';
            }
            $arrConfig = array
                    (
                            'id'		=> sprintf('opt_%s_%s', $this->__get('id'), $intKey),
                            'value'		=> $arrValue['value'],
                            'checked'	=> in_array($arrValue['value'], $this->__get('value')),
                            'label'		=> $arrValue['name'],
                            'grouped'	=> true,
                            'groupId'	=> $this->__get('id'),
                            'onclick'	=> array_key_exists('onclick', $arrValue) ? $arrValue['onclick'] : '',
                            'onchange'	=> array_key_exists('onchange', $arrValue) ? $arrValue['onchange'] : '',
                            'disabled'	=> $this->__get('disabled'),
                    );
                    $arrElement[] = \App\Library\Formbuilder\ElementFactory::create(\App\Library\Formbuilder\ElementType::CHECKBOX, $arrConfig)->render();
                    if($iColumns>1) $arrElement[] = '</td>';
		}
                if($iColumns==1) $arrElement[] = '</td>';
                $arrElement[] = '</tr></table>';
		$arrElement[] = '</div>';
		$arrElement[] = $this->renderHelpText();
		return implode("\n\r", $arrElement);
	}

    /**
     * Gets the selected values of a checkbox group as an array and casts
     * values to integers if filter is set to FILTER_SANITIZE_NUMBER_INT
     *
     * @static
     * @param int $id
     * @param int $filter
     * @param int $input
     * @return array
     */
    public static function getSelectedValues($id, $filter = FILTER_SANITIZE_NUMBER_INT, $input = INPUT_GET) {
        $arrValues = filter_input($input, $id, $filter, FILTER_REQUIRE_ARRAY);
        if ($arrValues === null) {
            $arrValues = array();
        }
        if ($filter === FILTER_SANITIZE_NUMBER_INT) {
            $arrValues = array_map('intval', $arrValues);
        }
        return $arrValues;
    }

    /*     * ********************************************************************
     *
     * Getters & setters
     *
     * ******************************************************************* */

    /**
     * Gets listValues
     *
     * @return array
     */
    public function getListValues() {
        return $this->__get('listValues');
    }

    /**
     * Sets a new listValues
     *
     * @param array $listValues
     * @return $this
     */
    public function setListValues($listValues) {
        return $this->__set('listValues', $listValues);
    }

}
