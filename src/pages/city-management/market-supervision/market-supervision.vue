<!--
 * @Descripttion:
 * @Author: renting
 * @Date: 2020-03-02 10:15:41
 * @LastEditors: wanglong
 * @LastEditTime: 2020-05-12 20:26:32
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-16 09:03:46
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-15 16:37:02
 -->

<template>
  <div class="market-supervision-container">
    <head-componen name="市场监管一张图"></head-componen>
    <div class="g-menu-box">
      <menu-list></menu-list>
    </div>
    <div class="g-all-num">
      <div class="g-num-item">
        <div class="g-all-title">主体总量</div>
        <p>
          {{marketMainText&&marketMainText.zy01002&&marketMainText.zy01002}}
          <small
            style="font-size:.2rem;"
          >户</small>
        </p>
      </div>
      <div class="g-num-item">
        <div class="g-all-title">企业</div>
        <p>
          {{marketMainText&&marketMainText.zy01006&&marketMainText.zy01006}}
          <small
            style="font-size:.2rem;"
          >户</small>
        </p>
      </div>
      <div class="g-num-item">
        <div class="g-all-title">个体工商户</div>
        <p>
          {{marketMainText&&marketMainText.zy01010&&marketMainText.zy01010}}
          <small
            style="font-size:.2rem;"
          >户</small>
        </p>
      </div>
      <div class="g-num-item">
        <div class="g-all-title">农专合作社</div>
        <p>
          {{marketMainText&&marketMainText.zy01014&&marketMainText.zy01014}}
          <small
            style="font-size:.2rem;"
          >户</small>
        </p>
      </div>
    </div>
    <div class = "right-add-box">
      <div @click="ShowMal(1)">市场主体检索</div>
      <div @click="ShowMal(2)">双随机一公开（市抽情况）</div>
    </div>
    <!-- <div class="g-marker-right">
      <select-other @navClick="navClick" :data="menuList"></select-other>
    </div>-->
    <div class="main-left-top">
      <div class="g-title hover-color">市场主体</div>
      <div class="lt-top-box">
        <div class="lt-box-item" ref="lssxxqk">
          <div class="g-small-title hover-color">
            <div class="g-small-tip"></div>全市市场主体概况<span class="global-data-title">（截至2020年1月）</span>
          </div>
          <div class="market-overview">
            <ul class="g-fourt-item">
              <li>
                市场主体存量:
                <span>{{marketMainText.zy01002}}</span>户，同比增长
                <span>{{marketMainText.zy01003&&(marketMainText.zy01003)}}%</span>
              </li>
              <li>
                注册资本总额:
                <span>{{marketMainText.zy01004}}</span>亿元，同比增长
                <span>{{marketMainText.zy01005&&(marketMainText.zy01005)}}%</span>
              </li>
              <li>
                企业:
                <span>{{marketMainText.zy01006}}</span>户，同比增长
                <span>{{marketMainText.zy01007&&(marketMainText.zy01007)}}%</span>
              </li>
              <li>
                注册资金总额:
                <span>{{marketMainText.zy01008}}</span>亿元，同比增长
                <span>{{marketMainText.zy01009&&(marketMainText.zy01009)}}%</span>
              </li>
              <li>
                个体工商户:
                <span>{{marketMainText.zy01010}}</span>户，同比增长
                <span>{{marketMainText.zy01011&&(marketMainText.zy01011)}}%</span>
              </li>
              <li>
                注册资金总额:
                <span>{{marketMainText.zy01012}}</span>亿元，同比增长
                <span>{{marketMainText.zy01013&&(marketMainText.zy01013*10)}}%</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="lt-box-item">
          <div class="g-small-title hover-color">
            <div class="g-small-tip"></div>
            市场主体数量年发展情况
          </div>
          <div class="g-four-top">
            <div id="right-panle-charts-01" class="right-panle-charts-01"></div>
          </div>
        </div>
      </div>
      <div class="lt-bot-box">
        <div class="lt-bot-items">
          <div class="g-small-title hover-color">
            <div class="g-small-tip"></div>市场主体区县分布情况<span class="global-data-title">（截至2020年1月）</span>
          </div>
          <div id="top-echarts-01" class="top-echarts-01"></div>
          <img
            class="bottom-chart"
            src="@/assets/city-management/market-supervision/market-supervision/bottom-chart.png"
          />
        </div>
      </div>
    </div>
    <div class="main-left-bottom">
      <p class="g-title hover-color">{{doubleViewData.zy03001}}年双随机一公开（市抽情况）</p>
      <div class="lt-top-box">
        <div class="lt-box-item" ref="lssxxqk">
          <div class="market-overview">
            <ul class="g-fourt-item">
              <li>
                {{doubleViewData.zy03001}}年市级抽查任务
                <div class="g-fourt-times">
                  <p>{{doubleViewData.zy03002}}&nbsp;&nbsp;</p>次
                </div>
              </li>
              <li>
                出动
                <div class="g-fourt-times">
                  <p>{{doubleViewData.zy03003}}&nbsp;&nbsp;</p>人
                </div>
              </li>
              <li>
                任务完成率
                <div class="g-fourt-times">
                  <p>{{doubleViewData.zy03009}}&nbsp;&nbsp;</p>%
                </div>
              </li>
              <li>
                抽查合格率
                <div class="g-fourt-times">
                  <p>{{doubleViewData.zy03010}}&nbsp;&nbsp;</p>%
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="lt-box-item">
          <div class="g-small-title">
            <div class="g-small-tip"></div>抽查分析
          </div>
          <div class="g-four-top">
            <div class="shbzxx_desc">
              <p>{{shbzxxChartDesc}}</p>
              <p>
                抽查
                <span>(件)</span>
              </p>
            </div>
            <div class="g-pie-item" id="shbzxx"></div>
          </div>
        </div>
      </div>
      <div class="dialog-toggle-btn" @click="isShowDialog=!isShowDialog">
        <span>查看明细</span>
        <img src="../../../assets/city-management/market-supervision/img/details-icon.png" />
      </div>
    </div>
    <div class="main-right">
      <div class="main-right-top">
        <p class="g-title hover-color">食品药品</p>
        <div class="rt-main-box">
          <div class="rt-item-l food-left">
            <div class="g-small-title hover-color">
              <div class="g-small-tip"></div>许可证概况
            </div>
            <div class="rt-num-text">截至{{checkPaper.zy05001}}年{{checkPaper.zy05002}}月，全市 食药许可证总量：</div>
            <div class="rt-num-box">
              <div class="num-box" v-for="(item, index) in checkPaperNum" :key="index">
                <div class="num-inner-box">{{item}}</div>
              </div>
              <div class="num-box-unit">
                <div class="num-inner-box">件</div>
              </div>
            </div>
          </div>
          <div class="rt-item-c food-center">
            <div class="rt-item-bar-box">
              <div class="rt-item-bar rt-item-bar-first" v-if="threeBarData.length>1">
                <div class="rt-item-bar-blank"></div>
                <div class="rt-item-bar-real" :style="{height:threeBarData[1].rate*100+'%'}"></div>
                <div class="rt-item-line"></div>
                <div class="rt-item-text-box">
                  <div class="bar-num">{{threeBarData[1].value||''}}件</div>
                  <div class="bar-text">{{threeBarData[1].name||''}}</div>
                </div>
              </div>
              <div class="rt-item-bar" :key="1" v-if="threeBarData.length>0">
                <div class="rt-item-bar-blank"></div>
                <div class="rt-item-bar-real" :style="{height:threeBarData[0].rate*100+'%'}"></div>
                <div class="rt-item-line"></div>
                <div class="rt-item-text-box">
                  <div class="bar-num">
                    <span class="bar-text">{{threeBarData[0].name}}</span>
                    {{threeBarData[0].value||''}}件
                  </div>
                </div>
              </div>
              <div class="rt-item-bar" :key="2" v-if="threeBarData.length>2">
                <div class="rt-item-bar-blank"></div>
                <div class="rt-item-bar-real" :style="{height:threeBarData[2].rate*100+'%'}"></div>
                <div class="rt-item-line"></div>
                <div class="rt-item-text-box">
                  <div class="bar-num">{{threeBarData[2].value}}件</div>
                  <div class="bar-text">{{threeBarData[2].name}}</div>
                </div>
              </div>
            </div>
            <div class="circle-bottom"></div>
          </div>
          <div class="rt-item-r food-right">
            <div class="g-small-title hover-color">
              <div class="g-small-tip"></div>
              {{GLOBAL_YEAR}}年度检查情况
            </div>
            <div class="rt-right-nav">
              <div class="shbzxx_desc" style="text-align: center;">
                <p>{{shbzxxrtChartDesc}}</p>
                <p>总数
                  <span>(家次)</span>
                </p>
              </div>
              <div class="g-pie-item" id="shbzxxrt"></div>
            </div>
            <div class="rt-right-echart" ref="lssjyphbd"></div>
          </div>
        </div>
      </div>
      <div class="main-right-middle">
        <p class="g-title hover-color">特种设备</p>
        <div class="rt-main-box">
          <div class="rt-item-l">
            <div class="g-small-title hover-color">
              <div class="g-small-tip"></div>区县分布
            </div>
            <div class="rt-left-nav"></div>
            <div class="rt-left-highchart">
              <div class="rt-highchart-box" id="each-area"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-right-bottom">
        <p class="g-title hover-color hover-color">行政执法</p>
        <div class="rt-main-box rt-main-box-zxt">
          <div class="rt-item-l">
            <div class="g-small-title hover-color">
              <div class="g-small-tip"></div>2019年度区县工商执法情况
            </div>
            <div class="rt-left-highchart">
              <div class="rt-highchart-box" id="right-charts-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <template v-if="areaMapData.length > 0 && isShowMiniMarker  === 0">
      <div
        class="market-marker-container"
        :id="'area_center_' + item.bh"
        v-for="(item,index) in  areaMapData"
        :key="index"
        :style="{zIndex:item.qx===activeQx.qx?8:6}"
      >
        <div class="marker" >
          <div class="top">
            <div class="name" :class="{'active':item.qx===activeQx.qx}"  @click="mapPointClick(item)">主体</div>
            <div class="number">
              {{item.ztsl}}
              <!-- <small>户</small> -->
            </div>
          </div>
          <div class="bottom"></div>
        </div>
        <div class="marker-detail" v-show="item.qx===activeQx.qx">
          <div class="heading">
            <div class="title">{{item.qxjc}}市场主体概况</div>
            <div class="dialog-toggle-btn" @click="openMarketInfo(item)">
              <span>市场主体检索</span>
              <img src="../../../assets/city-management/market-supervision/img/details-icon.png" />
            </div>
            <div class="close-icon" @click="closeMarkerDetail(item)"></div>
          </div>
          <div class="bodying">
            <div class="info-item">
              市场主体总量：
              <span class="number">{{item.ztsl&&numFormat(item.ztsl)}}</span>户，同比增长
              <span class="number">{{item.ztsll}}%</span>
            </div>
            <div class="info-item">
              注册资本总额：
              <span class="number">{{item.zczj&&numFormat(item.zczj)}}</span>亿元，同比增长
              <span class="number">{{item.zczjlm}}%</span>
            </div>
            <div class="second-title">市场主体类型分布</div>
            <div class="chart-group">
              <div class="liquid-fill-chart-box">
                <div class="liquid-fill-chart"></div>
                <div :id="'liquid1_'+item.bh" class="liquid_fill"></div>
                <div class="desc">
                  <p>企业</p>
                  <p>{{item.qysl}}户</p>
                </div>
              </div>
              <div class="liquid-fill-chart-box">
                <div class="liquid-fill-chart"></div>
                <div :id="'liquid2_'+item.bh" class="liquid_fill"></div>
                <div class="desc">
                  <p>个体工商户</p>
                  <p>{{item.gtsl}}户</p>
                </div>
              </div>
              <div class="liquid-fill-chart-box">
                <div class="liquid-fill-chart"></div>
                <div :id="'liquid3_'+item.bh" class="liquid_fill"></div>
                <div class="desc">
                  <p>农专合作社</p>
                  <p>{{item.nmsl}}户</p>
                </div>
              </div>
              <img
                class="liquid-fill-bg"
                src="../../../assets/city-management/market-supervision/market-supervision/dizuo@2x.png"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="dialog" v-show="isShowMarkerDialog">
      <div class="g-small-title">
        <div class="g-small-tip"></div>
        {{activeQx.qxjc}}市场主体明细
      </div>
      <img
        src="../../../assets/city-management/market-supervision/img/close-icon@2x.png"
        class="close-btn"
        @click="marketDialogClose"
        alt="关闭"
      />
      <div class="dialog-head">
        <!-- <div class="form-row">
          <div class="form-cell">
            <label for>抽查计划名称：</label>
            <input type="text" class="text-input" />
          </div>
         <div class="form-cell">
            <label for>市场主体名称：</label>
            <input type="text" id="endDate" class="text-input" />
          </div>
          <div class="form-cell">
            <label for>登记机关：</label>
            <input type="text" class="text-input" />
          </div>
        </div>-->
        <div class="form-row">
          <!-- <div class="form-cell">
            <label for>统一社会信用代码：</label>
            <input type="text" id="startDate" class="text-input" />
          </div>-->
          <div class="form-cell">
            <label for>主体名称：</label>
            <input type="text" class="text-input" v-model="marketSearchObj.name" />
          </div>
          <div class="form-cell">
            <!-- <a href="javascript:void(0);" class="btn" @click="restSearch">重置</a> -->
            <a href="javascript:void(0);" class="btn primary" @click="doSearchMarket">查询</a>
          </div>
        </div>
      </div>
      <table class="data-table" style="margin-top:.2rem">
        <thead>
          <tr v-if="tableHeadConfig.length>0">
            <th v-for="(item,index) in tableHeadConfig" :key="index" :style="{width:item.width}">{{item.name}}</th>
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
                    <td :style="{width:tableHeadConfig[2].width}">{{item.zcsj||''}}</td>
                    <td :style="{width:tableHeadConfig[3].width}">{{item.lx||''}}</td>
                    <td :style="{width:tableHeadConfig[4].width}">{{item.zch||''}}</td>
                    <td :style="{width:tableHeadConfig[5].width}">{{item.fzr||''}}</td>
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
        <div class="dialog" v-show="isShowDialog">
      <div class="g-small-title">
        <div class="g-small-tip"></div>“双随机 一公开”市抽任务明细
      </div>
      <img
        src="../../../assets/city-management/market-supervision/img/close-icon@2x.png"
        class="close-btn"
        @click="isShowDialog=false;randomDetailInfo=[]"
        alt="关闭"
      />
      <div class="dialog-head">
        <!-- <div class="form-row">
          <div class="form-cell">
            <label for>抽查计划名称：</label>
            <input type="text" class="text-input" />
          </div>
         <div class="form-cell">
            <label for>市场主体名称：</label>
            <input type="text" id="endDate" class="text-input" />
          </div>
          <div class="form-cell">
            <label for>登记机关：</label>
            <input type="text" class="text-input" />
          </div>
        </div>-->
        <div class="form-row">
          <!-- <div class="form-cell">
            <label for>统一社会信用代码：</label>
            <input type="text" id="startDate" class="text-input" />
          </div>-->
          <div class="form-cell">
            <label for>抽查任务名称：</label>
            <input type="text" class="text-input" v-model="searchObj.name" />
          </div>
          <div class="form-cell">
            <!-- <a href="javascript:void(0);" class="btn" @click="restSearch">重置</a> -->
            <a href="javascript:void(0);" class="btn primary" @click="doSearch">查询</a>
          </div>
        </div>
      </div>
      <table class="data-table" style="margin-top:.2rem">
        <thead>
          <tr>
            <th>抽查任务名称</th>
            <th>检查结果</th>
            <th>年度</th>
            <th>开始时间</th>
            <th>结束时间</th>
            <th>是否完成</th>
            <th>完成率(%)</th>
            <th>出动人数</th>
          </tr>
        </thead>
      </table>
      <div class="dialog-body">
        <table class="data-table" style="margin-top:-.4rem">
          <thead style="visibility: hidden;">
            <tr>
              <th>抽查任务名称</th>
              <th>检查结果</th>
              <th>年度</th>
              <th>开始时间</th>
              <th>结束时间</th>
              <th>是否完成</th>
              <th>完成率</th>
              <th>出动人数</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="randomDetailInfo.length>0">
              <tr v-for="(item,index) in randomDetailInfo" :key="index">
                <td>{{item.zy10002||''}}</td>
                <td>{{item.zy10007||''}}</td>
                <td>{{item.zy10001||''}}</td>
                <td>{{item.zy10004||''}}</td>
                <td>{{item.zy10005||''}}</td>
                <td>{{item.zy10006||''}}</td>
                <td>{{item.zy10008||''}}</td>
                <td>{{item.zy10003||''}}</td>
              </tr>
            </template>
            <p v-else class="table-no-data">无数据</p>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import API from '@/api/city-management/market-supervision.js'
import selectOther from '@/components/select-other.vue'
import menuList from '@/components/menu.vue'
import options01 from '@/echarts-data/city-management/market-supervision/right-charts-01.js'
import options from '@/echarts-data/city-management/market-supervision/top-echarts-01.js'
import pieChart from '@/echarts-data/city-management/market-supervision/pieEchart.js'
import pieChartRtRT from '@/echarts-data/city-management/market-supervision/pieEchartRt-tr.js'
import qArea from '@/echarts-data/city-management/market-supervision/qArea.js'
import options05 from '@/echarts-data/city-management/market-supervision/right-charts-bottom.js'
// import marketPanel from './market-panel'
// import common from '@/api/city-management/marketSupervisionMapOpreate'
import headComponen from '@/components/head-component'
import liquidFillChart from '@/echarts-data/city-management/market-supervision/market-subject/liquidfillChart'
export default {
  components: { selectOther, menuList, headComponen },
  data () {
    return {
      pieObject2: null,
      pieObject3: null,
      pieObject3_2: null,
      pieObject3_3: null,
      barObject: null,
      barObject02: null,
      barLineObject: null,
      bar3dObject: null,
      nationFlag: false,
      yearCheckTotalNum: '',
      isShowMarkerDetail: false,
      menuList: [
        {
          name: '市场监管',
          routeName: 'marketSupervision',
          selected: true
        },
        {
          name: '市场主体',
          routeName: 'marketSubject',
          selected: false
        },
        {
          name: '食品药品',
          selected: false,
          routeName: 'foodAndDrug'
        },
        {
          name: '质量技术',
          routeName: 'massTechnology',
          selected: false
        },
        {
          name: '放心舒心消费系统',
          selected: false,
          routeName: ''
        }
      ],
      marketMainText: {}, // 全市市场主体概况
      doubleViewData: {}, // 2019年双随机一公开市抽情况
      checkPaper: {}, // 许可证概况
      checkPaperNum: [],
      activeMenuName: '市场主体',
      defaultSubMenuId: '1001',
      GLOBAL_YEAR: 2019,
      GLOBAL_YEAR2: 2019,
      isShowDialog: false,
      randomDetailInfo: [],
      searchObj: {
        /// 双随机抽查查询
        name: ''
      },
      // 主体明细
      marketSearchObj: {
        name: '',
        areaCode: '',
        pageNum: 1,
        pageSize: 500
      },
      panelBig: false,
      shbzxxChartDesc: null,
      shbzxxrtChartDesc: null,
      mapMarkerList: [], // 地图点位,
      marketMarker: [],
      isShowMarkerDialog: false,
      GLOBAL_AREA_CODE: null,
      areaMapData: [], // 区县数据
      isShowMiniMarker: 0, // 二维还是三维,
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
      activeQx: {qx: ''},
      areaMarketInfo: [],
      marketGeoPoint: [],
      threeBarData: [],
      mapThreeFlag: 0,
      tableHeadConfig: [
        {
          name: '企业名称',
          width: '16%'
        },
        {
          name: '地址',
          width: '24%'
        },
        {
          name: '注册时间',
          width: '14%'
        },
        {
          name: '主体类型',
          width: '14%'
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
  computed: {},
  methods: {
    ShowMal (num) {
      if (num === 2) {
        this.isShowDialog = true
        this.searchObj = {
        /// 双随机抽查查询
          name: ''
        }
        this.doSearch()
      } else {
        this.isShowMarkerDialog = true
        this.activeQx = {qx: ''}
        this.marketSearchObj = {
          name: '',
          areaCode: '',
          pageNum: 1,
          pageSize: 500
        }
        this.doSearchMarket()
      }
    },
    // 点击导航
    navClick (name) {
      console.log(name)
    },
    /// 划分千分位
    numFormat (num) {
      var reg = /\d{1,3}(?=(\d{3})+$)/g
      return (num + '').replace(reg, '$&,')
    },
    closeMarkerDetail (item) {
      // this.isShowMarkerDetail = false
      this.activeQx = {qx: ''}
      // console.log('closeMarkerDetail', item, this.activeQx)
      // if (item.showTextFlag === true) {
      //   this.areaMapData.map((i, ind) => {
      //     // console.log(item.qx, i.qx, item.qx === i.qx)
      //     if (i.qx === item.qx) {
      //       let a = i
      //       a.showTextFlag = false
      //       this.areaMapData.splice(ind, 1, a)
      //     }
      //   })
      // }
    },
    marketAdressClick (item) {
      if (item.jd) {
        this.marketGeoPoint = [
          {
            lon: +item.jd,
            lat: +item.wd,
            id: 'geo_point_' + item.zch
          }
        ]
        // console.log('marketGeoPoint', this.marketGeoPoint)
        window._m && window._m.addMakers(this.marketGeoPoint, data => {
          this.isShowMiniMarker = data
        })
        this.isShowMarkerDialog = false
      }
    },
    // 地图点位信息
    getMapMakers () {
      API.MARKET_MAINMAP(this, {})
        .then(resA => {
          let res = resA.data.data
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    marketDialogClose () {
      this.marketSearchObj = {
        name: '',
        areaCode: '',
        pageNum: 1,
        pageSize: 500
      }
      this.isShowMarkerDialog = false
      this.areaMarketInfo = []
    },
    // 市场主体
    getMarketMain () {
      API.MARKET_MAIN(this, {})
        .then(resA => {
          let res = resA.data.data
          // 全市市场主体概况
          this.marketMainText = res.data1
          this.$nextTick(() => {
            //  市场主体数量年发展情况
            echarts
              .init(document.getElementById('right-panle-charts-01'))
              .setOption(options01(res.data2))
            // 全市市场主体概况
            echarts
              .init(document.getElementById('top-echarts-01'))
              .setOption(options(res.data3))
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 双随机一公开
    getDoubleView () {
      API.MARKET_DOUBLEVIEW(this, {})
        .then(resA => {
          let res = resA.data.data
          this.doubleViewData = res.data
          // this.$nextTick(() => {
          let chart = echarts.init(document.getElementById('shbzxx'))
          chart.setOption(pieChart(res.data))
          chart.dispatchAction({
            type: 'highlight',
            // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
            dataIndex: 0
          })
          let dataJson = [
            {
              name: '未发现问题',
              value: res.data.zy03005 || ''
            },
            {
              name: '发现问题',
              value: res.data.zy03006 || ''
            },
            {
              name: '吊注销',
              value: res.data.zy03007 || ''
            },
            {
              name: '迁往外省市',
              value: res.data.zy03008 || ''
            }
          ]
          dataJson.forEach(item => {
            this.shbzxxChartDesc += item.value
          })
          // console.log('shbzxxChartDesc', this.shbzxxChartDesc)
          // chart.on('mouseover', data => {
          //   this.shbzxxChartDesc = data.data
          // })
          // console.log(this.shbzxxChartDesc)
          // })
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 食品药品情况
    getFoodMedicinal () {
      API.MARKET_FOODMEDICINAL(this, {})
        .then(resA => {
          let res = resA.data.data
          // 许可证概况
          this.checkPaper = res.data1
          this.threeBarData = [
            {
              name: '食品许可',
              value: this.checkPaper.zy05004
            },
            {
              name: '药品许可',
              value: this.checkPaper.zy05005
            },
            {
              name: '医疗器械',
              value: this.checkPaper.zy05006
            }
          ]
          this.threeBarData.sort((a, b) => {
            return b.value - a.value
          })
          this.threeBarData.map(item => {
            item.rate =
              item.value / this.threeBarData[0].value + 0.4 > 1
                ? 1
                : item.value / this.threeBarData[0].value + 0.4
            return item
          })
          console.log('threeBarData', this.threeBarData)
          let numStr = res.data1.zy05003
          this.checkPaperNum = numStr.toString().split('')
          // 年度检查情况
          this.GLOBAL_YEAR = res.data2.zy06001
          this.yearCheckTotalNum = res.data2.zy06002
          this.$nextTick(() => {
            let chart = echarts.init(document.getElementById('shbzxxrt'))
            chart.setOption(pieChartRtRT(res.data2))
            let dataJson = [
              {
                value: res.data2.zy06004,
                name: '不合格'
              },
              {
                value: res.data2.zy06003,
                name: '合格'
              }
            ]
            this.shbzxxrtChartDesc = dataJson[0].value + dataJson[1].value
            chart.dispatchAction({
              type: 'highlight',
              // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
              dataIndex: 0
            })
            // chart.on('mouseover', data => {
            //   this.shbzxxrtChartDesc = data.data
            // })
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 特种设备区县分布和行政执法案件区县分布
    getDeviceArea () {
      API.MARKET_DEVICEAREA(this, {}).then(resA => {
        let res = resA.data.data
        // 特种设备
        this.$nextTick(() => {
          echarts
            .init(document.getElementById('each-area'))
            .setOption(qArea(res.data1))
          // 行政执法
          echarts
            .init(document.getElementById('right-charts-bottom'))
            .setOption(options05(res.data2))
        })
      })
    },
    // ...common,
    // 查询双随机情况明细
    queryRandomDetailInfo () {
      /// q3ee
      API.QUERY_RANDOM_DETAIL_INFO(this, this.searchObj).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.randomDetailInfo = res.data.data
        }
      })
    },
    /// 重置查询
    restSearch () {
      for (let i in this.searchObj) {
        this.searchObj[i] = ''
      }
      this.queryRandomDetailInfo()
    },
    doSearch () {
      this.queryRandomDetailInfo()
    },
    // 主体查询
    doSearchMarket () {
      this.queryAreaDataInfo()
    },
    queryMapData () {
      API.QUERY_MAP_DATA(this, {})
        .then(res => {
          res = res.data
          if (res.serviceSuccess) {
            this.areaMapData = res.data.data
            if (this.areaMapData.length > 0) {
              this.areaMapData = this.areaMapData.map(item => {
                // console.log(item.qx)
                item.lon = this.areaLocation[item.qx].lon
                item.lat = this.areaLocation[item.qx].lat
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
    openMarketInfo (obj) {
      this.isShowMarkerDialog = true
      this.marketSearchObj.code = obj.bh
      this.activeQx = obj
      this.doSearchMarket()
    },
    queryAreaDataInfo () {
      API.QUERY_DATA_INFO(this, { ...this.marketSearchObj })
        .then(res => {
          res = res.data
          if (res.serviceSuccess) {
            this.areaMarketInfo = res.data.pageBean.list
          }
        })
        .catch(err => {
          console.error(err)
        })
    },
    mapPointClick (item) {
      this.activeQx = item
      this.areaMapData.map((i, ind) => {
        // console.log(item.qx, i.qx, item.qx === i.qx)
        if (i.qx === item.qx) {
          let a = i
          a.showTextFlag = !a.showTextFlag
          this.areaMapData.splice(ind, 1, a)
        }
      })
      this.initLiquidFillChart(item)
      // this.isShowMarkerDetail = true
      // this.initLiquidFillChart(item)
      // let $ = window.$
      // let left = +$('#area_center_' + item.bh).css('left').split('px')[0] + $('#area_center_' + item.bh).find('.marker .number').outerWidth() + 60 * window.$rem
      // let top = +$('#area_center_' + item.bh).css('top').split('px')[0] - 180 * window.$rem
      // $('#marker-detail').css('left', left)
      // $('#marker-detail').css('top', top)
    },
    // ///  水球图
    // initLiquidFillChart (item) {
    //   let opt1 = {
    //     ...liquidFillChart
    //   }
    //   opt1.series[0].data[0].value = item.qyzb / 100 // liquid1_
    //   echarts.init(document.querySelector(`#liquid1`)).setOption(opt1)
    //   let opt2 = {
    //     ...liquidFillChart
    //   }
    //   opt2.series[0].data[0].value = item.gtzb / 100

    //   echarts.init(document.querySelector(`#liquid2`)).setOption(opt2)
    //   let opt3 = {
    //     ...liquidFillChart
    //   }
    //   opt3.series[0].data[0].value = item.nmzb / 100
    //   echarts.init(document.querySelector(`#liquid3`)).setOption(opt3)
    // },
    ///  水球图
    initLiquidFillChart (item) {
      let opt1 = {
        ...liquidFillChart
      }
      opt1.series[0].data[0].value = item.qyzb / 100 // liquid1_
      echarts
        .init(document.querySelector(`#liquid1_${item.bh}`))
        .setOption(opt1)
      let opt2 = {
        ...liquidFillChart
      }
      opt2.series[0].data[0].value = item.gtzb / 100

      echarts
        .init(document.querySelector(`#liquid2_${item.bh}`))
        .setOption(opt2)
      let opt3 = {
        ...liquidFillChart
      }
      opt3.series[0].data[0].value = item.nmzb / 100
      echarts
        .init(document.querySelector(`#liquid3_${item.bh}`))
        .setOption(opt3)
    }
  },
  mounted () {
    this.$nextTick(() => {
      // this.getMapMakers() // 获取地图点位数据
      this.getMarketMain() // 市场主体概况
      this.getDoubleView() // 双随机一公开
      this.getFoodMedicinal() // 食品医药情况
      this.getDeviceArea() // 特种设备区县分布和行政执法案件区县分布
      // this.marketPanelSelect([this.defaultSubMenuId], '市场主体')
      this.queryRandomDetailInfo()
      this.queryMapData() // 区县数据查询
    })
  },
  beforeDestroy () {
    window._m.clear()
  }
}
</script>

<style  lang="scss" scoped>
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
  color: #66D898;
  text-decoration:#66D898 .01rem solid ;
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
  margin-top: -1.26rem;
  margin-left: -.23rem;
  .marker {
    position: relative;
    z-index: 1;
    .top {
      display: flex;
      align-items: center;
      position: absolute;
      left:-.02rem;
      top: -.04rem;
      .name {
        width: 0.44rem;
        height: 0.44rem;
        cursor: pointer;
        background: #48aaf4;
        border-radius: 50%;
        font-size: 0.18rem;
        font-family: Source Han Sans CN;
        text-align: center;
        line-height: 0.44rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        border: 0.03rem #96e4fc solid;
        position: relative;
        z-index: 1;
        &.active {
          background: #ef7c30;
        }
      }
      .number {
        background: url("../../../assets/city-management/market-supervision/img/marker-title-bg.png");
        // min-width: 1.2rem;
        height: 0.37rem;
        background-size: 100% 100%;
        padding-left: 0.25rem;
        position: relative;
        // left: -0.2rem;
        // z-index: 0;
        margin-left: -.2rem;
        font-size: 0.28rem;
        padding: 0.05rem 0.6rem 0.05rem 0.3rem;
        // padding-left: .2rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        &::after{
          content: '户';
          font-size: 0.16rem;
          margin-left: 0.02rem;
          font-family: Source Han Sans CN;
          display: inline-block;
         // position: absolute;
          font-weight: 400;
          color: rgba(223, 226, 251, 1);
          position: absolute;
          top: .12rem;
          right: .45rem;
        }
        span {
          font-size: 0.16rem;
          margin-left: 0.02rem;
          font-family: Source Han Sans CN;
          display: inline-block;
         // position: absolute;
          font-weight: 400;
          color: rgba(223, 226, 251, 1);
        }
      }
    }
    .bottom {
      width: 0.03rem;
      height: 1.27rem;
      background: linear-gradient(
        0deg,
        rgba(150, 228, 252, 1) 0%,
        rgba(150, 228, 252, 1) 82%
      );
      margin-left: 0.235rem;
    }
  }
}
  .marker-detail {
    width: 5rem;
    height: 4.5rem;
    background: url("../../../assets/city-management/market-supervision/img/marker-detail-bg.png");
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    right: -7.2rem;
    top: 0;
    z-index: 7;
    padding: 0.34rem 0.25rem;
    box-sizing: border-box;
    &.active {
      display: block;
    }
    .heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 0.2rem;
      .title {
        font-size: 0.22rem;
        max-width: 2.2rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .dialog-toggle-btn {
        position: static;
        width: 1.5rem;
      }
      .close-icon {
        width: 0.25rem;
        height: 0.25rem;
        position: absolute;
        right: 0.1rem;
        top: 0.375rem;
        background: url("../../../assets/city-management/market-supervision/img/close-icon@2x.png");
        background-size: 100% 100%;
      }
    }
    .bodying {
      .info-item {
        font-size: 0.18rem;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        position: relative;
        padding-left: 0.1rem;
        margin-left: 0.1rem;
        margin-top: 0.1rem;
        .number {
          color: #f8e659;
        }
        &:before {
          width: 0.06rem;
          height: 0.06rem;
          content: "";
          display: block;
          background: rgba(110, 232, 252, 1);
          border-radius: 0.01rem;
          position: absolute;
          left: -0.1rem;
          top: 0.1rem;
        }
        &:nth-child(2n)::before {
          background: rgba(76, 168, 229, 1);
        }
      }
      .second-title {
        font-size: 0.18rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        margin: 0.15rem 0 0 0;
      }
    }
    .chart-group {
      position: relative;
      width: 4rem;
      height: 2.7rem;
      font-size: 0.2rem;
      margin: 0 auto;
      color: #ffffff;

      .liquid-fill-bg {
        width: 1.62rem;
        height: 1.21rem;
        position: absolute;
        bottom: 0.1rem;
        left: 1.3rem;
      }

      .liquid-fill-chart-box {
        position: absolute;
        width: 1.3rem;
        height: 1.3rem;
        .desc {
          margin-left: -0.2rem;

          p {
            text-align: center;
            margin-top: 0.05rem;

            &:nth-child(1) {
              font-size: 0.17rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
            }

            &:nth-child(2) {
              font-size: 0.16rem;
              font-family: Source Han Sans CN;
              font-weight: bold;
              font-style: italic;
              color: rgba(237, 214, 174, 1);
            }
          }
        }

        .liquid-fill-chart {
          width: 0.9rem;
          height: 0.9rem;
          background: url("../../../assets/city-management/market-supervision/market-subject/chart_bg.png");
          background-size: 100% 100%;
        }

        .liquid_fill {
          width: 1.3rem;
          height: 1.3rem;
          position: absolute;
          top: -0.2rem;
          left: -0.2rem;
        }

        &:nth-child(1) {
          top: 0.79rem;
          left: 0.3rem;
        }

        &:nth-child(2) {
          top: 0.1rem;
          left: 1.6rem;
        }

        &:nth-child(3) {
          top: 0.79rem;
          left: 2.9rem;
        }
      }

      // .liquid-fill-chart{
      //   width: .9rem;
      //   height:.9rem;
      //   background: url('../../../assets/city-management/market-supervision/market-subject/chart_bg.png');
      //   background-size: 100% 100%;
      //   #liquidFill1{
      //     width: 100%;
      //     height: 100%;
      //   }
      // }
    }
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
    height: 5rem;
    overflow: auto;
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
        word-break: break-all;
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
.dialog-toggle-btn {
  width: 1.3rem;
  height: 0.3rem;
  background: rgba(11, 46, 109, 0.58);
  border: 0.01rem solid #458fef;
  border-radius: 0.15rem;
  text-align: center;
  position: absolute;
  right: 0.52rem;
  top: 0.5rem;
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
.shbzxx_desc {
  position: absolute;
  top: 0.9rem;
  left: 0.7rem;
  p:nth-child(1) {
    font-size: 0.26rem;
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
    font-size: 0.2rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    font-style: italic;
    color: rgba(223, 226, 251, 1);
    span {
      font-size: 0.14rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-style: italic;
      color: rgba(223, 226, 251, 0.72);
    }
  }
}
.market-supervision-container {
  background: #000;
  .g-menu-box {
    position: absolute;
    left: 11rem;
    top: 9rem;
    z-index: 101;
  }
  .g-study-box {
    position: absolute;
    right: 9.2rem;
    top: 0.77rem;
    .g-stydy-title {
      padding: 0.09rem 0.12rem 0.07rem 0.16rem;
      background: rgba(0, 0, 0, 1);
      border: 0.01rem solid rgba(91, 191, 255, 0.75);
      box-shadow: 0rem 0.06rem 0.06rem 0rem rgba(116, 187, 232, 0.17);
      opacity: 0.5;
      font-size: 0.2rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      text-align: center;
      color: rgba(152, 229, 250, 1);
    }
    p {
      padding-right: 0.18rem;
      font-size: 0.36rem;
      text-align: right;
      line-height: 0.47rem;
      height: 0.47rem;
      font-family: DIN Condensed;
      font-weight: bold;
      font-style: italic;
      color: rgba(255, 255, 255, 1);
    }
  }
  .g-maker-text {
    padding-left: 0.35rem;
    box-sizing: border-box;
    position: absolute;
    left: 23.68rem;
    top: 2.5rem;
    width: 2.72rem;
    height: 2.85rem;
    background: url("../../../assets/city-management/common-service/education-resource/small-kuang.png")
      center no-repeat;
    background-size: 100%;
    h3 {
      margin: 0.3rem 0 0.18rem 0;
      font-size: 0.21rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }
    .g-text-item {
      margin-bottom: 0.22rem;
      font-size: 0.18rem;
      height: 0.18rem;
      line-height: 0.18rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(223, 226, 251, 1);
      span {
        font-size: 0.22rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        font-style: italic;
        color: rgba(249, 230, 89, 1);
      }
      label {
        float: left;
        line-height: 0.25rem;
      }
      .g-address {
        width: 1.95rem;
        line-height: 0.25rem;
        float: left;
      }
    }
  }
  .g-maker-text01 {
    width: 3.19rem;
    height: 3.03rem;
    left: 13.65rem;
    top: 5.52rem;
    padding-left: 0.2rem;
    background: url("../../../assets/city-management/common-service/education-resource/small-kuang2.png")
      center no-repeat;
    background-size: 100%;
  }
  // .g-marker-right {
  //   position: absolute;
  //   top: 1.12rem;
  //   right: 10.41rem;
  //   width: 2.59rem;
  //   z-index: 100;
  //   font-size: 0;
  //   .g-marker-item-box {
  //     position: relative;
  //     .g-marker-item-bg {
  //       position: relative;
  //       width: 2.32rem;
  //       height: 0.64rem;
  //       background: url('../../../assets/city-management/market-supervision/market-supervision/menu-right-bg.png') no-repeat;
  //       background-size: 100%;
  //       .g-marker-item-text {
  //         position: absolute;
  //         width: 1.925rem;
  //         font-size: 0.18rem;
  //         font-weight: 500;
  //         font-style: italic;
  //         color: rgba(255,255,255,1);
  //         line-height: 0.44rem;
  //         text-align: center;
  //         margin-left: 0.09rem;
  //       }
  //       .g-marker-line-top {
  //         position: absolute;
  //         top: -0.02rem;
  //         right: 0.09rem;
  //         width: 0.02rem;
  //         height: calc(50% - 0.03rem);
  //         background-color: #FFF;
  //         z-index: -1;
  //       }
  //       .g-marker-line-bottom {
  //         position: absolute;
  //         bottom: 0.02rem;
  //         right: 0.09rem;
  //         width: 0.02rem;
  //         height: 50%;
  //         background-color: #FFF;
  //       }
  //     }
  //     .g-marker-item-bg-selected {
  //       width: 2.59rem;
  //       height: 0.78rem;
  //       background: url('../../../assets/city-management/market-supervision/market-supervision/menu-bg-selected.png');
  //       background-size: 100%;
  //       margin-left: 0.02rem;
  //       .g-marker-item-text {
  //         font-size: 0.2rem;
  //         height: 0.75rem;
  //         line-height: 0.75rem;
  //         .marker-arrow {
  //           display: inline-block;
  //           vertical-align: middle;
  //           width: 0.16rem;
  //           height: 0.22rem;
  //           background: url("../../../assets/city-management/market-supervision/market-supervision/menu-arrow.png");
  //           background-size: 100%;
  //         }
  //       }
  //       .g-marker-line-top {
  //         right: 0.38rem;
  //       }
  //       .g-marker-line-bottom {
  //         right: 0.38rem;
  //       }
  //     }
  //   }
  // }
  .header-bg {
    position: absolute;
    width: 20.4rem;
    height: 1.8rem;
    line-height: 1.2rem;
    font-family: simhei;
    text-align: center;
    color: #ffffff;
    font-size: 0.45rem;
    background: url(/static/img/head-bg.ef81122.png) no-repeat;
    background-size: 100% 100%;
    left: 11.4rem;
    z-index: 99;
  }
  .g-title {
    position: absolute;
    top: 0.54rem;
    left: 0.62rem;
    font-weight: 500;
    line-height: 0.24rem;
    height: 0.24rem;
    color: rgba(255, 255, 255, 1);
    font-size: 0.24rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .g-title::after {
    position: absolute;
    left: -0.16rem;
    top: 0.29rem;
    content: "";
    background: url("../../../assets/city-management/market-supervision/market-supervision/title.png")
      no-repeat;
    background-size: 0.87rem 0.18rem;
    width: 0.87rem;
    height: 0.18rem;
  }
  .g-title2 {
    position: absolute;
    top: 0.44rem;
    left: 0.44rem;
    z-index: 9;
    font-size: 0.24rem;
    color: #ffffff;
    padding: 0.15rem 0.15rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: url("../../../assets/common/panle-title.png") no-repeat;
    background-position-y: 100%;
  }
  .g-small-title {
    position: relative;
    padding-left: 0.3rem;
    margin-left: 0.27rem;
    height: 0.44rem;
    line-height: 0.44rem;
    font-size: 0.2rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    .g-small-tip {
      width: 0.47rem;
      height: 0.48rem;
      position: absolute;
      left: -0.1rem;
      top: 0;
      box-sizing: border-box;
      background: url("../../../assets/city-management/market-supervision/market-supervision/level2-title@2x.png")
        no-repeat;
      background-size: 100% 100%;
    }
  }
  .g-num-box {
    width: 1.51rem;
    .text-box {
      height: 0.4rem;
      line-height: 0.4rem;
      overflow: hidden;
    }
    p {
      width: 100%;
      line-height: 0.2rem;
      font-size: 0.19rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      font-style: italic;
      color: rgba(224, 227, 251, 1);
      margin: 0;
      -webkit-line-clamp: 2;
      overflow: visible;
      display: inline-block;
      vertical-align: middle;
      height: auto;
    }
    .g-num-data {
      width: 1.45rem;
      height: 0.84rem;
      margin-top: -0.05rem;
      font-size: 0.23rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      font-style: italic;
      color: rgba(255, 255, 255, 1);
      background: url("../../../assets/city-management/common-service/social-security/numbox.png")
        center no-repeat;
      background-size: 100%;
      span {
        margin-right: 0.06rem;
        line-height: 0.84rem;
        font-size: 0.36rem;
        font-family: Impact;
        font-weight: bold;
        font-style: italic;
        color: rgba(248, 230, 89, 1);
      }
    }
  }
  .main-left-top {
    position: absolute;
    left: 0.17rem;
    top: 0.27rem;
    z-index: 100;
    width: 10.49rem;
    height: 7.1rem;
    background: url("../../../assets/city-management/market-supervision/market-supervision/kuang-left-top@2x.png")
      center no-repeat;
    background-size: 100%;
    .lt-top-box {
      position: absolute;
      left: 0.4rem;
      top: 1.06rem;
      width: 9.9rem;
      height: 2.52rem;
      overflow: hidden;
      .lt-box-item {
        width: 4.74rem;
        height: 100%;
        float: left;
        .market-overview {
          height: 2.1rem;
          margin-left: 0.25rem;
          background: url("../../../assets/city-management/market-supervision/market-supervision/market-bg1.png")
            no-repeat;
          background-size: 100% 100%;
          overflow: hidden;
          padding-top: 0.01rem;
          .g-fourt-item {
            overflow: hidden;
            display: block;
            padding: 0.15rem 0.2rem 0.2rem 0.4rem;
            span {
              color: #f8e659;
            }
            li {
              display: block;
              list-style: none;
              //height: 0.18rem;
              // line-height: 1.4;
              line-height: 1.1;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
              font-size: 0.18rem;
              white-space: nowrap;
              margin-top: 0.12rem;
              overflow: hidden;
              position: relative;
              padding-left: 0.14rem;
              margin-left: -0.14rem;
              &:before {
                content: "";
                display: inline-block;
                width: 0.06rem;
                height: 0.06rem;
                vertical-align: middle;
                background: rgba(110, 232, 252, 1);
                border-radius: 0.01rem;
                position: absolute;
                z-index: 1000;
                left: 0;
                top: 0.06rem;
              }
              &:nth-child(3n):before {
                background: rgba(48, 127, 243, 1);
              }
              &:nth-child(3n + 1):before {
                background: rgba(110, 232, 252, 1);
              }
              &:nth-child(3n + 2):before {
                background: rgba(76, 168, 229, 1);
              }
              &:nth-child(1) {
                margin-top: 0;
              }
            }
          }
        }
        .g-four-top {
          position: absolute;
          width: 5rem;
          height: 2.62rem;
          top: 0.07rem;
          right: 0;
          .right-panle-charts-01 {
            position: absolute;
            width: 100%;
            height: 2.62rem;
          }
        }
      }
    }
    .title-02 {
      top: 3.96rem;
    }
    .lt-bot-box {
      position: absolute;
      left: 0.4rem;
      top: 3.76rem;
      width: 9.9rem;
      height: 2.82rem;
      overflow: hidden;
      .lt-bot-items {
        width: 100%;
        height: 100%;
        float: left;
        .top-echarts-01 {
          width: 9.4rem;
          height: 2.2rem;
          position: absolute;
          left: 0.29rem;
          top: 0.5rem;
          z-index: 2;
        }
        .bottom-chart {
          position: absolute;
          left: 0.87rem;
          top: 1.29rem;
          width: 8.33rem;
          height: 0.87rem;
        }
      }
    }
  }
  .main-left-bottom {
    position: absolute;
    left: 0.17rem;
    bottom: 0.04rem;
    z-index: 9;
    width: 10.48rem;
    height: 3.64rem;
    background: url("../../../assets/city-management/market-supervision/market-supervision/kuang-left-bottom@2x.png")
      center no-repeat;
    background-size: 100%;
    .lt-top-box {
      position: absolute;
      left: 0.4rem;
      top: 1.06rem;
      width: 9.9rem;
      overflow: hidden;
      .lt-box-item {
        width: 4.74rem;
        float: left;
        .market-overview {
          height: 2.1rem;
          // margin-left: 0.25rem;
          .g-fourt-item {
            overflow: hidden;
            display: block;
            padding: 0.22rem 0.22rem 0.2rem 0.41rem;
            li {
              display: block;
              list-style: none;
              height: 0.2rem;
              line-height: 0.2rem;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
              font-size: 0.2rem;
              margin-top: 0.28rem;
              &:before {
                content: "";
                display: inline-block;
                width: 0.27rem;
                height: 0.32rem;
                vertical-align: middle;
                background: url("../../../assets/city-management/market-supervision/market-supervision/intelligent-obj@2x.png");
                background-size: 100% 100%;
                position: relative;
                left: -0.08rem;
                top: 0;
              }
              &:nth-child(2):before {
                background: url("../../../assets/city-management/market-supervision/market-supervision/intelligent-person.png");
                background-size: 100% 100%;
              }
              &:nth-child(3):before {
                background: url("../../../assets/city-management/market-supervision/market-supervision/intelligent-chart.png");
                background-size: 100% 100%;
              }
              &:nth-child(4):before {
                background: url("../../../assets/city-management/market-supervision/market-supervision/intelligent-safe.png");
                background-size: 100% 100%;
              }
              &:nth-child(1) {
                margin-top: 0;
              }
              .g-fourt-times {
                display: inline-block;
                p {
                  display: inline-block;
                  height: 0.22rem;
                  font-size: 0.24rem;
                  font-family: Impact;
                  font-weight: bold;
                  font-style: italic;
                  color: rgba(252, 230, 47, 1);
                }
              }
            }
          }
        }
        .g-four-top {
          position: absolute;
          width: 5rem;
          height: 2.1rem;
          top: 0.07rem;
          right: 0;
          .g-pie-item {
            position: absolute;
            width: 5rem;
            height: 2.1rem;
            left: -0.4rem;
            top: 0.1rem;
          }
        }
      }
    }
  }
  .main-right {
    position: absolute;
    right: 0.19rem;
    top: 0.3rem;
    z-index: 100;
    width: 10.48rem;
    height: 10.48rem;
    background: url("../../../assets/city-management/market-supervision/market-supervision/kuang-right.png")
      center no-repeat;
    background-size: 100%;
    .main-right-top,
    .main-right-middle,
    .main-right-bottom {
      position: absolute;
      width: 100%;
      .rt-main-box {
        width: 10.46rem;
        height: 2.64rem;
        position: absolute;
        left: 0.36rem;
        top: 0.9rem;
        .rt-item-l,
        .rt-item-r {
          flex: 1;
          padding-top: 0.15rem;
          box-sizing: border-box;
          height: 100%;
          width: 55%;
          float: left;
          .g-small-title {
            width: 100%;
          }
          &:last-child {
            width: 55%;
          }
          .rt-left-nav {
            margin-top: 0.1rem;
            margin-left: 0.3rem;
            font-size: 0.17rem;
            height: 0.25rem;
            line-height: 0.25rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            span {
              color: #fbdf53;
              font-family: Impact;
              font-size: 0.19rem;
              line-height: 0.25rem;
            }
          }
          .rt-num-text {
            width: 1.81rem;
            height: 0.6rem;
            font-size: 0.17rem;
            line-height: 0.3rem;
            color: rgba(223, 226, 251, 1);
            margin-left: 0.3rem;
          }
          .rt-num-box {
            padding: 0.15rem 0 0 0.3rem;
            display: flex;
            .num-box {
              width: 0.4rem;
              height: 0.5rem;
              border: 0.02rem solid rgba(72, 170, 244, 1);
              border-radius: 0.04rem;
              margin-left: 0.03rem;
              padding: 0.03rem 0.025rem;
              box-sizing: border-box;
              .num-inner-box {
                text-align: center;
                width: 100%;
                height: 0.4rem;
                line-height: 0.4rem;
                background: rgba(32, 99, 224, 0.7);
                line-height: 0.4rem;
                border-radius: 0.04rem;
                text-align: center;
                font-size: 0.4rem;
                font-family: digital;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
                text-shadow: 0.02rem 0.02rem 0rem rgba(0, 0, 0, 0.5);
              }
            }
            .num-box-unit {
              margin-top: 0.14rem;
              width: 0.28rem;
              height: 0.28rem;
              border: 0.02rem solid rgba(72, 170, 244, 1);
              border-radius: 0.02rem;
              margin-left: 0.03rem;
              padding: 0.03rem 0.025rem;
              box-sizing: border-box;
              .num-inner-box {
                text-align: center;
                width: 100%;
                height: 0.2rem;
                line-height: 0.2rem;
                background: rgba(32, 99, 224, 0.7);
                border-radius: 0.04rem;
                font-size: 0.14rem;
                font-family: digital display tfb;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
                text-shadow: 0.02rem 0.02rem 0rem rgba(0, 0, 0, 0.5);
              }
            }
          }
          .rt-left-highchart {
            width: 25%;
            height: 80%;
            position: absolute;
            .rt-highchart-box {
              width: 2.8rem;
              height: 2.5rem;
              position: absolute;
              left: 1.3rem;
              top: -0.15rem;
            }
          }
          .rt-right-nav {
            position: absolute;
            top: 0.5rem;
            height: 80%;
            width: 40%;
            right: 0.1rem;
            .g-pie-item {
              position: absolute;
              width: 4rem;
              height: 2.1rem;
            }
          }
          .rt-right-echart {
            width: 100%;
            height: 2.8rem;
          }
        }
        .rt-item-r {
          width: 45% !important;
        }
        .rt-item-c {
          position: relative;
          flex: 1;
          .rt-item-bar-box {
            display: flex;
            height: 100%;
            box-sizing: border-box;
            width: 1.17rem;
            margin: 0 auto !important;
            .rt-item-bar {
              flex: 1;
              position: relative;
              display: flex;
              flex-direction: column;
              height: 2rem;
              width: 0.31rem;
              margin-left: 0.09rem;
              margin-top: 0.3rem;
              font-size: 0;
              .rt-item-bar-blank {
                flex: 1;
              }
              .rt-item-bar-real {
                height: 80%;
                vertical-align: bottom;
                background-size: 100% 100%;
              }
              .rt-item-line {
                position: absolute;
                top: 25%;
                left: 0.15rem;
                width: 0.3rem;
                height: 0.01rem;
                background-color: rebeccapurple;
              }
              .rt-item-text-box {
                position: absolute;
                top: -1rem;
                left: -1rem;
                width: 1rem;
                .bar-num {
                  font-size: 0.18rem;
                  font-weight: bold;
                  font-style: italic;
                  color: rgba(249, 230, 89, 1);
                }
                .bar-text {
                  font-size: 0.16rem;
                  font-weight: 400;
                  font-style: italic;
                  color: rgba(255, 255, 255, 1);
                }
              }
              &:nth-child(1) {
                .rt-item-bar-real {
                  height: 80%;
                  background: url("../../../assets/city-management/market-supervision/market-supervision/bar-deep-blue.png")
                    no-repeat center;
                  background-size: 100% 100%;
                }
                .rt-item-line {
                  position: absolute;
                  top: 50%;
                  left: -1rem;
                  width: 1.14rem;
                  height: 0.2rem;
                  background: url("../../../assets/city-management/market-supervision/market-supervision/line-deep-blue.png")
                    no-repeat center;
                  background-size: 100% 100%;
                }
                .rt-item-text-box {
                  top: 0.5rem;
                }
              }
              &:nth-child(2) {
                .rt-item-bar-real {
                  height: 60%;
                  background: url("../../../assets/city-management/market-supervision/market-supervision/bar-yellow.png")
                    no-repeat center;
                  background-size: 100% 100%;
                }
                .rt-item-line {
                  position: absolute;
                  top: 0.15rem;
                  left: 0.15rem;
                  width: 0.02rem;
                  height: 60%;
                  background: url("../../../assets/city-management/market-supervision/market-supervision/line-yellow.png")
                    no-repeat center;
                  background-size: 100% 100%;
                }
                .rt-item-text-box {
                  top: -0.4rem;
                  left: -0.54rem;
                  width: 2rem;
                  .bar-text {
                    margin-right: 0.06rem;
                  }
                }
              }
              &:nth-child(3) {
                .rt-item-bar-real {
                  height: 90%;
                  background: url("../../../assets/city-management/market-supervision/market-supervision/bar-blue.png")
                    no-repeat center;
                  background-size: 100% 100%;
                }
                .rt-item-line {
                  position: absolute;
                  top: 50%;
                  left: 0.15rem;
                  width: 1.12rem;
                  height: 0.2rem;
                  background: url("../../../assets/city-management/market-supervision/market-supervision/line-blue.png")
                    no-repeat center;
                  background-size: 100% 100%;
                }
                .rt-item-text-box {
                  top: 0.5rem;
                  left: 0.6rem;
                  width: 1rem;
                  .bar-text {
                    margin-right: 0.06rem;
                  }
                }
              }
            }
          }
          .circle-bottom {
            position: absolute;
            top: 1.7rem;
            left: 1.12rem;
            width: 1.7rem;
            height: 0.43rem;
            background: url("../../../assets/city-management/market-supervision/market-supervision/circle-bottom.png")
              no-repeat center;
            background-size: 100%;
            z-index: 1;
          }
        }
      }
    }
    .main-right-middle {
      .g-title {
        top: 0;
      }
      .rt-main-box {
        top: 0.4rem;
      }
    }
    .main-right-bottom {
      .g-title {
        top: 0.15rem;
      }
      .rt-main-box {
        top: 0.55rem;
        .rt-highchart-box {
        }
      }
    }
  }
  .main-right-top {
    .shbzxx_desc {
      top: 0.8rem;
      left: 0.6rem;
    }
    .rt-main-box {
      display: flex;
      .food-left {
        flex: 0 0 2.2rem !important;
      }
      .food-center {
        flex: 1 !important;
      }
      .food-right {
        flex: 1 !important;
        .rt-right-nav {
          width: 3.2rem !important;
          right: 0.6rem !important;
          .g-pie-item {
          }
        }
      }
    }
  }
  .main-right-middle {
    top: 3.2rem;
    background: none;
    height: 3.3rem;
    left: 0;
    .rt-item-l {
      width: 90%;
    }
    .rt-left-highchart,
    .rt-highchart-box {
      top: 0.25rem !important;
      left: 0.15rem !important;
      width: 9.4rem !important;
      height: 2.7rem !important;
    }
  }
  .main-right-bottom {
    top: 6.7rem;
    background: none;
    height: 3.3rem;
    left: 0;
    .rt-main-box {
      width: 100% !important;
    }
    .rt-main-box-zxt {
      left: 0.3rem !important;
      .rt-item-l {
        width: calc(100% - 0.6rem) !important;
        .rt-left-highchart,
        .rt-highchart-box {
          width: 9rem !important ;
          height: 2.2rem !important;
          left: 0.2rem !important;
        }
      }
    }
    .rt-left-highchart,
    .rt-highchart-box {
      height: 2.6rem;
      top: 0.2rem !important;
      left: -0.15rem !important;
      width: 5.3rem !important;
    }
  }
}
.market-panel-box {
  position: absolute;
  bottom: 0.2rem;
  right: 10.6rem;
  z-index: 9;
}
.g-all-num {
  position: absolute;
  left: 10.74rem;
  top: 1.2rem;
  z-index: 100;
  .g-num-item {
    margin-bottom: 0.13rem;
    .g-all-title {
      padding: 0rem 0.12rem 0.03rem 0.06rem;
      width: 0.45rem;
      color: #ffffff;
      font-size: 0.2rem;
      font-style: italic;
      //box-sizing: border-box;
      font-weight: bold;
      line-height: 1.4;
      transform: perspective(1rem) rotateX(-15deg);
      transform-origin: left;
      background: #d5602c;
    }
    &:nth-child(1),
    &:nth-child(3) {
      .g-all-title {
        width: 1rem;
      }
    }
    &:nth-child(4) {
      .g-all-title {
        width: 1.05rem;
      }
    }
    p {
      height: 0.68rem;
      line-height: 0.68rem;
      font-size: 0.4rem;
      font-family: DIN Condensed;
      font-weight: bold;
      font-style: italic;
      color: rgba(255, 255, 255, 1);
    }
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
    width:1.61rem;
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
  /*.main-left-top,*/
  /*.main-left-bottom,*/
  /*.main-right-top,*/
  /*.main-right-middle,*/
  /*.main-right-bottom{*/
  /*}*/
</style>
