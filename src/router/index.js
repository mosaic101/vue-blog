import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import NavMenu from '@/components/NavMenu'
import Content from '@/components/Content'

Vue.use(Router)

const routes = [{
    path: '/',
    component: Content
  },
  {
    path: '/nav',
    component: NavMenu
  },
  {
    path: '/content',
    component: Hello
  },
  {
    path: '/login',
    component: require('@/pages/login')
  }
]

export default new Router({
  routes: routes
})

