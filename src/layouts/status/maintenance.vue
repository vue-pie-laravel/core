<template>

  <div class="layout-maintenance inherit">

    <div>

      <h2>MAINTENANCE MODE</h2>

      <template v-if="isRebooting">

        <small>Maintenance is complete...<br/>The application is about to automatically reboot.</small>

      </template>

      <template v-else>

        <img src="/images/loading.svg" width="105" alt="Waiting for service to return."/>

        <p>
          <small>Services are suspended while maintenance is performed...<br/>
            <strong>If you keep me open, I will let you know when the service returns.</strong>
          </small>
        </p>

      </template>

    </div>

  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'layout-status-maintenance',

  computed: {

    ...mapState(['isRebooting'])

  }
}
</script>

<style lang="scss">

  .layout-maintenance {

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: white;
    background: #ca2a2a;
    background-image: url(/images/background.svg);
    background-image: url(/images/background.svg), linear-gradient(315deg, #5a2aca 0%, #ca1919 75%);
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
