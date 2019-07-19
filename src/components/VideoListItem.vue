<template lang="html">
  <li class="list-group-item media">
    <img
      class="mr-3"
      :src="thumbnailUrl"
      :alt="description"
    />
    <div class="media-body">
      {{ title }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: ['video'],
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.url;
    },
    title() {
      return this.title.snippet.title;
    },
    description() {
      return this.video.snippet.description;
    }
  }
}
</script>

<style scoped>
  li {
    display: flex;
    cursor: pointer;
    transition: background-color .2s ease-in;
  }
  li:hover {
    background-color: #eee;
  }
</style>
