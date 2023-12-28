<!--
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-14 10:45:00
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-21 10:43:52
 -->

<template>
   <div class="security-container">
     <div class="modal" v-if="showIframe4">
      <div @click="showIframe4 = false" class="iframe-close"></div>
      <!-- <iframe class="iframe4"  :src="iframeSrc4" frameborder="0" name="iframe4" scrolling = "auto"></iframe> -->
    </div>
     <!-- <div class="header-bg">民生保障一张图</div> -->
     <head-component name="民生保障一张图"></head-component>
     <div class="g-menu-box">
        <menu-list></menu-list>
     </div>
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
          <h3>{{item.district}}<span style="font-size:0.14rem;color: #999999">（截至2020年）</span></h3>
          <div class="g-text-item">参保单位数：<span>{{item.classNum}}</span> 家</div>
          <div class="g-text-item">参保人数：<span>{{item.peopleNum}}</span> 人</div>
          <!--<div class="g-text-item">社保卡数：<span>{{item.cardNum}}</span> 张</div>-->
          <!--<div class="g-text-item">公租房数：<span>{{item.houseNum}}</span> 套</div>-->
          <!--<div class="g-text-item">房屋改造户数：<span>{{item.changeNum}}</span> 套</div>-->
        </div>
    </maker-component>
    <!-- maker-end -->
     <div class="g-nav-box" style="display: none;">
       <nav-list
          :data="selectList"
          icon="map"
          :width="1.73"
          :height=".45">
        </nav-list>
     </div>
     <!-- <div class="g-maker-text" style="display: none;">
        <h3>市中区总体情况</h3>
        <div class="g-text-item">总人数：<span>24</span> 家</div>
        <div class="g-text-item">参保单位数：<span>24,321</span>人</div>
        <div class="g-text-item">参保人数数：<span>241</span> 人</div>
        <div class="g-text-item">社保卡数：<span>24,100</span> 人</div>
      </div>
      <div class="g-maker-text g-maker-text01" style="display: none;">
        <h3>XXXX网点名称</h3>
        <div class="g-text-item">咨询电话：<span>24</span> 家</div>
        <div class="g-text-item">参保人数：<span>24,321</span>人</div>
        <div class="g-text-item"><label>地址：</label><span class="g-address">乐山市市中区某某街道126号</span></div>
      </div> -->
    <div class="main-left-top">
      <p class="g-title hover-color">社会保险</p>
      <span style="font-size:0.14rem;color: #999999">（截至2020年4月）</span>
      <ul>
        <!-- <li v-for="(item, index) in insureLeft" :key="index">
          <p class="lt-title">{{item.safeType}}</p>
          <div class="lt-num-box" v-if="item.safeType == '参保单位总数'"><span>{{(item.safeNum/10000).toFixed(2)}}</span>万户</div>
          <div class="lt-num-box" v-else-if="item.safeType == '发卡总量'"><span>{{(item.safeNum/10000).toFixed(2)}}</span>万张</div>
           <div class="lt-num-box" v-else><span>{{(item.safeNum/10000).toFixed(2)}}</span>万人</div>
          <div class="lt-data-percent">
            <div class="g-tongbi">
              <p>同比</p>
              <p :class="item.tRate > 0 ? 'color-green' : ''">{{Math.abs(item.tRate)}}% <span>{{item.tRate > 0 ? '↑' : '↓'}}</span></p>
            </div>
            <div class="g-tongbi">
              <p>环比</p>
              <p :class="item.hRate > 0 ? 'color-green' : ''">{{Math.abs(item.hRate)}}% <span>{{item.hRate > 0 ? '↑' : '↓'}}</span></p>
            </div>
          </div>
        </li> -->
        <li class="g-top-li">
          <div class="top-li-first"><label>全市常住人口</label><span> {{insureLeft[0].safeNum |  foamterThoand}}</span><label>万人</label></div>
          <div class="top-li-second">
            同比
            <img :src = "insureLeft[1].tRate >= 0 ? require('../../../assets/city-management/common-service/social-insurance/up-arrow.png') : require('../../../assets/city-management/common-service/social-insurance/down-arrow.png')" style="width:0.11rem"/>
            <!-- <span :class="insureLeft[1].tRate >= 0 ? 'g-up-down color-green' : 'g-up-down color-red'">{{insureLeft[1].tRate >= 0 ? '↑' : '↓'}}</span> -->
            <span :class="insureLeft[1].tRate >= 0 ? 'color-green' : 'color-red'" style="margin-right:0.1rem">{{Math.abs(insureLeft[1].tRate)}}%</span>
            <!-- 环比
             <img :src = "insureLeft[1].hRate >= 0 ? require('../../../assets/city-management/common-service/social-insurance/up-arrow.png') : require('../../../assets/city-management/common-service/social-insurance/down-arrow.png')" style="width:0.11rem"/>
           <span :class="insureLeft[1].hRate >= 0 ? 'g-up-down color-green' : 'g-up-down color-red'">{{insureLeft[1].hRate >= 0 ? '↑' : '↓'}}</span> -->
             <!-- <span :class="insureLeft[1].hRate >= 0 ? 'color-green' : 'color-red'">{{Math.abs(insureLeft[1].hRate)}}%</span> -->
          </div>
        </li>
        <li style="width:2rem">
          <p class="lt-title">参保单位总数</p>
          <div class="lt-num-box"><span>{{insureLeft[2].safeNum | foamterThoand}}</span>家</div>
          <!-- <div class="lt-data-percent">
            <div class="g-tongbi">
              <p>同比</p>
              <p :class="insureLeft[0].tRate >= 0 ? 'color-green' : ''">{{Math.abs(insureLeft[0].tRate)}}% <span>{{insureLeft[0].tRate >= 0 ? '↑' : '↓'}}</span></p>
            </div>
            <div class="g-tongbi">
              <p>环比</p>
              <p :class="insureLeft[0].hRate >= 0 ? 'color-green' : ''">{{Math.abs(insureLeft[0].hRate)}}% <span>{{insureLeft[0].hRate >= 0 ? '↑' : '↓'}}</span></p>
            </div>
          </div> -->
        </li>
        <li>
          <p class="lt-title">社保卡发卡量</p>
          <div class="lt-num-box" style='width:1.8rem'><span> {{insureLeft[3].safeNum  | foamterThoand}}</span>张

          </div>
          <div class="lt-data-percent">
            <div class="g-tongbi" style="margin-top:0.40rem">
              <p>同比</p>
              <p :class="insureLeft[2].tRate >= 0 ? 'color-green' : ''">
                <img :src = "insureLeft[2].tRate >= 0 ? require('../../../assets/city-management/common-service/social-insurance/up-arrow.png') : require('../../../assets/city-management/common-service/social-insurance/down-arrow.png')" style="width:0.11rem"/>
                <!-- <span>{{insureLeft[2].tRate >= 0 ? '↑' : '↓'}}</span> -->
              {{Math.abs(insureLeft[2].tRate)}}% </p>
            </div>
            <!-- <div class="g-tongbi">
              <p>环比</p>
              <p :class="insureLeft[2].hRate >= 0 ? 'color-green' : 'red'">
                <span>{{insureLeft[2].hRate >= 0 ? '↑' : '↓'}}</span>
                 <img :src = "insureLeft[2].hRate >= 0 ? require('../../../assets/city-management/common-service/social-insurance/up-arrow.png') : require('../../../assets/city-management/common-service/social-insurance/down-arrow.png')" style="width:0.11rem"/>
              {{Math.abs(insureLeft[2].hRate)}}% </p>
            </div> -->
          </div>
        </li>
      </ul>
      <div class="g-lt-right">
        <!-- <div class="g-radar-echart" ref="radarEchart"></div> -->
        <div class="lt-radar-box">
          <div :class="'lt-radar-item lt-item0' + (index + 1)" v-for="(item, index) in insureRight" :key="index">
            <p :class="index <= 1 ? 'lt-text-item01' : 'lt-text-item02'">{{index > 1 ? item.money + '万人' : item.safeType}}</p>
            <!-- <div class="lt-radar-per">{{item.rate}} %</div> -->
            <p :class="index > 1 ? 'lt-text-item01' : 'lt-text-item02'">{{index > 1 ? item.safeType : item.money + '万人'}}</p>
          </div>
          <!-- <div class="lt-radar-item lt-item02">
            <p class="lt-text-item01">养老保险</p>
            <div class="lt-radar-per">26.9 %</div>
            <p class="lt-text-item02">3223 张</p>
          </div>
          <div class="lt-radar-item lt-item03">
            <p class="lt-text-item02">3223 张</p>
            <div class="lt-radar-per">26.9 %</div>
            <p class="lt-text-item01">养老保险</p>
          </div>
          <div class="lt-radar-item lt-item04">
            <p class="lt-text-item02">3223 张</p>
            <div class="lt-radar-per">26.9 %</div>
            <p class="lt-text-item01">养老保险</p>
          </div> -->
        </div>
      </div>
    </div>
    <div class="main-left-bottom">
      <p class="g-title2"></p>
      <div class="g-lb-nav">
        <div @click="changeInsure(index)" v-for="(item, index) in nList" :key="index" :class="index === nIndex ? 'lb-nav-item lb-nav-active' : 'lb-nav-item'">{{item.name}}</div>
        <span style="font-size:0.14rem;color: #999;display: inline-block;margin-top: 0.24rem">(住房保障数据截至2019年，公积金数据截至2020年)</span>
        <!-- <div class="lb-nav-item">医疗保险</div>
        <div class="lb-nav-item">工伤保险</div>
        <div class="lb-nav-item">失业保险</div>
        <div class="lb-nav-item">住房保障</div>
        <div class="lb-nav-item">公积金</div>
        <div class="lb-nav-item">社保卡</div> -->
      </div>
      <div class="lb-container">
        <div class="g-lb-item" v-show="nIndex === 0">
          <div class="lb-text-box">
              <div class="lb-text-item">
                  <div class="g-small-title hover-color" style="margin-left: 0;"><div class="g-small-tip"></div>公租房</div>
                  <div class="lt-text-cont">项目数：<span>{{houseChangeData.pubProjectNum | foamterThoand}}个</span></div>
                  <div class="lt-text-cont">房源数：<span>{{houseChangeData.pubHouseNum | foamterThoand }}套</span></div>
                  <div class="lt-text-cont">保障人员：<span>{{houseChangeData.pubPeopleNum | foamterThoand}}人</span></div>
              </div>
              <div class="lb-text-item">
                  <div class="g-small-title hover-color" style="margin-left: 0;"><div class="g-small-tip"></div>老旧小区改造</div>
                  <div class="lt-text-cont g-line-2">申报小区数：<span>{{houseChangeData.changeHouseNum | foamterThoand }}个</span></div>
                  <div class="lt-text-cont g-line-2">涉及住户：<span>{{houseChangeData.changePeoNum | foamterThoand }}户</span></div>
              </div>
              <div class="lb-text-item">
                  <div class="g-small-title hover-color" style="margin-left: 0;"><div class="g-small-tip"></div>危旧房棚户区改造</div>
                  <div class="lt-text-cont g-line-1">建成数：<span>{{houseChangeData.overChangeNum | foamterThoand }}个</span></div>
              </div>
              <div class="lb-text-item">
                  <div class="g-small-title hover-color" style="margin-left: 0;"><div class="g-small-tip"></div>租赁补贴</div>
                  <div class="lt-text-cont g-line-2">发放人数：<span>{{houseChangeData.subPeoNum | foamterThoand }}人</span></div>
                  <div class="lt-text-cont g-line-2">发放金额：<span>{{houseChangeData.subMoney | foamterThoand }}万元</span></div>
              </div>
          </div>
          <div class="g-small-title hover-color" style="position: absolute; left: 0;top: 1.65rem;"><div class="g-small-tip"></div>房屋改造情况</div>
          <div class="lb-house-echart" ref="houseInsure">

          </div>
        </div>
        <div class="g-lb-item" v-show="nIndex === 1">
            <!-- <div class="g-lb-public">
                <div class="g-small-title" style="margin-left: 0;"><div class="g-small-tip"></div>本期末住房公积金情况</div>
                <div class="g-public-text">
                    缴存单位总数：<span>{{publicMoneyData.classNum}}家</span>，缴存人员总数：<span>{{publicMoneyData.peopleNum}}人</span>
                    <br>
                    累计放贷笔数：<span>{{publicMoneyData.makeLoanTimes}}笔</span>，存量贷款笔数：<span>{{publicMoneyData.remainTimes}}笔</span>
                    <br>
                    本年累积个人提取笔数：<span>{{publicMoneyData.pickTimes}}笔</span>
                </div>
                <div class="g-public-radar" ref="publicRadar"></div>
            </div>
            <div class="g-lb-public">
                <div class="g-lb-bar">
                    <div class="g-small-title" style="margin-left: 0;"><div class="g-small-tip"></div>年度公积金情况</div>
                    <div class="lb-bar-box" ref="yearMoney"></div>
                </div>
                <div class="g-lb-bar">
                    <div class="g-small-title" style="margin-left: 0;"><div class="g-small-tip"></div>月度公积金情况</div>
                    <div class="lb-bar-box" ref="mouthMoney"></div>
                </div>
            </div> -->
            <div class="g-lb-top">
              <div class="g-top-item">
                <div class="g-small-title" style="margin-left: 0;"><div class="g-small-tip"></div>缴存情况</div>
                <ul class="g-top-ul">
                  <li>
                    <p>缴纳总金额</p>
                    <div class="g-li-number"><label>{{(publicMoneyData.putSum/10000).toFixed(2) | foamterThoand}}</label><span>亿元</span></div>
                  </li>
                  <li>
                    <p>缴存余量</p>
                  <div class="g-li-number"><label>{{(publicMoneyData.putRemainSum/10000).toFixed(2) | foamterThoand }}</label><span>亿元</span></div>
                  </li>
                  <li>
                    <p>缴存单位</p>
                    <div class="g-li-number"><label>{{publicMoneyData.classNum | foamterThoand  }}</label><span>家</span></div>
                  </li>
                  <li>
                    <p>缴存人数</p>
                    <div class="g-li-number"><label>{{publicMoneyData.peopleNum | foamterThoand }}</label><span>人</span></div>
                  </li>
                </ul>
              </div>
              <div class="g-top-item">
                <div class="g-small-title" style="margin-left: 0;"><div class="g-small-tip"></div>贷款情况</div>
                <ul class="g-top-ul">
                  <li>
                    <p>贷款总金额</p>
                    <div class="g-li-number"><label>{{(publicMoneyData.loanSum/10000).toFixed(2) | foamterThoand }}</label><span>亿元</span></div>
                  </li>
                  <li>
                    <p>贷款余量</p>
                    <div class="g-li-number"><label>{{(publicMoneyData.loanRemainSum/10000).toFixed(2) | foamterThoand }}</label><span>亿元</span></div>
                  </li>
                  <li>
                    <p>贷款笔数</p>
                    <div class="g-li-number"><label>{{publicMoneyData.makeLoanTimes | foamterThoand}}</label><span>笔</span></div>
                  </li>
                  <li>
                    <p>存量贷款笔数</p>
                    <div class="g-li-number"><label>{{publicMoneyData.remainTimes | foamterThoand }}</label><span>笔</span></div>
                  </li>
                </ul>
              </div>
              <div class="g-top-item">
                <div class="g-small-title" style="margin-left: 0;"><div class="g-small-tip"></div>提取情况</div>
                <ul class="g-top-ul">
                  <li>
                    <p>个人提取笔数</p>
                    <div class="g-li-number"><label>{{publicMoneyData.pickTimes | foamterThoand }}</label><span>笔</span></div>
                  </li>
                  <li>
                    <p>个人提取金额</p>
                    <div class="g-li-number"><label>{{(publicMoneyData.pickSum/10000).toFixed(2) | foamterThoand }}</label><span>亿元</span></div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="g-lb-bottom">
              <div class="g-small-title" style="margin-left: 0;margin-top: 0.25rem;"><div class="g-small-tip"></div>公积金情况</div>
              <ul class="g-lb-btn">
                <li :class="changeTimeFlag === 1 ? 'active': ''" @click="changeTimeType(1)">月度</li>
                <li :class="changeTimeFlag === 2 ? 'active': ''" @click="changeTimeType(2)">年度</li>
              </ul>
              <div class="g-lb-echart" ref="yearAndMouth"></div>
            </div>
        </div>
      </div>
    </div>
    <div class="main-right-top">
      <p class="g-title hover-color">低收入人群保障情况</p>
      <span style="font-size:0.14rem;color: #999999">（截至2019年）</span>
      <span></span>
      <div class="rt-box">
        <div class="rt-item">
          <img src="../../../assets/city-management/common-service/social-security/1@2x.png" alt="" />
          <div class="g-num-box">
            <div class="text-box">
              <p>城镇居民最低生活保障人数</p>
            </div>
            <div class="g-num-data"><span>{{insureSituation.urbanNum}}</span>万</div>
          </div>
        </div>
        <div class="rt-item">
          <img src="../../../assets/city-management/common-service/social-security/2@2x.png" alt="" />
          <div class="g-num-box">
            <div class="text-box">
              <p>农村居民最低生活保障人数</p>
            </div>
            <div class="g-num-data"><span>{{insureSituation.sideNum}}</span>万</div>
          </div>
        </div>
        <div class="rt-item">
          <img src="../../../assets/city-management/common-service/social-security/3@2x.png" alt="" />
          <div class="g-num-box">
            <div class="text-box">
              <p>退出省定贫困村</p>
            </div>
            <div class="g-num-data"><span>{{insureSituation.poorOut}}</span>个</div>
          </div>
        </div>
        <div class="rt-item">
          <img src="../../../assets/city-management/common-service/social-security/4@2x.png" alt="" />
          <div class="g-num-box">
            <div class="text-box">
              <p>实现脱贫人数</p>
            </div>
            <div class="g-num-data"><span>{{insureSituation.poorOutPeoNum}}</span>万</div>
          </div>
        </div>
        <div class="rt-item">
          <img src="../../../assets/city-management/common-service/social-security/5@2x.png" alt="" />
          <div class="g-num-box">
            <div class="text-box">
              <p>年末贫困人口</p>
            </div>
            <div class="g-num-data"><span>{{insureSituation.poorPeoNum}}</span>万</div>
          </div>
        </div>
        <div class="rt-item">
          <img src="../../../assets/city-management/common-service/social-security/6@2x.png" alt="" />
          <div class="g-num-box">
            <div class="text-box">
              <p>贫困发生率</p>
            </div>
            <div class="g-num-data"><span>{{insureSituation.poorRate}}</span>%</div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-right-bottom">
      <span class = "right-add" @click = "showPage">四川省就业创业决策指挥调度平台</span>
      <p class="g-title2 hover-color">社会补助信息</p>
      <div class="g-pie-box">
        <div class="g-pie-item" ref="shbzxx"></div>
        <ul class="g-legend-ul">
          <li @click="clickBigList(item, index)" :class="index === listIndex ? 'g-active' : ''" v-for="(item, index) in listData" :key="index"><div class="g-legend-tip" :style="{background: colors[index]}"></div> {{item.upType}}（{{item.bigMoney}}万元）{{item.bigRate}}%</li>
          <!-- <li>就业专项（113万元）26.9%</li>
          <li>就业专项（113万元）26.9%</li>
          <li>就业专项（113万元）26.9%</li> -->
        </ul>
        <div class="g-pie-item" ref="shbzxx2" style = "margin-left:20%;width:60%;"></div>
        <div class="g-pie-rbg"></div>
      </div>
      <div class="g-bar-box">
        <div class="g-small-title hover-color">
          <div class="g-small-tip"></div>
          领取补偿人数趋势
        </div>
        <div class="g-bar-cont" ref="lqbcrsqs"></div>
        <div class="g-echart-bg"></div>
      </div>
    </div>
   </div>
</template>
<script>
// import Utils from '@/assets/emergency/utils/utils.js'
import echarts from 'echarts'
import navList from '@/components/select.vue'
import menuList from '@/components/menu.vue'
import headComponent from '@/components/head-component.vue'
import leshanArea from '../../../../static/CesiumAssets/js/leshanArea.js'
import API from '@/api/city-management/common-service.js'
import pieChart from '@/echarts-data/city-management/common-service/social-insure/pieEchart.js'
import barChart from '@/echarts-data/city-management/common-service/social-insure/barEchart02.js'
import barChart02 from '@/echarts-data/city-management/common-service/social-insure/barEchart.js'
// import radarChart02 from '@/echarts-data/city-management/common-service/social-insure/radarEchart.js'
// import barChart03 from '@/echarts-data/city-management/common-service/social-insure/imgBar.js'
import barChart04 from '@/echarts-data/city-management/common-service/social-insure/barEchart-left-bottom.js'
import makerComponent from '@/components/maker-component.vue'
import {openThirdPage} from '@/utils/utils'
export default {
  components: {navList, menuList, makerComponent, headComponent},
  mounted () {
    // window._m.clear()
    this.getMapData() // 地图点位数据
    this.getSocialInsure() // 社会保险
    this.getInsureSituation() // 保障情况
    this.getSocialSubsidy() // 社会补贴信息
    this.getHouseInsure() // 住房保障 & 公积金
  },
  data () {
    return {
      // iframeSrc4: 'http://10.10.81.122:8003/scjydp',
      radarObject: null,
      lineObject: null,
      lineObject2: null,
      barObject: null,
      // showIframe4: false,
      selectList: [
        {name: '热力地图'},
        {name: '参保单位'},
        {name: '参保人员'},
        {name: '社保卡'}
      ],
      nList: [
        {name: '住房保障'},
        {name: '公积金'}
      ],
      nIndex: 0,
      // 社会保险
      insureLeft: [
        {safeNum: '', tRate: '', hRate: ''},
        {safeNum: '', tRate: '', hRate: ''},
        {safeNum: '', tRate: '', hRate: ''},
        {safeNum: '', tRate: '', hRate: ''}
      ],
      insureRight: [],
      // 保障情况
      insureSituation: {
        urbanNum: '', // 城镇居民最低生活保障人数
        poorOutPeoNum: '', // 实现脱贫人数
        poorPeoNum: '', // 年末贫困人口
        sideNum: '', // 农村居民最低生活保障人数
        poorOut: '', // 退出省定贫困村
        poorRate: '' // 贫困发生率
      },
      houseChangeData: {},
      publicMoneyData: {},
      makersDatas: [],
      makerFlag: true,
      makerFlag2: false,
      listData: [],
      listIndex: 0,
      colors: ['#3F91F7', '#66DEF8', '#6BE673', '#F1E44D'],
      mapPoints: {
        '市中区': {lon: '103.731909', lat: '29.579459'},
        '峨边彝族自治县': {lon: '103.269876', lat: '29.241888'},
        '金口河区': {lon: '103.09502', lat: '29.260635'},
        '沙湾区': {lon: '103.55586', lat: '29.432737'},
        '峨眉山市': {lon: '103.536106', lat: '29.595671'},
        '夹江县': {lon: '103.578479', lat: '29.744034'},
        '井研县': {lon: '104.078593', lat: '29.654289'},
        '五通桥区': {lon: '103.823375', lat: '29.41306'},
        '犍为县': {lon: '103.955651', lat: '29.213968'},
        '沐川县': {lon: '103.907969', lat: '28.962066'},
        '马边彝族自治县': {lon: '103.552671', lat: '28.841894'}
      },
      timer: null,
      changeTimeFlag: 1,
      yearAndMouthData: {}
    }
  },
  computed: {
    isThree () {
      return this.$store.getters.GET_IS_THREE
    }
  },
  methods: {
    // 跳转页面
    showPage () {
      // this.showIframe4 = true
      openThirdPage('http://10.10.81.122:8003/scjydp/login.jsp?ret_url=http%3A%2F%2F10.10.81.122%3A8003%2Fscjydp')
    },
    // 中间地图
    showMarkerDetail (item, index) {
      this.makersDatas.forEach((ite, i) => {
        if (index !== i) {
          ite.showTextFlag = false
        }
      })
      item.showTextFlag = !item.showTextFlag
      // let position = {lon: Number(item.lon), lat: Number(item.lat)}
      // window._m.getSouthPointByDistance(position, () => {
      //   item.showTextFlag = true
      // })
    },
    getMapData () {
      // 区县总体情况
      API.SOCIAL_MAPDATALIST(this, {}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        let data = res.districtsInsureList
        data.forEach((item, index) => {
          if (leshanArea[item.district]) {
            item.lon = Number(leshanArea[item.district].lon)
            item.lat = Number(leshanArea[item.district].lat)
            if (index === 0) {
              item.zIndex = 3
              item.showTextFlag = true
            } else {
              item.showTextFlag = false
              item.zIndex = 1
            }
            item.id = 'social' + index
            this.makersDatas.push(item)
          }
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
      // 所有点位信息
      API.SOCIAL_MAPDATA(this, {}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        // 渲染热力图
        // let tempArr = []
        // res.insureDetailsList.forEach(item => {
        //   tempArr.push({x: Number(item.lon), y: Number(item.lat), value: 20})
        // })
        // window._m.addHeatPointMap('social-insure', tempArr)
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
    // 社会保险
    getSocialInsure () {
      API.SOCIAL_INSURE(this, {}).then((resA) => {
        let res = resA.data.data
        this.insureLeft = res.socialSafeList
        console.log('this.insureLeft', res)
        this.insureRight = res.inSafeList
      }).catch(err => {
        console.log(err)
      })
    },
    // 保障情况
    getInsureSituation () {
      API.SOCIAL_INSURESITUATION(this, {}).then((resA) => {
        let res = resA.data.data
        this.insureSituation = res.dealSituationMap
      }).catch(err => {
        console.log(err)
      })
    },
    // 社会补贴信息
    getSocialSubsidy () {
      API.SOCIAL_SUBSIDY(this, {}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        let myEchart = echarts.init(this.$refs.shbzxx)
        this.listData = res.dsubsidyPeoTypeMap.upTypeDetailsList
        // 初始化左饼图
        let data2 = pieChart(res.dsubsidyPeoTypeMap, '1', res.dsubsidyPeoTypeMap.upTypeDetailsList[0].upType)

        data2.title[0].x = '33%'
        data2.title[1].x = '28%'
        data2.title[2].x = '50%'
        myEchart.setOption(data2)
        // 初始化右饼图
        let data = pieChart(res.dsubsidyPeoTypeMap.upTypeDetailsList[0].downTypeList, '2', res.dsubsidyPeoTypeMap.upTypeDetailsList[0].upType)
        data.series[0].center = ['32%', '53%']

        echarts.init(this.$refs.shbzxx2).setOption(data)
        // echarts.init(this.$refs.shbzxx2).setOption(pieChart(item.downTypeList, '2', temp[0]))
        // myEchart.on('legendselectchanged', (obj) => {
        //   console.log(obj)
        //   let temp = obj.name.split('（')
        //   res.dsubsidyPeoTypeMap.upTypeDetailsList.forEach(item => {
        //     if (item.upType === temp[0]) {
        //       echarts.init(this.$refs.shbzxx2).setOption(pieChart(item.downTypeList, '2', temp[0]))
        //     }
        //   })
        //   return ''
        // })
        // 领取补偿人数趋势
        echarts.init(this.$refs.lqbcrsqs).setOption(barChart(res.subsidyPeoNumMap))
      }).catch(err => {
        console.log(err)
      })
    },
    // 社会补贴信息左列表点击
    clickBigList (item, index) {
      this.listIndex = index
      let data = pieChart(item.downTypeList, '2', item.upType)
      data.series[0].center = ['32%', '53%']
      echarts.init(this.$refs.shbzxx2).setOption(data)
    },
    // 住房保障 & 公积金
    getHouseInsure () {
      API.SOCIAL_HOUSEINSURE(this, {}).then((resA) => {
        let res = resA.data.data
        // 住房保障
        this.houseChangeData = res.houseAllMap
        echarts.init(this.$refs.houseInsure).setOption(barChart02(res.houseChangeMap))
        // 本期末住房公积金情况
        this.publicMoneyData = res.publicFundsAllMap
        console.log(res)
        // echarts.init(this.$refs.publicRadar).setOption(radarChart02(res.publicFundsAllMap))
        // 年度公积金情况
        // console.log(res)
        // echarts.init(this.$refs.yearMoney).setOption(barChart03(res.yearPublicFundsMap, 'year'))
        // echarts.init(this.$refs.mouthMoney).setOption(barChart03(res.monthPublicFundsMap, 'month'))
        this.yearAndMouthData = res
        echarts.init(this.$refs.yearAndMouth).setOption(barChart04(this.yearAndMouthData, 'mouth'))
      }).catch(err => {
        console.log(err)
      })
    },
    // 切换年月
    changeTimeType (type) {
      console.log(type)
      this.changeTimeFlag = type
      if (type === 1) { // 月
        echarts.init(this.$refs.yearAndMouth).setOption(barChart04(this.yearAndMouthData, 'mouth'), true)
      } else { // 年
        echarts.init(this.$refs.yearAndMouth).setOption(barChart04(this.yearAndMouthData, 'year'), true)
      }
    },
    // 切换保险种类
    changeInsure (index) {
      this.nIndex = index
    }
  },
  filters: {
    getMoney (val) {
      return (val / 10000).toFixed(2)
    },
    foamterThoand (val) {
      if (val) {
        return val.toString().replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')
      }
    }
  },
  beforeDestroy () {
    window._m.clear()
  }
}
</script>

<style  lang="scss" scoped>
  @import '../../../components/date-title.scss';
.security-container {
  width: 43.2rem;
  height: 10.8rem;
  // width: 4320px;
  // height: 1080px;
  position: absolute;
  background: #000;
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
  .g-menu-box {
    position: absolute;
    left: 11rem;
    top: 9rem;
    z-index: 100;
  }
  .g-nav-box {
    position: absolute;
    left: 30.61rem;
    top: 1rem;
    z-index: 100;
  }
  .maker-img {
    display: block;
    // width: 1.5rem;
    // height: 0.7rem;
    cursor: pointer;
    img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
  }
  .g-maker-text {
    margin: -0.2rem 0 0 0.05rem;
    padding-left: 0.21rem;
    position: absolute;
    // left: 23.68rem;
    // top: 2.5rem;
    width: 2.52rem;
    padding-bottom: 0.3rem;
    padding-top: 0.2rem;
    z-index: 2;
    background: url('../../../assets/common/win-info-icon-02.png') center no-repeat;
    background-size: 100%;
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
  .g-maker-text01 {
    width: 3.19rem;
    // height: 3.03rem;
    padding-bottom: 0.3rem;
    left: 13.65rem;
    top: 5.52rem;
    padding-left: 0.2rem;
    background: url('../../../assets/city-management/common-service/education-resource/small-kuang2.png') center no-repeat;
    background-size: 100%;
  }
  .g-title {
    display: inline-block;
    margin: 0.52rem 0 0 0.62rem;
    font-size:0.24rem;
    line-height: 0.23rem;
    text-align: center;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(255,255,255,1);
  }
  .g-title2 {
    display: inline-block;
    position: absolute;
    margin: 0.62rem 0 0 0.67rem;
    font-size:0.24rem;
    line-height: 0.23rem;
    text-align: center;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(255,255,255,1);
  }
  .g-small-title {
    position: relative;
    padding-left: 0.3rem;
    margin: 0.1rem 0 0.1rem 0;
    margin: 0 auto;
    width: auto;
    height: 0.44rem;
    line-height: 0.44rem;
    font-size:0.2rem;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(255,255,255,1);
    .g-small-tip {
      width: 0.13rem;
      height: 0.13rem;
      border:0.02rem solid rgba(246,210,71,1);
      position: absolute;
      left: 0;
      top: 0.15rem;
      box-sizing: border-box;
      &::after {
        content: '';
        display: inline-block;
        width: 0.13rem;
        height: 0.13rem;
        position: absolute;
        left: 0.02rem;
        top: 0.02rem;
        background:rgba(53,126,243,1);
      }
    }
  }
  .lt-title {
    position: relative;
    font-size:0.19rem;
    display: inline-block;
    font-family:Source Han Sans CN;
    font-weight:bold;
    font-style:italic;
    color:rgba(224,227,251,1);
    padding-left: 0.3rem;
    line-height: 0.24rem;
    height: 0.24rem;
    &::before {
      content: '';
      display: inline-block;
      width: 0.23rem;
      height: 0.26rem;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background: url('../../../assets/city-management/common-service/social-security/box.png') center no-repeat;
      background-size: 100%;
    }
  }
  .lt-num-box {
    margin-left: 0.15rem;
    width: 1.65rem;
    height: 0.84rem;
    font-size:0.18rem;
    font-family:Source Han Sans CN;
    text-align: center;
    font-weight:bold;
    font-style:italic;
    color:rgba(255,255,255,1);
    background: url('../../../assets/city-management/common-service/social-security/numbox.png') center no-repeat;
    background-size: 100%;
    span {
      margin-right: 0.06rem;
      line-height: 0.84rem;
      font-size:0.36rem;
      font-family:Impact;
      font-weight:bold;
      font-style:italic;
      color:rgba(248,230,89,1);
    }
  }
  .g-num-box {
    width: 1.58rem;
    .text-box {
      height: 0.40rem;
      line-height: 0.40rem;
      overflow: hidden;
      position: relative;
      .g-up-add {
        display: inline-block;
        position: absolute;
        left: 0.9rem;
        top: 0.08rem;
        height: 0.4rem;
        line-height: 0.4rem;
        font-weight:400;
        font-style:italic;
        color:rgba(104,225,162,1);
      }
    }
    p {
      width: 100%;
      line-height: 0.20rem;
      font-size:0.19rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      font-style:italic;
      color:rgba(224,227,251,1);
      margin:0;
      -webkit-line-clamp:2;
      overflow:visible;
      display:inline-block;
      vertical-align:middle;
      height:auto;
    }
    .g-num-data {
      width: 1.45rem;
      height: 0.84rem;
      margin-top: -0.05rem;
      text-align: center;
      font-size:0.23rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      font-style:italic;
      color:rgba(255,255,255,1);
      background: url('../../../assets/city-management/common-service/social-security/numbox.png') center no-repeat;
      background-size: 100%;
      span {
        margin-right: 0.06rem;
        line-height: 0.84rem;
        font-size:0.36rem;
        font-family:Impact;
        font-weight:bold;
        font-style:italic;
        color:rgba(248,230,89,1);
      }
    }
  }
  .main-left-top {
    position: absolute;
    left: 0.29rem;
    top: 0.24rem;
    z-index: 9;
    width: 10.48rem;
    height: 3.92rem;
    background: url('../../../assets/city-management/common-service/social-security/kuang-left-top@2x.png') center no-repeat;
    background-size: 100%;
    ul {
      margin-left: 0.79rem;
      margin-top: 0.34rem;
      width: 5.45rem;
      height: 2.28rem;
      list-style: none;
      overflow: hidden;
      li {
        list-style: none;
        margin-bottom: 0.13rem;
        margin-right: 0.2rem;
        width: 2.5rem;
        height: 1.05rem;
        float: left;
        position: relative;
        font-size: 0;
        &:last-child {
          margin-right: 0;
        }
        .lt-data-percent {
          display: inline-block;
          position: absolute;
          right: -0.4rem;
          top: 0;
          width: 0.7rem;
          height: 100%;
          .g-tongbi {
            margin-bottom: 0.1rem;
            width: 100%;
            height: 0.44rem;
            p {
              padding-left: 0.05rem;
              font-size:0.14rem;
              font-family:Source Han Sans CN;
              font-weight:bold;
              font-style:italic;
              color:rgba(224,227,251,1);
              line-height: 0.2rem;
              &:last-child {
                padding-left: 0;
                font-size:0.18rem;
                line-height: 0.24rem;
                font-style: normal;
                font-family:Source Han Sans CN;
                font-weight:bold;
                font-style:italic;
                color:rgba(220,100,47,1);
                width: 1rem;
              }
              span {
                font-style: normal;
              }
            }
            .color-green {
              color: rgba(104,225,162,1) !important;
            }
          }
        }
      }
      .g-top-li {
        width: 5.41rem;
        height: 1.01rem;
        line-height: 1.01rem;
        background: url('../../../assets/city-management/common-service/social-security/li-top.png') center no-repeat;
        background-size: 100% 100%;
        overflow: hidden;
        .top-li-first {
          float: left;
          padding-left: 0.29rem;
          overflow: hidden;
          label {
            float: left;
            margin-right: 0.05rem;
            line-height: 1.01rem;
            font-size:0.18rem;
            font-family:Source Han Sans CN;
            font-weight:bold;
            font-style:italic;
            color:rgba(224,227,251,1);
          }
          span {
            line-height: 0.92rem;
            float: left;
            margin-right: 0.03rem;
            font-size:0.35rem;
            font-family:Impact;
            font-weight:bold;
            font-style:italic;
            color:rgba(248,230,89,1);
          }
        }
        .top-li-second {
          float: right;
          line-height: 1.01rem;
          font-size:0.14rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          font-style:italic;
          color:rgba(224,227,251,1);
          padding-right:0.2rem;
          .g-up-down {
            margin-left: 0.03rem;
            margin-right: 0.03rem;
            font-style: normal;
          }
          .color-red {
            font-size: 0.18rem;
            color:rgba(220,100,47,1);
          }
          .color-green {
            font-size: 0.18rem;
            color:rgba(104,225,162,1);
          }
        }
      }
    }
    .g-lt-right {
      position: absolute;
      right: 0.6rem;
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
      .lt-radar-box {
        width: 1.58rem;
        height: 1.58rem;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -0.79rem;
        margin-top: -0.59rem;
        background: url('../../../assets/city-management/common-service/social-security/radar.png') center no-repeat;
        background-size: 100%;
        .lt-radar-item {
          width: 1rem;
          height: 0.9rem;
          position: absolute;
          .lt-text-item01 {
            height: 0.3rem;
            line-height: 0.3rem;
            font-size:0.18rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(255,255,255,1);
          }
          .lt-radar-per {
            width: 100%;
            height: 0.24rem;
            line-height: 0.24rem;
            font-size:0.18rem;
            font-family:Source Han Sans CN;
            font-weight:bold;
            transform: skewX(-5deg);
            color:rgba(155,233,255,1);
            background: rgba(106,180,201,0.15);
            position: relative;
            &::after {
              content: '';
              display: inline-block;
              position: absolute;
              right: 0.02rem;
              top: 0.07rem;
              width: 0.03rem;
              height: 0.12rem;
              background: #9BE9FF;
              transform: skewX(-5deg);
            }
          }
          .lt-text-item02 {
            height: 0.3rem;
            line-height: 0.3rem;
            font-size:0.18rem;
            font-family:Source Han Sans CN;
            font-weight:bold;
            font-style:italic;
            color:rgba(237,214,174,1);
          }
        }
        .lt-item01 {
          left: -0.86rem;
          top: -0.45rem;
        }
        .lt-item02 {
          right: -0.86rem;
          top: -0.45rem;
        }
        .lt-item03 {
          right: -0.86rem;
          bottom: -0.65rem;
        }
        .lt-item04 {
          left: -0.96rem;
          bottom: -0.65rem;
        }
      }
    }
  }
  .main-left-bottom {
    position: absolute;
    left: 0.29rem;
    top: 3.89rem;
    z-index: 9;
    width: 10.48rem;
    height: 6.89rem;
    background: url('../../../assets/city-management/common-service/social-security/kuang-left-bottom@2x.png') center no-repeat;
    background-size: 100%;
    .g-lb-nav {
      position: absolute;
      left: 0.65rem;
      top: 0.44rem;
      width: 8rem;
      height: 0.6rem;
      overflow: hidden;
      .lb-nav-item {
        // margin-right: 0.42rem;
        padding:0 0.2rem;
        float: left;
        font-size:0.22rem;
        line-height: 0.6rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(224,227,251,1);
        cursor: pointer;
      }
      .lb-nav-active {
        background: url('../../../assets/city-management/common-service/social-insurance/activeTable.png') no-repeat center/100% 100%;
      }
    }
    .lb-container {
      margin-top: 1.25rem;
      margin-left: 0.64rem;
      width: 9.7rem;
      height: 5.2rem;
      .lb-text-box {
        height: 1.7rem;
        width: 100%;
        overflow: hidden;
        .lb-text-item {
            width: 24%;
            float: left;
            height: 100%;
            .lt-text-cont {
                line-height: 0.36rem;
                font-size:0.22rem;
                font-family:Source Han Sans CN;
                font-weight:bold;
                font-style:italic;
                color:rgba(224,227,251,1);
                span {
                    color: #F8E659;
                }
            }
            .g-line-1 {
                line-height: 1rem;
            }
            .g-line-2 {
                line-height: 0.5rem;
            }
        }
      }
      .lb-house-echart {
          width: 100%;
          height: calc( 100% - 1.7rem);
      }
      .lb-cont-num {
        // width: 50%;
        // height: 100%;
        overflow: hidden;
      }
      .g-lb-item {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        .lb-cont-list {
          margin-top: 0.15rem;
          width: 100%;
          height: calc( 100% - 1.8rem );
          .g-lb-ul {
            width: 100%;
            overflow: hidden;
            li {
              float: left;
              margin: 0 0.2rem 0.2rem 0.1rem;
              .g-change-text {
                width: 1.6rem;
                height: 0.48rem;
                line-height: 0.48rem;
                .lt-title {
                  margin:0;
                  line-height: 0.24rem;
                  -webkit-line-clamp:2;
                  overflow:visible;
                  display:inline-block;
                  vertical-align:middle;
                  height:auto;
                }
              }
              .lt-num-box {
                height: 0.74rem;
                line-height: 0.74rem;
                span {
                  line-height: 0.74rem;
                }
              }
            }
          }
        }
        .g-lb-public {
            width: 50%;
            height: 100%;
            float: left;
            .g-public-text {
                width: 100%;
                min-height: 1.35rem;
                font-size:0.19rem;
                line-height: 0.48rem;
                font-family:Source Han Sans CN;
                font-weight:500;
                color:rgba(255,255,255,1);
                span {
                    color: #F8E659;
                }
            }
            .g-public-radar {
                width: 4.85rem;
                height: 3.4rem;
            }
            .g-lb-bar {
                width: 100%;
                height: 50%;
                .lb-bar-box {
                    width: 4.85rem;
                    height: 2.25rem;
                }
            }
        }
        .g-lb-top {
          width: 100%;
          height: auto;
          overflow: hidden;
          .g-top-item {
            margin-right: 0.31rem;
            max-width: 3.5rem;
            float: left;
            &:last-child {
              width: 1.71rem;
              margin-right: 0;
            }
            .g-top-ul {
              margin-top: 0.1rem;
              max-width: 3.5rem;
              list-style: none;
              font-size: 0;
              li {
                display: inline-block;
                width: 1.71rem;
                height: 0.86rem;
                list-style: none;
                padding-left: 0.37rem;
                box-sizing: border-box;
                background: url('../../../assets/city-management/common-service/social-security/change-bg.png') center no-repeat;
                background-size: 100% 100%;
                overflow: hidden;
                p {
                  margin-top: 0.2rem;
                  margin-bottom: 0.1rem;
                  font-size:0.17rem;
                  line-height: 0.17rem;
                  font-family:Source Han Sans CN;
                  font-weight:500;
                  color:rgba(255,255,255,1);
                }
                .g-li-number {
                  font-size:0.24rem;
                  line-height: 0.23rem;
                  font-family:Impact;
                  font-weight:bold;
                  font-style:italic;
                  color:rgba(251,231,77,1);
                  overflow: hidden;
                  label {
                    float: left;
                  }
                  span {
                    float: left;
                    font-size:0.17rem;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                    color:rgba(223,226,251,1);
                  }
                }
              }
            }
          }
        }
        .g-lb-bottom {
          width: 100%;
          height: 2.75rem;
          position: relative;
          overflow: hidden;
          .g-lb-btn {
            position: absolute;
            left: 2.16rem;
            top: 0.25rem;
            z-index: 99;
            overflow: hidden;
            list-style: none;
            li {
              float: left;
              list-style: none;
              width: 0.87rem;
              height: 0.42rem;
              line-height: 0.42rem;
              font-size:0.17rem;
              text-align: center;
              font-family:Source Han Sans CN;
              font-weight:400;
              color:rgba(255,255,255,1);
              cursor: pointer;
            }
            .active {
              color:rgba(110,227,252,1);
              background: url('../../../assets/city-management/common-service/social-security/border.png') center no-repeat;
              background-size: 100% 100%;
            }
          }
          .g-lb-echart {
            position: absolute;
            left: 0;
            top: 0.2rem;
            width: 9.7rem;
            height: 2.75rem;
          }
        }
      }
      .lb-cont-echart {
        margin-top: 0.05rem;
        width: 100%;
        overflow: hidden;
        .lb-echart-item {
          width: 50%;
          float: left;
          .g-small-title {
            margin-left: 0.3rem;
          }
          .lb-echart-cont {
            width: 4.6rem;
            height: 2.72rem;
          }
        }
      }
    }
  }
  .main-right-top {
    position: absolute;
    right: 0.32rem;
    top: 0.24rem;
    z-index: 9;
    width: 10.48rem;
    height: 3.89rem;
    background: url('../../../assets/city-management/common-service/social-security/kuang-left-top@2x.png') center no-repeat;
    background-size: 100%;
    .rt-box {
      margin-top: 0.27rem;
      margin-left: 0.65rem;
      width: 9.58rem;
      height: 2.5rem;
      overflow: hidden;
      .rt-item {
        margin-right: 0.15rem;
        width: 3rem;
        height: 1.2rem;
        float: left;
        position: relative;
        .g-num-box {
          margin-left: 1.25rem;
        }
        img {
          position: absolute;
          left: 0.2rem;
          top: 0.15rem;
          display: block;
          width: 0.88rem;
          height: 100%;
        }
      }
    }
  }
  .main-right-bottom {
    position: absolute;
    right: 0.32rem;
    top: 3.89rem;
    z-index: 9;
    width: 10.48rem;
    height: 6.89rem;
    // width: 1048px;
    // height: 689px;
    background: url('../../../assets/city-management/common-service/social-security/kuang-left-bottom@2x.png') center no-repeat;
    background-size: 100%;
    .g-pie-box {
      margin-left: 0.4rem;
      margin-top: 1.15rem;
      width: 9.76rem;
      height: 2.22rem;
      // width: 976px;
      // height: 222px;
      overflow: hidden;
      position: relative;
      .g-legend-ul {
        position: absolute;
        left: 2.14rem;
        top: 50%;
        z-index: 1;
        transform: translateY(-50%);
        list-style: none;
        li {
          width: 2.83rem;
          height: 0.48rem;
          line-height: 0.48rem;
          position: relative;
          padding-left: 0.41rem;
          box-sizing: border-box;
          font-size:0.15rem;
          font-family:Source Han Sans CN;
          font-weight:400;
          color:rgba(255,255,255,1);
          cursor: pointer;
          .g-legend-tip {
            position: absolute;
            left: 0.17rem;
            top: 0.18rem;
            // transform: translateY(-50%);
            width: 0.15rem;
            height: 0.15rem;
            border-radius: 0.02rem;
          }
        }
        .g-active {
          background: url('../../../assets/city-management/common-service/social-security/legend-bg.png') center no-repeat;
          background-size: 100% 100%;
          color: #66DEF8;
        }
      }
      .g-pie-item {
        float: left;
        width: 20%;
        height: 100%;
        z-index: 98;
      }
      .g-pie-rbg {
        position: absolute;
        left: 4.9rem;
        z-index: 97;
        top: 0;
        width: 3.3rem;
        height: 2.26rem;
        background: url('../../../assets/city-management/common-service/social-security/echart-bg2.png') center no-repeat;
        background-size: 100% 100%;
      }
    }
    .g-bar-box {
      position: relative;
      margin-left: 0.4rem;
      margin-top: 0.25rem;
      width: 9.76rem;
      height: 3rem;
      .g-small-title {
        margin-left: 0.4rem;
        margin-bottom: 0;
      }
      .g-bar-cont {
        width: 100%;
        height: 2.5rem;
        z-index: 10;
      }
      .g-echart-bg {
        position: absolute;
        left: 0.95rem;
        bottom: 0.82rem;
        width: 7.85rem;
        height: 0.7rem;
        background: url('../../../assets/city-management/common-service/social-security/echart-bg.png') center no-repeat;
        background-size: 100%;
        z-index: 1;
      }
    }
  }
}
.right-add{
  position:absolute;
  right:0.6rem;
  border-bottom: 1px solid #60CFF5;
  display:inline-block;
  top:0.7rem;
  color:rgba(96,207,245,1);
  font-size:0.2rem;
  font-weight: bold;
  padding-right:0.2rem;
  cursor: pointer;
  background:url('../../../assets/entry/right.png') no-repeat 3.04rem center/0.11rem 0.18rem;
}
 .modal{
      z-index: 999;
      margin: 0 auto;
      width: 19.20rem;
      height: 10.80rem;
      position: absolute;
      left:50%;
      top:50%;
      transform: translate(-50%,-50%);
      // left: 14rem;
      // top:2rem;
      .iframe4{
        width: 19.20rem;
        height: 10.80rem;
      }
      .iframe-close {
        cursor: pointer;
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
      padding-left: .5rem;
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
          width: 90%;
          height: 3.2rem;
          .progress{
            flex: 2.25;
            > div{
              font-size: .18rem;
              color: #FFFFF8;
              > div{
                display: flex;
                height: .3rem;
                div{
                  flex: 1;
                  margin-right: .2rem;
                }
                .progress-name{
                  color: #96F0F7;
                  font-size: .2rem;
                  margin-right: .05rem;
                }
                .progress-unit{
                  color: #ABEEF5;
                  font-size: .16rem;
                }
              }
            }
          }
          .pollute-company{
            position: relative;
            flex: 3.7;
            .companys-title{
              position: absolute;
              bottom: 24%;
              left: 20%;
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
  /*.main-left-top,*/
  /*.main-right-top,*/
  /*.main-right-bottom{*/
  /*}*/
</style>
