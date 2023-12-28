<!--
 * @Descripttion:模型样式参考 --- 应急指挥--定点医院
 * @Author: leizq
 * @Date: 2020-04-27 15:38:03
 * @LastEditors: leizq
 * @LastEditTime: 2020-04-28 21:42:33
 -->
<template>
  <div class="modal-seven-container" :style="{width: width+'rem'}">
    <div class="modal-type-close">
      <p class="modal-close-title">传染病定点医院</p>
      <div class="modal-close-icon" @click.stop="handleClose()"></div>
    </div>
    <div class="modal-content">
      <div class="modal-content-box">
        <p class="modal-cont-title">{{data.zh26001}}</p><span>&nbsp;</span>
      </div>
      <div class="modal-content-box">
        <label class="modal-cont-label">位置：</label>
        <span class="modal-cont-text">{{data.zh26002}}</span>
      </div>
      <div class="modal-content-box">
        <label class="modal-cont-label">联系方式：</label>
        <span class="modal-cont-text">{{data.zh26003}}</span>
        <img @click="call(data.zh26001, data.zh26003)" src="@/assets/emergency-command/emergency-command-chart/icon-tel.png"/>
      </div>
      <div class="modal-content-box">
        <label class="modal-cont-label">医疗机构级别：</label>
        <span class="modal-cont-text">{{data.zh26005}}</span>
      </div>
      <div class="modal-chart-box clearfix">
        <div class="modal-chart-botton">
          <button :class="{active:selectedSpecial}" @click="clickSpecial">专用病房</button>
          <button :class="{active:selectedBurden}" style="margin-left:.1rem" @click="clickBurden">负压病房</button>
        </div>
        <div class="modal-chart-option1">
          <div :id="'chart-option1'+data.id" class="chart-option1"></div>
          <div class="g-add-message" style="left:29%">
            <span class="weight-font" style="position:relative;top:0.1rem">{{putTotal01}}</span>
            <p class="weight-font-1">病房总数</p>
          </div>
        </div>
        <div class="modal-chart-option2">
          <div :id="'chart-option2'+data.id" class="chart-option2"></div>
          <div class="g-add-message" style="left:71%">
            <span class="weight-font" style="position:relative;top:0.1rem">{{putTotal02}}</span>
            <p class="weight-font-1">病床总数</p>
          </div>
        </div>
      </div>
      <div class="modal-content-box">
        <ul class="clearfix">
          <li style="float:left">
            <label class="modal-cont-label">负压救护车数量：</label>
            <span class="modal-cont-text">{{data.zh27014}}辆</span>
          </li>
          <li style="float:right">
            <label class="modal-cont-label">负压担架数：</label>
            <span class="modal-cont-text">{{data.zh27015}}副</span>
          </li>
        </ul>
        <ul class="clearfix">
          <li style="float:left">
            <label class="modal-cont-label">床旁血液净化器：</label>
            <span class="modal-cont-text">{{data.zh27016}}台</span>
          </li>
          <li style="float:right">
            <label class="modal-cont-label">体外膜肺氧合：</label>
            <span class="modal-cont-text">{{data.zh27017}}台</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import {option1, option2} from '../../echarts-data/emergency-command/emergency-command-chart/panelChart'
export default {
  name: 'modalSeven',
  props: {
    width: {
      type: Number,
      default: 4.5
    },
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      selectedSpecial: true,
      selectedBurden: false,
      putTotal01: 0,
      putTotal02: 0
    }
  },
  mounted () {
    console.log(this.data)
    this.loadChart(this.data, 1)
  },
  methods: {
    handleClose () {
      this.$emit('close', false)
    },
    call (name, phone) {
      this.$emit('handleCall', name, phone)
    },
    loadChart (item, type) {
      let myChart1 = document.getElementById('chart-option1' + this.data.id)
      let myChart2 = document.getElementById('chart-option2' + this.data.id)
      if (type === 1) {
        let data1 = {value1: +this.data.zh27004, value2: +this.data.zh27002}
        this.putTotal01 = this.data.zh27002
        echarts.init(myChart1).setOption(option1(data1))
        let data2 = {value1: +this.data.zh27005, value2: +this.data.zh27003}
        this.putTotal02 = this.data.zh27003
        echarts.init(myChart2).setOption(option2(data2))
      } else if (type === 2) {
        let data1 = {value1: +this.data.zh27010, value2: +this.data.zh27008}
        this.putTotal01 = this.data.zh27008
        echarts.init(myChart1).setOption(option1(data1))
        let data2 = {value1: +this.data.zh27011, value2: +this.data.zh27009}
        this.putTotal02 = this.data.zh27009
        echarts.init(myChart2).setOption(option2(data2))
      }
    },
    clickSpecial () {
      this.selectedSpecial = true
      this.selectedBurden = false
      this.loadChart(this.data, 1)
    },
    clickBurden () {
      this.selectedBurden = true
      this.selectedSpecial = false
      this.loadChart(this.data, 2)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-seven-container{
  position: absolute;
  z-index: 1000;
  min-height: 3.92rem;
  padding: 0.1rem 0.26rem 0.2rem 0.26rem;
  box-sizing: border-box;
  background: url("../../assets/emergency-command/emergency-command-chart/designed_hosipital.png") no-repeat center;
  background-size: 100% 100%;
  color: #fff;
  font-size: .18rem;
    .modal-close-title{
      position: relative;
      font-size: .21rem;
      font-weight:bold;
      color: #fff;
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
    .modal-content{
      .modal-content-box{
        padding-bottom: .1rem;
        .modal-cont-title{
          display: inline-block;
          font-weight: bold;
          font-size: .17rem;
          color:rgba(255,255,255,1);
        }
        span{
          font-size: .17rem;
          color:rgba(255,255,255,1);
        }
        .modal-cont-label{
          font-size: .17rem;
          font-weight:bold;
          color:rgba(223,226,253,1);
        }
        .modal-cont-text{
          font-size: .17rem;
          font-weight:bold;
          font-style:italic;
          color:rgba(252,230,47,1);
        }
        img{
          margin-left: .1rem;
          width: 0.2rem;
          height: 0.2rem;
          cursor: pointer;
        }
      }
      .modal-chart-box{
        border-top: 1px dashed rgba(0,255,238,0.5);
        border-bottom: 1px dashed rgba(0,255,238,0.5);
        padding: .1rem;
        margin: .1rem 0;
        .modal-chart-botton{
          text-align: center;
          button{
            outline: none;
            border: none;
            width: .92rem;
            height: .28rem;
            border:1px solid rgba(24,187,252,1);
            border-radius:.14rem;
            background-color: rgba(0,25,60,1);
            color:rgba(24,187,252,1);
            font-weight:400;
            font-size:.17rem;
            cursor: pointer;
          }
          .active{
            background:rgba(0,132,255,1);
            color:rgba(255,255,255,1);
          }
        }
        .modal-chart-option1{
          width: 50%;
          float: left;
          .chart-option1{
            height: 2rem;
          }
        }
        .modal-chart-option2{
          width: 50%;
          float: left;
          .chart-option2{
            height: 2rem;
          }
        }
        .g-add-message{
          position: absolute;
          left: 23%;
          top: 58%;
          transform: translate(-50%, -50%);
          font-size: .17rem;
          font-weight: bold;
          font-style: italic;
          color: #fff;
          text-align: center;
          width: 1.3rem;
          span{
            padding-right: .03rem;
            background-image: -webkit-linear-gradient(bottom, #F9FBFF, #57D2FF);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: .26rem;
            font-family: Impact;
            font-weight: bold;
            font-style: italic
          }
          .weight-uniy{
            margin-left: -2px;
          }
          p {
            margin-top: .1rem;
          }
        }
      }
    }
    ul,li{
      list-style: none;
    }
    .clearfix:after {
      visibility: hidden;
      display: block;
      font-size: 0;
      content: " ";
      clear: both;
      height: 0;
    }
}
</style>
