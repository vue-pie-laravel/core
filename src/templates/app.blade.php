<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">
  <link rel="shortcut icon" href="/favicon.png" type="image/png">

  <title>@yield('title', config('app.name'))</title>

  @stack('scripts')

  @stack('styles')

  <style type="text/css">

    html, body {
      margin: 0;
      padding: 0;
    }

    .app-downloading {
      display: none;
    }

    .app-downloading > span {
      margin-bottom: 28px;
      letter-spacing: 7px;
      padding-left: 4px;
    }

    [v-cloak] > .app-downloading {

      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      align-items: center;
      justify-content: center;
      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;

      color: white;
      background: #00beff;
      background-image: url(/images/splash-background.svg);
      background-image: url(/images/splash-background.svg), linear-gradient(135deg, #00beff 0%, #b8009b 50%);
      background-repeat: no-repeat;
      background-position: left center;
      background-size: cover;

    }

  </style>

</head>
<body>
<div id="app" v-cloak>
  <div class="app-downloading">
    <span>DOWNLOADING</span>
    <img src="/assets/images/loading.svg" width="105"/>
  </div>
</div>
</body>
</html>
