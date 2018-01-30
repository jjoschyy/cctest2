<?php

namespace App\Library\Checklist\Parse;


class Text extends Base {

    /**
    * Execute parsing of TEXT
    * Example: TEST-TEXT
    */
    public function parse() {
      $this->label = $this->config;
      $this->isCalcRelevant = false;
    }

}
