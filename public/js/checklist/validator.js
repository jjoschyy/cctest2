
function updateOperationProgressBar(id) {
    var progress = calcProgress(id);
    console.log('progress: ' + progress);
    $('#checklistProgressBar').attr('aria-valuenow', progress);
    $('#checklistProgressBar').width(progress + '%');
}

function clearChecklist(id) {
    $('#checklist-target' + id).children().remove();
    $('#checklistProgressBar').attr('aria-valuenow', 0);
    $('#checklistProgressBar').width('0%');
}

$('#validate-btn').on('click', function() {
    var text = $('#longTextArea').val();
    text = encodeURIComponent(text);
    clearChecklist(0);
    $.ajax({
//            type: 'POST',
        type: 'GET',
        url: '/admin/checklist/validate',
        dataType: 'text',
        data: 'data=' + text,
        success: function(data){
            $('#checklist-target0').append(data);
            updateProgressBar(0);
        },
        error: function(status, error) { 
            console.log('Status: ' + status + ' - Error: ' + error); 
        }
    });
});

$('#clear-btn').on('click', function() {
    $('#longTextArea').val('');
    clearChecklist(0);
});

$(document).ready(function() {
    if($('#longTextArea').val()) {
        updateProgressBar(0);
    }
    $('div[id^="checklist-target"]').on('change', 'input.checklistCountable', function() {
        updateProgressBar(0);
    });
});



