<template lang="html">
  <li class="list-group-item media" @click="onVideoSelect">
    <img
      :src="thumbnailUrl"
      :alt="description"
    />
    <div class="media-body">
      {{ video.snippet.title }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: ['video'],
  methods: {
    onVideoSelect() {
      this.$emit('videoSelect', this.video);
    }
  },
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url;
    },
    description() {
      return this.video.snippet.description;
    }
  }
}
</script>

<style scoped>
  img {
    margin-right: 1.5rem;
  }
  li {
    display: flex;
    cursor: pointer;
    transition: background-color .2s ease-in;
  }
  li:hover {
    background-color: #eee;
  }
</style>
