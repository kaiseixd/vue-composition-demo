import Vue from 'vue'
import Router from 'vue-router'

import routes from './router'
import App from './App.vue'

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history',
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
