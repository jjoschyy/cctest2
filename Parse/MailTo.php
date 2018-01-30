<?php

namespace App\Library\Checklist\Parse;


class MailTo extends Base {

    /**
    * Execute parsing of %MAILTO:<RECIPIENT>%
    * Example: %MAILTO:nsp.imt.de@zeiss.com%
    */
    public function parse() {
      $this->label = $this->config;
      $this->isCalcRelevant = false;
    }

}
