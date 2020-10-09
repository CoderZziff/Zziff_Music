
export default {
  created () {
    this.videoType = 'mv'
  },
  methods: {
    play (id) {
      this.$store.commit('Video/SET_VIDEO_TYPE', this.videoType)
      this.$store.commit('Video/SET_VIDEO_ID', id)
    }
  }
}
