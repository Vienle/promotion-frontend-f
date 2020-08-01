import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './routers/index'
import excel from 'vue-excel-export'
Vue.prototype.$http = axios
Vue.use(excel)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
