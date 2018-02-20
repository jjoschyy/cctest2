@extends ('layouts.app')

@section ('content')
<div class="container-fluid">
    <div class="row">

      <div class="col-lg-8">
          <div class="form-group basic-textarea">
              <label for="exampleFormControlTextarea1" class="font-weight-bold">Insert Longtext:</label>
              <textarea class="form-control p-1" id="longTextArea">
%IT:CB4% Messposition 4 i.o.
Messpos.4.DL max %MW:4DL max:f:-150<4DL max&&4DL max<150% UM/M
Hier text eingeben: %INP:INP1%
%IT2:it2%indented checkbox
MailTo Link: %MAILTO:ragnar.schulze@comlineag.de%
%BTN:Test:DatenSystemExport%


              </textarea>
          </div>

      </div>

      <div class="col-lg-4">
          <button id="validate-btn" type="button" class="btn btn-primary">Validate</button>
          <button id="clear-btn" type="button" class="btn btn-secondary">Clear Longtext</button>
          <div>Checklist Progress</div>
          <div class="progress">
            <div id="checklistProgressBar" class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

    </div>
    <div class="row">
        <div id="checklist-target{{$checklistNumber}}" class="col-lg-12 checklistTest" data-operation-id="{{$checklistNumber}}">
            @include('admin.checklist.frame')
        </div>
    </div>
</div>
@endsection
