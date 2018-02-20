    function mwValidate(id, formula) {
        var value = $('#' + id).val();
        if(value) {
            formula = formula.replace(RegExp(id, 'g'), value.toString());
        } else {
            formula = 'false';
        }
        return eval(formula);
    }
    
    function mwClearInp(id) {
        $('#' + id).val('');
        $('#' + id + '_submit').val('');
        $('#' + id + '_submit').removeClass('itemChecked');
        $('#' + id).removeClass('invalid');
        $('#' + id).removeClass('valid');
        $('#' + id + '_approval').addClass('d-none');
    }
    
    function mwSetValid(id) {
        $('#' + id).addClass('valid');
        $('#' + id).removeClass('invalid');
        $('#' + id + '_submit').val($('#' + id).val());
        $('#' + id + '_submit').addClass('itemChecked');
        $('#' + id + '_approval').addClass('d-none');
        $('#' + id + '_approval').find('input').each(function(){
            $(this).removeClass('required validate');
        });
    }
    
    function mwSetInvalid(id) {
        $('#' + id).addClass('invalid');
        $('#' + id).removeClass('valid');
        $('#' + id + '_submit').val('');
        $('#' + id + '_submit').removeClass('itemChecked');
        $('#' + id + '_approval').removeClass('d-none');
        $('#' + id + '_approval').find('input').each(function(){
            $(this).addClass('required validate');
        });
    }
    
    function mwOnChange(id) {
        var formula = $('#' + id + '_formula').text();
        if(!$('#' + id).val()) {
            mwClearInp(id);
        }
        else if(mwValidate(id, formula)) {
            mwSetValid(id);
        } else {
            mwSetInvalid(id);
        }
        $('#' + id + '_submit').trigger('change');
    }
    
    function mwOnRecall(id) {
        var inpId = $('#' + id).parent().parent().parent().find('input.checklistMW-main').attr('id');
        mwSetInvalid(inpId);
        $('#' + inpId + '_approved_by').val('');
        $('#' + inpId + '_approved_by').removeClass('valid');
        $('#' + inpId + '_approved_by').removeClass('invalid');
        $('#' + inpId + '_approve_txt').val('');
        $('#' + inpId + '_approve_txt').removeClass('valid');
        $('#' + inpId + '_approve_txt').removeClass('invalid');
        $('#' + inpId + '_submit').trigger('change');
    }
    
    function mwOnApprove(id) {
        var inpId = $('#' + id).parent().parent().parent().find('input.checklistMW-main').attr('id');
        var submitId = inpId + '_submit';
        var approvedBy = $('#' + inpId + '_approved_by').val();
        var approveTxt = $('#' + inpId + '_approve_txt').val();
        if(approvedBy !== '' && approveTxt !== '') {
            var submitStr = $('#' + inpId).val() + ';' + approvedBy + ';' + approveTxt;
            $('#' + inpId).addClass('valid');
            $('#' + inpId).removeClass('invalid');
            $('#' + submitId).val(submitStr);
            $('#' + submitId).addClass('itemChecked');
        } else {
            $('#' + inpId).addClass('invalid');
            $('#' + inpId).removeClass('valid');
            $('#' + submitId).val('');
            $('#' + submitId).removeClass('itemChecked');
        }
        $('#' + inpId + '_submit').trigger('change');
    }
    
    $(document).ready(function() {
        
        $('div[id^="checklist-target"]').on('change', 'input.checklistMW-main', function() {
            mwOnChange($(this).attr('id'));
        });
        $('div[id^="checklist-target"]').on('click', "button[id$='_approve_btn_reset']", function() {
            mwOnRecall($(this).attr('id'));
        });
        $('div[id^="checklist-target"]').on('click', "button[id$='_approve_btn_ok']", function() {
            mwOnApprove($(this).attr('id'));
        });
    });

