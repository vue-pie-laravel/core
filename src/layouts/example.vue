<template>

  <main role="main" class="inherit">

    <nav role="navigation">

      <router-link tag="button" :to="{ name: 'index' }">Welcome</router-link>

      <router-link tag="button" :to="{ name: 'guarded' }">Guarded</router-link>

      <router-link tag="button" :to="{ name: 'guarded' }" :disabled="!isAuthenticated">Guarded Toggled</router-link>

      <template v-if="isAuthenticated">

        <button @click="logout" :diabled="$root.busy">Logout</button>

      </template>

      <template v-else>

        <button @click="login">Login</button>

      </template>

    </nav>

    <transition name="component-fade" mode="out-in">
      <router-view/>
    </transition>

  </main>

</template>

<script>

export default {

  name: 'layout-example',

  methods: {

    login () {
      this.$router.push({ name: 'login' })
    },

    logout () {
      this.authLogout().then(() => {
        this.$router.push({ name: 'index' })
      })
    }

  }

}

</script>

<style lang="scss" scoped>

  main {

    display: flex;
    flex-direction: column;

    color: white;
    background: rgb(8, 171, 122);
    background-image: url(/images/background.svg);
    background-image: url(/images/background.svg), linear-gradient(205deg, rgb(8, 171, 122) 0%, rgb(0, 169, 184) 100%);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;

    nav {
      display: flex;
      justify-content: center;
      align-content: center;
      padding: 0.5em;
      flex-shrink: 1;
      background-color: rgba(40, 40, 40, 0.05);

    }

  }

</style>
