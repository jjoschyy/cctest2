<?php

namespace App\Library\Formbuilder\Element;

abstract class InputAbstract extends \App\Library\Formbuilder\ElementAbstract {

    const TYPE = '';

    /** @var string */
    protected $type = '';

    /** @var string */
    protected $placeholder = '';

    /** @var string */
    protected $onclick = '';

    /** @var string */
    protected $onchange = '';

    /** @var string */
    protected $onkeyup = '';

    /** @var string */
    protected $prepend = '';

    /** @var string */
    protected $append = '';

    /**
     * Constructor
     *
     * @param array $config
     */
    public function __construct(array $config) {
        parent::__construct($config);
        $this->__set('type', static::TYPE);
    }

    /**
     * Renders form element
     *
     * @return string
     */
    protected function renderElement() {
        $arrElement = array();

        if ($this->__get('prepend') || $this->__get('append')) {
            if ($this->__get('prepend') && $this->__get('append')) {
                $strInputClass = $this->__get('class') . ' appendedPrependedInput';
                $strDivClass = 'input-prepend input-append';
            } else if ($this->__get('prepend')) {
                $strInputClass = $this->__get('class') . ' prependedInput';
                $strDivClass = 'input-prepend';
            } else {
                $strInputClass = $this->__get('class') . ' appendedInput';
                $strDivClass = 'input-append';
            }

            $this->__set('class', $strInputClass);

            $arrElement[] = sprintf('<div class="%s">', $strDivClass);

            if ($this->__get('prepend')) {
                $arrElement[] = sprintf('<span class="add-on">%s</span>', $this->__get('prepend'));
            }
        }
        if ($this->__get('tooltip') !== '') {
            $arrElement[] = $this->renderTooltip();
        }
        $arrElement[] = sprintf('<input %s%s%s />', $this->renderAttributes(), $this->renderDisabled(), $this->renderRequired());

        if ($this->__get('prepend') || $this->__get('append')) {
            if ($this->__get('append')) {
                $arrElement[] = sprintf('<span class="add-on">%s</span>', $this->__get('append'));
            }

            $arrElement[] = '</div>';
        }

        return implode("\n\r", $arrElement);
    }

}
