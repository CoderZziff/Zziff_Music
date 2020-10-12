let rankRoutes = [
  {
    path: '/rank',
    component: () => import(/* webpackChunkName: "rank" */ 'views/Rank/index'),
    name: 'rank',
    meta: {
      title: '排行榜'
    }
  },
  {
    path: '/rank/:id',
    component: () => import(/* webpackChunkName: "rank-id" */ 'views/Rank/id.vue'),
    name: 'rank-id',
    redirect: '/rank/:id/songs',
    children: [
      {
        path: '/rank/:id/songs',
        component: () => import(/* webpackChunkName: "rank-id-songs" */ 'views/Rank/Id/songs.vue'),
        name: 'rank-id-songs'
      },
      {
        path: '/rank/:id/comment',
        component: () => import(/* webpackChunkName: "rank-id-comment" */ '@/views/Rank/Id/comment.vue'),
        name: 'rank-id-comment'
      }
    ]
  }
]

export {
  rankRoutes
}
