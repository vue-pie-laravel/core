<template>

  <main role="main" class="inherit">

    <nav role="navigation">
      <router-link tag="button" :to="{ name: 'welcome' }">Welcome</router-link>
      <router-link tag="button" :to="{ name: 'guarded' }">Guarded</router-link>
    </nav>

    <transition name="component-fade" mode="out-in">
      <router-view/>
    </transition>

  </main>

</template>

<script>

export default {

  name: 'layout-example'

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

      button {

        outline: none;
        border: 2px solid transparent;
        border-radius: 0.25rem;
        color: rgb(255, 255, 255);
        font-size: 1rem;
        letter-spacing: 0.15rem;
        background-color: rgba(250, 250, 250, 0.2);
        padding: 0.5rem 1rem;
        margin: 0.5rem;
        cursor: pointer;

        &:hover {
          background-color: rgba(250, 250, 250, 0.25);
          border-color: rgba(250, 250, 250, 0.25);
        }

      }
    }

  }

</style>
