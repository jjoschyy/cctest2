function inpValidate(id) {
    
    if($('#' + id).val()) {
        $('#' + id).addClass('itemChecked');
        $('#' + id).addClass('valid');
    } else {
        $('#' + id).removeClass('itemChecked');
        $('#' + id).removeClass('valid');
    }
}

$('div[id^="checklist-target"]').on('change', 'input.checklistINP', function() {
    inpValidate($(this).attr('id'));
});

