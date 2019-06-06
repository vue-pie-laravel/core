import './scss/app.scss'

/**
 * Import Vue.
 * https://vuejs.org/
 */

import Vue from 'vue'
Vue.config.productionTip = false;

/**
 * Import Lodash
 * https://lodash.com/docs
 */

import 'lodash'
Vue.prototype._ = window._;

/**
 * Import application configuration data.
 */
import config from './config'

/**
 * Initialize the main application
 */
import App from './App'

window.App = new Vue({

    render: h => h(App),
    store,
    router

}).$mount(config.mountAppTo);
