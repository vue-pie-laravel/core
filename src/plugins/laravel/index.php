// TODO : Laravel plugin

import { get, eachRight, replace } from 'lodash'
import { config } from '~/config'
import router from '../../router'

export default {

  install: (Vue, options = {}) => {
  
      Vue.prototype.$laravel = {
      
          routes: [],
          translations: {},
      
      };
  
      // Global shorthand helpers

      //window.Laravel = Vue.prototype.$laravel;
      //window.route = Vue.prototype.$laravel.route;
      //window.trans = Vue.prototype.$laravel.translate;

      // Vue template bind helpers

      //Vue.trans = Vue.prototype.$laravel.translate;
      //Vue.prototype.$trans = Vue.prototype.$laravel.translate;
  
  
  }

}
