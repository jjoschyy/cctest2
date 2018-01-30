<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Response;
use App\UserGroupAccess;
use App\UserGroupUserRight;
use App\UserRight;
use Illuminate\Support\Facades\Log;

/**
 * Check if logged user has right for current route and module.
 */
class CheckAuthUser {
    
    public function handle($request, Closure $next)
    {
        return $next($request);
        $uri = $request->path();
        Log::info('Middleware check: Sending request:  ' . $uri); 
        if($uri == "/" || $uri == "login" || $uri == "logout")  //  routes for public access
        {
            return $next($request);
        }
        
        if (Auth::user() != null)
        {
            if(Auth::user()->is_admin)
            {
                return $next($request);
            }
            
            $userId = Auth::user()->id;
        }
        else
        {
             return new Response(view('error.not-authorized'));
        }
        
        // var_dump(Route::getCurrentRequest()); die();
        $staticPrefix = Route::getCurrentRequest()->route()->getCompiled()->getStaticPrefix();
        Log::info('Middleware check: Static Prefix:  ' . $staticPrefix);
        
        $fullRouteName = Route::currentRouteName();
        $fullRouteNameParts = explode('.', $fullRouteName);
        $baseRouteName  = array_key_exists(0 , $fullRouteNameParts) ? $fullRouteNameParts[0] : 'MODULE_NOT_EXIST';
        $routeName  = array_key_exists(1 , $fullRouteNameParts) ? $fullRouteNameParts[1] : 'ROUTE_NOT_EXIST';
        
        Log::info('Middleware check: Module name:  ' . $baseRouteName);
        Log::info('Middleware check: Route name:  ' . $routeName);
        Log::info('Middleware check: search URI:  ' . $uri);
        
        // get user groups for which is user authorized
        $userGroupIds = UserGroupAccess::where('user_id', '=', $userId)
                               ->get(['user_group_id']);
        
        // get all user_right_id-s from table 'user_group_user_right' for which user has right to access
        $userRightsIds = UserGroupUserRight::whereIn('user_group_id', $userGroupIds)
                               ->get(['user_right_id']);
         
        // if user has right for current module
        $rightForCurrentModule = UserRight::select()
                                ->whereIn('id', $userRightsIds)
                                ->where('module', '=', $baseRouteName)
                                ->exists();

        // if user has right for current route
        $rightForCurrentRoute = UserRight::select()
                                ->whereIn('id', $userRightsIds)
                                ->where('param_a', 'LIKE', $staticPrefix)
                                ->exists();     
       
        Log::info('Middleware check: rightForCurrentModule:  ' . $rightForCurrentModule);
        Log::info('Middleware check: rightForCurrentRoute:  ' . $rightForCurrentRoute);
        if ($rightForCurrentModule && $rightForCurrentRoute)
        {
            return $next($request);
        }
        else
        {
            Log::error('Middleware check: not-authorized:  ' . $rightForCurrentRoute);
            //return redirect()->action('Error\ErrorController@notAuthorized');
            // https://laravel.io/forum/08-28-2015-is-it-possible-to-return-a-view-from-a-middleware
            // return new Response(view('error.not-authorized'));
            return $next($request);
        }
       
    }
    
}
