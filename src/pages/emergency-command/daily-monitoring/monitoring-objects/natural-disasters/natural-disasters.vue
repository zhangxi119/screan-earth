<!--
 @Descripttion:自然灾害 监测预警
 * @Author: wuqiuchi
 * @Date: 2020-03-08
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-06-05 11:21:46
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-18 17:55:06
 -->
<template>
  <div class="natural-container">
    <!-- <div class="header-bg">监测预警 自然灾害</div> -->
      <div class="natural-select-other">
      <select-other :data="menuList2"  style="display:block"></select-other>
    </div>
    <head-component name="监测预警 自然灾害"></head-component>
    <div class="g-menu-box">
      <main-list></main-list>
    </div>
     <div class="natural-panel" :class = "{changeH: panelBig}">
        <div class="user-dos" @click="panelBig = !panelBig">
          <div class="legend">图例</div>
          <div class="icon"></div>
        </div>
      <circlePanel @addIcon="addIcon" @removeIcon="removeIcon" :ceneterScope="ceneterScope" @getQueryPoint="getQueryPoint" v-show = "panelBig"></circlePanel>
    </div>
    <surver-maker ref="naturalMakers"></surver-maker>
    <!-- 区域点位maker -->
    <area-makers ref="naturalArea" :type="1" :dataList="areaInfoData"  @showTitle="showTooltip" @hideTitle="hideTooltip"></area-makers>
    <div class="main-left-top">
      <p class="g-title">易发事故风险点监测</p>
      <div id="left-top-echart" class="left-top-echart"></div>
      <div class="main-left-top-bottom">
        <p class="g-title2">点位监测信息</p>
        <div class="g-show-detail" @click="showDetail()">查看明细</div>
        <!-- <div class="left-bottom">
          <span>点位名称</span>
          <span>点位类型</span>
          <span>监测值</span>
          <span>时间</span>
        </div>
        <div class="list-box">
          <div
            @mouseover="stopAnimate(1)"
            @mouseleave="startAnimate(1)"
            :class="{'anim':animate1}"
            class="list-inner-box"
          >
            <div
              class="list-box-item"
              :class="{'selected':index%2===0}"
              v-for="(item,index) in itemsList"
              :key="index"
            >
              <span>{{item.pointName}}</span>
              <span>{{item.pointType}}</span>
              <span>{{item.inspectValue}}</span>
              <span>{{item.inspectTime}}</span>
            </div>
          </div>
        </div> -->
        <div class="scroll-table">
          <scroll-table
              v-if="itemsList.length"
              :column="columnProject"
              :data="itemsList"
              :max="5"
              :height="'2rem'"
              @showTitle="showTooltip"
              @hideTitle="hideTooltip"
            ></scroll-table>
        </div>
      </div>
    </div>
    <!-- <div class="main-right-top">
      <p class="g-title">预警通知</p>
      <div class="left-notice-box">
        <p class="notice-title">
          累计发布通知：
          <span>{{warningCounts}}</span>
          <span>次</span>
        </p>
      </div>
      <div class="list-box">
        <div class="list-inner-box">
          <div class="left-bottom-box" v-if="labelList.length>0">
            <h3>{{(labelList[noticeIndex]&&labelList[noticeIndex].title&&labelList[noticeIndex].title)||''}}</h3>
            <p>{{(labelList[noticeIndex]&&labelList[noticeIndex].label)||''}}</p>
            <footer>{{(labelList[noticeIndex]&&labelList[noticeIndex].time)||''}}</footer>
          </div>
        </div>
      </div>
    </div> -->
    <warInf class = "war-inf"  :labelList = "labelList"  @close= "closeNoticeMakter"/>
    <div class="main-right-box">
      <p class="g-title">监测点位分布情况</p>
      <div class="g-right-top" id="left-bottom-echart"></div>
      <div class="g-title-content">
        <p class="g-title" style="margin-top: 0.3rem;">主要监测点位监测数据</p>
        <div class="select" @click="naturalShow = !naturalShow" id="naturalShow">
          <span>{{naturalList[activeSelect].name}}</span>
          <ul v-if="naturalShow">
            <li
              v-for="(item, index) in naturalList"
              :key="index"
              @click.stop="handleNatrual(index)"
              :class="index === activeSelect ? 'active' : 'normal'"
            >{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="btn-group">
        <div class="toggle-btn" :class="{active: current==1}" @click="handleChangec(1)">水情</div>
        <div class="toggle-btn" :class="{active: current==2}" @click="handleChangec(2)">雨情</div>
      </div>
      <div class="g-right-mid" id="right-mid-echart"></div>
       <div class="g-title-content">
        <p class="g-title" style="margin-top: 0.3rem;">地质灾害隐患数量<span class="global-data-title">（截至2020年）</span></p>
        <div class="g-nav-box">
          <!-- <nav-list
            :data="selectList"
            icon="none"
            :width="1.45"
            :height=".4"
            @handleClick="handleSelectDrop"
          ></nav-list> -->
          <div class="select" @click="naturalShow2 = !naturalShow2" id="naturalShow2">
            <span>{{selectList[activeSelect2].name}}</span>
            <ul v-if="naturalShow2">
              <li
                v-for="(item, index) in selectList"
                :key="index"
                @click.stop="handleNatrual2(index, item)"
                :class="index === activeSelect2 ? 'active' : 'normal'"
              >{{item.name}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="g-right-bot" id="right-bot-echart"></div>
    </div>
    <div class="left-list">
      <div class="left-list-li" v-for="(item,index) in leftList" :key="index">
        <div class="name">{{item.name}}</div>
        <div class="number">{{item.value}}<span>{{item.unit}}</span></div>
      </div>
    </div>
    <!-- <div class="notice-box">
      <p class="title">汛情</p>
      <div class="content">
        <p>
          <img
            class="icon"
            src="../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/sudden-icon.png"
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
            src="../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/flood-prevention.png"
            alt
          />
          <span>
            <span style="#F9E659">II级</span>防汛应急响应
          </span>
        </p>
        <p>位置：沙湾区安西路</p>
        <p>指挥单位：市应急委</p>
      </div>
    </div> -->
    <div style="position: absolute; left: 9rem;top: 1rem;">
      <noticeMaker :data = "labelListC" v-show = "isShowNotice"   @close= "closeNoticeMakter" style = "top:0" @showTitle="showTooltip" @hideTitle="hideTooltip"/>
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
import API from '@/api/emergency-command/natural-disasters.js'
// import API2 from '@/api/city-management/common-service.js'
import navList from '@/components/select.vue'
import mainList from '@/components/menu.vue'
import headComponent from '@/components/head-component.vue'
import legendComponent from '@/components/legend-component.vue'
import options01 from '@/echarts-data/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/left-top.js'
import options03 from '@/echarts-data/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/new-left-top.js'
import options04 from '@/echarts-data/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/right-mid-echart.js'
import options05 from '@/echarts-data/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/right-bot-echart.js'
import img1 from '../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/img-01.png'
import img2 from '../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/img-02.png'
import img3 from '../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/img-03.png'
import img4 from '../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/img-04.png'
import img5 from '../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/img-05.png'
import circlePanel from '../menuLists/menuLists'
import paginate from '@/components/paginate'
import surverMaker from '../menuLists/surver-makers.vue'
import areaMakers from '../menuLists/area-makers.vue'
import carsMakers from '../menuLists/cars-makers.vue'
import scrollTable from '@/components/table-scroll'
import warInf from './war-inf.vue'
import noticeMaker from '@/pages/emergency-command/emergency-command-chart/notice-maker.vue'
import selectOther from '@/components/select-other.vue'
import textModal from '@/components/text-modal' // 显示标题完整信息
export default {
  components: { navList, mainList, legendComponent, circlePanel, scrollTable, paginate, surverMaker, headComponent, warInf, noticeMaker, selectOther, areaMakers, carsMakers, textModal },
  data () {
    return {
      ceneterScope: {},
      icons: [],
      km: 5,
      isShowNotice: false,
      animate1: false,
      animate2: false,
      timer1: null,
      timer2: null,
      current: 1,
      activeSelect2: 0,
      naturalShow2: false,
      selectList: [
        { name: '泥石流', value: 0 },
        { name: '崩塌', value: 1 },
        { name: '滑坡', value: 2 },
        { name: '地面塌陷', value: 3 },
        { name: '不稳定斜坡', value: 4 }
      ],
      naturalShow: false,
      activeSelect: 0,
      naturalList: [
        { name: '大渡河', value: '大渡河' },
        { name: '岷江', value: '岷江' }
      ],
      items: [
        { index: 0, name: '峨眉山市', value: 24, rate: 95 },
        { index: 1, name: '市中区', value: 22, rate: 80 },
        { index: 2, name: '沙湾区', value: 20, rate: 70 },
        { index: 3, name: '五通桥区', value: 16, rate: 60 },
        { index: 4, name: '金口河区', value: 13, rate: 50 }
      ],
      menuList2: [
        {
          name: '自然灾害',
          routeName: 'naturalDisasters',
          selected: true
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
          selected: false
        }
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
      leftList: [],
      itemsList: [],
      list: [
        {
          name: '自然灾害',
          title: '自然灾害',
          eventList: [
            { name: '地质灾害监测点' },
            { name: '河道水文监测点' },
            { name: '城市内涝监测点' },
            { name: '气象数据监测点' },
            { name: '森林消防排查点' }
          ]
        },
        { name: '安全生产' },
        { name: '总体概况' },
        { name: '公共卫生' },
        { name: '重大危险源' }
      ],
      warningCounts: null, // 预警通知累计发布总数
      activeIndex: 0,
      img: [img1, img2, img3, img4, img5],
      checkedValue: [],
      tabValue: [],
      disasterTypes: [],
      noticeIndex: 0,
      columnProject: [
        { name: '点位名称', width: '.8rem', dataIndex: 'pointName' },
        { name: '点位类型', width: '1.6rem', dataIndex: 'pointType' },
        { name: '监测值', dataIndex: 'inspectValue' },
        { name: '时间', dataIndex: 'inspectTime', width: '2rem' }
      ],
      panelBig: false,
      areaInfoData: []
    }
  },
  mounted () {
    this.getQueryCount() // 统计信息（监测点位、累计预警次数、当前突发事件）
    this.getQueryPointCount() // 易发事故风险点监测
    this.getQueryRealTimeInfo() // 实时监测信息
    this.getQueryWarningInfo() // 预警通知
    this.getQueryDistribution() // 监测点位分布情况
    this.queryWaterMonitoring() // 主要水系监测情况
    this.queryGeologicHazardCount() // 地质灾害隐患类型统计
    this.getAreaInfo()
    document.addEventListener('mouseup', (e) => {
      var _con = document.getElementById('naturalShow')
      var _con2 = document.getElementById('naturalShow2')
      if (_con || _con2) {
        if (!_con.contains(e.target)) {
          this.naturalShow = false
        }
        if (!_con2.contains(e.target)) {
          this.naturalShow2 = false
        }
      }
    })
  },
  computed: {},
  methods: {
    // 查看详情
    showDetail () {
      this.$refs.naturalArea.getListInfo2()
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
    closeNoticeMakter (flag) {
      this.isShowNotice = flag
    },
    // 点击图例
    getQueryPoint (data, km) {
      this.km = km
      let ceneterScope = this.ceneterScope
      this.$refs.naturalMakers.getPoints(data, ceneterScope, km)
    },
    changeNoticeIndex () {
      if (this.noticeIndex < this.labelList.length - 1) {
        this.noticeIndex++
      } else {
        this.noticeIndex = 0
      }
    },
    // 鼠标移入显示标题
    showTooltip (e) {
      this.$refs.textModal.showTooltip(e)
    },
    hideTooltip () {
      this.$refs.textModal.hideTooltip()
    },
    // 多选
    // 主要水系监测情况 选择
    handleChangec (index) {
      this.current = index
      this.queryWaterMonitoring()
    },
    handleSelect (e) {
      let that = this
      setTimeout(() => {
        console.log(that.checkedValue)
      }, 100)
    },
    changeTab (res) {
      this.tabValue = res.data
    },
    handleNatrual (index) {
      this.activeSelect = index
      this.naturalShow = false
      this.queryWaterMonitoring()
    },
    handleNatrual2 (index, item) {
      this.activeSelect2 = index
      this.naturalShow2 = false
      // this.queryWaterMonitoring()
      if (this.disasterTypes.length) {
        let data = this.disasterTypes[item.value]
        let opt = options05(data.chart)
        echarts
          .init(document.getElementById('right-bot-echart'))
          .setOption(opt)
      }
    },
    // 地质灾害隐患类型统计 下拉框
    handleSelectDrop (name, item) {
      if (this.disasterTypes.length) {
        let data = this.disasterTypes[item.value]
        let opt = options05(data.chart)
        echarts
          .init(document.getElementById('right-bot-echart'))
          .setOption(opt)
      }
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
    // 易发事故风险点监测
    getQueryPointCount () {
      API.CITY_POINTCOUNT(this, {})
        .then(res => {
          let option01 = options01(res.data.data.pointCount)
          echarts
            .init(document.getElementById('left-top-echart'))
            .setOption(option01)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 实时监测信息
    getQueryRealTimeInfo () {
      API.CITY_REALTIMEINFO(this, {})
        .then(res => {
          this.itemsList = res.data.data.realTimeInfo
          console.log(this.itemsList)
          // if (this.itemsList.length > 5) {
          //   this.timer1 = setInterval(this.scroll1, 3000)
          // }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 预警通知
    getQueryWarningInfo () {
      API.CITY_WARNINGINFO(this, {})
        .then(res => {
          let { list = [] } = res.data.data.warningInfo
          // let { counts, list = [] } = res.data.data.warningInfo

          this.labelList = list// 预警通知轮播数组
          this.labelListC = this.labelList.concat([])
          // list.map(item => {
          //   this.labelList.push({
          //     title: item.zh06001,
          //     label: item.zh06004,
          //     time: item.zh06002 + ' ' + item.zh06003
          //   })
          // })
          // if (this.labelList.length > 1) {
          //   setInterval(() => {
          //     this.changeNoticeIndex()
          //   }, 10000)
          // }
          // this.warningCounts = counts || 0 // 预警通知累计发布总数
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 监测点位分布情况
    getQueryDistribution () {
      API.CITY_DISTRIBUTION(this, {})
        .then(res => {
          if (res.data.serviceSuccess) {
            let option03 = options03(res.data.data.distribution)
            console.log('option03', option03)
            echarts
              .init(document.getElementById('left-bottom-echart'))
              .setOption(option03)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 主要水系监测情况
    queryWaterMonitoring () {
      let name = this.naturalList[this.activeSelect].name
      let code = this.current === 1 ? '02' : '06'
      API.CITY_MONITORING(this, { name: name, code: code })
        .then(res => {
          let opt = options04(res.data.data.waterMonitoring, code)
          echarts
            .init(document.getElementById('right-mid-echart'))
            .setOption(opt)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 地质灾害隐患类型统计
    queryGeologicHazardCount () {
      API.CITY_COUNT(this)
        .then(res => {
          let data = res.data.data.geologicHazardCount[0]
          console.log(res)
          this.disasterTypes = res.data.data.geologicHazardCount
          let opt = options05(data.chart)
          echarts
            .init(document.getElementById('right-bot-echart'))
            .setOption(opt)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  beforeDestroy () {
    window._m.clear()
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
.g-show-detail {
  position: absolute;
  right: 0.52rem;
  top: 3.48rem;
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
.natural-container {
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
  .g-menu-box {
    position: absolute;
    left: 7.3rem;
    top: 9rem;
    z-index: 100;
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
      font-size:0.22rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:0.3rem;
    }
    .g-text-item {
      margin-top: 0.14rem;
      margin-bottom: 0.13rem;
      font-size:0.16rem;
      height: 0.16rem;
      line-height: 0.16rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(223,226,251,1);
      span {
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
  .g-maker-natural {
    padding: 0 0.16rem 0 0.3rem;
    box-sizing: border-box;
    position: relative;
    width: 4.99rem;
    min-height: 4.68rem;
    background: url("../../../../../assets/common/natural-model.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    overflow: hidden;
    .g-close {
      position: absolute;
      right: 0.25rem;
      top: 0.25rem;
      width: 0.27rem;
      height: 0.27rem;
      background: url("../../../../../assets/common/natural-close.png") no-repeat;
      background-size: 100% 100%;
    }
    p {
      font-size:0.18rem;
      margin-top: 0.2rem;
      margin-bottom: 0.15rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(255,255,255,1);
    }
    .natural-maker-echart {
      width: 100%;
      height: 2.1rem;
    }
    .g-watch-btn {
      position: absolute;
      top: 1.45rem;
      right: 0.61rem;
      width: 1.51rem;
      height: 0.51rem;
      line-height: 0.51rem;
      font-size:0.16rem;
      text-align: center;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(255,255,255,1);
      cursor: pointer;
      background: url("../../../../../assets/common/natural-btn.png") no-repeat;
      background-size: 100% 100%;
    }
    h3 {
      margin-top: 0.49rem;
      padding: 0 0.35rem 0 0;
      box-sizing: border-box;
      font-size:0.22rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:0.3rem;
    }
    .g-text-item {
      margin-top: 0.14rem;
      // margin-bottom: 0.13rem;
      font-size:0.16rem;
      // min-width: 50%;
      // display: inline-block;
      height: 0.16rem;
      line-height: 0.16rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(223,226,251,1);
      span {
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
          border: 0.01rem solid #9be9ff;
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
  .g-title2 {
    display: inline-block;
    margin: 0 0 0 0.5rem;
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
  .main-right-box {
    position: absolute;
    left: 35.66rem;
    top: 0.08rem;
    z-index: 99;
    width: 7.02rem;
    height: 10.57rem;
    background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/right-big.png")
      center no-repeat;
    background-size: 100%;
    .g-right-top {
      margin-left: 0.48rem;
      width: 6.34rem;
      height: 2.5rem;
    }
    .g-right-mid {
      margin-left: 0.48rem;
      width: 6.34rem;
      height: 2.5rem;
    }
    .g-right-bot {
      margin-left: 0.48rem;
      width: 6.34rem;
      height: 2.5rem;
    }
    .btn-group {
      margin: 0 auto;
      position: absolute;
      left: 2.97rem;
      top: 4.25rem;
      display: flex;
      z-index: 100;
      .toggle-btn {
        font-size: 0.17rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        // margin-left: 0.25rem;
        vertical-align: middle;
        // border:2px solid rgba(47,132,247,1);
        border-radius: 0.2rem;
        width: 0.95rem;
        height: 0.32rem;
        line-height: 0.29rem;
        text-align: center;
        cursor: pointer;
        &.active {
          background: #55c0f9;
          box-shadow: 0px 0.01rem 0.1rem 0px rgba(195, 241, 255, 0.28);
          border-radius: 0.2rem;
        }
      }
    }
    .g-nav-box {
      position: absolute;
      right: 0.35rem;
      z-index: 100;
    }
  }
  .main-left-top {
    position: absolute;
    left: 0.29rem;
    top: 0.2rem;
    z-index: 9;
    width: 7.02rem;
    height: 7.02rem;
    background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/big-kuang.png")
      center no-repeat;
    background-size: 100%;
    .left-top-echart {
      width: 100%;
      height: 2.5rem;
      // margin: 0 -0.6rem;
    }
    .main-left-top-bottom {
      // padding: .8rem .5rem .3rem .5rem;
      .scroll-table{
        width:6rem;
        position: relative;
        left:.6rem;
        top:.15rem
      }
    }
  }
  .main-left-bottom {
    position: absolute;
    right: 0.32rem;
    top: 0.4rem;
    z-index: 9;
    width: 7.02rem;
    height: 3.42rem;
    background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/small-kuang.png")
      center no-repeat;
    background-size: 100%;
    color: rgba(223, 226, 251, 1);
    .btn-group {
      margin: 0 auto;
      position: absolute;
      right: 0.5rem;
      bottom: 2.7rem;
      display: flex;
      z-index: 100;
      .toggle-btn {
        font-size: 0.17rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        margin-left: 0.25rem;
        vertical-align: middle;
        border: 0.02rem solid rgba(47, 132, 247, 1);
        border-radius: 0.04rem;
        width: 1rem;
        height: 0.29rem;
        line-height: 0.29rem;
        text-align: center;
        cursor: pointer;
        &.active {
          background: #2f84f7;
          box-shadow: 0px 0.01rem 0.1rem 0px rgba(195, 241, 255, 0.28);
          border-radius: 0.04rem;
        }
      }
    }
    .left-bottom-echart {
      height: 2.5rem;
      // padding-bottom: 0.15rem;
      box-sizing: border-box;
    }
  }
  .war-inf{
    left: 0.29rem;
    top: 7.18rem;
    z-index: 9;
    width: 7.02rem;
    height: 3.42rem;
  }
  .main-right-top {
    position: absolute;
    left: 0.29rem;
    top: 7.18rem;
    z-index: 9;
    width: 7.02rem;
    height: 3.42rem;
    background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/small-kuang.png")
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
      background-position: left center;
      // .notice-title {
      //   margin-left: 0.3rem;
      //   height: 0.35rem;
      //   > span:first-child {
      //     font-size: 0.24rem;
      //     font-family: Impact;
      //     font-weight: bold;
      //     font-style: italic;
      //     color: rgba(252, 230, 47, 1);
      //     margin-right: 0.05rem;
      //   }
      //   > span:last-child {
      //     font-size: 0.18rem;
      //     font-family: Impact;
      //     font-weight: bold;
      //     font-style: italic;
      //   }
      // }
    }
    .list-box {
      position: absolute;
      width: 5.85rem;
      left: 0.59rem;
      height: 1.95rem;
      overflow: hidden;
      .list-inner-box {
        width: 100%;
        position: absolute;
      }
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
          height: 1.13rem;
          font-size: 0.18rem;
          padding: 0 0.1rem;
          margin-top: 0.13rem;
          line-height: 0.3rem;
          text-indent: .36rem;
          font-family: Heiti SC;
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box; /* autoprefixer: off */
          -webkit-box-orient: vertical; /* autoprefixer: on */
          -webkit-line-clamp: 4;
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
    .anim {
      animation: mymove 1s infinite;
    }
    @keyframes mymove {
      from {
        top: 0;
      }
      to {
        top: -1.91rem;
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
      .g-nav-box {
        position: absolute;
        right: 5rem;
        top: 0.43rem;
        z-index: 100;
      }
    }
    .main-right-bottom-bottom {
      position: relative;
      top: 0.18rem;
      margin: 0 auto;
      .g-nav-box {
        position: absolute;
        left: 5rem;
        top: 0;
        z-index: 100;
      }
    }
    .right-bottom-box {
      position: relative;
      height: 2.5rem;
      flex: 1;
      overflow: hidden;
      .right-bottom-inner-box {
        position: absolute;
        left: 0.53rem;
        top: 0;
      }
      .item-li {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 0.5rem;
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
          color: #ffffff;
          background: url("../../../../../assets/city-management/common-service/medical-resource/no-04.png")
            no-repeat;
          background-size: 100% 100%;
        }
        .number-01 {
          width: 0.45rem;
          height: 0.45rem;
          text-align: center;
          line-height: 0.4rem;
          color: #ffffff;
          background: url("../../../../../assets/city-management/common-service/medical-resource/no-01.png")
            no-repeat;
          background-size: 100% 100%;
        }
        .number-02 {
          width: 0.45rem;
          height: 0.45rem;
          text-align: center;
          line-height: 0.4rem;
          color: #ffffff;
          background: url("../../../../../assets/city-management/common-service/medical-resource/no-02.png")
            no-repeat;
          background-size: 100% 100%;
        }
        .number-03 {
          width: 0.45rem;
          height: 0.45rem;
          text-align: center;
          line-height: 0.4rem;
          color: #ffffff;
          background: url("../../../../../assets/city-management/common-service/medical-resource/no-03.png")
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
          border-radius: 0.5rem;
          .line-inner {
            height: 0.12rem;
            background: linear-gradient(
              90deg,
              rgba(102, 175, 235, 1) 0%,
              rgba(123, 208, 240, 1) 100%
            );
            border-radius: 0 0.04rem 0.04rem 0;
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
  // .notice-box {
  //   width: 2.5rem;
  //   height: 2.6rem;
  //   position: absolute;
  //   top: 4rem;
  //   box-sizing: border-box;
  //   // padding: 0.2rem;
  //   right: 20rem;
  //   z-index: 99;
  //   background: url("../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/notice-bg.png");
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
        font-style:italic;
        font-weight: 800;
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
.select {
  position: relative;
  margin-right: 0.1rem;
  background: #034073;
  border-radius: 0.1rem;
  height: 0.3rem;
  line-height: 0.3rem;
  border: 0.02rem solid #2368b1;
  padding: 0 0.25rem 0 0.1rem;
  font-size: 0.16rem;
  font-weight: 400;
  color: #fff;
  top:0.1rem;
  span {
    display: inline-block;
    width: auto;
    height: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  cursor: pointer;
  &::before {
    position: absolute;
    top: 0.1rem;
    right: 0.08rem;
    content: "";
    display: block;
    border-top: 0.05rem solid transparent;
    border-right: 0.05rem solid transparent;
    border-bottom: 0.05rem solid white;
    border-left: 0.05rem solid transparent;
  }
  &::after {
    position: absolute;
    top: 0.1rem;
    right: 0.08rem;
    content: "";
    display: block;
    border-top: 0.05rem solid #fff;
    border-right: 0.05rem solid transparent;
    border-bottom: 0.05rem solid transparent;
    border-left: 0.05rem solid transparent;
  }
  ul {
    position: absolute;
    top: 0.18rem;
    left: -0.08rem;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 0.16rem;
    background: url("../../../../../assets/emergency-command/overall-situation/security-situation/select_bg.png")
      no-repeat;
    background-size: 100% 100%;
    padding: 0.2rem 0.1rem;
    z-index: 100;
    li {
      list-style-type: none;
      height: 0.45rem;
      line-height: 0.45rem;
    }
    .active {
      color: #ffd200;
    }
  }
}
.g-title-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 0.3rem;
}
.natural-panel{
    position: absolute;
    bottom: .5rem;
    left: 29rem;
    z-index: 99;
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
</style>
