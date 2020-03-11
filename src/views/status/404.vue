<template>

  <div class="view-status-404 inherit">

    <h2>404</h2>
    <small>VIEW NOT FOUND</small>

  </div>

</template>

<style lang="scss">

  .view-status-404 {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: white;
    background: rgb(171, 96, 0);
    background-image: url(/images/background.svg);
    background-image: url(/images/background.svg), linear-gradient(205deg, rgb(171, 66, 0) 0%, rgb(184, 142, 0) 100%);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;

    h2 {
      font-size: 5rem;
      line-height: 5rem;
      margin: 0;
    }

  }

</style>
