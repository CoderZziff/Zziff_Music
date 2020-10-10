<template>
  <div class="thumbnail" v-show="Object.keys(current_song).length">
    <div class="image">
      <img v-lazy="current_song.avatar" :key="current_song.avatar" alt="" />
    </div>
    <section class="info">
      <header class="info-header">
        <h5 class="songname" :title="current_song.name">
          {{ current_song.name }}
        </h5>
        <span class="icon-wrapper" v-if="!current_song.folder">
          <song-heart />
        </span>
      </header>
      <footer class="info-footer">
        <div class="artist" @click.stop>
          <artists :artists="current_song.artist" />
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SongHeart from "components/Common/songHeart";
import Artists from "components/Common/artists";
export default {
  components: {
    SongHeart,
    Artists,
  },
  computed: {
    ...mapGetters("play", ["current_song"]),
  },
};
</script>

<style lang="less" scoped>
.thumbnail {
  display: flex;
  align-items: center;
  .image {
    margin-right: 12px;
    img {
      cursor: pointer;
      width: 50px;
      border-radius: 10%;
    }
  }
  .info {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 120px;
    .info-header,
    .info-footer {
      display: flex;
      line-height: 100%;
      .songname,
      .artist {
        flex: 1;
        margin: 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 14px;
        @{deep} a {
          font-size: 14px;
        }
      }
    }
  }
}
</style>