<template>

  <div class="layout-authenticate inherit">

    <router-view/>

  </div>

</template>

<script>
export default {

  name: 'layout-status-authenticate'

}
</script>

<style lang="scss">

  .layout-authenticate {

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: white;
    background: rgb(8, 171, 122);
    background-image: url(/images/background.svg);
    background-image: url(/images/background.svg), linear-gradient(335deg, rgb(8, 171, 122) 0%, rgb(0, 169, 184) 100%);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;

  }

</style>
