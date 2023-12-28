/* eslint-disable no-unreachable */
<!--
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-05 11:11:53
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-19 16:33:28
 -->
<template>
  <div class="container">
    <head-component name="大气环境"></head-component>
    <div class="natural-panel">
      <div class="user-dos" @click="panelBig = !panelBig">
        <div class="legend">图例</div>
        <div class="icon"></div>
      </div>
      <heart-panel :list="[]" v-if="panelBig">
        <div class="g-panel-right" slot="panel-content">
          <p>数据类型</p>
          <!-- <ul class="g-panel-btn">
            <li @click="tabShowFlag = !tabShowFlag" :class="tabShowFlag ? 'g-active' : ''">文化遗产</li>
            <li @click="tabShowFlag = !tabShowFlag" :class="!tabShowFlag ? 'g-active' : ''">科技型高新企业</li>
          </ul>-->
          <div v-for="(item,index) in panelList" :key="index">
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
                class="check-box"
              />
              <label :for="'ck'+index" class="sy-check"></label>
            </div>
          </div>
        </div>
      </heart-panel>
      <!-- <div class="small-icon" v-else>
        <div v-for="(item,index) in panelList" :key="index">
          <img :src="require('@/assets/common/icon'+item.index+'.png')" />
          <img :src="item.icon" />
        </div>
      </div>-->
    </div>
    <div class="g-maker-box" v-for="(item, index) in areasDatas" :key="index" :id="item.id">
      <div
        class="g-maker-top"
        :style="'padding-right: ' + (item.unit === '' ? '0.25rem;' : '0.8rem;')"
      >
        <div
          class="maker-circle"
          :style="'font-size: ' + (item.upType.length > 3 ? '0.15rem' : '0.18rem') + ';'"
        >{{item.upType}}</div>
        {{item.air}}
        <span>{{item.unit}}</span>
      </div>
      <div class="g-maker-bottom"></div>
    </div>
    <div
      v-show="item.showTextFlag"
      class="g-maker-box2"
      v-for="(item, index) in areasDatas2"
      :key="index + 'a'"
      :id="item.id"
    >
      <!-- <img @click="showPage()" v-if="item.type === 'air'" src="@/assets/common/air-icon.png" />
      <img @click="showPage()" v-if="item.type === 'water'" src="@/assets/common/water-icon.png" />-->
      <div
        class="g-info-box"
        @click="showPage(item.type)"
        v-if="item.type === 'air'"
        @mouseenter="item.hoverFlag = true"
        @mouseleave="item.hoverFlag = false"
      >
        <img src="@/assets/common/air-icon2.png" />
        <div v-show="item.hoverFlag" class="g-info-text">{{item.zy15001}}</div>
      </div>
      <div
        v-if="item.type === 'water'"
        @mouseenter="item.hoverFlag = true"
        @mouseleave="item.hoverFlag = false"
        class="g-info-box"
        @click="showPage(item.type)"
      >
        <img src="@/assets/common/water-icon.png" />
        <div v-show="item.hoverFlag" class="g-info-text">{{item.zy16001}}</div>
      </div>
    </div>
    <div class="modal" v-if="showIframe4">
      <div @click="showIframe4 = false" class="iframe-close"></div>
      <iframe class="iframe4" :src="iframeSrc4" frameborder="0" name="iframe4"></iframe>
    </div>
    <!-- maker -->
    <!-- <maker-component v-for="(item, index) in makersDatas" :key="index" :makerData="item" class="maker-box-poor">
        <div slot="maker" class="makerItem">
          <img src="../../../assets/common/student_blue.png" alt="" class="topHead" />
        </div>
        <div slot="text" class="g-maker-text">
          <h3>学校</h3>
          <div class="g-text-item">名称：<span>{{item.schoolName}}</span></div>
          <div class="g-text-item">学生人数：<span>{{item.studentNum}}</span>人</div>
          <div class="g-text-item">是否重点学校：<span>{{item.keySchool}}</span></div>
          <div class="g-text-item">咨询电话：<span>{{item.phone}}</span></div>
          <div class="g-text-item">地址：<span>{{item.address}}</span></div>
        </div>
    </maker-component>-->
    <div class="main-menu">
      <menus :alive="propMenu"></menus>
    </div>
    <div class="left">
      <div class="part-body">
        <div class="left-part-first">
          <div class="part-left">
            <p class="part-title hover-color" style="margin-left: 0">主城区{{yearMonth}}空气质量情况</p>
            <div class="second-title hover-color"></div>
            <ul class="weather-data-list">
              <li>
                <span class="data-list-icon second"></span>
                优良天数：
                <span class="data-list-num">{{main1.dq11004}}</span>天，同比减少：
                <span class="data-list-num">{{main1.dq11005}}</span>%
              </li>
              <li>
                <span class="data-list-icon third"></span>PM2.5均值浓度：
                <span class="data-list-num">{{main1.dq11006}}μg/m³</span>，同比改善：
                <span class="data-list-num">{{main1.dq11007}}％</span>
              </li>
              <li>
                <span class="data-list-icon second"></span>PM10均值浓度：
                <span class="data-list-num">{{main1.dq11008}}μg/m³</span>，同比改善：
                <span class="data-list-num">{{main1.dq11009}}％</span>
              </li>
            </ul>
          </div>
          <div class="part-right">
            <p class="part-title2  hover-color">{{yearMonth}}区县空气综合指数排名</p>
            <div class="second-title hover-color">
              <!-- <img
                src="../../../assets/city-management/environment/atmospheric-environment/title_icon@2x.png"
              />-->
            </div>
            <table class="air-quality-table">
              <thead>
                <tr>
                  <th>排名</th>
                  <th>行政区划</th>
                  <th>综合指数</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in rank" :key="item.rank">
                  <td>{{item.rank}}</td>
                  <td>{{item.dq02002}}</td>
                  <td>{{item.dq02003}}</td>
                </tr>
              </tbody>
            </table>
            <!-- <img
              src="../../../assets/city-management/environment/atmospheric-environment/table_icon@2x.png"
            />-->
          </div>
        </div>
        <div class="left-part-second">
          <p class="part-title3 hover-color">{{yearMonth}}空气质量情况</p>
          <div id="concentrationChart"></div>
        </div>
        <div class="left-part-third">
          <!-- 天气 -->
          <p class="part-title4 hover-color" style="z-index: 2">{{yearMonth}}区县空气质量累计同比变化情况</p>
          <div id="leftBottom"></div>
        </div>
      </div>
    </div>
    <div class="middle"></div>
    <div class="right">
      <p class="part-title hover-color">大气重污染情况</p>
      <div class="right-section-container">
        <div class="right-section-first">
          <div class="second-title hover-color" style="padding-bottom: 0.2rem;">
            <img
              src="../../../assets/city-management/environment/atmospheric-environment/title_icon@2x.png"
            />
            <p class="hover-color">{{pollutionInfo.dq04001}}年大气重污染情况</p>
          </div>
          <ul class="weather-data-list">
            <li>
              <span class="data-list-icon first"></span>
              重污染天数：
              <span class="data-list-num">{{pollutionInfo.dq04002}}</span>天
            </li>
            <li>
              <span class="data-list-icon second"></span>
              PM2.5目标浓度：
              <span class="data-list-num">{{pollutionInfo.dq04004}}μg/m³</span>
            </li>
            <li>
              <span class="data-list-icon third"></span>
              PM2.5完成浓度：
              <span class="data-list-num">{{pollutionInfo.dq04005}}μg/m³</span>
            </li>
          </ul>
        </div>
        <div class="right-section-second">
          <div class="second-title">
            <img
              src="../../../assets/city-management/environment/atmospheric-environment/title_icon@2x.png"
            />
            <p class="hover-color">重污染天数年度变化</p>
          </div>
          <div id="pollutionChart"></div>
        </div>
      </div>
      <div class="right-section-third">
        <div class="second-title">
          <img
            src="../../../assets/city-management/environment/atmospheric-environment/title_icon@2x.png"
          />
          <p class="hover-color">启动重污染天气预防及预警情况</p>
        </div>
        <div id="warningChart"></div>
      </div>
      <div class="right-bottom-container">
        <div class="second-title">
          <img
            src="../../../assets/city-management/environment/atmospheric-environment/title_icon@2x.png"
          />
          <p class="hover-color">优良天数年分析</p>
        </div>
        <div class="second-title2" style="top:6.9rem;">
          <img
            src="../../../assets/city-management/environment/atmospheric-environment/title_icon@2x.png"
          />
          <p class="hover-color">PM2.5年分析</p>
        </div>
        <div class="chart-container">
          <div id="goodDaysChart"></div>
          <div id="pmChart"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import API from '@/api/city-management/environment.js'
import menus from '@/components/menu'
import concentrationChartOptions from '@/echarts-data/city-management/environment/atmospheric-environment/concentrationChart.js'
import pollutionChartOptions from '@/echarts-data/city-management/environment/atmospheric-environment/pollutionChart.js'
import warningChartOptions from '@/echarts-data/city-management/environment/atmospheric-environment/warningChart.js'
import goodDaysChartOptions from '@/echarts-data/city-management/environment/atmospheric-environment/goodDaysChart.js'
import pmChartOptions from '@/echarts-data/city-management/environment/atmospheric-environment/pmChart.js'
import makerComponent from '@/components/maker-component.vue'
import growth from '@/echarts-data/city-management/environment/atmospheric-environment/growth.js'
import headComponent from '@/components/head-component'
import heartPanel from '@/components/heart-panel.vue'
import icon01 from '@/assets/city-management/economic-run/major-project/icon01.png'
import icon02 from '@/assets/city-management/economic-run/major-project/icon02.png'
import icon03 from '@/assets/city-management/economic-run/major-project/icon03.png'
import icon04 from '@/assets/city-management/economic-run/major-project/icon04.png'
import icon05 from '@/assets/city-management/economic-run/major-project/icon05.png'
// import icon06 from '@/assets/city-management/economic-run/major-project/icon06.png'
import icon07 from '@/assets/city-management/economic-run/major-project/icon07.png'
import { openThirdPage } from '@/utils/utils'
import leshanArea from '../../../../static/CesiumAssets/js/leshanArea.js'
export default {
  name: 'atmosphericEnvironment',
  data () {
    return {
      goodDaysChartOptions: {},
      pmChartOptions: {},
      warningOptions: {},
      pollutionInfo: {},
      main: {},
      main1: {},
      yearMonth: '',
      rank: [],
      forecast: [],
      concentrationChartOptions: [],
      pollutionChartOptions: [],
      today: {},
      today2: {},
      otherDays: [],
      propMenu: '1',
      makersDatas: [],
      nowWeather: {},
      dq10: null,
      img1: require('../../../assets/city-management/environment/atmospheric-environment/cloud_blue@2x.png'),
      // 地图图例新加-start
      panelBig: false,
      panelList: [
        { name: 'AQI', icon: icon01, id: 'aqi', unit: '' },
        { name: 'PM2.5', icon: icon02, id: 'pm25', unit: ' μg / m³' },
        { name: 'PM10', icon: icon03, id: 'pm10', unit: ' μg / m³' },
        { name: 'O3', icon: icon07, id: 'o3', unit: ' μg / m³' },
        { name: 'NO2', icon: icon05, id: 'no2', unit: ' μg / m³' },
        { name: 'SO2', icon: icon04, id: 'so2', unit: ' μg / m³' }
      ],
      checkedValue: 'aqi',
      areasDatas: [],
      areasDatas2: [],
      showIframe4: false,
      iframeSrc4:
        'http://119.6.113.148:9090/scszjcsj/szjc_sj/DataPublish/preview.xhtml'
      // 地图图例薪假-end
    }
  },
  components: { makerComponent, menus, headComponent, heartPanel },
  mounted () {
    this.initData()
    this.getAreaAqi(this.checkedValue)
    this.getAreaAqi2()
  },
  computed: {
    // getImg () {
    //   let today2 = this.today2
    //   console.log(today2.temp)
    //   // eslint-disable-next-line no-unused-vars
    //   var num = ''
    //   if (today2.temp) {
    //     if (today2.temp.indexOf('小雨') !== -1) {
    //       num = 'blueImg'
    //     } else if (today2.temp.indexOf('晴') !== -1) {
    //       num = 'orangeImg'
    //     } else if (today2.temp.indexOf('云') !== -1) {
    //       num = 'greenImg'
    //     } else if (today2.temp.indexOf('阴') !== -1) {
    //       num = 'blueyintianImg'
    //     } else if (today2.temp.indexOf('中雨') !== -1) {
    //       num = 'bluezhongyuImg'
    //     } else if (today2.temp.indexOf('暴雨') !== -1) {
    //       num = 'bluebaoyuImg'
    //     } else {
    //       num = 'redImg'
    //     }
    //   }
    //   return num
    // }
  },
  methods: {
    initData () {
      API.AIR(this, {}).then(resp => {
        this.goodDaysChartOptions = resp.data.data.goodness
        this.pmChartOptions = resp.data.data.pm25
        this.warningOptions = resp.data.data.warning
        this.pollutionInfo = resp.data.data.pollutionInfo
        this.main = resp.data.data.main
        this.yearMonth =
          this.main.dq01001.slice(0, 4) +
          '年' +
          this.main.dq01001.slice(4) +
          '月'
        this.rank = resp.data.data.rank
        this.main1 = resp.data.data.main1
        // this.forecast = resp.data.data.forecast.reverse()
        this.concentrationChartOptions = resp.data.data.level
        this.pollutionChartOptions = resp.data.data.pollutionChange
        this.dq10 = resp.data.data.dq10
        // this.dealforecast(this.forecast)
        echarts
          .init(document.querySelector('#leftBottom'))
          .setOption(growth(this.dq10))
        echarts
          .init(document.querySelector('#goodDaysChart'))
          .setOption(goodDaysChartOptions(this.goodDaysChartOptions))
        echarts
          .init(document.querySelector('#pmChart'))
          .setOption(pmChartOptions(this.pmChartOptions))
        echarts
          .init(document.querySelector('#warningChart'))
          .setOption(warningChartOptions(this.warningOptions))
        echarts
          .init(document.querySelector('#concentrationChart'))
          .setOption(concentrationChartOptions(this.concentrationChartOptions))
        echarts
          .init(document.querySelector('#pollutionChart'))
          .setOption(pollutionChartOptions(this.pollutionChartOptions))
      })
      // API.WEATHER(this, {}).then(resp => {
      //   console.log(resp.data.data.forecast)
      //   this.forecast = resp.data.data.forecast
      //   this.dealforecast2(this.forecast)
      // })
      API.COMPANIES(this, {}).then(resp => {
        let data = resp.data.data.companies
        let tempArr = []
        data.forEach((item, index) => {
          let temp = { district: item.id, showTextFlag: false }
          tempArr.push(Object.assign(temp, item))
        })
        tempArr.forEach((item, index) => {
          Object.assign(item, { id: 'ed-maker' + (index + 1) })
        })
        this.makersDatas = tempArr
        // window._m.addMakers(this.makersDatas)
      })
    },
    // 点击图例
    handleSelect (e) {
      this.areasDatas = []
      if (this.checkedValue.length === 0) {
      } else {
        this.getAreaAqi(this.checkedValue)
        // this.getMapAreaData(this.checkedValue.toString())
      }
    },
    // 查询区县AQI
    getAreaAqi (type) {
      API.AREAAQI(this, { type: type }).then(re => {
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
          window._m.addMakers(this.areasDatas, type => {
            if (type === 1) {
              // 三维
            } else {
              // 二维
            }
          })
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 查询区县监测站点
    getAreaAqi2 () {
      API.AREAPOINTS(this, {}).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data
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
          // data.water.forEach((item, index) => {
          //   item.lon = +item.zy16008
          //   item.lat = +item.zy16009
          //   item.id = 'points-water' + index
          //   item.showTextFlag = false
          //   item.type = 'water'
          //   temp.push(item)
          // })
          this.areasDatas2 = temp.slice()
          window._m.addMakers(this.areasDatas2, type => {
            if (type === 1) {
              // 三维
            } else {
              // 二维
            }
          })
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 点击检测点图标
    showPage (type) {
      // this.showIframe4 = true
      if (type === 'air') {
        openThirdPage(
          'http://www.scnewair.cn:6112/publish/index.html'
        )
      } else if (type === 'warter') {
        openThirdPage(
          'http://119.6.113.148:9090/scszjcsj/szjc_sj/DataPublish/preview.xhtml'
        )
      }
    }
    // getColor (data) {
    //   // eslint-disable-next-line no-unused-vars
    //   var num = ''
    //   if (data.indexOf('小雨') !== -1) {
    //     num = 'blue'
    //   } else if (data.indexOf('晴') !== -1) {
    //     num = 'orange'
    //   } else if (data.indexOf('云') !== -1) {
    //     num = 'green'
    //   } else if (data.indexOf('阴') !== -1) {
    //     num = 'blueyintian'
    //   } else if (data.indexOf('中雨') !== -1) {
    //     num = 'bluezhongyu'
    //   } else if (data.indexOf('暴雨') !== -1) {
    //     num = 'bluebaoyu'
    //   } else {
    //     num = 'red'
    //   }
    //   return num
    // },
    // getPollution (data) {
    //   // eslint-disable-next-line no-unused-vars
    //   let num
    //   if (data <= 50) {
    //     num = 'greenColor'
    //   } else if (data > 50 < 100) {
    //     num = 'blueColor'
    //   } else if (data > 101 < 150) {
    //     num = 'yellowColor'
    //   } else if (data > 151 < 200) {
    //     num = 'orangeColor'
    //   } else if (data > 200) {
    //     num = 'redColor'
    //   }
    // switch (data) {
    //   case data <= 50: num = 'greenColor'
    //     break
    //   case data > 151 < 200: num = 'blueColor'
    //     break
    //   case data > 50 < 100: num = 'yellowColor'
    //     break
    //   case data > 101 < 150: num = 'orangeColor'
    //     break
    //   case data > 200: num = 'redColor'
    //     break
    // }
    // return num
  },
  dealforecast2 (data) {
    this.today2 = data[0]
    this.otherDays = data.slice(1)
  }
  // dealforecast (data) {
  //   let weekDay = []
  //   data.forEach(item => {
  //     weekDay.push(item.dq03001) // 获取日期2020-03-13
  //   })
  //   this.today = data[0]
  //   let week = []
  //   weekDay.forEach(item => {
  //     week.push(new Date(item).getDay()) // 日期装换为[0,1,2,3,4,5,6]
  //   })
  //   let monthDay = []
  //   weekDay.forEach(item => {
  //     let str = item.substring(5).replace('-', '月') + '日'
  //     monthDay.push(str) // 日期转换为3月18日
  //   })
  //   data.forEach((item, index) => {
  //     Object.assign(item, {'monthDay': monthDay[index]})
  //   })
  //   let str = '日一二三四五六'
  //   let toWeek = []
  //   week.forEach(item => {
  //     toWeek.push(str.substring(item, item + 1))
  //   })
  //   data.forEach((item, index) => {
  //     Object.assign(item, {'weekDay': toWeek[index]})
  //   })
  //   return data
  // }
}
</script>
<style lang="scss" scoped>
  @import '../../../components/date-title.scss';
p {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
.main-menu {
  position: absolute;
  left: 11rem;
  bottom: 0.5rem;
  z-index: 999;
}
// 地图样式-start
.natural-panel {
  position: absolute;
  bottom: 0.5rem;
  right: 12.3rem;
  overflow: hidden;
  z-index: 100;
  .user-dos {
    margin-left: 4.5rem;
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
      background-size: auto 100%;
    }
    .tIcon {
      transform: rotate(180deg);
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
  .g-panel-right {
    padding: 0.2rem 0;
    position: absolute;
    top: 0.31rem;
    left: 1rem;
    width: 4.5rem;
    // height: 85%;
    height: 2.7rem;
    overflow-y: auto;
    overflow: -moz-scrollbars-none;
    > p {
      margin-bottom: 0.1rem;
      font-size: 0.17rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #fff;
      letter-spacing: 1px;
      margin-left: 0.3rem;
    }
    > .g-panel-btn {
      width: 100%;
      height: 0.25rem;
      margin-left: 0.3rem;
      margin-bottom: 0.1rem;
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
        font-size: 0.16rem;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        cursor: pointer;
      }
      .g-active {
        background: #d5602c;
      }
    }
    > div {
      position: relative;
      width: 33%;
      display: inline-block;
      text-align: center;
      margin-bottom: 0.1rem;
      img {
        width: 0.5rem;
        height: 0.5rem;
      }
      p {
        font-size: 0.16rem;
        font-weight: bold;
        font-style: italic;
        color: #9be9ff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .check {
        position: absolute;
        right: 0.18rem;
        top: 0;
      }
      .sy-check {
        display: block;
        width: 0.16rem;
        height: 0.16rem;
        line-height: 0.16rem;
        cursor: pointer;
        position: absolute;
        border: 1px solid #9be9ff;
        top: 6px;
        left: 6px;
      }
      input[type="radio"] {
        visibility: hidden;
      }
      .check-box:checked + label:before {
        display: block;
        content: "\2714";
        text-align: center;
        font-size: 0.16rem;
        color: #000;
        background: #ffcf06;
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
    top: -0rem;
    padding-left: 0.35rem;
    padding-right: 0.8rem;
    box-sizing: border-box;
    font-size: 0.3rem;
    height: 0.46rem;
    line-height: 0.46rem;
    font-weight: bold;
    font-family: Source Han Sans CN;
    color: rgba(255, 255, 255, 1);
    background: url("../../../assets/city-management/economic-run/major-project/marker-title-bg.png")
      no-repeat;
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
      width: 0.5rem;
      height: 0.5rem;
      z-index: 2;
      border-radius: 100%;
      background: #04bf66;
      border: 0.03rem solid #7de6ff;
      font-size: 0.18rem;
      line-height: 0.5rem;
      text-align: center;
      font-family: Source Han Sans CN;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
    }
  }
  .g-maker-bottom {
    position: absolute;
    width: 0.03rem;
    height: 1.45rem;
    top: 0.2rem;
    background: linear-gradient(
      0deg,
      rgba(125, 230, 255, 0) 0%,
      rgba(125, 230, 255, 0.8) 35%,
      rgba(125, 230, 255, 1) 100%
    );
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
      font-size: 0.2rem;
      font-weight: 800;
      border-radius: 0.04rem;
      border: 0.01rem solid #80cdfa;
      font-style: italic;
      color: #ffffff;
    }
  }
  img {
    width: 0.4rem;
    height: 0.4rem;
    cursor: pointer;
    margin-top: -0.3rem;
    margin-left: -0.3rem;
  }
}
// 地图样式-end
.container {
  background: url(/static/img/bg.c39bee3.png) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  // background: transparent;
  .part-header {
    font-size: 0.41rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: white;
    text-align: center;
    height: 1.8rem;
    line-height: 1rem;
    background: url(/static/img/head-bg.ef81122.png) no-repeat;
    background-size: 100% 100%;
    position: relative;
    width: 20.4rem;
    top: 0;
    z-index: 99;
    margin: 0 auto;
  }
  .modal {
    z-index: 999;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    position: absolute;
    // left: 14rem;
    // top:2rem;
    .iframe1 {
      width: 100%;
      height: 100%;
    }
    .iframe2 {
      width: 100%;
      height: 100%;
    }
    .iframe3 {
      width: 100%;
      height: 100%;
    }
    .iframe4 {
      width: 100%;
      height: 100%;
    }
    .iframe-close {
      position: absolute;
      right: 0.2rem;
      top: 0.2rem;
      width: 0.3rem;
      height: 0.3rem;
      background: url("../../../assets/common/callclose.png") center no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
  }
  .yellow {
    color: #ffe700;
  }
  .blue {
    color: #00f4fa;
  }
  .air-echarts {
    width: 2rem;
  }
  .air-contents {
    position: relative;
    display: flex;
    height: 1.5rem;
  }
  .middle-panel {
    position: absolute;
    top: 1.5rem;
    right: 14.8rem;
    z-index: 100;
  }
  .air-pm-value {
    position: absolute;
    top: 0.35rem;
    left: 0.7rem;
    padding-right: 10px;
    font-size: 0.25rem;
    font-family: DIN Condensed;
    font-weight: bold;
    font-style: italic;
    background-image: -webkit-linear-gradient(right, #58bdd7, #5fcfea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
  }
  .g-maker-content {
    box-sizing: border-box;
    width: 10.5rem;
    background: url("../../../assets/city-management/economic-run/major-project/icon-bg-01.png")
      no-repeat;
    background-size: 100% 100%;
    padding: 0.3rem 0.3rem;
    z-index: 100;
    h3 {
      color: #fff;
      font-size: 0.21rem;
      margin: 0.2rem 0 0.2rem 0.2rem;
    }
    .g-maker-single {
      display: flex;
      padding: 0.1rem 0.2rem;
      margin-bottom: 0.1rem;
      > div {
        flex: 1;
        span:nth-child(1) {
          font-size: 0.18rem;
          color: #dfe2fd;
        }
        span:nth-child(2) {
          font-size: 0.2rem;
          color: #fce62f;
          font-weight: bold;
          font-style: italic;
        }
      }
    }
  }
  .air-zhizhen {
    position: absolute;
    top: 0.5rem;
    left: 0.75rem;
    width: 0.35rem;
    height: 0.7rem;
    background: url("../../../assets/city-management/economic-run/three-base/zhiz.png")
      no-repeat;
    background-size: 100% 100%;
  }
  #air-pm {
    background: url("../../../assets/city-management/economic-run/three-base/yib.png")
      no-repeat;
    background-size: 76% 82%;
    background-position: 20% 47%;
  }
  .nongdu {
    padding-top: 0.4rem;
  }
  .air-content-po {
    color: #fff;
    font-size: 0.19rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    > div {
      margin: 0.05rem 0;
      display: flex;
      > span:nth-child(1) {
        display: inline-block;
        margin-right: 0.05rem;
        font-weight: normal;
      }
    }
  }
  .air-conten-second {
    span:nth-child(1) {
      width: 0.95rem;
    }
  }
  .air-title {
    box-sizing: border-box;
    padding-left: 0.2rem;
    margin-left: 0.2rem;
    font-size: 0.2rem;
    font-weight: bold;
    font-style: italic;
    color: #fff;
  }
  .left-content {
    position: absolute;
    top: 0.8rem;
    left: 0;
    z-index: 99;
    box-sizing: border-box;
    width: 14rem;
    height: 10rem;
    background: url("../../../assets/city-management/economic-run/three-base/backbase.png")
      no-repeat;
    background-size: 100% 100%;
    padding: 0.5rem 0.5rem 0.7rem 0.6rem;
  }
  .title-model {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 0.24rem;
      padding-left: 0.15rem;
      padding-bottom: 0.2rem;
      margin-left: -10px;
      color: #fff;
      background: url("../../../assets/city-management/economic-run/three-base/title-icon.png")
        no-repeat;
      background-position: -0rem 0.2rem;
      background-size: 0.87rem 0.28rem;
    }
  }
  .base-list {
    box-sizing: border-box;
    padding: 0 10px;
    height: 2.2rem;
    display: flex;
    > div {
      flex: 1;
      margin-top: 0.07rem;
    }
  }
  .area-title {
    position: relative;
    font-size: 0.2rem;
    color: rgba(255, 255, 255, 1);
    padding-left: 0.5rem;
    &:after {
      content: "";
      position: absolute;
      top: 0.1rem;
      left: 0.28rem;
      width: 0.13rem;
      height: 0.13rem;
      background: rgba(0, 126, 251, 1);
    }
    &:before {
      box-sizing: border-box;
      content: "";
      position: absolute;
      top: 0.05rem;
      left: 0.23rem;
      width: 0.13rem;
      height: 0.13rem;
      border: 2px solid rgba(253, 209, 0, 1);
    }
  }
  #each-area,
  #year-areas,
  #each-ratio {
    height: 2rem;
  }
  #pollute,
  #voice {
    height: 2.2rem;
  }
  #pollute {
    background: url("../../../assets/city-management/economic-run/three-base/bar-back.png")
      no-repeat;
    background-size: 80% 50%;
    background-position: 50% 80%;
  }
  .plan-area {
    height: 2.9rem;
    margin-top: 10px;
    .water-content {
      display: flex;
      > div {
        flex: 1;
        margin-top: 0.1rem;
      }
    }
  }
  .year-area {
    margin-top: 10px;
    height: 2.9rem;
    .water-content {
      display: flex;
      > div {
        flex: 1;
        margin-top: 0.1rem;
      }
    }
  }
  .medical-resource-container {
    background: #000;
    position: absolute;
    .tool-tip {
      background: rgba(0, 18, 55, 0.4);
      border: 2px solid rgba(72, 170, 244, 1);
      color: #9be9ff;
      font-size: 0.14rem;
      padding: 0.12rem 0.16rem;
      p {
        span:last-of-type {
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
      background: url("../../../assets/city-management/common-service/medical-resource/panle-02.png")
        no-repeat;
      background-size: 100% 100%;
      .tab-bar {
        display: flex;
        flex-direction: row;
        width: 2.2rem;
        height: 0.48rem;
        margin: 0.97rem auto;
        font-style: italic;
        color: rgba(152, 229, 250, 1);
        font-size: 0.18rem;
        background: url("../../../assets/city-management/common-service/medical-resource/tilte-bg.png")
          no-repeat;
        background-size: 100% 100%;
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
        width: 90%;
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
      background: url("../../../assets/city-management/common-service/medical-resource/panle-03.png")
        no-repeat;
      background-size: 100% 104%;
      .right-echarts-01 {
        display: flex;
        position: absolute;
        left: 6%;
        bottom: 0.54rem;
        width: 90%;
        height: 3.2rem;
        .progress {
          flex: 2.25;
          > div {
            font-size: 0.18rem;
            color: #fffff8;
            > div {
              display: flex;
              height: 0.3rem;
              div {
                flex: 1;
                margin-right: 0.2rem;
              }
              .progress-name {
                color: #96f0f7;
                font-size: 0.2rem;
                margin-right: 0.05rem;
              }
              .progress-unit {
                color: #abeef5;
                font-size: 0.16rem;
              }
            }
          }
        }
        .pollute-company {
          position: relative;
          flex: 3.7;
          .companys-title {
            position: absolute;
            bottom: 24%;
            left: 20%;
            color: #fff;
            span:nth-child(1) {
              font-size: 0.26rem;
              font-weight: bold;
              font-style: italic;
            }
            span:nth-child(2) {
              font-size: 0.16rem;
              font-weight: bold;
              font-style: italic;
              color: #dfe2fd;
            }
          }
          .company-num {
            margin-top: 0.1rem;
            margin-left: 0.3rem;
            width: 1.56rem;
            height: 0.28rem;
            font-size: 0.17rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            font-style: italic;
            color: #fce62f;
            border: 2px solid #fce62f;
            text-align: center;
            line-height: 0.28rem;
          }
          #companys {
            height: 2rem;
          }
          .monitoring-left-value {
            margin: 0.1rem 0 0.1rem 0.25rem;
            display: flex;
            font-size: 0.42rem;
            color: #fff;
            align-items: flex-end;
            font-family: "digital";
          }
          .monitoring-left-value > div {
            width: 0.35rem;
            height: 0.37rem;
            text-align: center;
            line-height: 0.37rem;
            border: 2px solid #189ddb;
            background: rgba(6, 75, 178, 0.8);
            border-radius: 5px;
            margin-left: 3px;
            padding: 3px;
            font-weight: bold;
          }
          .monitoring-left-value > .monitor-unit {
            width: 0.24rem;
            height: 0.24rem;
            line-height: 0.24rem;
            font-size: 0.18rem;
            font-weight: normal;
          }
        }
        .dangerous {
          flex: 4.05;
          #dangerous {
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
      background: url("../../../assets/city-management/common-service/medical-resource/panle-04.png")
        no-repeat;
      background-size: 100% 100%;
      .echarts-table {
        position: absolute;
        width: 6rem;
        background: #000;
        opacity: 0.8;
        z-index: 99;
      }
      .right-echarts-02 {
        display: flex;
        position: absolute;
        left: 6%;
        top: 1.1rem;
        width: 90%;
        height: 3.2rem;
        .enforce-num {
          flex: 2.25;
          > div {
            position: relative;
            .enforce-mask {
              position: absolute;
              left: 0.33rem;
              bottom: 0.1rem;
              font-size: 0.19rem;
              color: #03faa7;
              border: 2px solid #03faa7;
              text-align: center;
              width: 1.29rem;
              height: 0.27rem;
              line-height: 0.27rem;
              border-radius: 0.2rem;
              background: #262795;
            }
            .enforce-num-conten {
              position: absolute;
              width: 0.92rem;
              text-align: center;
              top: 0.55rem;
              left: 0.55rem;
              color: #00faa8;
              span:nth-child(1) {
                font-size: 0.3rem;
              }
              span:nth-child(2) {
                font-size: 0.16rem;
              }
            }
            #enforce-num1,
            #enforce-num2 {
              height: 1.6rem;
            }
          }
        }
        .enforce-law {
          flex: 7.75;
          #enforce-law {
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
        right: 0.2rem;
        top: 1rem;
        display: flex;
        flex-direction: column;
        .right-bottom-charts {
          flex: 1;
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
    .panle-title {
      position: absolute;
      top: 0.34rem;
      left: 0.54rem;
      font-size: 0.24rem;
      color: #ffffff;
      padding: 0.15rem 0.15rem;
      box-sizing: border-box;
      background: url("../../../assets/city-management/common-service/medical-resource/panle-title.png")
        no-repeat;
      background-position: 0 0.35rem;
      background-size: 0.87rem 0.28rem;
    }
    .left-list {
      position: absolute;
      left: 10.68rem;
      top: 0.7rem;
      z-index: 1000;
      .left-list-li {
        margin-top: 0.1rem;
        .name {
          padding: 0.05rem;
          width: 1.5rem;
          height: 0.26rem;
          line-height: 0.26rem;
          color: #ffffff;
          font-size: 0.22rem;
          font-style: italic;
          transform: perspective(1rem) rotateX(-15deg);
          transform-origin: left;
          background: rgba(213, 96, 44, 1);
        }
      }
    }
  }
  .window-box {
    position: absolute;
    width: 5.2rem;
    height: 2.8rem;
    margin-left: -5.2rem;
    margin-top: -2.1rem;
    color: #ffffff;
    font-size: 0.21rem;
    display: flex;
    flex-direction: row;
    p {
      font-size: 21px;
      font-weight: bold;
      color: #fff;
      margin-bottom: 0.2rem;
    }
    .window-box-left {
      width: 3.9rem;
      height: 2.79rem;
      padding: 0.35rem 0.21rem;
      box-sizing: border-box;
      background: url("../../../assets/common/win-info-icon-02.png") no-repeat;
      background-size: 100% 100%;
    }
    .tooltip-content {
      width: 100%;
      > div {
        display: flex;
        padding-right: 0.1rem;
        margin-bottom: 0.1rem;
        flex-direction: row;
        .tooltip-name {
          font-size: 0.18rem;
          font-weight: bold;
          color: #dfe2fd;
          width: 1rem;
        }
        .tooltip-decs {
          flex: 1;
          font-size: 0.2rem;
          font-weight: bold;
          font-style: italic;
          color: #fce62f;
        }
      }
    }
    img {
      flex: 1;
      height: 1.8rem;
      margin-top: 0.9rem;
    }
  }
  .panel-content {
    position: absolute;
    bottom: 0.3rem;
    left: 14rem;
    z-index: 9999;
  }
  .ecology-list {
    position: absolute;
    right: 12.1rem;
    top: 1.7rem;
    z-index: 998;
    .ecology-list-common {
      width: 1.72rem;
      height: 0.54rem;
      background: url("../../../assets/common/ecology-list.png") center center
        no-repeat;
      background-size: 1.72rem 0.64rem;
      z-index: 998;
      font-size: 0.18rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      font-style: italic;
      color: rgba(131, 235, 255, 1);
      text-align: right;
      line-height: 0.5rem;
      img {
        width: 0.1rem;
        height: 0.1rem;
        padding-right: 0.15rem;
        padding-left: 0.1rem;
      }
    }
    .ecology-list-item {
      background: url("../../../assets/common/ecology-list-item.png") center
        center no-repeat;
      width: 100%;
      height: 1.05rem;
      background-size: 1.69rem 1.05rem;
      margin-top: -0.1rem;
      margin-left: 0.06rem;
      p {
        font-size: 0.17rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        font-style: italic;
        color: rgba(255, 255, 255, 1);
        line-height: 0.5rem;
        height: 0.4rem;
        text-align: center;
      }
    }
  }
  .left {
    background: url("../../../assets/city-management/environment/atmospheric-environment/left_bg@2x.png")
      no-repeat center;
    background-size: 100% 100%;
    position: absolute;
    z-index: 99;
    top: 0.24rem;
    left: 0.29rem;
    width: 10.48rem;
    height: 10.48rem;
    .part-body {
      padding-top: 0.14rem;
      padding-left: 0.6rem;
      .left-part-first {
        display: flex;
        width: 98%;
        .part-left {
          width: 5rem;
        }
        .part-right {
          width: 50%;
          position: relative;
          .air-quality-table {
            width: 95%;
            text-align: center;
            padding-left: 5%;
            margin-top: -0.2rem;
            // background:linear-gradient(top,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.6) 100%);
            th {
              font-size: 0.2rem;
              font-family: Source Han Sans CN;
              font-weight: bold;
              color: rgba(237, 214, 174, 1);
              padding: 0.06rem 0;
              border-bottom: 2px dotted #9be9ff;
            }
            td {
              font-size: 0.18rem;
              padding: 0.06rem 0;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              border-bottom: 2px dotted #9be9ff;
            }
            // tr{
            //   border-bottom:2px dotted rgba(155,233,255,1)
            // }
          }
          img {
            position: absolute;
            top: 0.42rem;
            width: 0.1rem;
            height: 1.2rem;
          }
        }
      }
      .left-part-second {
        width: 98%;
        #concentrationChart {
          width: 9.2rem;
          height: 2.6rem;
          margin-top: 0.5rem;
          margin-left: 0.3rem;
          //border:1px solid red;
        }
      }
      .left-part-third {
        margin-top: 0.1rem;
        width: 98%;
        height: 3.2rem;
        #leftBottom {
          width: 100%;
          height: 100%;
        }
        .body-part {
          margin-top: 0.11rem;
          display: flex;
          margin-left: 0.2rem;
          align-items: center;
          .body-part-left {
            color: #fff;
            text-align: center;
            width: 1.68rem;
            height: 2.59rem;
            background: rgba(13, 42, 96, 0.25);
            border-radius: 0.1rem;
            .weather-icon {
              height: 0.56rem;
              width: 0.65rem;
            }
            .weather-desc {
              font-size: 0.24rem;
              font-family: Source Han Sans CN;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
              position: relative;
              big {
                font-size: 0.4rem;
                font-family: Source Han Sans CN;
                font-weight: 500;
                color: rgba(255, 255, 255, 1);
                sup {
                  font-size: 0.2rem;
                  font-family: Source Han Sans CN;
                  font-weight: 500;
                  color: rgba(255, 255, 255, 1);
                }
              }
            }
            .temperature-desc {
              font-size: 0.18rem;
              font-family: Source Han Sans CN;
              font-weight: 500;
              color: #2badff;
            }
          }
          .body-part-right {
            display: flex;
            height: 95%;
            justify-content: space-around;
            .weather-forecast-item {
              // height: 100%;
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
              .temperature {
                font-size: 0.18rem;
                font-family: Source Han Sans CN;
                font-weight: 500;
                color: rgba(255, 255, 255, 1);
              }
              .temperature2 {
                font-size: 0.24rem;
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
          .air-desc {
            width: 1.1rem;
            height: 0.71rem;
            border-radius: 0.08rem;
            display: inline-block;
            p:nth-child(1) {
              font-size: 0.2rem;
              font-family: Source Han Sans CN;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
            }
            p:nth-child(2) {
              font-size: 0.36rem;
              font-family: Source Han Sans CN;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
            }
            &.greenColor {
              background-color: #00bf62;
            }
            &.blueColor {
              background-color: #4ca3ff;
            }
            &.yellowColor {
              background-color: #ffd13b;
            }
            &.orangeColor {
              background-color: #ffd13b;
            }
            &.redColor {
              background-color: #fb6a0a;
            }
          }
          .air-qulity {
            width: 0.64rem;
            height: 0.54rem;
            line-height: 0.54rem;
            border-radius: 0.06rem;
            font-size: 0.42rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            padding: 0;
            margin: 0 auto;
            margin-top: 0.2rem;
            &.green {
              background-color: #00bf62;
              background-image: url("../../../assets/city-management/environment/atmospheric-environment/duoyun.png");
              background-position: center center;
              background-size: 0.64rem 0.54rem;
            }
            &.blue {
              background-color: #4ca3ff;
              background-image: url("../../../assets/city-management/environment/atmospheric-environment/xiaoyu.png");
              background-position: center center;
              background-size: 0.64rem 0.54rem;
            }
            &.blueyintian {
              background-color: #4ca3ff;
              background-image: url("../../../assets/city-management/environment/atmospheric-environment/yintian.png");
              background-position: center center;
              background-size: 0.64rem 0.54rem;
            }
            &.bluezhongyu {
              background-color: #4ca3ff;
              background-image: url("../../../assets/city-management/environment/atmospheric-environment/zhongyu.png");
              background-position: center center;
              background-size: 0.64rem 0.54rem;
            }
            &.bluebaoyu {
              background-color: #4ca3ff;
              background-image: url("../../../assets/city-management/environment/atmospheric-environment/baoyu.png");
              background-position: center center;
              background-size: 0.64rem 0.54rem;
            }
            &.yellow {
              background-color: #ffd13b;
              background-image: url("../../../assets/city-management/environment/atmospheric-environment/qingtian.png");
              background-position: center center;
              background-size: 0.64rem 0.54rem;
            }
            &.orange {
              background-color: #fe9a35;
              background-image: url("../../../assets/city-management/environment/atmospheric-environment/qingtian.png");
              background-position: center center;
              background-size: 0.64rem 0.54rem;
            }
            &.red {
              background-color: #fb6a0a;
              background-image: url("../../../assets/city-management/environment/atmospheric-environment/qingtian.png");
              background-position: center center;
              background-size: 0.64rem 0.54rem;
            }
            &.greenImg {
              background-image: url("../../../assets/city-management/environment/atmospheric-environment/duoyun.png");
              background-position: center center;
              background-size: 0.64rem 0.54rem;
            }
            &.blueImg {
              background-image: url("../../../assets/city-management/environment/atmospheric-environment/xiaoyu.png");
              background-position: center center;
              background-size: 0.64rem 0.54rem;
            }
            &.blueyintianImg {
              background-image: url("../../../assets/city-management/environment/atmospheric-environment/yintian.png");
              background-position: center center;
              background-size: 0.64rem 0.54rem;
            }
            &.bluezhongyuImg {
              background-image: url("../../../assets/city-management/environment/atmospheric-environment/zhongyu.png");
              background-position: center center;
              background-size: 0.64rem 0.54rem;
            }
            &.bluebaoyuImg {
              background-image: url("../../../assets/city-management/environment/atmospheric-environment/baoyu.png");
              background-position: center center;
              background-size: 0.64rem 0.54rem;
            }
          }
        }
      }
    }
  }
  .right {
    width: 10.48rem;
    height: 10.48rem;
    background: url(/static/img/left_bg@2x.24210e4.png) no-repeat center;
    background-size: 100% 100%;
    position: absolute;
    z-index: 99;
    right: 0.29rem;
    top: 0.24rem;
    .right-section-container {
      display: flex;
      align-items: flex-start;
      margin-left: 0.4rem;
      .right-section-first {
        padding-left: 0.4rem;
      }
      .right-section-second {
        margin-left: 0.2rem;
        #pollutionChart {
          width: 5rem;
          height: 2.3rem;
          background: url("../../../assets/city-management/environment/atmospheric-environment/pollution-chart-bg@2x.png")
            no-repeat;
          background-size: 86% 53%;
          background-position: 71% 84%;
        }
      }
    }
    .right-section-third {
      width: 10rem;
      height: 3.2rem;
      padding-left: 0.4rem;
      margin-left: 0.4rem;
      #warningChart {
        width: 11rem;
        height: 3rem;
        margin-left: -0.8rem;
      }
    }
    .right-bottom-container {
      padding-left: 0.4rem;
      margin-left: 0.4rem;
      .chart-container {
        width: 9.6rem;
        height: 2.6rem;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        margin-left: -0.2rem;
        #goodDaysChart {
          width: 50%;
          height: 100%;
        }
        #pmChart {
          width: 50%;
          height: 100%;
        }
      }
    }
  }
  .weather-data-list {
    list-style: none;
    padding-left: 0.12rem;
    li {
      font-size: 0.2rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      display: flex;
      align-items: center;
      line-height: 0.7rem;
      .data-list-num {
        color: #f8e659;
      }
      .data-list-icon {
        width: 0.06rem;
        height: 0.06rem;
        border-radius: 0.01rem;
        display: inline-block;
        margin-right: 0.1rem;
        &.first {
          background: rgba(110, 232, 252, 1);
        }
        &.second {
          background: #307ff3;
        }
        &.third {
          background: #4ca8e5;
        }
      }
    }
  }
  .second-title {
    display: flex;
    align-items: center;
    img {
      width: 0.32rem;
      height: 0.32rem;
      margin-right: 0.05rem;
    }
    p {
      font-size: 0.2rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      line-height: 1.4;
      color: rgba(255, 255, 255, 1);
    }
  }
  .second-title2 {
    display: flex;
    align-items: center;
    position: absolute;
    left: 5.5rem;
    top: 7.2rem;
    img {
      width: 0.32rem;
      height: 0.32rem;
      margin-right: 0.05rem;
    }
    p {
      font-size: 0.2rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      line-height: 1.4;
      color: rgba(255, 255, 255, 1);
    }
  }
  .top-marquee {
    width: 6.75rem;
    height: 0.2rem;
    margin: 0 auto;
    margin-top: 0.33rem;
    position: relative;
    z-index: 99;
    marquee {
      font-size: 0.18rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }
  .part-title {
    font-size: 0.24rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: white;
    text-align: left;
    margin-top: 0.54rem;
    margin-left: 0.63rem;
    height: 0.6rem;
    background: url(data:image/png;base64,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)
      no-repeat;
    background-size: 1rem 0.3rem;
    background-position: 0 50%;
    padding-left: 0.2rem;
  }
  .part-title2 {
    font-size: 0.24rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: white;
    text-align: left;
    height: 0.6rem;
    background: url(data:image/png;base64,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)
      no-repeat;
    background-size: 1rem 0.3rem;
    background-position: 0 50%;
    padding-left: 0.2rem;
    margin-top: 0.54rem;
  }
  .part-title3 {
    font-size: 0.24rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: white;
    text-align: left;
    height: 0.6rem;
    background: url(data:image/png;base64,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)
      no-repeat;
    background-size: 1rem 0.3rem;
    background-position: 0 50%;
    padding-left: 0.2rem;
    position: absolute;
    top: 3.54rem;
    left: 0.63rem;
  }
  .part-title4 {
    font-size: 0.24rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: white;
    text-align: left;
    height: 0.6rem;
    background: url(data:image/png;base64,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)
      no-repeat;
    background-size: 1rem 0.3rem;
    background-position: 0 50%;
    padding-left: 0.2rem;
    position: absolute;
    left: 0.63rem;
  }
  .maker-box-poor {
    position: absolute;
    z-index: 200;
    text-align: center;
    .g-maker-text {
      padding-left: 0.35rem;
      box-sizing: border-box;
      position: absolute;
      // left: 23.68rem;
      // top: 2.5rem;
      left: 0;
      top: 0;
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
      .makerItem {
        .line {
          width: 0.04rem;
          height: 0.64rem;
          background: #ffffff;
          margin-left: 0.44rem;
          margin-top: -0.23rem;
        }
        .dot {
          width: 0.19rem;
          height: 0.13rem;
          background: rgba(213, 96, 44, 1);
          opacity: 0.9;
          border-radius: 50%;
          margin: auto;
        }
        .cricle {
          width: 0.75rem;
          height: 0.38rem;
          border: 0.02rem solid rgba(213, 96, 44, 1);
          opacity: 0.3;
          margin: -0.25rem auto 0 auto;
          border-radius: 50%;
          box-shadow: inset 0px 0px 5px 1px rgba(213, 96, 44, 1);
          animation: warn 1s infinite;
          .inner-cricle {
            width: 0.36rem;
            height: 0.2rem;
            border: 0.02rem solid rgba(213, 96, 44, 1);
            border-radius: 50%;
            margin: 0.05rem auto;
          }
        }
        @keyframes warn {
          0% {
            transform: scale(0.4);
            opacity: 0;
          }
          25% {
            transform: scale(0.6);
            opacity: 0.2;
          }
          50% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          75% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
      }
    }
  }
}
  /*.left-part-second,*/
  /*.left-part-third,*/
  /*.part-left,*/
  /*.part-right,*/
  /*.right{*/
  /*}*/
</style>
