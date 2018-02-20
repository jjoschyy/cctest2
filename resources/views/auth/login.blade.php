@extends('layouts.login')

@section('content')
@if ($errors->has('username'))
<div id="toast-container" position="toast-top-right" class="toast-top-right">
    <div class="toast toast-error" style="opacity: 0.8;">
        <div class="toast-message">
            {{ $errors->first('username') }}
        </div>
    </div>
</div>
@endif


@if ($errors->has('password'))
<div id="toast-container" position="toast-top-right" class="toast-top-right">
    <div class="toast toast-error" style="opacity: 0.8;">
        <div class="toast-message">
            {{ $errors->first('password') }}
        </div>
    </div>
</div>
@endif
<section class="view intro-2 hm-stylish-strong">
    <div class="full-bg-img flex-center">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto mt-lg-5">
                    <div class="card wow fadeIn" data-wow-delay="0.3s">
                        <form class="card-body" method="POST" action="{{ route('login') }}" autocomplete="off">
                            {{ csrf_field() }}
                            <div class="form-header blue-gradient">
                                <h3><i class="fa fa-user mt-2 mb-2"></i> {{ __('auth.login') }}</h3>
                            </div>
                            <div class="md-form">
                                <i class="fa fa-user prefix white-text"></i>
                                <input type="text" placeholder="{{ __('auth.usernameHolder') }}" id="orangeForm-username" class="form-control" name="username" value="{{ old('username') }}">
                                <label for="orangeForm-username">{{ __('auth.usernameLabel') }}</label>
                            </div>

                            <div class="md-form">
                                <i class="fa fa-lock prefix white-text"></i>
                                <input type="password" placeholder="{{ __('auth.passwordHolder') }}" id="orangeForm-pass" class="form-control" name="password" required>
                                <label for="orangeForm-pass">{{ __('auth.passwordLabel') }}</label>
                            </div>

                            <div class="text-center">
                                <button type="submit" class="btn blue-gradient btn-lg">{{ __('auth.signUp') }}</button>
                                <hr>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
