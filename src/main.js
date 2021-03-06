// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import api from './api'
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.use(api)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

// 通知组件
new Audio("static/horse.ogg").play()