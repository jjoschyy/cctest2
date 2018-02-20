<div class="accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
    <div class="card mb-2">
        <div class="card-header grey lighten-2" role="tab" id="headingOne">
            <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <h5 class="mb-0 black-text">
                    {{$product->productSubTypeTitle()}}<i class="fa fa-angle-down"></i>
                </h5>
            </a>
        </div>
        <div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne">
            <div class="card-body grey lighten-4 border border-dark p-0">
                <table class="table table-striped">
                    <tr>
                        <td>{{__('go.customerOrder')}}</td>
                        <td>{{$product->salesorder->salesorder_number}}</td>
                    </tr>
                    <tr>
                        <td>{{__('go.productionOrder')}}</td>
                        <td>{{$product->prodorder_number}}</td>
                    </tr>
                    <tr>
                        <td>{{__('go.serialnumber')}}</td>
                        <td>{{$product->serialNumber()}}</td>
                    </tr>
                    <tr>
                        <td>{{__('go.station')}}</td>
                        <td>{{$product->prodlineStallTitle()}}</td>
                    </tr>
                    <tr>
                        <td>{{__('go.productionline')}}</td>
                        <td>{{$product->prodlineTitle()}}</td>
                    </tr>                            
                </table>
            </div>
        </div>
    </div>
</div>      