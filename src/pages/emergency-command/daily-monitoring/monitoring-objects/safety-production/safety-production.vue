<!--
 @Descripttion:安全生产 监测预警
 * @Author: wuqiuchi
 * @Date: 2020-03-08
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-06-05 11:23:55
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-19 14:42:37
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-18 18:04:36
 -->
<template>
  <div class="security-container">
      <div class="natural-select-other">
      <select-other :data="menuList2"  style="display:block"></select-other>
    </div>
    <head-component name="监测预警 安全生产"></head-component>
    <div class="g-menu-box">
      <main-list :list="menuLists"></main-list>
    </div>
    <div class="natural-panel" :class = "{changeH: panelBig}">
      <div class="user-dos" @click="panelBig = !panelBig">
        <div class="legend">图例</div>
        <div class="icon"></div>
      </div>
       <circlePanel @addIcon="addIcon" @removeIcon="removeIcon" :ceneterScope="ceneterScope" @getQueryPoint="getQueryPoint" v-show="panelBig"></circlePanel>
    </div>
    <surver-maker ref="safetyMakers"></surver-maker>
    <area-makers ref="safetyArea" :type="2" :dataList="areaInfoData" @showTitle="showTooltip" @hideTitle="hideTooltip"></area-makers>
    <!-- 预警通知模态框 -->
    <div class="g-wether-model" v-show="wetherModel">
      <div class="g-wether-close" @click="wetherModel = false"></div>
      <h3>{{wetherDetail.title}}</h3>
      <div class="g-wether-tip">
        乐山市气象台
        <span>{{wetherDetail.dayTime}}</span>
        发布{{wetherDetail.title}}：
      </div>
      <div class="g-wether-box">
        <p>{{wetherDetail.label}}</p>
        <img src alt />
      </div>
      <div class="g-wether-file">
        附件查看：
        <a href="##">灾害性天气预警信息.doc</a>
      </div>
    </div>
    <div class="main-left-top">
      <p class="g-title">安全生产企业分布</p>
      <div id="left-top-echart" class="left-top-echart"></div>
    </div>
    <div class="main-left-center">
      <p class="g-title">安全生产企业区域数量TOP5</p>
      <div class="g-nav-box">
        <nav-list @handleClick="selectHandleClick" :data="selectList" icon="none" :width = "1.8"  :height=".4"></nav-list>
      </div>
      <div class="right-bottom-box">
        <div class="right-bottom-inner-box">
          <div class="item-li" v-for="(item,index) in items" :key="index">
            <div
              class="number"
              :class="{'number-01':item.index===0,'number-02':item.index===1,'number-03':item.index===2}"
            >{{item.index+1}}</div>
            <div class="name">{{item.name}}</div>
            <div class="line">
              <div class="line-inner" :style="{'width':item.rate+'%'}"></div>
            </div>
            <div class="value">{{item.value}}家</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="main-left-bottom">
      <p class="g-title">预警通知</p>
      <div class="left-notice-box">
        <div class="notice-title">
          <p>累计发布通知：</p>
          <span>{{warningCounts}}</span>
          <span>次</span>
        </div>
      </div>
      <div class="cont">
        <div class="bottom-box" ref="labelList">
          <div
            v-show="index === showFlag"
            class="left-bottom-box"
            @click="openWether(item)"
            v-for="(item, index) in labelList"
            :key="index"
          >
            <h3>{{item.title}}</h3>
            <p>{{item.label}}</p>
            <footer>{{item.time}}</footer>
          </div>
        </div>
      </div>
    </div> -->
    <warInf class = "war-inf"  :labelList = "labelList"  @close= "closeNoticeMakter"/>
    <div class="main-right-top">
      <p class="g-title">安全生产潜在隐患区域分布</p>
      <div class="g-show-detail" @click="showDetail()">查看明细</div>
      <div id="right-top-echart" class="right-top-echart"></div>
    </div>
    <div class="main-right-bottom">
      <p class="g-title">隐患排查情况</p>
      <div class="main-right-bottom-top">
        <div class="right-echarts-02">
          <div class="event-power">
            <div class="event-power-left">
              <div class="area-title">隐患级别</div>
              <div id="right-bottom-echart-01" class="right-bottom-echart-02"></div>
            </div>
            <div class="event-power-right">
              <div class="area-title">隐患整改状态</div>
              <div id="right-bottom-echart-02" class="right-bottom-echart-02"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-right-bottom-bottom">
        <p class="g-title">安全生产隐患排查记录</p>
        <div class="list-box">
          <div
            @mouseover="stopAnimate"
            @mouseleave="startAnimate"
            :class="{'anim':animate}"
            class="list-inner-box"
          >
            <div
              class="main-right-bottom-box"
              @click="showTroubleInfo(item)"
              v-for="(item, index) in troubleList"
              :key="index"
            >
              <div class="right-bottom-panel">
                <div class="panel">
                  <div class="title">隐患名称</div>
                  <div class="label"  @mouseenter="showTooltip($event)" @mouseleave="hideTooltip">{{item.jc03002}}</div>
                </div>
                <div class="panel">
                  <div class="title">隐患级别</div>
                  <div class="label">
                    <span :class="item.levelName | changeColor">{{item.levelName}}</span>
                  </div>
                </div>
                <div class="panel">
                  <div class="title">检查时间</div>
                  <div class="label">{{item.jc03005}}</div>
                </div>
                <div class="panel">
                  <div class="title">记录人</div>
                  <div class="label">{{item.jc03007}}</div>
                </div>
              </div>
              <div class="right-bottom-panel">
                <div class="panel">
                  <div class="title">企业名称</div>
                  <div  @mouseenter="showTooltip($event)" @mouseleave="hideTooltip" class="label enterprise-name">{{item.jc01003}}</div>
                </div>
                <div class="panel">
                  <div class="title">隐患状态</div>
                  <div class="label">
                    <span :class="item.statusName | getStatusName">{{item.statusName}}</span>
                  </div>
                </div>
                <div class="panel">
                  <div class="title">整改期限</div>
                  <div class="label">{{item.jc03006}}</div>
                </div>
                <div class="panel">
                  <div class="title">记录机构</div>
                  <div class="label">{{item.jc03008}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-center-box" v-show="showInformation">
      <div class="center-back" @click="showInformation = false"></div>
      <div class="center-title">安全生产隐患排查记录--详细信息</div>
      <div class="main-center">
        <div class="right-bottom-panel">
          <div class="panel">
            <div class="title">隐患名称</div>
            <div class="label">{{troubleListInfo.jc03002}}</div>
          </div>
          <div class="panel">
            <div class="title">隐患级别</div>
            <div class="label">
              <span :class="troubleListInfo.levelName | changeColor">{{troubleListInfo.levelName}}</span>
            </div>
          </div>
          <div class="panel">
            <div class="title">检查时间</div>
            <div class="label">{{troubleListInfo.jc03005}}</div>
          </div>
          <div class="panel">
            <div class="title">记录人</div>
            <div class="label">{{troubleListInfo.jc03007}}</div>
          </div>
        </div>
        <div class="right-bottom-panel">
          <div class="panel">
            <div class="title">企业名称</div>
            <div class="label">{{troubleListInfo.jc01003}}</div>
          </div>
          <div class="panel">
            <div class="title">隐患状态</div>
            <div class="label">
              <span :class="troubleListInfo.statusName | getStatusName">{{troubleListInfo.statusName}}</span>
            </div>
          </div>
          <div class="panel">
            <div class="title">整改期限</div>
            <div class="label">{{troubleListInfo.jc03006}}</div>
          </div>
          <div class="panel">
            <div class="title">记录机构</div>
            <div class="label">{{troubleListInfo.jc03008}}</div>
          </div>
        </div>
      </div>
      <div class="right-bottom">
        <div class="panel">
          <div class="title">隐患地点</div>
          <div class="label-sign">
            {{troubleListInfo.jc01004}}
            <div class="sign-box">
              <img
                src="../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/sign.png"
                alt
              />
              <span>查看隐患点位置</span>
            </div>
          </div>
        </div>
        <div class="panel-box">
          <div class="panel">
            <div class="title">排查人员</div>
            <div class="label">{{troubleListInfo.jc03009}}</div>
          </div>
          <div class="panel">
            <div class="title">排查依据</div>
            <div class="label">{{troubleListInfo.jc03010}}</div>
          </div>
        </div>
      </div>
      <div class="center-close" @click="showInformation = false">关闭</div>
    </div>
    <div class="left-list">
      <div class="left-list-li" v-for="(item,index) in leftList" :key="index">
        <div class="name">{{item.name}}</div>
        <div class="number">
          {{item.value}}
          <span>{{item.unit}}</span>
        </div>
      </div>
    </div>
    <div style="position: absolute; left: 9rem;top: 1rem;">
      <noticeMaker :data = "labelListC" v-show = "isShowNotice"   @close= "closeNoticeMakter" @showTitle="showTooltip" @hideTitle="hideTooltip"/>
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
import echarts from 'echarts'
// import { imgPath } from '@/utils/BasePath.js'
import API from '@/api/emergency-command/safety-production.js'
import navList from '@/components/select.vue'
import mainList from '@/components/menu.vue'
import headComponent from '@/components/head-component.vue'
import options01 from '@/echarts-data/emergency-command/daily-monitoring/monitoring-objects/safety-production/left-top.js'
import options02 from '@/echarts-data/emergency-command/daily-monitoring/monitoring-objects/safety-production/right-top.js'
import options03 from '@/echarts-data/emergency-command/daily-monitoring/monitoring-objects/safety-production/right-bottom-01.js'
import options04 from '@/echarts-data/emergency-command/daily-monitoring/monitoring-objects/safety-production/right-bottom-02.js'
import img1 from '../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/potential-hazard.png'
import img2 from '../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/trouble.png'
import circlePanel from '../menuLists/menuLists'
import surverMaker from '../menuLists/surver-makers.vue'
import warInf from '@/pages/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/war-inf.vue'
import noticeMaker from '@/pages/emergency-command/emergency-command-chart/notice-maker.vue'
import selectOther from '@/components/select-other.vue'
import areaMakers from '../menuLists/sarea-makers.vue'
import carsMakers from '../menuLists/cars-makers.vue'
import textModal from '@/components/text-modal' // 显示标题完整信息
export default {
  components: { navList, mainList, circlePanel, surverMaker, headComponent, warInf, noticeMaker, selectOther, areaMakers, carsMakers, textModal },
  mounted () {
    this.getQueryCount() // 统计信息（监测点位、累计预警次数、当前突发事件）
    this.getQueryDistribution() // 安全生产企业分布
    this.getQuerySelectList() // 安全生产企业区域排名下拉框
    this.getQueryAreaRank('01') // 安全生产企业区域排名TOP5
    this.getQueryWarningInfo() // 预警通知
    this.getQueryPotentialDanger() // 潜在隐患区域分布
    this.getQueryInvestigationInfo() // 隐患排查情况
    this.getQueryInvestigationRecords() // 隐患排查记录
    this.scroll()
    this.getAreaInfo()
  },
  data () {
    return {
      ceneterScope: {},
      icons: [],
      km: 5,
      isShowNotice: false,
      menuLists: [
        {
          name: '应急指挥调度',
          children: [
            { name: '安全态势' },
            { name: '重大活动保障' },
            {
              name: '监测预警',
              children: [
                { name: '安全生产' },
                { name: '自然灾害' },
                { name: '重大危险源' },
                { name: '公共卫生' }
              ]
            },
            { name: '应急指挥' }
          ]
        },
        { name: '心连心服务' },
        { name: '城市综合管理' },
        { name: '智慧旅游平台' },
        { name: '数字规划馆' }
      ],
      selectList: [
        { name: '危险化学品' },
        { name: '危险化学品' },
        { name: '危险化学品' }
      ],
      items: [
        { index: 0, name: '峨眉山市', value: 24, rate: 95 },
        { index: 1, name: '市中区', value: 22, rate: 80 },
        { index: 2, name: '沙湾区', value: 20, rate: 70 },
        { index: 3, name: '五通桥区', value: 16, rate: 60 },
        { index: 4, name: '金口河区', value: 13, rate: 50 }
      ],
      labelListC: [],
      labelList: [
        // {
        //   title: '暴雨避难通知1',
        //   label:
        //     '乐山暴雨避难紧急通知，内容如下内容如下内容如下，乐山暴雨避难紧急通知，内容如下内容如下内容如下，乐山暴雨避难紧急通知，内容如下内容如下内容如下，乐山暴雨避难紧急通知，内容如下内容如下，乐山暴雨避难紧急通知，内容如下内容如下内容如下所示，乐山暴雨避难紧急通知，内容如下内容如下内容如下所示，乐山暴雨避难紧急通知，内容如下内容如下内容如下所示，乐山暴雨避难紧急通知，内容如下内容如下内容如下所示。',
        //   time: '乐山市气象局 2020.1.2 17: 36'
        // },
        // {
        //   title: '暴雨避难通知2',
        //   label:
        //     '乐山暴雨避难紧急通知，内容如下内容如下内容如下，乐山暴雨避难紧急通知，内容如下内容如下内容如下，乐山暴雨避难紧急通知，内容如下内容如下内容如下，乐山暴雨避难紧急通知，内容如下内容如下，乐山暴雨避难紧急通知，内容如下内容如下内容如下所示。',
        //   time: '乐山市气象局 2020.1.2 17: 36'
        // },
        // {
        //   title: '暴雨避难通知3',
        //   label:
        //     '乐山暴雨避难紧急通知，内容如下内容如下内容如下，乐山暴雨避难紧急通知，内容如下内容如下内容如下，乐山暴雨避难紧急通知，内容如下内容如下内容如下，乐山暴雨避难紧急通知，内容如下内容如下，乐山暴雨避难紧急通知，内容如下内容如下内容如下所示。',
        //   time: '乐山市气象局 2020.1.2 17: 36'
        // }
      ],
      leftList: [
        // {name: '监测点位', value: 188},
        // {name: '预警次数', value: 5},
        // {name: '突发事件', value: 4}
      ],
      list: [
        { name: '自然灾害' },
        {
          name: '安全生产',
          title: '安全生产',
          eventList: [{ name: '潜在隐患' }, { name: '隐患排查' }]
        },
        { name: '总体概况' },
        { name: '公共卫生' },
        { name: '重大危险源' }
      ],
      troubleList: [], // 隐患排查记录
      troubleListInfo: {}, // 隐患排查记录详情
      activeIndex: 0,
      img: [img1, img2],
      checkedValue: [],
      tabValue: [],
      showInformation: false,
      scrollW: null, // 记录滚动到哪了
      scrollTime: null,
      animate: false,
      timer: null,
      wetherModel: false,
      wetherDetail: {},
      warningCounts: null, // 预警通知累计发布总数
      // 新增的地图类变量
      checkData: [],
      markerData: [],
      markerDetail: {
        num1: 1,
        num2: 1
      },
      makerFlag: true,
      nowPage: 1,
      showFlag: 0,
      makerIndex: 1,
      makerIndex2: 1,
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
          selected: true
        },
        {
          name: '重大危险源',
          routeName: 'majorHazards',
          selected: false
        },
        {
          name: '公共卫生',
          routeName: 'publicHealth',
          selected: false
        }
      ],
      areaInfoData: []
      // 新增的地图类变量-结束
    }
  },
  methods: {
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
      this.$refs.safetyMakers.getPoints(data, ceneterScope, km)
    },
    // 鼠标悬停，停止滚动
    stopScroll () {
      clearInterval(this.scrollTime)
    },
    // 鼠标移开 ，接着滚动
    startScroll () {
      var target = this.$refs.labelList
      this.scrollW = target.offsetTop // 移开时记录向上移动的距离
      this.scroll()
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
    // 查看详情
    showDetail () {
      this.$refs.safetyArea.getListInfo2()
    },
    // 鼠标移入显示标题
    showTooltip (e) {
      this.$refs.textModal.showTooltip(e)
    },
    hideTooltip () {
      this.$refs.textModal.hideTooltip()
    },
    // 循环滚动
    scroll () {
      // this.scrollTime = setInterval(() => {
      //   this.showFlag++
      //   if (this.showFlag > this.labelList.length - 1) {
      //     this.showFlag = 0
      //   }
      // }, 10000)
      // var that = this
      // var target = that.$refs.labelList
      // var initLeft = 0
      // if (that.scrollW < 0) {
      //   initLeft = that.scrollW * -1
      // }
      // // 定时器
      // that.scrollTime = setInterval(function () {
      //   initLeft++
      //   if (initLeft >= target.offsetHeight / 1.5) {
      //     initLeft = 0
      //   }
      //   target.style.top = '-' + initLeft + 'px'
      // }, 30)
    },
    startAnimate () {
      this.timer = setInterval(this.scrollTrouble, 3000)
    },
    stopAnimate () {
      this.animate = false
      clearInterval(this.timer)
    },
    scrollTrouble () {
      this.animate = true
      setTimeout(() => {
        this.troubleList.push(this.troubleList[0]) // 将数组的第一个元素添加到数组的
        this.troubleList.shift() // 删除数组的第一个元素
        this.animate = false // margin-top 为0 的时候取消过渡动画，实现无缝滚动
      }, 1000)
    },
    handleClick (index) {
      this.activeIndex = index
    },
    // 多选
    handleSelect (e) {
      let that = this
      setTimeout(() => {
        console.log(that.checkedValue)
      }, 100)
    },
    changeTab (res) {
      this.tabValue = res.data
    },
    // TOP5选项
    selectHandleClick (name, item) {
      this.getQueryAreaRank(item.value)
    },
    // 统计信息（监测点位、累计预警次数、当前突发事件）
    getQueryCount () {
      API.CITY_QUERYCOUNT(this, {})
        .then(res => {
          this.leftList = [
            { name: '监测点位', value: res.data.data.points, unit: '个' },
            { name: '预警次数', value: res.data.data.warnings, unit: '次' },
            { name: '突发事件', value: res.data.data.events, unit: '件' }
          ]
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 安全生产企业分布
    getQueryDistribution () {
      API.CITY_DISTRIBUTION(this, {})
        .then(res => {
          let option01 = options01(res.data.data.distribution)
          echarts
            .init(document.getElementById('left-top-echart'))
            .setOption(option01)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 安全生产企业区域排名下拉框
    getQuerySelectList () {
      API.CITY_SELECTLIST(this, {})
        .then(res => {
          this.selectList = res.data.data.selectList
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 安全生产企业区域排名TOP5
    getQueryAreaRank (type) {
      API.CITY_AREARANK(this, {type: type})
        .then(res => {
          let no1 = res.data.data.areaRank[0].counts
          this.items = []
          res.data.data.areaRank.forEach((item, index) => {
            this.items.push({
              name: item.areaName,
              index: index,
              rate: (item.counts / no1) * 100,
              value: item.counts
            })
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 预警通知
    getQueryWarningInfo () {
      API.CITY_WARNINGINFO(this, {})
        .then(res => {
          // let { list = [] } = res.data.data.warningInfo
          this.labelList = res.data.data.warningInfo.list // 预警通知轮播数组
          this.labelListC = this.labelList.concat([])
          // list.map(item => {
          //   let timeDay = this.getTime(item.zh06003)
          //   let temp = {
          //     title: item.zh06001,
          //     label: item.zh06004,
          //     time: item.zh06002 + ' ' + item.zh06003,
          //     dayTime: timeDay
          //   }
          //   Object.assign(item, temp)
          //   this.labelList.push(item)
          // })
          // this.warningCounts = counts // 预警通知累计发布总数
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 打开预警通知详情
    openWether (item) {
      console.log(item)
      this.wetherDetail = item
      this.wetherModel = true
    },
    getTime (val) {
      let str = val.split(' ')[0]
      let tem = str.split('-')
      let month = tem[1] + '月'
      let day = tem[2] + '日'
      return month + day
    },
    // 潜在隐患区域分布
    getQueryPotentialDanger () {
      API.CITY_DANGER(this, {})
        .then(res => {
          let option02 = options02(res.data.data.potentialDanger)
          echarts
            .init(document.getElementById('right-top-echart'))
            .setOption(option02)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 隐患排查情况 和 隐患排查情况统计
    getQueryInvestigationInfo () {
      API.CITY_INVESTIGATION(this, {})
        .then(res => {
          let option03 = options03(res.data.data.dangerInvestigationInfo)
          echarts
            .init(document.getElementById('right-bottom-echart-01'))
            .setOption(option03)
        })
        .catch(err => {
          console.log(err)
        })
      API.CITY_INVESTIGATIONCOUNT(this, {})
        .then(res => {
          console.log(res.data.data.dangerInvestigationCount)
          let option04 = options04(res.data.data.dangerInvestigationCount)
          echarts
            .init(document.getElementById('right-bottom-echart-02'))
            .setOption(option04)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 隐患排查记录
    getQueryInvestigationRecords () {
      API.CITY_INVESTIGATIONRECORDS(this, {})
        .then(res => {
          this.troubleList = res.data.data.dangerInvestigationRecords
          if (this.troubleList.length > 1) {
            this.timer = setInterval(this.scrollTrouble, 3000)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 点击排查记录框获取详细信息
    showTroubleInfo (params) {
      this.showInformation = true
      this.$nextTick(() => {
        this.troubleListInfo = params
      })
    }
  },
  filters: {
    getStatusName (val) {
      let className = ''
      switch (val) {
        case '待整改' : className = 'notCompleted'
          break
        case '整改完成' : className = 'completed'
          break
        case '预期未整改' : className = 'outTime'
      }
      return className
    },
    changeColor (val) {
      let className = ''
      switch (val) {
        case '一般隐患' : className = 'yiban'
          break
        case '重大隐患' : className = 'zhongda'
          break
        case '较大隐患' : className = 'jiaoda'
      }
      return className
    }
  },
  beforeDestroy () {
    this.removeIcon()
    window._m.clear()
  }
}
</script>

<style  lang="scss" scoped>
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
.security-container {
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
  // maker
  .g-img-box {
    width: 1.88rem;
    height: 2.3rem;
    left: 0;
    top: 0;
    z-index: 200;
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
  .small-img2 {
    width: 0.6rem;
    height: 0.6rem;
  }
  .g-maker-text {
    padding: 0 0.16rem 0 0.25rem;
    box-sizing: border-box;
    width: 4.36rem;
    min-height: 6.86rem;
    background: url("../../../../../assets/common/maker-model.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    overflow: hidden;
    .g-close {
      position: absolute;
      right: 0.21rem;
      top: 0.5rem;
      width: 0.26rem;
      height: 0.26rem;
      background: url("../../../../../assets/common/close.png") no-repeat;
      background-size: 100% 100%;
    }
    h3 {
      margin-top: 0.49rem;
      padding: 0 0.35rem 0 0;
      box-sizing: border-box;
      font-size: 0.22rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 0.3rem;
    }
    .g-text-item {
      margin-top: 0.14rem;
      margin-bottom: 0.13rem;
      font-size: 0.16rem;
      height: 0.16rem;
      line-height: 0.16rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(223, 226, 251, 1);
      span {
        font-size: 0.16rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        font-style: italic;
        line-height: 0.16rem;
        color: rgba(249, 230, 89, 1);
      }
      label {
        float: left;
        line-height: 0.16rem;
      }
      .g-address {
        width: 1.95rem;
        line-height: 0.16rem;
        float: left;
      }
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
          height: 0.24rem;
          font-size: 0.18rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          font-style: italic;
          color: rgba(223, 227, 251, 1);
          &::before {
            content: "";
            display: inline-block;
            width: 0.21rem;
            height: 0.24rem;
            background: url("../../../../../assets/common/maker-text.png")
              no-repeat;
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
          font-size: 0.17rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          font-style: italic;
          color: rgba(255, 255, 255, 1);
          span {
            font-size: 0.3rem;
            font-family: Impact;
            font-weight: bold;
            font-style: italic;
            color: rgba(249, 230, 89, 1);
          }
        }
      }
    }
    .g-border-line {
      margin: 0;
      width: 100%;
      height: 0.01rem;
      border-bottom: 0.01rem dashed rgba(72, 170, 244, 1);
    }
    .g-text-box {
      width: calc(100% - 0.12rem);
      margin-right: 0.12rem;
      margin-bottom: 0.16rem;
      padding: 0 0.2rem;
      box-sizing: border-box;
      // min-height: 1.6rem;
      height: 2.2rem;
      overflow: hidden;
      background: url("../../../../../assets/common/maker-small-box.png")
        no-repeat;
      background-size: 100% 100%;
      .color-green {
        color: "#73D477";
      }
      .g-text-nav {
        width: 100%;
        margin-top: 0.35rem;
        position: relative;
        .g-nave-page {
          position: absolute;
          bottom: 0.04rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.14rem;
          color: #ffffff;
          display: inline-block;
        }
      }
    }
  }
  // maker-end
  .g-wether-model {
    position: absolute;
    top: 1.26rem;
    left: 9.17rem;
    padding: 0 0.27rem;
    z-index: 99;
    width: 4.36rem;
    min-height: 5.56rem;
    background: url("../../../../../assets/common/wether-model.png") no-repeat;
    background-size: 100% 100%;
    .g-wether-close {
      position: absolute;
      right: 0.21rem;
      top: 0.5rem;
      width: 0.26rem;
      height: 0.26rem;
      background: url("../../../../../assets/common/close.png") no-repeat;
      background-size: 100% 100%;
    }
    h3 {
      margin-top: 0.49rem;
      margin-bottom: 0.17rem;
      text-align: center;
      font-size: 0.22rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(249, 230, 89, 1);
      line-height: 0.3rem;
    }
    .g-wether-tip {
      margin-bottom: 0.16rem;
      font-size: 0.17rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      span {
        color: rgba(249, 230, 89, 1);
      }
    }
    .g-wether-box {
      font-size: 0.16rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(223, 226, 251, 1);
      line-height: 0.24rem;
      text-indent: 2em;
      img {
        display: block;
        width: 2.72rem;
        height: 1.53rem;
        margin: 0.18rem auto;
      }
    }
    .g-wether-file {
      font-size: 0.16rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 0.25rem;
      color: rgba(255, 255, 255, 1);
      a {
        display: inline-block;
        height: 0.25rem;
        border-bottom: 0.01rem solid rgba(249, 230, 89, 1);
        font-style: italic;
        text-decoration: none;
        color: rgba(249, 230, 89, 1);
      }
    }
  }
  .g-menu-box {
    position: absolute;
    left: 7.3rem;
    top: 9rem;
    z-index: 102;
  }
  .g-heart-box {
    position: absolute;
    right: 7.2rem;
    top: 7.45rem;
    z-index: 100;
    .g-panel-right {
      padding: 0.2rem 0;
      width: 3.5rem;
      height: 85%;
      color: #ffffff;
      > p {
        margin-bottom: 0.1rem;
        font-size: 0.17rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #fff;
        letter-spacing: 1px;
      }
      > div {
        position: relative;
        width: 26%;
        display: inline-block;
        text-align: center;
        margin-bottom: 0.1rem;
        img {
          width: 0.5rem;
          height: 0.5rem;
        }
        p {
          font-size: 0.16rem;
          font-weight: bold;
          font-style: italic;
          color: #9be9ff;
        }
        .check {
          position: absolute;
          right: 0.18rem;
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
    padding-left: 0.15rem;
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
    position: absolute;
    left: 0.29rem;
    top: 0.2rem;
    z-index: 9;
    width: 7.02rem;
    height: 3.82rem;
    background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/left-top.png")
      center no-repeat;
    background-size: 100%;
    .left-top-echart {
      height: 2.5rem;
      margin: 0 -0.6rem;
    }
  }
  .main-left-center {
    position: absolute;
    left: 0.29rem;
    top: 3.74rem;
    z-index: 9;
    width: 7.02rem;
    height: 3.82rem;
    background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/left-center.png")
      center no-repeat;
    background-size: 100%;
    .g-nav-box {
      position: absolute;
      right: .35rem;
      top: 0.43rem;
      z-index: 100;
    }
    .right-bottom-box {
      position: relative;
      height: 2.5rem;
      left: 0.6rem;
      flex: 1;
      overflow: hidden;
      .right-bottom-inner-box {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0.08rem;
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
        }
        .number {
          width: 0.45rem;
          height: 0.45rem;
          text-align: center;
          line-height: 0.4rem;
          font-size: 0.16rem;
          color: #ffffff;
          background: url("../../../../../assets/emergency-command/overall-situation/societal-security/no4.png")
            no-repeat;
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
          background: url("../../../../../assets/emergency-command/overall-situation/societal-security/no3.png")
            no-repeat;
          background-size: 100% 100%;
        }
        .line {
          width: 3.8rem;
          height: 0.12rem;
          display: flex;
          align-items: center;
          background: linear-gradient(
            90deg,
            rgba(102, 175, 235, 0.3) 0%,
            rgba(123, 208, 240, 0.3) 100%
          );
          border-radius: 0.05rem;
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
    }
  }
  .main-left-bottom {
    position: absolute;
    left: 0.29rem;
    top: 7.3rem;
    z-index: 9;
    width: 7.02rem;
    height: 3.42rem;
    background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/left-bottom.png")
      center no-repeat;
    background-size: 100%;
    color: rgba(223, 226, 251, 1);
    .left-notice-box {
      position: absolute;
      left: 4.5rem;
      top: 0.43rem;
      background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/notice.png")
        no-repeat;
      background-size: 0.27rem 0.28rem;
      background-position: left 0.05rem;
      p {
        display: inline-block;
      }
      .notice-title {
        margin-left: 0.3rem;
        height: 0.35rem;
        line-height: 0.35rem;
        font-size: 0.18rem;
        > span:first-child {
          display: inline-block;
          height: 0.35rem;
          line-height: 0.35rem;
          font-size: 0.24rem;
          font-family: Impact;
          font-weight: bold;
          font-style: italic;
          color: rgba(252, 230, 47, 1);
          margin-right: 0.05rem;
        }
        > span:last-child {
          display: inline-block;
          height: 0.35rem;
          line-height: 0.35rem;
          font-size: 0.18rem;
          font-family: Impact;
          font-weight: bold;
          font-style: italic;
        }
      }
    }
    .cont {
      height: 2rem;
      position: relative;
      overflow: hidden;
      .bottom-box {
        position: absolute;
        display: flex;
        flex-direction: column;
        .left-bottom-box {
          h3 {
            font-size: 0.23rem;
            text-align: center;
            font-family: Heiti SC;
            font-weight: bold;
            font-style: italic;
            color: rgba(249, 230, 89, 1);
          }
          p {
            width: 5.96rem;
            height: 1.16rem;
            font-size: 0.18rem;
            padding: 0 0.6rem;
            margin-top: 0.13rem;
            line-height: 0.3rem;
            font-family: Heiti SC;
            font-weight: bold;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
          }
          footer {
            font-size: 0.16rem;
            font-family: Heiti SC;
            font-weight: bold;
            font-style: italic;
            text-align: right;
            padding: 0 0.6rem;
            margin-top: 0.13rem;
            opacity: 0.8;
          }
        }
      }
    }
  }
  .main-right-top {
    position: absolute;
    right: 0.32rem;
    top: 0.2rem;
    z-index: 9;
    width: 7.02rem;
    height: 3.82rem;
    background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/right-top.png")
      center no-repeat;
    background-size: 100%;
    .right-top-echart {
      height: 2.5rem;
    }
    .g-show-detail {
      position: absolute;
      right: 0.52rem;
      top: 0.48rem;
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
  }
  .main-right-bottom {
    position: absolute;
    right: 0.32rem;
    top: 3.75rem;
    z-index: 9;
    width: 7.02rem;
    height: 7.02rem;
    background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/right-bottom.png")
      center no-repeat;
    background-size: 100%;
    .main-right-bottom-top {
      font-size: 0.2rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      padding: 0 0 0 0.6rem;
      .right-echarts-02 {
        .event-power {
          display: flex;
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
          > div {
            flex: 1;
            width: 4.5rem;
          }
          .right-bottom-echart-01,
          .right-bottom-echart-02 {
            height: 2.8rem;
            z-index: 1;
          }
        }
      }
    }
    .main-right-bottom-bottom {
      position: absolute;
      top: 3.4rem;
      .list-box {
        position: absolute;
        width: 7rem;
        height: 2.08rem;
        overflow: hidden;
        .list-inner-box {
          width: 100%;
          position: absolute;
        }
        .main-right-bottom-box {
          display: flex;
          font-size: 0.17rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          padding: 0.1rem 0 0 0.48rem;
          .right-bottom-panel {
            .panel {
              display: flex;
              margin: 0.06rem 0;
              .title {
                width: 1rem;
                height: 0.42rem;
                text-align: center;
                line-height: 0.42rem;
                background: rgba(23, 71, 175, 0.5);
                color: rgba(255, 255, 255, 0.68);
              }
              .label {
                width: 1.9rem;
                height: 0.42rem;
                text-align: left;
                line-height: 0.42rem;
                padding-left: 0.2rem;
                background: rgba(23, 71, 175, 0.3);
                color: rgba(255, 255, 255, 1);
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                .unlisted {
                  color: #F9E659;
                }
                .completed {
                  color: #5FC372;
                }
                .outTime {
                  color: #F26D2D;
                }
                .notCompleted {
                  color: #F7D455;
                }
              }
              .enterprise-name {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }
      .anim {
        animation: mymove 1s infinite;
      }
      @keyframes mymove {
        from {
          top: 0;
        }
        to {
          top: -2.08rem;
        }
      }
    }
  }
  .main-center-box {
    position: absolute;
    right: 0;
    top: 2.65rem;
    left: 0;
    margin: 0 auto;
    z-index: 9;
    width: 9.77rem;
    height: 4.81rem;
    background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/information-kuang.png")
      center no-repeat;
    background-size: 100%;
    .center-back {
      position: absolute;
      right: 0;
      top: -0.2rem;
      margin: 0 auto;
      width: 0.45rem;
      height: 0.46rem;
      border-radius: 50%;
      background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/information-return.png")
        center no-repeat;
      background-size: 100%;
      cursor: pointer;
    }
    .center-title {
      margin: 0.3rem 0 0 0.3rem;
      font-size: 0.21rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
    .main-center {
      display: flex;
      font-size: 0.17rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      margin: 0.3rem 0 0 0.3rem;
      .right-bottom-panel {
        .panel {
          display: flex;
          margin: 0.06rem 0;
          .title {
            width: 1rem;
            height: 0.42rem;
            text-align: center;
            line-height: 0.42rem;
            background: rgba(23, 71, 175, 0.5);
            color: rgba(255, 255, 255, 0.68);
          }
          .label {
            width: 3.38rem;
            height: 0.42rem;
            text-align: left;
            line-height: 0.42rem;
            padding-left: 0.2rem;
            background: rgba(23, 71, 175, 0.3);
            color: rgba(255, 255, 255, 1);
            .unlisted {
              color: #49b1ff;
            }
            .completed {
              color: #5fc372;
            }
            .outTime {
              color: #ED5824;
            }
            .notCompleted {
              color: #F2B84E;
            }
          }
        }
      }
    }
    .right-bottom {
      margin-top: -0.08rem;
      margin-left: 0.3rem;
      font-size: 0.17rem;
      .panel-box {
        display: flex;
        margin-top: -0.08rem;
      }
      .panel {
        display: flex;
        margin: 0.06rem 0;
        .title {
          width: 1rem;
          height: 0.42rem;
          text-align: center;
          line-height: 0.42rem;
          background: rgba(23, 71, 175, 0.5);
          color: rgba(255, 255, 255, 0.68);
        }
        .label {
          width: 3.38rem;
          height: 0.42rem;
          text-align: left;
          line-height: 0.42rem;
          padding-left: 0.2rem;
          background: rgba(23, 71, 175, 0.3);
          color: rgba(255, 255, 255, 1);
          .unlisted {
            color: #49b1ff;
          }
          .completed {
            color: #5fc372;
          }
          .outTime {
            color: #ED5824;
          }
          .notCompleted {
            color: #F2B84E;
          }
        }
        .label-sign {
          width: 7.96rem;
          height: 0.42rem;
          text-align: left;
          line-height: 0.42rem;
          padding-left: 0.2rem;
          background: rgba(23, 71, 175, 0.3);
          color: rgba(255, 255, 255, 1);
          .sign-box {
            position: absolute;
            top: 2.82rem;
            right: 1rem;
            // cursor: pointer;
            img {
              width: 0.13rem;
              height: 0.19rem;
              background-size: 100%;
            }
            span {
              color: #85feff;
            }
          }
        }
      }
    }
    .center-close {
      position: absolute;
      bottom: 0.37rem;
      right: 0;
      left: 0;
      margin: 0 auto;
      width: 1rem;
      height: 0.42rem;
      font-size: 0.17rem;
      line-height: 0.42rem;
      font-family: Source Han Sans CN;
      text-align: center;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      background: rgba(23, 71, 175, 0.28);
      border: 1px solid rgba(72, 170, 244, 1);
      cursor: pointer;
    }
  }
  .left-list {
    position: absolute;
    left: 7.3rem;
    top: 0.7rem;
    z-index: 99;
    .left-list-li {
      margin-top: 0.1rem;
      .name {
       padding: 0.01rem 0.1rem 0.02rem 0.1rem;
       display: inline-block;
       height:0.26rem;
       line-height: 0.24rem;
       color: #FFFFFF;
       font-size:0.22rem;
       font-weight: 800;
       font-style:italic;
       font-family:Source Han Sans CN;
       transform: perspective(1rem) rotateX(-15deg);
       transform-origin:left;
       background:rgba(213,96,44,1);
      }
      .number {
        height: 0.66rem;
        line-height: 0.66rem;
        font-size: 0.40rem;
        font-family:'DIN Condensed';
        color: #ffffff;
        font-weight: bold;
        font-style: italic;
        span {
          font-size: 0.24rem;
          color: #ffffff;
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
     height:3.28rem;
    }
    .user-dos{
      margin-left: 4.5rem;
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
  .yiban{
    color:#F9E659
  }
  .zhongda{
    color:#e34824
  }
  .jiaoda{
    color:#f68827
  }
</style>
