// Entry point of application
import Vue from 'vue';
// App wraps our entry collection of components
// Think of this as the highest level parent component.
import App from './App';

// Instantiate instance of the Vue class
// 1. define a render property, set to a function
// that function returns the App parent container with all components
// 2. $mount does what is says, it mounts the App into the DOM
// inside of the div with #app.
new Vue({
  render: (h) => h(App)
}).$mount('#app');
