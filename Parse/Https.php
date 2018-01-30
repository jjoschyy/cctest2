<?php

namespace App\Library\Checklist\Parse;


class Https extends Base {

    /**
    * Execute parsing of %HTTPS:<URL>%
    * Example: %HTTPS:www.google.de%
    */
    public function parse() {
      $this->label = $this->config;
      $this->isCalcRelevant = false;
    }

}
