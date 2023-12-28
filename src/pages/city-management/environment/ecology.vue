<!--
 * @Descripttion: 生态环境
 * @Author: chengqiyu
 * @Date: 2020-03-5
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-20 09:56:53
 -->
<template>
  <div class="medical-resource-container">
    <head-component name="生态环境"></head-component>
    <div class="natural-panel">
      <div class="user-dos" @click="panelBig = !panelBig">
        <div class="legend">图例</div>
        <div class="icon"></div>
      </div>
      <heart-panel
        :list="[]"
        v-if="panelBig">
        <div class="g-panel-right" slot="panel-content">
          <!-- <p>数据类型</p> -->
          <ul class="g-panel-btn">
            <li @click="tabShowFlag = !tabShowFlag" :class="tabShowFlag ? 'g-active' : ''">大气监测</li>
            <li @click="tabShowFlag = !tabShowFlag" :class="!tabShowFlag ? 'g-active' : ''">监测站点</li>
          </ul>
          <div v-show="tabShowFlag" v-for="(item,index) in panelList" :key="index">
            <img :src="item.icon" />
            <p :title="item.name">{{item.name}}</p>
            <div class="check">
              <input
                @change.stop="handleSelect"
                type="radio"
                name="check"
                :id="'ck'+index"
                v-model="checkedValue"
                :value="item.id"
                class="check-box"/>
              <label :for="'ck'+index" class="sy-check"></label>
            </div>
          </div>
          <div v-show="!tabShowFlag" v-for="(item,index) in panelList2" :key="index + 'a'">
            <img :src="item.icon" />
            <p :title="item.name">{{item.name}}</p>
            <div class="check">
              <input
                @change.stop="handleSelect2"
                type="checkbox"
                name="checkbox"
                :id="'ck2'+index"
                v-model="checkedValue2"
                :value="item.id"
                class="check-box"/>
              <label :for="'ck2'+index" class="sy-check"></label>
            </div>
          </div>
        </div>
      </heart-panel>
      <!-- <div class="small-icon" v-else>
        <div v-for="(item,index) in panelList" :key="index">
          <img :src="require('@/assets/common/icon'+item.index+'.png')" />
          <img :src="item.icon" />
        </div>
      </div> -->
    </div>
    <div class="g-maker-box" v-for="(item, index) in areasDatas" :key="index" :id="item.id">
      <div class="g-maker-top" :style="'padding-right: ' + (item.unit === '' ? '0.25rem;' : '0.8rem;')">
        <div class="maker-circle" :style="'font-size: ' + (item.upType.length > 3 ? '0.15rem' : '0.18rem') + ';'">{{item.upType}}</div>
        {{item.air}}
        <span>{{item.unit}}</span>
      </div>
      <div class="g-maker-bottom"></div>
    </div>
    <div v-show="item.showTextFlag" class="g-maker-box2" v-for="(item, index) in areasDatas2" :key="index + 'a'" :id="item.id">
      <div class="g-info-box" @click="showPage(item)" v-if="item.type === 'air'" @mouseenter="item.hoverFlag = true" @mouseleave="item.hoverFlag = false">
        <img src="@/assets/common/air-icon2.png" />
        <div v-show="item.hoverFlag" class="g-info-text">{{item.zy15001}}</div>
      </div>
      <div @mouseenter="item.hoverFlag = true" @mouseleave="item.hoverFlag = false" class="g-info-box" @click="showPage(item)" v-if="item.type === 'water'">
        <img src="@/assets/common/water-icon.png" />
        <div v-show="item.hoverFlag" class="g-info-text">{{item.zy16001}}</div>
      </div>
    </div>
    <!-- maker -->
    <!--<maker-component-->
      <!--v-for="(item, index) in makersDatas"-->
      <!--:key="index"-->
      <!--:makerData="item">-->
      <!--<div slot="maker">-->
        <!--<img src="../../../assets/common/student_blue.png" alt="" class="topHead" />-->
      <!--</div>-->
      <!--<div slot="text" class="g-maker-content">-->
        <!--<h3>基本信息</h3>-->
        <!--<div class="g-maker-single">-->
          <!--<div><span>企业名称：</span><span>某某有限责任公司</span></div>-->
          <!--<div><span>企业名称：</span><span>某某有限责任公司</span></div>-->
        <!--</div>-->
        <!--<div class="g-maker-single">-->
          <!--<div><span>信用代码：</span><span>某某有限责任公司</span></div>-->
          <!--<div><span>地址：</span><span>某某有限责任公司</span></div>-->
        <!--</div>-->
        <!--<h3>处罚信息</h3>-->
        <!--<div class="g-maker-single">-->
          <!--<div><span>决定书文号：</span><span>某某有限责任公司</span></div>-->
          <!--<div><span>处罚种类：</span><span>某某有限责任公司</span></div>-->
        <!--</div>-->
        <!--<div class="g-maker-single">-->
          <!--<div><span>立案日期：</span><span>某某有限责任公司</span></div>-->
          <!--<div><span>处罚金额：</span><span>某某有限责任公司</span></div>-->
        <!--</div>-->
        <!--<div class="g-maker-single">-->
          <!--<div><span>决定下达日期：</span><span>某某有限责任公司</span></div>-->
          <!--<div><span>主要违法行为：</span><span>某某有限责任公司</span></div>-->
        <!--</div>-->
        <!--<div class="g-maker-single">-->
          <!--<div><span>处罚依据：</span><span>某某有限责任公司</span></div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</maker-component>-->
    <!-- maker-end -->
    <div class="left-content">
      <div>
        <div class="title-model">
          <div class="title hover-color">大气环境</div>
        </div>
        <div class="base-list">
          <div>
            <div class="area-title hover-color">空气质量实时状况</div>
            <div class="air-contents">
              <div id="air-quality" class="air-echarts"></div>
              <div class="air-content-po">
                <div style="margin-top: 0.2rem;"><span>空气质量：</span><span class="blue" :style="setColor(airLevel.dq09003)">{{airLevel.dq09004}}</span></div>
                <!-- <div><span>首要污染物：</span><span class="yellow">{{airLevel.dq09005}}</span></div> -->
                <div><span>PM2.5：</span><span class="blue">{{airLevel.dq09006}} </span><span>μg / m³</span></div>
                <div><span>PM10：</span><span class="yellow">{{airLevel.dq09007}} </span><span>μg / m³</span></div>
              </div>
            </div>
            <div class="air-title">空气质量指数</div>
          </div>
          <div>
            <div class="area-title hover-color">优良天数完成情况<span class="global-data-title">（2020年）</span></div>
            <div class="air-contents">
              <div id="air-days" class="air-echarts"></div>
              <div class="air-content-po air-conten-second">
                <div><span>目标天数：</span><span class="blue">{{goodness.zy02001}}</span><span>天</span></div>
                <div><span>完成天数：</span><span class="yellow">{{goodness.zy02002}}</span><span>天</span></div>
                <div><span>剩余天数：</span><span class="blue">{{goodness.zy02003}}</span><span>天</span></div>
                <div><span>同期上升:</span><span class="yellow">{{goodness.zy02004}}</span><span>%</span></div>
              </div>
            </div>
            <div class="air-title">优良天数</div>
          </div>
          <div>
            <div class="area-title hover-color">PM2.5目标完成情况<span class="global-data-title">（2020年）</span></div>
            <div class="air-contents">
              <div id="air-pm" class="air-echarts"></div>
              <div class="air-pm-value">{{pm25.zy03001}}</div>
              <div class="air-zhizhen"></div>
              <div class="air-content-po nongdu">
                <div><span>平均浓度：</span><span class="blue">{{pm25.zy03001}}</span><span>μg / m³</span></div>
                <div><span>目标浓度：</span><span class="yellow">{{pm25.zy03002}}</span><span>μg / m³</span></div>
              </div>
            </div>
            <div class="air-title">平均浓度</div>
          </div>
        </div>
      </div>
      <div class="plan-area">
        <div class="title-model">
          <div class="title hover-color">水环境</div>
        </div>
        <div class="water-content">
          <div>
            <div class="area-title hover-color">国考断面水质达标情况</div>
            <div id="each-area"></div>
          </div>
          <div>
            <div class="area-title hover-color">省考断面水质达标情况</div>
            <div id="each-ratio"></div>
          </div>
        </div>
      </div>
      <div class="year-area">
        <div class="title-model">
          <div class="title hover-color">土，声环境</div>
        </div>
        <div class="water-content">
          <div>
            <div class="area-title hover-color">疑似污染块年趋</div>
            <div id="pollute"></div>
          </div>
          <div>
            <div class="area-title hover-color">功能区声环境达标情况<span class="global-data-title">（2020年第一季度）</span></div>
            <div id="voice"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-top-panle">
      <div class="panle-title hover-color">污染源</div>
      <div class="right-echarts-01">
        <div class="progress">
          <div class="area-title hover-color" style="font-weight: normal; margin-left: -.3rem;">市本级环评、排污许可申请</div>
          <!-- <div>
            <p>环评申请</p>
            <div>
              <div id="progress1"></div>
              <span class="progress-name">{{licence.zy09001}}</span>
              <span class="progress-unit">件</span>
            </div>
          </div> -->
          <!-- <div class="area-title" style="font-weight: normal; margin: .1rem 0 .1rem -.2rem">排污许可</div>
          <div>
            <p>变更</p>
            <div>
              <div id="progress2"></div>
              <span class="progress-name">{{licence.zy09003}}</span>
              <span class="progress-unit">件</span>
            </div>
          </div> -->
          <!-- <div>
            <p>延续</p>
            <div>
              <div id="progress3"></div>
              <span class="progress-name">{{licence.zy09002}}</span>
              <span class="progress-unit">件</span>
            </div>
          </div>
          <div>
            <p>补办</p>
            <div>
              <div id="progress4"></div>
              <span class="progress-name">{{licence.zy09005}}</span>
              <span class="progress-unit">件</span>
            </div>
          </div> -->
          <div class="enforce-num">
          <div>
            <div id="enforce-num3"></div>
            <div class="enforce-mask">环评申请</div>
            <div class="enforce-num-conten">
              <span>{{licence.zy09001}}</span>
              <span>件</span>
            </div>
          </div>
          <div>
            <div id="enforce-num4"></div>
            <div class="enforce-mask">排污许可申请</div>
            <div class="enforce-num-conten">
              <span>{{licence.zy09002}}</span>
              <span>件</span>
            </div>
          </div>
        </div>
        </div>
        <div class="pollute-company">
          <div class="area-title hover-color">重点污染源企业<span class="global-data-title">（2019年）</span></div>
          <div class="company-num">企业数量总数：</div>
          <div class="monitoring-left-value">
            <div v-for="(item, index) in keyCompanyNum" :key="index">{{item}}</div>
            <div class="monitor-unit">家</div>
          </div>
          <div id="companys"></div>
          <div class="companys-title"><span>数量</span><span>(家)</span></div>
        </div>
        <div class="dangerous">
          <div class="area-title hover-color">危险废物处置情况</div>
          <div id="dangerous"></div>
        </div>
      </div>
    </div>
    <div class="right-bottom-panle">
      <div class="panle-title hover-color">行政执法</div>
      <div class="right-echarts-02">
        <div class="enforce-num">
          <div>
            <div id="enforce-num1"></div>
            <div class="enforce-mask">案件数量</div>
            <div class="enforce-num-conten">
              <span>{{administration.zy11002}}</span>
              <span>件</span>
            </div>
          </div>
          <div>
            <div id="enforce-num2"></div>
            <div class="enforce-mask">罚没金额</div>
            <div class="enforce-num-conten">
              <span>{{administration.zy11003}}</span>
              <span>万元</span>
            </div>
          </div>
        </div>
        <div class="enforce-law">
          <div class="area-title hover-color">年度趋势</div>
          <div id="enforce-law"></div>
        </div>
      </div>
      <!-- 表格 -->
      <div
        v-show="tablePos.show"
        class="echarts-table"
        :style="{top: (tablePos.top - 1)+'rem',left: (tablePos.left - 3)+'rem'}">
        <scroll-table
          :column="columns"
          :data="tablePos.data"
          :max="7"
          :height="'2.85rem'"></scroll-table>
      </div>
    </div>
    <!--<div class="middle-panel">-->
      <!--<select-other-->
        <!--:data="menuList"-->
        <!--:active="0"-->
        <!--class="menu-list"-->
        <!--@navClick="navClick"></select-other>-->
    <!--</div>-->
    <div class="panel-content">
      <main-list></main-list>
    </div>
    <div class="ecology-list">
      <div class="ecology-list-first ecology-list-common" @click="showXiala">省生态环境厅
        <img src="../../../assets/common/xiala2.png" v-if="isXiala">
        <img src="../../../assets/common/xiala.png" v-if="!isXiala">
      </div>
      <div class="ecology-list-item" v-if="isXiala">
        <p @click="toIframe1">空气质量</p>
        <p @click="toIframe2">水环境质量</p>
      </div>
      <div class="ecology-list-sec ecology-list-common" style="margin-top:0.1rem;" @click="showXiala2">省监测总站
        <img src="../../../assets/common/xiala2.png" v-if="isXiala2">
        <img src="../../../assets/common/xiala.png" v-if="!isXiala2">
      </div>
      <div class="ecology-list-item" v-if="isXiala2">
        <p  @click="toIframe3">空气实时报</p>
        <p  @click="toIframe4">水质实时报</p>
      </div>
    </div>
    <div class="modal" v-if="showIframe1">
      <div @click="showIframe1 = false" class="iframe-close"></div>
      <iframe ref="iframe1" class="iframe1"  :src="iframeSrc1" frameborder="0" name="iframe1"></iframe>
    </div>
    <div class="modal" v-if="showIframe2">
      <div @click="showIframe2 = false" class="iframe-close"></div>
      <iframe class="iframe2"  :src="iframeSrc2" frameborder="0" name="iframe2"></iframe>
    </div>
    <div class="modal" v-if="showIframe3">
      <div @click="showIframe3 = false" class="iframe-close"></div>
      <iframe class="iframe3"  :src="iframeSrc3" frameborder="0" name="iframe3"></iframe>
    </div>
    <div class="modal" v-if="showIframe4">
      <div @click="showIframe4 = false" class="iframe-close"></div>
      <iframe class="iframe4"  :src="iframeSrc4" frameborder="0" name="iframe4"></iframe>
    </div>
  </div>
</template>
<script>
import headComponent from '@/components/head-component'
import makerComponent from '@/components/maker-component.vue'
import leshanArea from '../../../../static/CesiumAssets/js/leshanArea.js'
import selectOther from '@/components/select-other.vue'
import heartPanel from '@/components/heart-panel.vue'
import mainList from '@/components/menu.vue'
import ecologyApis from '@/api/city-management/environment'
import scrollTable from '@/components/table-scroll.vue'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/title'
import icon01 from '@/assets/city-management/economic-run/major-project/icon01.png'
import icon02 from '@/assets/city-management/economic-run/major-project/icon02.png'
import icon03 from '@/assets/city-management/economic-run/major-project/icon03.png'
import icon04 from '@/assets/city-management/economic-run/major-project/icon04.png'
import icon05 from '@/assets/city-management/economic-run/major-project/icon05.png'
// import icon06 from '@/assets/city-management/economic-run/major-project/icon06.png'
import icon07 from '@/assets/city-management/economic-run/major-project/icon07.png'
import airImg from '@/assets/common/air-icon2.png'
import waterImg from '@/assets/common/water-icon.png'
import {openThirdPage} from '@/utils/utils'
import {
  waterRates,
  yearRates,
  pollution,
  voice,
  dangerous,
  enforceLaw,
  companys,
  // progress,
  enforceNum,
  airQuelity,
  goodDays
} from '../../../echarts-data/city-management/environment/ecology'
export default {
  components: {
    scrollTable,
    makerComponent,
    selectOther,
    mainList,
    headComponent,
    heartPanel
  },
  data () {
    return {
      isXiala: false,
      isXiala2: false,
      iframeSrc1: 'http://182.148.109.15:82/PublishService/nav/naviGation.vm?target=0',
      iframeSrc2: 'http://182.148.109.15:82/PublishService/nav/naviGation.vm?target=1',
      iframeSrc3: 'http://www.scnewair.cn:6112/publish/index.html',
      iframeSrc4: 'http://119.6.113.148:9090/scszjcsj/szjc_sj/DataPublish/preview.xhtml',
      showIframe1: false,
      showIframe2: false,
      showIframe3: false,
      showIframe4: false,
      tooltipList: [
        {name: '规划面积：', text: '42平方公里'},
        {name: '主导产业：', text: '总部经济、研发、孵化、 销售等生产性服务业、信 息化产业'},
        {name: '发展目标：', text: '2020年产值达250亿元'}
      ],
      selectList: [
        {name: '全部区域'},
        {name: '总部经济区'},
        {name: '五通桥基地'},
        {name: '犍为基地'},
        {name: '夹江基地'}
      ],
      colors: ['#04bf66', '#fde500', '#ff7500', '#e40f0f', '#a9021b', '#6e0037'],
      // 跳转页面list
      menuList: [
        {
          name: '生态环境',
          routeName: 'ecology'
        },
        {
          name: '大气环境',
          routeName: 'atmosphericEnvironment'
        },
        {
          name: '水环境',
          routeName: 'waterEnvironment'
        }
      ],
      // 空气质量实时状况
      airLevel: {},
      // 优良天数完成情况
      goodness: {},
      // PM2.5目标完成情况
      pm25: {},
      // 排污许可证信息
      licence: {},
      // 企业信息
      companies: {},
      // 重点污染源企业总数
      keyCompanyNum: '',
      // 行政处罚
      administration: {},
      // 行政处罚Echart实列
      lawEchart: null,
      columns: [
        {name: '企业名称', dataIndex: 'zy08001'},
        {name: '处罚时间', dataIndex: 'zy13006'},
        {name: '原因', dataIndex: 'zy13007'},
        {name: '结果', dataIndex: 'zy13003'}
      ],
      // 柱状图表格信息
      tablePos: {
        data: [],
        left: 0,
        top: 0,
        show: false
      },
      makersDatas: [],
      // 地图图例新加-start
      panelBig: false,
      // 大气监测
      panelList: [
        {name: 'AQI', icon: icon01, id: 'aqi', unit: ''},
        {name: 'PM2.5', icon: icon02, id: 'pm25', unit: 'μg / m3'},
        {name: 'PM10', icon: icon03, id: 'pm10', unit: 'μg / m3'},
        {name: 'O3', icon: icon07, id: 'o3', unit: 'μg / m3'},
        {name: 'NO2', icon: icon05, id: 'no2', unit: 'μg / m3'},
        {name: 'SO2', icon: icon04, id: 'so2', unit: 'μg / m3'}
      ],
      // 监测站点
      panelList2: [
        {name: '大气监测站点', icon: airImg, id: 'air', unit: ''},
        {name: '水质监测站点', icon: waterImg, id: 'water', unit: 'μg / m3'}
      ],
      checkedValue: 'aqi',
      checkedValue2: ['air'],
      areasDatas: [],
      areasDatas2: [],
      tabShowFlag: true
      // 地图图例薪假-end
    }
  },
  mounted () {
    this.initEcharts()
    this.queryInfos()
    this.queryCharts()
    this.getLonAndLat()
    this.queryRealTime()
    this.getAreaAqi(this.checkedValue)
    this.getAreaAqi2()
  },
  methods: {
    toIframe1 () {
      // this.showIframe1 = !this.showIframe1
      // window.open('http://182.148.109.15:82/PublishService/nav/naviGation.vm?target=0', '_blank', 'width:1920,height:1080')
      openThirdPage('http://182.148.109.15:82/PublishService/nav/naviGation.vm?target=0')
    },
    toIframe2 () {
      // this.showIframe2 = !this.showIframe2
      // window.open('http://182.148.109.15:82/PublishService/nav/naviGation.vm?target=1', '_blank', 'width:1920,height:1080')
      openThirdPage('http://182.148.109.15:82/PublishService/nav/naviGation.vm?target=1')
    },
    toIframe3 () {
      // this.showIframe3 = !this.showIframe3
      // window.open('http://www.scnewair.cn:6112/publish/index.html', '_blank', 'width:1920,height:1080')
      openThirdPage('http://www.scnewair.cn:6112/publish/index.html')
    },
    toIframe4 () {
      // this.showIframe4 = !this.showIframe4
      // window.open('http://119.6.113.148:9090/scszjcsj/szjc_sj/DataPublish/preview.xhtml', '_blank', 'width:1920,height:1080')
      openThirdPage('http://119.6.113.148:9090/scszjcsj/szjc_sj/DataPublish/preview.xhtml')
    },
    showXiala () {
      this.isXiala = !this.isXiala
    },
    showXiala2 () {
      this.isXiala2 = !this.isXiala2
    },
    navClick (data) {
      console.log(data)
    },
    setColor (data) {
      let airlel = (data - 1) / 50 < 0 ? 0 : ((data - 1) / 50) > 5 ? 5 : ~~((data - 1) / 50)
      return {color: this.colors[airlel]}
    },
    // 点击图例-大气监测
    handleSelect (e) {
      this.areasDatas = []
      if (this.checkedValue.length !== 0) {
        this.getAreaAqi(this.checkedValue)
      }
    },
    // 点击图例-监测站点
    handleSelect2 (e) {
      console.log(this.checkedValue2)
      if (this.checkedValue2.length === 0) {
        this.areasDatas2.forEach(item => {
          item.showTextFlag = false
        })
      } else {
        this.areasDatas2.forEach(ite => {
          ite.showTextFlag = false
        })
        this.checkedValue2.forEach(item => {
          this.areasDatas2.forEach(ite => {
            if (item === ite.type) {
              ite.showTextFlag = true
            }
          })
        })
      }
    },
    // 点击检测点图标
    showPage (item) {
      if (item.type === 'air') { // 空气
        openThirdPage('http://www.scnewair.cn:6112/publish/index.html')
      } else { // 水
        openThirdPage('http://119.6.113.148:9090/scszjcsj/szjc_sj/DataPublish/preview.xhtml')
      }
    },
    // 查询区县大气指标
    getAreaAqi (type) {
      ecologyApis.AREAAQI(this, {type: type}).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data
          data.queryAQI.forEach((item, index) => {
            if (item.zy1802 !== '市本级') {
              // item.lon = Number(item.zy1804)
              // item.lat = Number(item.zy1803)
              item.lon = +leshanArea[item.zy1802].lon
              item.lat = +leshanArea[item.zy1802].lat
              item.type = type
              item.upType = type.toUpperCase()
              if (item.upType === 'PM25') {
                item.upType = 'PM2.5'
              }
              if (index === 0) {
                item.showTextFlag = true
              } else {
                item.showTextFlag = false
              }
              if (type === 'aqi') {
                item.unit = ''
              } else {
                item.unit = 'μg/m³'
              }
              item.id = 'ecology' + index
              this.areasDatas.push(item)
            }
          })
          window._m.addMakers(this.areasDatas, (type) => {
            if (type === 1) { // 三维
            } else { // 二维
            }
          })
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 查询区县监测站点
    getAreaAqi2 () {
      ecologyApis.AREAPOINTS(this, {}).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data
          console.log(data)
          let temp = []
          data.air.forEach((item, index) => {
            item.lon = +item.zy15005
            item.lat = +item.zy15006
            item.id = 'points-air' + index
            item.showTextFlag = true
            item.hoverFlag = false
            item.type = 'air'
            temp.push(item)
          })

          data.water.forEach((item, index) => {
            item.lon = +item.zy16008
            item.lat = +item.zy16009
            item.id = 'points-water' + index
            item.showTextFlag = false
            item.hoverFlag = false
            item.type = 'water'
            temp.push(item)
          })
          this.areasDatas2 = temp.slice()
          window._m.addMakers(this.areasDatas2, (type) => {
            if (type === 1) { // 三维
            } else { // 二维
            }
          })
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 获取非图表信息
    queryInfos () {
      ecologyApis.queryInfos(this).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data
          // 优良天数
          this.goodness = data.goodness
          goodDays.series[0].data[0].value = data.goodness.zy02002
          goodDays.series[0].data[0].label.formatter = data.goodness.zy02002 + ''
          goodDays.series[0].data[2].value = data.goodness.zy02001 - data.goodness.zy02002
          echarts.init(document.getElementById('air-days')).setOption(goodDays)
          // PM2.5目标完成情况
          this.pm25 = data.pm25
          // 排污许可证信息
          this.licence = data.licence
          // let allNum = 0
          // for (let key in data.licence) {
          //   allNum += data.licence[key]
          // }
          // echarts.init(document.getElementById('progress1')).setOption(progress(allNum, data.licence.zy09001))
          // echarts.init(document.getElementById('progress2')).setOption(progress(allNum, data.licence.zy09003))
          // echarts.init(document.getElementById('progress3')).setOption(progress(allNum, data.licence.zy09002))
          // echarts.init(document.getElementById('progress4')).setOption(progress(allNum, data.licence.zy09005))
          // echarts.init(document.getElementById('progress5')).setOption(progress(allNum, data.licence.zy09004))
          // echarts.init(document.getElementById('progress6')).setOption(progress(allNum, data.licence.zy09006))
          // 重点污染源企业
          let strNum = data.keyCompany.zy10001 + ''
          if (strNum.length < 5) {
            let lose = 5 - strNum.length
            for (let i = 0; i < lose; i++) {
              strNum = '0' + strNum
            }
          }
          this.keyCompanyNum = strNum
          echarts.init(document.getElementById('companys')).setOption(companys(data.keyCompany))
          // 企业信息
          this.companies = data.companies
          // 行政处罚
          this.administration = data.administration
        } else {
          console.log(re.data.errors)
        }
      })
    },
    queryCharts () {
      ecologyApis.queryCharts(this).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data
          // 功能区声环境达标情况
          echarts.init(document.getElementById('voice')).setOption(voice(data.voice))
          // 国省考断面水质年达标情况
          console.log(data)
          yearRates.xAxis[0].data = data.waterOfYear.xAxis
          yearRates.series[0].data = data.waterOfYear.data[0]
          echarts.init(document.getElementById('each-area')).setOption(yearRates)
          console.log(yearRates)
          // 危险废物处置情况
          echarts.init(document.getElementById('dangerous')).setOption(dangerous(data.dangers))
          // 国省考断面水质达标情况
          waterRates.xAxis[0].data = data.waterOfPlace.xAxis
          waterRates.series[0].data = data.waterOfPlace.data[0]
          echarts.init(document.getElementById('each-ratio')).setOption(waterRates)
          // 疑似污染块年趋势
          echarts.init(document.getElementById('pollute')).setOption(pollution(data.earth))
          // 行政执法年度趋势
          this.lawEchart = echarts.init(document.getElementById('enforce-law'))
          this.lawEchart.setOption(enforceLaw(data.administrationOfYear))
          // 添加点击事件
          /* let that = this
         this.lawEchart.off('click')
          this.lawEchart.off('mouseout')
          this.lawEchart.on('click', function (params) {
            ecologyApis.queryPunishment(that, {year: params.name}).then(res => {
              if (re.data.serviceSuccess) {
                let datas = res.data.data
                that.tablePos.data = datas.data
                let b = parseInt(document.documentElement.style.fontSize)
                that.tablePos.left = params.event.offsetX / b
                that.tablePos.top = params.event.offsetY / b
                that.tablePos.show = true
              } else {
                console.log(re.data.errors)
              }
            })
          })
          // 添加点击事件
          this.lawEchart.on('mouseout', function (params) {
            that.tablePos.show = false
          }) */
        } else {
          console.log(re.data.errors)
        }
      })
    },
    initEcharts () {
      echarts.init(document.getElementById('enforce-num2')).setOption(enforceNum)
      echarts.init(document.getElementById('enforce-num1')).setOption(enforceNum)
      echarts.init(document.getElementById('enforce-num3')).setOption(enforceNum)
      echarts.init(document.getElementById('enforce-num4')).setOption(enforceNum)
    },
    // 获取经纬度
    getLonAndLat () {
      ecologyApis.queryPoints(this).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data
          let d = []
          data.air.map((re, index) => {
            d.push({
              lat: +re.zy15006,
              lon: +re.zy15005,
              showTextFlag: false,
              id: 'ecology' + index
            })
          })
          this.makersDatas = d
          window._m.addMakers(this.makersDatas)
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 空气质量
    queryRealTime () {
      ecologyApis.queryRealTime(this).then(re => {
        console.log(re)
        if (re.data.serviceSuccess) {
          let data = re.data.data.realTime
          this.airLevel = data
          // 等级颜色
          let airlel = (data.dq09003 - 1) / 50 < 0 ? 0 : ((data.dq09003 - 1) / 50) > 5 ? 5 : ~~((data.dq09003 - 1) / 50)
          echarts.init(document.getElementById('air-quality')).setOption(airQuelity(data.dq09003 + '', this.colors[airlel]))
        } else {
          console.log(re.data.errors)
        }
      })
    }
  },
  beforeDestroy () {
    window._m.clear()
    // 解绑函数
    this.lawEchart.off('click')
    this.lawEchart.off('mouseout')
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
// 地图样式-start
  .natural-panel{
    position: absolute;
    bottom: .5rem;
    right: 12.3rem;
    overflow: hidden;
    z-index: 100;
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
        background-size: auto 100%;
      }
      .tIcon {
        transform: rotate(180deg);
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
    .g-panel-right{
      padding: .2rem 0;
      position: absolute;
      top: .31rem;
      left: 1rem;
      width: 4.5rem;
      // height: 85%;
      height: 2.7rem;
      overflow-y: auto;
      overflow: -moz-scrollbars-none;
      > p {
        margin-bottom: .1rem;
        font-size: .17rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #fff;
        letter-spacing: 1px;
        margin-left: .3rem;
      }
      > .g-panel-btn {
          width: 100%;
          height: 0.25rem;
          margin-left: .3rem;
          margin-bottom: .1rem;
          overflow: hidden;
          list-style: none;
          li {
            float: left;
            list-style: none;
            padding: 0 0.1rem;
            margin-right: 0.1rem;
            height: 0.25rem;
            line-height: 0.25rem;
            border-radius: 0.13rem;
            font-size:0.16rem;
            font-family:Source Han Sans CN;
            font-weight:500;
            color:rgba(255,255,255,1);
            cursor: pointer;
          }
          .g-active {
            background: #D5602C;
          }
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
          top: 6px;
          left: 6px;
        }
        input[type=radio]{
          visibility: hidden;
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
    .g-panel-right::-webkit-scrollbar {
      display: none;
    }
  }
  .g-maker-box {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -1.7rem;
    z-index: 1;
    .g-maker-top {
      position: absolute;
      left: 0.05rem;
      top: -0.05rem;
      padding-left: 0.35rem;
      padding-right: 0.8rem;
      box-sizing: border-box;
      font-size: 0.3rem;
      height: 0.46rem;
      line-height: 0.46rem;
      font-weight:bold;
      font-family:Source Han Sans CN;
      color:rgba(255,255,255,1);
      background: url("../../../assets/city-management/economic-run/major-project/marker-title-bg.png") no-repeat;
      background-size: 100% 100%;
      span {
        position: absolute;
        top: 0;
        right: 0.2rem;
        line-height: 0.5rem;
        font-size: 0.17rem;
      }
      .maker-circle {
        position: absolute;
        left: -0.3rem;
        top: -0.05rem;
        z-index: 2;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 100%;
        background: #04BF66;
        border: 0.03rem solid #7DE6FF;
        font-size:0.18rem;
        line-height: 0.5rem;
        text-align: center;
        font-family:Source Han Sans CN;
        font-weight:600;
        color:rgba(255,255,255,1);
      }
    }
    .g-maker-bottom {
      position: absolute;
      width: 0.03rem;
      height: 1.45rem;
      // background:linear-gradient(0deg,rgba(125,230,255,1) 0%,rgba(125,230,255,0.8) 82%, rgba(125,230,255,0) 100%);
      background:linear-gradient(0deg,rgba(125,230,255,0) 0%,rgba(125,230,255,0.8) 35%, rgba(125,230,255,1) 100%);
    }
  }
  .g-maker-box2 {
    z-index: 2;
    position: absolute;
    .g-info-box {
      position: relative;
      .g-info-text {
        position: absolute;
        left: 50%;
        top: -0.35rem;
        transform: translateX(-50%);
        white-space: nowrap;
        display: inline-block;
        padding: 0 0.1rem;
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.20rem;
        font-weight: 800;
        border-radius: 0.04rem;
        border: 0.01rem solid #80CDFA;
        // background: url('../../../assets/common/natural-btn.png') center no-repeat;
        // background-size: 100% 100%;
        font-style:italic;
        color: #FFFFFF;
      }
    }
    img {
      width: 0.4rem;
      height: 0.4rem;
      cursor: pointer;
    }
  }
// 地图样式-end
.modal{
    z-index: 999;
    margin: 0 auto;
    // width: 15rem;
    // height: 7rem;
    width: 100%;
    height: 100%;
    position: absolute;
    // left: 14rem;
    // top:2rem;
    .iframe1{
      // width: 15rem;
      // height: 7rem;
      width: 100%;
      height: 100%;
    }
    .iframe2{
      width: 100%;
      height: 100%;
    }
    .iframe3{
      width: 100%;
      height: 100%;
    }
    .iframe4{
      // width: 15rem;
      // height: 7rem;
      width: 100%;
      height: 100%;
    }
    .iframe-close {
      position: absolute;
      right: 0.2rem;
      top: 0.2rem;
      width: 0.3rem;
      height: 0.3rem;
      background: url('../../../assets/common/callclose.png') center no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
  }
  .yellow{
    color: #FFE700;
  }
  .blue{
    color: #00F4FA;
  }
  .air-echarts{
    width: 2rem;
  }
  .air-contents{
    position: relative;
    display: flex;
    height: 1.5rem;
  }
  .middle-panel{
    position: absolute;
    top: 1.5rem;
    right: 14.8rem;
    z-index: 100;
  }
  .air-pm-value{
    position: absolute;
    top: .35rem;
    left: .7rem;
    padding-right: 10px;
    font-size: .25rem;
    font-family: DIN Condensed;
    font-weight: bold;
    font-style: italic;
    background-image:-webkit-linear-gradient(right, #58BDD7, #5FCFEA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
  }
  .g-maker-content{
    box-sizing: border-box;
    width: 10.5rem;
    background: url("../../../assets/city-management/economic-run/major-project/icon-bg-01.png") no-repeat;
    background-size: 100% 100%;
    padding: .3rem .3rem;
    z-index: 100;
    h3{
      color: #fff;
      font-size: .21rem;
      margin: .2rem 0 .2rem .2rem;
    }
    .g-maker-single{
      display: flex;
      padding: .1rem .2rem;
      margin-bottom: .1rem;
      > div{
        flex: 1;
        span:nth-child(1){
          font-size: .18rem;
          color: #DFE2FD;
        }
        span:nth-child(2){
          font-size: .2rem;
          color: #FCE62F;
          font-weight: bold;
          font-style: italic;
        }
      }
    }
  }
  .air-zhizhen{
    position: absolute;
    top: .5rem;
    left: .75rem;
    width: .35rem;
    height: .7rem;
    background: url("../../../assets/city-management/economic-run/three-base/zhiz.png") no-repeat;
    background-size: 100% 100%;

  }
  #air-pm{
    background: url("../../../assets/city-management/economic-run/three-base/yib.png") no-repeat;
    background-size: 76% 82%;
    background-position: 20% 47%;
  }
  .nongdu{
    padding-top: .4rem;
  }
  .air-content-po{
    color: #fff;
    font-size: .19rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    >div{
      margin: .05rem 0;
      display: flex;
      > span:nth-child(1){
        display: inline-block;
        margin-right: .05rem;
        font-weight: normal;
      }
    }
  }
  .air-conten-second {
    span:nth-child(1){
      width: .95rem;
    }
  }
  .air-title{
    box-sizing: border-box;
    padding-left: .2rem;
    margin-left: .2rem;
    font-size: .2rem;
    font-weight: bold;
    font-style: italic;
    color: #fff;
  }
  .left-content{
    position: absolute;
    top: .8rem;
    left: 0;
    z-index: 99;
    box-sizing: border-box;
    width: 14rem;
    height: 10rem;
    background: url('../../../assets/city-management/economic-run/three-base/backbase.png') no-repeat;
    background-size: 100% 100%;
    padding: .5rem .5rem .7rem .6rem;
  }
  .title-model{
    display: flex;
    justify-content: space-between;
    .title{
      font-size: .24rem;
      padding-left: .15rem;
      padding-bottom: .2rem;
      margin-left: -10px;
      color: #fff;
      background: url("../../../assets/city-management/economic-run/three-base/title-icon.png") no-repeat;
      background-position: -0rem .2rem;
      background-size: .87rem .28rem;
    }
  }
  .base-list{
    box-sizing: border-box;
    padding: 0 10px;
    height: 2.2rem;
    display: flex;
    >div{
      flex: 1;
      margin-top: .07rem;
    }
  }
  .area-title{
    position: relative;
    font-size: .2rem;
    color: rgba(255,255,255,1);
    padding-left: .45rem;
    &:after{
      content: '';
      position: absolute;
      top: .1rem;
      left: .28rem;
      width: .13rem;
      height: .13rem;
      background: rgba(0,126,251,1);
    }
    &:before{
      box-sizing: border-box;
      content: '';
      position: absolute;
      top: .05rem;
      left: .23rem;
      width: .13rem;
      height: .13rem;
      border: 2px solid rgba(253,209,0,1);
    }
  }
  #each-area,
  #year-areas,
  #each-ratio{
    height: 2rem;
  }
  #pollute,
  #voice{
    height: 2.2rem;
  }
  #pollute{
    background: url("../../../assets/city-management/economic-run/three-base/bar-back.png") no-repeat;
    background-size: 80% 50%;
    background-position: 50% 80%;
  }
  .plan-area{
    height: 2.9rem;
    margin-top: 10px;
    .water-content{
      display: flex;
      > div{
        flex: 1;
        margin-top: .1rem;
      }
    }
  }
  .year-area{
    margin-top: 10px;
    height: 2.9rem;
    .water-content{
      display: flex;
      > div{
        flex: 1;
        margin-top: .1rem;
      }
    }
  }
  .medical-resource-container {
    background: #000;
    position: absolute;
    .tool-tip {
      background:rgba(0,18,55,0.4);
      border: 2px solid rgba(72,170,244,1);
      color: #9BE9FF;
      font-size: 0.14rem;
      padding: 0.12rem 0.16rem;
      p {
        span:last-of-type{
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
      background: url('../../../assets/city-management/common-service/medical-resource/panle-02.png') no-repeat;
      background-size: 100% 100%;
      .tab-bar {
        display: flex;
        flex-direction: row;
        width: 2.20rem;
        height: 0.48rem;
        margin: 0.97rem auto;
        font-style:italic;
        color:rgba(152,229,250,1);
        font-size: 0.18rem;
        background:url('../../../assets/city-management/common-service/medical-resource/tilte-bg.png') no-repeat;
        background-size:100% 100%;
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
        width:90%;
        height: 3.5rem;
      }
    }
    .right-top-panle {
      position: absolute;
      width: 12rem;
      height: 4.9rem;
      right: 0.29rem;
      top: 0.9rem;
      z-index: 110;
      background: url('../../../assets/city-management/common-service/medical-resource/panle-03.png') no-repeat;
      background-size: 100% 104%;
      .right-echarts-01 {
        display: flex;
        position: absolute;
        left: 6%;
        bottom: 0.54rem;
        width: 92%;
        height: 3.2rem;
        // .progress{
        //   flex: 2.25;
        //   > div{
        //     font-size: .18rem;
        //     color: #FFFFF8;
        //     > div{
        //       display: flex;
        //       height: .3rem;
        //       div{
        //         flex: 1;
        //         margin-right: .2rem;
        //       }
        //       .progress-name{
        //         color: #96F0F7;
        //         font-size: .2rem;
        //         margin-right: .05rem;
        //       }
        //       .progress-unit{
        //         color: #ABEEF5;
        //         font-size: .16rem;
        //       }
        //     }
        //   }
        // }
        .enforce-num{
          flex: 2.25;
          > div {
            position: relative;
            .enforce-mask {
              position: absolute;
              left: .33rem;
              bottom: .1rem;
              font-size: .19rem;
              color: #03FAA7;
              border: 2px solid #03FAA7;
              text-align: center;
              width: 1.29rem;
              height: .27rem;
              line-height: .27rem;
              border-radius: .2rem;
              background: #262795;
            }
            .enforce-num-conten{
              position: absolute;
              width: .92rem;
              text-align: center;
              top: .55rem;
              left: .55rem;
              color: #00FAA8;
              span:nth-child(1){
                font-size: .3rem;
              }
              span:nth-child(2){
                font-size: .16rem;
              }
            }
            #enforce-num3,
            #enforce-num4 {
              height: 1.6rem;
            }
          }
        }
        .pollute-company{
          position: relative;
          flex: 3.7;
          .companys-title{
            position: absolute;
            bottom: 22%;
            left: 15%;
            color: #fff;
            span:nth-child(1){
              font-size: .26rem;
              font-weight: bold;
              font-style: italic;
            }
            span:nth-child(2){
              font-size: .16rem;
              font-weight: bold;
              font-style: italic;
              color: #DFE2FD;
            }
          }
          .company-num{
            margin-top: .1rem;
            margin-left: .3rem;
            width: 1.56rem;
            height: .28rem;
            font-size: .17rem;
            font-family:Source Han Sans CN;
            font-weight: bold;
            font-style: italic;
            color: #FCE62F;
            border: 2px solid #FCE62F;
            text-align: center;
            line-height: .28rem;
          }
          #companys{
            height: 2rem;
          }
          .monitoring-left-value{
            margin: .1rem 0 .1rem .25rem;
            display: flex;
            font-size: .42rem;
            color: #fff;
            align-items: flex-end;
            font-family: 'digital';
          }
          .monitoring-left-value>div{
            width: .35rem;
            height: .37rem;
            text-align: center;
            line-height: .37rem;
            border: 2px solid #189DDB;
            background: rgba(6, 75, 178, 0.8);
            border-radius: 5px;
            margin-left: 3px;
            padding: 3px;
            font-weight: bold;
          }
          .monitoring-left-value > .monitor-unit {
            width: .24rem;
            height: .24rem;
            line-height: .24rem;
            font-size: .18rem;
            font-weight: normal;
          }
        }
        .dangerous{
          flex: 4.05;
          #dangerous{
            height: 3rem;
          }
        }
      }
    }
    .right-bottom-panle {
      position: absolute;
      width: 12rem;
      height: 4.9rem;
      right: 0.24rem;
      bottom: 0.1rem;
      z-index: 99;
      background: url('../../../assets/city-management/common-service/medical-resource/panle-04.png') no-repeat;
      background-size: 100% 100%;
      .echarts-table{
        position: absolute;
        width: 6rem;
        background: #000;
        opacity: .8;
        z-index: 99;
      }
      .right-echarts-02{
        display: flex;
        position: absolute;
        left: 6%;
        top: 1.1rem;
        width: 90%;
        height: 3.2rem;
        .enforce-num{
          flex: 2.25;
          > div {
            position: relative;
            .enforce-mask {
              position: absolute;
              left: .33rem;
              bottom: .1rem;
              font-size: .19rem;
              color: #03FAA7;
              border: 2px solid #03FAA7;
              text-align: center;
              width: 1.29rem;
              height: .27rem;
              line-height: .27rem;
              border-radius: .2rem;
              background: #262795;
            }
            .enforce-num-conten{
              position: absolute;
              width: .92rem;
              text-align: center;
              top: .55rem;
              left: .55rem;
              color: #00FAA8;
              span:nth-child(1){
                font-size: .3rem;
              }
              span:nth-child(2){
                font-size: .16rem;
              }
            }
            #enforce-num1,
            #enforce-num2 {
              height: 1.6rem;
            }
          }
        }
        .enforce-law{
          flex: 7.75;
          #enforce-law{
            height: 3rem;
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
        right: 0.20rem;
        top: 1rem;
        display: flex;
        flex-direction: column;
        .right-bottom-charts{
          flex: 1;
        }
      }
    }
    .header-bg {
      position: absolute;
      width: 20.40rem;
      height: 1.80rem;
      line-height: 1.20rem;
      font-family: simhei;
      text-align: center;
      color: #FFFFFF;
      font-size: 0.45rem;
      background: url('../../../assets/city-management/common-service/medical-resource/head-bg.png') no-repeat;
      background-size:100% 100%;
      left:11.4rem;
      z-index: 99;
    }
    .panle-title {
      position: absolute;
      top: 0.34rem;
      left: .54rem;
      font-size: 0.24rem;
      color: #FFFFFF;
      padding: 0.15rem 0.15rem;
      box-sizing: border-box;
      background: url('../../../assets/city-management/common-service/medical-resource/panle-title.png') no-repeat;
      background-position: 0 0.35rem;
      background-size: .87rem .28rem;
    }
    .left-list {
      position: absolute;
      left:10.68rem;
      top: 0.7rem;
      z-index: 1000;
      .left-list-li {
        margin-top: 0.1rem;
        .name {
          padding: 0.05rem;
          width:1.50rem;
          height:0.26rem;
          line-height: 0.26rem;
          color: #FFFFFF;
          font-size:0.22rem;
          font-style:italic;
          transform: perspective(1rem) rotateX(-15deg);
          transform-origin:left;
          background:rgba(213,96,44,1);
        }
      }
    }
  }
  .window-box{
    position:absolute;
    width: 5.2rem;
    height:2.8rem;
    margin-left:-5.2rem;
    margin-top:-2.1rem;
    color: #FFFFFF;
    font-size: 0.21rem;
    display: flex;
    flex-direction: row;
    p{
      font-size: 21px;
      font-weight: bold;
      color: #fff;
      margin-bottom: .2rem;
    }
    .window-box-left {
      width: 3.90rem;
      height: 2.79rem;
      padding: 0.35rem 0.21rem;
      box-sizing: border-box;
      background: url('../../../assets/common/win-info-icon-02.png') no-repeat;
      background-size: 100% 100%;
    }
    .tooltip-content{
      width: 100%;
      >div{
        display: flex;
        padding-right: .1rem;
        margin-bottom: .1rem;
        flex-direction: row;
        .tooltip-name{
          font-size: .18rem;
          font-weight: bold;
          color: #DFE2FD;
          width: 1rem;
        }
        .tooltip-decs{
          flex: 1;
          font-size: .2rem;
          font-weight: bold;
          font-style: italic;
          color: #FCE62F;
        }
      }
    }
    img {
      flex: 1;
      height: 1.80rem;
      margin-top: 0.9rem
    }
  }
  .panel-content{
    position: absolute;
    bottom: .3rem;
    left: 14rem;
    z-index: 9999;
  }
  .ecology-list{
    position: absolute;
    right: 12.1rem;
    top: 1.7rem;
    z-index: 998;
  .ecology-list-common{
    width: 1.72rem;
    height: 0.54rem;
    background: url('../../../assets/common/ecology-list.png') center center no-repeat;
    background-size: 1.72rem 0.64rem;
    z-index: 998;
    font-size:0.18rem;
    font-family:Source Han Sans CN;
    font-weight:500;
    font-style:italic;
    color:rgba(131,235,255,1);
    text-align: right;
    line-height: 0.5rem;
    img{
      width: 0.1rem;
      height: 0.1rem;
      padding-right: 0.15rem;
      padding-left: 0.1rem;
    }
  }
  .ecology-list-item{
    background: url('../../../assets/common/ecology-list-item.png') center center no-repeat;
    width: 100%;
    height: 1.05rem;
    background-size: 1.69rem 1.05rem;
    margin-top: -0.1rem;
    margin-left: 0.06rem;
    p{
      font-size:0.17rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      font-style:italic;
      color:rgba(255,255,255,1);
      line-height: 0.5rem;
      height: 0.4rem;
      text-align: center;
    }
  }
}
  /*.left-content > div,*/
  /*.right-top-panle,*/
  /*.right-bottom-panle{*/
  /*}*/
</style>
