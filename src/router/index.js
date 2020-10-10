import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js'
import { recommendRoutes } from './modules/recommend'
import { playlistRoutes } from './modules/playlist'

Vue.use(Router)

const routes = [
  {
    path: '',
    component: () => import('layouts/BasicLayout.vue'),
    redirect: '/index',
    children: [
      ...recommendRoutes,
      ...playlistRoutes,
    ]
  },
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
