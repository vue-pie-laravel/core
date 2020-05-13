import Vue from 'vue'
import Vuex from 'vuex'

import User from './modules/User'

Vue.use(Vuex)

const store = new Vuex.Store({

  namespaced: true,

  state: {

    csrfToken: null,

    initializers: 0,

    isMaintenanceMode: false,

    isOffline: false,

    exception: null

  },

  mutations: {

    SET_INITIALIZING (state, payload) {
      if (payload) {
        state.initializers++
        return
      }

      state.initializers--
    },

    SET_OFFLINE (state, payload) {
      state.isOffline = payload
    },

    SET_MAINTENANCE_MODE (state, payload) {
      state.isMaintenanceMode = payload
    },

    SET_EXCEPTION (state, payload) {
      state.exception = payload
    },

    SET_CSRF_TOKEN (state, token) {
      state.csrfToken = token
    }

  },

  getters: {

    isInitializing: state => {
      return state.initializers > 0
    },

    hasException: state => {
      return state.exception != null
    }

  },

  modules: {
    User
  }

})

export default store
