import { mapActions } from 'vuex'

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

    })
  }

}
