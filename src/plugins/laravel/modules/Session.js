import {config} from '~/config'
import router from '~/router'

export default {

    namespaced: true,

    actions: {

        login({commit, rootState}, input) {

            commit('SET_AUTHENTICATING', true, {root: true});

            return new Promise((resolve, reject) => {

                router.app.$http.post(route('login'), input).then(response => {

                    commit('SET_USER', response.data.user, {root: true});
                    commit('SET_AUTHENTICATING', false, {root: true});
                    resolve(response);

                }).catch(error => {

                    //commit('SET_OFFLINE', true, {root: true});
                    commit('SET_AUTHENTICATING', false, {root: true});
                    reject(error);

                });

            });

        },

        logout({dispatch}) {

            router.app.$http.post(route('logout')).catch(error => {

                // TODO Handle logout error
                console.error(error);

            }).finally(() => {

                dispatch('check');

            });

        },

        recover({}, input) {

            return new Promise((resolve, reject) => {

                router.app.$http.post(route('password.email'), {email: input.email})
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });

            });

        },

        update({}, input) {

            return new Promise((resolve, reject) => {

                router.app.$http.post(route('password.reset', {token: router.currentRoute.query.token}), {email: input.email}).then(response => {

                    router.push(router.currentRoute.query.redirect || config.redirectTo);
                    resolve(response);

                }).catch(error => {

                    reject(error);

                });

            });

        },

        check({commit}, vm) {

            commit('SET_AUTHENTICATING', true, {root: true});

            router.app.$http.get(router.app.route('app.user')).then(response => {

                commit('SET_USER', response.data, {root: true});

                const redirect = router.currentRoute.query.hasOwnProperty('redirect') && !!router.currentRoute.query.redirect
                    ? router.currentRoute.query.redirect : router.currentRoute.path;

                router.push(redirect, () => {
                    commit('SET_AUTHENTICATING', false, {root: true});
                });

            }).catch(error => {

                // TODO Handle error response, ignore codes handled by interceptor

            }).finally(() => {

                commit('SET_AUTHENTICATING', false, {root: true});

            });

        },

        reset({commit}) {

            commit('SET_USER', null, {root: true});
            commit('SET_AUTHENTICATED', false, {root: true});

        }

    }

};
