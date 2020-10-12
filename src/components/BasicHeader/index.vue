<template>
  <div class="top-bar">
    <div class="top-bar-logo">
      <img src="~assets/images/logo.svg" alt="LOGO">
    </div>
    <div class="top-bar-main">
      <div class="top-bar-control">
        <Controls/>
      </div>
       <div class="top-bar-search">
        <SearchBox/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Controls from './Controls'
import SearchBox from './SeachBox'
export default {
  name:"BasicHeader",
  components: {
    Controls,
    SearchBox,
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="less">
.top-bar {
  display: flex;
  height: 100%;
  overflow: hidden;
  .top-bar-logo {
    display: flex;
    align-items: center;
    width: 200px;
    flex: 0 0 200px;
    padding-left: 15px;
    img {
      width: 140px;
    }
  }
  .top-bar-main {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .top-bar-search {
      width: 240px;
      flex: 0 0 240px;
      -webkit-app-region: no-drag;
    }
    .top-bar-control {
      margin-right: 5px;
      -webkit-app-region: no-drag;
      @{deep} .ant-btn {
        height: 24px;
        line-height: 22px;
      }
    }
  }
}

</style>
