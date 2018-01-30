<?php

namespace App\Http\Middleware;

use Closure;

class CheckQueryResult {

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next) {
        \Illuminate\Support\Facades\View::share('QueryResult', \App\Library\QueryResult::getScript($request->session()->get("QueryResult")));
        $request->session()->remove("QueryResult");
        return $next($request);
    }

}
