<!-- Directives can also be declared as v-on:termChange="onTermChange" -->
<!-- Directive to bind props: v-bind:videos="videos" -->
<template>
  <div>
    VueTube Browser
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoList :videos="videos"></VideoList>
  </div>
</template>

<script>
// import dependencies
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
// Define a env variable in .env file with API KEY.
const API_KEY = process.env.VUE_APP_SECRET;
export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList
  },
  data() {
    return {
      videos: []
    };
  },
  methods: {
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
        this.videos = response.data.items
      })
      .catch(error => console.log(error))
    }
  }
};
</script>
