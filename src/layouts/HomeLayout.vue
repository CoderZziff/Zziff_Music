<template>
  <div>
    <a-layout class="home-layout">
      <a-layout-sider class="basic-layout-sider">
        <BasicSider></BasicSider>
      </a-layout-sider>
      <a-layout-content class="basic-layout-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import BasicSider from "components/BasicSider";
export default {
  components: {
    BasicSider,
  },
};
</script>

<style lang="less" scoped>
.home-layout {
  position: absolute;
  top: 60px;
  bottom: 75px;
  left: 0;
  right: 0;
  min-height: calc(100vh - 135px);
}
.basic-layout-sider {
  position: relative;
  background: #ffffff;
  border-right: 1px solid #e1e1e1;
  /deep/ .ant-menu {
    border: none;
  }
}
.basic-layout-content {
  background: #ffffff;
}
</style>