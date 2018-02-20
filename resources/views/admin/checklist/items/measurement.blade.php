        
<div class="preText">
    {{$item->label}}
</div>
<div class="md-form input-group">
    <input id="{{$item->name}}" type="number" step="0.1" class="form-control checklistMW-main checklistMW checklistInput" aria-describedby="{{$item->name . '_formula'}}">
    <label for="{{$item->name}}" class="checklist_mw_label pl-4">
        {{__('checklist.measurement')}}
    </label>
    <span class="checklistMW input-group-addon bg-default ml-2 pl-2 pr-2" id="{{$item->name . '_formula'}}">{{$item->option1}}</span>
    <input type="hidden" id="{{$item->name . '_submit'}}" class="checklistCountable">
</div>
<div id="{{$item->name . '_approval'}}" class="checklistMW checklistMWApproval d-none">
    <div class="md-form ml-2">
        <input id="{{$item->name . '_approved_by'}}" type="text" class="checklistMW">
        <label for="{{$item->name . '_approved_by'}}">{{__('checklist.issuer')}}</label>
    </div>
    <div class="md-form ml-2">
        <input id="{{$item->name . '_approve_txt'}}" type="text" class="checklistMW">
        <label for="{{$item->name . '_approve_txt'}}">{{__('checklist.approvalText')}}</label>
    </div>
    <div class="md-form ml-2 mb-0">
        <button id="{{$item->name . '_approve_btn_reset'}}" type="button" class="btn btn-warning">{{__('checklist.revoke')}}</button>
        <button id="{{$item->name . '_approve_btn_ok'}}" type="button" class="btn btn-success">{{__('checklist.approve')}}</button>
    </div>
</div>
<div class="checklistMW postText pl-2">
    {{$item->option2}}
</div>
