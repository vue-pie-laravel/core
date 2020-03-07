<template>

  <v-app v-cloak :class="$root.layout">

    <transition mode="out-in">
      <component :is="$root.layout"/>
    </transition>

  </v-app>

</template>
