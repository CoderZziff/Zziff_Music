<template>
  <Slider ref="slider" :autoPlay="true" :width="width" :height="width*0.7*0.372" :list="banners" />
</template>

<script>
import Slider from 'components/Slider'
export default {
  name: 'banner',
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      width: 760
    }
  },
  components: {
    Slider
  },
  deactivated () {
    this.$refs.slider.pause()
    window.removeEventListener('resize', this.handleResize)
  },
  activated () {
    this.$nextTick(() => {
      let dom = this.$refs.slider.$el.parentNode
      this.width = dom.clientWidth || 1000
    })
    window.addEventListener('resize', this.handleResize)
  },
  mounted () {
    this.$nextTick(() => {
      let dom = this.$refs.slider.$el.parentNode
      this.width = dom.clientWidth || 1000
    })
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.$nextTick(() => {
        let dom = this.$refs.slider.$el.parentNode
        this.width = dom.clientWidth
      })
    }
  }
}
</script>
