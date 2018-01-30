<?php

namespace App\Library\Formbuilder\Element\Input;

class Text extends \App\Library\Formbuilder\Element\InputAbstract {

    const TYPE = 'text';

    /**
     * maxlength
     *
     * @var int
     */
    protected $maxlength = 0;

    /**
     * @var string
     */
    protected $autocomplete = 'on';

    /** @var string */
    protected $style = '';

}
