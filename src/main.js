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
 * Import plugins
 */
import './plugins'

/**
 * Import global components.
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
    
    mounted() {

        this.$emit('mounted');

    },
    
    computed: {

        ...mapState(['user', 'isAuthenticating', 'isAuthenticated', 'isOffline']),

        ...mapGetters(['isInitializing']),

        isLoading() {

            return this.loading > 0;

        }

    },

    watch: {

        isInitializing(value) {

            this.$emit('isInitializing', value);

            if (!value) {

                this.$emit('initialized', this);

            }


        },

        isAuthenticating(value) {

            this.$emit('isAuthenticating', value);

        },

        isAuthenticated(value) {

            this.$emit('isAuthenticated', value);

            if (value) {

                this.$emit('authenticated', this);

            }

        }

    }

}).$mount(config.mountAppTo);
