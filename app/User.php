<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Returns list of available routes.
     *
     * @return array
     */
    public static final function Routes ()
    {
        $routes = Cache::rememberForever('app.routes', function () {

            $routes = [];

            foreach(Route::getRoutes()->getIterator() AS $route)
            {
                $name = $route->getName();

                if(empty($name))
                    continue;

                array_push($routes,[
                    'name' => $name,
                    'uri' => $route->uri
                ]);

            };

            return $routes;

        });

        return $routes;

    }

    /**
     * Returns list of available translations for users locale.
     *
     * @return array
     */
    public static final function Language()
    {
        $lang = config('app.locale');

        $strings = Cache::rememberForever('app.languages' . $lang, function () use ($lang) {

            $files = glob(resource_path('lang/' . $lang . '/*.php'));
            $strings = [];

            foreach ($files as $file) {
                $name = basename($file, '.php');
                $strings[$name] = require $file;
            }

            return $strings;

        });

        return $strings;

    }
}
