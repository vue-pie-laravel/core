import store from '~/store'
import Sessions from '../../modules/Session'

import { mapActions } from 'vuex'

export const hook = (vm) => {

    vm.$on('app:initialized', () => {

        if(store.state.isOffline === false)
            vm.authCheck();

    });

};

export default {

    install: (Vue) => {

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
