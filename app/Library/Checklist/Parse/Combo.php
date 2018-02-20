<?php

namespace App\Library\Checklist\Parse;


class Combo extends Base {

    /**
    * Validate syntax: %xxxx:param0:param1:optional1:optional2%
    */
    public function validate() {
      $this->validateParamsCount(2, 2);
    }

    /**
    * Execute parsing of %COMBO:<Name>:<Liste>%
    * Optional: <Referenz>
    * Optional: <Hauptelement>
    * Example: %COMBO:SW_L1:software%
    */
    public function parse() {
      $this->name    = $this->params[0];
      $this->option1 = $this->params[1];
      $this->option2 = $this->getOptionalParam(2);
      $this->option3 = $this->getOptionalParam(3);
    }

}
