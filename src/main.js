import './sass/app.scss'

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

        ...mapState(['user']),

        ...mapGetters(['isOffline', 'isInitializing', 'isAuthenticating', 'isAuthenticated']),

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
        csrfToken: '',
        snackbar: {
            display: false,
            props: {},
            text: ''
        }

    }),

    computed: {

        ...mapState(['user','isAuthenticating','isAuthenticated','isMaintenanceMode','isOffline']),

        ...mapGetters(['isInitializing']),

        isLoading() {

            return this.loading > 0;

        },

        meta() {

            return this.$router.currentRoute.meta;

        },

        layout() {

            if(this.isOffline)
                return 'layout-offline';

            if (this.isInitializing)
                return 'layout-initializing';

            if(this.isAuthenticating)
                return 'layout-authenticating';

            if (this.isMaintenanceMode)
                return 'layout-maintenance';

            let layout = this.meta.layout || 'default';

            // Current route does not require auth, render current layout.
            if (this.meta.hasOwnProperty('noAuth') && this.meta.noAuth)
                return `layout-${layout}`;

            // The route requires auth, if not authenticated then render auth layout.
            if (this.isAuthenticated === false)
                return 'layout-auth';

            // User is authenticated, render current layout.
            return `layout-${layout}`;

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
