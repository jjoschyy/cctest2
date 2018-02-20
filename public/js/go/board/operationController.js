/*
 * Implement ajax requests for board page - operation overview.
 *
 */


operationController = {
    init: function () {
        navbarAlternate.init($('#rightMenu'));
        $(window).resize(function () {
            operationController.resizeElements();
        });
        $("#collapseOne").on("click",function(){
            $(this).removeClass("show");
        });
        $('.navSteps').on('click', function () {
            sequence = $(this).closest('table[id^="workingStepOperation_"]').attr('ref');
            navbarAlternate.setActiv($("#rightMenu a:first"));
            selectedWorkingStepId = $(this).attr('ref');

            // get JSON for overview-right in the operation-overview tab from app/http/Controllers/OperationController.php
            // JSON contains data for check list and list of components
            $.ajax({
                type: "GET",
                url: "/go/operationOverviewRight/" + selectedWorkingStepId,
                success: function (data) {
                    $("#rightMenuStart").hide(0);
                    $("#rightMenu").show(0);
                    $('.workingStepsOperations td').removeClass('activeStep');
                    $('#ws_' + selectedWorkingStepId).addClass('activeStep');

                    // default - disable all operation butttons
                    $('.operationButtons.mainButtons button').attr("disabled", true);

                    // default - set button 'Start' as default 'Start'
                    $('#wsStartedBtn').html('<i class="fa fa-play" aria-hidden="true"></i>' + LD('start'));

                    // disable checklist
                    $("#checkList").addClass("checkListDisabled");
                    operationController.changeBtnStatus(data.workingStepStatus);
                    operationController.appendCheckList(data.checklist);
                    operationController.renderComponents(data.components);
                },
                error: function (xhr, status, error) {
                    console.log("Status: " + status + " - Error: " + error);
                }
            });
        });
    },
    resizeElements: function () {
        $('#workingSteps').parent().height($(window).height() - 273);
        $('.sub_sub_nav_resizeme').height($(window).height() - 273);
    },
    /**
     * Render Checklist
     * @param {obj} data WorkingStep data
     * @returns {undefined}
     */
    appendCheckList: function (data) {
        console.log(JSON.stringify(data));
        $('#checklist-target' + sequence).empty();
        $('#checklist-target' + sequence).append(data);
    },
    /**
     * Render Components from Workingstep
     * @param {Array} components List of Components
     * @returns {undefined}
     */
    renderComponents: function (components) {
        if (components[0] !== null) {
            var tableRows = '';

            // display components on the board page in the operation-overview tab => in the sub-tab 'Component Overview'
            $.each(components, function (idx, component) {
                tableRows += ('<tr>');
                tableRows += ('<td>' + component.requiredQuantity + ' ' + component.requiredQuantityUnit + '</td>');
                tableRows += ('<td> ' + component.material + '</td>');
                tableRows += ('<td> ' + component.contentData + '</td>');
                tableRows += ('<td class="buttonsMissingPart">');
                if (+component.productListStatusId === 3) {
                    tableRows += ('<button id="o_' + component.productMaterialId + '_' + component.productWorkingstepId + '"'
                            + ' disabled type="button" class="btn btn-md btn-success">' + LD('completed') + '</button>');
                } else if (+component.missing === 0) {
                    tableRows += ('<button id="o_' + component.productMaterialId + '_' + component.productWorkingstepId + '"'
                            + 'type="button" class="btn btn-md btnMissingPart btn-primary reportMissingPart">' + LD('repMissingPart') + '</button>');
                } else {
                    tableRows += ('<button id="o_' + component.productMaterialId + '_' + component.productWorkingstepId + '"'
                            + 'type="button" class="btn btn-md btnMissingPart btn-info reportedMissingPart">' + LD('missingPartReported') + '</button>');
                }
                tableRows += ('</td>');
                tableRows += ('</tr>');
            });
            $("#tableContainer > tbody:last").html(tableRows);
            // show components overview for working step if it contains components
            $("#wsItemsLink").show(0);
        } else {
            // hide components overview for working step if it does not contain components
            $("#wsItemsLink").hide(0);
        }
    },
    /**
     * Change the Status (activ/inactiv) from the buttons
     * @param {int} workingStepStatus
     * @returns {undefined}
     */
    changeBtnStatus: function (workingStepStatus) {
        console.log(workingStepStatus);
        switch (workingStepStatus) {
            case 1: // status is planed
                $('#wsStartedBtn').removeAttr('disabled');
                break;
            case 2: // status is production
                $('#wsBreakBtn').removeAttr('disabled');
                // enable checklist
                $("#checkList").removeClass("checkListDisabled");
                break;
            case 4: // status is error
            case 5: // or status is pause
                $('#wsStartedBtn').removeAttr('disabled');
                // set button 'Start' as 'Continue'
                $('#wsStartedBtn').html('<i class="fa fa-repeat" aria-hidden="true"></i>' + LD('continue'));
                break;
            case 20: // status is complete
                $('#wsBreakBtn, #wsConfirmedBtn').removeAttr('disabled');
                // enable checklist
                $("#checkList").removeClass("checkListDisabled");
                break;
            case 3: // status is finished                            
            default:
                $('.mainButtons button').attr("disabled", true);
        }
    }
}

operationController.init();
