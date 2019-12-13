import store from '~/store'

import { mapActions } from 'vuex'

export const hook = (vm) => {

    vm.$on('app:initialized', () => {

        if(store.state.isOffline === false)
            vm.authCheck();

    });

};

export default {

    install: (Vue) => {

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
