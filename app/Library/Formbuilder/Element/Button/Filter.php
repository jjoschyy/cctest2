<?php

namespace App\Library\Formbuilder\Element\Button;

class Filter extends \App\Library\Formbuilder\Element\ButtonAbstract
{

    const TYPE = 'submit';

    /*     * ********************************************************************
     *
     * Methods
     *
     * ******************************************************************* */


	/**********************************************************************
	 *
	 * Methods
	 *
	 *********************************************************************/

	/**
	 * Constructor
	 *
	 * @param array $config
	 */
	public function __construct(array $config)
	{
		if (array_key_exists('id', $config) === false)
		{
			$config['id'] = \App\Library\Formbuilder\ElementType::SEARCH;
		}
		if (array_key_exists('value', $config) === false)
		{
			$config['value'] = $GLOBALS['PB_LANG']['BUTTON']['filter'];
		}
		if (array_key_exists('icon', $config) === false)
		{
			$config['icon'] = 'icon-filter';
		}
		parent::__construct($config);
	}

}
