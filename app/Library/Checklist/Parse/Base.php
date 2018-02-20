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
     * The child class can use the pre text or not
     * Set to true, if the consume functions are used
     */
    public $usedPreText = false;

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
    public function process() {
        $this->validate();
        $this->parse();
    }

    /**
     * Validate item configuration before parsing
     */
    public function validate() {
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
    protected function validateParamsCount($count, $optional = 0) {
        $s1 = $this->paramsCount() == $count;
        $s2 = $this->paramsCount() == ($count + $optional);

        $this->errorIfNot($s1 || $s2, $this->invalidParamsCountMsg($count, $optional));
    }

    /**
     * Validate single param
     */
    protected function validateParamIn($no, $opts) {
        $errorMsg = "Unsupported param: [" . $this->params[$no] . "]";
        $this->errorIfNot(in_array($this->params[$no], $opts), $errorMsg);
    }

    /**
     * Validate count of config params
     */
    protected function paramsCount() {
        return count($this->params);
    }

    /**
     * Validate count of config params
     */
    protected function errorIfNot($rule, $msg) {
        if (!$rule)
            throw new \Exception("Parsing of " . $this->rawToken . " failed. " . $msg . ".");
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
        $this->preText = $opts['preText'];
        $this->isNewGroup = $opts['isNewGroup'];
    }

    /**
     * Return Eloquent record of item
     */
    public function getRecord($operationId) {
        return new \App\ProdorderChecklist([
                'prodorder_operation_id' => $operationId,
                'is_new_group' => $this->isNewGroup,
                'type' => $this->type,
                'name' => $this->name,
                'label' => $this->label,
                'is_active' => $this->isVisible,
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
     * Consume pre item text.
     * Afterwards the Parser ignores this text.
     */
    protected function consumePreText($trim = false) {
        $this->usedPreText = true;
        return $this->text($trim, $this->preText);
    }

    /**
     * Read optional param which can be empty
     */
    protected function getOptionalParam($index) {
        $exists = count($this->params) >= ($index + 1);
        return $exists ? $this->params[$index] : null;
    }

    /**
     * Trim text, if $trim=true
     */
    private function text($trim, $text) {
        return $trim ? trim($text) : $text;
    }

    private function invalidParamsCountMsg($count, $optional) {
        $msg = "Params count must be " . $count;

        if ($optional > 0)
            $msg = $msg . " or " . ($count + $optional);

        return $msg;
    }

}
