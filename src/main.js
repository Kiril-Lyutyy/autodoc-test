import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueNoty from 'vuejs-noty';
import store from './store';
window.axios = axios;
Vue.use(VueNoty, {
    progressBar: true,
    layout: 'bottomRight',
    theme: 'bootstrap-v4',
    timeout: 3000
});
new Vue({
  el: '#app',
  render: h => h(App),
  store: store
});
