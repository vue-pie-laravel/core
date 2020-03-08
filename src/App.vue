<template>

  <div id="app" class="inherit" v-cloak :class="$root.layout">

    <transition name="component-fade" mode="out-in">
      <component :is="$root.layout"/>
    </transition>

  </div>

</template>
