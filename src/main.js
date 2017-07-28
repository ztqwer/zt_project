
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './components/store/'

Vue.config.productionTip = false

Vue.config.devtools = true;
Vue.config.debug = true;
//应用公共样式 引用公共js
require('./assets/css/base.css');
require('./assets/css/validate_common.css');
require('./assets/js/rem.js');




new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
