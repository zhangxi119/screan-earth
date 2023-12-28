<!--
 * @Descripttion: 模型样式参考 --- 监测预警-- 自然灾害
 * @Author: chenqy
 * @Date: 2020-04-12
 * @LastEditors: leizq
 * @LastEditTime: 2020-04-28 20:17:42
 -->
<template>
  <div class="modal-box" :style="{width: width+'rem'}">
    <div class="modal-type-close">
        <p class="modal-close-title">{{data.baseInfo.name}}</p>
      <div class="modal-close-icon" @click.stop="handleClose"></div>
    </div>
    <div class="modal-middle">
      <slot name="modal-costom"></slot>
    </div>
    <div class="modal-bot">
      <div class="costom-modal costom-one">
        <span class="title">站点地址：</span>
        <div>{{data.baseInfo.address}}</div>
      </div>
      <div class="costom-modal costom-one">
        <span class="title">站点类型：</span>
        <div>{{data.baseInfo.type01}}</div>
      </div>
      <!--<div class="costom-modal costom-two">-->
        <!--<div class="monitor-video">-->
          <!--<div>实时监控查看</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
    <div id="echart">
      <table-scroll
        :column="columnFirm"
        :data="data.data"
        :max="5"
        :height="'2.85rem'"
        :isScrolled="false"></table-scroll>
    </div>
  </div>
</template>

<script>
import tableScroll from '@/components/table-scroll'
export default {
  name: 'modal-six',
  components: {
    tableScroll
  },
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
    },
    columnFirm: {
      type: Array
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-box{
    position: absolute;
    z-index: 1000;
    /*height: 3.3rem;*/
    padding: 0.1rem 0.26rem 0.2rem 0.26rem;
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
      .phone-icon{
        width: .2rem;
        height: .2rem;
        margin-left: .05rem;
      }
      .costom-two{
        display: flex;
        align-items: center;
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
        .monitor-video{
          div{
            width: 1.51rem;
            height: .5rem;
            line-height: .5rem;
            background: url("../../assets/common/natural-btn.png") no-repeat;
            background-size: 100% 100%;
            text-align: center;
            color: #fff;
          }
        }
      }
      .costom-modal{
        display: flex;
        margin-bottom: .15rem;
        .title{
          display: inline-block;
          /*width: 1.5rem;*/
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
  }
</style>
