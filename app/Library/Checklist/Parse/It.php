<?php

namespace App\Library\Checklist\Parse;


class It extends Base {


    /**
    * Execute parsing of %IT:<NAME>% LABEL
    * Example: %IT:CB1% Anbauteile anbringen
    */
    public function parse() {
      $this->name = $this->config;
      $this->label = $this->consumePostText(true);
    }

}
