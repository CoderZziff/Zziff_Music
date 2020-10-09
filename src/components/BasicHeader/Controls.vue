<template>
  <a-button-group size="small">
    <a-button :ghost="true" @click="back">
      <BasicIcon type="icon-arrow-left-bold" />
    </a-button>
    <a-button :ghost="true" @click="forward">
      <BasicIcon type="icon-arrow-right-bold" />
    </a-button>
  </a-button-group>
</template>

<script>
import BasicIcon from "components/BasicIcon";
export default {
  name: "Controls",
  components: {
    BasicIcon,
  },
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
  },
};
</script>

<style lang="less" scoped>
.ant-btn {
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
