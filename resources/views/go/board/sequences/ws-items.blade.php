<table id="workingStepOperation_{{$key}}" ref="{{$key}}" class="workingStepsOperations table table-bordered table-hover" style="display: none;">
    @foreach ($workingSteps[$key] as $workingStep)
    <tr>
        <td id="ws_{{ $workingStep->prodorder_operations_id}}" ref="{{ $workingStep->prodorder_operations_id}}" class="navSteps td_link" style="border-bottom: 4px solid  {{$workingStep->border}}; background-color: {{$workingStep->background}};color:{{$workingStep->font}};">
            <div class="working_step_short_text">{{ $workingStep->operation_short_text }}</div>
            <div class="workingSteps">
                <span data-parallelSequence="0" data-statusId="{{ $workingStep->prodorder_status_id }}" class="btnStatus">
                    {{ $workingStep->getTitleText() }}
                </span>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: {{$workingStep->percent_completed}}%" aria-valuenow="{{$workingStep->percent_completed}}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>                                    
            </div>                                

        </td>
    </tr>
    @endforeach
</table>