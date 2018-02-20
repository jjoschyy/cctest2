
/*
 * Checklist Controller.
 *
 */


var sequence = '0';
var previousStatusId = '0';

$('#checkListContainer, #checkListParallelContainer').on('blur', 'input[type=text]', function () {
    updateCheckList(this)
});
$('#checkListContainer, #checkListParallelContainer').on('click', 'input[type=checkbox]', function () {
    updateCheckList(this)
});
$('#checkListContainer, #checkListParallelContainer').on('click', 'input[type=radio]', function () {
    radioUpdateCheckList(this)
});

$('#checkListContainer, #checkListParallelContainer').on('keyup', 'input[type=text]', function () {
    inputValidation(this)
});

var inputValidation = function (event) {

    var inputType = $(event).attr('check_list_item_type');

    if (inputType === 'INP')
    {
        // standard input field entered - validation on keydown
        if ($(event).val().length < 3)
        {
            $(event).addClass('invalidInputCheckList');
            return false;
        } else
        {
            $(event).removeClass('invalidInputCheckList');
            return true;
        }
    }

    // input field 'Measurement/Messwert' entered - validation on keydown
    if (inputType === 'MW')
    {
        var itemValue = $(event).val();
        var minValue = $(event).attr('min_value');
        var maxValue = $(event).attr('max_value');

        // if both are defined
        if (minValue && maxValue)
        {
            if (itemValue > +minValue && itemValue < +maxValue)
            {
                $(event).removeClass('invalidInputCheckList');
                return true;
            } else
            {
                $(event).addClass('invalidInputCheckList');
                return false;
            }
        }
        // if only min is defined
        else if (minValue && !maxValue)
        {
            if (itemValue > +minValue)
            {
                $(event).removeClass('invalidInputCheckList');
                return true;
            } else
            {
                $(event).addClass('invalidInputCheckList');
                return false;
            }
        }
        // if only max is defined
        else if (!minValue && maxValue)
        {
            if (itemValue > +maxValue)
            {
                $(event).removeClass('invalidInputCheckList');
                return true;
            } else
            {
                $(event).addClass('invalidInputCheckList');
                return false;
            }
        }
        // if bot undefined
        else
        {
            $(event).removeClass('invalidInputCheckList');
            return true;
        }
    }
}

var updateCheckList = function (event) {

    var inputType = $(event).attr('check_list_item_type');
    var checkListItemNumber = $(event).attr('check_list_item_number');
    var itemValue = $(event).val();
    sequence = $(event).attr('sequence_number');
    previousStatusId = $('#' + selectedWorkingStepId + ' > div > span').attr('data-statusId');

    var inputValue = '';
    // check box selected
    if (inputType === 'IT' || inputType === 'IT2')
    {
        inputValue = $(event).is(':checked');
    }

    if (inputType === 'INP')
    {
        // do not save input if not valid
        if (!inputValidation(event))
            return;
    }

    // input field 'Measurement/Messwert' entered - validation - TODO
    if (inputType === 'MW')
    {
        // do not save measurement input if not valid
        if (!inputValidation(event))
            return;
    }

    var checkListData = {
        '_token': $('meta[name="csrf-token"]').attr('content'),
        workingStepId: selectedWorkingStepId,
        previousStatusId: previousStatusId,
        itemValue: itemValue,
        inputType: inputType,
        checkListItemNumber: checkListItemNumber,
        inputValue: inputValue
    };

    // send data to CheckListController
    $.ajax({
        type: "POST",
        url: "/go/checkList",
        data: checkListData,
        success: function (data) {

            var status = data.status;
            var statusId = data.statusId;
            var borderColor = data.borderColor;
            var backgroundColor = data.backgroundColor;
            var hasMissingParts = data.hasMissingParts;
            var previousStatusId = +data.previousStatusId;
            var isCheckListCompleted = data.isCheckListCompleted;

            var prefix = sequence === '0' ? 'o' : 'p';

            if (isCheckListCompleted) // change to status 'Complete'
            {
                if (hasMissingParts)
                {
                    $('#infoDialogMissingPartsFound').modal('show');
                } else
                {
                    $('#' + selectedWorkingStepId + ' > div > span').text(status);
                    $('#' + selectedWorkingStepId + ' > div > span').css({"border-bottom": "4px solid " + borderColor, "background-color": backgroundColor});
                    $('#' + selectedWorkingStepId + ' > div > span').attr('data-statusId', statusId);
                    // disable all operation butttons
                    $('#' + prefix + 'Started, ' + '#' + prefix + 'Paused, ' + '#' + prefix + 'Error, ' + '#' + prefix + 'Confirmed').attr("disabled", true);
                    // enable required
                    $('.operationButtons #' + prefix + 'Paused, .operationButtons #' + prefix + 'Error, .operationButtons #' + prefix + 'Confirmed').removeAttr('disabled');
                }
            }

            if (previousStatusId === 20 && !isCheckListCompleted) // change to status 'Production'
            {
                $('#' + selectedWorkingStepId + ' > div > span').text(status);
                $('#' + selectedWorkingStepId + ' > div > span').css({"border-bottom": "4px solid " + borderColor, "background-color": backgroundColor});
                $('#' + selectedWorkingStepId + ' > div > span').attr('data-statusId', statusId);
                // disable all operation butttons
                $('#' + prefix + 'Started, ' + '#' + prefix + 'Paused, ' + '#' + prefix + 'Error, ' + '#' + prefix + 'Confirmed').attr("disabled", true);
                // enable required
                $('.operationButtons #' + prefix + 'Paused, .operationButtons #' + prefix + 'Error').removeAttr('disabled');
            }

        },
        error: function (xhr, status, error) {
            console.log("Status: " + status + " - Error: " + error);
        }
    });
};

// radio buttons controller
var radioUpdateCheckList = function (event) {

    var inputType = $(event).attr('check_list_item_type');
    var checkListItemNumber = $(event).attr('check_list_item_number');
    var itemValue = $(event).attr('value');
    var itemName = $(event).attr('name');
    var conditionValue = $(event).attr('condition_value');
    $(event).attr('checked', 'checked');
    // remove checked to opposite radio button
    var oppositeValue = itemValue === 'yes' ? 'no' : 'yes';
    $('[name="' + itemName + '"][value="' + oppositeValue + '"]').removeAttr('checked');

    var radioName = $(event).attr('radio_name');
    sequence = $(event).attr('sequence_number');

    var radioCheckListData = {
        '_token': $('meta[name="csrf-token"]').attr('content'),
        workingStepId: selectedWorkingStepId,
        itemValue: itemValue,
        inputType: inputType,
        radioName: radioName,
        conditionValue: conditionValue,
        checkListItemNumber: checkListItemNumber
    };

    // send data to CheckListController
    $.ajax({
        type: "POST",
        url: "/go/checkListRadio",
        data: radioCheckListData,
        success: function (checkLsit) {

            var parallel = sequence === '0' ? '' : 'Parallel';

            if (!$.isEmptyObject(checkLsit[0]))
            {
                $('#checkList' + parallel + 'Container').empty();
                var tableCheckLsit = '';

                // display checklist
                tableCheckLsit = '';
                $('#checkListContainer').empty();
                $('.checkListTextParallel').empty();

                $.each(checkLsit, function (idx, item) {
                    if (+item.condition)
                    {
                        tableCheckLsit += item.displaySnippet;
                    }

                });

                $('#checkList' + parallel + 'Container').html(tableCheckLsit);
            }

        },
        error: function (xhr, status, error) {
            console.log("Status: " + status + " - Error: " + error);
        }
    });
};


