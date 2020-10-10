let playlistRoutes = [
  {
    path: '/playlist',
    component: () => import(/* webpackChunkName: "playlist" */ 'views/PlayList/index.vue'),
    name: 'playlist',
    meta: {
      title: '歌单'
    }
  },
  {
    path: '/playlist-highquality',
    component: () => import(/* webpackChunkName: "playlist-highquality" */ 'views/PlayList/highQuality.vue'),
    name: 'playlist-highquality',
    meta: {
      title: '精品歌单'
    }
  },
  {
    path: '/playlist/:id',
    component: () => import(/* webpackChunkName: "playlist-id" */ 'views/PlayList/id.vue'),
    name: 'playlist-id',
    redirect: '/playlist/:id/tracks',
    children: [
      {
        path: '/playlist/:id/tracks',
        component: () => import(/* webpackChunkName: "playlist-id-tracks" */ 'views/PlayList/Id/tracks.vue'),
        name: 'playlist-id-tracks'
      },
      {
        path: '/playlist/:id/comment',
        component: () => import(/* webpackChunkName: "playlist-id-comment" */ 'views/PlayList/Id/comment.vue'),
        name: 'playlist-id-comment'
      },
      {
        path: '/playlist/:id/subscriber',
        component: () => import(/* webpackChunkName: "playlist-id-subscriber" */ 'views/PlayList/Id/subscriber.vue'),
        name: 'playlist-id-subscriber'
      }
    ]
  }
]

export {
  playlistRoutes
}
