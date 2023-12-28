<!--
 * @Descripttion:重大活动保障一张图
 * @Author: luoxi
 * @Date: 2020-03-11 09:28:28
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-06-05 10:54:43
 -->
<template>
  <div class="major-guarantee-container">
    <head-component name="重大活动保障"></head-component>
    <select-component class="select-component" :data="activityList" @handleClick="handleClick"></select-component>
    <div class="g-menu-box">
      <main-list></main-list>
    </div>
    <div class="main-left-top">
       <p class="g-title">{{defaultDetailsData.name}}</p>
      <img class="title-bottom-img" src="@/assets/city-management/economic-run/three-base/title-icon.png"/>
      <div class="main-left-top-info">
        <div class="info-line">
          <div class="fl">
            <span>活动等级：</span>
            {{defaultDetailsData.hd01001}}
          </div>
          <div class="fr">
            <span>活动人数规模：</span>
            {{defaultDetailsData.hd01005}}人
          </div>
        </div>
        <div class="info-line">
          <div class="fl">
            <span>日期：</span>
            {{defaultDetailsData.hd01002}}
          </div>
          <div class="fr">
            <span>主办单位：</span>
            {{defaultDetailsData.hd01007}}
          </div>
        </div>
        <div class="info-line">
          <div class="fl">
            <span>地点：</span>
            {{defaultDetailsData.hd01003}}
          </div>
          <div class="fr">
            <span>协办单位：</span>
            {{defaultDetailsData.hd01006}}
          </div>
        </div>
        <div class="info-main" @mouseover="hoverFlag=true" @mouseout="hoverFlag=false">
          <div class="main">
            <span>活动简介：</span>
            {{defaultDetailsData.hd01008}}
          </div>
        </div>
      </div>
    </div>
    <img  v-show="hoverFlag" class="main-left-top-inner-img" src="@/assets/emergency-command/major-guarantee/line.png"/>
    <div v-show="hoverFlag" class="main-left-top-inner">
      <p>{{defaultDetailsData.name}}</p>
      <div>{{defaultDetailsData.hd01008}}</div>
    </div>
    <div class="main-left-center">
      <p class="g-title">活动保障组</p>
      <div class="accident-area-rank">
        <div class="list-box">
          <div
            class="list-inner-box"  id="list-box-item-01"
          >
            <div v-for="(item,index) in ensureManData" :key="index" class="list-box-item">
              <div class="left" v-for="(_item,_index) in item" :key="_index">
                <div class="line-data">
                  <span>{{_item.hd03003}}：</span>
                  {{_item.hd03002}}
                </div>
                <div class="line-data">
                  <span>电话：</span>
                  {{_item.hd03004}}
                  <img @click="handleCall(_item.hd03004, _item.hd03003)" src="../../../assets/emergency-command/major-guarantee/iphone.png">
                </div>
                <div class="line-data">
                  <span>联系地点：</span>
                  {{_item.hd03005}}
                </div>
              </div>
            </div>
            <div class="list-box-item" v-if="ensureManData.length<=0">
              <p class="no-data-notice">无数据</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-left-bottom">
      <p class="g-title">重要点位视频监控</p>
      <div class="dialog-toggle-btn" @click="mapVideoPoint">
        <span>查看详情</span>
        <img src="../../../assets/city-management/market-supervision/img/details-icon.png" />
      </div>
      <div class="btn-group">
        <div class="list-box">
          <div
            class="list-inner-box"
            id="list-box-item-02"
          >
            <div class="list-box-item" v-for="(item,index) in videoData "  :key="index">
              <div class="left" v-for="(_item,_index) in item" :key="_index">
                <div :id='"video-"+_item.id' class="video-item">
                </div>
                <div class="vedio-mask">
                  <p class="video-title">{{_item.ss11001}}</p>
                </div>
              </div>
            </div>
            <div class="list-box-item" v-if="videoData.length<=0">
              <p class="no-data-notice">无数据</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-left-top main-right-top">
      <p class="g-title">近5天天气</p>
      <div class="body-part">
        <div class="body-part-left" v-if="weathData.length>0">
          <div class="weather-date">{{weathData[0].week}}</div>
          <img
            class="weather-icon"
            :src="weathData[0].iconObj.icon"
          />
          <div class="weather-desc">
           {{weathData[0].temp}}
          </div>
          <div class="weather-bottom-right">
            <div class="temperature-desc">{{weathData[0].txt}}-{{weathData[0].txt2}}</div>
          </div>
        </div>
        <div class="body-part-right">
          <div class="weather-forecast-item" v-for="(item,index) in weathData.slice(1,5)" :key="index">
            <p class="week">{{item.week}}</p>
            <p class="date">{{item.date}}</p>
            <div class="air-qulity" :style="{'background':item.iconObj.color}">
              <img
                class="icon"
                :src="item.iconObj.icon"
                alt
              />
             </div>
            <p class="temperature"> {{item.txt}}-{{item.txt2}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="main-left-center main-right-center">
      <p class="g-title">预警信息</p>
      <div class="list-box"  @click="handleWarn(true)">
        <div
          @mouseover="stopAnimate(3)"
          @mouseleave="startAnimate(3)"
          :class="{'anim3':animate3}"
          class="list-inner-box"
          v-if="warnInfoData&&warnInfoData.length"
        >
          <div
            class="list-box-item"
            :class="{'selected':index%2===0}"
            v-for="(item,index) in warnInfoData"
            :key="index"
          >
            <div class="right">
              <div class="info">
                <div class="info-left fl">{{item.zh06002}}</div>
                <div class="info-right fr">{{item.zh06003}}</div>
              </div>
              <div class="detail">{{item.zh06004}}</div>
            </div>
          </div>
        </div>
        <p v-else class="no-data-notice">无数据</p>
      </div>
    </div>
    <div class="main-left-bottom main-right-bottom">
      <!-- <p class="g-title">点位监测情况</p> -->
      <div class="g-title-btn">
        <div class="g-title">点位监测情况</div>
        <div class="title-select" style="z-index: 9;" @click="showPosition = true">
          <div class="select">
            <span>查看详情</span>
            <img src="../../../assets/emergency-command/emergency-command-chart/detail.png">
          </div>
        </div>
      </div>
      <div class="list-box">
        <div
          @mouseover="stopAnimate(4)"
          @mouseleave="startAnimate(4)"
          :class="{'anim4':animate4}"
          class="list-inner-box"
          v-if="keyMoniorData&&keyMoniorData.length"
        >
          <div class="item"  v-for="(item,index) in keyMoniorData " :key="index">
            <div class="first">
              <p>
                <img src="../../../assets/emergency-command/major-guarantee/second-level.png" />
                <span class="main-text">{{item.jc02003}}</span>
              </p>
              <p class="sub-text">{{item.jc04001}}</p>
            </div>
            <div class="second">
              <span class="sub-text">{{item.LABEL}}</span>
              <span class="sub-text">{{item.jc02004}}</span>
              <span class="important-text">{{item.jc04004}}</span>
            </div>
          </div>
        </div>
        <p v-else class="no-data-notice">无数据</p>
      </div>
    </div>
    <!--操作面板-->
    <div class="natural-panel">
      <div class="user-dos" @click="panelBig = !panelBig">
        <div class="legend">图例</div>
        <div class="icon"></div>
      </div>
      <div class="operation-box-wrapper" v-show= "panelBig">
        <div class="operation-title-box">
          <div class="resource-tab-item"
              v-for="(item, index) in resourceTabList"
              :key="index"
              :class="item.isSelected ? 'resource-tab-item-selected' : ''"
              @click="onChangeResource(item)">
            {{item.name}}
          </div>
          <div class="distance-box">
            <!-- <span class="distance-title">资源核心</span> -->
             <div class="distance-scroll-box">
              <div class="scoped" @click="switchFlage = !switchFlage">
                <div class="scoped-inner" v-show="!switchFlage"></div>
                <div class="scoped-inner-02" v-show="switchFlage"></div>
                <div class="scoped-switch" :class="{'on':switchFlage}"></div>
              </div>
              <div style="width: 1.2rem">
                <slider ref="slider" :min=0 :max=50 v-model="km" unit="公里" @slideValue="slideValue"></slider>
              </div>
            </div>
            <!-- <div class="distance-infinite" @click="resetKm">不限</div> -->
          </div>
        </div>
        <!-- 重大活动区域 -->
        <div class="operation-content-box" v-if="resourceTabValue === '重大活动区域'">
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
            <div
              :class="operationLeftListIndex === 2 ? 'operation-item-box1' : 'operation-item-box'"
              v-if="operationLeftList[operationLeftListIndex].data.length > 0">
              <!-- 二级菜单 -->
              <div class="operation-item"
                   v-if="operationLeftListIndex != 2"
                   v-for="(items, index) in operationLeftList[operationLeftListIndex].data[operationLevelTwoIndex].data"
                   :key="index">
                <!-- <p>{{items[0].title}}</p> -->
                <div class="operation-item-single">
                  <div v-for="(item, ind) in items" :key="ind">
                    <div class="operation-item-top" @click="onCheckBox(item, ind, 'first', index)">
                      <img :src="imgPath+item.icon01"/>
                      <div class="operation-check-box"
                           :class="item.isSelected ? 'operation-check-box-selected' : ''"
                           ></div>
                    </div>
                    <div class="operation-item-bottom">{{item.label}}</div>
                  </div>
                </div>
              </div>
              <!-- 监控对象二级菜单 -->
              <div class="monitor-menu" v-if="operationLeftListIndex == 2">
                <div
                  v-for="(value, ind) in operationLeftList[operationLeftListIndex].data[operationLevelTwoIndex].data"
                  :key="ind">
                  <p>{{ind === 0 ? '重大危险源' : ind === 1 ? '自然灾害监测点' : ind === 2 ? '安全生产' : '公共卫生'}}</p>
                  <div class="monitor-detail">
                    <div class="operation-item"
                         v-for="(item, index) in value"
                         :key="index">
                      <div class="operation-item-top">
                        <img :src="imgPath+item.icon01"/>
                        <div class="operation-check-box"
                             :class="item.isSelected ? 'operation-check-box-selected' : ''"
                             @click="onCheckBox(item, index, 'monitor', ind)"></div>
                      </div>
                      <div class="operation-item-bottom">{{item.label}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fly-maker" :id="item.id" v-for="(item,index) in flyIds" :key="index">
      <p :class="{'p-02':!isThree}">{{item.name}}</p>
      <div class="img-box">
         <img class="img-box-2d" :class="{'img-box-2d-02':!isThree}"  :src="item.icon01"/>
        <img class="img-box-3d"  v-if="isThree" :src="item.icon02"/>
      </div>
    </div>
    <div class="security-zone-people" :style="{'right':panelBig?'14.3rem':'10.3rem'}" >
      <div class="left-zone">
         <div class="left-zone-item">
           <img src="@/assets/emergency-command/major-guarantee/zone01.png" alt="">
            管控区域
         </div>
         <div class="left-zone-item">
           <img src="@/assets/emergency-command/major-guarantee/zone02.png" alt="">
            引导区域
         </div>
         <div class="left-zone-item">
           <img src="@/assets/emergency-command/major-guarantee/zone03.png" alt="">
            缓冲区域
         </div>
      </div>
      <div class="right-security">
         <div class="right-security-item">
          <img src="@/assets/emergency-command/major-guarantee/people01.png" alt="">
            安保人员
         </div>
          <div class="right-security-item">
          <img src="@/assets/emergency-command/major-guarantee/people02.png" alt="">
            警力人员
         </div>
          <div class="right-security-item">
          <img src="@/assets/emergency-command/major-guarantee/people03.png" alt="">
            消防人员
         </div>
          <div class="right-security-item">
          <img src="@/assets/emergency-command/major-guarantee/people04.png" alt="">
            医疗救护人员
         </div>
      </div>
    </div>
    <div class="security-maker-01" :id="item.id" v-for="(item) in people01" :key="item.name">
      <img @click="selectSecuIdFn(item)" src="@/assets/emergency-command/major-guarantee/people01.png"/>
      <div class="zone-maker" v-if="selectSecuId===item.id">
        <img class="close-img" @click="selectSecuId = ''" src="@/assets/common/closepopicon.png"/>
        <h3>安保人员</h3>
        <div class="g-text-item">姓名：<span>{{item.hd06002}}</span></div>
        <div class="g-text-item">地址：<span>{{item.hd06004}}</span></div>
        <div class="g-text-item">联系电话：<span>{{item.hd06003}}</span></div>
      </div>
    </div>
    <div class="security-maker-01" :id="item.id" v-for="(item) in people02" :key="item.name">
      <img @click="selectSecuIdFn(item)" src="@/assets/emergency-command/major-guarantee/people02.png"/>
      <div class="zone-maker" v-if="selectSecuId===item.id">
        <img class="close-img" @click="selectSecuId = ''" src="@/assets/common/closepopicon.png"/>
        <h3>警力人员</h3>
        <div class="g-text-item">姓名：<span>{{item.hd06002}}</span></div>
        <div class="g-text-item">地址：<span>{{item.hd06004}}</span></div>
        <div class="g-text-item">联系电话：<span>{{item.hd06003}}</span></div>
      </div>
    </div>
    <div class="security-maker-01" :id="item.id" v-for="(item) in people03" :key="item.name">
      <img @click="selectSecuIdFn(item)" src="@/assets/emergency-command/major-guarantee/people03.png"/>
      <div class="zone-maker" v-if="selectSecuId===item.id">
        <img class="close-img" @click="selectSecuId = ''" src="@/assets/common/closepopicon.png"/>
        <h3>消防人员</h3>
        <div class="g-text-item">姓名：<span>{{item.hd06002}}</span></div>
        <div class="g-text-item">地址：<span>{{item.hd06004}}</span></div>
        <div class="g-text-item">联系电话：<span>{{item.hd06003}}</span></div>
      </div>
    </div>
    <div class="security-maker-01" :id="item.id" v-for="(item) in people04" :key="item.name">
      <img @click="selectSecuIdFn(item)" src="@/assets/emergency-command/major-guarantee/people04.png"/>
      <div class="zone-maker" v-if="selectSecuId===item.id">
        <img class="close-img" @click="selectSecuId = ''" src="@/assets/common/closepopicon.png"/>
        <h3>医疗救护人员</h3>
        <div class="g-text-item">姓名：<span>{{item.hd06002}}</span></div>
        <div class="g-text-item">地址：<span>{{item.hd06004}}</span></div>
        <div class="g-text-item">联系电话：<span>{{item.hd06003}}</span></div>
      </div>
    </div>
     <!-- 面板makers 十种类型-->
    <div
      class="panel-makers-box"
      v-for="(item, index) in panelData"
      :key="index">
      <div
        class="panel-makers"
        v-for="(val, ind) in item"
        v-if="val.lon && !val.cantShow"
        :id="val.id"
        :key="ind"
        >
        <img @click.stop="handleSeeDetail(val)" class="inside" :src="imgPath+val.icon01">
        <img @click.stop="handleSeeDetail(val)" class="outside" v-if="isThree" :src="imgPath+val.icon02">
        <div class="makers-title" :title="val.name">{{val.name}}</div>
         <!-- 下钻窗口 -->
      <modal-one
        class="common-modal"
        v-if="makerBoxType === 'one'&&makerDetailId===val.id"
        :data="makerDetail"
        @close="handleCloseDetail">
        <div slot="modal-costom" class="modal-jc">
          <div class="costom-modal costom-two">
            <div class="costom-small" v-if=" makerType !== 'aid'&&makerDetail.baseInfo.linkman01">
              <span>联系人：</span>
              <span>{{makerDetail.baseInfo.linkman01}}</span>
            </div>
            <div class="costom-big">
              <span>联系电话：</span>
              <span>{{makerDetail.baseInfo.phone01}}</span>
              <img class="phone-icon" src="../../../assets/emergency-command/emergency-command-chart/icon-tel.png">
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
      <modal-three
      class="common-modal"
      v-if="makerBoxType === 'three'&&makerDetailId===val.id"
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
        class="common-modal"
        v-if="makerBoxType === 'four'&&makerDetailId===val.id"
        :data="makerDetail"
        :type="makerType"
        @close="handleCloseDetail"></modal-four>
      <modal-five
        class="common-modal"
        v-if="makerBoxType === 'five'&&makerDetailId===val.id"
        :data="makerDetail"
        :type="makerType"
        @close="handleCloseDetail"></modal-five>
      <modal-six
        class="common-modal"
        v-if="makerBoxType === 'six'&&makerDetailId===val.id"
        :data="makerDetail"
        :type="makerType"
        :columnFirm="column[makerType]"
        @close="handleCloseDetail"></modal-six>
      </div>
    </div>
    <!-- 视频点位 -->
    <div class="video-maker"  :id="item.id" v-for="(item) in mapVideoPoints" :key="item.id">
       <div class="three-box" @click="openVideo(item)">
           <img class="maker-3d-img"  src="@/assets/common/video.png"/>
           <img class="maker-3d-box-img" v-if="threeType===1" src="@/assets/common/video-box.png"/>
        </div>
        <!-- :style="{'z-index':selectVideoId===item.id?100:-1}" -->
      <!-- <div class="maker-panle" :id="item.id+'-video-panle'" v-show="selectVideoId===item.id&&threeType===1">

      </div> -->
     </div>
    <!-- 通讯弹窗 -->
    <div id="communication" v-show="isCallShow">
      <phone-modal
        v-if="isCallShow"
        @close="handleCloseCom"
        :status="callStatus"
        :message="callParam"></phone-modal>
    </div>
     <!-- 范围标记点位 -->
     <div class="icon-box" :id="item.id" v-for="(item) in icons" :key="item.id">
      <img class="icon-img" src="@/assets/tool/end.png" />
    </div>
     <!--预警 / 通知-->
    <div id="warn-and-notice" v-show="isShowNotice">
      <notice-maker
        :data="warningListCopy"
        @close="handleWarn"
        @showTitle="showTooltip"
        @hideTitle="hideTooltip"></notice-maker>
    </div>
    <!-- 点位监测弹窗 -->
    <div id="position-monitor" v-show="showPosition">
      <monitor-position
        v-if="showPosition"
       @close="handleLocationClose"
       @handleLocation="handleLocation"
       @showTitle="showTooltip"
        @hideTitle="hideTooltip"></monitor-position>
    </div>
    <div class="maker-box" id="activity-center">
      <div class="maker-img">
        <img src="@/assets/common/event-line.png"/>
      </div>
      <div class="maker-text">
        <img  src="@/assets/common/event-icon.png" alt="" class="line2" />
        <div class="g-maker-text">
           <h3>{{defaultDetailsData.name}}</h3>
           <div class="g-text-item">时间：<span>{{defaultDetailsData.hd01002}}</span></div>
           <div class="g-text-item">位置：<span>{{defaultDetailsData.hd01003}}</span></div>
           <div class="g-text-item">活动人数规模：<span>{{defaultDetailsData.hd01005}}</span> 人</div>
           <div class="g-text-item">主办方：<span>{{defaultDetailsData.hd01007}}</span></div>
        </div>
      </div>
    </div>
    <!-- 显示标题完整信息 -->
    <text-modal ref="textModal"></text-modal>
    <!-- 视频弹框 -->
    <div  class="change-maker-panel"
         :class="{'change-maker-panel-select':bigVideoSelectId===item.id+'-video-panle'}"
         v-show="item.display"
         :style="{'top':4+(index+1)*0.5+'rem','left':18+(index+1)*0.5+'rem'}"
         :id="'maker-panle-video'+item.id" v-for="(item,index) in zoneVideosSelect" :key="'v'+item.id">
      <p>{{item.ss11001}}</p>
      <img class="close-img" src="@/assets/common/closepopicon.png" @click="hideVideoSelect(item)"/>
      <img class="big-img"  v-if="bigVideoSelectId!==item.id+'-video-panle'" src="@/assets/tool/big-img.png"  @click="bigVideoSelect(item)"/>
      <img class="samall-img" v-if="bigVideoSelectId===item.id+'-video-panle'" src="@/assets/tool/small-img.png" @click="bigVideoSelectId=''"/>
      <div
        class="maker-panle"
        :id="item.id+'-video-panle'"
      ></div>
    </div>
  </div>
</template>
<script>
import API from '@/api/emergency-command/major-guarantee'
import APIOP from '@/api/emergency-command/emergency-command-chart.js'
import mainList from '@/components/menu.vue'
import duoyun from '@/assets/city-management/environment/atmospheric-environment/duoyun.png'
import xiaoyu from '@/assets/city-management/environment/atmospheric-environment/xiaoyu.png'
import yintian from '@/assets/city-management/environment/atmospheric-environment/yintian.png'
import zhongyu from '@/assets/city-management/environment/atmospheric-environment/zhongyu.png'
import baoyu from '@/assets/city-management/environment/atmospheric-environment/baoyu.png'
import qingtian from '@/assets/city-management/environment/atmospheric-environment/qingtian.png'
import slider from '@/components/process-drag.vue'
import {imgPath, phoneWebSktPath} from '@/utils/BasePath'
import selectComponent from '@/components/select-guarant'
import modalOne from '@/components/slackingModal/modal-one' // 下钻窗口
import modalTwo from '@/components/slackingModal/modal-two' // 下钻窗口
import modalThree from '@/components/slackingModal/modal-three' // 下钻窗口
import modalFour from '@/components/slackingModal/modal-four' // 下钻窗口
import modalFive from '@/components/slackingModal/modal-five' // 下钻窗口
import modalSix from '@/components/slackingModal/modal-six' // 下钻窗口
import phoneModal from '@/components/slackingModal/phone-modal' // 手机电话弹窗
import headComponent from '@/components/head-component'
import WebSocketHelper from '@/utils/WebSocketHelper'
import { moveDiv } from '@/utils/utils'
import noticeMaker from '@/pages/emergency-command/emergency-command-chart/notice-maker'
import monitorPosition from '@/pages/emergency-command/emergency-command-chart/monitor-postion'
import textModal from '@/components/text-modal' // 显示标题完整信息
export default {
  components: {
    noticeMaker,
    monitorPosition,
    headComponent,
    mainList,
    slider,
    selectComponent,
    modalOne,
    modalTwo,
    modalThree,
    modalFour,
    modalFive,
    modalSix,
    phoneModal,
    textModal
  },
  data () {
    return {
      bigVideoSelectId: '',
      zoneVideosSelect: [], // 打开视频的列表
      isShowNotice: false,
      showPosition: false,
      hoverFlag: false,
      selectSecuId: '', // 选中安保人员的id
      activityList: [], // 重大活动列表
      activityId: 0, // 活动id
      activityCenter: null, // 活动中心点位
      flyEntityIds: [], // 飞行曲线实体ids
      flyIds: [], // 飞行曲线实体DOM id
      hd05002: [], // 引导区域经纬度数组
      hd05001: [], // 管控区域经纬度数组
      hd05003: [], // 缓冲区域经纬度数组
      hd05Ids: [], // 引导、管控、缓冲三个区域实体id
      people01: [], // 安保人员
      people02: [], // 警力人员
      people03: [], // 消防人员
      people04: [], // 医疗救护人员
      peoples: [], // 人员实体ids
      imgPath: imgPath,
      weathData: [],
      weathObject: {
        'duoyun': {
          icon: duoyun,
          color: '#00BF62'
        },
        'xiaoyu': {
          icon: xiaoyu,
          color: '#4CA3FF'
        },
        'yintian': {
          icon: yintian,
          color: '#4CA3FF'
        },
        'zhongyu': {
          icon: zhongyu,
          color: '#4CA3FF'
        },

        'baoyu': {
          icon: baoyu,
          color: '#4CA3FF'
        },
        'qingtian': {
          icon: qingtian,
          color: '#FFD13B'
        }
      },
      swfurl: './static/libs/flowplayer/flowplayer-3.2.18.swf',
      selectZone: null,
      isList: false,
      animate1: true,
      animate2: true,
      animate3: true,
      animate4: true,
      timer1: null,
      timer2: null,
      timer3: null,
      timer4: null,
      items: [
        {
          name: '峨眉山市'
        },
        {
          name: '市中区'
        },
        {
          name: '沙湾区'
        },
        {
          name: '五通桥区'
        },
        {
          name: '金口河区'
        },
        {
          name: '犍为县'
        },
        {
          name: '井研县'
        },
        {
          name: '夹江县'
        },
        {
          name: '沐川县'
        },
        {
          name: '峨边县'
        },
        {
          name: '马边县'
        }
      ],
      mapWindowList: [],
      left: 0,
      top: 0,
      defaultDetailsData: {},
      ensureManData: [],
      keyMoniorData: [],
      warnInfoData: [],
      warningListCopy: [],
      videoData: [],
      weeksWeatherInfo: [],
      // 操作面板
      resourceTabList: [
        {
          name: '重大活动区域',
          isSelected: true
        }
        // {
        //   name: '所有',
        //   isSelected: false
        // }
      ],
      resourceTabValue: '重大活动区域',
      operationLeftList: [ // 面板左侧菜单
        {
          name: '应急资源',
          requestObj: APIOP.GET_ALL_RESOURCE_MATERIALS,
          isSelected: true,
          data: []
        },
        {
          name: '重点防护',
          requestObj: APIOP.GET_ALL_RESOURCE_PROTECTION,
          isSelected: false,
          data: []
        },
        {
          name: '监测对象',
          requestObj: APIOP.GET_ALL_RESOURCE_MONITOR,
          isSelected: false,
          data: []
        },
        {
          name: '紧急救援',
          requestObj: APIOP.GET_ALL_RESOURCE_RESCUE,
          isSelected: false,
          data: []
        }
      ],
      km: 5, // 操作面板，默认5公里
      ceneterScope: {},
      icons: [],
      switchFlage: false,
      planResource: [], // 预案资源
      operationLeftListIndex: 0,
      operationLevelTwoIndex: 0,
      operationList: [
        {
          name: '应急资源',
          itemList: [
            {
              name: '应急物资',
              eventList: [
                {name: '卫生防疫物资', value: 1, isSelected: true},
                {name: '卫生防疫物资', value: 1, isSelected: false},
                {name: '卫生防疫物资', value: 1, isSelected: false}
              ],
              isSelected: true
            },
            {
              name: '应急人力',
              eventList: [
                {name: '卫生防疫物资'},
                {name: '卫生防疫物资'},
                {name: '卫生防疫物资'}
              ]
            },
            {
              name: '转移安置点',
              eventList: [
                {name: '卫生防疫物资'},
                {name: '卫生防疫物资'},
                {name: '卫生防疫物资'}
              ]
            },
            {
              name: '社会保障',
              eventList: [
                {name: '卫生防疫物资'},
                {name: '卫生防疫物资'},
                {name: '卫生防疫物资'}
              ]
            }
          ]
        },
        {
          name: '重点防护',
          itemList: [
            {name: '应急物资'},
            {name: '指挥部'},
            {name: '应急人力'},
            {name: '转移安置点'},
            {name: '社会保障'}
          ]
        },
        {
          name: '监测对象',
          itemList: [
            {name: '应急物资'},
            {name: '指挥部'},
            {name: '应急人力'},
            {name: '转移安置点'},
            {name: '社会保障'}
          ]
        },
        {
          name: '紧急救援',
          itemList: [
            {name: '应急物资'},
            {name: '指挥部'},
            {name: '应急人力'},
            {name: '转移安置点'},
            {name: '社会保障'}
          ]
        }
      ],
      panelData: {}, // 点击面板接口数据
      eventDetail: null, // 事件详细信息
      // isThree: 0, // 是否展示3d 底图

      makerType: '', // 当前点位类型
      makerBoxType: '', // 点位弹窗类型

      makerDetail: {}, // 点位详细数据
      makerDetailId: '', // 点中maker 的id
      panelBig: false,
      phoneSkt: null, // 电话socket
      callStatus: '', // 通话状态
      isCallShow: false,
      callParam: {
        name: '',
        phone: ''
      }, // 通话信息
      selectVideoId: '',
      threeType: 0, // 2d 3d 标志 0 2d 1 3d,
      mapVideoPoints: []
    }
  },
  computed: {
    isThree () {
      return this.$store.getters.GET_IS_THREE
    }
  },
  watch: {
    // 新增范围选择
    switchFlage (val) {
      if (!val) { // 关闭范围选择
        // 清空选择状态
        console.log(this.operationLeftList)
        this.clearCheckedBox(this.operationLeftList)
        // this.clearCheckedBox1()
        // 清空maker
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
  },
  mounted () {
    moveDiv('warn-and-notice')
    moveDiv('position-monitor')
    moveDiv('communication')
    this.getData()
    this.getOperationList()
    // webScoket 电话通讯
    let that = this
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
  methods: {
    // 打开监测预警详情
    handleWarn (flag) {
      this.isShowNotice = flag
    },
    // 点位详情撒点
    handleLocation (data) {
      if (this.panelData['DETRAIL_MONITOR']) {
        let isSave = false
        this.panelData['DETRAIL_MONITOR'].map(re => {
          if (re.id === data.id) {
            isSave = true
          }
        })
        if (!isSave) {
          this.panelData['DETRAIL_MONITOR'].push(data)
        }
      } else {
        this.panelData['DETRAIL_MONITOR'] = [data]
      }
      this.handleSeeDetail(data.id, 'monitor', data.typeCode)
      window._m.addMakers(this.panelData['DETRAIL_MONITOR'])
    },
    handleLocationClose () {
      this.panelData['DETRAIL_MONITOR'] = []
      this.showPosition = false
    },
    // 全部资源清空面板勾选状态
    clearCheckedBox (data) {
      for (let i = 0, j = data.length; i < j; i++) {
        if (Object.prototype.toString.call(data[i]) === '[object Object]') {
          this.clearCheckedBox(data[i].data)
        } else if (Object.prototype.toString.call(data[i]) === '[object Array]') {
          for (let m = 0, k = data[i].length; m < k; m++) {
            data[i][m].isSelected = false
          }
        }
      }
    },
    // 关闭电话
    handleCloseCom (flag) {
      this.isCallShow = flag
    },
    // 拨打电话
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
    // 视频撒点
    mapVideoPoint () {
      if (this.mapVideoPoints.length > 0) {
        this.mapVideoPoints.map((item) => {
        // let a = {...item}
          let a = item.id
          item.id = 'vMarker-' + a
          return item
        })
        this.$nextTick(() => {
          this.mapVideoPoints.forEach(d => {
            this.create(d.id + '-video-panle', d.ss11004)
          })
        })
        window._m.addMakers(this.mapVideoPoints, (data) => {
          this.threeType = data
        }, 8000)
      }
    },
    // openVideo (item) {
    //   this.selectVideoId = item.id
    //   let {lon, lat} = item
    //   window._m.getSouthPointByDistance({
    //     lon, lat
    //   }, () => {

    //   }, 8000)
    // },
    // 关闭选中的区域视频
    hideVideoSelect (item) {
      this.bigVideoSelectId = ''
      let index = this.zoneVideosSelect.findIndex((d) => {
        return item.id === d.id
      })
      if (index > -1) {
        let _d = this.zoneVideosSelect[index]
        _d.display = false
        this.$set(this.zoneVideosSelect, index, _d)
      }
    },
    bigVideoSelect (item) {
      this.bigVideoSelectId = item.id + '-video-panle'
    },
    openVideo (item) {
      console.log(item)
      let index = this.zoneVideosSelect.findIndex((d) => {
        return item.id === d.id
      })

      if (index < 0) {
        item.display = true
        this.zoneVideosSelect.push(item)
        this.$nextTick(() => {
          this.create(item.id + '-video-panle', item.ss11004)
          moveDiv('maker-panle-video' + item.id)
        })
      } else {
        let _d = this.zoneVideosSelect[index]
        _d.display = true
        this.$set(this.zoneVideosSelect, index, _d)
      }
    },
    resetKm () {
      this.km = ''
      this.$refs.slider.reset()
      this.pointsToMap()
    },
    selectSecuIdFn (item) { // 人员点击选择
      let {lon, lat} = item
      window._m.getSouthPointByDistance({
        lon, lat
      }, () => {
        this.selectSecuId = item.id
      }, 8000)
    },
    slideValue (km) { // 区域范围
      this.km = km
      this.pointsToMap()
    },
    handleCloseDetail () {
      this.makerBoxType = ''
      this.makerDetailId = ''
    },
    handleClick (name, item) {
      window._m.removeMaker(['activity-center'])
      this.defaultDetailsData = item
      this.activityId = item.id
      this.activityCenter = item.hd01004 ? JSON.parse(item.hd01004) : null
      if (this.activityCenter) {
        window._m.addMakers([{
          lon: this.activityCenter[0],
          lat: this.activityCenter[1],
          id: 'activity-center'
        }])
        let lon = this.activityCenter[0]
        let lat = this.activityCenter[1]
        window._m.getSouthPointByDistance({
          lon, lat
        })
      }
      this.queryInfoById(this.activityId)
    },
    handleSeeDetail (val) {
      let {type, type01, id} = val
      // 弹窗分类样式总和
      let types = {
        warehouse: 'three',
        team: 'one',
        shelter: 'one',
        social: 'one',
        '07': 'three',
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
        safety: 'five',
        aid: 'one'
      }
      if (type === 'monitor') {
        this.makerType = type01
      } else if (type === 'social') {
        if (type01 === '07') {
          this.makerType = type01
        } else {
          this.makerType = type
        }
      } else {
        this.makerType = type
      }
      this.makerType = type01 || type
      // 根据后台返回的type 和 type01 确定弹窗样式
      let activityid = this.activityId
      API.DETAIL_OF_LOCATION(this, {id: id, type: type, activityid, type01: type01}).then(res => {
        if (res.data.serviceSuccess) {
          let data = res.data.data
          window._m && window._m.getSouthPointByDistance(val, () => {
            this.makerDetail = data.data
            this.makerDetailId = val.id // 点中maker 的id
            this.makerBoxType = types[this.makerType]
          }, 8000)
        } else {
          console.log(res.data.errors)
        }
      })
    },
    // 全部资源与预案资源切换
    onChangeResource (obj) {
      if (obj.name === this.resourceTabValue) {
        return
      }
      this.resourceTabValue = obj.name
      this.resourceTabList.forEach((item, index) => {
        if (item.name === obj.name) {
          item.isSelected = true
        } else {
          item.isSelected = false
        }
      })
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
    getOperationList () {
      this.operationLeftList[0].requestObj(this, {}).then((res) => {
        if (res.data.serviceSuccess) {
          let data = res.data.data

          this.operationLeftList[0].data = [] // 应急资源 data2，data3 有pid需要转换 --- 未做
          // this.operationLeftList[0].data.push({name: '应急物资', data: data.data1, isSelected: true})
          // this.operationLeftList[0].data.push({name: '应急人力', data: data.data3, isSelected: false})
          // this.operationLeftList[0].data.push({name: '转移安置点', data: data.data4, isSelected: false})
          // this.operationLeftList[0].data.push({name: '社会保障', data: data.data5, isSelected: false})
          this.operationLeftList[0].data.push({name: '应急物资', data: [data.data1], isSelected: true})
          this.operationLeftList[0].data.push({name: '应急人力', data: this.formatterTwoMenu(data.data3), isSelected: false})
          this.operationLeftList[0].data.push({name: '转移安置点', data: [data.data4], isSelected: false})
          this.operationLeftList[0].data.push({name: '社会保障', data: [data.data5], isSelected: false})
        }
      })
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
      if (!this.operationLeftList[index].data.length) { // 如果data有数据，则不再从后台获取
        this.operationLeftList[index].requestObj(this).then((res) => {
          if (res.data.serviceSuccess) {
            let data = res.data.data
            this.operationLeftList[index].data = []
            switch (index) {
              case 0: // 应急资源 data2，data3 有pid需要转换 --- 未做
                this.operationLeftList[index].data.push({name: '应急物资', data: [data.data1], isSelected: true})
                // this.operationLeftList[index].data.push({name: '指挥部', data: [data.data2], isSelected: false})
                this.operationLeftList[index].data.push({name: '应急人力', data: this.formatterTwoMenu(data.data3), isSelected: false})
                this.operationLeftList[index].data.push({name: '转移安置点', data: [data.data4], isSelected: false})
                this.operationLeftList[index].data.push({name: '社会保障', data: [data.data5], isSelected: false})
                break
              case 1: // 重点 防护 data有pid需要转换 --- 未做，用commonUtils.translateDataToTree转换
                data = data.data
                // data = commonUtils.translateDataToTree(data)
                this.operationLeftList[index].data.push({name: '重点防护目标', data: this.formatterTwoMenu(data), isSelected: true})
                break
              case 2: // 监测 对象
                this.operationLeftList[index].data.push({name: '监测对象', data: [data.data1, data.data2, data.data3, data.data4], isSelected: true})
                break
              case 3: // 紧急 救援
                data = data.data
                this.operationLeftList[index].data.push({name: '紧急救援', data: [data], isSelected: true})
                break
            }
          }
        })
      }
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
    // 操作面板checkbox事件
    onCheckBox (obj, index, type, pind) {
      if (!this.ceneterScope.lon || !this.switchFlage) {
        return false
      }
      // 撒点调用的接口名称
      let menuEvent = [
        ['WAREHOUSE_BY_TYPE', 'EMERGENCY_TEAM_BY_TYPE', 'SHELTER_LIST', 'SOCIAL_RESOURECE_BY_TYPE'],
        ['MAJOR_PROJECTTION_BY_TYPE'],
        ['HAZARD_BY_TYPE', 'MONITORING_BY_TYPE', 'SATETY_PRODUCTION_BY_TYPE'],
        ['EMERGENCY_AID_BY_TYPE']
      ]
      if (obj.isSelected) {
        obj.isSelected = !obj.isSelected
      } else {
        obj.isSelected = true
      }
      let apiType = '' // 调用接口类型
      // 全部资源选择
      if (type === 'first') {
        let p = this.operationLeftList[this.operationLeftListIndex].data[this.operationLevelTwoIndex].data[pind]
        this.$set(p, index, obj)
        let ids = [] // 选中的资源点id
        p.map(re => {
          if (re.isSelected) {
            ids.push(re.id)
          }
        })
        apiType = menuEvent[this.operationLeftListIndex][this.operationLevelTwoIndex]
        this.resourceId = [{type: apiType, ids}]
      } else if (type === 'monitor') {
        let p = this.operationLeftList[this.operationLeftListIndex].data[this.operationLevelTwoIndex].data
        let m = p[pind]
        this.$set(m, index, obj)
        let ids = [] // 选中的资源点id
        // 构造点击点位 数据类型
        apiType = menuEvent[this.operationLeftListIndex][pind]
        let objs = {
          type: apiType,
          ids: []
        }
        for (let j = 0; j < p[pind].length; j++) {
          if (p[pind][j].isSelected) {
            objs.ids.push(p[pind][j].id)
          }
        }
        ids.push(objs)
        this.resourceId = ids
      }
      // 获取选中的数组，并调用接口
      this.pointsToMap()
    },
    /**
     * 根据勾选面板向地图撒点
     * @param type 撒点类型
     */
    pointsToMap () {
      if (!this.resourceId || !this.ceneterScope.lon || !this.switchFlage) {
        return false
      }
      this.resourceId.forEach(re => {
        let type = re.type
        let ids = re.ids.toString()
        let activityId = this.activityId
        // let radii = this.km
        // let lon = this.activityCenter[0]
        // let lat = this.activityCenter[1]
        if (ids) {
          API[type](this, {type: ids, activityId})
            .then(res => {
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
                window._m.addMakers(datas, (type) => {
                  // this.isThree = type
                  if (type === 0) {
                    this.selectSecuId = ''
                  }
                })
              } else {
                console.log(res.data.errors)
              }
            })
        } else {
          this.$set(this.panelData, re.type, [])
        }
      })
    },
    create (id, url) {
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
    startAnimate (index) {
      switch (index) {
        case 1:
          this.timer1 = setInterval(this.scroll1, 3500)
          break
        case 2:
          // this.timer1 = setInterval(this.scroll2, 3500)
          break
        case 3:
          if (this.warnInfoData && this.warnInfoData.length > 2) {
            this.timer3 = setInterval(this.scroll3, 3000)
          } else {
            this.animate3 = false
          }
          break
        case 4:
          if (this.keyMoniorData && this.keyMoniorData.length > 3) {
            this.timer4 = setInterval(this.scroll4, 1500)
          } else {
            this.animate4 = false
          }
          break
      }
    },
    stopAnimate (index) {
      switch (index) {
        case 1:
          clearInterval(this.timer1)
          break
        case 2:
          clearInterval(this.timer2)
          break
        case 3:
          this.animate3 = false
          clearInterval(this.timer3)
          break
        case 4:
          this.animate4 = false
          clearInterval(this.timer4)
          break
      }
    },
    scroll2 () {
      let $ = window.jQuery
      $('#list-box-item-02').animate({'top': '-2.5rem'}, 3000, () => {
        this.videoData.push(this.videoData[0]) // 将数组的第一个元素添加到数组的
        this.videoData.shift() // 删除数组的第一个元素
        $('#list-box-item-02').css({'top': 0})
      })
    },
    scroll4 () {
      let _that = this
      this.animate4 = true
      setTimeout(() => {
        if (this.keyMoniorData.length > 3) {
          this.keyMoniorData.push(this.keyMoniorData[0])
          this.keyMoniorData.shift()
          _that.animate4 = false
        }
      }, 1000)
    },
    scroll3 () {
      let _that = this
      this.animate3 = true
      setTimeout(() => {
        if (this.warnInfoData.length > 2) {
          this.warnInfoData.push(this.warnInfoData[0])
          this.warnInfoData.shift()
          _that.animate3 = false
        }
      }, 2000)
    },
    // 鼠标移入显示标题
    showTooltip (e) {
      this.$refs.textModal.showTooltip(e)
    },
    hideTooltip () {
      this.$refs.textModal.hideTooltip()
    },
    transformFour (rootArr, arr) {
      if (arr.length > 4) {
        let sxarr = arr.slice(0, 4)
        let syarr = arr.slice(4)
        rootArr.push(sxarr)
        this.transformFour(rootArr, syarr)
      } else if (arr.length > 0 && arr.length <= 4) {
        rootArr.push(arr)
      }
      return rootArr
    },
    scroll1 () {
      let $ = window.jQuery
      $('#list-box-item-01').animate({'top': '-2.5rem'}, 3000, () => {
        this.ensureManData.push(this.ensureManData[0]) // 将数组的第一个元素添加到数组的
        this.ensureManData.shift() // 删除数组的第一个元素
        $('#list-box-item-01').css({'top': 0})
      })
    },
    getData () {
      // 获取活动详情
      API.GET_DETAILS(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          if (res.data.activitylist.length > 0) {
            res.data.activitylist.map((item) => {
              item.name = item.hd01009
              return item
            })
            this.activityList = res.data.activitylist
            this.defaultDetailsData = res.data.activitylist[0]
            window._m && window._m.getSouthPointByDistance({lon: JSON.parse(this.defaultDetailsData.hd01004)[0], lat: JSON.parse(this.defaultDetailsData.hd01004)[1]}, () => {

            })
            this.activityId = res.data.activitylist[0].id
            this.activityCenter = res.data.activitylist[0].hd01004 ? JSON.parse(res.data.activitylist[0].hd01004) : null
            if (this.activityCenter) {
              window._m.addMakers([{
                lon: this.activityCenter[0],
                lat: this.activityCenter[1],
                id: 'activity-center'
              }])
            }
            this.queryInfoById(this.activityId)
          }
        }
      })
      // 获取监测点位信息
      API.QUERY_KEYMONIOR(this).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.keyMoniorData = res.data.KeyMonior
          if (this.keyMoniorData.length > 3) {
            this.timer4 = setInterval(this.scroll4, 1500)
          } else {
            this.animate4 = false
            window.clearInterval(this.timer4)
          }
        }
      })
      // 获取警告信息
      API.QUERY_WARNINFO(this).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          this.warnInfoData = res.data.KeyMonior
          this.warningListCopy = JSON.parse(JSON.stringify(res.data.KeyMonior))
          if (this.warnInfoData.length > 2) {
            this.timer3 = setInterval(this.scroll3, 3000)
          } else {
            this.animate3 = false
            window.clearInterval(this.timer3)
          }
        }
      })
      // 天气信息
      API.QUERY_WEATHER_INFO(this).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          let forecast2 = res.data.forecast2
          let list = forecast2.map((item) => {
            if (item.temp.indexOf('多云') > -1) {
              item.iconObj = this.weathObject['duoyun']
            } else if (item.temp.indexOf('小雨') > -1) {
              item.iconObj = this.weathObject['xiaoyu']
            } else if (item.temp.indexOf('阴') > -1) {
              item.iconObj = this.weathObject['yintian']
            } else if (item.temp.indexOf('中雨') > -1) {
              item.iconObj = this.weathObject['zhongyu']
            } else if (item.temp.indexOf('暴雨') > -1) {
              item.iconObj = this.weathObject['baoyu']
            } else if (item.temp.indexOf('晴') > -1) {
              item.iconObj = this.weathObject['qingtian']
            } else {
              item.iconObj = this.weathObject['duoyun']
            }
            return item
          })
          this.weathData = list
        }
      })
    },
    queryInfoById (id) { // 切换活动id 需要数据
      this.clear()
      this.panelData = {}// 清空图例勾选
      this.makerBoxType = ''// 清空弹框
      this.makerDetailId = ''// 清空弹框
      this.operationLeftList.forEach((item, i) => { // 清除勾选状态
        if (item.data.length !== 0) {
          let second = item.data
          second.forEach((_item, i) => {
            _item.data.forEach((d) => {
              d.isSelected = false
            })
          })
        }
      })
      // 获取保障人员信息
      API.QUERY_ENSUREMAN(this, {id}).then(
        res => {
          if (res.data.serviceSuccess) {
            if (res.data.data.EnsureMan.length > 0) {
              let ensureManData = res.data.data.EnsureMan
              let transformData = this.transformFour([], ensureManData)
              if (transformData.length > 0) {
                if (transformData.length > 1) {
                  this.ensureManData = [...transformData, transformData[0]]
                  this.$nextTick(() => {
                    this.timer1 = setInterval(this.scroll1, 3500)
                  })
                } else {
                  this.ensureManData = [...transformData]
                }
              }
            }
          }
        }
      )
      // 查询重要视频点位信息
      API.QUERY_VIDEO(this, {id}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          let videoData = res.data.Video
          if (videoData.length > 0) {
            let idArr = {}
            videoData = videoData.filter((item, index, d) => {
              if (idArr[item.id] === undefined) {
                idArr[item.id] = 1
                return true
              } else if (idArr[item.id] === 1) {
                return false
              }
            })
          }
          this.mapVideoPoints = videoData
          let transformData = this.transformFour([], videoData)
          if (transformData.length > 0) {
            this.videoData = [[...transformData, transformData[0]][0]]
            this.$nextTick(() => {
              videoData.forEach(d => {
                this.create('video-' + d.id, d.ss11004)
              })
            }
            )
          }
        }
      })
      // 查询应急资源展示
      API.QUERY_START_EMERGENCY(this, {id}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          let result = res.data.startEmergency
          console.log('查询应急资源展示', result)
          this.flyIds = result.map((item) => {
            item.icon01 = imgPath + item.icon01
            item.icon02 = imgPath + item.icon02
            return item
          })
          result.forEach((item) => {
            let ids = window._m.addFightLine(
              {
                startPoint: [item.lon, item.lat],
                endPoint: this.activityCenter,
                trailColor: 'red',
                trailWidth: 5,
                trailLength: 0.1
              }
            )
            this.flyEntityIds = [...this.flyEntityIds, ...ids]
          })
          window._m.addMakers(result, (type) => {
            // this.isThree = type
            if (type === 0) {
              this.selectSecuId = ''
            }
          })
        }
      })
      // 查询活动区域
      API.QUERY_ACTIVITY(this, {id}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          let result = res.data.activityArea
          if (result.length > 0) {
            let hd05002 = JSON.parse(result[0].hd05002)// 引导区域
            let hd05001 = JSON.parse(result[0].hd05001)// 管控区域
            let hd05003 = JSON.parse(result[0].hd05003)// 缓冲区域

            hd05002.forEach((item) => {
              this.hd05002 = [...this.hd05002, ...item]
            })
            hd05001.forEach((item) => {
              this.hd05001 = [...this.hd05001, ...item]
            })
            hd05003.forEach((item) => {
              this.hd05003 = [...this.hd05003, ...item]
            })
          }
          let id01 = window._m.drawZone(this.hd05001, '#E55711')
          let id02 = window._m.drawZone(this.hd05002, '#BB22FF')
          let id03 = window._m.drawZone(this.hd05003, '#31DCFF')
          this.hd05Ids.push(id01)
          this.hd05Ids.push(id02)
          this.hd05Ids.push(id03)
        }
      })
      // 查询安保人员点位
      API.QUERY_SECURITY(this, {id}).then((res) => {
        res = res.data
        if (res.serviceSuccess) {
          let result = res.data.activityEnsureMan
          result.forEach((item) => {
            switch (item.hd06001) {
              case '1':
                this.people01 = item.chlid
                break
              case '2':
                this.people02 = item.chlid
                break
              case '3':
                this.people03 = item.chlid
                break
              case '4':
                this.people04 = item.chlid
                break
            }
          })
          let peoples = [...this.people01, ...this.people02, ...this.people03, ...this.people04]
          window._m.addMakers(peoples, (type) => {
            if (type === 0) {
              this.selectSecuId = ''
            }
          })
          let ids = []
          peoples.forEach((d) => {
            ids.push(d.id)
          })
          this.peoples = ids
          // console.log(this.peoples)
        }
      })
    },
    clear () {
      if (this.hd05Ids.length > 0) {
        window._m.removeEntity(this.hd05Ids)
      }
      if (this.flyEntityIds.length > 0) {
        window._m.removeEntity(this.flyEntityIds)
      }
      if (this.peoples.length > 0) {
        window._m.removeMaker(this.peoples)
      }
      this.flyEntityIds = []
      this.flyIds = []
      this.peoples = []
      this.hd05Ids = []
      this.hd05001 = []
      this.hd05002 = []
      this.hd05003 = []
    }
  },
  beforeDestroy () {
    this.clear()
    this.phoneSkt.close()
    let $ = window.jQuery
    $('#position-monitor').off()
    $('#warn-and-notice').off()
    this.switchFlage = false
    window.clearInterval(this.timer1)
    window.clearInterval(this.timer2)
    window.clearInterval(this.timer3)
    window.clearInterval(this.timer4)
    if (this.hd05Ids.length > 0) {
      window._m.removeEntity(this.hd05Ids)
    }
    if (this.flyEntityIds.length > 0) {
      window._m.removeEntity(this.flyEntityIds)
    }
    if (this.peoples.length > 0) {
      window._m.removeEntity(this.peoples)
    }
  }
}
</script>

<style lang="scss" scoped>
  .maker-box {
    position: absolute;
    z-index: 8;
    left: 50%;
    top:50%;
    .maker-img img{
      width: .4rem;
      height: .4rem;
    }
    .maker-text{
      text-align: left;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 100%;
      top: -100%;
      margin-left: 30%;
      z-index: 2;
      .line2 {
          width: 100%;
          height: 75%;
          position: absolute;
          top: 35%;
          left: -95%;
        }
        .g-maker-text {
          margin: -0.2rem 0 0 0.05rem;
          padding-left: 0.21rem;
          position: absolute;
          width: 2.82rem;
          padding-bottom: 0.1rem;
          padding-top: 0.2rem;
          z-index: 2;
          background: url('../../../assets/city-management/common-service/education-resource/small-kuang.png') center no-repeat;
          background-size: 100% 100%;
          overflow: hidden;
          box-sizing: border-box;
        h3 {
          margin: 0.1rem 0 0.1rem 0;
          font-size:0.21rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          color:rgba(255,255,255,1);
        }
        .g-text-item {
          margin-bottom: 0.2rem;
          font-size:0.18rem;
          height: 0.18rem;
          line-height: 0.18rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          color:rgba(223,226,251,1);
          span {
            font-size:0.22rem;
            font-family:Source Han Sans CN;
            font-weight:bold;
            font-style:italic;
            color:rgba(249,230,89,1);
          }
          label {
            float: left;
          }
          .g-address {
            width: 1.95rem;
            line-height: 0.25rem;
            float: left;
          }
        }
      }
    }
  }
  #warn-and-notice,
  #position-monitor{
    cursor: auto;
    position: absolute;
    z-index: 200;
    left: 25rem;
    top: 2.2rem;
  }
  .g-title-btn{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .g-title {
      position: static!important;
    }
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
      margin: .35rem .5rem 0 .5rem;
      img{
        position: absolute;
        width: .16rem;
        height: .16rem;
        top: .05rem;
        right: .15rem;
      }
    }
  }
  .icon-box {
      position: absolute;
      z-index: 15;
      .icon-img {
        width: 0.5rem;
        height: 0.66rem;
      }
    }
  .video-maker {
    position: absolute;
    z-index:8;
    border: 1px solid red;
    cursor: pointer;
    .three-box {
      position: absolute;
      margin-top: -1.0rem;
      margin-left: -0.5rem;
      .maker-3d-img {
        position: absolute;
        width: 0.4rem;
        left: 0.35rem;
        top: 0.27rem;
       }
      .maker-3d-box-img {
        width: 1rem;
        height: 1.2rem;
        left: 0;
        top: 0;
      }
    }
    // .maker-panle {
    //   position: absolute;
    //   box-sizing: border-box;
    //   padding: 0.2rem;
    //   left: 1rem;
    //   top: 0.1rem;
    //   z-index: 99;
    //   width: 3.5rem;
    //   height: 2.5rem;
    //   background: url("../../../assets/city-management/city-facilities/notice-bg.png")
    //     center no-repeat;
    //   background-size: 100% 100%;
    //   z-index: -1;
    //   .title {
    //     font-size: 0.21rem;
    //     font-family: Source Han Sans CN;
    //     font-weight: bold;
    //     color: #ffffff;
    //   }
    //   .content {
    //     display: flex;
    //     flex-direction: row;
    //     align-items: center;
    //     justify-content: center;
    //     margin-bottom: 0.15rem;
    //   }
    // }
  }

  .change-maker-panel {
    padding-top: .31rem;
    position: absolute;
    box-sizing: border-box;
    padding: 0.2rem;
    left: 20rem;
    top: 4rem;
    z-index: 9;
    width: 5.5rem;
    height: 3.9rem;
    font-size: 0.18rem;
    color: #FFFFFF;
    background: url("../../../assets/city-management/city-facilities/notice-bg.png") center no-repeat;
    background-size: 100% 100%;
    cursor: move;
    .maker-panle {
      width: 5.1rem;
      height: 3rem;
      margin-top: 0.1rem;
    }
    .close-img {
      position: absolute;
      cursor: pointer;
      right: 0.2rem;
      width: 0.26rem;
      height: 0.27rem;
      top: 0.3rem;
    }
    .big-img {
      position: absolute;
      cursor: pointer;
      right: 0.7rem;
      width: 0.26rem;
      height: 0.27rem;
      top: 0.3rem;
    }
    .samall-img {
      position: absolute;
      cursor: pointer;
      right: 0.7rem;
      width: 0.26rem;
      height: 0.27rem;
      top: 0.3rem;
    }
  }
  .change-maker-panel-select {
    padding: 0.3rem 0.4rem;
    left: 16rem!important;
    top: 1.8rem!important;
    z-index: 9;
    width: 13.60rem;
    height: 8.20rem;
    background:rgba(0,25,60,0.8);
    background-size: 100% 100%;
    border-radius: 0.20rem;
    cursor: move;
    .maker-panle {
      width: 12.80rem;
      height: 7.20rem;
      margin-top: 0.15rem;
    }
    .close-img {
      position: absolute;
      cursor: pointer;
      right: 0.2rem;
      width: 0.26rem;
      height: 0.27rem;
      top: 0.3rem;
    }
    .big-img {
      position: absolute;
      cursor: pointer;
      right: 0.7rem;
      width: 0.26rem;
      height: 0.27rem;
      top: 0.3rem;
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
  .major-guarantee-container {
    width: 43.2rem;
    height: 10.8rem;
    position: absolute;
    background: #000;
    overflow: hidden;
    .select-component {
      position: absolute;
      top:.92rem;
      right:7.2rem;
      z-index: 99;
     }
    .panel-makers{
      position: absolute;
      z-index: 8;
      cursor: pointer;
      margin-top: -1.22rem;
      margin-left: -0.5rem;
      .inside{
        position: absolute;
        left: .25rem;
        top: .25rem;
        z-index: 2;
        width: .3rem;
        height: .3rem;
      }
      .outside{
        position: absolute;
        top: 0;
        left: 0;
        width: .8rem;
      }
      .makers-title{
        position: absolute;
        color: #fff;
        font-size: .16rem;
        padding: .03rem .2rem;
        left: 50%;
        top: -0.2rem;
        transform: translateX(-25%);
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background-color: rgba(0,72,107,.5);
        border: .02rem solid rgba(103, 207, 255, .75);
      }
    }
    .fly-maker {
      position: absolute;
      color: #fff;
      z-index: 8;
      margin-top: -1.5rem;
      margin-left:-0.5rem;
      font-size: .18rem;
      p {
        position: absolute;
        top: -0.40rem;
        left: 50%;
        white-space: nowrap;
        transform: translateX(-50%);
        padding: .03rem .2rem;
        background-color: rgba(0,72,107,.5);
        border: .02rem solid rgba(103, 207, 255, .75);
      }
      .p-02 {
         top: 0.8rem;
      }
      .img-box {
        width: 1.0rem;
        height: 1.5rem;
        .img-box-3d {
          width: 1.0rem;
          height: 1.5rem;
        }
        .img-box-2d {
          position: absolute;
          left:0.35rem;
          top: 0.20rem;
          width: 0.35rem;
        }
         .img-box-2d-02 {
           top: 1.2rem;
        }
      }
      // font-size: .18rem;
      // padding: .03rem .2rem;
      // width: 1.5rem;
      // margin-left: -0.75rem;
      // text-align: center;
      // overflow: hidden;
      // text-overflow: ellipsis;
      // white-space: nowrap;
      // background-color: rgba(0,72,107,.5);
      // border: .02rem solid rgba(103, 207, 255, .75);
      // z-index: 8;
    }
    .security-maker-01 {
      position: absolute;
      z-index: 8;
      margin-top: -0.5rem;
      margin-left: -0.25rem;
      img {
        width: 0.5rem;
        height: 0.5rem;;
      }
    }
    .security-zone-people {
      position: absolute;
      right: 14.3rem;
      bottom: 0.4rem;
      display: flex;
      flex-direction: row;
      z-index: 99;
      .left-zone {
         margin-right: 0.27rem;
        .left-zone-item {
          display: flex;
          flex-direction: row;
          font-size: 0.17rem;
          color: #FFFFFF;
          font-style: italic;
          align-items: center;
          margin-top: 0.13rem;
          img {
            width: 0.50rem;
            height: 0.32rem;
          }
        }
      }
      .right-security {
       .right-security-item {
          display: flex;
          flex-direction: row;
          font-size: 0.17rem;
          color: #FFFFFF;
          font-style: italic;
          align-items: center;
          margin-top: 0.13rem;
          img {
            width: 0.20rem;
            height: 0.20rem;
            margin-top: 0.05rem;
            margin-right: 0.05rem;
          }
       }
      }
    }
    .g-menu-box {
      position: absolute;
      left: 9.62rem;
      top: 9rem;
      z-index: 999;
    }
    .g-title {
      position: absolute;
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
      &:hover {
        color: #ffed66;
        text-shadow:0 0 0.1rem rgba(228,205,38,0.28);
      }
    }
    .main-left-top {
      position: absolute;
      left: 0.29rem;
      top: 0.16rem;
      z-index: 102;
      width: 7.1rem;
      height: 3.47rem;
      background: url("../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/left-top.png")
        center no-repeat;
      background-size: 100% 100%;
      .title-bottom-img {
        position: absolute;
        top: 0.8rem;
        left: 0.5rem;
        width: 0.87rem;
        height: 0.18rem;
      }
      .main-left-top-info {
        position: absolute;
        width: 100%;
        top: 1.0rem;
      }
      .info-line,
      .info-main {
        width: 80%;
        font-size: 0.17rem;
        height: 0.24rem;
        padding-left: 0.7rem;
        font-family: Source Han Sans CN;
        margin-top: 0.12rem;
        font-weight: 500;
        color: rgba(251, 230, 47, 1);
        .main {
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
              /* autoprefixer: on */
          line-height: 0.30rem;
        }
        span {
          color: rgba(255, 255, 255, 1);
        }
        .fr {
          text-align: left!important;
        }
      }
      .info-line > div::before {
        content: "";
        display: inline-block;
        width: 0.06rem;
        height: 0.06rem;
        background-color: rgba(39, 235, 255, 1);
        position: relative;
        top: -0.02rem;
        left: -0.1rem;
      }
      .info-line:nth-of-type(2) > div::before {
        background-color: rgba(24, 169, 235, 1);
      }
      .info-line:nth-of-type(2) > div::before {
        background-color: rgba(0, 126, 251, 1);
      }
      .info-main {
        width: 80%;
        font-size: 0.17rem;
        font-family: Source Han Sans CN;
        font-weight: 500;
      }
      .info-main > div::before {
        content: "";
        display: inline-block;
        width: 0.06rem;
        height: 0.06rem;
        background-color: rgba(0, 126, 251, 1);
        position: relative;
        top: -0.02rem;
        left: -0.1rem;
      }
    }
    .main-left-top-inner-img {
      width: 1.0rem;
      position: absolute;
      left: 7.15rem;
      top: 2.09rem;
      z-index: 102;
    }
    .main-left-top-inner {
      position: absolute;
      width: 4.97rem;
      height: 2.59rem;
      background: url('../../../assets/emergency-command/major-guarantee/panle.png') no-repeat;
      background-size: 100% 100%;
      top: 1.78rem;
      left: 8.22rem;
      z-index: 102;
      padding: 0.25rem;
      box-sizing: border-box;
      p {
        font-size: 0.24rem;
        color: #FFFFFF;
      }
      div {
        margin-top: 0.17rem;
        color: #fbe62f;
        font-size: 0.17rem;
        line-height: 0.25rem;
      }
    }
    .main-left-center {
      position: absolute;
      left: 0.29rem;
      top: 3.40rem;
      z-index: 100;
      width: 7.02rem;
      height: 3.47rem;
      background: url("../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/left-center.png")
        center no-repeat;
      background-size: 100% 100%;
      .accident-area-rank {
        display: flex;
        width: 6.4rem;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 auto;
        margin-left: 0.55rem;
        height: 2.2rem;
        .list-box {
          left: 0.49rem;
          top: 0.9rem;
          height: 2.1rem;
          width: 6.26rem;
          .list-inner-box {
            .list-box-item {
              margin-bottom: 0.2rem;
              display: flex;
              flex-wrap: wrap;
              width: auto;
              padding-right: 0.1rem;
              justify-content: space-between;
              height: 2.2rem;
              // margin-top: .1rem;
              overflow: auto;
              // height: 2.42rem;
              .left,
              .right {
                width: 49%;
                background: url("../../../assets/emergency-command/major-guarantee/gundong-kuang.png")
                  center no-repeat;
                box-sizing: border-box;
                background-size: 100% 100%;
                padding-top: 0.25rem;
                padding-left: 0.22rem;
                margin-bottom:0.1rem;
                height:1.16rem;
                .line-data {
                  font-size: 0.17rem;
                  line-height: 0.17rem;
                  font-family: Source Han Sans CN;
                  font-weight: 500;
                  color: rgba(251, 230, 47, 1);
                  text-overflow: ellipsis;
                  white-space:nowrap;
                  overflow: hidden;
                  margin-bottom: 0.12rem;
                  &::before {
                    content: "";
                    width: 0.06rem;
                    height: 0.06rem;
                    display: inline-block;
                    position: relative;
                    background-color: rgba(39, 235, 255, 1);
                    left: 0.05rem;
                    top: -0.03rem;
                  }
                  &:nth-child(2){
                    img{
                      width: .2rem;
                      height: .2rem;
                      margin-left: .2rem;
                      cursor: pointer;
                    }
                  }
                  &:nth-of-type(2):before {
                    background-color: rgba(24, 169, 235, 1);
                  }
                  &:nth-of-type(3):before {
                    background-color: rgba(0, 126, 251, 1);
                  }
                  span {
                    color: rgba(255, 255, 255, 1);
                  }
                }
              }

            }
          }
        }
      }
    }
    .main-left-bottom {
      position: absolute;
      left: 0.29rem;
      bottom: 0rem;
      z-index: 9;
      width: 7.02rem;
      height: 4.14rem;
      background: url("../../../assets/emergency-command/major-guarantee/left-bottom.png")
                      center no-repeat;
      background-size: 100% 100%;
      .dialog-toggle-btn{
        right: .4rem;
        top: .45rem;
      }
      .btn-group {
        height: 2.8rem;
        width: 85%;
        position: absolute;
        top: 0.9rem;
        left: 0.55rem;
        .list-box {
          height: 100%;
          left: 0.07rem;
          top: 0;
          .list-inner-box {
            .list-box-item {
              .left,
              .right {
                height: 1.4rem;
                width: 48%;
                margin-top: 0.1rem;
                color: #000;
                text-align: center;
                position: relative;
                .video-item {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                }
              }

            }
          }
        }
      }
    }
    .main-right-top {
      right: 0.29rem;
      left: auto;
      .body-part {
        margin-top: 0.11rem;
        display: flex;
        margin-left: 0.3rem;
        align-items: center;
        .body-part-left {
          color: #fff;
          text-align: center;
          width: 1.68rem;
          background: rgba(13, 42, 96, 0.25);
          border-radius: 0.10rem;
          margin-left: 0.2rem;
          margin-top: 0.9rem;
          .weather-date {
            font-size: 0.20rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            margin: 0 auto;
            margin-top: 0.1rem;
          }
          .weather-icon {
            width:0.46rem;
            margin: 0.1rem;
          }
          .weather-desc {
            font-size: 0.24rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            text-align: center;
            color: rgba(255, 255, 255, 1);
            position: relative;
          }
          .weather-bottom-right {
            text-align: center;
          }
          .temperature-desc {
            font-size: 0.24rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            margin: 0.1rem 0;
          }
          .air-desc {
            text-align: center;
            background: rgba(235, 114, 48, 1);
            border-radius: 0.08rem;
            height: 0.71rem;
            display: inline-block;
            p:first-child {
              font-size: 0.2rem;
              font-family: Source Han Sans CN;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
            }
            p:last-child {
              font-size: 0.36rem;
              font-family: Source Han Sans CN;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
            }
          }
        }
        .body-part-right {
          display: flex;
          height: 95%;
          margin-left: 0.2rem;
          justify-content: space-around;
          margin-top: 0.75rem;
          .weather-forecast-item {
            width: 1.1rem;
            text-align: center;
            border-left: 0.01rem solid #307ff3;
            p,
            img {
              padding: 0.05rem 0;
            }
            .week {
              font-size: 0.24rem;
              font-family: Source Han Sans CN;
              font-weight: 500;
              color: rgba(70, 237, 235, 1);
            }
            .date {
              font-size: 0.18rem;
              font-family: Source Han Sans CN;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
            }
            .air-qulity {
              width: 0.63rem;
              height: 0.54rem;
              background: #56bc6c;
              border-radius: 0.06rem;
              font-size: 0.42rem;
              font-family: Source Han Sans CN;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
              padding: 0;
              margin: 0 auto;
              margin-top: 0.2rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              text-align: center;
              align-items: center;
            }
            .temperature {
              font-size: 0.24rem;
              margin-top:0.05rem;
              font-family: Source Han Sans CN;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
            }
            .icon {
              width: 0.39rem;
              height: 0.34rem;
            }
            &:last-child {
              border-right: 0.01rem solid #307ff3;
            }
          }
        }
      }
    }
    .main-right-center {
      right: 0.29rem;
      left: auto;
      .list-box {
        top: 1rem;
        height: 2rem;
        .list-inner-box {
          height: 100%;
          .list-box-item {
            width: 100%!important;
            height: .8rem;
            margin-bottom: 0.19rem;
            padding-left:0!important;
            .right {
              width: 100%;
              .info {
                width: 100%;
                height: 0.33rem;
                line-height: 0.33rem;
                .info-left {
                  font-size: 0.2rem;
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  padding-left: 0.3rem;
                  color: rgba(251, 230, 47, 1);
                  position: relative;
                  &::before {
                    content: "";
                    width: 0.32rem;
                    height: 0.34rem;
                    background: url("../../../assets/emergency-command/major-guarantee/second-level.png")
                      center no-repeat;
                    background-size: contain;
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 0;
                  }
                }
              }
              .detail {
                text-align: left;
                height: 0.6rem;
                line-height: 0.20rem;
                font-size: 0.18rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                word-break: break-all;
                text-overflow: ellipsis;
                display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
                /*! autoprefixer: off */
                  -webkit-box-orient: vertical;
                /* autoprefixer: on */
                -webkit-line-clamp: 3; /** 显示的行数 **/
                overflow: hidden;  /** 隐藏超出的内容 **/
              }
            }
          }
        }
      }
    }
    .main-right-bottom {
      right: 0.29rem;
      left: auto;
      z-index:100;
      .list-box {
        top: 1rem;
        height: 2.2rem;
        .list-inner-box {
          .item {
            height: 0.72rem;
            .first,
            .second {
              display: flex;
              justify-content: space-between;
              align-items: center;
              span{
                flex: 1;
                text-align: right;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding-right: .05rem;
                &:first-child{
                  text-align: left;
                }
              }
            }
            .first {
              img {
                width: 0.32rem;
                height: 0.32rem;
                position: relative;
                top: 0.07rem;
              }
            }
            .main-text {
              font-size: 0.2rem;
              font-family: Source Han Sans CN;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
              line-height: 1.4;
            }
            .sub-text {
              font-size: 0.2rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              text-align: left!important;
              color: rgba(224, 227, 251, 1);
              line-height: 1.4;
            }
            .important-text {
              font-size: 0.2rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: rgba(243, 229, 27, 1);
              line-height: 1.4;
            }
          }
        }
      }
    }
    .fl {
    float: left;
  }
  .fr {
    float: right;
    width: 50%;
    padding-right: 0.2rem;
    box-sizing: border-box;
    text-align: right;
  }
  .list-box {
    position: absolute;
    width: 5.85rem;
    left: 0.59rem;
    top: 1.7rem;
    height: 3.84rem;
    overflow: hidden;
    .list-inner-box {
      width: 100%;
      position: absolute;
    }
    .list-box-item {
      width: 5.85rem;
      display: flex;
      flex-direction: row;
      color: #ffffff;
      font-size: 0.15rem;
      padding-left: 0.1rem;
      flex-flow: wrap;
      justify-content: space-between;
      .left {
        &:first-child {
        }
      }
      span {
        width: 20%;
        height: 0.48rem;
        padding-left: 0.18rem;
        box-sizing: border-box;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .no-data-notice {
    font-size: 0.2rem;
    text-align: center;
    font-weight: 500;
    color: #fbe62f;
  }
  .video-title {
    font-size: 0.2rem;
    text-align: center;
    font-weight: 500;
    color: #ffffff;
  }
  .vedio-mask{
    width:2.86rem;
    height:.5rem;
    background:rgba(16,16,17,1);
    opacity:0.7;
    position: absolute;
    bottom: 0;
    left:-.01rem;
  }
  .anim {
    animation: mymove 5s infinite;
  }
  .anim2 {
    animation: mymove2 2s infinite;
  }
  .anim3 {
    animation: mymove3 5s infinite;
  }
  .anim4 {
    animation: mymove4 2s infinite;
  }
  @keyframes mymove {
    from {
      top: 0;
    }
    to {
      top: -2rem;
    }
  }
  @keyframes mymove2 {
    from {
      top: 0;
    }
    to {
      top: -1.8rem;
    }
  }
  @keyframes mymove3 {
    from {
      top: 0;
    }
    to {
      top: -1.23rem;
    }
  }
  @keyframes mymove4 {
    from {
      top: 0;
    }
    to {
      top: -.9rem;
    }

  }
    .operation-box-wrapper {
       width: 6.42rem;
      height: 3.98rem;
      background: url("../../../assets/emergency-command/emergency-command-chart/operation-bg.png") no-repeat center;
      background-size: 100% 100%;
      padding: 0.4rem 0.5rem 0 0.5rem;
      box-sizing: border-box;
      .operation-title-box {
        display: flex;
        padding-left: 0.48rem;
        box-sizing: border-box;
        .resource-tab-item {
          padding: 0 0.1rem;
          height:0.25rem;
          line-height: 0.25rem;
          font-size:0.16rem;
          font-weight:500;
          color: #FFF;
          text-align: center;
          margin-left: 0.05rem;
          margin-top: 0.25rem;
        }
        .resource-tab-item-selected {
          background-color: #E55711;
          border-radius: 0.13rem;
        }
        .distance-box {
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-left: 0.05rem;
          font-size:0.14rem;
          font-weight:400;
          font-style:italic;
          color: #DFE2FD;
          height: 0.5rem;
          .distance-title {
            padding-top: 0.28rem;
            width: 0.65rem;
          }
          .distance-scroll-box {
              display: flex;
              align-items: end;
              width: 1.8rem;
              margin-left: 0.07rem;
              .scoped {
                width: 0.3rem;
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
          }
          .distance-infinite {
            width: 0.42rem;
            height: 0.25rem;
            margin-top: 0.25rem;
            margin-left: 0.05rem;
            line-height: 0.23rem;
            font-size:0.14rem;
            font-weight:400;
            font-style:italic;
            color:#DFE2FD;
            height:0.25rem;
            background:#00ABFB;
            border-radius:0.13rem;
            text-align: center;

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
            top: 0.16rem;
            left: 0.04rem;
            width: 0.78rem;
            height: 0.49rem;
            display: flex;
            align-items: center;
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
              top: 0.83rem;
            }
            &:nth-child(3) {
              left: -0.03rem;
              top: 1.55rem;
            }
            &:nth-child(4) {
              left: 0.08rem;
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
              .mmask{
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 9;
              }
              .operation-item {
                > p{
                  color: #fff;
                  font-size: .17rem;
                  margin-top: .1rem;
                }
                .operation-item-single{
                  display: flex;
                  flex-wrap: wrap;
                  > div {
                    width: 25%;
                    margin-top: 0.18rem;
                  }
                }
                .operation-item-top {
                  position: relative;
                  cursor: pointer;
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
          .operation-item-box1 {
            p{
              color: #fff;
              font-size: .18rem;
              margin-top: .1rem;
            }
            .monitor-detail{
              display: flex;
              flex-wrap: wrap;
            }
            .operation-item {
              width: 25%;
              margin-top: 0.18rem;
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
                    top: -.035rem;
                    left: .02rem;
                    font-weight: bold;
                    content: '\2714';
                    color: #000;
                    font-size: .15rem;
                  }
                }
              }
              .operation-item-bottom {
                width: 80%;
                height:0.35rem;
                font-size:0.16rem;
                font-weight:500;
                font-style:italic;
                color:#9BE9FF;
                line-height:0.2rem;
              }
            }
          }
        }
      }
    }
    .common-modal {
      margin-left: 1.6rem;
    }
    .zone-maker {
      position: absolute;
      margin-top: -0.5rem;
      margin-left: 0.50rem;
      padding-left: 0.21rem;
      position: absolute;
      width: 2.82rem;
      z-index: 2;
      background: url('../../../assets/city-management/common-service/education-resource/small-kuang.png') no-repeat;
      background-size: 100% 100%;
      z-index:99;
      .close-img {
       position: absolute;
       width: 0.26rem;
       height: 0.26rem;
       top: 0.25rem;
       right: 0.21rem;
       cursor: pointer;
      }
      h3 {
        margin: 0.30rem 0 0.18rem 0;
        font-size:0.21rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        color:rgba(255,255,255,1);
      }
      .g-text-item {
        margin-bottom: 0.22rem;
        font-size:0.18rem;
        height: 0.18rem;
        line-height: 0.18rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        color:rgba(223,226,251,1);
        span {
          font-size:0.22rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          font-style:italic;
          color:rgba(249,230,89,1);
        }
        label {
          float: left;
        }
        .g-address {
          width: 1.95rem;
          line-height: 0.25rem;
          float: left;
        }
      }
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
  }
  .natural-panel{
      position: absolute;
      bottom: .5rem;
      left: 29.3rem;
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
  #communication,
  #note{
    position: absolute;
    left: 15rem;
    top: 5rem;
    z-index: 20;
    cursor: move;
  }
</style>
