# Vue-Cli Boiler Plate for building an SPA with Laravel 7.0+

# !!! CORE IS IN DEVELOPMENT !!!

> Some file that are critical to the funcionality of this source are still being worked on and will be added soon.

## About

**Project Status** : `Alpha` ( Concept Limbo )
> Seeking development use case adaptation feedback.
>
> Join the Discord channel: https://discord.gg/sfwEEbh

The aim of this project is to provide developers a compatible [Vue CLI](https://cli.vuejs.org) configuration to build a Vue Single Page Application (SPA) instead of using [Laravel Mix](https://laravel.com/docs/master/mix).
Laravel Mix can still be used to compile standalone assets for static pages allowing for a SPA & SSR hybrid.

This gives you the option of utilizing different flavours of content delivery, you can use the best of each solution to better serve the needs of each aspect of your project.
For example, you can build a normal shop front or blog with `static` or `dynamic` content rendered server side yet have a dedicated SPA for your admin area using the all the benefits that come with `Vue Cli`

Default setup focuses on Same Domain Applications (SDA) for UI backend services but can be adopted for other use cases.
The benefit and intention is to migrate UI rendering and logic costs away from the server & over to the client saving $£€ on hosting costs by reducing the servers role down to just serving a lightweight REST service.

By popular request, the focus of this project is on supporting JSON REST services driven using a standard cookie session based http request for an SDA, keeping the API area of Laravel free for use with external applications that have separate functionality for the same data set or 3rd Party integration.

## Important
> The project consists of multiple repositories to form a 3 part system (**CORE**, **UI**, **AUTH**).
>
> You can use the templates as a code based guide for creating your own configurations.

### CORE

Configures a blank working environment with Vue Standard Tooling and basic Laravel compatibility.
Provides data exposers for Routes, Translations, CSRF Token and Authenticated User.

### UI

Get me started configurations for popular UI Frontend Frameworks.

### AUTH

UI authentication examples.

## Prerequisites

> Recommend using **yarn** as preference instead of **npm** when installing any Node based packages.

Make sure you have installed the following resources in the listed order:

1) [NodeJS 10+](https://nodejs.org)

2) [Yarn](https://yarnpkg.com/en/docs/instal)

3) [Vue CLI](https://cli.vuejs.org/guide/installation.html)

## Installation

1) [Install Laravel](https://laravel.com/docs/7.x) 7.*

2) `composer require laravel/ui` **Don't** follow the packages install instructions, **require only**!

3) [Download](https://github.com/laracli/core/archive/master.zip) then unpack this source code over your new Laravel installation.

4) Edit `app/Http/Middleware/kernel.php`

   1) Add `\App\Http\Middleware\AfterMiddleware::class` to `$middleware` array.
   
   2) Uncomment `\Illuminate\Session\Middleware\AuthenticateSession::class` to enable Cookie Session Auth.

5) Add UI Framework Preset (Optional)

    > You may also stop here and use just the laracli\core as an empty boilerplate to build a completely bespoke SPA or choose a pre-configured UI framework below:

    [UI Tailwind](https://github.com/laracli/ui-tailwind) (WIP)

    [UI Vuetify](https://github.com/laracli/ui-vuetify) (WIP)

6) `yarn install` (recommended) or  `npm install`

7) Import project into VUE CLI and Start coding... :)

## Quick Start

Once you have completed the installation steps you can quickly get up and running:

> Vue CLI will by default run on port `8000`, Ensure that when serving Laravel to use port `8001`

1) Run a terminal with `php artisan serve --port 8001`

2) Run a second terminal with `vue-cli-service serve` or run `cli-serve` via the [VUE CLI Tool](https://cli.vuejs.org/).

# FAQ

### CSRF TOKEN

> How is the csrf_token() handled, I don't see it in the blade template?

The CSRF token has been elevated to the response header and is now handled passively in a similar manor as an XSRF-TOKEN.

Token sent passively with every `axios` POST request... **no** hidden form field & **no** `csrfToken` post property required.

An `axios` response interceptor detects the token and automatically sets it, the token can be accessed from VUEX `store.state.csrfToken`.
