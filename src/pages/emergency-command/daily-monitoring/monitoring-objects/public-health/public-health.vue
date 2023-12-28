<!--
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-10 14:37:01
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-06-05 11:29:08
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-18 17:52:39
 -->
<template>
  <div class="public-health-container">
       <div class="natural-select-other">
      <select-other :data="menuList2"  style="display:block"></select-other>
    </div>
    <!-- <div class="header-bg">监测预警 公共卫生</div> -->
    <head-component name="监测预警 公共卫生"></head-component>
    <div class="main-left-top">
      <p class="g-title">医疗资源概况<span class="global-data-title">（截至2019年）</span></p>
      <div class="mudle-1">
        <!-- <div class="info-item" v-for="(item,index) in healthEventData " :key="index">
          <img
            class="icon"
            src="../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/people-icon@2x.png"
          />
          <div class="name">{{item.name}}</div>
          <div class="num">
            <span>{{item.value}}</span>例
          </div>
        </div>-->
        <div class="resource-total">
          <div class="item">
            <p>
              <img
                class="icon"
                src="@/assets/emergency-command/daily-monitoring/monitoring-objects/public-health/left-icon.png"
              />医疗机构
            </p>
            <div class="num">
              {{numFormat(resourceTotalData.jc07001)||'无数据'}}
              <span>家</span>
            </div>
          </div>
          <div class="item">
            <p>
              <img
                class="icon"
                src="@/assets/emergency-command/daily-monitoring/monitoring-objects/public-health/left-icon.png"
              />医疗人员
            </p>
            <div class="num">
              {{numFormat(resourceTotalData.jc07003)||'无数据'}}
              <span>人</span>
            </div>
          </div>
          <div class="item">
            <p>
              <img
                class="icon"
                src="@/assets/emergency-command/daily-monitoring/monitoring-objects/public-health/left-icon.png"
              />床位数
            </p>
            <div class="num">
              {{numFormat(resourceTotalData.jc07004)||'无数据'}}
              <span>张</span>
            </div>
          </div>
        </div>
      </div>
      <!-- <p class="g-title" style="margin-top:.2rem">预警通知</p>
      <div class="mudle-2">
        <div class="info-item">
          <img
            class="icon"
            src="../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/people-icon@2x.png"
          />
          <div class="name">累计发布通知：</div>
          <div class="num">
            <span>{{noticeTotal}}</span>次
          </div>
        </div>
        <div class="notice">
          <p
            class="title"
          >{{warningInfoList[warningInfoDataIndex]&&warningInfoList[warningInfoDataIndex].zh06001?warningInfoList[warningInfoDataIndex].zh06001:'无' }}</p>
          <p
            class="content"
          >{{warningInfoList[warningInfoDataIndex]&&warningInfoList[warningInfoDataIndex].zh06004?warningInfoList[warningInfoDataIndex].zh06004:''}}</p>
          <p class="foot">
            <span>{{warningInfoList[warningInfoDataIndex]&&warningInfoList[warningInfoDataIndex].zh06002?warningInfoList[warningInfoDataIndex].zh06002:''}}</span>
            <span>{{warningInfoList[warningInfoDataIndex]&&warningInfoList[warningInfoDataIndex].zh06003?warningInfoList[warningInfoDataIndex].zh06003:''}}</span>
          </p>
        </div>
      </div> -->
       <warInf :height="'2.4rem'" class = "war-inf"  :labelList = "warningInfoList"  @close= "closeNoticeMakter"/>
    </div>
    <div class="main-left-bottom">
      <p class="g-title">120呼叫事件实时监测</p>
      <!-- <div class="checkbox-container">
        <div
          class="checkbox"
          :class="{active:checkboxIsActive=='呼吸'}"
          @click="checkboxClickFn('呼吸')"
        >
          <span class="icon"></span>
          <span class="label">呼吸</span>
        </div>
        <div
          class="checkbox"
          :class="{active:checkboxIsActive=='发热'}"
          @click="checkboxClickFn('发热')"
        >
          <span class="icon"></span>
          <span class="label">发热</span>
        </div>
      </div> -->
      <div class="key-word-table">
        <div class="thead">
          <p>呼叫时间</p>
          <p>接车地址</p>
          <p>出车医院</p>
          <p>出诊车牌号</p>
        </div>
        <div
          class="tbody"
          @mouseover="stopAnimate"
          @mouseleave="startAnimate"
          :class="{'anim':animate}"
        >
          <div class="item" @click="clickCarList(item, index)" v-for="(item,index) in  keywords" :key="index">
            <div class="cell">
              <span>{{item.CallAt?item.CallAt:'无'}}</span>
            </div>
            <div class="cell">
              <span  @mouseenter="showTooltip($event)" @mouseleave="hideTooltip">{{item.ReachAddress?item.ReachAddress:'无'}}</span>
            </div>
            <div class="cell">
              <span  @mouseenter="showTooltip($event)" @mouseleave="hideTooltip">{{item.Hospitals?item.Hospitals:'无'}}</span>
            </div>
            <div class="cell">
              <!-- <span v-html="signKeyWords(item.jc09004)"></span> -->
              <span>{{item.AmbulanceNum}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-right-top">
      <p class="g-title">各区县医疗机构数量<span class="global-data-title">（截至2019年）</span></p>
      <div class="list-box">
        <!-- <nav-list
          :data="hospList"
          icon="none"
          @handleClick="hospListSelect"
          :width="1.45"
          :height=".4"
        ></nav-list> -->
      </div>
      <div id="medicalInstitutionChart"></div>
    </div>
    <div class="main-right-bottom">
      <p class="g-title">传染病定点医院床位统计</p>
      <div class="g-nav-box">
        <nav-list
          :data="suplyList"
          icon="none"
          @handleClick="suplyListSelect"
          :width="1.45"
          :height=".4"
        ></nav-list>
      </div>
      <!-- <div class="list-container">
        <div class="item-li" v-for="(item,index) in items" :key="index">
          <div
            class="number"
            @click="refreshMarker(item.areaCode)"
            :class="{'number-01':index===0,'number-02':index===1,'number-03':index===2}"
          >{{index+1}}</div>
          <div class="name">{{item.areaName}}</div>
          <div class="line">
            <div
              class="line-inner"
              :style="{'width':(Math.round((item.counts/items[0].counts)*100))+'%'}"
            ></div>
          </div>
          <div class="value">{{item.counts}}个</div>
        </div>
      </div> -->
      <div class="list-container" id="barLineEchartId"></div>
      <div style="position:relative">
        <p class="g-title" style="margin-top:.2rem">医护队伍人员构成<span class="global-data-title">（截至2019年）</span></p>
        <div class="pie-chart-desc">
          <!-- <p>{{pieChartDesc&&pieChartDesc.value}}</p>
          <p>{{pieChartDesc&&pieChartDesc.name}}</p>
          <p>(人)</p> -->
          <p>{{pieChartTotal}}</p>
          <p>总数 <span>（人）</span></p>
        </div>
        <div id="teamCompositionChart"></div>
      </div>
    </div>
    <div class="main-menu">
      <main-menu @selectd="mainMenuSelect"></main-menu>
    </div>
     <div class="natural-panel" :class = "{changeH: panelBig}">
      <div class="user-dos" @click="panelBig = !panelBig">
        <div class="legend">图例</div>
        <div class="icon"></div>
      </div>
      <circlePanel @addIcon="addIcon" @removeIcon="removeIcon" :ceneterScope="ceneterScope" @getQueryPoint="getQueryPoint" v-show = "panelBig"></circlePanel>
    </div>
    <surver-maker ref="surverMakers"></surver-maker>
    <!-- <circle-panel class="heart-panel" :list="circlePanelList" @tab="circlePanelTab">
      <div slot="info-box">
        <div class="menu-item">
          <p class="title">公共卫生</p>
          <div class="module">
            <div class="cell">
              <img
                class="icon"
                src="../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/disease-control.png"
                alt
              />

              <p class="desc">疾控中心</p>
              <div class="disease-control-check">
                <div
                  class="checkbox"
                  :class="{active:diseaseControlIsActive}"
                  @click="diseaseControlChang"
                >
                  <span class="icon"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </circle-panel> -->
    <!-- <maker-component v-for="(item,index) in  mapMarkerData" :makerData="item" :key="index">
      <div class="notice-box" slot="text">
        <p class="title">汛情</p>
        <div class="content">
          <p>
            <img
              class="icon"
              src="../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/sudden-icon.png"
              alt
            />
            <span>
              较大
              <span style="#F9E659">III级</span>突发事件
            </span>
          </p>
          <p>
            <img
              class="icon"
              src="../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/flood-prevention.png"
              alt
            />
            <span>
              <span style="#F9E659">II级</span>防汛应急响应
            </span>
          </p>
          <p>位置：沙湾区安西路</p>
          <p>指挥单位：市应急委</p>
        </div>
      </div>
    </maker-component> -->
    <!-- <carMakers :is_car.sync = "is_car" v-show = "is_car"></carMakers> -->
    <maker-component v-for="(item, index) in markerDatas" :key="index" :makerData="item">
      <div slot="maker">
          <div v-show="!makerFlag" @click="item.showTextFlag = !item.showTextFlag" class="g-img-box">
              <img class="big-img" src='../../../../../assets/common/carimg.png' alt="" />
              <!-- <img class="small-img" :src="''" alt="" /> -->
          </div>
          <!-- <img v-show="makerFlag" @click="gotoDetail(item)" class="small-img2" src='../../../../../assets/common/poorPeopleTop.png' alt="" /> -->
      </div>
      <img v-if="!makerFlag" slot="img"  src="../../../../../assets/common/event-icon2.png" alt="" class="line2" />
      <div slot="text" class="g-maker-text" v-show="!makerFlag">
        <div class="g-close" @click="closeModel(item)"></div>
        <h3>{{item.license}}</h3>
        <div class="g-text-item g-text-item2"><label>当前位置：</label><span class="g-address">{{item.address}}</span></div>
        <div class="g-text-item g-text-item2">司机名称：<span>{{item.driver}}</span></div>
        <div class="g-text-item g-text-item2">速度：<span>{{item.speed}}</span></div>
        <div class="g-text-item g-text-item2">所属医院：<span>{{item.hosipitals}}</span></div>
        <div class="g-text-btn" v-if="is_online">
          <div class="g-btn-item" @click="showVideo(item, 1)">车内视频监控</div>
          <div class="g-btn-item" @click="showVideo(item, 2)">车外视频监控</div>
        </div>
        <div class = "video-box" v-if="is_video">
          <p class = 'maker-title'>
            <img class = "icon" src = "@/assets/emergency-command/emergency-command-chart/bg-selected.png" width="0.12rem"/>{{item.license}}{{videoTitle}}
            <img src = "@/assets/emergency-command/emergency-command-chart/close-bg.png"  @click="is_video = false">
          </p>
          <!-- <video :src="video_src"></video> -->
          <!-- <div class="video-html" v-html="video_src"></div> -->
          <iframe class="video-html" frameborder=0 scrolling=auto :src="video_src"></iframe>
        </div>
      </div>
    </maker-component>
    <area-makers ref="publicArea" :dataList="areaInfoData" @showTitle="showTooltip" @hideTitle="hideTooltip"></area-makers>
    <div style="position: absolute; left: 9rem;top: 1rem;">
      <noticeMaker :data = "warningInfoListC" v-show = "isShowNotice"   @close= "closeNoticeMakter" @showTitle="showTooltip" @hideTitle="hideTooltip"/>
    </div>
    <!-- <noticeMaker :data = "warningInfoListC" v-show = "isShowNotice"   @close= "closeNoticeMakter"/> -->
    <div class="icon-box" :id="item.id" v-for="(item) in icons" :key="item.id">
      <img class="icon-img" src="@/assets/tool/end.png" />
    </div>
    <carsMakers></carsMakers>
    <!-- 显示标题完整信息 -->
    <text-modal ref="textModal"></text-modal>
  </div>
</template>
<script>
import echarts from 'echarts'
import navList from '@/components/select.vue'
import mainMenu from '@/components/menu'
import heartPanel from '@/components/heart-panel'
import headComponent from '@/components/head-component.vue'
import circlePanel from '../menuLists/menuLists'
// import circlePanel from '@/components/legend-component.vue'
import medicalInstitutionChartOptions from '@/echarts-data/emergency-command/daily-monitoring/monitoring-objects/public-health/medicalInstitutionChart.js'
import teamCompositionChartOptions from '@/echarts-data/emergency-command/daily-monitoring/monitoring-objects/public-health/teamCompositionChart.js'
import barLineEchart from '@/echarts-data/emergency-command/daily-monitoring/monitoring-objects/public-health/barLineEchart.js'
import API from '@/api/emergency-command/public-health'
import makerComponent from '@/components/maker-component.vue'
import surverMaker from '../menuLists/surver-makers.vue'
import carMakers from './car-makers.vue'
import warInf from '@/pages/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/war-inf.vue'
import noticeMaker from '@/pages/emergency-command/emergency-command-chart/notice-maker.vue'
import selectOther from '@/components/select-other.vue'
import areaMakers from '../menuLists/parea-makers.vue'
import carsMakers from '../menuLists/cars-makers.vue'
import staffCompositionChart from '@/echarts-data/emergency-command/overall-situation/public-health/staffCompositionChart.js'
import textModal from '@/components/text-modal' // 显示标题完整信息
export default {
  components: { navList, heartPanel, mainMenu, circlePanel, makerComponent, surverMaker, carMakers, headComponent, warInf, noticeMaker, selectOther, areaMakers, carsMakers, textModal },
  data () {
    return {
      ceneterScope: {},
      icons: [],
      km: 5,
      areaInfoData: [],
      isShowNotice: false,
      isDisappear: false,
      diseaseControlIsActive: false,
      keywords: [],
      items: [
        {areaCode: '01', areaName: '市中区', counts: 0}
      ],
      suplyList: [{ name: '专用病房', value: 1 }, { name: '负压病房', value: 2 }],
      hospList: [
        {
          name: ''
        }
      ],
      animate: true,
      timer: null,
      checkboxIsActive: '呼吸',
      // 菜单模拟
      list: [
        {
          name: '应急指挥调度',
          value: '1',
          children: [
            {
              name: '应急指挥',
              value: '2',
              children: [
                { name: '安全生产', value: '3' },
                { name: '自然灾害', value: '3' },
                { name: '重大危险源', value: '3' },
                { name: '公共卫生', value: '3' }
              ]
            },
            { name: '监测预警', value: '4' }
          ]
        },
        { name: '心连心服务', value: '7' },
        { name: '城市综合管理', value: '8' },
        { name: '智慧旅游平台', value: '9' },
        { name: '数字规划馆', value: '10' }
      ],
      circlePanelList: [
        { name: '自然灾害' },
        { name: '安全生产' },
        { name: '总体概况' },
        { name: '公共卫生' },
        { name: '重大危险源' }
      ],
      circlePanelContentData: [
        {
          name: '重大危险源',
          children: []
        }
      ],
      resourceTotalData: {},
      warningInfoList: [],
      warningInfoListC: [],
      warningInfoDataIndex: 0,
      warningInfoData: {},
      noticeTimer: null,
      noticeTotal: 0,
      Hospital_Code: '00',
      Suply_Code: '',
      defaultAreaCode: '',
      mapMarkerData: [],
      pieChartDesc: {},
      pieChartTotal: 0,
      is_car: true, // 显示车辆信息的开关
      makerFlag: false,
      markerDatas: [],
      videoTitle: '车内视频',
      is_video: false,
      is_online: false,
      video_src: '',
      timer2: null,
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
          selected: false
        },
        {
          name: '公共卫生',
          routeName: 'publicHealth',
          selected: true
        }
      ],
      bedDataObj: {}
    }
  },
  computed: {},
  methods: {
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
    // 点击图例
    getQueryPoint (data, km) {
      this.km = km
      let ceneterScope = this.ceneterScope
      this.$refs.surverMakers.getPoints(data, ceneterScope, km)
    },
    diseaseControlChang () {
      this.diseaseControlIsActive = !this.diseaseControlIsActive
    },
    initEchart () {},
    signKeyWords (desc) {
      if (desc) {
        let reg = new RegExp(this.checkboxIsActive, 'g')
        // console.log(reg)
        desc = desc.replace(
          reg,
          `<span style="color:#E4432C">${this.checkboxIsActive}</span>`
        )
      } else {
        desc = ''
      }
      return desc
    },
    closeModel (item) {
      item.showTextFlag = false
    },
    showVideo (item, type) {
      this.is_video = true
      API.QUERYCARDLIVE(this, { license: item.license }).then(
        res => {
          res = res.data
          if (res.serviceSuccess) {
            let data = res.data
            if (type === 1) { // 车内视频
              this.videoTitle = '车内视频监控'
              this.video_src = data.urlIn
            } else if (type === 2) { // 车外视频
              this.videoTitle = '车外视频监控'
              this.video_src = data.urlOut
            }
          }
        }
      ).catch(err => {
        console.log(err)
      })
    },
    // 点击救护车列表
    clickCarList (item, index) {
      this.markerDatas = []
      API.QUERYCARDETAIL(this, { license: item.AmbulanceNum }).then(
        resV => {
          let res = resV.data
          if (res.serviceSuccess) {
            let data = res.data.ambLocationMap
            data.id = 'car' + index
            data.lon = +data.lon
            data.lat = +data.lat
            data.hosipitals = item.Hospitals
            data.showTextFlag = true
            this.markerDatas[0] = data
            if (data.online === '1') {
              this.is_online = true
            } else {
              this.is_online = false
            }
            window._m.addMakers(this.markerDatas, (type) => {
              if (type === 1) { // 三维
                this.makerFlag = false
              } else { // 二维
                this.makerFlag = true
              }
            })
            let position = {lon: Number(data.lon), lat: Number(data.lat)}
            window._m.getSouthPointByDistance(position, () => {
              this.markerDatas[0].showTextFlag = true
            })
          }
        }
      ).catch(err => {
        console.log(err)
      })
    },
    hospListSelect (name, item) {
      // console.log(name, item)
      this.Hospital_Code = item.value
      API.QUERY_HOSPITAL_DISTRIBUTION(this, { code: this.Hospital_Code }).then(
        res => {
          res = res.data
          if (res.serviceSuccess) {
            medicalInstitutionChartOptions.xAxis[0].data =
              res.data.hospitalDistribution.xAxis
            medicalInstitutionChartOptions.series[0].data =
              res.data.hospitalDistribution.data
            // console.log('medicalInstitutionChartOptions', medicalInstitutionChartOptions)
            echarts
              .init(document.querySelector('#medicalInstitutionChart'))
              .setOption(medicalInstitutionChartOptions)
          }
        }
      )
    },
    suplyListSelect (name, item) {
      // console.log('suplyListSelect', item)
      console.log(item)
      echarts.init(document.getElementById('barLineEchartId')).setOption(barLineEchart(this.bedDataObj, item.value), true)
      // this.Suply_Code = item.code
      // API.QUERY_SUPPLY_DISTRIBUTION(this, { code: this.Suply_Code }).then(
      //   res => {
      //     res = res.data
      //     if (res.serviceSuccess) {
      //       if (res.data.supplyDistribution.length) {
      //         this.defaultArea = res.data.supplyDistribution[0].areaName
      //         this.items = res.data.supplyDistribution.splice(0, 5)
      //       }
      //     }
      //   }
      // )
    },
    startSelectAnimate (myChart, firstSelectName, names) {
      myChart.dispatchAction({
        type: 'highlight',
        // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
        name: firstSelectName
      })
      // let selectIndex = 0
      // setInterval(() => {
      //   myChart.dispatchAction({
      //     type: 'downplay',
      //     seriesIndex: 0
      //   })
      //   myChart.dispatchAction({
      //     type: 'highlight',
      //     // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
      //     name: names[selectIndex]
      //   })
      //   selectIndex++
      //   if (selectIndex >= names.length) {
      //     selectIndex = 0
      //   }
      // }, 1000)
    },
    startAnimate () {
      this.timer = setInterval(this.scroll, 3000)
    },
    stopAnimate () {
      this.animate = false
      clearInterval(this.timer)
    },
    scroll () {
      this.animate = true
      setTimeout(() => {
        if (this.keywords.length > 5) {
          let str = this.keywords[0]
          // 将数组的第一个元素添加到数组的
          this.keywords.shift() // 删除数组的第一个元素
          this.keywords.push(str)
          this.animate = false // margin-top 为0 的时候取消过渡动画，实现无缝滚动
        }
      }, 1500)
    },
    // checkboxClickFn (a) {
    //   this.checkboxIsActive = a
    //   API.QUERY_KEY_WORD(this, { keyword: this.checkboxIsActive }).then(res => {
    //     res = res.data
    //     if (res.serviceSuccess) {
    //       this.keywords = res.data.data
    //       // console.log(this.keywords)
    //       this.timer = setInterval(this.scroll, 2500)
    //     }
    //   })
    // },
    /// 主菜单选择
    mainMenuSelect (data) {},
    /// 右侧圆形菜单选择
    circlePanelTab (data) {
      // let _that = this
      // this.$nextTick(function () {
      // console.log('circlePanelTab', data)
      this.circleMenuActiveIndex = data.index
      // })
    },
    /// 划分千分位
    numFormat (num) {
      var reg = /\d{1,3}(?=(\d{3})+$)/g
      return (num + '').replace(reg, '$&,')
    },
    noticeScroll () {
      // this.noticeTimer = setInterval(function () {
      // this.warningInfoData、
      // this.isDisappear = true
      // setTimeout(() => {
      //   if (this.warningInfoDataIndex < 2) {
      //     this.warningInfoDataIndex++
      //   } else {
      //     this.warningInfoDataIndex = 0
      //   }
      //   this.warningInfoData = this.warningInfoList[this.warningInfoDataIndex]
      //   // console.log(' this.warningInfoData', this.warningInfoData)
      //   this.isDisappear = false
      // }, 10000)
      //  }, 1000)
    },
    // 获取救护车监测列表
    getCarList () {
      API.QUERYCARLIST(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.keywords = res.data.callEventList
          this.timer = setInterval(this.scroll, 3000)
        }
      })
    },
    getData () {
      API.QUERY_COUNT(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.resourceTotalData = res.data
        }
      })
      API.QUERY_WARNING_INFO(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.warningInfoList = res.data.warningInfo.list
          this.warningInfoListC = this.warningInfoList.concat([])
          // this.noticeTotal = res.data.warningInfo.counts
          // this.warningInfoData = this.warningInfoList[this.warningInfoDataIndex]
          // if (this.warningInfoList.length > 2) {
          //   this.noticeTimer = setInterval(this.noticeScroll, 5000)
          // }
        }
      })
      // API.QUERY_KEY_WORD(this, { keyword: this.checkboxIsActive }).then(res => {
      //   res = res.data
      //   if (res.serviceSuccess) {
      //     this.keywords = res.data.data
      //     console.log(this.keywords)
      //     this.timer = setInterval(this.scroll, 1500)
      //   }
      // })
      API.QUERY_HOSPITAL_DISTRIBUTION(this, { code: this.Hospital_Code }).then(
        res => {
          res = res.data
          if (res.serviceSuccess) {
            medicalInstitutionChartOptions.xAxis[0].data =
              res.data.hospitalDistribution.xAxis
            medicalInstitutionChartOptions.series[0].data =
              res.data.hospitalDistribution.data
            // console.log('medicalInstitutionChartOptions', medicalInstitutionChartOptions)
            echarts
              .init(document.querySelector('#medicalInstitutionChart'))
              .setOption(medicalInstitutionChartOptions)
          }
        }
      )
      API.QUERY_HOSPITAL_CODES(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.hospList = res.data.hospitalCodes
          this.Hospital_Code = this.hospList[0].code
        }
      })
      // QUERY_SUPPLY_CODES
      API.QUERY_SUPPLY_CODES(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          let list = res.data.supplyCodes
          if (list.length) {
            this.Suply_Code = (list[0].code || '')
            let nArr = []
            for (let i of list) {
              let obj = {
                code: i.code,
                name: i.code
              }
              nArr.push(obj)
            }
            this.suplyList = nArr
          }
        }
      })
      // QUERY_SUPPLY_DISTRIBUTION
      API.QUERY_SUPPLY_DISTRIBUTION(this, { code: this.Suply_Code }).then(
        res => {
          res = res.data
          if (res.serviceSuccess) {
            if (res.data.supplyDistribution.length) {
              this.defaultAreaCode = res.data.supplyDistribution[0].areaCode
              this.items = res.data.supplyDistribution.splice(0, 5)
              this.refreshMarker(this.defaultAreaCode)
            }
          }
        }
      )
      API.QUERY_PEOPLE_COMPOSITION(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          let legendArr = []
          let dataArr = []
          let list = res.data.peopleComposition.sort((b, a) => { return a.counts - b.counts })
          let total = 0
          for (let i of list) {
            legendArr.push(i.peopleType)
            dataArr.push({
              name: i.peopleType,
              value: i.counts
            })
            total += i.counts
          }
          teamCompositionChartOptions.legend.data = dataArr
          teamCompositionChartOptions.series[0].data = dataArr

          let chart = echarts.init(
            document.querySelector('#teamCompositionChart')
          )
          this.pieChartDesc = dataArr[0]
          this.pieChartTotal = total
          // chart.setOption(teamCompositionChartOptions)
          chart.setOption(staffCompositionChart(dataArr), true)
          this.startSelectAnimate(chart, dataArr[0].name, dataArr)
          chart.on('mouseover', data => {
            this.pieChartDesc = data.data
          })
        }
      })
    },
    refreshMarker (code) {
      API.QUERY_POINTS(this, { areaCode: code }).then(res => {
        res = res.data
        // mapMarkerData
        if (res.serviceSuccess) {
          let points = res.data.points
          let arr = []
          for (let i in points) {
            let tep = { showTextFlag: false, id: 'ph_maker' + i }
            arr.push(Object.assign(points[i], tep))
          }
          this.mapMarkerData = arr
          window._m.addMakers(arr)
          // console.log('refreshMarker', arr)
        }
      })
    },
    // 传染病定点医院床位统计
    getHosipitalData () {
      API.HOSIPTAL_DATA(this, {}).then((resA) => {
        let res = resA.data.data
        this.bedDataObj = res.bedSituationMap
        echarts.init(document.getElementById('barLineEchartId')).setOption(barLineEchart(this.bedDataObj, 1), true)
      }).catch(err => {
        console.log(err)
      })
    },
    // 鼠标移入显示标题
    showTooltip (e) {
      this.$refs.textModal.showTooltip(e)
    },
    hideTooltip () {
      this.$refs.textModal.hideTooltip()
    }
  },
  mounted () {
    this.initEchart()
    this.getAreaInfo()
    this.getData()
    this.getHosipitalData()
    // 隔两个小时请求一次救护车列表
    this.getCarList()
    this.timer2 = setInterval(() => {
      this.getCarList()
    }, 7200000)
  },
  beforeDestroy () {
    this.removeIcon()
    window._m.clear()
    window.clearInterval(this.timer)
    window.clearInterval(this.noticeTimer)
  }
}
</script>
<style  lang="scss" scoped>
@import '../../../../../components/date-title.scss';
.global-data-title{
  color:$date-title-color;
  display:inline-block;
  font-size:$date-title-size;
}
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
.pie-chart-desc {
    position: absolute;
    text-align: center;
    top: 1.7rem;
    left: 1.75rem;
    width: 1rem;
  p:nth-child(1) {
    font-size: 0.34rem;
    font-family: Impact;
    font-weight: 400;
    font-style: italic;
    color: rgba(250, 252, 255, 1);
    text-shadow: 0px 1px 10px rgba(147, 229, 252, 0.28);

    background: linear-gradient(
      180deg,
      rgba(249, 251, 255, 1) 0%,
      rgba(119, 208, 250, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p:nth-child(2) {
    font-size: 0.19rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    font-style: italic;
    color: rgba(223, 226, 251, 1);
    span {
      font-size: 0.16rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-style: italic;
      color: rgba(223, 226, 251, 0.72);
    }
  }
  p:nth-child(3) {
    font-size: 0.16rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    font-style: italic;
    color: rgba(223, 226, 251, 0.72);
  }
}
.g-img-box {
  width: 0.58rem;
  height: 0.83rem;
  left: 0;
  top: 0;
  z-index: 1;
  cursor: pointer;
  position: relative;
  .big-img {
    width: 100%;
    height: 100%;
  }
  .small-img {
    width: 0.8rem;
    height: 0.8rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0.45rem;
  }
}
.g-maker-text {
  padding: 0.1rem 0.16rem 0.4rem 0.25rem;
  box-sizing: border-box;
  width: 4.05rem;
  font-size: 0;
  // min-height: 6.86rem;
  background: url("../../../../../assets/common/maker-model.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  // overflow: hidden;
  .g-text-btn {
    margin-top: 0.18rem;
    width: 100%;
    height: 0.32rem;
    display: flex;
    justify-content: space-around;
    .g-btn-item {
      height: 0.32rem;
      line-height: 0.32rem;
      cursor: pointer;
      padding: 0 0.16rem;
      font-size:0.17rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(255,255,255,1);
      border:1px solid rgba(69,143,239,1);
      border-radius: 0.15rem;
    }
  }
  .video-box{
    position: absolute;
    left: 100%;
    top: -20%;
    z-index: 999;
    .maker-title{
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(255,255,255,1);
      font-size: .21rem;
      padding: .18rem 0;
      img{
        width:.24rem;
        height: .25rem;
        float: right;
        cursor: pointer;
      }
    }
    .maker-title{
      font-weight: normal;
      font-size: .21rem;
      img {
        width: 0.21rem;
        height: 0.21rem;
      }
      .icon{
        width: 0.35rem;
        height: 0.35rem;
        float: left;
      }
    }
    display: flex;
    flex-direction: column;
    width: 7.73rem;
    height:5.21rem;
    padding: 0.21rem 0.35rem;
    float: left;
    margin-left: 0.1rem;
    background: url('../../../../../assets/emergency-command/emergency-command-chart/car-vedio-bg.png') no-repeat center/contain;
    video{
      flex: 1;
      height: 3.98rem;
    }
    .video-html {
      flex: 1;
      height: 3.98rem;
    }
  }
  .g-close {
    position: absolute;
    right: 0.21rem;
    top: 0.25rem;
    cursor: pointer;
    width: 0.26rem;
    height: 0.26rem;
    background: url("../../../../../assets/common/natural-close.png") no-repeat;
    background-size: 100% 100%;
  }
  h3 {
    margin-top: 0.20rem;
    padding: 0 0.35rem 0 0;
    box-sizing: border-box;
    font-size:0.22rem;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:0.3rem;
  }
  .g-text-item {
    display: inline-block;
    min-width: 46%;
    margin-top: 0.22rem;
    // margin-bottom: 0.13rem;
    font-size:0.16rem;
    height: 0.16rem;
    line-height: 0.16rem;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(223,226,251,1);
    span {
      // display: inline-block;
      position: relative;
      font-size:0.16rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      font-style:italic;
      line-height: 0.16rem;
      color:rgba(249,230,89,1);
    }
    label {
      float: left;
      line-height: 0.16rem;
    }
    .g-address {
      width: 2.48rem;
      line-height: 0.2rem;
      float: left;
    }
  }
  .g-text-item2 {
    width: 99%;
  }
  .g-all-num {
    width: 100%;
    overflow: hidden;
    list-style: none;
    li {
      float: left;
      width: 50%;
      height: 0.96rem;
      list-style: none;
      position: relative;
      p {
        padding-left: 0.3rem;
        height:0.24rem;
        font-size:0.18rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        font-style:italic;
        color:rgba(223,227,251,1);
        &::before {
          content: '';
          display: inline-block;
          width: 0.21rem;
          height: 0.24rem;
          background: url("../../../../../assets/common/maker-text.png") no-repeat;
          background-size: 100% 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
      .g-num-text {
        margin-left: 0.24rem;
        width: 1.45rem;
        height: 0.72rem;
        background: url("../../../../../assets/common/num-bg.png") no-repeat;
        background-size: 100% 100%;
        line-height: 0.72rem;
        text-align: center;
        font-size:0.17rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        font-style:italic;
        color:rgba(255,255,255,1);
        span {
          font-size:0.3rem;
          font-family:Impact;
          font-weight:bold;
          font-style:italic;
          color:rgba(249,230,89,1);
        }
      }

    }
  }
  .g-border-line {
    margin: 0;
    width: 100%;
    height: 0.01rem;
    border-bottom: 0.01rem dashed rgba(72,170,244,1);
  }
  .g-text-box {
    width: calc(100% - 0.12rem);
    margin-right: 0.12rem;
    margin-bottom: 0.16rem;
    padding: 0 0.2rem;
    font-size: 0;
    box-sizing: border-box;
    // min-height: 1.6rem;
    height: 2.2rem;
    overflow: hidden;
    background: url("../../../../../assets/common/maker-small-box.png") no-repeat;
    background-size: 100% 100%;
    .color-green {
      color: '#73D477'
    }
    .g-text-nav {
      width: 100%;
      margin-top: 0.35rem;
      position: relative;
      .g-nave-page {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.14rem;
        color: #ffffff;
        display: inline-block;
      }
    }
  }
}
.public-health-container {
  width: 43.2rem;
  height: 10.8rem;
  position: absolute;
  background: #000;
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
  .g-title {
    display: inline-block;
    margin: 0.45rem 0 0 0.5rem;
    font-size: 0.24rem;
    line-height: 0.23rem;
    text-align: center;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    padding-left: 15px;
    padding-bottom: 0.2rem;
    background: url("../../../../../assets/city-management/economic-run/three-base/title-icon.png")
      no-repeat;
    background-position: -0rem 0.2rem;
    background-size: 0.87rem 0.25rem;
    &:hover {
      color: #ffed66;
      text-shadow:0 0 0.1rem rgba(228,205,38,0.28);
    }
  }
  .main-left-top {
    width: 7.02rem;
    height: 5.74rem;
    background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/left-top@2x.png");
    background-size: 100% 100%;
    position: absolute;
    left: 0.29rem;
    top: 0.16rem;
    z-index: 99;
    .mudle-1 {
      display: flex;
      width: 6rem;
      height: 1.2rem;
      flex-wrap: wrap;
      align-items: center;
      /* margin: 0 auto; */
      margin-left: 0.5rem;
      margin-top: 0.1rem;
      .info-item {
        text-align: center;
        width: 45%;
        display: flex;
        margin-left: 5%;
        // justify-content: space-between;
        .icon {
          width: 0.31rem;
          height: 0.28rem;
        }
        .name {
          font-size: 0.2rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(239, 248, 254, 1);
          line-height: 24px;
          margin-left: 0.04rem;
        }
        .num {
          font-size: 0.2rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(239, 248, 254, 1);
          line-height: 24px;
          margin-left: 0.27rem;
          span {
            font-size: 0.24rem;
            font-family: Impact;
            font-weight: bold;
            font-style: italic;
            color: rgba(252, 230, 47, 1);
            margin-right: 0.1rem;
            display: inline-block;
          }
        }
      }
    }
    .mudle-2 {
      position: relative;
      .info-item {
        position: absolute;
        top: -0.42rem;
        width: auto;
        right: 0.5rem;
        .num {
          margin-left: 0.02rem;
          span {
            margin-left: 0.05rem;
            margin-right: 0.1rem;
            display: inline-block;
          }
        }
      }
      .notice {
        width: 6rem;
        margin: 0 auto;
        margin-top: 0.14rem;
        margin-left: 0.6rem;
        position: relative;
        .title {
          font-size: 0.23rem;
          font-family: Heiti SC;
          font-weight: bold;
          font-style: italic;
          color: rgba(249, 230, 89, 1);
          line-height: 2;
          text-align: center;
        }
        .content {
          font-size: 0.18rem;
          text-indent: 0.36rem;
          font-family: Heiti SC;
          font-weight: bold;
          color: rgba(223, 226, 251, 1);
          line-height: 2;
          overflow: hidden;
          height: 1.4rem;
        }
        .foot {
          font-size: 0.16rem;
          font-family: Heiti SC;
          font-weight: bold;
          font-style: italic;
          color: rgba(223, 226, 251, 1);
          opacity: 0.8;
          line-height: 2;
          text-align: right;
          span {
            margin-left: 0.1rem;
          }
        }
      }
    }
  }
  .info-item {
    text-align: center;
    width: 45%;
    display: flex;
    margin-left: 5%;
    // justify-content: space-between;
    .icon {
      width: 0.31rem;
      height: 0.28rem;
    }
    .name {
      font-size: 0.2rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(239, 248, 254, 1);
      line-height: 24px;
      margin-left: 0.04rem;
    }
    .num {
      font-size: 0.2rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(239, 248, 254, 1);
      line-height: 24px;
      margin-left: 0.27rem;
      span {
        font-size: 0.24rem;
        font-family: Impact;
        font-weight: bold;
        font-style: italic;
        color: rgba(252, 230, 47, 1);
      }
    }
  }
  .main-left-bottom {
    width: 7.02rem;
    height: 4.96rem;
    background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/left-bottom-bg.png");
    background-size: 100% 100%;
    position: absolute;
    left: 0.29rem;
    top: 5.65rem;
    z-index: 99;
  }
  .main-right-top {
    position: absolute;
    right: 0.29rem;
    top: 0.16rem;
    width: 7.02rem;
    height: 3.82rem;
    background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/right-top@2x.png");
    background-size: 100% 100%;
    z-index: 99;
    .list-box {
      position: absolute;
      right: 0.4rem;
      top: 0.5rem;
      z-index: 100;
      width: auto;
    }
    #medicalInstitutionChart {
      width: 6rem;
      height: 2.4rem;
      margin-left: 0.5rem;
    }
  }
  .main-right-bottom {
    height: 7rem;
    width: 7.02rem;
    background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/right-bottom@2x.png");
    background-size: 100% 100%;
    position: absolute;
    z-index: 99;
    right: 0.29rem;
    top: 3.65rem;
    left: auto;
    #teamCompositionChart {
      width: 6rem;
      height: 2.5rem;
      margin-left: 0.5rem;
    }
  }
}
.key-word-table {
  width: 6rem;
  height: 3.55rem;
  overflow: hidden;
  margin: 0 auto;
  margin-left: 0.6rem;
  margin-top: 0.1rem;
  overflow: hidden;
  .thead {
    width: 100%;
    display: flex;
    //align-items: baseline;
    background: #2250b4;
    p {
      height: 0.4rem;
      flex: 1;
      font-size: 0.17rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 0.4rem;
      text-align: center;
    }
  }
  .tbody {
    .item {
      display: table-row;
      height: 0.64rem;
      cursor: pointer;
      // line-height: 2;
      text-align: center;
      vertical-align: middle;
      background-color: rgba(23, 71, 175, 0.1);
      // opacity: .1;
      &:nth-of-type(even) {
        background-color: rgba(23, 71, 175, 0.3);
      }
      .cell {
        display: table-cell;
        width: 25%;
        height: 100%;
        vertical-align: middle;
        span {
          display: -webkit-box;
          line-height: 1.7;
          //float: left;
          max-height: 0.64rem;
          font-size: 0.17rem;
          text-align: center;
          // height:1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          //white-space: nowrap;
          vertical-align: middle;
          //padding: 0 0.2rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
        &:nth-of-type(2) {
          span {
            color: #6be573;
          }
        }
      }
    }
  }
}
.anim {
  animation: mymove 3s infinite;
}
@keyframes mymove {
  from {
    top: 0;
  }
  to {
    top: -0.4rem;
  }
}
.g-nav-box {
  position: absolute;
  right: 0.4rem;
  top: 0.5rem;
  z-index: 100;
}
.list-container {
  width: 80%;
  margin: 0 auto;
  margin-top: 0.1rem;
  min-height: 2.4rem;
}
.item-li {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 0.48rem;
  .name {
    width: 0.8rem;
    color: #ffffff;
    font-size: 0.17rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .number {
    width: 0.45rem;
    height: 0.45rem;
    font-size: 0.17rem;
    text-align: center;
    line-height: 0.4rem;
    color: #ffffff;
    background: url("../../../../../assets/emergency-command/overall-situation/societal-security/no4.png")
      no-repeat;
    // background-size: 85% 85%;
    // background-position: 40% 20%;
    background-size: 100% 100%;
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
    background: url("../../../../../assets/emergency-command/overall-situation/societal-security/no5.png")
      no-repeat;
    background-size: 100% 100%;
  }
  .line {
    width: 3.5rem;
    height: 0.12rem;
    display: flex;
    align-items: center;
    background: linear-gradient(
      90deg,
      rgba(102, 175, 235, 0.3) 0%,
      rgba(123, 208, 240, 0.3) 100%
    );
    border-radius: 5px;
    .line-inner {
      height: 0.12rem;
      background: linear-gradient(
        90deg,
        rgba(102, 175, 235, 1) 0%,
        rgba(123, 208, 240, 1) 100%
      );
      border-radius: 0px 4px 4px 0px;
    }
  }
  .value {
    flex: 1;
    color: #edd6ae;
    font-size: 0.17rem;
    margin-left: 0.3rem;
  }
}
.checkbox {
  .icon {
    background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/checkbox@2x.png");
    width: 0.15rem;
    height: 0.15rem;
    background-size: 100% 100%;
    display: inline-block;
    position: relative;
    top: 0.03rem;
  }
  .label {
    margin-left: 0.05rem;
    font-size: 0.16rem;
    font-family: Heiti SC;
    font-weight: 500;
    font-style: italic;
    color: rgba(171, 231, 252, 1);
  }
  &.active {
    .icon {
      background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/checkbox-active@2x.png");
    }
    .label {
      color: #f9d347;
    }
  }
}
.checkbox-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1.4rem;
  position: absolute;
  top: 0.6rem;
  right: 0.5rem;
}
.main-menu {
  position: absolute;
  left: 7.3rem;
  bottom: 0.5rem;
  z-index: 102;
}
.heart-panel {
  position: absolute;
  z-index: 99;
  right: 7.3rem;
  bottom: 0.5rem;
}
.menu-item {
  margin-left: 0.2rem;
  margin-top: 0.05rem;
  .title {
    font-size: 0.16rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }
  .cell {
    //  flex: 1;
    width: 0.7rem;
    position: relative;
    margin-top: 0.05rem;
  }
  .icon {
    width: 0.57rem;
    height: 0.57rem;
    margin: 0 auto;
  }
  .desc {
    font-size: 0.16rem;
    font-family: Heiti SC;
    font-weight: 500;
    display: block;
    font-style: italic;
    color: rgba(155, 233, 255, 1);
    margin-top: -0.15rem;
  }
}
.disease-control-check {
  .icon {
    width: 0.15rem;
    height: 0.15rem;
  }
  position: absolute;
  right: 0;
  top: 0;
}
.resource-total {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .item {
    flex: 1;
    p {
      .icon {
        width: 0.23rem;
        height: 0.26rem;
        position: relative;
        top: 0.06rem;
        margin-right: 0.05rem;
      }
      font-size: 0.19rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      font-style: italic;
      color: rgba(223, 227, 251, 1);
      text-align: center;
      &:hover {
        color: #ffed66;
        text-shadow:0 0 0.1rem rgba(228,205,38,0.28);
      }
    }
    .num {
      background: url("../../../../../assets/city-management/market-supervision/market-subject/shuzi-kuang.png");
      font-size: 0.3rem;
      font-family: Impact;
      font-weight: bold;
      font-style: italic;
      text-align: center;
      color: #f9e659;
      padding: 0.2rem 0.2rem;
      background-size: 100% 100%;
      span {
        font-size: 0.17rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        font-style: italic;
        color: rgba(255, 255, 255, 1);
        margin-left: 0.1rem;
        display: inline-block;
      }
    }
  }
}
// .notice-box {
//   width: 2.5rem;
//   height: 2.6rem;
//   // position: absolute;
//   // top: 4rem;
//   box-sizing: border-box;
//   padding: 0.2rem;
//   // right: 20rem;
//   // z-index: 99;
//   background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/notice-bg.png");
//   background-size: 100% 100%;
//   .title {
//     font-size: 0.24rem;
//     font-family: Source Han Sans CN;
//     font-weight: bold;
//     color: rgba(249, 230, 89, 1);
//   }
//   .content {
//     p {
//       font-size: 0.18rem;
//       margin-top: 0.2rem;
//       font-family: Source Han Sans CN;
//       font-weight: bold;
//       color: rgba(223, 226, 251, 1);
//       .icon {
//         width: 0.2rem;
//         height: 0.2rem;
//         position: relative;
//         top: 0.04rem;
//       }
//     }
//   }
// }
.disappear {
  animation: disappear 2s infinite;
}
@keyframes disappear {
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  99% {
    transform: translate(0%, 100%);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
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
    background:none !important;
    left: 0.25rem;
    top: 1.7rem;
    z-index: 9;
    width: 7.02rem;
    height: 3.42rem;
  }
</style>
