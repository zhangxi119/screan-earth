<!--
 * @Descripttion: 政府服务
 * @Author: yangpk
 * @Date: 2020-03-3
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-11 23:21:07
 -->
<template>
  <div class="water-environment">
    <div class="main-menu">
      <mainMenu :alive='propMenu'></mainMenu>
    </div>
      <head-component name="水环境"></head-component>
      <!-- maker -->
      <!-- <maker-component v-for="(item, index) in makersDatas" :key="index" :makerData="item" class="maker-box-poor">
        <div slot="maker" class="makerItem">
          <img src="../../../assets/common/student_blue.png" alt="" class="topHead" />
        </div>
        <div slot="text" class="g-maker-text">
          <h3>学校</h3>
          <div class="g-text-item">名称：<span>{{item.schoolName}}</span></div>
          <div class="g-text-item">学生人数：<span>{{item.studentNum}}</span>人</div>
          <div class="g-text-item">是否重点学校：<span>{{item.keySchool}}</span></div>
          <div class="g-text-item">咨询电话：<span>{{item.phone}}</span></div>
          <div class="g-text-item">地址：<span>{{item.address}}</span></div>
        </div>
    </maker-component> -->
      <div v-show="item.showTextFlag" class="g-maker-box2" v-for="(item, index) in areasDatas2" :key="index + 'a'" :id="item.id">
        <!-- <img @click="showPage()" v-if="item.type === 'air'" src="@/assets/common/air-icon.png" />
        <img @click="showPage()" v-if="item.type === 'water'" src="@/assets/common/water-icon.png" /> -->
        <!-- {{item.type}} -->
        <div class="g-info-box" @click="showPage()" v-if="item.type === 'air'" @mouseenter="item.hoverFlag = true" @mouseleave="item.hoverFlag = false">
          <img src="@/assets/common/air-icon.png" />
          <div v-show="item.hoverFlag" class="g-info-text">{{item.zy15001}}</div>
        </div>
        <div v-if="item.type === 'water'" @mouseenter="item.hoverFlag = true" @mouseleave="item.hoverFlag = false" class="g-info-box" @click="showPage()">
          <img src="@/assets/common/water-icon.png" />
          <div v-show="item.hoverFlag" class="g-info-text">{{item.zy16001}}</div>
        </div>
      </div>
      <div class="modal" v-if="showIframe4">
        <div @click="showIframe4 = false" class="iframe-close"></div>
        <iframe class="iframe4"  :src="iframeSrc4" frameborder="0" name="iframe4"></iframe>
      </div>
      <div class="left-top">
          <div class="panle-title hover-color">概况</div>
          <div class="echarts-title1 hover-color">地表水断面水质级别构成<span class="global-data-title">（2019年）</span></div>
          <div class="echarts-left" id="echarts-left1"></div>
          <div class="compositionCount">
            <p>{{compositionCount}}</p>
            <p>总数(个)</p>
          </div>
          <div class="echarts-title2 hover-color">断面水质类别分布<span class="global-data-title">（2019年）</span></div>
          <div class="echarts-right" id="echarts-right1"></div>
          <div class="echarts-title3 hover-color">近12月断面水质级别构成变化</div>
          <div class="echarts-bottom" id="echarts-bottom1"></div>
      </div>
      <div class="right">
          <div class="panle-title hover-color">集中式饮用水达标情况</div>
          <div class="echarts-title2 hover-color">县级集中式饮用水季达标情况</div>
          <div id="right-center-echarts1" class="right-center-echarts"></div>
          <div class="echarts-title3 hover-color">市级集中式饮用水月达标情况</div>
          <div id="right-bottom-echarts1" class="right-bottom-echarts"></div>
      </div>
      <!-- <div class="queryRealTime">
        <p class="title">水质实时报</p>
        <ul class="main">
          <li>发布时间：<span>{{queryRealTime.sw04005}}</span></li>
          <li>所属区域：<span>{{queryRealTime.sw04002}}</span></li>
          <li>所属河流：<span>{{queryRealTime.sw04003}}</span></li>
          <li>因子单位：<span>核燃料、同位素及和纤维等军工配套</span></li>
        </ul>
        <ul class="add">
          <li><div>站点名称 </div><div>高锰酸盐指数</div><div>氨氮</div><div>总磷</div><div>浊度</div></li>
          <li><div>{{queryRealTime.sw04005}} </div><div>{{queryRealTime.sw04006}}</div><div>{{queryRealTime.sw04007}}</div><div>{{queryRealTime.sw04008}}</div><div>{{queryRealTime.sw04009}}</div></li>
          <li><div>站点名称 </div><div>高锰酸盐指数</div><div>氨氮</div><div>总磷</div><div>浊度</div></li>
          <li><div>{{queryRealTime.sw04005}} </div><div>{{queryRealTime.sw04006}}</div><div>{{queryRealTime.sw04007}}</div><div>{{queryRealTime.sw04008}}</div><div>{{queryRealTime.sw04009}}</div></li>
        </ul>
      </div> -->
      <div class="fenlei">
        <ul class="title">
          <li><span style="background:#2E70E4;"></span>一类</li>
          <li><span style="background:#66DEF8;"></span>二类</li>
          <li><span style="background:#6BE673;"></span>三类</li>
          <li><span style="background:#F1E44D;"></span>四类</li>
          <li><span style="background:#E28031;"></span>五类</li>
          <li><span style="background:#DC3421;"></span>六类</li>
        </ul>
        <ul class="num">
          <li><span>69</span>个</li>
          <li><span>69</span>个</li>
          <li><span>69</span>个</li>
          <li><span>69</span>个</li>
          <li><span>69</span>个</li>
          <li><span>69</span>个</li>
        </ul>
        <ul class="percent">
          <li><span>14.1</span>%</li>
          <li><span>14.1</span>%</li>
          <li><span>14.1</span>%</li>
          <li><span>14.1</span>%</li>
          <li><span>14.1</span>%</li>
          <li><span>14.1</span>%</li>
        </ul>
      </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import API from '@/api/city-management/environment.js'
import option1 from '@/echarts-data/city-management/environment/water-environment/right-center-echarts.js'
import option2 from '@/echarts-data/city-management/environment/water-environment/right-bottom-echarts.js'
import option4 from '@/echarts-data/city-management/environment/water-environment/left-top3-echarts.js'
import option5 from '@/echarts-data/city-management/environment/water-environment/left-top2-echarts.js'
import option6 from '@/echarts-data/city-management/environment/water-environment/left-top1-echarts.js'
import menus from './menus'
import mainMenu from '@/components/menu'
import makerComponent from '@/components/maker-component.vue'
import headComponent from '@/components/head-component'
import {openThirdPage} from '@/utils/utils'
export default {
  components: {makerComponent, menus, mainMenu, headComponent},
  data () {
    return {
      city: {}, // 市级集中式饮用水月达标情况
      district: {}, // 区县集中式饮用水达标情况
      county: {}, // 县级集中式饮用水月达标情况
      analysis: {}, // 黑臭水
      compositionChange: {}, // 断面水质级别构成变化
      type: {}, // 断面水质类别分布
      composition: {}, // 断面水质构成
      compositionCount: 0,
      queryRealTime: {}, // 水质实时报
      propMenu: '2',
      makersDatas: [],
      littleListIndex: 0,
      myChart: null,
      littleList: [ {
        name: '总磷',
        id: 1
      }, {
        name: '氨氮',
        id: 2
      }, {
        name: '高锰酸盐指数',
        id: 3
      }, {
        name: '溶解氧',
        id: 4
      }],
      areasDatas2: [],
      showIframe4: false,
      iframeSrc4: 'http://119.6.113.148:9090/scszjcsj/szjc_sj/DataPublish/preview.xhtml'
    }
  },
  mounted () {
    this.initQueryNotRealTime()
    this.initQueryRealTime()
    this.getAreaAqi2()
  },
  methods: {
    // 查询区县监测站点
    getAreaAqi2 () {
      API.AREAPOINTS(this, {}).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data
          let temp = []
          // data.air.forEach((item, index) => {
          //   item.lon = +item.zy15005
          //   item.lat = +item.zy15006
          //   item.id = 'points-air' + index
          //   item.showTextFlag = true
          //   item.type = 'air'
          //   temp.push(item)
          // })
          data.water.forEach((item, index) => {
            item.lon = +item.zy16008
            item.lat = +item.zy16009
            item.id = 'points-water' + index
            item.showTextFlag = true
            item.hoverFlag = false
            item.type = 'water'
            temp.push(item)
          })
          this.areasDatas2 = temp.slice()
          window._m.addMakers(this.areasDatas2, (type) => {
            if (type === 1) { // 三维
            } else { // 二维
            }
          })
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 点击检测点图标
    showPage () {
      // this.showIframe4 = true
      openThirdPage('http://119.6.113.148:9090/scszjcsj/szjc_sj/DataPublish/preview.xhtml')
    },
    initQueryNotRealTime () {
      API.WATERQUERYNOTREALTIME(this, {}).then(resp => {
        let res = resp.data.data
        this.city = res.city
        this.county = res.county
        this.district = res.district
        this.analysis = res.analysis
        this.compositionChange = res.compositionChange
        this.type = res.type
        this.composition = res.composition
        this.composition.forEach(item => {
          this.compositionCount += item.value
        })
        echarts.init(document.getElementById('right-center-echarts1')).setOption(option1(this.county))
        echarts.init(document.getElementById('right-bottom-echarts1')).setOption(option2(this.city))
        echarts.init(document.getElementById('echarts-bottom1')).setOption(option4(this.compositionChange))
        echarts.init(document.getElementById('echarts-right1')).setOption(option5(this.type))
        echarts.init(document.getElementById('echarts-left1')).setOption(option6(this.composition))
        this.startSelectAnimate(echarts.init(document.getElementById('echarts-left1')), 'I类', option6(this.composition).legend.data)
      })
    },
    initQueryRealTime () {
      API.WATERQUERYREALTIME(this, {}).then(resp => {
        this.queryRealTime = resp.data.data.realTimeReport
      })
      API.COMPANIES(this, {}).then(resp => {
        this.makersDatas = resp.data.data.companies
      })
    },
    changeLittleList (index) {
      this.littleListIndex = index
    },
    startSelectAnimate (myChart, firstSelectName, names) {
      let index = 0
      myChart.dispatchAction({
        type: 'highlight',
        // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
        name: firstSelectName
      })
      myChart.on('mouseover', function (e) {
        if (e.dataIndex !== index) {
          myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index
          })
        }
      })
      myChart.on('mouseout', function (e) {
        index = e.dataIndex
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: e.dataIndex
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../components/date-title.scss';
.global-data-title{
  color:$date-title-color;
  display:inline-block;
  font-size:$date-title-size;
}
.water-environment{
    position: absolute;
    .header-bg{
        position: absolute;
        width: 20.40rem;
        height: 1.80rem;
        line-height: 1.20rem;
        font-family: simhei;
        text-align: center;
        color: #FFFFFF;
        font-size: 0.45rem;
        background: url('../../../assets/common/head-bg.png') no-repeat;
        background-size:100% 100%;
        left:11.4rem;
        z-index: 99;
    }
    .g-maker-box2 {
      z-index: 2;
      position: absolute;
      .g-info-box {
        position: relative;
        .g-info-text {
          position: absolute;
          left: 50%;
          top: -0.35rem;
          transform: translateX(-50%);
          white-space: nowrap;
          display: inline-block;
          padding: 0 0.1rem;
          height: 0.3rem;
          line-height: 0.3rem;
          font-size: 0.20rem;
          font-weight: 800;
          border-radius: 0.04rem;
          border: 0.01rem solid #80CDFA;
          font-style:italic;
          color: #FFFFFF;
        }
      }
      img {
        width: 0.4rem;
        height: 0.4rem;
        cursor: pointer;
      }
    }
    .modal{
        z-index: 999;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        position: absolute;
        // left: 14rem;
        // top:2rem;
        .iframe1{
          width: 100%;
          height: 100%;
        }
        .iframe2{
          width: 100%;
          height: 100%;
        }
        .iframe3{
          width: 100%;
          height: 100%;
        }
        .iframe4{
          width: 100%;
          height: 100%;
        }
        .iframe-close {
          position: absolute;
          right: 0.2rem;
          top: 0.2rem;
          width: 0.3rem;
          height: 0.3rem;
          background: url('../../../assets/common/callclose.png') center no-repeat;
          background-size: 100% 100%;
          cursor: pointer;
        }
      }
      .yellow{
        color: #FFE700;
      }
      .blue{
        color: #00F4FA;
      }
      .air-echarts{
        width: 2rem;
      }
      .air-contents{
        position: relative;
        display: flex;
        height: 1.5rem;
      }
      .middle-panel{
        position: absolute;
        top: 1.5rem;
        right: 14.8rem;
        z-index: 100;
      }
      .air-pm-value{
        position: absolute;
        top: .35rem;
        left: .7rem;
        padding-right: 10px;
        font-size: .25rem;
        font-family: DIN Condensed;
        font-weight: bold;
        font-style: italic;
        background-image:-webkit-linear-gradient(right, #58BDD7, #5FCFEA);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: #fff;
      }
      .g-maker-content{
        box-sizing: border-box;
        width: 10.5rem;
        background: url("../../../assets/city-management/economic-run/major-project/icon-bg-01.png") no-repeat;
        background-size: 100% 100%;
        padding: .3rem .3rem;
        z-index: 100;
        h3{
          color: #fff;
          font-size: .21rem;
          margin: .2rem 0 .2rem .2rem;
        }
        .g-maker-single{
          display: flex;
          padding: .1rem .2rem;
          margin-bottom: .1rem;
          > div{
            flex: 1;
            span:nth-child(1){
              font-size: .18rem;
              color: #DFE2FD;
            }
            span:nth-child(2){
              font-size: .2rem;
              color: #FCE62F;
              font-weight: bold;
              font-style: italic;
            }
          }
        }
      }
      .air-zhizhen{
        position: absolute;
        top: .5rem;
        left: .75rem;
        width: .35rem;
        height: .7rem;
        background: url("../../../assets/city-management/economic-run/three-base/zhiz.png") no-repeat;
        background-size: 100% 100%;

      }
      #air-pm{
        background: url("../../../assets/city-management/economic-run/three-base/yib.png") no-repeat;
        background-size: 76% 82%;
        background-position: 20% 47%;
      }
      .nongdu{
        padding-top: .4rem;
      }
      .air-content-po{
        color: #fff;
        font-size: .19rem;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        >div{
          margin: .05rem 0;
          display: flex;
          > span:nth-child(1){
            display: inline-block;
            margin-right: .05rem;
            font-weight: normal;
          }
        }
      }
      .air-conten-second {
        span:nth-child(1){
          width: .95rem;
        }
      }
      .air-title{
        box-sizing: border-box;
        padding-left: .2rem;
        margin-left: .2rem;
        font-size: .2rem;
        font-weight: bold;
        font-style: italic;
        color: #fff;
      }
      .left-content{
        position: absolute;
        top: .8rem;
        left: 0;
        z-index: 99;
        box-sizing: border-box;
        width: 14rem;
        height: 10rem;
        background: url('../../../assets/city-management/economic-run/three-base/backbase.png') no-repeat;
        background-size: 100% 100%;
        padding: .5rem .5rem .7rem .6rem;
      }
      .title-model{
        display: flex;
        justify-content: space-between;
        .title{
          font-size: .24rem;
          padding-left: .15rem;
          padding-bottom: .2rem;
          margin-left: -10px;
          color: #fff;
          background: url("../../../assets/city-management/economic-run/three-base/title-icon.png") no-repeat;
          background-position: -0rem .2rem;
          background-size: .87rem .28rem;
        }
      }
      .base-list{
        box-sizing: border-box;
        padding: 0 10px;
        height: 2.2rem;
        display: flex;
        >div{
          flex: 1;
          margin-top: .07rem;
        }
      }
      .area-title{
        position: relative;
        font-size: .2rem;
        color: rgba(255,255,255,1);
        padding-left: .5rem;
        &:after{
          content: '';
          position: absolute;
          top: .1rem;
          left: .28rem;
          width: .13rem;
          height: .13rem;
          background: rgba(0,126,251,1);
        }
        &:before{
          box-sizing: border-box;
          content: '';
          position: absolute;
          top: .05rem;
          left: .23rem;
          width: .13rem;
          height: .13rem;
          border: 2px solid rgba(253,209,0,1);
        }
      }
      #each-area,
      #year-areas,
      #each-ratio{
        height: 2rem;
      }
      #pollute,
      #voice{
        height: 2.2rem;
      }
      #pollute{
        background: url("../../../assets/city-management/economic-run/three-base/bar-back.png") no-repeat;
        background-size: 80% 50%;
        background-position: 50% 80%;
      }
      .plan-area{
        height: 2.9rem;
        margin-top: 10px;
        .water-content{
          display: flex;
          > div{
            flex: 1;
            margin-top: .1rem;
          }
        }
      }
      .year-area{
        margin-top: 10px;
        height: 2.9rem;
        .water-content{
          display: flex;
          > div{
            flex: 1;
            margin-top: .1rem;
          }
        }
      }
      .medical-resource-container {
        background: #000;
        position: absolute;
        .tool-tip {
          background:rgba(0,18,55,0.4);
          border: 2px solid rgba(72,170,244,1);
          color: #9BE9FF;
          font-size: 0.14rem;
          padding: 0.12rem 0.16rem;
          p {
            span:last-of-type{
              font-size: 0.16rem;
              font-style: italic;
            }
          }
        }
        .left-bottom-panle {
          position: absolute;
          width: 10.48rem;
          height: 5.58rem;
          left: 0.29rem;
          bottom: 0.12rem;
          z-index: 99;
          background: url('../../../assets/city-management/common-service/medical-resource/panle-02.png') no-repeat;
          background-size: 100% 100%;
          .tab-bar {
            display: flex;
            flex-direction: row;
            width: 2.20rem;
            height: 0.48rem;
            margin: 0.97rem auto;
            font-style:italic;
            color:rgba(152,229,250,1);
            font-size: 0.18rem;
            background:url('../../../assets/city-management/common-service/medical-resource/tilte-bg.png') no-repeat;
            background-size:100% 100%;
            span {
              flex: 1;
              text-align: center;
              line-height: 0.38rem;
            }
          }
          .left-echarts-02 {
            position: absolute;
            left: 6%;
            bottom: 0.54rem;
            width:90%;
            height: 3.5rem;
          }
        }
        .right-top-panle {
          position: absolute;
          width: 12rem;
          height: 4.9rem;
          right: 0.29rem;
          top: 0.9rem;
          z-index: 110;
          background: url('../../../assets/city-management/common-service/medical-resource/panle-03.png') no-repeat;
          background-size: 100% 104%;
          .right-echarts-01 {
            display: flex;
            position: absolute;
            left: 6%;
            bottom: 0.54rem;
            width: 90%;
            height: 3.2rem;
            .progress{
              flex: 2.25;
              > div{
                font-size: .18rem;
                color: #FFFFF8;
                > div{
                  display: flex;
                  height: .3rem;
                  div{
                    flex: 1;
                    margin-right: .2rem;
                  }
                  .progress-name{
                    color: #96F0F7;
                    font-size: .2rem;
                    margin-right: .05rem;
                  }
                  .progress-unit{
                    color: #ABEEF5;
                    font-size: .16rem;
                  }
                }
              }
            }
            .pollute-company{
              position: relative;
              flex: 3.7;
              .companys-title{
                position: absolute;
                bottom: 24%;
                left: 20%;
                color: #fff;
                span:nth-child(1){
                  font-size: .26rem;
                  font-weight: bold;
                  font-style: italic;
                }
                span:nth-child(2){
                  font-size: .16rem;
                  font-weight: bold;
                  font-style: italic;
                  color: #DFE2FD;
                }
              }
              .company-num{
                margin-top: .1rem;
                margin-left: .3rem;
                width: 1.56rem;
                height: .28rem;
                font-size: .17rem;
                font-family:Source Han Sans CN;
                font-weight: bold;
                font-style: italic;
                color: #FCE62F;
                border: 2px solid #FCE62F;
                text-align: center;
                line-height: .28rem;
              }
              #companys{
                height: 2rem;
              }
              .monitoring-left-value{
                margin: .1rem 0 .1rem .25rem;
                display: flex;
                font-size: .42rem;
                color: #fff;
                align-items: flex-end;
                font-family: 'digital';
              }
              .monitoring-left-value>div{
                width: .35rem;
                height: .37rem;
                text-align: center;
                line-height: .37rem;
                border: 2px solid #189DDB;
                background: rgba(6, 75, 178, 0.8);
                border-radius: 5px;
                margin-left: 3px;
                padding: 3px;
                font-weight: bold;
              }
              .monitoring-left-value > .monitor-unit {
                width: .24rem;
                height: .24rem;
                line-height: .24rem;
                font-size: .18rem;
                font-weight: normal;
              }
            }
            .dangerous{
              flex: 4.05;
              #dangerous{
                height: 3rem;
              }
            }
          }
        }
        .right-bottom-panle {
          position: absolute;
          width: 12rem;
          height: 4.9rem;
          right: 0.24rem;
          bottom: 0.1rem;
          z-index: 99;
          background: url('../../../assets/city-management/common-service/medical-resource/panle-04.png') no-repeat;
          background-size: 100% 100%;
          .echarts-table{
            position: absolute;
            width: 6rem;
            background: #000;
            opacity: .8;
            z-index: 99;
          }
          .right-echarts-02{
            display: flex;
            position: absolute;
            left: 6%;
            top: 1.1rem;
            width: 90%;
            height: 3.2rem;
            .enforce-num{
              flex: 2.25;
              > div {
                position: relative;
                .enforce-mask {
                  position: absolute;
                  left: .33rem;
                  bottom: .1rem;
                  font-size: .19rem;
                  color: #03FAA7;
                  border: 2px solid #03FAA7;
                  text-align: center;
                  width: 1.29rem;
                  height: .27rem;
                  line-height: .27rem;
                  border-radius: .2rem;
                  background: #262795;
                }
                .enforce-num-conten{
                  position: absolute;
                  width: .92rem;
                  text-align: center;
                  top: .55rem;
                  left: .55rem;
                  color: #00FAA8;
                  span:nth-child(1){
                    font-size: .3rem;
                  }
                  span:nth-child(2){
                    font-size: .16rem;
                  }
                }
                #enforce-num1,
                #enforce-num2 {
                  height: 1.6rem;
                }
              }
            }
            .enforce-law{
              flex: 7.75;
              #enforce-law{
                height: 3rem;
              }
            }
          }
          .right-bottom-left {
            position: absolute;
            width: 4.6rem;
            height: 4.2rem;
            top: 0.34rem;
            left: 0.64rem;
            top: 1rem;
            display: flex;
            flex-direction: column;
          }
          .right-bottom-right {
            position: absolute;
            width: 4.6rem;
            height: 4rem;
            top: 0.34rem;
            right: 0.20rem;
            top: 1rem;
            display: flex;
            flex-direction: column;
            .right-bottom-charts{
              flex: 1;
            }
          }
        }
        .header-bg {
          position: absolute;
          width: 20.40rem;
          height: 1.80rem;
          line-height: 1.20rem;
          font-family: simhei;
          text-align: center;
          color: #FFFFFF;
          font-size: 0.45rem;
          background: url('../../../assets/city-management/common-service/medical-resource/head-bg.png') no-repeat;
          background-size:100% 100%;
          left:11.4rem;
          z-index: 99;
        }
        .panle-title {
          position: absolute;
          top: 0.34rem;
          left: .54rem;
          font-size: 0.24rem;
          color: #FFFFFF;
          padding: 0.15rem 0.15rem;
          box-sizing: border-box;
          background: url('../../../assets/city-management/common-service/medical-resource/panle-title.png') no-repeat;
          background-position: 0 0.35rem;
          background-size: .87rem .28rem;
        }
        .left-list {
          position: absolute;
          left:10.68rem;
          top: 0.7rem;
          z-index: 1000;
          .left-list-li {
            margin-top: 0.1rem;
            .name {
              padding: 0.05rem;
              width:1.50rem;
              height:0.26rem;
              line-height: 0.26rem;
              color: #FFFFFF;
              font-size:0.22rem;
              font-style:italic;
              transform: perspective(1rem) rotateX(-15deg);
              transform-origin:left;
              background:rgba(213,96,44,1);
            }
          }
        }
      }
      .window-box{
        position:absolute;
        width: 5.2rem;
        height:2.8rem;
        margin-left:-5.2rem;
        margin-top:-2.1rem;
        color: #FFFFFF;
        font-size: 0.21rem;
        display: flex;
        flex-direction: row;
        p{
          font-size: 21px;
          font-weight: bold;
          color: #fff;
          margin-bottom: .2rem;
        }
        .window-box-left {
          width: 3.90rem;
          height: 2.79rem;
          padding: 0.35rem 0.21rem;
          box-sizing: border-box;
          background: url('../../../assets/common/win-info-icon-02.png') no-repeat;
          background-size: 100% 100%;
        }
        .tooltip-content{
          width: 100%;
          >div{
            display: flex;
            padding-right: .1rem;
            margin-bottom: .1rem;
            flex-direction: row;
            .tooltip-name{
              font-size: .18rem;
              font-weight: bold;
              color: #DFE2FD;
              width: 1rem;
            }
            .tooltip-decs{
              flex: 1;
              font-size: .2rem;
              font-weight: bold;
              font-style: italic;
              color: #FCE62F;
            }
          }
        }
        img {
          flex: 1;
          height: 1.80rem;
          margin-top: 0.9rem
        }
      }
      .panel-content{
        position: absolute;
        bottom: .3rem;
        left: 14rem;
        z-index: 9999;
      }
      .ecology-list{
        position: absolute;
        right: 12.1rem;
        top: 1.7rem;
        z-index: 998;
      .ecology-list-common{
        width: 1.72rem;
        height: 0.54rem;
        background: url('../../../assets/common/ecology-list.png') center center no-repeat;
        background-size: 1.72rem 0.64rem;
        z-index: 998;
        font-size:0.18rem;
        font-family:Source Han Sans CN;
        font-weight:500;
        font-style:italic;
        color:rgba(131,235,255,1);
        text-align: right;
        line-height: 0.5rem;
        img{
          width: 0.1rem;
          height: 0.1rem;
          padding-right: 0.15rem;
          padding-left: 0.1rem;
        }
      }
      .ecology-list-item{
        background: url('../../../assets/common/ecology-list-item.png') center center no-repeat;
        width: 100%;
        height: 1.05rem;
        background-size: 1.69rem 1.05rem;
        margin-top: -0.1rem;
        margin-left: 0.06rem;
        p{
          font-size:0.17rem;
          font-family:Source Han Sans CN;
          font-weight:400;
          font-style:italic;
          color:rgba(255,255,255,1);
          line-height: 0.5rem;
          height: 0.4rem;
          text-align: center;
        }
      }
    }
    .main-menu {
        position: absolute;
        left: 10.8rem;
        bottom: 0.5rem;
        z-index: 999;
    }
    .left-top{
        position: absolute;
        width: 10.48rem;
        height: 9.43rem;
        left: 0.29rem;
        top: 0.5rem;
        z-index: 99;
        background: url('../../../assets/city-management/environment/water-environment/waterLeftTop.png') no-repeat;
        background-size: 10.48rem 9.43rem;
        .panle-title {
            position: absolute;
            top: 0.34rem;
            left: 0.55rem;
            font-size: 0.24rem;
            font-weight:500;
            color: #FFFFFF;
            padding: 0.15rem 0.15rem;
            box-sizing: border-box;
            background: url('../../../assets/common/panle-title.png') no-repeat;
            background-position-y: 100%;
            background-size: 0.58rem 0.19rem;
            }
        .echarts-title1{
          list-style: none;
          display: inline-block;
          width:3.3rem;
          height:0.3rem;
          box-sizing: border-box;
          padding-left: 0.4rem;
          color: #EFF8FE;
          background: url('../../../assets/city-management/common-service/benefit-people/point.png') left center no-repeat;
          background-size: 0.32rem 0.33rem;
          position: absolute;
          left: 0.6rem;
          top: 1.3rem;
          line-height: 0.3rem;
          font-size: 0.2rem;
        }
        .echarts-title2{
          list-style: none;
          display: inline-block;
          width:2.9rem;
          height:0.3rem;
          box-sizing: border-box;
          padding-left: 0.4rem;
          color: #EFF8FE;
          background: url('../../../assets/city-management/common-service/benefit-people/point.png') left center no-repeat;
          background-size: 0.32rem 0.33rem;
          position: absolute;
          left: 4rem;
          top: 1.3rem;
          line-height: 0.3rem;
          font-size: 0.2rem;
        }
        .echarts-title3{
          list-style: none;
          display: inline-block;
          width:3.1rem;
          height:0.3rem;
          box-sizing: border-box;
          padding-left: 0.4rem;
          color: #EFF8FE;
          background: url('../../../assets/city-management/common-service/benefit-people/point.png') left center no-repeat;
          background-size: 0.32rem 0.33rem;
          position: absolute;
          left: 0.6rem;
          top: 5.1rem;
          line-height: 0.3rem;
          font-size: 0.2rem;
        }
        .compositionCount{
          position: absolute;
          width: 1rem;
          height: 1rem;
          left: 1.5rem;
          top: 3.2rem;
          font-size:0.26rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          font-style:italic;
          color:rgba(223,226,253,1);
          text-align: center;
          p:nth-child(2){
            font-size:0.16rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            font-style:italic;
            color:rgba(223,226,253,0.72);
          }
        }
        .echarts-left{
          width: 3.6rem;
          height: 2.8rem;
          position: absolute;
          left: 0.6rem;
          top: 2.2rem;
        }
        .echarts-right{
          width: 6rem;
          height: 3rem;
          position: absolute;
          left: 4rem;
          top: 1.7rem;
        }
        .echarts-bottom{
          width: 9rem;
          height: 2.8rem;
          position: absolute;
          left: 0.6rem;
          top: 5.8rem;
        }
    }
    .left-bottom{
        position: absolute;
        width: 10.48rem;
        height: 3.89rem;
        left: 0.29rem;
        top: 6.8rem;
        z-index: 99;
        background: url('../../../assets/city-management/environment/water-environment/waterLeftBottom.png') no-repeat;
        background-size: 10.48rem 3.89rem;
        .panle-title{
            position: absolute;
            top: 0.34rem;
            left: 0.55rem;
            font-size: 0.24rem;
            font-weight:500;
            color: #FFFFFF;
            padding: 0.15rem 0.15rem;
            box-sizing: border-box;
            background: url('../../../assets/common/panle-title.png') no-repeat;
            background-position-y: 100%;
            background-size: 0.58rem 0.19rem;
        }
        .left-bottom-echarts{
          width: 9rem;
          height: 2.3rem;
          position: absolute;
          left: 0.6rem;
          top: 1rem;
        }
        .little-menu{
          position: absolute;
          width: 1.6rem;
          height: 2.15rem;
          left: 10.3rem;
          top: 0.28rem;
          z-index: 99;
          li{
            font-size:0.17rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(255,255,255,1);
            height: 0.43rem;
            list-style: none;
            line-height: 0.4rem;
            box-sizing: border-box;
            padding-left: 0.5rem;
          }
          .little-list{
            background: url('../../../assets/city-management/environment/water-environment/littleList.png') no-repeat;
            background-position: center center ;
            background-size: 1.6rem 0.4rem;
          }
          .little-list-alive{
            background: url('../../../assets/city-management/environment/water-environment/littleListAlive.png') no-repeat;
            background-size: 1.7rem 0.6rem;
            background-position: center center;
            color: #E6703A;
          }
        }
    }
    .right{
        position: absolute;
        width: 10.48rem;
        height: 9.43rem;
        right:0;
        top: 0.5rem;
        z-index: 99;
        background: url('../../../assets/city-management/environment/water-environment/waterRight.png') no-repeat;
        background-size: 10.48rem 9.43rem;
        .panle-title{
            position: absolute;
            top: 0.34rem;
            left: 0.55rem;
            font-size: 0.24rem;
            font-weight:500;
            color: #FFFFFF;
            padding: 0.15rem 0.15rem;
            box-sizing: border-box;
            background: url('../../../assets/common/panle-title.png') no-repeat;
            background-position-y: 100%;
            background-size: 0.58rem 0.19rem;
        }
        .echarts-title1{
          list-style: none;
          display: inline-block;
          width:2.9rem;
          height:0.3rem;
          box-sizing: border-box;
          padding-left: 0.4rem;
          color: #EFF8FE;
          background: url('../../../assets/city-management/common-service/benefit-people/point.png') left center no-repeat;
          background-size: 0.32rem 0.33rem;
          position: absolute;
          left: 0.6rem;
          top: 1.25rem;
          line-height: 0.3rem;
          font-size: 0.2rem;
        }
        .echarts-title2{
          list-style: none;
          display: inline-block;
          width:3rem;
          height:0.3rem;
          box-sizing: border-box;
          padding-left: 0.4rem;
          color: #EFF8FE;
          background: url('../../../assets/city-management/common-service/benefit-people/point.png') left center no-repeat;
          background-size: 0.32rem 0.33rem;
          position: absolute;
          left: 0.6rem;
          top: 1.3rem;
          line-height: 0.3rem;
          font-size: 0.2rem;
        }
        .echarts-title3{
          list-style: none;
          display: inline-block;
          width:3rem;
          height:0.3rem;
          box-sizing: border-box;
          padding-left: 0.4rem;
          color: #EFF8FE;
          background: url('../../../assets/city-management/common-service/benefit-people/point.png') left center no-repeat;
          background-size: 0.32rem 0.33rem;
          position: absolute;
          left: 0.6rem;
          top: 5.5rem;
          line-height: 0.3rem;
          font-size: 0.2rem;
        }
        .right-center-echarts{
          width: 9rem;
          height: 3rem;
          position: absolute;
          left: 0.6rem;
          top: 2rem;
        }
        .right-bottom-echarts{
          width: 9rem;
          height: 3rem;
          position: absolute;
          left: 0.6rem;
          top: 5.8rem;
        }
    }
    .queryRealTime{
      position: absolute;
      left: 50%;
      top:20%;
      width:6.49rem;
      height:4.81rem;
      opacity:0.66;
      background:url('../../../assets/city-management/environment/water-environment/waterTime.png')  left center/100% 100% no-repeat;
      z-index:300;
      border-radius: 0.3rem;
      .title{
        width:1.09rem;
        height:0.22rem;
        font-size:0.21rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        color:rgba(255,255,255,1);
        padding: 0.3rem 0.2rem;
      }
      .main{
        width: 100%;
        height: 1.7rem;
        padding-left: 0.2rem;
        li{
          list-style: none;
          width:3.2rem;
          height:0.3rem;
          line-height: 0.3rem;
          font-size:0.18rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          color:rgba(223,226,251,1);
          span{
            width:2.36rem;
            height:0.21rem;
            font-size:0.20rem;
            font-family:Source Han Sans CN;
            font-weight:bold;
            font-style:italic;
            color:rgba(248,230,89,1);
            position: absolute;
          }
        }
      }
      .add{
        width: 6.08rem;
        height: 1.86rem;
        margin:auto;
        font-size:0.18rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(255,255,255,0.91);
        li{
          display: flex;
          justify-content: space-around;
          div{
            width: 1.23rem;
            text-align: center;
            height: 100%;
            line-height: 0.45rem;
          }
          div:nth-child(2){
            width: 1.4rem;
          }
        }
        li:nth-child(2n-1){
          background:rgba(37,80,180,0.78);
          height: 0.45rem;
        }
        li:nth-child(2n){
          height:0.48rem;
          background:rgba(28,70,175,0.1);
        }
      }
    }
    .fenlei{
      width: 7.62rem;
      height: 2.2rem;
      background: url('../../../assets/city-management/environment/water-environment/juxing.png') center center no-repeat;
      background-size: 7.62rem 2.2rem;
      position: absolute;
      right: 10.87rem;
      bottom: .89rem;
      .title{
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: space-around;
        margin-top:0.2rem;
        li{
          list-style: none;
          height: 100%;
          line-height: 0.58rem;
          font-size:0.17rem;
          font-family:Source Han Sans CN;
          font-weight:400;
          color:rgba(255,255,255,1);
          vertical-align: middle;
          span{
            width: 0.15rem;
            height: 0.15rem;
            display: inline-block;
            margin-right:0.1rem;
          }
        }
      }
      .num{
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: space-around;
        li{
          width: 1.17rem;
          height: 0.67rem;
          background:url('../../../assets/city-management/environment/water-environment/number.png') center center no-repeat;
          background-size: 1.17rem 0.67rem;
          font-size:0.2rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          font-style:italic;
          color:rgba(255,255,255,1);
          list-style: none;
          text-align: center;
          line-height: 0.7rem;
          span{
            font-size:0.28rem;
            font-family:Impact;
            font-weight:bold;
            font-style:italic;
            color:rgba(248,230,89,1);
            padding-right: 0.1rem;
          }
        }
      }
      .percent{
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: space-around;
        margin-top:-0.22rem;
        li{
          width: 1.17rem;
          height: 0.67rem;
          background:url('../../../assets/city-management/environment/water-environment/number.png') center center no-repeat;
          background-size: 1.17rem 0.67rem;
          font-size:0.20rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          font-style:italic;
          color:rgba(255,255,255,1);
          list-style: none;
          text-align: center;
          line-height: 0.7rem;
          span{
            font-size:0.28rem;
            font-family:Impact;
            font-weight:bold;
            font-style:italic;
            color:rgba(248,230,89,1);
            padding-right: 0.1rem;
          }
        }
      }
    }
    .maker-box-poor {
          position: absolute;
          z-index: 200;
          text-align: center;
        .g-maker-text {
          padding-left: 0.35rem;
          box-sizing: border-box;
          position: absolute;
          // left: 23.68rem;
          // top: 2.5rem;
          left: 0;
          top: 0;
          width: 2.72rem;
          height: 2.85rem;
          background: url('../../../assets/city-management/common-service/education-resource/small-kuang.png') center no-repeat;
          background-size: 100%;
          h3 {
            margin: 0.30rem 0 0.18rem 0;
            font-size:0.21rem;
            font-family:Source Han Sans CN;
            font-weight:bold;
            color:rgba(255,255,255,1);
          }
          .g-text-item {
            margin-bottom: 0.22rem;
            font-size:0.18rem;
            height: 0.18rem;
            line-height: 0.18rem;
            font-family:Source Han Sans CN;
            font-weight:bold;
            color:rgba(223,226,251,1);
            span {
              font-size:0.22rem;
              font-family:Source Han Sans CN;
              font-weight:bold;
              font-style:italic;
              color:rgba(249,230,89,1);
            }
            label {
              float: left;
              line-height: 0.25rem;
            }
            .g-address {
              width: 1.95rem;
              line-height: 0.25rem;
              float: left;
            }
          }
          .makerItem{
            .line {
            width: 0.04rem;
            height: 0.64rem;
            background: #ffffff;
            margin-left: 0.44rem;
            margin-top: -0.23rem;
            }
            .dot {
              width:0.19rem;
              height:0.13rem;
              background:rgba(213,96,44,1);
              opacity:0.9;
              border-radius:50%;
              margin: auto;
            }
            .cricle {
              width:0.75rem;
              height:0.38rem;
              border:0.02rem solid rgba(213,96,44,1);
              opacity:0.3;
              margin:-0.25rem auto 0 auto;
              border-radius:50%;
              box-shadow:inset 0px 0px 5px 1px rgba(213,96,44,1);
              animation: warn 1s infinite;
              .inner-cricle {
                width:0.36rem;
                height:0.20rem;
                border:0.02rem solid rgba(213,96,44,1);
                border-radius:50%;
                margin:0.05rem auto;
              }
            }
              @keyframes warn {
              0% {
                  transform: scale(0.4);
                  opacity: 0.0;
              }
              25% {
                  transform: scale(0.6);
                  opacity: 0.2;
              }
              50% {
                  transform: scale(0.8);
                  opacity: 0.5;
              }
              75% {
                  transform: scale(1);
                  opacity: 0.8;
              }
              100% {
                  transform: scale(1.2);
                  opacity: 0;
              }
            }

          }
        }}
}
  /*.left-top,*/
  /*.right{*/
  /*}*/
</style>
