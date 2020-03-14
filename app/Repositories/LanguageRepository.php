<?php

namespace App\Repositories;

use Illuminate\Support\Facades\Cache;

class LanguageRepository
{

  /**
   * @return mixed
   */
  public static function Languages()
  {

    return Cache::remember('app.repository.languages', 86400, function () {

      return array_values(array_diff(scandir(resource_path('lang')), ['..', '.']));

    });

  }

  /**
   * @return string
   */
  public static function Language()
  {
    return app()->getLocale();
  }

  /**
   * Returns list of available translations for users locale.
   *
   * @return array
   */
  public static function Translations()
  {
    $language = self::Language();

    return Cache::rememberForever('app.repository.available.translations' . $language, function () use ($language) {

      $files = glob(resource_path('lang/' . $language . '/*.php'));
      $strings = [];

      foreach ($files as $file) {
        $name = basename($file, '.php');
        $strings[$name] = require $file;
      }

      $additional = resource_path('lang/' . $language . '.json');

      if (file_exists($additional)) {

        $strings = array_merge(json_decode(file_get_contents($additional), true), $strings);

      }

      return $strings;

    });

  }

}
