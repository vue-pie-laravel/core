<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * @deprecated
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * @inheritdoc
     */
    public final function showLoginForm() {

        return view('layouts.app');

    }

    /**
     * @inheritdoc
     */
    public final function authenticated(Request $request, $user)
    {
        return response()->json([
            'user' => $user,
            'redirect' => session()->pull('url.intended')
        ]);
    }

    /**
     * @inheritdoc
     */
    public final function logout(Request $request)
    {
        $this->guard()->logout();

        $request->session()->invalidate();

        return response('Logged out',200);
    }
}
