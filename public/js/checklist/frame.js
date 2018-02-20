
//function updateProgressBar() {
//    var progress = calcProgress();
//    console.log('progress: ' + progress);
//    $('#checklistProgressBar').attr('aria-valuenow', progress);
//    $('#checklistProgressBar').width(progress + '%');
//}

function updateProgressBar(operationId) {
    updateOperationProgressBar(operationId);
}

function sendUpdateRequest(url, data) {
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        type: 'POST',
        url: url,
        dataType: 'json',
        data: data,
        success: function(response){
            console.log('item updated');
        },
        error: function(status, error) { 
            console.log('Status: ' + status + ' - Error: ' + error); 
        }
    });
}

$(document).ready(function() {
    $('div[id^="checklist-target"]').on('change', 'input.checklistCountable', function() {
        var url = '/go/checkList/updateItem';
        if($(this).closest('div[id^="checklist-target"]').hasClass('checklistTest')) {
            url += '/1';
        }
        var val = null;
        if($(this).attr('type') === 'checkbox') {
            val = $(this).hasClass('itemChecked') ? 1 : 0;
        } else {
            val = $(this).val();
        }
        var data = {
            prodorder_operation_id: $(this).closest('div[id^="checklist-target"]').data('operation-id'),
            name: $(this).closest('div[class^="checklistBase"]').data('id'),
            value: val
        };
        sendUpdateRequest(url, data);
    });
});

