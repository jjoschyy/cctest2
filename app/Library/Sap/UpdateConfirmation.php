<?php

namespace App\Library\Sap;

use App\Library\Sap\Update;
use App\Http\Requests\Sap\Confirmation;
use Illuminate\Support\Facades\DB;

class UpdateConfirmation extends Update {

    public function __construct($data) {
        parent::__construct($data, Confirmation::rules());
    }

    public function process() {
        $this->validate() && $this->update();
    }

    public function update() {
        DB::beginTransaction();
        try {
            $operation = \App\ProdorderOperation::where('completion_confirmation_number', $this->data['Order_Confirmation']['ConfirmationNumber'])->firstOrFail();
            $operation->statuses()->syncWithoutDetaching(\App\Status::FINISHED);
            $operation->statuses()->updateExistingPivot(\App\Status::FINISHED, ['updated_at' => now()]);
            DB::commit();
        } catch (\Exception $ex) {
            DB::rollBack();
            $this->setInternalServerError($ex->getMessage());
        }
    }

}
