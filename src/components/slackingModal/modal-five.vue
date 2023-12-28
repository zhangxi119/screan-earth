<!--
 * @Descripttion: 模型样式参考 --- 监控预警 --- 重大危险源
 * @Author: chenqy
 * @Date: 2020-04-12
 * @LastEditors: leizq
 * @LastEditTime: 2020-04-28 21:01:51
 -->
<template>
  <div class="modal-box" :style="{width: width+'rem'}">
    <div class="modal-type-close">
      <p class="modal-close-title">{{data.baseInfo.name}}</p>
      <div class="modal-close-icon" @click.stop="handleClose"></div>
    </div>
    <div class="modal-middle">
      <div class="modal-middle-one">
        <span>联系人：</span>
        <span>{{data.baseInfo.linkman01}}</span>
      </div>
      <div class="modal-middle-one">
        <span>地址：</span>
        <span>{{data.baseInfo.address}}</span>
      </div>
      <slot name="modal-costom"></slot>
    </div>
    <div v-if="type !== 'safety'">
      <div class="modal-middle-totle">
        <div>重点危险源：<span>{{data.list.length}}</span>条</div>
      </div>
      <div class="modal-bot">
        <div
          v-for="(item, index) in data.list"
          :key="index"
          v-if="index >=(nowPage0-1) && index<nowPage0">
          <div class="modal-bot-two">
            <div><span  class="modal-bot-two-name">危险源名称：</span><span class="modal-bot-two-value">{{item.name}}</span></div>
            <div><span  class="modal-bot-two-name">是否挂牌：</span><span class="modal-bot-two-value">{{item.jc05005}}</span></div>
          </div>
          <div class="modal-bot-two">
            <div><span  class="modal-bot-two-name">负责人：</span><span class="modal-bot-two-value">{{item.jc05006}}</span></div>
            <div><span  class="modal-bot-two-name">电话：</span><span class="modal-bot-two-value">{{item.jc05006}}</span></div>
          </div>
          <div class="modal-bot-two">
            <div><span  class="modal-bot-two-name">危险源类型：</span><span class="modal-bot-two-value">{{item.jc05008}}</span></div>
            <div><span  class="modal-bot-two-name">危险源等级：</span><span class="modal-bot-two-value">{{item.type}}</span></div>
          </div>
          <div class="modal-bot-two">
            <div><span  class="modal-bot-two-name">安全技术措施：</span><span class="modal-bot-two-value">{{item.jc05003}}</span></div>
          </div>
        </div>
        <div class="page">
          <paginate
            :nowPage="nowPage0"
            :count="data.list.length"
            @change="handleChange0"></paginate>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="modal-middle-totle">
        <div>隐患排查记录：<span>{{data.list01.length}}</span>条</div>
      </div>
      <div class="modal-bot">
        <div
          v-for="(item, index) in data.list01"
          :key="index"
          v-if="index >=(nowPage1-1) && index<nowPage1">
          <div class="modal-bot-two">
            <div><span  class="modal-bot-two-name">隐患名称：</span><span class="modal-bot-two-value">{{item.jc03002}}</span></div>
          </div>
          <div class="modal-bot-two">
            <div><span  class="modal-bot-two-name">是否挂牌：</span><span class="modal-bot-two-value">{{item.jc03011}}</span></div>
            <div><span  class="modal-bot-two-name">隐患状态：</span><span class="modal-bot-two-value">{{item.jc03004}}</span></div>
          </div>
          <div class="modal-bot-two">
            <div><span  class="modal-bot-two-name">记录机构：</span><span class="modal-bot-two-value">{{item.jc03008}}</span></div>
          </div>
          <div class="modal-bot-two">
            <div><span  class="modal-bot-two-name">排查人员：</span><span class="modal-bot-two-value">{{item.jc03009}}</span></div>
          </div>
        </div>
        <div class="page">
          <paginate
            :nowPage="nowPage1"
            :count="data.list01.length"
            @change="handleChange1"></paginate>
        </div>
      </div>
      <div class="modal-middle-totle">
        <div>潜在隐患：<span>{{data.list02.length}}</span>条</div>
      </div>
      <div class="modal-bot">
        <div
          v-for="(item, index) in data.list02"
          :key="index"
          v-if="index >=(nowPage2-1) && index<nowPage2">
          <div class="modal-bot-two">
            <div><span  class="modal-bot-two-name">隐患名称：</span><span class="modal-bot-two-value">{{item.jc03002}}</span></div>
          </div>
          <div class="modal-bot-two">
            <div><span  class="modal-bot-two-name">安全隐患：</span><span class="modal-bot-two-value">{{item.jc03014}}</span></div>
          </div>
          <div class="modal-bot-two">
            <div><span  class="modal-bot-two-name">负责人：</span><span class="modal-bot-two-value">{{item.jc03012}}</span></div>
          </div>
          <div class="modal-bot-two">
            <div><span  class="modal-bot-two-name">隐患描述：</span><span class="modal-bot-two-value">{{item.jc03013}}</span></div>
          </div>
        </div>
        <div class="page">
          <paginate
            :nowPage="nowPage2"
            :count="data.list02.length"></paginate>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import paginate from '../paginate'
export default {
  name: 'modal-one',
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
  components: {
    paginate
  },
  data () {
    return {
      nowPage0: 1,
      nowPage1: 1,
      nowPage2: 1
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    handleChange0 (page) {
      this.nowPage0 = page
    },
    handleChange1 (page) {
      this.nowPage1 = page
    },
    handleChange2 (page) {
      this.nowPage2 = page
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-box{
    position: absolute;
    z-index: 1000;
    min-height: 3.72rem;
    padding: 0.1rem 0.26rem 0.5rem 0.26rem;
    box-sizing: border-box;
    background: url("../../assets/emergency-command/emergency-command-chart/accident-status-detail.png") no-repeat center;
    background-size: 100% 100%;
    color: #fff;
    font-size: .18rem;
    .modal-close-title{
      font-size: .21rem;
      margin-right: .3rem;
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
    .modal-middle{
      margin-bottom: .1rem;
      .modal-middle-one{
        font-size: .17rem;
        margin-bottom: .17rem;
        span:nth-child(1){
          color: #DFE2FB;
        }
        span:nth-child(2){
          color: #F9E659;
          font-style: italic;
        }
      }
    }
    .modal-middle-totle{
      font-size: .17rem;
      color: #fff;
      margin-top: .3rem;
      margin-bottom: .05rem;
      span{
        color: #F9E659;
        margin-right: .05rem;
      }
    }
    .modal-bot{
      padding: .22rem .27rem;
      background: url("../../assets/common/maker-small-box.png") no-repeat;
      background-size: 100% 100%;
      .modal-bot-two{
        display: flex;
        font-size: .16rem;
        color: #DFE2FB;
        margin-bottom: .15rem;
        div{
          flex: 1;
        }
        .modal-bot-two-value{
          font-size: .16rem;
          color: #F9E659;
          font-style: italic;
        }
      }
      .page{
        height: .3rem;
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
