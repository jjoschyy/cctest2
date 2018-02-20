@if(isset($errorMsg))
    <span>
        Errors detected in Longtext.
    </span>
    <span>{{$errorMsg}}</span>
@else
    <span>
        No Errors.
    </span>
@endif