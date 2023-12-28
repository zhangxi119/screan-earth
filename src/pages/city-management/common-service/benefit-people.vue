<template>
  <div class="benefit-people-container">
    <head-component name="惠民惠农"></head-component>
      <div class="g-menu-box">
        <menu-list></menu-list>
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
    </maker-component> -->
      <div class="left-top-panle">
        <div class="hover-div">
          <div class="panle-titles hover-color">补助资金总体情况</div>
          <div style="font-size:0.14rem;color: #999999;position: absolute;top: 0.54rem;left: 2.25rem;">（截至2020年）</div>
          <ul class="panle-top">
            <li>
              <p class="total-amount">发放总金额</p>
              <div class="unit">
                <span class="content">{{(+overallSituationMap.moneySum).toFixed(2)}}</span>万元
              </div>
            </li>
            <li>
              <p class="total-amount">发放批次总数</p>
              <div class="unit">
                <span class="content">{{overallSituationMap.countSum}}</span>批
              </div>
            </li>
            <li>
              <p class="total-amount">资金发放失 败率</p>
              <div class="unit">
                <span class="content">{{overallSituationMap.failRate}}</span>%
              </div>
            </li>
            <li>
              <p class="total-amount">申报总批次</p>
              <div class="unit">
                <span class="content">{{overallSituationMap.declareSum}}</span>批
              </div>
            </li>
            <li>
              <p class="total-amount">总侦测风险 预警</p>
              <div class="unit"><span class="content">{{overallSituationMap.warmSum}}</span>个</div>
            </li>
            <li>
              <p class="total-amount">建档立卡贫困 人数</p>
              <div class="unit">
                <span class="content">{{overallSituationMap.poorSum}}</span>人
              </div>
            </li>
          </ul>
        </div>
        <div class="bottom-panle hover-div">
            <div class="panle-titles hover-color" style="top:0.5rem;padding-bottom: 0.25rem;">补助资金年度发放情况</div>
            <div style="font-size:0.14rem;color: #999999;position: absolute;top: 0.64rem;left: 2.65rem;">（截至2020年）</div>
            <ul class="grant">
                <li>
                    <p class="grant-title">{{yearPayment.lastyear}}发放情况</p>
                    <div class="grant-statistics">
                        <div class="left">
                            <p class="allmoney">总金额（万元）</p>
                            <p class="allcount">{{yearPayment.lastpay}}</p>
                        </div>
                        <div class="right">
                            <p class="allmoney">人数(万人）</p>
                            <p class="allcount2">{{yearPayment.lastPeople}}</p>
                        </div>
                    </div>
                </li>
                 <li>
                    <p class="grant-title">{{yearPayment.nowyear}}发放情况</p>
                    <div class="grant-statistics">
                        <div class="left">
                            <p class="allmoney">总金额（万元）</p>
                            <p class="allcount">{{yearPayment.nowpay}}</p>
                        </div>
                        <div class="right">
                            <p class="allmoney">人数(万人）</p>
                            <p class="allcount2">{{yearPayment.nowpeople}}</p>
                        </div>
                    </div>
                </li>
                 <!-- <li>
                    <p class="grant-title">未发放</p>
                    <div class="grant-statistics">
                        <div class="left">
                            <p class="allmoney">总金额（万元）</p>
                            <p class="allcount">{{yearPayment.unPay}}</p>
                        </div>
                        <div class="right">
                            <p class="allmoney">人数(万人）</p>
                            <p class="allcount2">{{yearPayment.unPeople}}</p>
                        </div>
                    </div>
                </li> -->
            </ul>
          </div>
      </div>
      <div class="left-bottom-panle hover-div">
          <div class="panle-titles hover-color">补贴资金发放情况</div>
        <div style="font-size:0.14rem;color: #999999;position: absolute;top: 0.54rem;left: 2.05rem;">（截至2020年）</div>
          <ul class="total-business">
              <li class="sub hover-color">
                  <span>补贴项目资金发放总额占比</span></li>
              <li class="grant hover-color"><span>各区县发放总金额</span></li>
          </ul>
          <div class="left-bottom-echarts1" id="left-bottom-echarts1"></div>
          <div class="left-bottom-echarts2">
                <div class="body-item-box" id="responsibleBody">
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
                            <div class="body-item-line-box"></div>
                            <div class="body-item-line-box"></div>
                        </div>
                        <div class="body-item-percent"><span>2</span>万元</div>
                    </div>
                </div>
          </div>
          <div class="left-bottom-echarts3" id="left-bottom-echarts3"></div>
          <div class="model" @click="showPop"></div>
          <div class="panle-titles2 hover-color">补贴资金发放占比情况</div>
          <div class="panle-titles3 hover-color">业务部门补贴享受人数 TOP3</div>
          <div class="panle-titles4 hover-color">补贴项目享受人数 TOP3</div>
          <ul id="depart-sub-num">
              <li style="width:100%;height:0.4rem" v-for="item in classTop3List" :key="item.className">{{item.className}}<span class="number">{{item.peopleNum}}人</span></li>
          </ul>
          <ul class="proj-sub-num">
              <li style="width:100%;height:0.4rem" v-for="item in projectTop3List" :key="item.projectName">
                <span style="width:1.3rem;overflow:hidden;display:inline-block;height:0.4rem;text-overflow: ellipsis;white-space: nowrap;" :title="item.projectName">{{item.projectName}}</span>
                <span class="number">{{item.peopleNum}}人</span></li>
          </ul>
      </div>
      <div class="right-top-panle hover-div">
          <div class="panle-titles hover-color">业务受理情况</div>
          <div style="font-size:0.14rem;color: #999999;position: absolute;top: 0.54rem;left: 1.75rem;">（截至2020年）</div>
          <ul class="total-business" style="left: 0.6rem;">
              <li class="complaint">
                  <span>查询总数</span><span class="count">{{businessNum}}</span></li>
              <li class="consult"><span>咨询总数</span><span class="count">{{consultantNum}}</span></li>
              <li class="callout"><span>其他总数</span><span class="count">{{phoneNum}}</span></li>
          </ul>
          <div id="right-top-echarts-1" class="right-top-echarts"></div>
      </div>
      <div class="right-bottom-panle hover-div">
          <div class="panle-titles hover-color">电子监察情况Top5</div>
        <div style="font-size:0.14rem;color: #999999;position: absolute;top: 0.54rem;left: 2.15rem;">（截至2019年）</div>
          <div id="right-bottom-echarts" class="right-bottom-echarts">
          </div>
          <!-- <div class="classify-allnum">
              <p>{{count1}}</p>
              <div>
                <span>区县预警</span>
                <span>(次)</span>
              </div>
            </div> -->
            <div class="classify-title hover-color">
              <span>区县预警</span>
            </div>
          <div id="right-bottom-echarts2" class="right-bottom-echarts2"></div>
          <!-- <div class="classify-allnum2">
              <p>{{count2}}</p>
              <div>
                <span>银行预警</span>
                <span>(次)</span>
              </div>
            </div> -->
          <div class="classify-title2 hover-color">
              <span>银行预警</span>
            </div>
          <div id="right-bottom-echarts3" class="right-bottom-echarts3"></div>
          <div class="classify-title3 hover-color">
              <span>项目预警</span>
            </div>
          <!-- <div class="classify-allnum3">
              <p>{{count3}}</p>
              <div>
                <span>项目预警</span>
                <span>(次)</span>
              </div>
            </div> -->
          <div id="right-bottom-echarts4" class="right-bottom-echarts4"></div>
          <div class="classify-title4 hover-color">
              <span>部门预警</span>
            </div>
          <!-- <div class="classify-allnum4">
              <p>{{count4}}</p>
              <div>
                <span>部门预警</span>
                <span>(次)</span>
              </div>
            </div> -->
      </div>
      <!-- 弹窗 -->
      <!-- 发放失败弹窗 -->
      <div class="popfail" v-show="showPopfail">
        <div id="popwindow">
          <p class="title">补助资金发放失败原因Top5</p>
          <img src="../../../assets/common/closepopicon.png" @click="closePopfail">
          <div id="popfail"></div>
        </div>
      </div>
      <div class="popQuxian" v-show="showPopQuxian">
        <div id="popwindow1">
          <p class="title">区县预警趋势情况</p>
          <img src="../../../assets/common/closepopicon.png" @click="closePopQuxian">
          <div id="popChart1"></div>
        </div>
      </div>
      <div class="popYinhang" v-show="showPopYinhang">
        <div id="popwindow2">
          <p class="title">银行预警趋势情况</p>
          <img src="../../../assets/common/closepopicon.png" @click="closePopYinghang">
          <div id="popChart2"></div>
        </div>
      </div>
      <div class="popBumen" v-show="showPopBumen">
        <div id="popwindow3">
          <p class="title">部门预警趋势情况</p>
          <img src="../../../assets/common/closepopicon.png" @click="closePopBumen">
          <div id="popChart3"></div>
        </div>
      </div>
      <div class="popXiangmu" v-show="showPopXiangmu">
        <div id="popwindow4">
          <p class="title">项目预警趋势情况</p>
          <img src="../../../assets/common/closepopicon.png" @click="closePopXiangmu">
          <div id="popChart4"></div>
        </div>
      </div>
       <maker-component v-show="!item.iscrossFlag&&!isTHREE" class="zone-maker" :id="index" v-for="(item,index) in zoneInfo" :key="index" :makerData="item" >
        <div slot="maker">
          <div class="maker-img">
            <img  src="@/assets/common/event-line.png" alt="" />
          </div>
        </div>
        <img slot="img" v-show="item.showTextFlag"  src="@/assets/common/event-icon.png" alt="" class="line2" />
        <div @mouseenter="stopBanner()" @mouseleave="startBanner()" slot="text" class="g-maker-text " v-show="item.showTextFlag">
          <h3>{{item.name}}</h3>
          <div class="g-text-item">补贴总发人数：<span>{{item.peopleSum}}</span> 人</div>
          <div class="g-text-item">补贴总发放金额：<span>{{item.moneySum}}</span> 万元</div>
        </div>
    </maker-component>
  </div>
</template>

<script>
import echarts from 'echarts'
import API from '@/api/city-management/common-service.js'
import optionj from '@/echarts-data/city-management/common-service/benefit-people/right-echarts-01.js'
import option1 from '@/echarts-data/city-management/common-service/benefit-people/right-echarts-02.js'
import option2 from '@/echarts-data/city-management/common-service/benefit-people/right-echarts-03.js'
import option3 from '@/echarts-data/city-management/common-service/benefit-people/right-echarts-04.js'
import option4 from '@/echarts-data/city-management/common-service/benefit-people/right-echarts-05.js'
import option5 from '@/echarts-data/city-management/common-service/benefit-people/left-echarts-01.js'
import option6 from '@/echarts-data/city-management/common-service/benefit-people/left-echarts-02.js'
import option7 from '@/echarts-data/city-management/common-service/benefit-people/pop-fail-echarts.js'
import context from '@/echarts-data/city-management/common-service/benefit-people/percentColor.js'
import popQuxianEcharts from '@/echarts-data/city-management/common-service/benefit-people/pop-quxian-charts.js'
import popYinhangEcharts from '@/echarts-data/city-management/common-service/benefit-people/pop-yinhang-charts.js'
import popBumenEcharts from '@/echarts-data/city-management/common-service/benefit-people/pop-bumen-charts.js'
import popXiangmuEcharts from '@/echarts-data/city-management/common-service/benefit-people/pop-xiangmu-charts.js'
import makerComponent from '@/components/maker-component.vue'
import menuList from '@/components/menu.vue'
import headComponent from '@/components/head-component'
import {mapPointsEasy} from '../../../../static/CesiumAssets/js/leshanArea.js'
import '@/echarts-data/city-management/common-service/benefit-people/index.css'
export default {
  components: {makerComponent, menuList, headComponent},
  data () {
    return {
      poor: false,
      poorData: false,
      overallSituationMap: {},
      yearPayment: {},
      projectTop3List: [],
      classTop3List: [],
      classRateList: [],
      makersDatas: [],
      businessNum: 0,
      consultantNum: 0,
      phoneNum: 0,
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
      myChart1: null,
      myChart2: null,
      myChart3: null,
      myChart4: null,
      showPopfail: false,
      showPopQuxian: false,
      showPopYinhang: false,
      showPopBumen: false,
      showPopXiangmu: false,
      zoneInfo: [],
      selectIndex: 0,
      timer: null,
      leshanArea: mapPointsEasy
    }
  },
  computed: {
    isTHREE () {
      return this.$store.getters.GET_IS_THREE
    },
    crossMaskers () {
      return this.$store.getters.GET_CROSS_MAKERS
    }
  },
  watch: {
    isTHREE (val) {
      if (val) {
        this.stopBanner()
        this.zoneInfo.forEach((item, index) => {
          item.showTextFlag = false
          item.zIndex = 1
        })
      } else {
        this.startBanner()
      }
    },
    crossMaskers (val) {
      if (val.length) {
        val.forEach((d, i) => {
          let index = this.zoneInfo.findIndex((_d) => {
            return _d.id === d.id
          })
          if (index > -1) {
            let _i = this.zoneInfo[index]
            _i.iscrossFlag = true
            this.$set(this.zoneInfo, index, _i)
          }
        })
      } else {
        this.zoneInfo.forEach((item, index) => {
          item.iscrossFlag = false
        })
      }
    }
  },
  mounted () {
    this.initBusinessAccepted()
    this.initOverRallSituation()
    this.initEpolice()
    this.initSubFundSituation()
    this.initDetailsClass()
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    // 部门基本信息（中间地图）
    initDetailsClass () {
      API.overallDistrict(this, {}).then(resp => {
        let res = resp.data
        if (res.serviceSuccess) {
          let result = res.data.overallDistrictList
          let zoneInfo = []
          result.forEach((d, i) => {
            if (this.leshanArea[d.district]) {
              let item = {
                id: i,
                name: d.district,
                lon: this.leshanArea[d.district].lon,
                lat: this.leshanArea[d.district].lat,
                iscrossFlag: false, // 是否三维越界参数
                warnNum: d.warnNum, // 预警数
                peopleSum: d.peopleSum, // 总发放人数
                onePass: d.onePass, // 一卡通数
                moneySum: parseInt(d.moneySum / 10000), // 总发放金额
                poorPeoSum: d.poorPeoSum// 贫困人口数
              }
              if (i === 0) {
                item.zIndex = 3
                item.showTextFlag = true
              } else {
                item.showTextFlag = false
                item.zIndex = 1
              }
              zoneInfo.push(item)
            }
          })
          this.zoneInfo = zoneInfo
          window._m.addMakers(this.zoneInfo)
          this.autoBanner()
        }
      }).catch(err => {
        console.log(err)
      })
    },
    autoBanner () {
      // 区域总体信息循环显示
      let i = 0
      this.timer = setInterval(() => {
        ++i
        if (i > this.zoneInfo.length - 1) {
          i = 0
        }
        this.zoneInfo.forEach((item, index) => {
          if (index !== i) {
            this.zoneInfo[index].showTextFlag = false
            this.zoneInfo[index].zIndex = 1
          }
        })
        this.zoneInfo[i].showTextFlag = true
        this.zoneInfo[i].zIndex = 3
      }, 5000)
    },
    stopBanner () {
      console.log('停止轮播')
      clearInterval(this.timer)
    },
    startBanner () {
      this.autoBanner()
    },
    // 补助资金总体情况 & 补助资金年度发放情况左上
    initOverRallSituation () {
      API.overallSituation(this, {}).then(resp => {
        let res = resp.data.data
        this.$nextTick(() => {
          this.overallSituationMap = res.overallSituationMap
          this.yearPayment.lastyear = res.yearPaymentMap[1].hm02001
          this.yearPayment.lastpay = (res.yearPaymentMap[1].hm02004 / 10000).toFixed(2)
          this.yearPayment.lastPeople = (res.yearPaymentMap[1].hm02005 / 10000).toFixed(2)
          this.yearPayment.nowyear = res.yearPaymentMap[0].hm02001
          this.yearPayment.nowpay = (res.yearPaymentMap[0].hm02004 / 10000).toFixed(2)
          this.yearPayment.nowpeople = (res.yearPaymentMap[0].hm02005 / 10000).toFixed(2)
        })
      }).catch(err => {
        console.log(err)
      })
    },
    // 业务受理情况右上
    initBusinessAccepted () {
      API.businessAccepted(this, {}).then(resp => {
        let res = resp.data.data.businessAcceptedMap
        echarts.init(document.getElementById('right-top-echarts-1')).setOption(optionj(res))
        res.dealNumList[0].dealNumList.forEach(item => {
          this.businessNum += item
        })
        res.dealNumList[1].dealNumList.forEach(item => {
          this.consultantNum += item
        })
        res.dealNumList[2].dealNumList.forEach(item => {
          this.phoneNum += item
        })
      }).catch(err => {
        console.log(2222)
        console.log(err)
      })
    },
    // 电子督查情况右下
    initEpolice () {
      API.epolice(this, {}).then(resp => {
        let res = resp.data.data.epoliceMap
        res.districtList.forEach(item => {
          this.count1 += item.num
        })
        res.bankList.forEach(item => {
          this.count2 += item.num
        })
        res.projectList.forEach(item => {
          this.count3 += item.num
        })
        res.classList.forEach(item => {
          this.count4 += item.num
        })
        this.$nextTick(() => {
          echarts.init(document.getElementById('right-bottom-echarts')).setOption(option1(res.districtList))
          echarts.init(document.getElementById('right-bottom-echarts2')).setOption(option2(res.projectList))
          echarts.init(document.getElementById('right-bottom-echarts3')).setOption(option3(res.bankList))
          echarts.init(document.getElementById('right-bottom-echarts4')).setOption(option4(res.classList))
          let myChart1 = echarts.init(document.getElementById('right-bottom-echarts'))
          let myChart2 = echarts.init(document.getElementById('right-bottom-echarts2'))
          let myChart3 = echarts.init(document.getElementById('right-bottom-echarts3'))
          let myChart4 = echarts.init(document.getElementById('right-bottom-echarts4'))
          myChart1.on('click', this.lineClick1)
          this.myChart1 = myChart1
          myChart2.on('click', this.lineClick2)
          this.myChart2 = myChart2
          myChart3.on('click', this.lineClick3)
          this.myChart3 = myChart3
          myChart4.on('click', this.lineClick4)
          this.myChart4 = myChart4
        })
      })
    },
    // 弹窗
    // 区县弹窗
    lineClick1 (param) {
      console.log(param)
      this.showPopQuxian = true
      let params = {
        district: param.name
      }
      API.epoliceClick(this, params).then(resp => {
        console.log(resp.data.data.epoliceClickList)
        echarts.init(document.getElementById('popChart1')).setOption(popQuxianEcharts(resp.data.data.epoliceClickList))
      })
    },
    // 项目弹窗
    lineClick2 (param) {
      console.log(param)
      this.showPopXiangmu = true
      let params = {
        projectName: param.name
      }
      API.epoliceClick(this, params).then(resp => {
        console.log(resp.data.data.epoliceClickList)
        echarts.init(document.getElementById('popChart4')).setOption(popXiangmuEcharts(resp.data.data.epoliceClickList))
      })
    },
    // 银行弹窗
    lineClick3 (param) {
      console.log(param)
      this.showPopYinhang = true
      let params = {
        bank: param.name
      }
      API.epoliceClick(this, params).then(resp => {
        console.log(resp.data.data.epoliceClickList)
        echarts.init(document.getElementById('popChart2')).setOption(popYinhangEcharts(resp.data.data.epoliceClickList))
      })
    },
    // 部门弹窗
    lineClick4 (param) {
      console.log(param)
      this.showPopBumen = true
      let params = {
        className: param.name
      }
      API.epoliceClick(this, params).then(resp => {
        console.log(resp.data.data.epoliceClickList)
        echarts.init(document.getElementById('popChart3')).setOption(popBumenEcharts(resp.data.data.epoliceClickList))
      })
    },
    // 发放失败弹窗
    lineClick5 (param) {
      if (param.name === '发放失败') {
        this.showPopfail = true
        API.queryfailRateInfo(this, {}).then(resp => {
          console.log(resp.data.data.failRateInfo)
          echarts.init(document.getElementById('popfail')).setOption(option7(resp.data.data.failRateInfo))
        })
      } else {
        this.showPopfail = false
      }
    },
    showPop () {
      console.log(123)
      this.showPopfail = true
      API.queryfailRateInfo(this, {}).then(resp => {
        console.log(resp.data.data.failRateInfo)
        echarts.init(document.getElementById('popfail')).setOption(option7(resp.data.data.failRateInfo))
      })
    },
    closePopfail () {
      this.showPopfail = false
    },
    closePopQuxian () {
      this.showPopQuxian = false
    },
    closePopYinghang () {
      this.showPopYinhang = false
    },
    closePopBumen () {
      this.showPopBumen = false
    },
    closePopXiangmu () {
      this.showPopXiangmu = false
    },
    /** -------------补助资金发放情况 & 业务部门补贴享受人数top3 & 项目补贴享受人数top3左下上 ---------------**/
    initSubFundSituation () {
      API.subFundSituation(this, {}).then(resp => {
        let res = resp.data.data
        this.projectTop3List = res.projectTop3List
        this.classTop3List = res.classTop3List
        echarts.init(document.getElementById('left-bottom-echarts1')).setOption(option5(res.projectRateList))
        echarts.init(document.getElementById('left-bottom-echarts3')).setOption(option6(res.failRateList))
        res.classRateList.forEach(item => {
          this.classRateList.push({
            name: item.class,
            value: (+item.money).toFixed()
          })
        })
        context.init(this.classRateList)

        let myEchart = echarts.init(document.getElementById('left-bottom-echarts3'))
        myEchart.dispatchAction({
          type: 'highlight',
          name: '发放失败'
        })
        myEchart.on('click', this.lineClick5)
        res.classRateList.forEach(item => {
          this.classRateList.push({
            name: item.class,
            value: item.money
          })
        })
        // let that = this
        // myEchart.on('legendselectchanged', function (params) {
        //   console.log(params)
        //   var option = this.getOption()
        //   if (params.name === '发放失败') {
        //     that.showPopfail = true
        //     option.legend[0].selectedMode = true
        //   } else {
        //     option.legend[0].selectedMode = false
        //   }
        // })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../components/date-title.scss';
    .benefit-people-container{
        position: absolute;
        overflow: hidden;
        background:#000;
        .g-menu-box {
          position: absolute;
          left: 11rem;
          top: 9rem;
          z-index: 100;
        }
        .left-top-panle {
            position: absolute;
            width: 10.48rem;
            height: 5.13rem;
            left: 0.29rem;
            top: 0.24rem;
            z-index: 99;
            background: url('../../../assets/city-management/common-service/benefit-people/panle-01.png') no-repeat;
            background-size: 100% 102%;

            .top-title {
            position: absolute;
            left: 0.60rem;
            top: 1.15rem;
            font-size: 0.20rem;
            color: #FFFFFF;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
                img {
                    width: 0.50rem;
                    height: 0.50rem;
                }
            }
            .panle-titles {
                position: absolute;
                top: 0.34rem;
                left:0.44rem;
                font-size: 0.2rem;
                color: #FFFFFF;
                padding: 0.15rem 0.15rem;
                box-sizing: border-box;
                background: url('../../../assets/common/panle-title.png') no-repeat;
                background-position-y: 100%;
                background-size: 0.58rem 0.19rem;
            }
            .panle-top {
                width: 9.5rem;
                position: absolute;
                left: 0.73rem;
                top: 1rem;
                li{
                    list-style: none;
                    width: 1.25rem;
                    height: 1.04rem;
                    text-align: center;
                    float: left;
                    margin: 0.13rem;
                    .total-amount{
                        height:0.44rem;
                        font-size:0.2rem;
                        text-align: center;
                        font-family:Source Han Sans CN;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                    }
                    .unit{
                        font-size:0.18rem;
                        font-family:Heiti SC;
                        font-weight:bold;
                        font-style:italic;
                        color:rgba(255,255,255,1);
                        height: 0.68rem;
                        background: url('../../../assets/city-management/common-service/benefit-people/number.png') no-repeat;
                        background-size: 1.33rem 0.8rem;
                        display: inline-block;
                        width: 1.5rem;
                        line-height: 0.8rem;
                        overflow: hidden;
                        .content{
                            width:0.63rem;
                            height:0.8rem;
                            font-size:0.26rem;
                            font-family:Impact;
                            font-weight:bold;
                            font-style:italic;
                            color:rgba(252,230,47,1);
                            line-height: 0.68rem;
                            padding-right: 0.1rem;
                            padding-left: 0.1rem;
                        }
                    }
                }
            }
            .bottom-panle{
                position: absolute;
                top: 1.9rem;
                width: 100%;
                height:2rem;
                font-size:0.2rem;
                font-family:Source Han Sans CN;
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height:0.17rem;
                .grant{
                    position: absolute;
                    top: 1rem;
                    left: 0.75rem;
                    li{
                        width: 4.6rem;
                        height: 1.1rem;
                        list-style: none;
                        display: inline-block;
                        text-align: center;

                        .grant-title{
                            height:0.3rem;
                            line-height: 0.3rem;
                            font-size:0.2rem;
                            font-family:Source Han Sans CN;
                            font-weight:400;
                            color:rgba(140,243,246,1);
                            padding-bottom: 0.15rem;
                        }
                        .grant-statistics{
                          background: url('../../../assets/common/juxing.png') no-repeat;
                          background-size: 4.6rem 0.8rem;
                            .left{
                                display: inline-block;
                                height: 0.908rem;
                                margin-top: 0.1rem;
                                text-align: center;
                                margin-right: 0.4rem;
                                .allmoney{
                                    height:0.35rem;
                                    font-size:0.17rem;
                                    font-family:Source Han Sans CN;
                                    font-weight:500;
                                    color:#8cf3f6;
                                    opacity:1;
                                    border-right:0.01rem dashed;
                                    padding-right: 0.4rem;
                                }
                                .allcount{
                                    height:0.21rem;
                                    font-size:0.24rem;
                                    font-family:Impact;
                                    font-weight:400;
                                    font-style:italic;
                                    color:rgba(255,255,255,1);
                                    border-right: 0.01rem dashed #5BA4F8;
                                    text-align: center;
                                    padding-right: 0.4rem;
                                }
                            }
                            .right{
                                display: inline-block;
                                height: 0.908rem;
                                width: 1.3rem;
                                .allmoney{
                                    height:0.35rem;
                                    font-size:0.17rem;
                                    font-family:Source Han Sans CN;
                                    font-weight:500;
                                    color:#8cf3f6;
                                    opacity:0.8;
                                }
                                .allcount2{
                                    width:1.07rem;
                                    height:0.21rem;
                                    font-size:0.24rem;
                                    font-family:Impact;
                                    font-weight:400;
                                    font-style:italic;
                                    color:rgba(249,215,100,1);
                                }
                            }
                        }
                    }
                }
            }
        }
        .left-bottom-panle{
            position: absolute;
            width: 10.48rem;
            height: 5.93rem;
            left: 0.29rem;
            top: 4.8rem;
            z-index: 99;
            background: url('../../../assets/city-management/common-service/benefit-people/background-big.png') no-repeat;
            background-size: 100% 5.93rem;
            .panle-titles {
                position: absolute;
                top: 0.34rem;
                left:0.34rem;
                font-size: 0.2rem;
                color: #FFFFFF;
                padding: 0.15rem 0.15rem;
                box-sizing: border-box;
                background: url('../../../assets/common/panle-title.png') no-repeat;
                background-size: 0.58rem 0.19rem;
                background-position-y: 100%;
            }
            .panle-titles2 {
                position: absolute;
                top: 3.5rem;
                left:0.4rem;
                font-size: 0.20rem;
                color: #FFFFFF;
                display: inline-block;
                width:2.9rem;
                height:0.3rem;
                box-sizing: border-box;
                padding-left: 0.4rem;
                color: #FFFFFF;
                background: url('../../../assets/city-management/common-service/benefit-people/point.png') left center no-repeat;
                background-size: 0.32rem 0.33rem;
            }
            .panle-titles3 {
                position: absolute;
                top: 3.5rem;
                left:3.8rem;
                font-size: 0.20rem;
                color: #FFFFFF;
                display: inline-block;
                width:3.2rem;
                height:0.3rem;
                box-sizing: border-box;
                padding-left: 0.4rem;
                color: #FFFFFF;
                background: url('../../../assets/city-management/common-service/benefit-people/point.png') left center no-repeat;
                background-size: 0.32rem 0.33rem;
            }
            .panle-titles4 {
                position: absolute;
                top: 3.5rem;
                left:7.2rem;
                font-size: 0.20rem;
                color: #FFFFFF;
                display: inline-block;
                width:2.9rem;
                height:0.3rem;
                box-sizing: border-box;
                padding-left: 0.4rem;
                color: #FFFFFF;
                background: url('../../../assets/city-management/common-service/benefit-people/point.png') left center no-repeat;
                background-size: 0.32rem 0.33rem;
            }
            li{
                list-style: none;
                display: block;
            }
            #depart-sub-num{
                position: absolute;
                width: 2.71rem;
                height: 1.4rem;
                top: 4rem;
                left: 3.8rem;
                li{
                    width: 100%;
                    height: 0.4rem;
                    line-height: 0.4rem;
                    width:1.16rem;
                    height:0.16rem;
                    font-size:0.16rem;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    padding-left: 0.38rem;
                    box-sizing: border-box;
                    border-bottom: 0.01rem dashed rgba(67,250,250,1);
                    .number{
                        height:0.19rem;
                        font-size:0.20rem;
                        font-family:Impact;
                        font-weight:400;
                        font-style:italic;
                        color:#FAFCFF;
                        position: absolute;
                        right: 0;
                        line-height: 0.4rem;
                        display: inline-block;
                        height: 0.4rem;
                        line-height: 0.4rem;
                        font-size: .18rem;
                        letter-spacing: 0.01rem;
                        font-weight: bold;
                        color: #fff;
                        font-family: Impact;
                        background-image: -webkit-linear-gradient(bottom, #F9FBFF, #57D2FF);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
                li:nth-child(1){
                    background: url('../../../assets/city-management/common-service/benefit-people/number1.png') no-repeat left center;
                    background-size: 0.36rem 0.36rem;
                }
                li:nth-child(2){
                    background: url('../../../assets/city-management/common-service/benefit-people/number2.png') no-repeat left center;
                    background-size: 0.36rem 0.36rem;
                }
                li:nth-child(3){
                    background: url('../../../assets/city-management/common-service/benefit-people/number3.png') no-repeat left center;
                    background-size: 0.36rem 0.36rem;
                }
            }
            .proj-sub-num{
                position: absolute;
                width: 2.71rem;
                height: 1.4rem;
                top: 4rem;
                left: 7.1rem;
                li{
                    width: 100%;
                    height: 0.4rem;
                    line-height: 0.4rem;
                    width:1.16rem;
                    height:0.16rem;
                    font-size:0.16rem;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    padding-left: 0.38rem;
                    box-sizing: border-box;
                    border-bottom: 0.01rem dashed rgba(67,250,250,1);
                    .number{
                        height:0.19rem;
                        font-size:0.20rem;
                        font-family:Impact;
                        font-weight:400;
                        font-style:italic;
                        color:#FAFCFF;
                        color:rgba(250,252,255,1);
                        position: absolute;
                        right: 0;
                        line-height: 0.4rem;
                        display: inline-block;
                        height: 0.4rem;
                        line-height: 0.4rem;
                        font-size: .18rem;
                        letter-spacing: 0.01rem;
                        font-weight: bold;
                        color: #fff;
                        font-family: Impact;
                        background-image: -webkit-linear-gradient(bottom, #F9FBFF, #57D2FF);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
                li:nth-child(1){
                    background: url('../../../assets/city-management/common-service/benefit-people/number1.png') no-repeat left center;
                    background-size: 0.36rem 0.36rem;
                }
                li:nth-child(2){
                    background: url('../../../assets/city-management/common-service/benefit-people/number2.png') no-repeat left center;
                    background-size: 0.36rem 0.36rem;
                }
                li:nth-child(3){
                    background: url('../../../assets/city-management/common-service/benefit-people/number3.png') no-repeat left center;
                    background-size: 0.36rem 0.36rem;
                }
            }
            .total-business {
                position: absolute;
                top: 0.9rem;
                left: 0.58rem;
                width: 9rem;
                margin-top: 0.1rem;
                font-size: 0.20rem;
                li {
                  list-style: none;
                  display: inline-block;
                  width: 2.9rem;
                  height:0.3rem;
                  box-sizing: border-box;
                  padding-left: 0.4rem;
                  color: #FFFFFF;
                  background: url('../../../assets/city-management/common-service/benefit-people/point.png') left center no-repeat;
                  background-size: 0.32rem 0.33rem;
                }
                .grant{
                    margin-left: 0.4rem;
                }
            }
            .left-bottom-echarts1{
                height: 1.9rem;
                width: 3.5rem;
                position: absolute;
                top: 1.3rem;
                left: 0.5rem;
            }
            .left-bottom-echarts2{
                height: 1.9rem;
                width: 6.7rem;
                position: absolute;
                top: 1.3rem;
                left: 3.6rem;
                /*责任主体开始*/
                .body-item-box{
                    float: left;
                    margin-left: 0.1rem;
                    margin-top:0;
                    overflow: hidden;
                }
                .body-item-title{
                    font-size: 0.15rem;
                    color: #FFFFFF;
                    letter-spacing: 0.16px;
                    font-weight: 300;
                }
                .body-item-bottom{
                    height: 0.24rem;
                    line-height: 0.24rem;
                    margin-top: 0.03rem;
                }
                .body-item-bottom-line{
                    float: left;
                    height: 100%
                }
                .body-item-line-box{
                    width: 0.04rem;
                    height: 0.08rem;
                    float: left;
                    margin-right: 0.02rem;
                    margin-top: 0.08rem;
                    background: rgba(65,158,255,0.3);
                }
                .temp{
                    background-color: #4D8EEB;
                }

                .body-item-percent{
                    margin-left: 0.05rem;
                    text-align: left;
                    /* text-shadow: 0 2px 1px rgba(0,0,0,0.58); */
                    float: right;
                    /* background-image: -webkit-linear-gradient(bottom,#71D8FF,#71D8FF ,#A0E3F6,#FFFFFF);
                    -webkit-background-clip: text; */
                    /* -webkit-text-fill-color: transparent; */
                    font-family: PingFangSC-Regular;
                    font-size: 0.14rem;
                    font-weight: 300;
                    color: #ABEEF5;
                    margin-top: 0;
                    width: 0.6rem;
                }
                .body-item-percent span{
                    color: #ABEEF5;
                }
            /*rgba(172,60,87,1) rgba(255,236,100,1)*/
            /*责任主体结束*/
            }
            .left-bottom-echarts3{
                width: 3.3rem;
                height: 1.4rem;
                position: absolute;
                left: 0.5rem;
                top: 4rem;
            }
            .model{
              width: 1.1rem;
              height: 0.3rem;
              position: absolute;
              left: 2.4rem;
              top: 4.7rem;
              z-index: 99;
            }
        }
        .right-top-panle {
            position: absolute;
            width: 10.48rem;
            height: 5.13rem;
            right:0;
            top: 0.24rem;
            z-index: 99;
            background: url('../../../assets/city-management/common-service/benefit-people/panle-01.png') no-repeat;
            background-size: 100% 100%;
            .panle-titles {
                position: absolute;
                top: 0.34rem;
                left:0.44rem;
                font-size: 0.2rem;
                color: #FFFFFF;
                padding: 0.15rem 0.15rem;
                box-sizing: border-box;
                background: url('../../../assets/common/panle-title.png') no-repeat;
                background-position-y: 100%;
                background-size: 0.58rem 0.19rem;
            }
            .total-business{
                position: absolute;
                top: 1.16rem;
                left: 0.58rem;
                width: 9rem;
                margin-top: 0.1rem;
              display: flex;
                li{
                  flex: 1 0 2.9rem;;
                    list-style: none;
                    display: inline-block;
                    height:0.3rem;
                    box-sizing: border-box;
                    padding-left: 0.4rem;
                    color: #FFFFFF;
                    .count{
                        width:0.27rem;
                        height:0.3rem;
                        font-size:0.24rem;
                        font-family:Impact;
                        font-weight:bold;
                        color:rgba(252,230,47,1);
                        display: inline-block;
                        line-height: 0.3rem;
                        padding-left: 0.1rem;
                    }
                }
                .complaint{
                    background: url('../../../assets/city-management/common-service/benefit-people/complaint.png') left center no-repeat;
                    background-size: 0.3rem 0.27rem;
                    margin-left: 0.2rem;
                    font-size: 0.18rem;
                }
                .consult{
                    background: url('../../../assets/city-management/common-service/benefit-people/consult.png') left center no-repeat;
                    background-size: 0.3rem 0.27rem;
                    font-size: 0.18rem;
                }
                .callout{
                    background: url('../../../assets/city-management/common-service/benefit-people/callout.png') left center no-repeat;
                    background-size: 0.3rem 0.27rem;
                    font-size: 0.18rem;
                }
            }
            .right-top-echarts{
                position: absolute;
                width: 9.48rem;
                height: 2.6rem;
                left: 0.70rem;
                top: 1.70rem;
                z-index: 2;
            }
        }
        .right-bottom-panle {
            position: absolute;
            width: 10.48rem;
            height: 5.93rem;
            right:0;
            top: 4.8rem;
            z-index: 99;
            background: url('../../../assets/city-management/common-service/benefit-people/background-big.png') no-repeat;
            background-size: 100% 5.93rem;
            .panle-titles {
                position: absolute;
                top: 0.34rem;
                left:0.34rem;
                font-size: 0.2rem;
                color: #FFFFFF;
                padding: 0.15rem 0.15rem;
                box-sizing: border-box;
                background: url('../../../assets/common/panle-title.png') no-repeat;
                background-size: 0.58rem 0.19rem;
                background-position-y: 100%;
            }
            .right-bottom-echarts{
                display: inline-block;
                position: absolute;
                width: 5rem;
                height: 2rem;
                left: 0.3rem;
                top: 1.2rem;
                z-index: 2;
            }
            .classify-title{
              position: absolute;
              left: 0.8rem;
              top: 1rem;
              font-size:0.2rem;
              font-family:Source Han Sans CN;
              font-weight:500;
              color:rgba(255,255,255,1);
              height:0.3rem;
              line-height: 0.3rem;
              background: url('../../../assets/city-management/common-service/benefit-people/point.png') left center no-repeat;
              padding-left: 0.4rem;
              background-size: 0.32rem 0.33rem;
            }
            .classify-title2{
              position: absolute;
              left: 5.8rem;
              top: 1rem;
              font-size:0.2rem;
              font-family:Source Han Sans CN;
              font-weight:500;
              color:rgba(255,255,255,1);
              height:0.3rem;
              line-height: 0.3rem;
              background: url('../../../assets/city-management/common-service/benefit-people/point.png') left center no-repeat;
              padding-left: 0.4rem;
              background-size: 0.32rem 0.33rem;
            }
            .classify-title3{
              position: absolute;
              left: 0.8rem;
              top: 3.2rem;
              font-size:0.2rem;
              font-family:Source Han Sans CN;
              font-weight:500;
              color:rgba(255,255,255,1);
              height:0.3rem;
              line-height: 0.3rem;
              background: url('../../../assets/city-management/common-service/benefit-people/point.png') left center no-repeat;
              padding-left: 0.4rem;
              background-size: 0.32rem 0.33rem;
            }
            .classify-title4{
              position: absolute;
              left: 5.8rem;
              top: 3.2rem;
              font-size:0.2rem;
              font-family:Source Han Sans CN;
              font-weight:500;
              color:rgba(255,255,255,1);
              height:0.3rem;
              line-height: 0.3rem;
              background: url('../../../assets/city-management/common-service/benefit-people/point.png') left center no-repeat;
              padding-left: 0.4rem;
              background-size: 0.32rem 0.33rem;
            }
            .classify-allnum{
              position: absolute;
              text-align: center;
              left: 1.4rem;
              top: 1.6rem;
              p{
                margin-bottom: .05rem;
                font-size: .26rem;
                letter-spacing: 0.01rem;
                font-weight: bold;
                color: #fff;
                font-family: Impact;
                background-image: -webkit-linear-gradient(bottom, #F9FBFF, #57D2FF);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
              span:nth-child(1){
                display:block;
                font-size: .20rem;
                font-weight: bold;
                font-style: italic;
                color: #DFE2FD;
              }
              span:nth-child(2){
                display:block;
                font-size: .16rem;
                font-style: italic;
                color: #DFE2FD;
                opacity: 0.6;
              }
            }
            .classify-allnum2{
              position: absolute;
              text-align: center;
              left: 6.4rem;
              top: 1.6rem;
              p{
                margin-bottom: .05rem;
                font-size: .26rem;
                letter-spacing: 0.01rem;
                font-weight: bold;
                color: #fff;
                font-family: Impact;
                background-image: -webkit-linear-gradient(bottom, #F9FBFF, #57D2FF);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
              span:nth-child(1){
                display:block;
                font-size: .20rem;
                font-weight: bold;
                font-style: italic;
                color: #DFE2FD;
              }
              span:nth-child(2){
                display:block;
                font-size: .16rem;
                font-style: italic;
                color: #DFE2FD;
                opacity: 0.6;
              }
            }
            .classify-allnum3{
              position: absolute;
              text-align: center;
              left: 1.4rem;
              top: 4.1rem;
              p{
                margin-bottom: .05rem;
                font-size: .26rem;
                letter-spacing: 0.01rem;
                font-weight: bold;
                color: #fff;
                font-family: Impact;
                background-image: -webkit-linear-gradient(bottom, #F9FBFF, #57D2FF);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
              span:nth-child(1){
                display:block;
                font-size: .20rem;
                font-weight: bold;
                font-style: italic;
                color: #DFE2FD;
              }
              span:nth-child(2){
                display:block;
                font-size: .16rem;
                font-style: italic;
                color: #DFE2FD;
                opacity: 0.6;
              }
            }
            .classify-allnum4{
              position: absolute;
              text-align: center;
              left: 6.4rem;
              top: 4.1rem;
              p{
                margin-bottom: .05rem;
                font-size: .26rem;
                letter-spacing: 0.01rem;
                font-weight: bold;
                color: #fff;
                font-family: Impact;
                background-image: -webkit-linear-gradient(bottom, #F9FBFF, #57D2FF);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
              span:nth-child(1){
                display:block;
                font-size: .20rem;
                font-weight: bold;
                font-style: italic;
                color: #DFE2FD;
              }
              span:nth-child(2){
                display:block;
                font-size: .16rem;
                font-style: italic;
                color: #DFE2FD;
                opacity: 0.6;
              }
            }
            .right-bottom-echarts2{
                display: inline-block;
                position: absolute;
                width: 5rem;
                height: 2rem;
                left: 0.3rem;
                top: 3.5rem;
                z-index: 2;
            }
            .right-bottom-echarts3{
                display: inline-block;
                position: absolute;
                width: 5rem;
                height: 2rem;
                left: 5.2rem;
                top: 1.2rem;
                z-index: 2;
            }
            .right-bottom-echarts4{
                display: inline-block;
                position: absolute;
                width: 5rem;
                height: 2rem;
                left: 5.2rem;
                top: 3.5rem;
                z-index: 2;
            }
        }
        .popfail{
          position: absolute;
          left: 11.57rem;
          top: 1.73rem;
          z-index: 999;
          #popwindow{
            width: 4.73rem;
            height: 3.39rem;
            background: url('../../../assets/common/popfailbg.png') center center no-repeat;
            background-size: 4.73rem 3.39rem;
            position: relative;
            .title{
              font-size:0.21rem;
              font-family:Source Han Sans CN;
              font-weight:bold;
              color:rgba(255,255,255,1);
              position: absolute;
              top: 0.2rem;
              left: 0.3rem;
            }
            img{
              width: 0.26rem;
              height: 0.26rem;
              position: absolute;
              right: 0.2rem;
              top: 0.2rem;
              z-index: 999;
            }
            #popfail{
              width: 4.3rem;
              height: 2.8rem;
              position: absolute;
              top: 0.3rem;
              left: 0.3rem;
            }
          }
        }
        .popQuxian{
          position: absolute;
          left: 14.57rem;
          top: 1.73rem;
          z-index: 999;
           #popwindow1{
            width: 6.93rem;
            height: 3.6rem;
            background: url('../../../assets/common/pop-bg.png') center center;
            background-size: 6.93rem 3.6rem;
            position: relative;
            .title{
              font-size:0.21rem;
              font-family:Source Han Sans CN;
              font-weight:bold;
              color:rgba(255,255,255,1);
              position: absolute;
              top: 0.2rem;
              left: 0.3rem;
            }
            img{
              width: 0.26rem;
              height: 0.26rem;
              position: absolute;
              right: 0.2rem;
              top: 0.2rem;
              z-index: 999;
            }
            #popChart1{
              width: 6.93rem;
              height: 2.8rem;
              position: absolute;
              top: 0.5rem;
            }
          }
        }
        .popYinhang{
          position: absolute;
          left: 21.7rem;
          top: 1.73rem;
          z-index: 999;
          #popwindow2{
            width: 6.93rem;
            height: 3.6rem;
            background: url('../../../assets/common/pop-bg.png') center center;
            background-size: 6.93rem 3.6rem;
            position: relative;
            .title{
              font-size:0.21rem;
              font-family:Source Han Sans CN;
              font-weight:bold;
              color:rgba(255,255,255,1);
              position: absolute;
              top: 0.2rem;
              left: 0.3rem;
            }
            img{
              width: 0.26rem;
              height: 0.26rem;
              position: absolute;
              right: 0.2rem;
              top: 0.2rem;
              z-index: 999;
            }
            #popChart2{
              width: 6.93rem;
              height: 2.8rem;
              position: absolute;
              top: 0.5rem;
            }
          }
        }
        .popBumen{
          position: absolute;
          left: 21.7rem;
          top: 5.66rem;
          z-index: 999;
          #popwindow3{
            width: 6.93rem;
            height: 3.6rem;
            background: url('../../../assets/common/pop-bg.png') center center;
            background-size: 6.93rem 3.6rem;
            position: relative;
            .title{
              font-size:0.21rem;
              font-family:Source Han Sans CN;
              font-weight:bold;
              color:rgba(255,255,255,1);
              position: absolute;
              top: 0.2rem;
              left: 0.3rem;
            }
            img{
              width: 0.26rem;
              height: 0.26rem;
              position: absolute;
              right: 0.2rem;
              top: 0.2rem;
              z-index: 999;
            }
            #popChart3{
              width: 6.93rem;
              height: 2.8rem;
              position: absolute;
              top: 0.5rem;
            }
          }
        }
        .popXiangmu{
          position: absolute;
          left: 14.57rem;
          top: 5.66rem;
          z-index: 999;
          #popwindow4{
            width: 6.93rem;
            height: 3.6rem;
            background: url('../../../assets/common/pop-bg.png') center center;
            background-size: 6.93rem 3.6rem;
            position: relative;
            .title{
              font-size:0.21rem;
              font-family:Source Han Sans CN;
              font-weight:bold;
              color:rgba(255,255,255,1);
              position: absolute;
              top: 0.2rem;
              left: 0.3rem;
            }
            img{
              width: 0.26rem;
              height: 0.26rem;
              position: absolute;
              right: 0.2rem;
              top: 0.2rem;
              z-index: 999;
            }
            #popChart4{
              width: 6.93rem;
              height: 2.8rem;
              position: absolute;
              top: 0.5rem;
            }
          }
        }
         .zone-maker {
            position: absolute;
             .maker-img {
                display: block;
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
              width: 3rem;
              padding-bottom: 0.3rem;
              padding-top: 0.2rem;
              z-index: 2;
              background: url('../../../assets/common/win-info-icon-02.png') center no-repeat;
              background-size: 100% 100%;
              overflow: hidden;
              box-sizing: border-box;
              h3 {
                margin: 0.15rem 0 0.15rem 0;
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
       }
  }
  /*.hover-div{*/
  /*}*/
</style>
