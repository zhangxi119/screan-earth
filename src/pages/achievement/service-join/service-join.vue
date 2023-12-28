<!--
 * @Descripttion:心连心服务资源(乐山市心连心资源信息)
 * @Author: hangzhang
 * @Date: 2020-03-09 14:40:24
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-06-05 11:31:29
 -->
<template>
  <div class="service-join-container">
    <head-component name="乐山市心连心服务数据分析"></head-component>
    <div class="videoShow" v-if="showVideo1">
      <span style="position:absolute;right:0.2rem;top:0;z-index:99;font-size:0.5rem;color:white" @click="showVideo1=false">X</span>
      <video controls  style="height:100%;width:100%" autoplay>
        <source src="http://10.10.190.132/video/lsxlx31107.mp4" type="video/mp4">
        <source src="http://10.10.190.132/video/lsxlx31107.mp4" type="video/ogg">
      </video>
    </div>
    <div class="videoShow2" v-if="showVideo2">
      <span style="position:absolute;right:0.2rem;top:0;z-index:99;font-size:0.5rem;color:white" @click="showVideo2=false">X</span>
      <video controls style="height:100%;width:100%" autoplay>
        <source src="http://10.10.190.132/video/lsxlx51226.mp4" type="video/mp4">
        <source src="http://10.10.190.132/video/lsxlx51226.mp4" type="video/ogg">
      </video>
    </div>
    <!-- <maker-component @clickMaker="clickMaker" v-for="(item, index) in makersDatas" :key="index" :makerData="item">
        <div slot="text" class="g-maker-text">
          <h3>{{makerDetail.xl13001}}诉求情况</h3>
          <div class="maker-num-box">
            <div class="maker-num-item">
              <p>诉求总量</p>
              <p>{{makerDetail.xl13002}}</p>
            </div>
            <div class="maker-num-item">
              <p>诉求回访满意率</p>
              <p>{{makerDetail.xl13006}}%</p>
            </div>
          </div>
          <div class="title"><img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>诉求类型情况</div>
          <div class="g-maker-charts" :id="item.echartId"></div>
        </div>
    </maker-component> -->
    <!-- maker -->
    <maker-component v-show="makerFlag&&!isThree" v-for="(item, index) in makersDatas" :key="index" :makerData="item">
        <div slot="maker">
          <!-- <div class="g-maker-num">666人</div> -->
          <div class="maker-img">
            <img @click="showMarkerDetail(item, index)" src="../../../assets/common/event-line.png" alt="" />
          </div>
        </div>
        <img v-show="item.showTextFlag" slot="img"  src="@/assets/common/event-icon.png" alt="" class="line2" />
        <div @mouseenter="stopBanner()" @mouseleave="startBanner()" slot="text" class="g-maker-text" v-show="item.showTextFlag">
          <h3>{{item.name}}诉求情况</h3>
          <div class="maker-num-box">
            <div class="maker-num-item">
              <p>诉求总量</p>
              <p>{{item.applyMap.total1}} 件</p>
            </div>
            <div class="maker-num-item">
              <p>诉求回访满意率</p>
              <p>{{item.applyMap.percentage1}}%</p>
            </div>
          </div>
          <div class="title"><img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>诉求类型情况</div>
          <div class="g-maker-charts" :id="item.echartId"></div>
        </div>
    </maker-component>
    <!-- maker-end -->
    <div class="g-menu-box">
      <menu-list></menu-list>
    </div>
    <div class="left-top-panle">
      <div class="top-title">诉求总体情况</div>
      <div class="top-bg">
        <div class="appeal-total appeal-common" @click="showAppeal" style="cursor:pointer;">
          <p>诉求总数</p>
          <p>{{appealInfo.applyNum}}件</p>
        </div>
        <div class="appeal-details appeal-common">
           <div class="appeal-item" @click="showOnline" style="cursor:pointer;">
              <p>在线办结件数</p>
              <p>{{appealInfo.onlineFinishNum}}件</p>
           </div>
           <div class="appeal-item">
              <p>在线办结率</p>
              <p>{{appealInfo.onlineFinishRate}}%</p>
           </div>
           <div class="appeal-item">
              <p>抽查回访件数</p>
              <p>{{appealInfo.returnNum}}件</p>
           </div>
           <div class="appeal-item">
              <p>抽查回访满意率</p>
              <p>{{appealInfo.returnRate}}%</p>
           </div>
        </div>
      </div>
      <div class="icon-info">
          <div class="icon-info-item" @click="showTodayPop" style="cursor:pointer;">
             <img class="icon" src="@/assets/achievement/service-join/icon01.png"/>
             <div>
               <p>今日受理</p>
               <div class="icon-no">
                 <span>{{appealInfo.acceptedNum}}</span> 件
               </div>
             </div>
          </div>
          <div class="icon-info-item">
             <img class="icon" src="@/assets/achievement/service-join/icon02.png"/>
             <div>
               <p>今日在线办结</p>
               <div class="icon-no">
                 <span>{{appealInfo.knotNum}}</span> 件
               </div>
             </div>
          </div>
          <div class="icon-info-item">
             <img class="icon" src="@/assets/achievement/service-join/icon03.png"/>
             <div>
               <p>今日转办</p>
               <div class="icon-no">
                 <span>{{appealInfo.transferNum}}</span> 件
               </div>
             </div>
          </div>
      </div>
      <div class="title">
        <img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>
        受理渠道
      </div>
      <div class="title2">
        <img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>
        诉求类型
      </div>
      <div class="charts-div">
        <div  class="charts-01 charts-common charts-lettter">
           <div class="classify-allnum">
              <p>诉求量</p>
              <p>{{appealChannelListNum}}(件)</p>
            </div>
          <div id="charts-01" class="charts-lettter-common"></div>
        </div>
         <div class="charts-02 charts-common charts-lettter" style="width:5.85rem;">
           <div class="classify-allnum" style="left:1.55rem;">
              <p>诉求量</p>
              <p>{{letterTypeListNum}}(件)</p>
           </div>
          <div id="charts-02" class="charts-lettter-common" style="overflow:visible;"></div>
        </div>
      <!-- <div id="charts-04" class="charts-04">

      </div> -->
      <div class="charts-03 charts-common" style="position:absolute;left:1rem;top:3.2rem;">
           <img src="@/assets/achievement/service-join/gold-tower.png"/>
           <div v-for="(item, index) in top5Type" :key="index">
             <div :class="'top-0'+ (index + 1) +' top-common'">{{item.districtNum}}</div>
             <div :class="'top-0'+ (index + 1) +'-n top-common-no'">{{item.applyNum}}</div>
           </div>
        </div>
      </div>
      <div class="title-02">
        <img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>
        热门分类TOP5
      </div>
      <div class="title-03">
        <img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>
        今日热门问题TOP5
      </div>
      <div id="charts-05" class="charts-05"></div>

    </div>
    <div class="right-panle">
      <div class="top-title">诉求成效</div>
      <div class="g-btn-box">
        <div @click="btnClick(1)" :class="!btnFlag ? 'g-btn-item btn-yellow' : 'g-btn-item'">部门</div>
        <div @click="btnClick(2)" :class="!btnFlag ? 'g-btn-item' : 'g-btn-item btn-yellow'">区县</div>
      </div>
      <div class="g-btn-box2">
        <div @click="btnClick2(1)" :class="!btnFlag2 ? 'g-btn-item btn-yellow' : 'g-btn-item'">部门</div>
        <div @click="btnClick2(2)" :class="!btnFlag2 ? 'g-btn-item' : 'g-btn-item btn-yellow'">区县</div>
      </div>
      <div class="g-btn-box3">
        <div @click="btnClick3(1)" :class="!btnFlag3 ? 'g-btn-item btn-yellow' : 'g-btn-item'">部门</div>
        <div @click="btnClick3(2)" :class="!btnFlag3 ? 'g-btn-item' : 'g-btn-item btn-yellow'">区县</div>
      </div>
      <div class="right-echart-box">
        <div class="right-echart-item" v-show="!btnFlag">
          <div class="title"><img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>办理量TOP10</div>
          <div class="right-echart-cont" id="charts-06"></div>
        </div>
        <div class="right-echart-item" v-show="btnFlag">
          <div class="title"><img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>办理量TOP10</div>
          <div class="right-echart-cont" id="charts-06-b"></div>
        </div>
        <div class="right-echart-item" v-show="!btnFlag2">
          <div class="title"><img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>抽查回访满意率TOP10</div>
          <div class="right-echart-cont" id="charts-07"></div>
        </div>
        <div class="right-echart-item" v-show="btnFlag2">
          <div class="title"><img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>抽查回访满意率TOP10</div>
          <div class="right-echart-cont" id="charts-07-b"></div>
        </div>
        <div class="right-echart-item" style="width:10.7rem;" v-show="!btnFlag3">
          <div class="title"><img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>超期办理情况</div>
            <div class="right-echart-cont">
              <div class="right-echart-cont" id="charts-08"></div>
            </div>
          </div>
          <div class="right-echart-item" style="width:10.7rem;" v-show="btnFlag3">
          <div class="title"><img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>超期办理情况</div>
            <div class="right-echart-cont">
              <div class="right-echart-cont" id="charts-08-b"></div>
            </div>
          </div>
        </div>
    </div>
      <!--  视频 -->
      <div class="show-video" v-show="littleshow" @click="panduan"><span>心连心宣传</span></div>
      <div class="g-live-video" v-show="!littleshow" ref="panduanzindex">
        <div class="g-live-title" @click="littleshow=!littleshow"><span>心连心宣传</span></div>
        <div class="g-live-item" id="live-01">
          <img src="../../../assets/achievement/service-join/bofang.png" @click="playvideo1" class="playvideo1">
          <video>
            <source src="http://10.10.190.132/video/lsxlx31107.mp4" type="video/mp4">
          </video>
        </div>
        <div class="g-live-item" id="live-02">
          <img src="../../../assets/achievement/service-join/bofang.png" @click="playvideo2" class="playvideo2">
          <video>
            <source src="http://10.10.190.132/video/lsxlx51226.mp4" type="video/mp4">
          </video>
        </div>
      </div>
      <!-- 诉求总数弹窗 -->
      <div class="appealCount" v-show="showAppealCount">
        <img src="../../../assets/achievement/service-join/closeIcon.png" @click="closeAppealCount" class="closeAppealCount">
        <div class="title-pop">
        <img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>
        诉求总数
        <ul>
          <li style="width: 1.2rem;">
            <p>诉求受理总量</p>
            <p><span>{{appealInfo.applyNum}}</span>件</p>
          </li>
          <li>
            <p>{{appealCountPopNum.year}}年诉求量</p>
            <p><span>{{appealCountPopNum.number_year}}</span>件</p>
          </li>
          <li>
            <p>本月诉求量</p>
            <p><span>{{appealCountPopNum.number_month}}</span>件</p>
          </li>
          <li>
            <p>本周诉求量</p>
            <p><span>{{appealCountPopNum.number_week}}</span>件</p>
          </li>
        </ul>
        <div id="appealCount"></div>
      </div>
      </div>
      <!-- 诉求类型弹窗 -->
      <div class="litigation" v-show="showLitigation">
        <img src="../../../assets/achievement/service-join/closeIcon.png" @click="closelitigation" class="closeleft">
        <div class="title"><img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>诉求类型</div>
        <p class="sec-title"><span class="square"></span>求助类诉求事件：<span class="count">{{litigationNum}}</span>件</p>
        <div id="litigationEcharts"></div>
      </div>
      <!-- 部门超期弹窗 -->
      <div class="bureau" v-if="showBureau">
        <div class="popToChart" v-show="showPopToChart">
          <p>超期已办结：{{chaoqipercent}}</p>
          <p>超期未办结：{{nochaoqipercent}}</p>
        </div>
        <img src="../../../assets/achievement/service-join/closeIcon.png" @click="closebureau" class="closeright">
        <div class="title"><img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>{{bumenchaoqipop.name}}</div>
        <p class="sec-title"><span class="square"></span>{{bumenchaoqipop.name}}超期办理总量:<span class="count">{{bumenchaoqipop.count}}</span>件</p>
        <p class="sec-title2">近12月求助类诉求事件情况</p>
        <div id="bureauEcharts1"></div>
        <div id="bureauEcharts2" @click="showPopTo"></div>
        <div id="bureauEcharts3"></div>
      </div>
      <!-- 部门办理量弹窗 -->
      <div class="departTop" v-show="showDepartTop">
        <img src="../../../assets/achievement/service-join/closeIcon.png" @click="closedepartTop" class="closedepartTop">
        <div class="title"><img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>{{bumenpop.name}}</div>
        <p class="sec-title"><span class="square"></span>{{bumenpop.name}}诉求办理总量:<span class="count">{{bumenpop.count}}</span>件</p>
        <div id="departTop"></div>
      </div>
      <!-- 在线办结数弹窗 -->
      <div class="onlineCount" v-show="showOnlineCount">
        <img src="../../../assets/achievement/service-join/closeIcon.png" @click="closeOnlineCount" class="closeOnlineCount">
        <div class="title-pop">
        <img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>
        在线办结数
        <ul>
          <li>
            <p>在线办结总量</p>
            <p><span>{{appealInfo.onlineFinishNum}}</span>件</p>
          </li>
          <li>
            <p>{{onlinepopcount.year}}年在线办结诉求量</p>
            <p><span>{{onlinepopcount.number_year}}</span>件</p>
          </li>
          <li>
            <p>本月在线办结量</p>
            <p><span>{{onlinepopcount.number_month}}</span>件</p>
          </li>
          <li>
            <p>本周在线办结量</p>
            <p><span>{{onlinepopcount.number_week}}</span>件</p>
          </li>
        </ul>
        <div id="onlineCount"></div>
        </div>
      </div>
      <!-- 今日受理量弹窗 -->
      <div class="todayAppealCount" v-if="showTodayAppealCount">
        <img src="../../../assets/achievement/service-join/closeIcon.png" @click="closetodayAppeal" class="closetodayAppeal">
        <div class="title"><img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>今日受理</div>
        <p class="sec-title"><span class="square"></span>今日诉求受理量：<span class="count">{{appealInfo.acceptedNum}}</span>件</p>
        <div id="todayAppealChart1"></div>
        <div class="today-right">
          <div class="right-bottom-box">
            <div class="right-bottom-inner-box">
              <div class="item-li" v-for="(item,index) in items" :key="index">
                <div class="name">{{item.name}}</div>
                <div class="line">
                  <div class="line-inner" :style="{'width':item.value+'%'}"></div>
                </div>
                <div class="value">{{item.value}}件</div>
              </div>
            </div>
          </div>
        </div>
        <p class="sec-title2"><span class="square"></span>坐席诉求受理量：<span class="count">{{channel}}</span>件</p>
        <ul class="scrollCount">
          <li class="body-item-box" v-for="(item, index) in ranking" :key="index">
            <p>{{item.name}}</p>
            <p>受理量：{{item.value}}</p>
            <div :id="'appealCount'+ index" class="popAppealCount"></div>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>

import echarts from 'echarts'
import API from '@/api/achievement/service-join.js'
// import API2 from '@/api/city-management/common-service.js'
import leshanArea from '../../../../static/CesiumAssets/js/leshanArea.js'
import options from '@/echarts-data/achievement/service-join/left-charts-01.js'
import options02 from '@/echarts-data/achievement/service-join/left-charts-02.js'
// import options03 from '@/echarts-data/achievement/service-join/left-charts-03.js'
import options04 from '@/echarts-data/achievement/service-join/left-charts-04.js'
import options05 from '@/echarts-data/achievement/service-join/right-charts-01.js'
import options06 from '@/echarts-data/achievement/service-join/right-charts-02.js'
import options07 from '@/echarts-data/achievement/service-join/right-charts-03.js'
import options08 from '@/echarts-data/achievement/service-join/bureau-echarts-01.js'
import options09 from '@/echarts-data/achievement/service-join/bureau-echarts-02.js'
import options10 from '@/echarts-data/achievement/service-join/litigation-echarts.js'
import options11 from '@/echarts-data/achievement/service-join/appeal-count.js'
import options12 from '@/echarts-data/achievement/service-join/depart-top-echarts.js'
import options13 from '@/echarts-data/achievement/service-join/online-count-echarts.js'
import options14 from '@/echarts-data/achievement/service-join/today-appeal-count.js'
import options15 from '@/echarts-data/achievement/service-join/after-time-echarts.js'
import pieChart from '@/echarts-data/achievement/service-join/pieEchart.js'
import makerComponent from '@/components/maker-component.vue'
import menuList from '@/components/menu.vue'
import {progress} from '@/echarts-data/achievement/service-join/popPercentColor.js'
import headComponent from '@/components/head-component'
export default {
  components: {makerComponent, menuList, headComponent},
  data () {
    return {
      btnFlag: false,
      btnFlag2: false,
      btnFlag3: false,
      showLitigation: false, // 诉求类型弹窗
      showBureau: false, // 部门超期弹窗 右边
      showAppealCount: false, // 诉求总数弹窗
      showDepartTop: false, // 部门办理量弹窗 右边
      showPopToChart: false,
      showOnlineCount: false, // 在线办结
      showTodayAppealCount: false, // 今日受理弹窗
      showVideo1: false,
      showVideo2: false,
      littleshow: true,
      litigationNum: 0,
      appealChannelListNum: 0,
      letterTypeListNum: 0,
      bumenchaoqimap: [],
      chaoqipercent: 0,
      nochaoqipercent: 0,
      onlinepopcount: {
        year: '2020',
        number_year: '0',
        number_month: '0',
        number_week: '0'
      },
      appealCountPopNum: {
        year: '2020',
        number_year: '0',
        number_month: '0',
        number_week: '0'
      },
      bumenpop: {
        name: '公安局',
        count: 123
      },
      bumenchaoqipop: {
        name: '公安局',
        count: 123
      },
      ranking: [],
      channel: 0,
      items: [{
        name: '123',
        value: 50
      }, {
        name: '234',
        value: 60
      }, {
        name: '345',
        value: 70
      }],
      // makersDatas: [
      //   {
      //     id: 'poor', // html内容id -必传
      //     showTextFlag: false, // 是否显示详细内容 -必传
      //     lon: 103.74777714303536, // 经度 -必传
      //     lat: 29.59764277605045, // 纬度 -必传
      //     echartId: 'service-maker-poor',
      //     areaName: '市中区'
      //   }
      // ],
      swfurl: './static/libs/flowplayer/flowplayer-3.2.18.swf',
      appealInfo: {}, // 诉求总体情况
      top5Type: [], // 热门分类TOP5
      makerDetail: {}, // 区县总体情况
      // 新增地图
      makersDatas: [],
      makerFlag: true,
      makerFlag2: false,
      timer: null
    }
  },
  mounted () {
    this.getMapData()
    this.getAppealInfo() // 诉求总体情况
    this.getAppealSituation() // 诉求办理情况
    // this.getAppealTrend() // 诉求趋势
    this.getHotTop5() // 热点问题TOP5
    this.getWorkAppeal()
    this.getWorkAppeal2()
    this.getWorkAppeal3()
    // this.getLiveVideo() // 视频监控
    // echarts.init(document.getElementById('bureauEcharts1')).setOption(options08())
    // echarts.init(document.getElementById('bureauEcharts2')).setOption(options09())
    // echarts.init(document.getElementById('bureauEcharts3')).setOption(options10())
    // echarts.init(document.getElementById('bureauEcharts3')).setOption(options15())
    // echarts.init(document.getElementById('appealCount')).setOption(options11())
    // echarts.init(document.getElementById('departTop')).setOption(options12())
    // echarts.init(document.getElementById('onlineCount')).setOption(options13())
    // echarts.init(document.getElementById('todayAppealChart1')).setOption(options14())
    // echarts.init(document.getElementById('appealCount1')).setOption(progress(100, 80))
    // 区县办理量top10
  },
  computed: {
    isThree () {
      return this.$store.getters.GET_IS_THREE
    }
  },
  methods: {
    // 区县地图总体情况-开始
    showMarkerDetail (item, index) {
      this.makersDatas.forEach((ite, i) => {
        if (index !== i) {
          ite.showTextFlag = false
          ite.zIndex = 1
        }
      })
      item.zIndex = 4
      item.showTextFlag = !item.showTextFlag
    },
    playvideo1 () {
      this.showVideo1 = true
      this.showVideo2 = false
    },
    playvideo2 () {
      this.showVideo2 = true
      this.showVideo1 = false
    },
    getMapData () {
      // 区县总体情况
      API.RESOURCE_AREADETAIL(this, {countyName: ''}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        let data = res.data
        data.forEach((item, index) => {
          if (leshanArea[item.name]) {
            item.lon = +leshanArea[item.name].lon
            item.lat = +leshanArea[item.name].lat
            if (index === 0) {
              item.zIndex = 3
              item.showTextFlag = true
            } else {
              item.showTextFlag = false
              item.zIndex = 1
            }
            item.id = 'service' + index
            item.echartId = 'ser-echart' + index
            this.makersDatas.push(item)
          }
        })
        this.$nextTick(() => {
          this.makersDatas.forEach(item => {
            echarts.init(document.getElementById(item.echartId)).setOption(pieChart(item.totalList))
          })
        })
        console.log(this.makersDatas)
        window._m.addMakers(this.makersDatas, (type) => {
          if (type === 1) { // 三维
            this.makerFlag = true
            this.makerFlag2 = true
          } else { // 二维
            this.makerFlag = true
            this.makerFlag2 = false
          }
        })
        // 区域总体信息循环显示
        this.autoBanner()
      }).catch(err => {
        console.log(err)
      })
    },
    autoBanner () {
      // 区域总体信息循环显示
      let i = 0
      this.timer = setInterval(() => {
        ++i
        if (i > this.makersDatas.length - 1) {
          i = 0
        }
        this.makersDatas.forEach((item, index) => {
          if (index !== i) {
            this.makersDatas[index].showTextFlag = false
            this.makersDatas[index].zIndex = 1
          }
        })
        this.makersDatas[i].showTextFlag = true
        this.makersDatas[i].zIndex = 3
      }, 5000)
    },
    stopBanner () {
      clearInterval(this.timer)
    },
    startBanner () {
      this.autoBanner()
    },
    // 区县地图总体情况-结束
    lineClick (param) {
      this.litigationNum = param.data.value
      this.showLitigation = true
      this.showOnlineCount = false
      this.showAppealCount = false
      this.showTodayAppealCount = false
      this.$nextTick(() => {
        this.getAppealTypeTrend(param.data.name) // 诉求类型下钻
      })
    },
    lineClick2 (param) {
      this.showBureau = true
      this.showDepartTop = false
      this.showPopToChart = false
      API.RESOURCE_getDepartmentOverdueHandling(this, {name: param.name}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        let data01 = 0
        let data02 = 0
        this.bumenchaoqimap.forEach(item => {
          if (item.name === param.name) {
            data01 = item.value_done
            data02 = item.value_not
          }
        })
        this.bumenchaoqipop = {
          name: param.name,
          count: param.value
        }
        let dealdata = data01 / (data01 + data02)
        this.chaoqipercent = (Math.floor(dealdata * 100) / 100) * 100 + '%'
        this.nochaoqipercent = (1 - Math.floor(dealdata * 100) / 100).toFixed(2) * 100 + '%'
        console.log(this.chaoqipercent, this.nochaoqipercent)
        echarts.init(document.getElementById('bureauEcharts1')).setOption(options08(res.map.percent), true)
        echarts.init(document.getElementById('bureauEcharts2')).setOption(options09(data01, data02))
        echarts.init(document.getElementById('bureauEcharts3')).setOption(options15(res.map.trend))
        let myChart = echarts.init(document.getElementById('bureauEcharts1'))
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: 0
        })
        let myChart2 = echarts.init(document.getElementById('bureauEcharts2'))
        myChart2.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: 0
        })
      }).catch(err => {
        console.log(err)
      })
    },
    lineClick5 (param) {
      console.log(222)
      this.showBureau = true
      this.showDepartTop = false
      API.RESOURCE_getCountyOverdueHandling(this, {name: param.name}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        let data01 = 0
        let data02 = 0
        this.bumenchaoqimap.forEach(item => {
          if (item.name === param.name) {
            data01 = item.value_done
            data02 = item.value_not
          }
        })
        this.bumenchaoqipop = {
          name: param.name,
          count: param.value
        }
        let dealdata = data01 / (data01 + data02)
        this.chaoqipercent = (Math.floor(dealdata * 100) / 100) * 100 + '%'
        this.nochaoqipercent = (1 - Math.floor(dealdata * 100) / 100).toFixed(2) * 100 + '%'
        console.log(this.chaoqipercent, this.nochaoqipercent)
        echarts.init(document.getElementById('bureauEcharts1')).setOption(options08(res.map.percent), true)
        echarts.init(document.getElementById('bureauEcharts2')).setOption(options09(data01, data02))
        echarts.init(document.getElementById('bureauEcharts3')).setOption(options15(res.map.trend))
        let myChart = echarts.init(document.getElementById('bureauEcharts1'))
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: 0
        })
        let myChart2 = echarts.init(document.getElementById('bureauEcharts2'))
        myChart2.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: 0
        })
      }).catch(err => {
        console.log(err)
      })
    },
    lineClick3 (param) {
      console.log(param)
      this.showDepartTop = true
      this.showBureau = false
      this.bumenpop = {
        name: param.name,
        count: param.value
      }
      console.log(this.bumenpop)
      API.RESOURCE_getDepartmentHandlingTrend(this, {name: param.name}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        echarts.init(document.getElementById('departTop')).setOption(options12(res.map))
      }).catch(err => {
        console.log(err)
      })
    },
    lineClick4 (param) {
      console.log(param)
      this.showDepartTop = true
      this.showBureau = false
      this.bumenpop = {
        name: param.name,
        count: param.value
      }
      console.log(this.bumenpop)
      API.RESOURCE_getCountyHandlingTrend(this, {name: param.name}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        echarts.init(document.getElementById('departTop')).setOption(options12(res.map))
      }).catch(err => {
        console.log(err)
      })
    },
    panduan () {
      this.littleshow = !this.littleshow
      console.log('panduan')
      if (this.showBureau) {
        this.$refs.panduanzindex.style.zIndex = 98
      } else {
        this.$refs.panduanzindex.style.zIndex = 97
      }
    },
    // 点击maker
    clickMaker (data) {
      console.log(data.areaName)
      API.RESOURCE_AREADETAIL(this, {countyName: data.areaName}).then((resA) => {
        let res = resA.data.data
        this.makerDetail = res.applyMap
        echarts.init(document.getElementById(data.echartId)).setOption(pieChart(res.totalList))
      }).catch(err => {
        console.log(err)
      })
    },
    showTodayPop () {
      this.showTodayAppealCount = true
      this.showAppealCount = false
      this.showLitigation = false
      this.showOnlineCount = false
      API.RESOURCE_getAcceptedToday(this, {}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        echarts.init(document.getElementById('todayAppealChart1')).setOption(options14(res.map.channel))
        this.items = res.map.type
        this.ranking = res.map.ranking
        this.channel = res.map.channel[0].value
        let arr = this.ranking
        this.$nextTick(() => {
          for (let i = 0; i < arr.length; i++) {
            echarts.init(document.getElementById('appealCount' + i)).setOption(progress(arr[0].value, arr[i].value))
          }
          echarts.init(document.getElementById('todayAppealChart1')).dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
          })
        })
      }).catch(err => {
        console.log(err)
      })
    },
    showAppeal () {
      this.showAppealCount = true
      this.showLitigation = false
      this.showOnlineCount = false
      this.showTodayAppealCount = false
      API.RESOURCE_getTotalOfAppeals(this, {}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        this.appealCountPopNum = res.map.number
        console.log(this.appealCountPopNum)
        echarts.init(document.getElementById('appealCount')).setOption(options11(res.map.trend))
      }).catch(err => {
        console.log(err)
      })
    },
    showOnline () {
      this.showOnlineCount = true
      this.showAppealCount = false
      this.showLitigation = false
      this.showTodayAppealCount = false
      API.RESOURCE_getNumberOfOnline(this, {}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        this.onlinepopcount = res.map.number
        echarts.init(document.getElementById('onlineCount')).setOption(options13(res.map.trend))
      }).catch(err => {
        console.log(err)
      })
    },
    showPopTo () {
      this.showPopToChart = !this.showPopToChart
    },
    closelitigation () {
      this.showLitigation = false
    },
    closebureau () {
      this.showBureau = false
    },
    closeAppealCount () {
      this.showAppealCount = false
    },
    closedepartTop () {
      this.showDepartTop = false
    },
    closeOnlineCount () {
      this.showOnlineCount = false
    },
    closetodayAppeal () {
      this.showTodayAppealCount = false
    },
    // 切换部门和区县
    btnClick (type) {
      console.log(type, 123)
      if (type === 1) {
        this.btnFlag = false
        this.$nextTick(() => {
          this.getWorkAppeal() // 部门诉求成效
        })
      } else if (type === 2) {
        this.btnFlag = true
        this.$nextTick(() => {
          this.getAreaWorkAppeal() // 区县诉求成效
        })
      }
    },
    btnClick2 (type) {
      if (type === 1) {
        this.btnFlag2 = false
        this.$nextTick(() => {
          this.getWorkAppeal2() // 部门诉求成效
        })
      } else if (type === 2) {
        this.btnFlag2 = true
        this.$nextTick(() => {
          this.getAreaWorkAppeal2() // 区县诉求成效
        })
      }
    },
    btnClick3 (type) {
      console.log(type)
      if (type === 1) {
        this.btnFlag3 = false
        this.$nextTick(() => {
          this.getWorkAppeal3() // 部门诉求成效
        })
      } else if (type === 2) {
        this.btnFlag3 = true
        this.$nextTick(() => {
          this.getAreaWorkAppeal3() // 区县诉求成效
        })
      }
    },
    // 获取监控列表
    // getLiveVideo () {
    //   API.RESOURCE_LIVEVIDEO(this, {}).then((resA) => {
    //     // eslint-disable-next-line no-unused-vars
    //     let res = resA.data.data
    //     let idArr = ['live-01', 'live-02', 'live-03', 'live-04', 'j-video-live']
    //     idArr.forEach(item => {
    //       window.$f(item, this.swfurl, {
    //         clip: {
    //           url: 'http://10.10.190.23:9916/hcvs_camera_4824.flv',
    //           autoPlay: true,
    //           autoBuffering: true
    //         },
    //         plugins: {
    //           controls: null
    //         }
    //       })
    //     })
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // },
    // 诉求总体情况
    getAppealInfo () {
      API.RESOURCE_APPEAL(this, {}).then((resA) => {
        let res = resA.data.data
        this.appealInfo = res.appealOverallList[0]
      }).catch(err => {
        console.log(err)
      })
    },
    // 诉求办理情况
    getAppealSituation () {
      // 受理渠道
      API.RESOURCE_SITUATION(this, {}).then((resA) => {
        let res = resA.data.data
        res.appealChannelList.forEach(item => {
          this.appealChannelListNum += item.appealNum
        })
        echarts.init(document.getElementById('charts-01')).setOption(options(res.appealChannelList))
      }).catch(err => {
        console.log(err)
      })
      // 诉求类型
      API.RESOURCE_SITUATIONTYPE(this, {}).then((resA) => {
        let res = resA.data.data
        res.letterTypeList.forEach(item => {
          this.letterTypeListNum += item.appealNum
        })
        echarts.init(document.getElementById('charts-02')).setOption(options02(res.letterTypeList))
        // 诉求类型
        let myChart2 = echarts.init(document.getElementById('charts-02'))
        myChart2.on('click', this.lineClick)
        this.myChart2 = myChart2
      }).catch(err => {
        console.log(err)
      })
      // 热门分类TOP5
      API.RESOURCE_HOTTOP5TYPE(this, {}).then((resA) => {
        let res = resA.data.data
        this.top5Type = res.map
      }).catch(err => {
        console.log(err)
      })
    },
    // 诉求趋势
    getAppealTrend () {
      // API.RESOURCE_APPEALTREND(this, {}).then((resA) => {
      //   let res = resA.data.data
      //   echarts.init(document.getElementById('charts-04')).setOption(options03(res.backMap))
      // }).catch(err => {
      //   console.log(err)
      // })
    },
    // 热点问题TOP5
    getHotTop5 () {
      API.RESOURCE_HOTTOP5(this, {}).then((resA) => {
        let res = resA.data.data
        echarts.init(document.getElementById('charts-05')).setOption(options04(res.hotIssuesList))
      }).catch(err => {
        console.log(err)
      })
    },
    // 诉求成效(部门)
    getWorkAppeal () {
      // 部门办理量TOP10
      API.RESOURCE_WORKTOP10(this).then((resA) => {
        let res = resA.data.data
        echarts.init(document.getElementById('charts-06')).setOption(options05(res.map))
        // 部门办理量top10
        let myChart4 = echarts.init(document.getElementById('charts-06'))
        myChart4.on('click', this.lineClick3)
      }).catch(err => {
        console.log(err)
      })
    },
    getWorkAppeal2 () {
      // 部门抽查回访满意率TOP10
      API.RESOURCE_PLEASEDTOP10(this).then((resA) => {
        let res = resA.data.data
        echarts.init(document.getElementById('charts-07')).setOption(options06(res.list))
      }).catch(err => {
        console.log(err)
      })
    },
    getWorkAppeal3 () {
      // 部门超时办理情况
      API.RESOURCE_WORKINGSITUATION(this).then((resA) => {
        let res = resA.data.data
        echarts.init(document.getElementById('charts-08')).setOption(options07(res.map))
        this.bumenchaoqimap = res.map
        console.log(res.map)
        // 部门超期
        let myChart3 = echarts.init(document.getElementById('charts-08'))
        myChart3.on('click', this.lineClick2)
      }).catch(err => {
        console.log(err)
      })
    },
    getAreaWorkAppeal3 () {
      // 区县超时办理情况(假接口)
      let that = this
      API.RESOURCE_AREAWORKINGSITUATION(this).then((resA) => {
        let res = resA.data.data
        echarts.init(document.getElementById('charts-08-b')).setOption(options07(res.map))
        let myChart6 = echarts.init(document.getElementById('charts-08-b'))
        myChart6.on('click', that.lineClick5)
      }).catch(err => {
        console.log(err)
      })
    },
    // 诉求成效（区县）
    getAreaWorkAppeal () {
      // 区县办理量TOP10
      let that = this
      API.RESOURCE_AREAWORKTOP10(this).then((resA) => {
        let res = resA.data.data
        echarts.init(document.getElementById('charts-06-b')).setOption(options05(res.map))
        let myChart5 = echarts.init(document.getElementById('charts-06-b'))
        myChart5.on('click', that.lineClick4)
      }).catch(err => {
        console.log(err)
      })
    },
    getAreaWorkAppeal2 () {
      // 区县抽查回访满意率TOP10
      API.RESOURCE_AREAPLEASEDTOP10(this, {}).then((resA) => {
        let res = resA.data.data
        echarts.init(document.getElementById('charts-07-b')).setOption(options06(res.list))
      }).catch(err => {
        console.log(err)
      })
    },
    getAppealTypeTrend (param) {
      // 诉求类型下钻
      console.log(123)
      API.RESOURCE_GETAPPEALTYPETREND(this, {name: param}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        echarts.init(document.getElementById('litigationEcharts')).setOption(options10(res.list))
      }).catch(err => {
        console.log(err)
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.service-join-container {
  position: absolute;
  background: #000000;
  .g-menu-box {
    position: absolute;
    left: 11.8rem;
    top: 9rem;
    z-index: 100;
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
  .videoShow{
    position: absolute;
    left:0;
    right: 0;
    margin: auto;
    top: 0;
    z-index: 999;
    width: 43.2rem;
    height:10.8rem;
    background: black;
  }
  .videoShow2{
    position: absolute;
    left:0;
    right: 0;
    margin: auto;
    top: 0;
    width: 43.2rem;
    height:10.8rem;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: black;
  }
  .maker-img {
    display: block;
    // width: 1.5rem;
    // height: 0.7rem;
    cursor: pointer;
    img {
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
  }
  // .g-maker-text {
  //   margin: -0.2rem 0 0 0.05rem;
  //   padding-left: 0.21rem;
  //   position: absolute;
  //   // left: 23.68rem;
  //   // top: 2.5rem;
  //   width: 2.52rem;
  //   padding-bottom: 0.3rem;
  //   padding-top: 0.2rem;
  //   z-index: 2;
  //   background: url('../../../assets/city-management/common-service/education-resource/small-kuang.png') center no-repeat;
  //   background-size: 100%;
  //   h3 {
  //     margin: 0.30rem 0 0.18rem 0;
  //     font-size:0.21rem;
  //     font-family:Source Han Sans CN;
  //     font-weight:bold;
  //     color:rgba(255,255,255,1);
  //   }
  //   .g-text-item {
  //     margin-bottom: 0.22rem;
  //     font-size:0.18rem;
  //     height: 0.18rem;
  //     line-height: 0.18rem;
  //     font-family:Source Han Sans CN;
  //     font-weight:bold;
  //     color:rgba(223,226,251,1);
  //     span {
  //       font-size:0.22rem;
  //       font-family:Source Han Sans CN;
  //       font-weight:bold;
  //       font-style:italic;
  //       color:rgba(249,230,89,1);
  //     }
  //     label {
  //       float: left;
  //     }
  //     .g-address {
  //       width: 1.95rem;
  //       line-height: 0.25rem;
  //       float: left;
  //     }
  //   }
  // }
  // .g-maker-text01 {
  //   width: 3.19rem;
  //   // height: 3.03rem;
  //   padding-bottom: 0.3rem;
  //   left: 13.65rem;
  //   top: 5.52rem;
  //   padding-left: 0.2rem;
  //   background: url('../../../assets/city-management/common-service/education-resource/small-kuang2.png') center no-repeat;
  //   background-size: 100%;
  // }
  .top-title {
    position: absolute;
    left: 0.58rem;
    top: 0.55rem;
    font-size: 0.24rem;
    color: #FFFFFF;
    &:hover {
      color: #ffed66;
      text-shadow:0 0 0.1rem rgba(228,205,38,0.28);
    }
  }
  .title {
    position: absolute;
    top: 3.5rem;
    left: 0.5rem;
    font-size: 0.20rem;
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 0.50rem;
      height: 0.50rem;
    }
    &:hover {
      color: #ffed66;
      text-shadow:0 0 0.1rem rgba(228,205,38,0.28);
    }
  }
  .title2 {
    position: absolute;
    top: 3.5rem;
    left: 5.6rem;
    font-size: 0.20rem;
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 0.50rem;
      height: 0.50rem;
    }
    &:hover {
      color: #ffed66;
      text-shadow:0 0 0.1rem rgba(228,205,38,0.28);
    }
  }
  .g-maker-text {
    padding: 0 0.2rem 0.2rem 0.35rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 3.84rem;
    min-height: 4.77rem;
    background: url('../../../assets/achievement/service-join/maker-bg.png') center no-repeat;
    background-size: 100% 100%;
    .title {
      left: 0.36rem;
      top: 1.45rem;
    }
    h3 {
      margin: 0.30rem 0 0.18rem 0;
      font-size:0.21rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(255,255,255,1);
    }
    .maker-num-box {
      width: 100%;
      height: 0.7rem;
      overflow: hidden;
      .maker-num-item {
        padding-left: 0.2rem;
          box-sizing: border-box;
        width: 50%;
        height: 100%;
        float: left;
        p {
          line-height: 0.2rem;
          font-size:0.17rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          color:rgba(255,255,255,1);
          &:last-child {
            font-size:0.28rem;
            font-family:Impact;
            font-weight:bold;
            font-style:italic;
            line-height: 0.36rem;
            color:rgba(252,230,47,1);
          }
        }
      }
    }
    .g-maker-charts {
      margin-top: 0.5rem;
      width: 3.84rem;
      height: 2.85rem;
    }
  }
  .left-top-panle {
    position: absolute;
    width: 11.29rem;
    height: 9.99rem;
    top: 0.37rem;
    left: 0.28rem;
    background: url('../../../assets/achievement/service-join/left-panle.png') no-repeat;
    background-size: 100% 100%;
    z-index: 99;
    .top-bg {
      position: absolute;
      top: 1.2rem;
      left: 0.65rem;
      width: 10.12rem;
      height: 1.01rem;
      background: url('../../../assets/achievement/service-join/left-top-bg.png') no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: row;
      // justify-content: space-between;
      align-items: center;
      .appeal-common {
        letter-spacing: 0.01rem;
        padding-left: 0.4rem;
        box-sizing: border-box;
        text-align: center;
        p:first-of-type {
         color: #FFFFFF;
         font-size: 0.17rem;
        }
        p:last-of-type {
          color: #FFE700;
          font-size: 0.25rem;
          font-style: italic;
          font-weight: 600;
        }
      }
      .appeal-details {
        display: flex;
        flex-direction: row;
        .appeal-item {
          text-align: center;
          margin: 0 0.35rem;
        }
      }
    }
    .icon-info {
      position: absolute;
      width: 100%;
      top: 2.4rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .icon-info-item {
        display: flex;
        flex-direction: row;
        margin: 0 0.43rem;
         .icon {
           width: 0.82rem;
           height: 1.11rem;
         }
         div {
           text-align: center;
           p {
              color: #DFE2FD;
              font-style: italic;
              font-size: 0.19rem;
           }
         }
         .icon-no {
           width: 1.45rem;
           height: 0.84rem;
           line-height: 0.84rem;
           background: url('../../../assets/common/num-bg.png') no-repeat;
           background-size: 100% 100%;
           font-size: 0.20rem;
           color: #FFFFFF;
           font-style: italic;
           span {
             color: #FFE600;
             font-size: 0.36rem;
             font-weight: 600;
           }
         }
      }
    }
    .title-02 {
      position: absolute;
      top: 6.5rem;
      left: 0.5rem;
      font-size: 0.20rem;
      color: #FFFFFF;
      display: flex;
      flex-direction: row;
      align-items: center;
      z-index: 10;
      img {
        width: 0.50rem;
        height: 0.50rem;
      }
      &:hover {
        color: #ffed66;
        text-shadow:0 0 0.1rem rgba(228,205,38,0.28);
      }
    }
    .title-03 {
      position: absolute;
      top: 6.5rem;
      left: 5.6rem;
      font-size: 0.20rem;
      color: #FFFFFF;
      display: flex;
      flex-direction: row;
      align-items: center;
      z-index: 10;
      img {
        width: 0.50rem;
        height: 0.50rem;
      }
      &:hover {
        color: #ffed66;
        text-shadow:0 0 0.1rem rgba(228,205,38,0.28);
      }
    }
    .charts-div {
      position: absolute;
      width: 100%;
      top: 3.9rem;
      display: flex;
      flex-direction: row;
      .charts-common {
        width:5.1rem;
        height: 3rem;
        position: relative;
        img {
          position: absolute;
          width: 1.72rem;
          height: 1.66rem;
          left: 0.65rem;
          top: 0.2rem;
        }
        .charts-title {
          position: absolute;
          text-align: center;
          color: #FFFFFF;
          bottom: 0.4rem;
          left: 1rem;
          font-size: 0.18rem;
          background: linear-gradient(to bottom, #FAFCFF, #00ABFB);
          -webkit-background-clip: text;
          color: transparent;
          font-style: italic;
          font-weight: 600;
        }
        .top-common {
          position: absolute;
          width: 1rem;
          font-size: 0.14rem;
          background: linear-gradient(to bottom, #FAFCFF, #00ABFB);
          -webkit-background-clip: text;
          color: transparent;
          font-style: italic;
          font-weight: 600;
        }
        .top-common-no {
          position: absolute;
          color: #FFE600;
          font-size: 0.24rem;
          font-weight: 600;
          font-style: italic;
          width: 0.8rem;
          text-align: right;
        }
        .top-01 {
          left: 2.3rem;
          top: 0.5rem;
          font-size: 0.14rem;
          width: 1.5rem;
          text-align: center;
        }
        .top-01-n {
          left: -0.1rem;
          top: 0.5rem;
        }
        .top-02 {
          top: 1rem;
          left: 2.0rem;
        }
        .top-02-n {
          top: 1.0rem;
          left: 0.15rem;
        }
        .top-03 {
          top: 1.3rem;
          left: 1.8rem;
          text-align: center;
          width: 1.6rem;
        }
        .top-03-n {
          top: 1.35rem;
          left: 0.3rem;
          font-size: 0.20rem;
        }
        .top-04 {
          top: 1.55rem;
          left: 1.7rem;
        }
        .top-04-n {
           top: 1.6rem;
          left: 0.4rem;
           font-size: 0.16rem;
        }
        .top-05 {
          top: 1.75rem;
          left: 1.6rem;
        }
         .top-05-n {
           top: 1.9rem;
           left: 0.5rem;
           font-size: 0.14rem;
        }
      }
      .charts-lettter {
        .charts-lettter-common {
          position: absolute;
          width: 100%;
          height: 100%;
          }
          .classify-allnum{
            position: absolute;
            left: 1.3rem;
            top: 1.15rem;
            font-style: italic;
            width: 1rem;
            p{
              margin-bottom: .05rem;
              font-size: .16rem;
              letter-spacing: 0.01rem;
              font-weight: bold;
              color: #fff;
              font-family:Impact;
              background-image: -webkit-linear-gradient(bottom, #F9FBFF, #57D2FF);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              text-align: center;
            }
          }
      }
    }
    .charts-04 {
      position: absolute;
      height: 2.19rem;
      width: 6.2rem;
      bottom: 0.4rem;
      left: 0.55rem;
    }
    .charts-05 {
      position: absolute;
      height: 2.8rem;
      width: 3.7rem;
      bottom: 0.4rem;
      right: 2rem;
    }
  }
  .right-panle {
    position: absolute;
    width: 11.29rem;
    height: 9.99rem;
    top: 0.37rem;
    left: 31.5rem;
    background: url('../../../assets/achievement/service-join/left-panle.png') no-repeat;
    background-size: 100% 100%;
    z-index: 99;
    .g-btn-box {
      position: absolute;
      left: 3.7rem;
      top: 1.35rem;
      overflow: hidden;
      z-index: 999;
      .g-btn-item {
        box-sizing: border-box;
        width: 0.6rem;
        height: 0.26rem;
        background-size: 100% 100%;
        float: left;
        text-align: center;
        line-height: 0.22rem;
        font-size: 0.16rem;
        font-family:Source Han Sans CN;
        border:1px solid rgba(0,132,255,1);
        border-radius:4px 4px 4px 4px;
        color: #30AAFF;
        background: #001B46;
      }
      .btn-yellow {
        background: #0084FF;
        color: #FFFFFF;
        border-radius:4px 4px 4px 4px;
        line-height: 0.22rem;
      }
    }
    .g-btn-box2 {
      position: absolute;
      left: 9.7rem;
      top: 1.35rem;
      overflow: hidden;
      z-index: 999;
      .g-btn-item {
        box-sizing: border-box;
        width: 0.6rem;
        height: 0.26rem;
        background-size: 100% 100%;
        float: left;
        text-align: center;
        line-height: 0.22rem;
        font-size: 0.16rem;
        font-family:Source Han Sans CN;
        border:1px solid rgba(0,132,255,1);
        border-radius:4px 4px 4px 4px;
        color: #30AAFF;
        background: #001B46;
      }
      .btn-yellow {
        background: #0084FF;
        color: #FFFFFF;
        border-radius:4px 4px 4px 4px;
        line-height: 0.22rem;
      }
    }
    .g-btn-box3 {
      position: absolute;
      left: 9.7rem;
      top: 5.6rem;
      overflow: hidden;
      z-index: 999;
      .g-btn-item {
        box-sizing: border-box;
        width: 0.6rem;
        height: 0.26rem;
        background-size: 100% 100%;
        float: left;
        text-align: center;
        line-height: 0.22rem;
        font-size: 0.16rem;
        font-family:Source Han Sans CN;
        border:1px solid rgba(0,132,255,1);
        border-radius:4px 4px 4px 4px;
        color: #30AAFF;
        background: #001B46;
      }
      .btn-yellow {
        background: #0084FF;
        color: #FFFFFF;
        border-radius:4px 4px 4px 4px;
        line-height: 0.22rem;
      }
    }
    .right-echart-box {
      width: 100%;
      height: calc( 100% - 1.5rem );
      margin-top: 1.2rem;
      padding: 0 0.25rem;
      box-sizing: border-box;
      position: relative;
      // overflow: hidden;
      .right-echart-item {
        width: 50%;
        height: 50%;
        position: relative;
        float: left;
        .title {
          left: 0.45rem;
          top: 0.05rem;
        }
        .right-echart-cont {
          margin: 0 auto;
          margin-top: 0.45rem;
          width: 100%;
          height: 3.71rem;
          position: relative;
        }
        .g-video-box {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0.2rem;
          width: 4.3rem;
          height: 3.3rem;
          box-sizing: border-box;
          background: url('../../../assets/achievement/service-join/video-bg.png') no-repeat;
          background-size: 100% 100%;
          video {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 3.93rem;
            height: 2.25rem;
          }
        }
      }
    }
  }
  .todayAppealCount{
    width: 6.83rem;
    height: 5.35rem;
    position: absolute;
    left: 11.5rem;
    top: 1.8rem;
    background: url('../../../assets/achievement/service-join/todayAppealCount.png') center center;
    background-size: 6.83rem 5.35rem;
    z-index: 998;
    .closetodayAppeal{
      position: absolute;
      right: 0.2rem;
      top: 0.2rem;
      width: 0.3rem;
      height: 0.3rem;
      z-index: 999;
    }
    .title{
      position:absolute;
      top:0.2rem;
      left: 0.2rem;
    }
    .sec-title{
      position: absolute;
      top: 0.6rem;
      left: 0.4rem;
      font-size:0.17rem;
      font-family:Source Han Sans CN;
      font-weight:500;
      color:rgba(255,255,255,1);
      .square{
        width:0.08rem;
        height:0.08rem;
        background:linear-gradient(180deg,rgba(41,243,255,1),rgba(0,83,255,1));
        display: inline-block;
        margin-right:0.1rem;
      }
      .count{
        font-size:0.28rem;
        font-family:Impact;
        font-weight:bold;
        font-style:italic;
        color:rgba(252,230,47,1);
        margin-right: 0.1rem;
      }
    }
    .sec-title2{
      position: absolute;
      top: 3.6rem;
      left: 0.4rem;
      font-size:0.17rem;
      font-family:Source Han Sans CN;
      font-weight:500;
      color:rgba(255,255,255,1);
      .square{
        width:0.08rem;
        height:0.08rem;
        background:linear-gradient(180deg,rgba(41,243,255,1),rgba(0,83,255,1));
        display: inline-block;
        margin-right:0.1rem;
      }
      .count{
        font-size:0.28rem;
        font-family:Impact;
        font-weight:bold;
        font-style:italic;
        color:rgba(252,230,47,1);
        margin-right: 0.1rem;
      }
    }
    #todayAppealChart1{
      position: absolute;
      width: 3rem;
      height: 2.6rem;
      top: 1rem;
      left: 0.2rem;
    }
    .today-right{
      position: absolute;
      width: 3rem;
      height: 2.5rem;
      left: 3.3rem;
      top: 1rem;
      .right-bottom-box {
      position: relative;
      height: 2.5rem;
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
        height: 0.3rem;
        .name {
          width: 1.2rem;
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
        }
        .number-01 {
          width: 0.45rem;
          height: 0.45rem;
          text-align: center;
          line-height: 0.4rem;
          color: #ffffff;
        }
        .number-02 {
          width: 0.45rem;
          height: 0.45rem;
          text-align: center;
          line-height: 0.4rem;
          color: #ffffff;
        }
        .number-03 {
          width: 0.45rem;
          height: 0.45rem;
          text-align: center;
          line-height: 0.4rem;
          color: #ffffff;
        }
        .line {
          width: 2.8rem;
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
          color: #edd6ae;
          font-size: 0.17rem;
          margin-left: 0.1rem;
          width: 1rem;
        }
      }
    }
    }
    .scrollCount{
      width: 6.2rem;
      height: 1.2rem;
      position: absolute;
      top: 4rem;
      left: 0.3rem;
      overflow: scroll;
      li{
        width: 1.37rem;
        height: 0.72rem;
        list-style: none;
        display: inline-block;
        background:rgba(0,132,255,0.15);
        border:0.01rem solid #0081F2;
        border-image:linear-gradient(-13deg, undefined, undefined) 1 1;
        margin-left: 0.1rem;
        margin-top: 0.1rem;
        p:nth-child(1){
          padding-left: 0.3rem;
          background: url('../../../assets/achievement/service-join/kefu.png') 0.1rem 0.05rem no-repeat;
          background-size: 0.14rem 0.17rem;
        }
        p{
          height: 0.17rem;
          line-height: 0.17rem;
          font-size:0.16rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          color:rgba(255,255,255,1);
          padding-top: 0.05rem;
          padding-left: 0.1rem;
        }
        .popAppealCount{
          height: 0.3rem;
          width: 1.18rem;
          margin-left: 0.1rem;
        }
      }
    }
  }
  .litigation{
    width: 6.83rem;
    height: 4.15rem;
    position: absolute;
    left: 11.5rem;
    top: 1.8rem;
    background: url('../../../assets/achievement/service-join/litigation.png') center center;
    background-size: 6.83rem 4.15rem;
    z-index: 998;
    .closeleft{
      position: absolute;
      right: 0.2rem;
      top: 0.2rem;
      width: 0.3rem;
      height: 0.3rem;
      z-index: 999;
    }
    .title{
      position:absolute;
      top:0.2rem;
      left: 0.2rem;
    }
    .sec-title{
      position: absolute;
      top: 0.8rem;
      left: 0.4rem;
      font-size:0.17rem;
      font-family:Source Han Sans CN;
      font-weight:500;
      color:rgba(255,255,255,1);
      .square{
        width:0.08rem;
        height:0.08rem;
        background:linear-gradient(180deg,rgba(41,243,255,1),rgba(0,83,255,1));
        display: inline-block;
        margin-right:0.1rem;
      }
      .count{
        font-size:0.28rem;
        font-family:Impact;
        font-weight:bold;
        font-style:italic;
        color:rgba(252,230,47,1);
        margin-right: 0.1rem;
      }
    }
    #litigationEcharts{
      width: 6.5rem;
      height: 2.6rem;
      position: absolute;
      top: 1.4rem;
      left: 0.2rem;
    }
  }
  .bureau{
    width: 6.93rem;
    height: 6.79rem;
    position: absolute;
    right: 11.5rem;
    top: 1.8rem;
    background: url('../../../assets/achievement/service-join/Bureau.png') center center;
    background-size: 6.93rem 6.79rem;
    z-index: 997;
    .popToChart{
      width: 1.45rem;
      height: 0.6rem;
      position: absolute;
      right: 0.3rem;
      top: 1.5rem;
      font-size:0.15rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(255,255,255,1);
      background: #004181;
      z-index: 999;
      p{
        line-height: 0.3rem;
        text-align: center;
      }
    }
    .closeright{
      position: absolute;
      right: 0.2rem;
      top: 0.2rem;
      width: 0.3rem;
      height: 0.3rem;
      z-index: 999;
    }
    .title{
      position:absolute;
      top:0.2rem;
      left: 0.2rem;
    }
    .sec-title{
      position: absolute;
      top: 0.6rem;
      left: 0.4rem;
      font-size:0.17rem;
      font-family:Source Han Sans CN;
      font-weight:500;
      color:rgba(255,255,255,1);
      .square{
        width:0.08rem;
        height:0.08rem;
        background:linear-gradient(180deg,rgba(41,243,255,1),rgba(0,83,255,1));
        display: inline-block;
        margin-right:0.1rem;
      }
      .count{
        font-size:0.28rem;
        font-family:Impact;
        font-weight:bold;
        font-style:italic;
        color:rgba(252,230,47,1);
        margin-right: 0.1rem;
      }
    }
    .sec-title2{
      position: absolute;
      top: 3.8rem;
      left: 0.4rem;
      font-size:0.17rem;
      font-family:Source Han Sans CN;
      font-weight:500;
      color:rgba(255,255,255,1);
      .square{
        width:0.08rem;
        height:0.08rem;
        background:linear-gradient(180deg,rgba(41,243,255,1),rgba(0,83,255,1));
        display: inline-block;
        margin-right:0.1rem;
      }
      .count{
        font-size:0.28rem;
        font-family:Impact;
        font-weight:bold;
        font-style:italic;
        color:rgba(252,230,47,1);
        margin-right: 0.1rem;
      }
    }
    #bureauEcharts1{
      width: 4rem;
      height: 2.9rem;
      position: absolute;
      top: 1.1rem;
      left: 0.2rem;
    }
    #bureauEcharts2{
      width: 3.3rem;
      height: 2.9rem;
      position: absolute;
      top: 1.1rem;
      left: 4.2rem;
    }
    #bureauEcharts3{
      width: 6.5rem;
      height: 2.6rem;
      position: absolute;
      top: 4rem;
      left: 0.2rem;
    }
  }
  .appealCount{
    width: 6.83rem;
    height: 4.61rem;
    position: absolute;
    top: 1.6rem;
    left: 11.5rem;
    background: url('../../../assets/achievement/service-join/pop-appeal.png') no-repeat;
    background-size: 6.83rem 4.61rem;
    z-index: 999;
    .closeAppealCount{
      position: absolute;
      right: 0.2rem;
      top: 0.2rem;
      width: 0.28rem;
      height: 0.28rem;
    }
    .title-pop{
      position: absolute;
      top: 0.2rem;
      left: 0.2rem;
      font-size: 0.20rem;
      color: #FFFFFF;
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        width: 0.50rem;
        height: 0.50rem;
      }
    }
    ul{
      width: 6.6rem;
      height: 0.7rem;
      position: absolute;
      display: flex;
      justify-content: space-around;
      top: 0.7rem;
      font-size:0.17rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(255,255,255,1);
      li{
        list-style: none;
        width: 1.1rem;
        text-align: center;
        span{
          font-size:0.28rem;
          font-family:Impact;
          font-weight:bold;
          font-style:italic;
          color:rgba(252,230,47,1);
          padding-right: 0.04rem;
        }
      }
    }
    #appealCount{
      width: 6.5rem;
      height: 2.7rem;
      position: absolute;
      top: 1.5rem;
    }
  }
  .departTop{
    width: 6.83rem;
    height: 4.15rem;
    position: absolute;
    right: 11.5rem;
    top: 1.8rem;
    background: url('../../../assets/achievement/service-join/litigation.png') center center;
    background-size: 6.83rem 4.15rem;
    z-index: 998;
    .closedepartTop{
      position: absolute;
      right: 0.2rem;
      top: 0.2rem;
      width: 0.3rem;
      height: 0.3rem;
      z-index: 999;
    }
    .title{
      position:absolute;
      top:0.2rem;
      left: 0.2rem;
    }
    .sec-title{
      position: absolute;
      top: 0.8rem;
      left: 0.4rem;
      font-size:0.17rem;
      font-family:Source Han Sans CN;
      font-weight:500;
      color:rgba(255,255,255,1);
      .square{
        width:0.08rem;
        height:0.08rem;
        background:linear-gradient(180deg,rgba(41,243,255,1),rgba(0,83,255,1));
        display: inline-block;
        margin-right:0.1rem;
      }
      .count{
        font-size:0.28rem;
        font-family:Impact;
        font-weight:bold;
        font-style:italic;
        color:rgba(252,230,47,1);
        margin-right: 0.1rem;
      }
    }
      #departTop{
      width: 6.5rem;
      height: 2.6rem;
      position: absolute;
      top: 1.4rem;
      left: 0.2rem;
    }
  }
  .onlineCount{
    width: 6.83rem;
    height: 4.61rem;
    position: absolute;
    top: 1.6rem;
    left: 11.5rem;
    background: url('../../../assets/achievement/service-join/pop-appeal.png') no-repeat;
    background-size: 6.83rem 4.61rem;
    z-index: 999;
    .closeOnlineCount{
      position: absolute;
      right: 0.2rem;
      top: 0.2rem;
      width: 0.28rem;
      height: 0.28rem;
    }
    .title-pop{
      position: absolute;
      top: 0.2rem;
      left: 0.2rem;
      font-size: 0.20rem;
      color: #FFFFFF;
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        width: 0.50rem;
        height: 0.50rem;
      }
    }
    ul{
      width: 6.6rem;
      height: 0.7rem;
      position: absolute;
      display: flex;
      justify-content: space-around;
      top: 0.7rem;
      font-size:0.17rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(255,255,255,1);
      li{
        list-style: none;
        text-align: center;
        span{
          font-size:0.28rem;
          font-family:Impact;
          font-weight:bold;
          font-style:italic;
          color:rgba(252,230,47,1);
          padding-right: 0.04rem;
        }
      }
    }
    #onlineCount{
      width: 6.5rem;
      height: 2.7rem;
      position: absolute;
      top: 1.5rem;
    }
  }
  .show-video{
    width: 0.49rem;
          height: 1.73rem;
          position: absolute;
          right: 11.8rem;
          bottom: 0.5rem;
          background: url('../../../assets/achievement/service-join/video-title.png') no-repeat;
          background-size: 100% 100%;
          text-align: center;
          z-index: 99;
          span{
          display: inline-block;
          font-size:0.2rem;
          font-family:Source Han Sans CN;
          font-weight:500;
          color:rgba(255,255,255,1);
          display: inline-block;
          margin-top: 0.2rem;
          line-height:0.25rem;
          width: 0.21rem;
          }
  }
  .g-live-video {
        padding-top: 0.2rem;
        padding-left: 0.1rem;
        box-sizing: border-box;
        position: absolute;
        bottom: 0.24rem;
        right: 11.8rem;
        width: 2.78rem;
        height: 3.3rem;
        background: url('../../../assets/achievement/service-join/video-bg.png') no-repeat;
        background-size: 100% 100%;
        z-index: 98;
        video {
          width: 2.4rem;
          height:1.35rem;
        }
        .g-live-title {
          width: 0.49rem;
          height: 1.73rem;
          position: absolute;
          left: -0.49rem;
          bottom: 0;
          background: url('../../../assets/achievement/service-join/video-title.png') no-repeat;
          background-size: 100% 100%;
          text-align: center;
          span{
          display: inline-block;
          font-size:0.2rem;
          font-family:Source Han Sans CN;
          font-weight:500;
          color:rgba(255,255,255,1);
          display: inline-block;
          margin-top: 0.2rem;
          line-height:0.25rem;
          width: 0.21rem;
          }
        }
        .playvideo1{
            width: 0.3rem;
            height: 0.3rem;
            position: absolute;
            left: 0;
            right: 0;
            top: -1rem;
            bottom: 0;
            margin: auto;
            z-index:100;
          }
          .playvideo2{
            width: 0.3rem;
            height: 0.3rem;
            position: absolute;
            left: 0;
            right: 0;
            top: 2rem;
            bottom: 0;
            margin: auto;
            z-index:100;
          }
        .g-live-item {
          width: 2.4rem;
          height: 1.35rem;
          // background: gray;
          margin: 0.1rem 0.1rem 0 0.1rem;
          &:nth-child(even) {
            margin-right: 0;
          }
        }
      }

}
</style>
