import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js'
import { homeRoutes } from './modules/home'

Vue.use(Router)

const routes = [
  {
    path: '',
    component: () => import('layouts/BasicLayout.vue'),
    redirect: '/index',
    children: [
      ...homeRoutes,
    ]
  },
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
