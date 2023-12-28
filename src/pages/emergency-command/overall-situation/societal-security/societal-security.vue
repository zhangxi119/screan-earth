<!--
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-08 09:39:22
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-06-05 11:14:13
 -->
<template>
  <div class="security-container">
    <!-- <div class="header-bg">安全态势社会安全</div> -->
    <head-componen name="安全态势社会安全"></head-componen>
    <!-- <div class="map-title" ><p>{{geoMapTitle}}</p></div> -->
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
      <p class="g-title">近五年社会安全事件数量TOP6</p>
      <div class="dialog-toggle-btn" @click="openHarzdDialog('','')">
        <span>查看明细</span>
        <img src="../../../../assets/city-management/market-supervision/img/details-icon.png" />
      </div>
      <div class="accident-area-rank">
        <div class="rank-item" v-for=" (item,index) in accidentDistrictList" :key="index">
          <img :src="accidentAreaRankImgList[index]" class="accident-rank-icon" alt />
          <span class="list-no">{{index+1}}</span>
          <span class="accident-rank-desc">{{item.district}}</span>
          <div class="accident-rank-progress-container">
            <div
              class="progress"
              :style="{width:(Math.round((item.thingSum/accidentDistrictList[0].thingSum)*100))+'%'}"
            ></div>
          </div>
          <span class="accident-rank-num">{{item.thingSum}}起</span>
        </div>
      </div>
    </div>
    <div class="main-left-bottom">
      <p class="g-title">近五年社会安全事件TOP5类型</p>
      <div class="select">
        <div contenteditable="false" @click="select3Click" class="select-input">
          {{select3ActiveValue}}
          <img
            src="../../../../assets/emergency-command/overall-situation/societal-security/icon.png"
          />
        </div>
        <ul v-if="select3IsShow" class="select-list">
          <li
            v-for="(item,index) in  chartDataSourceSelectDescList"
            :style="{active:true}"
            :key="index"
            @click="accidentTypeToggle(item)"
          >{{item}}</li>
        </ul>
      </div>
      <div class="left-bottom" id="left-bottom"></div>
    </div>

    <div class="main-left-top main-right-top">
      <p class="g-title">近五年社会安全事件影响及数量趋势</p>
      <div class="select">
        <div contenteditable="false" @click="select4Click" class="select-input">
          {{select4ActiveValue}}
          <img
            src="../../../../assets/emergency-command/overall-situation/societal-security/icon.png"
          />
        </div>
        <ul v-if="select4IsShow" class="select-list">
          <li
            v-for="(item,index) in  chartDataSourceSelectDescList"
            :style="{active:true}"
            :key="index"
            @click="accidentTrendToggle(item)"
          >{{item}}</li>
        </ul>
      </div>
      <div class="right-top" id="right-top"></div>
    </div>
    <div class="main-left-center main-right-center">
      <p class="g-title">社会安全事件月度分析</p>
      <div class="right-center" id="right-center"></div>
      <div class="select">
        <div contenteditable="false" @click="select1Click" class="select-input">
          {{activeYear1}}年
          <img
            src="../../../../assets/emergency-command/overall-situation/societal-security/icon.png"
          />
        </div>
        <ul v-if="select1IsShow" class="select-list">
          <li
            v-for="(item,index) in  years"
            :style="{active:true}"
            :key="index"
            @click="selectItemClickFn1(item.years)"
          >{{item.years}}年</li>
        </ul>
      </div>
    </div>
    <div class="main-left-bottom main-right-bottom">
      <p class="g-title">社会安全事件类型分析</p>
      <div id="right-bottom" class="right-bottom"></div>
      <div class="select">
        <div contenteditable="false" @click="select2Click" class="select-input">
          {{activeYear2}}
          <img
            src="../../../../assets/emergency-command/overall-situation/societal-security/icon.png"
          />
        </div>
        <ul v-if="select2IsShow" class="select-list">
          <li
            v-for="(item,index) in  days"
            :style="{active:item==activeYear2}"
            :key="index"
            @click="selectItemClickFn2(item)"
          >{{item}}</li>
        </ul>
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
      <!-- <div class="maker-text" v-if="item.showTextFlag&&isShowMiniMarker===1">
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
      </div>-->
    </div>
    <div class="harzd-dialog" v-show="isShowDialog">
      <p class="title">社会安全事件</p>
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
            <input type="text" class="input select" placeholder="类型" v-model="searchObj.type" />
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
                :class="{active:searchObj.type===item.sh02003}"
              >{{item.sh02003}}</li>
            </ul>
          </div>
          <div class="input-con select">
            <label for>区县：</label>
            <input type="text" class="input select" placeholder="请选择" v-model="searchObj.name" />
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
                :class="{active:searchObj.name===item.qxq}"
              >{{item.qx}}</li>
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
          <div class="input-con">
            <label for>关键字查找：</label>
            <input
              type="text"
              class="input select"
              placeholder="请输入..."
              v-model="searchObj.content"
            />
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
                      <template v-if="n===(tableHeadConfig.length-1)">
                        <img
                          v-if="x.lon"
                          class="details-icon"
                          @click="signDetailsPoint(x)"
                          src="../../../../assets/emergency-command/overall-situation/societal-security/details.png"
                          alt
                        />
                        <img class="details-icon" alt="" v-else src="../../../../assets/emergency-command/overall-situation/societal-security/details2.png" />
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
        :style="{zIndex:item.qxq===searchObj.name?6:5}"
        v-for="(item,index) in  areaMapData"
        :key="'second_'+index"
      >
        <div class="marker" @click="mapPointClick(item)"></div>
        <div
          class="other"
          v-show="item.qxq===searchObj.name"
          @mouseover="handleClearTime"
          @mouseleave="handleMove"
        >
          <!-- <span class="close-btn" @click="openHarzdDialog(item.qxq)">>></span> -->
          <img src="../../../../assets/common/event-icon.png" />
          <div class="marker-detail">
            <p class="title">近五年社会安全事件TOP5类型</p>
            <div class="info-list">
              <ul>
                <template v-if="item.top5.length>0">
                  <li v-for="(m,n) in item.top5" :key="n">
                    <span>TOP{{n+1}}</span>
                    <span>{{m.sh02003}}</span>
                    <span>{{m.num}}</span>
                    <span @click="openHarzdDialog(item.qxq,m.sh02003)">>></span>
                  </li>
                </template>
                <template v-else>
                  <li>无数据</li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="details_point" v-if="detailsPoint.id&&isShowMiniMarker===0" :id="detailsPoint.id">
      <img class="point" src="../../../../assets/emergency-command/overall-situation/societal-security/socialsafe.png">
      <div class="maker-text">
        <img src="../../../../assets/common/line2.png" alt class="line2" />
        <div class="marker-info-box">
          <div class="title">
            <p>事件详情</p>
            <img src="../../../../assets/common/close.png" @click="detailsPointClose()" />
          </div>
          <div class="content">
            <div class="desc">
              <span>{{detailsPoint.time||''}}</span>
              <span>{{detailsPoint.district||''}}</span>
              <span>{{detailsPoint.type||''}}</span>
            </div>
            <!-- <div class="loss">
              经济损失：
              <span>{{detailsPoint.ecoNum)||'无数据'}}</span>
            </div> -->
            <div class="details">
              详细内容:
              <p>{{detailsPoint.details||'无数据'}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <!-- 显示标题完整信息 -->
    <text-modal ref="textModal"></text-modal>
  </div>
</template>
<script>
import echarts from 'echarts'
import heartMenu from '@/components/menu'
import heartPanel from '@/components/heart-panel'
import selectOther from '@/components/select-other.vue'
import option01 from '@/echarts-data/emergency-command/overall-situation/societal-security/left-bottom.js'
import option02 from '@/echarts-data/emergency-command/overall-situation/societal-security/right-top.js'
import option03 from '@/echarts-data/emergency-command/overall-situation/societal-security/right-center.js'
import option04 from '@/echarts-data/emergency-command/overall-situation/societal-security/right-bottom.js'
import API from '@/api/emergency-command/societal-security'
import rankImg1 from '@/assets/emergency-command/overall-situation/societal-security/no1.png'
import rankImg2 from '@/assets/emergency-command/overall-situation/societal-security/no2.png'
import rankImg3 from '@/assets/emergency-command/overall-situation/societal-security/no3.png'
import rankImg4 from '@/assets/emergency-command/overall-situation/societal-security/no4.png'
import rankImg5 from '@/assets/emergency-command/overall-situation/societal-security/no5.png'
import rankImg6 from '@/assets/emergency-command/overall-situation/societal-security/no6.png'
import operationPanel from '@/components/operation-panel'
import makersCommon from '@/components/panel-command'
import commonFn, {
  areaLocation
} from '@/api/emergency-command/overallSituationMapOperation'
import { imgPath } from '@/utils/BasePath'
import headComponen from '@/components/head-component'
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
      heartPanelActiveIndex: 1,
      securityProgressRate: 32,
      radarTitleActiveIndex: 3,
      accidentTypeToggleIndex: 1,
      accidentTrendToggleIndex: 2,
      activeYear1: 2020,
      select1IsShow: false,
      activeYear2: '近3个月',
      select2IsShow: false,
      GLOBAL_YEAR: null,
      imgPath,
      accidentAreaRankImgList: [
        rankImg1,
        rankImg2,
        rankImg3,
        rankImg4,
        rankImg5,
        rankImg6
      ],
      // menuList: [
      //   {
      //     name: '累计数据',
      //     routeName: '',
      //     selected: true
      //   },
      //   {
      //     name: 2018,
      //     routeName: '',
      //     selected: false
      //   },
      //   {
      //     name: 2019,
      //     routeName: '',
      //     selected: false
      //   }
      // ],
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
          selected: true
        },
        {
          name: '公共卫生',
          routeName: 'publicHygiene',
          selected: false
        }
      ],
      years: [2015, 2016, 2017, 2018, 2019],
      days: ['近1周', '近15天', '30天内', '近3个月', '半年内'],
      accident5YearsMap: {},
      accidentRateObj: {},
      accidentDistrictList: [],
      accidentTypeTop5Map: [],
      leftBottomChartColor: [
        {
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
        },
        {
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
        },
        {
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
        },
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#52BAF2' // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#00B6E3' // 100% 处的颜色
            }
          ],
          globalCoord: false // 缺省为 false
        },
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#52BAF2' // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#00B6E3' // 100% 处的颜色
            }
          ],
          globalCoord: false // 缺省为 false
        }
      ],
      accidentTrend5YearsMap: [],
      overAllSituationList: {},
      mapMarkerList: [],
      activeOptionPanelOneMenu: '突发事件',
      isShowMiniMarker: 1,
      thingDetailsMap: {},
      chartDataSourceSelectDescList: ['经济损失', '伤亡数量'],
      select3IsShow: false,
      select3ActiveValue: '经济损失',
      select4IsShow: false,
      select4ActiveValue: '经济损失',
      GLOBAL_EVENT_TYPE: 4,
      panelBig: false,
      geoMapTitle: '近五年社会安全事件区域分布',
      // mapMarkerMiniIconUrl: ''
      natureData: [],
      areaMapData: [],
      typeList: [],
      searchObj: {
        type: '所有',
        name: '',
        code: '',
        starttime: '',
        endtime: '',
        context: ''
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
          width: '10%',
          key: 'sh02003'
        },
        {
          name: '名称',
          width: '35%',
          key: 'sh02008'
        },
        {
          name: '地址',
          width: '25%',
          key: 'sh02007'
        },
        {
          name: '时间',
          width: '20%',
          key: 'sh02001'
        },
        {
          name: '详情',
          width: '10%',
          key: ''
        }
      ],
      detailsPoint: {}
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
    accidentTypeToggle (index) {
      this.select3ActiveValue = index
      this.select3IsShow = false
      this.initLeftBottomChart(this.select3ActiveValue)
    },
    accidentTrendToggle (index) {
      this.select4ActiveValue = index
      this.select4IsShow = false
      this.initRightTopChart(this.select4ActiveValue)
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
    heartPanelContentChange (index) {
      this.heartPanelActiveIndex = index
    },
    heartPanelChange (index) {},
    initLeftBottomChart (index) {
      switch (index) {
        case '经济损失':
          option01.series[1].name = '经济损失'
          option01.series[1].data = this.accidentTypeTop5Map.ecoSumList
          option01.legend.data[1] = '经济损失'
          option01.yAxis[1].name = '(万元)'
          break
        case '伤亡数量':
          option01.series[1].name = '伤亡数量'
          option01.series[1].data = this.accidentTypeTop5Map.deathNumList
          option01.legend.data[1] = '伤亡数量'
          option01.yAxis[1].name = '(人)'
          break
      }
      echarts.init(document.querySelector('#left-bottom')).setOption(option01)
    },
    initRightTopChart (index) {
      switch (index) {
        case '经济损失':
          option02.series[1].name = '经济损失'
          option02.series[1].data = this.accidentTrend5YearsMap.ecoSumList
          option02.legend.data[1] = '经济损失'
          option02.yAxis[1].name = '(万元)'
          break
        case '伤亡数量':
          option02.series[1].name = '伤亡数量'
          option02.series[1].data = this.accidentTrend5YearsMap.deathList
          option02.legend.data[1] = '伤亡数量'
          option02.yAxis[1].name = '(人)'
          break
      }

      echarts.init(document.querySelector('#right-top')).setOption(option02)
    },
    selectItemClickFn1 (year) {
      this.activeYear1 = year
      this.select1IsShow = false
      API.ACCIDENT_YEAR(this, { year: this.activeYear1 }).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          option03.xAxis[0].data = res.data.accidentYearMap.monthList
          option03.series[0].data = res.data.accidentYearMap.thingSumList
          option03.series[1].data = res.data.accidentYearMap.ecoSumList
          echarts
            .init(document.querySelector('#right-center'))
            .setOption(option03)
        }
      })
    },
    select1Click () {
      this.select1IsShow = !this.select1IsShow
    },
    selectItemClickFn2 (year) {
      this.activeYear2 = year
      this.select2IsShow = false
      API.SHOR_TIME_ANA(this, { days: this.daysToNum(this.activeYear2) }).then(
        res => {
          res = res.data
          if (res.serviceSuccess) {
            let temp = res.data.shorTimeAnaList
            let xArr = []
            let sArr = []
            for (let i of temp) {
              xArr.push(i.type)
              sArr.push(i.num)
            }
            option04.xAxis[0].data = xArr
            option04.series[0].data = sArr
            echarts
              .init(document.querySelector('#right-bottom'))
              .setOption(option04)
          }
        }
      )
    },
    select2Click () {
      this.select2IsShow = !this.select2IsShow
    },
    select3Click () {
      this.select3IsShow = !this.select3IsShow
    },
    select4Click () {
      this.select4IsShow = !this.select4IsShow
    },
    // 鼠标移入显示标题
    showTooltip (e) {
      this.$refs.textModal.showTooltip(e)
    },
    hideTooltip () {
      this.$refs.textModal.hideTooltip()
    },
    daysToNum (desc) {
      // ['近15天', '近1周','30天内' ,'近3个月', '半年内']
      let num
      switch (desc) {
        case '近15天':
          num = 15
          break
        case '近1周':
          num = 7
          break
        case '30天内':
          num = 30
          break
        case '近3个月':
          num = 90
          break
        case '半年内':
          num = 180
          break
      }
      return num
    },
    // 获取年份列表
    getYearList () {
      API.QUERY_YEARS(this, {}).then(res => {
        let re = res.data
        if (re.serviceSuccess) {
          this.years = re.data.queryYears
          this.activeYear1 = this.years[0].years
          this.selectItemClickFn1(this.activeYear1)
        }
      })
    },
    getData () {
      API.ACCIDENT_YEARS(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.accident5YearsMap = res.data.accident5YearsMap
          this.accidentRateObj = {
            value: this.accident5YearsMap['socialRate'],
            name: '社会安全'
          }
          this.radarTitleActiveIndex = 3
        }
      })
      API.ACCIDENT_DISTRICT(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.accidentDistrictList = res.data.accidentDistrictTop6List
        }
      })
      API.ACCIDENT_TYPE(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.accidentTypeTop5Map = res.data.accidentTypeTop5Map
          let temp = []
          for (let i in this.accidentTypeTop5Map.thingNumList) {
            temp.push({
              value: this.accidentTypeTop5Map.thingNumList[i],
              itemStyle: {
                color: this.leftBottomChartColor[i]
              }
            })
          }
          // this.accidentTypeTop5Map.thingNumList = temp
          option01.series[0].data = temp
          option01.xAxis[0].data = this.accidentTypeTop5Map.thingTypeList
          this.accidentTypeToggleIndex = 1
          this.initLeftBottomChart(this.select3ActiveValue)
        }
      })
      API.ACCIDENT_TREND(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.accidentTrend5YearsMap = res.data.accidentTrend5YearsMap
          option02.series[0].data = this.accidentTrend5YearsMap.thingSumList
          option02.xAxis[0].data = this.accidentTrend5YearsMap.yearList
          this.accidentTrendToggleIndex = 1
          this.initRightTopChart(this.select4ActiveValue)
        }
      })
      API.ACCIDENT_YEAR(this, { year: this.activeYear1 }).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          option03.xAxis[0].data = res.data.accidentYearMap.monthList
          option03.series[0].data = res.data.accidentYearMap.thingSumList
          option03.series[1].data = res.data.accidentYearMap.ecoSumList
          echarts
            .init(document.querySelector('#right-center'))
            .setOption(option03)
        }
      })

      API.SHOR_TIME_ANA(this, { days: this.daysToNum(this.activeYear2) }).then(
        res => {
          res = res.data
          if (res.serviceSuccess) {
            let temp = res.data.shorTimeAnaList
            let xArr = []
            let sArr = []
            for (let i of temp) {
              xArr.push(i.type)
              sArr.push(i.num)
            }
            option04.xAxis[0].data = xArr
            option04.series[0].data = sArr
            echarts
              .init(document.querySelector('#right-bottom'))
              .setOption(option04)
          }
        }
      )
      this.getOverAllSituation()
      // this.getOverAllSpread(4)
    },
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
        this.searchObj.name =
          this.areaMapData[this.qxActiveIndex] &&
          this.areaMapData[this.qxActiveIndex].qxq
        // this.handleSearch(qx[this.qxActiveIndex])
      }, 5000)
    },
    doSearch () {
      this.queryHealthInfo()
    },
    mapPointClick (item) {
      this.searchObj.name = item.qxq
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
      this.searchObj.type = item.sh02003
    },
    qxListSelect (item) {
      this.isShowQxList = false
      this.searchObj.name = item.qxq
    },
    openHarzdDialog (value, type) {
      this.natureData = []
      this.isShowDialog = true
      this.searchObj.name = value
      this.searchObj.type = type
      this.handleClearTime()
      this.doSearch()
    },
    closeHarzdDialog () {
      this.searchObj = {
        type: '所有',
        name: '',
        code: '',
        starttime: '',
        endtime: '',
        context: ''
      }
      this.isShowDialog = false
      this.handleMove()
    },
    queryMapinfo () {
      API.QUERY_MAP_INFO(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.areaMapData = res.data.mapInfo.qxinfo
          if (this.areaMapData.length > 0) {
            this.areaMapData.map((item, index) => {
              item = Object.assign(item, this.areaLocation[item.qxq])
              item.id = 'social_map_point_' + index
              item.showTextFlag = false
              return item
            })
            this.searchObj.name = this.areaMapData[0].qxq
            window._m && window._m.addMakers(this.areaMapData, data => {
              this.isShowMiniMarker = data
            })
          }
          this.typeList = res.data.mapInfo.type.concat([
            {
              sh02003: '所有'
            }
          ])
        }
      })
    },
    queryHealthInfo () {
      this.searchObj.type =
        this.searchObj.type === '所有' ? '' : this.searchObj.type
      API.QUERY_SOCIAL_INFO(this, this.searchObj).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.natureData = res.data.mapInfo
        }
      })
    },
    signDetailsPoint (item) {
      this.detailsPoint = {
        lon: item.lon,
        lat: item.lat,
        type: item.sh02003,
        district: item.sh02007,
        time: item.sh02001,
        details: item.sh02006,
        id: 'social_detailsPoint'
      }
      this.handleClearTime()
      this.isShowDialog = false
      if (this.detailsPoint.lon) {
        this.isShowDialog = false
        window._m.addMakers([this.detailsPoint], data => {
          this.isShowMiniMarker = data
        })
      }
    },
    detailsPointClose () {
      this.detailsPoint = {}
      window._m && window._m.removeMaker(['social_detailsPoint'], true)
      this.handleMove()
    }
  },
  // beforeUpdate () {
  //   window._m && window._m.removeHeatPointMa &&
  // },
  mounted () {
    this.getData()
    this.initDateInput()
    this.queryMapinfo()
    this.handleGetDataByTime()
    this.getYearList()
  }
}
</script>

<style  lang="scss" scoped>
.details_point{
  position: absolute;
  z-index: 7;
  .point{
    width: .4rem;
    height: .4rem;
    position: relative;
    margin-top: -0.2rem;
    margin-left: -0.2rem;
    z-index: 10;
  }
  .maker-text{
    top: -1.55rem;
    left: 0.45rem;
  }
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
      //  word-break: break-all;
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
  max-height: 2.8rem;
  overflow: auto;
  .details-icon {
    width: 0.2rem;
    height: 0.2rem;
  }
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
        padding: 0.1rem;
        ul {
          li {
            text-align: center;
            font-size: 0.18rem;
            padding: 0.05rem 0;
            border-bottom: 0.01rem solid rgba(48, 189, 255, 0.5);
            font-family: Source Han Sans CN;
            font-weight: bold;
            font-style: italic;
            color: rgba(255, 255, 255, 1);
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
              //flex: 1;
              text-align: left;
              text-overflow: ellipsis;
              &:nth-of-type(1) {
                color: #14d6ff;
              }
              &:nth-of-type(3) {
                color: #fce62f;
                text-align: center;
              }
              &:nth-of-type(4) {
                color: #00abfb;
                text-align: right;
              }
            }
            &:nth-of-type(2) {
              span {
                &:nth-of-type(1) {
                  color: #fce62f;
                }
              }
            }
            &:nth-of-type(3) {
              span {
                &:nth-of-type(1) {
                  color: #009cff;
                }
              }
            }
            &:nth-of-type(1) {
              span {
                &:nth-of-type(1) {
                  color: #ff4a14;
                }
              }
            }
          }
        }
      }
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
  .left-list {
    position: absolute;
    left: 7.5rem;
    top: 0.92rem;
    z-index: 1000;
    .left-list-li {
      margin-top: 0.1rem;
      .name {
        padding: 0rem 0.12rem 0.03rem 0.06rem;
        color: #ffffff;
        font-size: 0.2rem;
        font-weight: bold;
        font-style: italic;
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
        background: url("../../../../assets/emergency-command/overall-situation/societal-security/radar-title-bg-normal.png")
          no-repeat center;
        background-size: 100% 100%;
        &.active {
          background: url("../../../../assets/emergency-command/overall-situation/societal-security/radar-title-bg-active.png")
            no-repeat center;
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
    .accident-area-rank {
      display: flex;
      width: 6.4rem;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 auto;
      margin-left: 0.55rem;
      margin-top: 0.1rem;
      height: 2.2rem;
      .rank-item {
        width: 3.17rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        .list-no {
          font-size: 0.16rem;
          line-height: 0.45rem;
          color: #fff;
          position: absolute;
          left: 0.18rem;
        }
        .accident-rank-icon {
          width: 0.49rem;
          height: 0.45rem;
          margin-top: 0.05rem;
          display: inline-block;
        }
        .accident-rank-desc {
          font-size: 0.17rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #fefefe;
          display: inline-block;
          width: 0.7rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .accident-rank-progress-container {
          width: 1.08rem;
          height: 0.1rem;
          background: rgba(0, 58, 117, 1);
          border-radius: 0px 4px 4px 0px;
          margin-left: 0.1rem;
          right: 0.3rem;
          .progress {
            width: 30%;
            height: 100%;
            background: linear-gradient(
              90deg,
              rgba(77, 177, 241, 1) 0%,
              rgba(93, 210, 244, 1) 100%
            );
            border-radius: 0px 4px 4px 0px;
          }
          display: inline-block;
        }
        .accident-rank-num {
          font-size: 0.17rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(241, 213, 169, 1);
          display: inline-block;
          margin-left: 0.13rem;
        }
      }
    }
  }
  .main-left-bottom {
    position: absolute;
    left: 0.29rem;
    top: 6.9rem;
    z-index: 9;
    width: 7.02rem;
    height: 3.9rem;
    background: url(/static/img/left-bottom.617f939.png) center no-repeat;
    background-size: 100% 100%;
    .g-title {
      margin-top: 0.5rem;
    }
    .select {
      position: absolute;
      right: 0.4rem;
      top: 0.45rem;
      z-index: 50;
      cursor: pointer;
      .select-input {
        // width:1rem;
      }
    }
    .left-bottom {
      width: 6.6rem;
      height: 2.8rem;
      margin-top: -0.05rem;
      margin-left: 0.25rem;
    }
    .btn-group {
      width: 2.3rem;
      margin-left: 2.55rem;
    }
  }
  .main-right-top {
    right: 0.29rem;
    // background: rgba(102,243,255,0.2);
    left: auto;
    .select {
      position: absolute;
      right: 0.4rem;
      top: 0.25rem;
      z-index: 50;
      cursor: pointer;
      .select-input {
        // width:1rem;
      }
    }
    .g-title {
      margin-top: 0.3rem;
    }
    .right-top {
      width: 6.6rem;
      height: 2.7rem;
      margin-top: -0.1rem;
      margin-left: 0.2rem;
    }
    .btn-group {
      width: 3.2rem;
      margin-left: 2.25rem;
    }
  }
  .main-right-center {
    right: 0.29rem;
    left: auto;
    .right-center {
      width: 6.4rem;
      height: 2.6rem;
      // margin-top: -.3rem;
      margin-left: 0.4rem;
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
    .right-bottom {
      width: 6.5rem;
      height: 2.65rem;
      margin-top: -0.05rem;
      margin-left: 0.4rem;
    }
    .time-container {
      width: 6rem;
      margin: 0 auto;
      overflow: auto;
      height: 2.4rem;
      -ms-overflow-style: none; /* IE 10+ */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
    }
    .select {
      position: absolute;
      right: 0.46rem;
      top: 0.46rem;
    }
  }
  .btn-group {
    width: 3.2rem;
    margin: 0 auto;
    position: relative;
    z-index: 100;
    .toggle-btn {
      font-size: 0.17rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      padding: 0.04rem 0.2rem;
      vertical-align: middle;
      &.active {
        background: linear-gradient(
          180deg,
          rgba(0, 234, 255, 1),
          rgba(0, 125, 255, 1)
        );
        box-shadow: 0px 1px 10px 0px rgba(195, 241, 255, 0.28);
        border-radius: 16px;
      }
    }
  }
}
.timeline {
  width: 100%;
  position: relative;
  margin-top: 0.1rem;
  li {
    height: 1.4rem;
    width: 100%;
    display: flex;
    align-items: flex-start;
    .timestamp {
      font-size: 0.17rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      font-style: italic;
      color: rgba(255, 210, 0, 1);
      min-width: 1rem;
      text-align: center;
      padding: 0 0.05rem;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .divider {
      width: 1px;
      height: 100%;
      background: rgba(102, 243, 255, 1);
      position: relative;
      &::before {
        content: "";
        width: 10px;
        height: 10px;
        background: linear-gradient(
          0deg,
          rgba(0, 182, 227, 1),
          rgba(10, 222, 165, 1)
        );
        border: 2px solid rgba(234, 234, 234, 1);
        border-radius: 50%;
        position: absolute;
        display: inline-block;
        left: -7px;
      }
    }
    .details {
      .title {
        font-size: 0.17rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        font-style: italic;
        color: rgba(255, 255, 255, 1);
        padding-left: 0.1rem;
        span {
          margin-left: 0.05rem;
        }
      }
      .content {
        font-size: 0.16rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        padding: 0.2rem;
        line-height: 24px;
        text-overflow: ellipsis;
        background: url("../../../../assets/emergency-command/overall-situation/societal-security/timeline-text-bg.png");
        background-size: 100% 100%;
      }
    }
  }
}
.select {
  .select-input {
    font-size: 0.16rem;
    font-family: Source Han Sans CN;

    padding: 0 0.2rem 0 0.1rem;
    font-weight: 400;
    /* text-align: center; */
    color: white;
    width: 1.2rem;
    height: 0.3rem;
    background: #002d71;
    border: 1px solid #298ff7;
    border-radius: 14px;
    display: inline-block;
    text-align: center;
    box-sizing: border-box;
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
    background: url("../../../../assets/emergency-command/overall-situation/security-situation/select_bg.png");
    background-size: 100% 100%;
    padding: 0.1rem;
    padding-top: 0.15rem;
    width: 1.26rem;
    left: -0.12rem;
    top: 0.24rem;
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
.disease-control-check {
  .icon {
    width: 0.15rem;
    height: 0.15rem;
  }
  position: absolute;
  right: 0;
  top: 0;
}
.checkbox {
  .icon {
    background: url("../../../../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/checkbox@2x.png");
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
      background: url("../../../../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/checkbox-active@2x.png");
    }
    .label {
      color: #f9d347;
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
  padding-left: 15px;
  padding-bottom: 0.2rem;
  background: url("../../../../assets/city-management/economic-run/three-base/title-icon.png")
    no-repeat;
  background-position: -0rem 0.2rem;
  background-size: 0.87rem 0.25rem;
  &:hover {
    color: #ffed66;
    text-shadow:0 0 0.1rem rgba(228,205,38,0.28);
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
        max-height: 2rem;
        overflow: auto;
        padding-bottom: .1rem;
        box-sizing: border-box;
        // /*! autoprefixer: off */
        // display: -webkit-box;
        // -webkit-box-orient: vertical;
        // -webkit-line-clamp: 6;
        // /* autoprefixer: on */
        // overflow: hidden;
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
