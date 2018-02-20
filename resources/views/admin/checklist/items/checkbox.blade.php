<div class="checkbox-rounded">
    <input 
        type="checkbox" 
        id="{{$item->name}}"
        @if(!empty($item->value))
        class="filled-in checklistIT checklistCountable itemChecked checklistInput" 
        @else 
        class="filled-in checklistIT checklistCountable checklistInput"
        @endif>
    <label class="mb-0" for="{{$item->name}}">{{$item->label}}</label>
</div>