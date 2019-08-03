<template lang="html">
  <div v-if="video" class="col-md-8">
    <div class="player">
      <VideoPlayer :video="video" />
    </div>
    <div class="details">
      <h4>{{ video.snippet.title }}</h4>
      <p>{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<script>
import VideoPlayer from './VideoPlayer'

export default {
  name: 'VideoDetail',
  props: ['video'],
  components: {
    VideoPlayer
  }
}
</script>

<style lang="css" scoped>
  .details {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
</style>
