import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './assets/css/animate.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/flaticon.css';
import './assets/css/style.css';

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

import '@/assets/js/owl.carousel.min.js';
loadFonts()
createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
