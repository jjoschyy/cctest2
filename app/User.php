<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use App\Library\ActiveDirectory\AdUser;


class User extends Model implements AuthenticatableContract {
    use Authenticatable;

    /**
     * A user has and belongs to many roles.
     *
     * @return BelongsToMany
     */
    public function location() : BelongsTo
    {
        return $this->belongsTo('App\Location');
    }

    /**
     * Name of location
     *
     * @return String
     */
    public function locationName() {
         return $this->location()->name;
     }

    /**
     * A user has and belongs to many roles.
     *
     * @return BelongsToMany
     */
    public function roles() : BelongsToMany
    {
        return $this->belongsToMany("App\UserRole", "user_role_user", 'user_id', 'role_id');
    }

    /**
     * Get all permissions of user.
     *
     * @return mixed
     */
    public function permissions() : Collection
    {
        return $this->roles()->with('permissions')->get()->pluck('permissions')->flatten();
    }

    /**
     * Check if user has permission by slug
     *
     * @param $permission
     *
     * @return bool
     */
    public function can(string $slug) : bool
    {
        if ($this->isAdministrator()) {
            return true;
        }

        if ($this->permissions()->pluck('slug')->contains($slug)) {
            return true;
        }

        return false;
    }

    /**
     * Check if user has no permission.
     *
     * @param $permission
     *
     * @return bool
     */
    public function cannot(string $slug) : bool
    {
        return !$this->can($slug);
    }

    /**
     * Check if user is administrator.
     *
     * @return mixed
     */
    public function isAdministrator() : bool
    {
        return $this->is_admin;
    }

    /**
     * Return all user assigned operations
     *
     * @return Array
     */
    public function prodorderOperations() {
        return $this->hasMany(ProdorderOperation::class);
    }

    /**
     * Return all user assigned timesheets
     *
     * @return Array
     */
    public function timesheets() {
        return $this->hasMany(Timesheet::class);
    }

    /**
     * Return user assigned language
     *
     * @return Language
     */
    public function language() {
        return $this->belongsTo(Language::class);
    }

    /**
     * Return full user name
     *
     * @return String
     */
    public function fullName() {
        return $this->first_name . " " . $this->last_name;
    }

    /**
     * Search AD-User of user and sync its properties
     *
     * @return void
     */
    public function syncAdProperties(){
        $user = AdUser::find($this->username);
        $this->username = strtoupper($this->username);
        $this->first_name = $user->givenname[0];
        $this->last_name = $user->sn[0];
        $this->phone = $user->telephonenumber[0];
        $this->mobile = $user->mobile[0];
        $this->email = $user->mail[0];
        $this->office = $user->physicaldeliveryofficename[0];
        $this->save();
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
            $model->roles()->detach();
        });
    }

}
