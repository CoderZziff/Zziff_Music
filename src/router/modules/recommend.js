let recommendRoutes = [
  {
    path: "/index",
    component: () =>
      import(/* webpackChunkName: "index" */ "views/Index/index.vue")
  },
  {
    path: "/private_fm",
    component: () =>
      import(/* webpackChunkName: "private_fm" */ "views/Fm/index.vue")
  },
  {
    path: "/mv",
    component: () => import(/* webpackChunkName: "mv" */ "views/Video/mv.vue")
  },
  {
    path: "/live",
    component: () => import(/* webpackChunkName: "mv" */ "views/Live/index.vue")
  }
];

export { recommendRoutes };
