import './scss/app.scss'

/**
 * Import Vue.
 * https://vuejs.org/
 */

import Vue from 'vue'
Vue.config.productionTip = false;

/**
 * Import Lodash.
 * https://lodash.com/docs
 */

import 'lodash'
Vue.prototype._ = window._;

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

Vue.mixin({

    computed: {

        ...mapState(['user', 'isAuthenticating', 'isAuthenticated', 'isOffline']),

        ...mapGetters(['isInitializing']),

    }

});

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

        loading: 0,
        csrfToken: ''

    }),
    
    computed: {

        isLoading() {

            return this.loading > 0;

        }

    },

    watch: {

        isInitializing(value) {

            this.$emit('app:initializing', value);

            if (!value) {

                this.$emit('app:initialized');

            }


        },

        isAuthenticating(value) {

            this.$emit('app:authenticating', value);

        },

        isAuthenticated(value) {

            this.$emit('app:authenticated', value);

        }

    }

}).$mount(config.mountAppTo);
