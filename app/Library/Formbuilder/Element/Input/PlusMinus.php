<?php

namespace App\Library\Formbuilder\Element\Input;

class PlusMinus extends \App\Library\Formbuilder\Element\InputAbstract {
    /*     * ********************************************************************
     *
     * Class constants
     *
     * ******************************************************************* */

    const TYPE = 'text';

    /*     * ********************************************************************
     *
     * Methods
     *
     * ******************************************************************* */

    /**
     * Renders plus minus element
     * @return string
     */
    protected function renderElement() {
        $blnTooltip = $this->__get('tooltip') != '';
        $strDisabled = $this->__get('disabled') === true ? ' disabled' : '';
        $arrPlusMinus = array();

        if ($blnTooltip) {
            $arrPlusMinus[] = '<div class="row-fluid">';
            $arrPlusMinus[] = '<div class="col-lg-11 span11">';
        }

        $arrPlusMinus[] = '<div class="row-fluid">';
        $arrPlusMinus[] = '<div class="col-lg-8 span10">';
        $arrPlusMinus[] = sprintf('<input type="%s" %s%s%s />', $this->__get('type'), $this->renderAttributes(), $this->renderDisabled(), $this->renderRequired());
        $arrPlusMinus[] = '</div>';
        $arrPlusMinus[] = '<div class="col-lg-12 span2">';
        $arrPlusMinus[] = sprintf('<button type="button" onclick="$(\'#%s\').val(function(i, oldValue) {return parseInt(oldValue) + 1;})" class="btn btn-default btn-xs btn-mini"%s><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>', $this->__get('id'), $strDisabled);
        $arrPlusMinus[] = sprintf('<button type="button" onclick="$(\'#%s\').val(function(i, oldValue) {return parseInt(oldValue) - 1;})" class="btn btn-default btn-xs btn-mini"%s><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button>', $this->__get('id'), $strDisabled);
        $arrPlusMinus[] = '</div>';
        $arrPlusMinus[] = '</div>';

        if ($blnTooltip) {
            $arrPlusMinus[] = '</div>';
            $arrPlusMinus[] = '<div class="col-lg-12 span1">';
            $arrPlusMinus[] = $this->renderTooltip();
            $arrPlusMinus[] = '</div>';
            $arrPlusMinus[] = '</div>';
        }

        return implode("\n\r", $arrPlusMinus);
    }

}
