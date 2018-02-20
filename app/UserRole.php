<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Http\Request;


class UserRole extends Model {

  protected $fillable = ['name', 'slug'];

  /**
   * A role belongs to many users.
   *
   * @return BelongsToMany
   */
  public function users() : BelongsToMany
  {
      return $this->belongsToMany("\App\User", "user_role_user", 'role_id', 'user_id');
  }


  /**
   * A role belongs to many permissions.
   *
   * @return BelongsToMany
   */
  public function permissions() : BelongsToMany
  {
      return $this->belongsToMany("\App\UserPermission", "user_role_permission", 'role_id', 'permission_id');
  }


  /**
   * Check user has permission.
   *
   * @param $permission
   *
   * @return bool
   */
  public function can(string $permission) : bool
  {
      return $this->permissions()->where('slug', $permission)->exists();
  }

  /**
   * Check user has no permission.
   *
   * @param $permission
   *
   * @return bool
   */
  public function cannot(string $permission) : bool
  {
      return !$this->can($permission);
  }

  /**
   * Detach models from the relationship.
   *
   * @return void
   */
  protected static function boot()
  {
      parent::boot();

      static::deleting(function ($model) {
          $model->administrators()->detach();
          $model->permissions()->detach();
      });
  }


}
