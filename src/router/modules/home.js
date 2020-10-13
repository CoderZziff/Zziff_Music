import { recommendRoutes } from "./recommend";
import { playlistRoutes } from "./playList";
import { myMusicRoutes } from "./myMusic";
import { artistRoutes } from "./artist";
import { albumRoutes } from "./album";
import { djRoutes } from "./dj";
import { rankRoutes } from "./rank";
let homeRoutes = [
  {
    path: "/home",
    component: () =>
      import(/* webpackChunkName: "home" */ "layouts/HomeLayout.vue"),
    name: "home",
    children: [
      ...recommendRoutes,
      ...myMusicRoutes,
      ...playlistRoutes,
      ...artistRoutes,
      ...albumRoutes,
      ...djRoutes,
      ...rankRoutes
    ]
  }
];
export { homeRoutes };
