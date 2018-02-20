<?php

namespace App\Library\Formbuilder\Element;

class TextArea extends \App\Library\Formbuilder\ElementAbstract {

    const DEFAULT_COLS = 60;
    const DEFAULT_ROWS = 10;

    /**
     * cols
     *
     * @var int
     */
    protected $cols = self::DEFAULT_COLS;

    /**
     * rows
     *
     * @var int
     */
    protected $rows = self::DEFAULT_ROWS;

    /** @var string */
    protected $style = '';

    /**
     * Constructor
     *
     * @param array $config
     */
    public function __construct($config) {
        parent::__construct($config);
        $this->removeAttribute('value');
    }

    /**
     * Renders textarea
     *
     * @return string
     */
    protected function renderElement() {
        $this->addAttribute('cols');
        $this->addAttribute('rows');
        return sprintf('<textarea %s%s%s%s>%s</textarea>', $this->renderAttributes(), $this->renderDisabled(), $this->renderReadonly(), $this->renderRequired(), $this->__get('value'));
    }

    /**
     * Renders readonly
     *
     * @return string
     */
    protected function renderReadonly() {
        return $this->__get('readonly') === true ? ' readonly="readonly"' : '';
    }

}
