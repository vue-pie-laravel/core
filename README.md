# Vue-Cli Boiler Plate for building an SPA with Laravel 7.0+

### CORE IS IN DEVELOPMENT ###

> Some file that are critical to the funcionality of this source are still being worked on and will be added soon.

## About

**Project Status** : `Alpha` ( Concept Limbo )
> Seeking development use case adaptation feedback.
>
> Join the Discord channel: https://discord.gg/sfwEEbh

The aim of this project is to provide developers a compatible [Vue CLI](https://cli.vuejs.org) configuration to build a Vue Single Page Application (SPA) instead of using [Laravel Mix](https://laravel.com/docs/master/mix).
Laravel Mix can still be used to compile standalone assets for static pages allowing for a SPA & Static site hybrid.

This gives you the option of utilizing different flavours of content delivery so you can use the best of each solution to better serve the needs of each aspect of your project.
For example, you can build a normal shop front or blog with `static` or `dynamic` content rendered server side yet have a dedicated SPA for your admin area using the all the benefits that come with `Vue Cli`

Default setup is focused on Same Domain Applications (SDA) for UI backend services but can be adopted for other use cases.
The benefit and intention is to migrate UI rendering and logic costs away from the server & over to to the client saving $£€ on hosting costs by reducing the servers role down to just serving a lightweight REST service.

By popular request, the main focus of this project is on supporting JSON REST services driven by standard session based http requests for an SDA, keeping the API area of Laravel free for use with external applications that have separate functionality for the same data set.

## Important
> The project is made up of multiple repositories that make up a 3 part system (**CORE**, **UI**, **AUTH**) with multiple options.
>
> You can simply use the examples as just code based guide for creating your own configurations.

### CORE

Is the base that configures a blank working environment with Vue Standard Tooling and basic Laravel compatibility.
Provides data exposers for Routes, Translations, CSRF Token and Authenticated User.

### UI

Various get me started configurations for popular UI Frontend Frameworks.

### AUTH

Various UI authentication examples.

## Prerequisites

> Recommend using **yarn** as preference instead of **npm** when installing any Node based packages.

Make sure you have installed the following resources in the listed order:

1) [NodeJS 10+](https://nodejs.org)

2) [Yarn](https://yarnpkg.com/en/docs/instal)

3) [Vue CLI](https://cli.vuejs.org/guide/installation.html)

## Installation

[Install Laravel](https://laravel.com/docs/7.x) 7.0 or higher.

[Download](https://github.com/laracli/core/archive/master.zip) and unpack this source code over your new Laravel installation.

Choose one of the following ui packages and follow the instructions for your chosen package to complete setup:

> You may also stop here and use just the laracli\core as an empty boilerplate to build a completely bespoke SPA.

[UI Tailwind](https://github.com/laracli/ui-tailwind)

[UI Vuetify](https://github.com/laracli/ui-vuetify)

You are now all set.

# FAQ

### CSRF TOKEN

> How is the csrf_token() handled, I dont see it in the blade template?

The CSRF token has been elevated to the response header and is now handled passively in a similar manor as an XSRF-TOKEN.

The token is automatically sent with every `axios` POST request, **no** need to manually handle the token... **no** hidden form field, **no** csrfToken post property required.

An Axios response interceptor detects the token and automatically sets it in your SPA, the token can be accessed using these variable references: `window.Laravel.csrfToken` or `this.$root.csrfToken` in a Vue component.

Token exchange is Sparse, meaning it is only sent when needed, typically this is when a guest becomes an authed user visa versa, or the token is revoked. You will not see the token in every header response or request.

If you are using **SOCKETS**, Out of the box compatibility is supported with [Laravel Echo](https://github.com/laravel/echo) without extra configuration.

In conclusion, You should never have to think about the CSRF Token ever again.
