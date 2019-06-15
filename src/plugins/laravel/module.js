import {eachRight, get, replace} from 'lodash';

export default {

    namespaced: true,

    state: {

        version: 0,
        routes: [],
        translations: {}

    },

    getters: {

        translate: state => ( string, args ) => {

            let text = get(state.translations, string);

            if(args) {

                eachRight(args, (paramVal, paramKey) => {
                    text = replace(text, `:${paramKey}`, paramVal);
                });

            }

            return text;

        },

        route: state => ( name, args ) => {

            let route = state.routes.find(item => item.name === name);

            if (!!!route) {
                console.error('Unknown route ', name);
                return '404';
            }

            return '/' + route.uri.split('/').map(s => s[0] === '{' ? args.shift() : s).join('/');

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
