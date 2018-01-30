<?php

namespace App\Library\Formbuilder\Element;

abstract class ButtonAbstract extends \App\Library\Formbuilder\ElementAbstract {

    const TYPE = '';

    /**
     * type
     *
     * @var string
     */
    protected $type = '';

    /**
     * icon
     *
     * @var string
     */
    protected $icon = '';

    /**
     * iconRight
     *
     * @var string
     */
    protected $iconRight = '';

    /**
     * onclick
     *
     * @var string
     */
    protected $onclick = '';

    /**
     * onchange
     *
     * @var string
     */
    protected $onchange = '';

    /**
     * onkeyup
     *
     * @var string
     */
    protected $onkeyup = '';

    /**
     * Constructor
     *
     * @param array $config
     */
    public function __construct(array $config) {
        if (!isset($config['class'])) {
            $config['class'] = "btn btn-primary waves-effect waves-light";
        }
        parent::__construct($config);
        $this->__set('type', static::TYPE);
        foreach (array('value', 'icon', 'iconRight') as $strProperty) {
            $this->removeAttribute($strProperty);
        }
    }

    /**
     * Renders form element
     *
     * @return string
     */
    protected function renderElement() {
        $strIcon = '';
        if ($this->__get('icon') !== '') {
            $strIcon = sprintf('<i class="%s"></i>', $this->__get('icon'));
        }

        $strIconRight = '';
        if ($this->__get('iconRight') !== '') {
            $strIconRight = sprintf('<i class="%s"></i>', $this->__get('iconRight'));
        }

        return sprintf('<button %s%s>%s%s%s</button>', $this->renderAttributes(), $this->renderDisabled(), $strIcon, $this->__get('value'), $strIconRight);
    }

}
