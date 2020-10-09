<template>
  <div class="newSong">
    <SongItem :bordered="true" :tracks="_tracks" @onclick="play" />
  </div>
</template>

<script>
import SongItem from "components/Common/songItem";
import { normalSong } from "utils/song";

export default {
  data() {
    return {
      tracks: [],
    };
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    _tracks() {
      this.list.forEach((item) => {
         this.tracks.push(normalSong(item.song, "44y44"));
      });
      return this.tracks
    },
  },
  components: { SongItem },
  methods: {
    play(tracks, index) {
      this.$store.dispatch("play/appendPlay", tracks[index]);
    },
  },
};
</script>

<style lang="less" scoped>
.newSong {
  height: 290px;
}
</style>
