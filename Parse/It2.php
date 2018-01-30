<?php

namespace App\Library\Checklist\Parse;


class It2 extends Base {

    /**
    * Execute parsing of %IT2:<NAME>% LABEL
    * Example: %IT2:CB1% Anbauteile anbringen
    */
    public function parse() {
      $this->name = $this->config;
      $this->label = $this->consumePostText(true);
    }

}
