<template>
  <div>
    <h3>Youtube<span>API</span>Viewer</h3>
    <div class="input-container">
      <input v-on:keyup.enter="onSubmit" placeholder="Search Videos" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    methods: {
      onSubmit: function(event) {
        // $emit is how we send data up to a parent.
        this.$emit('termChange', event.target.value);
      }
    }
  };
</script>

<style scoped>
  input {
    width: 75%;
  }

  div {
    text-align: center;
    margin: 20px;
  }

  span {
    color: red;
    font-weight: bold;
  }
</style>
