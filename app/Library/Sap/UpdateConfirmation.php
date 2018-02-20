<?php

namespace App\Library\Sap;

use App\Library\Sap\Update;
use App\Http\Requests\Sap\Confirmation;
use Illuminate\Support\Facades\DB;

class UpdateConfirmation extends Update {

    const STATUS = \App\ProdorderStatus::FINISHED;

    public function __construct($data) {
        parent::__construct($data, Confirmation::rules());
    }

    /**
     * Start validation and saving of incoming sap confirmation data
     */
    public function process() {
        $this->validate() && $this->update();
    }

    private function update() {
        DB::beginTransaction();
        try {
            $this->updateConfirmation();
            DB::commit();
        } catch (\Exception $ex) {
            DB::rollBack();
            $this->setInternalServerError($ex->getMessage());
        }
    }

    private function updateConfirmation() {
        $operation = \App\ProdorderOperation::firstOrNew(['completion_confirmation_number' => $this->data['Order_Confirmation']['ConfirmationNumber']]);
        $operation->exists && $this->associate($operation);
    }

    private function associate($operation) {
        $operation->prodorderStatuses()->syncWithoutDetaching(self::STATUS);
        $operation->prodorderStatuses()->updateExistingPivot(self::STATUS, ['updated_at' => now()]);
    }

}
