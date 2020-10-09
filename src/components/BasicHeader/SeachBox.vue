<template>
  <div>
    <a-input-search
      placeholder="搜索音乐、视频、歌词、电台..."
      allow-clear
      v-model="keyword"
      class="header-search"
    />
  </div>
</template>

<script>

export default {
  data() {
    return{
      keyword: '',
    }
  },
  created() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.header-search {
  /deep/ .ant-input {
    height: 24px;
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.6);
    border: none;
    box-shadow: none;
    font-size: 12px;
  }
  /deep/ .ant-input-search-icon {
    color: rgba(255, 255, 255, 0.6) !important;
  }
}
</style>
