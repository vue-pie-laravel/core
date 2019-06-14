import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex);

import {config} from '~/config';

const store = new Vuex.Store({

    namespaced: true,

    state: {

        user: null,

        initializers: 0,

        isAuthenticating: config.authentication,

        isAuthenticated: false,

        isOffline: false,

        inMaintenance: false

    },

    mutations: {

        setUser(state, payload) {

            if (typeof payload !== 'object')
                return;

            state.user = payload;
            state.isAuthenticated = Object.keys(state.user).length > 0;

        },

        setInitializing(state, payload) {

            if (payload) {

                state.initializers++;
                return;

            }

            state.initializers--;

        },

        setAuthenticating(state, payload) {

            state.isAuthenticating = payload;

        },

        setAuthenticated(state, payload) {

            state.isAuthenticated = payload;

        },

        setOffline(state, payload) {

            state.isOffline = payload;

        },

        setMaintenanceMode(state, payload) {

            state.inMaintenance = payload;

        }

    },

    getters: {

        user: state => {

            return state.user || {};

        },

        isInitializing: state => {

            return state.initializers > 0;

        }

    }

});

export default store;
