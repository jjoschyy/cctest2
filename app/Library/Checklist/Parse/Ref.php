<?php

namespace App\Library\Checklist\Parse;


class Ref extends Base {

    /**
    * Validate syntax: %xxxx:param0:param1%
    */
    public function validate(){
      $this->validateParamsCount(2);
    }


    /**
    * Execute parsing of %REF:<Name>:<Filename>%
    * Example: %REF:IQS-496:IQS-496.pdf%
    */
    public function parse() {
      $this->name = $this->params[0];
      $this->option1 = $this->params[1];
      $this->isCalcRelevant = false;
    }



}
