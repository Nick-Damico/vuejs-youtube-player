<template>
  <div>
    VueTube Browser
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
// Define a env variable in .env file with API KEY.
const API_KEY = process.env.VUE_APP_SECRET;
export default {
  name: 'App',
  components: {
    SearchBar
  },
  methods: {
    onTermChange: function(searchTerm) {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: 'searchTerm'
        }
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
    }
  }
};
</script>
