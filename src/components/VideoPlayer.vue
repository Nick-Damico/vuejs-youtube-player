<template lang="html">
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" width="560"
    height="315"
    :src="videoUrl"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>

    </iframe>
  </div>

</template>

<script>

  export default {
    name: 'VideoPlayer',
    props: ['video'],
    computed: {
      videoUrl() {
        const { videoId } = this.video.id;
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }
  }

</script>

<style lang="css" scoped>
</style>
