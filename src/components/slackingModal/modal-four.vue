<!--
 * @Descripttion: 模型样式参考 --- 应急指挥--防汛抗旱指挥部
 * @Author: chenqy
 * @Date: 2020-04-12
 * @LastEditors: leizq
 * @LastEditTime: 2020-04-27 16:16:03
 -->
<template>
  <div class="modal-box" :style="{width: width+'rem'}">
    <div class="modal-type-close">
      <p class="modal-close-title" v-if="type !== 'protection'">{{data.baseInfo.name}}</p>
      <p class="modal-close-title" v-if="type === 'protection'">重点防护目标</p>
      <div class="modal-close-icon" @click.stop="handleClose"></div>
    </div>
    <div class="modal-p-name" v-if="type === 'protection'">{{data.baseInfo.name}}</div>
    <div class="modal-middle">
      <slot name="modal-costom"></slot>
    </div>
    <div class="modal-bot" v-if="type === 'headerquarter'">
      <div class="costom-modal costom-one">
        <span class="title">办公室负责人：</span>
        <div>
          <div>{{data.baseInfo.linkman01}}</div>
          <div>{{data.baseInfo.phone01}}<img class="phone-icon" src="../../assets/emergency-command/emergency-command-chart/icon-tel.png"></div>
        </div>
      </div>
      <div class="costom-modal costom-one">
        <span class="title">具体经办人：</span>
        <div>
          <div>{{data.baseInfo.linkman02}}</div>
          <div>{{data.baseInfo.phone02}}<img class="phone-icon" src="../../assets/emergency-command/emergency-command-chart/icon-tel.png"></div>
        </div>
      </div>
    </div>
    <div class="modal-bot" v-if="type === 'protection'">
    <div class="costom-modal costom-one">
      <span class="title">地址：</span>
      <div>{{data.baseInfo.address}}</div>
    </div>
    <!--<div class="costom-modal costom-one">-->
      <!--<span class="title">常用联系方式：</span>-->
      <!--<div>-->
        <!--<div v-if="data.baseInfo.phone01">{{data.baseInfo.phone01}}<img class="phone-icon" src="../../assets/emergency-command/emergency-command-chart/icon-tel.png"></div>-->
        <!--<div v-if="data.baseInfo.phone02">{{data.baseInfo.phone02}}<img class="phone-icon" src="../../assets/emergency-command/emergency-command-chart/icon-tel.png"></div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
    <div class="modal-bot" v-if="type === '01'">
      <div class="costom-modal costom-one">
        <span class="title">地理位置：</span>
        <div>{{data.baseInfo.address}}</div>
      </div>
      <div class="costom-modal costom-two">
        <div>
          <span class="title">隐患点类型：</span>
          <span>{{data.data.jc1101}}</span>
        </div>
        <div>
          <span class="title">发展趋势：</span>
          <span>{{data.data.jc1102}}</span>
        </div>
      </div>
      <div class="costom-modal costom-two">
        <div>
          <span class="title">灾害规模：</span>
          <span>{{data.data.jc1103}}</span>
        </div>
        <div>
          <span class="title">规模等级：</span>
          <span>{{data.data.jc1104}}</span>
        </div>
      </div>
      <div class="costom-modal costom-two">
        <div>
          <span class="title">险情等级：</span>
          <span>{{data.data.jc1105}}</span>
        </div>
        <div>
          <span class="title">诱发因素：</span>
          <span>{{data.data.jc1106}}</span>
        </div>
      </div>
      <div class="costom-modal costom-two">
        <div>
          <span class="title">危险财产：</span>
          <span>{{data.data.jc1107}}</span>
        </div>
        <div>
          <span class="title">威胁对象：</span>
          <span>{{data.data.jc1108}}</span>
        </div>
      </div>
      <div class="costom-modal costom-two">
        <div>
          <span class="title">威胁户数：</span>
          <span>{{data.data.jc1109}}</span>
        </div>
        <div>
          <span class="title">威胁人数：</span>
          <span>{{data.data.jc1110}}</span>
        </div>
      </div>
      <p>检测责任人</p>
      <div class="costom-modal costom-two">
        <div>
          <span class="title">姓名：</span>
          <span>{{data.data.jc1111}}</span>
        </div>
        <div>
          <span class="title">职务：</span>
          <span>{{data.data.jc1112}}</span>
        </div>
      </div>
      <div class="costom-modal costom-one">
        <span class="title">联系电话：</span>
        <div v-if="data.data.jc1113">
          {{data.data.jc1113}}
          <img @click="phone(data.data.jc1113, data.data.jc1111)" class="phone-icon" src="../../assets/emergency-command/emergency-command-chart/icon-tel.png">
        </div>
      </div>
    </div>
    <div class="modal-bot" v-if="type === '03'">
      <div class="costom-modal costom-one">
        <span class="title">站点地址：</span>
        <div>{{data.baseInfo.address}}</div>
      </div>
      <div class="costom-modal costom-one">
        <span class="title">站点类型：</span>
        <div>{{data.baseInfo.type01}}</div>
      </div>
      <div class="costom-modal costom-two">
        <div>
          <span class="title">积水深度：</span>
          <span>{{data.data.jc04004}}</span>
        </div>
      </div>
      <div class="costom-modal costom-one">
        <span class="title">上报时间：</span>
        <div>{{data.data.jc04001}}</div>
      </div>
      <div class="costom-modal costom-one">
        <span class="title">联系人：</span>
        <div>{{data.baseInfo.jc02018}}</div>
      </div>
      <div class="costom-modal costom-one">
        <span class="title">联系电话：</span>
        <div v-if="data.baseInfo.jc02019">
          {{data.baseInfo.jc02019}}
          <img
            class="phone-icon"
            @click="phone(data.baseInfo.jc02019, data.baseInfo.jc02018)"
            src="../../assets/emergency-command/emergency-command-chart/icon-tel.png">
        </div>
      </div>
      <div>
        <p>点位视频</p>
        <div class="video-content-box">
          <div
            class="one-video"
            @click="handlePlayVideo(data.baseInfo.id, item1.jc13003, item1.jc13002)"
            v-for="(item1, i) in data.video"
            :key="i">
            <span>{{item1.jc13002}}</span>
            <img src="../../assets/common/play.png">
          </div>
        </div>
        <div class="img-box" v-if="showDetailVideo">
          <div class="name-content">
            <div class="video-name">{{videoName}}</div>
            <img
              class="video-close"
              @click="showDetailVideo = false"
              src="../../assets/common/closepopicon.png">
          </div>
          <div class="maker-panle" style="z-index: 9; left: 5rem; top: 3rem;" :id="'d-v-'+data.baseInfo.id"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-four',
  props: {
    top: {
      type: Number,
      default: 200
    },
    left: {
      type: Number,
      default: 500
    },
    width: {
      type: Number,
      default: 5
    },
    data: {
      type: Object,
      required: true
    },
    type: {
      type: String
    }
  },
  data () {
    return {
      showDetailVideo: false,
      videoName: '',
      swfurl: './static/libs/flowplayer/flowplayer-3.2.18.swf'
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    phone (phone, name) {
      this.$emit('handleCall', phone, name)
    },
    // 水文站播放视频
    handlePlayVideo (id, url, name) {
      this.showDetailVideo = false
      this.videoName = name
      setTimeout(() => {
        this.showDetailVideo = true
        this.$nextTick(() => {
          this.playVideo('d-v-' + id, url)
        })
      })
    },
    // 播放视频
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
  .modal-box{
    position: absolute;
    z-index: 1000;
    min-height: 2.15rem;
    padding: 0.1rem 0.26rem 0.4rem 0.26rem;
    box-sizing: border-box;
    background: url("../../assets/emergency-command/emergency-command-chart/accident-status-detail.png") no-repeat center;
    background-size: 100% 100%;
    color: #fff;
    font-size: .18rem;
    .modal-p-name{
      font-weight: bold;
      margin-bottom: .12rem;
    }
    .modal-close-title{
      font-size: .21rem;
      font-weight: bold;
    }
    .modal-type-close{
      display: flex;
      justify-content: space-between;
      padding: .15rem .1rem .15rem 0;
    }
    .modal-close-title{
      font-size: .21rem;
      font-weight: bold;
      color:#fff;
    }
    .modal-close-icon{
      width: 0.29rem;
      height: 0.29rem;
      background: url("../../assets/emergency-command/emergency-command-chart/close-bg.png") no-repeat center;
      background-size: 100% 100%;
      z-index: 1;
      cursor: pointer;
    }
    .modal-bot{
      p{
        font-size: .18rem;
        margin-bottom: .15rem;
        font-weight:bold;
      }
      .phone-icon{
        width: .2rem;
        height: .2rem;
        margin-left: .05rem;
      }
      .costom-two{
        display: flex;
        >div{
          flex: 1;
          font-size: .18rem;
          span:nth-child(1){
            color: #DFE2FD;
          }
          span:nth-child(2){
            color: #FCE62F;
            font-style:italic;
            text-align: right;
          }
        }
      }
      .costom-modal{
        display: flex;
        margin-bottom: .15rem;
        .title{
          display: inline-block;
        }
        >div{
          color: #FCE62F;
          img{
            margin-left: .1rem;
          }
        }
      }
      .costom-one{
        span:nth-child(1){
          color: #DFE2FD;
        }
        span:nth-child(2){
          color: #FCE62F;
          font-style:italic;
          text-align: right;
        }
      }
    }
    .video-content-box{
      max-height: 1.5rem;
      overflow-y: auto;
      .one-video{
        color: #DFE2FD;
        font-size: .18rem;
        display: flex;
        justify-content: space-between;
        padding: .18rem 0;
        border-bottom: .01rem dashed #30BDFF;
        img{
          width: .24rem;
          height: .24rem;
          cursor: pointer;
        }
      }
    }
    .img-box{
      position: absolute;
      top: 3.2rem;
      left: 5.1rem;
      background: url("../../assets/city-management/city-facilities/notice-bg.png")
      center no-repeat;
      background-size: 100% 100%;
      padding-bottom: .2rem;
      .name-content{
        padding: .2rem .2rem 0;
        display: flex;
        justify-content: space-between;
      }
      .video-name{
        width: 2.8rem;
        font-size: .16rem;
        color: #fff;
        z-index: 99;
      }
      .maker-panle {
        box-sizing: border-box;
        padding: .1rem .2rem 0;
        width: 5.5rem;
        height: 3.2rem;
        z-index: -1;
        .title {
          font-size: 0.21rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #ffffff;
        }
        .content {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.15rem;
        }
      }
      .video-close{
        z-index: 10;
        cursor: pointer;
        width: .3rem;
        height: .3rem;
      }
    }
  }
</style>
