<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use \Illuminate\Support\Facades\Auth;
use \Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::Routes();

Route::get('/', function () {
  return view('welcome');
})->name('index');

/*
 |--------------------------------------------------------------------------
 | SPA Route
 |--------------------------------------------------------------------------
 |
 | If VUE_APP_PATH is omitted from .env config or has empty value, the welcome
 | route above will be overridden forcing the SPA to be loaded first.
 |
 | Do not want the SPA to be served first?
 | For an admin panel only purposes set VUE_APP_PATH=admin
 | The SPA will only load at yourdomain.com/admin freeing yourdomain.com/
 | to serve server side rendered content.
 |
*/
Route::get('/' . env('VUE_APP_PATH', ''), 'ApplicationController@index');
