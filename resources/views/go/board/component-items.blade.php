
<div class="row allComponents">
    <div class="col-md-9">
        <div class="form-inline active-cyan-2 mt-3">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input search-for="tableComponentOverview" class="filterInput form-control w-75 ml-3" type="text" placeholder="Search" aria-label="Search">
        </div>        
    </div>
    <div class="col-md-3 pt-3 mb-3">
        <a class="btn btn-info float-right orderMaterialBtn" data-toggle="modal" data-target="#modalOrderMaterial" href="#">{{__('go.noMaterialButton')}}</a>
    </div>
    <div class="col-md-12">
        <div class="table-responsive">
            <table id="tableComponentOverview" class="tableComponentOverview table table-bordered table-hover table-striped">
                @foreach ($components as $component)
                <tr id="c_row_{{$component->productMaterialId }}_{{$component->productWorkingstepId}}">
                    <td>{{ $component->requiredQuantity }} {{ $component->requiredQuantityUnit }}</td>
                    <td>{{ $component->material }}</td>
                    <td>{{ $component->contentData }}</td>
                    <td class="buttonsMissingPart text-center">
                        @if ($component->productListStatusId == 3)
                        <button id="c_{{$component->productMaterialId }}_{{$component->productWorkingstepId}}"
                                disabled type="button" class="btn btn-md btn-success">Completed</button>
                        @elseif ($component->missing == 0)
                        <button id="c_{{$component->productMaterialId }}_{{$component->productWorkingstepId}}"
                                type="button" class="btn btn-md btnMissingPart btn-primary reportMissingPart">{{ __('go.repMissingPart') }}</button>
                        @else
                        <button id="c_{{$component->productMaterialId }}_{{$component->productWorkingstepId}}"
                                type="button" class="btn btn-md btnMissingPart btn-info reportedMissingPart">{{ __('go.missingPartReported') }}</button>
                        @endif
                    </td>
                </tr>
                @endforeach  
            </table>
        </div>
    </div>
</div>

