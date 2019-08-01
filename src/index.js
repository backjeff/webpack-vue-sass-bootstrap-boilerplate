import 'bootstrap';
import './sass/main.scss';

import Vue from 'vue';

// https://github.com/vuejs/vue-router
import router from './router';

// https://github.com/vuejs/vuex
import store from './store';

import './filters';

// https://github.com/shakee93/vue-toasted
import Toasted from 'vue-toasted';
Vue.use(Toasted, {
  position: 'bottom-right',
  duration: 5000,
  keepOnHover: true,
  className: 'vue-toasted',
  containerClass: 'vue-toasted-container'
});

// https://github.com/hilongjw/vue-progressbar
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: '#000',
  failedColor: '#d00000',
  thickness: '6px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
});

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');