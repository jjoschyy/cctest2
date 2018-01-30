<?php

namespace App\ViewModel\Go;

use JsonSerializable;

/**
 * Get output model containing zkm (Customer order) with belonging fauf (Production order).
 * Zkm VievModel was used with original raw sql query.
 * It could be used in case if needed to modify output with additional params or applay attribute mutation
 * if found inconvenient to apply eloquent mutator like in case with join queries.
 * 
 */
class Zkm implements JsonSerializable {

    public $zkmId;
    public $faufId;

    function __construct(int $zkmId, int $faufId) {
        $this->zkmId = $zkmId;
        $this->faufId = $faufId;
    }

    public function jsonSerialize() {
        // Return attributes with mutations applied          
        return [
                'zkmId' => "$this->zkmId",
                'faufId' => "$this->faufId"
        ];
    }

}
