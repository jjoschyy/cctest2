@if(!isset($hideBreadcrumb))
<section id="sec_breadcrumb">
    <ol class="breadcrumb navbar blue-grey lighten-4 small">
        <li class="breadcrumb-item"><a class="font-weight-bold" href="{{ url('/') }}">Home</a></li>
        {{$breadcrumb or ""}}
    </ol>
</section>
@endif
