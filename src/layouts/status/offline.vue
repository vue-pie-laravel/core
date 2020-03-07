<template>

  <div class="layout-offline inherit">

    <div>

      <h2>SERVICE UNAVAILABLE</h2>
      <small>SORRY, UNABLE TO REACH SERVERS</small>

    </div>

  </div>

</template>

<script>
export default {
  name: 'layout-status-offline'
}
</script>

<style lang="scss">

  .layout-offline {

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: white;
    background: rgb(202, 46, 63);
    background-image: url(/images/background.svg);
    background-image: url(/images/background.svg), linear-gradient(315deg, rgb(202, 46, 63) 0%, rgb(202, 70, 75) 100%);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: cover;

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
