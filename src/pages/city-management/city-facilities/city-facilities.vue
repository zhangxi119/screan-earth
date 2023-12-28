<!--
 * @Descripttion:城市设施概况分析
 * @Author: wuqiuchi
 * @Date: 2020-03-11 16:33:15
 * @LastEditors: wanglong
 * @LastEditTime: 2020-05-15 09:19:13
 -->
<template>
  <div class="city-container">
    <head-component name="城市设施"></head-component>
    <div class="g-menu-box">
      <main-list :list="menuLists"></main-list>
    </div>
    <div class="main-left-top">
      <div class="left-top-echart hover-div">
        <p class="g-title hover-color" style="margin-left: 0">城市设施<span class="global-data-title" style="position:absolute">（截至2020年3月）</span></p>
        <div class="classify-allnum">
          <p>{{letTotal}}</p>
          <div>
            <span>设施总计</span>
            <span>（个）</span>
          </div>
        </div>
        <div id="left-top-echart"></div>
      </div>
      <div class="center-top hover-div">
        <p class="g-title createPaper hover-color" style="margin-left: 0">"创文创卫"年度事件TOP3</p>
        <div class="rt-item-c food-center">
          <div class="rt-item-bar-box">
            <div class="rt-item-bar rt-item-bar-first">
              <div class="rt-item-bar-blank"></div>
              <div class="rt-item-bar-real"></div>
              <div class="rt-item-line"></div>
              <div class="rt-item-text-box">
                <div class="bar-num">{{culAndHealthData01.thingNum}}件</div>
                <div class="bar-text bar-right">{{culAndHealthData01.thingType}}</div>
                <div
                  class="bar-text"
                  :class="culAndHealthData01.thingRate > 0 ? 'bar-up' : 'bar-down'"
                >
                  <span>{{Math.abs(culAndHealthData01.thingRate)}}%</span>
                </div>
              </div>
            </div>
            <div class="rt-item-bar">
              <div class="rt-item-bar-blank"></div>
              <div class="rt-item-bar-real"></div>
              <div class="rt-item-line"></div>
              <div class="rt-item-text-box">
                <div class="bar-num">
                  <span class="bar-text">{{culAndHealthData02.thingType}}</span>
                  {{culAndHealthData02.thingNum}}件
                  <span
                    class="bar-text"
                    :class="culAndHealthData02.thingRate > 0 ? 'bar-up' : 'bar-down'"
                  >
                    <span>{{Math.abs(culAndHealthData02.thingRate)}}%</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="rt-item-bar">
              <div class="rt-item-bar-blank"></div>
              <div class="rt-item-bar-real"></div>
              <div class="rt-item-line"></div>
              <div class="rt-item-text-box">
                <div class="bar-num">{{culAndHealthData03.thingNum}}件</div>
                <div class="bar-text bar-left">
                  <span>{{culAndHealthData03.thingType}}</span>
                </div>
                <div
                  class="bar-text"
                  :class="culAndHealthData03.thingRate > 0 ? 'bar-up' : 'bar-down'"
                >
                  <span>{{Math.abs(culAndHealthData03.thingRate)}}%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="circle-bottom"></div>
        </div>
      </div>
    </div>
    <div class="main-left-center hover-div">
      <p class="g-title hover-color">事件处理 <span class="global-data-title" >（截至2020年3月）</span></p>
      <div class="left-center-echarts">
        <div id="responsibleBody">
          <div class="body-item-title">1</div>
          <div class="body-item-bottom">
            <div class="body-item-bottom-line">
              <div class="temp body-item-line-box"></div>
              <div class="temp body-item-line-box"></div>
              <div class="temp body-item-line-box"></div>
              <div class="body-item-line-box"></div>
              <div class="body-item-line-box"></div>
              <div class="body-item-line-box"></div>
              <div class="body-item-line-box"></div>
              <div class="body-item-line-box"></div>
              <div class="body-item-line-box"></div>
              <div class="body-item-line-box"></div>
              <div class="body-item-line-box"></div>
              <div class="body-item-line-box"></div>
              <div class="body-item-line-box"></div>
            </div>
            <div class="body-item-percent">
              <span>2</span>万元
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-left-bottom hover-div">
      <p class="g-title hover-color">热门事件 TOP3<span class="global-data-title" >（截至2020年3月）</span></p>
      <div class="main-left-bottom-box">
        <div class="left-bottom-echarts-01" id="left-bottom-echarts-01"></div>
        <div class="left-bottom-echarts-02" id="left-bottom-echarts-02"></div>
        <div class="left-bottom-echarts-03" id="left-bottom-echarts-03"></div>
      </div>
    </div>
    <div class="main-right-top hover-div">
      <p class="g-title hover-color">今日事件</p>
      <div class="right-notice-box">
        <p class="notice-title">
          今日事件统计：
          <span>{{todayThingNum}}</span>
          <span>次</span>
        </p>
      </div>
      <div class="right-bottom">
        <span>事件小类</span>
        <span>处理状态</span>
      </div>
      <div class="no-info" v-if="itemsList.length==0">暂无事件</div>
      <div class="list-box">
        <div
          @mouseover="stopAnimate"
          @mouseleave="startAnimate"
          :class="{'anim':animate}"
          class="list-inner-box"
        >
          <div
            class="list-box-item"
            :class="{'selected':index%2===0}"
            v-for="(item,index) in itemsList"
            :key="index"
          >
            <span>{{item.thingType}}</span>
            <span
              :style="{color: item.thingStatus === -1 ? '#EF8432' : (item.thingStatus === 0 ? '#F9E659' : '#5FC372')}"
            >{{item.state}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main-right-center hover-div">
      <p class="g-title hover-color">执法情况</p>
      <div class="center-notice-box">
        <p class="notice-title">
          执法人数：
          <span>{{enforceLawNum}}</span>
          <span>人</span>
        </p>
      </div>
      <div id="right-center-echart" class="right-center-echart"></div>
    </div>
    <div class="main-right-bottom hover-div">
      <p class="g-title hover-color">生活垃圾处理情况</p>
        <div class="dialog-toggle-btn" @click="openThirdPage('http://182.147.98.223:8320/hw/admin/core/login/index')">
          <span>查看详情</span>
          <img src="../../../assets/city-management/market-supervision/img/details-icon.png" />
        </div>
      <div class="con">
        <div class="info">
          <p class="title">环卫综合概览</p>
          <div class="list" v-if="sanitaTionOverviewMap&&sanitaTionOverviewMap.people_num">
            <div class="item">
              <p>环卫人员</p>
              <p>
                {{sanitaTionOverviewMap.people_num}}
                <small>人</small>
              </p>
            </div>
            <div class="item">
              <p>环卫车辆</p>
              <p>
                {{sanitaTionOverviewMap.car_num}}
                <small>辆</small>
              </p>
            </div>
            <div class="item">
              <p>垃圾收运</p>
              <p>
                {{sanitaTionOverviewMap.collect_car_num}}
                <small>辆</small>
              </p>
            </div>
            <div class="item">
              <p>分类亭</p>
              <p>
                {{sanitaTionOverviewMap.kiosk_num}}
                <small>个</small>
              </p>
            </div>
            <div class="item">
              <p>收集点</p>
              <p>
                {{sanitaTionOverviewMap.collect_num}}
                <small>个</small>
              </p>
            </div>
            <div class="item">
              <p>中转站</p>
              <p>
                {{sanitaTionOverviewMap.station_num}}
                <small>个</small>
              </p>
            </div>
          </div>
        </div>
        <div class="right">
          <p class="desc">
            年度倾倒垃圾量：
            <span>{{rubishTotal}}</span>
          </p>
          <div id="right-bottom-echart" class="right-bottom-echart"></div>
        </div>
      </div>
    </div>
    <div class="lengend-panle" :class="{changeH:panelBig}">
      <div class="user-dos" @click="panelBig = !panelBig">
        <div class="legend">图例</div>
        <div class="icon"></div>
      </div>
      <legend-component :list="lengendList" ref="legendComponent" @tab="tab" v-show="panelBig">
        <div slot="info-box" class="lengend-right" v-if="selectLengendData">
          <div class="lengend-title">
            <p class="lengend-title-name">{{selectLengendData.name}}</p>
            <div class="lengend-title-right">
              <span>范围</span>
              <div class="scoped">
                <div class="scoped-inner" @click="switchFlage=true" v-show="!switchFlage"></div>
                <div class="scoped-inner-02" @click="switchFlage=false" v-show="switchFlage"></div>
                <div class="scoped-switch" :class="{'on':switchFlage}"></div>
              </div>
              <div class="distance-scroll-box">
              <slider ref="slider" :min=0 :max=50 v-model="km" unit="公里" @slideValue="slideValue"></slider>
              </div>
            </div>
          </div>
          <div class="lenged-item-box">
            <div
            class="lenged-item"
            v-for="(item) in selectLengendData.downTypeList"
            :key="item.id"
            @click.stop="handleSelect(item)"
          >
            <img :src="item.fileId02" />
            <p>{{item.name}}</p>
            <div class="check">
              <!-- <input
                type="checkbox"
                class="check-box"
                :id="'ck'+index"
                :checked="item.check"
                @click.stop="handleSelect(item.id,$event)"
              /> -->
              <label  :class="{'sy-checked':item.check}"   class="sy-check"></label>
            </div>
           </div>
          </div>
        </div>
      </legend-component>
    </div>
    <!-- <div class="little-bar-box">
      <div class="little-bar area" @click="selectArea">
        {{leshanRegion}}
        <img
          class="img1"
          :class="[rotate ? 'go' : 'back']"
          src="../../../assets/city-management/city-facilities/blue-right.png"
          alt
        />
        <ul v-show="rotate">
          <li
            v-for="(item, index) in selectList"
            :value="item.value"
            :key="index"
            :style="{color: leshanRegion === item.name ? '#9BE9FF' : ''}"
            @click="checkValue(item)"
          >{{item.name}}</li>
        </ul>
      </div>
      <div
        class="little-bar"
        @click="switchClick01"
        :class="{'little-bar-01' : this.switch01}"
        style="padding-right: 0;"
      >
        <img class="img2" src="../../../assets/city-management/city-facilities/car.png" alt />
        执法轨迹&nbsp;&nbsp;&nbsp;&nbsp;
        <img v-if="this.switch01" class="img4"

          src="../../../assets/city-management/city-facilities/icon.png"
          alt
        />
        <div  v-else class="img5"></div>
      </div>
      <div class="little-bar" @click="switchClick02" :class="{'little-bar-01' : this.switch02}">
        <img class="img3" src="../../../assets/city-management/city-facilities/freight-car.png" alt />
        垃圾清理轨迹&nbsp;&nbsp;
        <img
          v-if="this.switch02"
          class="img4"
          src="../../../assets/city-management/city-facilities/icon.png"
          alt
        />
        <div v-else class="img5"></div>
      </div>
      <div class="little-bar" @click="isShowMapVideoIcon = !isShowMapVideoIcon">视频监控</div>
    </div>
    -->
    <div class="viedo-box" v-show="showVideo" :style="{'z-index':showVideo?102:-1}">
      <div class="video-container">
        <div class="video-left">
          <div class="title">视频监控</div>
          <div class="input-box">
            <input placeholder="请输入" type="text" v-model="videoName" />
            <div class="serach-button" @click="serachVideo">
              <img src="@/assets/common/search-icon.png" />
            </div>
          </div>
          <div class="tree-box">
            <tree-component :list="treeList"></tree-component>
          </div>
        </div>
        <div class="video-right">
          <div class="video-list">
            <div :style="margin" class="video-inner-list">
              <div
                v-for="(item,index) in videoArray"
                :key="index"
                :class="{
                'three':selectSpeedIndex===0,
                'two':selectSpeedIndex===1,
                'one':selectSpeedIndex===2,
                'select-video':selectVideoIndex===index
              }"
              >
                <div :id="'video-item'+index" class="video-item"></div>
                <div @click="selectVideoBoder(index)" class="video-layer"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="select-box">
          <div
            @click="selectSpeed(1)"
            class="select-item"
            :class="{'selected':selectSpeedIndex===1}"
          >2X</div>
          <div
            @click="selectSpeed(2)"
            class="select-item"
            :class="{'selected':selectSpeedIndex===2}"
          >1X</div>
        </div>
        <div class="close" @click="showVideo = false">
          <img src="@/assets/common/close-icon.png" />
        </div>
      </div>
    </div>
    <div class="left-list">
      <div class="left-list-li" v-for="(item,index) in leftList" :key="index">
        <div class="name">{{item.name}}</div>
        <div class="number">
          {{item.value}}
          <span>个</span>
        </div>
      </div>
    </div>
    <div
      v-show="item.show&&item.KMshow"
      class="maker-component"
      @click.stop="makerClick(item)"
      :id="item.id"
      v-for="(item) in mapMakers"
      :key="item.id">
      <div class="three-box" :class="{d3_marker_margin:threeType===1,d2_marker_margin:threeType===0}" >
        <img class="maker-3d-img" :src="item.fileId02" />
        <img class="maker-3d-box-img" v-if="threeType===1" :src="item.fileId01" />
      </div>
      <div class="maker-panle"  v-if="item.show&&item.lenged">
        <img class="maker-panle-close" src="../../../assets/city-management/market-supervision/img/close-icon@2x.png" @click.stop="item.lenged=false">
        <p class="title">{{item.stationName}}</p>
        <div class="content">
          <div class="left-panle">
            <p>
              <label>地址：</label>
              <span>{{item.address}}</span>
            </p>
            <p v-if="item.river">
              <label>河流：</label>
              <span>{{item.river}}</span>
            </p>
            <p v-if="item.upLevel">
              <label>警戒水位：</label>
              <span>{{item.upLevel}}</span>
            </p>
            <p v-if="item.upLevel">
              <label>保证水位：</label>
              <span>{{item.downLevel}}</span>
            </p>
          </div>
          <div class="right-panle" v-if="item.videoIds">
            <div class="video-box"></div>
          </div>
        </div>
        <div class="water-info" v-if="monitorDetailsList.length>0">
          <p>近三年涨水水情信息</p>
          <div class="water-info-title">
            <div class="title-item">日期</div>
            <div class="title-item">水位</div>
            <div class="title-item">流量</div>
          </div>
          <div class="water-info-list" v-for="(item,index) in monitorDetailsList" :key="index">
            <div class="title-item">{{item.date}}</div>
            <div class="title-item">{{item.waterLev}} 米</div>
            <div class="title-item">{{item.flow}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="enforceLaw" v-show="switch01" id="enforceLaw"></div>
    <div class="garbage" v-if="switch02" id="garbage"></div>
    <!-- <div
      class="video-maker"
      v-show="isShowMapVideoIcon"
      :id="item.id"
      v-for="(item,index) in videoList"
      :key="index"
    >
      <div class="three-box" @click="openVideo(item)">
        <img class="maker-3d-img" src="@/assets/common/video.png" />
        <img class="maker-3d-box-img" v-if="threeType===1" src="@/assets/common/video-box.png" />
      </div>
      :style="{'z-index':selectVideoId===item.id?100:-1}"
      <div
        class="maker-panle"
        :id="item.id+'-video-panle'"
        v-show="selectVideoId===item.id&&threeType===1"
      ></div>
    </div> -->
    <div class="dialog" v-show="isShowMarkerDialog">
      <p class="g-title">垃圾清运轨迹</p>
      <img
        src="../../../assets/city-management/market-supervision/img/close-icon@2x.png"
        class="close-btn"
        @click="isShowMarkerDialog=false"
        alt="关闭"
      />
      <div class="dialog-head">
        <div class="form-row">
          <div class="form-cell">
            <label for>发车时间：</label>
            <input type="text" class="text-input" id="startDate" :value="startDate" />
          </div>
          <div class="dialog-toggle-btn" @click="clearTrance">
           <span>清除轨迹</span>
          <img src="../../../assets/city-management/market-supervision/img/details-icon.png" />
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
            <template v-if="carInfoList.length>0">
              <tr v-for="(item,index) in carInfoList" :key="index">
                <td :style="{width:tableHeadConfig[0].width}">{{item.id||''}}</td>
                <td :style="{width:tableHeadConfig[1].width}">{{item.name||''}}</td>
                <td :style="{width:tableHeadConfig[2].width}">{{item.com_name||''}}</td>
                <td :style="{width:tableHeadConfig[3].width}">{{item.role_name||''}}</td>
                <td :style="{width:tableHeadConfig[4].width}">
                  <a class="market-address" @click="getDistrictCarLocus(item.id)">
                    <img src="../../../assets/city-management/city-facilities/pos-icon.png" />
                    查看轨迹
                  </a>
                </td>
              </tr>
            </template>
            <p v-else class="table-no-data">无数据</p>
          </tbody>
        </table>
      </div>
    </div>
    <div class="open-btn" @click="isAminte=!isAminte" >
      <img  src="../../../assets/city-management/city-facilities/btn-closed.png" :class="{aminOpen:isAminte}" alt="">
      <div class="con" :class="{aminOpen2:isAminte,active:!isAminte}" @click="isShowMarkerDialog=true;">
         <img src="../../../assets/city-management/city-facilities/btn-opened.png" >
          <p class="desc" >
            垃圾清理轨迹
          </p>
      </div>
    </div>
    <div class="icon-box" :id="item.id" v-for="(item) in icons" :key="item.id">
      <img class="icon-img" src="@/assets/tool/end.png" />
    </div>
    <template v-if="areaMapData.length > 0 && isShowMiniMarker  === 0">
      <div
        class="market-marker-container"
        :id="item.id"
        :style="{zIndex:item.district===searchObj.name?8:7}"
        v-for="(item,index) in  areaMapData"
        :key="index"
      >
        <div class="marker" @click="mapPointClick(item)"></div>
        <div
          class="other"
          v-show="item.district===searchObj.name"
          @mouseover="handleClearTime"
          @mouseleave="handleMove"
        >
          <!-- <span class="close-btn" @click="openHarzdDialog(item.qxq)">>></span> -->
          <img src="@/assets/common/event-icon.png" />
          <div class="marker-detail">
            <p class="title">城市设施详情<span class="global-data-title" >（截至2020年3月）</span></p>
            <div class="info-list">
              <ul>
                <template v-if="item.detailsList.length>0">
                  <li v-for="(m,n) in item.detailsList" :key="n">
                    <span>{{m.type}}</span>
                    <span>{{m.count}}</span>
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
  </div>
</template>
<script>
import echarts from 'echarts'
import API from '@/api/city-management/city-facilities.js'
import mainList from '@/components/menu.vue'
import treeComponent from '@/components/tree-component'
import legendComponent from '@/components/legend-component'
import options01 from '@/echarts-data/city-management/city-facilities/left-top.js'
import context from '@/echarts-data/city-management/city-facilities/percentColor2.js'
import leftBottom from '@/echarts-data/city-management/city-facilities/left-bottom.js'
import options05 from '@/echarts-data/city-management/city-facilities/right-center.js'
import options06 from '@/echarts-data/city-management/city-facilities/right-bottom.js'
import '@/echarts-data/city-management/city-facilities/index2.scss'
import { imgPath } from '@/utils/BasePath.js' // 图片基本路径
import {openThirdPage} from '@/utils/utils'
import headComponent from '@/components/head-component'
import {
  areaLocation
} from '@/api/emergency-command/overallSituationMapOperation'
import slider from '@/components/process-drag.vue'
export default {
  components: { mainList, treeComponent, legendComponent, headComponent, slider },
  mounted () {
    this.getSitudation() // 获取城市设施总情况
    this.getEventHanding() // 获取事件处理数据
    this.getHotEvent() // 获取热门事件数据
    this.getTodayThing()
    setInterval(() => {
      this.getTodayThing() // 获取今日事件数据
    }, 3605000)
    this.getEnforceLaw() // 获取执法情况数据
    // this.getGarbage() // 获取垃圾处理情况数据
    this.getCulAndHealth() // 获取创文创卫数据
    this.getFacilitySituation() // 获取城市设施概况数据
    // this.getClassVideo() // 监控视频目录
    this.generCeyboard() // 获取小键盘
    // this.getDistrictCarLocus(this.leshanRegion) // 获取运动轨迹
    this.selectVideos()
    this.sanitaTionOverview() // 环卫综合概览
    this.dumpSituation() // 垃圾倾倒情况
    this.carInfo()
    this.initDateInput()
    this.queryMapinfo()
  },
  data () {
    return {
      km: 5,
      ceneterScope: {},
      icons: [],
      switchFlage: false, // 范围开关

      selectVideoId: '',
      letTotal: 0,
      videoList: [],
      videoName: '',
      lengendList: [],
      selectLengendData: null, // 选中的左边切换面板数据
      rotate: false, // 点击图片旋转
      leshanRegion: '市中区', // 选择的区域
      switch01: false, // 点击开关 选择框
      switch02: false, // 点击开关 选择框
      animate: false,
      timer: null,
      showVideo: false, // 视频监控弹框
      isShowMapVideoIcon: true,
      treeList: [],
      defaultTreeList: [],
      todayThingNum: null, // 今日事件统计总数
      enforceLawNum: null, // 执法人数
      garbageData: {}, // 垃圾本年处理吨数和同比百分比
      culAndHealthData01: {}, // 创文创卫第一类
      culAndHealthData02: {}, // 创文创卫第二类
      culAndHealthData03: {}, // 创文创卫第三类
      marginTop: 0,
      swfurl: './static/libs/flowplayer/flowplayer-3.2.18.swf',
      selectSpeedIndex: 1,
      videoArray: [], // 前4个视频
      videoObjectList: [],
      selectVideoIndex: -1,
      classRateList: [
        { name: '市容环境', value: 567 },
        { name: '宣传广告', value: 480 },
        { name: '施工管理', value: 520 },
        { name: '街面秩序', value: 460 },
        { name: '突发事件', value: 500 },
        { name: '其他事件', value: 450 }
      ],
      menuLists: [
        { name: '应急指挥调度' },
        { name: '心连心服务' },
        { name: '城市综合管理' },
        { name: '智慧旅游平台' },
        { name: '数字规划馆' }
      ],
      leftList: [
        { name: '公用消防', value: 5432 },
        { name: '防洪防汛', value: 5098 },
        { name: '桥梁涵洞', value: 4950 },
        { name: '路灯亮化', value: 5098 },
        { name: '环境卫生', value: 4950 },
        { name: '园林绿化', value: 6590 }
      ],
      itemsList: [
        { name: '公共停车场擅自停止使用或改为他用', state: '处理中' },
        { name: '岷江航电空调室外机低挂', state: '已处理' },
        {
          name: '市中区站前广场公共停车场擅自停止使用或改为他用',
          state: '处理中'
        },
        {
          name: '张公桥美食街个体工商粘贴非法小广告，事件名称标题标题',
          state: '已处理'
        },
        { name: '公共停车场擅自停止使用或改为他用', state: '处理中' }
      ],
      selectList: [
        { name: '市中区', value: 0 },
        { name: '沙湾区', value: 1 },
        { name: '五通桥区', value: 2 },
        { name: '金口河区', value: 3 },
        { name: '峨嵋山市', value: 4 },
        { name: '犍为县', value: 5 },
        { name: '井研县', value: 6 },
        { name: '夹江县', value: 7 },
        { name: '沐川县', value: 8 },
        { name: '峨边县', value: 9 },
        { name: '马边县', value: 10 }
      ],
      mapIndex: 0,
      mapMarkerData: {}, // 地图maker数据
      mapMakers: [],
      monitorDetailsList: [], // 近三年水位情况
      threeType: 0, // 2d 3d 标志 0 2d 1 3d
      enforceLaws: [], // 执法轨迹
      garbage: [], // 垃圾车轨迹
      panelBig: false,
      sanitaTionOverviewMap: null,
      carInfoList: [],
      tableHeadConfig: [
        {
          name: '序号 ',
          width: '20%'
        },
        {
          name: '车牌号',
          width: '20%'
        },
        {
          name: '所属单位',
          width: '20%'
        },
        {
          name: '车辆类型',
          width: '20%'
        },
        {
          name: '操作',
          width: '20%'
        }
      ],
      isShowMarkerDialog: false,
      startDate: '',
      isAminte: true,
      areaMapData: [],
      qxActiveIndex: 0,
      searchObj: {
        name: ''
      },
      areaLocation,
      isShowMiniMarker: 0,
      rubishTotal: 0
    }
  },
  computed: {
    margin () {
      return {
        'margin-top': `${this.marginTop}rem`
      }
    },
    selectNode () {
      return this.$store.getters.GET_RECURSION
    }
  },
  watch: {
    selectNode (val) {
      if (val) {
        let index = 0
        if (this.selectVideoIndex > -1) {
          index = this.selectVideoIndex
        }
        this.create('video-item' + index, val.url)
      }
    },
    switch01 (val) {
      this.switch01 = val
    },
    // 新增范围选择
    switchFlage (val) {
      if (!val) { // 关闭范围选择
        // 清空选择状态
        this.lengendList.forEach((item) => {
          if (item.downTypeList) {
            item.downTypeList.forEach((d) => {
              d.check = false
            })
          }
        })
        // 清空maker
        this.mapMakers.forEach(item => {
          item.show = false
          item.KMshow = false
        })
        this.ceneterScope = {}
        window._m.clearToolMakers(this.icons)
        this.icons = []
        this.$store.commit('SET_CURSOR', false)
      } else {
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
      }
    }

  },
  methods: {
    openThirdPage,
    // 新增范围选择
    slideValue (km) {
      this.km = km
      if (this.switchFlage && this.ceneterScope.lon) {
        console.log('范围maker', this.mapMakers, this.km)
        this.mapMakers.forEach(item => {
          if (item.show) {
            if (!window._m.getSpaceDistanceByLon([this.ceneterScope, {lon: item.lon * 1, lat: item.lat * 1}], this.km)) {
              item.KMshow = false
            } else {
              item.KMshow = true
            }
          }
        })
      }
    },
    openVideo (item) {
      this.selectVideoId = item.id
      let { lon, lat } = item
      window._m.getSouthPointByDistance(
        {
          lon,
          lat
        },
        () => {}
      )
    },
    selectVideos () {
      API.SELECT_VIDEO_POINT(this).then(res => {
        let data = res.data
        if (data.serviceSuccess) {
          let list = data.data.vediosPointList.map(item => {
            item.id = item.vedioId
            return item
          })
          this.videoList = list
          this.$nextTick(() => {
            list.forEach(d => {
              this.create(d.id + '-video-panle', d.url)
            })
          })
          console.log(list)
          // 17161-3 17194-3
          window._m.addMakers(list, type => {
            this.threeType = type
          })
        }
      })
    },
    serachVideo () {
      if (this.videoName) {
        this.getClassVideo(this.videoName)
      } else {
        if (this.defaultTreeList.length > 0) {
          this.treeList = this.defaultTreeList
          console.log(this.treeList)
        } else {
          this.getClassVideo()
        }
      }
    },
    proJSON (oldArr, pid) {
      let newArr = []
      oldArr.forEach(item => {
        if (item.pid === pid) {
          let obj = {
            id: item.id,
            name: item.name,
            show: false,
            url: item.url
          }
          let children = this.proJSON(oldArr, item.id)
          if (children.length > 0) {
            obj.children = children
          }
          newArr.push(obj)
        }
      })
      return newArr
    },
    // // 获取车辆运动轨迹
    // getDistrictCarLocus (district) {
    //   API.DISTRICT_CAR_LOCUS(this, { district })
    //     .then(res => {
    //       let districtCarLocusList = res.data.data.districtCarLocusList
    //       if (districtCarLocusList.length > 0) {
    //         let result = districtCarLocusList[0].carLocusList
    //         this.enforceLaws = result[1].locusList.map(item => {
    //           item.h = 1
    //           return item
    //         })
    //         this.garbage = result[0].locusList.map(item => {
    //           item.h = 1
    //           return item
    //         })
    //       } else {
    //         this.enforceLaws = []
    //         this.garbage = []
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // },
    // maker 点击事件
    makerClick (item) {
      this.monitorDetailsList = []
      let { lon, lat } = item
      window._m.getSouthPointByDistance(
        {
          lon,
          lat
        },
        () => {
          let makers = this.mapMakers
          makers.forEach((_item, i) => {
            if (_item.id === item.id) {
              _item.lenged = true
            } else {
              _item.lenged = false
            }
          })
          this.mapMakers = makers
          API.MONITOR_DETAILS(this, { id: item.id })
            .then(res => {
              if (res.status === 200) {
                this.monitorDetailsList = res.data.data.monitorDetailsList
              }
            })
            .catch(e => {
              console.log(e)
            })
        }
      )
    },
    // 小面板点击切换事件
    tab (e) {
      this.mapIndex = e.index
      this.selectLengendData = this.lengendList[e.index]
    },
    // 获取小键盘面板
    generCeyboard () {
      API.gener_Ceyboard(this, {})
        .then(res => {
          let data = res.data.data.generKeyboardList
          data.forEach(item => {
            item.downTypeList.map(_item => {
              _item.fileId02 = imgPath + _item.fileId02
              _item.check = false
              return item
            })
          })

          this.lengendList = data
          this.$refs.legendComponent.init(this.lengendList)
          this.selectLengendData = this.lengendList[2]
          this.mapIndex = 2
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 小键盘面板点击获取撒点请求数据
    handleSelect (item) {
      if (!this.switchFlage || !this.ceneterScope.lon) {
        return false
      }
      let id = item.id
      let checked = item.check
      // 更改list数据状态
      let lengendList = this.lengendList
      let index = lengendList[this.mapIndex].downTypeList.findIndex(d => {
        return d.id === id
      })
      let downTypeList = lengendList[this.mapIndex].downTypeList
      // 选中
      if (!checked) {
        downTypeList[index].check = true
        lengendList[this.mapIndex].downTypeList = downTypeList
        this.lengendList = lengendList
        this.selectLengendData = this.lengendList[this.mapIndex]
        if (!this.mapMarkerData[id]) {
          // 如果已经加载不需要再次请求
          API.facility_Details(this, { code: id })
            .then(res => {
              if (res.status === 200) {
                let arr = res.data.data.facilityDetailsList
                arr.forEach(item => {
                  item.fileId02 = imgPath + item.fileId02
                  item.fileId01 = imgPath + item.fileId01
                  item.lon = item.lon * 1
                  item.lat = item.lat * 1
                  item.lenged = false
                  // 开启计算
                  if (window._m.getSpaceDistanceByLon([this.ceneterScope, {lon: item.lon * 1, lat: item.lat * 1}], this.km)) {
                    item.show = true
                    item.KMshow = true
                  } else {
                    item.show = true
                    item.KMshow = false
                  }
                })

                this.mapMarkerData[id] = arr
                this.mapMakers = [...this.mapMakers, ...arr]

                window._m.addMakers(arr, type => {
                  this.threeType = type
                })
              }
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          let arr = this.mapMarkerData[id]
          this.mapMakers.forEach(item => {
            arr.forEach(_item => {
              if (item.id === _item.id) {
                item.show = true
                if (window._m.getSpaceDistanceByLon([this.ceneterScope, {lon: item.lon * 1, lat: item.lat * 1}], this.km)) {
                  item.KMshow = true
                } else {
                  item.KMshow = false
                }
                item.lenged = false
              }
            })
          })
        }
      } else {
        downTypeList[index].check = false
        lengendList[this.mapIndex].downTypeList = downTypeList
        this.lengendList = lengendList
        this.selectLengendData = this.lengendList[this.mapIndex]
        let arr = this.mapMarkerData[id]
        this.mapMakers.forEach(item => {
          arr.forEach(_item => {
            if (item.id === _item.id) {
              item.show = false
              item.lenged = false
              item.KMshow = false
            }
          })
        })
      }
    },
    startAnimate () {
      this.timer = setInterval(this.scroll, 1500)
    },
    stopAnimate () {
      this.animate = false
      clearInterval(this.timer)
    },
    scroll () {
      this.animate = true
      setTimeout(() => {
        this.itemsList.push(this.itemsList[0]) // 将数组的第一个元素添加到数组的
        this.itemsList.shift() // 删除数组的第一个元素
        this.animate = false // margin-top 为0 的时候取消过渡动画，实现无缝滚动
      }, 1000)
    },
    // 点击获取展开收缩选择框
    selectArea () {
      this.rotate = !this.rotate
    },
    // // 选择地区
    // checkValue (item) {
    //   this.leshanRegion = item.name
    //   this.switch02 = false
    //   this.switch01 = false
    //   this.getDistrictCarLocus(this.leshanRegion)
    // },
    // 按钮开关的切换
    // switchClick01 () {
    //   this.switch02 = false
    //   if (this.enforceLaws.length > 0) {
    //     this.switch01 = !this.switch01
    //     if (this.switch01) {
    //       window._m.trajectory(this.enforceLaws, 'enforceLaw', () => {
    //         this.switch01 = false
    //       })
    //     } else {
    //       window._m.clearTrajectory()
    //     }
    //   }
    // },
    // 按钮开关的切换
    switchClick02 () {
      this.switch01 = false
      if (this.garbage.length > 0) {
        this.switch02 = !this.switch02
        if (this.switch02) {
          window._m.trajectory(this.garbage, 'garbage', () => {
            this.switch02 = false
          })
        } else {
          window._m.clearTrajectory()
        }
      }
    },
    create (id, url) {
      let p = window.$f(id, this.swfurl, {
        clip: {
          url: url,
          autoPlay: true,
          autoBuffering: true
        },
        plugins: {
          controls: null
        }
      })
      this.videoObjectList.push(p)
    },
    selectVideoBoder (index) {
      this.selectVideoIndex = index
      this.$store.commit('SET_RECURSION', null)
    },
    selectSpeed (type) {
      this.selectSpeedIndex = type
      if (
        this.selectVideoIndex <= 7 &&
        this.selectVideoIndex >= 4 &&
        type === 1
      ) {
        this.marginTop = -4.6
      } else if (this.selectVideoIndex === 8 && type === 1) {
        this.marginTop = -9.2
      } else if (this.selectVideoIndex > 0 && type === 2) {
        this.marginTop = -4.6 * this.selectVideoIndex
      } else {
        this.marginTop = 0
      }
    },
    // 获取城市设施总情况
    getSitudation () {
      API.CITY_SITUATION(this, {})
        .then(res => {
          let options01Data = options01(res.data.data.overallSituationMap)
          let letTotal = 0
          for (let i in res.data.data.overallSituationMap) {
            if (i !== 'facilitySum') {
              letTotal += res.data.data.overallSituationMap[i]
            }
          }
          this.letTotal = letTotal
          let charts = echarts.init(document.getElementById('left-top-echart'))
          charts.setOption(options01Data)
          charts.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
          })
          // 设置默认选中高亮部分
          charts.on('mouseover', e => {
            charts.dispatchAction({
              type: 'downplay',
              seriesIndex: 0
            })
            charts.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex: e.dataIndex
            })
          })
          charts.on('mouseout', e => {
            charts.dispatchAction({
              type: 'downplay',
              seriesIndex: 0
            })
            charts.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex: 0
            })
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 获取事件处理数据
    getEventHanding () {
      API.CITY_EVENTHANDING(this, {})
        .then(res => {
          let classRateList = []
          for (var i in res.data.data.eventHandingMap) {
            let obj = {}
            obj[i] = res.data.data.eventHandingMap[i]
            if (Object.keys(obj)[0] === 'envNum') {
              obj.name = '市容环境'
              obj.value = obj.envNum
            }
            if (Object.keys(obj)[0] === 'adNum') {
              obj.name = '宣传广告'
              obj.value = obj.adNum
            }
            if (Object.keys(obj)[0] === 'buildNum') {
              obj.name = '施工管理'
              obj.value = obj.buildNum
            }
            if (Object.keys(obj)[0] === 'orderNum') {
              obj.name = '街面秩序'
              obj.value = obj.orderNum
            }
            if (Object.keys(obj)[0] === 'proNum') {
              obj.name = '突发事件'
              obj.value = obj.proNum
            }
            if (Object.keys(obj)[0] === 'other') {
              obj.name = '其他事件'
              obj.value = obj.other
            }
            classRateList.push(obj)
          }

          classRateList.sort((a, b) => {
            return b.value - a.value
          })
          context.init(classRateList)
        })

        .catch(err => {
          console.log(err)
        })
    },
    // 获取热门事件数据
    getHotEvent () {
      API.CITY_HOTEVENT(this, {})
        .then(res => {
          // 事件总数
          let total = 0
          res.data.data.hotEventList.forEach(element => {
            total += element.eventNum
          })
          let options02Data = leftBottom.returnData02(
            Object.assign({ total: total }, res.data.data.hotEventList[0])
          )
          let options03Data = leftBottom.returnData03(
            Object.assign({ total: total }, res.data.data.hotEventList[1])
          )
          let options04Data = leftBottom.returnData04(
            Object.assign({ total: total }, res.data.data.hotEventList[2])
          )
          echarts
            .init(document.getElementById('left-bottom-echarts-01'))
            .setOption(options02Data)
          echarts
            .init(document.getElementById('left-bottom-echarts-02'))
            .setOption(options03Data)
          echarts
            .init(document.getElementById('left-bottom-echarts-03'))
            .setOption(options04Data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 获取今日事件数据
    getTodayThing () {
      API.CITY_TODAYTHING(this, {})
        .then(res => {
          res.data.data.todayThingList.forEach(item => {
            item.state =
              item.thingStatus === -1
                ? '未处理'
                : item.thingStatus === 0
                  ? '处理中'
                  : '已处理'
          })
          this.itemsList = res.data.data.todayThingList
          // 今日事件统计
          this.todayThingNum = this.itemsList.length
          // 今日事件大于4个 ，开始轮播
          if (this.itemsList.length > 4) {
            this.timer = setInterval(this.scroll, 1500)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 获取执法情况数据
    getEnforceLaw () {
      API.CITY_ENFORCELAW(this, {})
        .then(res => {
          this.enforceLawNum = 0
          let options05Data = options05(res.data.data.enforceLawList)
          res.data.data.enforceLawList.forEach(item => {
            // 执法人数统计
            this.enforceLawNum += item.peopleNum
          })
          echarts
            .init(document.getElementById('right-center-echart'))
            .setOption(options05Data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 获取创文创卫数据
    getCulAndHealth () {
      API.CITY_CULHEALTH(this, {})
        .then(res => {
          // 创文创卫第一类
          this.culAndHealthData01 = res.data.data.cCulAndHealthList[0]
          // 创文创卫第二类
          this.culAndHealthData02 = res.data.data.cCulAndHealthList[1]
          // 创文创卫第三类
          this.culAndHealthData03 = res.data.data.cCulAndHealthList[2]
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 获取城市设施概况数据
    getFacilitySituation () {
      API.CITY_FACILITY(this, {})
        .then(res => {
          let facility = res.data.data.facilitySituationMap
          this.leftList = [
            { name: '公用消防', value: facility.publicNum },
            { name: '防洪防汛', value: facility.floodNum },
            { name: '桥梁涵洞', value: facility.bridgeNum },
            { name: '路灯亮化', value: facility.lampNum },
            { name: '环境卫生', value: facility.envNum },
            { name: '园林绿化', value: facility.greenNum }
          ]
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 监控视频目录
    getClassVideo (name) {
      let param = {}
      if (name) {
        param.param = name
      }
      API.CITY_CLASSVIDEOS(this, param)
        .then(res => {
          if (res.status === 200 && res.data.serviceSuccess) {
            let result = res.data.data.classVideosMap.sqlList
            if (name) {
              result.forEach(item => {
                if (item.pid === item.id) {
                  item.pid = 0
                }
              })
              let list = this.proJSON(result, 0)
              this.treeList = list
            } else {
              this.videoArray = result
                .filter(item => {
                  return item.isFolder === '0'
                })
                .slice(0, 4)
              result.forEach(item => {
                if (item.pid === item.id) {
                  item.pid = 0
                }
              })
              let list = this.proJSON(result, 0)
              this.treeList = list
              this.defaultTreeList = list
              this.$nextTick(() => {
                this.videoArray.forEach((item, index) => {
                  this.create('video-item' + index, item.url)
                })
              })
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    sanitaTionOverview () {
      API.SANITATION_OVERVIEW(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.sanitaTionOverviewMap = res.data.sanitaTionOverviewMap
        }
      })
    },
    dumpSituation () {
      API.DUMP_SISTUATION(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.rubishTotal = res.data.dumpSituationMap.sum
          if (res.data.dumpSituationMap.monthDumpList.length > 0) {
            // console.log(
            //   document.getElementById('right-bottom-echart'),
            //   options06(res.data.dumpSituationMap.monthDumpList)
            // )
            echarts
              .init(document.getElementById('right-bottom-echart'))
              .setOption(options06(res.data.dumpSituationMap.monthDumpList))
          }
        }
      })
    },
    carInfo () {
      API.CAR_INFO(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          if (res.data.carInfoList.length > 0) {
            this.carInfoList = res.data.carInfoList
          }
        }
      })
    },
    initDateInput () {
      let _that = this
      this.$nextTick(() => {
        this.$laydate.render({
          elem: '#startDate',
          theme: '#000',
          format: 'yyyyMMdd',
          done: (value) => {
            _that.startDate = value
            console.log('initDateInput', _that.startDate)
          }
        })
      })
    },
    // 获取车辆运动轨迹
    getDistrictCarLocus (id) {
      this.switch01 = false
      if (this.startDate !== '') {
        API.DISTRICT_CAR_LOCUS(this, { carId: id, date: this.startDate })
          .then(res => {
            res = res.data
            if (res.serviceSuccess) {
              let list = res.data.locusList
              window._m.clearTrajectory()
              if (list.length > 0) {
                list = list.map((item) => {
                  item.h = 1
                  item.lon = +item.lon
                  item.lat = +item.lat
                  return item
                })
                this.enforceLaws = list
                console.log('switch01', this.switch01)
                this.isShowMarkerDialog = false
                window._m.trajectory(this.enforceLaws, 'enforceLaw', () => {
                  window._m.clearTrajectory()
                })
              }
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    // 地图轮询
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
    queryMapinfo () {
      API.DISTRICT_OVER_ALL(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.areaMapData = res.data.districtOverAllMap
          if (this.areaMapData.length > 0) {
            this.areaMapData.map((item, index) => {
              item = Object.assign(item, this.areaLocation[item.district])
              item.id = 'facility_map_point_' + index
              item.showTextFlag = false
              return item
            })
            this.searchObj.name = this.areaMapData[0].district
            window._m && window._m.addMakers(this.areaMapData, data => {
              this.isShowMiniMarker = data
            })
            this.handleGetDataByTime()
          }
        }
      })
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
          this.areaMapData[this.qxActiveIndex].district
      }, 5000)
    },
    mapPointClick (item) {
      this.searchObj.name = item.district
    },
    clearTrance () {
      window._m.clearTrajectory()
    }
  },

  beforeDestroy () {
    // 清除定时器
    clearInterval(this.timer)
    if (window._m) {
      window._m.clear()
      window._m.clearTrajectory()
    }
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
.d3_marker_margin{
  margin-top: -1.79rem;
  margin-left: -.47rem;
}
.d2_marker_margin{
  margin-top: -.6rem;
  margin-left: -.5rem;
}
.maker-panle-close{
  position:absolute;
  width: .2rem;
  height: .2rem;
  top: .15rem;
  right: .15rem;
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
    margin-left: -0.1rem;
    margin-top:-0.7rem;
    z-index: 1;
  }
  .other {
    position: absolute;
    top: -2.3rem;
    z-index: 0;
    display: flex;
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
      width: 3rem;
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
        padding: 0.1rem;
        ul {
          max-height: 1.8rem;
          overflow: auto;
          padding: 0 .1rem;
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
              // &:nth-of-type(1) {
              //   color: #14d6ff;
              // }
              &:nth-of-type(2) {
                color: #fce62f;
                text-align: center;
              }
              &:nth-of-type(1) {
                color: #00abfb;
                text-align: right;
              }
            }
            // &:nth-of-type(2) {
            //   span {
            //     &:nth-of-type(1) {
            //       color: #fce62f;
            //     }
            //   }
            // }
            // &:nth-of-type(3) {
            //   span {
            //     &:nth-of-type(1) {
            //       color: #009cff;
            //     }
            //   }
            // }
            // &:nth-of-type(1) {
            //   span {
            //     &:nth-of-type(1) {
            //       color: #ff4a14;
            //     }
            //   }
            // }
          }
        }
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
  right: 0.4rem;
  top: 0.4rem;
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
.icon-box {
     position: absolute;
     z-index: 8;
     .icon-img {
       width: 0.5rem;
       height: 0.66rem;
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
.market-address {
  cursor: pointer;
  color: #85FEFF;
  text-decoration: #85FEFF 0.01rem solid;
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
.open-btn{
  position: absolute;
  right:6.8rem;
  z-index: 11;
  bottom:1rem;
  width: 1.2rem;
  img:nth-child(1){
    width: .58rem;
    height: .58rem;
    cursor: pointer;
  }
  .con{
    margin-top: -.24rem;
    opacity: 0;
    &.active{
      opacity: 1;
    }
  img{
    margin: 0 auto;
    margin-left: .04rem;
    width:.58rem;
    height:1.94rem;
  }
  .desc{
    font-size: .2rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #9be9ff;
    position: absolute;
    -webkit-writing-mode: tb;
    -ms-writing-mode: tb;
    writing-mode: tb;
    top: .8rem;
    left: .18rem;
  }
  }

}
.aminOpen2{
  opacity: 1;
  animation: open2 1000ms ;
}
@keyframes open2 {
  0%{
    opacity: 0;
  }
  10%{
    opacity: .1;
  }
   20%{
    opacity: .2;
  }
   30%{
    opacity: .3;
  }
   40%{
    opacity: .4;
  }
   50%{
    opacity: .5;
  }
   60%{
    opacity: .6;
  }
   70%{
    opacity: .7;
  }
   80%{
    opacity: .8;
  }
   90%{
    opacity: .9;
  }
   100%{
    opacity: 1;
  }
}
.aminOpen{
  animation: open 300ms ;
}
@keyframes open {
  0% {
    transform: rotate(0deg);
  }
  25%{
  transform: rotate(90deg);
  }
  50%{
  transform: rotate(180deg);
  }
  75%{
  transform: rotate(270deg);
  }
  100%{
  transform: rotate(360deg);
  }
}
.dialog {
  width: 12.93rem;
  height: 6.61rem;
  background: url("../../../assets/city-management/market-supervision/food-drug/dialog-bg@2x.png");
  background-size: 100% 100%;
  position: absolute;
  left: 14.84rem;
  top: 2.11rem;
  z-index: 103;
  padding: 0.3rem;
  .g-title {
    margin-left: 0.1rem !important;
    margin-top: 0.1rem !important;
  }
  .close-btn {
    width: 0.3rem;
    height: 0.3rem;
    position: absolute;
    right: 0.3rem;
    top: 0.3rem;
    cursor: pointer;
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
      .dialog-toggle-btn {
        top:0.2rem!important
      }
    }
  }
  .dialog-body {
    height: 4.8rem;
    overflow: auto;
  }
}
.city-container {
  width: 43.2rem;
  height: 10.8rem;
  position: absolute;
  overflow: hidden;
  background: #000;
  .g-menu-box {
    position: absolute;
    left: 7.3rem;
    top: 9rem;
    z-index: 9999;
  }
  .g-heart-box {
    position: absolute;
    right: 7.2rem;
    top: 7rem;
    z-index: 100;
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
    background: url("../../../assets/city-management/economic-run/three-base/title-icon.png")
      no-repeat;
    background-position: -0rem 0.2rem;
    background-size: 0.87rem 0.25rem;
  }
  .main-left-top {
    position: absolute;
    left: 0.29rem;
    top: 0.2rem;
    z-index: 9;
    width: 7.02rem;
    height: 3.92rem;
    background: url("../../../assets/city-management/city-facilities/left-top.png")
      center no-repeat;
    background-size: 100%;
    .left-top-echart {
      height: 2.7rem;
      margin-left: 0.5rem;
      width: 3.86rem;
      position: relative;
      .classify-allnum {
        position: absolute;
        width: 35%;
        top: 1.8rem;
        left: 18.5%;
        font-style: italic;
        text-align: center;
        p {
          margin-bottom: 0.05rem;
          font-size: 0.25rem;
          letter-spacing: 0.01rem;
          font-weight: bold;
          color: #fff;
          font-family: Impact;
          background-image: -webkit-linear-gradient(bottom, #f9fbff, #57d2ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        span:nth-child(1) {
          font-size: 0.18rem;
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
      #left-top-echart {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
    .center-top {
      position: absolute;
      top: 0;
      right: 0.1rem;
      z-index: 9;
      height: 3.4rem;
      width: 3.47rem;
      .rt-item-c {
        height: 2.4rem;
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
            height: 1.71rem;
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
              top: 0rem;
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
              .bar-right {
                background: url("../../../assets/city-management/city-facilities/right-triangle.png")
                  no-repeat center;
                background-size: 0.09rem 0.1rem;
                background-position-x: 0.7rem;
              }
              .bar-left {
                background: url("../../../assets/city-management/city-facilities/left-triangle.png")
                  no-repeat center;
                background-size: 0.09rem 0.1rem;
                background-position-x: 0rem;
                span {
                  padding: 0 0 0 0.1rem;
                }
              }
              .bar-up {
                background: url("../../../assets/city-management/city-facilities/up.png")
                  no-repeat center;
                background-size: 0.16rem 0.11rem;
                background-position-x: 0.05rem;
                span {
                  margin-left: 0.18rem;
                }
              }
              .bar-down {
                background: url("../../../assets/city-management/city-facilities/down.png")
                  no-repeat center;
                background-size: 0.16rem 0.11rem;
                background-position-x: 0.06rem;
                background-position-y: 0.2rem;
                span {
                  margin-left: 0.3rem;
                  font-size: 0.15rem;
                  display: inline-block;
                  margin-top: 0.15rem;
                }
              }
            }
            &:nth-child(1) {
              .rt-item-bar-real {
                height: 65%;
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
                top: 0.3rem;
              }
            }
            &:nth-child(2) {
              .rt-item-bar-real {
                height: 90%;
                background: url("../../../assets/city-management/market-supervision/market-supervision/bar-yellow.png")
                  no-repeat center;
                background-size: 100% 100%;
              }
              .bar-down {
                background: url("../../../assets/city-management/city-facilities/down.png")
                  no-repeat center;
                background-size: 0.16rem 0.11rem;
                background-position-x: 0.06rem;
                background-position-y: 0.05rem;
                span {
                  margin-left: 0.3rem;
                  font-size: 0.15rem;
                  display: inline-block;
                  margin-top: 0.15rem;
                }
              }
              .rt-item-line {
                position: absolute;
                top: 0.05rem;
                left: 0.15rem;
                width: 0.02rem;
                height: 40%;
                background: url("../../../assets/city-management/market-supervision/market-supervision/line-yellow.png")
                  no-repeat center;
                background-size: 100% 100%;
              }
              .rt-item-text-box {
                top: -0.3rem;
                left: -1.4rem;
                width: 2.8rem;
                text-align: center;
                .bar-text {
                  margin-right: 0.06rem;
                }
              }
            }
            &:nth-child(3) {
              .rt-item-bar-real {
                height: 70%;
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
                top: 0.3rem;
                left: 0.4rem;
                width: 1rem;
                .bar-text {
                  margin-right: 0.06rem;
                }
              }
            }
            .bar-num {
              padding-left: 0.1rem;
            }
          }
        }
        .circle-bottom {
          position: absolute;
          top: 1.45rem;
          left: 0.97rem;
          width: 1.6rem;
          height: 0.43rem;
          background: url("../../../assets/city-management/market-supervision/market-supervision/circle-bottom.png")
            no-repeat center;
          background-size: 100%;
          z-index: 1;
        }
      }
    }
  }
  .main-left-center {
    position: absolute;
    left: 0.29rem;
    top: 3.94rem;
    z-index: 9;
    width: 7.02rem;
    height: 3.82rem;
    background: url("../../../assets/city-management/city-facilities/left-center.png")
      center no-repeat;
    background-size: 100%;
    .left-center-echarts {
      height: 2.5rem;
      width: 6.5rem;
      position: absolute;
      left: 0.15rem;
      #responsibleBody {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-left: 0.4rem;
      }
    }
  }
  .main-left-bottom {
    position: absolute;
    left: 0.29rem;
    top: 7.5rem;
    z-index: 9;
    width: 7.02rem;
    height: 3.22rem;
    background: url("../../../assets/city-management/city-facilities/left-bottom.png")
      center no-repeat;
    background-size: 100%;
    color: rgba(223, 226, 251, 1);
    .main-left-bottom-box {
      display: flex;
      justify-content: space-around;
      margin-left: 0.46rem;
      width: 90%;
      .left-bottom-echarts-01,
      .left-bottom-echarts-02,
      .left-bottom-echarts-03 {
        flex: 1;
        height: 1.8rem;
      }
    }
  }
  .main-right-top {
    position: absolute;
    right: 0.32rem;
    top: 0.2rem;
    z-index: 9;
    width: 7.02rem;
    height: 3.82rem;
    background: url("../../../assets/city-management/city-facilities/left-center.png")
      center no-repeat;
    background-size: 100%;
    color: rgba(223, 226, 251, 1);
    .right-notice-box {
      position: absolute;
      right: 0.5rem;
      top: 0.42rem;
      background: url("../../../assets/city-management/city-facilities/notice.png")
        no-repeat;
      background-size: 0.27rem 0.28rem;
      background-position: left center;
      .notice-title {
        margin-left: 0.3rem;
        height: 0.35rem;
        font-size: 0.18rem;
        span:first-child {
          font-size: 0.24rem;
          font-family: Impact;
          font-weight: bold;
          font-style: italic;
          color: rgba(252, 230, 47, 1);
          margin-right: 0.05rem;
        }
        span:last-child {
          font-size: 0.18rem;
          font-family: Impact;
          font-weight: bold;
          font-style: italic;
        }
      }
    }
    .no-info {
      position: absolute;
      top: 2rem;
      width: 100%;
      font-size: 0.16rem;
      text-align: center;
    }
    .right-bottom {
      position: absolute;
      width: 6rem;
      height: 0.48rem;
      left: 0.59rem;
      top: 1rem;
      background: rgba(0, 102, 181, 0.7);
      display: flex;
      flex-direction: row;
      color: #ffffff;
      font-size: 0.15rem;
      line-height: 0.45rem;
      span:first-child {
        width: 80%;
        height: 0.45rem;
        padding-left: 0.18rem;
        box-sizing: border-box;
      }
      span:last-child {
        width: 20%;
        height: 0.45rem;
        padding-left: 0.18rem;
        box-sizing: border-box;
      }
    }
    .list-box {
      position: absolute;
      width: 6rem;
      left: 0.59rem;
      top: 1.49rem;
      height: 1.6rem;
      overflow: hidden;
      .list-inner-box {
        width: 100%;
        position: absolute;
      }
      .list-box-item {
        width: 6rem;
        height: 0.4rem;
        display: flex;
        flex-direction: row;
        color: #ffffff;
        font-size: 0.15rem;
        line-height: 0.48rem;
        span:first-child {
          width: 80%;
          height: 0.4rem;
          padding-left: 0.18rem;
          box-sizing: border-box;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        span:last-child {
          width: 20%;
          height: 0.4rem;
          padding-left: 0.18rem;
          box-sizing: border-box;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .selected {
        background: rgba(7, 69, 182, 0.3);
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
        top: -0.4rem;
      }
    }
  }
  .main-right-center {
    position: absolute;
    right: 0.32rem;
    top: 3.74rem;
    z-index: 9;
    width: 7.02rem;
    height: 3.57rem;
    background: url("../../../assets/city-management/city-facilities/right-center.png")
      center no-repeat;
    background-size: 100%;
    color: rgba(223, 226, 251, 1);
    .center-notice-box {
      position: absolute;
      right: 0.5rem;
      top: 0.48rem;
      background: url("../../../assets/city-management/city-facilities/police.png")
        no-repeat;
      background-size: 0.27rem 0.28rem;
      background-position: left center;
      .notice-title {
        margin-left: 0.3rem;
        height: 0.35rem;
        font-size: 0.18rem;
        > span:first-child {
          font-size: 0.24rem;
          font-family: Impact;
          font-weight: bold;
          font-style: italic;
          color: rgba(252, 230, 47, 1);
          margin-right: 0.05rem;
        }
        > span:last-child {
          font-size: 0.18rem;
          font-family: Impact;
          font-weight: bold;
          font-style: italic;
        }
      }
    }
    .right-center-echart {
      width: 100%;
      height: 2.5rem;
    }
  }
  .main-right-bottom {
    position: absolute;
    right: 0.32rem;
    top: 7.1rem;
    z-index: 9;
    width: 7.02rem;
    height: 3.57rem;
    background: url("../../../assets/city-management/city-facilities/right-center.png")
      center no-repeat;
    background-size: 100%;
    color: rgba(223, 226, 251, 1);
    margin-left: 0.3rem;
    .con {
      width: 90%;
      margin: 0 auto;
      padding: 0 0.1rem 0.5rem 0.1rem;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .info {
        width: 2.6rem;
        // margin-left: 0.5rem;
        margin-top: 0.15rem;
        .title {
          font-size: 0.2rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(95, 222, 254, 1);
          line-height: 2;
          text-align: center;
        }
        .list {
          width: 100%;
          height: 1.6rem;
          background: url("../../../assets/city-management/city-facilities/rubish-bg.png");
          background-size: 100% 100%;
          display: flex;
          // align-items: center;
          flex-wrap: wrap;
          justify-content: space-between;
          .item {
            width: 33.3%;
            padding-top: 0.15rem;
            box-sizing: border-box;
            position: relative;
            p {
              text-align: center;
            }
            p:nth-child(1) {
              font-size: 0.16rem;
              font-family: Source Han Sans CN;
              font-weight: 500;
              color: rgba(122, 214, 255, 0.8);
            }
            p:nth-child(2) {
              font-size: 0.24rem;
              font-family: Impact;
              font-weight: 400;
              font-style: italic;
              color: rgba(255, 255, 255, 1);
              text-shadow: 0px 3px 3px rgba(4, 4, 4, 0.15);
              background: linear-gradient(
                0deg,
                rgba(139, 143, 151, 1) 0%,
                rgba(255, 255, 255, 1) 53.4423828125%,
                rgba(139, 143, 151, 1) 100%
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              samll {
                font-size: 0.14rem;
                font-family: Heiti SC;
                font-weight: bold;
                font-style: italic;
                color: rgba(255, 255, 255, 1);
                background: linear-gradient(
                  0deg,
                  rgba(255, 255, 255, 1) 0%,
                  rgba(255, 255, 255, 1) 53.4423828125%,
                  rgba(255, 255, 255, 1) 100%
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }
          }
        }
      }
      .right {
        .desc {
          font-size: 0.16rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(239, 248, 254, 1);
          line-height: 0.24rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          span {
            font-size: 0.2rem;
            font-family: Impact;
            font-weight: bold;
            font-style: italic;
            color: rgba(252, 230, 47, 1);
          }
        }
        .right-bottom-echart {
          height: 2.2rem;
          width: 3.5rem;
        }
      }
    }
  }
  .lengend-panle {
    position: absolute;
    right: 8.1rem;
    bottom: 0.5rem;
    z-index: 10;
    &.changeH {
      height: 3rem;
    }
    .change-box {
      right: 0.8rem !important;
    }
    .lengend-right {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      color: #9be9ff;
      font-size: 0.16rem;
      font-style: italic;
      justify-content: flex-start;
      padding-top: 0.1rem;
      .lengend-title {
        width: 85%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .distance-scroll-box {
          width: 1.4rem;
          margin-left: 0.13rem;
          margin-top: -0.02rem;
        }
        .lengend-title-name {
          margin-top: 0.2rem;
        }

        .lengend-title-right {
          display: flex;
          flex-direction: row;
          &>span {
            height: 0.41rem;
            line-height: 0.6rem;
            margin-left: 0.13rem;
          }
           .scoped {
            width: 0.30rem;
            height: 0.18rem;
            border-radius: 0.09rem;
            margin-top: 0.2rem;
            margin-left: 0.13rem;
            position: relative;
            .scoped-switch {
              position: absolute;
              right: 0;
              top: 0;
              width: 0.18rem;
              height: 0.18rem;
              border-radius: 0.09rem;
              background: #FFFFFF;
              cursor: pointer;
            }
            .on {
              left: 0;
            }
            .scoped-inner {
              position: absolute;
              left: 0;
              top: 0;
              width: 0.30rem;
              height: 0.18rem;
              border-radius: 0.09rem;
              background:#666666;
              cursor: pointer;
            }
            .scoped-inner-02 {
              position: absolute;
              left: 0;
              top: 0;
              width: 0.30rem;
              height: 0.18rem;
              border-radius: 0.09rem;
              background:#FF7E00;
              cursor: pointer;
            }
        }
        }
      }
      .lenged-item-box {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
      }
      .lenged-item {
        width: 0.64rem;
        margin: 0.1rem;
        text-align: center;
        position: relative;
        cursor: pointer;
        img {
          width: 0.43rem;
          height: 0.43rem;
        }
        .check {
          position: absolute;
          right: 0;
          top: 0;
          z-index: 12;
        }
        .sy-check {
          display: block;
          width: 0.16rem;
          height: 0.16rem;
          line-height: 0.16rem;
          position: absolute;
          border: 0.01rem solid #9be9ff;
          top: 0.06rem;
          left: 0.06rem;

        }
        .sy-checked:before {
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
  // .lengend-right {
  //   padding: 0.1rem;
  //   box-sizing: border-box;
  // }
  .little-bar-box {
    position: absolute;
    right: 7.22rem;
    top: 0.85rem;
    z-index: 9;
    .little-bar {
      width: 1.84rem;
      font-size: 0.18rem;
      height: 0.54rem;
      padding-bottom: 0.1rem;
      padding-right: 0.06rem;
      cursor: pointer;
      margin-left: auto;
      font-family: Source Han Sans CN;
      font-weight: 500;
      font-style: italic;
      color: rgba(155, 233, 255, 1);
      text-align: center;
      background: url("../../../assets/city-management/city-facilities/little-kuang-01.png")
        center no-repeat;
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .img1 {
        width: 0.09rem;
        height: 0.15rem;
        position: absolute;
        right: 0.22rem;
        top: 0.22rem;
      }
      .img2 {
        width: 0.33rem;
        height: 0.31rem;
        margin-left: 0.18rem;
        margin-top: 0.05rem;
      }
      .img3 {
        width: 0.33rem;
        height: 0.31rem;
        margin-left: 0.18rem;
        margin-top: 0.05rem;
      }
      .img4 {
        width: 0.2rem;
        height: 0.16rem;
      }
      .img5 {
        width: 0.05rem;
        height: 0.16rem;
        background: #83ebff;
      }
    }
    .area {
      justify-content: space-evenly;
      ul {
        position: absolute;
        top: 0.42rem;
        left: 0.1rem;
        list-style: none;
        width: 1.84rem;
        height: 4.7rem;
        padding: 0.1rem 0;
        background: url("../../../assets/city-management/city-facilities/check-kuang.png")
          center no-repeat;
        background-size: 100% 100%;
        color: rgba(255, 255, 255, 1);
        li {
          height: 0.41rem;
          line-height: 0.41rem;
          width: 1.1rem;
          margin-left: 0.24rem;
          &:hover {
            color: rgba(155, 233, 255, 1);
          }
        }
        li:not(:last-child) {
          border-bottom: 0.01rem dashed rgba(69, 143, 239, 0.5);
        }
      }
    }
    .go {
      transform: rotate(90deg);
      transition: all 0.5s;
    }
    .back {
      transition: all 0.5s;
    }
    .little-bar-01 {
      width: 1.86rem;
      background: url("../../../assets/city-management/city-facilities/little-kuang-02.png")
        center no-repeat;
      background-size: 100% 100%;
    }
  }
  .viedo-box {
    position: absolute;
    left: 16.5rem;
    top: 2.5rem;
    z-index: 102;
  }
  .center-title {
    padding: 0.2rem 0 0 0.3rem;
    font-size: 0.22rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
  .notice-box {
    width: 3.57rem;
    height: 2.6rem;
    position: absolute;
    top: 3rem;
    box-sizing: border-box;
    padding: 0.2rem;
    right: 12rem;
    z-index: 99;
    background: url("../../../assets/city-management/city-facilities/notice-bg.png")
      center no-repeat;
    background-size: 100% 100%;
    .title {
      font-size: 0.21rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
    }
    .content {
      p {
        font-size: 0.18rem;
        margin-top: 0.16rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: rgba(223, 226, 251, 1);
        display: flex;
        span {
          font-size: 0.2rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          font-style: italic;
          color: rgba(249, 230, 89, 1);
          width: 2.2rem;
        }
      }
    }
  }
  .left-list {
    position: absolute;
    left: 7.3rem;
    top: 0.7rem;
    z-index: 1000;
    .left-list-li {
      margin-top: 0.1rem;
      .name {
        padding: 0rem 0.12rem 0.03rem 0.06rem;
        height: 0.25rem;
        line-height: 0.25rem;
        text-align: center;
        color: #ffffff;
        font-size: 0.2rem;
        font-style: italic;
        font-weight: bold;
        -webkit-transform: perspective(1rem) rotateX(-15deg);
        transform: perspective(1rem) rotateX(-15deg);
        -webkit-transform-origin: left;
        transform-origin: left;
        background: #d5602c;
      }
      .number {
        font-size: 0.4rem;
        color: #ffffff;
        font-weight: bold;
        font-style: italic;
        span {
          font-size: 0.2rem;
        }
      }
    }
  }
  .video-container {
    width: 9.77rem;
    height: 5.67rem;
    background: url("../../../assets/common/video-bg.png") no-repeat;
    background-size: 100% 100%;
    z-index: 100;
    .close {
      position: absolute;
      top: -0.2rem;
      right: -0.2rem;
      z-index: 101;
      img {
        width: 0.45rem;
        height: 0.46rem;
      }
    }
    .video-left {
      position: absolute;
      left: 0;
      top: 0;
      width: 2.9rem;
      height: 100%;
      .title {
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        font-size: 0.21rem;
        color: #ffffff;
      }
      .input-box {
        position: absolute;
        width: 2.2rem;
        height: 0.35rem;
        top: 0.9rem;
        left: 0.5rem;
        display: flex;
        flex-direction: row;
        input {
          width: 1.8rem;
          border: 0.01rem solid #48aaf4;
          background: rgba(5, 58, 99, 0.28);
          font-size: 0.16rem;
          color: #ffffff;
          padding-left: 0.1rem;
          box-sizing: border-box;
        }
        .serach-button {
          width: 0.4rem;
          height: 0.35rem;
          background: #00a6ea;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          img {
            width: 0.2rem;
            height: 0.2rem;
          }
        }
      }
      .tree-box {
        position: absolute;
        left: 0.4rem;
        top: 1.5rem;
        width: 2.3rem;
        height: 4rem;
        overflow: auto;
      }
    }
    .video-right {
      position: absolute;
      width: 6.3rem;
      height: 4.7rem;
      right: 0.5rem;
      top: 0.8rem;
      .video-list {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        overflow: hidden;
        .video-inner-list {
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .video-item {
          position: absolute;
          width: 100%;
          height: 100%;
          padding: 0.05rem;
          box-sizing: border-box;
        }
        .video-layer {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 100;
        }
        .three {
          position: relative;
          width: 1.8rem;
          height: 1.33rem;
          margin: 0.05rem 0.08rem;
        }
        .two {
          position: relative;
          width: 2.9rem;
          height: 2rem;
          margin: 0.15rem 0.08rem;
        }
        .one {
          position: relative;
          width: 5.8rem;
          height: 4rem;
          margin: 0.3rem 0.2rem;
        }
        .select-video {
          border: 0.03rem solid #48aaf4;
        }
      }
    }
    .select-box {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      .select-item {
        width: 0.48rem;
        height: 0.22rem;
        background: #0b2d6d;
        font-size: 0.16rem;
        color: #ffffff;
        margin: 0 0.1rem;
        text-align: center;
        border: 0.01rem solid #48aaf4;
      }
      .selected {
        background: #00a6ea;
      }
    }
  }
  .maker-component {
    position: absolute;
    left: 50%;
    top: 20%;
    z-index: 5;
    .three-box {
      position: absolute;
      .maker-3d-img {
        position: absolute;
        width: 0.4rem;
        left: 0.28rem;
        top: 0.23rem;
      }
      .maker-3d-box-img {
        width: 0.94rem;
        left: 0;
        top: 0;
      }
    }
    .maker-panle {
      position: absolute;
      box-sizing: border-box;
      padding: 0.2rem;
      left: 0.5rem;
      top: -1.79rem;
      z-index: 99;
      background: url("../../../assets/city-management/city-facilities/notice-bg.png")
        center no-repeat;
      background-size: 100% 100%;
      .title {
        font-size: 0.21rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #ffffff;
      }
      .content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.15rem;
        p {
          font-size: 0.18rem;
          margin-top: 0.16rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: rgba(223, 226, 251, 1);
          display: flex;
          label {
            width: 1rem;
          }
          span {
            font-size: 0.2rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            font-style: italic;
            color: rgba(249, 230, 89, 1);
            width: 2.2rem;
          }
        }
        .right-panle {
          width: 2.45rem;
          padding: 0.2rem;
          .video-box {
            width: 2rem;
            height: 1.13rem;
            border: 0.01rem solid red;
            margin: auto;
          }
        }
      }
      .water-info {
        padding: 0.1rem 0;
        box-sizing: border-box;
        border-top: 0.01rem dashed #666666;
        p {
          color: #ffffff;
          font-size: 0.18rem;
          font-weight: bold;
          letter-spacing: 0.01rem;
        }
      }
      .water-info-title {
        height: 0.4rem;
        background: rgba(34, 80, 180, 1);
        opacity: 0.78;
        margin-top: 0.15rem;
        display: flex;
        flex-direction: row;
        color: #ffffff;
        font-size: 0.17rem;
        align-items: center;
        .title-item:first-of-type {
          width: 40%;
          padding-left: 0.2rem;
          box-sizing: border-box;
        }
        .title-item:nth-of-type(2) {
          width: 40%;
        }
        .title-item:nth-of-type(3) {
          flex: 1;
        }
      }
      .water-info-list {
        height: 0.4rem;
        display: flex;
        flex-direction: row;
        color: #ffffff;
        font-size: 0.17rem;
        align-items: center;
        .title-item:first-of-type {
          width: 40%;
          padding-left: 0.2rem;
          box-sizing: border-box;
        }
        .title-item:nth-of-type(2) {
          width: 40%;
          color: rgba(239, 132, 50, 1);
        }
        .title-item:nth-of-type(3) {
          flex: 1;
        }
      }
    }
  }
  .video-maker {
    position: absolute;
    z-index: 8;
    border: 1px solid red;
    .three-box {
      position: absolute;
      .maker-3d-img {
        position: absolute;
        width: 0.4rem;
        left: 0.28rem;
        top: 0.23rem;
      }
      .maker-3d-box-img {
        width: 0.94rem;
        left: 0;
        top: 0;
      }
    }
    .maker-panle {
      position: absolute;
      box-sizing: border-box;
      padding: 0.2rem;
      left: 1rem;
      top: 0.1rem;
      z-index: 99;
      width: 3.5rem;
      height: 2.5rem;
      background: url("../../../assets/city-management/city-facilities/notice-bg.png")
        center no-repeat;
      background-size: 100% 100%;
      z-index: -1;
      .title {
        font-size: 0.21rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #ffffff;
      }
      .content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.15rem;
      }
    }
  }
  .enforceLaw {
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: 0;
    left: 0;
    background: url('../../../assets/city-management/city-facilities/car.png');
    background-size: 100% 100%;
    z-index: 99;
  }
  .garbage {
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: 0;
    left: 0;
    background: red;
    z-index: 99;
  }
  .body-item-box {
    margin-left: 3%;
    margin-right: 2%;
    margin-top: 0.23rem;
    width: 45%;
  }
  .body-item-title {
    font-size: 0.18rem;
    color: #ffffff;
    letter-spacing: 0.01rem;
    font-weight: 300;
  }
  .body-item-bottom {
    height: 0.24rem;
    line-height: 0.24rem;
    margin-top: 0;
    display: flex;
    flex-direction: row;
  }
  .body-item-bottom-line {
    float: left;
    height: 100%;
    width: 80%;
  }
  .body-item-line-box {
    width: 0.08rem;
    height: 0.14rem;
    float: left;
    margin-right: 0.02rem;
    margin-top: 0.08rem;
    background: rgba(65, 158, 255, 0.3);
  }
  .temp {
    background-color: #4d8eeb;
  }

  .body-item-percent {
    flex: 1;
    text-align: left;
    margin-top: 0.04rem;
    text-align: left;
    float: right;
    font-family: PingFangSC-Regular;
    font-size: 0.15rem;
    color: #36d6fe;
  }
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
/*.hover-div{*/
/*}*/
</style>
