<!--
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-17 10:33:04
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-06-05 11:14:47
 -->
<template>
  <div class="security-container">
    <!-- <div class="header-bg">安全态势公共卫生</div> -->
    <head-componen name="安全态势公共卫生"></head-componen>
    <!-- <div class="map-title">
      <p>{{geoMapTitle}}</p>
    </div>-->
    <div class="g-menu">
      <heart-menu></heart-menu>
    </div>
    <!-- <div class="g-page-nav">
      <div class="user-dos" @click="panelBig = !panelBig">
        <div class="legend">图例</div>
        <div class="icon"></div>
      </div>
      <operation-panel @select="operationPanelSelect" @clearAll="clearAllMarkers"  v-show="panelBig"></operation-panel>
    </div> -->
    <makers-common></makers-common>
    <div class="left-list">
      <div class="left-list-li">
        <div class="name">社会安全</div>
        <div class="number">
          {{overAllSituationList&&overAllSituationList.socialSum||0}}
          <span>起</span>
        </div>
      </div>
      <div class="left-list-li">
        <div class="name">公共卫生</div>
        <div class="number">
          {{overAllSituationList&&overAllSituationList.healthSum||0}}
          <span>起</span>
        </div>
      </div>
      <div class="left-list-li">
        <div class="name">安全生产</div>
        <div class="number">
          {{overAllSituationList&&overAllSituationList.proSum||0}}
          <span>起</span>
        </div>
      </div>
      <div class="left-list-li">
        <div class="name">自然灾害</div>
        <div class="number">
          {{overAllSituationList&&overAllSituationList.natureSum||0}}
          <span>起</span>
        </div>
      </div>
      <div class="left-list-li">
        <div class="name">总数</div>
        <div class="number">
          {{overAllSituationList&&overAllSituationList.sumAll||0}}
          <span>起</span>
        </div>
      </div>
    </div>
    <div class="main-left-top">
      <p class="g-title">近五年突发事件分布情况</p>
      <div class="radar-chart">
        <img
          class="radar-img"
          src="@/assets/city-management/market-supervision/market-subject/rada.png"
        />
        <div
          class="radar-title first"
          :class="{active:radarTitleActiveIndex==1}"
          @click="radarChange(1)"
        >自然灾害</div>
        <div
          class="radar-title second"
          :class="{active:radarTitleActiveIndex==2}"
          @click="radarChange(2)"
        >安全生产</div>
        <div
          class="radar-title third"
          :class="{active:radarTitleActiveIndex==3}"
          @click="radarChange(3)"
        >社会安全</div>
        <div
          class="radar-title forth"
          :class="{active:radarTitleActiveIndex==4}"
          @click="radarChange(4)"
        >公共卫生</div>
      </div>
      <div class="security-rate">
        <p>{{accidentRateObj.name}}</p>
        <div class="rate-progress-container">
          <div
            class="progress"
            v-if="accident5YearsMap"
            :style="{width:accidentRateObj.value/(accident5YearsMap.productionRate+accident5YearsMap.socialRate+accident5YearsMap.healthRate+accident5YearsMap.natureRate)*100+'%'}"
          ></div>
        </div>
        <p class="rate-desc">
          {{accidentRateObj.value}}
          <small>件</small>
        </p>
      </div>
    </div>
    <div class="main-left-center">
      <p class="g-title">近五年公共卫生事件影响TOP3类型</p>
      <div class="dialog-toggle-btn" @click="openHarzdDialog('')">
          <span>查看明细</span>
          <img src="../../../../assets/city-management/market-supervision/img/details-icon.png" />
        </div>
      <div v-if="accident5YearTop3List.length>0" class="health-event-list-container">
        <div class="health-event-list" v-for="(item,index) in accident5YearTop3List" :key="index">
          <p class="title">
            <span class="num">
              TOP
              <big>{{index+1}}</big>
            </span>
            <span class="name">{{item.name}}</span>
          </p>
          <div class="details">
            <div class="item">
              <p class="top">波及人口数</p>
              <p class="bottom">{{item.peoNum}}人</p>
            </div>
            <div class="item">
              <p class="top">发病数</p>
              <p class="bottom">{{item.illNum}}人</p>
            </div>
            <div class="item">
              <p class="top">死亡数</p>
              <p class="bottom">{{item.deathNum}}人</p>
            </div>
            <div class="item">
              <p class="top">首例发病时间</p>
              <p class="bottom">{{item.firstTime}}</p>
            </div>
          </div>
          <div class="halving-line"></div>
          <div class="details">
            <div class="item">
              <p class="top">报告地区</p>
              <p class="bottom">{{item.district}}</p>
            </div>
            <div class="item">
              <p class="top">报告单位</p>
              <p class="bottom">{{item.class}}</p>
            </div>
            <div class="item">
              <p class="top">事件分类</p>
              <p class="bottom">{{item.type}}</p>
            </div>
          </div>
        </div>
      </div>
      <p
        v-else
        style="    font-size: 0.3rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    font-style: italic;
    text-align:center;
    color: #ffd200;
    overflow: hidden;"
      >无数据</p>
    </div>
    <div class="main-left-bottom">
      <p class="g-title">近五年公共卫生事件影响TOP3区域</p>
      <div id="influenceAreaChart" class="influenceAreaChart">
        <!-- <img :src="influenceAreaImgs[districtIndex]" alt />
          <div class="influence_area_info" v-if="publicHealthDistrictList.length>0">
            <p v-for="(item,index) in  publicHealthDistrictList"  @click="influenceAreaClick(index)" :key="index">{{item.district}}</p>
        </div>-->
      </div>
      <img
        class="influenceAreaChart-arrow"
        :style="{bottom:arrowBottom+'rem'}"
        src="../../../../assets/emergency-command/overall-situation/public-health/arrow-icon.png"
        alt
      />
      <div class="deadetailed-description">
        <div class="item">
          <p>累计波及人口</p>
          <p>
            {{districtListInfo.peopleNum}}
            <span>人</span>
          </p>
        </div>
        <div class="item">
          <p>累计发病人口</p>
          <p>
            {{districtListInfo.attacknum}}
            <span>人</span>
          </p>
        </div>
        <div class="item">
          <p>累计死亡人口</p>
          <p>
            {{districtListInfo.deathNum}}
            <span>人</span>
          </p>
        </div>
      </div>
    </div>

    <div class="main-left-top main-right-top">
      <p class="g-title">各区县医疗机构数量 <span class="global-data-title" >（截至2020年3月）</span></p>
      <div id="medicalInstitutionChart"></div>
      <!-- <div class="select">
        <div contenteditable="false" @click="select2Click" class="select-input">
          {{activeYear2}}
          <img
            src="../../../../assets/emergency-command/overall-situation/societal-security/icon.png"
          />
        </div>
        <ul v-if="select2IsShow" class="select-list">
          <li
            v-for="(item,index) in  hpList"
            :style="{active:item.name==activeYear2}"
            :key="index"
            @click="selectItemClickFn2(item)"
          >{{item.name}}</li>
        </ul>
      </div>-->
    </div>
    <div class="main-left-center main-right-center">
      <p class="g-title">传染病定点医院床位统计</p>
      <div id="emergencyReservesChart"></div>
      <div class="select">
        <div contenteditable="false" @click="select1Click" class="select-input">
          {{activeYear1}}
          <img
            src="../../../../assets/emergency-command/overall-situation/societal-security/icon.png"
          />
        </div>
        <!-- <a>313</a> -->
        <template v-if="supplyCodes.length">
          <ul v-if="select1IsShow" class="select-list">
            <li
              v-for="(item,index) in  supplyCodes"
              :style="{active:item.code==activeYear1}"
              :key="index"
              @click="selectItemClickFn1(item)"
            >{{item.name}}</li>
          </ul>
        </template>
      </div>
    </div>
    <div class="main-left-bottom main-right-bottom">
      <p class="g-title">医护队伍人员构成<span class="global-data-title">（截至2019年）</span></p>
      <div id="staffCompositionChart"></div>
      <div class="staffCompositionChart-desc">
        <p>{{staffTotal}}</p>
        <p>
          总数
          <small>(人)</small>
        </p>
      </div>
    </div>
    <div class="g-nav-box">
      <select-other :data="menuList2"></select-other>
    </div>
    <div
      :id="item.id"
      class="maker-box"
      :style="{zIndex:item.showTextFlag?6:4}"
      :class="{d2:isShowMiniMarker===0,d3:isShowMiniMarker===1}"
      v-for="(item,index) in  mapMarkerList"
      :key="index"
    >
      <div class="marker" v-if="isShowMiniMarker===1 " @click="threeMarkerClick(item)">
        <img :src="imgPath+item.icon02" class="img-container" />
        <img :src="imgPath+item.icon01" alt class="inner-img" />
      </div>
      <div class="mini-maker" v-if="isShowMiniMarker===0">
        <img
          :src="imgPath+item.icon01"
          alt
          class="departBottom mini-maker-icon"
          @click="miniMarkerClick(item)"
        />
      </div>
      <div class="maker-text" v-if="item.showTextFlag&&isShowMiniMarker===1">
        <img src="../../../../assets/common/line2.png" alt class="line2" />
        <div class="marker-info-box">
          <div class="title">
            <p>事件详情</p>
            <img src="../../../../assets/common/close.png" @click="markerInfoClose(item)" />
          </div>
          <div class="content">
            <div class="desc">
              <span>{{(thingDetailsMap&&thingDetailsMap.time)||'无数据'}}</span>
              <span>{{(thingDetailsMap&&thingDetailsMap.district)||'无数据'}}</span>
              <span>{{(thingDetailsMap&&thingDetailsMap.type)||'无数据'}}</span>
            </div>
            <div class="loss">
              经济损失：
              <span>{{(thingDetailsMap&&thingDetailsMap.ecoNum)||'无数据'}}</span>
            </div>
            <div class="details">
              详细内容:
              <p>{{(thingDetailsMap&&thingDetailsMap.details)||'无数据'}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="harzd-dialog" v-show="isShowDialog">
      <p class="title">公共卫生</p>
      <img
        src="../../../../assets/city-management/market-supervision/img/close-icon@2x.png"
        class="close-icon"
        @click="closeHarzdDialog"
        alt
      />
      <div class="dialog-body">
        <div class="top">
          <div class="input-con select">
            <label for>分类：</label>
            <input type="text" class="input select" placeholder="类型" v-model="searchObj.name" />
            <img
              class="select-icon"
              @click="isShowTypeList=!isShowTypeList"
              src="../../../../assets/city-management/market-supervision/img/select-icon@2x.png"
              alt
            />
            <ul class="select-container" v-if="typeList.length>0" v-show="isShowTypeList">
              <li
                v-for="(item,index) in typeList"
                :key="index"
                @click="typeListSelect(item)"
                :class="{active:searchObj.name===item.zr03001}"
              >{{item.ws02009}}</li>
            </ul>
          </div>
          <div class="input-con select">
            <label for>区县：</label>
            <input type="text" class="input select" placeholder="请选择" v-model="searchObj.code" />
            <img
              class="select-icon"
              @click="isShowQxList=!isShowQxList"
              src="../../../../assets/city-management/market-supervision/img/select-icon@2x.png"
              alt
            />
            <ul class="select-container" v-if="typeList.length>0" v-show="isShowQxList">
              <li
                v-for="(item,index) in areaMapData"
                :key="'first_'+index"
                @click="qxListSelect(item)"
                :class="{active:searchObj.code===item.area_full}"
              >{{item.area_full}}</li>
            </ul>
          </div>
          <div class="input-con">
            <label for>时间：</label>
            <input type="text" class="input select" id="startDate" placeholder="年份-年份" />
            <img
              class="select-icon"
              src="../../../../assets/city-management/market-supervision/img/select-icon@2x.png"
              alt
            />
          </div>
          <a href="javascript:void(0);" class="btn primary" @click="doSearch">筛选</a>
        </div>
        <div class="bottom">
          <table class="data-table" style="margin-top:.2rem">
            <thead>
              <tr v-if="tableHeadConfig.length>0">
                <th
                  v-for="(item,index) in tableHeadConfig"
                  :key="index"
                  :style="{width:item.width}"
                >{{item.name}}</th>
              </tr>
            </thead>
          </table>
          <div class="data-table-body">
            <table class="data-table">
              <tbody>
                <template v-if="natureData.length>0">
                  <tr v-for="(x,y) in natureData" :key="y">
                    <td v-for="(m,n) in tableHeadConfig" :key="n" :style="{width:m.width}"  @mouseenter="n!==(tableHeadConfig.length-1)?showTooltip($event):''" @mouseleave="hideTooltip">
                      <template v-if="y===(natureData.length-1)">
                        <span style="color:#FCE62F">{{x[m.key]}}</span>
                      </template>
                      <template v-else>{{x[m.key]}}</template>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <template v-if="areaMapData.length > 0 && isShowMiniMarker  === 0">
      <div
        class="market-marker-container"
        :id="item.id"
        :style="{zIndex:item.area_full===searchObj.code?7:6}"
        v-for="(item,index) in  areaMapData"
        :key="'second_'+index"
      >
        <div class="marker" @click="mapPointClick(item)"></div>
        <div
          class="other"
          v-show="item.area_full===searchObj.code"
          @mouseover="handleClearTime"
          @mouseleave="handleMove"
        >
          <span class="close-btn" @click="openHarzdDialog(item.area_full)">>></span>
          <img src="../../../../assets/common/event-icon.png" />
          <div class="marker-detail">
            <p class="title">近五年公共卫生事件影响情况</p>
            <div class="info-list">
              <div class="item">
                <p>累计波及人口数</p>
                <p>
                  {{item.ws02004}}
                  <small>人</small>
                </p>
              </div>
              <div class="item">
                <p>累计发病数</p>
                <p>
                  {{item.ws02003}}
                  <small>人</small>
                </p>
              </div>
              <div class="item">
                <p>累计死亡数</p>
                <p>
                  {{item.ws02005}}
                  <small>人</small>
                </p>
              </div>
              <!-- <div class="item">
                <p>累计受灾乡镇</p>
                <p>
                  {{item.zr02003}}
                  <small>个</small>
                </p>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </template>
    <!-- 显示标题完整信息 -->
    <text-modal ref="textModal"></text-modal>
  </div>
</template>
<script>
import echarts from 'echarts'
import heartMenu from '@/components/menu'
import heartPanel from '@/components/heart-panel'
import selectOther from '@/components/select-other.vue'
import medicalInstitutionChart from '@/echarts-data/emergency-command/overall-situation/public-health/medicalInstitutionChart.js'
import emergencyReservesChart from '@/echarts-data/emergency-command/overall-situation/public-health/emergencyReservesChart.js'
import staffCompositionChart from '@/echarts-data/emergency-command/overall-situation/public-health/staffCompositionChart.js'
import influenceAreaChart from '@/echarts-data/emergency-command/overall-situation/public-health/influenceAreaChart.js'
import operationPanel from '@/components/operation-panel'
import makersCommon from '@/components/panel-command'
import commonFn, {
  areaLocation
} from '@/api/emergency-command/overallSituationMapOperation'
import API from '@/api/emergency-command/public-hygiene'
import { imgPath } from '@/utils/BasePath'
import headComponen from '@/components/head-component'
import top1 from '../../../../assets/emergency-command/overall-situation/public-health/bar_top1.png'
import top2 from '../../../../assets/emergency-command/overall-situation/public-health/bar_top2.png'
import top3 from '../../../../assets/emergency-command/overall-situation/public-health/bar_top3.png'
import textModal from '@/components/text-modal' // 显示标题完整信息
export default {
  components: {
    heartMenu,
    heartPanel,
    selectOther,
    operationPanel,
    headComponen,
    textModal,
    makersCommon
  },
  data () {
    return {
      heartPanelActiveIndex: 2,
      imgPath,
      radarTitleActiveIndex: 4,
      securityProgressRate: 32,
      activeYear1: '',
      select1IsShow: false,
      activeYear2: '所有',
      select2IsShow: false,
      menuList2: [
        {
          name: '自然灾害',
          routeName: 'naturalHazard',
          selected: false
        },
        {
          name: '安全生产',
          routeName: 'securitySituation',
          selected: false
        },
        {
          name: '社会安全',
          routeName: 'societalSecurity',
          selected: false
        },
        {
          name: '公共卫生',
          routeName: 'publicHygiene',
          selected: true
        }
      ],
      overAllSituationList: {},
      accidentRateObj: {},
      accident5YearsMap: null,
      publicHealthDistrictList: [],
      districtListInfo: {},
      supplyCodes: [{ name: '专用病房', value: 1 }, { name: '负压病房', value: 2 }],
      accident5YearTop3List: [],
      mapMarkerList: [],
      thingDetailsMap: {},
      isShowMiniMarker: 1,
      GLOBAL_EVENT_TYPE: 2,
      panelBig: false,
      districtIndex: 0,
      influenceAreaImgs: [top1, top2, top3],
      geoMapTitle: '近五年公共卫生事件发病人数区域分布',
      arrowBottom: 2.4,
      staffTotal: 0,
      natureData: [],
      areaMapData: [],
      typeList: [],
      searchObj: {
        name: '所有',
        code: '',
        starttime: '',
        endtime: ''
      },
      isShowQxList: false,
      isShowTypeList: false,
      //  activeQx: {},
      qxTimer: null,
      qxActiveIndex: 0,
      areaLocation,
      isShowDialog: false,
      tableHeadConfig: [
        {
          name: '分类',
          width: '14.28%',
          key: 'ws02009'
        },
        {
          name: '区县',
          width: '14.28%',
          key: 'ws02007'
        },
        {
          name: '年份',
          width: '14.28%',
          key: 'ws02001'
        },
        {
          name: '传染病初步诊断',
          width: '14.28%',
          key: 'ws02002'
        },
        {
          name: '波及或暴露人口数(人) ',
          width: '14.28%',
          key: 'ws02003'
        },
        {
          name: '发病数(人)',
          width: '14.28%',
          key: 'ws02004'
        },
        {
          name: '死亡数(人)',
          width: '14.28%',
          key: 'ws02005'
        }
      ],
      bedSituationData: {}
    }
  },
  computed: {},
  beforeDestroy () {
    window._m.clear()
    // window._m.redirectDimenion(() => {
    //
    // }, true, false)
    // window._m.
  },
  methods: {
    heartPanelContentChange (index) {
      this.heartPanelActiveIndex = index
    },
    influenceAreaClick (index) {
      this.districtIndex = index
    },
    heartPanelChange (index) {},
    selectItemClickFn1 (item) {
      this.activeYear1 = item.name
      this.select1IsShow = false
      echarts.init(document.getElementById('emergencyReservesChart')).setOption(emergencyReservesChart(this.bedSituationData, item.value), true)
    },
    select1Click () {
      this.select1IsShow = !this.select1IsShow
    },
    selectItemClickFn2 (item) {
      // console.log('ind', ind)
      this.activeYear2 = item.name
      this.select2IsShow = false
      this.getMedicalSpread(item.type)
    },
    select2Click () {
      this.select2IsShow = !this.select2IsShow
    },
    radarChange (index) {
      this.radarTitleActiveIndex = index
      let temp
      switch (index) {
        case 1:
          temp = {
            value: this.accident5YearsMap['natureRate'],
            name: '自然灾害'
          }
          break
        case 2:
          temp = {
            value: this.accident5YearsMap['productionRate'],
            name: '安全生产'
          }
          break
        case 3:
          temp = {
            value: this.accident5YearsMap['socialRate'],
            name: '社会安全'
          }
          break
        case 4:
          temp = {
            value: this.accident5YearsMap['healthRate'],
            name: '公共卫生'
          }
          break
      }
      this.accidentRateObj = temp
    },
    // 鼠标移入显示标题
    showTooltip (e) {
      this.$refs.textModal.showTooltip(e)
    },
    hideTooltip () {
      this.$refs.textModal.hideTooltip()
    },
    getData () {
      API.ACCIDENT_YEARS(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.accident5YearsMap = res.data.accident5YearsMap
          this.accidentRateObj = {
            value: this.accident5YearsMap['healthRate'],
            name: '公共卫生'
          }
          this.radarTitleActiveIndex = 4
        }
      })
      API.PUBLIC_HEALTH_DISTRICT(this, {}).then(res => {
        var colorArr = [
          {
            value: '',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#FFD200' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#F2D85D' // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              }
            }
          },
          {
            value: '',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#E55711' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#FA7D3F' // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              }
            }
          },
          {
            value: '',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#007EFB' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#00B6E3' // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              }
            }
          }
        ]
        res = res.data
        if (res.serviceSuccess) {
          this.publicHealthDistrictList = res.data.publicHealthDistrictList
          if (this.publicHealthDistrictList.length > 0) {
            let list = this.publicHealthDistrictList
            let arr1 = []
            let arr2 = []
            for (let i in list) {
              colorArr[i].value = list[i].peopleNum
              arr1.push(colorArr[i])
              // influenceAreaChart.xAxis.data = []
              arr2.push(list[i].district)
            }
            influenceAreaChart.series[0].data = arr1
            influenceAreaChart.yAxis.data = arr2
          }
          this.districtListInfo = this.publicHealthDistrictList[this.publicHealthDistrictList.length - 1]
          let chart = echarts.init(
            document.querySelector('#influenceAreaChart')
          )
          chart.setOption(influenceAreaChart)
          chart.on('click', params => {
            console.log(params)
            this.districtListInfo = this.publicHealthDistrictList[params.dataIndex]
            this.arrowBottom = 0.9 + 0.75 * params.dataIndex
          })
        }
      })
      // API.PUBLIC_HEALTH_DISTRICT(this, {}).then(res => {
      //   res = res.data
      //   if (res.serviceSuccess) {
      //     this.publicHealthDistrictList = res.data.publicHealthDistrictList
      //     this.districtIndex = 0
      //   }
      // })
      // API.QUERY_SUPPLY_CODES(this, {}).then(res => {
      //   res = res.data
      //   if (res.serviceSuccess) {
      //     this.supplyCodes = res.data.supplyCodes
      //   }
      // })
      API.MEDICAL_PEOPLE(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          let data = res.data.medicalPeopleList

          echarts
            .init(document.querySelector('#staffCompositionChart'))
            .setOption(
              staffCompositionChart(
                data.map(item => {
                  item.value = item.num
                  item.name = item.type
                  this.staffTotal += item.num
                  return item
                })
              )
            )
        }
      })
      API.ACCIDENT_YEARS_TOP3(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.accident5YearTop3List = res.data.accident5YearTop3List
        }
      })
      this.getMedicalSpread('')
      // this.getMedicalResource()
      // this.getOverAllSpread(2)
      this.getOverAllSituation()
    },
    getMedicalSpread (type = '01') {
      API.MEDICAL_SPREAD(this, { type: type }).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          medicalInstitutionChart.xAxis[0].data =
            res.data.medicalSpreadMap.districtList
          medicalInstitutionChart.series[0].data =
            res.data.medicalSpreadMap.medicalSumList
          // medicalInstitutionChart.series[0].name = this.activeYear2
          echarts
            .init(document.querySelector('#medicalInstitutionChart'))
            .setOption(medicalInstitutionChart)
        }
      })
    },
    // getMedicalResource (code = 'T恤衫') {
    //   API.MEDICAL_RESOURCE(this, { name: code }).then(res => {
    //     res = res.data
    //     if (res.serviceSuccess) {
    //       emergencyReservesChart.xAxis[0].data =
    //         res.data.medicalResourceMap.districtList
    //       emergencyReservesChart.series[0].data =
    //         res.data.medicalResourceMap.resuourceSumList
    //       emergencyReservesChart.series[0].name = this.activeYear1
    //       emergencyReservesChart.yAxis[0].name = `${
    //         res.data.medicalResourceMap.unit === null
    //           ? ''
    //           : res.data.medicalResourceMap.unit
    //       }`
    //       echarts
    //         .init(document.querySelector('#emergencyReservesChart'))
    //         .setOption(emergencyReservesChart)
    //     }
    //   })
    // },
    ...commonFn,
    handleClearTime () {
      if (this.qxTimer) {
        clearInterval(this.qxTimer)
      }
    },
    handleMove () {
      this.handleClearTime()
      if (this.isShowMiniMarker === 0 && !this.isShowDialog) {
        this.handleGetDataByTime()
      }
    },
    // 轮询各大区县
    handleGetDataByTime () {
      this.qxTimer = setInterval(() => {
        if (this.qxActiveIndex >= 10) {
          this.qxActiveIndex = 0
        } else {
          this.qxActiveIndex++
        }
        this.searchObj.code = this.areaMapData[this.qxActiveIndex] && this.areaMapData[this.qxActiveIndex].area_full
        // this.handleSearch(qx[this.qxActiveIndex])
      }, 5000)
    },
    doSearch () {
      this.queryHealthInfo()
    },
    mapPointClick (item) {
      this.searchObj.code = item.area_full
    },
    initDateInput () {
      let _that = this
      this.$nextTick(() => {
        this.$laydate.render({
          elem: '#startDate',
          theme: '#000',
          type: 'year',
          range: true,
          // format: 'yyyyMMdd',
          done: value => {
            // _that.startDate = value
            value = value.replace(/\s+/g, '')
            _that.searchObj.starttime = value.split('-')[0]
            _that.searchObj.endtime = value.split('-')[1]
            console.log('initDateInput', _that.searchObj)
          }
        })
      })
    },
    typeListSelect (item) {
      this.isShowTypeList = false
      this.searchObj.name = item.ws02009
    },
    qxListSelect (item) {
      this.isShowQxList = false
      this.searchObj.code = item.area_full
    },
    openHarzdDialog (value) {
      this.natureData = []
      this.isShowDialog = true
      this.searchObj.code = value
      this.handleClearTime()
      this.doSearch()
    },
    closeHarzdDialog () {
      this.isShowDialog = false
      this.handleMove()
    },
    queryMapinfo () {
      API.QUERY_MAP_INFO(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.areaMapData = res.data.mapinfo.mapinfo
          if (this.areaMapData.length > 0) {
            this.areaMapData.map((item, index) => {
              item = Object.assign(item, this.areaLocation[item.area_full])
              item.id = 'health_map_point_' + index
              item.showTextFlag = false
              return item
            })
            this.searchObj.code = this.areaMapData[0].area_full
            window._m && window._m.addMakers(this.areaMapData, data => {
              this.isShowMiniMarker = data
            })
          }
          // console.log('res.data.mapinfo.healthType', res.data.mapinfo.healthType)
          this.typeList = res.data.mapinfo.healthType.concat([{
            ws02009: '所有'
          }])
        }
      })
    },
    queryHealthInfo () {
      this.searchObj.name = this.searchObj.name === '所有' ? '' : this.searchObj.name
      API.QUERY_HEALTH_INFO(this, this.searchObj).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.natureData = res.data.mapinfo
        }
      })
    },
    bedSituation () {
      API.BED_SITUATION(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.bedSituationData = res.data.bedSituationMap
          this.selectItemClickFn1({ name: '专用病房', value: 1 })
        }
      })
    }
  },
  mounted () {
    this.getData()
    this.queryMapinfo()
    this.handleGetDataByTime()
    this.initDateInput()
    this.bedSituation()
    // window._m.redirectDimenion(() => {}, true, false)
    // this.initEchart()
  }
}
</script>

<style  lang="scss" scoped>
@import '../../../../components/date-title.scss';
.global-data-title{
  color:$date-title-color;
  display:inline-block;
  font-size:$date-title-size;
}
.harzd-dialog {
  width: 10.09rem;
  height: 4.62rem;
  background: url("../../../../assets/emergency-command/overall-situation/natural-hazard/kuang@2x.png");
  background-size: 100% 100%;
  padding: 0.25rem 0.15rem;
  position: absolute;
  left: 12.69rem;
  top: 2.25rem;
  z-index: 8;
  .title {
    font-size: 0.22rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }
  .close-icon {
    position: absolute;
    right: 0.2rem;
    top: 0.3rem;
    width: 0.23rem;
    height: 0.23rem;
    cursor: pointer;
    z-index: 1;
  }
  .dialog-body {
    .top {
      //display: flex;
      position: relative;
      .btn {
        position: absolute;
        right: 0.2rem;
        top: 0.54rem;
      }
    }
  }
}
.input-con {
  margin-top: 0.2rem;
  position: relative;
  width: 1.8rem;
  display: inline-block;
  & + & {
    margin-left: 0.25rem;
  }
  label {
    display: block;
    font-size: 0.18rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: rgba(223, 226, 253, 1);
  }
  .input {
    width: 1.8rem;
    height: 0.38rem;
    background: rgba(0, 45, 113, 0.58);
    border: 0.01rem solid rgba(41, 143, 247, 1);
    border-radius: 0.02rem;
    line-height: 0.038rem;
    font-size: 0.17rem;
    padding: 0 0.1rem;
    padding-right: 0.3rem;
    box-sizing: border-box;
    font-family: Source Han Sans CN;
    font-weight: bold;
    font-style: italic;
    color: rgba(255, 255, 255, 1);
    outline: none;
    margin-top: 0.1rem;
  }
  .select-icon {
    width: 0.1rem;
    height: 0.16rem;
    position: absolute;
    right: 0.02rem;
    display: none;
    top: 0.38rem;
    border: 0.05rem solid transparent;
    cursor: pointer;
  }
  &.select {
    .select-icon {
      display: block;
    }
    .select-container {
      position: absolute;
      /* top: 0.3rem; */
      /* left: -0.1rem; */
      width: 100%;
      text-align: center;
      color: #fff;
      font-size: 0.16rem;
      background: url(data:image/png;base64,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)
        no-repeat;
      background-size: 100% 105%;
      padding: 0.2rem 0.1rem;
      z-index: 9;
      max-height: 2rem;
      overflow: auto;
      box-sizing: border-box;
      li {
        list-style-type: none;
        height: 0.45rem;
        line-height: 0.45rem;
        &:hover,
        &.active {
          color: #fce62f;
        }
      }
    }
  }
}
.data-table {
  width: 100%;
  border-spacing: 0;
  //max-height: 4rem;
  overflow: hidden;
  thead {
    tr {
      background: rgba(0, 102, 181, 1);
      th {
        line-height: 0.4rem;
        font-size: 0.17rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.5);
        border: 0 none;
        margin: 0;
        text-align: center;
        width: 10%;
        &:nth-child(1) {
          width: 20%;
        }
        &:nth-child(3) {
          width: 20%;
        }
      }
    }
  }
  tbody {
    tr {
      background: rgba(0, 102, 181, 0.1);
      td {
        line-height: 0.4rem;
        font-size: 0.17rem;
        border: 0 none;
        text-align: center;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        white-space: nowrap;
        overflow: hidden;
        max-width: 0.6rem;
        padding: 0 0.1rem;
        text-overflow: ellipsis;
        // word-break: break-all;
        width: 10%;
        &:nth-child(1) {
          width: 20%;
        }
        &:nth-child(3) {
          width: 20%;
        }
      }
      &:nth-of-type(even) {
        background: rgba(0, 102, 181, 0.26);
      }
    }
  }
}
.data-table-body {
  max-height: 2.6rem;
  overflow: auto;
}
.dialog-toggle-btn {
  width: 1.3rem;
  height: 0.3rem;
  background: rgba(11, 46, 109, 0.58);
  border: 0.01rem solid #458fef;
  border-radius: 0.15rem;
  text-align: center;
  position: absolute;
  right: 0.3rem;
  top: 0.3rem;
  cursor: pointer;
  span {
    font-size: 0.17rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 0.3rem;
  }
  img {
    display: inline-block;
    width: 0.16rem;
    height: 0.16rem;
    position: relative;
    top: 0.02rem;
    left: 0.05rem;
  }
}
// .body-single > div{
//   text-overflow: clip;
// }
.btn {
  // width: 1.11rem;
  background: linear-gradient(
    180deg,
    rgba(198, 211, 223, 1),
    rgba(133, 145, 155, 1)
  );
  text-decoration: none;
  border-radius: 0.19rem;
  display: inline-block;
  padding: 0.07rem 0.3rem;
  font-size: 0.18rem;
  font-family: Source Han Sans CN;
  line-height: 1.4;
  text-align: center;
  font-weight: bold;
  color: rgba(255, 254, 247, 1);
  opacity: 0.8;
  &.primary {
    background: linear-gradient(
      180deg,
      rgba(99, 213, 255, 1),
      rgba(17, 116, 201, 1)
    );
  }
  &:hover {
    opacity: 1;
  }
}
.market-marker-container {
  position: absolute;
  // top: 2rem;
  z-index: 1;
  // left: 28rem;
  .marker {
    width: 0.4rem;
    height: 0.4rem;
    background: url("../../../../assets/common/event-line.png");
    background-size: 100% 100%;
    cursor: pointer;
    margin-left: -.1rem;
    margin-top: -0.7rem;
    z-index: 1;
  }
  .other {
    position: absolute;
    z-index: 0;
    display: flex;
    left: -0.05rem;
    top: -2.05rem;
    align-items: center;
    img {
      width: 1rem;
      height: 1rem;
    }
    .close-btn {
      font-size: 0.18rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(0, 171, 251, 1);
      position: absolute;
      right: 0.15rem;
      top: 0.2rem;
      z-index: 5;
      cursor: pointer;
    }
    .marker-detail {
      width: 3.58rem;
      height: 2.63rem;
      background: url("../../../../assets/emergency-command/overall-situation/natural-hazard/kuang@2x.png");
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
      .info-list {
        padding: 0.1rem 0;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        .item {
          height: 1rem;
          box-sizing: border-box;
          padding: 0.1rem;
          p:nth-child(1) {
            font-size: 0.17rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            font-style: italic;
            color: rgba(240, 242, 255, 1);
          }
          p:nth-child(2) {
            margin-top: 0.15rem;
            font-size: 0.32rem;
            font-family: Impact;
            font-weight: bold;
            font-style: italic;
            color: rgba(252, 230, 47, 1);
            small {
              font-size: 0.15rem;
              font-family: Source Han Sans CN;
              font-weight: bold;
              font-style: italic;
              color: rgba(255, 255, 255, 1);
            }
          }
        }
      }
    }
  }
}
.staffCompositionChart-desc {
  position: absolute;
  top: 2rem;
  text-align: center;
  left: 1.8rem;
  p:nth-child(1) {
    font-size: 0.26rem;
    font-family: Impact;
    font-weight: 400;
    font-style: italic;
    color: #fafcff;
    text-shadow: 0px 1px 10px rgba(147, 229, 252, 0.28);
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#f9fbff),
      to(#77d0fa)
    );
    background: linear-gradient(180deg, #f9fbff 0%, #77d0fa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p:nth-child(2) {
    font-size: 0.2rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    font-style: italic;
    color: #dfe2fb;
    small {
      font-size: 0.14rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-style: italic;
      color: rgba(223, 226, 251, 0.72);
    }
  }
}
.influenceAreaChart-arrow {
  position: absolute;
  width: 0.8rem;
  left: 3.1rem;
  bottom: 0.45rem;
}
.influence_area_info {
  display: flex;
  p {
    flex: 1;
    font-size: 0.17rem;
    color: #ffffff;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    &:hover,
    &:active {
      color: rgba(255, 210, 0, 1);
    }
  }
}
.map-title {
  position: absolute;
  left: 19.15rem;
  top: 1.4rem;
  height: 0.64rem;
  z-index: 10;
  background: url("../../../../assets/emergency-command/overall-situation/security-situation/title_bg.png");
  background-size: 100% 100%;
  text-align: center;
  width: 4.2rem;
  padding: 0 0.5rem;
  p {
    height: 100%;
    font-size: 0.24rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    line-height: 0.58rem;
    font-style: italic;
    color: rgba(255, 255, 255, 1);
    background: linear-gradient(
      0deg,
      rgba(74, 204, 252, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.security-container {
  width: 43.2rem;
  height: 10.8rem;
  position: absolute;
  background: #000;
  .g-menu {
    position: absolute;
    left: 7.42rem;
    top: 8.93rem;
    z-index: 100;
  }
  .g-page-nav {
    position: absolute;
    left: 29.4rem;
    bottom: 0.5rem;
    z-index: 100;
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
    background: url("../../../../assets/city-management/common-service/medical-resource/head-bg.png")
      no-repeat;
    background-size: 100% 100%;
    left: 11.4rem;
    z-index: 99;
  }
  .main-left-top {
    position: absolute;
    left: 0.29rem;
    top: 0.16rem;
    z-index: 9;
    width: 7.02rem;
    height: 3.47rem;
    background: url("../../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/left-top.png")
      center no-repeat;
    background-size: 100%;
    .g-title {
      margin-top: 0.3rem;
    }

    .radar-chart {
      width: 3.5rem;
      height: 1.58rem;
      text-align: center;
      position: absolute;
      left: 0.84rem;
      top: 1.24rem;
      .radar-img {
        width: 1.58rem;
        height: 1.58rem;
        display: inline-block;
      }
      .radar-title {
        font-size: 0.16rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        width: 0.96rem;
        height: 0.36rem;
        padding: 0.07rem 0.12rem;
        box-sizing: border-box;
        position: absolute;
        background: url("../../../../assets/emergency-command/overall-situation/security-situation/radar-title-bg-normal.png");
        background-size: 100% 100%;
        &.active {
          background: url("../../../../assets/emergency-command/overall-situation/security-situation/radar-title-bg-active.png");
          background-size: 100% 100%;
        }
        &.first {
          top: 0;
          left: 0;
        }
        &.second {
          right: 0;
          top: 0;
        }
        &.third {
          right: 0;
          bottom: 0;
        }
        &.forth {
          left: 0;
          bottom: 0;
        }
      }
    }
    .security-rate {
      display: inline-block;
      position: absolute;
      right: 0.6rem;
      top: 1rem;
      p {
        font-size: 0.23rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        text-align: center;
        color: rgba(223, 227, 253, 1);
      }
      .rate-progress-container {
        width: 100%;
        box-sizing: border-box;
        border-left: 0.04rem solid #0783ce;
        height: 0.08rem;
        position: relative;
        margin-top: 0.25rem;
        &::after {
          content: "";
          width: 100%;
          height: 50%;
          position: absolute;
          left: -0.01rem;
          background: #0783ce;
          top: 25%;
        }
        // background: #0783CE;
        .progress {
          width: 46%;
          background: #0783ce;
          // border-radius: 0 4px 4px 0;
          height: 100%;
          position: absolute;
          right: 0;
        }
      }
      .rate-desc {
        font-size: 0.44rem;
        font-family: Source Han Sans CN;
        font-weight: 500;
        font-style: italic;
        color: rgba(255, 210, 0, 1);
        margin-top: 0.24rem;
        small {
          font-size: 0.3rem;
        }
      }
    }
  }
  .main-left-center {
    position: absolute;
    left: 0.29rem;
    top: 3.63rem;
    z-index: 100;
    width: 7.02rem;
    height: 3.47rem;
    background: url("../../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/left-center.png")
      center no-repeat;
    background-size: 100%;
    .g-title {
      margin-top: 0.3rem;
    }
  }
  .main-left-bottom {
    position: absolute;
    left: 0.29rem;
    top: 6.9rem;
    z-index: 9;
    width: 7.02rem;
    height: 3.9rem;
    background: url("../../../../assets/emergency-command/overall-situation/public-health/left-bottom.png")
      center no-repeat;
    background-size: 100% 100%;
    .g-title {
      margin-top: 0.48rem;
      background: none;
    }
  }
  .main-right-top {
    right: 0.29rem;
    // background: rgba(102,243,255,0.2);
    left: auto;
    #medicalInstitutionChart {
      width: 6.6rem;
      height: 2.4rem;
      //margin-top: -0.2rem;
      margin-left: 0.2rem;
    }
    .select {
      position: absolute;
      right: 0.46rem;
      top: 0.26rem;
      .select-input {
        width: 0.8rem;
      }
      .select-list {
        width: 0.9rem;
      }
    }
    .g-title {
      margin-top: 0.3rem;
    }
  }
  .main-right-center {
    right: 0.29rem;
    left: auto;
    #emergencyReservesChart {
      width: 6.4rem;
      height: 2.2rem;
      //margin-top: -0.15rem;
      margin-left: 0.3rem;
    }
    .select {
      position: absolute;
      right: 0.46rem;
      top: 0.26rem;
    }
  }
  .main-right-bottom {
    right: 0.29rem;
    left: auto;
    #staffCompositionChart {
      width: 6.6rem;
      height: 3rem;
      margin-top: -0.25rem;
      margin-left: 0.2rem;
    }
  }
}
.select {
  .select-input {
    font-size: 0.16rem;
    font-family: Source Han Sans CN;
    /* -webkit-box-sizing: border-box; */
    /* box-sizing: border-box; */
    padding: 0 0.2rem 0 0.1rem;
    font-weight: 400;
    /* text-align: center; */
    color: white;
    width: 1.5rem;
    height: 0.3rem;
    background: #002d71;
    border: 1px solid #298ff7;
    border-radius: 14px;
    display: inline-block;
    text-align: center;
    line-height: 1.8;
    img {
      width: 0.1rem;
      height: 0.15rem;
      position: absolute;
      top: 0.08rem;
      right: 0.1rem;
    }
  }
  .select-list {
    position: absolute;
    /* margin-top: -0.08rem; */
    /* background: url(data:image/png;base64,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); */
    background-size: 100% 100%;
    padding: 0.1rem;
    padding-top: 0.15rem;
    width: 1.6rem;
    height: .6rem;
    overflow: auto;
    //left: -0.15rem;
    /* top: 0.4rem; */
    padding-bottom: 0.2rem;
    border: 1px solid #298ff7;
    border-top: 0 none;
    border-radius: 0 0 0.1rem 0.1rem;
    li {
      list-style: none;
      background: rgba(0, 45, 113, 0.28);
      color: #ffffff;
      font-size: 0.16rem;
      text-align: center;
      padding: 0.05rem 0.1rem;
      &:hover,
      &.active,
      &:active {
        color: #ffd200 !important;
      }
    }
  }
}
.g-nav-box {
  position: absolute;
  z-index: 99;
  top: 1rem;
  right: 9.6rem;
  .g-select-box {
    display: block;
  }
}
.menu-item {
  margin-left: 0.2rem;
  margin-top: 0.05rem;
  position: absolute;
  width: 4rem;
  left: 2rem;
  top: 0.6rem;
  .title {
    font-size: 0.16rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }
  .module {
    display: flex;
    flex-wrap: wrap;
    // align-items: center;
  }
  .cell {
    //flex: 1;
    width: 0.7rem;
    position: relative;
    margin-top: 0.05rem;
    margin-left: 0.4rem;
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
.g-title {
  display: inline-block;
  margin: 0.35rem 0 0 0.5rem;
  font-size: 0.24rem;
  line-height: 0.23rem;
  text-align: center;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  padding-left: 15px;
  padding-bottom: 0.2rem;
  background: url("../../../../assets/city-management/economic-run/three-base/title-icon.png")
    no-repeat;
  background-position: -0rem 0.1rem;
  background-size: 0.87rem 0.25rem;
  &:hover {
    color: #ffed66;
    text-shadow:0 0 0.1rem rgba(228,205,38,0.28);
  }
}
.health-event-list-container {
  height: 2.4rem;
  padding-right: 0.3rem;
  overflow: auto;
}
.health-event-list {
  padding: 0 0.2rem 0 0.3rem;
  padding-bottom: 0.2rem;
  box-sizing: border-box;
  .title {
    margin-left: 0.35rem;
    margin-top: 0.1rem;
    .num {
      font-size: 0.17rem;
      font-family: Impact;
      font-weight: 400;
      font-style: italic;
      color: rgba(229, 87, 17, 1);
      text-shadow: 0px 1px 10px rgba(255, 212, 204, 0.28);
      big {
        font-size: 0.24rem;
        font-weight: 700;
        // margin-left: 0.05rem;
      }
    }
    .name {
      font-size: 0.24rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      font-style: italic;
      color: rgba(254, 254, 254, 1);
      margin-left: 0.2rem;
    }
  }
}
.halving-line {
  margin: 0.2rem 0;
  width: 71%;
  height: 0.01rem;
  margin-left: 1.23rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABBQAAAACCAYAAADo348JAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS1SURBVGhDrZh7q1VVFMX3lnxkKGQW0UOszEQ/Tw9KKpRCNDCKRFMxnxlFQYmUhIr5qL5PKSomRS+KxB7ce4/hcYwx51x776P+c+Ya17vXXOtcxm/Nuebe+3rbddtnxuOmaVp8Nx5w6IuffXf4Xv3ItFoLjoeGodsdQN+/n+TsmEU+nbEw4djjnU9y1rw747YiKKKUG764B35y/lCSsxN1gylhnVGfafGFgznOM7vifMwm9t/Jcrp4IMdZvZucsIgcTJzZJ21zcf+iFOfpPawbLXp1ahELEuttc2lvjrOKnJIPxSnmZl90+b0c56m9s+oD85wwd3H1yp4c58l94NxF6gm5t82V3TnOE/t5n/ayQMCFydL9sCvHWXmwyycCGg7Y0NWdOc6KQ+DAQS0WYyFB3nM/7shxHj88N275hCsuEUR2pp+25ziPfTCH7Vsyajy48bkm+UGR+PO2hSnOox/O6Xltz0zaYhbJIY46/vJOjvPIR8gH0iWcBBwEza9v5zgPf0xO56dBUA7IxBv8t7dynIc+QR+4g86nJGWK2e9v5jgPfop83D6MlI7nFPn9sTXHWf6Znc/dpC0g4T/fWJDiPHDE+wBe6mzM/Eg8Fbv+tSWXz7Kj5FhPF3dZa9nmiK9tznHu/5z3D6SHTpDiGtm0zfVNubot/QL9psgcLXQSLlpB8PfruXyWHvM+cIz8EWvUkl3/eS3HWfLlyOoWcl4/Pebz78Yc577jI7t/Qj1O4Kj/NuTOZ/EJcKC+Z0g14yFBM6/mOItOjtAHtDASXkZap2KVmn0lyTk1mY/1Myel36C5l3OcBV8ZRznBWO8eOhKFcewPiNH6+TnOaXLMWDdSoXIukD4drc/lM/+M9zVclBMm3dxbEZf/X8px7jlrHHufIcJId50N1/gZOS/m6jbv3A177vAiICeQOB5DN19Icr6+QUflIQ5VmFY31vPm8zlO+w04cLA6YcFZXR9o0oyfS3K+ZT4M4KWIWLN0pG3i2VwfNOT0HOaFOaFM0NnlZzjGz9SSvAkLSFV1u429t0rMYRy84WuIrdavjzGtxtXqBrPhjpWVrkN6VrHrQY9oWZzhJqZUZ1KieABxRXGFnOK8RaFvxH3Vql3Uxkc9YM3bbuZ6sgw8D3kHYOLMppZ1VCmfi2t8eYhSKadyG3IUQLMoXTVN2gWKo75jHynF5m2gVC3OBQtqVvC5zYbeUA37kN54DCwHe4ZywfmOzMq6LTaOWe8wyGS/lT5JiBx+6ampvXseUiSkD+rKLTnol68Bd3qFlenOhlWzgZl+R+ibxh4q5GOiUZh1pkJgar2SU7SXBkzsmTakxS9eGVmn+X4Npn+acIw4LfqFD6lUd7Ud2DUjuweDE6ML04mVhFA3nglzIlTnQ/cYGeZppWTQwO22Bq+gsMGoo/d5ca+EoTor1itYiPIt0EkvaPqbKRH8DoTeFUnZ/eNS4F2AmFPeo3lKyGvlQP7B3kC20NvJ1GJJ+vUqPYwx8oj/iKcEC9kASB7/4MM/0jMX0lW3KvdPnEBkZecTsdbzGHnaJUYnOIxDjfMpZmEVsfe65ZqXXGDJ/TOOvat6hqqiqL1aGSP3byTEhVEBNrBomlsCxQnid5xoyQAAAABJRU5ErkJggg==);
  background-size: 100% 100%;
}
.details {
  margin-left: 1rem;
  display: flex;
  flex-wrap: wrap-reverse;
  margin-top: 0.23rem;
  justify-content: space-between;
  .item {
    line-height: 1.4;
    min-width: 25%;
    .top {
      font-size: 0.16rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(254, 254, 254, 1);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .bottom {
      margin-top: 0.05rem;
      font-size: 0.22rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      font-style: italic;
      color: rgba(255, 210, 0, 1);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.deadetailed-description {
  width: 2.7rem;
  height: 2.5rem;
  background: url("../../../../assets/emergency-command/overall-situation/public-health/left-bottom-bg.png");
  background-size: 100% 100%;
  position: absolute;
  right: 0.4rem;
  top: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  padding-top: 0.2rem;
  padding-left: 0.25rem;
  box-sizing: border-box;
  justify-items: center;
  .item {
    width: 50%;
    p {
      &:first-child {
        font-size: 0.16rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        font-style: italic;
        color: rgba(223, 226, 253, 1);
        opacity: 0.7;
      }
      &:last-child {
        margin-top: 0.18rem;
        font-size: 0.28rem;
        font-family: Impact;
        font-weight: bold;
        font-style: italic;
        color: rgba(252, 230, 47, 1);
        span {
          font-size: 0.15rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          font-style: italic;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
    &:last-child {
      margin-top: 0.4rem;
    }
  }
}
#influenceAreaChart {
  width: 3.2rem;
  height: 2.6rem;
  padding: 0.1rem 0.1rem 0.1rem 0.5rem;
  box-sizing: border-box;
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}
.notice-box {
  width: 2.5rem;
  height: 2.6rem;
  position: absolute;
  top: 4rem;
  box-sizing: border-box;
  padding: 0.2rem;
  right: 20rem;
  z-index: 99;
  background: url("../../../../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/notice-bg.png");
  background-size: 100% 100%;
  .title {
    font-size: 0.21rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }
  .content {
    p {
      font-size: 0.18rem;
      margin-top: 0.2rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(223, 226, 251, 1);
      .num {
        font-size: 0.22rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        font-style: italic;
        color: rgba(252, 230, 47, 1);
        margin-right: 0.05rem;
      }
    }
  }
}
.left-list {
  position: absolute;
  left: 7.5rem;
  top: 0.92rem;
  z-index: 1000;
  .left-list-li {
    //@at-rootwidth:2.56rem;
    margin-top: 0.1rem;
    .name {
      padding: 0rem 0.12rem 0.03rem 0.06rem;
      color: #ffffff;
      font-size: 0.2rem;
      font-style: italic;
      font-weight: bold;
      box-sizing: border-box;
      line-height: 1.4;
      transform: perspective(1rem) rotateX(-15deg);
      transform-origin: left;
      background: rgba(213, 96, 44, 1);
    }
    .number {
      font-size: 0.4rem;
      color: #ffffff;
      font-weight: bold;
      font-style: italic;
      span {
        font-size: 0.24rem;
      }
    }
    &:last-child {
      .name {
        width: 65% !important;
      }
    }
  }
}
.marker-info-box {
  width: 4rem;
  height: 4rem;
  background: url("../../../../assets/emergency-command/overall-situation/societal-security/marker-info-bg.png");
  background-size: 100% 100%;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0.2rem;
    padding-top: 0.1rem;
    p {
      font-size: 0.21rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 2;
    }
    img {
      width: 0.2rem;
      height: 0.2rem;
      cursor: pointer;
      border: 0.2rem solid transparent;
    }
  }
  .content {
    padding: 0 0.2rem;
    line-height: 1.8;
    .desc {
      display: flex;
      justify-content: space-between;
      font-size: 0.18rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      font-style: italic;
      color: rgba(255, 255, 255, 1);
      span {
        flex: 1;
      }
    }
    .loss {
      font-size: 0.18rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(223, 226, 253, 1);
      span {
        font-size: 0.18rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        font-style: italic;
        color: rgba(252, 230, 47, 1);
      }
    }
    .details {
      font-size: 0.18rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      margin-left: 0;
      color: rgba(223, 226, 253, 1);
      position: relative;
      p {
        font-size: 0.18rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        font-style: italic;
        color: rgba(244, 223, 48, 1);
        position: absolute;
        left: 0.9rem;
        top: 0;
        /*! autoprefixer: off */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 6;
        /* autoprefixer: on */
        overflow: hidden;
      }
    }
  }
}
.mini-maker-icon {
  width: 0.4rem;
  height: 0.4rem;
}
.maker-box {
  position: absolute;
  z-index: 8;
  text-align: center;
  width: 1rem;
  height: 1.2rem;
  &.d2 {
    margin-left: -0.5rem;
    margin-top: -0.35rem;
  }
  &.d3 {
    margin-left: -0.5rem;
    margin-top: -1rem;
  }
  .maker-text {
    text-align: left;
    width: auto;
    height: auto;
    position: absolute;
    left: 100%;
    top: -105%;
    margin-left: 0.5rem;
    z-index: 9;
    .line2 {
      width: 1rem;
      height: 1.1rem;
      position: absolute;
      top: 0.38rem;
      left: -1rem;
    }
  }
}
.marker {
  position: relative;
  .img-container {
    width: 1rem;
    height: 1.2rem;
  }
  .inner-img {
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    left: 0.32rem;
    top: 0.32rem;
  }
}
.user-dos {
  margin-left: 4.5rem;
  display: flex;
  width: 0.9rem;
  height: 0.2rem;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.4);
  color: #000;
  overflow: hidden;
  font-size: 0.15rem;
  cursor: pointer;
  > div {
    flex: 1;
  }
  .legend {
    background: #9be9ff;
    text-align: center;
  }
  .icon {
    background: url("../../../../assets/common/top.png") no-repeat center;
  }
}
.small-icon {
  margin-top: 0.2rem;
  margin-left: 4rem;
  width: 1.4rem;
  div {
    float: left;
  }
  img {
    width: 0.32rem;
    height: 0.32rem;
  }
}
</style>
