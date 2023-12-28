<!--
 * @Descripttion: 自然灾害
 * @Author: chengqiyu
 * @Date: 2020-03-8
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-06-05 11:08:24
 -->
<template>
  <div class="medical-resource-container">
    <!-- <div class="header-bg">安全态势自然灾害</div> -->
    <head-componen name="安全态势自然灾害"></head-componen>
    <!-- <div class="map-title" ><p>{{geoMapTitle}}</p></div> -->
    <div class="left-content">
      <div class="left-content-top">
        <div class="title-model">
          <div class="title">近五年突发事件分布情况</div>
        </div>
        <div class="box-content">
          <div id="distribute" class="natural-distribute">
            <div class="g-lt-right">
              <!-- <div class="g-radar-echart" ref="radarEchart"></div> -->
              <div class="lt-radar-box">
                <div
                  v-if="accidents.length"
                  class="lt-radar-item"
                  :class="activeIndex===index ? 'lt-item0'+(index+1)+' lt-item-active': 'lt-item0'+(index+1)"
                  @click="activeIndex = index"
                  v-for="(item,index) in accidents"
                  :key="index"
                >
                  <div class="lt-radar-per">{{item.name}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="natural-percent">
            <div class="security-rate" v-if="accidents&&accidents[activeIndex]">
              <p>{{accidents.length ? accidents[activeIndex].name : ''}}</p>
              <div class="rate-progress-container">
                <div
                  class="progress"
                  :style="{width:((accidents[activeIndex].value/(accidents[0].value+accidents[1].value+accidents[2].value+accidents[3].value)))*100+'%'}"
                ></div>
              </div>
              <p class="rate-desc">
                {{accidents&&accidents[activeIndex]&&accidents[activeIndex].value}}
                <small>件</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="left-content-middle">
        <div class="title-model">
          <div class="title">近五年自然灾害影响TOP3类型</div>
        </div>
        <div class="dialog-toggle-btn" @click="openHarzdDialog('')">
          <span>查看明细</span>
          <img src="../../../assets/city-management/market-supervision/img/details-icon.png" />
        </div>
        <div class="box-content">
          <div class="natural-rank">
            <div class="item" v-for="(item, index) in disasterList" :key="index">
              <div class="first">
                <p>
                  <span :class="'rank-title'+index">TOP</span>
                  <span :class="'rank-title'+index">{{index+1}}.</span>
                </p>
                <span>{{item.natureType}}</span>
                <img
                  src="../../../assets/emergency-command/overall-situation/natural-hazard/line.png"
                  alt
                />
              </div>
              <div class="second">
                <p>
                  经济损失：
                  <span>{{item&&item.ecoNum&&(item.ecoNum).toFixed(2)}}万元</span>
                </p>
                <p>
                  累计死亡人口：
                  <span>{{item&&item.deathNum}}人</span>
                </p>
              </div>
              <div class="third">
                <p>
                  累计受灾人口：
                  <span>{{item&&item.peopleNum}}人</span>
                </p>
                <p>
                  累计受灾乡镇：
                  <span>{{item&&item.countryNum}}个</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="left-content-bottom">
        <div class="title-model">
          <div class="title">近五年自然灾害影响TOP3区域</div>
        </div>
        <div class="box-content natural-content">
          <div id="natural-effect" class="natural-effect"></div>
          <img
            class="influenceAreaChart-arrow"
            :style="{bottom:arrowBottom+'rem'}"
            src="../../../assets/emergency-command/overall-situation/public-health/arrow-icon.png"
            alt
          />
          <div class="effect-content">
            <div class="effect-content-top" v-if="districtListInfo&&districtListInfo.ecoNum">
              <div>
                <p>经济损失</p>
                <div>
                  <span
                    class="effect-num"
                  >{{districtListInfo&&(districtListInfo.ecoNum/10000).toFixed(2)}}</span>
                  <span class="effect-unit">亿元</span>
                </div>
              </div>
              <div>
                <p>累计受灾人口</p>
                <div>
                  <span
                    class="effect-num"
                  >{{districtListInfo&&(districtListInfo.peopleNum/10000).toFixed(2)}}</span>
                  <span class="effect-unit">万人</span>
                </div>
              </div>
            </div>
            <div class="effect-content-bottom">
              <div>
                <p>累计死亡人口</p>
                <div>
                  <span class="effect-num">{{districtListInfo&&districtListInfo.deathNum}}</span>
                  <span class="effect-unit">人</span>
                </div>
              </div>
              <div>
                <p>累计受灾乡镇</p>
                <div>
                  <span class="effect-num">{{districtListInfo&&districtListInfo.countryNum}}</span>
                  <span class="effect-unit">个</span>
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
          <div class="title">近五年自然灾害影响变化情况</div>
        </div>
        <div class="disaster-change" id="disaster-change"></div>
      </div>
      <div class="right-content-middle">
        <div class="title-model">
          <div class="title">自然灾害监测点位区域分布</div>
          <div class="select" @click="naturalShow = !naturalShow">
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
        <div class="box-content">
          <div id="natural-area" class="natural-area"></div>
          <div class="natural-percent"></div>
        </div>
      </div>
      <div class="right-content-bottom">
        <div class="title-model">
          <div class="title">点位监测信息</div>
        </div>
        <div class="dialog-toggle-btn" @click="isShowDialog2=true">
          <span>查看明细</span>
          <img src="../../../assets/city-management/market-supervision/img/details-icon.png" />
        </div>
        <div class="box-content">
          <div id="natural-monitor" class="natural-monitor">
            <scroll-table
              v-if="ls.length"
              :column="columnProject"
              :data="ls"
              :max="5"
              :height="'2rem'"
              @showTitle="showTooltip"
              @hideTitle="hideTooltip"
            ></scroll-table>
          </div>
        </div>
      </div>
    </div>
    <div class="natural-menu">
      <heart-menu @selectd="handleClickMenu"></heart-menu>
    </div>
    <div class="natural-select-other">
      <select-other :data="menuList2" style="display:block"></select-other>
    </div>
    <!-- <div class="natural-panel">
      <div class="user-dos" @click="panelBig = !panelBig">
        <div class="legend">图例</div>
        <div class="icon"></div>
      </div>
      <operation-panel @select="operationPanelSelect" @clearAll="clearAllMarkers" v-show="panelBig"></operation-panel>
    </div> -->
    <makers-common></makers-common>
    <div class="natural-accident-total" v-if="overAllSituationList">
      <div>
        <div class="natural-accident-total-title">社会安全事故</div>
        <div class="natural-accident-total-content">
          <span>{{overAllSituationList.socialSum}}</span>
          <span>起</span>
        </div>
      </div>
      <div>
        <div class="natural-accident-total-title">安全生产事故</div>
        <div class="natural-accident-total-content">
          <span>{{overAllSituationList.proSum}}</span>
          <span>起</span>
        </div>
      </div>
      <div>
        <div class="natural-accident-total-title">公共卫生事故</div>
        <div class="natural-accident-total-content">
          <span>{{overAllSituationList.healthSum}}</span>
          <span>起</span>
        </div>
      </div>
      <div>
        <div class="natural-accident-total-title">自然灾害</div>
        <div class="natural-accident-total-content">
          <span>{{overAllSituationList.natureSum}}</span>
          <span>起</span>
        </div>
      </div>
      <div>
        <div class="natural-accident-total-title">总数</div>
        <div class="natural-accident-total-content">
          <span>{{overAllSituationList.sumAll}}</span>
          <span>起</span>
        </div>
      </div>
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
        <img src="../../../assets/common/line2.png" alt class="line2" />
        <div class="marker-info-box">
          <div class="title">
            <p>事件详情</p>
            <img src="../../../assets/common/close.png" @click="markerInfoClose(item)" />
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
      <p class="title">自然灾害</p>
      <img
        src="../../../assets/city-management/market-supervision/img/close-icon@2x.png"
        class="close-icon"
        @click="closeHarzdDialog"
        alt
      />
      <div class="dialog-body">
        <div class="top">
          <div class="input-con select">
            <label for>自然灾害：</label>
            <input type="text" class="input select" placeholder="类型" v-model="searchObj.name" />
            <img
              class="select-icon"
              @click="isShowTypeList=!isShowTypeList"
              src="../../../assets/city-management/market-supervision/img/select-icon@2x.png"
              alt
            />
            <ul class="select-container" v-if="typeList.length>0" v-show="isShowTypeList">
              <li
                v-for="(item,index) in typeList"
                :key="index"
                @click="typeListSelect(item)"
                :class="{active:searchObj.name===item.zr03001}"
              >{{item.zr03001}}</li>
            </ul>
          </div>
          <div class="input-con select">
            <label for>区县：</label>
            <input type="text" class="input select" placeholder="请选择" v-model="searchObj.code" />
            <img
              class="select-icon"
              @click="isShowQxList=!isShowQxList"
              src="../../../assets/city-management/market-supervision/img/select-icon@2x.png"
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
              src="../../../assets/city-management/market-supervision/img/select-icon@2x.png"
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
                    <td v-for="(m,n) in tableHeadConfig" :key="n" :style="{width:m.width}">
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
          <img src="../../../assets/common/event-icon.png" />
          <div class="marker-detail">
            <p class="title">近五年自然灾害影响情况</p>
            <div class="info-list">
              <div class="item">
                <p>经济损失</p>
                <p>
                  {{item.zr02006}}
                  <small>万元</small>
                </p>
              </div>
              <div class="item">
                <p>累计受灾人口</p>
                <p>
                  {{item.zr02004}}
                  <small>人</small>
                </p>
              </div>
              <div class="item">
                <p>累计死亡人口</p>
                <p>
                  {{item.zr02005}}
                  <small>人</small>
                </p>
              </div>
              <div class="item">
                <p>累计受灾乡镇</p>
                <p>
                  {{item.zr02003}}
                  <small>个</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="harzd-dialog harzd-dialog2" v-show="isShowDialog2">
      <p class="title">监测点位</p>
      <img
        src="../../../assets/city-management/market-supervision/img/close-icon@2x.png"
        class="close-icon"
        @click="isShowDialog2=false"
        alt
      />
      <div class="dialog-body">
        <div class="top">
          <div class="input-con select">
            <label for>类型：</label>
            <input type="text" class="input select" placeholder="类型" v-model="searchObj2.typeName" />
            <img
              class="select-icon"
              @click="isShowTypeList2=!isShowTypeList2"
              src="../../../assets/city-management/market-supervision/img/select-icon@2x.png"
              alt
            />
            <ul class="select-container" v-if="typeList2.length>0" v-show="isShowTypeList2">
              <li
                v-for="(item,index) in typeList2"
                :key="index"
                @click="typeListSelect2(item)"
                :class="{active:searchObj2.type===item.value}"
              >{{item.name}}</li>
            </ul>
          </div>
          <div class="input-con select">
            <label for>区县：</label>
            <input type="text" class="input select" placeholder="请选择" v-model="searchObj2.district" />
            <img
              class="select-icon"
              @click="isShowQxList2=!isShowQxList2"
              src="../../../assets/city-management/market-supervision/img/select-icon@2x.png"
              alt
            />
            <ul class="select-container" v-if="districtList.length>0" v-show="isShowQxList2">
              <li
                v-for="(item,index) in districtList"
                :key="'first_'+index"
                @click="qxListSelect2(item)"
                :class="{active:searchObj2.district===item.district}"
              >{{item.district}}</li>
            </ul>
          </div>
          <div class="input-con">
            <label for>关键字查找：</label>
            <input type="text" class="input select" placeholder="请输入..." v-model="searchObj2.name" />
            <img
              class="select-icon"
              src="../../../assets/city-management/market-supervision/img/select-icon@2x.png"
              alt
            />
          </div>
          <a href="javascript:void(0);" class="btn primary" @click="doSearch2">筛选</a>
        </div>
        <div class="bottom">
          <table class="data-table" style="margin-top:.2rem">
            <thead>
              <tr v-if="tableHeadConfig2.length>0">
                <th
                  v-for="(item,index) in tableHeadConfig2"
                  :key="index"
                  :style="{width:item.width}"
                >{{item.name}}</th>
              </tr>
            </thead>
          </table>
          <div class="data-table-body">
            <table class="data-table">
              <tbody>
                <template v-if="moPointsData.length>0">
                  <tr v-for="(x,y) in moPointsData" :key="y">
                    <td v-for="(m,n) in tableHeadConfig2" :key="n" :style="{width:m.width}"  @mouseenter="n!==(tableHeadConfig2.length-1)?showTooltip($event):''" @mouseleave="hideTooltip">
                      <template v-if="n===(tableHeadConfig2.length-1)">
                        <img
                          class="details-icon"
                          @click="signDetailsPoint(x)"
                          src="../../../assets/emergency-command/overall-situation/societal-security/details.png"
                          alt
                        />
                      </template>
                      <template v-else >{{x[m.key]}}</template>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="details_point" v-if="detailsPoint.id&&isShowMiniMarker===0" :id="detailsPoint.id">
      <img class="point" :src="imgPath+detailsPoint.icon01">
      <div class="maker-text">
        <img src="../../../assets/common/line2.png" alt class="line2" />
        <div class="marker-info-box">
          <div class="title">
            <img src="../../../assets/common/close.png" @click="detailsPointClose()" />
          </div>
          <div class="content_2_1">
              <p style="color:#FCE62F">{{detailsPoint.name}}</p>
              <p>站点地址：{{detailsPoint.address}}</p>
              <p>站点类型：{{detailsPoint.type}}</p>
          </div>
        </div>
      </div>
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
import * as hazardApis from '@/api/emergency-command/safety-production'
import scrollTable from '@/components/table-scroll'
import heartMenu from '@/components/menu'
import selectOther from '@/components/select-other.vue'
import heartPanel from '@/components/heart-panel'
import {
  naturalArea,
  disasterChange,
  naturalDistribution
} from '../../../echarts-data/emergency-command/safa-situation/natural-hazard'
import operationPanel from '@/components/operation-panel'
import commonFn, {
  areaLocation
} from '@/api/emergency-command/overallSituationMapOperation'
import { imgPath } from '@/utils/BasePath'
import headComponen from '@/components/head-component'
import textModal from '@/components/text-modal' // 显示标题完整信息
import top1 from '../../../assets/emergency-command/overall-situation/public-health/bar_top1.png'
import top2 from '../../../assets/emergency-command/overall-situation/public-health/bar_top2.png'
import top3 from '../../../assets/emergency-command/overall-situation/public-health/bar_top3.png'
import makersCommon from '@/components/panel-command'
const p1 = require('@/assets/city-management/economic-run/three-base/shape1.png')
const p2 = require('@/assets/city-management/economic-run/three-base/shape2.png')
const p3 = require('@/assets/city-management/economic-run/three-base/shape3.png')
const p4 = require('@/assets/city-management/economic-run/three-base/shape4.png')
const p5 = require('@/assets/city-management/economic-run/three-base/shape1.png')
export default {
  components: {
    scrollTable,
    heartMenu,
    selectOther,
    heartPanel,
    operationPanel,
    headComponen,
    textModal,
    makersCommon
  },
  data () {
    return {
      img: [p1, p2, p3, p4, p5], // panel图片集
      checkedValue: [], // panel 选中值
      panelIndex: 1, // panel默认激活下标
      activeIndex: 1,
      timer: null,
      imgPath,
      activeSelect: 1, // 自然灾害监测点位主要分布区域选中
      naturalList: [
        { name: '地质灾害监测点', value: '01' },
        { name: '河流水位监测点', value: '02' },
        { name: '城市内涝监测点', value: '03' },
        { name: '气象监测点', value: '04' },
        { name: '水库水文监测点', value: '05' },
        { name: '雨量监测点', value: '06' }
      ],
      // 近五年年突发事故分布情况
      overAllSituationList: [],
      // 近五年年自然灾害影响变化情况
      disasterList: [],
      // 影响较大区域选中
      effectArea: {},
      effect: [],
      naturalShow: false,
      // 右下panel
      panelList: [
        {
          name: '应急资源',
          title: '应急资源',
          dataIndex: 'resource',
          api: ''
        },
        {
          name: '突发事件',
          title: '突发事件',
          dataIndex: 'incident',
          api: 'OVER_ALL_SPREAD'
        },
        {
          name: '重点防护',
          title: '重点防护',
          dataIndex: 'defence',
          api: ''
        },
        {
          name: '监测对象',
          title: '监测对象',
          dataIndex: 'monitoring',
          api: ''
        }
      ],
      // 右下panel二级菜单
      childrenList: {},
      // list
      menuList2: [
        {
          name: '自然灾害',
          routeName: 'naturalHazard',
          selected: true
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
          selected: false
        }
      ],
      columnProject: [
        { name: '点位名称', width: '.8rem', dataIndex: 'name' },
        { name: '点位类型', width: '1.6rem', dataIndex: 'type' },
        { name: '监测值', dataIndex: 'value' },
        { name: '时间', dataIndex: 'time', width: '2rem' }
      ],
      ls: [],
      accountends: {},
      mapMarkerList: [],
      thingDetailsMap: {},
      isShowMiniMarker: 0,
      GLOBAL_EVENT_TYPE: 1,
      panelBig: false,
      GLOBAL_YEAR: 2018,
      accidents: [],
      districtIndex: 0,
      publicHealthDistrictList: [],
      influenceAreaImgs: [top1, top2, top3],
      geoMapTitle: '近五年自然灾害事件经济损失区域分布',
      districtListInfo: null,
      arrowBottom: 2.05,
      isShowDialog: false,
      isShowDialog2: false,
      // isShowMiniMarker: 0,
      natureData: [],
      areaMapData: [],
      moPointsData: [],
      typeList: [],
      typeList2: [],
      districtList: [],
      searchObj: {
        name: '所有',
        code: '',
        starttime: '',
        endtime: ''
      },
      searchObj2: {
        type: '',
        typeName: '',
        district: '',
        name: '',
        page: 1,
        pageSize: 2000
      },
      isShowQxList: false,
      isShowTypeList: false,
      isShowQxList2: false,
      isShowTypeList2: false,
      //  activeQx: {},
      qxTimer: null,
      qxActiveIndex: 0,
      areaLocation,
      tableHeadConfig: [
        {
          name: '自然灾害',
          width: '16.66%',
          key: 'zr03001'
        },
        // {
        //   name: '区县',
        //   width: '14.28%',
        //   key: ''
        // },
        {
          name: '年份',
          width: '16.66%',
          key: 'zr03003'
        },
        {
          name: '经济损失(万元)',
          width: '16.66%',
          key: 'zr03007'
        },
        {
          name: '受灾人口(人)',
          width: '16.66%',
          key: 'zr03005'
        },
        {
          name: '死亡人口(人)',
          width: '16.66%',
          key: 'zr03006'
        },
        {
          name: '受灾乡镇(个)',
          width: '16.66%',
          key: 'zr03004'
        }
      ],
      detailsPoint: {},
      tableHeadConfig2: [
        {
          name: '类型',
          width: '20%',
          key: 'type'
        },
        // {
        //   name: '区县',
        //   width: '14.28%',
        //   key: ''
        // },
        {
          name: '名称',
          width: '30%',
          key: 'name'
        },
        {
          name: '地址',
          width: '40%',
          key: 'address'
        },
        {
          name: '详情',
          width: '10%',
          key: ''
        }
      ]
    }
  },
  methods: {
    // 近五年年突发事故分布情况
    accident5Years () {
      hazardApis.ACCIDENT5YEARS(this).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data.accident5YearsMap
          let jkl = [
            { name: '安全生产', value: data.productionRate },
            { name: '自然灾害', value: data.natureRate },
            { name: '社会安全', value: data.socialRate },
            { name: '公共卫生', value: data.healthRate }
          ]
          this.accidents = jkl
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 近五年年自然灾害影响排名
    nature5Years () {
      hazardApis.NATUTE5YEARS(this).then(re => {
        if (re.data.serviceSuccess) {
          this.disasterList = re.data.data.nature5YearsList
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 近五年自然灾害影响较大区域
    natureDistrict () {
      hazardApis.NATUTEDISTRICT(this).then(res => {
        if (res.data.serviceSuccess) {
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
            this.publicHealthDistrictList = res.data.natureDistrictList
            if (this.publicHealthDistrictList.length > 0) {
              let list = this.publicHealthDistrictList
              let arr1 = []
              let arr2 = []
              // console.log(arr1)
              arr1 = list.sort((a, b) => {
                return a.peopleNum - b.peopleNum
              })
              for (let i in arr1) {
                colorArr[i].value = arr1[i].peopleNum
                arr2.push(colorArr[i])
                // influenceAreaChart.xAxis.data = []
                // arr2.push(list[i].district)
              }
              let obj = naturalArea()
              obj.series[0].data = arr2.map((item) => {
                return item
              })
              obj.yAxis.data = arr1.map((item) => {
                return item.district
              })
              this.districtListInfo = this.publicHealthDistrictList[
                this.publicHealthDistrictList.length - 1
              ]
              let chart = echarts.init(
                document.querySelector('#natural-effect')
              )
              chart.setOption(obj)
              chart.on('click', params => {
                this.districtListInfo = this.publicHealthDistrictList[
                  params.dataIndex
                ]
                //  console.log('params.dataIndex', params.dataIndex)
                this.arrowBottom = 0.45 + 0.8 * params.dataIndex
              })
            }
          }
        } else {
          console.log(res.data.errors)
        }
      })
    },
    // 近五年年自然灾害影响变化情况
    natureTrend () {
      hazardApis.NATURETREND(this).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data.natureTrendMap
          echarts
            .init(document.getElementById('disaster-change'))
            .setOption(disasterChange(data))
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 自然灾害监测点位主要分布区域
    natureSpotSpread () {
      let t = this.naturalList && this.naturalList[this.activeSelect].value
      hazardApis.NATURESPOTSPREAD(this, { type: t }).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data.natureSpotSpreadMap
          echarts
            .init(document.getElementById('natural-area'))
            .setOption(naturalDistribution(data))
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 实时监测情况
    timeInfo () {
      hazardApis.TIMEINFO(this).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data.timeInfoList
          this.ls = data
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 选择灾害
    handleNatrual (index) {
      this.activeSelect = index
      this.naturalShow = false
      this.natureSpotSpread()
    },
    // 切换panel选中下标
    handlePanelActive (index) {
      this.panelIndex = index
      // let {dataIndex, api} = this.panelList[index]
      // 如果子级为空
      // if (!this.childrenList[dataIndex]) {
      //   hazardApis[api]()
      // }
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
    handleSelect (e) {
      let that = this
      setTimeout(() => {
        console.log(that.checkedValue)
      }, 100)
    },
    influenceAreaClick (index) {
      this.districtIndex = index
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
        this.searchObj.code = this.areaMapData[this.qxActiveIndex].area_full
        // this.handleSearch(qx[this.qxActiveIndex])
      }, 5000)
    },
    doSearch () {
      this.queryDataInfoBycode()
    },
    doSearch2 () {
      this.districtDetails()
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
    queryNatureMapInfo () {
      hazardApis.QUERY_NATURE_MAP_INFO(this, {}).then(res => {
        if (res.data.serviceSuccess) {
          let data = res.data.data.mapInfo.mapinfo
          this.areaMapData = data
          this.areaMapData.map((item, index) => {
            item = Object.assign(item, this.areaLocation[item.area_full])
            item.id = 'nature_map_point_' + index
            item.showTextFlag = false
            return item
          })
          this.searchObj.code = this.areaMapData[0].area_full
          window._m.addMakers(this.areaMapData, data => {
            this.isShowMiniMarker = data
          })
          this.typeList = res.data.data.mapInfo.natruetype.concat([
            {
              zr03001: '所有'
            }
          ])
        } else {
          console.log(res.data.errors)
        }
      })
    },
    queryDataInfoBycode () {
      this.searchObj.name =
        this.searchObj.name === '所有' ? '' : this.searchObj.name
      hazardApis.QUERY_DATA_INFO(this, this.searchObj).then(res => {
        if (res.data.serviceSuccess) {
          this.natureData = res.data.data.dataInfoBycode
        }
      })
    },
    typeListSelect (item) {
      this.isShowTypeList = false
      this.searchObj.name = item.zr03001
    },
    qxListSelect (item) {
      this.isShowQxList = false
      this.searchObj.code = item.area_full
    },
    typeListSelect2 (item) {
      this.isShowTypeList2 = false
      this.searchObj2.type = item.value
      this.searchObj2.typeName = item.name
    },
    qxListSelect2 (item) {
      this.isShowQxList2 = false
      this.searchObj2.district = item.district
    },
    openHarzdDialog (value) {
      this.isShowDialog = true
      this.searchObj.code = value
      this.natureData = []
      this.handleClearTime()
      this.doSearch()
    },
    closeHarzdDialog () {
      this.isShowDialog = false
      this.handleMove()
    },
    districtDetails () {
      let { type, name, district, page, pageSize } = this.searchObj2
      hazardApis
        .AREA_NATURA_DETAIL(this, { type, name, district, page, pageSize })
        .then(res => {
          if (res.data.serviceSuccess) {
            this.moPointsData = res.data.data.districtDetailsMap.detailsList
            this.districtList = res.data.data.districtDetailsMap.districtList
            this.typeList2 = res.data.data.districtDetailsMap.typeList
          }
        })
    },
    signDetailsPoint (item) {
      let param = {
        type01: item.typeCode,
        id: item.id,
        type: 'monitor'
      }
      if (item.lon) {
        hazardApis.AREA_POINTS_DETAIL(this, param).then((res) => {
          res = res.data
          if (res.serviceSuccess) {
          //  console.log('res.data.data.baseInfo', res.data.data.baseInfo, res.data)
            this.detailsPoint = {
              lon: item.lon,
              lat: item.lat,
              icon01: item.icon01,
              // id: 'natural_detailsPoint',
              // ...res.data.baseInfo,
              name: res.data.data.baseInfo && res.data.data.baseInfo.jc02005,
              address: res.data.data.baseInfo && res.data.data.baseInfo.address,
              type: res.data.data.baseInfo && res.data.data.baseInfo.type01,
              id: 'natural_detailsPoint'

            }
            //  console.log(' this.detailsPoint', this.detailsPoint, res.data.baseInfo)
            this.isShowDialog2 = false
            this.handleClearTime()
            window._m.addMakers([this.detailsPoint], data => {
              this.isShowMiniMarker = data
            })
          }
        })
      }
    },
    detailsPointClose () {
      window._m && window._m.removeMaker([this.detailsPoint.id], true)
      this.detailsPoint = {}
      this.handleMove()
    },
    // 鼠标移入显示标题
    showTooltip (e) {
      this.$refs.textModal.showTooltip(e)
    },
    hideTooltip () {
      this.$refs.textModal.hideTooltip()
    }
  },
  computed: {
    allNum: function () {
      let num = 0
      this.accountends.map(re => {
        num += re.num
      })
      return num
    }
  },
  beforeDestroy () {
    window._m.clear()
  },
  mounted () {
    this.accident5Years()
    this.nature5Years()
    this.natureDistrict()
    this.natureTrend()
    this.natureSpotSpread()
    this.timeInfo()
    this.getOverAllSituation()
    this.initDateInput()
    this.queryNatureMapInfo()
    this.handleGetDataByTime()
    this.districtDetails()
    // this.getOverAllSpread(this.GLOBAL_EVENT_TYPE)
    // window._m.redirectDimenion(() => {}, false, false)
  }
}
</script>
<style lang="scss" scoped>
  .details-icon {
    width: 0.2rem;
    height: 0.2rem;
    cursor: pointer;
  }
  .details_point {
    position: absolute;
    .marker-info-box{
      height: 1.5rem !important;
    }
    z-index: 7;
    .maker-text{
       border-top: 1px solid transparent;
        height: .2rem;
      .title{
        position: absolute;
        right:.1rem;
        top:-.1rem
      }
      .content_2_1{
        padding-top: .2rem;
        padding-left: .2rem;
        p{
          color:#fff;
          font-size:.18rem;
          padding: .05rem  .1rem;
        }
      }
    }
  .point {
    width: 0.4rem;
    height: 0.4rem;
    position: relative;
    margin-top: -0.2rem;
    margin-left: -0.2rem;
    z-index: 10;
  }
  .maker-text {
    top: -1.55rem;
    left: 0.45rem;
  }
}
.harzd-dialog {
  width: 10.09rem;
  height: 4.62rem;
  background: url("../../../assets/emergency-command/overall-situation/natural-hazard/kuang@2x.png");
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
      padding: 0.2rem 0.1rem;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 0 0 0.1rem 0.1rem;
      border: 0.01rem solid #298ff7;
      z-index: 9;
      max-height: 2rem;
      padding-bottom: 0.2rem;
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
        white-space: normal;
        overflow: hidden;
        max-width: 0.6rem;
        padding: 0 0.1rem;
        text-overflow: ellipsis;
        white-space: nowrap;
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
    background: url("../../../assets/common/event-line.png");
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
      background: url("../../../assets/emergency-command/overall-situation/natural-hazard/kuang@2x.png");
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
.influenceAreaChart-arrow {
  position: absolute;
  width: 0.8rem;
  left: 2.6rem;
  bottom: 0.45rem;
}
#naturalArea {
  width: 3.2rem;
  height: 2.4rem;
  padding: 0.1rem 0.1rem 0.1rem 0.5rem;
  box-sizing: border-box;
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
  background: url("../../../assets/emergency-command/overall-situation/security-situation/title_bg.png");
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
.natural-rank {
  .item {
    display: flex;
    align-items: center;
    margin-left: -0.1rem;
    padding-left: 0.1rem;
    .first {
      display: flex;
      align-items: center;
      width: 30%;
      box-sizing: border-box;
      padding-right: 0.15rem;
      justify-content: space-between;
      p {
        font-family: Impact;
        span:nth-child(1) {
          font-size: 0.17rem;
          font-weight: bold;
          letter-spacing: 1px;
        }
        span:nth-child(2) {
          font-size: 0.3rem;
          font-style: italic;
          font-weight: bold;
          margin-right: 0.05rem;
          width: 0.22rem;
        }
      }
      span {
        color: #fff;
        text-align: right;
        font-size: 0.24rem;
        font-style: italic;
      }
      img {
        width: 0.4rem;
        height: 2px;
        margin-left: 0.04rem;
      }
    }
    .second,
    .third {
      width: 35%;
      font-size: 0.16rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(254, 254, 254, 1);
      p {
        line-height: 2.1;
        span {
          font-family: Source Han Sans CN;
          font-weight: bold;
          font-style: italic;
          color: rgba(255, 210, 0, 1);
        }
      }
    }
    &:nth-child(even) {
      background: rgba(7, 69, 182, 0.3);
    }
  }
}
.rank-title0 {
  color: #e55711 !important;
}
.rank-title1 {
  color: #f5cf39 !important;
}
.rank-title2 {
  color: #09b0f9 !important;
}
.medical-resource-container {
  background: #000;
}
.natural-accident-total {
  position: absolute;
  left: 7.5rem;
  top: 0.92rem;
  z-index: 100;
  > div {
    margin-bottom: 0.15rem;
    .natural-accident-total-title {
      padding: 0rem 0.12rem 0.03rem 0.06rem;
      color: #ffffff;
      font-weight: bold;
      font-size: 0.2rem;
      font-style: italic;
      box-sizing: border-box;
      line-height: 1.4;
      transform: perspective(1rem) rotateX(-15deg);
      transform-origin: left;
      background: rgba(213, 96, 44, 1);
    }
    &:nth-child(4) {
      .natural-accident-total-title {
        width: 75%;
      }
    }
    &:nth-child(5) {
      .natural-accident-total-title {
        width: 45%;
      }
    }
    .natural-accident-total-content {
      span {
        font-style: italic;
        color: #fff;
      }
      span:nth-child(1) {
        font-size: 0.4rem;
        // margin-right: 10px;
      }
      span:nth-child(2) {
        font-weight: bold;
        font-size: 0.24rem;
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
  background: url("../../../assets/city-management/common-service/medical-resource/head-bg.png")
    no-repeat;
  background-size: 100% 100%;
  left: 11.4rem;
  z-index: 99;
}
.natural-percent {
  position: absolute;
  top: 0;
  right: 0;
  width: 2.2rem;
  text-align: center;
  .natural-percent-name {
    font-size: 0.23rem;
    font-weight: bold;
    color: #fff;
  }
  .natural-percent-value {
    font-size: 0.44rem;
    font-weight: bold;
    color: #ffd200;
    small {
      font-size: 0.3rem;
    }
  }
  > img {
    width: 1.8rem;
    margin: 0.2rem 0;
  }
}
.natural-effect {
  width: 3rem;
  height: 2.6rem;
  margin-left: -0.1rem;
  img {
    width: 100%;
    height: 91%;
    cursor: pointer;
  }
}
.left-content {
  position: absolute;
  top: 0.16rem;
  left: 0.29rem;
  z-index: 99;
  box-sizing: border-box;
  width: 7rem;
  height: 10rem;
  .left-content-top {
    box-sizing: border-box;
    width: 100%;
    height: 3.2rem;
    background: url("../../../assets/city-management/common-service/medical-resource/panle-02.png")
      no-repeat;
    background-size: 100% 103%;
    padding: 0.5rem 0.2rem 0 0.55rem;
    .g-lt-right {
      position: absolute;
      left: 0.6rem;
      top: 0.45rem;
      width: 3.67rem;
      height: 2.77rem;
      .g-radar-echart {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -0.5rem;
        margin-top: -0.5rem;
        width: 1rem;
        height: 1rem;
      }
      .lt-item-active {
        background: url("../../../assets/city-management/economic-run/three-base/sel-atv.png")
          no-repeat;
        background-size: 100% 100%;
      }
      .lt-radar-box {
        width: 1.58rem;
        height: 1.58rem;
        position: absolute;
        left: 50%;
        top: 53%;
        transform: translate(-50%, -50%);
        background: url("../../../assets/city-management/common-service/social-security/radar.png")
          center no-repeat;
        background-size: 100%;
        .lt-radar-item {
          width: 0.96rem;
          padding: 0.05rem 0;
          position: absolute;
          .lt-text-item01 {
            padding-left: 0.16rem;
            height: 0.3rem;
            line-height: 0.3rem;
            font-size: 0.18rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #fff;
          }
          .lt-radar-per {
            padding-left: 0.16rem;
            width: 100%;
            height: 0.24rem;
            line-height: 0.24rem;
            font-size: 0.16rem;
            font-weight: bold;
            color: #fff;
          }
          .lt-text-item02 {
            padding-left: 0.16rem;
            height: 0.3rem;
            line-height: 0.3rem;
            font-size: 0.18rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            font-style: italic;
            color: rgba(237, 214, 174, 1);
          }
        }
        .lt-item01 {
          left: -0.86rem;
          top: 0rem;
        }
        .lt-item02 {
          right: -0.86rem;
          top: 0;
        }
        .lt-item03 {
          right: -0.86rem;
          bottom: 0;
        }
        .lt-item04 {
          left: -0.86rem;
          bottom: 0;
        }
      }
    }
  }
  .left-content-middle {
    box-sizing: border-box;
    width: 100%;
    height: 3.2rem;
    background: url("../../../assets/city-management/common-service/medical-resource/panle-02.png")
      no-repeat;
    background-size: 100% 103%;
    padding: 0.5rem 0.2rem 0 0.55rem;
    position: relative;
  }
  .left-content-bottom {
    box-sizing: border-box;
    width: 100%;
    height: 3.9rem;
    background: url("../../../assets/city-management/common-service/medical-resource/panle-02.png")
      no-repeat;
    background-size: 100% 103%;
    padding: 0.6rem 0.2rem 0 0.55rem;
    .title-model {
      .title {
        margin-top: -0.25rem;
      }
    }
    .natural-content {
      // display: flex;
      position: relative;
      .effect-content {
        width: 2.7rem;
        height: 2.5rem;
        background: url(/static/img/left-bottom-bg.d52c29e.png);
        background-size: 100% 100%;
        position: absolute;
        right: 0.2rem;
        top: 0.05rem;
        //top: 0.8rem;
        > div {
          position: absolute;
          display: flex;
          color: #dfe2fd;
          width: 90%;
          font-size: 0.16rem;
          text-align: center;
          > div {
            flex: 1;
          }
          p {
            margin-bottom: 0.1rem;
          }
          .effect-num {
            font-size: 0.28rem;
            font-family: Impact;
            font-weight: bold;
            font-style: italic;
            color: #fce62f;
          }
          .effect-unit {
            margin-left: 0.05rem;
            font-size: 0.15rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            font-style: italic;
            color: #fff;
          }
        }
        .effect-content-top {
          top: 0.25rem;
          left: 0.1rem;
        }
        .effect-content-bottom {
          bottom: 0.35rem;
          left: 0.1rem;
        }
      }
    }
  }
}
.right-content {
  position: absolute;
  right: 0.29rem;
  top: 0.16rem;
  height: 10rem;
  width: 7rem;
  z-index: 9;
  .right-content-top {
    box-sizing: border-box;
    width: 100%;
    height: 3.2rem;
    background: url("../../../assets/city-management/common-service/medical-resource/panle-02.png")
      no-repeat;
    background-size: 100% 103%;
    padding: 0.5rem 0.2rem 0 0.55rem;
    .disaster-change {
      height: 2rem;
      margin-left: -0.2rem;
    }
  }
  .right-content-middle {
    box-sizing: border-box;
    width: 100%;
    height: 3.2rem;
    background: url("../../../assets/city-management/common-service/medical-resource/panle-02.png")
      no-repeat;
    background-size: 100% 103%;
    padding: 0.5rem 0.2rem 0 0.55rem;
    .box-content {
      position: relative;
      top: 0rem;
    }
    .natural-area {
      height: 2.2rem;
    }
  }
  .right-content-bottom {
    box-sizing: border-box;
    width: 100%;
    position: relative;
    height: 3.9rem;
    background: url("../../../assets/city-management/common-service/medical-resource/panle-02.png")
      no-repeat;
    background-size: 100% 103%;
    padding: 0.6rem 0.4rem 0 0.55rem;
    .dialog-toggle-btn {
      top: 0.4rem;
    }
    .natural-monitor {
      margin-top: 0.1rem;
    }
    .title-model {
      .title {
        margin-top: -0.25rem;
      }
    }
  }
}
.title-model {
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 0.24rem;
    padding-bottom: 0.2rem;
    padding-left: 0.12rem;
    margin-left: -0.2rem;
    margin-top: -0.2rem;
    color: #fff;
    background: url("../../../assets/city-management/economic-run/three-base/title-icon.png")
      no-repeat;
    background-position: -0rem 0.2rem;
    background-size: 0.87rem 0.25rem;
    span {
      font-size: 0.13rem;
      font-weight: 400;
      color: #fff;
      margin-left: 0.1rem;
    }
  }
  .select {
    position: relative;
    top: -0.15rem;
    margin-right: 0.1rem;
    background: #034073;
    border-radius: 0.1rem;
    height: 0.3rem;
    line-height: 0.3rem;
    border: 2px solid #2368b1;
    padding: 0 0.25rem 0 0.1rem;
    font-size: 0.16rem;
    font-weight: 400;
    color: #fff;
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
      top: 0.3rem;
      left: -0.1rem;
      width: 100%;
      text-align: center;
      color: #fff;
      font-size: 0.16rem;
      background: url("../../../assets/city-management/economic-run/major-project/right-bottom-02.png")
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
}
.natural-menu {
  position: absolute;
  bottom: 0;
  width: 7.3rem;
  height: 1.6rem;
  left: 7.5rem;
  z-index: 999;
}
.natural-select-other {
  position: absolute;
  top: 1rem;
  right: 10rem;
  z-index: 100;
}
.natural-panel {
  position: absolute;
  left: 29.4rem;
  bottom: 0.5rem;
  z-index: 100;
}
.g-panel-right {
  padding: 0.2rem 0;
  position: absolute;
  top: 0.31rem;
  left: 2rem;
  width: 3.5rem;
  height: 85%;
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
    width: 33%;
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
      top: 6px;
      left: 6px;
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
.marker-info-box {
  width: 4rem;
  height: 4rem;
  background: url("../../../assets/emergency-command/overall-situation/societal-security/marker-info-bg.png");
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
    background: url("../../../assets/common/top.png") no-repeat center;
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
.harzd-dialog2 {
  left: 16.5rem;
  top: 2.25rem;
}
.title {
  &:hover {
    color: #ffed66;
    text-shadow:0 0 0.1rem rgba(228,205,38,0.28);
  }
}
</style>
