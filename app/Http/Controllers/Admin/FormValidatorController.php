<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

/**
 * Description of FormValidatorController
 */
class FormValidatorController extends Controller {
    
    const UNIQUE_USER = 0;
    
    /**
     * Check if name in the table 'users' is unique
     *
     * @return $isNameUnique boolean
     */
    public function checkForm(Request $request)
    {
        $type = $request->type;
        $areAllUnique = $this->isNameUnique($request->name) && $this->isEmailUnique($request->email) && $this->isEmployeeNumberUnique($request->employee_number);
        if($areAllUnique)
        {
            $checkForm = array('allUnique' => 1);
            return $checkForm;
        }
        else
        {
            switch ($type) {
            
                case self::UNIQUE_USER:
                    $checkForm = ['allUnique' => 0,
                                'name' => $this->isNameUnique($request->name),
                                'email' => $this->isEmailUnique($request->email),
                                'employee_number' => $this->isEmployeeNumberUnique($request->employee_number)];
                    break;
                default: //
            }
            return $checkForm;
        }
    }
    
    /**
     * Check if name in the table 'users' is unique
     *
     * @return $isNameUnique boolean
     */
    public function isNameUnique(string $userName)
    {
        $isNameUnique = !User::select()->where('name', '=', $userName)->exists();
        return $isNameUnique ;
    }
    
    /**
     * Check if email in the table 'users' is unique
     *
     * @return $isEmailUnique boolean
     */
    public function isEmailUnique(string $userEmail)
    {
        $isEmailUnique = !User::select()->where('email', '=', $userEmail)->exists();
        return $isEmailUnique ;
    }
    
    /**
     * Check if employee_number in the table 'users' is unique
     *
     * @return $isEmployeeNumberUnique boolean
     */
    public function isEmployeeNumberUnique(string $employeeNumber)
    {
        $isEmployeeNumberUnique = !User::select()->where('employee_number', '=', $employeeNumber)->exists();
        return $isEmployeeNumberUnique ;
    }
}
