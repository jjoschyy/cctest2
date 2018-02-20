<div class="row docs">
    <div class="col-md-12">
        <div class="form-inline active-cyan-2 mt-3">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input search-for="table_documents" class="filterInput form-control w-75 ml-3" type="text" placeholder="Search" aria-label="Search">
        </div>                
        <div class="table-responsive">
            <table id="table_documents" class="table_documents table table-bordered table-hover">
                @foreach ($documents as $document)
                <tr id="doc_{{$document->id }}">
                    <td>
                        <a href="{{ $document->link }}">{{ $document->title }}</a>
                    </td>
                </tr>
                @endforeach
            </table>
        </div>
    </div>
</div>