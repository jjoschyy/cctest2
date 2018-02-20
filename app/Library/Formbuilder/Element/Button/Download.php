<?php

namespace App\Library\Formbuilder\Element\Button;

class Download extends \App\Library\Formbuilder\Element\ButtonAbstract
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
			$config['id'] = \App\Library\Formbuilder\ElementType::DOWNLOAD;
		}
		if (array_key_exists('value', $config) === false)
		{
			$config['value'] = $GLOBALS['PB_LANG']['BUTTON']['download'];
		}
		if (array_key_exists('icon', $config) === false)
		{
			$config['icon'] = 'icon-download-alt';
		}
		parent::__construct($config);
	}

}
