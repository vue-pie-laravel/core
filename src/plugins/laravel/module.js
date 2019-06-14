import {eachRight, get, replace} from 'lodash';

export default {

    namespaced: true,

    state: {

        version: 0,
        routes: [],
        translations: {}

    },

    getters: {},

    actions: {

        route() {

            const args = Array.prototype.slice.call(arguments);

            const module = args.shift();

            const name = args.shift();

            let route = module.state.routes.find(item => item.name === name);

            if (!!!route) {
                console.error('Unknown route ', name);
                return '404';
            }

            return '/' + route.uri.split('/').map(s => s[0] === '{' ? args.shift() : s).join('/');

        },

        translate({state}, string, args) {

            let value = get(state.translations, string);

            eachRight(args, (paramVal, paramKey) => {
                value = replace(value, `:${paramKey}`, paramVal);
            });

            return value;

        }

    },

    mutations: {

        setRoutes(state, payload) {

            state.routes = payload;

        },

        setTranslations(state, payload) {

            state.translations = payload;

        },

        setVersion(state, payload) {

            state.version = payload;

        }

    }

}
