<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ config('app.name') }}</title>

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet">
        <link href="{{ asset('css/multi-select.min.css') }}" rel="stylesheet">
        @if(isset($include_css))
        @foreach ($include_css as $css_file)
        <link href="{{ asset('css') }}/{{ $css_file }}" rel="stylesheet">
        @endforeach
        @endif
    </head>
    <body>
        <div id="app">
            @include('layouts.partials.navbar')
            @include('layouts.partials.breadcrumb')

            <section id="sec_maincontent">
                @yield('content')
            </section>
        </div>
        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}"></script>
        <script src="{{ asset('js/jquery.multi-select.min.js') }}"></script>
        <script src="{{ asset('js/functions.js') }}"></script>
        <!-- JavaScript files -->
        @if(isset($include_js))
        @foreach ($include_js as $js_file)
        <script src="{{ asset('js') }}/{{ $js_file }}" type="text/javascript"></script>
        @endforeach
        @endif
        <script type="text/javascript">

        $(document).ready(function () {
            @if (isset($QueryResult))
            {!!$QueryResult!!}
            @endif
            $('.mdb-select').material_select();
            $('[data-toggle="multi-select"]').multiSelect();
            if (typeof (init) === typeof (Function)) {
            init();
            }
            $.filterInput(".filterInput");
        });

        </script>
    </body>
</html>
