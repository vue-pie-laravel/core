<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class AfterMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Request  $request
     * @param  Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $handle = $next($request);

        if(method_exists($handle, 'header') && $request->header('x-csrf-token', null) !== csrf_token())
            return $handle->header('X-CSRF-TOKEN', csrf_token());

        return $handle;
    }
}
