
function calcProgress(id) {
    var total = $('#checklist-target' + id).find('.checklistCountable').length;
    var ret;
    if(total === 0) {
        ret = 100;
    } else {
        var checked = $('#checklist-target' + id).find('.checklistCountable.itemChecked').length;
        ret = Math.ceil(checked / total * 100);
    }
    return ret;
}

function updateChecklist(id) {
    var data = [];
    $('.checklistCountable').each(function(index) {
        var checklistNumber = $(this).closest('div[class^="checklist-target"]').data('operation-id');
        var itemId = $(this).closest('div[class^="checklistBase"]').data('id');
        data[index] = [itemId, $(this).val()];
    });
    //TODO send data array via ajax request to RestAPI
//    $.ajax({
//        type: 'GET',
//        url: '/admin/checklist/update',
//        dataType: 'text',
//        data: 'data=' + JSON.stringify(data),
//        success: function(data){
//
//        },
//        error: function(status, error) { 
//            console.log('Status: ' + status + ' - Error: ' + error); 
//        }
//    });
}

