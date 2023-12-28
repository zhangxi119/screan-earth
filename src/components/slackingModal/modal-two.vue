<!--
 * @Descripttion: 模型样式参考 --- 应急指挥--历史应急事件
 * @Author: chenqy
 * @Date: 2020-04-07
 * @LastEditors: chenqy
 * @LastEditTime: 2020-04-07
 -->
<template>
  <div class="modal-box" :style="{width: width+'rem'}">
    <div class="modal-type-close">
      <p class="modal-close-title">历史应急事件</p>
      <div class="modal-close-icon" @click="handleClose()"></div>
    </div>
    <div class="modal-type-table">
      <div class="modal-table-head">
        <div class="so">事件名称</div>
        <div class="so">发生时间</div>
        <div class="do">操作</div>
      </div>
      <div class="modal-table-body">
        <div class="body-single"
             v-for="(item, index) in data"
             :key="index"
             v-show="index >=(nowPage-1)*10 && index<nowPage*10">
          <div class="so">{{item.zh09001}}</div>
          <div class="so">{{item.zh09008}}</div>
          <div class="do" @click="handleClick(item)"><img src="../../assets/common/search.png"></div>
        </div>
      </div>
      <div class="modal-table-footer">
        <paginate
          :nowPage="nowPage"
          :count="Math.ceil(data.length / 10)"></paginate>
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
    width: {
      type: Number,
      default: 6.8
    },
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      nowPage: 1
    }
  },
  methods: {
    handleClick (data) {
      this.$emit('handleDo', data)
    },
    handleClose () {
      this.$emit('close', false)
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
      position: relative;
      font-size: .24rem;
      padding-left: .28rem;
      color: #fff;
      &:after{
        content: '';
        position: absolute;
        top: .15rem;
        left: .04rem;
        width: .11rem;
        height: .11rem;
        background: rgba(0,126,251,1);
      }
      &:before{
        box-sizing: border-box;
        content: '';
        position: absolute;
        top: .1rem;
        left: 0;
        width: .11rem;
        height: .11rem;
        border: 2px solid rgba(253,209,0,1);
      }
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
  }
</style>
