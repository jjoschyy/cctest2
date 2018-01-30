<?php

namespace App\Library\Formbuilder\Element\Button;

class Search extends \App\Library\Formbuilder\Element\ButtonAbstract
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
			$config['id'] = \App\Library\Formbuilder\ElementType::SUBMIT;
		}
		if (array_key_exists('value', $config) === false)
		{
			$config['value'] = $GLOBALS['PB_LANG']['BUTTON']['search'];
		}
		if (array_key_exists('icon', $config) === false)
		{
			$config['icon'] = 'icon-search glyphicon glyphicon-search';
		}
		parent::__construct($config);
	}

}
