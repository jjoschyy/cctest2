<?php

namespace App\Library\Checklist;

class Parser {

    /**
     * Regex to split longText to tokens
     */
    const SPLIT_PATTERN = "/(%.*%)|(\n)/";

    /**
     * Supported item types
     */
    const ITT_TEXT = 'TEXT';
    const ITT_IT = 'IT';
    const ITT_IT2 = 'IT2';
    const ITT_REF = 'REF';
    const ITT_INP = 'INP';
    const ITT_MW = 'MW';
    const ITT_MAILTO = 'MAILTO';
    const ITT_HTTP = 'HTTP';
    const ITT_HTTPS = 'HTTPS';
    const ITT_BTN = 'BTN';
    const ITT_FILE = 'FILE';
    const ITT_RADIO = 'RADIO';
    const ITT_VAL = 'VAL';
    const ITT_COMBO = 'COMBO';

    /**
     * Raw parsing text
     */
    private $parsingText = null;

    /**
     * Parsing text separated into tokens
     */
    private $tokens = [];

    /**
     * Parsing result as items
     */
    private $items = [];

    /**
     * Parsing helpers
     */
    private $error = null;
    private $lineBreakBefore = false;
    private $ignoreNextToken = false;
    private $tokenIndex = null;

    /**
     * Parsing classes
     */
    private $parsableItems = [
            self::ITT_TEXT => '\App\Library\Checklist\Parse\Text',
            self::ITT_IT => '\App\Library\Checklist\Parse\It',
            self::ITT_IT2 => '\App\Library\Checklist\Parse\It2',
            self::ITT_REF => '\App\Library\Checklist\Parse\Ref',
            self::ITT_INP => '\App\Library\Checklist\Parse\Inp',
            self::ITT_MW => '\App\Library\Checklist\Parse\Mw',
            self::ITT_MAILTO => '\App\Library\Checklist\Parse\MailTo',
            self::ITT_HTTP => '\App\Library\Checklist\Parse\Http',
            self::ITT_HTTPS => '\App\Library\Checklist\Parse\Https',
            self::ITT_BTN => '\App\Library\Checklist\Parse\Btn',
            self::ITT_FILE => '\App\Library\Checklist\Parse\File',
            self::ITT_RADIO => '\App\Library\Checklist\Parse\Radio',
            self::ITT_VAL => '\App\Library\Checklist\Parse\Val',
            self::ITT_COMBO => '\App\Library\Checklist\Parse\Combo'
    ];

    /**
     * Execute parsing of a long text
     */
    public function parse($parsingText) {
        $this->parsingText = $parsingText;

        try {
            $this->extractTokens();
            $this->buildItems();
        } catch (\Exception $ex) {
            $this->error = $ex->getMessage();
        }
    }

    /**
     * Any parsing errors?
     */
    public function hasNoError() {
        return $this->error == null;
    }

    /**
     * Return parsing error message
     */
    public function getErrorMessage() {
        return $this->error;
    }

    /**
     * Parsed item count
     */
    public function itemCount() {
        return count($this->items);
    }

    /**
     * Get a single item by index
     */
    public function getItem($index) {
        return $this->items[$index];
    }

    /**
     * Get all parsed items
     */
    public function getItems() {
        return $this->items;
    }

    /**
     * Get all parsed items as Eloquent records
     */
    public function getRecords($operationId) {
        $records = [];
        foreach ($this->items as $item)
            $records[] = $item->getRecord($operationId);
        return $records;
    }

    /**
     * Store all items into database
     */
    public function storeItems($operationId) {        
        foreach ($this->items as $item)
            $item->getRecord($operationId)->save();
    }

    /**
     * Split long text into tokens
     */
    private function extractTokens() {
        $preproc = str_replace("\r\n", "\n", $this->parsingText);
        $rawTokens = preg_split($this::SPLIT_PATTERN, $preproc, -1, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE);
        $this->buildTokenObjects($rawTokens);
    }

    private function buildTokenObjects($rawTokens) {
        foreach ($rawTokens as $rawToken) {
            $this->tokens[] = new Token($rawToken);
        }
    }

    private function buildItems() {
        for ($this->tokenIndex = 0; $this->tokenIndex < count($this->tokens); $this->tokenIndex++) {
            $token = $this->tokens[$this->tokenIndex];
            $this->processToken($token);
        }
    }

    private function processToken(Token $token) {
        if ($token->isInvalid())
            throw new \Exception("Invalid token found: " . $token->getRawToken());

        else if ($token->isLineBreak())
            $this->lineBreakBefore = true;
        else
            $this->processItemToken($token);
    }

    private function processItemToken(Token $token) {
        if ($this->isSupportedItemToken($token))
            $this->buildItem($token);
        else
            throw new \Exception("Unsupported token type: " . $token->getType());
    }

    private function isSupportedItemToken($token) {
        return array_key_exists($token->getType(), $this->parsableItems);
    }

    private function buildItem(Token $token) {
        $item = $this->ItemFactory($token);
        $item->process();

        //In case item used pre or post text
        $this->ignorePrevToken($item->usedPreText);
        $this->ignoreNextToken($item->usedPostText);

        $this->items[] = $item;
        $this->resetLineBreakInfo();
    }

    private function resetLineBreakInfo() {
        $this->lineBreakBefore = false;
    }

    private function getTokenText($indexOffset) {
        $token = $this->getOffsetToken($indexOffset);
        return $token && $token->isText() ? $token->getConfig() : null;
    }

    private function getOffsetToken($indexOffset) {
        $index = $this->tokenIndex + $indexOffset;
        $exists = array_key_exists($index, $this->tokens);
        return $exists ? $this->tokens[$index] : null;
    }

    private function ignorePrevToken(bool $ignore) {
        if ($ignore)
            \Illuminate\Support\Facades\Log::debug('ignoring pre text.');
        $ignore && array_pop($this->items);
    }

    private function ignoreNextToken(bool $ignore) {
        $ignore && $this->tokenIndex++;
    }

    private function isNewGroup() {
        return $this->itemCount() == 0 || $this->lineBreakBefore;
    }

    private function itemFactory(Token $token) {
        $itemCls = $this->parsableItems[$token->getType()];

        $opts = [
                "type" => $token->getType(),
                "config" => $token->getConfig(),
                "rawToken" => $token->getRawToken(),
                "postText" => $this->getTokenText(1),
                "preText" => $this->getTokenText(-1),
                "isNewGroup" => $this->isNewGroup(),
                "isVisible" => true
        ];

        return new $itemCls($opts);
    }

}
