<?php

namespace App\Library\Formbuilder\Element\Select;

class DropDown extends \App\Library\Formbuilder\Element\SelectAbstract {

    /** @var string */
    protected $style = '';

    /** @var string */
    protected $onchange = '';

    /** @var string */
    protected $filtertype = false;

    /** @var string */
    protected $height = false;

    const SELECT_INITIATOR = '$("#%s").selectPlus({ type: \'%s\',height:\'%s\'});';

    /**
     * Renders form element
     * @return string
     */
    protected function renderElement() {
        $this->removeAttribute('value');
        $arrDropDown = array();
        $strActionButton = $this->renderActionButton();
        $blnActionButton = $strActionButton != '';

        $blnToolTip = false;
        if ($this->__get('tooltip') !== '') {
            $blnToolTip = true;
        }
        $rowLayout = "col-lg-";
        if ($blnActionButton || $blnToolTip) {
            $arrDropDown[] = '<div class="row">';
            if ($blnActionButton && $blnToolTip) {
                $arrDropDown[] = '<div class="' . $rowLayout . '10">';
            } else {
                $arrDropDown[] = '<div class="' . $rowLayout . '11">';
            }
        }

        if ($this->__get('filtertype')) {
            $arrDropDown[] = '<script type="text/javascript">$(document).ready(function(){' . sprintf(self::SELECT_INITIATOR, $this->__get('id'), ( ($this->__get('filtertype')) ? $this->__get('filtertype') : 'none'), $this->__get('height')) . '});</script>';
            $addClass = "";
        } else {
            $addclass = "mdb-select";
        }
        $arrDropDown[] = sprintf('<select class="%s" %s%s%S>', $addclass, $this->renderAttributes(), $this->renderDisabled(), $this->renderRequired());

        if ($this->__get('allowNullSelection') === true) {
            $arrDropDown[] = sprintf('	<option value="">%s</option>', $this->__get('emptyValueName'));
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
                $arrDropDown[] = sprintf('<option %s value="%s"%s%s%s>%s</option>', $refContent, $mixValue, $strClass, $strSelected, $strDisabled, $mixLabel);
            } else {
                if ($blnOpenOptGroup) {
                    $arrDropDown[] = '</optgroup>';
                }
                $arrDropDown[] = sprintf('<optgroup label="%s">', $mixLabel);
            }
        }

        $arrDropDown[] = '</select>';

        if ($blnActionButton || $blnToolTip) {
            $arrDropDown[] = '</div>'; //.span8 / .span10
        }

        if ($blnActionButton) {
            $arrDropDown[] = '<div class="' . $rowLayout . '1">';

            $arrDropDown[] = $strActionButton;
            $arrDropDown[] = '</div>'; //.span1
        }

        if ($blnToolTip) {
            $arrDropDown[] = '<div class="' . $rowLayout . '1">';
            $arrDropDown[] = $this->renderTooltip();
            $arrDropDown[] = '</div>'; //.span1
        }

        if ($blnActionButton || $blnToolTip) {
            $arrDropDown[] = '</div>'; //.row-fluid
        }

        return implode("\n\r", $arrDropDown);
    }

}
