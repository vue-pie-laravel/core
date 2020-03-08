import axios from 'axios'
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

  SET_ATTRIBUTES (state, payload) {
    state.attributes = payload
  },

  SET_CONFIG (state, payload) {
    state.config = payload
  },

  SET_LANGUAGE (state, payload) {
    state.language = payload
  },

  SET_LANGUAGES (state, payload) {
    state.languages = payload
  },

  SET_MESSAGES (state, payload) {
    payload.forEach(item => {
      state.messages.push(item)
    })
  },

  SET_PERMISSIONS (state, payload) {
    state.permissions = payload
  },

  SET_ROUTES (state, payload) {
    state.routes = payload
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
    context.commit('SET_OFFLINE', false, { root: true })

    axios.get('/app/options', {
      responseType: 'json',
      withCredentials: true
    }).then(response => {
      context.commit('SET_OFFLINE', false, { root: true })

      if (has(response.data, 'attributes')) {
        context.commit('SET_ATTRIBUTES', response.data.attributes)
      }

      if (has(response.data, 'config')) {
        context.commit('SET_CONFIG', response.data.config)
      }

      if (has(response.data, 'language')) {
        context.commit('SET_LANGUAGE', response.data.language)
      }

      if (has(response.data, 'languages')) {
        context.commit('SET_LANGUAGES', response.data.languages)
      }

      if (has(response.data, 'messages')) {
        context.commit('SET_MESSAGES', response.data.messages)
      }

      if (has(response.data, 'permissions')) {
        context.commit('SET_PERMISSIONS', response.data.permissions)
      }

      // TODO check routes are set else set init failed state.
      if (has(response.data, 'routes')) {
        context.commit('SET_ROUTES', response.data.routes)
      }

      if (has(response.data, 'translations')) {
        context.commit('SET_TRANSLATIONS', response.data.translations)
      }

      if (has(response.data, 'version')) {
        context.commit('SET_VERSION', response.data.version)
      }
    }).catch(error => {
      context.commit('SET_OFFLINE', true, { root: true })
      console.error(error)
      // if (error.response) { Deprecated ?
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

  /**
   * Translate a string or translation key else returns
   * If the referenced key is a an object of nested translations then the key will return else the value of a wildcard (*) key will be returned
   *
   * @param state => key The key to translate
   * @param state => args Dynamic string parts to inject
   *
   * @returns String
   */
  translate: state => (key, args) => {
    let value = get(state.translations, key, key)

    // Process any dynamic string arguments
    if (args) {
      eachRight(args, (paramVal, paramKey) => {
        value = replace(value, `:${paramKey}`, paramVal)
      })
    }

    return value
  },

  route: state => (name, args) => {
    let route = state.routes.find(item => item.name === name)

    if (route == null) { return null }

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
