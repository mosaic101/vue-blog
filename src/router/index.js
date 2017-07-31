import Vue from 'vue'
import Router from 'vue-router'

import notFound from '@/components/notFound'

// 路由懒加载
const login = r => require.ensure([], () => r(require('@/pages/login')), 'login')
const messageList = r => require.ensure([], () => r(require('@/pages/messageList')), 'messageList')
const topicList = r => require.ensure([], () => r(require('@/pages/topicList')), 'topicList')
const topicDetail = r => require.ensure([], () => r(require('@/pages/topicDetail')), 'topicDetail')
const about = r => require.ensure([], () => r(require('@/pages/about')), 'about')
const test = r => require.ensure([], () => r(require('@/pages/test')), 'test')

Vue.use(Router)

const routes = [{
  path: '/',
  component: topicList,
  meta: [],
  children: []
}, {
  path: '/test',
  component: test
}, {
  path: '*', // 404
  component: notFound
}, {
  path: '/messages',
  component: messageList
}, {
  path: '/topics',
  component: topicList,
  meta: ['首页', '博客']
}, {
  path: '/topics/:id',
  name: 'topicDetail',
  component: topicDetail,
  meta: ['首页', '博客', 'Lucky Wu`s blog']
}, {
  path: '/about',
  component: about,
  meta: ['首页', '博客']
}, {
  path: '/login',
  component: login,
  meta: ['首页', '博客']
}]

export default new Router({
  mode: 'history', // history 模式, 去除 /#/
  routes: routes
})

