import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import css
import 'element-ui/lib/theme-default/index.css'

// import axios from 'axios'
// Vue.prototype.$http = axios

// Vue.use(mavonEditor)
// Vue.use(VueResource)
Vue.use(ElementUI)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
