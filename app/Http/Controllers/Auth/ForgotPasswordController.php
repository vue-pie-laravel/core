<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;

class ForgotPasswordController extends Controller
{
  /*
  |--------------------------------------------------------------------------
  | Password Reset Controller
  |--------------------------------------------------------------------------
  |
  | This controller is responsible for handling password reset emails and
  | includes a trait which assists in sending these notifications from
  | your application to your users. Feel free to explore this trait.
  |
  */

  use SendsPasswordResetEmails;

  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
    parent::__construct();
    $this->middleware('guest');
  }

  public final function index(Request $request)
  {
    if ($request->acceptsJson() || $request->ajax())
      return abort(422, 'This endpoint does not support this request type');

    return view('layouts.app');
  }

  /**
   * Get the response for a successful password reset link.
   *
   * @param Request $request
   * @param $response
   * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
   */
  protected function sendResetLinkResponse(Request $request, $response)
  {
    return response(['message' => trans($response)]);
  }

  /**
   * Get the response for a failed password reset link.
   *
   * @param Request $request
   * @param $response
   * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
   */
  protected function sendResetLinkFailedResponse(Request $request, $response)
  {
    return response(['message' => trans($response)]);
  }

}
