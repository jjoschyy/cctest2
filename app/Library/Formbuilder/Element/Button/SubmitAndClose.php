<?php

namespace App\Library\Formbuilder\Element\Button;

class SubmitAndClose extends \App\Library\Formbuilder\Element\ButtonAbstract
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
			$config['id'] = \App\Library\Formbuilder\ElementType::SUBMIT_AND_CLOSE;
		}
		if (array_key_exists('name', $config) === false)
		{
			$config['name'] = \App\Library\Formbuilder\Form::SUBMIT_TYPE_SAVE_AND_CLOSE;
		}
		if (array_key_exists('value', $config) === false)
		{
			$config['value'] = "Save and close";
		}
		parent::__construct($config);
	}

}
