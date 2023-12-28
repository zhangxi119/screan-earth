/* eslint-disable vue/no-parsing-error */
<!--
 * @Descripttion:市场主体
 * @Author: wuqiuchi
 * @Date: 2020-03-10 14:28:31
 * @LastEditors: wanglong
 * @LastEditTime: 2020-05-12 20:26:18
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-15 20:21:20
 -->
<template>
  <div class="medical-resource-container">
    <!-- <div class="header-bg">市场主体监管</div> -->
    <head-componen name="市场主体监管"></head-componen>
    <div class="g-menu-box">
      <menu-list></menu-list>
    </div>
    <!-- <circlePanel @getQueryPoint="getQueryPoint"></circlePanel> -->
    <div class="g-nav-box">
      <select-other :data="menuList"></select-other>
    </div>
    <div class="left-content">
      <div class="left-content-top">
        <div>
          <div class="title-model">
            <div class="title hover-color">{{surveyData.zy01001}}年市场主体登记情况</div>
          </div>
          <div class="base-list">
            <div class="base-list-single">
              <div class="base-list-single-title">
                <div class="base-list-single-dot"></div>
                <div class="base-list-single-name">
                  主体总量:
                  <span>{{surveyData.zy01002}}</span>户,同比增长
                  <span>{{surveyData.zy01003}}%</span>
                </div>
              </div>
              <div class="base-list-single-title">
                <div class="base-list-single-dot"></div>
                <div class="base-list-single-name">
                  注册资本:
                  <span>{{surveyData.zy01004}}</span>亿元,同比增长
                  <span>{{surveyData&&surveyData.zy01005&&surveyData.zy01005}}%</span>
                </div>
              </div>
              <div class="base-list-single-title">
                <div class="base-list-single-dot"></div>
                <div class="base-list-single-name">
                  企业:
                  <span>{{surveyData.zy01006}}</span>户,同比增长
                  <span>{{surveyData&&surveyData.zy01007&&surveyData.zy01007}}%</span>
                </div>
              </div>
              <div class="base-list-single-title">
                <div class="base-list-single-dot"></div>
                <div class="base-list-single-name">
                  个体工商户:
                  <span>{{surveyData.zy01010}}</span>户,同比增长
                  <span>{{surveyData&&surveyData.zy01011&&surveyData.zy01011}}%</span>
                </div>
              </div>
              <div class="base-list-single-title">
                <div class="base-list-single-dot"></div>
                <div class="base-list-single-name">
                  农专合作社:
                  <span>{{surveyData.zy01014}}</span>户,同比增长
                  <span>{{surveyData&&surveyData.zy01015&&surveyData.zy01015}}%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="right-bottom-panle">
            <div class="right-echarts-02">
              <div class="event-power">
                <div class="event-power-left">
                  <div class="area-title hover-color">市场主体类型分布</div>
                  <div
                    class="shbzxx_desc"
                    style="top: 1.4rem;
                            left: 1rem;
                            text-align: center;"
                  >
                    <p>{{eventRightEchart01Desc.value}}</p>
                    <p>
                      市场主体
                      <span>(户)</span>
                    </p>
                  </div>
                  <div class="event-right-echart-01" id="event-right-echart-01"></div>
                </div>
                <div class="event-power-right">
                  <div class="area-title hover-color">注册资本类型分布</div>
                  <div class="top-echarts-02">
                    <!-- <img
                      class="radar-img"
                      src="@/assets/city-management/market-supervision/market-subject/rada.png"
                    />
                    <div class="radar-common-title echarts-02-title-01">
                      <p class="first-p">企业</p>
                      <p class="second-p">
                        {{(subjectMoney.qiye / addMoneyTotal * 100).toFixed(2) }}%
                        <span></span>
                      </p>
                      <p class="third-p">{{subjectMoney.qiye}}万元</p>
                    </div>
                    <div class="radar-common-title echarts-02-title-02">
                      <p class="first-p">个体工商户</p>
                      <p class="second-p">
                        {{(subjectMoney.geti / addMoneyTotal * 100).toFixed(2) }}%
                        <span></span>
                      </p>
                      <p class="third-p">{{subjectMoney.geti}}万元</p>
                    </div>
                    <div class="radar-common-title echarts-02-title-03">
                      <p class="first-p">农专合作社</p>
                      <p class="second-p">
                        {{(subjectMoney.nongzhuan / addMoneyTotal * 100).toFixed(2) }}%
                        <span></span>
                      </p>
                      <p class="third-p">{{subjectMoney.nongzhuan}}万元</p>
                    </div>-->
                    <div class="liquid-fill-chart-box">
                      <div class="liquid-fill-chart"></div>
                      <div id="liquidFill1" class="liquid_fill"></div>
                      <div class="desc">
                        <p>企业</p>
                        <p>{{subjectMoney.qiye}}亿元</p>
                      </div>
                    </div>
                    <div class="liquid-fill-chart-box">
                      <div class="liquid-fill-chart"></div>
                      <div id="liquidFill2" class="liquid_fill"></div>
                      <div class="desc">
                        <p>个体工商户</p>
                        <p>{{subjectMoney.geti}}亿元</p>
                      </div>
                    </div>
                    <div class="liquid-fill-chart-box">
                      <div class="liquid-fill-chart"></div>
                      <div id="liquidFill3" class="liquid_fill"></div>
                      <div class="desc">
                        <p>农专合作社</p>
                        <p>{{subjectMoney.nongzhuan}}亿元</p>
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
              <div class="event-power">
                <div class="department-rank">
                  <div class="area-title hover-color">市场主体行业TOP5</div>
                  <div>
                    <div class="left-bottom-box">
                      <div class="left-bottom-inner-box">
                        <div class="item-li" v-for="(item,index) in items" :key="index">
                          <div
                            class="number"
                            :class="{'number-01':item.index===0,'number-02':item.index===1,'number-03':item.index===2}"
                          >{{item.index+1}}</div>
                          <div class="name-line">
                            <div class="name">{{item.name}}</div>
                            <div class="line">
                              <div class="line-inner" :style="{'width':item.rate+'%'}"></div>
                            </div>
                          </div>
                          <div class="value">{{item.value}}户</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="country-rank">
                  <div class="area-title hover-color">市场主体年度变化</div>
                  <div id="event-right-echart-02" class="event-right-echart-02"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="dialog-toggle-btn" @click="openDialog(0)">
          <span>查看明细</span>
          <img src="../../../assets/city-management/market-supervision/img/details-icon.png" />
        </div> -->
      </div>
    </div>
    <div class="right-top-panle">
      <div class="right-content">
        <div class="right-content-top">
          <div>
            <div class="title-model">
              <div class="title hover-color">{{nowTime}}新增主体登记情况</div>
            </div>
            <div class="base-list-right">
              <div class="base-list-right-box">
                <div class="top-li" v-for="(item,index) in rightList" :key="index">
                  <div
                    class="top-img"
                    :class="{'top-img-01':item.index===0,'top-img-02':item.index===1,'top-img-03':item.index===2}"
                  >
                    <!-- {{item.index+1}} -->
                  </div>
                  <div class="top-li-right">
                    <div class="right-name">{{item.name}}</div>
                    <div class="right-img">
                      <div class="right-img-value" :class="{'right-img-value-01':item.index===1}">
                        <span class="right-img-number">{{item.value}}</span>
                        <span class="right-img-unit">{{item.unit}}</span>
                        {{item.unit}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="right-bottom-panle">
              <div class="right-echarts-02">
                <div class="event-power">
                  <div class="event-power-left">
                    <div class="area-title hover-color">新增市场主体类型分布</div>
                    <div
                      class="shbzxx_desc"
                      style="top: 1.3rem;
                              left: 1.35rem;
                              text-align: center;"
                    >
                      <p>{{eventRightEchart03Desc.value}}</p>
                      <p>
                        主体数量
                        <span>(户)</span>
                      </p>
                    </div>
                    <div class="event-left-echart-03" id="event-left-echart-03"></div>
                  </div>
                  <div class="event-power-right">
                    <div class="area-title hover-color">新增注册资本类型分布</div>
                    <div
                      class="shbzxx_desc"
                      style="top: 1.3rem;
                            left: 0.65rem;
                            text-align: center;"
                    >
                      <p>{{eventRightEchart04Desc.value}}</p>
                      <p>
                        注册资本
                        <span>(亿元)</span>
                      </p>
                    </div>
                    <div class="event-left-echart-04" id="event-left-echart-04"></div>
                  </div>
                </div>
                <div class="event-power">
                  <div class="event-power-right">
                    <div class="area-title hover-color">新增主体行业分布TOP3</div>
                    <!-- <div class="event-left-echart-05" id="event-left-echart-05"></div> -->
                    <div
                      class="market-industry"
                      v-if="marketIndustryList&&marketIndustryList.length>0"
                    >
                      <div class="item" v-for=" (item,index) in marketIndustryList" :key="index">
                        <div class="name">
                          <span class="top" :class="'top_'+index">{{index+1}}</span>
                          <span class="desc">{{item.zt05003_desc}}</span>
                        </div>
                        <div class="number">
                          <p class="font-bg">000000</p>
                          <p class="font-main">{{item.zt05004}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="event-power-right" style="width: 4.75rem;">
                    <div class="area-title hover-color">主体月增长趋势</div>
                    <div class="event-left-echart-06" id="event-left-echart-06"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="dialog-toggle-btn" @click="openDialog(1)">
            <span>查看明细</span>
            <img src="../../../assets/city-management/market-supervision/img/details-icon.png" />
          </div> -->
        </div>
      </div>
    </div>
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
      <div class="g-title2">{{nowTime}}新增主体明细</div>
      <img
        src="../../../assets/city-management/market-supervision/img/close-icon@2x.png"
        class="close-btn"
        @click="isShowDialog=false"
        alt="关闭"
      />
      <div class="dialog-head">
        <div class="form-row">
          <div class="form-cell">
            <label for style="width:1.62rem;text-align:right">主体名称：</label>
            <input type="text" class="text-input" v-model="searchObj.name" />
          </div>
          <div class="form-cell">
            <div class="form-cell">
              <label for>注册资本：</label>
              <input type="text" class="text-input number" v-model="searchObj.money.moneymin" />
              <span class="unit">亿元</span>
            </div>
            <div class="form-cell">
              <label for>至</label>
              <input type="text" class="text-input number" v-model="searchObj.money.moneymax" />
              <span class="unit">万元</span>
            </div>
          </div>
          <div class="form-cell" style="display:block">
            <div>
              <label for>企业类型：</label>
              <input type="text" class="text-input select" v-model="selectValue" />
            </div>
            <img
              src="../../../assets/city-management/market-supervision/img/select-icon@2x.png"
              class="select-icon"
              @click="isShowTypeList=!isShowTypeList"
            />
            <ul class="select-list" v-show="isShowTypeList">
              <li @click="selectFn({name:'全部',value:''})">全部</li>
              <li
                @click="selectFn({name:item.zt06004,value:item.zt06013})"
                v-for="(item,index) of  businessTypeList"
                :key="index"
              >{{item.zt06004}}</li>
            </ul>
          </div>
          <div class="form-cell">
            <div class="form-cell">
              <label for>发证日期：</label>
              <input
                type="text"
                id="startDate"
                class="text-input date"
                v-model="searchObj.time.starttime"
              />
            </div>
            <div class="form-cell" style="margin-left: 0rem;">
              <label for>至</label>
              <input
                type="text"
                id="endDate"
                class="text-input date"
                v-model="searchObj.time.endtime"
              />
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-cell">
            <label for>主体状态：</label>
            <input type="text" class="text-input" />
          </div>
          <div class="form-cell">
            <label for>统一社会信用代码：</label>
            <input type="text" class="text-input" v-model="searchObj.code" />
          </div>
          <div class="form-cell">
            <a href="javascript:void(0);" class="btn" @click="restSearch">重置</a>
            <a href="javascript:void(0);" class="btn primary" @click="doSearch">查询</a>
          </div>
        </div>
      </div>
      <table class="data-table" style="margin-top: 0.2rem;">
        <thead style>
          <tr v-if="detailsTbThConfig.length>0">
            <th
              v-for="(item,index) in detailsTbThConfig"
              :key="index"
              :style="{width:item.width}"
            >{{item.name}}</th>
          </tr>
        </thead>
      </table>
      <div class="dialog-body" style>
        <table class="data-table" style>
          <thead style="visibility: hidden;">
            <tr>
              <th>主体名称</th>
              <th>统一社会信用代码</th>
              <th>注册号</th>
              <th>企业类型</th>
              <th>登记机关</th>
              <th>登记状态</th>
              <th>住所/经营场所</th>
              <th>成立日期</th>
              <th>注册资本</th>
              <th>行业门类</th>
              <th>法定代表人</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="mainInfo.length>0&&detailsTbThConfig.length>0">
              <tr v-for="(item,index) of mainInfo" :key="index">
                <template v-if="detailsTbThConfig.length>0">
                  <td
                    v-for="(item2,index) in detailsTbThConfig"
                    :style="{width:item2.width}"
                    :key="index"
                  >{{ index&lt;9 ? item['zt0600'+(index+1)] : item['zt060'+(index+1)] }}</td>
                </template>
                <template v-else>
                  <td>{{item.zt06001||''}}</td>
                  <td>{{item.zt06002||''}}</td>
                  <td>{{item.zt06003||''}}</td>
                  <td>{{item.zt06004||''}}</td>
                  <td>{{item.zt06005||''}}</td>
                  <td>{{item.zt06006||''}}</td>
                  <td>{{item.zt06007||''}}</td>
                  <td>{{item.zt06008||''}}</td>
                  <td>{{item.zt06009||''}}</td>
                  <td>{{item.zt06010||''}}</td>
                  <td>{{item.zt06011||''}}</td>
                </template>
              </tr>
            </template>
            <p v-else class="table-no-data">无数据</p>
          </tbody>
        </table>
      </div>
    </div> -->
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
        <div class="marker-detail" :class="{'active':item.qx===activeQx.qx}">
          <div class="heading">
            <div class="title hover-color">{{item.qxjc}}市场主体概况</div>
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
  </div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import menuList from '@/components/menu.vue'
import API from '@/api/city-management/market-supervision.js'
// import { imgPath } from '@/utils/BasePath.js'
import selectOther from '@/components/select-other.vue'
// import circlePanel from './menuLists.vue'
import options01 from '@/echarts-data/city-management/market-supervision/market-subject/right-charts-01.js'
import options02 from '@/echarts-data/city-management/market-supervision/market-subject/right-charts-02.js'
import options03 from '@/echarts-data/city-management/market-supervision/market-subject/left-charts-03.js'
import options04 from '@/echarts-data/city-management/market-supervision/market-subject/left-charts-04.js'
// import options05 from '@/echarts-data/city-management/market-supervision/market-subject/left-charts-05.js'
import options06 from '@/echarts-data/city-management/market-supervision/market-subject/left-charts-06.js'
import marketPanel from './market-panel'
// import common from '@/api/city-management/marketSupervisionMapOpreate'
import headComponen from '@/components/head-component'
import '../../../../static/echarts-liquidfill/echarts-liquidfill.min.js'
import liquidFillChart from '@/echarts-data/city-management/market-supervision/market-subject/liquidfillChart'

export default {
  components: { selectOther, menuList, marketPanel, headComponen },
  data () {
    return {
      detailsTbThConfig: [
        {
          name: '主体名称',
          width: '7.7%'
        },
        {
          name: '统一社会信用代码',
          width: '15%'
        },
        {
          name: '注册号',
          width: '7.7%'
        },
        {
          name: '企业类型',
          width: '7.7%'
        },
        {
          name: '登记机关',
          width: '7.7%'
        },
        {
          name: '登记状态',
          width: '7.7%'
        },
        {
          name: '住所/经营场所',
          width: '15%'
        },
        {
          name: '成立日期',
          width: '7.7%'
        },
        {
          name: '注册资本（万元）',
          width: '7.7%'
        },
        {
          name: '行业门类',
          width: '7.7%'
        },
        {
          name: '法定代表人',
          width: '7.7%'
        }
      ],
      surveyData: {}, // 市场主体概况
      baseCondition: [
        { name: '主体总量', percentage: '5.4', value: '25896', unit: '户' },
        { name: '注册资本', percentage: '8.6', value: '12587', unit: '亿元' },
        { name: '企业', percentage: '0.4', value: '896', unit: '户' },
        { name: '个体工商户', percentage: '0.4', value: '2096', unit: '户' }
      ],
      items: [
        { index: 0, name: '批发和零售业', value: 55, rate: 95 },
        { index: 1, name: '住宿和餐饮业', value: 55, rate: 80 },
        { index: 2, name: '创造业', value: 55, rate: 70 },
        { index: 3, name: '房地产业', value: 55, rate: 60 },
        { index: 4, name: '房地产业', value: 55, rate: 50 }
      ],
      rightList: [
        { name: '新增', index: 0, value: '109251', unit: '户' },
        { name: '新增注册资本', index: 1, value: '22004.99', unit: '亿元' },
        { name: '注销', index: 2, value: '300', unit: '户' }
      ],
      menuList: [
        {
          name: '市场监管',
          routeName: 'marketSupervision',
          selected: false
        },
        {
          name: '市场主体',
          routeName: 'marketSubject',
          selected: true
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
      subjectMoney: {},
      addMoneyTotal: 0,
      nowTime: '',
      // 新增的地图类变量
      checkData: [],
      markerData: [],
      markerDetail: {},
      makerFlag: true,
      nowPage: 1,
      showFlag: 0,
      makerIndex: 1,
      makerIndex2: 1,
      defaultSubMenuId: '1001',
      // isShowDialog: false,
      // dialogType: '市场主体',
      // 新增的地图类变量-结束
      searchObj: {
        mType: '',
        name: '',
        code: '',
        money: { moneymin: '', moneymax: '' },
        time: { starttime: '', endtime: '' },
        type: '',
        pageNum: 1,
        pageSize: 500
      },
      mainInfo: [],
      businessTypeList: [],
      isShowTypeList: false,
      selectValue: '全部',
      panelBig: false,
      eventRightEchart01Desc: [],
      eventRightEchart03Desc: '',
      eventRightEchart04Desc: '',
      marketIndustryList: null,
      /// ///// 地图部分
      // 主体明细
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
      isShowMarkerDialog: false,
      isShowMarkerDetail: false,
      areaMapData: [], // 区县数据
      isShowMiniMarker: 0, // 二维还是三维,
      marketSearchObj: {
        name: '',
        areaCode: '',
        pageNum: 1,
        pageSize: 500
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
  mounted () {
    // this.createPoints() // 获取地图点位数据
    this.getSurveyData() // 市场主体概况和年构成信息
    this.getSubjectTop5() // 市场主体前五排行 + 市场主体年度变化
    this.getMouthAdd() // 月新增概况 + 新增主体数量 + 新增注册资本数量
    this.getSixMouth() // 行业类型分布 + 月增长趋势
    // this.marketPanelSelect([this.defaultSubMenuId], '市场主体')
    // this.initDateInput() // 初始化时间框
    this.queryMapData() // 区县数据查询
    // this.queryBusinessType()// 获取企业类型
    // this.initLiquidFillChart()
    // window._m &&
    //   window._m.redirectDimenionFn &&
    //   window._m.redirectDimenionFn(data => {
    //     console.log('redirectDimenionFn', data)
    //   }, true)
  },
  methods: {
    createPoints () {
      API.GET_LOCATIONS(this)
        .then(res => {
          if (res.status === 200) {
            let result = res.data.data.data
            let data = []
            result.forEach(item => {
              let obj = {
                x: item.longitude * 1,
                y: item.latitude * 1,
                value: 10
              }
              data.push(obj)
            })
            window._m.addHeatPointMap('makersubject', data)
            window._m.redirectDimenionFn(name => {
              console.log(name)
            }, true)
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    // 市场主体概况和年构成信息
    getSurveyData () {
      // 请求接口
      API.SUBJECT_SURVEY(this, {})
        .then(resA => {
          let res = resA.data.data
          // 市场主体概况
          this.surveyData = res.data1
          // 主体结构
          let options01Data = options01(res.data2)
          let chart = echarts.init(
            document.getElementById('event-right-echart-01')
          )
          chart.setOption(options01Data)
          chart.dispatchAction({
            type: 'highlight',
            // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
            dataIndex: 0
          })
          this.eventRightEchart01Desc = {
            value:
              res.data2[0].zt01003 +
              res.data2[1].zt01003 +
              res.data2[2].zt01003,
            name: '企业'
          }
          // chart.on('mouseover', data => {
          //   this.eventRightEchart01Desc = data.data
          // })
          // 主体注册资本
          let temp = {}
          res.data2.forEach(item => {
            this.addMoneyTotal += item.zt01005
            if (item.zt01002 === 1) {
              temp['qiye'] = item.zt01005
            } else if (item.zt01002 === 2) {
              temp['geti'] = item.zt01005
            } else if (item.zt01002 === 3) {
              temp['nongzhuan'] = item.zt01005
            }
          })
          this.ztTypeListData = res.data2
          this.subjectMoney = temp
          this.initLiquidFillChart()
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 市场主体前五排行 + 市场主体年度变化
    getSubjectTop5 () {
      // 请求接口
      API.SUBJECT_TOP5(this, {})
        .then(resA => {
          let res = resA.data.data
          // 市场主体前五排行
          let no1 = res.data2[0].zt02004
          let temp = []
          res.data2.forEach((item, index) => {
            temp.push({
              index: index,
              name: item.zt02003,
              value: item.zt02004,
              rate: (item.zt02004 / no1) * 100
            })
          })
          this.items = temp.splice(0, 5)
          // 市场主体年度变化
          let options02Data = options02(res.data1)
          echarts
            .init(document.getElementById('event-right-echart-02'))
            .setOption(options02Data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 月新增概况 + 新增主体数量 + 新增注册资本数量
    getMouthAdd () {
      API.SUBJECT_MOUTHADD(this, {})
        .then(resA => {
          let res = resA.data.data
          // 月新增概况
          this.nowTime = res.data1.zt03001 + '年' + res.data1.zt03002 + '月'
          this.rightList = [
            { name: '新增', index: 0, value: res.data1.zt03003, unit: '户' },
            {
              name: '新增注册资本',
              index: 1,
              value: res.data1.zt03004,
              unit: '亿元'
            },
            { name: '注销', index: 2, value: res.data1.zt03005, unit: '户' }
          ]
          // 新增主体数量
          let chart1 = echarts.init(
            document.getElementById('event-left-echart-03')
          )
          chart1.setOption(options03(res.data2))
          chart1.dispatchAction({
            type: 'highlight',
            // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
            dataIndex: 0
          })
          this.eventRightEchart03Desc = {
            value:
              res.data2[0].zt04004 +
              res.data2[1].zt04004 +
              res.data2[2].zt04004,
            name: '企业'
          }
          // chart1.on('mouseover', data => {
          //   this.eventRightEchart03Desc = data.data
          // })
          // 新增注册资本数量
          let chart2 = echarts.init(
            document.getElementById('event-left-echart-04')
          )
          chart2.setOption(options04(res.data2))
          chart2.dispatchAction({
            type: 'highlight',
            // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
            dataIndex: 0
          })
          this.eventRightEchart04Desc = {
            value:
              res.data2[0].zt04005 +
              res.data2[1].zt04005 +
              res.data2[2].zt04005,
            name: '企业'
          }
          // chart2.on('mouseover', data => {
          //   this.eventRightEchart04Desc = data.data
          // })
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 行业类型分布 + 月增长趋势
    getSixMouth () {
      API.SUBJECT_SIXMOUTH(this, {})
        .then(resA => {
          let res = resA.data.data
          // 行业类型分布
          if (resA.data.serviceSuccess) {
            // echarts
            //   .init(document.getElementById('event-left-echart-05'))
            //   .setOption(options05(res.data1))
            // 月增长趋势
            this.marketIndustryList =
              res.data1.length > 3 ? res.data1.splice(0, 3) : res.data1
            echarts
              .init(document.getElementById('event-left-echart-06'))
              .setOption(options06(res.data2))
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // ...common,
    initDateInput () {
      this.$nextTick(() => {
        this.$laydate.render({
          elem: '#startDate',
          theme: '#000',
          change: value => {
            this.searchObj.time.starttime = value
          }
        })
        this.$laydate.render({
          elem: '#endDate',
          theme: '#000',
          change: value => {
            this.searchObj.time.endtime = value
          }
        })
      })
    },
    // 获取企业类型
    queryBusinessType () {
      API.QUERY_BUSINESS_TYPE(this, this.searchObj)
        .then(res => {
          res = res.data
          if (res.serviceSuccess) {
            this.businessTypeList = res.data.data
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    queryMainInfo () {
      let param = {
        ...this.searchObj,
        money: JSON.stringify(this.searchObj.money),
        time: JSON.stringify(this.searchObj.time)
      }
      API.QUERY_MAIN_INFO(this, param)
        .then(res => {
          res = res.data
          if (res.serviceSuccess) {
            this.mainInfo = res.data.pageBean.list
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    openDialog (type) {
      this.isShowDialog = true
      this.searchObj.mType = type && type.toString()
      this.queryMainInfo()
      this.queryBusinessType()
      // this.restSearch()
    },
    /// 重置查询
    restSearch () {
      this.searchObj.name = ''
      this.searchObj.code = ''
      this.searchObj.type = ''
      this.searchObj.money.moneymin = ''
      this.searchObj.money.moneymax = ''
      this.searchObj.time.starttime = ''
      this.searchObj.time.endtime = ''
      this.queryMainInfo()
    },
    doSearch () {
      this.queryMainInfo()
    },
    /// 划分千分位
    numFormat (num) {
      var reg = /\d{1,3}(?=(\d{3})+$)/g
      return (num + '').replace(reg, '$&,')
    },
    selectFn (obj) {
      this.searchObj.type = obj.value
      this.selectValue = obj.name
      this.isShowTypeList = false
    },
    initLiquidFillChart () {
      let opt1 = {
        ...liquidFillChart
      }
      opt1.series[0].data[0].value =
        this.subjectMoney.qiye / this.addMoneyTotal // .toFixed(2)
      // console.log('liquidFillChart', liquidFillChart)
      echarts.init(document.querySelector('#liquidFill1')).setOption(opt1)
      let opt2 = {
        ...liquidFillChart
      }
      opt2.series[0].data[0].value =
        this.subjectMoney.geti / this.addMoneyTotal // .toFixed(2)

      echarts.init(document.querySelector('#liquidFill2')).setOption(opt2)
      let opt3 = {
        ...liquidFillChart
      }
      opt3.series[0].data[0].value =
        this.subjectMoney.nongzhuan / this.addMoneyTotal // .toFixed(2)
      echarts.init(document.querySelector('#liquidFill3')).setOption(opt3)
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
      if (item.showTextFlag === false) {
        this.areaMapData.map((i, ind) => {
        // console.log(item.qx, i.qx, item.qx === i.qx)
          if (i.qx === item.qx) {
            let a = i
            a.showTextFlag = true
            this.areaMapData.splice(ind, 1, a)
          }
        })
      }
      this.initLiquidFillChart2(item)
    },
    closeMarkerDetail (item) {
      this.isShowMarkerDetail = false
      this.activeQx = {qx: ''}
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
    marketDialogClose () {
      this.marketSearchObj = {
        name: '',
        areaCode: '',
        pageNum: 1,
        pageSize: 500
      }
      this.isShowMarkerDialog = false
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
    // ///  水球图
    // initLiquidFillChart2 (item) {
    //   let opt1 = {
    //     ...liquidFillChart
    //   }
    //   opt1.series[0].data[0].value = item.qyzb / 100 // liquid1_
    //   echarts.init(document.querySelector(`#liquid4`)).setOption(opt1)
    //   let opt2 = {
    //     ...liquidFillChart
    //   }
    //   opt2.series[0].data[0].value = item.gtzb / 100

    //   echarts.init(document.querySelector(`#liquid5`)).setOption(opt2)
    //   let opt3 = {
    //     ...liquidFillChart
    //   }
    //   opt3.series[0].data[0].value = item.nmzb / 100
    //   echarts.init(document.querySelector(`#liquid6`)).setOption(opt3)
    // },
    initLiquidFillChart2 (item) {
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
  beforeDestroy () {
    window._m.clear()
    // window._m.redirectDimenion(() => {}, true, false)
    // window._m.
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
.market-industry {
  margin-top: 0.25rem;
  margin-left: 0.15rem;
  .item {
    width: 4rem;
    height: 0.93rem;
    margin-top: 0.05rem;
    box-sizing: border-box;
    padding: 0 0.35rem 0 0.2rem;
    background: url("../../../assets/city-management/market-supervision/market-subject/number-bg.png");
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    .name {
      display: flex;
      align-items: center;
      margin-top: -0.1rem;
      span {
        display: inline-block;
        &.top {
          font-size: 0.26rem;
          font-family: Heiti SC;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          line-height: 0.58rem;
        }
        &.desc {
          font-size: 0.18rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          margin-left: 0.12rem;
          width: 1.44;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        &.top_0 {
          background: linear-gradient(
            0deg,
            rgba(241, 253, 102, 1) 0.146484375%,
            rgba(253, 194, 102, 1) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        &.top_1 {
          background: linear-gradient(
            0deg,
            rgba(241, 253, 102, 1) 0.146484375%,
            rgba(253, 194, 102, 1) 100%
          );
          background: linear-gradient(
            180deg,
            rgba(241, 253, 102, 1) 0%,
            rgba(142, 254, 242, 1) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        &.top_2 {
          background: linear-gradient(
            0deg,
            rgba(102, 173, 253, 1) 0.146484375%,
            rgba(142, 254, 226, 1) 99.0478515625%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
    .number {
      position: relative;
      width: 1.62rem;
      height: 0.56rem;
      margin-top: 0.2rem;
      p {
        width: 100%;
        height: 100%;
        font-size: 0.48rem;
        font-family: digital;
        letter-spacing: 0.09rem;
        position: absolute;
        left: 0;
        top: 0;
        text-align: right;
        &.font-bg {
          color: rgba(248, 230, 89, 0.4);
        }
        &.font-main {
          color: rgba(248, 230, 89, 1);
          font-size: 0.47rem;
        }
      }
    }
  }
}
.shbzxx_desc {
  position: absolute;
  top: 0.9rem;
  left: 0.6rem;

  p:nth-child(1) {
    font-size: 0.24rem;
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
    font-size: 0.17rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    font-style: italic;
    color: rgba(223, 226, 251, 1);
    span {
      font-size: 0.15rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-style: italic;
      color: rgba(223, 226, 251, 0.72);
    }
  }
}

.market-panel-box {
  position: absolute;
  bottom: 0.2rem;
  right: 10.6rem;
  z-index: 9;
}

// .dialog {
//   width: 18.53rem;
//   height: 6.6rem;
//   //display: none;
//   // background:rgba(11,45,109,0.28);
//   // border:1px solid rgba(49, 128, 242, 1);
//   background: url("../../../assets/city-management/market-supervision/food-drug/dialog-bg@2x.png");
//   background-size: 100% 100%;
//   position: absolute;
//   left: 12rem;
//   top: 2.03rem;
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
//         position: relative;

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
//           width: 2.43rem;
//           line-height: 0.38rem;
//           padding: 0 0.1rem;
//           height: 0.38rem;
//           background: rgba(11, 46, 109, 0.58);
//           border: 0.01rem solid rgba(69, 143, 239, 1);
//           border-radius: 0.02rem;
//           font-size: 0.17rem;
//           font-family: Source Han Sans CN;
//           font-weight: bold;
//           font-style: italic;
//           box-sizing: border-box;
//           color: rgba(255, 255, 255, 1);
//           outline: none;

//           &.number {
//             padding-right: 0.5rem;
//             box-sizing: border-box;
//           }

//           &.date,
//           &.number {
//             width: 1.43rem;
//           }
//         }

//         .unit {
//           font-size: 0.17rem;
//           font-family: Source Han Sans CN;
//           font-weight: 400;
//           color: rgba(255, 255, 255, 1);
//           opacity: 0.4;
//           position: absolute;
//           right: 0.1rem;
//           top: 0.05rem;
//         }

//         // &:nth-child(2){
//         //   margin-left: .2rem;
//         // }
//       }

//       &:nth-child(2) {
//         .form-cell:nth-child(2) {
//           margin-right: auto;
//           margin-left: 1.1rem;
//         }

//         // justify-content: flex-start;
//       }

//       .btn {
//         margin-left: 0.3rem;
//       }
//     }
//   }

//   .dialog-body {
//     height: 4.4rem;

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
        white-space: wrap;
        max-width: 0.2rem;
        padding: 0 0.05rem;
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
  left: 3.2rem;
  top: 0.2rem;
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

.right-content-top {
  .dialog-toggle-btn {
    right: 0.52rem;
    top: 0.5rem;
    left: auto;
  }
}

.left-content-top {
  .dialog-toggle-btn {
    right: 0.52rem;
    top: 0.5rem;
    left: auto;
  }
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

.left-content {
  position: absolute;
  top: 0.4rem;
  left: 0;
  z-index: 99;
  box-sizing: border-box;
  width: 10.48rem;
  height: 10rem;

  .left-content-top {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: url("../../../assets/city-management/market-supervision/market-subject/kuang-01.png")
      no-repeat;
    background-size: 100% 100%;
    padding: 0.5rem 0.2rem 0 0.55rem;
  }
}

.right-content {
  position: absolute;
  top: 0.4rem;
  left: 0;
  z-index: 99;
  box-sizing: border-box;
  width: 10.48rem;
  height: 10rem;

  .right-content-top {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: url("../../../assets/city-management/market-supervision/market-subject/kuang-01.png")
      no-repeat;
    background-size: 100% 100%;
    padding: 0.5rem 0.2rem 0 0.55rem;
  }
}

.event-power-right {
  position: relative;
}

.top-echarts-02 {
  position: absolute;
  width: 4rem;
  height: 2.7rem;
  left: 0.3rem;
  top: 0.5rem;
  font-size: 0.2rem;
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

.radar-img {
  position: absolute;
  width: 1.58rem;
  height: 1.58rem;
  left: 1.1rem;
  top: 0.5rem;
}

.radar-common-title {
  position: absolute;
  width: 1.37rem;

  .first-p {
    text-align: left;
    color: #ffffff;
    font-size: 0.16rem;
  }

  .second-p {
    position: relative;
    color: #9be9ff;
    font-size: 0.18rem;
    background: rgba(0, 25, 53, 0.7);
    height: 0.24rem;
    line-height: 0.24rem;
    width: 0.9rem;
    margin: 0.05rem 0rem;
    text-align: left;
    font-style: italic;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    span {
      position: absolute;
      right: 0;
      height: 0.15rem;
      width: 0.02rem;
      transform: skewX(-10deg);
      background: #9be9ff;
    }
  }

  .third-p {
    text-align: left;
    font-style: italic;
    color: #edd6ae;
    font-size: 0.17rem;
  }
}

.echarts-02-title-02 {
  right: 0;
}

.echarts-02-title-03 {
  bottom: 0;
}

.echarts-02-title-04 {
  right: 0;
  bottom: 0;
}

.left-bottom-box {
  margin-top: 0.15rem;
  position: relative;
  flex: 1;
  overflow: hidden;

  .left-bottom-inner-box {
    width: 100%;
    height: 100%;
  }

  .item-li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 0.45rem;
    margin-top: 0.13rem;

    .name-line {
      display: flex;
      flex-direction: column;

      > div {
        margin: 0.05rem 0;
      }
    }

    .name {
      color: #ffffff;
      font-size: 0.17rem;
    }

    .number {
      width: 0.45rem;
      height: 0.45rem;
      text-align: center;
      font-size: 0.16rem;
      line-height: 0.4rem;
      color: #ffffff;
      background: url("../../../assets/city-management/market-supervision/market-subject/no-04.png")
        no-repeat;
      background-size: 85% 85%;
      background-position: 40% 20%;
    }

    .number-01 {
      width: 0.45rem;
      height: 0.45rem;
      text-align: center;
      line-height: 0.4rem;
      color: #ffffff;
      background: url("../../../assets/city-management/market-supervision/market-subject/no-01.png")
        no-repeat;
      background-size: 100% 100%;
    }

    .number-02 {
      width: 0.45rem;
      height: 0.45rem;
      text-align: center;
      line-height: 0.4rem;
      color: #ffffff;
      background: url("../../../assets/city-management/market-supervision/market-subject/no-02.png")
        no-repeat;
      background-size: 100% 100%;
    }

    .number-03 {
      width: 0.45rem;
      height: 0.45rem;
      text-align: center;
      line-height: 0.4rem;
      color: #ffffff;
      background: url("../../../assets/city-management/market-supervision/market-subject/no-03.png")
        no-repeat;
      background-size: 100% 100%;
    }

    .line {
      width: 2.97rem;
      height: 0.1rem;
      display: flex;
      align-items: center;
      background: linear-gradient(
        90deg,
        rgba(102, 175, 235, 0.3) 0%,
        rgba(123, 208, 240, 0.3) 100%
      );
      border-radius: 0.05rem;

      .line-inner {
        height: 0.1rem;
        background: linear-gradient(
          90deg,
          rgba(102, 175, 235, 1) 0%,
          rgba(123, 208, 240, 1) 100%
        );
        border-radius: 0px 0.04rem 0.04rem 0px;
      }
    }

    .value {
      flex: 1;
      color: #edd6ae;
      font-size: 0.17rem;
      margin-left: 0.1rem;
      margin-top: 0.3rem;
    }
  }
}

.title-model {
  display: flex;
  justify-content: space-between;

  .title {
    font-size: 0.24rem;
    padding-left: 0.15rem;
    padding-bottom: 0.2rem;
    margin-left: -0.1rem;
    color: #fff;
    font-weight: bold;
    background: url("../../../assets/city-management/economic-run/three-base/title-icon.png")
      no-repeat;
    background-position: -0.01rem 0.2rem;
    background-size: 0.87rem 0.3rem;
  }
}

.base-list {
  box-sizing: border-box;
  padding: 0.05rem 0.36rem;
  background: url("../../../assets/city-management/market-supervision/market-subject/zu-165.png")
    no-repeat;
  background-size: 9.36rem 1.26rem;
  margin-top: 0.27rem;

  .base-list-single {
    display: flex;
    flex-wrap: wrap;
  }

  .base-list-single-title {
    position: relative;
    width: 50%;
    padding: 0.05rem 0;

    .base-list-single-name {
      margin-left: 0.2rem;
      font-size: 0.2rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);

      > span {
        color: #f8e659;
      }
    }

    .base-list-single-dot {
      position: absolute;
      top: 48%;
      left: 0.1rem;
      width: 0.06rem;
      height: 0.06rem;
      background: rgba(76, 168, 229, 1);
      border-radius: 1px;
    }
  }
}

.base-list-right {
  box-sizing: border-box;
  padding: 0.34rem 0.52rem;

  .base-list-single {
    display: inline-block;
    width: 50%;
  }

  .base-list-single-title {
    position: relative;

    .base-list-single-name {
      margin-left: 0.2rem;
      margin-top: 0.05rem;
      font-size: 0.2rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);

      > span {
        color: #f8e659;
      }
    }

    .base-list-single-dot {
      position: absolute;
      top: 48%;
      left: 0.1rem;
      width: 0.06rem;
      height: 0.06rem;
      background: rgba(76, 168, 229, 1);
      border-radius: 1px;
    }
  }

  .base-list-single-value {
    display: flex;
    align-items: center;
    height: 0.85rem;
    background: url("../../../assets/city-management/economic-run/three-base/num-bk.png")
      no-repeat;
    background-size: 100% 100%;
    justify-content: center;

    .vl {
      font-size: 0.34rem;
      font-weight: bold;
      font-style: italic;
      color: rgba(252, 230, 47, 1);
    }

    .unit {
      font-size: 0.16rem;
      font-style: italic;
      color: rgba(255, 255, 255, 1);
      margin-left: 0.05rem;
    }
  }

  .base-list-right-box {
    display: flex;
    justify-content: space-between;

    .top-li {
      display: flex;
      align-items: center;

      .top-img-01 {
        width: 0.82rem;
        height: 1rem;
        text-align: center;
        line-height: 0.4rem;
        color: #ffffff;
        background: url("../../../assets/city-management/market-supervision/market-subject/house.png")
          no-repeat;
        background-size: 100% 100%;
      }

      .top-img-02 {
        width: 0.82rem;
        height: 1rem;
        text-align: center;
        line-height: 0.4rem;
        color: #ffffff;
        background: url("../../../assets/city-management/market-supervision/market-subject/money.png")
          no-repeat;
        background-size: 100% 100%;
      }

      .top-img-03 {
        width: 0.82rem;
        height: 1rem;
        text-align: center;
        line-height: 0.4rem;
        color: #ffffff;
        background: url("../../../assets/city-management/market-supervision/market-subject/return.png")
          no-repeat;
        background-size: 100% 100%;
      }

      .top-li-right {
        .right-name {
          font-size: 0.19rem;
          text-align: center;
          font-family: Source Han Sans CN;
          font-weight: bold;
          font-style: italic;
          color: rgba(224, 227, 251, 1);
        }

        .right-img {
          width: 1.45rem;
          height: 0.84rem;
          line-height: 0.84rem;
          text-align: center;
          font-weight: bold;
          font-style: italic;
          background: url("../../../assets/city-management/market-supervision/market-subject/shuzi-kuang.png")
            no-repeat;
          background-size: 100% 100%;

          .right-img-value-01 {
            width: 2rem;
          }

          .right-img-value {
            .right-img-number {
              width: 1.09rem;
              height: 0.29rem;
              font-size: 0.34rem;
              font-family: Impact;
              color: #fce62f;
            }

            .right-img-unit {
              width: 0.42rem;
              height: 0.18rem;
              font-size: 0.2rem;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
}

.area-title {
  position: relative;
  left: 0.2rem;
  top: 0.1rem;
  font-size: 0.2rem;
  // font-weight: bold;
  color: rgba(255, 255, 255, 1);
  padding-left: 0.35rem;

  &:after {
    content: "";
    position: absolute;
    top: 0.1rem;
    left: 0.04rem;
    width: 0.13rem;
    height: 0.13rem;
    background: rgba(0, 126, 251, 1);
  }

  &:before {
    box-sizing: border-box;
    content: "";
    position: absolute;
    top: 0.05rem;
    left: 0px;
    width: 0.13rem;
    height: 0.13rem;
    border: 2px solid rgba(253, 209, 0, 1);
  }
}

.medical-resource-container {
  background: #000;
  position: absolute;
  overflow: hidden;

  .g-menu-box {
    position: absolute;
    left: 11rem;
    top: 9rem;
    z-index: 999;
  }

  .g-nav-box {
    position: absolute;
    left: 30rem;
    top: 1.2rem;
    z-index: 100;
  }

  .right-top-panle {
    position: absolute;
    width: 10.5rem;
    height: 4.57rem;
    right: 0.29rem;
    z-index: 110;
  }

  .right-bottom-panle {
    position: absolute;
    width: 10.1rem;
    height: 7.21rem;
    right: 0rem;
    bottom: 0.1rem;
    z-index: 99;
    overflow: hidden;

    .right-echarts-02 {
      position: absolute;
      left: 3%;
      top: 0rem;
      height: 4.5rem;

      .event-power {
        display: flex;

        > div {
          flex: 1;
          width: 4.5rem;
        }

        .event-right-echart-01,
        .event-right-echart-02,
        .event-left-echart-03,
        .event-left-echart-04,
        .event-left-echart-06 {
          height: 3rem;
        }

        .event-left-echart-05 {
          height: 3.2rem;
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
}

.market-panel-box {
  position: absolute;
  bottom: 0.2rem;
  right: 11rem;
  z-index: 9;
}

.select-icon {
  width: 0.07rem;
  height: 0.12rem;
  position: absolute;
  right: 0.05rem;
  cursor: pointer;
  border: 0.05rem solid transparent;
  top: 0.08rem;
}

.select-list {
  position: absolute;
  left: 0.94rem;
  background: #020c1b;
  box-sizing: border-box;
  background-size: 100% 100%;
  padding: 0.1rem;
  padding-top: 0.15rem;
  width: 2.43rem;
  // height: 1.2rem;
  overflow: auto;
  /* top: 0.4rem; */
  line-height: 1.4;
  height: 4rem;
  overflow: auto;
  padding-bottom: 0.2rem;
  border: 0.01rem solid #298ff7;
  border-top: 0 none;
  border-radius: 0 0 0.1rem 0.1rem;

  li {
    list-style: none;
    background: rgba(0, 45, 113, 0.28);
    color: #ffffff;
    font-size: 0.16rem;
    text-align: center;
    padding: 0.05rem 0;

    &:hover,
    &:active {
      color: #fce62f;
      cursor: pointer;
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
    display: none;
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
  /*.left-content-top,*/
  /*.right-content{*/
  /*}*/
</style>
