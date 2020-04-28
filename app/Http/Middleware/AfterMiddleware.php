<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AfterMiddleware
{
  /**
   * Handle an incoming request.
   *
   * @param Request $request
   * @param Closure $next
   * @return mixed
   */
  public function handle(Request $request, Closure $next)
  {
    $handle = $next($request);

    # Handle headers for HTTP requests only
    if (method_exists($handle, 'header')) {

      # Available Methods: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE

      # Set headers for requests excluding listed methods
      if(!in_array($request->getMethod(), ['OPTIONS'])) {

        $handle->header('X-CSRF-TOKEN', csrf_token());

      }

    }

    return $handle;
  }
}
