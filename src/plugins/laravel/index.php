import {get, eachRight, replace} from 'lodash'
import {config} from '~/config'
import router from '~/router'

export default {

    install: (Vue, options = {}) => {

        Vue.prototype.$laravel = {

            routes: [],
            translations: {},

            reset() {

                router.app.$store.commit('setUser', null, {root: true});
                router.app.$store.commit('setAuthenticated', false, {root: true});

            },

            route() {

                const args = Array.prototype.slice.call(arguments);
                const name = args.shift();

                let route = this.routes.find(item => item.name === name);

                if (!!!route) {
                    console.error('Unknown route ', name);
                    return '404';
                }

                return '/' + route.uri.split('/').map(s => s[0] === '{' ? args.shift() : s).join('/');

            },

            translate(string, args) {

                let value = get(this.translations, string);

                eachRight(args, (paramVal, paramKey) => {
                    value = replace(value, `:${paramKey}`, paramVal);
                });

                return value;

            }

        };

        // Global shorthand helpers

        window.Laravel = Vue.prototype.$laravel;
        window.route = Vue.prototype.$laravel.route;
        window.trans = Vue.prototype.$laravel.translate;

        // Vue template bind helpers

        Vue.trans = Vue.prototype.$laravel.translate;
        Vue.prototype.$trans = Vue.prototype.$laravel.translate;

        // Events listeners

        //router.app.$on('unauthorized', window.Laravel.reset());
        //router.app.$on('auth-timeout', window.Laravel.reset());
    }

}
