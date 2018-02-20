<form class="form-inline float-left pl-2">
    <div class="form-group">
        <input name="group1" type="radio" id="{{$item->name . '_yes'}}" checked="checked" class="checklistRADIO checklistRADIO-yes">
        <label for="{{$item->name . '_yes'}}">{{__('checklist.yes')}}</label>
    </div>
    <div class="form-group">
        <input name="group1" type="radio" id="{{$item->name . '_no'}}" class="checklistRADIO checklistRADIO-no">
        <label for="{{$item->name . '_no'}}">{{__('checklist.no')}}</label>
    </div>
    <input type="hidden" id="{{$item->name . '_submit'}}">
</form>
                            