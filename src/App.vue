<template>

  <v-app v-cloak :class="$root.layout">

    <transition mode="out-in">
      <component :is="$root.layout"/>
    </transition>

    <v-snackbar v-model="$root.snackbar.display" v-bind="$root.snackbar.props">
      <span v-html="$root.snackbar.text"></span>
      <v-btn dark text @click="$root.snackbar.display = false">Close</v-btn>
    </v-snackbar>

  </v-app>

</template>
