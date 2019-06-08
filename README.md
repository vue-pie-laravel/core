# Vue-Cli Boiler Plate for building an SPA with Laravel 5.8+

## About

**Project Status** : `Alpha` ( Concept Limbo )
Seeking development use case adaption feedback.
Join the Discord channel: https://discord.gg/sfwEEbh

The aim of this project is to provide developers with a Standard Tooling configuration for [Vue CLI](https://cli.vuejs.org) to replace [Laravel Mix](https://laravel.com/docs/5.8/mix) and provide compatability between Laravel and a Single Page Application (SPA).

Default setup is focused on Same Domain Applications (SDA) for UI backend services but can be adopted for other use cases.
The benefit and intention is to move view rendering costs from the server to the client to save you $£€ by only serving a lightweight JSON REST service.

By popular request, first focus is on JSON REST services driven by standard session based http requests for an SDA, keeping the API area of Laravel free for use with external applications that have seperate functionality but for the same data set.

Basic Token Atuh, OAuth, OpenID, JWT etc will be secondary support for advanced users.

The project is made up of multiple repositories that make up a 3 part system (**CORE**, **UI**, **AUTH**) with multiple options.
You can simple use the examples as just mere code based guides for creating your own configurations.

**CORE**
Is the base that configures a blank working environment with Vue Standard Tooling and basic Laravel compatability.
Provides data exposers for Routes, Translations, CSRF Token and Authed User.

**UI**
Various get me started configurations for popular UI Frontend Frameworks.

**AUTH**
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
