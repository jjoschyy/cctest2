<?php

namespace App\Library\Checklist\Parse;


abstract class Base {

    /**
     * holds the full token string
     * e.g. "%IT:123:234%"
     */
    protected $rawToken = null;

    /**
     * holds the token string after first ":"
     * e.g. "%IT:123:234%" => 123:234
     */
    protected $config = null;

    /**
     * holds the splited config as array
     * e.g. "%IT:123:234%" => [123,234]
     */
    protected $params = null;

    /**
     * Item type e.g. IT, IT2.
     */
    public $type = null;

    /**
     * Item name. E.g. %IT:<Name>%
     */
    public $name = null;

    /**
     * Optional item label
     * Normally used as item prefix/suffix
     */
    public $label = null;

    /**
     * Optional item options
     * Used to store special rules/options
     * Especially in use for type MW
     */
    public $option1 = null;
    public $option2 = null;
    public $option3 = null;

    /**
     * Calc element for summary or display only?
     */
    public $isCalcRelevant = true;

    /**
     * Display a new group block?
     */
    public $isNewGroup = null;

    /**
     * Hide or display item
     * In use for dynamic ON/OFF items
     */
    public $isVisible = true;

    /**
     * The child class can use the post text or not
     * Set to true, if the consume functions are used
     */
    public $usedPostText = false;

    /**
    * Holds the post text of the constructor
    */
    protected $postText = null;


    /**
     * The implementation of this stub should parse the $text and fill the items properties
     */
    public function process(){
       $this->validate();
       $this->parse();
    }

    /**
     * Validate item configuration before parsing
     */
    public function validate(){
      //This function can be overwritten in the child class
      //Default is no error
    }


    /**
     * The implementation of this stub should parse the $text and fill the items array
     */
    abstract public function parse();

    /**
     * Validate count of config params
     */
    protected function validateParamsCount($count){
      $this->errorIfNot($this->paramsCount() === $count, "Params count must be ". $count);
    }


    /**
     * Validate single param
     */
    protected function validateParamIn($no, $opts){
      $errorMsg = "Unsupported param: [". $this->params[$no] ."]";
      $this->errorIfNot(in_array($this->params[$no], $opts), $errorMsg);
    }


    /**
     * Validate count of config params
     */
    protected function paramsCount(){
      return count($this->params);
    }

    /**
     * Validate count of config params
     */
    protected function errorIfNot($rule, $msg){
      if (!$rule)
        throw new \Exception("Parsing of ". $this->rawToken ." failed. ". $msg . ".");
    }

    /**
     * Initialize properties
     */
    public function __construct($opts) {
        $this->type = $opts['type'];
        $this->config = $opts['config'];
        $this->rawToken = $opts['rawToken'];
        $this->params = explode(':', $opts['config']);
        $this->postText = $opts['postText'];
        $this->isNewGroup = $opts['isNewGroup'];
    }

    /**
     * Return Eloquent record of item
     */
    public function getRecord($prodorderOperationId) {
      return new \App\ProdorderChecklist([
        'prodorder_operation_id' => $prodorderOperationId,
        'is_new_group' => $this->isNewGroup,
        'type' => $this->type,
        'name' => $this->name,
        'label' => $this->label,
        'option1' => $this->option1,
        'option2' => $this->option2,
        'option3' => $this->option3
      ]);
    }

    /**
     * Consume post item text.
     * Afterwards the Parser ignores this text.
     */
    protected function consumePostText($trim = false) {
        $this->usedPostText = true;
        return $this->text($trim, $this->postText);
    }

    /**
     * Trim text, if $trim=true
     */
    private function text($trim, $text) {
        return $trim ? trim($text) : $text;
    }


}
