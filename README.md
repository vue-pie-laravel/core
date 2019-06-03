# Vue-Cli Boiler Plate for Laravel 5.8+

## About


## Installation

[Install Laravel](https://laravel.com/docs/5.8) 5.8 or higher.

Require the [barryvdh/laravel-cors](https://github.com/barryvdh/laravel-cors) package in your composer.json and update your dependencies:

```sh
$ composer require barryvdh/laravel-cors
```

Add the `HandleCors` middleware to the top of the `$middleware` property in `app/Http/Kernel.php` class:

```php
protected $middleware = [
    \Barryvdh\Cors\HandleCors::class,
    // ...
];
```
[Download](https://github.com/laracli/core/archive/master.zip) and upack this source code over your new Laravel installation.

```sh
$ yarn install
```

Choose a ui package and follow packages instructions:

[UI Tailwaind](https://github.com/laracli/ui-tailwind)

[UI Vuetify](https://github.com/laracli/ui-vuetify)
