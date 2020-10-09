<template>
  <div class="offline">
    <BasicIcon type="lixian" class="icon" />
    <div class="text">请检查网络连接</div>
  </div>
</template>

<script>
import BasicIcon from 'components/BasicIcon'
export default {
  data () {
    return {}
  },
  components: {
    BasicIcon
  }
}
</script>

<style lang="less" scoped>
.offline {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .icon {
    font-size: 200px;
    color: #999;
  }
  .text {
    margin-top: 10px;
  }
}
</style>
