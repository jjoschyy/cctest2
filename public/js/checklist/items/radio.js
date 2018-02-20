$('div[id^="checklist-target"]').on('change', 'input.checklistRADIO', function() {
    var id = $(this).closest('div.checklistBase').data('id');
    if($(this).hasClass('checklistRADIO-yes')) {
        console.log('yes');
        $('#' + id + '_submit').val('yes');
    } else if($(this).hasClass('checklistRADIO-no')) {
        console.log('no');
        $('#' + id + '_submit').val('no');
    }
});
  

