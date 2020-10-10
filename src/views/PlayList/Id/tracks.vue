<template>
  <div class="tracks">
    <TrackList :tracks="tracks" @dblclick="play" />
  </div>
</template>

<script>
import TrackList from 'components/Common/track-list/index.js'
import playMixin from 'mixins/Play'
export default {
  name: 'playlist_id_tracks',
  mixins: [
    playMixin
  ],
  components: {
    TrackList
  },
  props: {
    tracks: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.tracks {
  margin-top: -1px;
}
</style>
