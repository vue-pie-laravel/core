<template>

  <div class="v-svg" :style="{ 'width': width, 'max-width' : maxWidth }">
    <slot/>
  </div>

</template>

<script>

export default {

  name: 'v-svg',

  props: {
    width: {
      type: String,
      default: '32px'
    },
    maxWidth: {
      type: String,
      default: 'initial'
    }
  }

}

</script>

<style lang="scss">

  .v-svg {

    svg {
      padding-bottom: 50%;
      margin-bottom: -50%;
    }
  }

</style>
