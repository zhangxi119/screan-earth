<template>
  <div class="benefit-people-container">
      <div class="header-bg">惠民惠农</div>
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
          <div class="panle-titles">补助资金总体情况</div>
          <ul class="panle-top">
              <li>
                  <p class="total-amount">发放总金额</p>
                  <div class="unit">
                      <span class="content">{{overallSituationMap.moneySum}}</span>万元
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
          <div class="bottom-panle">
            <div class="panle-titles" style="top:0.5rem;">补助资金年度发放情况</div>
            <ul class="grant">
                <li>
                    <p class="grant-title">{{yearPayment.year}}计划发放</p>
                    <div class="grant-statistics">
                        <div class="left">
                            <p class="allmoney">总金额（万元）</p>
                            <p class="allcount">{{yearPayment.shouldPay}}</p>
                        </div>
                        <div class="right">
                            <p class="allmoney">人数(万人）</p>
                            <p class="allcount2">{{yearPayment.shouldPeople}}</p>
                        </div>
                    </div>
                </li>
                 <li>
                    <p class="grant-title">{{yearPayment.year}}实际发放</p>
                    <div class="grant-statistics">
                        <div class="left">
                            <p class="allmoney">总金额（万元）</p>
                            <p class="allcount">{{yearPayment.actualPay}}</p>
                        </div>
                        <div class="right">
                            <p class="allmoney">人数(万人）</p>
                            <p class="allcount2">{{yearPayment.actualPeople}}</p>
                        </div>
                    </div>
                </li>
                 <li>
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
                </li>
            </ul>
          </div>
      </div>
      <div class="left-bottom-panle">
          <div class="panle-titles">补助资金发放情况</div>
          <ul class="total-business">
              <li class="sub">
                  <span>补贴项目资金发放总额占比</span></li>
              <li class="grant"><span>业务部门发放总金额</span></li>
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
          <div class="panle-titles2">补贴资金发放失败情况分析</div>
          <div class="panle-titles3">业务部门补贴享受人数 TOP3</div>
          <div class="panle-titles4">补贴项目享受人数 TOP3</div>
          <ul id="depart-sub-num">
              <li style="width:100%;height:0.4rem" v-for="item in classTop3List" :key="item.className">{{item.className}}<span class="number">{{item.peopleNum}}人</span></li>
          </ul>
          <ul class="proj-sub-num">
              <li style="width:100%;height:0.4rem" v-for="item in projectTop3List" :key="item.projectName">{{item.projectName}}<span class="number">{{item.peopleNum}}人</span></li>
          </ul>
      </div>
      <div class="right-top-panle">
          <div class="panle-titles">业务受理情况</div>
          <ul class="total-business" style="left: 1rem;">
              <li class="complaint">
                  <span>投诉受理总数</span><span class="count">{{businessNum}}</span></li>
              <li class="consult"><span>咨询解答总数</span><span class="count">{{consultantNum}}</span></li>
              <li class="callout"><span>电话呼出总数</span><span class="count">{{phoneNum}}</span></li>
          </ul>
          <div id="right-top-echarts" class="right-top-echarts"></div>
      </div>
      <div class="right-bottom-panle">
          <div class="panle-titles">电子监察情况</div>
          <div id="right-bottom-echarts" class="right-bottom-echarts">
          </div>
          <div class="classify-allnum">
              <p>{{count1}}</p>
              <div>
                <span>区县预警</span>
                <span>(次)</span>
              </div>
            </div>
          <div id="right-bottom-echarts2" class="right-bottom-echarts2"></div>
          <div class="classify-allnum2">
              <p>{{count2}}</p>
              <div>
                <span>银行预警</span>
                <span>(次)</span>
              </div>
            </div>
          <div id="right-bottom-echarts3" class="right-bottom-echarts3"></div>
          <div class="classify-allnum3">
              <p>{{count3}}</p>
              <div>
                <span>项目预警</span>
                <span>(次)</span>
              </div>
            </div>
          <div id="right-bottom-echarts4" class="right-bottom-echarts4"></div>
          <div class="classify-allnum4">
              <p>{{count4}}</p>
              <div>
                <span>部门预警</span>
                <span>(次)</span>
              </div>
            </div>
      </div>
      <!-- 弹窗 -->
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
  </div>
</template>

<script>
import echarts from 'echarts'
import API from '@/api/city-management/common-service.js'
import option from '@/echarts-data/city-management/common-service/benefit-people/right-echarts-01.js'
import option1 from '@/echarts-data/city-management/common-service/benefit-people/right-echarts-02.js'
import option2 from '@/echarts-data/city-management/common-service/benefit-people/right-echarts-03.js'
import option3 from '@/echarts-data/city-management/common-service/benefit-people/right-echarts-04.js'
import option4 from '@/echarts-data/city-management/common-service/benefit-people/right-echarts-05.js'
import option5 from '@/echarts-data/city-management/common-service/benefit-people/left-echarts-01.js'
import option6 from '@/echarts-data/city-management/common-service/benefit-people/left-echarts-02.js'
import context from '@/echarts-data/city-management/common-service/benefit-people/percentColor.js'
import popQuxianEcharts from '@/echarts-data/city-management/common-service/benefit-people/pop-quxian-charts.js'
import popYinhangEcharts from '@/echarts-data/city-management/common-service/benefit-people/pop-yinhang-charts.js'
import popBumenEcharts from '@/echarts-data/city-management/common-service/benefit-people/pop-bumen-charts.js'
import popXiangmuEcharts from '@/echarts-data/city-management/common-service/benefit-people/pop-xiangmu-charts.js'
import makerComponent from '@/components/maker-component.vue'
import menuList from '@/components/menu.vue'
export default {
  components: {makerComponent, menuList},
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
      showPopQuxian: false,
      showPopYinhang: false,
      showPopBumen: false,
      showPopXiangmu: false
    }
  },
  mounted () {
    this.initOverRallSituation()
    this.initBusinessAccepted()
    this.initEpolice()
    this.initSubFundSituation()
    this.initDetailsClass()
  },
  methods: {
    addMakers () {
      var makersPoor = [{
        id: 'poor',
        lon: 103.74777714303536, // 经度
        lat: 29.59764277605045 // 纬度
      }]
      this.poor = true
      window._m.addMakers(makersPoor)
      // 地图点击事件
      window._m.click(() => {
        // this.isRemove = !isRemove
      }, function () {

      })
    },
    // 部门基本信息（中间地图）
    initDetailsClass () {
      API.detailsClass(this, {}).then(resp => {
        let res = resp.data.data
        let data = res.detailsClassMap.districtDetailsList
        let tempArr = []
        data.forEach((item, index) => {
          item.detailsList.forEach((ite, i) => {
            let temp = {district: ite.address, showTextFlag: false}
            tempArr.push(Object.assign(temp, ite))
          })
        })
        tempArr.forEach((item, index) => {
          Object.assign(item, {id: 'ed-maker' + (index + 1)})
        })
        this.makersDatas = tempArr
        window._m.addMakers(this.makersDatas)
      }).catch(err => {
        console.log(err)
      })
    },
    // 补助资金总体情况 & 补助资金年度发放情况左上
    initOverRallSituation () {
      API.overallSituation(this, {}).then(resp => {
        let res = resp.data.data
        this.overallSituationMap = res.overallSituationMap
        res.yearPaymentMap.shouldPay = (res.yearPaymentMap.shouldPay / 10000).toFixed(2)
        res.yearPaymentMap.actualPay = (res.yearPaymentMap.actualPay / 10000).toFixed(2)
        res.yearPaymentMap.shouldPeople = (res.yearPaymentMap.shouldPeople / 10000).toFixed(2)
        res.yearPaymentMap.actualPeople = (res.yearPaymentMap.actualPeople / 10000).toFixed(2)
        res.yearPaymentMap.unPay = (res.yearPaymentMap.unPay / 10000).toFixed(2)
        res.yearPaymentMap.unPeople = (res.yearPaymentMap.unPeople / 10000).toFixed(2)
        this.yearPayment = res.yearPaymentMap
      }).catch(err => {
        console.log(err)
      })
    },
    // 业务受理情况右上
    initBusinessAccepted () {
      API.businessAccepted(this, {}).then(resp => {
        let res = resp.data.data.businessAcceptedMap
        echarts.init(document.getElementById('right-top-echarts')).setOption(option(res))
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
            value: item.money
          })
        })
        // let datas = [{name: '2', value: 20}, {name: '3', value: 50}]
        console.log(this.classRateList)
        context.init(this.classRateList)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    .benefit-people-container{
        position: absolute;
        overflow: hidden;
        background:#000;
        .header-bg{
            position: absolute;
            width: 20.40rem;
            height: 1.80rem;
            line-height: 1.20rem;
            font-family: simhei;
            text-align: center;
            color: #FFFFFF;
            font-size: 0.45rem;
            background: url('../../../assets/common/head-bg.png') no-repeat;
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
                font-size: 0.24rem;
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
                        width: 3rem;
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
                          background-size: 3rem 0.8rem;
                            .left{
                                display: inline-block;
                                height: 0.908rem;
                                width: 1.5rem;
                                margin-top: 0.1rem;
                                text-align: center;
                                .allmoney{
                                    height:0.35rem;
                                    font-size:0.17rem;
                                    font-family:Source Han Sans CN;
                                    font-weight:500;
                                    color:#8cf3f6;
                                    opacity:1;
                                    border-right:0.01rem dashed;
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
                font-size: 0.24rem;
                color: #FFFFFF;
                padding: 0.15rem 0.15rem;
                box-sizing: border-box;
                background: url('../../../assets/common/panle-title.png') no-repeat;
                background-size: 0.58rem 0.19rem;
                background-position-y: 100%;
            }
            .panle-titles2 {
                position: absolute;
                top: 3.3rem;
                left:0.34rem;
                font-size: 0.24rem;
                color: #FFFFFF;
                padding: 0.15rem 0.15rem;
                box-sizing: border-box;
                background: url('../../../assets/common/panle-title.png') no-repeat;
                background-size: 0.58rem 0.19rem;
                background-position-y: 100%;
            }
            .panle-titles3 {
                position: absolute;
                top: 3.3rem;
                left:3.8rem;
                font-size: 0.24rem;
                color: #FFFFFF;
                padding: 0.15rem 0.15rem;
                box-sizing: border-box;
                background: url('../../../assets/common/panle-title.png') no-repeat;
                background-size: 0.58rem 0.19rem;
                background-position-y: 100%;
            }
            .panle-titles4 {
                position: absolute;
                top: 3.3rem;
                left:7.2rem;
                font-size: 0.24rem;
                color: #FFFFFF;
                padding: 0.15rem 0.15rem;
                box-sizing: border-box;
                background: url('../../../assets/common/panle-title.png') no-repeat;
                background-size: 0.58rem 0.19rem;
                background-position-y: 100%;
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
                  width:2.9rem;
                  height:0.3rem;
                  box-sizing: border-box;
                  padding-left: 0.4rem;
                  color: #EFF8FE;
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
                margin-left: 0.22rem;
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
                margin-left: 0.13rem;
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
                font-size: 0.24rem;
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
                li{
                    list-style: none;
                    display: inline-block;
                    width:2.9rem;
                    height:0.3rem;
                    box-sizing: border-box;
                    padding-left: 0.4rem;
                    color: #EFF8FE;
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
                font-size: 0.24rem;
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
                left: 0.8rem;
                top: 1rem;
                z-index: 2;
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
                left: 0.8rem;
                top: 3.5rem;
                z-index: 2;
            }
            .right-bottom-echarts3{
                display: inline-block;
                position: absolute;
                width: 5rem;
                height: 2rem;
                left: 5.8rem;
                top: 1rem;
                z-index: 2;
            }
            .right-bottom-echarts4{
                display: inline-block;
                position: absolute;
                width: 5rem;
                height: 2rem;
                left: 5.8rem;
                top: 3.5rem;
                z-index: 2;
            }
        }
        .maker-box-poor {
          position: absolute;
          z-index: 200;
          text-align: center;
          .g-maker-text {
            padding-left: 0.35rem;
            box-sizing: border-box;
            position: absolute;
            left: 0;
            top: 0;
            width: 2.72rem;
            height: 2.85rem;
            background: url('../../../assets/city-management/common-service/education-resource/small-kuang.png') center no-repeat;
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
                line-height: 0.25rem;
              }
              .g-address {
                width: 1.95rem;
                line-height: 0.25rem;
                float: left;
              }
            }
            .makerItem{
              .line {
              width: 0.04rem;
              height: 0.64rem;
              background: #ffffff;
              margin-left: 0.44rem;
              margin-top: -0.23rem;
              }
              .dot {
                width:0.19rem;
                height:0.13rem;
                background:rgba(213,96,44,1);
                opacity:0.9;
                border-radius:50%;
                margin: auto;
              }
              .cricle {
                width:0.75rem;
                height:0.38rem;
                border:0.02rem solid rgba(213,96,44,1);
                opacity:0.3;
                margin:-0.25rem auto 0 auto;
                border-radius:50%;
                box-shadow:inset 0 0 0.05rem 1 rgba(213,96,44,1);
                animation: warn 1s infinite;
                .inner-cricle {
                  width:0.36rem;
                  height:0.20rem;
                  border:0.02rem solid rgba(213,96,44,1);
                  border-radius:50%;
                  margin:0.05rem auto;
                }
              }
                @keyframes warn {
                0% {
                    transform: scale(0.4);
                    opacity: 0.0;
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
              height: 3.4rem;
              position: absolute;
              top: 0.2rem;
            }
          }
        }
        .popYinhang{
          position: absolute;
          left: 21.7rem;
          top: 5.66rem;
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
              height: 3.4rem;
              position: absolute;
              top: 0.2rem;
            }
          }
        }
        .popBumen{
          position: absolute;
          left: 21.7rem;
          top: 1.73rem;
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
              height: 3.4rem;
              position: absolute;
              top: 0.2rem;
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
              height: 3.4rem;
              position: absolute;
              top: 0.2rem;
            }
          }
        }
  }
</style>
