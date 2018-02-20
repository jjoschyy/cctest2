
/*
 * Global scope variables.
 * Switching tabs.
 * Date-time setings
 *
 */

var selectedWorkingStepId = 0;

$(document).ready(function () {
    operationController.resizeElements();    
    //Subnavigation Access
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        if ($(this).hasClass("nav-item-sequences")) {
            $("#ws_navbar_content .tab-pane").removeClass("in active show");
            $("#sequences").addClass("in active show");
            $("#rightMenu").hide(0);
            $("#rightMenuStart").show(0);
            $(".workingStepsOperations").hide(0);
            $("#workingStepOperation_" + $(this).attr("ref")).show(0);
        }else{
            $("#sequences").removeClass("in active show");            
        }
        $(".activeStep").removeClass('activeStep');
        selectedWorkingStepId = 0;
    });
    
    // select language settings for date
    switch (langAbbreviation) {
        case "de": // German
            $.extend($.fn.pickadate.defaults, {
                monthsFull: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
                monthsShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
                weekdaysFull: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
                weekdaysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
                today: 'Heute',
                clear: 'Löschen',
                close: 'Schließen',
                firstDay: 1,
                format: 'dddd, dd. mmmm yyyy',
                formatSubmit: 'yyyy-mm-dd'
            });
            $.extend($.fn.pickatime.defaults, {
                clear: 'Löschen'
            });
            break;
        case "cn": // Chinese
            $.extend($.fn.pickadate.defaults, {
                monthsFull: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                monthsShort: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                weekdaysFull: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
                weekdaysShort: ['日', '一', '二', '三', '四', '五', '六'],
                today: '今日',
                clear: '清除',
                close: '关闭',
                firstDay: 1,
                format: 'yyyy 年 mm 月 dd 日',
                formatSubmit: 'yyyy/mm/dd'
            });
            $.extend($.fn.pickatime.defaults, {
                clear: '清除'
            });
            break;
        default:
        // english
    }

// Time Picker Initialization
    $('.timepicker').pickatime({
        twelvehour: false
    });
    // First Init
    $('#workingStepOperation_0').removeAttr("style");
});

// click on buttons 'Continue' and  'Send report' for modal 'Received missing part' => set local start and end date / set local start time and estimated end time
var setLocalDateTime = function (prefix, suffix) { // for 'Error report' param suffix is empty string, for 'Pause report' it is 'Pause' and for report 'Received missing part' is 'missing'

    $('#' + prefix + suffix + 'StartDateInput').attr('data-value', new Date().toDateInputValue().replace(/-/g, "/"));
    $('#' + prefix + suffix + 'EndDateInput').attr('data-value', new Date().toDateInputValue().replace(/-/g, "/"));
    // Date Picker Initialization
    $('.datepicker.type_' + prefix + suffix).pickadate({
    });
    // set start time
    var dt = new Date();
    $('#' + prefix + suffix + 'StartTimeInput').val(dt.getHours() + ":" + (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes());
    // set estimated end time
    if (dt.getHours() === 23 && dt.getMinutes() >= 45)
    {
        estimatedEndHours = 24;
        estimatedEndMinutes = '00';
    } else
    {
        // set default display for fifteen minutes later
        dt.setMinutes(dt.getMinutes() + 15);
        var estimatedEndHours = dt.getHours();
        var estimatedEndMinutes = (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes()
    }
    $('#' + prefix + suffix + 'EstimatedEndTimeInput').val(estimatedEndHours + ":" + estimatedEndMinutes);
};