<template>

  <div id="app" class="inherit" v-cloak :class="$root.layout">

    <transition mode="out-in">
      <component :is="$root.layout"/>
    </transition>

  </div>

</template>
