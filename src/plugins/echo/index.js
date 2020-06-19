import Echo from 'laravel-echo'
window.Pusher = require('pusher-js')

export default {

  install: (Vue) => {
    const LaravelEcho = new Echo({
      broadcaster: 'pusher',
      key: process.env.VUE_APP_PUSHER_KEY,
      cluster: process.env.VUE_APP_PUSHER_CLUSTER,
      encrypted: process.env.NODE_ENV === 'production',
      wsHost: process.env.VUE_APP_WS_HOST,
      wsPort: process.env.VUE_APP_WS_PORT,
      disableStats: true
      // stats_host: 'stats.pusher.com'
    })

    // Echo.connector.pusher.config.authEndpoint = ''

    // Echo.connector.pusher.bind('connecting', event => {
    //   console.log('Socket connecting', event)
    // })
    //
    // Echo.connector.pusher.bind('connected', () => {
    //   console.log('Socket connected')
    // })
    //
    // Echo.connector.pusher.bind('unavailable', event => {
    //   console.log('Socket unavailable', event)
    // })
    //
    // Echo.connector.pusher.bind('failed', event => {
    //   console.log('Socket failed', event)
    // })
    //
    // Echo.connector.pusher.bind('disconnected', () => {
    //   console.log('Socket disconnected', event)
    // })
    //
    // Echo.connector.pusher.bind('error', error => {
    //   console.error('Socket error', error)
    // })

    Vue.prototype.$Echo = LaravelEcho
    Vue.Echo = LaravelEcho
  }

}
