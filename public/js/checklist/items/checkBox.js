$('div[id^="checklist-target"]').on('click', 'input.checklistIT', function() {
    if($(this).is(':checked')) {
        $(this).addClass('itemChecked');
    } else {
        $(this).removeClass('itemChecked');
    }
});
  

