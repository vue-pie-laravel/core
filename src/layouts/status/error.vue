<template>

  <div class="layout-error inherit">

    <div>

      <h2>{{ error.title }}</h2>

      <p v-if="error.message">{{ error.message }}</p>
      <p v-else>Sorry, There was a problem when trying to process your request.</p>

    </div>

  </div>

</template>

<script>
export default {
  name: 'layout-status-offline'
}
</script>

<style lang="scss">

  .layout-error {

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

  }

</style>
