let myMusicRoutes = [
  {
    path: '/music_local',
    component: () => import(/* webpackChunkName: "music_local" */ 'views/LocalMusic/index.vue'),
  },
  {
    path: '/music_download',
    component: () => import(/* webpackChunkName: "music_download" */ 'views/Download/index.vue'),
  },
  {
    path: '/music_cloud',
    component: () => import(/* webpackChunkName: "music_cloud" */ 'views/User/cloud.vue'),
  },
  {
    path: '/music_broadcast',
    component: () => import(/* webpackChunkName: "music_cloud" */ 'views/Broadcast/index.vue'),
  },
  {
    path: '/music_collect',
    component: () => import(/* webpackChunkName: "music_collect" */ 'views/User/collect.vue'),
  }
]

export {
  myMusicRoutes
}
