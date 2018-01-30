<?php

namespace App\Library\Formbuilder\Element\Select;

class DropDownPlus extends \App\Library\Formbuilder\Element\SelectAbstract {

    /** @var string */
    protected $style = '';

    /** @var string */
    protected $onchange = '';

    /**
     * Renders form element
     * @return string
     */
    protected function renderElement() {
        $this->removeAttribute('value');
        $content = "";
        $strActionButton = $this->renderActionButton();
        $blnActionButton = $strActionButton != '';

        $blnToolTip = false;
        if ($this->__get('tooltip') !== '') {
            $blnToolTip = true;
        }

        if ($blnActionButton || $blnToolTip) {
            $content .= '<div class="row">';
            if ($blnActionButton && $blnToolTip) {
                $content .= '<div class="col-lg-10">';
            } else {
                $content .= '<div class="col-lg-11">';
            }
        }
        $content .= '<div class="row">';
        $content .= '<div class="col-lg-10">';
        $content .= sprintf('<select %s%s%S>', $this->renderAttributes(), $this->renderDisabled(), $this->renderRequired());

        if ($this->__get('allowNullSelection') === true) {
            $content .= sprintf('	<option value="">%s</option>', $this->__get('emptyValueName'));
        }

        $blnOpenOptGroup = false;
        foreach ($this->__get('listValues') as $mixListValue) {
            $blnOptGroup = false;
            $strDisabled = '';
            $strClass = '';

            if (is_array($mixListValue)) {
                if (array_key_exists('optGroup', $mixListValue)) {
                    $blnOptGroup = true;
                    $blnOpenOptGroup = true;
                    $mixLabel = $mixListValue['optGroup'];
                } else {
                    $mixValue = $mixListValue['value'];
                    $mixLabel = $mixListValue['name'];

                    if (array_key_exists('disabled', $mixListValue) && $mixListValue['disabled'] == true) {
                        $strDisabled = ' disabled';
                    }

                    if (array_key_exists('class', $mixListValue)) {
                        $strClass = sprintf(' class="%s"', $mixListValue['class']);
                    }
                }
            } else {
                $mixValue = $mixListValue;
                $mixLabel = $mixListValue;
            }

            if (!$blnOptGroup) {
                $strSelected = $this->__get('value') !== null && $mixValue == $this->__get('value') ? ' selected="selected"' : '';
                $refContent = "";
                if (isset($mixListValue['ref'])) {
                    if ($mixListValue['ref']) {
                        $refContent = 'ref="' . $mixListValue['ref'] . '"';
                    }
                    if ($mixListValue['refId']) {
                        $refContent .= ' refId="' . $mixListValue['refId'] . '"';
                    }
                }
                $content .= sprintf('<option %s value="%s"%s%s%s>%s</option>', $refContent, $mixValue, $strClass, $strSelected, $strDisabled, $mixLabel);
            } else {
                if ($blnOpenOptGroup) {
                    $content .= '</optgroup>';
                }
                $content .= sprintf('<optgroup label="%s">', $mixLabel);
            }
        }

        $content .= '</select>';
        $content .= '</div>';
        $content .= '<div class="col-lg-2">';
        $content .= '<a href="#" title="ADD" ref="' . $this->__get('dropDownPlus_ref') . '" class="btn btn-small dropDownPlus_addButton"><i class="glyphicon glyphicon-plus"></i></a>';
        $content .= '</div>';
        $content .= '</div>';

        if ($blnActionButton) {
            $content .= '<div class="col-lg-1">';

            $content .= $strActionButton;
            $content .= '</div>';
        }

        if ($blnToolTip) {
            $content .= '<div class="col-lg-1">';
            $content .= $this->renderTooltip();
            $content .= '</div>';
        }
        return $content;
    }

}
