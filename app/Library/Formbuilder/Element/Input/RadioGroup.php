<?php

namespace App\Library\Formbuilder\Element\Input;

class RadioGroup extends \App\Library\Formbuilder\Element\InputAbstract
{

    /** @var array */
    protected $listValues = array();

    /** @var bool */
    protected $inline = false;

    /*     * ********************************************************************
     *
     * Methods
     *
     * ******************************************************************* */

    /**
     * Constructor
     * @param array $config
     */
    public function __construct($config) {
        parent::__construct($config);
        $this->removeAttribute('listValues');
    }

    /**
     * Renders radio group
     * @return string
     */
    public function render($fieldoptions = array()) {
        $arrRadioGroup = array();
        $arrRadioGroup[] = $this->renderLabel();
        $arrRadioGroup[] = '<div id="' . $this->__get('id') . '" class="pbRadioGroupContainer">';
        foreach ($this->getListValues() as $intKey => $arrValue) {
            $arrConfig = array
                    (
                    'name' => $this->__get('id'),
                    'id' => sprintf('opt_%s_%s', $this->__get('id'), $intKey),
                    'checked' => $arrValue['value'] === $this->__get('value'),
                    'value' => $arrValue['value'],
                    'label' => $arrValue['label'],
                    'inline' => $this->__get('inline'),
                    'onclick' => array_key_exists('onclick', $arrValue) ? $arrValue['onclick'] : '',
                    'onchange' => array_key_exists('onchange', $arrValue) ? $arrValue['onchange'] : '',
            );
            $objRadio = Formbuilder_ElementFactory::create(App\Library\Formbuilder\ElementType::RADIO, $arrConfig);
            $arrRadioGroup[] = $objRadio->render();
        }
        $arrRadioGroup[] = '</div>';
        return implode(CRLF, $arrRadioGroup);
    }

    /*     * ********************************************************************
     *
     * Getters & setters
     *
     * ******************************************************************* */

	/**
	 * Renders radio group
	 * @return string
	 */
	public function render($fieldoptions=array())
	{
		$arrRadioGroup = array();
		$arrRadioGroup[] = $this->renderLabel();
		$arrRadioGroup[] = '<div id="' . $this->__get('id') . '" class="pbRadioGroupContainer">';
		foreach ($this->getListValues() as $intKey => $arrValue)
		{
			$arrConfig = array
			(
				'name'		=> $this->__get('id'),
				'id'		=> sprintf('opt_%s_%s', $this->__get('id'), $intKey),
				'checked'	=> $arrValue['value'] === $this->__get('value'),
				'value'		=> $arrValue['value'],
				'label'		=> $arrValue['label'],
				'inline'	=> $this->__get('inline'),
				'onclick'	=> array_key_exists('onclick', $arrValue) ? $arrValue['onclick'] : '',
				'onchange'	=> array_key_exists('onchange', $arrValue) ? $arrValue['onchange'] : '',
			);
			$objRadio = \App\Library\Formbuilder\ElementFactory::create(\App\Library\Formbuilder\ElementType::RADIO, $arrConfig);
			$arrRadioGroup[] = $objRadio->render();
		}
		$arrRadioGroup[] = '</div>';
		return implode("\n\r", $arrRadioGroup);
	}

    /**
     * Gets listValues
     * @return array
     */
    public function getListValues() {
        return $this->__get('listValues');
    }

}
