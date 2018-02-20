<?php

namespace App\Library\Formbuilder\Element\Input;

class Checkbox extends \App\Library\Formbuilder\Element\InputAbstract {
    /*     * ********************************************************************
     *
     * Class constants
     *
     * ******************************************************************* */

    const TYPE = 'checkbox';
    const TEMPLATE_LABEL = '<label %s>%s</label>';

    /*     * ********************************************************************
     *
     * Properties
     *
     * ******************************************************************* */

    /** @var bool */
    protected $checked = false;

    /** @var bool */
    protected $grouped = false;

    /** @var string */
    protected $groupId = '';

    /** @var string */
    protected $style = '';

    /** @var bool */
    protected $labelRight = false;

    /** @var bool */
    protected $disabled = false;

    /** @var bool */
    protected $renderHiddenField = true;

    /*     * ********************************************************************
     *
     * Methods
     *
     * ******************************************************************* */

    /**
     * Constructor
     * @param array $config
     */
    public function __construct($config) {
        parent::__construct($config);
        foreach (array('grouped', 'groupId', 'checked', 'value', 'renderHiddenField', 'disabled', 'labelRight') as $strAttributeName) {
            $this->removeAttribute($strAttributeName);
        }
    }

    /**
     * Renders checkbox
     * @return string
     */
    public function render($fieldoptions = array()) {
        $arrCheckbox = array();
        if ($this->getGrouped() === false) {
            $strTooltip = '';

            if ($this->__get('tooltip') !== '') {
                $strTooltip = ' ' . $this->renderTooltip();
            }
            $id = ($this->__get('id')) ? $this->__get('id') : ($this->__get('name')) ? $this->__get('name') : "dummy" . random_int(1, 10000);
            $arrCheckbox[] = '<input type="checkbox" id="' . $id . '" ' . $this->renderChecked() . ' ' . $this->renderDisabled() . $this->renderAttributes() . ' value="1"><label for="' . $id . '" class="">' . $this->__get('label') . $strTooltip . '</label>';
            $arrCheckbox[] = $this->renderHelpText();
        } else {
            $this->removeAttribute('name');
            $arrCheckbox[] = sprintf('<div class="form-group"><input type="checkbox" name="%s[]" value="%s"%s%s %s><label class="grey-text">%s</label></div>', $this->getGroupId(), $this->__get('value'), $this->renderChecked(), $this->renderDisabled(), $this->renderAttributes(), $this->__get('label'));
            $arrCheckbox[] = $this->renderHelpText();
        }

        return implode("\n\r", $arrCheckbox);
    }

    /**
     * Renders checked
     * @return string
     */
    private function renderChecked() {
        return $this->__get('value') ? ' checked' : '';
//        if ($this->getGrouped() === false) {
//            $strChecked = $this->__get('value') === 1 ? ' checked' : '';
//        } else {
//            $strChecked = $this->getChecked() === true ? ' checked' : '';
//        }
//        return $strChecked;
    }

    /**
     * Sets a new checked
     * @param boolean $checked
     * @return $this
     */
    public function setChecked($checked) {
        return $this->__set('checked', (bool) $checked);
    }

    /**
     * Gets checked
     * @return boolean
     */
    public function getChecked() {
        return $this->__get('checked');
    }

    /**
     * Sets a new grouped
     * @param boolean $grouped
     * @return $this
     */
    public function setGrouped($grouped) {
        return $this->__set('grouped', (bool) $grouped);
    }

    /**
     * Gets grouped
     *
     * @return boolean
     */
    public function getGrouped() {
        return $this->__get('grouped');
    }

    /**
     * Sets a new groupId
     * @param string $groupId
     * @return $this
     */
    public function setGroupId($groupId) {
        return $this->__set('groupId', $groupId);
    }

    /**
     * Gets groupId
     * @return string
     */
    public function getGroupId() {
        return $this->__get('groupId');
    }

}
