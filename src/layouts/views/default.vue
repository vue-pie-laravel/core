<template>

  <div class="layout-default">
    <div class="navigation accent" :class="{ display: navigation.display }">
      <div class="main-header">
        <button class="round" @click="navigation.display = !navigation.display">
          <i class="mdi mdi-menu"></i>
        </button>
      </div>
      <div class="main-content">
        <router-link :to="{ name: 'index' }" class="button">
          <div>
            <i class="mdi mdi-home"></i>
            <span>Home</span>
          </div>
        </router-link>
        <router-link :to="{ name: 'settings' }" class="button">
          <div>
            <i class="mdi mdi-settings"></i>
            <span>Settings</span>
          </div>
        </router-link>
        <!--                <a class="button" @click="$Laravel.logout">-->
        <!--                    <div>-->
        <!--                        <i class="mdi mdi-logout"></i>-->
        <!--                        <span>Logout</span>-->
        <!--                    </div>-->
        <!--                </a>-->
      </div>
    </div>
    <div class="page">
      <div class="main-header accent"></div>
      <div class="main-content">
        <slot/>
      </div>
    </div>
  </div>

</template>

<script>

export default {

  name: 'layout-default',

  data: () => ({
    navigation: {
      display: false
    }
  })

}

</script>
