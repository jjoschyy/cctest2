<?php

namespace App\Library\Checklist\Parse;


class Inp extends Base {

    /**
    * Execute parsing of %INP:<Name>%
    * Example: %INP:Testarea%
    */
    public function parse() {
      $this->name  = $this->config;
      $this->label = $this->config;
    }

}
