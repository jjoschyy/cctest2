<?php

namespace App\Library\Checklist\Parse;


class Http extends Base {

    /**
    * Execute parsing of %HTTP:<URL>%
    * Example: %HTTP:www.google.de%
    */
    public function parse() {
      $this->label = $this->config;
      $this->isCalcRelevant = false;
    }

}
