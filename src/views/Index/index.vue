<template>
  <IndexLayout>
    <Banner :banners="banners"></Banner>
    <transition-group name="flip-list">
      <a-card
        :bordered="false"
        style="background: transparent; margin-bottom: 20px"
        :style="{ opacity: 1 }"
        v-for="item in navs"
        :title="item.name"
        :key="item.key"
      >
        <router-link :to="`/${item.key}`" slot="extra" v-if="!item.hideMore">
          更多
        </router-link>
        <component :is="item.key" :list="data[item.key]" />
      </a-card>
    </transition-group>
  </IndexLayout>
</template>

<script>
import IndexLayout from "layouts/IndexLayout";
import Banner from "./components/Banner";
import playlist from "./components/playlist";
import privateContent from "./components/privateContent";
import newSong from "./components/newSong";
import mv from "./components/mv";
import dj from "./components/dj";

import { getBanner } from "api/banner";
import { getPrivateContent } from "api/privatecontent";
import { getNewSong } from "api/song";
import { getRecommendPlaylist } from "api/playlist";
import { getPersonalizedMV } from "api/mv";
import { getDjHot } from "api/dj";
import { normalMV } from 'utils/video'
const NAVS = [
  {
    name: "推荐歌单",
    key: "playlist",
  },
  {
    name: "独家放送",
    key: "privateContent",
    hideMore: true,
  },
  {
    name: "最新音乐",
    key: "newSong",
  },
  {
    name: "推荐MV",
    key: "mv",
  },
  {
    name: "主播电台",
    key: "dj",
  },
];
export default {
  components: {
    IndexLayout,
    Banner,
    playlist,
    privateContent,
    newSong,
    mv,
    dj,
  },
  data() {
    return {
      banners: [],
      data: {
        playlist: [],
        privateContent: [],
        newSong: [],
        mv: [],
        dj: [],
      },
      navs: JSON.parse(JSON.stringify(NAVS)),
    };
  },
  created() {
    this._getDate();
  },
  methods: {
    async _getDate() {
      Promise.all([
        getBanner(),
        getPrivateContent(),
        getNewSong(),
        getRecommendPlaylist(),
        getPersonalizedMV(),
        getDjHot(),
      ]).then(
        ([
          { banners },
          { result: privateContent },
          { result: newSong },
          { result: playlist },
          { result: mv },
          { djRadios: dj },
        ]) => {
          banners.forEach((banner) => {
            banner.src = banner.imageUrl;
          });
          this.banners = banners;
          mv = mv.map((item) => {
            return normalMV(item);
          });
          this.data = {
            privateContent,
            newSong,
            playlist,
            mv,
            dj,
          };
        }
      );
    },
  },
};
</script>

<style lang="less" scoped>
</style>