<!--
 * @Descripttion: 峨眉山景区
 * @Author: chenqy
 * @Date: 2020-05-18
 * @LastEditors: chenqy
 * @LastEditTime: 2020-05-18
 -->
<template>
 <div class="modal-tourism">
  <div class="modal-header">
    <span v-if="datas.id==='tourism-emei'">峨眉山风景区</span>
    <span v-if="datas.id==='tourism-lxgy'">绿心公园</span>
    <img src="../../assets/common/natural-close.png" @click="handleClose">
  </div>
   <div class="model-middle" v-if="datas.id==='tourism-emei'">
     <div class="model-middle-info">
       <p class="modal-single-title">当日景区客流量</p>
       <div class="modal-middle-num">
         <img src="../../assets/common/icon11.png">
         <div>
           <span>{{parseFloat(datas.eMeitodayPeoSum).toLocaleString()}}</span>人
         </div>
       </div>
       <p class="modal-single-title">本月来源省客流量排名</p>
       <div class="modal-rank">
         <div>
           <div class="rank-img rank-1">
             1
           </div>
           <div class="modal-rank-msg">
             <div class="modal-rank-hh"><span>{{datas.eMeiMonthProvinceRank[0].province}}</span><span>{{parseFloat(datas.eMeiMonthProvinceRank[0].peoNum).toLocaleString()}}人</span></div>
             <div class="progress-rank">
               <div class="rel-rank"></div>
             </div>
           </div>
         </div>
         <div>
           <div class="rank-img rank-2">
             2
           </div>
           <div class="modal-rank-msg">
             <div class="modal-rank-hh"><span>{{datas.eMeiMonthProvinceRank[1].province}}</span><span>{{parseFloat(datas.eMeiMonthProvinceRank[1].peoNum).toLocaleString()}}人</span></div>
             <div class="progress-rank">
               <div class="rel-rank"></div>
             </div>
           </div>
         </div>
         <div>
           <div class="rank-img rank-3">
             3
           </div>
           <div class="modal-rank-msg">
             <div class="modal-rank-hh"><span>{{datas.eMeiMonthProvinceRank[2].province}}</span><span>{{parseFloat(datas.eMeiMonthProvinceRank[2].peoNum).toLocaleString()}}人</span></div>
             <div class="progress-rank">
               <div class="rel-rank"></div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div class="model-middle-trend">
       <p class="modal-single-title">近15日游客接待趋势</p>
       <div class="chart-div" id="chart-15"></div>
     </div>
   </div>
   <div class="model-videos">
     <div class="model-videos-header">
       <p class="modal-single-title">视频监控</p>
       <div class="title-select" style="z-index: 9;" >
         <div class="select"  @click="handleOpen">
           <span>查看明细</span>
           <img src="../../assets/emergency-command/emergency-command-chart/detail.png">
         </div>
       </div>
     </div>
     <div class="model-videos-body">
       <div class="modal-video-list">
         <div class="modal-video-single" v-for="(item, index) in datas.eMeiVedios" :key="index">
           <div class="g-video-box">
             <p class="video-name">{{item.name}}</p>
             <div :id="'video'+index"></div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
import cahrtLine from '@/echarts-data/components'
import echarts from 'echarts'
export default {
  name: 'tourism-modal',
  props: {
    datas: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      swfurl: './static/libs/flowplayer/flowplayer-3.2.18.swf'
    }
  },
  mounted () {
    if (this.datas.id === 'tourism-emei') {
      echarts.init(document.getElementById('chart-15')).setOption(cahrtLine(this.datas.eMeipeoNum15Days))
    }
    if (this.datas.eMeiVedios.length > 4) {
      this.datas.eMeiVedios = this.datas.eMeiVedios.slice(0, 4)
    }
    this.datas.eMeiVedios.forEach((re, index) => {
      this.playVideo('video' + index, re.url)
    })
  },
  methods: {
    handleOpen () {
      this.$emit('openDetail')
    },
    handleClose () {
      this.$emit('close')
    },
    // 视频播放
    playVideo (id, url) {
      url = url.trim()
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
.modal-tourism{
  width: 6.6rem;
  max-height: 7.8rem;
  background: url("../../assets/common/detail-kuang.png") no-repeat;
  background-size: 100% 100%;
  padding: .33rem .15rem;
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
  .model-middle{
    display: flex;
    margin-top: .1rem;
    .model-middle-info{
      flex: 1;
      .modal-middle-num{
        margin-top: .1rem;
        width: 95%;
        height: .8rem;
        background: url("../../assets/common/tourism.png") no-repeat;
        background-size: 100%;
        display: flex;
        align-items: center;
        img{
          width: 1.03rem;
          height: .34rem;
          margin-left: .44rem;
        }
        > div{
          margin-left: .19rem;
          margin-top: .04rem;
          color: #FEFC75;
          font-weight:bold;
          font-style: italic;
          font-size: .16rem;
          span{
            font-family: DIN Alternate;
            font-size: .26rem;
          }
        }
      }
      .modal-rank{
        > div{
          display: flex;
        }
        .rank-img{
          width: .5rem;
          height: .52rem;
          text-align: center;
          line-height: .45rem;
          color: #fff;
          font-size: .16rem;
        }
        .rank-1{
          background: url("../../assets/city-management/common-service/medical-resource/no-01.png") no-repeat;
          background-size: 100% 100%;
          background-position-x: 50%;
        }
        .rank-2{
          background: url("../../assets/city-management/common-service/medical-resource/no-02.png") no-repeat;
          background-size: 100% 100%;
        }
        .rank-3{
          background: url("../../assets/city-management/common-service/medical-resource/no-03.png") no-repeat;
          background-size: 100% 100%;
        }
        .modal-rank-msg{
          span:nth-child(1){
            font-size: .17rem;
            color: #fff;
          }
          span:nth-child(2){
            font-size: .18rem;
            color: #EDD6AE;
          }
          .modal-rank-hh{
            display: flex;
            justify-content: space-between;
            margin-bottom: .08rem;
          }
          .progress-rank{
            position: relative;
            width: 2.7rem;
            height: .06rem;
            border-radius: .03rem;
            background-color: rgba(123,208,240,.2);
            overflow: hidden;
            .rel-rank{
              position: absolute;
              top: 0;
              left: 0;
              width: 90%;
              height: .06rem;
              background: linear-gradient(90deg,rgba(102,175,235,1) 0%,rgba(123,208,240,1) 100%);
            }
          }
        }
      }
    }
    .model-middle-trend{
      flex: 1;
      .chart-div{
        width: 100%;
        height: 2.7rem;
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
    height: 3.70rem;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .modal-video-single{
      position: relative;
      width: 48%;
      height: 1.73rem;
      margin-bottom: .18rem;
      .video-name{
        position: absolute;
        left: .05rem;
        bottom: .05rem;
        color: #fff;
        font-size: .16rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
      }
      .g-video-box{
        > div {
          height: 1.73rem;
        }
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
