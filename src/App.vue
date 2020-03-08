<template>

  <div id="app" class="inherit" v-cloak :class="$root.layout">

    <component :is="$root.layout"/>

  </div>

</template>
