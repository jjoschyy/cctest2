@extends ('layouts.app')

@section ('content')
<!--    Main Board -->
<div class="row-fluid">
    <div class="col-md-12">
        <a class="btn btn-info backButton" href="/go/orders"><i class="fa fa-arrow-circle-left pr-3"></i>{{ __('go.back') }}</a>
        <ul class="nav nav-tabs grey">
            @foreach($workingSteps as $key => $item)
            @if($key== 0)
            <li class="nav-item">
                <a class="nav-link active nav-item-sequences" data-toggle="tab" href="#sequence_{{$key}}" ref="{{$key}}">{{ __('go.workingSteps') }}</a>
            </li>            
            @else
            <li class="nav-item">
                <a class="nav-link nav-item-sequences" data-toggle="tab" href="#sequence_{{$key}}" ref="{{$key}}">{{ __('go.parallelSequnece') }} {{$key}}</a>
            </li>
            @endif
            @endforeach            
            @if(count($components))
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#component_items">{{ __('go.compnentOverview') }}</a>
            </li>
            @endif
            @if(count($zkmComponents))
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#salesorder-items">{{ __('go.componentsZkm') }}</a>
            </li>
            @endif
            @if(count($documents))
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#documents">{{ __('go.documents') }}</a>
            </li>              
            @endif
        </ul>
        <div id="ws_navbar_content" class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="sequences">
                <div class="row">
                    <div class="col-lg-3">
                        @include('go.board.productdetail')
                        <div class="tab-content card operation_steps grey lighten-3">
                            <div id="workingSteps" role="tabpanel">
                                <div class="table-responsive">                    
                                    @foreach($workingSteps as $key => $item)
                                    @include('go.board.sequences.ws-items',['key'=>$key])                
                                    @endforeach
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div class="col-lg-9 right_view">
                        <div id='rightMenuStart'>
                            <button type="button" class="btn btn-info"><i class="fa fa-info-circle" aria-hidden="true"></i>  &nbsp; &nbsp;{{ __('go.selectOperation') }}</button>
                        </div>
                        <div id='rightMenu' class="rightMenu">
                            <div class='content'>
                                <div class="tabs-wrapper"> 
                                    <ul class="nav classic-tabs tabs-grey" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-button waves-light active"  href="#panel_1_1">{{ __('go.checklist') }}</a>
                                        </li>
                                        <li class="nav-item" id="wsItemsLink">
                                            <a class="nav-button waves-light"  href="#panel_1_2">{{ __('go.compnentOverview') }}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-content card right_panel">
                                    <div class="tab-pane fade in show active sub_sub_nav_resizeme" id="panel_1_1" role="tabpanel">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                @foreach($workingSteps as $key => $item)
                                                @include('go.board.sequences.ws-checklist')
                                                @endforeach
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="operationButtons mainButtons" class='content btn-group-sg'>
                                                    <button id="wsCancelBtn" type="button" class="btn btn-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> {{ __('go.cancel') }}</button>
                                                    <button id="wsStartedBtn" type="button" class="btn btn-primary"><i class="fa fa-play" aria-hidden="true"></i> {{ __('go.start') }}</button>
                                                    <button id="wsBreakBtn" type="button" class="btn btn-warning"><i class="fa fa-pause" aria-hidden="true"></i> {{ __('go.break') }}</button>                                                
                                                    <button id="wsConfirmedBtn" type="button" class="btn btn-success"><i class="fa fa-check-circle" aria-hidden="true"></i> {{ __('go.confirm') }}</button>
                                                </div>                                                    
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade sub_sub_nav_resizeme" id="panel_1_2" role="tabpanel">
                                        @foreach($workingSteps as $key => $item)
                                        @include('go.board.sequences.ws-components',['key'=>$key])
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            <div role="tabpanel" class="tab-pane fade in" id="component_items">
                <ul class="list-group media-list media-list-stream">
                    @include('go.board.component-items')
                </ul>
            </div>
            <div role="tabpanel" class="tab-pane fade in" id="salesorder-items">
                <ul class="list-group media-list media-list-stream">
                    @include('go.board.salesorder-items')
                </ul>
            </div>
            <div role="tabpanel" class="tab-pane fade in" id="documents">
                <ul class="list-group media-list media-list-stream">
                    @include('go.board.documents')
                </ul>
            </div>
        </div>
    </div>

</div>
</div>


<!-- Modal - Report missing part / Received missing part => operation-overview, parallel-sequence and component-overview -->
<div class="modal fade" id="cMissingPart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="missingPartModalLabel">{{ __('go.repMissingPart') }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form class="missing_report">   
                    <div class="form-group">
                        <button type="button" id="btnMissingProductionStatus" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
                            {{ __('go.statusToError') }}
                        </button>          
                    </div>
                    <div id="onlyReceivedMissingPartContainer">       
                        <div id="onlyReceivedMissingPart" class="form-group">
                            <div class="form-group">
                                <label for="message-text" class="form-control-label">{{ __('go.message') }}:</label>
                                <textarea id="cMessageErrorReport" class="form-control" id="message-text"></textarea>
                            </div>
                            <div class="row mt-5">

                                <div class="col-sm-6">

                                    <div id="missingStartDate" class="md-form datepicker_container">
                                        <label for="missingStartDateInput">{{ __('go.startDate') }}:</label>
                                        <input placeholder="Select date" data-value="" type="text" id="missingStartDateInput" class="form-control datepicker type_missing">
                                    </div>

                                    <div id="missingStartTime" class="md-form timepicker_container mt-5">
                                        <label for="missingStartTimeInput">{{ __('go.startTime') }}:</label>
                                        <input placeholder="Selected time" value="" type="text" id="missingStartTimeInput" class="form-control timepicker">
                                    </div>

                                </div>

                                <div class="col-sm-6">

                                    <div id="missingEndDate" class="md-form datepicker_container">
                                        <label for="missingEndDateInput">{{ __('go.endDate') }}:</label>
                                        <input placeholder="Select date" data-value="" type="text" id="missingEndDateInput" class="form-control datepicker type_missing">
                                    </div>

                                    <div id="missingEstimatedEndTime" class="md-form timepicker_container mt-5">
                                        <label for="missingEstimatedEndTimeInput">{{ __('go.endTime') }}:</label>
                                        <input placeholder="Selected time" value="" type="text" id="missingEstimatedEndTimeInput" class="form-control timepicker">
                                    </div>

                                </div>

                            </div>
                            <div class="btn-group">
                                <button id="cSelectCat" data-cSelectCat="" type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{ __('go.selectCategory') }}
                                </button>
                                <div class="dropdown-menu">
                                    @foreach ($missingPartsCategories as $category)
                                    <a id='{{ $category->id }}' class="cErrorCategories dropdown-item" href="#">{{ $category->getTitleText() }}</a>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div> 
                </form>
            </div>
            <div class="modal-footer">
                <span id="cBtnMissingPartSendMessasgeContainer">
                    <button id="cBtnMissingPartSendMessasge" type="button" disabled="true" data-toggle="tooltip"
                            data-placement="bottom" title="{{ __('go.selectCategory') }}" class="btn btn-primary">{{ __('go.sendReport') }}</button>  
                </span>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ __('go.close') }}</button>
                <button id="cBtnMissingPartConfirm" type="button" class="btn btn-primary" data-dismiss="modal">{{ __('go.confirm') }}</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal - Comfirm button dialog 'Complete' => operation-overview and parallel-sequence -->
<div id="confirmDialogComplete" class="modal fade">
    <div class="modal-dialog" role="dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{ __('go.confirmClosingOperation') }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>{{ __('go.sureForComplete') }}?</p>
            </div>
            <div class="modal-footer">
                <button id="btnConfirmCompleteOperation" type="button" class="btn btn-primary">{{ __('go.confirm') }}</button>
                <button id="btnCancelOperation" type="button" class="btn btn-secondary" data-dismiss="modal">{{ __('go.cancel') }}</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal - Comfirm button dialog 'Pause' => operation-overview and parallel-sequence -->
<div id="confirmDialogPause" class="modal fade">
    <div class="modal-dialog" role="dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{ __('go.confirmPause') }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>{{ __('go.sureForPause') }}?</p>
            </div>
            <div class="modal-footer">
                <button id="btnConfirmPause" type="button" class="btn btn-primary">{{ __('go.confirm') }}</button>
                <button id="btnCancelPause" type="button" class="btn btn-secondary" data-dismiss="modal">{{ __('go.cancel') }}</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal - Comfirm button dialog 'Error' => operation-overview and parallel-sequence -->
<div id="confirmDialogError" class="modal fade">
    <div class="modal-dialog" role="dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{ __('go.confirmError') }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>{{ __('go.sureForError') }}?</p>
            </div>
            <div class="modal-footer">
                <button id="btnConfirmError" type="button" class="btn btn-primary">{{ __('go.confirm') }}</button>
                <button id="btnCancelError" type="button" class="btn btn-secondary" data-dismiss="modal">{{ __('go.cancel') }}</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal - info => Operation can´t be compleated , until it contains reported missing parts -->
<div id="infoDialogMissingPartsFound" class="modal fade">
    <div class="modal-dialog" role="dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-success">{{ __('go.checklistCompleted') }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <h5 class="text-danger">{{ __('go.missingPartsFound') }}</h5>
                <p>{{ __('go.canNotComplete') }}.</p>
            </div>
        </div>
    </div>
</div>

<!-- Modal - info => Missing parts can´t be reported , until operation has status 'Error' or 'Pause' -->
<div id="infoDialogMissingReportBlocked" class="modal fade">
    <div class="modal-dialog" role="dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{ __('go.missingReportBlocked') }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>{{ __('go.canNotReport') }}.</p>
            </div>
        </div>
    </div>
</div>

<!-- Modal 'Error report' operation view -->
<div class="modal fade" id="oErrorModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{ __('go.errorReport') }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form class="error_report">
                    <div class="row">

                        <div class="col-sm-6">
                            <div class="btn-group">
                                <button id="oSelectCat" data-oSelectCat=""  type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{ __('go.selectCategory') }}
                                </button>
                                <div class="dropdown-menu">
                                    @foreach ($errorCategories as $category)
                                    <a id='{{ $category->id }}' class="oErrorCategories dropdown-item" href="#">{{ $category->getTitleText() }}</a>
                                    @endforeach
                                </div>
                            </div> 
                        </div>

                        <div class="col-sm-6">
                            <div class="btn-group">
                                <button id="oSelectSubCat" data-oSelectSubCat="" type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{ __('go.selectSubCategory') }}
                                </button>
                                <div class="dropdown-menu">
                                    <div class="subCategory">
                                        <div class='oSubCategoriesLinks'>
                                            <a class="dropdown-item" href="#">{{ __('go.selectFirstCategory') }}</a>
                                        </div>      
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> 
                    <div class="row mt-4">

                        <div class="col-sm-6">

                            <div id="oStartDate" class="md-form datepicker_container">
                                <label for="oStartDateInput">{{ __('go.startDate') }}:</label>
                                <input placeholder="Select date" data-value="" type="text" id="oStartDateInput" class="form-control datepicker type_o">
                            </div>

                            <div id="oStartTime" class="md-form timepicker_container mt-5">
                                <label for="oStartTimeInput">{{ __('go.startTime') }}:</label>
                                <input placeholder="Selected time" value="" type="text" id="oStartTimeInput" class="form-control timepicker">
                            </div>

                            <div class="btn-group top-buffer">
                                <button id="oReceiverNumberType" data-oSelectType=""  type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{ __('go.receiverType') }}
                                </button>
                                <div class="dropdown-menu">
                                    <div class='oTypesLinks'>
                                        <a id='COSTCENTER' class="oTypes dropdown-item" href="#">{{ __('go.costCenter') }}</a>
                                        <a id='CUSTOMER_ORDER' class="oTypes dropdown-item" href="#">{{ __('go.customerOrder') }}</a>
                                        <a id='PRODUCTION_ORDER' class="oTypes dropdown-item" href="#">{{ __('go.productionOrder') }}</a>
                                        <a id='INTERNAL_ORDER' class="oTypes dropdown-item" href="#">{{ __('go.internalOrder') }}</a>
                                    </div>                          
                                </div>
                            </div>
                            <div class="form-group top-buffer">
                                <label for="oReceiverNumberPosition" class="form-control-label">{{ __('go.receiverNumberPosition') }}:</label>
                                <input id="oReceiverNumberPosition" disabled class="form-control" />
                            </div>               
                        </div>

                        <div class="col-sm-6">

                            <div id="oEndDate" class="md-form datepicker_container">
                                <label for="oEndDateInput">{{ __('go.endDate') }}:</label>
                                <input placeholder="Select date" data-value="" type="text" id="oEndDateInput" class="form-control datepicker type_o">
                            </div>

                            <div id="oPauseEstimatedEndTime" class="md-form timepicker_container mt-5">
                                <label for="oEstimatedEndTimeInput">{{ __('go.endTime') }}:</label>
                                <input placeholder="Selected time" value="" type="text" id="oEstimatedEndTimeInput" class="form-control timepicker">
                            </div>

                            <div class="btn-group top-buffer">
                                <button id="oFailureSource" data-oFailureSource=""  type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{ __('go.failureSource') }}
                                </button>
                                <div class="dropdown-menu">
                                    <div class='oFailureSourceLinks'>
                                        <a id='SUPPLIERS_FAULT' class="oFailureSourceTypes dropdown-item" href="#">{{ __('go.supplier') }}</a>
                                        <a id='WORKERS_FAULT' class="oFailureSourceTypes dropdown-item" href="#">{{ __('go.worker') }}</a>
                                        <a id='UNCLEAR_FAULT' class="oFailureSourceTypes dropdown-item" href="#">{{ __('go.unknown') }}</a>
                                    </div>                          
                                </div>
                            </div>
                            <div class="form-group top-buffer">
                                <label for="oReceiverNumber" class="form-control-label">{{ __('go.receiverNumber') }}:</label>
                                <input id="oReceiverNumber" disabled class="form-control"  />
                            </div>
                        </div>

                    </div>

                    <div class="form-group">
                        <div class="oMessageErrorReport">
                            <label for="message-text" class="form-control-label">{{ __('go.message') }}:</label>
                            <textarea id="oMessageErrorReport" class="form-control" ></textarea>
                        </div>
                    </div>  

                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ __('go.close') }}</button>
                <button id="oBtnErrorSendMessasge" type="button" disabled="true" data-toggle="tooltip"
                        data-placement="bottom" title="{{ __('go.selectCatSubCatRecType') }}" class="btn btn-primary">{{ __('go.sendReport') }}</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal 'Pause report' operation view -->
<div class="modal fade" id="oPauseModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{ __('go.pauseReport') }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form class="pause_report">
                    <div class="row">

                        <div class="col-sm-6">
                            <div class="btn-group">
                                <button id="oPauseSelectCat" data-oPauseSelectCat=""  type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{ __('go.selectCategory') }}
                                </button>
                                <div class="dropdown-menu">
                                    @foreach ($pauseCategories as $category)
                                    <a id='{{ $category->id }}' class="oPauseCategories dropdown-item" href="#">{{ $category->getTitleText() }}</a>
                                    @endforeach
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="btn-group">
                                <button id="oPauseSelectSubCat" data-oPauseSelectSubCat="" type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{ __('go.selectSubCategory') }}
                                </button>
                                <div class="dropdown-menu">
                                    <div class="subCategory">
                                        <div class='oPauseSubCategoriesLinks'>
                                            <a class="dropdown-item" href="#">{{ __('go.selectFirstCategory') }}</a>
                                        </div>      
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="row mt-4">

                        <div class="col-sm-6">

                            <div id="oPauseStartDate" class="md-form datepicker_container">
                                <label for="oPauseStartDateInput">{{ __('go.startDate') }}:</label>
                                <input placeholder="Select date" data-value="" type="text" id="oPauseStartDateInput" class="form-control datepicker type_oPause">
                            </div>

                            <div id="oPauseStartTime" class="md-form timepicker_container mt-5">
                                <label for="oPauseStartTimeInput">{{ __('go.startTime') }}:</label>
                                <input placeholder="Selected time" value="" type="text" id="oPauseStartTimeInput" class="form-control timepicker">
                            </div>

                        </div>

                        <div class="col-sm-6">

                            <div id="oPauseEndDate" class="md-form datepicker_container">
                                <label for="oPauseEndDateInput">{{ __('go.endDate') }}:</label>
                                <input placeholder="Select date" data-value="" type="text" id="oPauseEndDateInput" class="form-control datepicker type_oPause">
                            </div>

                            <div id="oPauseEstimatedEndTime" class="md-form timepicker_container mt-5">
                                <label for="oPauseEstimatedEndTimeInput">{{ __('go.endTime') }}:</label>
                                <input placeholder="Selected time" value="" type="text" id="oPauseEstimatedEndTimeInput" class="form-control timepicker">
                            </div>

                        </div>

                    </div>

                    <div class="form-group">
                        <div class="oMessagePauseReport">
                            <label for="message-text" class="form-control-label">{{ __('go.message') }}:</label>
                            <textarea id="oMessagePauseReport" class="form-control" ></textarea>
                        </div>
                    </div>  

                </form>
            </div>
            <div class="modal-footer">
                <button id="oBtnPauseSendMessasge" type="button" disabled="true" data-toggle="tooltip"
                        data-placement="bottom" title="{{ __('go.selectCatSubCat') }}" class="btn btn-primary">{{ __('go.sendReport') }}</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ __('go.close') }}</button>
                <button id="oBtnPauseConfirm" type="button" class="btn btn-primary" data-dismiss="modal">{{ __('go.confirm') }}</button>
            </div>
        </div>
    </div>
</div>

<!--Modal - Order material -->
<div class="modal fade" id="modalOrderMaterial" tabindex="-1" role="dialog" aria-labelledby="modal Order Material" aria-hidden="true">
    <div class="modal-dialog modal-lg cascading-modal" role="document">

        <!--Content-->
        <div class="modal-content">

            <!--Header-->
            <div class="modal-header light-blue darken-3 white-text">
                <h4 class="title"><i class="fa fa-reorder" aria-hidden="true"></i> {{__('go.noMaterialButton')}} </h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>

            <!-- Body -->
            <div class="modal-body mb-0 text-center">

                <!-- Area -->
                <div class="card">
                    <div class="card-header deep-orange lighten-1 white-text">
                        {{__('go.area')}}
                    </div>
                    <div class="card-body">
                        <!--Checkbox butons-->
                        <div class="btn-group d-block area_buttons" data-toggle="buttons">

                            @foreach ($areas as $area)
                            <label class="btn btn-default mb-1">
                                <input type="radio" name="area" value="{{ $area->id }}" autocomplete="off"> {{ $area->name }}
                            </label>
                            @endforeach

                        </div>
                    </div>
                </div>

                <!-- Priority -->
                <div class="card">
                    <div class="card-header deep-orange lighten-1 white-text">
                        {{__('go.priority')}}
                    </div>
                    <div class="card-body">
                        <!--Checkbox butons-->
                        <div class="btn-group d-block priority_buttons" data-toggle="buttons">

                            <label class="btn btn-default mb-1">
                                <input type="radio" value="high" name="priority" autocomplete="off"> {{__('go.high')}}
                            </label>

                            <label class="btn btn-default mb-1">
                                <input type="radio" value="veryHigh" name="priority" autocomplete="off"> {{__('go.veryHigh')}} 
                            </label>

                        </div>
                    </div>
                </div>

                <!-- Error type -->
                <div class="card">
                    <div class="card-header deep-orange lighten-1 white-text">
                        {{__('go.errorType')}}
                    </div>
                    <div class="card-body">
                        <!--Checkbox butons-->
                        <div class="btn-group d-block error_type_buttons" data-toggle="buttons">

                            @foreach ($errorTypes as $errorType)
                            <label  class="btn btn-default mb-1">
                                <input type="radio" name="error_type" value="{{ $errorType->id }}" autocomplete="off"> {{ $errorType->name }}
                            </label>
                            @endforeach

                        </div>
                    </div>
                </div>

                <!-- Message -->
                <div class="card">
                    <div class="card-header deep-orange lighten-1 white-text">
                        <label for="messageOrderMaterial"><i class='fa fa-pencil prefix'></i> {{__('go.message')}}</label>
                    </div>
                    <div class="card-body">
                        <!-- Text area message -->
                        <div class="form-group basic-textarea rounded-corners shadow-textarea message_order_material">
                            <textarea class="form-control h-100 z-depth-1" id="messageOrderMaterial" 
                                      rows="6" placeholder="{{__('go.placeholderDescriptionOrderMaterial')}}"></textarea>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-default waves-effect waves-light" data-dismiss="modal">{{ __('go.close') }}</button>
                <button id="sendBtnOrderMaterial" type="button" class="btn btn-primary waves-effect waves-light">{{ __('go.send') }}</button>
            </div>

        </div>
    </div>
    <!--end Modal: Order material -->  

    <!-- Modal - Validation Error for Modal: Order material  -->
    <div class="modal fade" id="infoDialogOrderMaterial" tabindex="-1" role="dialog" aria-labelledby="Validation Dialog Order Material" aria-hidden="true">
        <div class="modal-dialog modal-notify modal-warning" role="document">
            <!--Content-->
            <div class="modal-content">
                <!--Header-->
                <div class="modal-header">
                    <p class="heading lead">{{ __('go.selAllElements') }}</p>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="white-text">&times;</span>
                    </button>
                </div>

                <!--Body-->
                <div class="modal-body">
                    <div class="text-center">
                        <i class="fa fa-check fa-4x mb-3 animated rotateIn"></i>
                        <div class="card-header">
                            <p>{{ __('go.foundNotSelParams') }}:</p>   
                            <p class="bold text-danger mt-1" id="validationErrorOrderMaterial"></p>
                            </p>
                        </div>
                    </div>

                    <!--Footer-->
                    <div class="modal-footer justify-content-center">
                        <a type="button" id="closeinfoDialogOrderMaterial" class="btn btn-outline-secondary-modal waves-effect">{{ __('go.okThanks') }}</a>
                    </div>
                </div>
                <!--/.Content-->
            </div>
        </div>

        @languageFile(go);
        <script>
            var componentOverview = {!! json_encode($components) !!};
            var zkmComponents = {!! json_encode($zkmComponents) !!};
            var documents = {!! json_encode($documents) !!};
            var maxStatusLength = {{ $maxStatusLength }}; // set width for status field length
            var langAbbreviation = "{{$langAbbreviation}}";
            var maxSeq = {{count($workingSteps)}};
        </script>
        @endsection