<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    /**
     * Returns HTML markup on static request else return application configuration JSON payload.
     * Returns application initialization data on app boot.
     *
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Http\JsonResponse|\Illuminate\View\View
     */
    public final function index(Request $request)
    {
        if($request->ajax())

            return response()->json([
                'routes' => User::Routes(),
                'translations' => User::Language()
            ]);

        return view('app');
    }

    /**
     * Returns JSON payload for the current authenticated user else returns 401 header if guest.
     *
     * @param Request $request
     * @return mixed
     */
    public final function user(Request $request)
    {
        $user = $request->user();

        if($user === null)
            abort(401);

        return $user;
    }

}
