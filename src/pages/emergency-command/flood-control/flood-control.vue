<!--
 @Descripttion:
 * @Author: renting
 * @Date: 2020-03-10
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-06-05 10:58:10
 -->
<template>
  <div class="command-container">
    <div>
      <!--<div class="header-bg">应急指挥</div>-->
      <head-componen name="防洪应急专题" :zIndex="1000"></head-componen>
      <div class="g-menu-box">
        <main-list></main-list>
      </div>
      <div class="main-left-top">
        <div class="g-title g-title-btn">
          <span>市防汛指挥部</span>
          <div class="title-select" style="z-index: 9;"  @click="showControl = true">
            <div class="select">
              <span>查看明细</span>
              <img src="../../../assets/emergency-command/emergency-command-chart/detail.png">
            </div>
          </div>
        </div>
        <div class="left-top-echart">
          <div class="phone-detail-box">
            <div class="phone-detail-wrapper">
              <div class="phone-detail-item">
                <span class="phone-detail-dot"></span>
                <label class="phone-detail-label">办公室负责人：</label>
                <span class="phone-detail-value">{{topLeft.fx01001}}</span>
              </div>
              <div class="phone-detail-item">
                <span class="phone-detail-dot"></span>
                <label class="phone-detail-label">电话：</label>
                <span class="phone-detail-value">{{topLeft.fx01002}}</span>
              </div>
              <img
                @click="handleCall(topLeft.fx01002, topLeft.fx01001)"
                class="phone-icon" src="../../../assets/emergency-command/emergency-command-chart/icon-tel.png">
              <img
                @click="handleNote(topLeft.fx01002, topLeft.fx01001)"
                class="phone-icon1"
                src="../../../assets/emergency-command/emergency-command-chart/message-d.png">
            </div>
            <div class="phone-detail-wrapper">
              <div class="phone-detail-item">
                <span class="phone-detail-dot"></span>
                <label class="phone-detail-label">具体经办人：</label>
                <span class="phone-detail-value">{{topLeft.fx01003}}</span>
              </div>
              <div class="phone-detail-item">
                <span class="phone-detail-dot"></span>
                <label class="phone-detail-label">电话：</label>
                <span class="phone-detail-value">{{topLeft.fx01004}}</span>
              </div>
              <img
                class="phone-icon"
                @click="handleCall(topLeft.fx01004, topLeft.fx01003)"
                src="../../../assets/emergency-command/emergency-command-chart/icon-tel.png">
              <img
                @click="handleNote(topLeft.fx01004, topLeft.fx01003)"
                class="phone-icon1"
                src="../../../assets/emergency-command/emergency-command-chart/message-d.png">
            </div>
          </div>
        </div>
        <p class="g-title g-title-1">值班信息</p>
        <div class="room-phone">
          <div v-for="(item, index) in dutyList" :key="index">
            <p class="area-title">{{item.fx04002}}</p>
            <div class="room-phone-content">
              <div>
                <span>{{item.fx04003}}</span>
                <img
                @click="handleCall(item.fx04003, item.fx04002)"
                class="phone-icon" src="../../../assets/emergency-command/emergency-command-chart/icon-tel.png"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-right-center">
        <div class="g-title g-title-btn">
          <span>预警信息</span>
          <div class="title-select" style="z-index: 9;" @click="isShowNotice = true">
            <div class="select">
              <span>查看更多</span>
              <img src="../../../assets/emergency-command/emergency-command-chart/more.png">
            </div>
          </div>
        </div>
        <div class="warning-info-box" @click="handleWarn(true)">
          <ul class="warning-info-list" ref="scroll2" :class="{anim:animate2 === true}" @mouseenter="enter(2)" @mouseleave="leave(2)">
            <li class="warning-info-item" ref="scrollLi2" v-for="(item, index) in warningList" :key="index">
              <div class="warning-list-box">
                <div class="warning-text">
                  <div class="warning-type">
                    <img src="../../../assets/emergency-command/emergency-command-chart/bg-selected.png"/>
                    <span :style="{color: item.zh06005 === '通知' ? '#79F5D3' : '#FFF116'}">{{item.zh06001}}</span>
                  </div>
                  <div class="warning-from">{{item.zh06002}}</div>
                  <div class="warning-time">{{item.zh06003}}</div>
                </div>
                <p>{{item.zh06004.length > 110 ? item.zh06004 + '...' : item.zh06004}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-left-bottom">
        <div class="g-title g-title-btn">
          <span>转移安置能力<span class="global-data-title">（截至2019年）</span></span>
          <div class="title-select" style="z-index: 9;" @click="handleMoveDetail('movePoints')">
            <div class="select">
              <span>查看详情</span>
              <img src="../../../assets/emergency-command/emergency-command-chart/detail.png">
            </div>
          </div>
        </div>
        <div id="main-left-bottom-echart" class="main-left-bottom-echart"></div>
      </div>
      <div class="main-right-top">
        <div class="g-title g-title-btn">
          <span>点位降水统计</span>
          <div class="title-select" style="z-index: 9;" @click="handleMoveDetail1('waterPoints')">
            <div class="select">
              <span>查看明细</span>
              <img src="../../../assets/emergency-command/emergency-command-chart/detail.png">
            </div>
          </div>
        </div>
        <div class="filter-water">
          <div
            v-for="(item, index) in waterList"
            :key="index"
            @click="handleWater(index,item.type)"
            :class="item.active? 'water-active':'water-normal'">{{item.name}}</div>
        </div>
        <div class="site-monitor-box" id="water-monitor" v-if="waterPoints.length"></div>
        <div class="site-monitor-content" v-else :key="1">无降水</div>
      </div>
      <div class="main-left-center">
        <div class="g-title g-title-btn">
          <span>主要河流水位情况</span>
          <div class="title-select" style="z-index: 9;" v-if="riverLists.length">
            <div class="select" @click="naturalShow = !naturalShow">
              <span>{{riverLists[activeSelect].fx05003}}</span>
              <ul v-if="naturalShow">
                <li
                  v-for="(item, index) in riverLists"
                  :key="index"
                  @click.stop="handleChoose(index, item.fx05003)"
                  :class="index === activeSelect ? 'active' : 'normal'"
                >{{item.fx05003}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="filter-water">
          <div
            v-for="(item, index) in riverStation"
            :key="index"
            @click="handleMainWater(index)"
            :class="item.active? 'water-active':'water-normal'">{{item.fx05002}}</div>
        </div>
        <div class="chart-main-water" id="main-water"></div>
      </div>
      <div class="main-right-bottom">
        <div class="g-title g-title-btn">
          <span>内涝点位监测情况</span>
          <div class="title-select" style="z-index: 9;" @click="handleMoveDetail('nlVideos', 'nlList')">
            <div class="select">
              <span>查看明细</span>
              <img src="../../../assets/emergency-command/emergency-command-chart/detail.png">
            </div>
          </div>
        </div>
        <div class="video-content">
          <div @click="handleMoveNl"><img class="v-left" src="../../../assets/common/right-video.png"></div>
          <div class="v-titles">
            <div
              @click="handleActiveVideo(index)"
              v-for="(item, index) in nlList"
              :key="index"
              :class="item.active ? 'video-active' : 'video-normal'"
              v-show="index >=(countNum-1)*4 && index<countNum*4">{{item.jc02003}}</div>
          </div>
          <div @click="handleMoveNl(true)"><img class="v-right" src="../../../assets/common/right-video.png"></div>
        </div>
        <div class="video-box" v-if="reflashVideo">
          <div class="video-title-1" v-if="nlVideosIds[0]">
            <span>{{nlVideosIds[0].fx06003}}</span>
            <img src="@/assets/entry/openBig.png" @click='openBigVideo(0)'>
          </div>
          <div class="video-title-2" v-if="nlVideosIds[1]">
            <span>{{nlVideosIds[1].fx06003}}</span>
            <img src="@/assets/entry/openBig.png" @click='openBigVideo(1)'>
          </div>
          <div id="video-nl-1"></div>
          <div id="video-nl-2"></div>
        </div>
      </div>
      <div class="main-message" id="main-message-box">
        <p>水位值域</p>
        <div><img src="../../../assets/emergency-command/emergency-command-chart/icon5.png"><span>大于-0.25m</span></div>
        <div><img src="../../../assets/emergency-command/emergency-command-chart/icon1.png"><span>-0.5~-0.25m</span></div>
        <div><img src="../../../assets/emergency-command/emergency-command-chart/icon2.png"><span>-1~-0.5m</span></div>
        <div><img src="../../../assets/emergency-command/emergency-command-chart/icon3.png"><span>-2~-1m</span></div>
        <div><img src="../../../assets/emergency-command/emergency-command-chart/icon4.png"><span>小于-2m</span></div>
      </div>
      <div class="main-message-1" v-show="hotId">
        <p>降水值域</p>
        <div><span class="coco"></span><span>0 ~ 40</span></div>
        <div><span class="coco"></span><span>40 ~ 80</span></div>
        <div><span class="coco"></span><span>80 ~ 120</span></div>
        <div><span class="coco"></span><span>120 ~ 160</span></div>
        <div><span class="coco"></span><span>160 ~ 200</span></div>
      </div>
      <!-- 灾难预警详情 -->
      <div class="accident-wrapper" v-if="isSelectEmergency">
        <div class="accident-item accident-detail-wrapper" v-if="!isDetailSmaller">
          <div class="accident-small" @click="isDetailSmaller = true"></div>
          <div class="accident-close" @click="onCloseAccident"></div>
          <div class="accident-item-outer-box">
            <div class="accident-item-scroll-box">
              <p class="accident-title">{{eventDetail.zh09001}}-{{eventDetail.zh09002_desc}}</p>
              <div class="accident-content-box">
                <div class="accident-content-item">
                  <span class="item-dot"></span>
                  <label class="accident-content-item-label">事故等级：</label>
                  <span  class="accident-content-item-value">{{eventDetail.zh09003_desc}}({{eventDetail.zh09003}})</span>
                </div>
                <div class="accident-content-item">
                  <span class="item-dot"></span>
                  <label class="accident-content-item-label">联系方式：</label>
                  <span  class="accident-content-item-value">{{eventDetail.zh09006}}</span>
                </div>
                <div class="accident-content-item">
                  <span class="item-dot"></span>
                  <label class="accident-content-item-label">上报单位：</label>
                  <span  class="accident-content-item-value">{{eventDetail.zh09004}}</span>
                </div>
                <div class="accident-content-item">
                  <span class="item-dot"></span>
                  <label class="accident-content-item-label">上报时间：</label>
                  <span  class="accident-content-item-value">{{timeFormat(eventDetail.zh09007)}}</span>
                </div>
                <div class="accident-content-item">
                  <span class="item-dot"></span>
                  <label class="accident-content-item-label">带班领导：</label>
                  <span  class="accident-content-item-value">{{eventDetail.zh09005}}</span>
                </div>
                <div class="accident-content-item">
                  <span class="item-dot"></span>
                  <label class="accident-content-item-label">事发时间：</label>
                  <span  class="accident-content-item-value">{{timeFormat(eventDetail.zh09008)}}</span>
                </div>
                <div class="accident-content-item accident-content-item-one">
                  <span class="item-dot"></span>
                  <label class="accident-content-item-label">事发地址：</label>
                  <span  class="accident-content-item-value">{{eventDetail.zh09009}}</span>
                </div>
                <div class="accident-content-item accident-content-item-one">
                  <span class="item-dot"></span>
                  <label class="accident-content-item-label">事故摘要：</label>
                  <span  class="accident-content-item-value">{{eventDetail.zh09010}}</span>
                </div>
                <div class="accident-content-item accident-content-item-one">
                  <span class="item-dot"></span>
                  <label class="accident-content-item-label">事故内容：</label>
                  <span  class="accident-content-item-value">{{eventDetail.zh09011}}</span>
                </div>
                <div class="accident-content-item">
                  <span class="item-dot"></span>
                  <label class="accident-content-item-label">事件状态：</label>
                  <span  class="accident-content-item-value">{{eventDetail.zh09012_desc}}</span>
                </div>
                <div class="accident-content-item">
                  <span class="item-dot"></span>
                  <label class="accident-content-item-label">处置部门：</label>
                  <span  class="accident-content-item-value">{{eventDetail.zh09013}}</span>
                </div>
                <div class="accident-content-item">
                  <span class="item-dot"></span>
                  <label class="accident-content-item-label">提报状态：</label>
                  <span  class="accident-content-item-value">{{eventDetail.zh09014}}</span>
                </div>
                <div class="accident-content-item">
                  <span class="item-dot"></span>
                  <label class="accident-content-item-label">提报时间：</label>
                  <span  class="accident-content-item-value">{{timeFormat(eventDetail.zh09015)}}</span>
                </div>
                <div class="accident-content-item accident-content-item-one">
                  <span class="item-dot"></span>
                  <label class="accident-content-item-label">事件处置结果：</label>
                  <span  class="accident-content-item-value">{{eventDetail.zh09016}}</span>
                </div>
                <div class="accident-content-item accident-content-item-one">
                  <span class="item-dot"></span>
                  <label class="accident-content-item-label">事件指示：</label>
                  <span  class="accident-content-item-value">{{eventDetail.zh09017}}</span>
                </div>
                <div class="accident-content-item accident-content-item-one">
                  <span class="item-dot"></span>
                  <label class="accident-content-item-label">事件指示批准要求：</label>
                  <span  class="accident-content-item-value">{{eventDetail.zh09017}}</span>
                </div>
                <div class="accident-content-item accident-content-item-one">
                  <span class="item-dot"></span>
                  <label class="accident-content-item-label">响应等级：</label>
                  <span  class="accident-content-item-value">Ⅲ级防汛应急响应{{eventDetail.zh09021}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accident-item-small" v-show="isDetailSmaller">
          <div class="accident-bigger" @click="isDetailSmaller = false"></div>
          <div class="accident-close" @click="isSelectEmergency = false"></div>
          <p class="accident-title">沙湾区汛情-自然灾害类</p>
        </div>
      </div>
    </div>
    <!--预警 / 通知-->
    <div id="warn-and-notice" v-show="isShowNotice">
      <notice-maker
        :data="warningListCopy"
        @close="isShowNotice = false"
        @showTitle="showTooltip"
        @hideTitle="hideTooltip"></notice-maker>
    </div>
    <!-- 事件makers -->
    <div class="event-position-box">
      <div
        class="makers"
        :style="{zIndex: eventDetail.id === item.id ? 9 : 8}"
        v-for="(item, index) in eventPosition"
        :id="'event-pos'+item.id"
        :key="index">
        <div class="makers-title" :title="item.name" v-show="showOutImg === 0">{{item.zh09001}}</div>
        <div class="makers-title-content" @click.stop="handelShowEventBox($event, index)">
          <img src="../../../assets/emergency-command/emergency-command-chart/event1.png">
          <img :src="eventImg[item.zh09002 - 1]">
        </div>
      </div>
    </div>
    <!-- 操作面板 -->
    <div class="natural-panel">
      <div class="user-dos" @click="panelBig = !panelBig">
        <div class="legend">图例</div>
        <div class="icon"></div>
      </div>
      <div class="operation-box-wrapper" v-show= "panelBig">
        <!-- 头部 -->
       <div class="operation-title-box">
         <div class="lengend-title-right">
           <span>范围</span>
           <div class="scoped" @click="switchFlage = !switchFlage">
             <div class="scoped-inner" v-show="!switchFlage"></div>
             <div class="scoped-inner-02" v-show="switchFlage"></div>
             <div class="scoped-switch" :class="{'on':switchFlage}"></div>
           </div>
           <div class="distance-scroll-box">
             <slider ref="slider" :min=0 :max=50 v-model="km" unit="公里" @slideValue="slideValue"></slider>
           </div>
         </div>
        </div>
        <!-- 全部资源 -->
        <div class="operation-content-box">
          <div class="operation-left-box">
            <div class="level-one-box"
                 v-for="(item, index) in operationLeftList"
                 :key="index"
                 :class="item.isSelected ? 'level-one-box-selected' : ''"
                 @click="onOperationLeftChange(index)">
              <div class="level-one-line"></div>
              <div class="level-one-text">{{item.name}}</div>
            </div>
          </div>
          <div class="operation-center-box">
            <div class="operation-classify-box">
             <span class="operation-level-two"
                v-for="(item, index) in operationLeftList[operationLeftListIndex].data"
                :key="index"
                :class="item.isSelected ? 'operation-level-two-selected' : ''"
                @click="onSelectLevelTwo(item, index)">{{operationLeftListIndex === 2 ? '':item.name}}</span>
            </div>
            <div class="operation-item-box">
              <!-- 遮挡层 -->
              <div class="mmaker" v-show="!switchFlage"></div>
              <!-- 二级菜单 -->
              <div class="operation-item-single">
                <div v-for="(items, ind) in operationLeftList[operationLeftListIndex].data[operationLevelTwoIndex]"
                     :key="ind">
                  <div class="operation-item-top">
                    <img :src="imgPath+items.icon01"/>
                    <div class="operation-check-box"
                         :class="items.isSelected ? 'operation-check-box-selected' : ''"
                         @click="onCheckBox(items, ind, 'first')"></div>
                  </div>
                  <div class="operation-item-bottom">{{items.label}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 大江大河Maker -->
    <div class="river-makers-box">
      <div
          class="makers"
          :id="item.id"
          :style="{zIndex: waterIndex ===  index ? 9 : 8}"
          v-for="(item, index) in bigRiverPoints"
          :key="index">
          <!--<div class="makers-title" :title="item.name" v-show="showOutImg === 0">{{item.zh09001}}</div>-->
          <div @click.stop="handelShowEvent(index)" class="breath">
            <img
              :src="chooseImg(item.fx05006, item.sw).img">
            <img
              :src="chooseImg(item.fx05006, item.sw).outImg">
          </div>
          <div class="j-title">{{item.fx05003}} - {{item.fx05002}}</div>
          <!-- 弹窗 -->
          <div class="kkk-jkl" v-if="waterIndex === index">
            <img class="line" src="../../../assets/common/event-icon2.png">
            <div class="makers-panel-content">
              <div class="makers-panel-close"><span>{{item.fx05003}} - {{item.fx05002}}</span>
                <img @click="waterIndex = -1; showDetailVideo = false" src="../../../assets/common/closepopicon.png">
              </div>
              <div class="one"><span>水位：</span>{{item.sw ? item.sw+'m': '无'}}</div>
              <div class="one">
                <div><span>超警水位：</span><span :style="{color: chooseImg(item.fx05006, item.sw).color}">{{item.sw ? (item.sw - item.fx05006).toFixed(3)+'m' : '无'}}</span></div>
                <div><span>超保水位：</span><span :style="{color: chooseImg(item.fx05009, item.sw).color}">{{item.sw ? (item.sw - item.fx05009).toFixed(3)+'m' : '无'}}</span></div>
              </div>
              <div class="one"><span>更新时间：</span>{{item.sj}}</div>
              <div class="open-url" @click="handleOpenUrl()">四川省水情信息服务平台</div>
              <p>点位视频</p>
              <div class="video-content-box">
                <div
                  class="one-video"
                  @click="handlePlayVideo(item.id, item1.fx06004, item1.fx06003)"
                  v-for="(item1, i) in item.video"
                  :key="i">
                  <span>{{item1.fx06003}}</span>
                  <img src="../../../assets/common/play.png">
                </div>
              </div>
              <div class="outside-video" v-if="showDetailVideo">
                <img
                  class="video-close"
                  @click="showDetailVideo = false"
                  src="../../../assets/common/closepopicon.png">
                <div class="video-name">{{videoName}}</div>
                <div class="maker-panle" style="z-index: 9;" :id="'d-v-'+item.id"></div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!-- 大江大河视频点位信息 -->
    <!--<div class="video-point-box">
      <div
        class="video-maker"
        :id="item.id"
        :style="{zIndex: selectVideoId===item.id ? 9 : 8}"
        v-for="(item,index) in videoPoints"
        :key="index"
      >
        <div class="makers-title">{{item.fx06003}}</div>
        <div class="three-box" @click="openVideo(item, item.id + '-video-panle')">
          <img class="maker-3d-img" src="@/assets/common/video1-5.png" />
          <img class="maker-3d-box-img" v-show="showOutImg===1" src="@/assets/common/video-box.png" />
        </div>
        <img
          class="video-close"
          v-show="selectVideoId===item.id"
          @click="selectVideoId = ''"
          src="../../../assets/common/closepopicon.png">
        <div
          class="maker-panle"
          :id="item.id+'-video-panle'"
          v-if="selectVideoId===item.id">
        </div>
      </div>
    </div>-->
    <!-- 内涝视频点位信息 -->
    <div class="nl-point-box">
      <div
        class="video-maker"
        :id="item.id"
        v-for="(item,index) in panelData.nlVideos"
        :style="{zIndex: selectVideoId===item.id ? 9 : 8, marginTop: showOutImg===1 ? '-.8rem' : '-.4rem'}"
        :key="index"
      >
        <div class="makers-title">{{item.fx06003}}</div>
        <div class="three-box" @click="openVideo(item, item.id+'-video-panle')">
          <img class="maker-3d-img" src="@/assets/common/video1-5.png" />
          <img class="maker-3d-box-img" v-show="showOutImg===1" src="@/assets/common/video-box.png" />
          <div class="maker-title" v-show="showOutImg===1">{{item.jc13006}}</div>
        </div>
        <div class="outside-video" v-if="selectVideoId===item.id">
          <img
            class="video-close"
            @click="selectVideoId = ''"
            style="top: .23rem"
            src="../../../assets/common/closepopicon.png">
          <div class="video-name">{{item.fx06003}}</div>
          <div
            class="maker-panle"
            :id="item.id+'-video-panle'">
          </div>
        </div>
      </div>
    </div>
    <!-- 面板makers 十种类型-->
    <div
      class="panel-makers-box"
      v-for="(item, index) in panelData"
      :style="{zIndex: item.id === positionId ? 9 : 8}"
      :key="index">
      <div
        class="panel-makers"
        v-for="(val, ind) in item"
        v-if="val.lon && !val.cantShow"
        :id="val.id"
        :key="ind"
        :style="{zIndex: val.id === positionId ? 9 : 8, marginTop: showOutImg === 1 ? '-1rem' : '-.5rem'}">
        <img  @click="handleSeeDetail(val.id, val.type, val.type01)" class="inside" :src="imgPath+val.icon01">
        <img v-if="showOutImg === 1" class="outside" :src="imgPath+val.icon02">
        <div class="makers-title" v-show="val.name || val.jc02003" :title="val.name || val.jc02003">{{val.name || val.jc02003}}</div>
        <!-- 下钻窗口 -->
        <div class="down-deep-box" v-if="val.id === positionId">
          <modal-one
            v-if="makerBoxType === 'one'"
            :data="makerDetail"
            @close="handleCloseDetail">
            <div slot="modal-costom" class="modal-jc">
              <div class="costom-modal costom-two">
                <div class="costom-small" v-if=" makerType !== 'aid'">
                  <span>联系人：</span>
                  <span>{{makerDetail.baseInfo.linkman01}}</span>
                </div>
                <div class="costom-big">
                  <span>联系电话：</span>
                  <span>{{makerDetail.baseInfo.phone01}}</span>
                  <img @click="handleCall(makerDetail.baseInfo.phone01,makerDetail.baseInfo.linkman01)" class="phone-icon" src="../../../assets/emergency-command/emergency-command-chart/icon-tel.png">
                </div>
              </div>
              <div class="costom-modal costom-one">
                <span>地址：</span>
                <span>{{makerDetail.baseInfo.address}}</span>
              </div>
              <!--每个不同类型的点位的特殊信息-->
              <div class="costom-modal costom-one" v-if="makerType === 'shelter'">
                <span>可容纳人数：</span>
                <span>{{makerDetail.baseInfo.zh18003}}人</span>
              </div>
              <div class="costom-modal costom-one" v-if="makerType === 'team'">
                <span>队伍规模：</span>
                <span>{{makerDetail.baseInfo.num}}人</span>
              </div>
            </div>
          </modal-one>
          <!--<modal-two></modal-two>-->
          <modal-three
            v-if="makerBoxType === 'three'"
            :data="makerDetail"
            @close="handleCloseDetail">
            <div slot="modal-costom" class="modal-jc" v-if="makerType !== '07'">
              <div class="costom-modal costom-two">
                <div class="costom-big">
                  <span>联系人：</span>
                  <span>{{makerDetail.baseInfo.linkman01 || ''}} </span>
                </div>
                <div class="costom-small"><span>联系方式：</span><span>{{makerDetail.baseInfo.phone01}}</span></div>
              </div>
            </div>
          </modal-three>
          <modal-four
            v-if="makerBoxType === 'four'"
            :data="makerDetail"
            :type="makerType"
            @handleCall="handleCall"
            @close="handleCloseDetail"></modal-four>
          <modal-five
            v-if="makerBoxType === 'five'"
            :data="makerDetail"
            :type="makerType"
            @close="handleCloseDetail"></modal-five>
          <modal-six
            v-if="makerBoxType === 'six'"
            :data="makerDetail"
            :type="makerType"
            :columnFirm="column[makerType]"
            @close="handleCloseDetail"></modal-six>
          <div class="kkk-jkl" v-if="makerBoxType === 'waterStation'">
            <!--<img class="line" src="../../../assets/common/event-icon2.png">-->
            <div class="makers-panel-content">
              <div class="makers-panel-close"><span>{{makerDetail.baseInfo.jc02005}}-{{makerDetail.baseInfo.name}}</span>
                <img @click.stop="makerBoxType = '';showDetailVideo = false" src="../../../assets/common/closepopicon.png">
              </div>
              <div class="one"><span>水位：</span>{{makerDetail.data.jc04004 ? makerDetail.data.jc04004+'m': '无'}}</div>
              <div class="one">
                <div><span>超警水位：</span><span :style="{color: chooseImg(makerDetail.data.jc02011, makerDetail.data.jc04004).color}">{{(makerDetail.data.jc04004 && makerDetail.data.jc02011) ? (makerDetail.data.jc04004 - makerDetail.data.jc02011).toFixed(3)+'m' : '无'}}</span></div>
                <div><span>超保水位：</span><span :style="{color: chooseImg(makerDetail.data.jc02014, makerDetail.data.jc04004).color}">{{(makerDetail.data.jc04004 && makerDetail.data.jc02014) ? (makerDetail.data.jc04004 - makerDetail.data.jc02014).toFixed(3)+'m' : '无'}}</span></div>
              </div>
              <div class="one"><span>更新时间：</span>{{makerDetail.data.jc04001}}</div>
              <div class="open-url" @click="handleOpenUrl('http://www.scsqzx.com/newApp/')">四川省水情信息服务平台</div>
              <p>点位视频</p>
              <div class="video-content-box">
                <div
                  class="one-video"
                  @click="handlePlayVideo(makerDetail.baseInfo.id, item1.jc13003, item1.jc13002)"
                  v-for="(item1, i) in makerDetail.video"
                  :key="i">
                  <span>{{item1.jc13002}}</span>
                  <img src="../../../assets/common/play.png">
                </div>
              </div>
              <div class="outside-video" v-if="showDetailVideo">
                <img
                  class="video-close"
                  @click="showDetailVideo = false"
                  src="../../../assets/common/closepopicon.png">
                <div class="video-name">{{videoName}}</div>
                <div class="maker-panle" style="z-index: 9; left: 5rem; top: 3rem;" :id="'d-v-'+makerDetail.baseInfo.id"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 通讯弹窗 -->
    <div id="communication" v-show="isCallShow">
      <phone-modal
        v-if="isCallShow"
        @close="handleCloseCom"
        :status="callStatus"
        :message="callParam"></phone-modal>
    </div>
    <!-- 短信弹窗 -->
    <div id="note" v-show="isNoteShow">
      <note-modal
        v-if="isNoteShow"
        :message="noteParam"
        @close="handleModalClose"></note-modal>
    </div>
    <!-- 工具箱类型 -->
    <div class="toolbox">
      <div class="ambulance" @click="showZj = true">
        <img src="../../../assets/emergency-command/emergency-command-chart/ple.png"/>
        <span class="name">应急专家</span>
        <span class="status"></span>
      </div>
    </div>
    <!-- 指挥部 -->
    <div id="head-quarter" v-show="showControl">
      <head-quarter
        v-if="showControl"
        @close="showControl = false"
        :data="topLeftDetail"
        @handleNote="handleNote"
        @handleCall="handleCall"
        @showTitle="showTooltip"
        @hideTitle="hideTooltip"></head-quarter>
    </div>
    <!-- 应急专家 -->
    <div id="yj-people" v-show="showZj">
      <speciaalist-box
        v-if="showZj"
        :data="zjList"
        @handleNote="handleNote"
        @handleCall="handleCall"
        @close="showZj = false"></speciaalist-box>
    </div>
    <!-- 范围标记点位 -->
    <div class="icon-box" :id="item.id" v-for="(item) in icons" :key="item.id">
      <img class="icon-img" src="@/assets/tool/end.png" />
    </div>
    <!-- 显示标题完整信息 -->
    <text-modal ref="textModal"></text-modal>
    <!-- 视频放大 -->
    <div class="video-to-big" v-if="isVideoBig">
      <video-big
        :name="openText"
        :url="openUrl"
        @close="isVideoBig = false"></video-big>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import navList from '@/components/select-normal.vue'
import slider from '@/components/process-drag.vue'
import mainList from '@/components/menu.vue'
import scrollTable from '@/components/table-scroll'
import paginate from '@/components/paginate'
import modalOne from '@/components/slackingModal/modal-one' // 下钻窗口
import modalTwo from '@/components/slackingModal/modal-two' // 下钻窗口
import modalThree from '@/components/slackingModal/modal-three' // 下钻窗口
import modalFour from '@/components/slackingModal/modal-four' // 下钻窗口
import modalFive from '@/components/slackingModal/modal-five' // 下钻窗口
import modalSix from '@/components/slackingModal/modal-six' // 下钻窗口
import phoneModal from '@/components/slackingModal/phone-modal' // 手机电话弹窗
import noteModal from '@/components/slackingModal/note-modal' // 短信电话弹窗
import speciaalistBox from './specialist-box' // 应急专家弹窗
import headQuarter from './headquarters'
import noticeMaker from '../emergency-command-chart/notice-maker'
import headComponen from '@/components/head-component'
import event1 from '../../../assets/emergency-command/emergency-command-chart/event5.png'
import event2 from '../../../assets/emergency-command/emergency-command-chart/event2.png'
import event3 from '../../../assets/emergency-command/emergency-command-chart/event3.png'
import event4 from '../../../assets/emergency-command/emergency-command-chart/event4.png'
import {
  water,
  move,
  mainWater
} from '@/echarts-data/emergency-command/floodControl'
import API from '@/api/emergency-command/emergency-command-chart.js'
import APIS from '@/api/emergency-command/floodControl.js'
import { formatterTime, moveDiv } from '@/utils/utils'
import {webSktPath, imgPath, phoneWebSktPath} from '@/utils/BasePath'
import WebSocketHelper from '@/utils/WebSocketHelper'
import icon1 from '../../../assets/emergency-command/emergency-command-chart/icon5.png'
import icon2 from '../../../assets/emergency-command/emergency-command-chart/icon1.png'
import icon3 from '../../../assets/emergency-command/emergency-command-chart/icon2.png'
import icon4 from '../../../assets/emergency-command/emergency-command-chart/icon3.png'
import icon5 from '../../../assets/emergency-command/emergency-command-chart/icon4.png'
import oicon1 from '../../../assets/emergency-command/emergency-command-chart/oicon5.png'
import oicon2 from '../../../assets/emergency-command/emergency-command-chart/oicon1.png'
import oicon3 from '../../../assets/emergency-command/emergency-command-chart/oicon2.png'
import oicon4 from '../../../assets/emergency-command/emergency-command-chart/oicon3.png'
import oicon5 from '../../../assets/emergency-command/emergency-command-chart/oicon4.png'
import textModal from '@/components/text-modal' // 显示标题完整信息
import videoBig from '../../../components/slackingModal/video-big'
const $ = window.jQuery
export default {
  name: 'floodControl',
  components: {
    videoBig,
    navList,
    mainList,
    slider,
    scrollTable,
    modalOne,
    modalTwo,
    modalThree,
    modalFour,
    modalFive,
    modalSix,
    paginate,
    phoneModal,
    noteModal,
    headComponen,
    headQuarter,
    noticeMaker,
    speciaalistBox,
    textModal
  },
  data () {
    return {
      // 开关
      switchFlage: false,
      ceneterScope: {},
      km: 5, // 操作面板，默认5公里
      icons: [],
      eventImg: [event1, event2, event3, event4],
      showDetailVideo: false,
      reflashVideo: true,
      isSelectEmergency: false,
      isDetailSmaller: false, // 是否缩小面板
      eventPosition: [],
      panelBig: false,
      nowPage: 1, // 启动应急方案页数
      showOutImg: 0, // 展示图标外层
      positionId: '', // 点击撒点ID
      imgPath: imgPath,
      eventDetail: null, // 事件详细信息
      resourceId: [], // 面板选中资源Id
      pointType: '', // 撒点调用接口名称
      animate2: false, // 右中滚动-默认页面
      timers: null,
      phoneDetail: {},
      headerQuarter: {}, // 事件详情左上详细信息
      warningList: [], // 预警信息
      warningListCopy: [], // 预警信息弹窗
      isShowNotice: false, // 预警信息弹窗
      // 面板左侧菜单
      operationLeftList: [
        {
          name: '应急资源',
          isSelected: true,
          data: []
        },
        {
          name: '监测点位',
          isSelected: false,
          data: []
        },
        {
          name: '应急队伍',
          isSelected: false,
          data: []
        }
      ],
      operationLeftListIndex: 0,
      operationLevelTwoIndex: 0,
      phoneSkt: null, // websocket电话实列
      callStatus: '', // 通话状态
      isCallShow: false,
      callParam: {
        name: '',
        phone: ''
      }, // 通话信息
      isNoteShow: false, // 短信弹窗显示状态
      noteParam: {
        name: '',
        phone: ''
      },
      columnProject: [
        {name: '操作内容', width: '1.4rem', dataIndex: 'title'},
        {name: '操作单位', width: '1.6rem', dataIndex: 'user'},
        {name: '时间', dataIndex: 'time', type: 'formatter'}
      ],
      panelData: {}, // 所有点位集合
      isRenderMaker: {}, // 是否加载过此类型的点位
      hotId: null,
      movePoints: [],
      makerType: '', // 当前点位类型
      makerBoxType: '', // 点位弹窗类型
      makerDetail: {}, // 点位详细数据
      column: {
        '02': [
          {name: '河道水位(m)', width: '1.5rem', dataIndex: 'jc04004'},
          {name: '监测时间', width: '2.5rem', dataIndex: 'jc04001'}
        ],
        '04': [
          {name: '降水量(mm)', width: '1.5rem', dataIndex: 'jc04004'},
          {name: '监测时间', width: '2.5rem', dataIndex: 'jc04001'}
        ],
        '05': [
          {name: '库上水位(m)', width: '1.5rem', dataIndex: 'jc04008'},
          {name: '库下水位(m)', width: '1.5rem', dataIndex: 'jc04009'},
          {name: '蓄水量(m3)', width: '1.5rem', dataIndex: 'jc04010'},
          {name: '监测时间', width: '2.5rem', dataIndex: 'jc04001'}
        ],
        '06': [
          {name: '时段降水量(mm)', width: '1.5rem', dataIndex: 'jc04005'},
          {name: '日降水量(mm)', width: '1.5rem', dataIndex: 'jc04006'},
          {name: '时段长', width: '1.5rem', dataIndex: 'jc04007'},
          {name: '监测时间', width: '2.5rem', dataIndex: 'jc04001'}
        ]
      },
      selectVideoId: '',
      // 新增
      naturalShow: false,
      selectList: [
        {name: '全部区域'},
        {name: '总部经济区'},
        {name: '五通桥基地'},
        {name: '犍为基地'},
        {name: '夹江基地'}
      ],
      activeSelect: 1, // 主要河流水位情况 -- 下拉
      waterList: [
        {name: '近6h', active: true, type: '01'},
        {name: '近12h', active: false, type: '02'},
        {name: '近24h', active: false, type: '03'}
      ], // 点位降水统计
      showControl: false, // 指挥部弹窗
      topLeft: {}, // 指挥部信息
      topLeftDetail: {},
      dutyList: [], // 值班表
      riverLists: [],
      riverStation: [],
      countNum: 1, // 内涝数
      nlList: [], // 内涝点位
      nlVideosIds: [], // 某点位所有视频
      nlVideos: [], // 所有点位视频
      showZj: false,
      zjList: [], // 专家列表
      bigRiverPoints: [], // 大江大河点位
      videoPoints: [], // 视频点位
      swfurl: './static/libs/flowplayer/flowplayer-3.2.18.swf',
      waterColor: ['#FD2000', '#FF7800', '#FCE62F', '#33D5FF', '#7EFFDB'],
      waterImgs: [icon1, icon2, icon3, icon4, icon5],
      waterImgsOut: [oicon1, oicon2, oicon3, oicon4, oicon5],
      waterIndex: -1,
      waterPoints: [],
      videoName: '', // 水文站点点击视频列表名称
      isVideoBig: '', // 是否放大视频
      openText: '', // 视频放大标题
      openUrl: '' // 放大视频播放地址
    }
  },
  beforeMount () {
    let that = this
    let eventParam = {
      url: `${webSktPath}websocket/flood`,
      open: function () { console.log('webScoket连接成功！') },
      message: function (data) {
        // 事件点位信息
        let eventPos = JSON.parse(data.data)
        console.log(eventPos)
        // 地图撒点 --- 事件类型
        if (eventPos.event) {
          that.eventDetail = eventPos.event
          that.eventPosition = eventPos.event
          let arr = []
          eventPos.event.map(re => {
            arr.push({
              lon: re.lon,
              lat: re.lat,
              id: 'event-pos' + re.id
            })
          })
          window._m.addMakers(arr, (flag) => {
            that.showOutImg = flag
          })
        }
      },
      // isKeepAlive: true,
      keepData: '{isClose: 123}',
      keepAliveTime: 10,
      isReConnect: true
    }
    this.webskt = new WebSocketHelper(eventParam)
    this.webskt.init(true, 'floodEvent')
    // webScoket 电话通讯
    let currentUser = { 'Action': 'Login', 'PlatFormCode': 'Default', 'GongHao': '10000', 'FenJi': '6000', 'AgentGroupName': '座席1组' }
    let phoneParam = {
      url: phoneWebSktPath,
      open: function () {
        console.log('电话短信webScoket连接成功！')
        that.phoneSkt.send(JSON.stringify(currentUser))
      },
      message: function (e) {
        try {
          let status = e.data.split('(')[0]
          that.callStatus = status
          setTimeout(() => {
            if (status === 'Back_TalkingEnd') {
              that.callStatus = 'Back_DialOut'
            }
          }, 600)
        } catch (e) {
          console.log(e)
        }
      },
      isKeepAlive: true,
      keepData: '{"Action": "keeplive", "GongHao": "10000", "FenJi": "6000", "PlatFormCode": "Default", "Params": ""}',
      keepAliveTime: 10,
      isReConnect: true
    }
    this.phoneSkt = new WebSocketHelper(phoneParam)
    this.phoneSkt.init()
  },
  created () {
    this.initData()
  },
  mounted () {
    this.getLeftData() // 左边部分数
    this.getLeftDataEchart()
    this.dwjstjByType() // 右上图表
    this.riverList() // 主要河流水位情况
    this.nlStation()
    // this.getStationByRiver() // 站点
    moveDiv('warn-and-notice')
    moveDiv('communication')
    moveDiv('note')
    moveDiv('head-quarter')
    moveDiv('yj-people')
    setTimeout(() => {
      window._m.rightClick(() => {
        this.selectVideoId = ''
      })
    }, 10000)
  },
  methods: {
    openBigVideo (index) {
      let val = this.nlVideosIds[index]
      this.openText = val.fx06003
      this.openUrl = val.fx06004
      this.isVideoBig = true
    },
    // 水文站超链接
    handleOpenUrl () {
      window.open('http://www.scsqzx.com/newApp/', 'newwindow', 'height=1080, width=4320, top=540, left=2160')
    },
    handlePlayVideo (id, url, name) {
      this.showDetailVideo = false
      this.videoName = name
      setTimeout(() => {
        this.showDetailVideo = true
        this.$nextTick(() => {
          this.playVideo('d-v-' + id, url)
        })
      })
    },
    slideValue (km) {
      this.km = km
      this.pointsToMap()
    },
    // 打开视频
    openVideo (item, name) {
      this.selectVideoId = item.id
      this.$nextTick(() => {
        this.playVideo(name, item.fx06004)
      })
    },
    // 选择图片
    chooseImg (num0, num1) {
      if (!num0) {
        return {
          img: this.waterImgs[4],
          outImg: this.waterImgsOut[4],
          color: this.waterColor[4]
        }
      }
      let l = (+num1) - (+num0)
      let index = -1
      if (l > -0.25) {
        index = 0
      } else if (l <= -0.25 && l > -0.5) {
        index = 1
      } else if (l <= -0.5 && l > -1) {
        index = 2
      } else if (l <= -1 && l >= -2) {
        index = 3
      } else {
        index = 4
      }
      let obj = {
        img: this.waterImgs[index],
        outImg: this.waterImgsOut[index],
        color: this.waterColor[index]
      }
      return obj
    },
    handelShowEvent (index) {
      this.waterIndex = index
      this.showDetailVideo = false
    },
    // 展示事件详情
    handelShowEventBox (e, index) {
      this.eventDetail = this.eventPosition[index]
      let o = {
        lon: this.eventDetail.lon * 1,
        lat: this.eventDetail.lat * 1
      }
      window._m.getSouthPointByDistance(o)
      this.isSelectEmergency = true
    },
    onCloseAccident () {
      this.isSelectEmergency = false
    },
    // 水位筛选
    handleWater (index, type) {
      this.waterList.map((item, ind) => {
        if (index === ind) {
          item.active = true
        } else {
          item.active = false
        }
      })
      this.dwjstjByType(type)
    },
    handleMainWater (index) {
      let code = ''
      this.riverStation.map((item, ind) => {
        if (index === ind) {
          item.active = true
          code = item.fx05001
        } else {
          item.active = false
        }
      })
      this.getMainWater(code)
    },
    // 关闭电话
    handleCloseCom (flag) {
      this.isCallShow = flag
    },
    // 关闭短信
    handleModalClose (flag) {
      this.isNoteShow = flag
    },
    // 打开监测预警详情
    handleWarn (flag) {
      this.isShowNotice = flag
    },
    // 打电话
    handleCall (phone, name) {
      this.callParam = {
        name,
        phone
      }
      if (this.phoneSkt && this.phoneSkt.wsState === 1 && this.callStatus !== '') {
        // 电话参数  018281563658
        let currentUser = { 'Action': 'DialOut', 'PlatFormCode': 'Default', 'GongHao': '10000', 'FenJi': '6000', 'AgentGroupName': '座席1组', 'Params': phone }
        this.phoneSkt.send(JSON.stringify(currentUser))
        this.isCallShow = true
      } else {
        console.log('短信电话websocket初始化失败')
      }
    },
    // 发短信弹窗
    handleNote (phone, name) {
      this.noteParam = {
        name,
        phone
      }
      this.isNoteShow = true
    },
    handleChange (page) {
      this.nowPage = page
    },
    // 转移安置点详情
    handleMoveDetail (...type) {
      type.forEach((re) => {
        if (this.panelData[re] && this.panelData[re].length) {
          this.$set(this.panelData, re, [])
        } else {
          this.$set(this.panelData, re, this[re])
          // if (re === 'nlVideos') {
          //   this.$nextTick(() => {
          //     this[re].forEach((item) => {
          //       this.playVideo(item.id + '-video-panle', item.url)
          //     })
          //   })
          // }
        }
        // 防止重复添加点位信息
        if (!this.isRenderMaker[re]) {
          this.isRenderMaker[re] = true
          window._m.addMakers(this[re], (flag) => {
            this.showOutImg = flag
          })
        }
      })
    },
    // 热力图
    handleMoveDetail1 () {
      if (this.hotId) {
        window._m.removeHeatPointMap(['hot-water'], true)
        this.hotId = ''
      } else {
        this.hotId = 'hot-water'
        if (this.waterPoints.length) {
          window._m.addHeatPointMap('hot-water', this.waterPoints, 0, 200)
        }
      }
    },
    // 选中内涝点位line
    handleActiveVideo (index) {
      let id = ''
      this.nlList.map((re, ind) => {
        if (index === ind) {
          re.active = true
          id = re.id
        } else {
          re.active = false
        }
      })
      this.reflashVideo = false
      this.nlVideosById(id)
    },
    initData () {
      this.getOperationList()
      // 查询大江大河水位监测点及视频点位
      this.riverStationsAndVideo()
      // 所有视频点位
      this.nlVideoStations()
      // 应急专家
      this.expertsInfo()
    },
    // 市防汛指挥部
    getLeftData () {
      APIS.HEADER_QUERTER_AND_CASE(this, {}).then((resA) => {
        let res = resA.data.data
        this.topLeft = res.data1
        this.topLeftDetail = {
          data1: res.data1,
          data2: res.data2,
          data3: res.data3,
          data4: res.data4,
          data5: res.data5
        }
        this.dutyList = res.data6
        // echarts.init(document.getElementById('water-monitor')).setOption(water())
        // echarts.init(document.getElementById('main-water')).setOption(mainWater())
      }).catch(err => {
        console.log(err)
      })
    },
    // 左边echart
    getLeftDataEchart () {
      APIS.LEFT_DATA(this, {}).then((resA) => {
        let res = resA.data.data
        this.warningList = res.data1
        this.warningListCopy = JSON.parse(JSON.stringify(res.data1))
        // 转移安置能力
        echarts.init(document.getElementById('main-left-bottom-echart')).setOption(move(res.data2))
        // 转移安置能力点位
        this.movePoints = res.data3
        // echarts.init(document.getElementById('water-monitor')).setOption(water())
        // echarts.init(document.getElementById('main-water')).setOption(mainWater())
      }).catch(err => {
        console.log(err)
      })
    },
    // 查询大江大河水位监测点及视频点位
    riverStationsAndVideo () {
      APIS.RIVER_STATION_VIDEO(this, {}).then((resA) => {
        let res = resA.data.data.data
        let kl = []
        res.map(re => {
          kl.push(...re.video)
        })
        this.bigRiverPoints = res
        this.videoPoints = kl
        // this.$nextTick(() => {
        //   kl.forEach((item) => {
        //     this.playVideo(item.id + '-video-panle', item.url)
        //   })
        // })
        window._m.addMakers(res, (flag) => {
          this.showOutImg = flag
        })
        // window._m.addMakers(kl, (flag) => {
        //   this.showOutImg = flag
        // })
      }).catch(err => {
        console.log(err)
      })
    },
    // 主要河流列表
    riverList () {
      APIS.RIVER_LIST(this, {}).then((resA) => {
        let res = resA.data.data
        this.riverLists = res.data
        this.getStationByRiver(res.data[1].fx05003)
      }).catch(err => {
        console.log(err)
      })
    },
    // 应急专家
    expertsInfo () {
      APIS.EXPERTS_INFO(this, {}).then((resA) => {
        let res = resA.data.data
        this.zjList = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    // 根据河流查询站点
    getStationByRiver (river = '岷江') {
      APIS.GET_STATION_BY_RIVER(this, {river}).then((resA) => {
        let res = resA.data.data
        res.data[0].active = true
        this.riverStation = res.data
        this.getMainWater(res.data[0].fx05001)
      }).catch(err => {
        console.log(err)
      })
    },
    // 主要河流水位情况
    getMainWater (code = '60608800') {
      APIS.ZYHLSW_BY_STATION(this, {code}).then((resA) => {
        if (resA.data.serviceSuccess) {
          let data = resA.data.data
          let eh = echarts.init(document.getElementById('main-water'))
          eh.setOption(mainWater(data.data))
        } else {
          console.log(resA.data.errors)
        }
      })
    },
    // 选择河流
    handleChoose (index, name) {
      this.activeSelect = index
      this.naturalShow = false
      this.getStationByRiver(name)
    },
    // 根据类型查询点位降水统计
    dwjstjByType (type = '01') {
      APIS.DWJSTJ_BY_TYPE(this, {type}).then((resA) => {
        if (resA.data.serviceSuccess) {
          let data = resA.data.data.data
          data.map((re, index) => {
            re.id = `water-pt-${index}`
            re.x = +re.lon
            re.y = +re.lat
            re.value = re.jc04004
          })
          this.waterPoints = data
          if (data.length) {
            this.$nextTick(() => {
              let eh = echarts.init(document.getElementById('water-monitor'))
              eh.setOption(water(data))
            })
          }
        } else {
          console.log(resA.data.errors)
        }
      })
    },
    // 内涝标题数据
    nlStation () {
      APIS.NL_STATION(this, {}).then((resA) => {
        if (resA.data.serviceSuccess) {
          let data = resA.data.data.data
          if (data.length) {
            data[0].active = true
            this.nlList = data
            this.nlVideosById(data[0].id)
          }
        } else {
          console.log(resA.data.errors)
        }
      })
    },
    // 播放视频
    playVideo (id, url) {
      window.$f(id, this.swfurl, {
        clip: {
          url: url,
          autoPlay: true,
          autoBuffering: true
        },
        plugins: {
          controls: null
        }
      })
    },
    // 根据ID查询视频点位
    nlVideosById (id) {
      this.reflashVideo = true
      APIS.NL_VIDEOS_ID(this, {id}).then((resA) => {
        if (resA.data.serviceSuccess) {
          let data = resA.data.data.data
          this.nlVideosIds = data
          if (data[0]) {
            this.playVideo('video-nl-1', data[0].fx06004)
          }
          if (data[1]) {
            this.playVideo('video-nl-2', data[1].fx06004)
          }
        } else {
          console.log(resA.data.errors)
        }
      })
    },
    // 查询所有内涝视频点位
    nlVideoStations () {
      APIS.NL_VIDEOS_STATION(this, {}).then((resA) => {
        if (resA.data.serviceSuccess) {
          let data = resA.data.data.data
          this.nlVideos = data
          window._m.addMakers(data, (flag) => {
            this.showOutImg = flag
          })
        } else {
          console.log(resA.data.errors)
        }
      })
    },
    // 内涝标题移动
    handleMoveNl (isRight) {
      let count = Math.ceil(this.nlList.length / 4)
      if (isRight) {
        if (this.countNum < count) {
          this.countNum = this.countNum + 1
        }
      } else {
        if (this.countNum > 1) {
          this.countNum = this.countNum - 1
        }
      }
    },
    formatterTwoMenu (data) {
      let arr = []
      let obj = {}
      let t = ''
      data.map(re => {
        if (re.pid === '0') {
          if (!obj[re.id]) {
            obj[re.id] = []
            t = re.label
          }
        } else {
          re.title = t
          obj[re.pid].push(re)
        }
      })
      for (let key in obj) {
        arr.push(obj[key])
      }
      return arr
    },
    // 面板所有数据
    getOperationList () {
      APIS.LEGEND_PANEL(this, {}).then((res) => {
        if (res.data.serviceSuccess) {
          let data = res.data.data
          this.operationLeftList[0].data.push(data.data1)
          this.operationLeftList[1].data.push(data.data3)
          this.operationLeftList[2].data.push(data.data2)
        } else {
          console.log(res.data.errors)
        }
      })
    },
    initScroll () {
      clearInterval(this.timers)
      if (this.warningList.length > 2) { // 预警信息
        this.timers = setInterval(this.scroll2, 5 * 1000)
      }
    },
    // 预警信息
    scroll2 () {
      let scroll = this.$refs.scroll2
      let scrollLi = this.$refs.scrollLi2
      scroll.style.marginTop = (scrollLi[0].offsetHeight * (-1) + 'px')
      this.animate2 = !this.animate2
      setTimeout(() => {
        this.warningList.push(this.warningList[0])
        this.warningList.shift()
        scroll.style.marginTop = '0'
        this.animate2 = !this.animate2
      }, 500)
    },
    enter () {
      clearInterval(this.timers)
    },
    leave () {
      this.timers = setInterval(this.scroll2, 5 * 1000)
    },
    // 鼠标移入显示标题
    showTooltip (e) {
      this.$refs.textModal.showTooltip(e)
    },
    hideTooltip () {
      this.$refs.textModal.hideTooltip()
    },
    // 全部资源清空面板勾选状态
    clearCheckedBox (data) {
      for (let i = 0, j = data.length; i < j; i++) {
        data[i].isSelected = false
        if (data[i].data) {
          this.clearCheckedBox(data[i].data[0])
        }
      }
    },
    // 操作面板 -- 左侧菜单切换
    onOperationLeftChange (index) {
      this.operationLevelTwoIndex = 0
      if (index === this.operationLeftListIndex) {
        return
      }
      this.operationLeftListIndex = index
      this.operationLeftList.forEach((item, i) => {
        if (index === i) {
          item.isSelected = true
        } else {
          item.isSelected = false
        }
      })
    },
    // 操作面板右侧title切换
    onSelectLevelTwo (item, index) {
      if (item.isSelected) {
        return
      }
      // 切换title，清空之前选择的点位信息
      this.resourceId = []
      switch (index) {
        case 0:
          this.pointType = 'WAREHOUSE_BY_TYPE'
          break
        case 1:
          this.pointType = 'WAREHOUSE_BY_TYPE'
          break
        case 2:
          this.pointType = 'WAREHOUSE_BY_TYPE'
          break
        case 3:
          this.pointType = 'SHELTER_LIST'
          break
        default:
          this.pointType = 'SOCIAL_RESOURECE_BY_TYPE'
          break
      }
      this.operationLeftList[this.operationLeftListIndex].data.forEach((obj, i) => {
        if (index === i) {
          obj.isSelected = true
        } else {
          obj.isSelected = false
        }
      })
      this.operationLevelTwoIndex = index
    },
    /**
       * 根据勾选面板向地图撒点
       * @param type 撒点类型
       */
    pointsToMap () {
      this.resourceId.forEach(re => {
        let type = re.type
        let ids = re.ids.toString()
        let eventId = this.eventDetail && this.eventDetail.id
        API[type](this, {type: ids, eventId: eventId}).then(res => {
          if (res.data.serviceSuccess) {
            let datas = res.data.data.data || []
            this.$set(this.panelData, re.type, datas)
            // 计算点位是否在范围之内
            for (let key in this.panelData) {
              if (this.panelData[key]) {
                for (let i = 0; i < this.panelData[key].length; i++) {
                  let item = this.panelData[key][i]
                  if (item.lon) {
                    if (window._m.getSpaceDistanceByLon([this.ceneterScope, {lon: +item.lon, lat: +item.lat}], this.km)) {
                      item.cantShow = false
                    } else {
                      item.cantShow = true
                    }
                  }
                }
              }
            }
            window._m.addMakers(datas, (flag) => {
              this.showOutImg = flag
            })
          } else {
            console.log(res.data.errors)
          }
        })
      })
    },
    // 操作面板checkbox事件
    onCheckBox (obj, index, type) {
      // 撒点调用的接口名称
      let menuEvent = [
        ['WAREHOUSE_BY_TYPE'],
        ['MONITORING_BY_TYPE'],
        ['EMERGENCY_TEAM_BY_TYPE']
      ]
      if (obj.isSelected) {
        obj.isSelected = !obj.isSelected
      } else {
        obj.isSelected = true
      }
      let apiType = '' // 调用接口类型
      // 全部资源选择
      if (type === 'first') {
        let p = this.operationLeftList[this.operationLeftListIndex].data[this.operationLevelTwoIndex]
        this.$set(p, index, obj)
        let ids = [] // 选中的资源点id
        p.map(re => {
          if (re.isSelected) {
            ids.push(re.id)
          }
        })
        apiType = menuEvent[this.operationLeftListIndex][this.operationLevelTwoIndex]
        this.resourceId = [{type: apiType, ids}]
      }
      // 获取选中的数组，并调用接口
      this.pointsToMap()
    },
    // 时间格式化
    timeFormat (t) {
      return formatterTime(t)
    },
    // 点击maker出现详细信息
    handleSeeDetail (id, type, type01) {
      console.log(type, type01)
      this.positionId = id
      // 弹窗分类样式总和
      let types = {
        goods: 'three',
        warehouse: 'three',
        team: 'one',
        shelter: 'one',
        social: 'one',
        '007': 'three',
        headerquarter: 'four',
        protection: 'four',
        hazard: 'five',
        monitor: '',
        '01': 'four',
        '02': 'six',
        '03': 'four',
        '04': 'six',
        '05': 'six',
        '06': 'six',
        '07': 'waterStation', // 水位站弹窗
        safety: 'five',
        aid: 'one'
      }
      if (type === 'monitor' || type === 'publichealth') {
        this.makerType = type01
      } else if (type === 'social') {
        if (type01 === '007') {
          this.makerType = type01
        } else {
          this.makerType = type
        }
      } else {
        this.makerType = type
      }
      // 根据后台返回的type 和 type01 确定弹窗样式
      let eId = this.eventDetail ? this.eventDetail.id : ''
      API.DETAIL_OF_LOCATION(this, { id: id, type: type, eventId: eId, type01: type01 }).then(res => {
        if (res.data.serviceSuccess) {
          let data = res.data.data
          if (Object.keys(res.data.data).length) {
            this.makerDetail = data.data
            this.makerBoxType = types[this.makerType]
          } else {

          }
        } else {
          console.log(res.data.errors)
        }
      })
    },
    // 关闭maker详细信息
    handleCloseDetail () {
      this.makerBoxType = ''
      this.positionId = ''
    }
  },
  beforeDestroy () {
    this.phoneSkt.close()
    // 重置右键重点危险源
    window._m.rightClick()
    clearInterval(this.timers)
    // 清除cesium中的makers
    window._m.removeMaker()
    window._m.clearToolMakers(this.icons)
    this.icons = []
    window._m.modalPosition = {}
    $('#warn-and-notice').off()
    $('#communication').off()
    $('#note').off()
    $('#head-quarter').off()
    $('#yj-people').off()
  },
  watch: {
    // 监听是否启用面板距离状态
    switchFlage (val) {
      if (!val) {
        // 清空面板选择
        this.clearCheckedBox(this.operationLeftList)
        // 清空点位
        this.panelData = {}
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
  }
}
</script>
<style  lang="scss" scoped>
@import '../../../components/date-title.scss';
.video-to-big{
  position: absolute;
  width: 13.60rem;
  height: 8.20rem;
  top: 1.3rem;
  background: rgba(0,25,60,0.8);
  border-radius: 0.20rem;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1001;
  padding: 0.2rem;
}
.global-data-title{
  color:$date-title-color;
  display:inline-block;
  font-size:$date-title-size;
}
  .icon-box {
    position: absolute;
    z-index: 15;
    .icon-img {
      width: 0.5rem;
      height: 0.66rem;
    }
  }
  .maker-panle {
    box-sizing: border-box;
    width: 5.5rem;
    height: 3.8rem;
    z-index: -1;
    margin-top: .4rem;
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
  .main-message,
  .main-message-1{
    position: absolute;
    right: 8rem;
    bottom: .2rem;
    padding: .15rem .08rem;
    border-radius: 0.13rem;
    background: rgba(0, 0, 0, .5);
    z-index: 20;
    p{
      font-size: .16rem;
      color: #fff;
      font-weight: bold;
      margin-bottom: .1rem;
      padding-left: .1rem;
    }
    > div{
      color: #83EBFF;
      font-size: .16rem;
      font-style: italic;
      img{
        vertical-align: middle;
        width: .27rem;
        height: .33rem;
      }
    }
  }
  .main-message-1{
    right: 8rem;
    bottom: 3rem;
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
          background: #5FAF5F;
        }
      }
      &:nth-child(3){
        .coco{
          background: #45A300;
        }
      }
      &:nth-child(4){
        .coco{
          background: #DEEF00;
        }
      }
      &:nth-child(5){
        .coco{
          background: #FF9B00;
        }
      }
      &:nth-child(6){
        .coco{
          background: #FF0400;
        }
      }
    }
  }
  .area-title{
    position: relative;
    font-size: .2rem;
    color: rgba(255,255,255,1);
    padding-left: .4rem;
    &:after{
      content: '';
      position: absolute;
      top: .1rem;
      left: .14rem;
      width: .13rem;
      height: .13rem;
      background: rgba(0,126,251,1);
    }
    &:before{
      box-sizing: border-box;
      content: '';
      position: absolute;
      top: .05rem;
      left: .1rem;
      width: .13rem;
      height: .13rem;
      border: 2px solid rgba(253,209,0,1);
    }
  }
  .title-select{
    margin-right: .3rem;
    .select{
      position: relative;
      background: #034073;
      border-radius: 0.2rem;
      height: 0.25rem;
      line-height: 0.25rem;
      border: 2px solid #2368b1;
      padding: 0 .4rem 0 .2rem;
      font-size: 0.16rem;
      color: #fff;
      cursor: pointer;
      img{
        position: absolute;
        width: .16rem;
        height: .16rem;
        top: .05rem;
        right: .15rem;
      }
    }
  }
  .g-img-box {
    width: 0.68rem;
    height: 0.83rem;
    left: 0;
    top: 0;
    z-index: 1;
    cursor: pointer;
    position: relative;
    .big-img {
      width: 100%;
      height: 100%;
    }
    .small-img {
      width: 0.8rem;
      height: 0.8rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 0.45rem;
    }
  }
  .command-container {
    width: 43.2rem;
    height: 10.8rem;
    position: absolute;
    background: #000;
    overflow: hidden;
    .video-maker {
      position: absolute;
      z-index: 8;
      cursor: pointer;
      margin-left: -.47rem;
      &:hover{
        z-index: 999;
      }
      &:hover .makers-title{
        display: block;
      }
      .makers-title{
        display: none;
        position: absolute;
        top: -.28rem;
        left: -.2rem;
        color: #fff;
        font-size: .18rem;
        padding: .03rem .2rem;
        max-width: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background-color: rgba(0,72,107,.5);
        border: .02rem solid rgba(103, 207, 255, .75);
      }
      .video-close{
        position: absolute;
        left: 5.2rem;
        top: .35rem;
        width: .3rem;
        height: .3rem;
        z-index: 5;
        cursor: pointer;
      }
      .three-box {
        position: absolute;
        .maker-3d-img {
          position: absolute;
          width: 0.4rem;
          left: .29rem;
          top: .2rem;
        }
        .maker-3d-box-img {
          width: 0.94rem;
          left: 0;
          top: 0;
        }
        .maker-title{
          position: absolute;
          top: .55rem;
          left: 50%;
          transform: translateX(-50%);
          width: 1rem;
          text-align: center;
          font-size: .13rem;
          color: #F2A45D;
        }
      }
      .outside-video{
        position: absolute;
        z-index: 9;
        left: 1rem;
        top: -1rem;
        padding: 0.2rem;
        background: url("../../../assets/city-management/city-facilities/notice-bg.png")
        center no-repeat;
        background-size: 100% 100%;
        .video-name{
          font-size: .14rem;
          margin-top: .05rem;
          color: #fff;
        }
        .maker-panle{
          margin-top: .1rem;
        }
      }
    }
    .river-makers-box{
      .line{
        float: left;
      }
      .makers:hover .j-title{
        display: block;
      }
      .j-title{
        display: none;
        position: absolute;
        top: -.35rem;
        left: -.2rem;
        color: #fff;
        font-size: .18rem;
        padding: .03rem .2rem;
        max-width: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background-color: rgba(0,72,107,.5);
        border: .02rem solid rgba(103, 207, 255, .75);
      }
      .kkk-jkl{
        margin-top: -1.3rem;
        margin-left: .35rem;
        >img{
          width: .8rem;
          height: .8rem;
        }
      }
      .makers-panel-content{
        width: 4rem;
        float: left;
        margin-top: 1rem;
        margin-left: 2.3rem;
        background: url("../../../assets/common/win-info-icon-02.png") no-repeat;
        background-size: 100% 100%;
        padding: .5rem .3rem;
        color: #fff;
        transform: translate(-50%, -50%);
        .makers-panel-close{
          font-size: .22rem;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
          img{
            cursor: pointer;
            width: .3rem;
            height: .3rem;
          }
        }
        .one{
          display: flex;
          color: #DFE2FD;
          font-size: .18rem;
          mamrgin: .05rem 0;
          > div{
            flex: 1;
            margin-top: .17rem;
            span:nth-child(2){
              color: #FCE62F;
            }
          }
        }
        p{
          font-size: .19rem;
          font-weight: bold;
        }
        .video-close{
          position: absolute;
          top: .2rem;
          left: 5.3rem;
          z-index: 10;
          cursor: pointer;
          width: .3rem;
          height: .3rem;
        }
        .open-url{
          cursor: pointer;
          color: #007DDB;
          font-size: .16rem;
          margin: .05rem 0;
        }
        .video-content-box{
          max-height: 1.5rem;
          overflow-y: auto;
          .one-video{
            color: #DFE2FD;
            font-size: .18rem;
            display: flex;
            justify-content: space-between;
            padding: .18rem 0;
            border-bottom: .01rem dashed #30BDFF;
            img{
              width: .24rem;
              height: .24rem;
              cursor: pointer;
            }
          }
        }
        .outside-video{
          position: absolute;
          z-index: 9;
          left: 5rem;
          top: 1.5rem;
          padding: 0.2rem;
          background: url("../../../assets/city-management/city-facilities/notice-bg.png")
          center no-repeat;
          background-size: 100% 100%;
        }
        .video-name{
          position: absolute;
          width: 4.5rem;
          top: .2rem;
          left: .2rem;
          font-size: .16rem;
          color: #fff;
          z-index: 99;
        }
      }
    }
    .toolbox{
      position: absolute;
      right: 7.9rem;
      top: 1.8rem;
      z-index: 98;
      .ambulance{
        background: url("../../../assets/common/carback.png") no-repeat;
        background-size: 100% 100%;
        height: .36rem;
        padding-left: .15rem;
        color: #83EBFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        img{
          width: .15rem;
          height: .2rem;
          margin-right: .15rem;
        }
        .name{
          font-size: .18rem;
          margin-right: .15rem;
          font-style: italic;
        }
        .status{
          display: inline-block;
          height: .16rem;
          line-height: .16rem;
          color: #000;
          font-size: .1rem;
          background: #83EBFF;
          padding: .02rem .02rem;
        }
      }
    }
    .modal-down{
      position: absolute;
      margin-top: -1rem;
      margin-left: 1.5rem;
    }
    .history-event{
      position: absolute;
      bottom: .4rem;
      left: 8.95rem;
      color: #83EBFF;
      border: .01rem solid #83EBFF;
      border-radius: .37rem;
      height: .37rem;
      line-height: .37rem;
      font-size: .18rem;
      text-align: center;
      padding: 0 .22rem;
      z-index: 9;
      background: rgba(0,0,0,0.74);
      box-shadow: 0px 6px 6px 0px rgba(93,188,237,0.17);
      font-style: italic;
      cursor: pointer;
    }
    .g-menu-box {
      position: absolute;
      left: 7.62rem;
      bottom: 0.47rem;
      z-index: 9999;
    }
    .g-title {
      display: inline-block;
      margin: 0.25rem 0 0 0.2rem;
      font-size: 0.24rem;
      line-height: 0.23rem;
      text-align: center;
      color: #fff;
      padding-left: 0.15rem;
      padding-bottom: .2rem;
      background: url('../../../assets/emergency-command/emergency-command-chart/title-line.png') center no-repeat;
      background-position: 0 .2rem;
      background-size: .87rem .25rem;
      > span {
        &:hover {
          color: #ffed66;
          text-shadow:0 0 0.1rem rgba(228,205,38,0.28);
        }
      }
    }
    .g-title-btn{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .g-title-1{
      margin: 0.2rem 0 0 0.2rem;
      &:hover {
        color: #ffed66;
        text-shadow:0 0 0.1rem rgba(228,205,38,0.28);
      }
    }
    .main-left-top {
      position: absolute;
      left: 0.29rem !important;
      top: 0.4rem !important;
      z-index: 1001;
      width: 7.01rem;
      height: 3.5rem;
      background: url('../../../assets/emergency-command/emergency-command-chart/panel-back.png')  no-repeat;
      background-size: 100% 100%;
      .left-top-echart {
        position: relative;
        padding: 0 .3rem;
        box-sizing: border-box;
        .phone-list-box {
          margin-top: 0.18rem;
          height: 2.02rem;
          overflow: auto;
          transition: all 0.5s;
          .phone-list {
            width: 2.05rem;
            list-style: none;
            box-sizing: border-box;
            .phone-list-item {
              display: flex;
              align-items: center;
              padding: 0.02rem 0;
              margin-top: .011rem;
              .list-icon {
                width: 0.32rem;
                height: 0.33rem;
              }
              .list-item-text {
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 0.17rem;
                color: #FFF;
              }
            }
          }
          .anim{
            transition: all 0.5s;
          }
        }
        .phone-detail-box {
          display: flex;
          margin-top: .1rem;
          .phone-detail-wrapper {
            position: relative;
            width: 100%;
            box-sizing: border-box;
            padding: 0.11rem 0 0.22rem 0;
            background: url("../../../assets/emergency-command/emergency-command-chart/phone-item-bg.png") no-repeat center;
            background-size: 100% 100%;
            .phone-detail-item {
              font-size: 0;
              height: 0.17rem;
              margin-top: 0.11rem;
              .phone-detail-dot {
                display: inline-block;
                vertical-align: top;
                width: 0.06rem;
                height: 0.06rem;
                background-color: #27EBFF;
                margin: 0.055rem 0.1rem 0 0.24rem;
              }
              .phone-detail-label {
                height:0.17rem;
                font-size:0.17rem;
                font-weight:500;
                color: #FFF;
              }
              .phone-detail-value {
                height:0.17rem;
                font-size:0.17rem;
                font-weight:500;
                color: #FBE62F;
              }
            }
            .phone-icon {
              position: absolute;
              top: 0.48rem;
              right: 0.6rem;
              width: 0.24rem;
              height: 0.24rem;
              cursor: pointer;
            }
            .phone-icon1 {
              position: absolute;
              top: 0.48rem;
              right: 0.2rem;
              width: 0.24rem;
              height: 0.24rem;
              cursor: pointer;
            }
            &:last-child {
              margin-left: .1rem;
            }
          }
        }
      }
      .room-phone{
        padding: 0 0.25rem;
        color: #FFFD5F;
        font-size: 0.17rem;
        display: flex;
        flex-wrap: wrap;
        height: .88rem;
        overflow: auto;
        > div{
          width: 33.3%;
        }
        p{
          font-size: 0.19rem;
          color: #fff;
          font-weight: bold;
          margin-top: .05rem;
        }
        .room-phone-content{
          > div{
            padding-left: .4rem;
            margin-top: .15rem;
          }
        }
        .phone-icon{
          margin-left: .05rem;
          width: .17rem;
          height: .17rem;
          cursor: pointer;
        }
      }
    }
    .main-right-center {
      position: absolute;
      left: .29rem !important;
      top: 4.1rem !important;
      z-index: 1000;
      width: 7.01rem;
      height: 3.1rem;
      background: url('../../../assets/emergency-command/emergency-command-chart/panel-back.png') center no-repeat;
      background-size: 100% 100%;
      .warning-info-box {
        height: 2.1rem;
        overflow: hidden;
        transition: all 0.5s;
        cursor: pointer;
        .warning-info-list {
          width: 100%;
          overflow: hidden;
          list-style: none;
          padding: 0 0.25rem;
          box-sizing: border-box;
          .warning-info-item {
            height: .95rem;
            overflow: hidden;
            padding: .05rem 0;
            .warning-list-box {
              p {
                line-height: 0.2rem;
                font-size: 0.16rem;
                font-weight:400;
                color: #FFF;
                margin-top: 0.04rem;
                padding-left: 0.08rem;
                line-height: 135%;
              }
              .warning-text {
                display: flex;
                align-items: center;
                font-size:0.18rem;
                font-weight:400;
                color: #E0E3FB;
                .warning-type {
                  flex: 1;
                  display: flex;
                  align-items: center;
                  img {
                    width: 0.32rem;
                    height: 0.33rem;
                  }
                  span {
                    display: inline-block;
                    width: 1.6rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-size: 0.21rem;
                    color: #FFF116;
                  }
                }
                .warning-from{
                  width: 1.8rem;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .warning-time {
                  width: 2rem;
                  text-align: right;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
            &:first-child {
            }
          }
        }
        .anim{
          transition: all 0.5s;
        }
      }
    }
    .main-left-bottom {
      position: absolute;
      left: 0.29rem !important;
      top: 7.38rem !important;
      z-index: 1000;
      width: 7.02rem;
      height: 3.3rem;
      background: url('../../../assets/emergency-command/emergency-command-chart/panel-back.png') center no-repeat;
      background-size: 100% 100%;
      color:rgba(223,226,251,1);
      .main-left-bottom-echart {
        height: 2.5rem;
      }
    }
    .main-right-top {
      position: absolute;
      left: 35.64rem !important;
      top: 0.4rem !important;
      z-index: 1001;
      width: 7.01rem;
      height: 3.1rem;
      background: url('../../../assets/emergency-command/emergency-command-chart/panel-back.png') center no-repeat;
      background-size: 100% 100%;
      .filter-water{
        padding: 0 .3rem 0 .5rem;
        display: flex;
        justify-content: center;
        margin-top: .1rem;
        > div{
          font-size: .16rem;
          height: .25rem;
          line-height: .25rem;
          background: #2B304E;
          color: #fff;
          padding: 0 .15rem;
          border-radius: .25rem;
          margin-right: .1rem;
          cursor: pointer;
        }
        .water-active{
          background: #0063CD;
        }
      }
      .site-monitor-box{
        height: 1.9rem;
        padding: 0 .3rem 0 .5rem;
      }
      .site-monitor-content{
        color: #fff;
        height: 1.9rem;
        line-height: 1.9rem;
        text-align: center;
        font-size: .2rem;
        font-weight: bold;
      }
    }
    .main-left-center{
      position: absolute;
      left: 35.64rem !important;
      top: 3.8rem !important;
      z-index: 1000;
      width: 7.01rem;
      height: 3.4rem;
      background: url('../../../assets/emergency-command/emergency-command-chart/panel-back.png') center no-repeat;
      background-size: 100% 100%;
      .select{
          position: relative;
          &::before {
            position: absolute;
            top: 0.09rem;
            right: 0.12rem;
            content: "";
            display: block;
            border-top: 0.05rem solid transparent;
            border-right: 0.05rem solid transparent;
            border-bottom: 0.05rem solid white;
            border-left: 0.05rem solid transparent;
          }
          &::after {
            position: absolute;
            top: 0.09rem;
            right: 0.12rem;
            content: "";
            display: block;
            border-top: 0.05rem solid #fff;
            border-right: 0.05rem solid transparent;
            border-bottom: 0.05rem solid transparent;
            border-left: 0.05rem solid transparent;
          }
          ul {
            position: absolute;
            top: 0.25rem;
            left: -0.1rem;
            width: 100%;
            text-align: center;
            color: #fff;
            font-size: 0.16rem;
            background: url("../../../assets/city-management/economic-run/major-project/right-bottom-02.png")
            no-repeat;
            background-size: 100% 100%;
            padding: .2rem 0.1rem;
            z-index: 100;
            li {
              list-style-type: none;
              height: 0.35rem;
              line-height: 0.35rem;
            }
            .active {
              color: #ffd200;
            }
          }
        }
      .filter-water{
        padding: 0 .3rem 0 .5rem;
        display: flex;
        justify-content: center;
        margin-top: .1rem;
        > div{
          font-size: .16rem;
          height: .25rem;
          line-height: .25rem;
          background: #2B304E;
          color: #fff;
          padding: 0 .15rem;
          border-radius: .25rem;
          margin-right: .1rem;
          cursor: pointer;
        }
        .water-active{
          background: #0063CD;
        }
      }
      .chart-main-water{
        height: 2.2rem;
        padding: 0 .3rem 0 .5rem;
      }
    }
    .main-right-bottom {
      position: absolute;
      left: 35.64rem !important;
      top: 7.4rem !important;
      z-index: 1000;
      width: 7.02rem;
      height: 3.2rem;
      background: url('../../../assets/emergency-command/emergency-command-chart/panel-back.png') center no-repeat;
      background-size: 100% 100%;
      color: rgba(223,226,251,1);
      .video-content{
        display: flex;
        align-items: center;
        padding: 0 .4rem;
        margin-top: .2rem;
        .v-left{
          width: .3rem;
          transform: rotate(180deg);
          cursor: pointer;
        }
        .v-titles{
          flex: 1;
          display: flex;
          align-items: center;
          cursor: pointer;
          > div{
            width: 1.4rem;
            font-size: .18rem;
            color: #5DD2F4;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .video-active{
            font-size: .2rem;
            font-weight: bold;
            color: #FBC000;
            cursor: pointer;
          }
        }
        .v-right{
          width: .3rem;
          cursor: pointer;
        }
      }
      .video-box{
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 0 .4rem;
        margin-top: .1rem;
        .video-title-1,
        .video-title-2{
          position: absolute;
          bottom: 0;
          left: 8%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #fff;
          font-size: .16rem;
          height: .3rem;
          span{
            width: 2.2rem;
            display: block;
            overflow: hidden;
            display: block;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          img{
            width: .22rem;
            height: .22rem;
            margin-right: .2rem;
            cursor: pointer;
          }
        }
        .video-title-2{
          left: 55%;
        }
        > div{
          width: 3rem;
          height: 1.64rem;
        }
      }
    }
    .marker-info-wrapper {
      position: absolute;
      /*top: 2.37rem;*/
      /*right: 12rem;*/
      z-index: 999;
      .marker-info-status-tip {
        z-index: 100;
        // width: 3.76rem;
        /*min-height: 2.5rem;*/
        padding: 0.1rem 0.17rem 0.2rem 0.17rem;
        box-sizing: border-box;
        .derict{
          float: left;
          width: 2rem;
          height: 1.5rem;
          margin-top: -2rem;
          margin-left: -.1rem
        }
        .bbbox{
          float: left;
          margin-top: -2.5rem;
          margin-left: 2rem;
          width: 3.5rem;
          background: url("../../../assets/emergency-command/emergency-command-chart/accident-status-tip.png") no-repeat center;
          background-size: 100% 100%;
          padding: .2rem .4rem;
        }
      }
      .marker-info-status-on {
        margin-top: -2rem;
        margin-left: 1rem;
        z-index: 9999;
        width: 5.48rem;
        min-height: 4.82rem;
        padding: 0.1rem 0.26rem 0.2rem 0.26rem;
        box-sizing: border-box;
        background: url("../../../assets/emergency-command/emergency-command-chart/accident-status-detail.png") no-repeat center;
        background-size: 100% 100%;
        .marker-info-btn {
          margin-top: 0.14rem;
        }
      }
      .marker-info-status-detail {
        margin-top: -2rem;
        margin-left: .8rem;
        z-index: 100;
        width: 4.36rem;
        min-height: 3.92rem;
        padding: 0.1rem 0.26rem 0.2rem 0.26rem;
        box-sizing: border-box;
        background: url("../../../assets/emergency-command/emergency-command-chart/accident-status-detail.png") no-repeat center;
        background-size: 100% 100%;
      }
      .marker-info-status-edit {
        margin-top: -2rem;
        margin-left: 1.5rem;
        z-index: 100;
        min-width: 3.76rem;
        min-height: 2.5rem;
        padding: 0.1rem 0.17rem 0.2rem 0.17rem;
        box-sizing: border-box;
        background: url("../../../assets/emergency-command/emergency-command-chart/accident-status-tip.png") no-repeat center;
        background-size: 100% 100%;
      }
      .marker-info-status-close {
        float: right;
        margin-top: .25rem;
        width: 0.29rem;
        height: 0.29rem;
        background: url("../../../assets/emergency-command/emergency-command-chart/close-bg.png") no-repeat center;
        background-size: 100% 100%;
        z-index: 1;
        cursor: pointer;
      }
      .marker-row {
        display: flex;
        align-items: center;
      }
      .marker-select {
        width: 1.23rem;
        height: 0.3rem;
        background:rgba(0,45,113,0.58);
        border:0.01rem solid rgba(41,143,247,1);
        border-radius:0.02rem;
        box-sizing: border-box;
      }
      .marker-case-wrapper {
        height: 1.4rem;
        margin-bottom: .15rem;
        .marker-case-item {
          display: flex;
          align-items: center;
          margin-top: 0.14rem;
          padding-left: 0.06rem;
          box-sizing: border-box;
          .marker-case-radio {
            width: 0.16rem;
            height: 0.16rem;
            box-sizing: border-box;
            border-radius: 50%;
            border: 0.01rem solid #9BE9FF;
            .marker-radio-selected {
              width: 0.08rem;
              height: 0.08rem;
              border-radius: 50%;
              background-color: #9BE9FF;
              margin: 0.03rem;
            }
          }
          .marker-case-text {
            font-size:0.18rem;
            font-weight:bold;
            font-style:italic;
            color: #FFF;
            padding-left: 0.07rem;
          }
          .marker-case-recommend {
            width: 0.41rem;
            height: 0.19rem;
            margin-left: 0.08rem;
          }
        }
      }
      .case-pagination {
        display: flex;
        align-items: center;
        margin-top: 0.2rem;
        .pre-page {
          border-left-width: 0.16rem;
          border-right-width: 0.16rem;
          border-top-width: 0.08rem;
          border-bottom-width: 0.08rem;
          border-style: solid;
          border-color: transparent #66F3FF transparent transparent;
          margin-left: -0.08rem;
          cursor: pointer;
        }
        .next-page {
          border-left-width: 0.16rem;
          border-right-width: 0.16rem;
          border-top-width: 0.08rem;
          border-bottom-width: 0.08rem;
          border-style: solid;
          border-color: transparent transparent  transparent #66F3FF;
          margin-right: -0.08rem;
          cursor: pointer;
        }
        .next-btn-disabled {
          cursor: not-allowed;
          border-color: transparent transparent  transparent #eee;
        }
        .pre-btn-disabled {
          cursor: not-allowed;
          border-color: transparent #eee transparent transparent;
        }
        .page-item-wrapper {
          flex: 1;
          text-align: center;
          font-size: 0;
          .page-item {
            display: inline-block;
            vertical-align: top;
            width: 0.1rem;
            height: 0.1rem;
            border-radius: 50%;
            background:rgba(102,243,255,.4);
            margin-left: 0.1rem;
          }
          .page-item-selected {
            background: #66F3FF;
          }
        }
      }
      .marker-info-item {
        flex: 1;
        display: flex;
        align-items: center;
        margin-top: 0.19rem;
        .marker-info-icon {
          width: 0.32rem;
          height: 0.32rem;
          cursor: pointer;
        }
        .marker-info-close{
          cursor: pointer;
        }
        .marker-info-text {
          flex: 1;
          font-size:0.18rem;
          color: #DFE2FD;
        }
        .marker-info-text-title {
          flex: 1;
          font-size:0.21rem;
          font-weight: bold;
          color: #FFF;
        }
        .marker-label {
          font-size:0.18rem;
          font-weight: bold;
          color: #DFE2FD;
          padding-left: 0.04rem;
        }
        .marker-value {
          font-size:0.22rem;
          line-height: 0.22rem;
          font-weight:bold;
          font-style:italic;
          color: #FCE62F;
        }
        .marker-change-btn {
          width:0.67rem;
          height:0.3rem;
          line-height: 0.26rem;
          background:rgba(0,45,113,0.58);
          border:0.01rem solid rgba(41,143,247,1);
          border-radius:0.15rem;
          font-size:0.17rem;
          font-weight:bold;
          color: #FFF;
          text-align: center;
          box-sizing: border-box;
          margin-left: 0.19rem;
          cursor: pointer;
        }
        &:nth-child(1) {
          .marker-info-text {
            font-size:0.21rem;
            font-weight: bold;
            padding-left: 0.06rem;
          }
        }
        &:nth-child(4) {
          margin-top: 0.25rem;
        }
        &:nth-child(5) {
          margin-top: 0.25rem;
          /*.marker-label {*/
          /*width: 0.9rem;*/
          /*}*/
        }
      }
      .marker-info-name {
        font-size:0.18rem;
        font-weight:bold;
        color: #FFF;
        margin-top: 0.22rem;
        padding-left: 0.05rem;
      }
      .marker-info-btn {
        margin-top: 0.22rem;
        .marker-btn {
          width: 1.78rem;
          height: 0.66rem;
          line-height: 0.6rem;
          background: url("../../../assets/emergency-command/emergency-command-chart/btn-orange-bg.png") no-repeat center;
          background-size: 100% 100%;
          font-size:0.2rem;
          font-weight:400;
          color: #FFF;
          margin: 0 auto;
          text-align: center;
          cursor: pointer;
        }
        .marker-btn-detail {
          background: url("../../../assets/emergency-command/emergency-command-chart/btn-blue-bg.png") no-repeat center;
          background-size: 100% 100%;
        }
      }
    }
    .operation-box-wrapper {
      z-index: 3;
      width: 6.42rem;
      height: 3.48rem;
      background: url("../../../assets/emergency-command/emergency-command-chart/operation-bg.png") no-repeat center;
      background-size: 100% 100%;
      padding: 0.4rem 0.5rem 0 0.5rem;
      box-sizing: border-box;
      .operation-title-box {
        position: absolute;
        display: flex;
        padding-left: 0.58rem;
        box-sizing: border-box;
        .lengend-title-right {
          display: flex;
          flex-direction: row;
          color: #9be9ff;
          margin-left: .8rem;
          >span {
            font-size: .17rem;
            height: 0.41rem;
            line-height: 0.6rem;
            margin-left: 0.13rem;
          }
          .scoped {
            width: 0.30rem;
            height: 0.18rem;
            border-radius: 0.09rem;
            margin: .2rem .13rem 0;
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
          .distance-scroll-box{
            width: 2rem;
          }
        }
      }
      .operation-content-box {
        display: flex;
        width: 100%;
        height: 3rem;
        .operation-left-box {
          position: relative;
          margin-left: 0.1rem;
          width: 1rem;
          .level-one-box {
            position: absolute;
            top: 0.3rem;
            left: 0.12rem;
            width: 0.78rem;
            height: 0.49rem;
            display: flex;
            align-items: center;
            cursor: pointer;
            .level-one-line {
              width:0.17rem;
              height:0.02rem;
              background:rgba(0,211,255,0.6);
              margin-left: 0.08rem;
            }
            .level-one-text {
              margin-left: 0.08rem;
              width: 0.36rem;
              font-size:0.16rem;
              font-weight:500;
              color:rgba(255,255,255,.78);
              line-height:0.2rem;
            }
            &:nth-child(2) {
              left: -0.05rem;
              top: 1.2rem;
            }
            &:nth-child(3) {
              border-radius: 0;
              left: .07rem;
              top: 2.15rem;
            }
          }
          .level-one-box-selected {
            background: url("../../../assets/emergency-command/emergency-command-chart/operation-status-bg1.png") no-repeat center;
            background-size: 100% 100%;
            .level-one-text {
              font-size: 0.18rem;
              color: #FFE600;
            }
            &:nth-child(2) {
              background-image: url("../../../assets/emergency-command/emergency-command-chart/operation-status-bg2.png");
            }
            &:nth-child(3) {
              background-image: url("../../../assets/emergency-command/emergency-command-chart/operation-status-bg3.png");
            }
            &:nth-child(4) {
              background-image: url("../../../assets/emergency-command/emergency-command-chart/operation-status-bg4.png");
            }

          }
        }
        .operation-center-box {
          flex: 1;
          margin-right: 0.3rem;
          margin-top: .15rem;
          height: 2.6rem;
          overflow-y: auto;
          .operation-classify-box {
            display: flex;
            align-items: center;
            margin-top: 0.14rem;
            .operation-level-two {
              font-size:0.16rem;
              font-weight:bold;
              color:#FFF;
              margin-left: 0.1rem;
              &:first-child {
                margin-left: 0;
              }
            }
            .operation-level-two-selected {
              font-size: 0.18rem;
              color: #F8E631;
            }

          }
          .operation-item-box {
            position: relative;
            margin-top: .25rem;
            .mmaker{
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              z-index: 9;
            }
            .operation-item-single{
              display: flex;
              flex-wrap: wrap;
              > div {
                width: 25%;
                margin-bottom: 0.25rem;
              }
            }
            .operation-item-top {
              position: relative;
              img {
                width: 0.48rem;
                height: 0.48rem;
              }
              .operation-check-box {
                position: absolute;
                top: 0.1rem;
                right: 0.25rem;
                width:0.15rem;
                height:0.15rem;
                border:0.01rem solid #9BE9FF;
              }
              .operation-check-box-selected{
                background: #FFD200;
                text-align: center;
                &::after{
                  position: absolute;
                  top: -.05rem;
                  font-size: .18rem;
                  right: 0rem;
                  font-weight: bold;
                  content: '\2714';
                  color: #000;
                }
              }
            }
            .operation-item-bottom {
                width: 80%;
                height: 0.35rem;
                font-size: 0.16rem;
                font-weight: 500;
                font-style: italic;
                color: #9BE9FF;
                line-height:0.2rem;
                text-align: center;
              }
          }
        }
      }
    }
  }
  .makers,
  .other-makers{
    position: absolute;
    z-index: 100;
    cursor: pointer;
    margin-left: -.45rem;
    margin-top: -.8rem;
    .makers-title{
      position: absolute;
      top: -.2rem;
      left: -.2rem;
      color: #fff;
      font-size: .18rem;
      padding: .03rem .2rem;
      max-width: 2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      background-color: rgba(0,72,107,.5);
      border: .02rem solid rgba(103, 207, 255, .75);
    }
    .makers-title-content{
      position: relative;
      img:nth-child(1){
        position: absolute;
        left: 0;
        top: 0;
        width: .8rem;
        height: .8rem;
      }
      img:nth-child(2){
        position: absolute;
        left: .2rem;
        top: .12rem;
        width: .4rem;
        height: .4rem;
      }
    }
    .inside{
      position: absolute;
      left: .45rem;
      top: .15rem;
      z-index: 2;
      width: .35rem;
      height: .35rem;
    }
    .outside{
      position: absolute;
      top: 0;
      left: 0;
      width: 1rem;
      height: 1.3rem;
    }
  }
  .panel-makers{
    position: absolute;
    cursor: pointer;
    margin-left: -.5rem;
    .down-deep-box{
      position: absolute;
      left: 1.5rem;
      top: -1rem;
      .kkk-jkl{
        margin-top: -1.3rem;
        margin-left: .35rem;
        >img{
          position: absolute;
          top: .8rem;
          left: -1rem;
          width: .8rem;
          height: .8rem;
        }
      }
      .makers-panel-content{
        width: 4rem;
        float: left;
        margin-top: 3rem;
        margin-left: 1.8rem;
        background: url("../../../assets/common/win-info-icon-02.png") no-repeat;
        background-size: 100% 100%;
        padding: .5rem .3rem;
        color: #fff;
        transform: translate(-50%, -50%);
        .outside-video{
          position: absolute;
          z-index: 9;
          left: 5rem;
          top: 1.5rem;
          padding: 0.2rem;
          background: url("../../../assets/city-management/city-facilities/notice-bg.png")
          center no-repeat;
          background-size: 100% 100%;
        }
        .makers-panel-close{
          font-size: .22rem;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
          img{
            cursor: pointer;
            width: .3rem;
            height: .3rem;
          }
        }
        .one{
          display: flex;
          color: #DFE2FD;
          font-size: .18rem;
          mamrgin: .05rem 0;
          > div{
            flex: 1;
            margin-top: .17rem;
            span:nth-child(2){
              color: #FCE62F;
            }
          }
        }
        p{
          font-size: .19rem;
          font-weight: bold;
        }
        .video-close{
          position: absolute;
          top: .2rem;
          left: 5.1rem;
          z-index: 10;
          cursor: pointer;
          width: .3rem;
          height: .3rem;
        }
        .open-url{
          cursor: pointer;
          color: #007DDB;
          font-size: .16rem;
          margin: .05rem 0;
        }
        .video-content-box{
          max-height: 1.5rem;
          overflow-y: auto;
          .one-video{
            color: #DFE2FD;
            font-size: .18rem;
            display: flex;
            justify-content: space-between;
            padding: .18rem 0;
            border-bottom: .01rem dashed #30BDFF;
            img{
              width: .24rem;
              height: .24rem;
              cursor: pointer;
            }
          }
        }
        .video-name{
          width: 4rem;
          font-size: .16rem;
          color: #fff;
          z-index: 99;
        }
        .maker-panle {
          box-sizing: border-box;
          width: 5.2rem;
          height: 3.2rem;
          background-size: 100% 100%;
          z-index: -1;
          margin-top: .15rem;
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
    }
    &:hover{
      z-index: 999;
    }
    .makers-title{
      display: none;
      position: absolute;
      top: -.2rem;
      left: 50%;
      transform: translateX(-50%);
      margin-left: .5rem;
      color: #fff;
      font-size: .18rem;
      padding: .03rem .2rem;
      max-width: 2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      background-color: rgba(0,72,107,.5);
      border: .02rem solid rgba(103, 207, 255, .75);
    }
    .inside{
      position: absolute;
      left: .35rem;
      top: .25rem;
      z-index: 2;
      width: .35rem;
      height: .35rem;
      &:hover ~ .makers-title{
        display: block;
      }
    }
    .outside{
      position: absolute;
      top: 0;
      left: 0;
      width: 1rem;
      height: 1.2rem;
      &:hover ~ .makers-title{
        display: block;
      }
    }
  }
  #warn-and-notice{
    cursor: move;
    position: absolute;
    z-index: 20;
    left: 8rem;
    top: 1.8rem;
  }
  .natural-panel{
    position: absolute;
    bottom: .3rem;
    left: 27.2rem;
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
  .accident-wrapper {
    position: absolute;
    top: 1.42rem;
    left: 7.37rem;
    display: flex;
    z-index: 1001;
    .accident-title {
      background: url("../../../assets/emergency-command/emergency-command-chart/bg-selected.png") no-repeat;
      background-size: 0.33rem 0.33rem;
      font-size:0.24rem;
      font-weight:500;
      color: #FFF;
      margin-left: 0.46rem;
      padding-left: 0.38rem;
      height: 0.33rem;
      line-height: 0.33rem;
    }
    .accident-title-two {
      position: relative;
      margin-top: 0;
      .accident-plan-detail {
        position: absolute;
        right: 0.83rem;
        top: 0;
        font-size:0.16rem;
        font-weight:500;
        color: #00F5E7;
        cursor: pointer;
      }
    }
    .accident-close {
      position: absolute;
      top: 0.3rem;
      right: 0.22rem;
      width: 0.29rem;
      height: 0.29rem;
      background: url("../../../assets/emergency-command/emergency-command-chart/close-bg.png") no-repeat center;
      background-size: 100% 100%;
      z-index: 1;
      cursor: pointer;
    }
    .accident-small {
      position: absolute;
      top: 0.3rem;
      right: 0.6rem;
      width: 0.29rem;
      height: 0.29rem;
      background: url("../../../assets/emergency-command/emergency-command-chart/small-icon.png") no-repeat center;
      background-size: 100% 100%;
      z-index: 1;
      cursor: pointer;
    }
    .accident-bigger {
      position: absolute;
      top: 0.3rem;
      right: 0.6rem;
      width: 0.29rem;
      height: 0.29rem;
      background: url("../../../assets/emergency-command/emergency-command-chart/bigger-icon.png") no-repeat center;
      background-size: 100% 100%;
      z-index: 1;
      cursor: pointer;
    }
    .accident-item {
      position: relative;
      width: 7.63rem;
      height: 6.75rem;
      background: url("../../../assets/emergency-command/emergency-command-chart/accident-bg.png") no-repeat center;
      background-size: 100% 100%;
      .accident-item-outer-box {
        position: relative;
        width: 100%;
        height: 8.1rem;
        margin-top: 0.3rem;
        overflow: hidden;
        .accident-item-scroll-box {
          position: absolute;
          right: -0.4rem;
          left: 0;
          top: 0;
          bottom: 0;
          overflow-x: hidden;
          overflow-y: scroll;
          .accident-content-box {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            width: 100%;
            padding: 0.13rem 0.9rem 0.13rem 0.5rem;
            box-sizing: border-box;
            .accident-content-item {
              width: 50%;
              font-size: 0;
              margin-top: 0.05rem;
              line-height: 0.23rem;
              .item-dot {
                display: inline-block;
                vertical-align: top;
                margin-top: 0.055rem;
                width: 0.06rem;
                height: 0.06rem;
                background-color: #27EBFF;
                border-radius: 0.01rem;
              }
              .accident-content-item-label {
                font-size:0.17rem;
                line-height: 0.17rem;
                font-weight: 500;
                color: #FFF;
                padding-left: 0.08rem;
              }
              .accident-content-item-value {
                font-size:0.17rem;
                line-height: 0.17rem;
                font-weight: 500;
                color: #FBE62F;
              }
            }
            .accident-content-item-one {
              width: 100%;
            }
          }
          .accident-process-chart {
            margin-top: .15rem;
            width: calc(100% - 1.01rem);
            margin-left: 0.27rem;
          }
        }
      }
    }
    .accident-item-small {
      min-width: 4.33rem;
      height: 1.35rem;
      background: url("../../../assets/emergency-command/emergency-command-chart/detail-small-bg.png") no-repeat center;
      background-size: 100% 100%;
      padding: 0.5rem 1rem 0 0;
      box-sizing: border-box;
      margin-top: 3.3rem;
      .accident-bigger,
      .accident-close {
        top: 3.85rem;
      }
      .accident-title {
        margin-left: 0.3rem;
      }
    }
  }
  .breath{
    position: relative;
    width: .55rem !important;
    height: .55rem !important;
    animation: breath ease 4s infinite;
    img:nth-child(1){
      top: .15rem;
      left: .19rem;
      position: absolute;
      width: .55rem;
      height: .55rem;
      z-index: 2;
    }
    img:nth-child(2){
      top: 0;
      left: 0;
      position: absolute;
      width: .9rem;
      height: .9rem;
    }
  }
  @keyframes breath {
    0%{
      -webkit-filter: grayscale(50%);
      opacity: .5;
    }
    50%{
      -webkit-filter: grayscale(20%);
      opacity: 1;
    }
    100%{
      -webkit-filter: grayscale(50%);
      opacity: .5;
    }
  }
  /* 通讯弹窗 */
  #communication,
  #note{
    position: absolute;
    left: 15rem;
    top: 5rem;
    z-index: 20;
    cursor: move;
  }
  #head-quarter{
    position: absolute;
    z-index: 20;
    left: 10rem;
    top: 2rem;
    cursor: move;
  }
  #yj-people{
    position: absolute;
    z-index: 20;
    right: 10rem;
    top: 2rem;
    cursor: move;
   }
  /* 下钻弹窗样式 */
  .modal-jc{
    padding: 0 .1rem;
    .phone-icon{
      width: .2rem;
      height: .2rem;
      margin-left: .05rem;
    }
    .costom-two{
      display: flex;
      .costom-big{
        flex: 1;
      }
      .costom-small{
        width: 1.7rem;
      }
      >div{
        span:nth-child(1){
          color: #DFE2FD;
        }
        span:nth-child(2){
          color: #FCE62F;
          font-style:italic;
          text-align: right;
        }
      }
    }
    .costom-modal{
      margin-bottom: .15rem;
    }
    .costom-one{
      span:nth-child(1){
        color: #DFE2FD;
      }
      span:nth-child(2){
        color: #FCE62F;
        font-style:italic;
        text-align: right;
      }
    }
  }
</style>
