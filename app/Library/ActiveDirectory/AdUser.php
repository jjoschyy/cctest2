<?php

namespace App\Library\ActiveDirectory;
use Adldap\Laravel\Facades\Adldap;

class AdUser {

  /**
   * Check if AD user exists
   */
  public static function exists($userCn){
      return self::find($userCn) !== null;
  }

  /**
   * Check if AD user missing
   */
  public static function missing($userCn){
      return !self::exists($userCn);
  }

  /**
   * Find user in AD. CN or eMail supported
   */
  public static function find($userCn){
      return Adldap::search()->users()->find($userCn);
  }

  /**
   * Try AD authentication (username+password)
   */
  public static function auth($username, $password){
      $userDn = $username . '@zeiss.com';
      return Adldap::auth()->attempt($userDn, $password);
  }


}
