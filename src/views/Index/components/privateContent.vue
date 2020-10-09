<template>
  <div class="private-content">
    <ul class="list">
      <ListItem imgParam="550y220" :item-type="getType(item)" :ratio="0.43" class="list-item" v-for="(item) in list"
                 :item="item" :key="`${item.id}_${item.videoId}`">
        <div slot="copywriter" class="copywriter" v-if="item.copywriter">{{item.copywriter}}</div>
      </ListItem>
    </ul>
  </div>
</template>

<script>
import ListItem from 'components/Common/listItem'

export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    ListItem
  },
  methods: {
    getType (item) {
      return typeof item.id === 'number' ? 'mv' : 'video'
    }
  }
}
</script>

<style lang="less" scoped>
  .list {
    display: flex;
    justify-content: space-between;
    .list-item {
      width: 32%;
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
        background: rgba(0, 0, 0, .3);
        color: #fff;
        transform: translateY(-100%);
        transition: all .3s;
      }
    }
  }
</style>
