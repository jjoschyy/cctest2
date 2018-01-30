<?php

namespace App\Library\Formbuilder\Element\Input;

class Date extends \App\Library\Formbuilder\Element\InputAbstract {
    /*     * ********************************************************************
     *
     * Class constants
     *
     * ******************************************************************* */

    const TYPE = 'text';
    const DEFAULT_MINUTE_STEP = 1;
    const DEFAULT_CALENDAR_DATE_FORMAT = 'yy-mm-dd';
    const DEFAULT_CALENDAR_DATETIME_FORMAT = 'HH:mm:ss';

    /*     * ********************************************************************
     *
     * Properties
     *
     * ******************************************************************* */

    /**
     * minDate
     *
     * @var string
     */
    protected $minDate = '';

    /**
     * maxDate
     *
     * @var string
     */
    protected $maxDate = '';

    /**
     * minuteStep
     *
     * @var int
     */
    protected $minuteStep = self::DEFAULT_MINUTE_STEP;

    /**
     * calendarShowWeekNumbers
     *
     * @var bool
     */
    protected $calendarShowWeekNumbers = true;

    /**
     * calendarDateFormat
     *
     * @var string
     */
    protected $calendarDateFormat = self::DEFAULT_CALENDAR_DATE_FORMAT;

    /**
     * calendarTimeFormat
     *
     * @var string
     */
    protected $calendarTimeFormat = self::DEFAULT_CALENDAR_DATETIME_FORMAT;

    /**
     * calendarShowTime
     *
     * @var bool
     */
    protected $calendarShowTime = false;

    /** @var string */
    protected $style = '';

    /*     * ********************************************************************
     *
     * Methods
     *
     * ******************************************************************* */

    /**
     * Constructor
     *
     * @param array $config
     */
    public function __construct($config) {
        parent::__construct($config);
        foreach (array('calendarDateFormat', 'calendarShowTime') as $strAttributeName) {
            $this->removeAttribute($strAttributeName);
        }
    }

    /**
     * Renders date
     *
     * @return string
     */
    public function render($fieldoptions = array()) {
        $objUser = Pb_Session::getInstance()->getUser();

        $arrDate = array();

        if ($objUser->getLanguage()->getAbbreviation() !== 'en') {
            $arrDate[] = sprintf('<script type="text/javascript" src="plugins/jQueryTimepicker/localization/jquery-ui-timepicker-%s.js"></script>', $objUser->getLanguage()->getAbbreviation());
        }

        $arrDate[] = $this->renderLabel();
        $arrDate[] = sprintf('<input %s%s%s />', $this->renderAttributes(), $this->renderDisabled(), $this->renderRequired());
        if ($this->__get('tooltip') !== '') {
            $arrDate[] = $this->renderTooltip();
        }
        $arrDate[] = '<script>';
        $arrDate[] = 'var pickerOptions = { ';
        $arrDate[] = 'dateFormat: "' . $this->getCalendarDateFormat() . '",';
        $arrDate[] = 'timeFormat: "' . $this->getCalendarTimeFormat() . '",';
        $arrDate[] = 'showWeek: ' . $this->getCalendarShowWeekNumbers() . ',';
        $arrDate[] = 'stepMinute: ' . $this->getMinuteStep() . ',';
        if ($this->getMinDate() != '') {
            $arrDate[] = sprintf('minDate: %s,', Pb_Helper_Date::getDateAsJsDateObjectInstantiation($this->getMinDate()));
        }
        if ($this->getMaxDate() != '') {
            $arrDate[] = sprintf('maxDate: %s,', Pb_Helper_Date::getDateAsJsDateObjectInstantiation($this->getMaxDate()));
        }
        $arrDate[] = 'disabled: ' . $this->getDisabled();
        $arrDate[] = ' };';

        if ($objUser->getLanguage()->getAbbreviation() != 'en') {
            $arrDate[] = "pickerOptions = $.extend($.timepicker.regional['de'], pickerOptions);";
        }

        $arrDate[] = sprintf('$("#%s").%s(pickerOptions);', $this->__get('id'), $this->getDateTimeType());

        $arrDate[] = '</script>';

        $arrDate[] = $this->renderHelpText();

        Pb_Http_Response_OnLoad::getInstance()->add(sprintf('$.datepicker.setDefaults({regional: "%s"});', $objUser->getLanguage()->getAbbreviation()));

        return implode("\n\r", $arrDate);
    }

    /*     * ********************************************************************
     *
     * Getters & setters
     *
     * ******************************************************************* */

    /**
     * Gets date/time type
     *
     * @return string
     */
    protected function getDateTimeType() {
        $type = 'datepicker';

        if ($this->getCalendarShowTime() === true) {
            $type = 'datetimepicker';
        }

        return $type;
    }

    /**
     * Gets disabled
     *
     * @return string
     */
    protected function getDisabled() {
        return $this->__get('disabled') === true ? 'true' : 'false';
    }

    /**
     * Gets calendarDateFormat
     *
     * @return string
     */
    protected function getCalendarDateFormat() {
        return $this->__get('calendarDateFormat');
    }

    /**
     * Sets a new calendarDateFormat
     *
     * @param string $calendarDateFormat
     * @return $this
     */
    protected function setCalendarDateFormat($calendarDateFormat) {
        return $this->__set('calendarDateFormat', $calendarDateFormat);
    }

    /**
     * Gets calendarTimeFormat
     *
     * @return string
     */
    protected function getCalendarTimeFormat() {
        return $this->__get('calendarTimeFormat');
    }

    /**
     * Sets a new calendarTimeFormat
     *
     * @param string $calendarTimeFormat
     * @return $this
     */
    protected function setCalendarTimeFormat($calendarTimeFormat) {
        return $this->__set('calendarTimeFormat', $calendarTimeFormat);
    }

    /**
     * Gets calendarShowTime
     *
     * @return boolean
     */
    protected function getCalendarShowTime() {
        return $this->__get('calendarShowTime');
    }

    /**
     * Sets a new calendarShowTime
     *
     * @param boolean $calendarShowTime
     * @return $this
     */
    protected function setCalendarShowTime($calendarShowTime) {
        return $this->__set('calendarShowTime', (bool) $calendarShowTime);
    }

    /**
     * Gets calendarShowWeekNumbers
     *
     * @return boolean
     */
    protected function getCalendarShowWeekNumbers() {
        return $this->__get('calendarShowWeekNumbers') === true ? 'true' : 'false';
    }

    /**
     * Sets a new calendarShowWeekNumbers
     *
     * @param boolean $calendarShowWeekNumbers
     * @return $this
     */
    protected function setCalendarShowWeekNumbers($calendarShowWeekNumbers) {
        return $this->__set('calendarShowWeekNumbers', (bool) $calendarShowWeekNumbers);
    }

    /**
     * Gets maxDate
     *
     * @return string
     */
    protected function getMaxDate() {
        return $this->__get('maxDate');
    }

    /**
     * Sets a new maxDate
     *
     * @param string $maxDate
     * @return $this
     */
    protected function setMaxDate($maxDate) {
        return $this->__set('maxDate', $maxDate);
    }

    /**
     * Gets minDate
     *
     * @return string
     */
    protected function getMinDate() {
        return $this->__get('minDate');
    }

    /**
     * Sets a new minDate
     *
     * @param string $minDate
     * @return $this
     */
    protected function setMinDate($minDate) {
        return $this->__set('minDate', $minDate);
    }

    /**
     * Gets minuteStep
     *
     * @return int
     */
    protected function getMinuteStep() {
        return $this->__get('minuteStep');
    }

    /**
     * Sets a new minuteStep
     *
     * @param int $minuteStep
     * @return $this
     */
    protected function setMinuteStep($minuteStep) {
        return $this->__set('minuteStep', (int) $minuteStep);
    }

}
