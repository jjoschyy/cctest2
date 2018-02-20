function valInit() {
        
    $('span.checklistVAL').each(function() {
        var ref = $(this).data('ref');
        $(this).html($('#' + ref).val());
    });
}
$(document).ready(function(){
    valInit();
   $('div[id^="checklist-target"]').on('change', "input.checklistInput", function() {
        var id = $(this).closest('div.checklistBase').data('id');
        var value = $(this).val();
        $('span.checklistVAL.checklist-ref-' + id).each(function() {
            $(this).text(value);
        });
    });
});

