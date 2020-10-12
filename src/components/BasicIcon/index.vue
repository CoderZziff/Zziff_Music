<template>
  <BaseIcon :type="`${type}`" />
</template>

<script>
import { Icon } from 'ant-design-vue'

// let iconURL = 'assets/iconfont/icon.js'
const iconURL = 'https://at.alicdn.com/t/font_2116353_ta3zfntgjag.js'

let BaseIcon = Icon.createFromIconfontCN({
  scriptUrl: iconURL
})

export default {
  components: {
    BaseIcon
  },
  props: {
    type: {
      type: String,
      default:"",
    }
  }
}
</script>
