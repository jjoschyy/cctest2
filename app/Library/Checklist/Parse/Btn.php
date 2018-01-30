<?php

namespace App\Library\Checklist\Parse;


class Btn extends Base {


    /**
    * Validate syntax: %xxxx:param0:param1%
    */
    public function validate() {
      $this->validateParamsCount(2);
      $this->validateParamIn(1, ['DatenSystemExport']);
    }

    /**
    * Execute parsing of %BTN:<Name>:<Funktion>%
    * Example: %BTN:EXPORT:DatenSystemExport%
    */
    public function parse() {
      $this->name = $this->params[0];
      $this->option1 = $this->params[1];
      $this->isCalcRelevant = false;
    }

}
