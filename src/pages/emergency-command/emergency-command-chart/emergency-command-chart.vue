<!--
 @Descripttion:
 * @Author: renting
 * @Date: 2020-03-10
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-06-05 11:18:31
 -->
<template>
  <!--应急指挥一张图-->
  <div class="command-container">
    <div>
      <!--<div class="header-bg">应急指挥</div>-->
      <head-componen name="应急指挥" :zIndex="1000"></head-componen>
      <div class="g-menu-box">
        <main-list></main-list>
      </div>
      <div class="main-left-top" v-if="!isSelectEmergency">
        <p class="g-title">应急指挥部通信录</p>
        <div class="left-top-echart">
          <div class="phone-list-box">
            <ul class="phone-list"
                ref="scroll0"
                :class="{anim:animate0 === true}"
                @mouseenter="enter(0)"
                @mouseleave="leave(0)">
              <li
                class="phone-list-item"
                @click="phoneListClick(item, index)"
                ref="scrollLi0"
                v-for="(item, index) in phoneList"
                :key="index"
                :style="{fontWeight: item.selected ? 'bold' : 'normal'}">
                <img v-show="item.selected" class="list-icon" src="../../../assets/emergency-command/emergency-command-chart/bg-selected.png"/>
                <img v-show="!item.selected" class="list-icon" src="../../../assets/emergency-command/emergency-command-chart/bg-unselected.png"/>
                <span class="list-item-text"  @mouseenter="showTooltip($event)" @mouseleave="hideTooltip">{{item.text}}</span>
              </li>
            </ul>
          </div>
          <div class="phone-detail-box">
            <div class="phone-detail-wrapper">
              <div class="phone-detail-item">
                <span class="phone-detail-dot"></span>
                <label class="phone-detail-label">办公室负责人：</label>
                <span class="phone-detail-value">{{phoneDetail.zh01002}}</span>
              </div>
              <div class="phone-detail-item">
                <span class="phone-detail-dot"></span>
                <label class="phone-detail-label">电话：</label>
                <span class="phone-detail-value">{{phoneDetail.zh01003}}</span>
              </div>
              <div class="phone-detail-item">
                <span class="phone-detail-dot"></span>
                <label class="phone-detail-label">指挥部：</label>
                <span class="phone-detail-value item-detail-value" @mouseenter="showTooltip($event)" @mouseleave="hideTooltip">{{phoneDetail.zh01001}}</span>
              </div>
              <img
                @click="handleCall(phoneDetail.zh01003, phoneDetail.zh01002)"
                class="phone-icon" src="../../../assets/emergency-command/emergency-command-chart/icon-tel.png">
              <img
                @click="handleNote(phoneDetail.zh01003, phoneDetail.zh01002)"
                class="phone-icon1"
                src="../../../assets/emergency-command/emergency-command-chart/message-d.png">
            </div>
            <div class="phone-detail-wrapper">
              <div class="phone-detail-item">
                <span class="phone-detail-dot"></span>
                <label class="phone-detail-label">具体经办人：</label>
                <span class="phone-detail-value">{{phoneDetail.zh01004}}</span>
              </div>
              <div class="phone-detail-item">
                <span class="phone-detail-dot"></span>
                <label class="phone-detail-label">电话：</label>
                <span class="phone-detail-value">{{phoneDetail.zh01005}}</span>
              </div>
              <div class="phone-detail-item">
                <span class="phone-detail-dot"></span>
                <label class="phone-detail-label">指挥部：</label>
                <span class="phone-detail-value item-detail-value" @mouseenter="showTooltip($event)" @mouseleave="hideTooltip">{{phoneDetail.zh01001}}</span>
              </div>
              <img
                class="phone-icon"
                @click="handleCall(phoneDetail.zh01005, phoneDetail.zh01004)"
                src="../../../assets/emergency-command/emergency-command-chart/icon-tel.png">
              <img
                @click="handleNote(phoneDetail.zh01005, phoneDetail.zh01004)"
                class="phone-icon1"
                src="../../../assets/emergency-command/emergency-command-chart/message-d.png">
            </div>
          </div>
        </div>
      </div>
      <div class="main-left-top" v-if="isSelectEmergency">
        <p class="g-title">指挥部信息</p>
        <div class="command-info-box">
          <div class="charge-person-list">
            <!-- 办公室负责 -->
            <div class="phone-detail-wrapper">
              <div class="phone-detail-item">
                <span class="phone-detail-dot"></span>
                <label class="phone-detail-label">办公室负责人：</label>
                <span class="phone-detail-value">{{headerQuarter.zh01002}}</span>
              </div>
              <div class="phone-detail-item">
                <span class="phone-detail-dot"></span>
                <label class="phone-detail-label">电话：</label>
                <span class="phone-detail-value">{{headerQuarter.zh01003}}</span>
              </div>
              <img class="phone-icon"
                   @click="handleCall(headerQuarter.zh01003, headerQuarter.zh01002)"
                   src="../../../assets/emergency-command/emergency-command-chart/icon-tel.png">
              <img
                @click="handleNote(headerQuarter.zh01003, headerQuarter.zh01002)"
                class="phone-icon1"
                src="../../../assets/emergency-command/emergency-command-chart/message-d.png">
            </div>
            <!-- 具体经办人 -->
            <div class="phone-detail-wrapper">
              <div class="phone-detail-item">
                <span class="phone-detail-dot"></span>
                <label class="phone-detail-label">办公室负责人：</label>
                <span class="phone-detail-value">{{headerQuarter.zh01004}}</span>
              </div>
              <div class="phone-detail-item">
                <span class="phone-detail-dot"></span>
                <label class="phone-detail-label">电话：</label>
                <span class="phone-detail-value">{{headerQuarter.zh01005}}</span>
              </div>
              <img
                class="phone-icon"
                @click="handleCall(headerQuarter.zh01005, headerQuarter.zh01004)"
                src="../../../assets/emergency-command/emergency-command-chart/icon-tel.png">
              <img
                @click="handleNote(headerQuarter.zh01005, headerQuarter.zh01004)"
                class="phone-icon1"
                src="../../../assets/emergency-command/emergency-command-chart/message-d.png">
            </div>
          </div>
          <div class="charge-depart-info">
            <p class="charge-depart-info-title">{{headerQuarter.zh01001}}</p>
            <div class="charge-depart-info-item">
              <label>指挥长：</label>
              <span>{{headerQuarter.zh08003}}</span>
            </div>
            <div class="charge-depart-info-item">
              <label>副指挥长：</label>
              <span>{{headerQuarter.zh08004}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-left-center" v-show="!isSelectEmergency">
        <p class="g-title">应急资源概况<span class="global-data-title">（截至2019年）</span></p>
        <div>
          <div id="main-left-center-echart" class="main-left-center-echart"></div>
        </div>
      </div>
      <div class="main-left-center" v-if="isSelectEmergency">
        <p class="g-title">资源调度清单</p>
        <div class="left-top-echart">
          <div class="resource-list-box-title">
            <img src="../../../assets/emergency-command/emergency-command-chart/bg-selected.png"/>
            应急物资<span class="resource-used">{{goodsActive}}/{{resourceList1.length}}</span>
          </div>
          <div class="resource-list-box">
            <ul class="resource-list" ref="scroll4" :class="{anim:animate4 === true}" @mouseenter="enter(4)" @mouseleave="leave(4)">
              <li class="resource-list-item" ref="scrollLi4" v-for="(item, index) in resourceList1" :key="index">
                <div class="item-inner" :class="item.checked ? 'item-inner-selected': ''" :title="item.label">{{item.label}}</div>
              </li>
            </ul>
          </div>
          <div class="resource-list-box-title resource-list-box-title-2">
            <img src="../../../assets/emergency-command/emergency-command-chart/bg-selected.png"/>
            应急人力<span class="resource-used">{{zhTeam+zyTeam}}/{{resourceList2[0].data.length+resourceList2[1].data.length}}</span>
          </div>
          <div class="resource-detail-box">
            <div class="resource-list-title-2">综合应急队伍&nbsp;&nbsp;{{zhTeam}}/{{resourceList2[0].data.length}}</div>
            <div class="item-inner-box">
              <div
                class="item-inner"
                v-if="resourceList2[0].data.length"
                :class="resourceList2[0].data[0].checked ? 'item-inner-selected': ''">{{resourceList2[0].data[0].label}}</div>
            </div>
            <div class="resource-list-title-2">应急专业队伍&nbsp;&nbsp;{{zyTeam}}/{{resourceList2[1].data.length}}</div>
            <div class="resource-list-box">
              <ul class="resource-list" ref="scroll6" :class="{anim:animate6 === true}" @mouseenter="enter(6)" @mouseleave="leave(6)">
                <li class="resource-list-item" ref="scrollLi6" v-for="(item, index) in resourceList2[1].data" :key="index">
                  <div class="item-inner" :class="item.checked ? 'item-inner-selected': ''">{{item.label}}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="main-left-bottom">
        <p class="g-title">转移安置能力<span class="global-data-title">（截至2019年）</span></p>
        <div id="main-left-bottom-echart" class="main-left-bottom-echart"></div>
      </div>
      <div class="main-right-top">
        <div class="g-title-btn">
          <span class="g-title">点位监测情况</span>
          <div class="title-select" style="z-index: 9;" @click="showPosition = true">
            <div class="select">
              <span>查看详情</span>
              <img src="../../../assets/emergency-command/emergency-command-chart/detail.png">
            </div>
          </div>
        </div>
        <div class="site-monitor-box">
          <ul class="site-monitor-list" ref="scroll1" :class="{anim:animate1 === true}" @mouseenter="enter(1)" @mouseleave="leave(1)">
            <li class="site-monitor-item" ref="scrollLi1" v-for="(item, index) in siteList" :key="index">
              <div class="site-monitor-item-box site-monitor-item-box1">
                <img src="../../../assets/emergency-command/emergency-command-chart/bg-selected.png"/>
                <div class="site-monitor-item-name">{{item.zh05001}}</div>
                <div class="site-monitor-item-time">{{item.zh05007}}</div>
              </div>
              <div class="site-monitor-item-box">
                <div class="site-monitor-item-type">{{item.zh05002_desc}}</div>
                <div class="site-monitor-item-address">{{item.zh05004}}</div>
                <div class="site-monitor-item-status">{{item.zh05008}}{{item.zh05006 || 0}}{{item.zh05009}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-right-center">
        <p class="g-title">预警信息</p>
        <div class="warning-info-box" @click="handleWarn(true)">
          <ul class="warning-info-list" ref="scroll2" :class="{anim:animate2 === true}" @mouseenter="enter(2)" @mouseleave="leave(2)">
            <li class="warning-info-item" ref="scrollLi2" v-for="(item, index) in warningList" :key="index">
              <div class="warning-list-box">
                <div class="warning-text">
                  <div class="warning-type">
                    <img src="../../../assets/emergency-command/emergency-command-chart/bg-selected.png"/>
                    <span :style="{color: item.zh06005 === '通知' ? '#79F5D3' : '#FFF116'}" :title="item.zh06001">{{item.zh06001}}</span>
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
      <div class="main-right-bottom" v-if="!isSelectEmergency">
        <p class="g-title">实时事件信息</p>
        <div class="timing-wrapper">
          <scroll-table
            v-if="timingList.length"
            :column="tableColumn"
            :data="timingList"
            :max="5"
            :height="'2.2rem'"
            @showTitle="showTooltip"
            @hideTitle="hideTooltip"></scroll-table>
        </div>
      </div>
      <div class="main-right-bottom" v-if="isSelectEmergency">
        <p class="g-title">事件处置情况</p>
        <div class="timing-wrapper">
          <div class="timing-list-title">
            <span class="bold-title">{{eventDetail.zh09001}}</span>
            <span>事件等级：{{eventDetail.zh09003_desc}}（{{eventDetail.zh09003}}级）</span>
          </div>
          <div style="width: 90%; margin-left: .45rem">
            <scroll-table
              v-if="handelList.length"
              :column="columnProject"
              :data="handelList"
              :max="5"
              :width="''"
              :height="'2rem'"></scroll-table>
          </div>
        </div>
      </div>
      <div class="left-list">
        <div class="left-list-li" v-for="(item,index) in leftList" :key="index">
          <div class="name">{{item.name}}</div>
          <div class="number">{{item.value}}</div>
        </div>
      </div>
      <div class="right-list">
        <div class="right-list-li" v-for="(item,index) in rightList" :key="index">
          <div class="name">{{item.name}}</div>
          <div class="number">{{item.value}}</div>
        </div>
      </div>
      <!-- 地图导航图例 -->
      <div class="map-wrapper">
        <div id="leshanMap"></div>
      </div>
      <!-- 历史应急事件 -->
      <div class="history-event" @click="historyEvent">历史应急事件</div>
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
              <p class="accident-title accident-title-two">应急预案流程<span class="accident-plan-detail" @click="showPdf">点击查看应急预案>></span></p>
              <img
                class="accident-process-chart"
                src="../../../assets/common/lct.png"/>
            </div>
          </div>
        </div>
        <div class="accident-item-small" v-show="isDetailSmaller">
          <div class="accident-bigger" @click="isDetailSmaller = false"></div>
          <div class="accident-close" @click="onCloseAccident"></div>
          <p class="accident-title">沙湾区汛情-自然灾害类</p>
        </div>
        <div class="accident-item accident-plan-wrapper" v-show="showPreviewPdf">
          <div class="accident-close" @click="onClosePdf"></div>
          <div class="accident-item-scroll-box">
            <p class="accident-title">乐山市生产安全事故灾难应急预案</p>
            <div class="accident-content-pdf-box">
              <iframe class="pdf-iframe" :src="pdFPath"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--预警 / 通知-->
    <div id="warn-and-notice" v-show="isShowNotice">
      <notice-maker
        :data="warningListCopy"
        @close="handleWarn"
        @showTitle="showTooltip"
        @hideTitle="hideTooltip"></notice-maker>
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
          <div class="resource-tab-item"
               v-for="(item, index) in resourceTabList"
               v-if="!item.hidden"
               :key="index"
               :class="item.isSelected ? 'resource-tab-item-selected' : ''"
               @click="onChangeResource(item)">
            {{item.name}}
          </div>
          <div class="distance-box">
            <!--<span class="distance-title">资源核心</span>-->
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
            <!--<div class="distance-infinite" @click="resetKm">不限</div>-->
          </div>
        </div>
        <!-- 全部资源 -->
        <div class="operation-content-box" v-if="resourceTabValue === '默认内容'">
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
              <!-- <div class="mmask" v-if="!switchFlage"></div> -->
              <!-- 二级菜单 -->
              <div class="operation-item"
                   v-if="operationLeftListIndex != 2"
                   v-for="(items, index) in operationLeftList[operationLeftListIndex].data[operationLevelTwoIndex].data"
                   :key="index">
                <p>{{items[0].title}}</p>
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
                      <div class="operation-item-top"  @click="onCheckBox(item, index, 'monitor', ind)">
                        <img :src="imgPath+item.icon01"/>
                        <div class="operation-check-box"
                             :class="item.isSelected ? 'operation-check-box-selected' : ''"
                            ></div>
                      </div>
                      <div class="operation-item-bottom">{{item.label}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 预案资源 -->
        <div class="plan-resource" v-else>
          <div class="resource-contents" v-if="resourceData">
            <div>
              <p>紧急救援力量</p>
              <div class="resource-content">
                <div class="operation-item"
                     v-for="(item, index) in resourceData.data2"
                     :key="index">
                  <div class="operation-item-top" @click="onCheckBox(item, index, 'data2', 2)">
                    <img :src="imgPath+item.icon01"/>
                    <div class="operation-check-box"
                         :class="item.isSelected ? 'operation-check-box-selected' : ''"
                         ></div>
                  </div>
                  <div class="operation-item-bottom">{{item.label}}</div>
                </div>
              </div>
            </div>
            <div>
              <p>应急物资</p>
              <div class="resource-content">
                <div class="operation-item"
                     v-for="(item, index) in resourceData.data1"
                     :key="index">
                  <div class="operation-item-top"  @click="onCheckBox(item, index, 'data1', 0)">
                    <img :src="imgPath+item.icon01"/>
                    <div class="operation-check-box"
                         :class="item.isSelected ? 'operation-check-box-selected' : ''"
                        ></div>
                  </div>
                  <div class="operation-item-bottom">{{item.label}}</div>
                </div>
              </div>
            </div>
            <div>
              <p>转移安置点</p>
              <div class="resource-content">
                <div class="operation-item"
                     v-for="(item, index) in resourceData.data3"
                     :key="index">
                  <div class="operation-item-top"  @click="onCheckBox(item, index, 'data3', 3)">
                    <img :src="imgPath+item.icon01"/>
                    <div class="operation-check-box"
                         :class="item.isSelected ? 'operation-check-box-selected' : ''"
                        ></div>
                  </div>
                  <div class="operation-item-bottom">{{item.label}}</div>
                </div>
              </div>
            </div>
            <div>
              <p>社会保障力量</p>
              <div class="resource-content">
                <div class="operation-item"
                     v-for="(item, index) in resourceData.data4"
                     :key="index">
                  <div class="operation-item-top" @click="onCheckBox(item, index, 'data4', 4)">
                    <img :src="imgPath+item.icon01"/>
                    <div class="operation-check-box"
                         :class="item.isSelected ? 'operation-check-box-selected' : ''"
                         ></div>
                  </div>
                  <div class="operation-item-bottom">{{item.label}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 事件makers -->
    <div class="event-position-box">
      <div
        class="makers"
        :id="'event-pos'+item.id"
        :style="{zIndex: item.Zindex || 8}"
        v-for="(item, index) in eventPosition"
        :key="index">
        <div class="makers-title" :title="item.name" v-show="showOutImg === 0" style="top: -0.3rem">
          <span :title="item.zh09001">{{item.zh09001}}</span>
          <span :class="'makers-level-'+item.zh09003">{{item.zh09003_desc}}</span>
        </div>
        <div class="makers-title-content" @click.stop="handelShowEvent($event, index)">
          <img src="../../../assets/emergency-command/emergency-command-chart/event1.png">
          <img :src="eventImg[item.zh09002 - 1]">
        </div>
        <!-- 灾难预警marker -->
        <div class="marker-info-wrapper" v-if="item.showStep">
          <!-- 灾难预警提示marker -->
          <div class="marker-info-status-tip" v-if="item.warningStep === 1">
            <img class="derict" src="../../../assets/common/event-icon.png">
            <div class="bbbox">
              <div class="marker-info-item">
                <img class="marker-info-icon" src="../../../assets/emergency-command/emergency-command-chart/accident-status-icon.png"/>
                <div class="marker-info-text">{{eventDetail.zh09001}}</div>
                <img class="marker-info-icon" src="../../../assets/common/close.png" @click.stop="handleClose(0, index)"/>
              </div>
              <div class="marker-info-item">
                <label class="marker-label">事件等级：</label>
                <span class="marker-value">{{eventDetail.zh09003}}级{{eventDetail.zh09002_desc}}</span>
              </div>
              <div class="marker-info-item">
                <label class="marker-label">位置：</label>
                <span class="marker-value">{{eventDetail.zh09009}}</span>
              </div>
              <div class="marker-info-btn">
                <div class="marker-btn" @click="item.warningStep = 2">启动应急预案</div>
              </div>
            </div>
          </div>
          <!-- 启动灾难预警 -->
          <div class="marker-info-status-on" v-if="item.warningStep === 2">
            <div class="marker-info-status-close" @click="item.warningStep = 1; nowPage = 1"></div>
            <div class="marker-info-item">
              <div class="marker-info-text-title">启动应急预案</div>
            </div>
            <div class="marker-info-item">
              <label class="marker-label">事件名称：</label>
              <span class="marker-value">{{eventDetail.zh09001}}</span>
            </div>
            <div class="marker-row">
              <div class="marker-info-item">
                <label class="marker-label">事件等级：</label>
                <span class="marker-value">{{eventDetail.zh09003}}级</span>
              </div>
              <div class="marker-info-item">
                <label class="marker-label">响应级别：</label>
                <div class="marker-select">
                  <nav-list :data="warningLevelList" @handleClick="chooseWarningLevel"></nav-list>
                </div>
              </div>
            </div>
            <div class="marker-info-name">选择应急预案</div>
            <div class="marker-case-wrapper">
              <div class="marker-case-item"
                   v-for="(items, i) in caseList"
                   :key="i"
                   v-show="i >=(nowPage-1)*4 && i<nowPage*4"
                   @click="onSelectCase(i, items.id)">
                <div class="marker-case-radio">
                  <div v-if="i === caseSelectedIndex" class="marker-radio-selected"></div>
                </div>
                <span class="marker-case-text">{{items.label}}</span>
                <!--<img v-if="items.recommend" class="marker-case-recommend" src="../../../assets/emergency-command/emergency-command-chart/recommend-icon.png"/>-->
              </div>
            </div>
            <div>
              <paginate
                :nowPage="nowPage"
                :count="Math.ceil(caseList.length/4)"
                @change="handleChange"></paginate>
            </div>
            <div class="marker-info-btn">
              <div class="marker-btn" @click="onStartWarning(index)">立即启动</div>
            </div>
          </div>
          <!-- 点击查看灾难预警详情 -->
          <div draggable="true" class="marker-info-status-detail" v-if="item.warningStep === 3">
            <div class="marker-info-item">
              <img class="marker-info-icon" src="../../../assets/emergency-command/emergency-command-chart/accident-status-icon.png"/>
              <div class="marker-info-text">{{eventDetail.zh09001}}</div>
              <img class="marker-info-icon" src="../../../assets/common/close.png"  @click="handleClose(0, index)"/>
            </div>
            <div class="marker-info-item">
              <label class="marker-label">事件等级：</label>
              <span class="marker-value">{{eventDetail.zh09003}}</span>
            </div>
            <div class="marker-info-item">
              <label class="marker-label">响应级别：</label>
              <span class="marker-value">{{eventDetail.zh09021}}级响应</span>
              <span class="marker-change-btn" @click="item.warningStep = 4">调整</span>
            </div>
            <div class="marker-info-item">
              <label class="marker-label">应急预案：</label>
              <span class="marker-value">人群聚集应急预案</span>
            </div>
            <div class="marker-info-item">
              <label class="marker-label">位置：</label>
              <span class="marker-value" style="font-size: 0.18rem;">{{eventDetail.zh09009}}</span>
            </div>
            <div class="marker-info-item">
              <label class="marker-label">指挥单位：</label>
              <span class="marker-value" style="font-size: 0.18rem;">{{eventDetail.zh09013}}</span>
            </div>
            <div class="marker-info-btn">
              <div class="marker-btn marker-btn-detail" @click="onSelectEmergency(index)">查看详情</div>
            </div>
          </div>
          <!-- 修改灾难预警响应级别 -->
          <div class="marker-info-status-edit" v-if="item.warningStep === 4">
            <div class="marker-info-status-close" @click="item.warningStep = 3"></div>
            <div>
              <div class="marker-info-name">选择应急预案名称</div>
            </div>
            <div class="marker-info-item">
              <label class="marker-label">事件名称：</label>
              <span class="marker-value">{{eventDetail.zh09001}}</span>
            </div>
            <div class="marker-info-item">
              <label class="marker-label">事件等级：</label>
              <span class="marker-value">{{eventDetail.zh09003_desc}}（{{eventDetail.zh09003}}级）</span>
            </div>
            <div class="marker-info-item">
              <label class="marker-label">应急预案：</label>
              <span class="marker-value">人群聚集应急预案</span>
            </div>
            <div class="marker-info-item">
              <label class="marker-label">响应级别：</label>
              <div class="marker-select">
                <nav-list
                  :data="warningLevelList"
                  :value="eventDetail.zh09021"
                  @handleClick="chooseWarningLevel"></nav-list>
              </div>
            </div>
            <div class="marker-info-btn">
              <div class="marker-btn marker-btn-detail" @click="onSaveChangeLevel(index)">提交</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 事件调度物资makers -->
    <div
      class="other-makers"
      v-for="(item, index) in goodsPotion"
      :key="item.id+index"
      :id="item.id"
      :style="{zIndex: item.id === positionId ? 9 : 8}">
      <span @click="handleSeeDetail(item.id, item.type, item.type01)">
        <img class="inside" :src="imgPath+item.icon01">
        <img v-if="showOutImg === 1" class="outside" :src="imgPath+item.icon02">
      </span>
      <div class="makers-title" style="top: -.35rem" :title="item.name">
        <span>{{item.name}}</span>
      </div>
      <div class="down-deep-box" style="position: absolute;left: 1rem;top: -1rem;" v-if="item.id === positionId">
        <modal-one
          v-if="makerBoxType === 'one'"
          :data="makerDetail"
          @close="handleCloseDetail">
          <div slot="modal-costom" class="modal-jc">
            <div class="costom-modal costom-two">
              <div class="costom-small" v-if=" makerType !== 'aid' || makerType !== '002'">
                <span>联系人：</span>
                <span>{{makerDetail.baseInfo.linkman01}}</span>
              </div>
              <div class="costom-big" v-if=" makerType !== '002'">
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
        <modal-seven
          v-if="makerBoxType === 'seven'"
          :data="makerDetail"
          @close="handleCloseDetail"></modal-seven>
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
        :style="{zIndex: val.idCopy === positionId ? 9 : 8}">
        <div class="img-box" @click.stop="handleSeeDetail(val.idCopy, index !== 'DETRAIL_MONITOR' ? val.type : 'monitor', val.type01 || val.typeCode)">
          <img class="inside" :class="{'inside-2d':showOutImg !== 1}" :src="imgPath+val.icon01">
          <img v-if="showOutImg === 1" class="outside" :src="imgPath+val.icon02">
        </div>
        <div class="makers-title" :style="{top: showOutImg!=1 ? '.1rem' : '-.3rem'}" :title="val.name">{{val.name}}</div>
        <!-- 下钻窗口 -->
        <div class="down-deep-box" v-if="val.idCopy === positionId">
          <modal-one
            v-if="makerBoxType === 'one'"
            :data="makerDetail"
            @close="handleCloseDetail">
            <div slot="modal-costom" class="modal-jc">
              <div class="costom-modal costom-two">
                <div class="costom-small" v-if=" makerType !== 'aid' && makerType !== '002'">
                  <span>联系人：</span>
                  <span>{{makerDetail.baseInfo.linkman01}}</span>
                </div>
              </div>
              <div class="costom-modal costom-two">
                <div class="costom-big" v-if="makerType !== '002'">
                  <span>联系电话：</span>
                  <span>{{makerDetail.baseInfo.phone01}}</span>
                  <img @click="handleCall(makerDetail.baseInfo.phone01, makerDetail.baseInfo.linkman01)" class="phone-icon" src="../../../assets/emergency-command/emergency-command-chart/icon-tel.png">
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
            @close="handleCloseDetail">
            <div slot="modal-costom" class="modal-jc">
              <div
                @click="handleOpenUrl('http://117.139.86.69:9999/Government/Login.html')"
                class="costom-modal costom-one">
                <span style="color: #1E9FFF; cursor: pointer">乐山市安全生产综合监管信息平台</span>
              </div>
            </div>
          </modal-five>
          <modal-six
            v-if="makerBoxType === 'six'"
            :data="makerDetail"
            :type="makerType"
            :columnFirm="column[makerType]"
            @close="handleCloseDetail"></modal-six>
          <modal-seven
            v-if="makerBoxType === 'seven'"
            :data="makerDetail.baseInfo"
            @call="handleCall"
            @close="handleCloseDetail"></modal-seven>
          <!-- 水文站弹窗 -->
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
                <div class="maker-panle" style="z-index: 9;" :id="'d-v-'+makerDetail.baseInfo.id"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 历史事件点位 -->
    <div class="event-position-box">
      <div
        class="makers"
        :id="'history-event-'+item.id"
        :style="{zIndex: item.Zindex || 8}"
        v-for="(item, index) in eventHistoryPosition"
        :key="index">
        <div class="makers-title" :title="item.name" v-show="showOutImg === 0">{{item.zh09001}}</div>
        <div @click.stop="handelShowEvent($event, index, true)">
          <img src="../../../assets/emergency-command/emergency-command-chart/event1.png">
          <img :src="eventImg[item.zh09002 - 1]">
        </div>
        <!-- 灾难预警marker -->
        <div class="marker-info-wrapper" v-if="item.showStep">
          <!-- 点击查看灾难预警详情 -->
          <div draggable="true" class="marker-info-status-detail" v-if="item.warningStep === 3">
            <div class="marker-info-item">
              <img class="marker-info-icon" src="../../../assets/emergency-command/emergency-command-chart/accident-status-icon.png"/>
              <div class="marker-info-text"></div>
              <img class="marker-info-icon" src="../../../assets/common/close.png"  @click="handleClose(0, index, true)"/>
            </div>
            <div class="marker-info-item">
              <label class="marker-label">事件等级：</label>
              <span class="marker-value">{{eventDetail.zh09003}}</span>
            </div>
            <div class="marker-info-item">
              <label class="marker-label">响应级别：</label>
              <span class="marker-value">{{eventDetail.zh09021}}级响应</span>
            </div>
            <div class="marker-info-item">
              <label class="marker-label">应急预案：</label>
              <span class="marker-value">人群聚集应急预案</span>
            </div>
            <div class="marker-info-item">
              <label class="marker-label">位置：</label>
              <span class="marker-value" style="font-size: 0.18rem;">{{eventDetail.zh09009}}</span>
            </div>
            <div class="marker-info-item">
              <label class="marker-label">指挥单位：</label>
              <span class="marker-value" style="font-size: 0.18rem;">{{eventDetail.zh09013}}</span>
            </div>
            <div class="marker-info-btn">
              <div class="marker-btn marker-btn-detail" @click="onSelectEmergency(index, true)">查看详情</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 显示标题完整信息 -->
    <text-modal ref="textModal"></text-modal>
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
    <!-- 历史事件弹窗 -->
    <div id="history-modal" v-show="isShowHistory">
      <modal-two
        v-if="isShowHistory"
        :data="historyList"
        @handleDo="historyEventDo"
        @close="handleCloseHis"></modal-two>
    </div>
    <!-- 工具箱类型 -->
    <div class="toolbox">
      <div class="ambulance" @click="handleAmbulance">
        <img src="../../../assets/common/car.png"/>
        <span class="name">救护车信息</span>
        <span class="status">{{makerFlag ? 'ON' : 'OFF'}}</span>
      </div>
    </div>
    <!-- 救护车点位 -->
    <div class="car-ambulence">
      <div
        v-for="(item, index) in markerDatas"
        :key="index"
        :id="item.id"
        :style="{zIndex: videoId === item.id ? '9' : '8'}">
        <div @click="videoId = item.id; is_video = false" class="g-img-box" v-if="item.online == 1">
          <img class="big-img" src='../../../assets/common/carimg.png' alt="" />
          <div class="makers-title" :title="item.name">{{item.license}}</div>
        </div>
        <div @click="videoId = item.id; is_video = false" class="g-img-box"  v-if="item.online == 0">
          <img class="big-img" src='../../../assets/common/no-car.png' alt="" />
          <div class="makers-title" :title="item.name">{{item.license}}</div>
        </div>
        <img v-show="videoId === item.id" src="../../../assets/common/event-icon2.png"  class="line2" />
        <div class="g-maker-text" v-show="videoId === item.id">
          <div class="g-close" @click="videoId = ''"></div>
          <h3>{{item.license}}</h3>
          <div class="g-text-item g-text-item2">所属医院：<span>{{item.hospital}}</span></div>
          <div class="g-text-item g-text-item2"><label>当前位置：</label><span class="g-address">{{item.address}}</span></div>
          <div class="g-text-item g-text-item2">司机名称：<span>{{item.driver}}</span></div>
          <div class="g-text-item g-text-item2">速度：<span>{{item.speed}}</span></div>
          <div class="g-text-btn" v-if="item.online == 1">
            <div class="g-btn-item" @click="showVideo(item, 1)">车内视频监控</div>
            <div class="g-btn-item" @click="showVideo(item, 2)">车外视频监控</div>
          </div>
          <div class = "video-box" v-if="is_video">
            <p class = 'maker-title'>
              <img class = "icon" src = "@/assets/emergency-command/emergency-command-chart/bg-selected.png" width="0.12rem"/>{{item.license}}{{videoTitle}}
              <img src = "@/assets/emergency-command/emergency-command-chart/close-bg.png"  @click="is_video = false">
            </p>
            <!-- <video :src="video_src"></video> -->
            <!-- <div class="video-html" v-html="video_src"></div> -->
            <iframe class="video-html" frameborder=0 scrolling=auto :src="video_src"></iframe>
          </div>
        </div>
      </div>
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
    <!-- 范围标记点位 -->
    <div class="icon-box" :id="item.id" v-for="(item) in icons" :key="item.id">
      <img class="icon-img" src="@/assets/tool/end.png" />
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
import noticeMaker from './notice-maker'
import modalOne from '@/components/slackingModal/modal-one' // 下钻窗口
import modalTwo from '@/components/slackingModal/modal-two' // 下钻窗口
import modalThree from '@/components/slackingModal/modal-three' // 下钻窗口
import modalFour from '@/components/slackingModal/modal-four' // 下钻窗口
import modalFive from '@/components/slackingModal/modal-five' // 下钻窗口
import modalSix from '@/components/slackingModal/modal-six' // 下钻窗口
import modalSeven from '@/components/slackingModal/modal-seven' // 下钻窗口
import phoneModal from '@/components/slackingModal/phone-modal' // 手机电话弹窗
import noteModal from '@/components/slackingModal/note-modal' // 短信电话弹窗
import makerComponent from '@/components/maker-component.vue' // 救护车maker
import monitorPosition from './monitor-postion' // 救护车maker
import headComponen from '@/components/head-component'
import optionsBottom from '@/echarts-data/emergency-command/emergency-command-chart/left-bottom.js'
import optionsCenter from '@/echarts-data/emergency-command/emergency-command-chart/left-center.js'
import optionsMap from '@/echarts-data/emergency-command/emergency-command-chart/leshanMap.js'
import mapData from '@/assets/common/ls.json'
import API from '@/api/emergency-command/emergency-command-chart.js'
import { formatterTime, moveDiv } from '@/utils/utils'
import {webSktPath, imgPath, phoneWebSktPath, pdfPath} from '@/utils/BasePath'
import WebSocketHelper from '@/utils/WebSocketHelper'
import event1 from '../../../assets/emergency-command/emergency-command-chart/event5.png'
import event2 from '../../../assets/emergency-command/emergency-command-chart/event2.png'
import event3 from '../../../assets/emergency-command/emergency-command-chart/event3.png'
import event4 from '../../../assets/emergency-command/emergency-command-chart/event4.png'
import textModal from '@/components/text-modal' // 显示标题完整信息
const $ = window.jQuery
export default {
  components: {
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
    modalSeven,
    paginate,
    noticeMaker,
    phoneModal,
    noteModal,
    headComponen,
    makerComponent,
    monitorPosition,
    textModal
  },
  data () {
    return {
      waterColor: ['#FD2000', '#FF7800', '#FCE62F', '#33D5FF', '#7EFFDB'],
      // 事件图标
      eventImg: [event1, event2, event3, event4],
      // 救护车视频参数start
      markerDatas: [],
      makerFlag: false,
      videoTitle: '车内视频',
      videoId: '',
      is_video: false,
      video_src: '',
      // 救护车视频参数end
      panelBig: false,
      isShowHistory: false, // 展示历史应急事件弹窗
      historyList: [], // 历史应及事件列表
      isShowNotice: false,
      nowPage: 1, // 启动应急方案页数
      showOutImg: 0, // 展示图标外层
      eventScrollTime: 5, // 应急指挥部通信录滚动时间(s)
      positionId: '', // 点击撒点ID
      imgPath: imgPath,
      selectdEventId: '', // 选中的应急事件Id
      events: [], // 事件信息
      eventPosition: [], // 事件点位
      eventHistoryPosition: [], // 历史事件点位
      eventDetail: null, // 事件详细信息
      goodsPotion: [], // 资源点位
      resourceId: [], // 面板选中资源Id
      pointType: '', // 撒点调用接口名称
      resourceData: null, // 预案资源面板数据
      jjResourceData: null, // 紧急预案资源数据
      animate0: false, // 左上滚动-默认页面
      animate1: false, // 右上滚动-默认页面
      animate2: false, // 右中滚动-默认页面
      animate3: false, // 右下滚动-默认页面
      animate4: false, // 左中滚动-点击汛情后页面
      animate5: false, // 右下滚动-点击汛情后页面
      animate6: false, // 左中滚动-点击汛情后页面
      timers: [null, null, null, null, null, null, null],
      phoneList: [],
      phoneDetail: {},
      headerQuarter: {}, // 事件详情左上详细信息
      siteList: [],
      warningList: [],
      warningListCopy: [],
      timingList: [],
      resourceList1: [], // 资源调度清单 --- 物资
      resourceList2: [
        {
          name: '综合应急队伍',
          data: []
        },
        {
          name: '应急专业队伍',
          data: []
        }
      ], // 资源调度清单 --- 队伍
      handelList: [], // 事件详情 -- 事件处置情况
      leftList: [
        {name: '重大危险源', value: 0, dataIndex: 'zh04001'},
        {name: '安全生产隐患', value: 0, dataIndex: 'zh04002'},
        {name: '自然灾害监测点', value: 0, dataIndex: 'zh04003'},
        {name: '转移安置点', value: 0, dataIndex: 'zh04004'}
      ],
      rightList: [
        {name: '本年度累计突发事故', value: 0, dataIndex: 'zh04005'},
        {name: '社会安全', value: 0, dataIndex: 'zh04008'},
        {name: '公共卫生', value: 0, dataIndex: 'zh04009'},
        {name: '自然灾害', value: 0, dataIndex: 'zh04007'},
        {name: '安全生产', value: 0, dataIndex: 'zh04006'}
      ],
      isSelectEmergency: false, // 是否展示突发事件对应页面
      showPreviewPdf: false, // 应急预案pdf预览
      showDetailVideo: false, // 水文站视频显示
      videoName: '', // 水文站点点击视频列表名称
      pdFPath: '',
      caseList: [
        {
          label: '防汛抗旱应急预案',
          recommend: true,
          isSelected: false
        }
      ], // 应急预案列表
      caseCurrentPage: 1, // 应急预案当前页
      casePageSize: 4, // 应急预案每页数据条数
      caseSelectedIndex: -1, // 默认选中的应急预案index
      warningStep: 0, // 1: 未启动应急预案页面 2：启动应急预案页面 3：应急预案详情页面 4：修改响应级别页面,
      warningLevelList: [], // 响应级别
      warningLevelValue: null, // 响应级别选中值
      isDetailSmaller: false, // 是否缩小详情面板
      operationList: [],
      resourceTabList: [
        {
          name: '默认内容',
          isSelected: true
        },
        {
          name: '预案内容',
          hidden: true,
          isSelected: false
        }
      ],
      resourceTabValue: '默认内容',
      // 面板左侧菜单
      operationLeftList: [
        {
          name: '应急资源',
          requestObj: API.GET_ALL_RESOURCE_MATERIALS,
          isSelected: true,
          data: []
        },
        {
          name: '重点防护',
          requestObj: API.GET_ALL_RESOURCE_PROTECTION,
          isSelected: false,
          data: []
        },
        {
          name: '监测对象',
          requestObj: API.GET_ALL_RESOURCE_MONITOR,
          isSelected: false,
          data: []
        },
        {
          name: '紧急救援',
          requestObj: API.GET_ALL_RESOURCE_RESCUE,
          isSelected: false,
          data: []
        }
      ],
      planResource: [], // 预案资源
      operationLeftListIndex: 0,
      operationLevelTwoIndex: 0,
      km: 5, // 操作面板，默认5公里
      ceneterScope: {},
      icons: [],
      switchFlage: false,
      webskt: null, //  websocket实列
      isWebSktFirst: true,
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
      flyLine: [], // 飞行线实体集合
      columnProject: [
        {name: '操作内容', width: '1.4rem', dataIndex: 'title'},
        {name: '操作单位', width: '1.6rem', dataIndex: 'user'},
        {name: '时间', dataIndex: 'time', type: 'formatter'}
      ],
      panelData: {}, // 点击面板点位接口数据
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
      tableColumn: [
        {name: '事件标题', width: '1.7rem', dataIndex: 'zh07001'},
        {name: '时间', width: '2rem', dataIndex: 'zh07002'},
        {name: '来源单位', width: '1.12rem', dataIndex: 'zh07003'},
        {name: '事件描述', width: '1.2rem', dataIndex: 'zh07004'}
      ],
      isHistory: false,
      // tooltipContent: '',
      showPosition: false,
      swfurl: './static/libs/flowplayer/flowplayer-3.2.18.swf'
    }
  },
  beforeMount () {
    let that = this
    // webScoket 连接应急事件点位
    let eventParam = {
      url: `${webSktPath}websocket/emergency`,
      open: function () { console.log('webScoket连接成功！') },
      message: function (data) {
        // 事件点位信息
        let eventPos = JSON.parse(data.data)
        console.log(eventPos)
        // 地图撒点 --- 事件类型
        if (eventPos.event) {
          that.events = eventPos.event
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
          if (eventPos.event.length) {
            that.eventDetail = eventPos.event[0]
            /* // 定位到最新的点位
            window._m.getSouthPointByDistance(eventPos.event[0])
            // 展示第一条信息
            that.handelShowEvent(false, 0) */
          }
          /* else {
            // 心连心地址 103.719341,29.605775
            window._m.getSouthPointByDistance({lon: 103.719341, lat: 29.605775})
          } */
          // 加载左下地图
          that.initEcharts(eventPos.event)
        }
        // 事件详情 -- 指挥部信息
        if (eventPos.headerquarter) {
          that.headerQuarter = eventPos.headerquarter
        }
        // 事件详情 -- 资源调度清单
        if (eventPos.goodsList) {
          that.resourceList1 = eventPos.goodsList
        }
        if (eventPos.teamList) {
          let n = [] // 专业应急队伍
          let m = [] // 综合应急队伍
          eventPos.teamList.map((re, index) => {
            if (re.pid === '10') {
              n.push(re)
            }
            if (re.pid === '20') {
              m.push(re)
            }
          })
          that.resourceList2[1].data = n
          that.resourceList2[0].data = m
        }
        // 事件详情 -- 事件处置情况
        if (eventPos.flow) {
          that.handelList = eventPos.flow
        }
        // 事件类型 -- 资源撒点
        if (eventPos.location) {
          that.goodsPotion = eventPos.location
          console.log(that.goodsPotion, '物资点位')
          window._m.addMakers(eventPos.location, (flag) => {
            that.showOutImg = flag
          })
          // 清除之前的飞行线
          if (that.flyLine.length) {
            window._m.removeEntity(that.flyLine)
          }
          that.flyLine = []
          // 添加连接线
          let lineId = []
          for (let i = 0; i < eventPos.location.length; i++) {
            // 如果有起点和终点
            if (eventPos.location[i].lon) {
              let startPoint = [eventPos.location[i].lon, eventPos.location[i].lat]
              let endPoint = [eventPos.location[i].target_lon, eventPos.location[i].target_lat]
              lineId.push(...window._m.addFightLine({startPoint, endPoint}))
            }
            that.flyLine = lineId
          }
          // 清空面板所有点位以及状态
          that.switchFlage = false
        }
      },
      // isKeepAlive: true,
      keepData: '{isClose: 123}',
      keepAliveTime: 10,
      isReConnect: true
    }
    this.webskt = new WebSocketHelper(eventParam)
    this.webskt.init(true)
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
      // '{"Action": "keeplive", "GongHao": "10000", "FenJi": "6000", "PlatFormCode": "Default", "Params": ""}',
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
    this.getRightData() // 右边图表
    this.getPlanResource() // 事件预案
    moveDiv('warn-and-notice')
    moveDiv('communication')
    moveDiv('note')
    moveDiv('history-modal')
    moveDiv('position-monitor')
  },
  computed: {
    goodsActive: function () {
      let num = 0
      this.resourceList1.map(re => {
        if (re.checked) { num += 1 }
      })
      return num
    },
    zyTeam: function () {
      let num = 0
      this.resourceList2[0].data.map(re => {
        if (re.checked) { num += 1 }
      })
      return num
    },
    zhTeam: function () {
      let num = 0
      this.resourceList2[1].data.map(re => {
        if (re.checked) { num += 1 }
      })
      return num
    }
  },
  methods: {
    handleOpenUrl (url) {
      window.open(url, 'newWindow', 'height=1080, width=4320, top=540, left=2160')
    },
    // 选择图片
    chooseImg (num0, num1) {
      if (!num0) {
        return {
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
        color: this.waterColor[index]
      }
      return obj
    },
    // 水文站播放视频
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
    // 救护车信息
    handleAmbulance () {
      this.makerFlag = !this.makerFlag
      if (this.makerFlag) {
        API.AMB_LOCATION_ALL(this, {}).then((res) => {
          if (res.data.serviceSuccess) {
            let data = res.data.data.ambLocationAllList
            data.map((re, index) => {
              re.id = 'amb-car' + index
            })
            this.markerDatas = data
            window._m.addMakers(data)
          } else {
            console.log(res.data.errors)
          }
        })
      } else {
        this.markerDatas = []
      }
    },
    // 车内视频
    showVideo (item, type) {
      this.is_video = true
      API.QUERYCARDLIVE(this, { license: item.license }).then(
        res => {
          res = res.data
          if (res.serviceSuccess) {
            let data = res.data
            if (type === 1) { // 车内视频
              this.videoTitle = '车内视频监控'
              this.video_src = data.urlIn
            } else if (type === 2) { // 车外视频
              this.videoTitle = '车外视频监控'
              this.video_src = data.urlOut
            }
          }
        }
      ).catch(err => {
        console.log(err)
      })
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
    initData () {
      this.getOperationList()
    },
    // 历史应急事件
    historyEvent () {
      API.HISTOEY_EMERGENCY_EVENTS(this, {}).then((res) => {
        if (res.data.serviceSuccess) {
          let data = res.data.data.data
          this.historyList = data
          this.isShowHistory = true
        } else {
          console.log(res.data.errors)
        }
      })
    },
    // 历史应急事件操作
    historyEventDo (data) {
      let position = {
        lon: data.lon,
        lat: data.lat,
        id: 'history-event-' + data.id
      }
      this.eventHistoryPosition = [data]
      window._m.getSouthPointByDistance(position)
      window._m.addMakers([position])
    },
    handleCloseHis (flag) {
      this.isShowHistory = flag
      this.eventHistoryPosition = []
    },
    // 预案资源【预案响应码表，预案码表】
    plantDict () {
      let eventType = this.eventDetail.zh09002 // 当前点击应急事件类型
      API.PLANT_DICT(this, {eventType: eventType}).then((res) => {
        if (res.data.serviceSuccess) {
          this.warningLevelList = res.data.data.data1 // 预案响应码表
          this.caseList = res.data.data.data2 // 预案码表
        } else {
          console.log(res.data.errors)
        }
      })
    },
    // 关闭弹窗
    handleClose (step, index, isHistory) {
      // 清除飞行线实体
      if (this.flyLine.length) {
        window._m.removeEntity(this.flyLine)
      }
      if (isHistory) {
        this.isHistory = false
        this.eventHistoryPosition[index].warningStep = step
        this.eventDetail = {}
      } else {
        this.eventPosition[index].warningStep = step
        this.eventDetail = null
      }
      // this.warningStep = step
      this.resourceTabList[1].hidden = true
      this.goodsPotion = []
    },
    // 左边部分数
    getLeftData () {
      API.EMERGENCY_LEFT(this, {}).then((resA) => {
        let res = resA.data.data
        // 应急资源概况
        this.jjResourceData = res.data2
        echarts.init(document.getElementById('main-left-center-echart')).setOption(optionsCenter(res.data2))
        // 转移安置能力
        echarts.init(document.getElementById('main-left-bottom-echart')).setOption(optionsBottom(res.data3))
        // 地图两旁信息统计
        let lfData = []
        let rgData = []
        this.leftList.map(re => {
          re.value = res.data4[re.dataIndex]
          lfData.push(re)
        })
        this.rightList.map(re => {
          re.value = res.data4[re.dataIndex]
          rgData.push(re)
        })
        this.leftList = lfData
        this.rightList = rgData
      }).catch(err => {
        console.log(err)
      })
    },
    // 右边事件
    getRightData () {
      API.EMERGENCY_RIGHT(this).then((res) => {
        if (res.data.serviceSuccess) {
          // 应急指挥部通信录
          let data = res.data.data
          let tempArr = []
          data.data4.forEach((item, index) => {
            if (index === 0) {
              tempArr.push(Object.assign(item, {text: item.zh01001, selected: true}))
            } else {
              tempArr.push(Object.assign(item, {text: item.zh01001, selected: false}))
            }
          })
          this.phoneList = tempArr
          this.phoneDetail = tempArr[0]
          this.siteList = data.data1
          this.warningList = data.data2
          this.warningListCopy = JSON.parse(JSON.stringify(data.data2))
          this.timingList = data.data3
          // 执行滚动
          this.initScroll()
        } else {
          console.log(res.data.errors)
        }
      })
    },
    // 通讯列表点击(应急指挥部通信录)
    phoneListClick (item, index) {
      this.phoneList.forEach((v, i) => {
        if (index === i) {
          v.selected = true
          this.phoneDetail = v
        } else {
          v.selected = false
        }
      })
    },
    // 鼠标移入显示标题
    showTooltip (e) {
      this.$refs.textModal.showTooltip(e)
    },
    hideTooltip () {
      this.$refs.textModal.hideTooltip()
    },
    // 获取预案资源
    getPlanResource () {
      API.GET_PLAN_RESOUCE(this, {eventId: 1}).then((res) => {
        if (res.data.serviceSuccess) {
          let data = res.data.data
          this.resourceData = data
        } else {
          console.log(res.data.errors)
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
          this.operationLeftList[0].data.push({name: '应急物资', data: [data.data1], isSelected: true})
          // this.operationLeftList[0].data.push({name: '指挥部', data: [data.data2], isSelected: false})
          this.operationLeftList[0].data.push({name: '应急人力', data: this.formatterTwoMenu(data.data3), isSelected: false})
          this.operationLeftList[0].data.push({name: '转移安置点', data: [data.data4], isSelected: false})
          this.operationLeftList[0].data.push({name: '社会保障', data: [data.data5], isSelected: false})
        }
      })
    },
    initEcharts (data) {
      // 地图
      echarts.registerMap('LESHAN', mapData)
      let mapChart = echarts.init(document.getElementById('leshanMap'))
      let md = optionsMap(data, 0)
      mapChart.setOption(md)

      mapChart.on('click', function (params) {
        if (params.componentSubType === 'scatter') {
          let index = params.dataIndex
          let md = optionsMap(data, index)
          mapChart.setOption(md)
          let position = {
            lon: params.value[0],
            lat: params.value[1]
          }
          window._m.getSouthPointByDistance(position)
        }
      })
    },
    initScroll () {
      clearInterval(this.timers[0])
      clearInterval(this.timers[1])
      clearInterval(this.timers[2])
      clearInterval(this.timers[3])
      clearInterval(this.timers[4])
      clearInterval(this.timers[5])
      clearInterval(this.timers[6])
      if (this.siteList.length > 2) { // 点位监测情况
        this.timers[1] = setInterval(this.scroll1, 3 * 1000)
      }
      if (this.warningList.length > 2) { // 预警信息
        this.timers[2] = setInterval(this.scroll2, 5 * 1000)
      }
      if (!this.isSelectEmergency) { // 默认显示模块
        if (this.phoneList.length > 5) { // 应急指挥部通信录
          this.timers[0] = setInterval(this.scroll0, this.eventScrollTime * 1000)
        }
      } else { // 点击灾害图标后
        if (this.resourceList1.length > 4) { // 资源调度清单1
          this.timers[4] = setInterval(this.scroll4, 4 * 1000)
        }
        if (this.resourceList2[1].data.length > 2) { // 资源调度清单2
          this.timers[6] = setInterval(this.scroll6, 3 * 1000)
        }
        if (this.handelList.length > 5) { // 事件处置情况
          this.timers[5] = setInterval(this.scroll5, 30 * 1000)
        }
      }
    },
    // 应急指挥部通信录
    scroll0 () {
      let scroll = this.$refs.scroll0
      let scrollLi = this.$refs.scrollLi0
      // 移动距离
      let moveLength = 0
      this.phoneList.map((re, index) => {
        if (re.selected) {
          moveLength = index
        }
      })
      scroll.style.marginTop = (moveLength + 2) * (scrollLi[0].offsetHeight * (-1) + 'px')
      this.animate0 = !this.animate0
      setTimeout(() => {
        this.phoneList[moveLength].selected = false
        let s = this.phoneList.splice(0, moveLength + 1)
        s.reverse()
        this.phoneList.push(...s)
        this.phoneList[0].selected = true
        this.phoneDetail = this.phoneList[0]
        scroll.style.marginTop = '0rem'
        this.animate0 = !this.animate0
      }, 500)
    },
    // 点位监测情况
    scroll1 () {
      this.$nextTick(() => {
        let scroll = this.$refs.scroll1
        let scrollLi = scroll.children[0]
        scroll.style.marginTop = (scrollLi.offsetHeight * (-1) + 'px')
        this.animate1 = !this.animate1
        setTimeout(() => {
          this.siteList.push(this.siteList[0])
          this.siteList.shift()
          scroll.style.marginTop = '0'
          this.animate1 = !this.animate1
        }, 600)
      })
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
    // 资源调度清单1
    scroll4 () {
      let scroll = this.$refs.scroll4
      let scrollLi = this.$refs.scrollLi4
      scroll.style.marginTop = (scrollLi[0].offsetHeight * (-1) + 'px')
      this.animate4 = !this.animate4
      setTimeout(() => {
        this.resourceList1.push(this.resourceList1[0])
        this.resourceList1.push(this.resourceList1[1])
        this.resourceList1.shift()
        this.resourceList1.shift()
        scroll.style.marginTop = '0'
        this.animate4 = !this.animate4
      }, 500)
    },
    // 事件处置情况
    scroll5 () {
      let scroll = this.$refs.scroll5
      let scrollLi = this.$refs.scrollLi5
      scroll.style.marginTop = (scrollLi[0].offsetHeight * (-5) + 'px')
      this.animate5 = !this.animate5
      setTimeout(() => {
        this.handelList.push(this.handelList[0])
        this.handelList.push(this.handelList[1])
        this.handelList.push(this.handelList[2])
        this.handelList.push(this.handelList[3])
        this.handelList.push(this.handelList[4])
        this.handelList.shift()
        this.handelList.shift()
        this.handelList.shift()
        this.handelList.shift()
        this.handelList.shift()
        scroll.style.marginTop = '0'
        this.animate5 = !this.animate5
      }, 500)
    },
    // 资源调度清单2
    scroll6 () {
      let scroll = this.$refs.scroll6
      let scrollLi = this.$refs.scrollLi6
      scroll.style.marginTop = (scrollLi[0].offsetHeight * (-1) + 'px')
      this.animate6 = !this.animate6
      setTimeout(() => {
        this.resourceList2[1].data.push(this.resourceList2[1].data[0])
        this.resourceList2[1].data.push(this.resourceList2[1].data[1])
        this.resourceList2[1].data.shift()
        this.resourceList2[1].data.shift()
        scroll.style.marginTop = '0'
        this.animate6 = !this.animate6
      }, 500)
    },
    enter (index) {
      switch (index) {
        case 0:
          clearInterval(this.timers[0])
          break
        case 1:
          clearInterval(this.timers[1])
          break
        case 2:
          clearInterval(this.timers[2])
          break
        case 3:
          clearInterval(this.timers[3])
          break
        case 4:
          clearInterval(this.timers[4])
          break
        case 5:
          clearInterval(this.timers[5])
          break
        case 6:
          clearInterval(this.timers[6])
          break
      }
    },
    leave (index) {
      switch (index) {
        case 0:
          this.timers[0] = setInterval(this.scroll0, this.eventScrollTime * 1000)
          break
        case 1:
          this.timers[1] = setInterval(this.scroll1, 3 * 1000)
          break
        case 2:
          this.timers[2] = setInterval(this.scroll2, 5 * 1000)
          break
        case 4:
          this.timers[4] = setInterval(this.scroll4, 2 * 1000)
          break
        case 5:
          this.timers[5] = setInterval(this.scroll5, 30 * 1000)
          break
        case 6:
          this.timers[6] = setInterval(this.scroll5, 3 * 1000)
          break
      }
    },
    slideValue (km) { // 区域范围
      this.km = km
      this.pointsToMap()
    },
    resetKm () {
      this.km = ''
      this.$refs.slider.reset()
      this.pointsToMap()
    },
    // 查看详情
    onSelectEmergency (index, isHistory) {
      this.resourceTabList[1].hidden = false
      if (isHistory) {
        this.eventHistoryPosition[index].warningStep = 0
      } else {
        this.eventPosition[index].warningStep = 0
      }

      // 清除不需要滚动的模块
      this.isSelectEmergency = true
      // 向后端发送消息
      this.webskt.send('{eventId: ' + this.eventDetail.id + '}')
      this.$nextTick(() => {
        this.initScroll()
      })
    },
    showPdf () {
      this.showPreviewPdf = true
      this.pdFPath = pdfPath + 'd5c14352-7e43-4387-9a88-c013fdc442b2.PDF'
    },
    onCloseAccident () {
      this.isSelectEmergency = false
      this.showPreviewPdf = false
      this.resourceTabList[1].hidden = true
      if (this.isHistory) {
        this.eventHistoryPosition[0].warningStep = 3
      } else {
        this.eventPosition[this.eventIndex].warningStep = 3
      }
      this.$nextTick(() => {
        echarts.init(document.getElementById('main-left-center-echart')).setOption(optionsCenter(this.jjResourceData))
        this.initScroll()
      })
    },
    onClosePdf () {
      this.showPreviewPdf = false
    },
    // 选中应急预案
    onSelectCase (i, id) {
      this.caseSelectedIndex = i
      this.eventDetail.zh09022 = id
    },
    // 响应级别修改保存
    onSaveChangeLevel (index) {
      // 调用接口后，赋值
      this.onStartWarning(index)
    },
    // 启动应急预案
    onStartWarning (index) {
      let {id, zh09021, zh09022} = this.eventDetail
      if (!zh09021) {
        zh09021 = this.warningLevelList[0].id
      }
      API.START_PLANT(this, {id, zh09021, zh09022}).then((res) => {
        if (res.data.serviceSuccess) {
          // 调用接口后，赋值
          this.eventPosition[index].warningStep = 3
        } else {
          console.log(res.data.errors[0].msg)
        }
      })
    },
    // 选择响应级别
    chooseWarningLevel (name, item) {
      this.warningLevelValue = name
      this.eventDetail.zh09021 = item.id
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
    // 预案资源清空面板勾选状态
    clearCheckedBox1 () {
      for (let k in this.resourceData) {
        if (this.resourceData[k]) {
          for (let i = 0; i < this.resourceData[k].length; i++) {
            this.resourceData[k][i].isSelected = false
          }
        }
      }
    },
    // 默认资源与预案资源切换
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
      // 清空点位信息
      this.panelData = {}
      this.makerBoxType = ''
      // 清空面板勾选状态
      this.clearCheckedBox(this.operationLeftList)
      this.clearCheckedBox1()
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
              case 0:
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
        // let eventId = this.eventDetail && this.eventDetail.id
        // let radii = this.km
        // let lon = this.eventDetail && this.eventDetail.lon
        // let lat = this.eventDetail && this.eventDetail.lat
        // eventId: eventId, radii, lon, lat
        API[type](this, {type: ids}).then(res => {
          if (res.data.serviceSuccess) {
            let datas = res.data.data.data || []
            datas.map((re, index) => {
              re.idCopy = re.id
              re.id = re.id + index
            })
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
    onCheckBox (obj, index, type, pind) {
      if (!this.ceneterScope.lon || !this.switchFlage) {
        return false
      }
      // 撒点调用的接口名称
      // HEADER_QUARTERS_BY_ID
      let menuEvent = [
        ['WAREHOUSE_BY_TYPE', 'EMERGENCY_TEAM_BY_TYPE', 'SHELTER_LIST', 'SOCIAL_RESOURECE_BY_TYPE'],
        ['MAJOR_PROJECTTION_BY_TYPE'],
        ['HAZARD_BY_TYPE', 'MONITORING_BY_TYPE', 'SATETY_PRODUCTION_BY_TYPE', 'PUBLIC_HEALTH_BY_TYPE'],
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
      } else {
        // 预案资源选择
        let p = this.resourceData[type]
        let apiType = menuEvent[0][pind]
        this.$set(p, index, obj)
        let objs = {
          type: apiType,
          ids: []
        }
        for (let j = 0; j < p.length; j++) {
          if (p[j].isSelected) {
            objs.ids.push(p[j].id)
          }
        }
        this.resourceId = [objs]
      }
      // 获取选中的数组，并调用接口
      this.pointsToMap()
    },
    // 点击事件展示信息
    handelShowEvent (e, index, isHistory) {
      if (isHistory) {
        this.eventHistoryPosition.map((item, ind) => {
          if (index === ind) {
            item.showStep = true
            item.Zindex = 9
            // 事件启动过
            if (item.zh09018 === '1') {
              item.warningStep = 3
            } else {
              item.warningStep = 1
            }
          } else {
            item.showStep = false
            item.warningStep = 0
            item.Zindex = 8
          }
        })
        this.eventDetail = this.eventHistoryPosition[index]
        this.isHistory = true // 当前点击事件类型
      } else {
        this.eventPosition.map((item, ind) => {
          if (index === ind) {
            item.showStep = true
            item.Zindex = 10
            // 事件启动过
            if (item.zh09018 === '1') {
              item.warningStep = 3
            } else {
              item.warningStep = 1
            }
          } else {
            item.showStep = false
            item.warningStep = 0
            item.Zindex = 8
          }
        })
        this.eventDetail = this.events[index]
        this.isHistory = false
      }
      this.eventIndex = index
      // 清除飞行线等
      if (this.flyLine.length) {
        window._m.removeEntity(this.flyLine)
      }
      this.isSelectEmergency = false
      this.goodsPotion = []
      this.plantDict()
    },
    // 时间格式化
    timeFormat (t) {
      return formatterTime(t)
    },
    // 点击maker出现详细信息
    handleSeeDetail (id, type, type01) {
      this.positionId = id
      console.log(id, type, type01)
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
        '002': 'one',
        '003': 'seven',
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
      // this.makerType = type01 || type
      // 根据后台返回的type 和 type01 确定弹窗样式
      let eId = this.eventDetail ? this.eventDetail.id : ''
      this.$nextTick(() => {
        echarts.init(document.getElementById('main-left-center-echart')).setOption(optionsCenter(this.jjResourceData))
        this.initScroll()
      })
      console.log(this.makerBoxType)
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
    }
  },
  watch: {
    // 新增范围选择
    switchFlage (val) {
      if (!val) { // 关闭范围选择
        // 清空选择状态
        this.clearCheckedBox(this.operationLeftList)
        this.clearCheckedBox1()
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
  beforeDestroy () {
    this.switchFlage = false
    // 关闭连接
    this.webskt.close()
    this.phoneSkt.close()
    clearInterval(this.timers[0])
    clearInterval(this.timers[1])
    clearInterval(this.timers[2])
    clearInterval(this.timers[3])
    clearInterval(this.timers[4])
    clearInterval(this.timers[5])
    clearInterval(this.timers[6])
    // 清除cesium中的makers
    window._m.removeMaker()
    window._m.modalPosition = {}
    $('#warn-and-notice').off()
    $('#communication').off()
    $('#note').off()
    $('#history-modal').off()
    $('#position-monitor').off()
    // 清除之前的飞行线
    if (this.flyLine.length) {
      window._m.removeEntity(this.flyLine)
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
  .icon-box {
    position: absolute;
    z-index: 15;
    .icon-img {
      width: 0.5rem;
      height: 0.66rem;
    }
  }
  .g-title-btn{
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  .car-ambulence{
    > div{
      position: absolute;
      z-index: 201;
      margin-top: -.68rem;
      margin-left:-0.34rem
    }
    .line2{
      width: 1rem;
      height: 1rem;
      float: left;
      margin-top: -1.7rem;
      margin-left: .3rem;
    }
  }
  .g-img-box {
    // width: 0.68rem;
    // height: 0.83rem;
    left: 0;
    top: 0;
    z-index: 1;
    cursor: pointer;
    position: relative;
    &:hover{
      z-index: 999;
    }
    .makers-title{
      display: none;
      position: absolute;
      top: -.4rem;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      font-size: .16rem;
      padding: .03rem .2rem;
      max-width: 2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      background-color: rgba(0,72,107,.5);
      border: .02rem solid rgba(103, 207, 255, .75);
    }
    .big-img {
      width: 0.68rem;
      height: 0.83rem;
      &:hover ~ .makers-title{
        display: block;
      }
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
    .toolbox{
      position: absolute;
      right: 7.92rem;
      bottom: 5rem;
      z-index: 20;
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
          width: .35rem;
          height: .35rem;
          margin-right: .05rem;
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
          padding: .02rem .04rem;
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
      left: 11.62rem;
      bottom: 0.47rem;
      z-index: 9999;
    }
    .g-title {
      display: inline-block;
      margin: 0.5rem 0 0 0.5rem;
      font-size:0.24rem;
      line-height: 0.23rem;
      text-align: center;
      color: #fff;
      padding-left: 0.15rem;
      padding-bottom: .2rem;
      background: url('../../../assets/emergency-command/emergency-command-chart/title-line.png') center no-repeat;
      background-position: 0 .2rem;
      background-size: .87rem .25rem;
      &:hover {
        color: #ffed66;
        text-shadow:0 0 0.1rem rgba(228,205,38,0.28);
      }
    }
    .main-left-top {
      position: absolute;
      left: 0.29rem !important;
      top: 0.20rem !important;
      z-index: 1000;
      width: 7.01rem;
      height: 3.47rem;
      background: url('../../../assets/emergency-command/emergency-command-chart/bg-small.png') center no-repeat;
      background-size: 100%;
      .left-top-echart {
        position: relative;
        height: 2.2rem;
        padding: 0 0.45rem;
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
          position: absolute;
          top: -0.55rem;
          right: 0.48rem;
          width: 3.72rem;
          .phone-detail-wrapper {
            position: relative;
            width: 100%;
            height: 1.18rem;
            box-sizing: border-box;
            padding: 0.11rem 0 0.22rem 0;
            background: url("../../../assets/emergency-command/emergency-command-chart/phone-item-bg.png") no-repeat center;
            background-size: 100% 100%;
            .phone-detail-item {
              font-size: 0;
              margin-top: 0.08rem;
              .phone-detail-dot {
                display: inline-block;
                vertical-align: top;
                width: 0.06rem;
                height: 0.06rem;
                background-color: #27EBFF;
                margin: 0.08rem 0.1rem 0 0.24rem;
              }
              .phone-detail-label {
                height:0.20rem;
                font-size:0.17rem;
                font-weight:500;
                color: #FFF;
                vertical-align: top;
              }
              .phone-detail-value {
                height:0.20rem;
                font-size:0.17rem;
                font-weight:500;
                color: #FBE62F;
              }
              .item-detail-value{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                display: inline-block;
                width: 2.2rem;
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
              margin-top: 0.12rem;
            }

          }
        }
      }
      .command-info-box {
        position: relative;
        height: 2.2rem;
        padding: 0 0.45rem;
        box-sizing: border-box;
        .charge-person-list {
          width: 2.894rem;
          .phone-detail-wrapper {
            position: relative;
            height: 0.9rem;
            background: url("../../../assets/emergency-command/emergency-command-chart/charge-item-bg.png") no-repeat center;
            background-size: 100% 100%;
            margin-top: 0.16rem;
            padding: 0.15rem 0 ;
            box-sizing: border-box;
            .phone-detail-item {
              font-size: 0;
              padding: 0.04rem 0;
              .phone-detail-dot {
                display: inline-block;
                vertical-align: top;
                width: 0.06rem;
                height: 0.06rem;
                background-color: #27EBFF;
                margin: 0.09rem 0.1rem 0 0.24rem;
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
              right: 0.5rem;
              width: 0.24rem;
              height: 0.24rem;
            }
            .phone-icon1 {
              position: absolute;
              top: 0.48rem;
              right: 0.15rem;
              width: 0.24rem;
              height: 0.24rem;
              cursor: pointer;
            }
            &:last-child {
              margin-top: 0.1rem;
            }
          }
        }
        .charge-depart-info {
          position: absolute;
          top: -0.55rem;
          right: 0.5rem;
          width: 2.95rem;
          height: 2.3rem;
          color: #FFF;
          font-size: 0.17rem;
          .charge-depart-info-title {
            font-size:0.2rem;
            font-weight:500;
            margin: 0;
            line-height: 0.3rem;
          }
          .charge-depart-info-item {
            line-height: 0.275rem;
            margin-top: 0.06rem;
            label {
              color: #35B7F4;
            }
          }
        }
      }
    }
    .main-left-center {
      position: absolute;
      left: 0.29rem !important;
      top: 3.39rem !important;
      z-index: 1000;
      width: 7.01rem;
      height: 3.47rem;
      background: url('../../../assets/emergency-command/emergency-command-chart/bg-small.png') center no-repeat;
      background-size: 100%;
      .main-left-center-echart {
        margin-top: -0.2rem;
        height: 2.5rem;
      }
      .left-top-echart {
        position: relative;
        height: 2.2rem;
        padding: 0 0.45rem;
        box-sizing: border-box;
        .resource-list-box-title {
          font-size:0.22rem;
          font-weight:500;
          color: #FFF;
          padding-left: 0.15rem;
          display: flex;
          align-items: center;
          margin-top: 0.3rem;
          img {
            width: 0.33rem;
            height: 0.33rem;
          }
          .resource-used {
            font-size: 0.18rem;
            color: #E0E3FB;
            padding-left: 0.14rem;
          }
        }
        .resource-list-box-title-2 {
          position: absolute;
          top: -1rem;
          left: 3.6rem;
        }
        .resource-list-box {
          margin-top: 0.1rem;
          margin-left: 0.12rem;
          width: 2.82rem;
          height: 1.2rem;
          overflow: hidden;
          transition: all 0.5s;
          .resource-list {
            width: 2.82rem;
            overflow: hidden;
            list-style: none;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            .resource-list-item {
              margin-bottom: .08rem;
              flex: 0 0 50%;
            }
          }
          .anim{
            transition: all 0.5s;
          }
        }
        .item-inner {
          width: 1.29rem;
          height: 0.35rem;
          line-height: 0.35rem;
          background: url("../../../assets/emergency-command/emergency-command-chart/gear-unselected-bg.png") no-repeat center;
          background-size: 100% 100%;
          font-size:0.16rem;
          color: #FFF;
          padding-left: 0.4rem;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .item-inner-selected {
          background: url("../../../assets/emergency-command/emergency-command-chart/gear-selected-bg.png") no-repeat center;
          background-size: 100% 100%;
        }
        .resource-detail-box {
          position: absolute;
          top: -0.4rem;
          right: 0.48rem;
          width: 2.82rem;
          height: 2.3rem;
          .resource-list-title-2 {
            font-size:0.16rem;
            font-weight: 500;
            color: #FFF;
            padding-left: 0.23rem;
            margin-top: 0.19rem;
          }
          .item-inner-box {
            padding-left: 0.2rem;
            box-sizing: border-box;
          }
          .resource-list-box {
            margin-left: 0.2rem;
            margin-top: 0;
            height: 0.8rem;
          }
        }
      }
    }
    .main-left-bottom {
      position: absolute;
      left: 0.29rem !important;
      top: 6.6rem !important;
      z-index: 1000;
      width: 7.02rem;
      height: 4.14rem;
      background: url('../../../assets/emergency-command/emergency-command-chart/bg-big.png') center no-repeat;
      background-size: 100%;
      color:rgba(223,226,251,1);
      .main-left-bottom-echart {
        height: 2.9rem;
      }
    }
    .main-right-top {
      position: absolute;
      left: 35.64rem !important;
      top: 0.20rem !important;
      z-index: 1000;
      width: 7.01rem;
      height: 3.47rem;
      background: url('../../../assets/emergency-command/emergency-command-chart/bg-small.png') center no-repeat;
      background-size: 100%;
      .site-monitor-box {
        height: 2.2rem;
        overflow: hidden;
        transition: all 0.5s;
        .site-monitor-list {
          width: 100%;
          overflow: hidden;
          list-style: none;
          padding: 0rem 0.5rem 0.1rem 0.5rem;
          box-sizing: border-box;
          .site-monitor-item {
            height: .55rem;
            padding-top: .14rem;
            .site-monitor-item-box1{
              margin-bottom: .13rem;
            }
            .site-monitor-item-box {
              display: flex;
              align-items: center;
              font-size: 0.2rem;
              color: #E0E3FB;
              height: 0.19rem;
              line-height: 0.19rem;
              img {
                width: 0.33rem;
                height: 0.33rem;
              }
              .site-monitor-item-name {
                flex: 1;
                font-weight:500;
                line-height: .30rem;
                font-size:0.2rem;
                color: #FFF;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .site-monitor-item-time {
                width: 2rem;
                font-size:0.16rem;
                text-align: right;
              }
              .site-monitor-item-type {
                flex: 1;
                padding-left: 0.33rem;
                box-sizing: border-box;
                // width: 1.7rem;
              }
              .site-monitor-item-address {
                flex: 1;
                margin-left: 0.2rem;
              }
              .site-monitor-item-status {
                flex: 1;
                text-align: right;
                color: #F3E51B;
              }
            }

          }
        }
        .anim{
          transition: all 0.5s;
        }
      }
    }
    .main-right-center {
      position: absolute;
      left: 35.64rem !important;
      top: 3.39rem !important;
      z-index: 1000;
      width: 7.01rem;
      height: 3.47rem;
      background: url('../../../assets/emergency-command/emergency-command-chart/bg-small.png') center no-repeat;
      background-size: 100%;
      .warning-info-box {
        height: 2.1rem;
        overflow: hidden;
        transition: all 0.5s;
        cursor: pointer;
        .warning-info-list {
          width: 100%;
          overflow: hidden;
          list-style: none;
          padding: 0 0.5rem;
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
    .main-right-bottom {
      position: absolute;
      left: 35.64rem !important;
      top: 6.6rem !important;
      z-index: 1000;
      width: 7.02rem;
      height: 4.14rem;
      background: url('../../../assets/emergency-command/emergency-command-chart/bg-big.png') center no-repeat;
      background-size: 100%;
      color:rgba(223,226,251,1);
      .timing-wrapper {
        position: relative;
        width: 88%;
        height: 2.7rem;
        margin-top: 0.16rem;
        padding: 0 .5rem;
        .timing-list-title {
          display: flex;
          position: absolute;
          top: -0.45rem;
          right: 0.45rem;
          width: 4.5rem;
          font-size:0.18rem;
          font-weight:bold;
          color:#DFE2FD;
          text-align: right;
          align-items: center;
          span {
            flex: 1;
          }
          .bold-title {
            font-size:0.21rem;
            color: #fff;
          }
        }
        .timing-info-ul {
          width: 100%;
          list-style: none;
          box-sizing: border-box;
          padding: 0 0.45rem 0 0.55rem;
          .timing-info-li {
            width: 100%;
            display: flex;
            height: 0.4rem;
            align-items: center;
            font-size:0.17rem;;
            color: #FFF;
            background: rgba(0,102,181,.7);
            .timing-info-li-item {
              line-height: 0.19rem;
              padding-left: 0.1rem;
              box-sizing: border-box;
              &:nth-child(1) {
                width: 1.7rem;
                padding-left: 0.16rem;
                box-sizing: border-box;
              }
              &:nth-child(2) {
                width: 2rem;
              }
              &:nth-child(3) {
                width: 1.12rem;
              }
              &:last-child {
                flex: 1;
                padding-left: 0.06rem;
              }
            }
          }
          &:last-child {
            .timing-info-li {
              background:rgba(7,69,182,.1);
              height: 0.44rem;
              &:nth-child(2n) {
                background:rgba(7,69,182,.3);
              }
            }
          }
        }
        .timing-info-list-box {
          height: 2.2rem;
          overflow: hidden;
          transition: all 0.5s;
          .anim{
            transition: all 0.5s;
          }
        }
      }
    }
    .left-list {
      position: absolute;
      top: 0.7rem !important;
      left: 7.6rem !important;
      z-index: 1000;
      font-family: Impact;
      .left-list-li {
        .name {
          display: inline-block;
          box-sizing: border-box;
          height: 0.28rem;
          line-height: 0.28rem;
          text-align: left;
          color: #FFFFFF;
          font-size: 0.2rem;
          font-style: italic;
          font-weight: bold;
          -webkit-transform: perspective(1rem) rotateX(-15deg);
          transform: perspective(1rem) rotateX(-15deg);
          -webkit-transform-origin: left;
          transform-origin: left;
          background: #d5602c;
          padding: 0 0.17rem 0 .1rem;
          margin: .12rem 0;
        }
        .number {
          font-size:0.4rem;
          color: #FFFFFF;
          font-style:italic;
          font-weight: bold;
          font-family: DIN Condensed;
        }
      }
    }
    .right-list {
      position: absolute;
      top: 0.7rem !important;
      left: 33.3rem !important;
      z-index: 1000;
      .right-list-li {
        text-align: right;
        .name {
          display: inline-block;
          box-sizing: border-box;
          height: 0.28rem;
          line-height: 0.28rem;
          color: #FFFFFF;
          font-size: 0.21rem;
          font-style: italic;
          font-weight: bold;
          -webkit-transform: perspective(1rem) rotateX(-15deg);
          transform: perspective(1rem) rotateX(-15deg);
          -webkit-transform-origin: right;
          transform-origin: right;
          background: #d5602c;
          padding: 0 0.1rem 0 .2rem;
          margin: .07rem 0;
        }
        .number {
          font-size:0.4rem;
          color: #FFFFFF;
          font-style:italic;
          text-align: right;
          font-weight: bold;
          padding-right: 0.15rem;
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
    .map-wrapper {
      position: absolute;
      left: 8.04rem;
      bottom: 0.41rem;
      width: 3.36rem;
      height: 3.36rem;
      background: url("../../../assets/emergency-command/emergency-command-chart/map-bg.png") no-repeat center;
      background-size: 100% 100%;
      z-index: 3;
      #leshanMap {
        width: 100%;
        height: 100%;
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
        height: 8.75rem;
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
      .accident-plan-wrapper {
        width: 7.49rem;
        margin-left: 0.41rem;
        padding-top: 0.3rem;
        box-sizing: border-box;
        .accident-item-scroll-box {
          overflow: hidden;
          .accident-content-pdf-box {
            width: 7rem;
            height: 7.6rem;
            margin: 0.2rem 0 0 0.25rem;
            .pdf-iframe {
              box-sizing: border-box;
              border: none;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .operation-box-wrapper {
      z-index: 3;
      width: 6.42rem;
      height: 3.98rem;
      background: url("../../../assets/emergency-command/emergency-command-chart/operation-bg.png") no-repeat center;
      background-size: 100% 100%;
      padding: 0.4rem 0.5rem 0 0.5rem;
      box-sizing: border-box;
      .operation-title-box {
        display: flex;
        padding-left: 0.58rem;
        box-sizing: border-box;
        .resource-tab-item {
          width:0.82rem;
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
          margin-left: 0.05rem;
          margin-top: .05rem;
          font-size:0.14rem;
          font-weight:400;
          font-style:italic;
          color: #DFE2FD;
          height: 0.5rem;
          .distance-title {
            width: 0.65rem;
            padding-top: .22rem;
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
            width: 0.52rem;
            height: 0.25rem;
            margin-top: .3rem;
            line-height: 0.25rem;
            font-size: 0.14rem;
            margin-left: .1rem;
            font-style: italic;
            color:#DFE2FD;
            background:#00ABFB;
            border-radius: 0.13rem;
            text-align: center;
            cursor: pointer;
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
              top: 0.83rem;
            }
            &:nth-child(3) {
              left: -0.03rem;
              top: 1.55rem;
            }
            &:nth-child(4) {
              left: 0.1rem;
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
  }
  .resource-contents{
    height: 2.5rem;
    overflow: auto;
    color: #fff;
    font-size: .16rem;
    padding-left: .5rem;
    box-sizing: border-box;
    p{
      font-size: .18rem;
      font-weight: bold;
      margin: .1rem 0;
    }
    .operation-item{
      display: inline-block;
      width: 24%;
      text-align: center;
      margin-bottom: .1rem;
    }
    img{
      width: .48rem;
      height: .48rem;
    }
    .operation-item-bottom{
      margin: 0 auto;
      width: 80%;
      height: 0.35rem;
      font-size: 0.16rem;
      font-weight: 500;
      font-style: italic;
      color: #9BE9FF;
      line-height: 0.2rem;
    }
    .operation-item{
      vertical-align: top;
      position: relative;
    }
    .operation-check-box{
      position: absolute;
      top: 0.1rem;
      right: 0.08rem;
      width: 0.15rem;
      height: 0.15rem;
      border: 0.01rem solid #9BE9FF;
    }
    .operation-check-box-selected{
      background: #FFD200;
      text-align: center;
      &::after{
        position: absolute;
        top: -.12rem;
        font-size: .08rem;
        right: -.05rem;
        font-weight: bold;
        content: '\2714';
        color: #000;
      }
    }
  }
  .makers,
  .other-makers{
    position: absolute;
    cursor: pointer;
    margin-left: -.4rem;
    margin-top: -.4rem;
    &:hover{
      z-index: 999 !important;
    }
    &:hover .makers-title{
      display: flex !important;
    }
    .makers-title{
      position: absolute;
      top: .3rem;
      left: 50%;
      transform:translateX(-25%);
      color: #fff;
      font-size: .16rem;
      padding: .03rem .2rem;
      background-color: rgba(0,72,107,.5);
      border: .02rem solid rgba(103, 207, 255, .75);
      display: flex;
      align-items: center;
      span:nth-child(1){
        display: inline-block;
        width: 1.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      span:nth-child(2){
        font-size: .14rem;
        width: .6rem;
        text-align: center;
      }
      .makers-level-1{
        background: url("../../../assets/emergency-command/emergency-command-chart/shape2.png") no-repeat;
        background-size: 100% 100%;
      }
      .makers-level-2{
        background: url("../../../assets/emergency-command/emergency-command-chart/shape1.png") no-repeat;
        background-size: 100% 100%;
      }
      .makers-level-3{
        background: url("../../../assets/emergency-command/emergency-command-chart/shape3.png") no-repeat;
        background-size: 100% 100%;
      }
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
      left: .33rem;
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
    /*width: 1rem;*/
    /*height: 1.3rem;*/
    margin-top: -1rem;
    margin-left:-0.5rem;
    .down-deep-box{
      position: absolute;
      margin-left: 1.5rem;
      margin-top: -1rem;
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
          top: 2rem;
          padding: 0.2rem;
          background: url("../../../assets/city-management/city-facilities/notice-bg.png")
          center no-repeat;
          background-size: 100% 100%;
          .video-name{
            width: 4rem;
            font-size: .16rem;
            color: #fff;
            z-index: 99;
          }
          .video-close{
            position: absolute;
            top: .24rem;
            left: 5rem;
            z-index: 10;
            cursor: pointer;
            width: .3rem;
            height: .3rem;
          }
          .maker-panle{
            margin-top: .1rem;
            width: 5.2rem;
            height: 3.8rem;
          }
        }
      }
    }
    &:hover{
      z-index: 999 !important;
    }
    .img-box:hover ~ .makers-title{
      display: block;
    }
    .makers-title{
      display: none;
      position: absolute;
      top: .1rem;
      left: 50%;
      color: #fff;
      font-size: .16rem;
      padding: .03rem .2rem;
      white-space: nowrap;
      background-color: rgba(0,72,107,.5);
      border: .02rem solid rgba(103, 207, 255, .75);
    }
    .inside{
      position: absolute;
      left: .35rem;
      top: .28rem;
      z-index: 2;
      width: .35rem;
      height: .35rem;
    }
    .inside-2d {
      top: .6rem;
    }
    .outside{
      position: absolute;
      top: 0;
      left: 0;
      width: 1rem;
      height: 1.2rem;
    }
  }
  #warn-and-notice,
  #position-monitor{
    cursor: move;
    position: absolute;
    z-index: 200;
    left: 25rem;
    top: 2.2rem;
  }
  .natural-panel{
    position: absolute;
    bottom: .5rem;
    left: 29.3rem;
    z-index: 15;
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
  // .left-top-tooltip{
  //   display: none;
  //   position: absolute;
  //   z-index: 1001;
  //   font-size: 0.17rem;
  //   background-color: rgba(0,53,126,0.74);
  //   color:#ffffff;
  //   border: 0.02rem solid #44aaf4;
  //   border-radius: 0.05rem;
  //   padding: 0.1rem 0.2rem
  // }
  /* 通讯弹窗 */
  #communication,
  #note,
  #history-modal{
    position: absolute;
    left: 15rem;
    top: 5rem;
    z-index: 20;
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
  /* 救护车 */
  .g-maker-text {
    float: left;
    margin-top: -2rem;
    margin-left: 1.35rem;
    padding: 0.1rem 0.16rem 0.4rem 0.25rem;
    box-sizing: border-box;
    width: 4.05rem;
    font-size: 0;
    // min-height: 6.86rem;
    background: url("../../../assets/common/maker-model.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    // overflow: hidden;
    .g-text-btn {
      margin-top: 0.18rem;
      width: 100%;
      height: 0.32rem;
      display: flex;
      justify-content: space-around;
      .g-btn-item {
        height: 0.32rem;
        line-height: 0.32rem;
        cursor: pointer;
        padding: 0 0.16rem;
        font-size:0.17rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        color:rgba(255,255,255,1);
        border:1px solid rgba(69,143,239,1);
        border-radius: 0.15rem;
      }
    }
    .video-box{
      position: absolute;
      left: 100%;
      top: -20%;
      z-index: 999;
      .maker-title{
        font-family:Source Han Sans CN;
        font-weight:bold;
        color:rgba(255,255,255,1);
        font-size: .21rem;
        padding: .18rem 0;
        img{
          width:.24rem;
          height: .25rem;
          float: right;
          cursor: pointer;
        }
      }
      .maker-title{
        font-weight: normal;
        font-size: .21rem;
        img {
          width: 0.21rem;
          height: 0.21rem;
        }
        .icon{
          width: 0.35rem;
          height: 0.35rem;
          float: left;
        }
      }
      display: flex;
      flex-direction: column;
      width: 7.73rem;
      height:5.21rem;
      padding: 0.21rem 0.35rem;
      float: left;
      margin-left: 0.1rem;
      background: url('../../../assets/emergency-command/emergency-command-chart/car-vedio-bg.png') no-repeat center/contain;
      video{
        flex: 1;
        height: 3.98rem;
      }
      .video-html {
        flex: 1;
        height: 3.98rem;
      }
    }
    .g-close {
      position: absolute;
      right: 0.21rem;
      top: 0.25rem;
      cursor: pointer;
      width: 0.26rem;
      height: 0.26rem;
      background: url("../../../assets/common/natural-close.png") no-repeat;
      background-size: 100% 100%;
    }
    h3 {
      margin-top: 0.20rem;
      padding: 0 0.35rem 0 0;
      box-sizing: border-box;
      font-size:0.22rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:0.3rem;
    }
    .g-text-item {
      display: inline-block;
      min-width: 46%;
      margin-top: 0.18rem;
      // margin-bottom: 0.13rem;
      font-size:0.16rem;
      line-height: 135%;
      font-family: Source Han Sans CN;
      font-weight:bold;
      color:rgba(223,226,251,1);
      span {
        // display: inline-block;
        position: relative;
        font-size:0.16rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        font-style:italic;
        line-height: 0.16rem;
        color:rgba(249,230,89,1);
      }
      label {
        float: left;
        line-height: 0.16rem;
      }
      .g-address {
        width: 2.48rem;
        line-height: 0.2rem;
        float: left;
      }
    }
    .g-text-item2 {
      width: 99%;
    }
    .g-all-num {
      width: 100%;
      overflow: hidden;
      list-style: none;
      li {
        float: left;
        width: 50%;
        height: 0.96rem;
        list-style: none;
        position: relative;
        p {
          padding-left: 0.3rem;
          height:0.24rem;
          font-size:0.18rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          font-style:italic;
          color:rgba(223,227,251,1);
          &::before {
            content: '';
            display: inline-block;
            width: 0.21rem;
            height: 0.24rem;
            background: url("../../../assets/common/maker-text.png") no-repeat;
            background-size: 100% 100%;
            position: absolute;
            left: 0;
            top: 0;
          }
        }
        .g-num-text {
          margin-left: 0.24rem;
          width: 1.45rem;
          height: 0.72rem;
          background: url("../../../assets/common/num-bg.png") no-repeat;
          background-size: 100% 100%;
          line-height: 0.72rem;
          text-align: center;
          font-size:0.17rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          font-style:italic;
          color:rgba(255,255,255,1);
          span {
            font-size:0.3rem;
            font-family:Impact;
            font-weight:bold;
            font-style:italic;
            color:rgba(249,230,89,1);
          }
        }

      }
    }
    .g-border-line {
      margin: 0;
      width: 100%;
      height: 0.01rem;
      border-bottom: 0.01rem dashed rgba(72,170,244,1);
    }
    .g-text-box {
      width: calc(100% - 0.12rem);
      margin-right: 0.12rem;
      margin-bottom: 0.16rem;
      padding: 0 0.2rem;
      font-size: 0;
      box-sizing: border-box;
      // min-height: 1.6rem;
      height: 2.2rem;
      overflow: hidden;
      background: url("../../../assets/common/maker-small-box.png") no-repeat;
      background-size: 100% 100%;
      .color-green {
        color: #73D477;
      }
      .g-text-nav {
        width: 100%;
        margin-top: 0.35rem;
        position: relative;
        .g-nave-page {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.14rem;
          color: #ffffff;
          display: inline-block;
        }
      }
    }
  }
</style>
