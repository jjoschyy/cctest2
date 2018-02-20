<?php

namespace App\Library\Formbuilder;

class Form {
    /*
     * Methods
     */

    const METHOD_DELETE = 'delete';
    const METHOD_GET = 'get';
    const METHOD_POST = 'post';
    const METHOD_PUT = 'put';

    /*
     * Submit types
     */
    const SUBMIT_TYPE_SAVE = 'SAVE';
    const SUBMIT_TYPE_SAVE_AND_CLOSE = 'SAVE_AND_CLOSE';
    const SUBMIT_TYPE_SAVE_AS_NEW = 'SAVE_AS_NEW';
    const SUBMIT_TYPE_CANCEL = 'CANCEL';
    const SUBMIT_TYPE_CLOSE = 'CLOSE';

    /**
     * method
     *
     * @var string
     */
    private $method = self::METHOD_POST;

    /**
     * allowableMethods
     *
     * @var array
     */
    private $allowableMethods = array
            (
            self::METHOD_DELETE,
            self::METHOD_GET,
            self::METHOD_POST,
            self::METHOD_PUT
    );

    /**
     * Gets submit type
     *
     * @return string
     */
    public function getSubmitType($from = "POST") {
        if ($from == "POST") {
            $data = $_POST;
        } else {
            $data = $_GET;
        }
        $strSubmitType = '';
        if (array_key_exists(Formbuilder\Form::SUBMIT_TYPE_SAVE, $data)) {
            $strSubmitType = Formbuilder\Form::SUBMIT_TYPE_SAVE;
        } else if (array_key_exists(Formbuilder\Form::SUBMIT_TYPE_SAVE_AND_CLOSE, $data)) {
            $strSubmitType = Formbuilder\Form::SUBMIT_TYPE_SAVE_AND_CLOSE;
        } else if (array_key_exists(Formbuilder\Form::SUBMIT_TYPE_CANCEL, $data)) {
            $strSubmitType = Formbuilder\Form::SUBMIT_TYPE_CANCEL;
        } else if (array_key_exists(Formbuilder\Form::SUBMIT_TYPE_CLOSE, $data)) {
            $strSubmitType = Formbuilder\Form::SUBMIT_TYPE_CLOSE;
        } else if (array_key_exists(Formbuilder\Form::SUBMIT_TYPE_SAVE_AS_NEW, $data)) {
            $strSubmitType = Formbuilder\Form::SUBMIT_TYPE_SAVE_AS_NEW;
        }
        return $strSubmitType;
    }

    /**
     * Gets method
     *
     * @return string
     */
    public function getMethod() {
        return $this->method;
    }

    /**
     * Sets a new method
     *
     * @param string $method
     * @return $this
     * @throws Exception
     */
    public function setMethod($method) {
        if (!in_array($method, $this->getAllowableMethods())) {
            throw new Exception(sprintf('Trying to set an unknown method "%s".', $method));
        }
        $this->method = $method;
        return $this;
    }

    /**
     * Gets allowableMethods
     *
     * @return array
     */
    private function getAllowableMethods() {
        return $this->allowableMethods;
    }

    /**
     * Prevents overwriting allowableMethods
     *
     * @return $this
     */
    private final function setAllowableMethods() {
        return $this;
    }

    /**
     * Method for render form element
     *
     * @static
     * @param string $type
     * @param array $config
     * @return \App\Library\Formbuilder\Element\CLASS
     */
    public static function create($type, array $config = array()) {
        $element = \App\Library\Formbuilder\ElementFactory::create($type, $config);
        switch ($type) {
            case \App\Library\Formbuilder\ElementType::HIDDEN:
            case \App\Library\Formbuilder\ElementType::BUTTON:
            case \App\Library\Formbuilder\ElementType::CANCEL:
            case \App\Library\Formbuilder\ElementType::CLOSE:
            case \App\Library\Formbuilder\ElementType::SEARCH:
            case \App\Library\Formbuilder\ElementType::SUBMIT:
            case \App\Library\Formbuilder\ElementType::SUBMIT_AND_CLOSE:
            case \App\Library\Formbuilder\ElementType::SUBMIT_AS_NEW:
                return $element->render();
            default:
                return '<div class="md-form">' . $element->render() . '</div>';
        }
    }

}
