import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  namespaced: true,

  state: {

    user: {},

    csrfToken: null,

    initializers: 0,

    isAuthenticating: false,

    isMaintenanceMode: false,

    isOffline: false,

    exception: null

  },

  mutations: {

    SET_USER (state, payload) {
      if (typeof payload !== 'object') {
        return
      }

      state.user = payload
    },

    SET_INITIALIZING (state, payload) {
      if (payload) {
        state.initializers++
        return
      }

      state.initializers--
    },

    SET_AUTHENTICATING (state, payload) {
      state.isAuthenticating = payload
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

    isAuthenticated: state => {
      return state.user != null && Object.keys(state.user).length > 0
    },

    hasException: state => {
      return state.exception != null
    }

  }

})

export default store
