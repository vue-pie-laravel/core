<template>

  <article>
    Logged in as {{ user.name }}

    <pre>{{ user }}</pre>

    <button @click="authLogout" :diabled="$root.busy">Logout</button>

  </article>

</template>

<script>

export default {

  name: 'view-guarded-example'

}

</script>

<style lang="scss" scoped>

  article {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

  }

</style>
