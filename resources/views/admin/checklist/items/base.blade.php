
@if ($item->is_new_group == 1) 
        </li><li class="list-group-item border-0 border-light bg-light z-depth-1 mb-2">
        <div class="checklistBase {{$item->is_active != 1 ? 'd-none' : ''}}" data-id="{{$item->name}}">
@else 
        <div class="checklistBase {{$item->is_active != 1 ? 'd-none' : ''}} ml-1"  data-id="{{$item->name}}">
@endif

@if ($item->type === 'TEXT')
    @include('admin.checklist.items.text')
@elseif ($item->type === 'IT')
    @include('admin.checklist.items.checkbox')
@elseif ($item->type === 'IT2')
    @include('admin.checklist.items.checkboxIndent')
@elseif ($item->type === 'INP')
    @include('admin.checklist.items.input')
@elseif ($item->type === 'MW')
    @include('admin.checklist.items.measurement')
@elseif ($item->type === 'REF')
    @include('admin.checklist.items.ref')
@elseif ($item->type === 'HTTP')
    @include('admin.checklist.items.http')
@elseif ($item->type === 'HTTPS')
    @include('admin.checklist.items.https')
@elseif ($item->type === 'FILE')
    @include('admin.checklist.items.file')
@elseif ($item->type === 'VAL')
    @include('admin.checklist.items.val')
@elseif ($item->type === 'RADIO')
    @include('admin.checklist.items.radio')
@elseif ($item->type === 'MAILTO')
    @include('admin.checklist.items.mailTo')
@elseif ($item->type === 'BTN')
    @include('admin.checklist.items.button')
@endif
</div>

