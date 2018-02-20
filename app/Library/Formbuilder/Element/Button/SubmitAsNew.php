<?php

namespace App\Library\Formbuilder\Element\Button;

class SubmitAsNew extends \App\Library\Formbuilder\Element\ButtonAbstract
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
			$config['id'] = \App\Library\Formbuilder\ElementType::SUBMIT_AS_NEW;
		}
		if (array_key_exists('name', $config) === false)
		{
			$config['name'] = Formbuilder::SUBMIT_TYPE_SAVE_AS_NEW;
		}
		if (array_key_exists('value', $config) === false)
		{
			$config['value'] = $GLOBALS['PB_LANG']['MISC']['saveAsNew'];
		}
		parent::__construct($config);
	}

}
