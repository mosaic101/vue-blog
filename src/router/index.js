import Vue from 'vue'
import Router from 'vue-router'

import container from '@/components/container'

import login from '@/pages/login'
import messageList from '@/pages/messageList'
import topicList from '@/pages/topicList'
import topicDetail from '@/pages/topicDetail'
import about from '@/pages/about'

import test from '@/pages/test'

Vue.use(Router)

const routes = [{
  path: '/',
  component: topicList,
  children: []
}, {
  path: '/messages',
  component: messageList
}, {
  path: '/topics',
  component: topicList
}, {
  path: '/topics/:id',
  component: topicDetail
}, {
  path: '/about',
  component: about
}, {
  path: '/login',
  component: login
}, {
  path: '/test',
  component: test
}]

export default new Router({
  routes: routes
})

