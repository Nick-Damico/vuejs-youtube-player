<!-- Directives can also be declared as v-on:termChange="onTermChange" -->
<!-- Directive to bind props: v-bind:videos="videos" -->
<!--
Pass Props from a parent Component down to child components
with the v-bind: directive. Must set a props: ['video'] property and
value in the child component to recieve a prop from a parent.
-->
<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="row">
      <VideoDetail :video="selectedVideo" />
      <VideoList
        @videoSelect="onVideoSelect"
        :videos="videos"
      ></VideoList>
    </div>
  </div>
</template>

<script>
// import dependencies
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
// Define a env variable in .env file with API KEY.
const API_KEY = process.env.VUE_APP_SECRET;
export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data() {
    return {
      videos: [],
      selectedVideo: null
    };
  },
  methods: {
    onVideoSelect(video) {
      this.selectedVideo = video
    },
    onTermChange: function(searchTerm) {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      })
      .then(response => {
        this.videos = response.data.items;
        this.selectedVideo = this.videos[0];
      })
      .catch(error => console.log(error))
    }
  }
};
</script>
