@extends('layouts.app')
@section('content')

<iframe
  id="dynamicIframe" marginheight="0" marginwidth="0" frameborder="0" width="100%" frameborder="0" src="{{$src}}">
</iframe>

@endsection
