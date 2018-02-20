<?php

namespace App\Library\Checklist\Parse;


class Radio extends Base {

    /**
    * Execute parsing of %RADIO:<Name>%
    * Example: %RADIO:Nachmessen%
    */
    public function parse() {
      $this->name = $this->config;
    }

}
