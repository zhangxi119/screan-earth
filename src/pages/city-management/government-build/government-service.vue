<!--
 * @Descripttion: 政府服务
 * @Author: chengqiyu
 * @Date: 2020-03-3
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-11 21:35:47
 -->
<template>
  <div class="medical-resource-container">
    <!-- <div class="header-bg">政务服务</div> -->
    <head-component name="政务服务"></head-component>
    <div class="left-content">
      <div class="left-content-top">
        <div class="hover-div">
          <div class="title-model">
            <div class="title hover-color">总体情况<span class="global-data-title">（截至2020年3月）</span></div>
          </div>
          <div class="base-list">
            <div class="base-list-single" v-for="(item,index) in baseCondition" :key="index">
              <div class="base-list-single-title">
                <div>{{item.name}}</div>
              </div>
              <template v-if="item.name==='业务受理总量'">
                <div
                  class="base-list-single-value"
                  :class="{active:isShowDialog_1}"
                  @click="renderChart()"
                >
                  <div class="vl">{{parseFloat(item.value).toLocaleString()}}</div>
                  <div class="unit">{{index|handleUnit}}</div>
                </div>
              </template>
              <template v-else-if="item.name==='业务办结总量'">
                <div
                  class="base-list-single-value"
                  :class="{active:isShowDialog_2}"
                  @click="renderChart2()"
                >
                  <div class="vl">{{parseFloat(item.value).toLocaleString()}}</div>
                  <div class="unit">{{index|handleUnit}}</div>
                </div>
              </template>
              <template v-else>
                <div class="base-list-single-value">
                  <div class="vl">{{parseFloat(item.value).toLocaleString()}}</div>
                  <div class="unit">{{index|handleUnit}}</div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="left-content-bottom hover-div">
        <div class="title-model">
          <div class="title hover-color">事项目录情况<span class="global-data-title">（截至2019年）</span></div>
        </div>
        <div class="plan-area">
          <div class="plan-area-top">
            <div class="power-classify">
              <div class="area-title hover-color">行政权力事项分类情况</div>
              <div id="area-classify-echart"></div>
              <div id="classify-allnum">
                <p>{{allEvent}}</p>
                <div>
                  <span>事项</span>
                  <span>（项）</span>
                </div>
              </div>
            </div>
            <div class="transaction">
              <div class="area-title hover-color">事项办理深度情况</div>
              <!-- <div id="area-transaction-echart"></div> -->
              <div class="change-echart">
                <div>
                  <img src="@/assets/city-management/common-service/medical-resource/countOne.png" />
                  <p class="change-text">
                    {{this.zeroChange.once}}
                    <span>项</span>
                  </p>
                  <p class="change-title">最多跑一次</p>
                </div>
                <div>
                  <img src="@/assets/city-management/common-service/medical-resource/zero.png" />
                  <p class="change-text">
                    {{this.zeroChange.zero}}
                    <span>项</span>
                  </p>
                  <p class="change-title">全程网办</p>
                </div>
              </div>
            </div>
          </div>
          <div class="plan-area-bottom">
            <div class="legal-top">
              <div class="area-title hover-color">高频事项浏览量TOP6</div>
              <div id="area-legal-echart">
                <div class="legal-left">
                  <div
                    v-for="(item,index) in corporateMatters"
                    v-if="index < 3"
                    class="rank-singe"
                    :key="index"
                  >
                    <div class="rank-title" :class="'rank-title'+index">
                      <span>TOP</span>
                      <span>{{index+1}}.</span>
                    </div>
                    <div
                      class="rank-text"
                      @mouseenter="showTooltip($event)"
                      @mouseleave="hideTooltip"
                    >{{item.zw04002}}</div>
                    <div class="rank-value">
                      <span>----</span>
                      {{parseFloat(item.zw04003).toLocaleString()}}
                      <span
                        class="rank-unit"
                      >次</span>
                    </div>
                  </div>
                </div>
                <div class="legal-right">
                  <div
                    v-for="(item,index) in corporateMatters"
                    v-if="index >= 3"
                    class="rank-singe"
                    :key="index"
                  >
                    <div class="rank-title" :class="'rank-title'+index">
                      <span>TOP</span>
                      <span>{{index+1}}.</span>
                    </div>
                    <div
                      class="rank-text"
                      @mouseenter="showTooltip($event)"
                      @mouseleave="hideTooltip"
                    >{{item.zw04002}}</div>
                    <div class="rank-value">
                      <span>----</span>
                      {{parseFloat(item.zw04003).toLocaleString()}}
                      <span
                        class="rank-unit"
                      >次</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-top-panle hover-div">
      <div class="panle-title hover-color">事件办理情况<span class="global-data-title">（截至2020年3月）</span></div>
      <div class="right-echarts-01">
        <div class="monitoring-left">
          <div>
            <div class="monitoring-left-title monitoring-left-title-1">超时件:</div>
            <div class="monitoring-left-value">
              <div v-for="(item, index) in superviseSituation1" :key="index">{{item}}</div>
              <div class="monitor-unit">件</div>
            </div>
          </div>
          <!-- <div>
            <div class="monitoring-left-title monitoring-left-title-2">预警件:</div>
            <div class="monitoring-left-value">
              <div v-for="(item, index) in superviseSituation2" :key="index">{{item}}</div>
              <div class="monitor-unit">件</div>
            </div>
          </div>
          <div>
            <div class="monitoring-left-title monitoring-left-title-3">督办件:</div>
            <div class="monitoring-left-value">
              <div v-for="(item, index) in superviseSituation3" :key="index">{{item}}</div>
              <div class="monitor-unit">件</div>
            </div>
          </div>-->
        </div>
        <div class="event-left-echart" id="event-left-echart"></div>
        <!-- <div class="monitoring-right" id="monitoring-right"></div> -->
      </div>
    </div>
    <div class="right-bottom-panle hover-div">
      <div class="panle-title hover-color">各区县事件办理情况<span class="global-data-title">（截至2020年3月）</span></div>
      <div class="right-echarts-02">
        <div class="event-power">
          <div class="event-power-left">
            <!-- <div class="event-left-echart" id="event-left-echart"></div> -->
            <div class="monitoring-right" id="monitoring-right"></div>
          </div>
          <!-- <div class="event-power-right">
            <div class="event-right-echart" id="event-right-echart"></div>
          </div>-->
        </div>
      </div>
    </div>
    <div class="right-bottom-panle-2 hover-div">
      <div class="panle-title hover-color">部门办理数量TOP6<span class="global-data-title">（截至2020年3月）</span></div>
      <div class="event-power">
        <div class="department-rank">
          <div class="area-title-content">
            <div class="legal-left">
              <div
                v-for="(item,index) in departmentHandling"
                class="rank-singe rank-sing-1"
                v-if="index < 3"
                :key="index"
              >
                <div class="rank-title" :class="'rank-title'+index">
                  <span>TOP</span>
                  <span>{{index+1}}.</span>
                </div>
                <div
                  class="rank-text"
                  @mouseenter="showTooltip($event)"
                  @mouseleave="hideTooltip"
                >{{item.zw09002}}</div>
                <div class="rank-value">
                  <span>----</span>
                  {{parseFloat(item.zw09003).toLocaleString()}}
                  <span
                    class="rank-unit"
                  >件</span>
                </div>
              </div>
            </div>
            <div class="legal-right">
              <div
                v-for="(item,index) in departmentHandling"
                class="rank-singe rank-sing-1"
                v-if="index >= 3"
                :key="index"
              >
                <div class="rank-title" :class="'rank-title'+index">
                  <span>TOP</span>
                  <span>{{index+1}}.</span>
                </div>
                <div
                  class="rank-text"
                  @mouseenter="showTooltip($event)"
                  @mouseleave="hideTooltip"
                >{{item.zw09002}}</div>
                <div class="rank-value">
                  <span>----</span>
                  {{parseFloat(item.zw09003).toLocaleString()}}
                  <span
                    class="rank-unit"
                  >件</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="title-tooltip" class="right-bottom-tooltip">{{tooltipContent}}</div>
    <!--<div class="center-select">-->
    <!--<heart-select-->
    <!--titleName="全部区域"-->
    <!--:data="selectList"-->
    <!--icon="map"-->
    <!--:width="1.93"-->
    <!--:height=".45"></heart-select>-->
    <!--<heart-select-->
    <!--titleName="事项"-->
    <!--:data="selectListHot"-->
    <!--icon="good"-->
    <!--:width="1.73"-->
    <!--:height=".45"-->
    <!--status="active">-->
    <!--</heart-select>-->
    <!--</div>-->
    <div class="panel-content">
      <main-list></main-list>
    </div>
    <!-- <div
      class="area-show"
      id="map-event-pie"
      @mouseenter="handleClearTime"
      @mouseleave="handleMove"
      :style="{left: qxPosition.x+'px', top: qxPosition.y+'px'}"
      :class="{acitvArea:mouseData.isMouse}">
      <p>
        <span>{{mouseData.name}}总体情况</span>
        <span>
          事项数：<em>{{parseFloat(+mouseData.count).toLocaleString()}}</em>件
        </span>
      </p>
      <div id="area-pie" :class="{iClass: mouseData.count}"></div>

    </div>-->
    <template v-if="areaMapData.length > 0 && isShowMiniMarker  === 0">
      <div
        class="market-marker-container"
        :id="item.id"
        :style="{zIndex:item.code===activeQx.code?100:60}"
        v-for="(item,index) in  areaMapData"
        :key="index"
      >
        <div class="marker" @click="mapPointClick(item)"></div>
        <div class="other" v-show="item.code===activeQx.code"  @mouseover="handleClearTime" @mouseleave="handleMove">
          <img src="../../../assets/common/event-icon.png" />
          <div class="marker-detail" >
            <p class="title">{{item.qx}}总体情况</p>
            <!-- <img
              src="../../../assets/city-management/market-supervision/img/close-icon@2x.png"
              @click="closeMarkerDetail(item)"
              alt
            /> -->
            <p class="total">事项数：<big>{{item.total}}</big>件</p>
            <div class="info-list">
              <div class="item">
                <img src="../../../assets/city-management/goverment-service/request-icon.png" alt />
                <p>
                  {{item.sql}}
                  <small>件</small>
                </p>
                <p>申请数</p>
              </div>
              <div class="item">
                <img src="../../../assets/city-management/goverment-service/jieshou-cion.png" alt />
                <p>
                  {{item.sll}}
                  <small>件</small>
                </p>
                <p>受理数</p>
              </div>
              <div class="item">
                <img src="../../../assets/city-management/goverment-service/commit-icon.png" alt />
                <p>
                  {{item.bjl}}
                  <small>件</small>
                </p>
                <p>办结数</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="dialog" v-show="isShowDialog_1">
      <div class="area-title hover-color">
        业务受理总量：
        <span>
          {{recepNum}}
          <small>万</small>
        </span>
      </div>
      <div class="close-btn" @click="isShowDialog_1=false"></div>
      <div class="dialog-body">
        <div class="chart-container" id="blueChart1"></div>
      </div>
    </div>
    <div class="dialog second" v-show="isShowDialog_2">
      <div class="area-title hover-color">
        业务办结总量：
        <span>
          {{handleNum}}
          <small>万</small>
        </span>
        <span style="margin-left:.2rem">
          <small style="color:#fff">满意率</small> 80%
        </span>
      </div>
      <div class="close-btn" @click="isShowDialog_2=false"></div>
      <div class="dialog-body">
        <div class="chart-container" id="blueChart2"></div>
      </div>
    </div>
    <div class="dialog third" v-show="isShowDialog_3">
      <div class="area-title hover-color">
        最多跑一次：
        <span>
          {{moreOneSum}}
          <small>万</small>
        </span>
      </div>
      <div class="close-btn" @click="isShowDialog_3=false"></div>
      <div class="dialog-body">
        <div class="chart-container" id="rainBowChart1"></div>
      </div>
    </div>
    <div class="dialog forth" v-show="isShowDialog_4">
      <div class="area-title hover-color">
        全程网办：
        <span>
          {{zeroSum}}
          <small>万</small>
        </span>
      </div>
      <div class="close-btn" @click="isShowDialog_4=false"></div>
      <div class="dialog-body">
        <div class="chart-container" id="rainBowChart2"></div>
      </div>
    </div>
  </div>
</template>
<script>
import * as governmentApis from '@/api/city-management/government-build'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/title'
import heartSelect from '@/components/select.vue'
import mainList from '@/components/menu.vue'
import headComponent from '@/components/head-component'
// import { mapPointsEasy } from '../../../../static/CesiumAssets/js/leshanArea'
// eventDeep
import {
  power,
  monitor,
  eventPower,
  // areaShow,
  blueOpt,
  rainbowOpt
} from '../../../echarts-data/city-management/government-build/government-service'

export default {
  components: {
    heartSelect,
    mainList,
    headComponent
  },
  data () {
    return {
      animate: true,
      timer: null,
      selectList: [
        { name: '全部区域' },
        { name: '总部经济区' },
        { name: '五通桥基地' },
        { name: '犍为基地' },
        { name: '夹江基地' }
      ],
      selectListHot: [
        { name: '事项' },
        { name: '申请' },
        { name: '受理' },
        { name: '办结' },
        { name: '工程建设' }
      ],
      qxPosition: {},
      // 总体情况
      baseCondition: [],
      // 区县总体情况
      districtTotal: [],
      // 电子监察总体情况
      superviseSituation1: '', // 督办件
      superviseSituation2: '', // 超时件
      superviseSituation3: '', // 预警件
      // 法人事项办理top3
      corporateMatters: [],
      // 区县办件量top3
      districtHandling: [],
      // 部门办件量top3
      departmentHandling: [],
      // 个人事项办件top3
      personalMatters: [],
      // 服务网点信息
      serviceNetwork: [],
      // 行政权力事项分类情况
      allEvent: 0,
      // 鼠标移入的位置
      mouseData: {
        isMouse: false,
        count: 0,
        data: {},
        name: '',
        dom: {}
      },
      qxTimer: null,
      qxActiveIndex: 0,
      // 地图maker
      makersDatas: [],
      zeroChange: {},
      isShowDialog_1: false,
      isShowDialog_2: false,
      isShowDialog_3: false,
      isShowDialog_4: false,
      tooltipContent: '',
      recepNum: 0, // 弹框业务受理总量
      handleNum: 0, // 弹框业务办结总量
      moreOneSum: 0, // 弹框最多跑一次总量
      zeroSum: 0, // 弹框办事零跑腿总量
      myChart1: null,
      myChart2: null,
      /// 地图数组
      areaLocation: {
        市中区: { lon: 103.731909, lat: 29.579459 },
        峨边县: { lon: 103.17144759803993, lat: 29.092320222621108 },
        金口河: { lon: 103.0498171172697, lat: 29.340730491460505 },
        沙湾区: { lon: 103.53837912661115, lat: 29.324989427901677 },
        峨眉山: { lon: 103.3608351100639, lat: 29.48108970080883 },
        夹江县: { lon: 103.578479, lat: 29.744034 },
        井研县: { lon: 104.078593, lat: 29.654289 },
        五通桥: { lon: 103.823375, lat: 29.41306 },
        犍为县: { lon: 103.955651, lat: 29.213968 },
        沐川县: { lon: 103.907969, lat: 28.962066 },
        马边县: { lon: 103.552671, lat: 28.841894 }
      },
      areaMapData: [], // 地图数组
      activeQx: { bh: '' },
      isShowMiniMarker: 0
    }
  },
  mounted () {
    // this.mouseData.dom = echarts.init(document.getElementById('area-pie'))
    this.initEcharts()
    this.queryInfos()
    this.queryCharts()
    this.handleSearch()
    this.handleGetDataByTime()
    this.queryEventHandle('03')
    this.queryEventHandle('04')
    this.queryHandlingDeptht('02')
    this.queryHandlingDeptht('03')
  },
  methods: {
    handleClearTime () {
      if (this.qxTimer) {
        clearInterval(this.qxTimer)
      }
    },
    handleMove () {
      this.handleClearTime()
      if (this.isShowMiniMarker === 0) {
        this.handleGetDataByTime()
      }
    },
    // 查询区域
    handleSearch (name) {
      governmentApis.queryDistrictEvent(this, { name: name }).then(re => {
        re = re.data
        if (re.serviceSuccess) {
          this.areaMapData = re.data.queryDistrictEvent
          if (this.areaMapData.length > 0) {
            this.areaMapData = this.areaMapData.map((item, i) => {
              item.lon = this.areaLocation[item.qx].lon
              item.lat = this.areaLocation[item.qx].lat
              item.id = 'area_center_gs_' + i
              item.showTextFlag = false
              return item
            })
            window._m.addMakers(this.areaMapData, data => {
              this.isShowMiniMarker = data
            })
          }
        }
      })
    },
    // 数字转字符
    numberToString (data) {
      let template = '00000'
      let d = data + ''
      let s = template.replace(/\d/g, (value, index) => {
        let flag = index - 5 + d.length
        return flag >= 0 ? d[flag] : '0'
      })
      return s
    },
    // 获取非图表信息
    queryInfos () {
      governmentApis.queryInfos(this).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data
          // 总体情况
          this.baseCondition = data.total
          // 行政权力事项分类情况
          let p1 = []
          let p2 = []
          let all = 0
          data.powerClassification.map(re => {
            p1.push(re.zw02001)
            p2.push({ name: re.zw02001, value: re.zw02002 })
            all += re.zw02002
          })
          this.allEvent = parseFloat(all).toLocaleString()
          echarts
            .init(document.getElementById('area-classify-echart'))
            .setOption(power(p1, p2))
          // 高频事项点击浏览量TOP6
          this.corporateMatters = data.matters
          // 个人事项办件top3
          this.personalMatters = data.personalMatters
          // 部门办理数量TOP6
          this.departmentHandling = data.departmentHandling
          // 区县办件量TOP3
          this.districtHandling = data.districtHandling
          // 电子监察总体情况
          this.superviseSituation3 = this.numberToString(
            data.superviseSituation.zw06003
          ) // 督办件
          this.superviseSituation1 = this.numberToString(
            data.superviseSituation.zw06001
          ) // 超时件
          this.superviseSituation2 = this.numberToString(
            data.superviseSituation.zw06002
          ) // 预警件
          // 事项办理深度情况  TODO
          // echarts.init(document.getElementById('event-right-echart')).setOption(eventDeep(data.handlingPeople))
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 获取图表信息
    queryCharts () {
      let _this = this
      governmentApis.queryCharts(this).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data
          // 事项办理深度情况
          data.handlingDepth.xAxis.forEach(function (item, index) {
            let getData = data.handlingDepth.data[index].toString()
            let reg = getData.replace(/(?=(?!\b)(\d{3})+$)/g, ',')
            if (item === '最多跑一次') {
              _this.$set(_this.zeroChange, 'once', reg)
            } else if (item === '办事零跑腿') {
              _this.$set(_this.zeroChange, 'zero', reg)
            }
          })
          // echarts.init(document.getElementById('area-transaction-echart')).setOption(things(deal))
          // 电子监察柱状图
          echarts
            .init(document.getElementById('monitoring-right'))
            .setOption(monitor(data.districtSituation))
          // 事件办理情况
          echarts
            .init(document.getElementById('event-left-echart'))
            .setOption(eventPower(data.EventHandling))
        } else {
          console.log(re.data.errors)
        }
      })
    },
    /// / 查询业务办理情况月情况变化
    queryEventHandle (type) {
      governmentApis.QUERY_EVENT_HANDLE(this, { type }).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          let list = res.data.queryEventHandle
          blueOpt.xAxis[0].data = list.map(item => {
            return item.zw07001
          })
          blueOpt.series[0].data = list.map(item => {
            return item.num / 10000
          })
          var sum = 0
          for (let i in list) {
            sum += list[i].num
          }
          if (type === '03') {
            this.myChart1 = echarts.init(document.querySelector('#blueChart1'))
            this.myChart1.setOption(blueOpt)
            this.recepNum = (sum / 10000).toFixed(2)
          } else if (type === '04') {
            this.myChart2 = echarts.init(document.querySelector('#blueChart2'))
            this.myChart2.setOption(blueOpt)
            this.handleNum = (sum / 10000).toFixed(2)
          }
        }
      })
    },
    /// 查询事项办理深度top
    queryHandlingDeptht (type) {
      governmentApis.QUERY_HANDLING_DEPTHT(this, { type }).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          let list = res.data.queryDistrictEvent
          rainbowOpt.xAxis[0].data = list.map(item => {
            return item.zw03001
          })
          rainbowOpt.series[0].data = list.map(item => {
            return item.zw03003
          })
          if (type === '02') {
            echarts
              .init(document.querySelector('#rainBowChart1'))
              .setOption(rainbowOpt)
          } else if (type === '03') {
            echarts
              .init(document.querySelector('#rainBowChart2'))
              .setOption(rainbowOpt)
          }
        }
      })
    },
    initEcharts () {
      // echarts.init(document.getElementById('event-right-echart')).setOption(eventDeep)
    },
    // 轮询各大区县
    handleGetDataByTime () {
      console.log('handleGetDataByTime', this.qxActiveIndex)
      this.qxTimer = setInterval(() => {
        if (this.qxActiveIndex >= 10) {
          this.qxActiveIndex = 0
        } else {
          this.qxActiveIndex++
        }
        this.activeQx = this.areaMapData[this.qxActiveIndex]
        // this.handleSearch(qx[this.qxActiveIndex])
      }, 10000)
    },
    mapPointClick (item) {
      this.activeQx = item
      // this.isShowMarkerDetail = true
      // this.areaMapData.map((i, index) => {
      //   if (i.bh === item.bh) {
      //     let a = i
      //     a.showTextFlag = !a.showTextFlag
      //     this.areaMapData.splice(index, 1, a)
      //   }
      // })
    },
    // 鼠标移入显示标题
    showTooltip (e) {
      let tooltip = document.getElementById('title-tooltip')
      tooltip.innerText = e.target.innerText
      tooltip.style.left = e.pageX + 'px'
      tooltip.style.top = e.pageY - 80 + 'px'
      tooltip.style.display = 'inline'
    },
    hideTooltip () {
      let tooltip = document.getElementById('title-tooltip')
      tooltip.style.display = 'none'
    },
    renderChart () {
      this.isShowDialog_1 = true
      debugger
      this.$nextTick(() => {
        this.myChart1.resize()
      })
    },
    renderChart2 () {
      this.isShowDialog_2 = true
      this.$nextTick(() => {
        this.myChart2.resize()
      })
    },
    closeMarkerDetail (item) {
      this.activeQx = {code: ''}
    }
  },
  beforeDestroy () {
    // 清除定时器
    clearInterval(this.qxTimer)
    window._m.clear()
  },
  filters: {
    handleUnit (index) {
      let unit = ''
      if (index === 8 || index === 9) {
        unit = '万件'
      } else if (index === 0) {
        unit = '万项'
      } else {
        unit = '万件'
      }
      return unit
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
.market-marker-container {
  position: absolute;
  // top: 2rem;
  z-index: 1;
  // left: 28rem;
  .marker {
    width: 0.4rem;
    height: 0.4rem;
    background: url("../../../assets/common/event-line.png");
    background-size: 100% 100%;
    cursor: pointer;
    margin-left: -0.2rem;
    top: -0.2rem;
  }
  .other {
    position: absolute;
    top: -1.5rem;
    display: flex;
    left: -0.15rem;
    align-items: center;
    img {
      width: 1rem;
      height: 1rem;
    }
    .marker-detail {
      width: 4.72rem;
      height: 2.88rem;
      background: url("../../../assets/city-management/goverment-service/detail-bg.png");
      background-size: 100% 100%;
      padding: 0.2rem 0.15rem;
      box-sizing: border-box;
      position: relative;
      .title {
        font-size: 0.21rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
      .total{
        position: absolute;
        right: .4rem;
        top: .3rem;
        font-size:.17rem;
        font-family:Source Han Sans CN;
        font-weight:500;
        color:rgba(254,254,254,1);
        big{
          font-size:.28rem;
          font-family:Impact;
          font-weight:400;
          color:rgba(252,230,47,1);
        }
      }
      img {
        width: 0.24rem;
        height: 0.24rem;
        position: absolute;
        right: 0.2rem;
        top: 0.2rem;
      }
      .info-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: .25rem;
        .item {
          flex: 1;
          text-align: center;
          img {
            width: .8rem;
            height: 1rem;
            position:static;
            margin-bottom: -.2rem;
          }
          p:nth-of-type(1) {
            margin-top: .15rem;
            width: 100%;
            height: 100%;
            background: url("../../../assets/city-management/common-service/social-insurance/num-kuang.png")
              no-repeat center;
            font-size: 0.28rem;
            font-family: Impact;
            font-weight: bold;
            font-style: italic;
            color: rgba(252, 230, 47, 1);
            small {
              font-size: 0.17rem;
              font-family: Source Han Sans CN;
              font-weight: bold;
              font-style: italic;
              color: rgba(223, 226, 253, 1);
            }
          }
          p:nth-of-type(2) {
             margin-top: .2rem;
            font-size: 0.19rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            font-style: italic;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
      .open {
        width: 1.11rem;
        height: 0.3rem;
        background: rgba(11, 46, 109, 0.58);
        border: 0.01rem solid rgba(69, 143, 239, 1);
        font-size: 0.17rem;
        border-radius: 0.15rem;
        text-align: center;
        color: #fff;
        margin: 0 auto;
        margin-top: 0.2rem;
      }
    }
  }
}
.maker-img {
  display: block;
  // width: 1.5rem;
  // height: 0.7rem;
  cursor: pointer;
  img {
    width: 0.7rem;
    height: 0.7rem;
    margin: 0 auto;
  }
}
.chart-container {
  width: 90%;
  height: 2.8rem;
  margin: 0 auto;
  margin-top: 0.2rem;
}
.dialog {
  width: 7.54rem;
  height: 3.79rem;
  background: url("../../../assets/city-management/goverment-service/dialog-bg.png");
  background-size: 100% 100%;
  position: absolute;
  top: 1.13rem;
  left: 10.73rem;
  z-index: 20;
  padding: 0.2rem;
  box-sizing: border-box;
  &.second {
    top: 1.13rem;
    left: 18.665rem;
  }
  &.third {
    top: 5.26rem;
    left: 10.73rem;
  }
  &.forth {
    top: 5.26rem;
    left: 18.665rem;
  }
  .area-title {
  }
  .close-btn {
    width: 0.3rem;
    height: 0.3rem;
    background: url("../../../assets/city-management/market-supervision/img/close-icon@2x.png")
      no-repeat center;
    background-size: 100% 100%;
    position: absolute;
    right: 0.2rem;
    top: 0.2rem;
  }
}
#monitoring-right {
  height: 2.5rem;
  width: 100%;
  margin-top: -0.2rem;
}
#event-left-echart {
  width: 100%;
  height: 2rem;
  margin-top: 0.1rem;
}
.left-content {
  position: absolute;
  top: 0.4rem;
  left: 0;
  z-index: 99;
  box-sizing: border-box;
  width: 10.5rem;
  height: 10rem;
  .left-content-top {
    box-sizing: border-box;
    width: 100%;
    height: 4.37rem;
    background: url("../../../assets/city-management/common-service/medical-resource/panle-02.png")
      no-repeat;
    background-size: 100% 100%;
    padding: 0.5rem 0.2rem 0 0.55rem;
  }
  .left-content-bottom {
    box-sizing: border-box;
    width: 100%;
    height: 6.01rem;
    background: url("../../../assets/city-management/common-service/medical-resource/panle-02.png")
      no-repeat;
    background-size: 100% 100%;
    padding: 0.6rem 0.2rem 0 0.55rem;
    .plan-area {
      height: calc(100% - 1rem);
      .plan-area-top {
        display: flex;
        > div {
          flex: 1;
        }
        .power-classify {
          position: relative;
        }
        #classify-allnum {
          position: absolute;
          top: 1rem;
          left: 0.37rem;
          width: 1.2rem;
          height: 0.8rem;
          text-align: center;
          p {
            margin-bottom: 0.05rem;
            font-size: 0.2rem;
            font-weight: bold;
            color: #fff;
            font-family: Impact;
            background-image: -webkit-linear-gradient(bottom, #f9fbff, #57d2ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          span:nth-child(1) {
            font-size: 0.15rem;
            font-weight: bold;
            font-style: italic;
            color: #dfe2fd;
          }
          span:nth-child(2) {
            font-size: 0.14rem;
            font-style: italic;
            color: rgba(223, 226, 253, 0.72);
          }
        }
      }
      .plan-area-bottom {
        display: flex;
        > div {
          flex: 1;
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
  #area-legal-echart {
    display: flex;
    margin-left: 0.13rem;
    > div {
      width: 47%;
    }
    .legal-right {
      margin-left: 3%;
    }
  }
  // #area-transaction-echart{
  //   background: url("../../../assets/city-management/economic-run/three-base/bar-back.png") no-repeat;
  //   background-size: 90% 45%;
  //   background-position: 46% 74%;
  // }
}
.title-model {
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 0.24rem;
    padding-left: 0.15rem;
    padding-bottom: 0.2rem;
    margin-left: -0.1rem;
    color: #fff;
    background: url("../../../assets/city-management/economic-run/three-base/title-icon.png")
      no-repeat;
    background-position: -0rem 0.2rem;
    background-size: 0.87rem 0.25rem;
  }
}
.base-list {
  box-sizing: border-box;
  padding: 0 0.1rem;
  .base-list-single {
    display: inline-block;
    width: 25%;
    font-size: 0.19rem;
    font-weight: bold;
    font-style: italic;
    color: rgba(223, 226, 253, 1);
    margin-top: 0.08rem;
  }
  .base-list-single-title {
    background: url("../../../assets/city-management/economic-run/three-base/rect.png")
      no-repeat;
    background-size: 0.23rem 0.26rem;
    padding-left: 0.3rem;
    margin: 0.11rem 0;
  }
  .base-list-single-value {
    display: flex;
    align-items: center;
    height: 0.85rem;
    background: url("../../../assets/city-management/economic-run/three-base/num-bk.png")
      no-repeat;
    background-size: 100% 100%;
    justify-content: center;
    &.active {
      .vl {
        cursor: pointer;
        color: #d65115;
      }
    }
    .vl {
      font-size: 0.34rem;
      font-weight: bold;
      font-style: italic;
      color: rgba(252, 230, 47, 1);
      font-family: Impact;
    }
    .unit {
      font-size: 0.16rem;
      font-style: italic;
      color: rgba(255, 255, 255, 1);
      margin-left: 0.05rem;
      margin-top: 0.08rem;
    }
  }
}
.area-title {
  position: relative;
  left: 0.2rem;
  top: 0.1rem;
  font-size: 0.2rem;
  color: rgba(255, 255, 255, 1);
  padding-left: 0.25rem;
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
    left: 0;
    width: 0.13rem;
    height: 0.13rem;
    border: 0.02rem solid rgba(253, 209, 0, 1);
  }
  span {
    color: #fce62f;
    font-size: 0.28rem;
    font-family: Source Han Sans CN;
    small {
      font-family: Source Han Sans CN;
      font-size: 0.17rem;
      font-weight: 500;
    }
  }
}
.rank-singe {
  display: flex;
  align-items: center;
  color: #fff;
  margin-top: 0.2rem;
  font-size: 0.18rem;
  font-family: Impact;
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
    position: relative;
    width: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 0.1rem;
  }
  .rank-value {
    display: flex;
    align-items: center;
    width: 1.7rem;
    font-size: 0.2rem;
    font-style: initial;
    font-weight: bold;
    background-image: -webkit-linear-gradient(bottom, #f9fbff, #57d2ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #bae5fb;
    justify-content: right;
    span {
      font-size: 0.12rem;
      letter-spacing: 0.05rem;
      margin: 0 0.05rem;
    }
    .rank-unit {
      font-size: 0.14rem;
      margin-top: 0.05rem;
    }
  }
  .rank-title {
    color: #61cdec;
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
.rank-sing-1 {
  margin-top: 0.15rem;
}
.area-title-content {
  display: flex;
  .legal-left {
    margin-left: 0.13rem;
    width: 46%;
  }
  .legal-right {
    width: 46%;
    margin-left: 3%;
  }
}
.monitoring-left {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.monitoring-right {
  width: 6.8rem;
}
.monitoring-left-title {
  // width: .73rem;
  height: 0.3rem;
  line-height: 0.28rem;
  font-size: 0.17rem;
  font-style: italic;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  padding-left: 0.08rem;
}
.monitoring-left-title-1 {
  color: #fce62f;
  // border: 2px solid #FCE62F;
}
.monitoring-left-title-2 {
  color: #e55711;
  //border: 2px solid #E55711;
}
.monitoring-left-title-3 {
  color: #00f3ff;
  //border: 2px solid #00F3FF;
}
.monitoring-left-value {
  display: flex;
  font-size: 0.35rem;
  color: #fff;
  align-items: flex-end;
  > div {
    font-family: "digital";
    width: 0.27rem;
    height: 0.34rem;
    text-align: center;
    line-height: 0.34rem;
    border: 2px solid #189ddb;
    background: rgba(6, 75, 178, 0.8);
    border-radius: 0.05rem;
    margin-left: 0.03rem;
    padding: 0.03rem;
    font-weight: bold;
  }
  .monitor-unit {
    font-weight: normal;
    font-family: Impact;
    width: 0.27rem;
    height: 0.27rem;
    line-height: 0.27rem;
    font-size: 0.2rem;
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
  overflow: hidden;
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
    background: url("../../../assets/city-management/common-service/medical-resource/panle-02.png")
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
      background: url("../../../assets/city-management/common-service/medical-resource/tilte-bg.png")
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
    width: 10.5rem;
    height: 4.57rem;
    right: 0.29rem;
    top: 0.24rem;
    z-index: 110;
    background: url("../../../assets/city-management/common-service/medical-resource/panle-03.png")
      no-repeat;
    background-size: 100% 100%;
    .right-echarts-01 {
      position: absolute;
      left: 6%;
      bottom: 0.6rem;
      width: 90%;
      height: 3rem;
      // display: flex;
    }
  }
  .right-bottom-panle-2 {
    position: absolute;
    width: 10.5rem;
    height: 2.6rem;
    right: 0.24rem;
    top: 8.2rem;
    z-index: 99;
    overflow: hidden;
    background: url("../../../assets/city-management/common-service/medical-resource/panle-03.png")
      no-repeat;
    background-size: 100% 100%;
    .panle-title {
      top: 0.3rem;
    }
    .event-power {
      width: 90%;
      margin: 0 auto;
      margin-top: 0.82rem;
      margin-left: 0.75rem;
    }
  }
  .right-bottom-tooltip {
    display: none;
    position: absolute;
    z-index: 100;
    font-size: 0.17rem;
    background-color: rgba(0, 53, 126, 0.74);
    color: #ffffff;
    border: 0.02rem solid #44aaf4;
    border-radius: 0.05rem;
    padding: 0.1rem 0.2rem;
  }
  .right-bottom-panle {
    position: absolute;
    width: 10.5rem;
    height: 3.6rem;
    right: 0.24rem;
    top: 4.6rem;
    z-index: 99;
    overflow: hidden;
    background: url("../../../assets/city-management/common-service/medical-resource/panle-04.png")
      no-repeat;
    background-size: 100% 100%;
    .panle-title {
      top: 0.2rem;
    }
    .right-echarts-02 {
      position: absolute;
      left: 6%;
      top: 1.1rem;
      width: 90%;
      height: 4.5rem;
      .event-power {
        display: flex;
        > div {
          flex: 1;
        }
        .event-left-echart,
        .event-right-echart {
          height: 2.3rem;
        }
        .department-rank {
          margin-top: 0.1rem;
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
      right: 0.2rem;
      top: 1rem;
      display: flex;
      flex-direction: column;
      .right-bottom-charts {
        flex: 1;
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
    background: url("../../../assets/city-management/common-service/medical-resource/head-bg.png")
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
    padding: 0.2rem 0.15rem;
    box-sizing: border-box;
    background: url("../../../assets/city-management/common-service/medical-resource/panle-title.png")
      no-repeat;
    background-position: 0.01rem 0.4rem;
    background-size: 0.87rem 0.25rem;
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
.maker-box {
  position: absolute;
  left: 20rem;
  top: 5rem;
  .name {
    font-size: 0.18rem;
    color: #ffffff;
    background: url("../../../assets/city-management/common-service/medical-resource/tilte-bg.png")
      no-repeat;
    background-size: 100% 100%;
    height: 0.36rem;
    text-align: center;
    padding: 0.05rem;
  }
  img {
    width: 0.94rem;
    height: 1.05rem;
  }
  .line {
    width: 0.04rem;
    height: 0.64rem;
    background: #d5602c;
    margin-left: 0.45rem;
    margin-top: -0.23rem;
  }
  .dot {
    width: 0.19rem;
    height: 0.13rem;
    background: rgba(213, 96, 44, 1);
    opacity: 0.9;
    border-radius: 50%;
    margin: auto;
  }
  .cricle {
    width: 0.75rem;
    height: 0.38rem;
    border: 0.02rem solid rgba(213, 96, 44, 1);
    opacity: 0.3;
    margin: -0.25rem auto 0 auto;
    border-radius: 50%;
    box-shadow: inset 0px 0px 5px 1px rgba(213, 96, 44, 1);
    animation: warn 1s infinite;
    .inner-cricle {
      width: 0.36rem;
      height: 0.2rem;
      border: 0.02rem solid rgba(213, 96, 44, 1);
      border-radius: 50%;
      margin: 0.05rem auto;
    }
    @keyframes warn {
      0% {
        transform: scale(0.4);
        opacity: 0;
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
}
.panel-content {
  position: absolute;
  bottom: 0.3rem;
  left: 10.5rem;
  z-index: 999;
}
.area-show {
  display: flex;
  height: 2.98rem;
  min-width: 4.75rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.2);
  flex-direction: column;
  font-family: Source Han Sans CN;
  background: url("../../../assets/city-management/common-service/social-insurance/addSocial.png")
    no-repeat center/100% 100%;
  z-index: 19;
  &.acitvArea {
    z-index: 1000;
    color: #fff;
    font-size: 0.22rem;
    text-align: center;
  }
  p {
    color: #fff;
    font-size: 0.22rem;
    padding: 0.39rem 0.22rem 0 0.22rem;
    line-height: 0.25rem;
    span:nth-child(1) {
      color: #fff;
      font-size: 0.22rem;
      font-weight: bold;
      margin-right: 0.5rem;
    }
    span:nth-child(2) {
      font-size: 0.17rem;
      float: right;
      color: rgba(254, 254, 254, 1);
      em {
        font-style: normal;
        font-size: 0.28rem;
        font-weight: bold;
        color: #fce62f;
        font-family: Impact;
      }
    }
  }
  #area-pie {
    flex: 1;
    z-index: -1;
    &.iClass {
      z-index: 1000;
    }
  }
  .noData {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    color: #fff;
    text-align: center;
    font-size: 0.4rem;
  }
}

.change-echart {
  display: flex;
  div {
    font-family: Source Han Sans CN;
    width: 50%;
    text-align: center;
    flex: 1;
    img {
      width: 0.82rem;
      margin-top: 0.2rem;
    }
    p {
      text-align: center;
      &.change-text {
        margin-top: -0.3rem;
        height: 0.72rem;
        line-height: 0.72rem;
        font-family: Impact;
        color: #fce62f;
        font-weight: bold;
        font-size: 0.31rem;
        font-style: italic;
        background: url("../../../assets/city-management/common-service/medical-resource/numbr2.png")
          no-repeat center/80% auto;
        span {
          font-size: 0.17rem;
          font-weight: bold;
          font-style: initial;
          color: rgba(223, 226, 253, 1);
        }
      }
      &.change-title {
        margin-top: 0.15rem;
        font-size: 0.19rem;
        font-weight: bold;
        font-style: italic;
        color: rgba(223, 226, 253, 1);
      }
    }
  }
}
  /*.hover-div{*/
  /*}*/
</style>
