<?php

namespace App\Library\Formbuilder\Element\Input;

class DateRangePicker extends \App\Library\Formbuilder\Element\InputAbstract {

    const TYPE = 'text';
    const DEFAULT_MINUTE_STEP = 1;
    const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';
    const TEMPLATE_INPUT = '<div class="control-group">
	<label class="control-label" for="%s">%s</label>
	<div class="control">
		<div class="input-prepend">
			<span class="add-on"><i class="icon-calendar"></i></span><input %s>%s
		</div>
	</div>
</div>';
    const TEMPLATE_SCRIPT = '
		var dateFormat = \'%2$s\';

		$(\'#%1$s\').daterangepicker({
				startDate: %3$s,
				endDate: %4$s,
				minDate: \'%5$s\',
				maxDate: \'%6$s\',
				showDropdowns: %7$s,
				showWeekNumbers: %8$s,
				timePickerIncrement: %9$s,
				timePicker12Hour: %10$s,
				opens: \'%11$s\',
				buttonClasses: [\'btn btn-default\'],
				applyClass: \'btn-small btn-primary\',
				cancelClass: \'btn-small\',
				format: dateFormat,
				ranges: %12$s,
				locale: %13$s
		},
		function(start, end) {
			$(\'#%1$s\').val(start.format(this.format) + \' - \' + end.format(this.format));
		});
		$(\'#%1$s\').val(%14$s.format(dateFormat) + \' - \' + %15$s.format(dateFormat));';

    /*     * ********************************************************************
     *
     * Properties
     *
     * ******************************************************************* */

    /** @var string  */
    protected $startDate = 'moment().startOf(\'day\')';

    /** @var string  */
    protected $endDate = 'moment().startOf(\'day\')';

    /** @var string  */
    protected $minDate = '';

    /** @var string  */
    protected $maxDate = '';

    /** @var bool  */
    protected $showDropdowns = true;

    /** @var bool  */
    protected $showWeekNumbers = true;

    /** @var int  */
    protected $timePickerIncrement = 30;

    /** @var bool  */
    protected $timePicker12Hour = false;

    /** @var string  */
    protected $opens = 'right';

    /** @var string  */
    protected $format = self::DEFAULT_DATE_FORMAT;

    /** @var array  */
    protected $ranges = array();

    /** @var array  */
    protected $locale = array();

    /**
     * Constructor
     *
     * @param array $config
     */
    public function __construct($config) {
        if (!array_key_exists('ranges', $config)) {
            $curYear = date("Y");
            $config['ranges'] = array
                (
                $GLOBALS['PB_LANG']['DAYTIME']['today'] => '[moment(), moment()]',
                $GLOBALS['PB_LANG']['DAYTIME']['yesterday'] => '[moment().subtract(\'days\', 1), moment().subtract(\'days\', 1)]',
                $GLOBALS['PB_LANG']['DAYTIME']['currentWeek'] => '[moment().startOf(\'week\'), moment().endOf(\'week\')]',
                $GLOBALS['PB_LANG']['DAYTIME']['lastWeek'] => '[moment().subtract(\'week\', 1).startOf(\'week\'), moment().subtract(\'week\', 1).endOf(\'week\')]',
                $GLOBALS['PB_LANG']['DAYTIME']['currentMonth'] => '[moment().startOf(\'month\'), moment().endOf(\'month\')]',
                $GLOBALS['PB_LANG']['DAYTIME']['lastMonth'] => '[moment().subtract(\'month\', 1).startOf(\'month\'), moment().subtract(\'month\', 1).endOf(\'month\')]',
                $GLOBALS['PB_LANG']['DAYTIME']['fiscalYear'] . ' ' . ($curYear - 1) . '/' . ($curYear) => '[moment().year(' . ($curYear - 1) . ').month(9).date(1),moment().year(' . ($curYear) . ').month(8).endOf(\'month\')]',
                $GLOBALS['PB_LANG']['DAYTIME']['fiscalYear'] . ' ' . $curYear . '/' . ($curYear + 1) => '[moment().year(' . $curYear . ').month(9).date(1),moment().year(' . ($curYear + 1) . ').month(8).endOf(\'month\')]',
                $GLOBALS['PB_LANG']['DAYTIME']['currentYear'] => '[moment().startOf(\'year\'), moment().endOf(\'year\')]',
                $GLOBALS['PB_LANG']['DAYTIME']['lastYear'] => '[moment().subtract(\'year\', 1).startOf(\'year\'), moment().subtract(\'year\', 1).endOf(\'year\')]',
                $GLOBALS['PB_LANG']['DAYTIME']['totalTimePeriod'] => '[moment().year(2008).month(2).date(23), moment()]',
            );
        }

        $arrDefaultLocale = array
            (
            'applyLabel' => $GLOBALS['PB_LANG']['BUTTON']['apply'],
            'cancelLabel' => $GLOBALS['PB_LANG']['BUTTON']['cancel'],
            'fromLabel' => $GLOBALS['PB_LANG']['LABEL']['from'],
            'toLabel' => $GLOBALS['PB_LANG']['LABEL']['to'],
            'customRangeLabel' => $GLOBALS['PB_LANG']['LABEL']['customRange'],
        );
        if (array_key_exists('locale', $config)) {
            foreach ($config['locale'] as $strKey => $strValue) {
                $arrDefaultLocale[$strKey] = $strValue;
            }
        }
        $config['locale'] = $arrDefaultLocale;

        parent::__construct($config);
        foreach (array('startDate', 'endDate', 'minDate', 'maxDate', 'ranges', 'locale') as $strAttributeName) {
            $this->removeAttribute($strAttributeName);
        }
    }

    /**
     * Renders date
     *
     * @return string
     */
    public function render($fieldoptions = array()) {
        $arrDateRangePicker = array();
        $objJsFiles = Pb_Http_Response_JsFiles::getInstance();

        $objJsFiles->addJsFile('plugins/moment/moment.js');
        if (Pb_Session::getInstance()->getUser()->getLanguage()->getAbbreviation() == 'de') {
            $objJsFiles->addJsFile('plugins/moment/lang/de.js');
        }
        $objJsFiles->addJsFile('plugins/bootstrap-daterangepicker/daterangepicker.js');
        $arrDateRangePicker[] = '<link rel="stylesheet" type="text/css" href="plugins/bootstrap-daterangepicker/daterangepicker-bs2.css" />';

        $arrDateRangePicker[] = sprintf
                (
                self::TEMPLATE_INPUT, $this->__get('id'), $this->__get('label'), $this->renderAttributes(), $this->__get('tooltip') !== '' ? $this->renderTooltip() : ''
        );

        Pb_Http_Response_OnLoad::getInstance()->add(sprintf
                        (
                        self::TEMPLATE_SCRIPT, $this->__get('id'), $this->__get('format'), $this->__get('startDate'), $this->__get('endDate'), $this->__get('minDate'), $this->__get('maxDate'), Pb_Helper_Boolean::renderAsText($this->__get('showDropdowns')), Pb_Helper_Boolean::renderAsText($this->__get('showWeekNumbers')), $this->__get('timePickerIncrement'), Pb_Helper_Boolean::renderAsText($this->__get('timePicker12Hour')), $this->__get('opens'), $this->renderRanges(), $this->renderLocale(), $this->__get('startDate'), $this->__get('endDate')
        ));

        $arrDateRangePicker[] = $this->renderHelpText();

        return implode("\n\r", $arrDateRangePicker);
    }

    /**
     * Renders ranges
     * @return string
     */
    private function renderRanges() {
        $arrRanges = array();
        foreach ($this->__get('ranges') as $strDescription => $strInitialization) {
            $arrRanges[] = sprintf
                    (
                    '\'%s\': %s', $strDescription, $strInitialization
            );
        }

        $strRanges = sprintf('{%s}', implode(', ', $arrRanges));

        return $strRanges;
    }

    /**
     * Renders locale
     * @return string
     */
    private function renderLocale() {
        $arrLocale = array();
        foreach ($this->__get('locale') as $strKey => $strValue) {
            if (strpos($strValue, '[') === false && is_numeric($strValue) == false) {
                $strValue = sprintf('\'%s\'', $strValue);
            }
            $arrLocale[] = sprintf('%s: %s', $strKey, $strValue);
        }

        $strLocale = sprintf('{%s}', implode(', ', $arrLocale));

        return $strLocale;
    }

}
