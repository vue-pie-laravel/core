import Vue from 'vue'

/**
 * Import available layouts.
 */
import LayoutOffline from './views/offline'
import LayoutInitializing from './views/initalizing'
import LayoutAuth from './views/auth'
import LayoutDefault from './views/default'

Vue.component('layout-offline', LayoutOffline)
Vue.component('layout-initializing', LayoutInitializing)
Vue.component('layout-default', LayoutAuth)
Vue.component('layout-default', LayoutDefault)
