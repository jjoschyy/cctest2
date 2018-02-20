<?php

namespace App\Library\Checklist\Parse;


class Mw extends Base {

    /**
    * Validate syntax: %xxxx:param0:param1:param2%
    */
    public function validate() {
        $this->validateParamsCount(3);
        $this->validateParamIn(1, ['f']);
    }

    /**
    * Execute parsing of %MW:<Name>:Typ:<Function>:<Button-Text>%
    * Example: %MW:Repro:f:-21<Repro&&Repro<21:EXECUTE%
    */
    public function parse() {
        $name = str_replace(' ', '_', $this->params[0]);
        $fkt = str_replace(' ', '_', $this->params[2]);
        $this->label = $this->preText;
        $this->name = $name; //Name
        $this->option1 = $fkt; //Function
        $this->option2 = $this->postText; //postText
        $this->option3 = $this->params[1]; //Type
        $this->usedPreText = true;
        $this->usedPostText = true;
        $this->isNewGroup = 1;
    }
}
