<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Adldap\Laravel\Facades\Adldap;
use Encore\Admin\Auth\Database\Administrator;
use App\Library\ActiveDirectory\AdUser;


class LoginController extends Controller {
    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     */
    protected $redirectTo = '/home';
    /**
     * Create a new controller instance.
     */
    public function __construct() {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Return login page
     */
    public function index(){
        return view('auth.login');
    }

    /**
     * Validate login form
     */
    protected function validateLogin(Request $request){
        $this->validate($request, [
             'username' => 'required|string|regex:/^\w+$/',
             'password' => 'required|string'
         ]);
    }

    /**
     * Execute AD Login
     */
    protected function attemptLogin(Request $request){
        $credentials = $request->only('username', 'password');
        $username  = $credentials['username'];
        $password  = $credentials['password'];
        $userQuery = $this->dbUserQuery($username);

        if ($userQuery->exists() && $this->auth($username, $password)){
           $this->guard()->login($userQuery->first(), true);
           Auth::guard('admin')->login($userQuery->first(), true);
        }
    }

    /**
     * We don't accept logins without an user
     */
    private function dbUserQuery($username){
       return \App\User::where('username', $username);
    }

    /**
     * Execute authentication
    */
    private function auth($username, $password){
       return env('ADLDAP_AUTH_EVERYBODY') || AdUser::auth($username, $password);
    }



}
