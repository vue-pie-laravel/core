import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({

    namespaced: true,

    state: {

        user: {},

        initializers: 0,

        isAuthenticating: false,

        isAuthenticated: false,

        isMaintenanceMode: false,

        isOffline: false,

    },

    mutations: {

        SET_USER(state, payload) {

            if (typeof payload !== 'object')
                return;

            state.user = payload;
            state.isAuthenticated = Object.keys(state.user).length > 0;

        },

        SET_INITIALIZING(state, payload) {

            if (payload) {

                state.initializers++;
                return;

            }

            state.initializers--;

        },

        SET_AUTHENTICATING(state, payload) {

            state.isAuthenticating = payload;

        },

        SET_AUTHENTICATED(state, payload) {

            state.isAuthenticated = payload;

        },

        SET_OFFLINE(state, payload) {

            state.isOffline = payload;

        },

        SET_MAINTENANCE_MODE(state, payload) {

            state.isMaintenanceMode = payload;

        }

    },

    getters: {

        isInitializing: state => {

            return state.initializers > 0;

        }

    }

});

export default store;
