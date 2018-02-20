
@if(isset($checklist))
<ul class="list-group list-unstyled" data-prodorder-id="{{!empty($checklist) && is_array($checklist) && count($checklist) > 0 ? $checklist[0]->prodorder_operation_id : 0}}">
   
        @if(count($checklist) == 0)
                @include('admin.checklist.items.noItem')
        @else
            <li>
            @foreach($checklist as $item)
                @include('admin.checklist.items.base', ['item' => $item])
            @endforeach
            </li>
        @endif
   
</ul>
@else
    @include('admin.checklist.items.noItem')
@endif