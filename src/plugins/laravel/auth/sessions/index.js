import Sessions from './module'
import store from '~/store'

import { mapActions } from 'vuex'

export const hook = (vm) => {

    vm.$on('app:initialized', () => {

        vm.authCheck();

    });

};

export default {

    install: (Vue, options = {

    }) => {

        store.registerModule('Laravel/Sessions', Sessions);

        Vue.mixin({

            methods: {

                ...mapActions({
                    authLogin: 'Laravel/Sessions/login',
                    authLogout: 'Laravel/Sessions/logout',
                    authCheck: 'Laravel/Sessions/check'
                })

            }

        });

    }

};
