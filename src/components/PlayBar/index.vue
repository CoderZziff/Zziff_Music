<template>
  <div class="player">
    <div class="first-bar">
      <MiniCard/>
    </div>
    <div class="second-bar">
      <div class="state-control">
        <a-button type="link" size="large">
          <BasicIcon type="icon-suiji"></BasicIcon>
        </a-button>
        <a-button type="link" size="large" @click="prev">
          <BasicIcon type="icon-shangyishou"></BasicIcon>
        </a-button>
        <a-button shape="circle" size="large" @click="togglePlay">
          <BasicIcon :type="playIcon"></BasicIcon>
        </a-button>
        <a-button type="link" size="large" @click="next">
          <BasicIcon type="icon-xiayishou"></BasicIcon>
        </a-button>
        <a-button type="link" size="large">
          <BasicIcon type="icon-ci"></BasicIcon>
        </a-button>
      </div>
      <div class="progress-control">
        <time class="time">{{ currentTime | duration }}</time>
        <ProgressSlider
          class="progress-slider"
          :percent="percent"
          @change="onpercentChanged"
        ></ProgressSlider>
        <time class="time">{{ current_song.duration | duration }}</time>
      </div>
    </div>
    <div class="third-bar">
      <div class="functional-area">
        <div>
          <a-button size="small"> 标准 </a-button>
        </div>
        <div>
          <a-button type="link" size="large">
            <BasicIcon type="icon-jingyu"></BasicIcon>
          </a-button>
        </div>
        <div class="volume">
          <a-button type="link" size="large">
            <BasicIcon type="icon-shengyin"></BasicIcon>
          </a-button>
          <ProgressSlider
            class="progress-volume"
            :percent="0.5"
            @change="onvolumeChanged"
          ></ProgressSlider>
          <audio
            crossOrigin="anonymous"
            ref="audio"
            :id="source"
            @play="onPlay"
            @pause="onPause"
            @ended="onEnd"
            @timeupdate="updateTime"
            @waiting="onWaiting"
            @playing="onPlaying"
            @error="onError"
          />
        </div>
        <div>
          <a-button type="link" size="large">
            <BasicIcon type="icon-bofangliebiao"></BasicIcon>
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { playMode } from "config/config";
import { getUrl } from "utils/song";

import MiniCard from "components/Common/MiniCard"
import BasicIcon from "components/BasicIcon";
import ProgressSlider from "components/Common/progressSlider";

import { shuffle } from "utils/calculate.js";
export default {
  components: {
    MiniCard,
    BasicIcon,
    ProgressSlider,
  },
  data() {
    return {
      currentTime: 0,
      isSongReady: false,
      autoplay: false,
      waiting: false,
      buffered: 0,
    };
  },
  mounted() {
    if (Object.keys(this.current_song).length) {
      this.isSongReady = true;
      if (this.current_song.folder && this.current_song.url) {
        this.$refs.audio.src = this.current_song.url;
      } else {
        this.getOnlineSong(this.current_song)
          .then((songUrl) => {
            if (songUrl) {
              this.$store.commit("play/SET_SOURCE", songUrl);
              this.$refs.audio.src = songUrl;
            } else {
              this.$message.error("暂无资源");
              this.$store.commit("play/SET_SOURCE", "");
              this.$store.commit("play/SET_PLAY_STATUS", false);
              this.isSongReady = true;
            }
          })
          .catch((error) => {
            console.log(`获取歌曲播放链接失败:${error}`);
            this.isSongReady = true;
          });
      }
    }
  },
  computed: {
    ...mapState(["play"]),
    ...mapGetters("play", [
      "mode",
      "original_play_list",
      "current_song_index",
      "current_play_list",
      "playing",
      "current_song",
      "history_play_list",
      "source",
      "volume",
      "isMuted",
    ]),
    playIcon() {
      return this.playing ? "icon-ziyuan" : "icon-icon_play";
    },
    percent() {
      return this.currentTime / this.current_song.duration;
    },
    bufferedPercent() {
      return this.buffered / this.current_song.duration;
    },
    disableCls() {
      return this.isSongReady ? "" : "disable";
    },
  },
  methods: {
    async handleSongChange(newSong, oldSong) {
      if (!newSong.id || (oldSong && newSong.id === oldSong.id)) return;
      this.isSongReady = false;
      this.waiting = true;
      this.$refs.audio.pause();
      this.getOnlineSong(newSong)
        .then((songUrl) => {
          if (songUrl) {
            this.$store.commit("play/SET_SOURCE", songUrl);
            this.$refs.audio.src = songUrl;
            this.$refs.audio.play();
          } else {
            this.$message.error("暂无资源");
            this.$store.commit("play/SET_SOURCE", "");
            this.$store.commit("play/SET_PLAY_STATUS", false);
            this.isSongReady = true;
          }
        })
        .catch((error) => {
          console.log(`获取歌曲播放链接失败:${error}`);
          this.isSongReady = true;
        })
        .finally(() => {
          this.waiting = true;
        });
    },
    getOnlineSong(song) {
      return new Promise(async (resolve, reject) => {
        try {
          let songUrl = await getUrl(song.id);
          resolve(songUrl);
        } catch (error) {
          reject(error);
        }
      });
    },
    updateTime(e) {
      const audio = this.$refs.audio;
      this.currentTime = e.target.currentTime;
      const timeRanges = audio.buffered;
      if (timeRanges.length != 0) {
        this.buffered = timeRanges.end(timeRanges.length - 1);
      }
    },
    prev() {
      if (!this.isSongReady) {
        return;
      }
      let list_len = this.current_play_list.length;
      let { current_song_index } = this;
      if (this.mode === playMode.random) {
        current_song_index = this.getRandomInt(0, list_len - 1);
      } else {
        current_song_index--;
        if (current_song_index < 0) current_song_index = list_len - 1;
      }
      this.$store.commit("play/SET_CURRENT_INDEX", current_song_index);
      // if (!this.playing) {
      //   this.$store.commit('play/SET_PLAY_STATUS', true)
      // }
    },
    togglePlay() {
      if (!this.isSongReady) {
        return;
      }
      this.$store.commit("play/SET_PLAY_STATUS", !this.playing);
    },
    next() {
      if (!this.isSongReady) {
        return;
      }
      let list_len = this.current_play_list.length;
      let { current_song_index } = this;
      current_song_index++;
      if (current_song_index > list_len - 1) {
        current_song_index = 0;
      }
      this.$store.commit("play/SET_CURRENT_INDEX", current_song_index);
      // if (!this.playing) {
      //   this.$store.commit('play/SET_PLAY_STATUS', true)
      // }
    },
    onPlay() {
      this.isSongReady = true;
      this.$store.commit("play/SET_PLAY_STATUS", true);
      // 设置底部缩略图标题
      let artistStr = this.current_song.artist.length
        ? this.current_song.artist.map((item) => item.name).join(",")
        : "";
      document.title = `${this.current_song.name} - ${artistStr}`;
      // 添加本地播放历史
      this.$store.dispatch("play/addHistorySong", this.current_song);
      // 如果设置静音将音频音量设置为0
      const audio = this.$refs.audio;
      this.$nextTick(() => {
        if (this.isMuted) {
          audio.volume = 0;
        } else {
          audio.volume = this.volume;
        }
      });
    },
    onPause() {
      this.$store.commit("play/SET_PLAY_STATUS", false);
    },
    onEnd() {
      this.currentTime = 0;
      this.buffered = 0;
      if (this.mode === playMode.loop) {
        this.loop();
      } else {
        this.forward();
      }
    },
    onWaiting() {
      this.waiting = true;
      // 播放期间如果卡住暂定歌词的滚动
      if (this.lyricInstance) {
        this.lyricInstance.stop();
      }
    },
    onPlaying() {
      this.waiting = false;
      if (this.lyricInstance) {
        const currentTime = this.$refs.audio.currentTime;
        this.lyricInstance.seek(currentTime * 1000);
      }
    },
    onError() {
      this.isSongReady = true;
      this.waiting = false;
    },
    onMuted() {
      this.$store.commit("play/SET_MUTED", !this.isMuted);
    },
    changeMode() {
      let mode = this.mode;
      mode = ++mode % (Object.keys(playMode).length - 1);
      this.$store.commit("play/SET_MODE", mode);
      let list = [];
      if (mode === playMode.random) {
        list = shuffle(this.original_play_list);
      } else {
        list = this.original_play_list;
      }
      this.resetCurrentIndex(list);
      this.$store.commit("play/SET_CURRENT_PLAY_LIST", list);
    },
    resetCurrentIndex(list) {
      let index = list.findIndex((item) => {
        return item.id === this.current_song.id;
      });
      this.$store.commit("play/SET_CURRENT_INDEX", index);
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min); // min,max之间的随机数（包含min,max）
    },

    loop() {
      this.$refs.audio.currentTime = 0;
      this.$refs.audio.play();
    },
    onpercentChanged(percent) {
      if (!this.isSongReady) {
        return;
      }
      this.currentTime = this.$refs.audio.currentTime =
        this.current_song.duration * percent;
    },
    onvolumeChanged(persent) {
      if (persent < 0) persent = 0;
      if (persent > 1) persent = 1;
      this.$store.commit("play/SET_VOLUME", Number(persent));
    },
  },
  watch: {
    playing(newVal, oldVal) {
      const audio = this.$refs.audio;

      if (newVal) {
        this.$nextTick(() => {
          audio.play();
        });
      } else {
        audio.pause();
      }
    },
    volume(newVal) {
      const audio = this.$refs.audio;
      newVal = Number(newVal);
      if (newVal == 0) {
        this.$store.commit("play/SET_MUTED", true);
      }
      this.$nextTick(() => {
        audio.volume = newVal;
      });
    },
    isMuted(newVal) {
      const audio = this.$refs.audio;
      this.$nextTick(() => {
        if (newVal) {
          audio.volume = 0;
        } else {
          audio.volume = this.volume;
        }
      });
    },
    current_song: "handleSongChange",
  },
};
</script>

<style lang="less" scoped>
.player {
  display: flex;
}
.second-bar {
  flex: 1;
  .state-control {
    padding-top: 10px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .progress-control {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10px;
    .time {
      padding-top: 3px;
    }
    .progress-slider {
      flex: 0 0 400px;
      margin: 0 5px;
    }
  }
}
.third-bar {
  .functional-area {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    .volume {
      display: flex;
      align-items: center;
      margin-right: 60px;
      .progress-volume {
        flex: 0 0 70px;
        margin-left: -10px;
        margin-top: -5px;
      }
    }
  }
}
</style>