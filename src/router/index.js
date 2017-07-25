import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Test from '@/components/Test'
import NavMenu from '@/components/NavMenu'
import Content from '@/components/Content'

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/nav',
    name: 'nav',
    component: NavMenu
  },
  {
    path: '/content',
    name: 'content',
    component: Content
  },
  ,
  {
    path: '/login',
    component: require('@/pages/login')
  }
]

export default new Router({
  routes: routes
})

