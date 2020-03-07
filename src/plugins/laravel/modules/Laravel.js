import axios from 'axios'
import store from '@/store'
import { eachRight, get, has, replace } from 'lodash'

const state = {

  messages: [],

  config: {},
  routes: {},
  permission: {},
  translations: {},
  version: ''

}

const mutations = {

  SET_MESSAGES (state, payload) {
    payload.forEach(item => {
      state.messages.push(item)
    })
  },

  SET_CONFIG (state, payload) {
    state.config = payload
  },

  SET_ROUTES (state, payload) {
    state.routes = payload
  },

  SET_PERMISSIONS (state, payload) {
    state.permissions = payload
  },

  SET_TRANSLATIONS (state, payload) {
    state.translations = payload
  },

  SET_VERSION (state, payload) {
    state.version = payload
  }

}

const actions = {

  initialize (context) {
    context.commit('SET_INITIALIZING', true, { root: true })

    axios.get('/app', {
      responseType: 'json'
    }).then(response => {
      store.commit('SET_OFFLINE', false, { root: true })

      if (has(response.data, 'messages')) { context.commit('SET_MESSAGES', response.data.messages) }

      if (has(response.data, 'config')) { context.commit('SET_CONFIG', response.data.config) }
      // TODO check routes are set else set init failed state.
      if (has(response.data, 'routes')) { context.commit('SET_ROUTES', response.data.routes) }

      if (has(response.data, 'permissions')) { context.commit('SET_PERMISSIONS', response.data.permissions) }

      if (has(response.data, 'translations')) { context.commit('SET_TRANSLATIONS', response.data.translations) }

      if (has(response.data, 'version')) { context.commit('SET_VERSION', response.data.version) }
    }).catch(error => {
      context.commit('SET_OFFLINE', true, { root: true })
      console.error(error)
      // if (error.response) {
      //
      //     if (has(error.response, 'message')) {
      //
      //         context.commit('SET_MESSAGES', [
      //             {
      //                 message: error.message,
      //                 type: 'error'
      //             }
      //         ]);
      //
      //     }
      //
      // }
    }).finally(() => {
      context.commit('SET_INITIALIZING', false, { root: true })
    })
  }

}

const getters = {

  translate: state => (string, args) => {
    let text = get(state.translations, string)

    if (args) {
      eachRight(args, (paramVal, paramKey) => {
        text = replace(text, `:${paramKey}`, paramVal)
      })
    }

    return text
  },

  route: state => (name, args) => {
    let route = state.routes.find(item => item.name === name)

    if (route == null) {
      console.error('Unknown route ', name)
      return '404'
    }

    return '/' + route.uri.split('/').map(s => s[0] === '{' ? args.shift() : s).join('/')
  }

}

export default {
  namespaced: true,
  dynamic: true,
  state,
  mutations,
  actions,
  getters
}
