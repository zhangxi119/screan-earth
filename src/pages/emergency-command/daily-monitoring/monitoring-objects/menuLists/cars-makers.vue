<!--
 * @Descripttion: 监测预警救护车点位
 * @Author: zhangxi
 * @Date: 2020-05-19 09:32:00
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-25 14:31:34
 -->
<template>
  <div>
    <!-- 工具箱类型 -->
    <div class="toolbox">
      <div class="ambulance" @click="handleAmbulance">
        <img src="../../../../../assets/common/car.png"/>
        <span class="name">救护车信息</span>
        <span class="status">{{makerFlag ? 'ON' : 'OFF'}}</span>
      </div>
    </div>
    <!-- 救护车点位 -->
    <div class="car-ambulence">
      <div
        v-for="(item, index) in markerDatas"
        :key="index"
        :id="item.id"
        :style="{zIndex: videoId === item.id ? '8' : '7'}">
        <div @click="videoId = item.id; is_video = false" class="g-img-box" v-if="item.online == 1">
          <img class="big-img" src='../../../../../assets/common/carimg.png' alt="" />
          <div class="makers-title" :title="item.name">{{item.license}}</div>
        </div>
        <div @click="videoId = item.id; is_video = false" class="g-img-box"  v-if="item.online == 0">
          <img class="big-img" src='../../../../../assets/common/no-car.png' alt="" />
          <div class="makers-title" :title="item.name">{{item.license}}</div>
        </div>
        <img v-show="videoId === item.id" src="../../../../../assets/common/event-icon2.png"  class="line2" />
        <div class="g-maker-text" v-show="videoId === item.id">
          <div class="g-close" @click="videoId = ''"></div>
          <h3>{{item.license}}</h3>
          <div class="g-text-item g-text-item2">所属医院：<span>{{item.hospital}}</span></div>
          <div class="g-text-item g-text-item2"><label>当前位置：</label><span class="g-address">{{item.address}}</span></div>
          <div class="g-text-item g-text-item2">司机名称：<span>{{item.driver}}</span></div>
          <div class="g-text-item g-text-item2">速度：<span>{{item.speed}}</span></div>
          <div class="g-text-btn" v-if="item.online == 1">
            <div class="g-btn-item" @click="showVideo(item, 1)">车内视频监控</div>
            <div class="g-btn-item" @click="showVideo(item, 2)">车外视频监控</div>
          </div>
          <div class = "video-box" v-if="is_video">
            <p class = 'maker-title'>
              <img class = "icon" src = "@/assets/emergency-command/emergency-command-chart/bg-selected.png" width="0.12rem"/>{{item.license}}{{videoTitle}}
              <img src = "@/assets/emergency-command/emergency-command-chart/close-bg.png"  @click="is_video = false">
            </p>
            <!-- <video :src="video_src"></video> -->
            <!-- <div class="video-html" v-html="video_src"></div> -->
            <iframe class="video-html" frameborder=0 scrolling=auto :src="video_src"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import API from '@/api/emergency-command/natural-disasters.js'
import API from '@/api/emergency-command/emergency-command-chart.js'
// import API from '@/api/emergency-command/major-hazards/major-hazards.js'
// import leshanArea from '../../../../../../static/CesiumAssets/js/leshanArea.js'
import paginate from '@/components/paginate'
// import { imgPath } from '@/utils/BasePath.js'
import makerComponent from '@/components/maker-component.vue'
export default {
  components: {
    makerComponent,
    paginate
  },
  props: {
    dataList: {
      type: Array,
      required: false
    },
    type: {
      type: Number,
      default: 1,
      required: false
    }
  },
  data () {
    return {
      // 救护车视频参数start
      markerDatas: [],
      makerFlag: false,
      videoTitle: '车内视频',
      videoId: '',
      is_video: false,
      video_src: ''
      // 救护车视频参数end
    }
  },
  created () {
  },
  mounted () {
    // this.getMapData()
  },
  beforeDestroy () {
    window._m.clear()
  },
  methods: {
    // 救护车信息
    handleAmbulance () {
      this.makerFlag = !this.makerFlag
      if (this.makerFlag) {
        API.AMB_LOCATION_ALL(this, {}).then((res) => {
          if (res.data.serviceSuccess) {
            let data = res.data.data.ambLocationAllList
            data.map((re, index) => {
              re.id = 'amb-car' + index
            })
            this.markerDatas = data
            window._m.addMakers(data)
          } else {
            console.log(res.data.errors)
          }
        })
      } else {
        this.markerDatas = []
      }
    },
    // 车内视频
    showVideo (item, type) {
      this.is_video = true
      API.QUERYCARDLIVE(this, { license: item.license }).then(
        res => {
          res = res.data
          if (res.serviceSuccess) {
            let data = res.data
            if (type === 1) { // 车内视频
              this.videoTitle = '车内视频监控'
              this.video_src = data.urlIn
            } else if (type === 2) { // 车外视频
              this.videoTitle = '车外视频监控'
              this.video_src = data.urlOut
            }
          }
        }
      ).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.toolbox{
    position: absolute;
    right: 7.92rem;
    bottom: 6.5rem;
    z-index: 20;
    .ambulance{
    background: url("../../../../../assets/common/carback.png") no-repeat;
    background-size: 100% 100%;
    height: .36rem;
    padding-left: .15rem;
    color: #83EBFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    img{
        width: .35rem;
        height: .35rem;
        margin-right: .05rem;
    }
    .name{
        font-size: .18rem;
        margin-right: .15rem;
        font-style: italic;
    }
    .status{
        display: inline-block;
        height: .16rem;
        line-height: .16rem;
        color: #000;
        font-size: .1rem;
        background: #83EBFF;
        padding: .02rem .04rem;
    }
    }
}
.car-ambulence{
    > div{
        position: absolute;
        z-index: 201;
        margin-top: -.68rem;
        margin-left:-0.34rem
    }
    .line2{
        width: 1rem;
        height: 1rem;
        float: left;
        margin-top: -1.7rem;
        margin-left: .3rem;
    }
}
.g-img-box {
    // width: 0.68rem;
    // height: 0.83rem;
    left: 0;
    top: 0;
    z-index: 7;
    cursor: pointer;
    position: relative;
    // &:hover{
    //     z-index: 999;
    // }
    // &:hover .makers-title{
    //     display: block;
    // }
    .makers-title{
        display: none;
        position: absolute;
        top: -.2rem;
        left: 0;
        transform:translateX(-25%);
        color: #fff;
        font-size: .16rem;
        padding: .03rem .2rem;
        max-width: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background-color: rgba(0,72,107,.5);
        border: .02rem solid rgba(103, 207, 255, .75);
    }
    .big-img {
        width: 0.68rem;
        height: 0.83rem;
        &:hover{
          z-index: 999;
        }
        &:hover ~ .makers-title{
          display: block;
        }
    }
    .small-img {
        width: 0.8rem;
        height: 0.8rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0.45rem;
    }
}
/* 救护车 */
.g-maker-text {
    float: left;
    margin-top: -2rem;
    margin-left: 1.35rem;
    padding: 0.1rem 0.16rem 0.4rem 0.25rem;
    box-sizing: border-box;
    width: 4.05rem;
    font-size: 0;
    // min-height: 6.86rem;
    background: url("../../../../../assets/common/maker-model.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    // overflow: hidden;
    .g-text-btn {
      margin-top: 0.18rem;
      width: 100%;
      height: 0.32rem;
      display: flex;
      justify-content: space-around;
      .g-btn-item {
        height: 0.32rem;
        line-height: 0.32rem;
        cursor: pointer;
        padding: 0 0.16rem;
        font-size:0.17rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        color:rgba(255,255,255,1);
        border:1px solid rgba(69,143,239,1);
        border-radius: 0.15rem;
      }
    }
    .video-box{
      position: absolute;
      left: 100%;
      top: -20%;
      z-index: 999;
      .maker-title{
        font-family:Source Han Sans CN;
        font-weight:bold;
        color:rgba(255,255,255,1);
        font-size: .21rem;
        padding: .18rem 0;
        img{
          width:.24rem;
          height: .25rem;
          float: right;
          cursor: pointer;
        }
      }
      .maker-title{
        font-weight: normal;
        font-size: .21rem;
        img {
          width: 0.21rem;
          height: 0.21rem;
        }
        .icon{
          width: 0.35rem;
          height: 0.35rem;
          float: left;
        }
      }
      display: flex;
      flex-direction: column;
      width: 7.73rem;
      height:5.21rem;
      padding: 0.21rem 0.35rem;
      float: left;
      margin-left: 0.1rem;
      background: url('../../../../../assets/emergency-command/emergency-command-chart/car-vedio-bg.png') no-repeat center/contain;
      video{
        flex: 1;
        height: 3.98rem;
      }
      .video-html {
        flex: 1;
        height: 3.98rem;
      }
    }
    .g-close {
      position: absolute;
      right: 0.21rem;
      top: 0.25rem;
      cursor: pointer;
      width: 0.26rem;
      height: 0.26rem;
      background: url("../../../../../assets/common/natural-close.png") no-repeat;
      background-size: 100% 100%;
    }
    h3 {
      margin-top: 0.20rem;
      padding: 0 0.35rem 0 0;
      box-sizing: border-box;
      font-size:0.22rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:0.3rem;
    }
    .g-text-item {
      display: inline-block;
      min-width: 46%;
      margin-top: 0.18rem;
      // margin-bottom: 0.13rem;
      font-size:0.16rem;
      line-height: 135%;
      font-family: Source Han Sans CN;
      font-weight:bold;
      color:rgba(223,226,251,1);
      span {
        // display: inline-block;
        position: relative;
        font-size:0.16rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        font-style:italic;
        line-height: 0.16rem;
        color:rgba(249,230,89,1);
      }
      label {
        float: left;
        line-height: 0.16rem;
      }
      .g-address {
        width: 2.48rem;
        line-height: 0.2rem;
        float: left;
      }
    }
    .g-text-item2 {
      width: 99%;
    }
    .g-all-num {
      width: 100%;
      overflow: hidden;
      list-style: none;
      li {
        float: left;
        width: 50%;
        height: 0.96rem;
        list-style: none;
        position: relative;
        p {
          padding-left: 0.3rem;
          height:0.24rem;
          font-size:0.18rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          font-style:italic;
          color:rgba(223,227,251,1);
          &::before {
            content: '';
            display: inline-block;
            width: 0.21rem;
            height: 0.24rem;
            background: url("../../../../../assets/common/maker-text.png") no-repeat;
            background-size: 100% 100%;
            position: absolute;
            left: 0;
            top: 0;
          }
        }
        .g-num-text {
          margin-left: 0.24rem;
          width: 1.45rem;
          height: 0.72rem;
          background: url("../../../../../assets/common/num-bg.png") no-repeat;
          background-size: 100% 100%;
          line-height: 0.72rem;
          text-align: center;
          font-size:0.17rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          font-style:italic;
          color:rgba(255,255,255,1);
          span {
            font-size:0.3rem;
            font-family:Impact;
            font-weight:bold;
            font-style:italic;
            color:rgba(249,230,89,1);
          }
        }

      }
    }
    .g-border-line {
      margin: 0;
      width: 100%;
      height: 0.01rem;
      border-bottom: 0.01rem dashed rgba(72,170,244,1);
    }
    .g-text-box {
      width: calc(100% - 0.12rem);
      margin-right: 0.12rem;
      margin-bottom: 0.16rem;
      padding: 0 0.2rem;
      font-size: 0;
      box-sizing: border-box;
      // min-height: 1.6rem;
      height: 2.2rem;
      overflow: hidden;
      background: url("../../../../../assets/common/maker-small-box.png") no-repeat;
      background-size: 100% 100%;
      .color-green {
        color: #73D477;
      }
      .g-text-nav {
        width: 100%;
        margin-top: 0.35rem;
        position: relative;
        .g-nave-page {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.14rem;
          color: #ffffff;
          display: inline-block;
        }
      }
    }
}
</style>
