<template>
  <div class="input-container">
    <input @input="onInput"/>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    methods: {
      onInput: function(event) {
        // $emit is how we send data up to a parent.
        this.$emit('termChange', event.target.value);
      }
    }
  };
</script>

<style>
</style>
