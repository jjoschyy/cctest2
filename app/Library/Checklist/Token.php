<?php

namespace App\Library\Checklist;

class Token {


    /**
     * Text token type
     * Other types are dynamic (%TYPE:xxx%)
     */
    const TT_TEXT = "TEXT";

    /**
     * Parsing helpers
     */
    private $rawToken = null;
    private $type = null;
    private $config = null;


    /**
     * Parses a single token.
     * Option 1: %xxxx:xxxx%
     * Option 2: TEXT
     * Option 3: \n
     */
    public function __construct($rawToken) {
        $this->rawToken = $rawToken;
        $this->parse();
    }

    /**
     * Return the token type
     * E.g. TEXT, IT, ....
     */
    public function getType() {
        return $this->type;
    }


    /**
     * Return the full token string
     */
    public function getRawToken() {
        return $this->rawToken;
    }


    /**
     * Return the token config
     * %xxxx:CONFIG%
     */
    public function getConfig() {
        return $this->config;
    }

   /**
    * Token syntax validation
    */
    public function isValid() {
        return $this->type !== null || $this->isLineBreak();
    }

   /**
    * Token syntax validation
    */
    public function isInvalid() {
        return !$this->isValid();
    }

    /**
     * Token is \n?
     */
    public function isLineBreak() {
        return $this->rawToken[0] === "\n";
    }

    /**
     * Token is not \n?
     */
    public function isNotLineBreak() {
        return !$this->isLineBreak();
    }

    /**
     * Token is %...%?
     */
    public function isFunction() {
        return $this->rawToken[0] === '%';
    }

    /**
    * Token is RAW text?
    */
    public function isText() {
        return $this->type === self::TT_TEXT;
    }


    private function parse() {
        if ($this->isFunction())
            $this->isValidFunction() && $this->parseFunction();

        else if ($this->isNotLineBreak())
            $this->parseText();
    }


    private function parseFunction() {
        $cut = strpos($this->rawToken, ':');
        $this->type = substr($this->rawToken, 1, $cut - 1);
        $this->config = substr($this->rawToken, $cut + 1, -1);
    }


    private function parseText() {
        $this->type = self::TT_TEXT;
        $this->config = $this->rawToken;
    }


    private function isValidFunction() {
        return strpos($this->rawToken, ":") !== false;
    }

}
