<?php

namespace App\Library\Formbuilder;

abstract class ElementAbstract {

    /**
     * Templates
     */
    const TEMPLATE_LABEL = '<label %s>%s%s</label>';
    const TEMPLATE_HELP_TEXT = '<small class="help-block">%s</small>';
    const TEMPLATE_ATTRIBUTE = '%s="%s"';

    /** @var string */
    private $elementType = '';

    /** @var string */
    private $labelTemplate = self::TEMPLATE_LABEL;

    /** @var string */
    private $helpTextTemplate = self::TEMPLATE_HELP_TEXT;

    /**  @var string */
    protected $id = '';

    /** @var string */
    protected $name = '';

    /** @var bool */
    protected $disabled = false;

    /** @var string */
    protected $required = '';

    /** @var string */
    protected $label = '';

    /** @var string */
    protected $helpText = '';

    /** @var mixed */
    protected $value;

    /** @var string */
    protected $class = '';

    /** @var null|int */
    protected $tabindex = null;

    /** @var string */
    protected $tooltip = '';

    /** @var string */
    protected $tooltipIcon = 'fa fa-question-circle';
    //protected $tooltipIcon = 'icon-question-sign';

    /** @var string */
    protected $placeholder = '';

    /** @var string */
    protected $tooltipPlacement = 'top';

    /**  @var string */
    protected $actionButton = '';

    /**  @var string */
    protected $actionButtonOnClick = '';

    /** @var string */
    protected $actionButtonIcon = 'fa fa-cog';

    /** @var string */
    protected $actionButtonTitle = '';

    /** @var string */
    protected $isNS = false;

    /**
     * title
     *
     * @var string
     */
    protected $title = '';

    /**  @var array */
    protected $attributes = array();

    /** @var array */
    private $disallowedAttributesRendering = array
            (
            'label',
            'helpText',
            'disabled',
            'tooltip',
            'tooltipIcon',
            'tooltipPlacement',
            'append',
            'prepend',
            'actionButton',
            'actionButtonOnClick',
            'actionButtonIcon',
            'actionButtonTitle',
            'isNS',
    );

    /** @var array */
    private $attributeNameConversion = array();

    /**
     * Renders form element
     * @abstract
     * @return string
     */
    abstract protected function renderElement();

    /**
     * Constructor
     * @param array $config
     */
    public function __construct(array $config) {
        $this->initType();

        $this->parseConfig($config);

        foreach ($this->getDisallowedAttributesRendering() as $strAttributeName) {
            $this->removeAttribute($strAttributeName);
        }
    }

    /**
     * Getter
     * @param $property
     * @return mixed
     */
    public function __get($property) {
        $value = null;
        if ($this->propertyExists($property) === true) {
            $value = $this->$property;
        }

        return $value;
    }

    /**
     * Setter
     * @param string $property
     * @param mixed  $value
     * @return $this
     */
    public function __set($property, $value) {
        if ($this->propertyExists($property) === true) {
            $this->$property = $value;
            $this->addAttribute($property);
        }

        return $this;
    }

    /**
     * Initializes type
     * @return \App\Library\Formbuilder\ElementAbstract
     */
    private function initType() {
        return $this->setElementType(substr(get_class($this), strlen(str_replace('%s', '', \App\Library\Formbuilder\ElementFactory::CLASS_NAME_TEMPLATE))));
    }

    /**
     * Parses config
     * @param array $config
     * @return $this
     */
    protected function parseConfig(array $config) {
        foreach ($config as $property => $value) {
            $this->__set($property, $value);
        }

        $arrButtonTypes = array
            (
            \App\Library\Formbuilder\ElementType::BUTTON,
            \App\Library\Formbuilder\ElementType::CANCEL,
            \App\Library\Formbuilder\ElementType::CLOSE,
            \App\Library\Formbuilder\ElementType::DOWNLOAD,
            \App\Library\Formbuilder\ElementType::EXPORT,
            \App\Library\Formbuilder\ElementType::FILTER,
            \App\Library\Formbuilder\ElementType::SEARCH,
            \App\Library\Formbuilder\ElementType::SUBMIT,
            \App\Library\Formbuilder\ElementType::SUBMIT_AND_CLOSE,
        );

        if ($this->__get('name') === '' && $this->__get('id') !== '' && in_array($this->getElementType(), $arrButtonTypes) === false) {
            $this->__set('name', $this->__get('id'));
        }

        return $this;
    }

    /**
     * Checks if property exists
     * @param string $property
     * @return bool
     */
    protected function propertyExists($property) {
        return property_exists(get_class($this), $property);
    }

    /**
     * Renders form element
     * @return string
     */
    public function render($fieldoptions = array()) {
        $arrElement = array();

        if ($this->getElementType() !== \App\Library\Formbuilder\ElementType::LABEL && $this->__get('label') !== '') {
            $arrElement[] = $this->renderLabel();
        }

        $arrElement[] = $this->renderElement();

        if ($this->getElementType() !== \App\Library\Formbuilder\ElementType::HELPTEXT && $this->__get('helpText') !== '') {
            $arrElement[] = $this->renderHelpText();
        }

        return implode("\n\r", $arrElement);
    }

    /**
     * Initializes the default CSS class
     * @return $this
     */
    private function initClass() {
        $objElementCssClass = new \App\Library\Formbuilder\ElementCssClass();
        $this->__set('class', $objElementCssClass->getDefaultCssClass($this->getElementType()));

        return $this;
    }

    /**
     * Adds a new or overwrites existing attribute
     * @param string $property
     * @return $this
     */
    protected function addAttribute($property) {
        if (in_array($property, $this->getAttributes()) === false) {
            $this->attributes[] = $property;
        }

        return $this;
    }

    /**
     * Removes an attribute
     * @param string $property
     * @return $this
     */
    protected function removeAttribute($property) {
        if (in_array($property, $this->getAttributes())) {
            unset($this->attributes[array_search($property, $this->getAttributes())]);
        }

        return $this;
    }

    /**
     * Renders attributes
     * @return string
     */
    protected function renderAttributes() {
        $arrAttributes = array();
        foreach ($this->getAttributes() as $strAttribute) {
            $mixAttributeValue = $this->__get($strAttribute);
            if (empty($mixAttributeValue) === false || $mixAttributeValue === 0) {
                $arrAttributes[] = sprintf(self::TEMPLATE_ATTRIBUTE, $this->convertAttributeName($strAttribute), $mixAttributeValue);
            }
        }
        return implode(' ', $arrAttributes);
    }

    /**
     * Converts attribute name for HTML output
     * This method is needed for name conversion where original name is
     * not supported by PHP syntax.
     * @param $attribute
     * @return mixed
     */
    private function convertAttributeName($attribute) {
        if (array_key_exists($attribute, $this->attributeNameConversion)) {
            $attribute = $this->attributeNameConversion[$attribute];
        }

        return $attribute;
    }

    /**
     * Renders label
     * @return string
     */
    protected function renderLabel() {
        $options = array('for' => $this->__get('id'), 'value' => $this->__get('label'));
        if ($this->__get('required')) {
            $options['required'] = $this->__get('required');
        }
        $objLabel = \App\Library\Formbuilder\ElementFactory::create(\App\Library\Formbuilder\ElementType::LABEL, $options);
        $objLabel->setLabelTemplate(static::TEMPLATE_LABEL);
        
        return $objLabel->render();
    }

    /**
     * Renders help text
     * @return string
     */
    protected function renderHelpText() {
        $objHelpText = new \App\Library\Formbuilder\Element\HelpText(array('value' => $this->__get('helpText')));
        $objHelpText->setHelpTextTemplate(static::TEMPLATE_HELP_TEXT);

        return $objHelpText->render();
    }

    /**
     * Renders disabled
     * @return string
     */
    protected function renderDisabled() {
        return $this->__get('disabled') === true ? ' disabled' : '';
    }

    /**
     * Renders Required
     * @return string
     */
    protected function renderRequired() {
        return $this->__get('required') === true ? ' required="required"' : '';
    }

    /**
     * Renders tooltip
     * @return string
     */
    protected function renderTooltip() {
        return sprintf('<a href="#" class="filter_tooltip" data-toggle="tooltip" data-placement="%s" style="position: absolute;top:10px;right:18px;" title="%s"><i class="%s" style="color:black"></i></a>', $this->__get('tooltipPlacement'), $this->__get('tooltip'), $this->__get('tooltipIcon'));
    }

    /**
     * Renders action button
     * @return string
     */
    protected function renderActionButton() {
        $strActionButton = '';
        if ($this->__get('actionButton') !== '') {
            if ($this->__get('actionButtonOnClick') === '') {
                $strTemplate = '<a href="%s" title="%s" class="btn btn-small"><i class="%s"></i></a>';
                $strAction = $this->__get('actionButton');
            } else {
                $strTemplate = '<a onclick="%s" title="%s" class="btn btn-small"><i class="%s"></i></a>';
                $strAction = $this->__get('actionButtonOnClick');
            }

            $strActionButton = sprintf
                    (
                    $strTemplate, $strAction, $this->__get('actionButtonTitle'), $this->__get('actionButtonIcon')
            );
        }

        return $strActionButton;
    }

    /**
     * Adds a attribute conversion name to list
     * @param string $attributeName
     * @param string $convertedName
     * @return $this
     */
    protected function addAttributeNameConversion($attributeName, $convertedName) {
        $this->attributeNameConversion[$attributeName] = $convertedName;
        return $this;
    }

    /**
     * Gets elementType
     * @return string
     */
    public function getElementType() {
        return $this->elementType;
    }

    /**
     * Sets a new elementType
     * @param string $elementType
     * @return $this
     */
    public function setElementType($elementType) {
        $this->elementType = $elementType;
        $this->initClass();

        return $this;
    }

    /**
     * Gets labelTemplate
     * @return string
     */
    public function getLabelTemplate() {
        return $this->labelTemplate;
    }

    /**
     * Sets a new labelTemplate
     * @param string $labelTemplate
     * @return $this
     */
    public function setLabelTemplate($labelTemplate) {
        $this->labelTemplate = $labelTemplate;
        return $this;
    }

    /**
     * Gets helpTextTemplate
     * @return string
     */
    public function getHelpTextTemplate() {
        return $this->helpTextTemplate;
    }

    /**
     * Sets a new helpTextTemplate
     * @param string $helpTextTemplate
     * @return $this
     */
    public function setHelpTextTemplate($helpTextTemplate) {
        $this->helpTextTemplate = $helpTextTemplate;
        return $this;
    }

    /**
     * Gets attributes
     * @return array
     */
    protected function getAttributes() {
        return $this->attributes;
    }

    /**
     * Sets a new attributes
     * @param array $attributes
     * @return $this
     */
    protected function setAttributes(array $attributes) {
        $this->attributes = $attributes;
        return $this;
    }

    /**
     * Gets disallowedAttributesRendering
     * @return array
     */
    private function getDisallowedAttributesRendering() {
        return $this->disallowedAttributesRendering;
    }

    /**
     * Sets a new disallowedAttributesRendering
     * @param array $disallowedAttributesRendering
     * @return $this
     */
    private final function setDisallowedAttributesRendering(array $disallowedAttributesRendering) {
        $this->disallowedAttributesRendering = $disallowedAttributesRendering;
        return $this;
    }

    /**
     * Gets attributeNameConversion
     * @return array
     */
    protected function getAttributeNameConversion() {
        return $this->attributeNameConversion;
    }

    /**
     * Sets a new attributeNameConversion
     * @param array $attributeNameConversion
     * @return $this
     */
    protected function setAttributeNameConversion(array $attributeNameConversion) {
        $this->attributeNameConversion = $attributeNameConversion;
        return $this;
    }

}
