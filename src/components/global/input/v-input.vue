<template>

  <label class="v-input" :class="{ 'v-input-error' : hasError }" @click="clear">
    <input v-model="form.input[name]" :disabled="form.busy" :placeholder="placeholder" :type="type" :name="name"/>
  </label>

</template>

<script>

import inputMix from '@/components/global/input/vInputMix'

export default {

  name: 'v-input',

  mixins: [inputMix],

  computed: {

    placeholder () {
      return this.error || this.label
    }

  }

}

</script>

<style lang="scss" scoped>

  .v-input {

    display: block;
    position: relative;
    width: 100%;
    margin: 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    letter-spacing: 0.05rem;
    color: inherit;

    input {

      all: inherit;
      margin: 0;
      outline: none;
      border: 2px solid transparent;
      background-color: rgba(40, 40, 40, 0.05);
      padding: 0.5rem 1rem;
      cursor: text;

      &:disabled {
        background-color: rgba(99, 107, 111, 0.51);
        cursor: not-allowed;
      }

      &:focus {
        border-color: rgba(250, 250, 250, 0.1);
      }

      &::placeholder {
        color: inherit;
      }

    }

    &-error {

      background-color: #ca2e3f;

    }

  }

</style>
