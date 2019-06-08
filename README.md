# Vue-Cli Boiler Plate for building an SPA with Laravel 5.8+

## About

**Project Status** : `Alpha` ( Concept Limbo )
> Seeking development use case adaption feedback.
>
> Join the Discord channel: https://discord.gg/sfwEEbh

The aim of this project is to provide developers with a Standard Tooling configuration for [Vue CLI](https://cli.vuejs.org) to replace [Laravel Mix](https://laravel.com/docs/5.8/mix) and provide compatability between Laravel and a Single Page Application (SPA).

Default setup is focused on Same Domain Applications (SDA) for UI backend services but can be adopted for other use cases.
The benefit and intention is to move view rendering costs from the server to the client to save you $£€ by only serving a lightweight JSON REST service.

By popular request, first focus is on JSON REST services driven by standard session based http requests for an SDA, keeping the API area of Laravel free for use with external applications that have seperate functionality but for the same data set.

Basic Token Atuh, OAuth, OpenID, JWT etc will be secondary support for advanced users.

## Important
> The project is made up of multiple repositories that make up a 3 part system (**CORE**, **UI**, **AUTH**) with multiple options.
>
> You can simple use the examples as just mere code based guides for creating your own configurations.

### CORE

Is the base that configures a blank working environment with Vue Standard Tooling and basic Laravel compatability.
Provides data exposers for Routes, Translations, CSRF Token and Authed User.

### UI

Various get me started configurations for popular UI Frontend Frameworks.

### AUTH

Various UI authentication examples.

## Prerequisites

> Recommend using **yarn** as preference instead of **npm** when installing any Node based packages.

Make sure you have installed the follwing resources in the listed order:

1) [NodeJS 10+](https://nodejs.org)

2) [Yarn](https://yarnpkg.com/en/docs/instal)

3) [Vue CLI](https://cli.vuejs.org/guide/installation.html)

## Installation

[Install Laravel](https://laravel.com/docs/5.8) 5.8 or higher.

Require the [barryvdh/laravel-cors](https://github.com/barryvdh/laravel-cors) package in your composer.json and update your dependencies:

```sh
$ composer require barryvdh/laravel-cors
```

[Download](https://github.com/laracli/core/archive/master.zip) and upack this source code over your new Laravel installation.

Choose one of the following ui packages and follow the instructions for your choosen package to complete setup:

> You may also stop here and use just the laracli\core as an empty boilerplate to build a completely bespoke SPA.

[UI Tailwind](https://github.com/laracli/ui-tailwind)

[UI Vuetify](https://github.com/laracli/ui-vuetify)

You are now all set.

# FAQ

### CSRF TOKEN

> How is the csrf_token() handled, I dont see it in the blade template?

The CSRF token has been elevated to the response header and is now handled passively in a similar mannor as an XSRF-TOKEN.

The token is automatically sent with every `axios` POST request, **no** need to manually handle the token... **no** hidden form field, **no** csrfToken post property required, just ignore it.

An Axios response interceptor detects the token and automatically sets it in your SPA, the token can be accessed using these variable references: `window.Laravel.csrfToken` or `this.$Laravel.csrfToken` in a Vue component. You will also find the `Laravel` object if you explore `Vuex` in the Dev Tools.

Token exchange is Sparse, meaning it is only sent when needed, typically this is when a guest becomes an authed user visa versa, or the token is revoked. You will not see the token in every header response or request.

If you are using **SOCKETS**, Out of the box compatibility is supported with [Laravel Echo](https://github.com/laravel/echo) without extra configuration.

In conclusion, You should never have to think about the CSRF Token ever again.
