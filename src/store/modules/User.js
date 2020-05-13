const state = {

  user: {},

  isAuthenticating: false

}

const getters = {

  isAuthenticated: state => {
    return state.user != null && Object.keys(state.user).length > 0
  }

}

const actions = {}

const mutations = {

  SET_USER (state, payload) {
    if (typeof payload !== 'object') {
      return
    }

    state.user = payload
  },

  SET_AUTHENTICATING (state, payload) {
    state.isAuthenticating = payload
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
