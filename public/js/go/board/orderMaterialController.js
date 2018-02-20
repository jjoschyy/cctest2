/*
 * Trigger event on click "Send" button from "Order material" modal window.
 * Collect params (area, priority, errorType and message) from "Order material" modal.
 * If all params are selected send ajax request to OrderMaterialController.php.
 * If params are not selected return modal info to user.
 * Order material modal is activated with buttons "ORDER MATERIAL" in Components and Components-ZKM view.
 *
 */

var orderMaterialController = {
    area: "",
    priority: "",
    errorType: "",
    message: "",
    errorMsg: [],
    init: function () {
        // event click on "Send" buttons in modal "Order material"
        $('#sendBtnOrderMaterial').on('click', function () {
            orderMaterialController.onClickSendOrderMaterialData();
        }),
        // event click on "OK, thanks" button in modal "Validation Error Modal" for modal "Order material"
        $('#closeinfoDialogOrderMaterial').on('click', function () {
            orderMaterialController.onClickCloseValidationErrorModal();
    });
    },
    // collect and validate data from "Order material" modal
    // call ajax function to send data on Server
    onClickSendOrderMaterialData: function () {
        // collect params
        this.area = $("div.area_buttons label.active input").val();
        this.priority = $("div.priority_buttons label.active input").val();
        this.errorType = $("div.error_type_buttons label.active input").val();
        this.message = $("div.message_order_material textarea").val();
        this.errorMsg = [];
         // validate params
        if (typeof this.area === "undefined")
            this.errorMsg.push(LD('area'));
        if (typeof this.priority === "undefined")
            this.errorMsg.push(LD('priority'));
        if (typeof this.errorType === "undefined")
            this.errorMsg.push(LD('errorType'));
        if (!this.message.trim())
            this.errorMsg.push(LD('message'));
        // check if all params selected
        if (this.errorMsg.length > 0) {
            $("p#validationErrorOrderMaterial").html(this.errorMsg.join(", ") + ".");
            $("#infoDialogOrderMaterial").modal("show");
            return;
        }
        // form array data for ajax call
        var orderMaterialData = {
            '_token': $('meta[name="csrf-token"]').attr('content'),
            area: this.area,
            priority: this.priority,
            errorType: this.errorType,
            message: this.message
        };
        // call to ajax function
        this.sendOrderMaterialData(orderMaterialData);
    },
    // close validation modal
    onClickCloseValidationErrorModal: function () {
        $('#infoDialogOrderMaterial').modal('hide');
    },
    // ajax: send params to OrderMaterialController.php
    // display string $statusMessage if email failures detected
    sendOrderMaterialData: function (orderMaterialData) {
        $.ajax({
            type: "POST",
            url: "/go/sendOrderMaterial",
            data: orderMaterialData,
            success: function ($statusMessage) {
                if ($statusMessage.startsWith("OK"))
                    console.log($statusMessage);
                else
                    alert($statusMessage);
                // close bootstrap modal
                $('#modalOrderMaterial').modal('hide');
            },
            error: function (xhr, status, error) {
                console.log("Status: " + status + " - Error: " + error);
            }
        });
    }
};

orderMaterialController.init();