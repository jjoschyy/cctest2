<?php
namespace App\Library\Formbuilder\Element\Select;

class MultiSelect extends \App\Library\Formbuilder\ElementAbstract
{

	/**********************************************************************
	 *
	 * Class constants
	 *
	 *********************************************************************/

	const TEMPLATE_LABEL	= '<h4%s>%s</h4>';
	const TEMPLATE_SELECT	= '<select multiple="multiple" data-toggle="multi-select" id="%1$s" name="%1$s[]"%2$s>';
	const TEMPLATE_OPTION	= '<option value="%s"%s>%s</option>';

	const VALUES_DELIMITER = ',';

	const MULTI_SELECT_INITIATOR = '$(\'[data-toggle="multi-select"]\').multiSelect();';


	/**********************************************************************
	 *
	 * Properties
	 *
	 *********************************************************************/

	/** @var array */
	protected $listValues = array();


	/**********************************************************************
	 *
	 * Methods
	 *
	 *********************************************************************/

	/**
	 * Constructor
	 * @param array $config
	 */
	public function __construct($config)
	{
		if
		(
			array_key_exists('listValues', $config) &&
			array_key_exists('value', $config) &&
			is_array($config['value'])
		)
		{
			$arrListValueList = array();

			foreach ($config['listValues'] as $mixListValue)
			{
				if (is_array($mixListValue))
				{
					$mixListValue['selected']	= in_array($mixListValue['value'], $config['value']);
					$arrListValueList[]			= $mixListValue;
				}
				else
				{
					$mixListValue	= array
					(
						'value'		=> $mixListValue,
						'name'		=> $mixListValue,
						'selected'	=> in_array($mixListValue, $config['value']),
					);
					$arrListValueList[]	= $mixListValue;
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
	protected function renderLabel()
	{
		$objLabel = \App\Library\Formbuilder\ElementFactory::create(\App\Library\Formbuilder\ElementType::LABEL, array('value' => $this->__get('label'), 'class' => ''));
		//$objLabel->setLabelTemplate(static::TEMPLATE_LABEL);
		return $objLabel->render();
	}

	/**
	 * Renders form element
	 * @return string
	 */
	protected function renderElement()
	{
		//Pb_Http_Response_JsFiles::getInstance()->addJsFile('plugins/multi-select/js/jquery.multi-select.js');
		//Pb_Http_Response_OnLoad::getInstance()->add(self::MULTI_SELECT_INITIATOR);
                //$arrMultiSelect[] = '<link href="plugins/multi-select/css/multi-select.css" media="screen" rel="stylesheet" type="text/css">';

		$arrMultiSelect = array();		
		$arrMultiSelect[] = sprintf(self::TEMPLATE_SELECT, $this->__get('id'), $this->renderDisabled());
		foreach ($this->__get('listValues') as $mixListValue)
		{
			if (is_array($mixListValue))
			{
				$mixValue		= $mixListValue['value'];
				$mixLabel		= $mixListValue['name'];
				$strSelected	= isset($mixListValue['selected']) && $mixListValue['selected'] == true ? ' selected' : '';
			}
			else
			{
				$mixValue		= $mixListValue;
				$mixLabel		= $mixListValue;
				$strSelected	= '';
			}
			$arrMultiSelect[] = sprintf(self::TEMPLATE_OPTION, $mixValue, $strSelected, $mixLabel);
		}
		$arrMultiSelect[] = '</select>';

		return implode("\n\r", $arrMultiSelect);
	}

}
