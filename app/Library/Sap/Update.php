<?php

namespace App\Library\Sap;

use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class Update {

    protected $data;
    private $validator;
    private $content;
    private $statusCode;

    protected function __construct($data, $rules) {
        $this->data = $data;
        $this->validator = Validator::make($data, $rules);
        $this->content = 'Data successfully received';
        $this->statusCode = Response::HTTP_OK;
    }

    protected function validate() {
        return $this->validator->passes() || $this->setValidationFailure($this->validator->messages());
    }

    private function setValidationFailure($errorDetails) {
        $this->setHttpResponse('Validation failed', $errorDetails, Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    protected function setInternalServerError($errorDetails) {
        $this->setHttpResponse('Internal server error', $errorDetails, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * Get http response after data validation and updating
     * 
     * @return Response
     */
    public function getHttpResponse() {
        return new Response($this->content, $this->statusCode);
    }

    private function setHttpResponse($errorMessage, $errorDetails, $statusCode) {
        $this->content = ['Message' => $errorMessage, 'Errors' => $errorDetails];
        $this->statusCode = $statusCode;
    }

}
