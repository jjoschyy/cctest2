<?php

namespace App\Library\Checklist\Parse;


class File extends Base {

    /**
    * Execute parsing of %FILE:<Name>%
    * Example: %FILE:Download me%
    */
    public function parse() {
      $this->name  = $this->config;
      $this->isCalcRelevant = false;
    }

}
