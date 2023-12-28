<!--
 * @Descripttion: 视频放大弹窗
 * @Author: chenqy
 * @Date: 2020-05-12
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-28
 -->
<template>
  <div class="videoRights">
    <div class="video-big-header">
      <p>{{name}}</p>
      <img class="close-img" @click="closeModal" src="@/assets/common/closepopicon.png"/>
    </div>
    <div class="videoRightbottom" id="video-right-bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'video-big',
  props: {
    // 视频名字
    name: {
      type: String,
      required: false,
      default: '默认视频'
    },
    // 视频地址
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      swfurl: './static/libs/flowplayer/flowplayer-3.2.18.swf'
    }
  },
  mounted () {
    this.playVideo()
  },
  methods: {
    // 播放视频
    playVideo () {
      window.$f('video-right-bottom', this.swfurl, {
        clip: {
          url: this.url,
          autoPlay: true,
          autoBuffering: true
        },
        plugins: {
          controls: null
        }
      })
    },
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
  .videoRights{
    width: 100%;
    height: 100%;
    .video-big-header{
      display: flex;
      justify-content: space-between;
      padding: .3rem;
      p{
        color: #fff;
        font-size: 0.3rem;
      }
      .close-img{
        width: 0.38rem;
        cursor: pointer;
      }
    }
    .videoRightbottom{
      width: 12.80rem;
      height: 7.20rem;
      margin-left: 0.4rem;
    }
  }
</style>
