// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueWebsocket from 'vue-websocket'

import * as filters from './filter'
import SimpleTable from './components/simple-table'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(SimpleTable)
Vue.use(VueWebsocket, 'ws://localhost:8888', {
  reconnection: true, // Boolean 是否自动重新连接  默认 true
  path: '/socket', // string 接在端口号后面的路径
  timeout: 10000 // number 超时时间 默认 2000
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
