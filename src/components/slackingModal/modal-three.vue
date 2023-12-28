<!--
 * @Descripttion: 模型样式参考 --- 应急指挥--五通桥救灾物资储备场所
 * @Author: chenqy
 * @Date: 2020-04-07
 * @LastEditors: chenqy
 * @LastEditTime: 2020-04-07
 -->
<template>
  <div class="modal-box" :style="{width: width+'rem'}">
    <div class="modal-type-close">
      <div class="modal-close-title">
        <span>{{data.baseInfo.name}}</span>
        <!--<div class="modal-time">2013-3-15</div>-->
      </div>
      <div class="modal-close-icon" @click.stop="handleClose"></div>
    </div>
    <div class="modal-type-basic">
      <slot name="modal-costom"></slot>
    </div>
    <div class="modal-change">
      <div @click="active=0" :class="active === 0 ? 'actived' : 'normal'" class="modal-change-save">储备信息</div>
      <div @click="active=1"  :class="active === 1 ? 'actived' : 'normal'" class="modal-change-dd">调度信息</div>
    </div>
    <div class="modal-type-table"  v-show="active===0">
      <div class="modal-table-head">
        <div class="so">物资名称</div>
        <div class="do">数量</div>
      </div>
      <div class="modal-table-body">
        <div class="body-single"
             v-for="(item, index) in data.detailInfo"
             :key="index"
             v-if="index >=(nowPage-1)*5 && index<nowPage*5">
          <div class="so">{{item.name}}</div>
          <div class="do">{{item.num}}</div>
        </div>
      </div>
      <div class="modal-table-footer">
        <paginate
          :nowPage="nowPage"
          :count="Math.ceil(data.detailInfo.length/5)"
          @change="handleChange"></paginate>
      </div>
    </div>
    <div class="modal-bot" v-show="active===1">
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
import paginate from '../paginate'
export default {
  name: 'modal-two',
  components: {
    paginate
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
    }
  },
  mounted () {
    console.log(this.data)
  },
  data () {
    return {
      active: 0,
      nowPage: 1
    }
  },
  methods: {
    handleChange (page) {
      this.nowPage = page
    },
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
    max-height: 6.6rem;
    padding: 0.1rem 0.26rem 0.2rem 0.26rem;
    box-sizing: border-box;
    background: url("../../assets/common/modal-back.png") no-repeat center;
    background-size: 100% 100%;
    color: #fff;
    font-size: .18rem;
    .modal-close-title{
      display: flex;
      align-items: flex-end;
      font-size: .24rem;
      color: #fff;
      font-weight: bold;
      .modal-time{
        margin-left: .2rem;
      }
    }
    .modal-time{
      font-size: .16rem;
      color: #ADBDC3;
      font-style:italic;
    }
    .modal-type-close{
      display: flex;
      justify-content: space-between;
      padding: .15rem .1rem .15rem 0;
      align-items: flex-end;
    }
    .modal-close-icon{
      width: 0.29rem;
      height: 0.29rem;
      background: url("../../assets/emergency-command/emergency-command-chart/close-bg.png") no-repeat center;
      background-size: 100% 100%;
      z-index: 1;
      cursor: pointer;
    }
    .modal-change{
      display: flex;
      font-size: .17rem;
      justify-content: center;
      margin: .15rem 0 .15rem 0;
      >div{
        width: 1rem;
        height: .28rem;
        line-height: .28rem;
        text-align: center;
        border-radius: .15rem;
        margin: 0 .1rem;
        cursor: pointer;
      }
      .actived{
        border: .01rem solid transparent;
        background-color: #0084FF;
        color: #fff;
      }
      .normal{
        border: .01rem solid #0084FF;
        color: #0084FF;
      }
    }
    .modal-type-table{
      padding: .1rem;
      font-size: .17rem;
      .modal-table-head{
        display: flex;
        padding: 0 .1rem;
        background:rgba(0,102,181,.7);
        height: .4rem;
        line-height: .4rem;
        color: #b6becd;
        .do{
          width: 1rem;
        }
        .so{
          flex: 1;
        }
      }
    }
    .modal-table-body{
      font-size: .17rem;
      .body-single{
        padding: 0 .1rem;
        display: flex;
        height: .4rem;
        line-height: .4rem;
        &:nth-child(even){
          background: rgba(7,69,182,.15);
        }
        .do{
          width: 1rem;
          cursor: pointer;
          img{
            width: .2rem;
            height: .2rem;
          }
        }
        .so{
          flex: 1;
        }
      }
    }
    .modal-table-footer{
      margin: .3rem 0 .1rem 0;
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
      }
      span:nth-child(2){
        color: #FCE62F;
        font-style:italic;
      }
    }
    .modal-footer{
      padding: 0 .15rem;
      margin: .2rem 0 .2rem 0;
      > div{
        display: flex;
        border-top: .01rem dashed #0084FF;
        padding-top: .2rem;
        margin-top: .2rem;
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
