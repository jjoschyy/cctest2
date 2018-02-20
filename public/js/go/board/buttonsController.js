/*
 * Implement ajax requests for buttons: operation-overview and parallel-sequence.
 *
 */

// date helper - display current date in html input of type date
Date.prototype.toDateInputValue = (function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
});

// helper validation function - check if n is integer and n >= 0
function isPositiveInteger(str) {
    var n = Math.floor(Number(str));
    return String(n) === str && n >= 0;
}

var buttonsController = {
    // class variables
    prefix: "",
    selectedBtn: "",
    previousStatusId: 0,

    // validation-check variables
    oSubCategory: false,
    pSubCategory: false,
    oPauseSubCategory: false,
    pPauseSubCategory: false,
    oReceiverType: false,
    pReceiverType: false,
    oFailureSource: false,
    pFailureSource: false,
    // Receiver Number Position is required to be positive integer, only if 'Customer Order' is selected as Receiver Type
    // as by default Customer Order is not selected validation-check variable is set on true
    oCustomerOrder: true,
    pCustomerOrder: true,
    // Receiver Number is required to be positive integer, only if selected sub-category has value null for 'receiver_no' in the table 'timesheet_list_sub_categories'
    // if value is not null value is displayed in input field 'Receiver number' and field is disabled
    // as by default sub-category is not selected value is set on false
    oReceiverNumberRequired: false,
    pReceiverNumberRequired: false,

    // ajax function for update buttons
    updateButtonStatus: {
        status: false,
        statusId: false,
        borderColor: false,
        backgroundColor: false,
        init: function (data) {
            var parent = this;
            $.ajax({
                type: "GET",
                url: "/go/selectedBtn/" + selectedBtn + "/" + selectedWorkingStepId + "/" + previousStatusId, // selectedWorkingStepId => global variable      
                success: function (data) {
                    parent.status = data.status;
                    parent.statusId = data.statusId;
                    parent.borderColor = data.borderColor;
                    parent.backgroundColor = data.backgroundColor;

                    // on update success
                    if (parent.status.length > 0) {
                        // disable all operation butttons
                        $('#wsStartedBtn, #wsCancelBtn, #wsBreakBtn, #wsConfirmedBtn').attr("disabled", true);

                        // disable checklist
                        //$("#checkList" + parallel).addClass("checkListDisabled");

                        switch (parent.statusId) {
                            case 2: // status is production
                                parent.isProduction();
                                break;
                            case 3: // status is Finished
                                parent.isFinished();
                                break;
                            case 20: // status is complete
                                parent.isCompleted();
                                break;
                            case 4: // status is error
                            case 5: // or status is pause
                                parent.isBreak();
                                break;
                            case - 91: // if after click on button 'Confirm/Fertig' working step has missing parts => operation can´t complete
                                $('#infoDialogMissingPartsFound').modal('show');
                                $('.operationButtons #' + prefix + 'Paused, .operationButtons #' + prefix + 'Error, .operationButtons #' + prefix + 'Confirmed').removeAttr('disabled');
                                // enable checklist
                                $("#checkList" + parallel).removeClass("checkListDisabled");
                                break;
                            case 91: // status is 'Confirmation'
                                parent.isInConfirmation();
                                break;
                            default:
                                console.log('Updated failed for working step Id: ' + selectedWorkingStepId);
                        }
                    } else {
                        console.log('Updated failed for working step Id: ' + selectedWorkingStepId);
                    }
                },
                error: function (xhr, status, error) {
                    console.log("Status: " + status + " - Error: " + error);
                }
            });
        },
        isProduction: function () {
            $('#' + selectedWorkingStepId + ' > div > span').text(this.status);
            $('#' + selectedWorkingStepId + ' > div > span').css({"border-bottom": "4px solid " + this.borderColor, "background-color": this.backgroundColor});
            $('#' + selectedWorkingStepId + ' > div > span').attr('data-statusId', this.statusId);
            $('.operationButtons #' + prefix + 'Paused, .operationButtons #' + prefix + 'Error').removeAttr('disabled');
            // enable checklist
            $("#checkList" + parallel).removeClass("checkListDisabled");
            console.log('Updated status to "' + this.status + '" for working step Id: ' + selectedWorkingStepId);
        },
        isBreak: function () {
            $('.operationButtons #' + prefix + 'Started').removeAttr('disabled');
            // set button 'Start' as 'Continue'
            $('#' + prefix + 'Started').html('<i class="fa fa-repeat" aria-hidden="true"></i>' + LD('continue'));
            $('#' + selectedWorkingStepId + ' > div > span').text(this.status);
            $('#' + selectedWorkingStepId + ' > div > span').css({"border-bottom": "4px solid " + this.borderColor, "background-color": this.backgroundColor});
            $('#' + selectedWorkingStepId + ' > div > span').attr('data-statusId', this.statusId);
            console.log('Updated status to "' + this.status + '" for working step Id: ' + selectedWorkingStepId);
        },
        isFinished: function () {

        },
        isCompleted: function () {
            $('#' + selectedWorkingStepId + ' > div > span').text(this.status);
            $('#' + selectedWorkingStepId + ' > div > span').css({"border-bottom": "4px solid " + this.borderColor, "background-color": this.backgroundColor});
            $('#' + selectedWorkingStepId + ' > div > span').attr('data-statusId', this.statusId);
            $('.operationButtons #' + prefix + 'Paused, .operationButtons #' + prefix + 'Error, .operationButtons #' + prefix + 'Confirmed').removeAttr('disabled');
            // enable checklist
            $("#checkList" + parallel).removeClass("checkListDisabled");
            console.log('Updated status to "' + this.status + '" for working step Id: ' + selectedWorkingStepId);
        },
        isInConfirmation: function () {
            // cahnge all buttons 'Report missing part'
            $(".buttonsMissingPart button[id$='" + selectedWorkingStepId + "']").removeClass('btn-primary reportMissingPart btn-info reportedMissingPart btnMissingPart');
            $(".buttonsMissingPart button[id$='" + selectedWorkingStepId + "']").addClass('btn-success');
            $(".buttonsMissingPart button[id$='" + selectedWorkingStepId + "']").attr("disabled", true);

            $('#' + selectedWorkingStepId + ' > div > span').text(this.status);
            $('#' + selectedWorkingStepId + ' > div > span').css({"border-bottom": "4px solid " + this.borderColor, "background-color": this.backgroundColor});
            $('#' + selectedWorkingStepId + ' > div > span').attr('data-statusId', this.statusId);
            $('.operationButtons button').attr("disabled", true);
            console.log('Updated status to "' + this.status + '" for working step Id: ' + selectedWorkingStepId);
        }
    },

    // #### Operation-overview - Error report ###
    oUpdateSendButton: function () {

        if (oSubCategory && oReceiverType && oCustomerOrder && oReceiverNumberRequired && oFailureSource) {
            $('#oBtnErrorSendMessasge').removeAttr('disabled');
            $('#oBtnErrorSendMessasge').attr('title', LD('sendReport'));
        } else {
            $('#oBtnErrorSendMessasge').attr('disabled', 'true');
            $('#oBtnErrorSendMessasge').attr('title', LD('selectCatSubCatRecType'));
        }

    },

    // #### Parallel-sequence - Error report ###
    pUpdateSendButton: function () {

        if (pSubCategory && pReceiverType && pCustomerOrder && pReceiverNumberRequired && pFailureSource) {
            $('#pBtnErrorSendMessasge').removeAttr('disabled');
            $('#pBtnErrorSendMessasge').attr('title', LD('sendReport'));
        } else {
            $('#pBtnErrorSendMessasge').attr('disabled', 'true');
            $('#pBtnErrorSendMessasge').attr('title', LD('selectCatSubCatRecType'));
        }
    },

    // #### Operation-overview - Pause report ###
    oPauseUpdateSendButton: function () {

        if (oPauseSubCategory) {
            $('#oBtnPauseSendMessasge').removeAttr('disabled');
            $('#oBtnPauseSendMessasge').attr('title', LD('sendReport'));
        } else {
            $('#oBtnPauseSendMessasge').attr('disabled', 'true');
            $('#oBtnPauseSendMessasge').attr('title', LD('go.selectCatSubCat'));
        }

    },

    // #### Parallel-sequence - Pause report ###
    pPauseUpdateSendButton: function () {

        if (pPauseSubCategory) {
            $('#pBtnPauseSendMessasge').removeAttr('disabled');
            $('#pBtnPauseSendMessasge').attr('title', LD('sendReport'));
        } else {
            $('#pBtnPauseSendMessasge').attr('disabled', 'true');
            $('#pBtnPauseSendMessasge').attr('title', LD('selectCatSubCat'));
        }

    },

    events: {
        base: function () {
            $(".operationButtons :button").on('click', function () {
                selectedBtnId = $(this).attr('ref');
                selectedBtn = selectedBtnId.slice(1);
                prefix = selectedBtnId.charAt(0);
                previousStatusId = $('#' + selectedWorkingStepId + ' > div > span').attr('data-statusId');

                if (selectedBtn === 'Confirmed') {
                    // open bootstrap confirm modal
                    $('#confirmDialogComplete').modal('show');

                } else if (selectedBtn === 'Started') { // if button is 'Start'
                    if (previousStatusId === "1") { // if it was planned
                        buttonsController.updateButtonStatus.init();
                    }

                    if (previousStatusId === "4") { // if it was error
                        // set local start and end dateTime 
                        setLocalDateTime(prefix, ''); // for error report sufix parameter is empty string

                        // trigger bootstrap modal 'Error report'
                        $('#' + prefix + 'ErrorModal').modal('show');
                    }

                    if (previousStatusId === "5") { // if it was pause
                        // set local start and end dateTime 
                        setLocalDateTime(prefix, 'Pause');

                        // trigger bootstrap modal 'Pause report'
                        $('#' + prefix + 'PauseModal').modal('show');
                    }

                } else if (selectedBtn === 'Paused') { // if button is 'Pause'
                    $('#confirmDialogPause').modal('show');
                } else if (selectedBtn === 'Error') { // if button is 'Error'
                    $('#confirmDialogError').modal('show');
                } else {
                    buttonsController.updateButtonStatus.init();
                }
            });

            // Confirm buttons dialog 'Complete': call updateButtonStatus.init()
            $('#btnConfirmCompleteOperation').on('click', function () {
                buttonsController.updateButtonStatus.init();
                $('#confirmDialogComplete').modal('hide');
            });

            // Confirm buttons dialog 'Complete': call updateButtonStatus.init()
            $('#btnConfirmPause').on('click', function () {
                buttonsController.updateButtonStatus.init();
                $('#confirmDialogPause').modal('hide');
            });

            // Confirm buttons dialog 'Complete': call updateButtonStatus.init()
            $('#btnConfirmError').on('click', function () {
                buttonsController.updateButtonStatus.init();
                $('#confirmDialogError').modal('hide');
            });
        },
        errorReportMain: function () { // #### Operation-overview - Error report ###
            // click on error report: category => display sub-categories
            $('.oErrorCategories').on('click', function () {

                var selectedCategoryId = $(this).attr('id');
                $('#oSelectSubCat').text(LD('selectSubCategory'));
                $('#oSelectCat').attr('data-oSelectCat', selectedCategoryId);
                $('#oSelectSubCat').attr('data-oSelectSubCat', "");

                var selectedCategoryText = $(this).text();

                // on category click sub-category is deselected and 'Receiver number' disabled
                oSubCategory = false;
                $('#oBtnErrorSendMessasge').attr('disabled', 'true');
                $('#oBtnErrorSendMessasge').attr('title', LD('selectCatSubCatRecType'));
                $('#oReceiverNumber').val('');
                $('#oReceiverNumber').attr('disabled', 'true');

                $('#oSelectCat').text(selectedCategoryText);

                // get sub-categories
                $.ajax({
                    type: "GET",
                    url: "/go/getSubCategories/" + selectedCategoryId,
                    success: function (data) {

                        var links = data;

                        var aLinks = '';

                        // display sub-categories in drop-down inside error modal dialog
                        $.each(links, function (idx, link) {
                            aLinks += (' <a id=' + link.id + ' data-oReceiver_no=' + link.receiver_no + ' class="oSubErrorCategories dropdown-item" href="#">' + link.title_text + '</a>');
                        });

                        $(".oSubCategoriesLinks").html(aLinks);

                    },
                    error: function (xhr, status, error) {
                        alert("Status: " + status + " - Error: " + error);
                    }
                });
            });
            // click on error report: sub-category
            $('.oSubCategoriesLinks').on('click', 'a', function () {

                var selectedSubCategoryId = $(this).attr('id');
                $('#oSelectSubCat').attr('data-oSelectSubCat', selectedSubCategoryId)
                var selectedSubCategoryText = $(this).text();

                var oReceiverNumberData = $(this).attr('data-oReceiver_no');

                if (oReceiverNumberData == 'null') // if null enable new entry
                {
                    $('#oReceiverNumber').val('');
                    $('#oReceiverNumber').removeAttr('disabled'); // enable text fields
                    oReceiverNumberRequired = false;
                } else
                {
                    $('#oReceiverNumber').val(oReceiverNumberData);
                    $('#oReceiverNumber').attr('disabled', 'true');
                    oReceiverNumberRequired = true;
                }

                if (selectedSubCategoryId > 0)
                {
                    oSubCategory = true;
                    buttonsController.oUpdateSendButton();
                }

                $('#oSelectSubCat').text(selectedSubCategoryText);

            });

            // click on select-option-button 'Receiver Number Type' in 'Error report'
            $('.oTypesLinks').on('click', 'a', function () {

                var selectedTypeId = $(this).attr('id');
                $('#oReceiverNumberType').attr('data-oSelectType', selectedTypeId)
                var selectedTypeText = $(this).text();
                $('#oReceiverNumberType').text(selectedTypeText);

                oReceiverType = true;

                // if selected option 'Receiver Number Type' is 'Customer Order'
                if (selectedTypeId === 'CUSTOMER_ORDER')
                {
                    $('#oReceiverNumberPosition').removeAttr('disabled'); // enable text fields
                    $('#oReceiverNumberPosition').val('');
                    oCustomerOrder = false;
                } else
                {
                    $('#oReceiverNumberPosition').val('');
                    $('#oReceiverNumberPosition').attr('disabled', 'true');
                    oCustomerOrder = true;
                }

                buttonsController.oUpdateSendButton();

            });

            // on key up for input field 'Receiver Number' - validation
            $('#oReceiverNumber').on('keyup', function () {

                oReceiverNumberRequired = isPositiveInteger($(this).val()) ? true : false;

                buttonsController.oUpdateSendButton();

            });

            // on key up for input field 'Receiver Number Position' - validation
            $('#oReceiverNumberPosition').on('keyup', function () {

                oCustomerOrder = isPositiveInteger($(this).val()) ? true : false;

                buttonsController.oUpdateSendButton();

            });

            // click on error report: Failure source
            $('.oFailureSourceLinks').on('click', 'a', function () {

                var failureSourceId = $(this).attr('id');
                $('#oFailureSource').attr('data-oFailureSource', failureSourceId)
                var failureSourceText = $(this).text();
                $('#oFailureSource').text(failureSourceText);

                oFailureSource = true;
                buttonsController.oUpdateSendButton();
            });

            // click on button 'Send message' in error report
            $('#oBtnErrorSendMessasge').on('click', function () {

                // set client date-time
                var startDateArray = $('div#oStartDate input[name=_submit]').val().split('-');
                var dateTimeStart = new Date(startDateArray[0], --startDateArray[1], startDateArray[2]);
                var startTime = $('#oStartTimeInput').val();
                var startHours = +startTime.split(':')[0];
                var startMinutes = +startTime.split(':')[1];
                dateTimeStart.setSeconds(0);
                dateTimeStart.setMinutes(startMinutes);
                dateTimeStart.setHours(startHours);
                var endDateArray = $('div#oEndDate input[name=_submit]').val().split('-');
                var dateTimeEnd = new Date(endDateArray[0], --endDateArray[1], endDateArray[2]);
                var endTime = $('#oEstimatedEndTimeInput').val();
                var endHours = +endTime.split(':')[0];
                var endMinutes = +endTime.split(':')[1];
                dateTimeEnd.setSeconds(0);
                dateTimeEnd.setMinutes(endMinutes);
                dateTimeEnd.setHours(endHours);

                // set client time zone
                // time-zone offset is the difference, in minutes, between UTC and local time
                // var offsetClientTimeZone = new Date().getTimezoneOffset();

                // sending params
                var categoryId = $('#oSelectCat').attr('data-oSelectCat');
                var subCategoryId = $('#oSelectSubCat').attr('data-oSelectSubCat');
                var message = $('#oMessageErrorReport').val();
                var receiverType = $('#oReceiverNumberType').attr('data-oSelectType');
                var receiverNumber = $('#oReceiverNumber').val();
                var receiverNumberPosition = $('#oReceiverNumberPosition').val();
                var failureSource = $('#oFailureSource').attr('data-oFailureSource');

                var errorReportData = {
                    '_token': $('meta[name="csrf-token"]').attr('content'),
                    categoryId: categoryId,
                    subCategoryId: subCategoryId,
                    message: message,
                    dateTimeStart: dateTimeStart.toISOString().slice(0, 19).replace('T', ' '), // Convert JS date time to MySQL datetime in UTC
                    dateTimeEnd: dateTimeEnd.toISOString().slice(0, 19).replace('T', ' '),
                    workingStepId: selectedWorkingStepId,
                    receiverType: receiverType,
                    receiverNumber: receiverNumber,
                    receiverNumberPosition: receiverNumberPosition,
                    failureSource: failureSource,
                    previousStatusId: previousStatusId
                };

                // send message
                $.ajax({
                    type: "POST",
                    url: "/go/sendErrorReport",
                    data: errorReportData,
                    success: function (saveSuccess) {

                        if (!saveSuccess)
                        {
                            alert('Fail to save record'); // TODO
                            return;
                        }

                        buttonsController.updateButtonStatus.init();

                        // close bootstrap modal
                        $('#oErrorModal').modal('hide');
                    },
                    error: function (xhr, status, error) {
                        console.log("Status: " + status + " - Error: " + error);
                    }
                });

            });
        },
        errorReportSub: function () {// #### Parallel-sequence - Error report ###
            // click on error report: category => display sub-categories
            $('.pErrorCategories').on('click', function () {

                var selectedCategoryId = $(this).attr('id');
                $('#pSelectSubCat').text(LD('selectSubCategory'));
                $('#pSelectCat').attr('data-pSelectCat', selectedCategoryId);
                $('#pSelectSubCat').attr('data-pSelectSubCat', "");

                var selectedCategoryText = $(this).text();

                $('#pSelectCat').text(selectedCategoryText);

                // on category click sub-category is deselected
                pSubCategory = false;
                $('#pBtnErrorSendMessasge').attr('disabled', 'true');
                $('#pBtnErrorSendMessasge').attr('title', LD('selectCatSubCatRecType'));
                $('#pReceiverNumber').val('');
                $('#pReceiverNumber').attr('disabled', 'true');

                // get sub-categories
                $.ajax({
                    type: "GET",
                    url: "/go/getSubCategories/" + selectedCategoryId,
                    success: function (data) {

                        var links = data;

                        var aLinks = '';

                        // display sub-categories in drop-down inside error modal dialog
                        $.each(links, function (idx, link) {
                            aLinks += (' <a id=' + link.id + ' data-pReceiver_no=' + link.receiver_no + ' class="pSubErrorCategories dropdown-item" href="#">' + link.title_text + '</a>');
                        });

                        $(".pSubCategoriesLinks").html(aLinks);

                    },
                    error: function (xhr, status, error) {
                        console.log("Status: " + status + " - Error: " + error);
                    }
                });
            });

            // click on error report: sub-category
            $('.pSubCategoriesLinks').on('click', 'a', function () {

                var selectedSubCategoryId = $(this).attr('id');
                $('#pSelectSubCat').attr('data-pSelectSubCat', selectedSubCategoryId)
                var selectedSubCategoryText = $(this).text();

                var pReceiverNumberData = $(this).attr('data-pReceiver_no');

                pReceiverNumber = false;

                if (pReceiverNumberData == 'null') // if null enable new entry
                {
                    $('#pReceiverNumber').val('');
                    $('#pReceiverNumber').removeAttr('disabled'); // enable text fields
                    pReceiverNumberRequired = false;
                } else
                {
                    $('#pReceiverNumber').val(pReceiverNumberData);
                    $('#pReceiverNumber').attr('disabled', 'true');
                    pReceiverNumberRequired = true;
                }

                if (selectedSubCategoryId > 0)
                {
                    pSubCategory = true;
                    buttonsController.pUpdateSendButton();
                }

                $('#pSelectSubCat').text(selectedSubCategoryText);

            });

            // click on select-option-button 'Receiver Number Type' in 'Error report'
            $('.pTypesLinks').on('click', 'a', function () {

                var selectedTypeId = $(this).attr('id');
                $('#pReceiverNumberType').attr('data-pSelectType', selectedTypeId)
                var selectedTypeText = $(this).text();
                $('#pReceiverNumberType').text(selectedTypeText);

                pReceiverType = true;

                // if selected option 'Receiver Number Type' is 'Customer Order'
                if (selectedTypeId === 'CUSTOMER_ORDER')
                {
                    $('#pReceiverNumberPosition').removeAttr('disabled'); // enable text fields 
                    $('#pReceiverNumberPosition').val('');
                    pCustomerOrder = false;
                } else
                {
                    $('#pReceiverNumberPosition').val('');
                    $('#pReceiverNumberPosition').attr('disabled', 'true');
                    pCustomerOrder = true;
                }

                buttonsController.pUpdateSendButton();

            });

            // on key up for input field 'Receiver Number' - validation
            $('#pReceiverNumber').on('keyup', function () {

                pReceiverNumberRequired = isPositiveInteger($(this).val()) ? true : false;

                buttonsController.pUpdateSendButton();

            });

            // on key up for input field 'Receiver Number Position' - validation
            $('#pReceiverNumberPosition').on('keyup', function () {

                pCustomerOrder = isPositiveInteger($(this).val()) ? true : false;

                buttonsController.pUpdateSendButton();

            });

            // click on error report: Failure source
            $('.pFailureSourceLinks').on('click', 'a', function () {

                var failureSourceId = $(this).attr('id');
                $('#pFailureSource').attr('data-pFailureSource', failureSourceId)
                var failureSourceText = $(this).text();
                $('#pFailureSource').text(failureSourceText);

                pFailureSource = true;
                buttonsController.pUpdateSendButton();

            });
            // click on button 'Send message' in error report
            $('#pBtnErrorSendMessasge').on('click', function () {

                // set client date-time
                var startDateArray = $('div#pStartDate input[name=_submit]').val().split('-');
                var dateTimeStart = new Date(startDateArray[0], --startDateArray[1], startDateArray[2]);
                var startTime = $('#pStartTimeInput').val();
                var startHours = +startTime.split(':')[0];
                var startMinutes = +startTime.split(':')[1];
                dateTimeStart.setSeconds(0);
                dateTimeStart.setMinutes(startMinutes);
                dateTimeStart.setHours(startHours);
                var endDateArray = $('div#pEndDate input[name=_submit]').val().split('-');
                var dateTimeEnd = new Date(endDateArray[0], --endDateArray[1], endDateArray[2]);
                var endTime = $('#pEstimatedEndTimeInput').val();
                var endHours = +endTime.split(':')[0];
                var endMinutes = +endTime.split(':')[1];
                dateTimeEnd.setSeconds(0);
                dateTimeEnd.setMinutes(endMinutes);
                dateTimeEnd.setHours(endHours);

                // sending params
                var categoryId = $('#pSelectCat').attr('data-pSelectCat');
                var subCategoryId = $('#pSelectSubCat').attr('data-pSelectSubCat');
                var message = $('#pMessageErrorReport').val();
                var receiverType = $('#pReceiverNumberType').attr('data-pSelectType');
                var receiverNumber = $('#pReceiverNumber').val();
                var receiverNumberPosition = $('#pReceiverNumberPosition').val();
                var failureSource = $('#pFailureSource').attr('data-pFailureSource');

                var errorReportData = {'_token': $('meta[name="csrf-token"]').attr('content'),
                    categoryId: categoryId,
                    subCategoryId: subCategoryId,
                    message: message,
                    dateTimeStart: dateTimeStart.toISOString().slice(0, 19).replace('T', ' '), // Convert JS date time to MySQL datetime in UTC
                    dateTimeEnd: dateTimeEnd.toISOString().slice(0, 19).replace('T', ' '),
                    workingStepId: selectedWorkingStepId,
                    receiverType: receiverType,
                    receiverNumber: receiverNumber,
                    receiverNumberPosition: receiverNumberPosition,
                    failureSource: failureSource,
                    previousStatusId: previousStatusId
                };

                // send message
                $.ajax({
                    type: "POST",
                    url: "/go/sendErrorReport",
                    data: errorReportData,
                    success: function (saveSuccess) {

                        if (!saveSuccess)
                        {
                            alert('Fail to save record'); // TODO
                            return;
                        }

                        buttonsController.updateButtonStatus.init();

                        // close bootstrap modal
                        $('#pErrorModal').modal('hide');
                    },
                    error: function (xhr, status, error) {
                        console.log("Status: " + status + " - Error: " + error);
                    }
                });

            });
        },
        pauseReportMain: function () {// #### Operation-overview - Pause report ###
            // click on error report: category => display sub-categories
            $('.oPauseCategories').on('click', function () {

                var selectedCategoryId = $(this).attr('id');
                $('#oPauseSelectSubCat').text(LD('selectSubCategory'));
                $('#oPauseSelectCat').attr('data-oPauseSelectCat', selectedCategoryId);
                $('#oPauseSelectSubCat').attr('data-oPauseSelectSubCat', "");

                var selectedCategoryText = $(this).text();

                // on category click sub-category is deselected
                oPauseSubCategory = false;
                $('#oBtnPauseSendMessasge').attr('disabled', 'true');
                $('#oBtnPauseSendMessasge').attr('title', LD('selectCatSubCat'));

                $('#oPauseSelectCat').text(selectedCategoryText);

                // get sub-categories
                $.ajax({
                    type: "GET",
                    url: "/go/getSubCategories/" + selectedCategoryId,
                    success: function (data) {

                        var links = data;

                        var aLinks = '';

                        // display sub-categories in drop-down inside pause modal dialog
                        $.each(links, function (idx, link) {
                            aLinks += (' <a id=' + link.id + ' class="oSubPauseCategories dropdown-item" href="#">' + link.title_text + '</a>');
                        });

                        $(".oPauseSubCategoriesLinks").html(aLinks);

                    },
                    error: function (xhr, status, error) {
                        alert("Status: " + status + " - Error: " + error);
                    }
                });
            });

            // click on error report: sub-category
            $('.oPauseSubCategoriesLinks').on('click', 'a', function () {

                var selectedSubCategoryId = $(this).attr('id');
                $('#oPauseSelectSubCat').attr('data-oPauseSelectSubCat', selectedSubCategoryId)
                var selectedSubCategoryText = $(this).text();

                if (selectedSubCategoryId > 0)
                {
                    oPauseSubCategory = true;
                    buttonsController.oPauseUpdateSendButton();
                }

                $('#oPauseSelectSubCat').text(selectedSubCategoryText);

            });

            // click on button 'Send message' in pause report
            $('#oBtnPauseSendMessasge, #oBtnPauseConfirm').on('click', function () {

                var sendReportStatus = $(this).attr('id') === 'oBtnPauseSendMessasge' ? 1 : 0;

                var dateTimeStart = '';
                var dateTimeEnd = '';
                var categoryId = '';
                var subCategoryId = '';

                var message = $('#oMessagePauseReport').val();

                if (sendReportStatus === 1) // if 'Send report' is clicked
                {
                    categoryId = $('#oPauseSelectCat').attr('data-oPauseSelectCat');
                    subCategoryId = $('#oPauseSelectSubCat').attr('data-oPauseSelectSubCat');

                    // set client date-time
                    var startDateArray = $('div#oPauseStartDate input[name=_submit]').val().split('-');
                    dateTimeStart = new Date(startDateArray[0], --startDateArray[1], startDateArray[2]);
                    var startTime = $('#oPauseStartTimeInput').val();
                    var startHours = +startTime.split(':')[0];
                    var startMinutes = +startTime.split(':')[1];
                    dateTimeStart.setSeconds(0);
                    dateTimeStart.setMinutes(startMinutes);
                    dateTimeStart.setHours(startHours);
                    dateTimeStart = dateTimeStart.toISOString().slice(0, 19).replace('T', ' '); // Convert JS date time to MySQL datetime in UTC

                    var endDateArray = $('div#oPauseEndDate input[name=_submit]').val().split('-');
                    dateTimeEnd = new Date(endDateArray[0], --endDateArray[1], endDateArray[2]);
                    var endTime = $('#oPauseEstimatedEndTimeInput').val();
                    var endHours = +endTime.split(':')[0];
                    var endMinutes = +endTime.split(':')[1];
                    dateTimeEnd.setSeconds(0);
                    dateTimeEnd.setMinutes(endMinutes);
                    dateTimeEnd.setHours(endHours);
                    dateTimeEnd = dateTimeEnd.toISOString().slice(0, 19).replace('T', ' ');
                }

                var pauseReportData = {
                    '_token': $('meta[name="csrf-token"]').attr('content'),
                    sendReportStatus: sendReportStatus,
                    categoryId: categoryId,
                    subCategoryId: subCategoryId,
                    message: message,
                    dateTimeStart: dateTimeStart,
                    dateTimeEnd: dateTimeEnd,
                    workingStepId: selectedWorkingStepId,
                    previousStatusId: this.previousStatusId
                };

                // send message
                $.ajax({
                    type: "POST",
                    url: "/go/sendPauseReport",
                    data: pauseReportData,
                    success: function (saveSuccess) {

                        if (!saveSuccess)
                        {
                            alert('Fail to save record'); // TODO
                            return;
                        }

                        buttonsController.updateButtonStatus.init();

                        // close bootstrap modal
                        $('#oPauseModal').modal('hide');
                    },
                    error: function (xhr, status, error) {
                        console.log("Status: " + status + " - Error: " + error);
                    }
                });

            });
        },
        pauseReportSub: function () {
            // #### Parallel-sequence - Pause report ###

            // click on error report: category => display sub-categories
            $('.pPauseCategories').on('click', function () {

                var selectedCategoryId = $(this).attr('id');
                $('#pPauseSelectSubCat').text(LD('selectSubCategory'));
                $('#pPauseSelectCat').attr('data-pPauseSelectCat', selectedCategoryId);
                $('#pPauseSelectSubCat').attr('data-pPauseSelectSubCat', "");

                var selectedCategoryText = $(this).text();

                // on category click sub-category is deselected
                oPauseSubCategory = false;
                $('#pBtnPauseSendMessasge').attr('disabled', 'true');
                $('#pBtnPauseSendMessasge').attr('title', LD('selectCatSubCat'));

                $('#pPauseSelectCat').text(selectedCategoryText);

                // get sub-categories
                $.ajax({
                    type: "GET",
                    url: "/go/getSubCategories/" + selectedCategoryId,
                    success: function (data) {

                        var links = data;

                        var aLinks = '';

                        // display sub-categories in drop-down inside pause modal dialog
                        $.each(links, function (idx, link) {
                            aLinks += (' <a id=' + link.id + ' class="pSubPauseCategories dropdown-item" href="#">' + link.title_text + '</a>');
                        });

                        $(".pPauseSubCategoriesLinks").html(aLinks);

                    },
                    error: function (xhr, status, error) {
                        alert("Status: " + status + " - Error: " + error);
                    }
                });
            });

            // click on error report: sub-category
            $('.pPauseSubCategoriesLinks').on('click', 'a', function () {

                var selectedSubCategoryId = $(this).attr('id');
                $('#pPauseSelectSubCat').attr('data-pPauseSelectSubCat', selectedSubCategoryId)
                var selectedSubCategoryText = $(this).text();

                if (selectedSubCategoryId > 0)
                {
                    pPauseSubCategory = true;
                    buttonsController.pPauseUpdateSendButton();
                }

                $('#pPauseSelectSubCat').text(selectedSubCategoryText);

            });

            // click on button 'Send message' in pause report
            $('#pBtnPauseSendMessasge, #pBtnPauseConfirm').on('click', function () {

                var sendReportStatus = $(this).attr('id') === 'pBtnPauseSendMessasge' ? 1 : 0;

                var dateTimeStart = '';
                var dateTimeEnd = '';
                var categoryId = '';
                var subCategoryId = '';

                var message = $('#pMessagePauseReport').val();

                if (sendReportStatus === 1) // if 'Send report' is clicked
                {
                    categoryId = $('#pPauseSelectCat').attr('data-pPauseSelectCat');
                    subCategoryId = $('#pPauseSelectSubCat').attr('data-pPauseSelectSubCat');

                    // set client date-time
                    var startDateArray = $('div#pPauseStartDate input[name=_submit]').val().split('-');
                    dateTimeStart = new Date(startDateArray[0], --startDateArray[1], startDateArray[2]);
                    var startTime = $('#pPauseStartTimeInput').val();
                    var startHours = +startTime.split(':')[0];
                    var startMinutes = +startTime.split(':')[1];
                    dateTimeStart.setSeconds(0);
                    dateTimeStart.setMinutes(startMinutes);
                    dateTimeStart.setHours(startHours);
                    dateTimeStart = dateTimeStart.toISOString().slice(0, 19).replace('T', ' '); // Convert JS date time to MySQL datetime in UTC

                    var endDateArray = $('div#pPauseEndDate input[name=_submit]').val().split('-');
                    dateTimeEnd = new Date(endDateArray[0], --endDateArray[1], endDateArray[2]);
                    var endTime = $('#pPauseEstimatedEndTimeInput').val();
                    var endHours = +endTime.split(':')[0];
                    var endMinutes = +endTime.split(':')[1];
                    dateTimeEnd.setSeconds(0);
                    dateTimeEnd.setMinutes(endMinutes);
                    dateTimeEnd.setHours(endHours);
                    dateTimeEnd = dateTimeEnd.toISOString().slice(0, 19).replace('T', ' ');
                }

                // sending params
                var pauseReportData = {
                    '_token': $('meta[name="csrf-token"]').attr('content'),
                    sendReportStatus: sendReportStatus,
                    categoryId: categoryId,
                    subCategoryId: subCategoryId,
                    message: message,
                    dateTimeStart: dateTimeStart,
                    dateTimeEnd: dateTimeEnd,
                    workingStepId: selectedWorkingStepId,
                    previousStatusId: previousStatusId
                };

                // send message
                $.ajax({
                    type: "POST",
                    url: "/go/sendPauseReport",
                    data: pauseReportData,
                    success: function (saveSuccess) {

                        if (!saveSuccess)
                        {
                            alert('Fail to save record'); // TODO
                            return;
                        }

                        buttonsController.updateButtonStatus.init();

                        // close bootstrap modal
                        $('#pPauseModal').modal('hide');
                    },
                    error: function (xhr, status, error) {
                        console.log("Status: " + status + " - Error: " + error);
                    }
                });

            });
        }
    },

    init: function () {
        buttonsController.events.base();
        buttonsController.events.errorReportMain();
        buttonsController.events.errorReportSub();
        buttonsController.events.pauseReportMain();
        buttonsController.events.pauseReportSub();
    }
}

buttonsController.init();