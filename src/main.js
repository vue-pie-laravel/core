import '@/scss/app.scss'

/**
 * Import Vue.
 * https://vuejs.org/
 */

import Vue from 'vue'

/**
 * Import application configuration data.
 */
import { config } from './config'

/**
 * Import routes.
 */
import router from './router'

/**
 * Import vuex store.
 */
import store from './store'

/**
 * Import plugins.
 */
import './plugins'

/**
 * Import layouts
 */
import './layouts'

/**
 * Import components.
 */
import './components'

/**
 * Import App bootstrapper.
 */
import App from './App'

/**
 * Import Vuex mappers.
 */

import { mapState, mapGetters } from 'vuex'

Vue.config.productionTip = false

Vue.mixin({

  computed: {

    ...mapGetters(['isInitializing', 'hasException']),
    ...mapState(['isMaintenanceMode', 'isOffline']),

    ...mapGetters('User', ['isAuthenticated']),
    ...mapState('User', ['user', 'isAuthenticating']),

    ...mapState('Laravel', ['language', 'languages', 'attributes']),

    isBusy () {
      return this.$root.busy > 0
    }

  }

})

/**
 * Initialize Vue App Instance.
 *
 * @type {Vue | any}
 */
window.App = new Vue({

  render: h => h(App),
  store,
  router,

  data: () => ({

    busy: 0,
    snackbar: {
      display: false,
      props: {},
      text: ''
    }

  }),

  computed: {

    layout () {
      if (this.isMaintenanceMode) {
        return 'layout-status-maintenance'
      }

      if (this.hasException) {
        return 'layout-status-exception'
      }

      if (this.isOffline) {
        return 'layout-status-offline'
      }

      if (this.isInitializing) {
        return 'layout-status-initializing'
      }

      if (this.isAuthenticating) {
        return 'layout-status-authenticating'
      }

      let layout = this.$route.meta.layout || 'default'

      return `layout-${layout}`
    }

  },

  watch: {

    isInitializing (value) {
      this.$emit('app:initializing', value)

      if (!value) {
        this.$emit('app:initialized')
      }
    },

    isAuthenticating (value) {
      this.$emit('app:authenticating', value)
    },

    isAuthenticated (value) {
      this.$emit('app:authenticated', value)
    }

  },

  mounted () {
    const vm = this
    // Relay Names Socket Emitted events to Vue Events
    vm.$Echo.channel('Global').listen('PublicEventEmitter', event => {
      console.log('PublicEventEmitter', event)
      vm.$emit(event.name, event.payload)
    })
  }

}).$mount(config.mountAppTo)
