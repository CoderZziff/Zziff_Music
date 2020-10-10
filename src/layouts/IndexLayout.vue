<template>
  <section class="index-layout">
    <header class="index-header">
      <nav>
        <router-link
          :to="item.href"
          v-for="(item, index) in topMenus"
          :key="index"
          >{{ item.title }}</router-link
        >
      </nav>
    </header>
    <section class="index-content">
      <slot></slot>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    topMenus: {
      type: Array,
      default() {
        return [
          {
            title: "个性推荐",
            href: "/index",
          },
          {
            title: "歌单",
            href: "/playlist",
          },
          {
            title: "主播电台",
            href: "/dj",
          },
          {
            title: "排行榜",
            href: "/rank",
          },
          {
            title: "歌手",
            href: "/artist",
          },
          {
            title: "最新音乐",
            href: "/newSong",
          },
        ];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.index-header {
  a {
    display: inline-block;
    margin: 0 30px;
    color: #333;
    line-height: 50px;
    &.router-link-exact-active,
    &.router-link-active {
      border-bottom: 3px solid @primary-color;
      color: @primary-color;
    }
  }
}
.index-content{
  position: relative;
  max-width: 1200px;
  padding: 0 30px;
  margin: auto;
}
</style>