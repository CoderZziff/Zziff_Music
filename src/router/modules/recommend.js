let recommendRoutes = [
  {
    path: '/index',
    component: () => import(/* webpackChunkName: "index" */ 'views/Index/index.vue'),
  },
]


export {
  recommendRoutes
}
