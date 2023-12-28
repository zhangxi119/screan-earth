<!--
 * @Descripttion: 九曲栈道 弹窗
 * @Author: chenqy
 * @Date: 2020-05-18
 * @LastEditors: chenqy
 * @LastEditTime: 2020-05-18
 -->
<template>
  <div class="model-detail-message">
    <div class="modal-header">
      <span>{{datas.scenicName}}</span>
      <img @click="handleClose" src="../../assets/common/natural-close.png">
    </div>
    <!-- <div class="model-detail-class">
      <div>
        <p>入栈人数</p>
      </div>
    </div> -->
    <div class="modal-class-three" v-if="datas.getInPeo||datas.ingPeo||datas.outPeo">
      <div class="modal-class-single">
        <p>入栈人数</p>
        <div>
          <span class="class-single-1">{{datas.getInPeo}}</span>
          人
        </div>
      </div>
      <div class="modal-class-single">
        <p>在栈人数</p>
        <div>
          <span class="class-single-2">{{datas.ingPeo}}</span>
          人
        </div>
      </div>
      <div class="modal-class-single">
        <p>出栈人数</p>
        <div>
          <span class="class-single-3">{{datas.outPeo}}</span>
          人
        </div>
      </div>
    </div>
    <div class="model-videos">
      <div class="model-videos-header">
        <p class="modal-single-title">视频监控</p>
        <div class="title-select" style="z-index: 9;" >
          <div class="select" @click="handleOpen">
            <span>查看明细</span>
            <img src="../../assets/emergency-command/emergency-command-chart/detail.png">
          </div>
        </div>
      </div>
      <div class="model-videos-body">
        <div class="modal-video-list">
          <div class="modal-video-single" v-for="(item,index) in datas.vediosList" :key="'video-tour-common-'+index">
            <div class="g-video-box">
              <p class="video-name">{{item.name}}</p>
              <div class="video-box" :id="'video-tour-common-'+index"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tourism-model-1.vue',
  props: {
    datas: {
      type: Object
    }
  },
  data () {
    return {
      swfurl: './static/libs/flowplayer/flowplayer-3.2.18.swf'
    }
  },
  mounted () {
    console.log(this.datas.vediosList)
    // if (this.datas.vediosList.length > 4) {
    //   this.datas.vediosList = this.datas.vediosList.slice(0, 4)
    // }
    this.datas.vediosList.forEach((re, index) => {
      this.playVideo('video-tour-common-' + index, re.url)
    })
  },
  methods: {
    handleOpen () {
      this.$emit('openDetail')
    },
    handleClose () {
      this.$emit('close')
    },
    playVideo (id, url) {
      window.$f(id, this.swfurl, {
        clip: {
          url: url,
          autoPlay: true,
          autoBuffering: true
        },
        plugins: {
          controls: null
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.model-detail-message{
  width: 4.85rem;
  background: url("../../assets/common/detail-kuang.png") no-repeat;
  background-size: 100% 100%;
  padding: .33rem .15rem;
  z-index: 100;
  .modal-single-title{
    font-size: .18rem;
    font-weight: bold;
    color: #fff;
    margin: 0.1rem 0;
  }
  .modal-header{
    height: .35rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span{
      font-size: .22rem;
      font-weight: bold;
      color: #fff;
    }
    img{
      width: .24rem;
      height: .24rem;
      cursor: pointer;
    }
  }
  .modal-class-three{
    display: flex;
    .modal-class-single{
      flex: 1;
      text-align: center;
      .class-single-1{
        color: #66FAFF;
      }
      .class-single-2{
        color: #F9E659;
      }
      .class-single-3{
        color: #90FAAA;
      }
      p{
        font-size: .17rem;
        background: linear-gradient(top, #CAFDFB, #FFFFFF);
        -webkit-background-clip: text;
        color: transparent;
      }
      div{
        height: .55rem;
        line-height: .55rem;
        color: #fff;
        font-size: .15rem;
        background: url("../../assets/city-management/economic-run/three-base/num-bk.png") no-repeat;
        background-size: 100% 100%;
        span{
          font-size: .26rem;
          font-family: Impact;
        }
      }
    }
  }
  .model-videos-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .05rem;
  }
  .modal-video-list{
    display: flex;
    flex-wrap: wrap;
    height: 3.36rem;
    overflow: auto;
    justify-content: space-between;
    .modal-video-single{
      position: relative;
      width: 48%;
      height: 1.5rem;
      margin-bottom: .18rem;
      .video-name{
        position: absolute;
        left: .05rem;
        bottom: .05rem;
        color: #fff;
        font-size: .16rem;
      }
      .video-box {
        width: 100%;
        height: 1.5rem;
      }
    }
  }
  .title-select{
    .select{
      position: relative;
      background: #034073;
      border-radius: 0.2rem;
      height: 0.25rem;
      line-height: 0.25rem;
      border: 2px solid #2368b1;
      padding: 0 .4rem 0 .2rem;
      font-size: 0.16rem;
      color: #fff;
      cursor: pointer;
      img{
        position: absolute;
        width: .16rem;
        height: .16rem;
        top: .05rem;
        right: .15rem;
      }
    }
  }
}
</style>
