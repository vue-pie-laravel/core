import Vue from 'vue'

/**
 * Import prerequisite components here
 * ----------------------------------------------------------------
 */

import vInput from './global/input/v-input'
import vSvg from './global/v-svg'

Vue.component('v-input', vInput)
Vue.component('v-svg', vSvg)

/**
 * === Asynchronous import example (Code splitting) ===
 *
 * Vue.component('my-async-example', () => import('my-async-example'))
 */
