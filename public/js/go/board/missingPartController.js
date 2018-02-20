// #### Report missing part => operation-overview, parallel-sequence and component-overview ###
missingPartController = {
    activLang: "",
    selectedBtnId: 0,
    buttonTypeReportMissing: "",
    onlyReceivedMissingPartCategoriesDateTime: "",
    onlyReceivedMissingPartSendBtn: "",
    selectedCategoryId: 0,
    previousStatusId: "",
    missingPartsRemain: -1,
    init: function () {
        missingPartController.activLang = $("html").attr("lang");
        // for operation-overview and parallel-sequence buttons are dynamically created (after bootstrap has bind all its event)
        $('body').on('click', '.btnMissingPart', function () {
            missingPartController.onClickMissingPartBtn($(this));
        });
        // click on 'Received missing part' report: category 
        $('.cErrorCategories').on('click', function () {
            missingPartController.onClickReceivedMissingPartBtn($(this));
        });
        // click on button 'Confirm' or 'Send report' for 'Report missing part'/'Missing part received'
        $('#cBtnMissingPartConfirm, #cBtnMissingPartSendMessasge').on('click', function () {
            missingPartController.onClickConfirmOrSendReportBtn($(this));
        });
        //  set tick or cross on bootstrap 4 check-box button 
        $('#btnMissingProductionStatus').on('click', function () {
            missingPartController.onClickTickOrCrossOnCheckbox($(this));
        });
        // Zkm components - 'Report missing part' buttons - clicks
        $('body').on('click', '.btnZkmMissingPart', function () {
            missingPartController.onClickZkmComponentsBtn($(this));
        });
    },
    onClickMissingPartBtn: function ($this) {

        // store missingPartController.selectedBtnId in 'class' variable
        missingPartController.selectedBtnId = $this.attr('id');
        // check working step status
        var productWorkingstepId = +missingPartController.selectedBtnId.split("_")[2];
        missingPartController.missingPartsRemain = +$(".buttonsMissingPart button[id$=_" + productWorkingstepId + "].reportedMissingPart").length / 2;
        var statusId = +$('#' + productWorkingstepId + ' > div > span').attr('data-statusId');
        if (statusId !== 2 && statusId !== 6) {  // Missing parts can only be reported if operation status is "Production" or "Missing part"
            // open bootstrap info modal
            $('#infoDialogMissingReportBlocked').modal('show');
            return;
        }
        // 'class' variable buttonTypeReportMissing: check state of button
        missingPartController.buttonTypeReportMissing = $this.hasClass('reportMissingPart'); // TRUE => btn-type = 'Report missing part' / FALSE btn-type = 'Missing part reported'

        if (missingPartController.buttonTypeReportMissing) { // Report missing part
            $('#btnMissingProductionStatus').text(LD('repMissingPart'));
            $('#missingPartModalLabel').text(LD('repMissingPart'));
            if ($('#onlyReceivedMissingPart').length) {
                missingPartController.onlyReceivedMissingPartCategoriesDateTime = $('#onlyReceivedMissingPart').detach(); // detach part which adds categories and date-time
            }
            if ($('#cBtnMissingPartSendMessasge').length) {
                missingPartController.onlyReceivedMissingPartSendBtn = $('#cBtnMissingPartSendMessasge').detach(); // detach send button
            }
            if (statusId === 6) { // if status is 'Missing part' disable check-box
                $('#btnMissingProductionStatus').attr('disabled', 'true');
            } else {
                $('#btnMissingProductionStatus').removeAttr('disabled');
            }
        } else {// Missing part reported (button) / Received missing part (modal title)
            if (!$('#onlyReceivedMissingPart').length) {
                $('#onlyReceivedMissingPartContainer').append(missingPartController.onlyReceivedMissingPartCategoriesDateTime);
                $('#cBtnMissingPartSendMessasgeContainer').append(missingPartController.onlyReceivedMissingPartSendBtn);
            }
            $('#btnMissingProductionStatus').text(LD('statusToProduction'));
            $('#missingPartModalLabel').text(LD('receivedMissingPart'));
            // set local start and end dateTime 
            setLocalDateTime('', 'missing');
            if (statusId === 2) { // if status is 'Production' disable check-box and 'Send report' button
                $('#btnMissingProductionStatus').attr('disabled', 'true');
                $('#cBtnMissingPartSendMessasge').attr('disabled', 'true');
                $('#cBtnMissingPartSendMessasge').attr('title', LD('selectCategory'));
            } else {
                if (missingPartController.missingPartsRemain === 1) {
                    $('#btnMissingProductionStatus').attr('disabled', 'true');
                } else {
                    $('#btnMissingProductionStatus').removeAttr('disabled');
                }
            }
        }

        // set font-awesome icon on bootstrap button
        var newStatus = "";
        if (missingPartController.activLang == "de") {
            newStatus = missingPartController.buttonTypeReportMissing ? 'Fehlteil setzen' : 'Produktion setzen';
        } else {
            newStatus = missingPartController.buttonTypeReportMissing ? 'missing' : 'production';
        }

        if (missingPartController.missingPartsRemain === 1 && !missingPartController.buttonTypeReportMissing && statusId === 6) {  // last missing part removed => must change to production
            $('#btnMissingProductionStatus').html('<i class="fa fa-check" aria-hidden="true"></i>' + LD('statusTo') + newStatus);
            if (!$('#onlyReceivedMissingPart').length && !missingPartController.buttonTypeReportMissing) {
                $('#onlyReceivedMissingPartContainer').append(missingPartController.onlyReceivedMissingPartCategoriesDateTime);
            }
            $('#btnMissingProductionStatus').attr('disabled', 'true');
        } else {
            var statusError = $('#btnMissingProductionStatus').attr('aria-pressed');
            if (statusError === "true" && ((!missingPartController.buttonTypeReportMissing && statusId !== 2) || (missingPartController.buttonTypeReportMissing && statusId !== 6))) { // disable also to set same status ('Production' or 'Missing part') again
                $('#btnMissingProductionStatus').html('<i class="fa fa-check" aria-hidden="true"></i>' + LD('statusTo') + newStatus);
                if (!$('#onlyReceivedMissingPart').length && !missingPartController.buttonTypeReportMissing) {
                    $('#onlyReceivedMissingPartContainer').append(missingPartController.onlyReceivedMissingPartCategoriesDateTime);
                }
            } else {
                $('#btnMissingProductionStatus').html('<i class="fa fa-times" aria-hidden="true"></i>' + LD('statusTo') + newStatus);
                if ($('#onlyReceivedMissingPart').length && !missingPartController.buttonTypeReportMissing) {
                    missingPartController.onlyReceivedMissingPartCategoriesDateTime = $('#onlyReceivedMissingPart').detach(); // detach part which adds categories and date-time
                }
            }
        }
        // trigger bootstrap modal
        $('#cMissingPart').modal('show');
    },
    onClickReceivedMissingPartBtn: function ($this) {
        missingPartController.selectedCategoryId = $this.attr('id');
        $('#cSelectCat').attr('data-cSelectCat', missingPartController.selectedCategoryId);
        var selectedCategoryText = $this.text();
        $('#cSelectCat').text(selectedCategoryText);
        if (missingPartController.selectedCategoryId > 0) {
            $('#cBtnMissingPartSendMessasge').removeAttr('disabled');
            $('#cBtnMissingPartSendMessasge').attr('title', LD('sendReport'));
        } else {
            $('#cBtnMissingPartSendMessasge').attr('disabled', 'true');
            $('#cBtnMissingPartSendMessasge').attr('title', LD('selectCategory'));
        }
    },
    onClickConfirmOrSendReportBtn: function ($this) {
        var sendReportStatus = $this.attr('id') === 'cBtnMissingPartSendMessasge' ? 1 : 0;
        var dateTimeStart = '';
        var dateTimeEnd = '';
        if (sendReportStatus === 1) { // if 'Send report' is clicked
            // set client date-time
            var startDateArray = $('div#missingStartDate input[name=_submit]').val().split('-');
            dateTimeStart = new Date(startDateArray[0], --startDateArray[1], startDateArray[2]);
            var startTime = $('#missingStartTimeInput').val();
            var startHours = +startTime.split(':')[0];
            var startMinutes = +startTime.split(':')[1];
            dateTimeStart.setSeconds(0);
            dateTimeStart.setMinutes(startMinutes);
            dateTimeStart.setHours(startHours);
            dateTimeStart = dateTimeStart.toISOString().slice(0, 19).replace('T', ' '); // Convert JS date time to MySQL datetime in UTC
            var endDateArray = $('div#missingEndDate input[name=_submit]').val().split('-');
            dateTimeEnd = new Date(endDateArray[0], --endDateArray[1], endDateArray[2]);
            var endTime = $('#missingEstimatedEndTimeInput').val();
            var endHours = +endTime.split(':')[0];
            var endMinutes = +endTime.split(':')[1];
            dateTimeEnd.setSeconds(0);
            dateTimeEnd.setMinutes(endMinutes);
            dateTimeEnd.setHours(endHours);
            dateTimeEnd = dateTimeEnd.toISOString().slice(0, 19).replace('T', ' ');
        }

        var workingStepStatus = -1;
        missingPartController.selectedCategoryId = $('#cSelectCat').length ? $('#cSelectCat').attr('data-cSelectCat') : -1; // -1 for 'Report missing part'
        var selectedMessage = $('#cMessageErrorReport').val();
        var prefix = missingPartController.selectedBtnId.split("_")[0];
        var productMaterialId = missingPartController.selectedBtnId.split("_")[1];
        var productWorkingstepId = missingPartController.selectedBtnId.split("_")[2];
        var suffixBtn = missingPartController.selectedBtnId.slice(1);
        // find previous status 
        missingPartController.previousStatusId = $('#' + productWorkingstepId + ' > div > span').attr('data-statusId');
        // check if selected working step belongs to parallel sequence
        var parallelSequence = $('#' + productWorkingstepId + ' > div > span').attr('data-parallelSequence');
        // check 'class' variable for the type of clicked button
        if (missingPartController.buttonTypeReportMissing) {
            var missingMaterial = 1;
            var missingText = 'Missing';
            var statusError = $('#btnMissingProductionStatus').attr('aria-pressed');
            if (statusError === "true") {
                workingStepStatus = 6;
            } else {
                workingStepStatus = -1; // no change in workingStepStatus
            }
        } else {
            var missingMaterial = 0;
            var missingText = 'Not missing';
            var statusProduction = $('#btnMissingProductionStatus').attr('aria-pressed');
            if (statusProduction === "true") {
                workingStepStatus = 2;
            } else {
                workingStepStatus = -1; // no change in workingStepStatus
            }
            if (missingPartController.missingPartsRemain === 1) // if the last missing item is received status is changed to production
                workingStepStatus = 2;
        }

        var missingReportData = {
            '_token': $('meta[name="csrf-token"]').attr('content'),
            categoryId: missingPartController.selectedCategoryId,
            message: selectedMessage,
            sendReportStatus: sendReportStatus,
            dateTimeStart: dateTimeStart,
            dateTimeEnd: dateTimeEnd,
            productWorkingstepId: productWorkingstepId,
            productMaterialId: productMaterialId,
            workingStepStatus: workingStepStatus,
            missingMaterial: missingMaterial,
            previousStatusId: missingPartController.previousStatusId
        };
        // send data to MissingPartController
        $.ajax({
            type: "POST",
            url: "/go/reportMissingPart",
            data: missingReportData,
            success: function (data) {
                var status = data.status;
                var borderColor = data.borderColor;
                var backgroundColor = data.backgroundColor;
                var statusId = +data.statusId;
                // on update success
                if (status.length > 0) {
                    if (status !== 'equal') {
                        // FOR DEBUGING
                        console.log('Updated status to:\n "' + status + '" for working step Id: ' + productWorkingstepId + '\n"' + missingText + '"' + ' for product material Id: ' + productMaterialId);
                        // update status for working step
                        $('#' + productWorkingstepId + ' > div > span').text(status);
                        $('#' + selectedWorkingStepId + ' > div > span').css({"border-bottom": "4px solid " + borderColor, "background-color": backgroundColor});
                        $('#' + productWorkingstepId + ' > div > span').attr('data-statusId', statusId);
                    } else {
                        // FOR DEBUGING
                        console.log('Updated status to: \n"' + missingText + '"' + ' for product material Id: ' + productMaterialId);
                    }
                    if (missingMaterial === 1) {
                        $('#o' + suffixBtn + ',' + '#p' + suffixBtn + ',' + '#c' + suffixBtn).text(LD('missingPartReported'));
                        $('#o' + suffixBtn + ',' + '#p' + suffixBtn + ',' + '#c' + suffixBtn).removeClass('btn-primary reportMissingPart');
                        $('#o' + suffixBtn + ',' + '#p' + suffixBtn + ',' + '#c' + suffixBtn).addClass('btn-info reportedMissingPart');
                    } else {
                        $('#o' + suffixBtn + ',' + '#p' + suffixBtn + ',' + '#c' + suffixBtn).text(LD('repMissingPart'));
                        $('#o' + suffixBtn + ',' + '#p' + suffixBtn + ',' + '#c' + suffixBtn).addClass('btn-primary reportMissingPart');
                        $('#o' + suffixBtn + ',' + '#p' + suffixBtn + ',' + '#c' + suffixBtn).removeClass('btn-info reportedMissingPart');
                    }

                    // disable all operation butttons
                    prefix = parallelSequence === "1" ? 'p' : 'o';
                    parallel = parallelSequence === "1" ? 'Parallel' : '';
                    if (statusId > 0)
                        $('#' + prefix + 'Started, ' + '#' + prefix + 'Paused, ' + '#' + prefix + 'Error, ' + '#' + prefix + 'Confirmed').attr("disabled", true);
                    // if new working step status is 'Missing part'
                    if (statusId === 6) {
                        // disable checklist
                        $("#checkList" + parallel).addClass("checkListDisabled");
                        // if clicked in tabs 'operation_overview' or 'parallel-sequence' change 'Start' button to 'Continue' and remove 'disabled' for 'Start' button
                        if (parallelSequence === "0") {
                            $('#oStarted').html('<i class="fa fa-repeat" aria-hidden="true"></i>' + LD('continue'));
                        }
                        if (parallelSequence === "1") {
                            $('#pStarted').html('<i class="fa fa-repeat" aria-hidden="true"></i>' + LD('continue'));
                        }
                    }

                    // if new working step status is 'Production'
                    if (statusId === 2) {
                        // enable checklist
                        $("#checkList" + parallel).removeClass("checkListDisabled");
                        // if clicked in tabs 'operation_overview' or 'parallel-sequence' change 'Continue' button to 'Start'
                        if (parallelSequence === "0") {
                            $('#oStarted').html('<i class="fa fa-play" aria-hidden="true"></i>' + LD('start'));
                            $('.operationButtons #oPaused, .operationButtons #oError').removeAttr('disabled');
                        }
                        if (parallelSequence === "1") {
                            $('#pStarted').html('<i class="fa fa-play" aria-hidden="true"></i> ' + LD('start'));
                            $('.operationButtons #pPaused, .operationButtons #pError').removeAttr('disabled');
                        }
                    }

                    // if new working step status is 'Complete'
                    if (statusId === 20) {
                        // enable checklist
                        $("#checkList" + parallel).removeClass("checkListDisabled");
                        // disable all operation butttons
                        $('#' + prefix + 'Started, ' + '#' + prefix + 'Paused, ' + '#' + prefix + 'Error, ' + '#' + prefix + 'Confirmed').attr("disabled", true);
                        // enable required
                        $('.operationButtons #' + prefix + 'Paused, .operationButtons #' + prefix + 'Error, .operationButtons #' + prefix + 'Confirmed').removeAttr('disabled');
                    }
                } else {
                    console.log('Updated failed for productMaterialId: ' + productMaterialId);
                }

                // close bootstrap modal
                $('#cMissingPart').modal('hide');
            },
            error: function (xhr, status, error) {
                console.log("Status: " + status + " - Error: " + error);
            }
        });
    },
    onClickTickOrCrossOnCheckbox: function ($this) {
        var newStatus = "";
        if (missingPartController.activLang === "de") {
            newStatus = missingPartController.buttonTypeReportMissing ? 'Fehlteil setzen' : 'Produktion setzen';
        } else {
            newStatus = missingPartController.buttonTypeReportMissing ? 'missing' : 'production';
        }
        var statusError = $this.attr('aria-pressed');
        if (statusError === "false") {
            $this.html('<i class="fa fa-check" aria-hidden="true"></i> ' + LD('statusTo') + newStatus);
            if (!$('#onlyReceivedMissingPart').length && !missingPartController.buttonTypeReportMissing) {
                $('#onlyReceivedMissingPartContainer').append(missingPartController.onlyReceivedMissingPartCategoriesDateTime);
            }
            if (missingPartController.selectedCategoryId > 0) {
                $('#cBtnMissingPartSendMessasge').removeAttr('disabled');
                $('#cBtnMissingPartSendMessasge').attr('title', LD('sendReport'));
            }
        } else {
            $this.html('<i class="fa fa-times" aria-hidden="true"></i> ' + LD('statusTo') + newStatus);
            if ($('#onlyReceivedMissingPart').length && !missingPartController.buttonTypeReportMissing) {
                missingPartController.onlyReceivedMissingPartCategoriesDateTime = $('#onlyReceivedMissingPart').detach(); // detach part which adds categories and date-time
            }
            $('#cBtnMissingPartSendMessasge').attr('disabled', 'true');
            $('#cBtnMissingPartSendMessasge').attr('title', LD('selectCategory'));
        }
    },
    onClickZkmComponentsBtn: function ($this) {
        var selectedBtnId = $this.attr('id');
        var customerOrderMaterialsId = selectedBtnId.split("_")[1];
        var productWorkingstepId = selectedBtnId.split("_")[2];
        var buttonTypeReportMissing = $this.hasClass('reportMissingPart'); // TRUE => btn-type = 'Report missing part' / FALSE btn-type = 'Missing part reported'
        var missingMaterial = buttonTypeReportMissing ? 1 : 0;
        var missingText = buttonTypeReportMissing ? 'Missing' : 'Not missing';
        $.ajax({
            type: "GET",
            url: "/go/reportZkmMissingPart/" + customerOrderMaterialsId + '/' + missingMaterial,
            success: function (status) {
                // on update success
                if (status.length > 0) {
                    // FOR DEBUGING
                    console.log('Updated status to: \n"' + missingText + '"' + ' for customer order material Id: ' + customerOrderMaterialsId);
                    // update status for zkm button
                    if (missingMaterial === 1) {
                        $('#' + selectedBtnId).text(LD('missingPartReported'));
                        $('#' + selectedBtnId).removeClass('btn-primary reportMissingPart');
                        $('#' + selectedBtnId).addClass('btn-info reportedMissingPart ');
                    } else {
                        $('#' + selectedBtnId).text(LD('repMissingPart'));
                        $('#' + selectedBtnId).removeClass('btn-info reportedMissingPart');
                        $('#' + selectedBtnId).addClass('btn-primary reportMissingPart');
                    }
                } else {
                    console.log('Updated failed for productMaterialId: ' + productMaterialId);
                }
            },
            error: function (xhr, status, error) {
                console.log("Status: " + status + " - Error: " + error);
            }
        });
    }
}
missingPartController.init();



