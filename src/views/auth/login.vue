<template>

  <div class="layout-login inherit">

    <div>

      <h2>LOGIN</h2>

      <v-input :form="form" name="email" label="E-Mail Address" />
      <v-input :form="form" name="password" type="password" label="Password" />

      <button @click.prevent="login" :disabled="form.busy">LOGIN</button>
      <button @click="$router.go(-1)" :disabled="form.busy">CANCEL</button>

    </div>

  </div>

</template>

<script>

import Form from '@/utility/Form'

export default {

  name: 'view-auth-login',

  data: (vm) => ({

    input: {
      email: '',
      password: '',
      remember: false,
      silent: true
    },

    form: new Form(vm)

  }),

  beforeMount () {
    if (this.isAuthenticated) {
      this.$router.push({ name: 'index' })
    }
  },

  methods: {

    login () {
      this.form.promise(this.authLogin).then(() => {
        let query = this.$route.query
        let redirect = query.hasOwnProperty('redirect') ? query.redirect : { name: 'index' }
        this.$router.push(redirect)
      }).catch(error => {
        console.error(error)
      })
    }

  }

}

</script>

<style lang="scss">

  .layout-login {

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: white;
    background: rgb(8, 171, 122);
    background-image: url(/images/background.svg);
    background-image: url(/images/background.svg), linear-gradient(205deg, rgb(8, 171, 122) 0%, rgb(0, 169, 184) 100%);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;

    > div {

      display: inline-flex;
      width: 95vw;
      max-width: 320px;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

    }

    button, input {
      width: 100%;

      &:disabled {
        background-color: rgba(99, 107, 111, 0.51);
        cursor: not-allowed;
      }
    }

    input {

      outline: none;
      display: block;
      border: 2px solid transparent;
      border-radius: 0.25rem;
      color: inherit;
      font-size: 1rem;
      letter-spacing: 0.15rem;
      background-color: rgba(40, 40, 40, 0.05);
      padding: 0.5rem 1rem;
      margin: 0.5rem;

      &:focus {
        border-color: rgba(250, 250, 250, 0.1);
      }

      &::placeholder {
        color: inherit;
      }

    }

  }

</style>
