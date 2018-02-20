<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" class="full-height">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>{{ config('app.name') }}</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet">
       <style type="text/css">
            /* Base Settings */
            .intro-2 {
                background: url("/images/backgrounds/zeiss_o-select.jpg")no-repeat center center;
                background-size: cover;
            }
            .top-nav-collapse {
                background-color: #0d47a1 !important;
            }
            .navbar:not(.top-nav-collapse) {
                background: transparent !important;
            }
            @media (max-width: 768px) {
                .navbar:not(.top-nav-collapse) {
                    background: #3f51b5 !important;
                }
            }

            .card {
                background-color: rgba(229, 228, 255, 0.2);
            }

            .md-form .prefix {
                font-size: 1.5rem;
                margin-top: 1rem;
            }
            .md-form label {
                color: #ffffff;
            }
            h6 {
                line-height: 1.7;
            }
            @media (max-width: 740px) {
                .full-height,
                .full-height body,
                .full-height header,
                .full-height header .view {
                    height: 750px;
                }
            }
            @media (min-width: 741px) and (max-height: 638px) {
                .full-height,
                .full-height body,
                .full-height header,
                .full-height header .view {
                    height: 750px;
                }
            }

            .card {
                margin-top: 30px;
                /*margin-bottom: -45px;*/

            }

            .md-form input[type=text]:focus:not([readonly]),
            .md-form input[type=password]:focus:not([readonly]) {
                border-bottom: 1px solid #8EDEF8;
                box-shadow: 0 1px 0 0 #8EDEF8;
            }
            .md-form input[type=text]:focus:not([readonly])+label,
            .md-form input[type=password]:focus:not([readonly])+label {
                color: #8EDEF8;
            }

            .md-form .form-control {
                color: #fff;
            }
            [type="checkbox"]+label:before{
                border:1.5px solid #ffffff;
            }

            .md-form .prefix ~ label {
                padding-bottom: 2px;
            }

            .form-control::placeholder {
                color: #777e86;
                opacity: .8;
            }

            input[type=text], input[type=password] {
                padding-left: 3px;
            }
        </style>
    </head>
    <body class="fixed-sn white-skin">
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
                <div class="container">
                    <a class="navbar-brand" href="/"><img src="/images/logos/ProBoard/Zeiss_ProductionBoard_weiss_klein.png" /><strong>&nbsp;&nbsp;{{ config('app.name') }}</strong></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent-7">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Login <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/productoverview">Product Overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/support">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            @yield('content')
        </header>
        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}"></script>
        <script>
            new WOW().init();
        </script>
    </body>
</html>
