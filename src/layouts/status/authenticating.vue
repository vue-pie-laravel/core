<template>

  <div class="layout-authenticating inherit">

    <div>

      <img src="/images/loading.svg" width="105"/>

      <h2>AUTHENTICATING</h2>

      <p>
        <small>Checking user authentication.</small>
      </p>

    </div>

  </div>

</template>

<script>

export default {
  name: 'layout-status-authenticating'
}

</script>

<style lang="scss">

  .layout-authenticating {

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
      max-width: 480px;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

    }

  }

</style>
