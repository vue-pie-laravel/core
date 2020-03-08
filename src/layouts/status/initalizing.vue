<template>

  <div class="layout-initializing inherit">

    <div>

      <img src="/images/loading.svg" class="icon" alt="Loading..."/>

      <h2>INITIALIZING...</h2>

      <p>
        <small>Giving the Laravel service a good poke...</small>
      </p>

    </div>

  </div>

</template>

<script>
export default {
  name: 'layout-status-initializing'
}
</script>

<style lang="scss">

  .layout-initializing {

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: white;
    background: #00beff;
    background-image: url(/images/background.svg);
    background-image: url(/images/background.svg), linear-gradient(135deg, #00beff 0%, #9c43b8 100%);
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

    .icon {
      width: 90%;
      max-width: 120px;
      margin-bottom: 32px;
    }

  }

</style>
