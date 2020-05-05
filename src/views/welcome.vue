<template>

  <article>
    <h1>Laravue Pie</h1>
    <p>Welcome to your first slice of Laravel SD-SPA.</p>
    <small>A Same Domain Single Page Application.</small>
  </article>

</template>

<script>

export default {

  name: 'view-welcome'

}

</script>

<style lang="scss" scoped>

  h1 {
    font-size: 8rem;
    margin: 2rem;
  }

  article {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    p {
      font-size: 1.5rem;
    }

  }

</style>
