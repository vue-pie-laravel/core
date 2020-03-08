import Vue from 'vue'

/**
 * Import prerequisite components here
 * ----------------------------------------------------------------
 */

import vSvg from './global/v-svg'

Vue.component('v-svg', vSvg)

/**
 * === Asynchronous import example (Code splitting) ===
 *
 * Vue.component('my-async-example', () => import('my-async-example'))
 */
