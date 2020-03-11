<template>

  <div class="layout-exception inherit">

    <div>

      <h2>{{ exception.title || 'ERROR' }}</h2>

      <p>Whoops, there was a problem when trying to process your request</p>

      <template v-if="exception.message">
        <p>{{ exception.message }}</p>
      </template>

      <button @click="restart">Restart</button>

    </div>

  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'layout-status-exception',

  computed: {

    ...mapState(['exception'])

  },

  methods: {

    restart () {
      window.location.reload()
    }

  }
}
</script>

<style lang="scss">

  .layout-exception {

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: white;
    background: rgb(202, 46, 63);
    background-image: url(/images/background.svg);
    background-image: url(/images/background.svg), linear-gradient(315deg, rgb(202, 46, 63) 0%, rgb(202, 70, 75) 100%);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;

    > div {

      display: inline-flex;
      width: 95vw;
      max-width: 480px;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

    }

    p {
      text-align: center;
    }

  }

</style>
