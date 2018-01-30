<?php

namespace App\Library\Formbuilder\Element\Button;

class Submit extends \App\Library\Formbuilder\Element\ButtonAbstract
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
		if (array_key_exists('name', $config) === false)
		{
			$config['name'] = Formbuilder::SUBMIT_TYPE_SAVE;
		}
		if (array_key_exists('value', $config) === false)
		{
			$config['value'] = $GLOBALS['PB_LANG']['MISC']['save'];
		}
		parent::__construct($config);
	}

}
