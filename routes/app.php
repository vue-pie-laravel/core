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


Auth::Routes();

Route::get('/options', 'ApplicationController@options')->name('options');

Route::middleware('auth')->group(function() {

  Route::get('/user', 'ApplicationController@user')->name('user');

});


/*********************************************
 * Do not place custom routes after this line.
 *
 * Directs all other requests to Vue Router.
 *********************************************/

Route::get('{vue?}', 'ApplicationController@index')->where('vue', '.*')->name('index');
