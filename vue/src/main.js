// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios'
import { fetchGet, fetchPost} from './axios/index'

Vue.config.productionTip = false

Vue.prototype.$get = fetchGet
Vue.prototype.$post = fetchPost

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
