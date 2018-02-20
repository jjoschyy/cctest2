<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Http\Request;

class UserPermission extends Model {

  /**
   * Permission belongs to many roles.
   *
   * @return BelongsToMany
   */
  public function roles() : BelongsToMany
  {
      return $this->belongsToMany('\App\UserRole', 'user_role_permission', 'permission_id', 'role_id');
  }


  /**
   * If request should pass through the current permission.
   *
   * @param Request $request
   *
   * @return bool
   */
  public function shouldPassThrough(Request $request) : bool
  {
      return false;
  }


}
