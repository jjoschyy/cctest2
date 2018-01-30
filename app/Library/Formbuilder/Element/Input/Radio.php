<?php

namespace App\Library\Formbuilder\Element\Input;

class Radio extends \App\Library\Formbuilder\Element\InputAbstract
{

    const TYPE = 'radio';
    const TEMPLATE_LABEL = '<label %s>%s</label>';

    /*     * ********************************************************************
     *
     * Properties
     *
     * ******************************************************************* */

    /** @var bool */
    protected $checked = false;

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
        $this->removeAttribute('checked');
    }

    /**
     * Renders radio group
     * @return string
     */
    public function render($fieldoptions = array()) {
        $strLabelClass = $this->__get('inline') == true ? 'radio inline' : 'radio';
        $arrRadio = array();
        $arrRadio[] = sprintf('<label class="%s">', $strLabelClass);
        $arrRadio[] = sprintf('<input %s%s />', $this->renderAttributes(), $this->renderChecked());
        $arrRadio[] = $this->__get('label');
        if ($this->__get('tooltip') !== '') {
            $arrRadio[] = $this->renderTooltip();
        }
        $arrRadio[] = '</label>';
        $arrRadio[] = $this->renderHelpText();
        return implode(CRLF, $arrRadio);
    }

    /**
     * Renders checked
     * @return string
     */
    private function renderChecked() {
        return $this->getChecked() === true ? ' checked' : '';
    }

    /*     * ********************************************************************
     *
     * Getters & setters
     *
     * ******************************************************************* */

    /**
     * Sets a new checked
     * @param boolean $checked
     * @return $this
     */
    public function setChecked($checked) {
        return $this->__set('checked', (bool) $checked);
    }

	/**
	 * Renders radio group
	 * @return string
	 */
	public function render($fieldoptions=array())
	{
		$strLabelClass = $this->__get('inline') == true ? 'radio inline' : 'radio';
		$arrRadio = array();
		$arrRadio[] = sprintf('<label class="%s">', $strLabelClass);
		$arrRadio[] = sprintf('<input %s%s />', $this->renderAttributes(), $this->renderChecked());
		$arrRadio[] = $this->__get('label');
		if ($this->__get('tooltip') !== '')
		{
			$arrRadio[] = $this->renderTooltip();
		}
		$arrRadio[] = '</label>';
		$arrRadio[] = $this->renderHelpText();
		return implode("\n\r", $arrRadio);
	}

	/**
	 * Renders checked
	 * @return string
	 */
	private function renderChecked()
	{
		return $this->getChecked() === true ? ' checked' : '';
	}


	/**********************************************************************
	 *
	 * Getters & setters
	 *
	 *********************************************************************/

	/**
	 * Sets a new checked
	 * @param boolean $checked
	 * @return $this
	 */
	public function setChecked($checked)
	{
		return $this->__set('checked', (bool) $checked);
	}

	/**
	 * Gets checked
	 * @return boolean
	 */
	public function getChecked()
	{
		return $this->__get('checked');
	}

}
