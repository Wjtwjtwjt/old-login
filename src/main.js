import Vue from 'vue'
import App from './App.vue'
import '../rem'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store';
import router from './router'
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
