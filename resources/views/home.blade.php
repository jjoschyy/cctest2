@extends('layouts.app')
@section('content')

<div class="container-fluid">
    <div class="row">
        <div class="col-sm-11">
            <a href="#" class="btn btn-info" role="button">Dashboard</a>
            <a href="/go/orders" class="btn btn-info" role="button">PB Go</a>
        </div>
        <div class="col-sm-1 text-right">
            @if (session('status'))
            <div class="alert alert-success">
                {{ session('status') }}
            </div>
            @endif
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
        </div>
    </div>
</div>

@endsection
