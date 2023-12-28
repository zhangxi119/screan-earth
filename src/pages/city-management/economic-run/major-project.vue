<!--
 * @Descripttion: 重大项目
 * @Author: chengqiyu
 * @Date: 2020-03-15
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-21 19:49:12
 -->
<template>
  <div class="medical-resource-container">
    <head-componen name="全市重点推进项目“挂图作战”"></head-componen>
    <!--<div class="header-bg"></div>-->
    <div class="g-menu-box">
      <menu-list></menu-list>
    </div>
    <div class="left-content">
      <div class="left-content-top">
        <div class="title-model">
          <div class="title hover-color">“挂图作战”项目基本情况<span class="global-data-title">（截至2020年）</span><span class = "right-add" @click = "showPage">乐山市发改委综合项目信息管理平台</span></div>
        </div>
        <div class="box-content major-left-top" v-if="survey.length">
          <div>
            <img src="@/assets/city-management/economic-run/major-project/mon3.png">
            <div class="major-left-item">
              <p>项目总数</p>
              <div><span>{{parseFloat(survey[0].value).toLocaleString()}}</span>{{survey[0].unit}}大项目({{parseFloat(survey[1].value).toLocaleString()}}{{survey[1].unit}}子项)</div>
            </div>
          </div>
          <div>
            <img src="@/assets/city-management/economic-run/major-project/mon1.png">
            <div class="major-left-item">
              <p>总投资金额</p>
              <div><span>{{parseFloat(survey[2].value).toLocaleString()}}</span>({{survey[2].unit}})</div>
            </div>
          </div>
          <div>
            <img src="@/assets/city-management/economic-run/major-project/mon2.png">
            <div class="major-left-item">
              <p>2020年计划投资</p>
              <div><span>{{parseFloat(survey[3].value).toLocaleString()}}</span>({{survey[3].unit}})</div>
            </div>
          </div>
        </div>
      </div>
      <div class="left-content-middle">
        <div class="title-model">
          <div class="title hover-color">项目类型情况<span class="global-data-title">（截至2020年）</span></div>
          <div class="choose-box">
            <span
              @click="handleChangeType(item.value,item.name)"
              class="chosse-item"
              :class="item.value === typeActive ? 'chosse-active' : 'chosse-normal'"
              v-for="(item,index) in leftMiddle"
              :key="index">{{item.name}}</span>
          </div>
        </div>
        <div class="echart-legend" v-if="typeActive !== '01'">
          <div
            v-for="(item, index) in legends"
            :key="index"
            class="legend-active"
            @click="handleLegend(index)" >
            <span  :class= "item.active ? item.type: 'type-nor2'" :name= "item.type" class= "lgend-icon"></span>
            <span :class="item.active ? 'type-act' : 'type-nor'">{{item.name}}</span>
          </div>
        </div>
        <div class="box-content" id="project-type"></div>
      </div>
      <div class="left-content-bottom">
        <div class="title-model">
          <div class="title hover-color">项目开工完成情况<span class="global-data-title">（截至2020年）</span></div>
        </div>
        <div class="box-content natural-content">
          <div class="natural-effect">
            <div class="area-title hover-color">建设批次</div>
            <div id="natural-effect"></div>
            <div class="g-add-message" style="left:30%">
              <span class="weight-font" style="position:relative;top:0.1rem">{{mouseData.total}}</span>
              <p class="weight-font-1">建设批次<br/>(项)</p>
            </div>
          </div>
          <div class="effect-content">
            <div class="area-title hover-color">投资完成情况</div>
            <div class="effect-content-top">
              <div>
                <div id="over-money"></div>
                <div class="g-add-message">
                  <span class="weight-font">{{parseFloat(monryNum.value).toLocaleString()}}</span>
                  <p class="weight-font-1">完成投资金额({{monryNum.unit}})</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-content">
      <div class="right-content-top">
        <div class="title-model">
          <div class="title hover-color">推进机制<span class="global-data-title">（截至2020年）</span></div>
        </div>
        <div class="disaster-change">
          <div class="g-move-content" v-for="(item, index) in mechanism" :key="index">
            <div class="g-move-content-rank">{{index+1}}</div>
            <div class="g-move-content-item">
              <div class="icon-tran"></div>
              <div class="g-move-content-title"  @mouseenter="showTooltip($event)" @mouseleave="hideTooltip">{{item.zd07002}}</div>
              <div class="g-move-content-text"  @mouseenter="showTooltip($event)" @mouseleave="hideTooltip">{{item.zd07003}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-content-bottom">
        <div class="title-model">
          <div class="title hover-color">项目基本情况<span class="global-data-title">（截至2020年）</span></div>
          <div class="right-serach">
            <transition name="search">
              <input placeholder="请输入关键字..." v-model="searchKey" v-show="showSearch" />
            </transition>
            <div :class="showSearch ? 'after-search-active' : 'after-search-normal'" class="after-search">
              <img src="../../../assets/common/search-1.png" @click="handleSearchTable">
            </div>
          </div>
        </div>
        <div class="box-content">
          <div id="natural-monitor" class="natural-monitor">
            <scroll-table
              v-if="schedule.length"
              :column="columnProject"
              :data="schedule"
              :max="5"
              :height="'3.3rem'"
              @handleChoose="handleClickMaker"
              @showTitle="showTooltip"
              @hideTitle="hideTooltip"></scroll-table>
          </div>
        </div>
      </div>
    </div>
    <!--panel-->
    <!--<div class="natural-panel">
      <div class="user-dos" @click="panelBig = !panelBig">
        <div class="legend">图例</div>
        <div class="icon"></div>
      </div>
      <heart-panel
        v-show="panelBig"
        :list="[]"
        @changeActive="handlePanelActive">
        <div class="g-panel-right" slot="panel-content">
          <p>项目类型</p>
          <div v-for="(item,index) in panelList" :key="index">
            <img :src="imgPath+item.field01" />
            <p :title="item.zd06006_name">{{item.zd06006_name}}</p>
            <div class="check">
              <input
                @click.stop="handleSelect(item.zd06006_id, index)"
                type="checkbox"
                :id="'ck'+index"
                :value="item.name"
                :checked="item.checked"
                class="check-box"/>
              <label :for="'ck'+index" class="sy-check"></label>
            </div>
          </div>
        </div>
      </heart-panel>
      &lt;!&ndash; <div class="small-icon" v-show="!panelBig">
        <div v-for="(item,index) in panelList" :key="index">
          <img :src="imgPath+item.field01" />
        </div>
      </div> &ndash;&gt;
    </div>-->
    <div class="work-project" v-if="startShow">
      <div class="work-project-close">
        <span>{{titleBuild}}</span>
        <img src="@/assets/common/close.png" @click="startShow = false">
      </div>
      <div class="table-header">
        <div class="header-rank">序号</div><div class="header-project">项目名称</div>
      </div>
      <div class="table-body">
        <div class="table-body-item" v-for="(item, index) in start" :key="index">
          <div class="header-rank">{{index+1}}</div>
          <div class="header-project" :title="item.zd06003">{{item.zd06003}}</div>
        </div>
      </div>
    </div>
    <!-- 区县项目集合 -->
    <div
      class="work-maker"
      id="major-move"
      v-show="mapDetailShow"
      @mouseenter="handleClearTime"
      @mouseleave="handleMove"
      :style="{left: qxPosition.x+'px', top: qxPosition.y+'px'}">
      <div v-if="mapDetailShow">
        <div class="work-maker-title">
          <span>{{mapView}}</span>
          <img src="@/assets/common/close.png" @click="handleCloseProject">
        </div>
        <div class="work-maker-status">
          <div
            v-for="(item, index) in mapData.statistics"
            :key="index">
            <div class="g-content" :class="projectActive === index ? 'g-content-active' : 'g-content-normal'" @click="handleClassProject(item, index)">
              <div><span>{{item.name}}</span>：<span class="work-maker-weight">{{item.value}}</span><span>个</span></div>
            </div>
          </div>
        </div>
        <div class="chart-content" v-if="mapData.name">
          <div id="chart-box"></div>
          <div class="work-maker-content">
            <div class="work-maker-content-top">
              <div
                v-for="(item, index) in mapData.name"
                :key="index"
                v-if="index >=(nowPage1-1)*7 && index<nowPage1*7"
                :class="selectedEventId === item.id ? 'active' : 'normal'"
                :data-id="item.id"
                @click="handleMaker(item)">
                <div class="work-maker-content-index">
                  {{index+1}}.
                </div>
                <div class="work-maker-content-name">
                  {{item.zd06003}}
                </div>
              </div>
            </div>
            <div class="work-maker-content-bottom">
              <paginate
                :nowPage="nowPage1"
                :count="Math.ceil(mapData.name.length/7)"
                :showFlag="false"
                @change="handleChange">
                <div slot="other-page-way" class="paginate-jkl">
                  <span style="color: #FCE62F;">{{nowPage1}}</span> / <span>{{Math.ceil(mapData.name.length/7)}}</span>
                </div>
              </paginate>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="user-btn">
      <!--<div class="user-btn-monitor" @click="videoShow = !videoShow">视频监控</div>-->
      <!--<div class="user-btn-view">返回全局模式</div>-->
    </div>
    <div class="work-video" v-if="videoDetailShow">
      <div class="work-project-close">
        <span>视频监控</span>
        <img src="@/assets/common/close.png" @click="videoDetailShow = !videoDetailShow">
      </div>
      <div class="work-project-title"><span>{{videoDetail.zd06008}}</span><span>{{videoDetail.zd06005}}</span></div>
      <div class="work-project-address">
        <img src="@/assets/common/address.png">
        <span>{{videoDetail.zd04002}}</span>
      </div>
      <div class="work-project-video">
        <div class="video"></div>
        <div class="time">2020-03-12  星期三  17：00：24</div>
      </div>
    </div>
    <div class="work-video-list" v-if="videoShow">
      <div class="work-project-close"><span>视频监控</span></div>
      <div class="list-content" v-if="video.length">
        <div
          v-for="(item, index) in video"
          :key="index"
          @click="handleVideoDetail(index)"
          v-if="index >=(nowPage-1)*6 && index<nowPage*6">
          <video></video>
          <div class="video-message">{{item.zd04001}}</div>
        </div>
      </div>
      <div v-else class="nothing">暂无监控视频</div>
      <div class="list-page">
        <paginate
          :nowPage="nowPage"
          :count="Math.ceil(video.length/6)"
          @change="handleChange"></paginate>
      </div>
    </div>
    <!-- 项目详情 -->
    <div class="work-detail-message" id="major-move1" v-show="workShow">
      <div v-if="workShow">
        <div class="top">
          <div><span>{{workDetail.zd06003}}</span><span>{{workDetail.zd06006}}</span></div>
          <img src="@/assets/common/close.png" @click.stop="handleCloseDetail">
        </div>
        <div class="content">
          <img src="@/assets/city-management/economic-run/major-project/tp.jpg">
          {{workDetail.zd06008}}
        </div>
        <div class="message">
          <div class="first">
            <div><span>总投资：</span><span>{{workDetail.zd06009}}</span></div>
            <div><span>本年度计划投资：</span><span>{{workDetail.zd06010}}</span></div>
          </div>
          <div class= "first">
            <div><span>指挥长：</span><span>{{workDetail.zd06011}}</span></div>
            <div><span>牵头单位：</span><span>{{workDetail.zd06012}}</span></div>
          </div>
          <div><span>所属区域：</span><span>{{workDetail.zd06002}}</span></div>
          <div><span>全年总进度：</span><span>{{workDetail.zd06013}}</span></div>
        </div>
        <div class="list">
          <div>
            <p>一季度达到工程进度</p>
            <div>{{workDetail.zd06014}}</div>
          </div>
          <div>
            <p>二季度达到工程进度</p>
            <div>{{workDetail.zd06015}}</div>
          </div>
          <div>
            <p>三季度达到工程进度</p>
            <div>{{workDetail.zd06016}}</div>
          </div>
          <div>
            <p>四季度达到工程进度</p>
            <div>{{workDetail.zd06017}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 添加maker -->
   <!-- <div class="maker-content">
      <div
        class="makers"
        v-for="(item, index) in makersList"
        :key="index"
        :id="item.id"
        @click="handleClickMaker(item.projectId)">
       <div class="makers-pat">
         <img class="maker-inside" :src="imgPath+item.field01" />
         <img v-show="showImg === 1" class="maker-outside" :src="imgPath+item.field02"/>
       </div>
      </div>
    </div>-->
    <!-- 值域 -->
    <div class="main-message-1">
      <p>项目数量值域</p>
      <div><span class="coco"></span><span>0 ~ 6</span></div>
      <div><span class="coco"></span><span>7 ~ 13</span></div>
      <div><span class="coco"></span><span>14 ~ 20</span></div>
      <div><span class="coco"></span><span>21 ~ 27</span></div>
      <div><span class="coco"></span><span>28 ~ 100</span></div>
    </div>
        <!-- 显示标题完整信息 -->
    <text-modal ref="textModal"></text-modal>
  </div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/title'
import * as majorApis from '@/api/city-management/economy-run'
import scrollTable from '@/components/table-scroll'
import heartPanel from '@/components/heart-panel'
import paginate from '@/components/paginate'
import menuList from '@/components/menu.vue'
import { imgPath } from '@/utils/BasePath'
import { moveDiv, openThirdPage } from '@/utils/utils'
import GradientColor from '@/utils/gradientColor'
import headComponen from '@/components/head-component'
import areaQx from '../../../../static/CesiumAssets/js/leshanArea'
import textModal from '@/components/text-modal' // 显示标题完整信息
import {
  projectType,
  working,
  monthPlanPie1,
  projectTypeMoney,
  projectMove} from '@/echarts-data/city-management/economic-run/major-project'
const $ = window.jQuery
export default {
  components: {
    scrollTable,
    heartPanel,
    paginate,
    menuList,
    headComponen,
    textModal
  },
  data () {
    return {
      move: [{
        text: 'Aquamarine'
      }],
      showImg: 0,
      imgPath,
      HotColor: [],
      hotStep: 1, // 颜色间隔
      hotMin: 0,
      checkedValue: [], // panel 选中值
      panelIndex: 1, // panel默认激活下标
      activeIndex: 0,
      leftMiddleIndex: 0,
      timer: null,
      // 地图撒点数据集
      makersList: [],
      // “挂图作战”项目基本情况
      survey: [],
      // 已开工项目
      start: [],
      startShow: false,
      // 视频监控列表
      video: [],
      videoShow: false,
      nowPage: 1,
      nowPage1: 1,
      videoDetailShow: false,
      videoDetail: {},
      // 推荐机制
      mechanism: [],
      // 项目进度基本情况
      schedule: [],
      // 选中地图区域
      mapDetailShow: false,
      mapView: '市中区',
      type: '',
      mapData: {},
      selectedEventId: '',
      // 详细内容
      workDetail: {},
      workShow: false,
      titleBuild: '', // 建设批次标题
      // 左边-中选项
      leftMiddle: [
        {name: '项目数', value: '01'},
        {name: '投资金额', value: '02'}
      ],
      typeActive: '01',
      // 模拟panel
      panelBig: false,
      // panelList: [],
      disasterList: [],
      ids: [], // 项目类型选中ID
      columnProject: [
        {name: '项目名称', width: '2.2rem', dataIndex: 'zd06003'},
        {name: '建设批次', width: '1.2rem', dataIndex: 'zd06005'},
        {name: '总投资 (万元)', dataIndex: 'zd06009'},
        {name: '本年度计划投资 (万元)', dataIndex: 'zd06010'},
        {name: '指挥长', width: '1.2rem', dataIndex: 'zd06011'},
        {name: '牵头单位', dataIndex: 'zd06012'}
      ],
      mbNum: 0, // 目标个数
      monryNum: 0, // 投资金额
      hotMapColors: [],
      legends: [
        {name: '总投资金额', active: true, type: 'bar', flag: '02', key: 'money1'},
        {name: '2020计划投资', active: true, type: 'bar', flag: '03', key: 'money2'},
        {name: '2020完成投资', active: true, type: 'bar', flag: '04', key: 'money3'},
        {name: '计划投资占比', active: true, type: 'line', key: 'percentage1'},
        {name: '完成投资占比', active: true, type: 'line', key: 'percentage2'}
      ],
      // 项目类型
      projectActive: 0, // 选中项目分类
      histogram: [],
      qxTimer: null,
      qxPosition: {},
      qxActiveIndex: -1, // 轮询区县位置
      mouseData: {
        total: 0
      },
      // 项目基本情况 --- 搜索关键字
      searchKey: '',
      showSearch: false
    }
  },
  mounted () {
    try {
      let that = this
      setTimeout(() => {
        window._m.redirectDimenionFn(function (name) {
          that.mapView = name
          // 获取地图区县统计数据
          that.mapInfo()
          // 获取地图点位数据
          // that.pointData()
        }, true)
      }, 100)
      setTimeout(() => {
        // 重置右键操作
        window._m.rightClick(function () {
          // that.mapDetailShow = true
          that.workShow = false
          that.panelBig = false
          that.makersList = []
          that.selectedEventId = ''
          // 开始轮询
          that.handleMove()
        })
        // 加载热力图
        this.handleHotMap()
      }, 2000)
    } catch (e) {
      console.log(e)
    }
    this.querySurvey()
    this.queryAnalysis('01')
    this.handleGetDataByTime()
    // this.mapInfo()
    moveDiv('major-move')
    moveDiv('major-move1')
  },
  methods: {
    handleSearchTable () {
      let searchKey = this.searchKey
      if (!this.showSearch) {
        this.showSearch = true
      } else if (this.searchKey.length) {
        this.showSearch = true
      } else {
        this.showSearch = false
      }
      if (this.showSearch && this.searchKey.length) {
        this.schedule = []
        majorApis.QUERY_PROJECT_SITUATION(this, {name: searchKey}).then(re => {
          if (re.data.serviceSuccess) {
            this.schedule = re.data.data.schedule
          } else {
            console.log(re.data.errors)
          }
        })
      }
    },
    handleCloseDetail () {
      this.workShow = false
      this.handleMove(true)
    },
    handleCloseProject () {
      this.mapDetailShow = false
    },
    handleClassProject (item, index) {
      this.projectActive = index
      let type = item.type || ''
      this.type = type
      this.mapInfo(type, true)
    },
    handleClearTime () {
      if (this.qxTimer) {
        clearInterval(this.qxTimer)
      }
    },
    handleMove (rightNow) {
      this.handleClearTime()
      this.handleGetDataByTime(rightNow)
    },
    // 点击项目类型情况Legend
    handleLegend (ind) {
      if (ind === 3 && ind === 4) {
        return
      }
      this.legends.map((re, index) => {
        if (index === ind) {
          re.active = !re.active
        }
      })
      let t = ''
      if (this.legends[0].active) {
        t = '02'
      } else if (this.legends[1].active) {
        t = '03'
      } else {
        t = '04'
      }
      this.queryAnalysis(t)
    },
    // 获取表格&list接口数据
    querySurvey () {
      majorApis.PEOJECT_QUERY_SURVEY(this).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data
          this.survey = data.survey
          this.start = data.start
          this.video = data.video
          this.mechanism = data.mechanism
          this.schedule = data.schedule
        } else {
          console.log(re.data.errors)
        }
      })
    },
    showPage () {
      // this.showIframe4 = true
      openThirdPage('http://182.147.98.223:3353/login')
    },
    // 获取echart图形接口数据
    queryAnalysis (type) {
      let t = ''
      if (type === '01') {
        t = '01'
      } else if (this.legends[0].active) {
        t = '02'
      } else if (this.legends[1].active) {
        t = '03'
      } else {
        t = '04'
      }
      majorApis.PEOJECT_QUERY_ANALYSIS(this, {type: t}).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data
          // 项目类型情况
          if (this.typeActive === '01') {
            let yMax = Math.ceil(data.type.number[0] / 10) * 10
            this.$set(data.type, 'yMax', yMax)
            echarts.init(document.getElementById('project-type')).setOption(projectType(data.type), {notMerge: true})
          } else {
            this.legends.forEach((item, index) => {
              let key = item.key
              if (!item.active) {
                delete data.type[key]
              }
            })
            echarts.init(document.getElementById('project-type')).setOption(projectTypeMoney(data.type), {notMerge: true})
          }
          // 项目开工完成情况
          let project = echarts.init(document.getElementById('natural-effect'))
          console.log('data.start', data)
          let total = 0
          data.start.data.forEach((item, index) => {
            total += item
          })
          this.mouseData.total = total
          project.setOption(working(data.start))
          // 投资完成情况
          echarts.init(document.getElementById('over-money')).setOption(monthPlanPie1(data.complete.money))
          this.monryNum = data.complete.money
          let that = this
          // ecahrt点击事件 ---- 开工情况
          project.on('click', function (data) {
            let id = data.data.id
            that.titleBuild = data.data.name
            majorApis.PEOJECT_QUERY_ENTRY_NAMES(that, {type: id}).then(re => {
              if (re.data.serviceSuccess) {
                that.start = re.data.data.details
                that.startShow = true
              } else {
                console.log(re.data.errors)
              }
            })
          })
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 点击地图获取点位数据
    /* pointData () {
      if (this.ids === '' && this.ids.length) {
        return
      }
      majorApis.PEOJECT_POINT_DATA(this, {name: this.mapView, ids: this.ids}).then(re => {
        if (re.data.serviceSuccess) {
          let k = this.mapView
          this.makersList = randomPostion[k].creatHeatMap(re.data.data.pointData)
          window._m.addMakers(this.makersList, (flag) => {
            this.showImg = flag
          })
        } else {
          console.log(re.data.errors)
        }
      })
    }, */
    // 点击地图获取区县数据
    mapInfo (type = '', isClass) {
      majorApis.PEOJECT_QUERY_MAPINFO(this, {name: this.mapView, type: type}).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data
          this.mapData = data.map
          // this.panelList = data.map.type
          this.mapDetailShow = true
          this.histogram = data.map.histogram
          // 面板定位
          let d = areaQx[this.mapView]
          let scenePosition = window._m.Cesium.Cartesian3.fromDegrees(+d.lon, +d.lat, 1)
          let p = window._m.Cesium.SceneTransforms.wgs84ToWindowCoordinates(window._m.scene, scenePosition, new window._m.Cesium.Cartesian2())
          this.qxPosition = p
          this.mapDetailShow = true
          if (!isClass) {
            this.projectActive = 0
          }
          if (this.mapData.name.length) {
            this.nowPage1 = 1
          } else {
            this.nowPage1 = 0
          }
          // let _this = this
          this.$nextTick(() => {
            let mychart = echarts.init(document.getElementById('chart-box'))
            mychart.setOption(projectMove(data.map.histogram))
            mychart.off('click')
            mychart.on('click', (params) => {
              this.queryProjectNum(params.name)
            })
          })
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 点击左边的柱子图获取项目个数
    queryProjectNum (name) {
      let params = {
        name: this.mapView,
        type: this.type,
        xmlx: name
      }
      majorApis.queryMapClickNames(this, params).then(re => {
        if (re.data.serviceSuccess) {
          this.mapData.name = re.data.data.name
        }
      })
    },
    // 点击点位获取项目详情数据
    queryDetails (id) {
      majorApis.PEOJECT_QUERY_DETAILS(this, {id: id}).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data
          this.workDetail = data.details
          this.workShow = true
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 点击区域后的列表展示
    handleMaker (item) {
      this.selectedEventId = item.id
      this.queryDetails(item.id)
      // 飞向3D
      this.handleEnterMap(this.mapView, item)
    },
    // 点击地图Maker展示详细信息
    handleClickMaker (id, item) {
      if (item) {
        this.handleEnterMap(item.zd06002, item)
      }
      this.selectedEventId = id
      this.queryDetails(id)
    },
    // 项目类型情况
    handleChangeType (value) {
      this.typeActive = value
      this.queryAnalysis(value)
    },
    // 点击查看vedio详情
    handleVideoDetail (index) {
      this.videoDetail = this.video[index]
    },
    // 切换panel选中下标
    handlePanelActive (index) {
      this.panelIndex = index
    },
    // 切换list
    navClick (data) {
      console.log(data)
    },
    // 点击菜单
    handleClickMenu (data) {
      console.log(data)
    },
    // 多选
    /* handleSelect (id, index) {
      let copy = this.panelList
      let ids = []
      copy.map((re, ind) => {
        if (index === ind) {
          re.checked = !re.checked
        }
        if (re.checked) {
          ids.push(re.zd06006_id)
        }
      })
      this.panelList = copy
      this.ids = ids.toString()
      // this.pointData()
    }, */
    // 页数移动
    handleChange (page) {
      this.nowPage1 = page
    },
    // 热力图颜色分类
    mapColor (data) {
      let min = 999
      let max = 0
      data.map(re => {
        min = min > re.value ? re.value : min
        max = max > re.value ? max : re.value
      })
      let step = Math.ceil(((max - min) / this.hotStep)) + 1
      this.hotMin = min
      this.HotColor = new GradientColor('#006cd2', '#54f1ff', step).init()
    },
    // 热力图
    handleHotMap () {
      majorApis.PEOJECT_QUERY_HEATMAP(this).then(re => {
        if (re.data.serviceSuccess) {
          let mapData = re.data.data.heatMap
          this.mapColor(mapData)
          // 热力图渲染
          let entities = window._m.areaEntities
          for (let i = 0; i < entities.length; i++) {
            let entity = entities[i]
            for (let j = 0; j < mapData.length; j++) {
              if (mapData[j].name === entity._name) {
                let index = ~~((mapData[j].value - this.hotMin) / this.hotStep)
                let c = this.HotColor[index]
                entity.polygon.outline = true
                entity.polygon.outlineColor = window._m.Cesium.Color.fromCssColorString('rgba(255,255,255,.8)')
                entity.polygon.outlineWidth = 10
                entity.polygon.height = 1000
                entity.polygon.material = window._m.Cesium.Color.fromCssColorString(c)
                break
              }
            }
          }
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 轮询各大区县
    handleGetDataByTime (rightNow) {
      let qx = ['市中区', '峨边彝族自治县', '金口河区', '沙湾区', '峨眉山市', '夹江县', '井研县', '五通桥区', '犍为县', '沐川县', '马边彝族自治县']
      if (rightNow) {
        this.qxActiveIndex = this.qxActiveIndex < 0 ? 0 : this.qxActiveIndex
        this.mapView = qx[this.qxActiveIndex]
        this.mapInfo()
      }
      this.qxTimer = setInterval(() => {
        if (this.qxActiveIndex >= 10) {
          this.qxActiveIndex = 0
        } else {
          this.qxActiveIndex++
        }
        this.mapView = qx[this.qxActiveIndex]
        this.mapInfo()
      }, 10000)
    },
    // 点击项目名称进3D地图
    handleEnterMap (name, item) {
      let d = areaQx[name]
      let position = [{
        lon: d.lon,
        lat: d.lat,
        field01: item.field01,
        field02: item.field02,
        id: 'event-project',
        projectId: item.id
      }]
      this.makersList = position
      window._m.addMakers(this.makersList, (flag) => {
        this.showImg = flag
      })
      // window._m.getSouthPointByDistance({lon: d.lon, lat: d.lat})
      // 3d界面停止轮询
      this.handleClearTime()
      this.mapDetailShow = false
    },
    // 鼠标移入显示标题
    showTooltip (e) {
      this.$refs.textModal.showTooltip(e)
    },
    hideTooltip () {
      this.$refs.textModal.hideTooltip()
    }
  },
  beforeDestroy () {
    // 重置右键
    window._m.rightClick()
    // 重置地图
    let entities = window._m.areaEntities
    for (let i = 0; i < entities.length; i++) {
      let entity = entities[i]
      entity.polygon.outline = false
      entity.polygon.material = window._m.Cesium.Color.fromCssColorString('rgba(60,126,113, 0.01)')
    }
    if (this.qxTimer) {
      clearInterval(this.qxTimer)
    }
    // 解绑移动事件
    $('#major-move').off()
    $('#major-move1').off()
  }
}
</script>
<style lang="scss" scoped>
@import '../../../components/date-title.scss';
  .main-message-1{
    position: absolute;
    right: 11rem;
    bottom: .5rem;
    z-index: 9;
    color: #fff;
    > div {
      display: flex;
      margin-top: .15rem;
      align-items: center;
      .coco{
        display: inline-block;
        width: .18rem;
        height: .21rem;
        margin-right: .15rem;
      }
      &:nth-child(2){
        .coco{
          background: #0F84DA;
        }
      }
      &:nth-child(3){
        .coco{
          background: #21A1E3;
        }
      }
      &:nth-child(4){
        .coco{
          background: #33BCEE;
        }
      }
      &:nth-child(5){
        .coco{
          background: #45D9F7;
        }
      }
      &:nth-child(6){
        .coco{
          background: #54F1FF;
        }
      }
    }
  }
  .global-data-title{
    color:$date-title-color!important;
    display:inline-block;
    font-size:$date-title-size;
  }
  .ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .medical-resource-container{
    background: #000;
    overflow: hidden;
  }
  .g-menu-box {
    position: absolute;
    left: 10.5rem;
    top: 9rem;
    z-index: 9999;
  }
  .header-bg {
    position: absolute;
    width: 20.40rem;
    height: 1.80rem;
    line-height: 1.20rem;
    font-family: simhei;
    text-align: center;
    color: #FFFFFF;
    font-size: 0.32rem;
    background: url('../../../assets/city-management/common-service/medical-resource/head-bg.png') no-repeat;
    background-size:100% 100%;
    left:11.4rem;
    z-index: 99;
  }
  .left-content{
    position: absolute;
    top: .4rem;
    left: .16rem;
    z-index: 99;
    box-sizing: border-box;
    width: 10.14rem;
    height: 10rem;
    .left-content-top{
      box-sizing: border-box;
      width: 100%;
      height: 2.7rem;
      background: url('../../../assets/city-management/common-service/medical-resource/panle-02.png') no-repeat;
      background-size: 100% 103%;
      padding: .5rem .2rem 0 .55rem;
      .major-left-top{
        display: flex;
        > div{
          flex: 1;
          display: flex;
          margin-top: .2rem;
          img {
            width: .82rem;
            height: 1.17rem;
            margin-right: .1rem;
            vertical-align: middle;
          }
          .major-left-item{
            p{
              font-size: .19rem;
              font-weight: bold;
              font-style: italic;
              color: #DFE2FD;
            }
            div{
              margin-top: .03rem;
              background: url("../../../assets/city-management/economic-run/three-base/num-bk.png") no-repeat;
              background-size: 100% 118%;
              background-position: 50% 50%;
              height: .65rem;
              line-height: .65rem;
              font-size: .17rem;
              font-weight: bold;
              font-style: italic;
              color: #fff;
              span{
                font-size: .3rem;
                font-family: Impact;
                font-weight: bold;
                font-style: italic;
                color: #FCE62F;
              }
            }
          }
        }
      }
    }
    .left-content-middle{
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: 3.4rem;
      background: url('../../../assets/city-management/common-service/medical-resource/panle-02.png') no-repeat;
      background-size: 100% 103%;
      padding: .5rem .2rem 0 .55rem;
      .choose-box{
        display: flex;
        width: 3rem;
        justify-content: space-between;
        font-size: .16rem;
        span{
          display: block;
          height: .3rem;
          line-height: .3rem;
          text-align: center;
          flex: 1;
          color: #fff;
          border-radius: .3rem;
          margin: 0 .1rem;
          cursor: pointer;
        }
        .chosse-active{
          background: #0084FF;
        }
        .chosse-normal{
          background: #343A5C;
        }
      }
      #project-type{
        height: 2.2rem;
      }
      .echart-legend{
        position: absolute;
        top: .9rem;
        left: 1.5rem;
        display: flex;
        font-size: .16rem;
        .bar{
          display: inline-block;
          width: .14rem;
          height: .14rem;
          margin-right: .05rem;
          border-radius: .02rem;
        }
        .line{
          display: inline-block;
          width: .14rem;
          height: .04rem;
          margin-right: .05rem;
          vertical-align: middle;
        }
        .legend-active{
          color: #fff;
          margin-left: .1rem;
          cursor: pointer;
          &:nth-child(1){
            .bar{
              background: #007EFB;
            }
          }
          &:nth-child(2){
            .bar{
              background: #FBE62F;
            }
          }
          &:nth-child(3){
            .bar{
              background: #07EA62;
            }
          }
          &:nth-child(4){
            .line{
              background: #F95800;
            }
          }
          &:nth-child(5){
            .line{
              background: #805DFF;
            }
          }
          .type-act{
            color: #fff;
          }
          .type-nor{
            color: gray;
          }
          .type-nor2{
           background:gray
          }
        }
      }
    }
    .left-content-bottom{
      box-sizing: border-box;
      width: 100%;
      height: 4.2rem;
      background: url('../../../assets/city-management/common-service/medical-resource/panle-02.png') no-repeat;
      background-size: 100% 103%;
      padding: .6rem .2rem 0 .55rem;
      .natural-content{
        display: flex;
        height: 3rem;
        .natural-effect{
          flex: 1;
          position:relative;
        }
        #natural-effect{
          height: 2.5rem;
        }
        .effect-content{
          flex: 1;
          .effect-content-top{
            height: 2.5rem;
            display: flex;
            align-items: center;
            >div{
              position: relative;
              flex: 1;
              #over-num{
                height: 2rem;
              }
              #over-money{
                height: 2rem;
              }
            }
          }
          .weight-font{
            font-size: .26rem;
            font-family: Impact;
            font-weight: bold;
            font-style: italic;
            color: #FCE62F;
          }
          .weight-font-1{
            color: #DFE2FD;
            font-size: .17rem;
            width: 80%;
            margin: 0 auto;
          }
        }
      }
    }
  }
  .right-content{
    position: absolute;
    right: .54rem;
    top: .4rem;
    height: 10rem;
    width: 10.15rem;
    z-index: 9;
    .right-content-top{
      box-sizing: border-box;
      width: 100%;
      height: 4.7rem;
      background: url('../../../assets/city-management/common-service/medical-resource/panle-02.png') no-repeat;
      background-size: 100% 103%;
      padding: .5rem .2rem 0 .55rem;
      .disaster-change{
        height: 3.4rem;
        .g-move-content{
          float: left;
          display: flex;
          width: 47%;
          margin-left: 2%;
          margin-top: .15rem;
          box-sizing: border-box;
        }
        .g-move-content-rank{
          width: .5rem;
          height: .45rem;
          background: url("../../../assets/city-management/economic-run/major-project/rankbg.png") no-repeat;
          background-size: 100% 100%;
          background-position: 50% 0%;
          color: #fff;
          font-size: .2rem;
          text-align: center;
          line-height: .4rem;
          margin-right: .05rem;
          margin-top: -.05rem;
        }
        .g-move-content-item{
          position: relative;
          flex: 1;
          font-weight: 400;
          color: #fff;
          overflow: hidden;
          .icon-tran{
            position: absolute;
            left: 0;
            top: 0;
            display: block;
            border-top: .175rem transparent solid;
            border-right: .05rem rgba(20,140,232,.38) solid;
            border-bottom: .18rem rgba(20,140,232,.38) solid;
            border-left: .05rem transparent solid;
          }
        }
        .g-move-content-title{
          position: relative;
          background: rgba(20,140,232,.38);
          height: .35rem;
          line-height: .35rem;
          font-size: .17rem;
          margin-left: .1rem;
          padding-left: .15rem;
          @extend .ellipsis;
        }
        .g-move-content-text{
          position: relative;
          font-size: .15rem;
          padding-left: .25rem;
          margin-top: .1rem;
          @extend .ellipsis;
          &::before{
            content: '';
            position: absolute;
            top: .1rem;
            left: .1rem;
            display: block;
            width: .06rem;
            height: .06rem;
            background: #FFD200;
          }
        }
      }
    }
    .right-content-bottom{
      box-sizing: border-box;
      width: 100%;
      height: 5.6rem;
      background: url('../../../assets/city-management/common-service/medical-resource/panle-02.png') no-repeat;
      background-size: 100% 103%;
      padding: .6rem .2rem 0 .55rem;
      .natural-monitor{
        margin-top: .1rem;
      }
      .right-serach{
        display: flex;
        align-items: center;
        margin-right: .2rem;
        height: .35rem;
        overflow: hidden;
        .search-enter-active, .search-leave-active{
          transition: width .5s
        }
        .search-enter, .search-leave-active {
          width: 0rem;
        }
        input{
          height: .3rem;
          width: 2.4rem;
          padding-left: .15rem;
          background: rgba(0,45,113,0.58);
          color: #fff;
          border: .02rem solid #298FF7;
          border-radius: .175rem 0 0 .175rem;
          padding-right: .2rem;
          font-size: .15rem;
        }
        .after-search{
          width: .35rem;
          height: .35rem;
          background: #298FF7;
          border-radius: .05rem;
          text-align: center;
          transition: border,width ease .5s;
          img{
            cursor: pointer;
            width: .2rem;
            height: .2rem;
            margin-top: .075rem;
          }
        }
        .after-search-active{
          width: .55rem;
          border-radius: 0 .175rem .175rem 0;
        }
      }
    }
  }
  .title-model{
    display: flex;
    justify-content: space-between;
    .title{
      font-size: .24rem;
      padding-left: .15rem;
      padding-bottom: .2rem;
      margin-left: -.1rem;
      color: #fff;
      background: url("../../../assets/city-management/economic-run/three-base/title-icon.png") no-repeat;
      background-position: -0rem .25rem;
      background-size: .87rem .25rem;
      span{
        font-size: .13rem;
        font-weight: 400;
        color: #fff;
        margin-left: .1rem;
      }
      .right-add{
        position:absolute;
        right:0.6rem;
        border-bottom: 1px solid #60CFF5;
        display:inline-block;
        top:0.6rem;
        color:rgba(96,207,245,1);
        font-size:0.2rem;
        font-weight: bold;
        padding-right:0.2rem;
        cursor: pointer;
        background:url('../../../assets/entry/right.png') no-repeat 3.24rem center/0.11rem 0.18rem;
      }
    }
    .select{
      margin-right: .1rem;
      background: #034073;
      border-radius: .1rem;
      height: .3rem;
      line-height: .3rem;
      border: 2px solid #2368B1;
      padding: 0 .1rem;
      font-size: .16rem;
      font-weight: 400;
      color: #fff;
    }
  }
  .natural-panel{
    position: absolute;
    bottom: .5rem;
    right: 11rem;
    z-index: 100;
    left:auto;
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
        background: url("../../../assets/common/top.png") no-repeat center;

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
  .g-panel-right{
    padding: .2rem 0;
    position: absolute;
    top: .31rem;
    left: 1rem;
    width: 4.5rem;
    height: 85%;
    > p {
      margin-bottom: .1rem;
      font-size: .17rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #fff;
      letter-spacing: 1px;
      margin-left: .3rem;
    }
    > div{
      position: relative;
      width: 33%;
      display: inline-block;
      text-align: center;
      margin-bottom: .1rem;
      img {
        width: .5rem;
        height: .5rem;
      }
      p{
        font-size: .16rem;
        font-weight: bold;
        font-style: italic;
        color: #9BE9FF;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .check{
        position: absolute;
        right: .18rem;
        top: 0;
      }
      .sy-check{
        display: block;
        width: .16rem;
        height: .16rem;
        line-height: .16rem;
        cursor: pointer;
        position: absolute;
        border:  1px solid #9BE9FF;
        top: .06rem;
        left: .06rem;
      }
      input[type=checkbox]{
        visibility: hidden;
      }
      .check-box:checked +label:before{
        display: block;
        content: "\2714";
        text-align: center;
        font-size: .16rem;
        color: #000;
        background: #FFCF06;
      }
    }
  }
  .area-title{
    position: relative;
    font-size: .2rem;
    color: rgba(255,255,255,1);
    padding-left: .25rem;
    margin-left: .2rem;
    margin-top: .1rem;
    &:after{
      content: '';
      position: absolute;
      top: .1rem;
      left: .04rem;
      width: .13rem;
      height: .13rem;
      background: rgba(0,126,251,1);
    }
    &:before{
      box-sizing: border-box;
      content: '';
      position: absolute;
      top: .05rem;
      left: 0;
      width: .13rem;
      height: .13rem;
      border: 2px solid rgba(253,209,0,1);
    }
  }
  .work-project{
    position: absolute;
    left: 10.5rem;
    bottom: .8em;
    z-index: 100;
    box-sizing: border-box;
    width: 4.2rem;
    height: 5rem;
    z-index: 10000;
    background: url("../../../assets/city-management/common-service/education-resource/small-kuang.png") no-repeat;
    background-size: 100% 100%;
    color: #fff;
    padding: .4rem .2rem .2rem;
    .work-project-close{
      display: flex;
      justify-content: space-between;
      font-size: .24rem;
      img{
        width: .24rem;
        height: .24rem;
        cursor: pointer;
      }
    }
    .table-header,
    .table-body-item{
      display: flex;
      margin-top: .2rem;
      height: .45rem;
      line-height: .45rem;
      background: rgba(20,79,187,.78);
      text-align: center;
      font-size: 0.16rem;
      .header-rank{
        width: 1rem;
      }
      .header-project{
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
      }
    }
    .table-body-item{
      margin: 0;
      &:nth-child(odd){
        background: transparent;
      }
      &:nth-child(even){
        background: rgba(7,69,182,.3);
      }
    }
    .table-body{
      height: 3.4rem;
      overflow-y: auto;
      .header-rank{
        width: 1rem;
      }
    }
  }
  .work-maker{
    cursor: move;
    position: absolute;
    left: 13.5rem;
    top: 2rem;
    z-index: 100;
    width: 8.4rem;
    height: 5rem;
    background: url("../../../assets/city-management/common-service/education-resource/small-kuang.png") no-repeat;
    background-size: 100% 100%;
    color: #fff;
    padding: .3rem .2rem .2rem;
    .work-maker-title{
      display: flex;
      font-size: .22rem;
      font-weight: bold;
      margin-bottom: .1rem;
      justify-content: space-between;
      padding: 0 .1rem;
      img{
        margin-top: .08rem;
        width: .2rem;
        height: .2rem;
        cursor: pointer;
      }
    }
    .work-maker-status{
      display: flex;
      > div{
        flex: 1;
        font-size: .18rem;
        font-weight: bold;
        .g-content{
          width: 70%;
          margin: 0 auto;
          border-radius: .2rem;
          text-align: center;
          cursor: pointer;
          padding: .03rem .1rem;
        }
        .g-content-active{
          background: #0084FF;
        }
        .work-maker-weight{
          font-size: .22rem;
          font-weight: bold;
          font-style: italic;
          color: #FCE62F;
          margin-right: .08rem;
        }
      }
    }
    .chart-content{
      display: flex;
      margin-top: .25rem;
      height: 3.8rem;
      #chart-box{
        flex: 3;
        border-right: .01rem dashed #0084FF;
      }
      .work-maker-content{
        box-sizing: border-box;
        flex: 2;
        padding-left: .2rem;
        padding-right: .15rem;
        font-size: .15rem;
        .work-maker-content-top{
          height: 3.5rem;
          overflow-y: auto;
          > div{
            box-sizing: border-box;
            position: relative;
            height: .5rem;
            border: 2px solid transparent;
            display: flex;
            cursor: pointer;
            padding: 0 .03rem 0 .1rem;
            &:nth-child(even){
              background: rgba(0,132,255,.3);
            }
            .work-maker-content-index{
              display: flex;
              align-items: center;
              margin-right: .08rem;
              color: #FCE62F;
              font-size: .17rem;
            }
            .work-maker-content-name{
              flex: 1;
              display: flex;
              align-items: center;
              font-size: .15rem;
            }
          }
          .active {
            background: rgba(7,69,182,1) !important;
            border: 2px solid rgba(0,171,251,1);
          }
        }
        .work-maker-content-bottom{
          margin-top: .15rem;
          .paginate-jkl{
            font: italic .17rem bold;
            margin-top: -.02rem;
          }
        }
      }
    }

  }
  .work-video{
    position: absolute;
    top: 5rem;
    left: 14rem;
    z-index: 100;
    width: 7rem;
    height: 4.8rem;
    background: url("../../../assets/city-management/common-service/education-resource/small-kuang.png") no-repeat;
    background-size: 100% 100%;
    color: #fff;
    box-sizing: border-box;
    padding: .4rem .4rem .2rem;
    .work-project-close{
      display: flex;
      justify-content: space-between;
      font-size: .24rem;
      img {
        width: .25rem;
        height: .25rem;
        cursor: pointer;
      }
    }
    .work-project-title{
      display: flex;
      justify-content: space-between;
      font-size: .18rem;
      margin: .15rem 0;
      span:nth-child(2){
        color: #FCE62F;
      }
    }
    .work-project-address{
      color: #DFE2FD;
      margin-bottom: .1rem;
      img{
        vertical-align: middle;
        width: .17rem;
        height: .23rem;
        margin: 0 .1rem;
      }
    }
    .work-project-video{
      position: relative;
      height: 3rem;
      .video{
        height: 100%;
      }
      .time{
        position: absolute;
        bottom: 0;
        left: .2rem;
      }
    }
  }
  .user-btn{
    position: absolute;
    top: 1.2rem;
    right: 11rem;
    z-index: 100;
    color: #fff;
    font-size: .2rem;
    text-align: center;
    .user-btn-monitor {
      width: 1.73rem;
      height: .4rem;
      background: url("../../../assets/city-management/economic-run/three-base/select-bk.png") no-repeat;
      background-size: 100% 100%;
      line-height: .35rem;
      &::before{
        content: '';
        display: block;
        position: absolute;
        top: .1rem;
        right: .25rem;
        border: .07rem solid transparent;
        border-right-color: #fff;
      }
      &::after{
        content: '';
        display: block;
        position: absolute;
        top: .1rem;
        right: .15rem;
        border: .07rem solid transparent;
        border-right-color: #fff;
      }
    }
    .user-btn-view {
      margin-top: .25rem;
      width: 1.73rem;
      height: .4rem;
      background: url("../../../assets/city-management/economic-run/three-base/select-act.png") no-repeat;
      background-size: 100% 100%;
      line-height: .35rem;
    }
  }
  .work-video-list{
    position: absolute;
    top: 1.2rem;
    right: 12.8rem;
    z-index: 100;
    width: 5rem;
    height: 5.5rem;
    background: url("../../../assets/city-management/common-service/education-resource/small-kuang.png") no-repeat;
    background-size: 100% 100%;
    color: #fff;
    box-sizing: border-box;
    padding: .4rem .4rem .2rem;
    font-size: .24rem;
    .list-content{
      height: 4.3rem;
      > div{
        position: relative;
        float: left;
        box-sizing: border-box;
        width: 1.9rem;
        margin-left: 2%;
        height: 1.24rem;
        background: red;
        margin-top: .2rem;
        &:nth-child(even){
          margin-left: .2rem;
        }
        .video-message{
          position: absolute;
          width: 100%;
          left: 0;
          bottom: .1rem;
          color: #fff;
          font-size: .16rem;
          text-align: center;
          @extend .ellipsis;
        }
        video{
          width: 100%;
        }
      }
    }
    .nothing{
      height: 4.3rem;
      text-align: center;
      line-height: 4.3rem;
      color: #fff;
      font-size: .3rem;
    }
  }
  .work-detail-message{
    position: absolute;
    left: 40%;
    top: 20%;
    z-index: 100;
    width: 5.6rem;
    background: url("../../../assets/city-management/common-service/education-resource/small-kuang.png") no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    padding: .2rem .2rem .4rem .2rem;
    cursor: move;
    .top{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: .2rem;
      >div{
        span:nth-child(1){
          font-size: .24rem;
          color: #fff;
          margin-right: .18rem;
        }
        span:nth-child(2){
          font-size: .17rem;
          color: #FCE62F;
        }
      }
      img{
        width: .25rem;
        height: .25rem;
        cursor: pointer;
      }
    }
    .content{
      margin-top: .15rem;
      color: #fff;
      font-size: .17rem;
      letter-spacing: 2px;
      img{
        float: left;
        width: 1.83rem;
        height: 1.25rem;
        margin-right: .15rem;
      }
      &:after{
        content: "";
        display: block;
        width: 0;
        clear: both;
      }
    }
    .message{
      color: #fff;
      font-size: .17rem;
      >div{
        margin-top: .15rem;
        padding: 0 .2rem;
        span:nth-child(2){
          font-weight: bold;
          font-style: italic;
          color: #FCE62F;
        }
      }
      .first{
        display: flex;
        justify-content: space-between;
        >div{
          flex: 1;
        }
      }
    }
    .list{
      font-size: .17rem;
      color: #fff;
      box-sizing: border-box;
      padding-left: .4rem;
      padding-right: .3rem;
      height: 2.5rem;
      overflow-y: auto;
      > div{
        position: relative;
        margin-top: .15rem;
        > div{
          margin-top: .1rem;
          color: #FCE62F;
          padding: .15rem;
          box-shadow: 0 0 .12rem 5px rgba(25,108,185,.8) inset;
        }
        &::before{
          content: '';
          display: block;
          width: .2rem;
          height: .2rem;
          background: url("../../../assets/common/timel-node.png") no-repeat;
          background-size: 100% 100%;
          position: absolute;
          top: 0.02rem;
          left: -.25rem;
        }
        &::after{
          content: '';
          display: block;
          width: 2px;
          height: calc(100% + .1rem);
          background: #00ABFB;
          position: absolute;
          top: .1rem;
          left: -.16rem;
        }
        &:nth-last-child(1){
          &:after{
            width: 0;
          }
        }
      }
    }
  }
  .panel-content{
    position: absolute;
    bottom: .3rem;
    left: 10.5rem;
  }
  // maker样式
  .makers{
    position: absolute;
    z-index: 99;
    cursor: pointer;
    .makers-pat{
      position: relative;
    }
    .maker-outside{
      position: absolute;
      left: 0;
      top: 0;
      width: 1.6rem;
      height: 1.6rem;
    }
    .maker-inside{
      position: absolute;
      left: .5rem;
      top: .3rem;
      width: .6rem;
      height: .6rem;
      z-index: 3;
    }
  }
  .lgend-icon[name='bar']{
    width:.14rem;
    height:.14rem;
    display: inline-block;
  }
  .lgend-icon[name='line']{
    width:.14rem;
    height:.04rem;
    display: inline-block;
  }
  .g-add-message{
    position: absolute;
    left: 23%;
    top: 55%;
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
  /*.left-content,*/
  /*.right-content{*/
    /*> div{*/
      /*.global-data-title{*/
        /*&:hover{*/
          /*color: #9be9fc !important;*/
        /*}*/
      /*}*/
    /*}*/
  /*}*/
</style>
