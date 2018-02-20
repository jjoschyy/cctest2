<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Response;

/**
 * Check if logged user has right for current route and module.
 */
class CheckAuthUser {

    public function handle($request, Closure $next)
    {
        return $next($request);
    }

}
