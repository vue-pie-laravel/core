import Vue from 'vue'

/**
 * Import available layouts.
 */

import LayoutInitializing from './views/initalizing'
Vue.component('layout-initializing', LayoutInitializing);

import LayoutDefault from './views/default'
Vue.component('layout-default', LayoutDefault);

import LayoutOffline from './views/default'
Vue.component('layout-offline', LayoutOffline);
