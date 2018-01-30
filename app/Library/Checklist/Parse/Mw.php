<?php

namespace App\Library\Checklist\Parse;


class Mw extends Base {

    /**
    * Validate syntax: %xxxx:param0:param1:param2:param3%
    */
    public function validate() {
      $this->validateParamsCount(4);
      $this->validateParamIn(1, ['f']);
    }

    /**
    * Execute parsing of %MW:<Name>:Typ:<Function>:<Button-Text>%
    * Example: %MW:Repro:f:-21<Repro&&Repro<21:EXECUTE%
    */
    public function parse() {
      $this->name    = $this->params[0]; //Name
      $this->option1 = $this->params[1]; //Type
      $this->option2 = $this->params[2]; //Function
      $this->option3 = $this->params[3]; //Button-Text
    }



}
