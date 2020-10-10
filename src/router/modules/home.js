import { recommendRoutes } from './recommend'
import { playlistRoutes } from './playlist'
let homeRoutes = [
    {
        path: '/home',
        component: () => import(/* webpackChunkName: "home" */ 'layouts/HomeLayout.vue'),
        name: 'home',
        children: [
            ...recommendRoutes,
            ...playlistRoutes
        ]
    }]
export {
    homeRoutes
}