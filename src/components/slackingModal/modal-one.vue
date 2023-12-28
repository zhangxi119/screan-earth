<!--
 * @Descripttion: 模型样式参考 --- 应急指挥--交警中队
 * @Author: chenqy
 * @Date: 2020-04-07
 * @LastEditors: chenqy
 * @LastEditTime: 2020-04-07
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
    <div class="modal-bot" v-if="data.control && data.control.length">
      <p class="modal-close-title">调度记录</p>
      <div class="modal-bot-kk">
        <div class="modal-bot-content"
           v-for="(item, index) in data.control"
           :key="index">
        <div class="modal-bot-two modal-list">
          <div><span>资源数量：</span><span>{{item.zh20004}}</span></div>
          <div><span>时间要求：</span><span>{{item.zh20005}}</span></div>
        </div>
        <div class="modal-bot-one modal-list">
          <span>目标地点:</span>
          <div>{{item.zh20009}}</div>
        </div>
        <div class="modal-bot-one modal-list">
          <span>调度说明:</span>
          <div>{{item.zh20008}}</div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-one',
  props: {
    width: {
      type: Number,
      default: 5
    },
    data: {
      type: Object,
      required: true
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
  z-index: 1000;
  min-height: 2.52rem;
  padding: 0.1rem 0.26rem 0.2rem 0.26rem;
  box-sizing: border-box;
  background: url("../../assets/emergency-command/emergency-command-chart/accident-status-detail.png") no-repeat center;
  background-size: 100% 100%;
  color: #fff;
  font-size: .18rem;
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
    padding: 0 .1rem;
    .modal-bot-kk{
      height: 2.2rem;
      overflow: auto;
    }
    .modal-bot-content{
      padding-bottom: .1rem;
      border-bottom: .02rem dashed rgba(0,132,255,.6);
      margin-bottom: .1rem;
      &:last-child{
        border: none;
      }
    }
    .modal-bot-two{
      display: flex;
      div:nth-child(1){
        width: 1.2rem;
      }
      div:nth-child(2){
        flex: 1;
        text-align: right;
      }
    }
  }
  .modal-bot-one{
    display: flex;
    flex-wrap: wrap;
    > div {
      color: #FCE62F;
      flex: 1;
      font-style:italic;
      margin-left: .1rem;
      line-height: 140%;
    }
  }
  .modal-list{
    margin-top: .15rem;
    span:nth-child(1){
      color: #DFE2FD;
      min-width: 1rem;
    }
    span:nth-child(2){
      color: #FCE62F;
      font-style:italic;
    }
  }
  .modal-footer{
    padding: 0 .15rem;
    > div{
      display: flex;
      border-top: .01rem dashed #0084FF;
      margin-top: .2rem;
      padding-top: .2rem;
      .modal-t-1{
        width: 1.2rem;
      }
      .modal-t-2{
        flex: 1;
        text-align: right;
      }
    }
  }
}
</style>
