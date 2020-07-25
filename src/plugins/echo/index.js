import Echo from 'laravel-echo'
window.Pusher = require('pusher-js')

export default {

  install: (Vue) => {
    const LaravelEcho = new Echo({
      broadcaster: 'pusher',
      key: process.env.VUE_APP_PUSHER_KEY,
      // encrypted: true,
      wsHost: window.location.hostname,
      wsPort: 80,
      wssPort: 443,
      enabledTransports: ['ws', 'wss'],
      disableStats: true
      // stats_host: 'stats.pusher.com'
    })

    // LaravelEcho.connector.pusher.config.authEndpoint = ''

    // LaravelEcho.connector.pusher.bind('connecting', event => {
    //   console.log('Socket connecting', event)
    // })
    //
    // LaravelEcho.connector.pusher.bind('connected', () => {
    //   console.log('Socket connected')
    // })
    //
    // LaravelEcho.connector.pusher.bind('unavailable', event => {
    //   console.log('Socket unavailable', event)
    // })
    //
    // LaravelEcho.connector.pusher.bind('failed', event => {
    //   console.log('Socket failed', event)
    // })
    //
    // LaravelEcho.connector.pusher.bind('disconnected', () => {
    //   console.log('Socket disconnected', event)
    // })
    //
    // LaravelEcho.connector.pusher.bind('error', error => {
    //   console.error('Socket error', error)
    // })

    Vue.prototype.$Echo = LaravelEcho
    Vue.Echo = LaravelEcho
  }

}
