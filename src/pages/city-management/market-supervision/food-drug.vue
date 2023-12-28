<!--
 * @Descripttion:
 * @Author: nixy
 * @Date: 2020-03-08 16:45:52
 * @LastEditors: wanglong
 * @LastEditTime: 2020-05-15 11:16:33
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-15 20:21:03
 -->

<template>
  <div class="box-container">
    <div class="g-menu-box">
      <menu-list></menu-list>
    </div>
    <head-componen name="食品药品监管" style="z-index:100"></head-componen>
    <!-- <div class="header-bg">食品药品监管</div> -->
     <div class = "right-add-box">
      <div @click="openThirdPage('http://wlw.emsncpzlaq.com.cn:8180/')">峨眉物联网</div>
      <div @click="openThirdPage('http://scd.emsncpzlaq.com.cn:7001/login')">峨眉绿色防控</div>
      <div @click="openThirdPage('http://ls.lsnza.com.cn:8886/jeeplus/a/login')">农产品质量监管平台 </div>
    </div>
    <div class="main-left-box">
      <div class="left-box-top">
        <div class="left-box-top-left">
          <div class="time-title">截至{{leftData.sy01001}}年{{leftData.sy01002}}月</div>
          <div class="g-title hover-color" style="left:0.07rem">食品许可</div>
          <div class="rt-num-title g-color-yellow">食品许可总数：</div>
          <div class="rt-num-box">
            <div class="g-num-text" v-for="(item,index) in numAllArr" :key="index">
              <span>{{item}}</span>
            </div>
            <div class="g-num-tip">
              <span>件</span>
            </div>
          </div>
          <div class="fd-count-box">
            <div class="fd-num-item">
              生产许可：
              <span clas="scxk">{{leftData.production}}</span> 件，月新增:
              <span class="yxz">{{leftData.productionAdd}}</span> 件
            </div>
            <div class="fd-num-item" style="margin-top:0.24rem">
              经营许可：
              <span class="jyxk">{{leftData.business}}</span> 件，月新增:
              <span class="yxz">{{leftData.businessAdd}}</span> 件
            </div>
          </div>
        </div>
        <div class="left-box-top-right">
          <div class="g-title hover-color" style="z-index: 5">许可类型<span class="global-data-title">（截至2019年12月）</span></div>
          <div class="g-echarts-box" ref="spztgc"></div>
          <div class="pieCount">
            <p>{{pieCount}}</p>
            <p>食品主体构成</p>
            <p>(户)</p>
          </div>
          <!-- <div class="dialog-toggle-btn" @click="openDialog('0')">
            <span>查看明细</span>
            <img src="../../../assets/city-management/market-supervision/img/details-icon.png" />
          </div>-->
        </div>
      </div>
      <div class="left-box-bottom">
        <div class="g-title hover-color" style="top: -0.1rem;left: 0.47rem;">食品监督管理<span class="global-data-title">（截至2019年）</span></div>
        <div class="left-box-bottom-box1">
          <div class="g-title2 hover-color">检查概要</div>
          <div class="fd-check-box">
            <div class="fd-check-td" v-for="(item,index) in leftData02.dataList" :key="index">
              <div class="fd-check-td-up">{{item.name}}</div>
              <div class="fd-check-td-down">
                <span>{{item.value}}</span>
                {{item.subText}}
              </div>
            </div>
          </div>
        </div>
        <div class="left-box-bottom-box2">
          <div class="g-title2 hover-color">餐饮服务量化分级评定</div>
          <div class="pieCount">
            <p>{{pieCount2}}</p>
            <p>量化分级</p>
            <p>(户)</p>
          </div>
          <div class="g-echart-box2" ref="cyfwlhfjpd"></div>
        </div>
        <div class="left-box-bottom-box3">
          <div class="g-title2 hover-color">{{leftData02.year01}}年食品经营各环节日常检查情况</div>
          <div id="left-echarts-bar01"></div>
        </div>
        <div class="left-box-bottom-box4">
          <div class="g-title2 hover-color">{{leftData02.year02}}年食品经营各季度日常监管情况</div>
          <div class="g-echart-box2" ref="gjdrcjgqk"></div>
        </div>
      </div>
    </div>
    <div class="main-right-box">
      <div class="main-right-box-top">
        <div class="g-title hover-color" style="top:0.1rem">药品</div>
        <div class="main-right-top-box1">
          <div class="g-title2 hover-color">{{rightData.year}}年药品许可情况</div>
          <div class="echarts-legend">
            药品经营许可数量：
            <span>{{rightData.number}}</span> 件，当月新增
            <span>{{rightData.add}}</span> 件
          </div>
          <div class="echart-box">
            <div class="g-echart-box2" ref="ypxkqk"></div>
          </div>
        </div>
        <div class="main-right-top-box2">
          <div class="g-title2 hover-color">{{rightData.year01}}年药品监督检查情况</div>
          <div class="echarts-box">
            <div class="g-echarts-box" ref="ypjyjc"></div>
          </div>
          <!-- <div class="dialog-toggle-btn" @click="openDialog('1')" style="top:.82rem">
            <span>查看明细</span>
            <img src="../../../assets/city-management/market-supervision/img/details-icon.png" />
          </div>-->
        </div>
      </div>
      <div class="main-right-box-bottom">
        <div class="g-title hover-color" style="top: -0.3rem;">医疗器械</div>
        <div class="main-right-bottom-box1">
          <div class="g-title2 hover-color">医疗器械许可</div>
          <div class="time-title">截至 {{rightData.year02}} 年 {{rightData.month}} 月</div>
          <div class="rt-num-title g-color-yellow">医疗器械许可总数：</div>
          <div class="rt-num-box" style="left: 2.7rem;">
            <div class="g-num-text" v-for="(item,index) in numArr" :key="index">
              <span>{{item}}</span>
            </div>
            <div class="g-num-tip">
              <span>件</span>
            </div>
          </div>
          <div class="fd-count-box-title">一类器械：</div>
          <div class="fd-count-box">
            <div class="fd-num-item">
              首次注册：受理
              <span>{{rightData.sy09004}}</span> 件，批准
              <span>{{rightData.sy09005}}</span> 件
            </div>
            <div class="fd-num-item">
              延续注册：受理
              <span>{{rightData.sy09006}}</span> 件，批准
              <span>{{rightData.sy09007}}</span> 件
            </div>
            <div class="fd-num-item">
              许可事项变更：受理
              <span>{{rightData.sy09008}}</span> 件，批准
              <span>{{rightData.sy09009}}</span> 件
            </div>
            <div class="fd-num-item">
              登记事项变更：受理
              <span>{{rightData.sy09010}}</span>件
            </div>
            <div class="fd-num-item">
              注/撤销：
              <span>{{rightData.sy09011}}</span> 件
            </div>
          </div>
        </div>
        <div class="main-right-bottom-box2">
          <div class="g-title2 hover-color">{{rightData.year03}}年医疗器械监管情况</div>
          <div class="echarts-box">
            <div class="g-echart-box2" ref="ylqjjgqk"></div>
          </div>
          <!-- <div class="dialog-toggle-btn" @click="openDialog('2')" style="top:.4rem">
            <span>查看明细</span>
            <img src="../../../assets/city-management/market-supervision/img/details-icon.png" />
          </div>-->
        </div>
      </div>
    </div>
    <!-- <select-other :data="menuList" :active="1" class="menu-list" @navClick="navClick"></select-other> -->
    <!-- <div class="market-panel-box">
      <div class="user-dos" @click="panelBig = !panelBig">
        <div class="legend">图例</div>
        <div class="icon"></div>
      </div>
      <market-panel
        @change="marketPanelSelect"
        :defaultSubMenuId="defaultSubMenuId"
        v-show="panelBig"
      ></market-panel>
    </div>-->
    <!-- <div class="dialog" v-show="isShowDialog">
      <div class="g-title2">全市{{dialogTitle}}主体明细</div>
      <img
        src="../../../assets/city-management/market-supervision/img/close-icon@2x.png"
        class="close-btn"
        @click="isShowDialog=false"
        alt="关闭"
      />
      <div class="dialog-head">
        <div class="form-row">
          <div class="form-cell">
            <label for>企业名称：</label>
            <input type="text" class="text-input" v-model="searchObj.name" />
          </div>
          <div class="form-cell">
            <label for>统一社会信用代码：</label>
            <input type="text" class="text-input" v-model="searchObj.code" />
          </div>

          <div class="form-cell">
            <label for>发证日期：</label>
            <input
              type="text"
              id="startDate2"
              class="text-input date"
              v-model="searchObj.time.starttime"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-cell">
            <label for>许可证编号：</label>
            <input type="text" class="text-input" v-model="searchObj.licence" />
          </div>
          <div class="form-cell">
            <label for>至</label>
            <input
              type="text"
              id="endDate2"
              class="text-input date"
              v-model="searchObj.time.endtime"
            />
          </div>
          <div class="form-cell">
            <a href="javascript:void(0);" class="btn" @click="restSearch">重置</a>
            <a href="javascript:void(0);" class="btn primary" @click="doSearch">查询</a>
          </div>
        </div>
      </div>
      <table class="data-table" style="margin-top:.2rem">
        <thead>
          <tr>
            <th>企业名称</th>
            <th>统一社会信用代码</th>
            <th>许可证编号</th>
            <th>注册地址</th>
            <th>负责人姓名</th>
            <th>发证日期</th>
            <th>发证单位</th>
              <th>仓库地址</th>
            <th>经营范围</th>
          </tr>
        </thead>
      </table>
      <div class="dialog-body">
        <table class="data-table" style="margin-top:-.4rem">
          <thead style="visibility: hidden;">
            <tr>
              <th>企业名称</th>
              <th>统一社会信用代码</th>
              <th>许可证编号</th>
              <th>注册地址</th>
              <th>负责人姓名</th>
              <th>发证日期</th>
              <th>发证单位</th>
              <th>仓库地址</th>
              <th>经营范围</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="goodsDetails.length>0">
              <tr v-for="(item,index) in  goodsDetails" :key="index">
                <td>{{item.sy11001||''}}</td>
                <td>{{item.sy11002||''}}</td>
                <td>{{item.sy11003||''}}</td>
                <td>{{item.sy11004||''}}</td>
                <td>{{item.sy11005||''}}</td>
                <td>{{item.sy11006||''}}</td>
              </tr>
            </template>
            <p v-else class="table-no-data">无数据</p>
          </tbody>
        </table>
      </div>
    </div>-->
    <template v-if="areaMapData.length > 0 && isShowMiniMarker  === 0">
      <div
        class="market-marker-container"
        :id="'area_center_' + item.bh"
        :style="{zIndex:item.bh===activeQx.bh?100:60}"
        v-for="(item,index) in  areaMapData"
        :key="index"

      >
        <div class="marker" @click="mapPointClick(item)"></div>
        <div class="other" v-show="item.bh===activeQx.bh">
          <img src="../../../assets/common/event-icon.png" />
          <div class="marker-detail">
            <p class="title">{{activeQx.mcjc}}总体情况</p>
            <img
              src="../../../assets/city-management/market-supervision/img/close-icon@2x.png"
              @click="closeMarkerDetail(item)"
              alt
            />
            <div class="info-list">
              <p>
                医疗器械主体数：
                <span>{{item.ylqxsl}}</span>家
              </p>
              <p>
                药品主体数：
                <span>{{item.ypsl}}</span>家
              </p>
              <p>
                食品主体数：
                <span>{{item.spsl}}</span>家
              </p>
            </div>
            <div class="open" @click="openMarkerDialog(item)">明细列表</div>
          </div>
        </div>
      </div>
    </template>
    <div class="dialog" v-show="isShowMarkerDialog">
      <img
        src="../../../assets/city-management/market-supervision/img/close-icon@2x.png"
        class="close-btn"
        @click="isShowMarkerDialog=false;marketSearchObj.name=''"
        alt="关闭"
      />
      <div class="dialog-head">
        <div class="btn-group">
          <span  :class="{active:item.type===marketSearchObj.type}" v-for="(item,index) in marketTypeList" @click="toggleMarketType(item)" :key="index">
            {{item.name}}
          </span>
        </div>
        <div class="form-row">
          <div class="form-cell">
            <label for>主体名称：</label>
            <input type="text" class="text-input" v-model="marketSearchObj.name" />
          </div>
          <div class="form-cell">
            <a href="javascript:void(0);" class="btn primary" @click="doSearchMarket">查询</a>
          </div>
        </div>
      </div>
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
      <div class="dialog-body">
        <table class="data-table">
          <tbody>
            <template v-if="areaMarketInfo.length>0">
              <tr v-for="(item,index) in areaMarketInfo" :key="index">
                <td :style="{width:tableHeadConfig[0].width}">{{item.mc||''}}</td>
                <td :style="{width:tableHeadConfig[1].width}">
                  <a class="market-address" @click="marketAdressClick(item)">
                    <img src="../../../assets/city-management/market-supervision/img/geo-point.png" />
                    {{item.dz||''}}
                  </a>
                </td>
                <td :style="{width:tableHeadConfig[2].width}">{{item.qx||''}}</td>
                <td :style="{width:tableHeadConfig[3].width}">{{item.xkz||''}}</td>
                <td :style="{width:tableHeadConfig[4].width}">{{item.tyshdm||''}}</td>
                <td :style="{width:tableHeadConfig[5].width}">{{item.fr||''}}</td>
                <!-- <td :style="{width:tableHeadConfig[6].width}">{{item.lxfs||''}}</td> -->
              </tr>
            </template>
            <p v-else class="table-no-data">无数据</p>
          </tbody>
        </table>
      </div>
    </div>
    <template v-if="marketGeoPoint.length>0">
      <div class="geo-point" v-for="(item) in marketGeoPoint" :key="item.id" :id="item.id">
        <img src="../../../assets/city-management/market-supervision/img/geo-point.png" />
      </div>
    </template>
  </div>
</template>
<script>
import echarts from 'echarts'
import API from '@/api/city-management/market-supervision'
import cerateOptions01 from '@/echarts-data/city-management/market-supervision/food-drug/pieEchart.js'
import cerateOptions02 from '@/echarts-data/city-management/market-supervision/food-drug/pieEchart01.js'
import cerateOptions03 from '@/echarts-data/city-management/market-supervision/food-drug/left04.js'
import cerateOptions04 from '@/echarts-data/city-management/market-supervision/food-drug/barLineEchart.js'
import cerateOptions05 from '@/echarts-data/city-management/market-supervision/food-drug/pieEchart02.js'
import cerateOptions06 from '@/echarts-data/city-management/market-supervision/food-drug/left02.js'
import option from '@/echarts-data/city-management/market-supervision/food-drug/left-echarts-bar01.js'
import menuList from '@/components/menu.vue'
import selectOther from '@/components/select-other.vue'
import marketPanel from './market-panel'
/// import common from '@/api/city-management/marketSupervisionMapOpreate'
import {openThirdPage} from '@/utils/utils'
import headComponen from '@/components/head-component'
// import '../../../../static/laydate/css/laydate.css'
// import laydate from '../../../../static/laydate/js/laydate'
export default {
  components: { selectOther, menuList, marketPanel, headComponen },
  mounted () {
    this.initData()
    this.queryMapInfo()
  },
  data () {
    return {
      menuList: [
        {
          name: '市场监管',
          routeName: 'marketSupervision',
          selected: false
        },
        {
          name: '市场主体',
          routeName: 'marketSubject',
          selected: false
        },
        {
          name: '食品药品',
          routeName: 'foodAndDrug',
          selected: true
        },
        {
          name: '质量技术',
          routeName: 'massTechnology',
          selected: false
        },
        {
          name: '放心舒心消费系统',
          selected: false
        }
      ],
      leftData: {
        sy01001: '',
        sy01002: '',
        total: '', // 总数
        business: '', // 经营许可总数
        production: '', // 生产许可数量
        businessAdd: '', // 经营新增
        productionAdd: '' // 生产许可新增
      },
      leftData02: {
        list: [],
        year01: '',
        year02: ''
      },
      rightData: {
        year: '',
        month: '',
        year01: '',
        year02: '',
        year03: '',
        number: '',
        add: '',
        total: '',
        sy09005: '', // 首次注册批准数
        sy09004: '', // 首次注册受理数
        sy09006: '', // 延续注册受理数
        sy09007: '', // 延续注册批准数
        sy09008: '', // 许可事项变更受理数
        sy09009: '', // 许可事项变更批准数
        sy09010: '', // 登记事项变更数
        sy09011: '' // 注/撤销数
      },
      pieCount: 0,
      pieCount2: 0,
      numArr: [],
      numAllArr: [],
      activeMenuName: '市场主体',
      defaultSubMenuId: '1001',
      // isShowDialog: false,
      searchObj: {
        name: '',
        code: '',
        licence: '',
        time: { starttime: '', endtime: '' },
        type: 0,
        pageNum: 1,
        pageSize: 500
      },
      // goodsDetails: [],
      dialogTitle: '食品',
      panelBig: false,

      /// /地图部分
      areaLocation: {
        '市中区': {lon: '103.731909', lat: '29.579459'},
        '峨边彝族自治县': {lon: '103.17144759803993', lat: '29.092320222621108'},
        '金口河区': {lon: '103.0498171172697', lat: '29.340730491460505'},
        '沙湾区': {lon: '103.53837912661115', lat: '29.324989427901677'},
        '峨眉山市': {lon: '103.3608351100639', lat: '29.48108970080883'},
        '夹江县': {lon: '103.578479', lat: '29.744034'},
        '井研县': {lon: '104.01429221011918', lat: '29.610130805505975'},
        '五通桥区': {lon: '103.823375', lat: '29.41306'},
        '犍为县': {lon: '103.955651', lat: '29.213968'},
        '沐川县': {lon: '103.907969', lat: '28.962066'},
        '马边彝族自治县': {lon: '103.46384535877796', lat: '28.865337491502974'}
      },
      areazIndex: {
        市中区: 80,
        峨边彝族自治县: 79,
        金口河区: 95,
        沙湾区: 77,
        峨眉山市: 94,
        夹江县: 75,
        井研县: 92,
        五通桥区: 90,
        犍为县: 91,
        沐川县: 71,
        马边彝族自治县: 70
      },
      isShowMarkerDialog: false,
      // isShowMarkerDetail: false,
      areaMapData: [], // 区县数据
      isShowMiniMarker: 0, // 二维还是三维,
      marketSearchObj: {
        type: '0',
        name: '',
        code: '',
        pageNum: 1,
        pageSize: 500
      },
      marketTypeList: [
        {
          name: '食品',
          type: '0'
        },
        {
          name: '药品',
          type: '1'
        },
        {
          name: '医疗器械',
          type: '2'
        }
      ],
      activeQx: { qx: '' },
      areaMarketInfo: [],
      marketGeoPoint: [],
      threeBarData: [],
      mapThreeFlag: 0,
      tableHeadConfig: [
        {
          name: '主体名称',
          width: '16%'
        },
        {
          name: '地址',
          width: '20%'
        },
        {
          name: '所属区县',
          width: '12%'
        },
        {
          name: '许可证号',
          width: '20%'
        },
        {
          name: '统一社会信用代码',
          width: '20%'
        },
        {
          name: '法人',
          width: '12%'
        }
        // {
        //   name: '法人联系方式',
        //   width: '12%'
        // }
      ]
    }
  },
  methods: {
    // openDialog (type) {
    //   this.isShowDialog = true
    //   this.searchObj.type = type
    //   this.queryGoodsDetailed()
    //   // this.restSearch()
    //   switch (type) {
    //     case '0':
    //       this.dialogTitle = '食品'
    //       break
    //     case '1':
    //       this.dialogTitle = '药品'
    //       break
    //     case '2':
    //       this.dialogTitle = '医疗器械'
    //       break
    //   }
    // },
    /// 重置查询
    // restSearch () {
    //   this.searchObj.name = ''
    //   this.searchObj.code = ''
    //   this.searchObj.licence = ''
    //   this.searchObj.time.starttime = ''
    //   this.searchObj.time.endtime = ''
    //   this.queryGoodsDetailed()
    // },
    // doSearch () {
    //   this.queryGoodsDetailed()
    // },
    openThirdPage,
    initData () {
      API.FOOD_LICENSE_INFO(this)
        .then(res => {
          if (res.status === 200) {
            let result = res.data.data
            this.leftData = result.data1
            console.log(result.data2)
            result.data2.forEach((item, index) => {
              this.pieCount += item.sy01005
            })
            this.pieCount2 =
              result.data3.sy03004 +
              result.data3.sy03003 +
              result.data3.sy03002
            console.log(this.pieCount2)
            this.initNumber(this.leftData.total, 'numAllArr')
            let chart = echarts.init(this.$refs.spztgc)
            chart.setOption(
              cerateOptions01(
                result.data2.map(item => {
                  item.name = item.sy01004
                  item.value = item.sy01005
                  return item
                })
              )
            )
            chart.dispatchAction({
              type: 'highlight',
              // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
              dataIndex: 0
            })
            let chart2 = echarts.init(this.$refs.cyfwlhfjpd)
            chart2.setOption(
              cerateOptions02([
                {
                  name: '优秀',
                  value: result.data3.sy03002
                },
                {
                  name: '良好',
                  value: result.data3.sy03003
                },
                {
                  name: '一般',
                  value: result.data3.sy03004
                }
              ])
            )
            chart2.dispatchAction({
              type: 'highlight',
              // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
              dataIndex: 0
            })
          }
        })
        .catch(e => {
          console.log(e)
        })
      API.FOOD_INSPECTION(this)
        .then(res => {
          if (res.status === 200) {
            let result = res.data.data

            let data1 = result.data1
            this.leftData02.dataList = [
              // {
              //   name: '完成量化评级数',
              //   value: data1.sy02008,
              //   subText: '户'
              // },
              // {
              //   name: '良好及以上占比',
              //   value: Math.floor(data1.sy02009 * 100),
              //   subText: '%'
              // },
              // {
              //   name: '一般占比',
              //   value: Math.floor(data1.sy02010 * 100),
              //   subText: '%'
              // },
              {
                name: '检查食品主体数',
                value: data1.sy02002,
                subText: '户'
              },
              {
                name: '检查食品主体家次',
                value: data1.sy02003,
                subText: '家次'
              },
              {
                name: '完成整改数',
                value: data1.sy02006,
                subText: '户'
              },
              {
                name: '出动检查人次',
                value: data1.sy02004,
                subText: '人次'
              },
              {
                name: '发现违法违规主体数',
                value: data1.sy02005,
                subText: '户'
              },
              {
                name: '发现违法违规问题数',
                value: data1.sy02008,
                subText: '个'
              },
              {
                name: '实施明厨亮灶数',
                value: data1.sy02007,
                subText: '户'
              }
            ]
            let data2 = result.data2
            this.leftData02.year01 = data2[0].sy04001
            this.leftData02.year02 = result.data3[0].sy05001
            let xdata = []
            let barData = [
              {
                name: '检查经营主体家次',
                type: 'bar',
                barGap: 0,
                data: [],
                barWidth: 11.5 * window.$rem
              },
              {
                name: '发现违法违规经营主体家次',
                type: 'bar',
                data: [],
                barWidth: 11.5 * window.$rem
              },
              {
                name: '完成整改主体家次',
                type: 'bar',
                data: [],
                barWidth: 11.5 * window.$rem
              }
            ]
            result.data2.forEach(d => {
              xdata.push(d.sy04002_desc)
              barData[0].data.push(d.sy04003)
              barData[1].data.push(d.sy04004)
              barData[2].data.push(d.sy04005)
            })
            echarts
              .init(document.getElementById('left-echarts-bar01'))
              .setOption(option(xdata, barData))
            let xdata2 = []
            let barData2 = [
              {
                name: '检查经营主体家次',
                data: []
              },
              {
                name: '完成整改主体家次',
                data: []
              },
              {
                name: '发现违法违规经营主体家次',
                data: []
              }
            ]
            result.data3.forEach(d => {
              xdata2.push(d.sy05002_desc)
              barData2[0].data.push(d.sy05003)
              barData2[1].data.push(d.sy05005)
              barData2[2].data.push(d.sy05004)
            })
            echarts
              .init(this.$refs.gjdrcjgqk)
              .setOption(cerateOptions03(xdata2, barData2))
          }
        })
        .catch(e => {
          console.log(e)
        })
      API.DISTRICT_OF_MEDICAL(this)
        .then(res => {
          if (res.status === 200) {
            let result = res.data.data
            this.rightData.number = result.data1.data1.sy07003
            this.rightData.year = result.data1.data1.sy07001
            this.rightData.year01 = result.data3.sy08001
            this.rightData.add = result.data1.data1.sy07004
            let xdata = []
            let data = []
            result.data1.data2.forEach(item => {
              xdata.push(item.sy06003)
              data.push(item.sy06004)
            })
            echarts
              .init(this.$refs.ypxkqk)
              .setOption(cerateOptions04(xdata, data))
            let total =
              result.data3.sy08003 +
              result.data3.sy08004 +
              result.data3.sy08005 +
              result.data3.sy08002
            let pieDdata = [
              { value: result.data3.sy08003, name: '合格家次' },
              { value: result.data3.sy08004, name: '发现违法违规家次' },
              { value: result.data3.sy08005, name: '完成整改家次' },
              { value: result.data3.sy08006, name: '立案查处家次' },
              {
                value: total,
                name: '',
                label: { show: false },
                labelLine: { show: false }
              }
            ]
            echarts
              .init(this.$refs.ypjyjc)
              .setOption(cerateOptions05(pieDdata))
          }
        })
        .catch(e => {
          console.log(e)
        })
      API.MEDICAL_EQUIPEMENT(this)
        .then(res => {
          if (res.status === 200) {
            let result = res.data.data
            this.rightData.year02 = result.data1.sy09001
            this.rightData.month = result.data1.sy09002
            this.rightData.total = result.data1.sy09003
            this.rightData.year03 = result.data2[0].sy10001
            let {
              sy09005,
              sy09004,
              sy09006,
              sy09007,
              sy09008,
              sy09009,
              sy09010,
              sy09011
            } = result.data1
            this.rightData.sy09005 = sy09005
            this.rightData.sy09004 = sy09004
            this.rightData.sy09006 = sy09006
            this.rightData.sy09007 = sy09007
            this.rightData.sy09008 = sy09008
            this.rightData.sy09009 = sy09009
            this.rightData.sy09010 = sy09010
            this.rightData.sy09011 = sy09011
            this.initNumber(this.rightData.total, 'numArr')
            let data2 = result.data2
            let barData = [
              {
                data: []
              },
              {
                data: []
              },
              {
                data: []
              },
              {
                data: []
              }
            ]
            data2.forEach(item => {
              barData[0].data.push(item.sy10003)
              barData[1].data.push(item.sy10004)
              barData[2].data.push(item.sy10005)
              barData[3].data.push(item.sy10006)
            })
            echarts
              .init(this.$refs.ylqjjgqk)
              .setOption(cerateOptions06(barData))
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    navClick (name) {
      console.log(name)
    },
    // 初始化数字
    initNumber (value, nameStr) {
      let number = value.toString()
      for (var i = 0; i < number.length; i++) {
        this[nameStr].push(number[i])
      }
    },
    mapPointClick (item) {
      this.activeQx = item
      // this.isShowMarkerDetail = true
      this.areaMapData.map((i, index) => {
        if (i.bh === item.bh) {
          let a = i
          a.showTextFlag = !a.showTextFlag
          this.areaMapData.splice(index, 1, a)
        }
      })
    },
    queryMapInfo () {
      API.QUERY_MAP_INFO(this, {})
        .then(res => {
          res = res.data
          if (res.serviceSuccess) {
            this.areaMapData = res.data.data
            if (this.areaMapData.length > 0) {
              this.areaMapData = this.areaMapData.map(item => {
                //   console.log(item.mc)
                item.lon = this.areaLocation[item.mc].lon
                item.lat = this.areaLocation[item.mc].lat
                item.id = 'area_center_' + item.bh
                item.showTextFlag = false
                return item
              })
              window._m.addMakers(this.areaMapData, data => {
                // console.log('isShowMiniMarker', this.isShowMiniMarker)
                this.isShowMiniMarker = data
              })
              // this.$nextTick(() => {
              //   this.initLiquidFillChart()
              // })
            }
          }
        })
        .catch(err => {
          console.error(err)
        })
    },
    openMarkerDialog (item) {
      this.marketSearchObj.code = item.bh
      this.isShowMarkerDialog = true
      this.queryGoodsDetailed()
    },
    marketAdressClick (item) {
      if (item.lon) {
        this.marketGeoPoint = [
          {
            lon: +item.lon,
            lat: +item.lat,
            id: 'geo_point_' + item.tyshdm
          }
        ]
        window._m &&
          window._m.addMakers(this.marketGeoPoint, data => {
            this.isShowMiniMarker = data
          })
        this.isShowMarkerDialog = false
      }
    },
    closeMarkerDetail (item) {
      this.activeQx = {bh: ''}
      // this.areaMapData.map((i, index) => {
      //   if (i.bh === item.bh) {
      //     let a = i
      //     a.showTextFlag = false
      //     this.areaMapData.splice(index, 1, a)
      //   }
      // })
    },
    toggleMarketType (item) {
      this.marketSearchObj.type = item.type
      this.queryGoodsDetailed()
    },

    // ...common,
    // initDateInput () {
    //   this.$nextTick(() => {
    //     this.$laydate.render({
    //       elem: '#startDate2',
    //       theme: '#000',
    //       change: value => {
    //         this.searchObj.time.starttime = value
    //       }
    //     })
    //     this.$laydate.render({
    //       elem: '#endDate2',
    //       theme: '#000',
    //       change: value => {
    //         this.searchObj.time.endtime = value
    //       }
    //     })
    //   })
    // },
    queryGoodsDetailed () {
      API.QUERY_GOODS_DETAINLS(this, this.marketSearchObj)
        .then(res => {
          res = res.data
          if (res.serviceSuccess) {
            this.areaMarketInfo = res.data.pageBean.list
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    doSearchMarket () {
      this.queryGoodsDetailed()
    }
  },
  beforeDestroy () {
    window._m.clear()
    // window._m.redirectDimenion(() => {}, true, false)
    // window._m.
  }
}
</script>

<style  lang="scss" scoped >
@import '../../../components/date-title.scss';
.global-data-title{
  color:$date-title-color;
  display:inline-block;
  font-size:$date-title-size;
}
.geo-point {
  position: absolute;
  width: 0.4rem;
  height: 0.4rem;
  z-index: 90;
  img {
    width: 100%;
    height: 100%;
  }
}
.market-address {
  cursor: pointer;
  color: #66d898;
  text-decoration: #66d898 0.01rem solid;
  img {
    width: 0.2rem;
    height: 0.2rem;
    position: relative;
    top: 0.05rem;
    margin-right: 0.05rem;
  }
  &:hover {
    text-decoration: underline;
    text-decoration-color: #458fef;
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
    margin-left: -0.2rem;
    margin-top: -.7rem;
    // top: -0.2rem;
  }
  .other {
    position: absolute;
    top: -2.2rem;
    display: flex;
    left: -0.15rem;
    align-items: center;
    z-index: 0;
    img {
      width: 1rem;
      height: 1rem;
    }
    .marker-detail {
      width: 3rem;
      height: 2.5rem;
      background: url("../../../assets/city-management/market-supervision/food-drug/point-detail-bg.png");
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
      img {
        width: 0.24rem;
        height: 0.24rem;
        position: absolute;
        right: 0.2rem;
        top: 0.2rem;
      }
      .info-list {
        p {
          line-height: 1.6;
          font-size: 0.18rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: rgba(223, 226, 251, 1);
          margin-top: 0.1rem;
          span {
            font-size: 0.22rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            font-style: italic;
            color: rgba(249, 230, 89, 1);
          }
        }
      }
      .open {
        width: 1.11rem;
        height: 0.3rem;
        background: rgba(11, 46, 109, 0.58);
        border: 0.01rem solid rgba(69, 143, 239, 1);
        font-size: .17rem;
        border-radius: 0.15rem;
        text-align: center;
        color: #fff;
        margin: 0 auto;
        margin-top: .2rem;
      }
    }
  }
}
.laydate-icon {
  font-size: 0.12rem;
  font-family: "Microsoft YaHei";
}
.laydate-prev-y,
.laydate-prev-m {
  padding-right: 0.1rem !important;
}
.layui-laydate-header i {
  font-size: 0.12rem;
  font-family: "Microsoft YaHei";
}
.laydate-next-m,
.laydate-next-y {
  padding-left: 0.1rem !important;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.box-container {
  overflow: hidden;
  .g-menu-box {
    position: absolute;
    left: 10.6rem;
    bottom: 0.36rem;
    z-index: 999;
  }
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
    background: url("../../../assets/city-management/common-service/medical-resource/head-bg.png")
      no-repeat;
    background-size: 100% 100%;
    left: 11.4rem;
    z-index: 99;
    font-weight: 550;
  }
  .main-left-box {
    position: absolute;
    left: 0.11rem;
    top: 0.18rem;
    width: 10.48rem;
    height: 10.48rem;
    background: url("../../../assets/city-management/market-supervision/food-drug/left_box.png");
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    z-index: 101;
  }
  .g-title {
    position: absolute;
    top: 0rem;
    left: -0.02rem;
    font-size: 0.24rem;
    color: #ffffff;
    padding: 0.12rem 0.2rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: url("../../../assets/common/panle-title.png") no-repeat;
    background-position-y: 100%;
    background-size: 52% 35%;
  }
  .g-title2 {
    position: relative;
    height: 0.19rem;
    font-size: 0.2rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    padding-left: 0.35rem;
  }
  .g-title2:before {
    position: absolute;
    width: 0.32rem;
    height: 0.33rem;
    left: 0;
    top: 0;
    content: "";
    background: url("../../../assets/city-management/market-supervision/food-drug/title_bg02.png");
    background-size: 100% 100%;
  }
  .left-box-top {
    width: 100%;
    height: 33.3%;
    padding: 0.3rem 0.1rem 0 0.4rem;
  }
  .left-box-top-left {
    position: relative;
    width: 52%;
    height: 100%;
    float: left;
    .g-title {
      top: 0.1rem;
    }
    .time-title {
      position: absolute;
      top: 0.45rem;
      right: 0.5rem;
      height: 0.14rem;
      font-size: $date-title-size;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: $date-title-color
    }
  }
  .left-box-top-right {
    .g-title {
      top: 0.1rem;
    }
    position: relative;
    width: 48%;
    height: 100%;
    float: left;
    .pieCount {
      width: 1.1rem;
      height: 1rem;
      text-align: center;
      position: absolute;
      top: 1.5rem;
      left: 0.75rem;
      font-size: 0.3rem;
      font-family: Impact;
      font-weight: 400;
      font-style: italic;
      color: rgba(250, 252, 255, 1);
      text-shadow: 0px 1px 10px rgba(148, 229, 252, 0.28);

      background: linear-gradient(
        180deg,
        rgba(249, 251, 255, 1) 0%,
        rgba(120, 208, 250, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      p:nth-child(2) {
        font-size: 0.18rem;
        width:1.1rem;
      }
      p:nth-child(3) {
        font-size: 0.18rem;
      }
    }
  }
  .rt-num-title {
    position: absolute;
    top: 0.9rem;
    left: 0.3rem;
    display: inline-block;
    height: 0.28rem;
    padding: 0 0.15rem 0 0.07rem;
    font-size: 0.17rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    font-style: italic;
    color: rgba(249, 229, 89, 1);
    border: 0.02rem solid rgba(249, 229, 89, 1);
  }
  .g-color-orige {
    color: #d5602c;
    border-color: #d5602c;
  }
  .g-color-yellow {
    color: #f9e559;
    border-color: #f9e559;
  }
  .rt-num-box {
    position: absolute;
    top: 0.85rem;
    left: 2.2rem;
    overflow: hidden;
    .g-num-text {
      width: 0.37rem;
      height: 0.5rem;
      border-radius: 0.04rem;
      position: relative;
      float: left;
      margin-right: 0.07rem;
      background: url("../../../assets/city-management/market-supervision/food-drug/number_bg01.png");
      -webkit-background-size: 100% 100%;
      background-size: 100% 100%;
      span {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: inline-block;
        width: 0.27rem;
        height: 0.36rem;
        line-height: 0.36rem;
        border-radius: 0.04rem;
        text-align: center;
        font-size: 0.4rem;
        font-family: digital;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5);
      }
    }
    .g-num-tip {
      margin-top: 0.2rem;
      width: 0.28rem;
      height: 0.28rem;
      border: 0.02rem solid rgba(73, 170, 244, 1);
      border-radius: 0.04rem;
      position: relative;
      float: left;
      span {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: inline-block;
        width: 0.21rem;
        height: 0.21rem;
        line-height: 0.21rem;
        background: rgba(34, 100, 224, 0.7);
        border-radius: 0.04rem;
        text-align: center;
        font-size: 0.14rem;
        font-family: digital display tfb;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5);
      }
    }
  }
  .fd-count-box {
    position: absolute;
    top: 1.44rem;
    left: 0.24rem;
    width: 4.64rem;
    height: 1.44rem;
    background: url("../../../assets/city-management/market-supervision/food-drug/left_content_bg01.png");
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    .fd-num-item {
      position: relative;
      color: black;
      height: 0.2rem;
      line-height: 0.2rem;

      font-size: 0.2rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      margin: 0.4rem 0 0 0.4rem;
      span {
        color: #f9e559;
      }
    }
    .fd-num-item:before {
      position: absolute;
      width: 0.06rem;
      height: 0.06rem;
      background: #6ee8fc;
      border-radius: 1px;
      content: "";
      left: -0.14rem;
      top: 0.1rem;
    }
  }
  .left-box-bottom {
    position: relative;
    width: 100%;
    height: 66.6%;
    padding: 0rem 0.1rem 0.4rem 0.4rem;
    .left-box-bottom-box1 {
      padding-top: 0.05rem;
      position: absolute;
      width: 52%;
      height: 33%;
      left: 0.7rem;
      top: 0.6rem;
      .fd-check-box {
        width: 100%;
        height: 92%;
        color: #fff;
        padding-top: 0.2rem;
        padding-left: 0.3rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        color: #fff;
        .fd-check-td {
          width: 33.3%;
          float: left;
          position: relative;
          &:nth-of-type(6n + 1)::before {
            content: "";
            width: 0.06rem;
            display: block;
            height: 0.06rem;
            position: absolute;
            left: -0.2rem;
            top: 0.14rem;
            background: rgba(110, 232, 252, 1);
            border-radius: 0.01rem;
          }
        }
        .fd-check-td:nth-child(3n+1){
          width: 28%;
        }
        .fd-check-td-up {
          height: 0.3rem;
          line-height: 0.3rem;
          font-size: 0.17rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(255, 255, 249, 1);
        }
        .fd-check-td-down {
          height: 0.3rem;
          line-height: 0.3rem;
          font-size: 0.17rem;
          font-family: Source Han Sans CN;
          color: #fff;
          font-weight: 400;
          span {
            font-weight: bold;
            color: rgba(171, 238, 246, 1);
          }
        }

        .fd-check-row:before {
          position: absolute;
          width: 0.06rem;
          height: 0.06rem;
          background: rgba(110, 232, 252, 1);
          border-radius: 1px;
          content: "";
          left: -0.14rem;
          top: 0.1rem;
        }
      }
    }
    .left-box-bottom-box2 {
      position: absolute;
      width: 39%;
      height: 42%;
      left: 59%;
      padding-top: 0.65rem;
      .pieCount {
        width: 1rem;
        height: 1rem;
        text-align: center;
        position: absolute;
        top: 1.6rem;
        left: 0.7rem;
        font-size: 0.3rem;
        font-family: Impact;
        font-weight: 400;
        font-style: italic;
        color: rgba(250, 252, 255, 1);
        text-shadow: 0px 1px 10px rgba(148, 229, 252, 0.28);

        background: linear-gradient(
          180deg,
          rgba(249, 251, 255, 1) 0%,
          rgba(120, 208, 250, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        p:nth-child(2) {
          font-size: 0.18rem;
        }
        p:nth-child(3) {
          font-size: 0.18rem;
        }
      }
    }
    .left-box-bottom-box3 {
      position: absolute;
      width: 50%;
      height: 50%;
      left: 0.4rem;
      top: 42%;
      padding-top: 0.1rem;
      padding-left: 0.2rem;
      .left-echart-bar-legend {
        position: absolute;
        top: 0.55rem;
        width: 100%;
        left: 0.3rem;
        .legend-item {
          height: 0.16rem;
          font-size: 0.16rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          display: inline-block;
          margin-right: 0.1rem;
          .icon {
            display: inline-block;
            width: 0.12rem;
            height: 0.12rem;
            background: rgba(249, 229, 89, 1);
            border-radius: 2px;
            margin-right: 0.02rem;
          }
        }
      }
    }
    .left-box-bottom-box4 {
      position: absolute;
      width: 44%;
      height: 50%;
      left: 54%;
      top: 42%;
      padding-top: 0.1rem;
      .g-echart-box2 {
        background: url("../../../assets/city-management/market-supervision/food-drug/chart_bottom_bg01.png");
        background-size: 87% 24%;
        background-position: 0.41rem 2rem;
        background-repeat: no-repeat;
      }
    }
  }
  .g-echart-box2 {
    width: 100%;
    height: 100%;
  }
  #left-echarts-bar01 {
    width: 100%;
    height: 100%;
  }
  .main-right-box {
    width: 10.48rem;
    height: 10.48rem;
    position: absolute;
    top: 0.18rem;
    right: 0.11rem;
    background: url("../../../assets/city-management/market-supervision/food-drug/right_box.png");
    background-size: 100% 100%;
    background-position: -0.2rem;
    padding: 0.3rem;
    z-index: 101;
    .main-right-box-top {
      position: relative;
      width: 100%;
      height: 50%;
      .main-right-top-box1 {
        position: absolute;
        height: 100%;
        width: 50%;
        padding-top: 0.85rem;
        padding-left: 0.2rem;
        .echart-box {
          position: absolute;
          top: 1.6rem;
          bottom: 0;
          width: 100%;
        }
        .echarts-legend {
          position: absolute;
          top: 1.35rem;
          left: 0.5rem;
          height: 0.2rem;
          font-size: 0.2rem;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          span {
            color: #f8e66e;
          }
        }
        .echarts-legend:before {
          position: absolute;
          width: 0.06rem;
          height: 0.06rem;
          background: #6ee8fc;
          border-radius: 1px;
          content: "";
          left: -0.14rem;
          top: 0.1rem;
        }
      }
      .main-right-top-box2 {
        position: absolute;
        height: 100%;
        width: 50%;
        left: 50%;
        padding-left: 0.4rem;
        padding-top: 0.85rem;
        .echarts-box {
          position: absolute;
          top: 0.5rem;
          bottom: 0;
          width: 100%;
        }
      }
    }
    .main-right-box-bottom {
      position: relative;
      width: 100%;
      height: 50%;

      .main-right-bottom-box1 {
        position: absolute;
        height: 100%;
        width: 49%;
        padding-top: 0.44rem;
        padding-left: 0.2rem;
        .time-title {
          position: absolute;
          top: 0.5rem;
          right: 0.4rem;
          height: 0.14rem;
          font-size: 0.14rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(169, 218, 245, 1);
        }
        .fd-count-box-title {
          position: absolute;
          height: 0.18rem;
          font-size: 0.18rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(249, 229, 89, 1);
          top: 1.44rem;
          left: 0.32rem;
        }
        .fd-count-box {
          position: absolute;
          background: url("../../../assets/city-management/market-supervision/food-drug/right_content_bg01.png");
          -webkit-background-size: 100% 100%;
          background-size: 100% 100%;
          top: 1.9rem;
          left: 0.24rem;
          width: 85%;
          height: 2.3rem;
          .fd-num-item {
            margin: 0.2rem 0 0 0.4rem;
          }
        }
      }
      .main-right-bottom-box2 {
        position: absolute;
        height: 100%;
        width: 51%;
        left: 49%;
        padding-top: 0.44rem;
        .echarts-box {
          width: 100%;
          height: 100%;
        }
        .g-echart-box2 {
          background: url("../../../assets/city-management/market-supervision/food-drug/chart_bottom_bg02.png");
          background-size: 87% 12%;
          background-position: 0.46rem 3rem;
          background-repeat: no-repeat;
        }
      }
    }
  }
  .g-echarts-box {
    width: 100%;
    height: 100%;
  }
  .menu-list {
    position: absolute;
    right: 11rem;
    top: 1.5rem;
    z-index: 100;
  }
}
.market-panel-box {
  position: absolute;
  bottom: 0.2rem;
  right: 11rem;
  z-index: 9;
}
.dialog {
  width: 12.93rem;
  height: 6.61rem;
  //display: none;
  // background:rgba(11,45,109,0.28);
  // border:1px solid rgba(49, 128, 242, 1);
  background: url("../../../assets/city-management/market-supervision/food-drug/dialog-bg@2x.png");
  background-size: 100% 100%;
  position: absolute;
  left: 14.84rem;
  top: 2.11rem;
  z-index: 103;
  padding: 0.3rem;
  .g-small-title {
    margin-left: 0.05rem !important;
    font-size: 0.24rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
  .close-btn {
    width: 0.3rem;
    height: 0.3rem;
    position: absolute;
    right: 0.3rem;
    top: 0.3rem;
    cursor: pointer;
  }
  .g-title2 {
    height: auto;
    font-size: 0.24rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
  .dialog-head {
    .btn-group{
      display: flex;
      width: 3.6rem;
      margin: 0 auto;
      justify-content: space-between;
      span{
        padding: .05rem .2rem;
        border-radius: .1rem;
        color:#fff;
        background: #2C3354;
        font-size: .18rem;
        cursor: pointer;
        &.active,&:hover,&:active{
          background: #458fef;
        }
      }
    }
    .form-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.2rem 0.1rem 0 0.1rem;
      position: relative;
      .form-cell {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        label {
          font-size: 0.18rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: rgba(223, 226, 251, 1);
          line-height: 0.38rem;
          text-align: right;
          // min-width: 1.63rem;
        }
        .text-input {
          width: 2.43rem;
          line-height: 0.38rem;
          box-sizing: border-box;
          padding: 0 0.1rem;
          height: 0.38rem;
          background: rgba(11, 46, 109, 0.58);
          border: 0.01rem solid rgba(69, 143, 239, 1);
          border-radius: 0.02rem;
          font-size: 0.17rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          font-style: italic;
          color: rgba(255, 255, 255, 1);
          outline: none;
        }
        &:nth-child(2) {
          margin-left: 0.2rem;
        }
      }
      // &:nth-child(2) {
      //   // justify-content: flex-start;
      //   .form-cell:nth-child(2) {
      //     margin-right: auto;
      //     margin-left: 0.25rem;
      //   }
      // }
      // .btn {
      //   margin-left: 0.1rem;
      //   &:nth-child(1) {
      //     right: 1.4rem;
      //   }
      // }
    }
  }
  .dialog-body {
    height: 4.6rem;
    overflow: auto;
  }
}
// .dialog {
//   width: 14.97rem;
//   height: 6.6rem;
//   //display: none;
//   // background:rgba(11,45,109,0.28);
//   // border:1px solid rgba(49, 128, 242, 1);
//   background: url("../../../assets/city-management/market-supervision/food-drug/dialog-bg@2x.png");
//   background-size: 100% 100%;
//   position: absolute;
//   left: 14.12rem;
//   top: 2.11rem;
//   z-index: 100;
//   padding: 0.3rem;
//   .close-btn {
//     width: 0.3rem;
//     height: 0.3rem;
//     position: absolute;
//     right: 0.3rem;
//     top: 0.3rem;
//     cursor: pointer;
//   }
//   .g-title2 {
//     height: auto;
//     font-size: 0.24rem;
//     font-family: Source Han Sans CN;
//     font-weight: 500;
//     color: rgba(255, 255, 255, 1);
//   }
//   .dialog-head {
//     .form-row {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       padding: 0.2rem 0.1rem 0 0.1rem;
//       .form-cell {
//         display: flex;
//         align-items: center;
//         label {
//           font-size: 0.18rem;
//           font-family: Source Han Sans CN;
//           font-weight: bold;
//           color: rgba(223, 226, 251, 1);
//           line-height: 0.38rem;
//           min-width: 0.6rem;
//           text-align: center;
//         }
//         .text-input {
//           width: 2.97rem;
//           line-height: 0.38rem;
//           box-sizing: border-box;
//           padding: 0 0.1rem;
//           height: 0.38rem;
//           background: rgba(11, 46, 109, 0.58);
//           border: 0.01rem solid rgba(69, 143, 239, 1);
//           border-radius: 0.02rem;
//           font-size: 0.17rem;
//           font-family: Source Han Sans CN;
//           font-weight: bold;
//           font-style: italic;
//           color: rgba(255, 255, 255, 1);
//           outline: none;
//           &.date {
//             width: 2.93rem;
//           }
//         }
//         // &:nth-child(2){
//         //   margin-left: .2rem;
//         // }
//       }
//       &:nth-child(2) {
//         justify-content: flex-start;
//       }
//       .btn {
//         margin-left: 0.3rem;
//       }
//     }
//   }
//   .dialog-body {
//     height: 4rem;
//     // margin-top: 0.2rem;
//     overflow: auto;
//   }
// }
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
        word-break: break-all;
      }
      &:nth-of-type(even) {
        background: rgba(0, 102, 181, 0.26);
      }
    }
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
  right: 0.32rem;
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
.table-no-data {
  color: #fce62f;
  text-align: center;
  font-size: 0.2rem;
  width: 1rem;
  margin: 0 auto;
  position: absolute;
  right: 0;
  left: 0;
  margin-top: 0.1rem;
}
.user-dos {
  margin-left: 4rem;
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
.right-add-box{
  position:absolute;
  top:0.9rem;
  right:10.81rem;
  z-index: 10;
  overflow: hidden;
  width:2.6rem;
  div{
   min-width:1.61rem;
    height:0.36rem;
    line-height: 0.30rem;
    background-image:url('../../../assets/entry/right-postion.png');
    background-size:100% 130%;
    background-position:left center;
    color:#9BE9FC;
    font-size: 0.18rem;
    font-style:italic;
    font-family:Source Han Sans CN;
    text-align: right;
    padding-right:0.18rem;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    margin-top:0.2rem;
    float: right;
    &:last-child{
      width:2.6rem;
      background-size:102% 130%;
      &:after{
        right:0.04rem;
      }
    }
    &:after{
      content:"";
      display:block;
      position:absolute;
      width:.03rem;
      height: 0.16rem;
      background:#9BE9FF;
      right:0.06rem;
      top:0.08rem;
    }
  }
}
  /*.left-box-top-left,*/
  /*.left-box-top-right,*/
  /*.left-box-bottom,*/
  /*.main-right-box-top,*/
  /*.main-right-box-bottom{*/
  /*}*/
</style>
