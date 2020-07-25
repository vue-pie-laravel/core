<?php

namespace App\Http\Controllers;

use App\Repositories\AppRepository;
use App\Repositories\LanguageRepository;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{

  /**
   * @return \Illuminate\View\View
   */
  public final function index()
  {
    return view('layouts.vue');
  }

  /**
   * Returns application initialization options JSON payload.
   *
   * @param Request $request
   * @return \Illuminate\Contracts\View\Factory|\Illuminate\Http\JsonResponse|\Illuminate\View\View
   */
  public final function options(Request $request)
  {
    if ($request->acceptsJson() || $request->ajax()) {
      return response()->json([
        'user' => $request->user(),
        'routes' => AppRepository::Routes(),
        'translations' => LanguageRepository::Translations(),
        'language' => LanguageRepository::Language(),
        'languages' => LanguageRepository::Languages()
      ]);
    }

    abort(400, 'Invalid request type');
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

    if ($user === null)
      abort(401);

    return $user;
  }

}
