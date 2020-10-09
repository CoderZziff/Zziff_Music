<template>
  <div>
    <a-slider @change="change" v-model="getPercent" :min="0" :max="1" :step="0.01" :tooltipVisible="false"/>
  </div>
</template>
<script>
export default {
  data(){
    return{
      getPercent:this.percent
    }
  },
  props:{
    percent:{
      type:Number,
      default:0,
    }
  },
  methods:{
    change(e){
      this.$emit("change", e);
    }
  },
  watch:{
    percent(val){
      this.getPercent=val;
    }
  }
};
</script>

<style lang="less" scoped>
</style>