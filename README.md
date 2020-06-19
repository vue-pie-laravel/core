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

---

## Quick Start

Once you have completed the installation steps you can quickly get up and running:

> Vue CLI will by default run on port `8000`, Ensure that when serving Laravel to use port `8001`

1) Run a terminal with `php artisan serve --port 8001`

2) Run a second terminal with `vue-cli-service serve` or run `cli-serve` via the [VUE CLI Tool](https://cli.vuejs.org/).

#### Quick Mockup Database
To use an `sqlite` database for fast mockup development:

1) Edit `.env` find and change `DB_CONNECTION` to  `DB_CONNECTION=sqlite`.

2) Create empty file `/database/database.sqlite`

3) Run `php artisan migrate`

4) To create a test user see [Database: Seeding](https://laravel.com/docs/7.x/seeding)

---

## How to configure what is served first, SPA or SSC?

> How to serve index as SPA (Single Page Application)?

In `.env` file, either remove `VUE_APP_PATH` config or ensure value is empty.

> How to serve index as SSC (Server Side Content) and SPA on a sub path?

In `.env` file set `VUE_APP_PATH` with the path name you want, `VUE_APP_PATH=admin` will make the SPA load at `http(s):yourdomain.com/admin` and root (`/`) will serve static server side rendered Blade content from Laravel.

# Using Laravel Web Sockets (Self Hosted)

Run the following commands in the project root:

`yarn add laravel-echo`

`yarn add pusher-js`

`composer require beyondcode/laravel-websockets`

`composer require pusher/pusher-php-server`

`php artisan vendor:publish --provider="BeyondCode\LaravelWebSockets\WebSocketsServiceProvider" --tag="config"`

Apply example configs found in `.env.sockets-example` to your `.env` config.

Edit `config/brodcasting.php` and modify the default `pusher` entry in `connections` to the following:

```
    'pusher' => [
        'driver' => 'pusher',
        'key' => env('PUSHER_APP_KEY'),
        'secret' => env('PUSHER_APP_SECRET'),
        'app_id' => env('PUSHER_APP_ID'),
        'options' => [
            'cluster' => env('PUSHER_APP_CLUSTER'),
            'useTLS' => false,
            'host' => env('LARAVEL_WEBSOCKETS_HOST'),
            'port' => env('LARAVEL_WEBSOCKETS_PORT'),
            'scheme' => 'http'
        ],
    ],

```

> **NOTE:** Encryption disabled by default for development.
> If required, ensure encryption has been configured for production.

#### Stats
To enable socket stats, edit `websockets.php` and set `enable_statistics` to true.

Publish the stats migration script.
`php artisan vendor:publish --provider="BeyondCode\LaravelWebSockets\WebSocketsServiceProvider" --tag="migrations"`

Run migrate to create the stats table.
`php artisan migrate`

# FAQ

### SPA Routes

#### Where are the Apps Laravel Router endpoints?
SPA endpoint routes can be configured in `/routes/app.php`

#### Where are the Apps Vue Router configured?
Client Router paths configured in `/src/router/config/routes.js`

#### Where are the Apps Vue Router Navigation Guards configured?
Client Router Guards configured in `/src/router/config/guards/js`

#### CSRF TOKEN

> How is the csrf_token() handled, I don't see it in the blade template?

The CSRF token has been elevated to the response header and is now handled passively in a similar manor as an XSRF-TOKEN.

Token sent passively with every `axios` POST request... **no** hidden form field & **no** `csrfToken` post property required.

An `axios` response interceptor detects the token and automatically sets it, the token can be accessed from VUEX `store.state.csrfToken`.
