<?php

namespace App\Http\Controllers\Error;

/**
 * Description of ErrorController
 *
 */
class ErrorController {
    
    /**
     * Return view for NotAuthorized error.
     *
     * @return 'resources/views/error/not-authorized.blade.php'
     */
    public function notAuthorized()
    {
       return  view ('error.not-authorized');
    }   
    
}
