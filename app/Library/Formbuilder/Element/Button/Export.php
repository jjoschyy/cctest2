<?php

namespace App\Library\Formbuilder\Element\Button;

class Export extends \App\Library\Formbuilder\Element\ButtonAbstract
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
			$config['id'] = \App\Library\Formbuilder\ElementType::EXPORT;
		}
		if (array_key_exists('value', $config) === false)
		{
			$config['value'] = $GLOBALS['PB_LANG']['BUTTON']['export'];
		}
		if (array_key_exists('icon', $config) === false)
		{
			$config['icon'] = 'icon-download-alt';
		}
		parent::__construct($config);
	}

}
