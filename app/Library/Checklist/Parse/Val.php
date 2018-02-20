<?php

namespace App\Library\Checklist\Parse;


class Val extends Base {

    const VAL__NO_REF = '##no reference##';
    const VAL__EXT_REF_PATTERN = "/\d{6}-\d{4}-.+/";
    /**
    * Execute parsing of VAL
    * Example: %VAL:<some input>%
    */
    public function parse() {
        $this->option1 = $this->params[0];
        $this->label = self::VAL__NO_REF;
        $this->isCalcRelevant = false;
        if($this->isExternalRef() === 1) {
            $this->option2 = 'ext';
        }
    }
    
    /**
     * getRecord override method of Base class
     * @param object $operation
     */
    public function getRecord(\App\ProdorderOperation $operation) {
        // try to get value of referenced item
        $val = self::VAL__NO_REF;
        $ref = $this->option2 === 'ext' ? $this->getExternalRef() : null;
        if($ref !== null) {
            $val = $ref->value();
        }
        $record = parent::getRecord($operation);
        $record->value = $val;
        return $record;
    }
    
    private function getExternalRef() {
        //TODO
        return null;
    }

    private function isExternalRef() {
        return preg_match(self::VAL__EXT_REF_PATTERN, $this->name);
    }
}
