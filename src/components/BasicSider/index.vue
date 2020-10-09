<template>
  <div>
    <a-menu>
      <a-menu-item-group key="recommend">
        <div slot="title">
          <span>推荐</span>
        </div>
        <template v-for="item in recommendList">
          <a-menu-item :key="item.name">
            <router-link class="link" :to="item.path">
              <BasicIcon v-if="item.meta.icon" :type="item.meta.icon" />
              <span>{{ item.meta.title }}</span>
            </router-link>
          </a-menu-item>
        </template>
      </a-menu-item-group>
      <a-menu-item-group key="myMusic">
        <div slot="title">
          <span>我的音乐</span>
        </div>
        <template v-for="item in myMusic">
          <a-menu-item :key="item.name">
            <router-link class="link" :to="item.path">
              <BasicIcon v-if="item.meta.icon" :type="item.meta.icon" />
              <span>{{ item.meta.title }}</span>
            </router-link>
          </a-menu-item>
        </template>
      </a-menu-item-group>
    </a-menu>
  </div>
</template>

<script>
import BasicIcon from "components/BasicIcon";
export default {
  data() {
    return {
      recommendList: [
        {
          path: "/home",
          name: "home",
          meta: {
            title: "发现音乐",
          },
        },
        {
          path: "/mv",
          name: "mv",
          meta: {
            title: "视频",
          },
        },
        {
          path: "/private_fm",
          name: "private_fm",
          meta: {
            title: "私人FM",
          },
        },
        {
          path: "/live",
          name: "live",
          meta: {
            title: "直播",
          },
        },
      ],
      myMusic: [
        {
          path: "/music_local",
          name: "music_local",
          meta: {
            title: "本地音乐",
            icon:"icon-yinfu"
          },
        },
        {
          path: "/music_download",
          name: "music_download",
          meta: {
            title: "下载管理",
            icon:"icon-shipinjiankongicon-"
          },
        },
        {
          path: "/music_cloud",
          name: "music_cloud",
          meta: {
            title: "我的音乐云盘",
            icon:"icon-yunpan"
          },
        },
        {
          path: "/music_broadcast",
          name: "music_broadcast",
          meta: {
            title: "我的电台",
            icon:"icon-yule_yinlediantai"
          },
        },
        {
          path: "/music_collect",
          name: "music_collect",
          meta: {
            title: "我的收藏",
            icon:"icon-wodeshoucang1"
          },
        },
      ],
    };
  },
  components: {
    BasicIcon,
  },
};
</script>

<style lang="less" scoped>
</style>