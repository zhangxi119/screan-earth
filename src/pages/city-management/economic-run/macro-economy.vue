
<!--
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-02 10:23:39
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-13 16:55:13
 -->
<template>
   <div id="macro-economy-container" class="macro-economy-container">
     <head-component name="宏观经济"></head-component>
     <div class="g-menu-box">
      <menu-list></menu-list>
     </div>
     <!-- maker -->
    <maker-component v-show="!isThree" v-for="(item, index) in makersDatas" :key="index" :makerData="item">
        <div slot="maker">
          <!-- <div class="g-maker-num">666人</div> -->
          <div class="maker-img">
            <img @click="showMarkerDetail(item, index)" src="@/assets/common/event-line.png" alt="" />
          </div>
        </div>
        <img v-show="item.showTextFlag" slot="img"  src="@/assets/common/event-icon.png" alt="" class="line2" />
        <div  @mouseenter="stopBanner()" @mouseleave="startBanner()" slot="text" class="g-maker-text" v-show="item.showTextFlag">
          <div class="window-box">
              <div class="window-box-left">
                <p>{{item.hg02002}}</p>
                <div class="window-box-info-01">
                  <span>{{item.hg02001}}年GDP生产总值</span>
                  <span>人均GDP</span>
                </div>
                <div class="window-box-info-02">
                  <span><span>{{item.hg02010 | foamterThoand}}</span>&nbsp;&nbsp;亿元</span>
                  <span><span>{{item.hg02011 | foamterThoand}}</span>&nbsp;&nbsp;{{item.unit011}}</span>
                </div>
                <div class="window-box-data" :id="item.eId">

                </div>
              </div>
          </div>
        </div>
    </maker-component>
    <!-- maker-end -->
     <div class="left-panle">
         <div class="panle-title hover-color">国民经济和社会发展主要指标<span class="global-data-title">（截至2019年）</span></div>
          <div class="top-title hover-color">
           <img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>{{years01}}年地区生产总值增长趋势
          </div>
          <div id="left-chart-01" class="left-chart-01"></div>
          <div class="top-title top-title-02 hover-color">
           <img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>{{years02}}年三次产业增加值占生产总值比重
          </div>

          <div id="left-chart-02" class="left-chart-02"></div>
          <div class="left-panle-bottom-data">
             <div class="left-bototm-item">
                <div class="left-b-title">规上工业增加值增速</div>
                <div class="left-c">
                    高于省目标<span> {{lastYearMark.hg02_2}} </span> 百分点
                    位于全省第<span> {{lastYearMark.hg02_3}} </span>
                </div>
                <div class="left-b">
                  <img class="icon" src="@/assets/city-management/economic-run/macro-economy/data-01.png"/>
                  <div class="left-info">{{lastYearMark.hg02_1}}</div>
                </div>
             </div>
             <div class="left-bototm-item">
                <div class="left-b-title">工业对经济增长贡献率</div>
                <div class="left-c">
                   <div class="echarts-gu">
                     <div id="echarts-gu"></div>
                    </div>
                </div>
                <div class="left-b">
                  <div class="left-info">{{lastYearMark.hg02_5}}</div>
                </div>
             </div>
             <div class="left-bototm-item">
                <div class="left-b-title">拉动社会经济增长</div>
                <div class="left-c">
                  <img src="@/assets/city-management/economic-run/macro-economy/data-02.png"/>
                </div>
                <div class="left-b">
                  <div class="left-info">{{lastYearMark.hg02_4}}</div>
                </div>
             </div>
          </div>
     </div>
     <div class="left-panle-top">
        <div class="panle-title hover-color">财政收支情况</div>
        <div id="left-chart-03" class="left-chart-03"></div>
     </div>
     <div class="left-panle-bottom">
        <div class="panle-title hover-color">消费、投资与进出口情况</div>
        <div class="info">
          <div class="info-item"><span class="icon"></span><span>全社会消费品零售总额 <span>{{inOutTitle.hg11006}}</span> {{inOutTitle.unit006}}</span></div>
          <div class="info-item"><span class="icon"></span><span>全社会固定资产投资总额 <span>{{inOutTitle.hg11008}}</span> 亿元</span></div>
          <div class="info-item"><span class="icon"></span><span>进出口总额 <span>{{inOutTitle.hg11004}}</span> {{inOutTitle.unit004}}</span></div>
        </div>
        <div class="cutover">
          <div :class="[showEntrance? 'both alive' : 'both']" @click="showEntrance=!showEntrance">进出口情况</div>
          <div :class="[!showEntrance? 'both alive' : 'both']" @click="showEntrance=!showEntrance">消费和投资情况</div>
        </div>
        <div class="left-charts-04" v-show="showEntrance">
          <div id="left-charts-04"></div>
        </div>
        <div class="left-charts-04-b" v-show="!showEntrance">
          <div id="left-charts-04-b"></div>
        </div>
     </div>
     <div class="right-panle-top">
        <div class="panle-title hover-color">人民生活和社会保障<span class="global-data-title">（截至2019年）</span></div>
        <div class="right-panle-top-left">
          {{peopleNum.hg06001}}年全市户籍人口数量<span>{{peopleNum.hg06002}}</span>人，比上年增长<span>{{peopleNum.hg06003}}</span>，其中城镇人口<span>{{peopleNum.hg06004}}</span>人，农村人口<span>{{peopleNum.hg06005}}</span>人。
        </div>
        <div class="right-panle-top-center">
           <div class="top-title hover-color">
            <img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>
              人均可支配收入水平情况
          </div>
          <div id="right-panle-charts-01" class="right-panle-charts-01"></div>
        </div>
        <div class="right-panle-top-right">
           <div class="top-title hover-color">
            <img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>
              社会保障情况
          </div>
          <img class="radar-img" src="@/assets/city-management/common-service/medical-resource/rada.png"/>
          <div :class="'radar-common-title echarts-02-title-0' + (index + 1)" v-for="(item, index) in societySure" :key="index">
            <p class="first-p">{{item.name}}</p>
            <!-- <p class="second-p">{{item.proportion}}%<span></span></p> -->
            <p class="third-p">{{item.number}}</p>
          </div>
        </div>
     </div>
     <div class="right-panle-bottom">
        <div class="right-panle-bottom-charts1">
          <div class="panle-title hover-color">资源基础保障</div>
          <div class="top-title hover-color">
           <img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>全市用电量
          </div>
          <ul class="btn1">
            <li :class="[resouseMonth?'alive-btn':'']" @click="resouseMonth=!resouseMonth">月</li>
            <li :class="[resouseMonth?'':'alive-btn']" @click="resouseMonth=!resouseMonth">年</li>
          </ul>
          <div id="right-panle-bottom-charts1" v-show="resouseMonth"></div>
          <div id="right-panle-bottom-charts1b" v-show="!resouseMonth"></div>
        </div>
        <div class="right-panle-bottom-charts2">
          <div class="panle-title hover-color">旅游收入情况</div>
          <div class="top-title hover-color">
           <img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>旅游综合收入
          </div>
          <ul class="btn2">
            <li :class="[travalMonth?'alive-btn':'']" @click="travalMonth=!travalMonth">季度</li>
            <li :class="[travalMonth?'':'alive-btn']" @click="travalMonth=!travalMonth">年</li>
          </ul>
          <div id="right-panle-bottom-charts2" v-show="travalMonth"></div>
          <div id="right-panle-bottom-charts2b" v-show="!travalMonth"></div>
        </div>
     </div>
     <div class="right-info">
       <div class="right-info-item">
         <P>{{lastYearData.hg01001}}年全市GDP生产总值</P>
         <div class="info-details">
            <span><span  class="span-01">{{lastYearData.hg01002}}</span>&nbsp;&nbsp;{{lastYearData.unit002}}</span>
            <div>
              <img src="@/assets/city-management/economic-run/macro-economy/right-item.png"/>
              <span>{{lastYearData.hg01003}}</span>
            </div>
         </div>
       </div>
       <div class="right-info-item">
          <P>{{lastYearData.hg01001_1}}年全市人均GDP</P>
          <div class="info-details">
            <span><span class="span-02">{{lastYearData.hg01006}}</span>&nbsp;&nbsp;{{lastYearData.unit006}}</span>
            <div>
              <img src="@/assets/city-management/economic-run/macro-economy/right-item.png"/>
              <span>{{lastYearData.hg01007}}</span>
            </div>
          </div>
       </div>
     </div>
      <!-- <div class="window-box"
          v-if="selectZoneName"

         >
          <div class="window-box-left">
            <p @click="selectZoneName=null">{{selectZoneName}}</p>
            <div class="window-box-info-01">
            <span>{{zoneDetail.hg02001}}年GDP生产值</span>
            <span>人均GDP生产值</span>
            </div>
            <div class="window-box-info-02">
            <span><span>{{zoneDetail.hg02010}}</span>&nbsp;&nbsp;{{zoneDetail.unit010}}</span>
            <span><span>{{zoneDetail.hg02011}}</span>&nbsp;&nbsp;{{zoneDetail.unit011}}</span>
            </div>
            <div class="window-box-data" id="areaEcharts" ref="areaEcharts">

            </div>
          </div>
      </div> -->
   </div>
</template>
<script>
import echarts from 'echarts'
import * as API from '@/api/city-management/economy-run.js'
import options from '@/echarts-data/city-management/economic-run/macro-economy/left-charts-01.js'
import options02 from '@/echarts-data/city-management/economic-run/macro-economy/left-charts-02.js'
import options03 from '@/echarts-data/city-management/economic-run/macro-economy/left-charts-03.js'
import options04 from '@/echarts-data/city-management/economic-run/macro-economy/left-charts-04.js'
import options04b from '@/echarts-data/city-management/economic-run/macro-economy/left-charts-04-b.js'
import options041 from '@/echarts-data/city-management/economic-run/macro-economy/left-charts-05.js'
import options05 from '@/echarts-data/city-management/economic-run/macro-economy/right-charts-01.js'
// import options06 from '@/echarts-data/city-management/economic-run/macro-economy/right-charts-02.js'
import option07 from '@/echarts-data/city-management/economic-run/macro-economy/resouse-month-charts.js'
import option08 from '@/echarts-data/city-management/economic-run/macro-economy/travel-year-charts.js'
import option09 from '@/echarts-data/city-management/economic-run/macro-economy/travel-month-charts.js'
import menuList from '@/components/menu.vue'
import headComponent from '@/components/head-component'
import leshanArea from '../../../../static/CesiumAssets/js/leshanArea.js'
import makerComponent from '@/components/maker-component.vue'

export default {
  components: {menuList, headComponent, makerComponent},
  data () {
    return {
      selectZoneName: true,
      zoneDetail: {},
      mapWindowList: [],
      lastYearData: {}, // 最近一年主要指标
      lastYearMark: {}, // 说明
      inOutTitle: {}, // 消费、投资与进口情况
      oneYearUse: {}, // 资源基础保障
      peopleNum: {
        hg06001: '',
        hg06002: '',
        hg06003: '',
        hg06004: '',
        hg06005: ''
      }, // 人民生活和社会保障
      showEntrance: true, // (进口)消费与投资切换
      societySure: [], // 社会保障情况
      resouseMonth: true,
      travalMonth: true,
      echartObj: null,
      years01: '2015-2019',
      years02: '2015-2019',
      // 新增地图部分
      makersDatas: [],
      timer: null
    }
  },
  mounted () {
    this.rem = window.$rem
    this.getMacroDevelop() // 国民经济和社会发展主要指标
    this.getInComeMoney() // 财政收支情况
    this.getMoneyInOut() // 消费、投资与进口情况
    this.getSourceBase() // 资源基础保障
    this.getTourismRevenue()
    this.getPeopleSure() // 人民生活和社会保障
    this.getAreaDataList()
    this.getTourismRevenue()// 旅游收入情况
    // window._m.redirectDimenionFn((name) => {
    //   this.selectZoneFn(name)
    // }, true)
  },
  computed: {
    isThree () {
      return this.$store.getters.GET_IS_THREE
    }
  },
  watch: {
    isThree (val) {
      if (val) {
        this.stopBanner()
      } else {
        this.startBanner()
      }
    }
  },
  methods: {
    // selectThreeZone (name) {
    //   let index = this.mapWindowList.findIndex((item) => {
    //     return item.name === name
    //   })
    //   this.selectZone = this.mapWindowList[index]
    //   if (this.selectZone.name) {
    //     // 点击地图获取区县指标数据
    //     API.MACRO_MAPDETAIL(this, {name: this.selectZone.name}).then((resA) => {
    //       let res = resA.data.data
    //       this.zoneDetail = res.map
    //       this.echartObj = null
    //       this.echartObj = echarts.init(this.$refs.areaEcharts).setOption(this.returnPieOption(res.map))
    //     }).catch(err => {
    //       console.log(err)
    //     })
    //   }
    // },
    getAreaDataList () {
      API.MACRO_MAPDETAIL(this, {name: ''}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        let arr = res.map
        // this.makersDatas
        arr.forEach((item, index) => {
          if (leshanArea[item.hg02002]) {
            item.lon = Number(leshanArea[item.hg02002].lon)
            item.lat = Number(leshanArea[item.hg02002].lat)
            if (index === 0) {
              item.zIndex = 3
              item.showTextFlag = true
            } else {
              item.showTextFlag = false
              item.zIndex = 1
            }
            item.id = 'macro-' + index
            item.eId = 'macro-echart-' + index
            this.makersDatas.push(item)
          }
        })
        // 渲染每一个echart
        this.$nextTick(() => {
          this.makersDatas.forEach((item, index) => {
            echarts.init(document.getElementById(item.eId)).setOption(this.returnPieOption(item), true)
          })
        })
        window._m.addMakers(this.makersDatas, (type) => {
          if (type === 1) { // 三维
          } else { // 二维
          }
        })
        // 区域总体信息循环显示
        this.autoBanner()
      }).catch(err => {
        console.log(err)
      })
    },
    showMarkerDetail (item, index) {
      this.makersDatas.forEach((ite, i) => {
        if (index !== i) {
          ite.showTextFlag = false
        }
      })
      item.showTextFlag = !item.showTextFlag
      let d = item
      d.showTextFlag = true
      d.zIndex = 3
      this.$set(this.makersDatas, index, d)
    },
    autoBanner () {
      // 区域总体信息循环显示
      let i = 0
      this.timer = setInterval(() => {
        ++i
        if (i > this.makersDatas.length - 1) {
          i = 0
        }
        this.makersDatas.forEach((item, index) => {
          if (index !== i) {
            this.makersDatas[index].showTextFlag = false
            this.makersDatas[index].zIndex = 1
          }
        })
        this.makersDatas[i].showTextFlag = true
        this.makersDatas[i].zIndex = 3
      }, 5000)
    },
    stopBanner () {
      clearInterval(this.timer)
    },
    startBanner () {
      this.autoBanner()
    },
    selectZoneFn (name) {
      // this.selectZoneName = name
      // this.$nextTick(() => {
      //   API.MACRO_MAPDETAIL(this, {name}).then((resA) => {
      //     let res = resA.data.data
      //     this.zoneDetail = res.map
      //     this.echartObj = null
      //     this.echartObj = echarts.init(document.getElementById('areaEcharts')).setOption(this.returnPieOption(res.map))
      //   }).catch(err => {
      //     console.log(err)
      //   })
      // })
    },
    // 地图弹出框饼图
    returnPieOption (data) {
      let sData = []
      console.log(data)
      sData.push({value: data.hg02003, name: '第一产业'})
      sData.push({value: data.hg02004, name: '第二产业', label: {show: false}, labelLine: {show: false, length2: 0}})
      sData.push({value: data.hg02005, name: '第三产业', label: {show: false}, labelLine: {show: false, length2: 0}})
      let option = {
        title: {
          text: '三次产业增加值占比情况',
          left: 'left',
          top: 0,
          selectorPosition: 'end',
          textStyle: {
            color: '#DFE2FD',
            fontSize: 18 * window.$rem
          }
        },
        color: ['#00B0E2', '#0AD192', '#FCE62F'],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} %',
          backgroundColor: 'rgba(0,53,126,0.74)',
          borderColor: '#44aaf4',
          borderWidth: 2 * window.$rem,
          padding: [10 * window.$rem, 20 * window.$rem],
          textStyle: {
            fontSize: 17 * window.$rem
          }
        },
        legend: {
          x: '50%',
          y: 'center',
          data: ['第一产业', '第二产业', '第三产业'],
          icon: 'roundRect',
          itemGap: 30 * window.$rem,
          orient: 'vertical',
          itemHeight: 15 * window.$rem,
          itemWidth: 15 * window.$rem,
          formatter: name => {
            let value = 0
            sData.forEach(item => {
              if (name === item.name) {
                value = item.value + '%'
              }
            })
            return `{a| ${name}} {b| ${value}}`
          },
          textStyle: {
            rich: {
              a: {
                color: '#ffffff',
                fontSize: 16 * window.$rem
              },
              b: {
                color: 'rgba(252,230,47,1)',
                fontSize: 16 * window.$rem
              }
            }
          }
        },
        series: [
          {
            name: '占比情况',
            type: 'pie',
            radius: '55%',
            center: ['23%', '55%'],
            data: sData,
            label: {
              textStyle: {
                color: '#ffffff',
                fontSize: 15 * window.$rem
              },
              formatter: param => {
                return param.value + '%'
              }
            },
            labelLine: {
              length: 0,
              length2: 8 * window.$rem
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      return option
    },
    // 国民经济和社会发展主要指标
    getMacroDevelop () {
      API.MACRO_DEVELOP(this, {}).then((resA) => {
        let res = resA.data.data
        // 2015-2019年地区生产总值增长趋势
        echarts.init(document.getElementById('left-chart-01')).setOption(options(res.five))
        this.years01 = res.five.years
        // 说明
        this.lastYearMark = res.industry.explain

        let pieData = this.lastYearMark.hg02_5.split('').slice(0, this.lastYearMark.hg02_5.length - 1).join('')
        echarts.init(document.getElementById('echarts-gu')).setOption(options041(pieData))
        // 最近一年主要指标 (地图和左下角数据)
        this.lastYearData = res.one
        this.lastYearData.hg01002 = this.numFormat(this.lastYearData.hg01002)
        this.lastYearData.hg01006 = this.numFormat(this.lastYearData.hg01006)

        // 2015-2019年三次产业增加值占生产总值比重(%)
        echarts.init(document.getElementById('left-chart-02')).setOption(options02(res.industry))
        this.years02 = res.industry.years
      }).catch(err => {
        console.log(err)
      })
    },
    numFormat (num) {
      var c = (num.toString().indexOf('.') !== -1) ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
      return c
    },

    // 财政收支情况
    getInComeMoney () {
      API.MACRO_INCOME(this, {}).then((resA) => {
        let res = resA.data.data
        // 财政收支情况
        echarts.init(document.getElementById('left-chart-03')).setOption(options03(res.finance.data))
      }).catch(err => {
        console.log(err)
      })
    },
    // 消费、投资与进口情况
    getMoneyInOut () {
      API.MACRO_INOUT(this, {}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        this.inOutTitle = res.importAndExport.title
        let consumptionData = [] // 消费
        let entranceData = [] // 进口
        res.importAndExport.data.forEach((item, index) => {
          entranceData.push({
            'hg11001': item.hg11001,
            'hg11002': item.hg11002,
            'hg11003': item.hg11003
          })
          consumptionData.push({
            'hg11001': item.hg11001,
            'hg11006': item.hg11006,
            'hg11008': item.hg11008
          })
        })
        console.log('asd', entranceData, consumptionData)
        echarts.init(document.getElementById('left-charts-04')).setOption(options04(entranceData))
        echarts.init(document.getElementById('left-charts-04-b')).setOption(options04b(consumptionData))
      }).catch(err => {
        console.log(err)
      })
    },
    // 资源基础保障
    getSourceBase () {
      API.MACRO_SOURCEBASE(this, {}).then((resA) => {
        let res = resA.data.data.power
        console.log(res)
        // this.oneYearUse = res.one
        // 近五年水电气供应量
        // echarts.init(document.getElementById('right-chart-item-01')).setOption(options06(['#55f0c7', '#04453d'], res.five, 1))
        // echarts.init(document.getElementById('right-chart-item-02')).setOption(options06(['#f8ea36', '#41452d'], res.five, 2))
        // echarts.init(document.getElementById('right-chart-item-03')).setOption(options06(['#008af5', '#043859'], res.five, 3))
        echarts.init(document.getElementById('right-panle-bottom-charts1')).setOption(option07(res.month))
        echarts.init(document.getElementById('right-panle-bottom-charts1b')).setOption(option07(res.year))
      }).catch(err => {
        console.log(err)
      })
    },
    // 旅游收入情况
    getTourismRevenue () {
      API.MACRO_GETTOURISMREVENUE(this, {}).then((resA) => {
        let res = resA.data.data.tourismRevenue
        console.log(res)
        echarts.init(document.getElementById('right-panle-bottom-charts2')).setOption(option09(res.quarter))
        echarts.init(document.getElementById('right-panle-bottom-charts2b')).setOption(option08(res.year))
      })
    },
    // 人民生活和社会保障
    getPeopleSure () {
      API.MACRO_PEOPLESURE(this, {}).then((resA) => {
        let res = resA.data.data
        this.peopleNum = res.population
        // 人均可支配消费水平情况
        echarts.init(document.getElementById('right-panle-charts-01')).setOption(options05(res.consumption))
        // 社会保障情况
        this.societySure = res.insurance
      }).catch(err => {
        console.log(err)
      })
    }
  },
  filters: {
    foamterThoand (val) {
      return val.toString().replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')
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
.macro-economy-container {
  position: absolute;
  background: #000000;
  .g-menu-box {
    position: absolute;
    left: 13.8rem;
    top: 9rem;
    z-index: 100;
  }
  .title {
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
    z-index: 8;
  }
  .tool-tip {
      background:#00357E;
      color: #FFFFFF;
      font-size: 0.14rem;
      padding: 0.05rem 0.1rem;
      border-radius:0.04rem;
      p {
        margin: 0.05rem 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        span:first-of-type{
          margin-right: 0.05rem;
          width: 0.12rem;
          height: 0.12rem;
        }
      }
    }
  .panle-title {
    position: absolute;
    top: 0.4rem;
    left:0.48rem;
    font-size: 0.24rem;
    color: #FFFFFF;
    padding: 0.15rem 0.20rem;
    box-sizing: border-box;
    background: url('../../../assets/common/panle-title.png') no-repeat;
    background-position-y: 100%;
  }
  .left-panle {
   position: absolute;
   width: 6.78rem;
   height: 9.99rem;
   left: 0.27rem;
   top: 0.6rem;
   background: url('../../../assets/city-management/economic-run/macro-economy/left-panle.png') no-repeat;
   background-size: 100% 100%;
   z-index: 10;
   .left-top-text {
     position: absolute;
     left: 11%;
     top: 4.8rem;
     width: 5.45rem;
     height: 1.58rem;
     box-sizing: border-box;
     padding: 0.22rem 0.21rem 0.17rem 0.21rem;
     color:rgba(255,255,255,1);
     line-height:0.26rem;
     font-size: 0.17rem;
     text-indent: 2em;
     background: url('../../../assets/city-management/economic-run/macro-economy/small-kuang.png') no-repeat;
     background-size: 100% 100%;
   }
   .top-title {
      position: absolute;
      left: 0.58rem;
      top: 1.14rem;
      font-size: 0.20rem;
      color: #FFFFFF;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      img {
        width: 0.50rem;
        height: 0.50rem;
      }
   }
   .top-title-02 {
     top: 4.3rem;
   }
   .left-chart-01 {
     position: absolute;
     width: 88%;
     left: 8%;
     top: 1.54rem;
     height: 2.9rem;
   }
   .left-chart-02 {
     position: absolute;
     width: 88%;
     left: 8%;
     top: 4.6rem;
     height: 3.3rem;
   }
   .left-panle-bottom-data {
     position: absolute;
     width: 82%;
     left: 8%;
     top: 7.9rem;
     box-sizing: border-box;
     margin-left: 0.3rem;
     display: flex;
     flex-direction: row;
     .left-bototm-item {
       position: relative;
       display: flex;
       flex-direction: column;
       flex: 1;
       justify-content: center;
       align-items: center;
       .left-b-title {
         font-size: 0.16rem;
         font-style:italic;
         color: #FFFFFF;
       }
       .left-c {
         font-size: 0.14rem;
         color:#FFFFFF;
         width: 1.5rem;
         text-align: center;
         margin-top: 0.17rem;
         height: 0.37rem;
         span {
           color: #FFE700;
         }
         img {
           width: 0.45rem;
           height: 0.46rem;
         }
         .echarts-gu {
           margin: -0.05rem auto;
           width: 0.55rem;
           height: 0.55rem;
           background: url('../../../assets/city-management/economic-run/macro-economy/pie.png') no-repeat;
           background-size:100% 100%;
           #echarts-gu {
              width: 0.55rem;
              height: 0.55rem;
           }
         }
       }
       .left-b {
         display: flex;
         flex-direction: row;
         justify-content: center;
         align-items: center;
         margin-top: 0.1rem;
         .icon {
          width: 0.41rem;
          height: 0.42rem;
          margin-right: 0.09rem;
         }
         .left-info {
            width: 1.04rem;
            height: 0.7rem;
            font-size: 0.28rem;
            line-height: 0.68rem;
            text-align: center;
            font-weight:bold;
            font-style:italic;
            color:rgba(255,231,0,1);
            background: url('../../../assets/city-management/economic-run/macro-economy/num-bg.png') no-repeat;
            background-size:100% 100%;
         }
       }
     }
   }
  }
  .left-panle-top {
    position: absolute;
    width: 6.78rem;
    height: 5.09rem;
    left: 6.84rem;
    top: 0.6rem;
    background: url('../../../assets/city-management/economic-run/macro-economy/left-panle-top.png') no-repeat;
    background-size: 100% 100%;
    z-index: 10;
    .left-chart-03 {
      position: absolute;
      width: 88%;
      left: 8%;
      top: 1.04rem;
      height: 3.3rem;
    }
  }
  .left-panle-bottom {
    position: absolute;
    width: 6.78rem;
    left: 6.84rem;
    bottom: 0.21rem;
    height: 5.09rem;
    background: url('../../../assets/city-management/economic-run/macro-economy/left-panle-top.png') no-repeat;
    background-size: 100% 100%;
    z-index: 10;
    .info {
      position: absolute;
      top: 1.15rem;
      left: 0.6rem;
      width: 5.76rem;
      height: 1.13rem;
      background: url('../../../assets/city-management/economic-run/macro-economy/left-panle-bottom-bg.png') no-repeat;
      background-size: 100% 100%;
      box-sizing: border-box;
      padding: 0.14rem 0.3rem;
      .info-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 0.17rem;
        color: #FFFFFF;
        margin-top: 0.06rem;
        .icon {
          width: 0.06rem;
          height: 0.06rem;
          background: #27EBFF;
          margin-right: 0.1rem
        }
        span span{
          color: #FBE62F
        }
      }
    }
    .cutover{
      position: absolute;
      width: 3.1rem;
      height: 0.5rem;
      top: 2.25rem;
      left: 3.5rem;
      z-index: 99;
      .both{
        width: 1.5rem;
        height: 0.5rem;
        display: inline-block;
        font-size: 0.17rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(255,255,255,1);
        text-align: center;
        line-height: 0.45rem;
        cursor:pointer;
      }
      .alive{
        background: url('../../../assets/city-management/economic-run/macro-economy/aliveCase.png') no-repeat;
        background-size: 100% 100%;
      }
    }
    .left-charts-04 {
      position: absolute;
      width: 88%;
      left: 8%;
      top: 2.24rem;
      height: 2.3rem;
      #left-charts-04{
        width: 5.97rem;
        height: 2.3rem;
      }
    }
    .left-charts-04-b {
      position: absolute;
      width: 88%;
      left: 8%;
      top: 2.24rem;
      height: 2.3rem;
      #left-charts-04-b{
        width: 5.97rem;
        height: 2.3rem;
      }
    }
  }
  .right-panle-top {
     position: absolute;
     width: 11.59rem;
     height: 4.37rem;
     top: 0.6rem;
     right: 0.35rem;
     background: url('../../../assets/city-management/economic-run/macro-economy/right-panle-top.png') no-repeat;
     background-size: 100% 100%;
     z-index: 10;
     .right-panle-top-left {
       position: absolute;
       top: 1.20rem;
       left:0.6rem;
       font-size: 0.17rem;
       color: #FFFFFF;
       width: 1.89rem;
       height: 2.73rem;
       line-height: 0.3rem;
       background: url('../../../assets/city-management/economic-run/macro-economy/right-bg-01.png') no-repeat;
       background-size: 100% 100%;
       padding: 0.2rem 0.2rem;
       box-sizing: border-box;
       span {
         color: #FBE62F;
       }
     }
     .right-panle-top-center {
       position: absolute;
       width: 5.5rem;
       height: 2.73rem;
       top: 1.20rem;
       left:2.59rem;

       .top-title {
          position: absolute;
          left: 0;
          top: -0.2rem;
          font-size: 0.20rem;
          color: #FFFFFF;
          display: flex;
          flex-direction: row;
          align-items: center;
         z-index: 2;
          img {
            width: 0.50rem;
            height: 0.50rem;
          }
       }
       .right-panle-charts-01 {
          width: 100%;
          height: 2.73rem;
       }
     }
     .right-panle-top-right {
       position: absolute;
       left: 7.6rem;
       top: 1.40rem;
       width: 3.7rem;
       height: 2.5rem;
        .top-title {
          position: absolute;
          left: 0;
          top: -0.45rem;
          font-size: 0.20rem;
          color: #FFFFFF;
          display: flex;
          flex-direction: row;
          align-items: center;
          img {
            width: 0.50rem;
            height: 0.50rem;
          }
       }
     }
      .radar-img {
        position: absolute;
        width: 1.58rem;
        height: 1.58rem;
        left: 1.1rem;
        top: 0.4rem;
     }
     .radar-common-title {
       position: absolute;
       width: 1.37rem;
       .first-p {
        text-align: center;
        color: #FFFFFF;
        font-size: 0.16rem;
       }
       .second-p {
        position:relative;
        color: #9BE9FF;
        font-size: 0.18rem;
        background:rgba(0,25,53,0.7);
        height: 0.24rem;
        line-height: 0.24rem;
        width: 0.96rem;
        margin: 0.05rem auto;
        text-align: center;
        font-style: italic;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        span {
          position: absolute;
          right: 0;
          height: 0.15rem;
          width: 2px;
          background: #9BE9FF;
        }
       }
        .third-p{
         text-align: center;
         font-style:italic;
         color: #EDD6AE;
         font-size: 0.18rem;
        }
     }
      .echarts-02-title-02 {
        right: 0;
     }
     .echarts-02-title-03 {
        bottom: 0.3rem;
     }
     .echarts-02-title-04 {
        right: 0;
        bottom: 0.3rem;
     }
  }
  .right-panle-bottom {
     position: absolute;
     width: 11.59rem;
     height: 5.81rem;
     bottom: 0.21rem;
     right: 0.35rem;
     .panle-title:nth-child(1){
       z-index: 11;
     }
     .panle-title:nth-child(2){
       left: 6.3rem;
       z-index: 11;
     }
     .right-panle-bottom-charts1 {
       position: absolute;
       width: 5.83rem;
       height: 5.81rem;
       background: url('../../../assets/city-management/economic-run/macro-economy/right-bottom1.png') no-repeat;
       background-size: 100% 100%;
       z-index: 10;
       .top-title{
         position: absolute;
          left: 0.7rem;
          top: 1rem;
          font-size: 0.20rem;
          color: #FFFFFF;
          display: flex;
          flex-direction: row;
          align-items: center;
          img {
            width: 0.50rem;
            height: 0.50rem;
          }
       }
       .btn1{
         position: absolute;
         width: 1.6rem;
         left: 4rem;
         top: 1.2rem;
         height: 0.3rem;
         cursor:pointer;
         li{
           list-style: none;
           display: inline-block;
           width: 0.5rem;
           line-height: 0.3rem;
           font-size:0.17rem;
           font-family:Source Han Sans CN;
           font-weight:400;
           color:rgba(255,255,255,1);
           text-align: center;
           margin: 0 0.1rem;
         }
       }
       #right-panle-bottom-charts1 {
         position: absolute;
        width: 5rem;
        height: 3.4rem;
        left: 0.5rem;
        top: 1.7rem;
       }
       #right-panle-bottom-charts1b {
         position: absolute;
        width: 5rem;
        height: 3.4rem;
        left: 0.5rem;
        top: 1.7rem;
       }
     }
     .right-panle-bottom-charts2 {
       position: absolute;
       width: 6.03rem;
       height: 5.6rem;
       left: 5.83rem;
       background: url('../../../assets/city-management/economic-run/macro-economy/right-bottom2.png') no-repeat;
       background-size: 100% 100%;
       z-index: 10;
       .top-title{
         position: absolute;
          left: 0.7rem;
          top: 1rem;
          font-size: 0.20rem;
          color: #FFFFFF;
          display: flex;
          flex-direction: row;
          align-items: center;
          img {
            width: 0.50rem;
            height: 0.50rem;
          }
       }
       .btn2{
         position: absolute;
         width: 1.6rem;
         left: 4rem;
         top: 1.2rem;
         height: 0.3rem;
         cursor:pointer;
         li{
           list-style: none;
           display: inline-block;
           width: 0.5rem;
           line-height: 0.3rem;
           font-size:0.17rem;
           font-family:Source Han Sans CN;
           font-weight:400;
           color:rgba(255,255,255,1);
           text-align: center;
           margin: 0 0.1rem;
         }
       }
       #right-panle-bottom-charts2 {
         position: absolute;
        width: 5rem;
        height: 3.4rem;
        left: 0.5rem;
        top: 1.7rem;
       }
       #right-panle-bottom-charts2b {
         position: absolute;
        width: 5rem;
        height: 3.4rem;
        left: 0.5rem;
        top: 1.7rem;
       }
     }
     .alive-btn {
       background:linear-gradient(180deg,rgba(0,234,255,1),rgba(0,125,255,1));
       box-shadow:0px 1px 10px 0px rgba(195,241,255,0.28);
       border-radius:16px;
     }
  }
  .right-info {
    position: absolute;
    // right: 11.98rem;
    left: 13.67rem;
    top: 1.01rem;
    // display: flex;
    // flex-direction: row;
    z-index: 20;
    .right-info-item {
      height: 1.03rem;
      color: #FFFFFF;
      padding: 0.2rem 0.3rem;
      box-sizing: border-box;
      font-size: 0.17rem;
      background: url('../../../assets/city-management/economic-run/macro-economy/right-panle-bottom2.png') no-repeat;
      background-size: 100% 100%;
      .info-details {
        margin-top: 0.05rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        justify-items: center;
        span .span-01{
         font-size: 0.31rem;
         color: #FFE700;
         font-style: italic;
         font-weight: 600;
        }
        span .span-02{
         font-size: 0.31rem;
         color: #0094FB;
         font-style: italic;
         font-weight: 600;
        }
        div {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 0.05rem;
          span {
           font-size: 0.21rem;
          }
          img {
            width:0.23rem;
            height: 0.23rem;
            margin-left:0.05rem;
            margin-right:0.05rem;
            margin-top: 0.05rem;
          }
        }
      }
    }
  }
  .maker-img {
    display: block;
    cursor: pointer;
    img {
      width: 0.4rem;
      height: 0.4rem;
      margin: 0.12rem auto;
    }
  }
  .window-box{
    position:absolute;
    // width: 5.2rem;
    height:2.8rem;
    // margin-left:-5.2rem;
    // margin-top:-2.1rem;
    color: #FFFFFF;
    font-size: 0.21rem;
    display: flex;
    flex-direction: row;
    z-index: 20;
    // right: 25%;
    // top:50%;
    .window-box-left {
       width: 3.90rem;
       height: 3.74rem;
       padding: 0.2rem 0.21rem 0.05rem 0.21rem;
       box-sizing: border-box;
       background: url('../../../assets/common/win-info-icon-02.png') no-repeat;
       background-size: 100% 100%;
       p {
         margin-top: 0.2rem;
       }
       .window-box-info-01 {
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         font-size: 0.18rem;
         color: #DFE2FD;
         margin-top: 0.15rem;
       }
       .window-box-info-02 {
         margin-top: 0.05rem;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          font-size: 0.15rem;
          color: #DFE2FD;
          span span {
            color: #FCE62F;
            font-style: italic;
            font-size:0.22rem;
          }
       }
       .window-box-data {
        //  width: 100%;
         width: 3.65rem;
         height: 2.3rem;
         display: flex;
         flex-direction: row;
         justify-content: center;
         align-items: center;
         text-align: center;
         margin-top: 0.1rem;
         .left-bototm-item {
           flex: 1;
           .number-data{
              width: 0.80rem;
              height: 0.54rem;
              line-height: 0.54rem;
              color:rgba(255,231,0,1);
              font-size: 0.22rem;
              font-weight: 600;
              font-style: italic;
              background: url('../../../assets/city-management/economic-run/macro-economy/num-bg.png') no-repeat;
              background-size:100% 100%;
           }
           .icon-p {
             font-size: 0.17rem;
             font-style: italic;
           }
           img {
             width: 0.3rem;
             height: 0.3rem;
             margin-top: 0
           }
         }
       }
    }
    img {
     flex: 1;
     height: 1.80rem;
     margin-top: 0.9rem
    }
  }
}
  /*.left-panle,*/
  /*.left-panle-top,*/
  /*.left-panle-bottom,*/
  /*.right-panle-top,*/
  /*.right-panle-bottom-charts1,*/
  /*.right-panle-bottom-charts2{*/
  /*}*/
</style>
