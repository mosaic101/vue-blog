import Vue from 'vue'
import Router from 'vue-router'

import notFound from '@/components/notFound'

// 路由懒加载
const messageList = r => require.ensure([], () => r(require('@/pages/messageList')), 'messageList')
const topicList = r => require.ensure([], () => r(require('@/pages/topicList')), 'topicList')
const topicDetail = r => require.ensure([], () => r(require('@/pages/topicDetail')), 'topicDetail')
const about = r => require.ensure([], () => r(require('@/pages/about')), 'about')
const test = r => require.ensure([], () => r(require('@/pages/test')), 'test')
// admin pages
const login = r => require.ensure([], () => r(require('@/pages/admin/login')), 'login')
const vueEdit = r => require.ensure([], () => r(require('@/pages/admin/vueEdit')), 'vueEdit')

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: topicList
  },
  {
    path: '/test',
    component: test
  },
  {
    path: '*', // 404
    component: notFound
  },
  {
    path: '/messages',
    component: messageList
  },
  {
    path: '/topics',
    component: topicList
  },
  {
    path: '/topics/:id',
    name: 'topicDetail',
    component: topicDetail
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/admin',
    component: login,
    children: [
      {
        path: '/topics',
        component: vueEdit,
        meta: ['首页', '博客']
      }
    ]
  },
  {
        path: '/admin/topics',
        component: vueEdit,
        meta: ['首页', '博客']
      }
]


export default new Router({
  mode: 'history', // history 模式, 去除 /#/
  routes: routes
})

