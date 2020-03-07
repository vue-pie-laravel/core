<template>

  <div class="layout-initializing inherit">

    <div>

      <img src="/images/loading.svg" width="105"/>
      <span>INITIALIZING</span>

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
    background: rgb(8, 171, 122);
    background-image: url(/images/background.svg);
    background-image: url(/images/background.svg), linear-gradient(45deg, rgb(8, 171, 122) 0%, rgb(0, 169, 184) 100%);
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
