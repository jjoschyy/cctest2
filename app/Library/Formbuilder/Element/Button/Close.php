<?php

namespace App\Library\Formbuilder\Element\Button;

class Close extends \App\Library\Formbuilder\Element\ButtonAbstract
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
			$config['id'] = \App\Library\Formbuilder\ElementType::CLOSE;
		}
		if (array_key_exists('name', $config) === false)
		{
			$config['name'] = \App\Library\Formbuilder::SUBMIT_TYPE_CANCEL;
		}
		if (array_key_exists('value', $config) === false)
		{
			$config['value'] = "Close";
		}
		parent::__construct($config);
	}

}
