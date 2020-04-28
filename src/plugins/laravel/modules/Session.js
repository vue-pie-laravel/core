import { config } from '@/config'
import router from '@/router'

const state = {}

const mutations = {}

const actions = {

  login ({ commit }, input) {
    let silent = input.hasOwnProperty('silent') ? input.silent : false

    commit('SET_AUTHENTICATING', !silent, { root: true })

    return new Promise((resolve, reject) => {
      router.app.$http.post(router.app.route('app.login'), input).then(response => {
        commit('SET_USER', response.data.user, { root: true })

        commit('SET_AUTHENTICATING', false, { root: true })

        resolve(response)
      }).catch(error => {
        // TODO commit('SET_EXCEPTION', {}, {root: true});

        commit('SET_AUTHENTICATING', false, { root: true })

        reject(error)
      })
    })
  },

  logout ({ commit, dispatch }) {
    router.app.$http.post(router.app.route('app.logout')).then(() => {
      commit('SET_USER', {}, { root: true })
    }).catch(error => {
      // TODO Handle logout error
      console.error(error)
    }).finally(() => {
      dispatch('check', true)
    })
  },

  recover (_, input) {
    return new Promise((resolve, reject) => {
      router.app.$http.post(router.app.route('app.password.email'), { email: input.email })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  update (_, input) {
    return new Promise((resolve, reject) => {
      router.app.$http.post(router.app.route('app.password.reset', { token: router.currentRoute.query.token }), { email: input.email }).then(response => {
        router.push(router.currentRoute.query.redirect || config.redirectTo)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  check ({ commit }, silent = false) {
    commit('SET_AUTHENTICATING', !silent, { root: true })

    router.app.$http.get(router.app.route('app.user')).then(response => {
      commit('SET_USER', response.data, { root: true })

      const redirect = router.currentRoute.query.hasOwnProperty('redirect') && !!router.currentRoute.query.redirect
        ? router.currentRoute.query.redirect : router.currentRoute.path

      router.push(redirect, () => {
        commit('SET_AUTHENTICATING', false, { root: true })
      })
    }).catch(error => {
      // TODO Handle error response, ignore codes handled by interceptor
      console.error(error)
    }).finally(() => {
      commit('SET_AUTHENTICATING', false, { root: true })
    })
  },

  reset ({ commit }) {
    commit('SET_USER', null, { root: true })
  }

}

const getters = {}

export default {
  namespaced: true,
  dynamic: true,
  state,
  mutations,
  actions,
  getters
}
