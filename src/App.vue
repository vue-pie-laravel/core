<template>

  <div id="app" v-cloak :class="$root.layout">

    <transition mode="out-in">
      <component :is="$root.layout"/>
    </transition>

  </div>

</template>
