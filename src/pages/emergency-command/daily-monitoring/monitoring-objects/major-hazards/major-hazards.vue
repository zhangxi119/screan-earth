/*
 * @Descripttion: 重大危险源 监测预警
 * @Author: luoxi
 * @Date: 2020-03-8
 * @LastEditors: luoxi
 * @LastEditTime: 2020-03-8 12:22:55
 */
<template>
  <div class="medical-resource-container">
    <!-- <div class="header-bg">监测预警 重大危险源</div> -->
    <head-component name="监测预警 重大危险源"></head-component>
    <!-- <maker-component
      v-for="(item, index) in makersDatas"
      :ref=""maker_"+index"
      :key="index"
      :makerData="item"
      class="maker-box-poor"
    >
      <div slot="maker">
        <img @click="makerClick(index)" src="@/assets/common/student_blue.png" alt class="topHead" />
      </div>
      <div slot="mini-maker">
        <img class="mini-maker" src="@/assets/common/student_blue.png" alt />
      </div>
      <div slot="text" class="g-maker-text" style="display: none;">
        <h3>学校</h3>
        <div class="g-text-item">
          名称：
          <span>{{item.schoolName}}</span>
        </div>
        <div class="g-text-item">
          学生人数：
          <span>{{item.studentNum}}</span>人
        </div>
        <div class="g-text-item">
          是否重点学校：
          <span>{{item.keySchool}}</span>
        </div>
        <div class="g-text-item">
          咨询电话：
          <span>{{item.phone}}</span>
        </div>
        <div class="g-text-item">
          地址：
          <span>{{item.address}}</span>
        </div>
      </div>
    </maker-component>-->
    <div class="natural-select-other">
      <select-other :data="menuList2"  style="display:block"></select-other>
    </div>
    <div class="g-menu-box">
      <main-list></main-list>
    </div>
    <div class="security-person" style="display: none;">
      <h1>安保人员</h1>
      <p>
        人员数量：
        <span>88</span>
      </p>
      <p>
        联系人：
        <span>张航</span>
      </p>
      <p>
        联系电话：
        <span>18281563658</span>
      </p>
    </div>
    <div class="flood-situation" style="display: none;">
      <h1>汛情</h1>
      <p>
        学校数：
        <span>88</span>&nbsp;家
      </p>
      <p>
        学生数：
        <span>24,321</span>&nbsp;人
      </p>
      <p>
        老师数：
        <span>241</span>&nbsp;人
      </p>
      <p>
        计划招生人数：
        <span>24,100</span>&nbsp;人
      </p>
      <p>
        少数民族数：
        <span>24,100</span>&nbsp;个
      </p>
    </div>
    <div class="national-tourism" style="display: none;">
      <h1>国家旅游博览会</h1>
      <p>
        时间：
        <span>2019.12.31-2020.1.</span>
      </p>
      <p>
        位置：
        <span>沙湾区安息路</span>
      </p>
      <p>
        活动规模：
        <span>24,100</span>&nbsp;人
      </p>
      <p>
        主办方：
        <span>峨眉山旅游局</span>
      </p>
    </div>
    <div class="left-content">
      <div class="left-content-top">
        <div>
          <div class="title-model">
            <div class="title">危险源企业分布</div>
          </div>
          <div class="base-list">
            <div id="each-ratio"></div>
            <div class="each-ratio-icon">
              <div
                class="icon"
                v-for="(item,index) in legendList"
                :key="index"
                @click="queryPoints('industryCode',item.industryCode)"
              >
                <img :src="item.img" />
                {{item.industryName}} {{item.counts}} 家
              </div>
            </div>
          </div>
          <div class="title-model">
            <div class="title">已上报重大危险源情况</div>
            <div class="g-show-detail" @click="showDetail()">查看明细</div>
          </div>
          <div class="base-list">
            <div class="area-title">危险源行业分级统计</div>
            <div class="event-left-echart-01" id="event-left-echart-01"></div>
            <div class="right-pie">
              <div class="area-title">重大危险源等级分布</div>
              <div class="g-pie-item" id="zdwxydjfb"></div>
              <div class="zd-icon-box">
                <div
                  class="icon"
                  v-for="(item,index) in legendListTwo"
                  :key="index+item.code"
                  @click="queryPoints('levelCode',item.code)"
                >
                  <div class="box" :class="'box'+index"></div>
                  {{item.name}}&nbsp;{{(item.value/totalLevel*100).toFixed(2)}}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="left-content-bottom">
        <div class="title-model">
          <div class="title">预警通知</div>
        </div>
        <div class="right-title">
          累计发布通知:
          <span>{{warningNoticeTime}}</span>
          <span class="littleWord">次</span>
        </div>
        <div class="list-box">
          <div
            @mouseover="stopAnimate(1)"
            @mouseleave="startAnimate(1)"
            :class="{'anim':animate1}"
            class="list-inner-box"
          >
            <div class="list-box-item" v-if="warningNotice&&warningNotice.length">
              <div class="plan-area">
                <div class="center-area" v-for="(item,index) in warningNotice" :key="index">
                  <h1>{{item.zh06001}}</h1>
                  <div class="center-paragraph">{{item.zh06004}}</div>
                  <div class="bottom-date">{{item.zh06003}}</div>
                </div>
              </div>
            </div>
            <div class="list-box-item" v-else>
              <p
                class="no-data-notice"
                style="font-size:.24rem;text-align:center;margin-top:1rem;width:100%;color: #fce62f;"
              >无数据</p>
            </div>
          </div>
        </div>
      </div> -->
      <warInf class = "war-inf"  :labelList = "warningNotice"  @close= "closeNoticeMakter"/>
    </div>
    <div class="right-top-panle">
      <div class="panle-title">危险源企业区域统计TOP5</div>
      <div class="g-nav-box">
        <heart-select
          :data="selectList"
          @handleClick="handleChoose"
          icon="map"
          :width="1.73"
          :height=".45"
        ></heart-select>
      </div>
      <div class="right-echarts-01">
        <div class="monitoring-left">
          <div class="right-bottom-box">
            <div class="right-bottom-inner-box">
              <div
                class="item-li"
                v-for="(item,index) in items"
                :key="index"
                @click="queryPoints('areaCode',item.areaCode)"
              >
                <div
                  class="number"
                  :class="{'number-01':index===0,'number-02':index===1,'number-03':index===2}"
                >{{index+1}}</div>
                <div class="name">{{item.areaName}}</div>
                <div class="line">
                  <div
                    class="line-inner"
                    :style="'width:' + (index === 0 ? 100 : (item.counts / items[0].counts * 100)) + '%'"
                  ></div>
                  <div class="line-inner-bottom"></div>
                </div>
                <div class="value">{{item.counts}}家</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-bottom-panle">
      <div class="panle-title">企业危险源数量TOP6</div>
      <div class="right-echarts-02">
        <div class="container">
          <div class="tool-tip">
            <div class="level">一级</div>
            <div class="level">二级</div>
            <div class="level">三级</div>
            <div class="level">四级</div>
          </div>
          <div class="main-data">
            <div class="toolTip" ref="toolTip">
              <div class="level-1">
                一级：
                <span>{{HazardNumberRankDetial['一级']}}</span>处
              </div>
              <div class="level-2">
                二级：
                <span>{{HazardNumberRankDetial['二级']}}</span>处
              </div>
              <div class="level-3">
                三级：
                <span>{{HazardNumberRankDetial['三级']}}</span>处
              </div>
              <div class="level-4" >
                四级：
                <span>{{HazardNumberRankDetial['四级']}}</span>处
              </div>
            </div>
            <div class="main-data-line">
              <div
                v-for="(item,index) in hazardNumRank"
                :key="index"
                class="main-data-normal-d"
                :class="{'main-data-left':index%2===0,'main-data-right':index%2!==0, 'fl':index%2===0,'fr':index%2!==0,}"
              >
                <div class="main-data-left-title">
                  <div class="left fl" @mouseenter="showTooltip($event)" @mouseleave="hideTooltip">
                    <span>{{index+1}}</span>
                    <label @mouseenter="showTooltip($event)" @mouseleave="hideTooltip">{{item.companyName}}</label>
                    <div class="icon"></div>
                  </div>
                  <div
                    class="right fr"
                    @mouseleave="out_canvas_move"
                    @mouseenter="get_canvas_move(index+1,item)"
                  >{{item.counts}}处</div>
                </div>
                <div
                  class="main-data-left-line"
                >
                <span  v-for="(itemNumber,iInd) in item.list" :key="iInd">
                    <div
                    v-for="i in (Math.floor((itemNumber.counts/hazardNumRank[0].counts)*17))"
                    :key="i"
                    :class="{item:true,item1:itemNumber.levelName === '一级',item2:itemNumber.levelName === '二级',item3:itemNumber.levelName === '三级',item4:itemNumber.levelName === '四级'}"
                  style="display:inline-block"
                  ></div>
                </span>
                  <!-- {{JSON.stringify(itemNumber)}} -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="event-power" id="qywxysltj"></div> -->
      </div>
      <div class="right-bottom-swiper">
        <div class="panle-title">重大危险源明细</div>
        <div class="swiper-title">
          <ul>
            <li @click="swiper_change(1)" :class="{select:swiper_index == 1}">一级</li>
            <li @click="swiper_change(2)" :class="{select:swiper_index == 2}">二级</li>
            <li @click="swiper_change(3)" :class="{select:swiper_index == 3}">三级</li>
            <li @click="swiper_change(4)" :class="{select:swiper_index == 4}">四级</li>
          </ul>
        </div>
        <div class="list-box" style="position:unset">
          <div
            @mouseover="stopAnimate(2)"
            @mouseleave="startAnimate(2)"
            :class="{'anim':true}"
            class="list-inner-box"
          >
            <div class="list-box-item" v-if="queryErrorDetails&&queryErrorDetails.length">
              <div
                v-for="(item,index) in queryErrorDetails"
                :key="index"
                :class="{'swiper-data':true,'swiper_data_1':item.type ==='一级','swiper_data_2':item.type ==='二级','swiper_data_3':item.type ==='三级','swiper_data_4':item.type ==='四级',}"
                :ref="'swiper_data_'+(index+1)"
              >
                            <div

                  class="container select"
                >
                  <div class="container-left">危险源名称</div>
                  <div class="container-middle">企业名称</div>
                  <div class="container-right">安全技术措施</div>
              </div>
                <div
                  @mouseenter="swiperContainerIn(index,newIndex)"
                  @mouseleave="swiperContainerOut(index,newIndex)"
                  class="container"
                  v-for="(newItem,newIndex) in item.list"
                  :key="newIndex + 'a'"
                >
                  <div class="container-left" @mouseenter="showTooltip($event)" @mouseleave="hideTooltip" >{{newItem.jc05001}}</div>
                  <div class="container-middle" @mouseenter="showTooltip($event)" @mouseleave="hideTooltip">{{newItem.jc01003}}</div>
                  <div class="container-right" @mouseenter="showTooltip($event)" @mouseleave="hideTooltip">{{newItem.jc05003}}</div>
                </div>
              </div>
            </div>
            <div class="list-box-item" v-else>
              <p class="no-data-notice">无数据</p>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="natural-panel" :class = "{changeH: panelBig}">
      <div class="user-dos" @click="panelBig = !panelBig">
        <div class="legend">图例</div>
        <div class="icon"></div>
      </div>
      <circlePanel @addIcon="addIcon" @removeIcon="removeIcon" :ceneterScope="ceneterScope" @getQueryPoint="getQueryPoint" v-show = "panelBig"></circlePanel>
    </div>
    <surver-maker ref="majorMakers"></surver-maker>
    <area-makers ref="majorArea" :dataList="areaInfoData" @showTitle="showTooltip" @hideTitle="hideTooltip"></area-makers>
     <div style="position: absolute; left: 9rem;top: 1rem;">
        <noticeMaker :data = "warningNoticeC" v-show = "isShowNotice"   @close= "closeNoticeMakter" @showTitle="showTooltip" @hideTitle="hideTooltip"/>
      </div>
     <div class="icon-box" :id="item.id" v-for="(item) in icons" :key="item.id">
      <img class="icon-img" src="@/assets/tool/end.png" />
    </div>
    <carsMakers></carsMakers>
    <!-- 显示标题完整信息 -->
    <text-modal ref="textModal"></text-modal>
  </div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
// import { imgPath } from '@/utils/BasePath.js'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/title'
import heartSelect from '@/components/select.vue'
import headComponent from '@/components/head-component.vue'
import options from '../../../../../echarts-data/emergency-command/daily-monitoring/monitoring-objects/major-hazards/left-top-pie.js'
import options01 from '@/echarts-data/emergency-command/daily-monitoring/monitoring-objects/major-hazards/left-charts-01.js'
import pieChart from '@/echarts-data/emergency-command/daily-monitoring/monitoring-objects/major-hazards/pieEchart.js'
import mainList from '@/components/menu.vue'
import circlePanel from '../menuLists/menuLists'
import surverMaker from '../menuLists/surver-makers.vue'
import areaMakers from '../menuLists/marea-makers.vue'
import carsMakers from '../menuLists/cars-makers.vue'
import textModal from '@/components/text-modal' // 显示标题完整信息

import API from '@/api/emergency-command/major-hazards/major-hazards.js'

import img1 from '@/assets/emergency-command/daily-monitoring/major-hazards/img/形状 1646@2x.png'
import img2 from '@/assets/emergency-command/daily-monitoring/major-hazards/img/形状 1645@2x.png'
import img3 from '@/assets/emergency-command/daily-monitoring/major-hazards/img/形状 1644@2x.png'
import img4 from '@/assets/emergency-command/daily-monitoring/major-hazards/img/形状 1643@2x.png'
import img5 from '@/assets/emergency-command/daily-monitoring/major-hazards/img/形状 1642@2x.png'
import warInf from '@/pages/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/war-inf.vue'
import noticeMaker from '@/pages/emergency-command/emergency-command-chart/notice-maker.vue'
import selectOther from '@/components/select-other.vue'
const p1 = require('@/assets/emergency-command/emergency-command-chart/first_level.png')
const p2 = require('@/assets/emergency-command/emergency-command-chart/first_level.png')
const p3 = require('@/assets/emergency-command/emergency-command-chart/first_level.png')
const p4 = require('@/assets/emergency-command/emergency-command-chart/first_level.png')
export default {
  name: 'majorHazards',
  components: {
    heartSelect,
    mainList,
    circlePanel,
    surverMaker,
    headComponent,
    warInf,
    noticeMaker,
    selectOther,
    areaMakers,
    carsMakers,
    textModal
  },
  data () {
    return {
      ceneterScope: {},
      icons: [],
      km: 5,
      areaInfoData: [],
      isShowNotice: false,
      imgList: [img1, img2, img3, img4, img5], // 左上pie的图标
      legendList: [], // 左侧上第一个piechart
      legendListTwo: [], // 左侧中间第二个piechart
      totalLevel: 0,
      img: [p1, p2, p3, p4],
      checkedValue: [],
      selectList: [
        { name: '全部区域' },
        { name: '总部经济区' },
        { name: '五通桥基地' },
        { name: '犍为基地' },
        { name: '夹江基地' }
      ],
      items: [],
      swiper_index: 1,
      animate1: true,
      animate2: true,
      timer1: null,
      timer2: null,
      warningNotice: [],
      warningNoticeC: [],
      warningNoticeTime: 1,
      selectName: null, // 选择框返回的name
      hazardNumRank: null, // top6
      queryErrorDetails: [], // 重大危险源明细
      makersDatas: [{}],
      // 新增的地图类变量
      checkData: [],
      markerData: [],
      markerDetail: {},
      makerFlag: true,
      nowPage: 1,
      showFlag: 0,
      makerIndex: 1,
      makerIndex2: 1,
      HazardNumberRankDetial: {
        '一级': 0,
        '二级': 0,
        '三级': 0,
        '四级': 0
      },
      panelBig: false,
      menuList2: [
        {
          name: '自然灾害',
          routeName: 'naturalDisasters',
          selected: false
        },
        {
          name: '安全生产',
          routeName: 'safetyProduction',
          selected: false
        },
        {
          name: '重大危险源',
          routeName: 'majorHazards',
          selected: true
        },
        {
          name: '公共卫生',
          routeName: 'publicHealth',
          selected: false
        }
      ]
      // 新增的地图类变量-结束
    }
  },
  created () {
    this.querySelectList()
  },
  mounted () {
    this.eachRatio()
    this.queryReports()
    this.queryWarningInfo()
    this.queryAreaRank()
    this.queryHazardNumberRank()
    this.queryHazardDetails()
    this.queryReportsCount()
    this.getAreaInfo()
  },
  beforeDestroy () {
    window._m.clear()
    this.removeIcon()
    window.clearInterval(this.timer1)
  },
  methods: {
    // 查看详情
    showDetail () {
      this.$refs.majorArea.getListInfo2()
    },
    // 地图区县总体情况
    getAreaInfo () {
      API.AREA_NATURA_DATALIST(this, {}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        this.areaInfoData = res.districtOverAllMap
      }).catch(err => {
        console.log(err)
      })
    },
    removeIcon () {
      this.ceneterScope = {}
      window._m.clearToolMakers(this.icons)
      this.icons = []
      this.$store.commit('SET_CURSOR', false)
    },
    addIcon () {
      this.$store.commit('SET_CURSOR', true)
      window._m.addIcon((o) => {
        let {longitude, latitude} = window._m.transWgs84(o.position)
        this.ceneterScope = {
          lon: longitude,
          lat: latitude
        }
        this.icons.push(o)
        this.$store.commit('SET_CURSOR', false)
        window._m.addToolsMakers(this.icons)
      })
    },
    closeNoticeMakter (flag) {
      this.isShowNotice = flag
    },
    makerClick (index) {
      this.$refs['maker_' + index][0].clickMaker()
    },
    // 点击图例
    getQueryPoint (data, km) {
      this.km = km
      let ceneterScope = this.ceneterScope
      this.$refs.majorMakers.getPoints(data, ceneterScope, km)
    },
    // 统计
    queryReportsCount () {
      API.queryReportsCount(this, {})
        .then(resp => {
          let res = resp.data.data.reportsCount
          // console.log('resp', resp)
          this.initEcharts(res.map(item => {
            // item.name = item.code
            return item
          }))
          // /console.log('res', res)
          this.legendListTwo = res
          this.legendListTwo.forEach(item => {
            this.totalLevel += item.value
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 撒点
    queryPoints (type, data) {
      let param = {
        areaCode: '',
        industryType: '',
        levelCode: ''
      }
      if (type === 'industryType') {
        param.industryType = data
      } else if (type === 'areaCode') {
        param.areaCode = data
      } else {
        param.levelCode = data
      }
      API.queryPoints(this, param)
        .then(resp => {
          let res = resp.data.data.points
          console.log(res)
          if (res.serviceSuccess) {
            let points = res.data.points
            let arr = []
            for (let i in points) {
              let tep = { showTextFlag: false, id: 'ph_maker' + i }
              arr.push(Object.assign(points[i], tep))
            }
            this.mapMarkerData = arr
            window._m.addMakers(arr)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 右下角的四个等级的变换
    swiperContainerIn (parentIndex, nowIndex) {
      this.queryErrorDetails[parentIndex].list[nowIndex].select = true
    },
    swiperContainerOut (parentIndex, nowIndex) {
      this.queryErrorDetails[parentIndex].list[nowIndex].select = false
    },
    startAnimate (index) {
      switch (index) {
        case 1:
          if (this.warningNotice.length >= 3) {
            this.timer1 = setInterval(this.scroll1, 10000)
          }
          break
        case 2:
          if (this.queryErrorDetails.length >= 5) {
            this.timer2 = setInterval(this.scroll2, 10000)
          }
          break
        default:
          if (this.queryErrorDetails.length >= 5) {
            this.timer2 = setInterval(this.scroll2, 10000)
          }
          if (this.warningNotice.length >= 3) {
            this.timer1 = setInterval(this.scroll1, 10000)
          }
      }
    },
    stopAnimate (index) {
      switch (index) {
        case 1:
          this.animate1 = false
          clearInterval(this.timer1)
          break
        case 2:
          this.animate2 = false
          clearInterval(this.timer2)
          break
      }
    },
    scroll1 () {
      this.animate1 = true
      setTimeout(() => {
        this.warningNotice.push(this.warningNotice[0]) // 将数组的第一个元素添加到数组的
        this.warningNotice.shift() // 删除数组的第一个元素
        this.animate1 = false // margin-top 为0 的时候取消过渡动画，实现无缝滚动
      }, 2000)
    },
    scroll2 () {
      this.animate2 = true
      setTimeout(() => {
        this.queryErrorDetails.push(this.queryErrorDetails[0]) // 将数组的第一个元素添加到数组的
        this.queryErrorDetails.shift() // 删除数组的第一个元素
        this.animate2 = false // margin-top 为0 的时候取消过渡动画，实现无缝滚动
      }, 2000)
    },
    // 鼠标移入显示标题
    showTooltip (e) {
      this.$refs.textModal.showTooltip(e)
    },
    hideTooltip () {
      this.$refs.textModal.hideTooltip()
    },
    // 右下角的四个按钮切换
    swiper_change (index) {
      switch (index) {
        case 1:
          this.swiper_index = 1
          this.$refs.swiper_data_1[0].style.display = 'block'
          this.$refs.swiper_data_2[0].style.display = 'none'
          this.$refs.swiper_data_3[0].style.display = 'none'
          this.$refs.swiper_data_4[0].style.display = 'none'
          break
        case 2:
          this.swiper_index = 2
          this.$refs.swiper_data_1[0].style.display = 'none'
          this.$refs.swiper_data_2[0].style.display = 'block'
          this.$refs.swiper_data_3[0].style.display = 'none'
          this.$refs.swiper_data_4[0].style.display = 'none'
          break
        case 3:
          this.swiper_index = 3
          this.$refs.swiper_data_1[0].style.display = 'none'
          this.$refs.swiper_data_2[0].style.display = 'none'
          this.$refs.swiper_data_3[0].style.display = 'block'
          this.$refs.swiper_data_4[0].style.display = 'none'
          break
        case 4:
          this.swiper_index = 4
          this.$refs.swiper_data_1[0].style.display = 'none'
          this.$refs.swiper_data_2[0].style.display = 'none'
          this.$refs.swiper_data_3[0].style.display = 'none'
          this.$refs.swiper_data_4[0].style.display = 'block'
          break
      }
    },
    // 多选
    handleSelect (e) {
      let that = this
      setTimeout(() => {
        console.log(that.checkedValue)
      }, 100)
    },
    /// 右侧圆形菜单选择
    circlePanelTab (data) {
      console.log(data)
    },
    // 右下脚的标号的选择显示
    get_canvas_move (index, item) {
      for (let m in this.HazardNumberRankDetial) {
        this.HazardNumberRankDetial[m] = 0
      }
      for (let i of item.list) {
        this.HazardNumberRankDetial[i.levelName] += i.counts
      }
      switch (index) {
        case 1:
          this.$refs.toolTip.style.display = 'block'
          this.$refs.toolTip.style.left = '.05rem'
          this.$refs.toolTip.style.top = '-.21rem'
          break
        case 2:
          this.$refs.toolTip.style.display = 'block'
          this.$refs.toolTip.style.left = '3.05rem'
          this.$refs.toolTip.style.top = '-.21rem'
          break
        case 3:
          this.$refs.toolTip.style.display = 'block'
          this.$refs.toolTip.style.left = '.05rem'
          this.$refs.toolTip.style.top = '.44rem'
          break
        case 4:
          this.$refs.toolTip.style.display = 'block'
          this.$refs.toolTip.style.left = '3.05rem'
          this.$refs.toolTip.style.top = '.44rem'
          break
        case 5:
          this.$refs.toolTip.style.display = 'block'
          this.$refs.toolTip.style.left = '.05rem'
          this.$refs.toolTip.style.top = '1.0rem'
          break
        case 6:
          this.$refs.toolTip.style.display = 'block'
          this.$refs.toolTip.style.left = '3.05rem'
          this.$refs.toolTip.style.top = '1.0rem'
          break
      }
    },
    out_canvas_move () {
      this.$refs.toolTip.style.display = 'none'
    },
    // 获取预警通知
    queryWarningInfo () {
      API.queryWarningInfo(this, {})
        .then(resp => {
          let res = resp.data.data.warningInfo
          this.warningNotice = res.list
          this.warningNoticeC = this.warningNotice.concat([])
          // this.warningNoticeTime = res.counts
          // this.startAnimate()
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 企业危险源
    eachRatio () {
      API.queryDistribution(this, {})
        .then(resp => {
          let res = resp.data.data.distribution
          let myMap = echarts.init(document.getElementById('each-ratio'))
          myMap.setOption(options(res))
          this.legendList = res
          this.legendList.forEach((item, index) => {
            switch (item.industryName) {
              case '煤矿行业':
                item.img = this.imgList[0]
                break
              case '危险化学品行业':
                item.img = this.imgList[1]
                break
              case '非煤矿山行业':
                item.img = this.imgList[2]
                break
              case '工贸行业':
                item.img = this.imgList[3]
                break
              case '烟花爆竹行业':
                item.img = this.imgList[4]
                break
            }
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 重大危险源情况上报
    queryReports () {
      API.queryReports(this, {})
        .then(resp => {
          let res = resp.data.data.reports
          echarts
            .init(document.getElementById('event-left-echart-01'))
            .setOption(options01(res))
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 获取下拉框列表
    querySelectList () {
      API.querySelectList(this, {})
        .then(resp => {
          let res = resp.data.data.selectList
          this.selectList = res
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 获取选择的区域
    handleChoose (data) {
      let queryData = null
      this.selectName = data
      this.selectList.forEach(item => {
        if (item.name === data) {
          queryData = item.value
        }
      })
      this.queryAreaRank(queryData)
    },
    // 危险源企业区域统计排行TOP5
    queryAreaRank (data) {
      data = data || ''
      API.queryAreaRank(this, { level: data })
        .then(resp => {
          let res = resp.data.data.areaRank
          this.items = res
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 企业危险源数量统计
    queryHazardNumberRank () {
      API.queryHazardNumberRank(this, {})
        .then(resp => {
          let res = resp.data.data.hazardNumberRank
          console.log(res)
          this.hazardNumRank = res
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 重大危险源明细
    queryHazardDetails () {
      API.queryHazardDetails(this, {})
        .then(resp => {
          let res = resp.data.data.hazardDetails
          this.queryErrorDetails = res
        })
        .catch(err => {
          console.log(err)
        })
    },
    initEcharts (data) {
      // echarts.init(document.getElementById("qywxysltj")).setOption(optionsTwo);
      let myPie = echarts.init(document.getElementById('zdwxydjfb'))
      myPie.setOption(pieChart(data))
      myPie.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: 0 }) // 设置默认选中高亮部分
      myPie.on('click', function (param) {
        data.forEach((item, index) => {
          myPie.dispatchAction({
            type: 'downplay',
            dataIndex: index
          })
        })
        myPie.dispatchAction({
          type: 'highlight',
          dataIndex: param.dataIndex
        }) // 设置默认选中高亮部分
      })
    }
  }
}
</script>
<style lang="scss" scoped>
 .icon-box {
    position: absolute;
    z-index: 8;
    .icon-img {
      width: 0.5rem;
      height: 0.66rem;
    }
}
.natural-select-other {
  position: absolute;
  top: 1rem;
  right: 10rem;
  z-index: 100;
}
.g-show-detail {
  position: absolute;
  right: 0.52rem;
  top: 3.42rem;
  padding-left: 0.17rem;
  box-sizing: border-box;
  width: 1.3rem;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: left;
  font-size:0.17rem;
  font-family:Source Han Sans CN;
  font-weight:400;
  color:rgba(255,255,255,1);
  background:rgba(11,46,109,0.58);
  border:0.01rem solid rgba(69,143,239,1);
  border-radius:0.15rem;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    right: 0.18rem;
    top: 50%;
    margin-top: -0.07rem;
    display: inline-block;
    width: 0.17rem;
    height: 0.16rem;
    background: url("../../../../../assets/common/search-detail.png")
      center no-repeat;
    background-size: 100% 100%;
  }
}
.left-content {
  position: absolute;
  top: 0.16rem;
  left: 0;
  z-index: 99;
  box-sizing: border-box;
  width: 7.67rem;
  height: 10.64rem;
  .left-content-top {
    box-sizing: border-box;
    width: 100%;
    height: 7.42rem;
    background: url("../../../../../assets/emergency-command/daily-monitoring/major-hazards/img/kuang-left-top.png")
      no-repeat;
    background-size: 100% 100%;
    padding: 0.52rem 0.2rem 0 0.55rem;
  }
  .left-content-bottom {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 3.42rem;
    background: url("../../../../../assets/emergency-command/daily-monitoring/major-hazards/img/kuang-left-bottom.png")
      no-repeat;
    background-size: 100% 100%;
    padding: 0.28rem 0.2rem 0 0.55rem;
    bottom: 0.2rem;
    .title-model {
      margin-top: 0.15rem;
    }
    .right-title {
      position: absolute;
      height: 0.18rem;
      font-size: 0.18rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(239, 248, 254, 1);
      line-height: 0.24rem;
      right: 0.5rem;
      top: 0.5rem;
      span {
        height: 0.22rem;
        font-size: 0.24rem;
        font-family: Impact;
        font-weight: bold;
        font-style: italic;
        color: rgba(252, 230, 47, 1);
      }
      .littleWord {
        font-size: 0.12rem;
        color: rgba(239, 248, 254, 1);
      }
      &::before {
        display: inline-block;
        position: absolute;
        top: -0.02rem;
        left: -0.3rem;
        content: "";
        width: 0.27rem;
        height: 0.28rem;
        background: url("../../../../../assets/emergency-command/daily-monitoring/major-hazards/img/right-title-icon.png")
          center no-repeat;
        background-size: 100% 100%;
      }
    }
    .plan-area {
      width: calc(100% - 0.3rem);
      height: calc(100% - 1rem);
      position: absolute;
      .center-area {
        margin-top: 0.25rem;
        height: 1.77rem;
        padding: 0 0.1rem;
        h1 {
          text-align: center;
          margin-bottom: 0.15rem;
          height: 0.23rem;
          font-size: 0.23rem;
          font-family: Heiti SC;
          font-weight: bold;
          font-style: italic;
          color: rgba(249, 230, 89, 1);
        }
        .center-paragraph {
          font-size: 0.18rem;
          font-family: Heiti SC;
          line-height: 0.28rem;
          font-weight: bold;
          color: rgba(223, 226, 251, 1);
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          margin-bottom: 0.1rem;
        }
        .bottom-date {
          height: 0.17rem;
          padding-right: 0.2rem;
          font-size: 0.16rem;
          text-align: right;
          font-family: Heiti SC;
          font-weight: bold;
          font-style: italic;
          color: rgba(223, 226, 251, 1);
          opacity: 0.8;
        }
      }
    }
  }
  #area-classify-echart,
  #area-transaction-echart,
  #area-legal-echart,
  #area-poerson-echart {
    height: 2rem;
  }
  #area-transaction-echart {
    background: url("../../../../../assets/city-management/economic-run/three-base/bar-back.png")
      no-repeat;
    background-size: 100% 50%;
    background-position-y: 80%;
  }
}
.title-model {
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 0.24rem;
    padding-left: 0.2rem;
    padding-bottom: 0.2rem;
    margin-left: -0.1rem;
    color: #fff;
    // font-weight: bold;
    background: url("../../../../../assets/city-management/economic-run/three-base/title-icon.png")
      no-repeat;
    background-position: -0rem 0.2rem;
    background-size: 0.87rem 0.25rem;
  }
}
.base-list {
  box-sizing: border-box;
  padding: 0 0.1rem;
  width: 6.8rem;
  position: relative;
  left: 0;
  top: 0;
  height: 2.39rem;
  #each-ratio {
    height: calc(100% - 0.1rem);
  }
  .each-ratio-icon {
    width: 2.3rem;
    height: 2rem;
    font-size: 0.17rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 0.3rem;
    right: 0.4rem;
    .icon {
      margin: 0;
      img {
        width: 0.37rem;
        height: 0.37rem;
        vertical-align: middle;
      }
    }
  }
  #event-left-echart-01 {
    height: calc(100% - 0.8rem);
    margin-top: .2rem;
    width: 3.12rem;
  }
  .right-pie {
    width: 3.2rem;
    height: 3.1rem;
    position: absolute;
    right: 0;
    top: 0;
    .g-pie-item {
      height: calc(100% - 0.4rem);
    }
    .zd-icon-box {
      width: 3.4rem;
      height: 0.5rem;
      position: absolute;
      bottom: 0.3rem;
      // left: 0.55rem;
      display: flex;
      flex-wrap: wrap;
      .icon {
        // width: 1.2rem;
        height: 0.24rem;
        font-size: 0.16rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 0.16rem;
        color: rgba(255, 255, 255, 1);
        display: flex;
        flex-shrink: 0;
        flex-wrap: wrap;
        width:50%;
        .box {
          width: 0.16rem;
          height: 0.16rem;
          margin-right: 0.16rem;
          vertical-align: middle;
          border-radius: 0.02rem;
          background:#E93C0D
        }
        .box1 {
          background:#F16527
        }
        .box2 {
          background:#F9E659
        }
        .box3 {
          background:#68D3FF
        }
      }
    }
  }
}
.base-list:nth-of-type(4) {
  height: 3.1rem;
}
.area-title {
  position: relative;
  left: 0.2rem;
  top: 0.1rem;
  font-size: 0.2rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  padding-left: 0.35rem;
  &:hover {
    color: #ffed66;
    text-shadow:0 0 0.1rem rgba(228,205,38,0.28);
  }
  &:after {
    content: "";
    position: absolute;
    top: 0.1rem;
    left: 0.04rem;
    width: 0.13rem;
    height: 0.13rem;
    background: rgba(0, 126, 251, 1);
  }
  &:before {
    box-sizing: border-box;
    content: "";
    position: absolute;
    top: 0.05rem;
    left: 0px;
    width: 0.13rem;
    height: 0.13rem;
    border: 0.02rem solid rgba(253, 209, 0, 1);
  }
}
.rank-singe {
  display: flex;
  align-items: center;
  color: #fff;
  margin-top: 0.25rem;
  font-size: 0.18rem;
  .rank-title {
    width: 0.8rem;
    font-weight: bold;
    letter-spacing: 2px;
    span:nth-child(1) {
      font-size: 0.2rem;
      font-style: italic;
      margin-right: 0.05rem;
    }
    span:nth-child(2) {
      font-size: 0.27rem;
    }
  }
  .rank-text {
    width: 2.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 0.1rem;
    margin-left: 0.1rem;
  }
  .rank-value {
    width: 1.8rem;
    font-size: 0.25rem;
    font-style: initial;
    font-weight: bold;
    background-image: -webkit-linear-gradient(bottom, #f9fbff, #57d2ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #bae5fb;
  }
  .rank-title0 {
    color: #e3380b;
  }
  .rank-title1 {
    color: #f5cb37;
  }
  .rank-title2 {
    color: #07abfc;
  }
}
.monitoring-left {
  width: 100%;
  .right-bottom-box {
    position: relative;
    top: 0.2rem;
    flex: 1;
    overflow: hidden;
    height: 100%;
    .right-bottom-inner-box {
      position: absolute;
      width: 100%;
      height: 1.8rem;
      left: 0;
      top: 0;
    }
    .anim {
      color: chartreuse;
      animation: mymove 1s infinite;
    }
    @keyframes mymove {
      from {
        top: 0;
      }
      to {
        top: -0.45rem;
      }
    }
    .item-li {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .name {
        width: 0.8rem;
        color: #ffffff;
        font-size: 0.17rem;
      }
      .number {
        font-size: 0.17rem;
        width: 0.45rem;
        height: 0.45rem;
        text-align: center;
        line-height: 0.4rem;
        color: #ffffff;
        background: url("../../../../../assets/emergency-command/overall-situation/societal-security/no4.png")
          no-repeat;
        // background-size: 85% 85%;
        // background-position: 40% 20%;
        background-size: 100%;
      }
      .number-01 {
        width: 0.45rem;
        height: 0.45rem;
        text-align: center;
        line-height: 0.4rem;
        color: #ffffff;
        background: url("../../../../../assets/emergency-command/overall-situation/societal-security/no1.png")
          no-repeat;
        background-size: 100% 100%;
      }
      .number-02 {
        width: 0.45rem;
        height: 0.45rem;
        text-align: center;
        line-height: 0.4rem;
        color: #ffffff;
        background: url("../../../../../assets/emergency-command/overall-situation/societal-security/no2.png")
          no-repeat;
        background-size: 100% 100%;
      }
      .number-03 {
        width: 0.45rem;
        height: 0.45rem;
        text-align: center;
        line-height: 0.4rem;
        color: #ffffff;
        background: url("../../../../../assets/emergency-command/overall-situation/societal-security/no3.png")
          no-repeat;
        background-size: 100% 100%;
      }
      .line {
        width: 3.56rem;
        height: 0.15rem;
        display: flex;
        align-items: center;
        .line-inner {
          height: 0.1rem;
          background: linear-gradient(
            90deg,
            rgba(102, 175, 235, 1) 0%,
            rgba(123, 208, 240, 1) 100%
          );
          border-radius: 0px 4px 4px 0px;
        }
        .line-inner-bottom {
          height: 0.1rem;
          width: 3.56rem;
          background: #284257;
          border-radius: 0px 4px 4px 0px;
        }
      }
      .value {
        flex: 1;
        color: #edd6ae;
        font-size: 0.17rem;
        margin-left: 0.1rem;
      }
    }
  }
}

.center-select {
  position: absolute;
  top: 1.2rem;
  right: 11rem;
  z-index: 100;
  display: flex;
  > div {
    margin-right: 0.2rem;
  }
}
.medical-resource-container {
  background: #000;
  position: absolute;
  .security-person,
  .flood-situation,
  .national-tourism {
    width: 2.67rem;
    height: 1.47rem;
    background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/notice-bg.png")
      center no-repeat;
    background-size: 100% 100%;
    border-radius: 0.2rem;
    position: absolute;
    padding: 0.35rem 0 0.32rem 0.2rem;
    left: 40%;
    top: 20%;
    font-family: Source Han Sans CN;
    font-weight: bold;
    h1 {
      font-size: 0.21rem;
      color: rgba(255, 255, 255, 1);
      margin-bottom: 0.21rem;
    }
    p {
      font-size: 0.18rem;
      color: rgba(223, 226, 253, 1);
      margin-bottom: 0.16rem;
      span {
        font-style: italic;
        color: rgba(252, 230, 47, 1);
      }
    }
  }
  .flood-situation {
    left: 25%;
    width: 2.72rem;
    height: 2.45rem;
  }
  .national-tourism {
    left: 55%;
    width: 2.56rem;
    height: 2.15rem;
  }
  .g-menu-box {
    position: absolute;
    left: 7.62rem;
    top: 9rem;
    z-index: 100;
  }
  .tool-tip {
    background: rgba(0, 18, 55, 0.4);
    border: 2px solid rgba(72, 170, 244, 1);
    color: #9be9ff;
    font-size: 0.14rem;
    padding: 0.12rem 0.16rem;
    p {
      span:last-of-type {
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
    background: url("../../../../../assets/city-management/common-service/medical-resource/panle-02.png")
      no-repeat;
    background-size: 100% 100%;
    .tab-bar {
      display: flex;
      flex-direction: row;
      width: 2.2rem;
      height: 0.48rem;
      margin: 0.97rem auto;
      font-style: italic;
      color: rgba(152, 229, 250, 1);
      font-size: 0.18rem;
      background: url("../../../../../assets/city-management/common-service/medical-resource/tilte-bg.png")
        no-repeat;
      background-size: 100% 100%;
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
      width: 90%;
      height: 3.5rem;
    }
  }
  .right-top-panle {
    position: absolute;
    width: 7.02rem;
    height: 3.82rem;
    right: 0.52rem;
    top: 0.16rem;
    z-index: 99;
    background: url("../../../../../assets/emergency-command/daily-monitoring/major-hazards/img/right-top-kuang.png")
      no-repeat;
    background-size: 100% 100%;
    .g-nav-box {
      position: absolute;
      right: 0.61rem;
      top: 0.5rem;
      z-index: 100;
    }
    .right-echarts-01 {
      position: absolute;
      left: 10%;
      bottom: 0;
      width: 90%;
      height: 3rem;
      display: flex;
    }
  }
  .right-bottom-panle {
    position: absolute;
    width: 7.02rem;
    height: 7.02rem;
    right: 0.52rem;
    bottom: 0rem;
    z-index: 99;
    overflow: hidden;
    background: url("../../../../../assets/emergency-command/daily-monitoring/major-hazards/img/right-bottom-kuang.png")
      no-repeat;
    background-size: 100% 100%;
    .panle-title {
      top: 0.4rem;
    }
    .right-bottom-swiper {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 4.1rem;
      z-index: -1;
      .swiper-title {
        position: absolute;
        top: 1.15rem;
        left: 6%;
        display: flex;
        flex-flow: wrap;
        height: 0.28rem;
        width: 90%;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        li {
          display: inline-block;
          font-size: 0.17rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          background: rgba(53, 58, 90, 1);
          opacity: 0.8;
          border-radius: 0.14rem;
          width: 0.66rem;
          height: 0.28rem;
          line-height: 0.28rem;
          cursor: pointer;
        }
        .select {
          background: rgba(47, 132, 247, 1);
        }
      }
      .swiper-data {
        position: absolute;
        top: 1.7rem;
        height: 1.76rem;
        // overflow: hidden;
        overflow-y: auto;
        left: 0.5rem;
        width: 6.1rem;
        display: none;
        .container {
          display: flex;
          padding: 0 0.19rem 0 0.16rem;
          height: 0.44rem;
          line-height: 0.44rem;
          font-size: 0.17rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          &:nth-of-type(2n) {
            background: rgba(23, 71, 175, 0.1);
          }
          &:nth-of-type(2n + 1) {
            background: rgba(23, 71, 175, 0.3);
          }
          &.select {
            background: rgba(34, 80, 180, 0.78);
          }
          div {
            text-align: center;
          }
          .container-left {
            width: 1.1rem;
            margin-right: 0.23rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .container-middle {
            width: 1.4rem;
            margin-right: 0.23rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .container-right {
            text-align: left;
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .swiper_data_1 {
        display: block;
      }
    }
    .right-echarts-02 {
      // display: none;
      position: absolute;
      left: 6%;
      top: 1rem;
      width: 90%;
      // height: 3.4rem;
      .container {
        width: 100%;
        .tool-tip {
          display: flex;
          text-align: center;
          padding: 0.05rem 1.73rem;
          background: none;
          border: 0;
          .level {
            width: 0.3rem;
            height: 0.25rem;
            line-height: 0.25rem;
            font-size: 0.16rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            justify-content: center;
            flex-direction: column;
            flex: 1;
            &::before {
              content: "";
              display: inline-block;
              position: relative;
              left: -0.05rem;
              top: 0.01rem;
              width: 0.14rem;
              height: 0.14rem;
              background:#E93C0D;
              border-radius: 2px;
            }
            &:nth-of-type(2)::before {
              background: #F16527;
            }
            &:nth-of-type(3)::before {
              background: #F9E659;
            }
            &:nth-of-type(4)::before {
              background: #68D3FF;
            }
          }
        }
        .main-data {
          // display: none;
          position: relative;
          left: 3%;
          top: 0.1rem;
          width: 5.9rem;
          height: 2.1rem;
          .toolTip {
            display: none;
            font-size: 0.14rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            width: 2.36rem;
            height: 0.92rem;
            padding-left: 0.2rem;
            padding-top: 0.1rem;
            position: absolute;
            background: url("../../../../../assets/emergency-command/daily-monitoring/major-hazards/img/arrow-kuang.png")
              center no-repeat;
            background-size: 100% 100%;
            top: 0.3rem;
            z-index: 99;
            div {
              float: left;
              width: 0.8rem;
              height: 0.25rem;
              line-height: 0.25rem;
              margin-top: 0.05rem;
              margin-left: 0.25rem;
              left: 0;
              top: 0;
              position: relative;
              &::before {
                content: "";
                position: absolute;
                background-color: #E93C0D;
                left: -0.15rem;
                top: 0.06rem;
                width: 0.12rem;
                height: 0.12rem;
              }
            }
            .level-2::before {
              background-color: #F16527;
            }
            .level-3::before {
              background-color: #F9E659;
            }
            .level-4::before {
              background-color:  #68D3FF;
            }
          }
          .main-data-line {
            height: 0.62rem;
            width: 100%;
            .main-data-left,
            .main-data-right {
              overflow: hidden;
              .main-data-left-title {
                height: 0.3rem;
                position: relative;
                .left {
                  // height: 0.3rem;
                  line-height: 0.3rem;
                  font-size: 0.17rem;
                  position: relative;
                  left: -0.12rem;
                  width: 90%;
                  top: -0.05rem;
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  color: rgba(254, 254, 254, 1);
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  .icon {
                    position: absolute;
                    left: 0;
                    top: 0.01rem;
                    width: 0.49rem;
                    height: 0.45rem;
                    text-align: center;
                    line-height: 0.48rem;
                    background: url("../../../../../assets/emergency-command/overall-situation/security-situation/no1.png")
                      center no-repeat;
                    background-size: 80% 80%;
                    z-index: -1;
                  }
                  span {
                    width: 0.44rem;
                    height: 0.41rem;
                    line-height: 0.41rem;
                    text-align: center;
                    display: inline-block;
                    color: #fff;
                    z-index: 99;
                    margin-left: 0.02rem;
                    //margin-top: .03rem;
                    font-size:.15rem;
                  }
                }
                .right {
                  height: 0.3rem;
                  font-size: 0.17rem;
                  line-height: 0.3rem;
                  position: absolute;
                  right: 0;
                  top: 0.05rem;
                  padding-right: .05rem;
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  font-style: italic;
                  color: rgba(155, 233, 255, 1);
                }
              }
              .main-data-left-line {
                width: 2.8rem;
                margin-top: 0.11rem;
                height: 0.12rem;
                padding: 0.02rem;
                overflow: hidden;
                border: 0.02rem solid rgba(40, 112, 228, .5);
                font-size: 0;
                .item {
                  width: 0.14rem;
                  height: 0.1rem;
                  margin-right: 0.02rem;
                  margin-top: 0.01rem;
                  display: inline-block;
                  background-color: #E93C0D;
                }
                .item2 {
                  background-color: #F16527;
                }
                .item3 {
                  background-color: #F9E659;
                }
                .item4 {
                  background-color: #68D3FF;
                }
              }
            }
            .main-data-left,
            .main-data-right {
              // float: left;
              // background-color: red;
              width: 2.9rem;
              height: 0.62rem;
            }
          }
        }
      }

      .event-power {
        z-index: 999;
        height: 100%;
      }
    }
  }
  .header-bg {
    position: absolute;
    width: 20.4rem;
    height: 1.8rem;
    line-height: 1.2rem;
    font-family: simhei;
    text-align: center;
    color: #ffffff;
    font-size: 0.45rem;
    background: url("../../../../../assets/city-management/common-service/medical-resource/head-bg.png")
      no-repeat;
    background-size: 100% 100%;
    left: 11.4rem;
    z-index: 99;
  }
  .panle-title {
    position: absolute;
    top: 0.34rem;
    left: 0.44rem;
    font-size: 0.24rem;
    color: #ffffff;
    padding: 0.15rem 0.15rem;
    box-sizing: border-box;
    background: url("../../../../../assets/city-management/common-service/medical-resource/panle-title.png")
      no-repeat;
    background-position: 0.05rem 0.35rem;
    background-size: 0.87rem 0.25rem;
    &:hover {
      color: #ffed66;
      text-shadow:0 0 0.1rem rgba(228,205,38,0.28);
    }
  }
  .left-list {
    position: absolute;
    left: 10.68rem;
    top: 0.7rem;
    z-index: 1000;
    .left-list-li {
      margin-top: 0.1rem;
      .name {
        padding: 0.05rem;
        width: 1.5rem;
        height: 0.26rem;
        line-height: 0.26rem;
        color: #ffffff;
        font-size: 0.22rem;
        font-style: italic;
        transform: perspective(1rem) rotateX(-15deg);
        transform-origin: left;
        background: rgba(213, 96, 44, 1);
      }
    }
  }
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.heart-panel {
  position: absolute;
  z-index: 99;
  right: 7.3rem;
  bottom: 0.5rem;
}
.g-panel-right {
  padding: 0.2rem 0;
  position: absolute;
  top: -0.1rem;
  left: -0.2rem;
  width: 3.5rem;
  height: 85%;
  z-index: 99;
  > p {
    margin-bottom: 0.1rem;
    font-size: 0.16rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #fff;
    letter-spacing: 1px;
  }
  > div {
    position: relative;
    width: 25%;
    width: 0.45rem;
    height: 0.49rem;
    display: inline-block;
    text-align: center;
    margin-bottom: 0.1rem;
    margin-right: 0.2rem;
    img {
      width: 0.45rem;
      height: 0.49rem;
    }
    p {
      font-size: 0.16rem;
      font-weight: bold;
      font-style: italic;
      color: #9be9ff;
    }
    .check {
      position: absolute;
      right: 0.02rem;
      top: 0;
    }
    .sy-check {
      display: block;
      width: 0.16rem;
      height: 0.16rem;
      line-height: 0.16rem;
      cursor: pointer;
      position: absolute;
      border: 1px solid #9be9ff;
      top: 0.06rem;
      left: 0.06rem;
    }
    input[type="checkbox"] {
      visibility: hidden;
    }
    .check-box:checked + label:before {
      display: block;
      content: "\2714";
      text-align: center;
      font-size: 0.16rem;
      color: #000;
      background: #ffcf06;
    }
  }
}
.list-box {
  position: absolute;
  width: 6.81rem;
  left: 0.59rem;
  top: 0.7rem;
  height: 2.1rem;
  overflow: hidden;
  .list-inner-box {
    width: 100%;
    position: absolute;
  }
  .list-box-item {
    width: 5.85rem;
    height: 0.48rem;
    display: flex;
    flex-direction: row;
    color: #ffffff;
    font-size: 0.15rem;
    padding-left: 0.1rem;
    flex-flow: wrap;
    justify-content: space-between;
    .left {
      &:first-child {
      }
    }
    span {
      width: 20%;
      height: 0.48rem;
      padding-left: 0.18rem;
      box-sizing: border-box;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
.maker-box-poor {
  display: none;
  position: absolute;
  z-index: 200;
  text-align: center;
  left: 50%;
  top: 50%;
  .mini-maker {
    width: 0.5rem;
  }
  .g-maker-text {
    padding-left: 0.35rem;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 2.72rem;
    height: 2.85rem;
    background: url("../../../../../assets/city-management/common-service/education-resource/small-kuang.png")
      center no-repeat;
    background-size: 100%;
    h3 {
      margin: 0.3rem 0 0.18rem 0;
      font-size: 0.21rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }
    .g-text-item {
      margin-bottom: 0.22rem;
      font-size: 0.18rem;
      height: 0.18rem;
      line-height: 0.18rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(223, 226, 251, 1);
      span {
        font-size: 0.22rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        font-style: italic;
        color: rgba(249, 230, 89, 1);
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
  }
}
.main-data-normal-d {
  &:nth-child(2) {
    .main-data-left-title {
      .left {
        .icon {
          background: url("../../../../../assets/emergency-command/overall-situation/security-situation/no2.png")
            center no-repeat !important;
          background-size: 80% 80% !important;
        }
      }
    }
  }
  &:nth-child(3) {
    .main-data-left-title {
      .left {
        .icon {
          background: url("../../../../../assets/emergency-command/overall-situation/security-situation/no3.png")
            center no-repeat !important;
          background-size: 80% 80% !important;
        }
      }
    }
  }
  &:nth-child(4) {
    .main-data-left-title {
      .left {
        .icon {
          background: url("../../../../../assets/emergency-command/overall-situation/security-situation/no4.png")
            center no-repeat !important;
          background-size: 80% 80% !important;
        }
      }
    }
  }
  &:nth-child(5) {
    .main-data-left-title {
      .left {
        .icon {
          background: url("../../../../../assets/emergency-command/overall-situation/security-situation/no5.png")
            center no-repeat !important;
          background-size: 80% 80% !important;
        }
      }
    }
  }
  &:nth-child(6) {
    .main-data-left-title {
      .left {
        .icon {
          background: url("../../../../../assets/emergency-command/overall-situation/security-situation/no6.png")
            center no-repeat !important ;
          background-size: 80% 80% !important;
        }
      }
    }
  }
}
.natural-panel{
    position: absolute;
    bottom: .5rem;
    left: 29.3rem;
    z-index: 100;
    &.changeH{
      height:3rem;
    }
    .user-dos{
      margin-left: 4rem;
      display: flex;
      width: .9rem;
      height: .2rem;
      border-radius: .2rem;
      background: rgba(0,0,0,.4);
      color: #000;
      overflow: hidden;
      font-size: .15rem;
      cursor: pointer;
      > div{
        flex: 1;
      }
      .legend{
        background: #9BE9FF;
        text-align: center;
      }
      .icon{
        background: url("../../../../../assets/common/top.png") no-repeat center;
      }
    }
    .small-icon{
      margin-top: .2rem;
      margin-left: 4rem;
      width: 1.4rem;
      div{
        float: left;
      }
      img{
        width: .32rem;
        height: .32rem;
      }
    }
  }
  .war-inf{
    left: 0.29rem;
    top: 7.18rem;
    z-index: 9;
    width: 7.02rem;
    height: 3.42rem;
  }
  .title {
    &:hover {
      color: #ffed66;
      text-shadow:0 0 0.1rem rgba(228,205,38,0.28);
    }
  }
</style>
