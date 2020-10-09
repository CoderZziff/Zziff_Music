<template>
  <div class="playlist">
    <ul class="list">
      <ListItem class="list-item" v-for="(item) in playlist" :item="item" :key="item.id">
        <div slot="copywriter" class="copywriter" v-if="item.copywriter">{{item.copywriter}}</div>
      </ListItem>
    </ul>
  </div>
</template>

<script>
import ListItem from 'components/Common/listItem'
import { mapGetters } from 'vuex'

export default {
  name: 'playlist',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    playlist () {
      return this.list.slice(0, 10)
    }
  },
  components: {
    ListItem
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
@gutter: 1%;
.list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 -@gutter;
  .list-item {
    width: 18%;
    margin-left: @gutter;
    margin-right: @gutter;
    margin-bottom: 5px;
    cursor: pointer;
    .date {
      position: relative;
      padding-top: 100%;
      border: 1px solid #eee;
      .info {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 1.1;
        background: #fff;
        .week {
          font-size: 22px;
        }
        .day {
          font-size: 90px;
          color: @primary-color;
        }
      }
    }
    &:hover {
      .copywriter {
        transform: translateY(0);
      }
      /deep/ .top {
        display: none;
      }
    }
    .copywriter {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      padding: 6px;
      background: rgba(0, 0, 0, 0.3);
      color: #fff;
      transform: translateY(-100%);
      transition: all 0.3s;
    }
  }
}
</style>
