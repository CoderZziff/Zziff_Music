<template>
  <a-config-provider :locale="locale">
    <a-layout class="basic-layout">
      <a-layout-header class="basic-layout-header">
        <BasicHeader></BasicHeader>
      </a-layout-header>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <a-layout-footer class="basic-layout-footer">
        <PlayBar></PlayBar>
      </a-layout-footer>
    </a-layout>
  </a-config-provider>
</template>

<script>
import BasicHeader from "components/BasicHeader";
import PlayBar from "components/PlayBar";
import Offline from "components/Offline/index";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
const SIDER_WIDTH_DEFAULT = 200;
export default {
  name: "layouts",
  data() {
    return {
      locale: zhCN,
      refresh: false,
      keepAliveExcludeList: ["video", "mv", "events"],
      siderWidth: SIDER_WIDTH_DEFAULT,
    };
  },
  computed: {},
  components: {
    BasicHeader,
    PlayBar,
    Offline,
  },
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.basic-layout {
  height: 100vh;
  .basic-layout-header {
    background-color: @primary-color;
    height: 60px;
    line-height: 60px;
    padding: 0;
    z-index: 2;
    color: #eee;
    -webkit-app-region: drag;
  }
  .basic-layout-footer {
    height: 75px;
    line-height: 75px;
    padding: 0 15px;
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .basic-layout-footer {
    border-top: 1px solid #ddd;
  }
}
</style>
