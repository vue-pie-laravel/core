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

use \Illuminate\Http\Request;
use \Illuminate\Support\Facades\Auth;
use \Illuminate\Support\Facades\Route;

Route::prefix('app')->group(function() {

    Auth::Routes();

    Route::name('app.')->middleware('auth')->group(function() {

        Route::get('/user', function (Request $request) {
            return $request->user();
        })->name('user');

    });

});

/*********************************************
 * Do not place custom routes after this line.
 *
 * Directs all other requests to Vue Router.
 *********************************************/

Route::get('/{vue?}','ApplicationController@index')->where('vue', '.*');