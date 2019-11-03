import Vue from 'vue'

/**
 * Import available layouts.
 */
import LayoutOffline from './views/offline'
Vue.component('layout-offline', LayoutOffline);

import LayoutInitializing from './views/initalizing'
Vue.component('layout-initializing', LayoutInitializing);

import LayoutAuth from './views/auth'
Vue.component('layout-default', LayoutAuth);

import LayoutDefault from './views/default'
Vue.component('layout-default', LayoutDefault);


