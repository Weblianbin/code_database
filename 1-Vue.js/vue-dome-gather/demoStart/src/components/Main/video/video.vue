<template>
  <div class="videoBox">
    <video-player
      id="myvideo"
      class="video-player vjs-custom-skin"
      ref="VPlayer"
      :options="playerOptions"
      :playsinline="true"
      v-if="show"
      :style="playerStyle"
      >
    </video-player>
  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
export default {
  components: {
    videoPlayer
  },
  props: {
    videoItem: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  mounted () {
    this.start()
    // 用setTimeout才可以获取到refs
    setTimeout(() => {
      // 由于屏幕旋转只有在移动端生效,这里就不运行这个全屏函数
      // this.handleFullScreen()
    }, 0)
  },
  data () {
    return {
      playerOptions: {
        // videojs options
        autoplay: false,
        muted: false,
        language: 'zh-CN',
        techOrder: ['html5'],
        sourceOrder: true,
        // flash: { hls: { withCredentials: false } },
        // html5: { hls: { withCredentials: false } },
        // playbackRates: [0.7, 1.0, 1.5, 2.0],
        // 这个可以去除黑屏
        // aspectRatio: '16:9',
        fluid: true,
        width: document.documentElement.clientWidth,
        sources: [{
          type: 'video/mp4',
          src: ''
        }],
        poster: '',
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: { // 配置控制栏
          timeDivider: false, // 时间分割线
          durationDisplay: false, // 总时间
          // progressControl: true, // 进度条
          // customControlSpacer: true, // 未知
          fullscreenToggle: true, // 全屏,
          volumeMenuButton: {
            inline: false,
            vertical: true
          }
        }
      },
      videoSrc: {},
      show: false,
      playerStyle: {
      },
      isFullScreen: false
    }
  },
  computed: {
  },
  methods: {
    start () {
      // this.playerOptions.sources[0].src = this.videoItem.baseUrl + '/sxun-service-cms/file/' + this.videoItem.video_file_id
      // this.playerOptions.sources[0].src = 'http://vjs.zencdn.net/v/oceans.mp4'
      // this.playerOptions.poster = this.videoItem.baseUrl + '/sxun-service-cms/file/' + this.videoItem.cover_file_id
      this.playerOptions.sources[0].src = 'http://babylife.qiniudn.com/FtRVyPQHHocjVYjeJSrcwDkApTLQ'
      this.playerOptions.poster = 'static/news/2.jpg'
      this.show = true
    },
    handleFullScreen () {
      var player = this.$refs.VPlayer.player
      // var WW = document.documentElement.clientWidth
      // var WH = document.documentElement.clientHeight
      // var video = document.querySelector('.video-js')
      player.on('fullscreenchange', (e) => {
        if (this.isFullScreen === false) {
          screen.orientation.lock('landscape')
          this.isFullScreen = true
          // video.setAttribute('style', `
          //   height: ${WW}px !important;
          //   width: ${WH}px !important;
          //   max-width: none;
          //   transform: rotate(90deg);
          // `)
          // video.setAttribute('style', `
          //   max-width: none;
          //   transform: rotate(55deg);
          //   width: 500px !important;
          //   height: 300px !important;
          // `)
        } else {
          this.isFullScreen = false
          // 这个只有在移动端生效
          screen.orientation.lock('portrait')
          // video.setAttribute('style', '')
        }
      })
    }
  }
}
</script>

<style scoped>
.videoBox{
  height: 300px;
  width: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
}
#myvideo{
  height: 100%;
  width: 300px;
}
</style>
