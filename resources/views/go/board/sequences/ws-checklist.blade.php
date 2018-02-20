<!--
 *
 * Display sub-tab resources/views/go/board/operation-overview-right/checklist.blade.php in the tab resources/views/go/board/component-overview.blade.php for view page resources/views/go/board/index.blade.php 
 *
 * Content for sub-tab is generated in the public/js/go/operationController.js by the click on the working step
 *
-->
    <div id="checkList" class="checkListDisabled">
        <div id="checklist-target{{$key}}" data-sequence="{{$key}}" data-operation-id="{{$workingSteps[$key][0]->prodorder_operations_id}}" class="col-lg-12">
            @include('admin.checklist.frame')
        </div>
    </div>
    

    <div class="checkListText">
        
    </div>

<div id="output">
</div>


