@extends ('layouts.app')

@section ('content')
<div class="container py-3">
    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-10 mx-auto">       
                    <div class="card wow fadeIn" data-wow-delay="0.3s">            
                        <div class="form-header blue-gradient mt-2 mb-2">
                            <h4>{{ __('go.selectProductionOrder') }}</h4>
                        </div>            

                        <div class="tab-content card operation_steps">
                            <div class="text-center" id="workingSteps" role="tabpanel">
                                @foreach ($products as $product)
                                <a href='/go/board/{{$product->prodorder_id}}'>
                                    <button type="button" class="btn">
                                        <div class="card" style="width: 340px">            
                                            <div class="card-body text-left black-text lighten-5 grey">
                                                <table class="table table-striped">
                                                    <tr>
                                                        <td class="font-weight-bold">{{__('go.customerOrder')}}</td>
                                                        <td>{{$product->salesorder->salesorder_number}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">{{__('go.productionOrder')}}</td>
                                                        <td>{{$product->prodorder_number}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">{{__('go.serialnumber')}}</td>
                                                        <td>{{$product->serialNumber()}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">{{__('go.station')}}</td>
                                                        <td>{{$product->prodlineStallTitle()}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">{{__('go.machineType')}}</td>
                                                        <td>{{$product->productSubTypeTitle()}}</td>
                                                    </tr>                            
                                                </table>                                                
                                            </div> 
                                    </button>
                                </a>
                                @endforeach 
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection