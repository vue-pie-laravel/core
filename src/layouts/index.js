import Vue from 'vue'
import DynamicComponent from '@/utility/DynamicComponent/handler'
import LayoutInitializing from './status/initalizing'

/**
 * Import custom layouts.
 */

Vue.component('layout-default', () => ({
  ...DynamicComponent, component: import('./default')
}))

Vue.component('layout-example', () => ({
  ...DynamicComponent, component: import('./example')
}))

/**
 * Import status layouts.
 */

Vue.component('layout-status-initializing', LayoutInitializing)

Vue.component('layout-status-error', () => ({
  ...DynamicComponent, component: import('./status/error')
}))

Vue.component('layout-status-offline', () => ({
  ...DynamicComponent, component: import('./status/offline')
}))

Vue.component('layout-status-maintenance', () => ({
  ...DynamicComponent, component: import('./status/maintenance')
}))

Vue.component('layout-status-authenticating', () => ({
  ...DynamicComponent, component: import('./status/authenticating')
}))
