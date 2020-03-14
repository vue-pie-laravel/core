<?php

namespace App\Repositories;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;

class AppRepository
{

  /**
   * Returns list of available routes.
   *
   * @return array
   */
  public static function Routes()
  {
    return Cache::rememberForever('app.repository.routes', function () {

    $routes = [];

    foreach (Route::getRoutes()->getIterator() AS $route) {
      $name = $route->getName();

      // Remove invalid / duplicate / unusable route names
      if (strpos($name, 'app') !== 0 && empty(str_replace('app.', '', $name)))
        continue;

      array_push($routes, [
        'name' => $name,
        'uri' => $route->uri
      ]);

    };

    return $routes;

    });

  }

}
