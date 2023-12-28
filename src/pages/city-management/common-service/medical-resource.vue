<!--
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-02-26 11:14:11
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-22 16:31:49
 -->
<template>
    <div class="medical-resource-container">
      <head-component name="卫生健康"></head-component>
      <div class="g-menu-box">
        <menu-list></menu-list>
      </div>
      <div class="natural-panel" v-show="makerFlag">
        <div class="user-dos" @click="panelBig = !panelBig">
          <div class="legend">图例</div>
          <div class="icon"></div>
        </div>
        <heart-panel
          v-if="panelBig"
          :list="[]"
          @changeActive="handlePanelActive">
          <div class="g-panel-right" slot="panel-content">
            <p>项目类型</p>
            <div v-for="(item,index) in panelList" :key="index">
              <img :src="item.icon" />
              <p :title="item.name">{{item.name}}</p>
              <div class="check">
                <input
                  @change.stop="handleSelect"
                  type="checkbox"
                  :id="'ck'+index"
                  v-model="checkedValue"
                  :value="item.id"
                  class="check-box"/>
                <label :for="'ck'+index" class="sy-check"></label>
              </div>
            </div>
          </div>
        </heart-panel>
        <div class="small-icon" v-else>
          <div v-for="(item,index) in panelList" :key="index">
            <!-- <img :src="require('@/assets/common/icon'+item.index+'.png')" /> -->
            <img :src="item.icon" />
          </div>
        </div>
      </div>
      <!-- 区域点位maker -->
    <area-makers ref="medical" :type="2" :dataList="areaInfoData"></area-makers>
    <!-- 区域点位maker-end -->
      <!-- maker -->
      <maker-components :mLeft="'-0.5rem'" :mTop="'-2.18rem'" v-show="makerFlag" v-for="(item, index) in makerDatas" :key="index" :makerData="item">
          <div slot="maker">
            <div class="g-maker-num">{{item.medicalBedNum}} 张</div>
            <div class="g-img-box" @click="hiddenText(item, index)">
              <img class="big-img" :src="item.fileid01" alt="" />
              <img class="small-img" :src="item.fileid02" alt="" />
            </div>
          </div>
          <img v-show="item.showTextFlag" slot="img"  src="../../../assets/common/event-icon.png" alt="" class="line2" />
          <div slot="text" class="g-maker-text" v-show="item.showTextFlag">
            <h3>{{item.medicalName}}</h3>
            <div class="g-text-item"><label>咨询电话：</label><span>{{item.phone}}</span></div>
            <div class="g-text-item"><label>地址:</label><span>{{item.address}}</span></div>
            <div class="g-text-item"><label>等级：</label><span>{{item.level}}</span></div>
            <!-- <div class="g-text-item">学生人数：<span>{{item.studentNum}}</span>人</div>
            <div class="g-text-item">咨询电话：<span>{{item.phone}}</span></div>
            <div class="g-text-item"><label>地址：</label><span>{{item.address}}</span></div> -->
          </div>
      </maker-components>
      <!-- maker-end -->
      <!-- 120弹框 -->
      <div class="model-120" v-show="mode120">
        <div @click="mode120 = false" class="g-model-close"></div>
        <h3>120呼叫数量：{{modeName120}}</h3>
        <div class="g-model-title">呼叫原因TOP8</div>
        <div class="g-model-echart" id="model-120">

        </div>
      </div>
      <!-- 120弹框-end -->
       <div class="left-top-panle">
         <div class="panle-title hover-color">医疗资源情况<span class="global-data-title">（截至2019年）</span></div>
         <div class="top-title">
           <div class="tab-btn" v-for="(item, index) in leftTabs" :key="index" :data-type="item.type" :class="item.type === topType? 'tab-btn-selected' : ''" @click="onSwitchTab">{{item.name}}</div>
         </div>
         <div class="top-box-wrapper" v-show="topType === '0'">
           <div>
             <div id="top-echarts-01" class="top-echarts-01"></div>
           </div>
           <img class="bottom-chart" src="@/assets/city-management/common-service/medical-resource/bottom-chart.png"/>
           <div class="top-echarts-02">
             <ul class="top-ul">
               <li class="top-li">医疗机构总数：
                 <span class="top-li-num">{{peopleHealth.medicalSum}}</span>家
               </li>
               <li class="top-li">医疗人员总数：
                 <span class="top-li-num">{{peopleHealth.peopleSum}}</span>人
               </li>
               <li class="top-li">床位总数：
                 <span class="top-li-num">{{peopleHealth.bedSum}}</span>张
               </li>
               <li class="top-li">每千人口卫生技术人员数：
                 <span class="top-li-num">{{peopleHealth.peopleRate}}</span>个
               </li>
               <li class="top-li">每千人口床位数：
                 <span class="top-li-num">{{peopleHealth.bedRate}}</span>张
               </li>
             </ul>

           </div>
         </div>
         <div class="top-box-wrapper" v-show="topType === '1'">
           <div class="top-organization-left">
             <div class="organization-item-box" v-for="(item, index) in organizationList" :key="index">
               <div class="organization-item-box-text">
                 <span class="organization-item-text-1">{{item.name}}</span>
                 <span class="organization-item-text-2">{{item.num}}家</span>
               </div>
               <div class="organization-item-box-img-bg">
                 <div class="organization-item-box-img-percent" :style="{width:item.percent}"></div>
               </div>
             </div>
           </div>
           <div class="top-organization-right">
             <div class="top-organization-total">
               <img src="../../../assets/city-management/common-service/medical-resource/organization-icon.png"/>
               <div class="top-organization-total-detail">
                 <div class="top-organization-total-num">{{organizationList[0].total}}<span class="total-unit">家</span></div>
                 <div class="top-organization-total-text">医疗机构总数</div>
               </div>
             </div>
             <div id="organization-chart" class="top-organization-chart"></div>
           </div>
         </div>
         <div class="top-box-wrapper" v-show="topType === '2'">
           <div>
             <div class="g-small-title">
              <div class="g-small-tip"></div>医疗技术人员类型分布
             </div>
             <div class="g-small-title" style="left: 4.8rem;">
              <div class="g-small-tip"></div>医疗卫生人员区县分布情况
             </div>
             <div id="person-pie-chart" class="top-person-left"></div>
             <div id="person-bar-chart"  class="top-person-right"></div>
             <div class="person-bar-chart-legend">
               <div class="person-bar-chart-legend-item" v-for="(item, index) in personPieData" :key="index">
                 <div class="legend-icon" :style="{'background-color': color[index]}"></div>
                 <span>{{item.name}}&nbsp;{{item.value}}人</span>
               </div>
             </div>
           </div>
         </div>
         <div class="top-box-wrapper" v-show="topType === '3'">
           <div>
             <div id="bed-pie-chart" class="top-bed-left"></div>
             <div id="bed-bar-chart"  class="top-bed-right"></div>
           </div>
         </div>
       </div>
       <div class="left-bottom-panle">
         <div class="panle-title hover-color">医疗服务情况</div>
         <div class="tab-bar"><span @click="leftBottomSelect=0" :class="{'select':leftBottomSelect===0}">诊疗情况</span><span @click="leftBottomSelect=1" :class="{'select':leftBottomSelect===1}">出院情况</span><span @click="leftBottomSelect=2" :class="{'select':leftBottomSelect===2}">各时段120紧急呼叫数量</span></div>
         <div id="left-echarts-02" class="left-echarts-02"></div>
       </div>
       <div class="right-top-panle">
         <div class="panle-title hover-color">监管情况<span class="global-data-title">（截至2019年12月）</span></div>
         <div id="right-echarts-01" class="right-echarts-01"></div>
       </div>
       <div class="right-bottom-panle">
         <div class="panle-title hover-color">
           <span :class="!isAdminSelected ? 'bottom-title-unselected' : ''" @click="onChangeChat(false)">行政处罚情况</span>
           <span class="permission-title" :class="isAdminSelected ? 'bottom-title-unselected' : ''" @click="onChangeChat(true)">行政许可</span>
         </div>
         <div class="punish-box" v-show="!isAdminSelected">
           <div class="right-bottom-left">
             <div class="right-bottom-title hover-color"><img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>各区县处罚金额TOP8<span class="global-data-title">（截至2019年12月）</span></div>
             <div class="right-bottom-box">
               <div @mouseover="stopAnimate" @mouseleave="startAnimate"  class="right-bottom-inner-box" :class="{'anim':animate}">
                 <div class="item-li" v-for="(item,index) in items" :key="index">
                   <div class="number" :class="{'number-01':item.index===0,'number-02':item.index===1,'number-03':item.index===2}">
                     {{item.index+1}}
                   </div>
                   <div class="name">
                     {{item.name}}
                   </div>
                   <div class="line" >
                     <div class="line-inner" :style="index === 0 ? 'width: 100%;' : 'width:' + (item.rate / items[0].rate * 100).toFixed(1) + '%;'"></div>
                   </div>
                   <div class="value">{{(item.value / 10000).toFixed(0)}}万元</div>
                 </div>
               </div>
             </div>
           </div>
           <div class="right-bottom-right">
             <div class="right-bottom-title hover-color"><img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>各区县处罚案件数<span class="global-data-title">（截至2019年12月）</span></div>
             <div id="right-bottom-charts" class="right-bottom-charts"></div>
           </div>
         </div>
         <div class="permission-box" v-show="isAdminSelected">
           <div class="permission-box-left">
             <div class="right-bottom-title hover-color"><img src="@/assets/city-management/common-service/medical-resource/top-title.png"/>办理情况分析</div>
             <div id="permission-line-chart" class="permission-line-chart"></div>
           </div>
           <div id="permission-pie-chart" class="permission-box-right"></div>
         </div>
       </div>
       <!-- <div class="left-list">
          <div class="left-list-li" v-for="(item,index) in leftList" :key="index">
            <div class="name">{{item.name}}</div>
            <div class="number">{{item.value}}</div>
          </div>
       </div> -->
       <div class="maker-box" style="display: none;">
           <div class="name">医疗医疗机构医疗机构机构</div>
           <img src="@/assets/city-management/common-service/medical-resource/type01.png" alt="">
           <div class="line"></div>
           <div class="dot"></div>
           <div class="cricle">
             <div class="inner-cricle"></div>
           </div>
       </div>
    </div>
</template>
<script>
import API from '@/api/city-management/common-service'
import { imgPath } from '@/utils/BasePath.js'
import headComponent from '@/components/head-component.vue'
import options from '@/echarts-data/city-management/common-service/medical-resource/top-echarts-01.js'
import options02 from '@/echarts-data/city-management/common-service/medical-resource/top-echarts-02.js'
import options03 from '@/echarts-data/city-management/common-service/medical-resource/right-echarts-01.js'
import options04 from '@/echarts-data/city-management/common-service/medical-resource/right-echarts-02.js'
import organizationOption from '@/echarts-data/city-management/common-service/medical-resource/organizationPieEchart.js'
import personPieOption from '@/echarts-data/city-management/common-service/medical-resource/personPieEchart.js'
import personBarOption from '@/echarts-data/city-management/common-service/medical-resource/personBarEchart.js'
import bedPieOption from '@/echarts-data/city-management/common-service/medical-resource/bedPieEchart.js'
import bedBarOption from '@/echarts-data/city-management/common-service/medical-resource/bedBarEchart.js'
import permissionPieOption from '@/echarts-data/city-management/common-service/medical-resource/permissionPieEchart.js'
import permissionLineOption from '@/echarts-data/city-management/common-service/medical-resource/permissionLineEchart.js'
import model120 from '@/echarts-data/city-management/common-service/medical-resource/120model.js'
import echarts from 'echarts'
import menuList from '@/components/menu.vue'
import heartPanel from '@/components/heart-panel.vue'
import zonePositions from '../../../../static/CesiumAssets/js/zonePositions'
import makerComponents from '@/components/maker-component.vue'
import areaMakers from './area-makers.vue'
export default {
  components: {menuList, heartPanel, makerComponents, headComponent, areaMakers},
  data () {
    return {
      modeName120: '',
      animate: true,
      timer: null,
      leftList: [],
      hosData: null,
      treaData: null,
      health120Data: null,
      leftBottomSelect: 0,
      peopleHealth: {},
      items: [
        {
          index: 0,
          name: '峨眉山市',
          value: 55,
          rate: 95
        },
        {
          index: 1,
          name: '市中区',
          value: 55,
          rate: 80
        }, {
          index: 2,
          name: '沙湾区',
          value: 55,
          rate: 70
        },
        {
          index: 3,
          name: '五通桥区',
          value: 55,
          rate: 60
        }, {
          index: 4,
          name: '金口河区',
          value: 55,
          rate: 50
        },
        {
          index: 5,
          name: '犍为县',
          value: 55,
          rate: 40
        }, {
          index: 6,
          name: '井研县',
          value: 55,
          rate: 30
        },
        {
          index: 7,
          name: '夹江县',
          value: 55,
          rate: 20
        },
        {
          index: 8,
          name: '沐川县',
          value: 55,
          rate: 15
        }, {
          index: 9,
          name: '峨边县',
          value: 55,
          rate: 15
        },
        {
          index: 10,
          name: '马边县',
          value: 55,
          rate: 10
        }
      ],
      topType: '0', // 左上角button切换对应type
      isAdminSelected: false,
      leftTabs: [
        {
          name: '总体情况',
          type: '0'
        },
        {
          name: '医疗机构',
          type: '1'
        },
        {
          name: '医疗人员',
          type: '2'
        },
        {
          name: '床位',
          type: '3'
        }
      ],
      organizationList: [
        {
          name: '诊所',
          num: '667',
          percent: '10%'
        },
        {
          name: '诊所',
          num: '667',
          percent: '10%'
        },
        {
          name: '诊所',
          num: '667',
          percent: '10%'
        },
        {
          name: '诊所',
          num: '667',
          percent: '10%'
        },
        {
          name: '诊所',
          num: '667',
          percent: '10%'
        },
        {
          name: '诊所',
          num: '667',
          percent: '10%'
        },
        {
          name: '诊所',
          num: '667',
          percent: '10%'
        },
        {
          name: '诊所',
          num: '667',
          percent: '10%'
        },
        {
          name: '诊所',
          num: '667',
          percent: '10%'
        },
        {
          name: '诊所',
          num: '667',
          percent: '10%'
        }
      ],
      personPieData: [],
      color: [
        '#2266E4',
        '#64DEF8',
        '#6BE673',
        '#F9E659',
        '#E38031',
        '#4A1FE9'
      ],
      leftTopData: [
        {
          name: '总体情况',
          leftData: {
            xData: [],
            yData: []
          },
          rightData: {}
        }
      ],
      mode120: false,
      // 地图部分
      panelBig: false,
      panelList: [
        {name: '交通基础设施', index: 9, bigImg: '', icon: '', id: ''}
      ],
      mapDatas: [],
      checkedValue: [],
      areaName: '',
      makerDatas: [],
      makerFlag: false, // maker和图例控制
      areaInfoData: []
    }
  },
  watch: {
    leftBottomSelect (val) {
      if (val === 0 && this.treaData) {
        echarts.init(document.getElementById('left-echarts-02')).setOption(options02(this.treaData), true)
      }
      if (val === 1 && this.hosData) {
        echarts.init(document.getElementById('left-echarts-02')).setOption(options02(this.hosData), true)
      }
      if (val === 2 && this.health120Data) {
        let myEchart = echarts.init(document.getElementById('left-echarts-02'))
        myEchart.setOption(options02(this.health120Data, '2'), true)
        myEchart.on('click', (param) => {
          this.mode120 = true
          this.modeName120 = param.name
          this.get120Detail(param.dataIndex)
        })
      }
    }
  },
  mounted () {
    this.initData()
    this.getMapData()
    this.getAreaInfo()
  },
  methods: {
    // 地图区县总体情况
    getAreaInfo () {
      API.HEALTH_AREAMAP(this, {}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        this.areaInfoData = res.mapInfo
      }).catch(err => {
        console.log(err)
      })
    },
    initData () {
      API.OVER_ALL_SITUATION(this).then((res) => {
        if (res.status === 200) {
          let result = res.data.data.overallSituationMap
          console.log(result)
          this.leftList = [
            {
              name: '医疗机构总数',
              value: result.medicalSum
            },
            {
              name: '医院',
              value: result.hospitalNum
            }, {
              name: '卫生室',
              value: result.centerNum
            }, {
              name: '妇幼保健院',
              value: result.womenChildNum
            }, {
              name: '社区卫生服务中心',
              value: result.commuNum
            }, {
              name: '诊所',
              value: result.clinicNum
            }, {
              name: '卫生检察院',
              value: result.healthFinderNum
            }
          ]
        }
      }).catch((e) => {
        console.log(e)
      })
      // 医疗资源情况
      API.RESOURCE_SITUTION(this).then((res) => {
        if (res.status === 200) {
          let result = res.data.data
          let left1 = result.spreadSituationMap ? result.spreadSituationMap.medicalSpreadList : []
          let xData = []
          let yData = [[], [], []]
          left1.forEach((item, index) => {
            xData.push(item.district)
            yData[0].push(item.medicalNum) // 医疗机构数量
            yData[1].push(item.medicalPeoNum) // 医疗人员数量
            yData[2].push(item.bedNum) // 床位数
          })
          // 身体健康(总体情况)
          this.peopleHealth = result.resourcesOverAllMap
          echarts.init(document.getElementById('top-echarts-01')).setOption(options(result.spreadSituationMap.medicalSpreadList))
          // 医疗机构
          let tempArr = []
          let total = 0
          result.resourcesMedicalList.forEach(item => {
            total += item.num
          })
          result.resourcesMedicalList.forEach(item => {
            tempArr.push({name: item.medicalType, num: item.num, total: total, percent: (item.num / total * 100).toFixed(2) + '%'})
          })
          console.log(tempArr)
          this.organizationList = tempArr
          let organizationChart = echarts.init(document.getElementById('organization-chart'))
          organizationChart.setOption(organizationOption(result.medicalTypeNumList))
          // organizationChart.dispatchAction({
          //   type: 'highlight',
          //   seriesIndex: 0,
          //   dataIndex: 0
          // })
          // 医疗人员
          let personChart = echarts.init(document.getElementById('person-pie-chart'))
          personChart.setOption(personPieOption(result.holdCardNumList))
          personChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
          })
          result.holdCardNumList.forEach(item => {
            this.personPieData.push({name: item.cardType, value: item.num})
          })
          echarts.init(document.getElementById('person-bar-chart')).setOption(personBarOption(result.peopleSchoolNumList))
          // 床位
          let bedChart = echarts.init(document.getElementById('bed-pie-chart'))
          bedChart.setOption(bedPieOption(result.bedNumList))
          bedChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
          })
          echarts.init(document.getElementById('bed-bar-chart')).setOption(bedBarOption(result.districtsBedSpreadMap.bedSpreadList))
        }
      }).catch((e) => {
        console.log(e)
      })
      // 医疗服务情况
      API.SERVICE_SITUATION(this).then((res) => {
        if (res.status === 200) {
          let result = res.data.data
          let hospitalizedMap = result.hospitalizedMap
          let treatmentSituationMap = result.treatmentSituationMap
          let hData = []
          let tData = []
          hospitalizedMap.yearPeoleNumList.forEach((item) => {
            hData.push({
              name: item.medicalType,
              type: 'bar',
              stack: 'one',
              barWidth: 18 * window.$rem,
              data: item.peopleNumList
            })
          })
          treatmentSituationMap.treatmentList.forEach((item) => {
            tData.push({
              name: item.treatmentType,
              type: 'bar',
              stack: 'one',
              barWidth: 18 * window.$rem,
              data: item.yearTreatmentList
            })
          })
          this.hosData = {
            xdata: hospitalizedMap.yearList,
            data: hData
          }
          this.treaData = {
            xdata: treatmentSituationMap.yearList,
            data: tData
          }
          echarts.init(document.getElementById('left-echarts-02')).setOption(options02(this.treaData))
        }
      }).catch((e) => {
        console.log(e)
      })
      // 120列表
      API.HEALTH120LIST(this).then((res) => {
        if (res.status === 200) {
          let result = res.data.data.emergencyCallTimeList
          // let treatmentSituationMap = result.treatmentSituationMap
          let xData = []
          let sData = []
          let tempArr = result
          // result.forEach((item, index) => {
          //   tempArr.push(item.ws20001)
          //   sData.push({
          //     name: '呼叫数量',
          //     type: 'bar',
          //     stack: 'one',
          //     barWidth: 18 * window.$rem,
          //     data: item.sum
          //   })
          // })
          let tempArr2 = []
          for (let i = 0; i < tempArr.length; i += 2) {
            tempArr2.push(tempArr.slice(i, i + 2))
          }
          tempArr2.forEach(item => {
            // xData.push(item.join('-') + '点')
            xData.push(item[0].ws20001 + '-' + item[1].ws20001 + '点')
            sData.push({
              name: '呼叫数量',
              type: 'bar',
              value: Number(item[0].sum) + Number(item[1].sum),
              // stack: 'one',
              barWidth: 18 * window.$rem,
              data: Number(item[0].sum) + Number(item[1].sum)
            })
          })
          this.health120Data = {
            xdata: xData,
            data: sData
          }
        }
      }).catch((e) => {
        console.log(e)
      })
      // 监管情况
      API.EPOLICE(this).then((res) => {
        if (res.status === 200) {
          let result = res.data.data.epoliceMap.situationList
          let xdata = []
          let data = [
            {
              data: []
            },
            {
              data: []
            }, {
              data: []
            }
          ]
          result.forEach(d => {
            xdata.push(d.district)
            data[0].data.push(d.should)
            data[1].data.push(d.over)
            data[2].data.push(d.rate)
          })
          echarts.init(document.getElementById('right-echarts-01')).setOption(options03(xdata, data))
        }
      }).catch((e) => {
        console.log(e)
      })
      // 行政处罚情况 & 行政许可
      API.ADMINISTRATION_PASS(this).then((resV) => {
        let res = resV.data.data
        console.log(res)
        // 区县处罚金额
        let moneyArr = []
        let totalMoney = 0
        res.fineMap.situationList.forEach(item => {
          totalMoney += item.fine
        })
        res.fineMap.situationList.forEach((item, index) => {
          moneyArr.push({
            index: index,
            name: item.district,
            value: item.fine,
            rate: (item.fine / totalMoney * 100).toFixed(2)
          })
        })
        this.items = moneyArr
        // 区县处罚情况
        echarts.init(document.getElementById('right-bottom-charts')).setOption(options04(res.punishSituationMap.punishNumList))
        // 近一年办理行政许可分析
        // 左
        let lineChart = echarts.init(document.getElementById('permission-line-chart'))
        lineChart.setOption(permissionLineOption(res.yearLicenseNumList))
        lineChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: 1
        })
        // 右
        let pieChart = echarts.init(document.getElementById('permission-pie-chart'))

        let _licenseNumList = res.licenseNumList
        let licenseNumList = []
        let other = null
        for (let i = 0; i < _licenseNumList.length; i++) {
          let item = _licenseNumList[i]
          if (item.licenseType === '其他') {
            other = item
            continue
          } else {
            licenseNumList.push(item)
          }
        }

        licenseNumList.push(other)
        pieChart.setOption(permissionPieOption(licenseNumList))
      }).catch((e) => {
        console.log(e)
      })
    },
    // 点击120柱状图
    get120Detail (name) {
      API.HEALTH120DETAIL(this, {param: name}).then((resV) => {
        let res = resV.data.data
        echarts.init(document.getElementById('model-120')).setOption(model120(res.emergencyCallClickList), true)
      }).catch((e) => {
        console.log(e)
      })
    },
    // 地图操作 - start
    // 获取地图数据
    getMapData () {
      // 地图操作-开始
      // 获取图例
      API.MEDICAL_MAPPANEL(this).then((resV) => {
        let res = resV.data.data
        let temp = []
        res.generKeyboardList.forEach((item, index) => {
          temp.push({name: item.label, index: index, id: item.id, icon: imgPath + item.fileid03, bigImg: ''})
        })
        this.panelList = temp
      }).catch((e) => {
        console.log(e)
      })
      // 获取地图数据-加载区域热力图
      // for (let key in zonePositions) {
      //   window._m.createHeatZoneMap(key, 60)
      // }
      // 点击底图区域
      window._m.redirectDimenion((name) => {
        this.areaName = name
        this.checkedValue[0] = this.panelList[0].id
        this.makerDatas = []
        // this.makerFlag = true
        this.getMapAreaData(name, this.panelList[0].id)
        console.log(name, zonePositions[name])
        if (zonePositions[name]) {
          let position = zonePositions[name]
          window._m.flyToByMector(position)
        }
      })
      // 地图操作-结束
      // 医疗资源情况
    },
    // 点击图例
    handleSelect (e) {
      this.makerDatas = []
      if (this.checkedValue.length) {
        this.checkedValue.forEach(item => {
          this.getMapAreaData(this.areaName, item)
        })
      }
    },
    // 点击左大列表（无）
    handlePanelActive () {
    },
    // 点击地图请求区域数据
    getMapAreaData (name, id) {
      API.MEDICAL_MAPDETAIL(this, {district: name, id: id}).then((resV) => {
        let res = resV.data.data
        res.detailsMedicalList.forEach(item => {
          item.lan = Number(item.lan)
          item.lat = Number(item.lat)
          item.fileid01 = imgPath + item.fileid01
          item.fileid02 = imgPath + item.fileid02
        })
        this.makerDatas = this.makerDatas.concat(res.detailsMedicalList)
        let tempArr = []
        this.makerDatas.forEach((item, index) => {
          item.lon = Number(item.lon)
          item.lat = Number(item.lat)
          let temp = {id: 'ed-maker' + (index + 1), district: item.district, showTextFlag: false}
          tempArr.push(Object.assign(temp, item))
        })
        this.makerDatas = tempArr
        console.log(this.makerDatas)
        // this.makersDatas.forEach(item => {
        //   // 默认显示第一种类型
        //   item.fileId01 = imgPath + item.fileId01
        //   item.fileId02 = imgPath + item.fileId02
        //   item[this.panelList[0].name] = true
        // })
        if (tempArr.length === 0) {
          this.makerFlag = true
        }
        window._m.addMakers(tempArr, (type) => {
          if (type === 1) { // 三维
            this.makerFlag = true
            this.$refs.medical.makerFlag = false
          } else { // 二维
            this.makerFlag = false
            this.$refs.medical.makerFlag = true
          }
        })
      }).catch((e) => {
        console.log(e)
      })
    },
    hiddenText (item, index) {
      this.makerDatas.forEach((ite, i) => {
        if (index === i) {
          ite.showTextFlag = !ite.showTextFlag
        } else {
          ite.showTextFlag = false
        }
      })
    },
    // 地图操作 - end
    startAnimate () {
      // this.timer = setInterval(this.scroll, 3000)
    },
    stopAnimate () {
      // this.animate = false
      // clearInterval(this.timer)
    },
    scroll () {
      this.animate = true
      setTimeout(() => {
        this.items.push(this.items[0]) // 将数组的第一个元素添加到数组的
        this.items.shift() // 删除数组的第一个元素
        this.animate = false // margin-top 为0 的时候取消过渡动画，实现无缝滚动
      }, 3000)
    },
    onSwitchTab ($event) {
      let type = $event.target.dataset.type
      this.topType = type
      // this.initLeftTopEcharts()
    },
    onChangeChat (flag) {
      if (flag === this.isAdminSelected) {
        return
      }
      if (flag) {
        this.isAdminSelected = true
      } else {
        this.isAdminSelected = false
        this.$nextTick(() => {
          // echarts.init(document.getElementById('top-echarts-01')).setOption(options)
        })
      }
    }
  },
  beforeDestroy () {
    window._m.clear()
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
.medical-resource-container {
    position: absolute;
    background: #000;
    overflow: hidden;
    .g-menu-box {
      position: absolute;
      left: 11rem;
      top: 9rem;
      z-index: 100;
    }
    .g-small-title {
      position: absolute;
      left: 0.35rem;
      top: 1.3rem;
      padding-left: 0.3rem;
      margin-left: 0.27rem;
      display: inline-block;
      // margin: 0 auto;
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
    .tool-tip {
      background:rgba(0,18,55,0.4);
      border:0.02rem solid rgba(72,170,244,1);
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
    .model-120 {
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 99;
      padding-bottom: 0.25rem;
      transform: translate(-50%, -50%);
      background: url('../../../assets/common/120model.png') center no-repeat;
      background-size: 100% 100%;
      width: 6.24rem;
      font-size: 0;
      .g-model-close {
        position: absolute;
        right: 0.19rem;
        top: 0.19rem;
        width: 0.27rem;
        height: 0.27rem;
        background: url('../../../assets/common/natural-close.png') center no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
      }
      h3 {
        line-height: 0.24rem;
        width: 100%;
        margin: 0.53rem 0 0.23rem 0.27rem;
        font-size:0.24rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        color:rgba(255,255,255,1);
      }
      .g-model-title {
        position: relative;
        height: 0.33rem;
        line-height: 0.33rem;
        padding-left: 0.72rem;
        box-sizing: border-box;
        font-size:0.2rem;
        font-family:Source Han Sans CN;
        font-weight:500;
        color:rgba(255,255,255,1);
        &::after {
          content: '';
          display: inline-block;
          width: 0.32rem;
          height: 0.33rem;
          background: url('../../../assets/common/top-title.png') center no-repeat;
          background-size: 100% 100%;
          position: absolute;
          left: 0.4rem;
          top: 0;
        }
      }
      .g-model-echart {
        width: 6rem;
        height: 2.6rem;
      }
    }
    .natural-panel{
      position: absolute;
      bottom: .5rem;
      right: 10.8rem;
      overflow: hidden;
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
          background-size: auto 100%;
        }
        .tIcon {
          transform: rotate(180deg);
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
      .g-panel-right{
        padding: .2rem 0;
        position: absolute;
        top: .31rem;
        left: 1rem;
        width: 4.5rem;
        // height: 85%;
        height: 2.7rem;
        overflow-y: auto;
        overflow: -moz-scrollbars-none;
        > p {
          margin-bottom: .1rem;
          font-size: .17rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #fff;
          letter-spacing: 1px;
          margin-left: .3rem;
        }
        > div{
          position: relative;
          width: 33%;
          display: inline-block;
          text-align: center;
          margin-bottom: .1rem;
          img {
            width: .5rem;
            height: .5rem;
          }
          p{
            font-size: .16rem;
            font-weight: bold;
            font-style: italic;
            color: #9BE9FF;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .check{
            position: absolute;
            right: .18rem;
            top: 0;
          }
          .sy-check{
            display: block;
            width: .16rem;
            height: .16rem;
            line-height: .16rem;
            cursor: pointer;
            position: absolute;
            border:  1px solid #9BE9FF;
            top: 6px;
            left: 6px;
          }
          input[type=checkbox]{
            visibility: hidden;
          }
          .check-box:checked +label:before{
            display: block;
            content: "\2714";
            text-align: center;
            font-size: .16rem;
            color: #000;
            background: #FFCF06;
          }
        }
      }
      .g-panel-right::-webkit-scrollbar {
        display: none;
      }
    }
    // maker
    .g-maker-num {
    width: 100%;
    height: 0.36rem;
    line-height: 0.36rem;
    color: #ffffff;
    text-align: center;
    font-size: 0.18rem;
    border: 0.02rem solid rgb(68, 159, 227);
    border-radius: 0.08rem;
  }
  .g-img-box {
    width: 1.1rem;
    height: 2rem;
    left: 0;
    top: 0;
    z-index: 200;
    position: relative;
    .big-img {
      width: 100%;
      height: 100%;
    }
    .small-img {
      width: 0.4rem;
      height: 0.5rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 0.3rem;
    }
  }
  .g-maker-text {
    padding: 0 0.2rem 0.2rem 0.35rem;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
    width: 2.72rem;
    min-height: 2.85rem;
    background: url('../../../assets/city-management/common-service/education-resource/small-kuang.png') center no-repeat;
    background-size: 100% 100%;
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
      height: 0.22rem;
      line-height: 0.18rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(223,226,251,1);
      span {
        font-size:0.18rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        font-style:italic;
        line-height: 0.24rem;
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
  }
  // maker-end
   .left-top-panle {
     position: absolute;
     width: 10.48rem;
     height: 5.13rem;
     left: 0.29rem;
     top: 0.24rem;
     z-index: 99;
     background: url('../../../assets/city-management/common-service/medical-resource/panle-01.png') no-repeat;
     background-size: 100% 100%;
     .top-title {
       position: absolute;
       left: 0rem;
       top: 0.97rem;
       width: 100%;
       font-size: 0.20rem;
       color: #FFFFFF;
       display: flex;
       flex-direction: row;
       justify-content: center;
       align-items: center;
       .tab-btn {
         width:0.92rem;
         height:0.28rem;
         line-height: 0.26rem;
         background:rgba(53,58,90,0.8);
         border-radius:0.14rem;
         border: none;
         font-size:0.17rem;
         font-weight: 400;
         color: #FFF;
         margin-left: 0.18rem;
         cursor: pointer;
         text-align: center;
       }
       .tab-btn-selected {
         background:rgba(47,132,247,0.8);
       }
     }
     .top-box-wrapper {
       .top-organization-left {
         position: absolute;
         top: 1.35rem;
         left: 0.85rem;
         width: 5.76rem;
         display: flex;
         flex-wrap: wrap;
         align-items: center;
         .organization-item-box {
           width: 50%;
           margin-top: 0.22rem;
           padding-right: 0.22rem;
           box-sizing: border-box;
           &:nth-child(2n) {
             padding-left: 0.2rem;
             padding-right: 0;
           }
           .organization-item-box-text {
             display: flex;
             .organization-item-text-1 {
               flex: 2;
               font-size:0.17rem;
               height: 0.17rem;
               line-height: 0.17rem;
               font-weight:400;
               color: #FEFEFE;
             }
             .organization-item-text-2 {
               flex: 1;
               font-size:0.17rem;
               height: 0.17rem;
               line-height: 0.17rem;
               font-weight:400;
               color: #FEFEFE;
               text-align: right;
             }
           }
           .organization-item-box-img-bg {
             width: 100%;
             height: 0.101rem;
             border-radius: 0.0505rem;
             background: rgba(70,130,180,.5);
             margin-top: 0.11rem;
             .organization-item-box-img-percent {
               height: 100%;
               border-radius: 0.0505rem;
               background:linear-gradient(90deg,rgba(102,175,235,1) 0%,rgba(123,208,240,1) 100%)
              }
           }
         }
       }
       .top-organization-right {
         position: absolute;
         top: 1.55rem;
         left: 7.47rem;
         width: 2.2rem;
         height: 2.8rem;
         .top-organization-total {
           display: flex;
           img {
             width: 0.574rem;
             height: 0.7rem;
             margin-top: 0.05rem;
           }
           .top-organization-total-detail {
             flex: 1;
             .top-organization-total-num {
               font-size:0.24rem;
               font-weight:bold;
               font-style:italic;
               color:#FCE62F;
               padding-left: 0.27rem;
               height: 0.22rem;
               .total-unit {
                 color: #FFF;
                 font-size: 0.17rem;
               }
             }
             .top-organization-total-text {
               font-size:0.17rem;
               font-weight:400;
               color: #EFF8FE;
               line-height:0.24rem;
               padding-left: 0.13rem;
               margin-top: 0.08rem;
             }
           }

         }
         .top-organization-chart {
           width: 2.64rem;
           height: 2.3rem;
           margin-top: -0.25rem;
           margin-left: -10%;
         }
       }
       .top-person-left {
         position: absolute;
         top: 1.55rem;
         left: 0.85rem;
         width: 4rem;
         height: 3.1rem;
       }
       .top-person-right {
         position: absolute;
         top: 1.55rem;
         left: 5rem;
         width: 5rem;
         height: 3rem;
       }
       .person-bar-chart-legend {
         position: absolute;
         top: 3.7rem;
         left: 0.85rem;
         width: 4rem;
         z-index: 1;
         display: flex;
         flex-wrap: wrap;
         align-items: center;
         .person-bar-chart-legend-item {
           flex: 0 0 50%;
           display: flex;
           align-items: center;
           margin-top: 0.08rem;
           .legend-icon {
             width: 0.15rem;
             height: 0.15rem;
             border-radius: 0.02rem;
           }
           span {
             flex: 1;
             font-size:0.17rem;
             font-weight:400;
             color: #FFF;
             padding-left: 0.08rem;
           }
         }
       }
       .top-bed-left {
         position: absolute;
         top: 1.35rem;
         left: 0.65rem;
         width: 3.5rem;
         height: 3.2rem;
       }
       .top-bed-right {
         position: absolute;
         top: 1.35rem;
         left: 4rem;
         width: 6rem;
         height: 3.2rem;
       }
     }
     .top-echarts-01 {
       position: absolute;
       width: 6.54rem;
       height: 3.3rem;
       left: 0.60rem;
       top: 1.50rem;
       z-index: 2;
     }
      .bottom-chart {
        position: absolute;
        width: 5.45rem;
        left: 1.1rem;
        top: 3.1rem;
     }
     .top-echarts-02 {
       position: absolute;
       width: 2.66rem;
       height: 2.7rem;
       left: 7.39rem;
       top: 1.69rem;
       font-size: 0.20rem;
       color: #FFFFFF;
       background: url("../../../assets/city-management/common-service/medical-resource/left-top-detail-bg.png") no-repeat center;
       background-size: 100% 100%;
       .top-ul {
         padding: 0.2rem 0.1rem 0 0.23rem;
         list-style: none;
         .top-li {
           position: relative;
           font-size:0.18rem;
           line-height: 0.24rem;
           font-weight:500;
           color: #FFF;
           padding: 0.07rem 0 0.07rem 0.17rem;
           .top-li-num {
             color: #FCE62F;
           }
           &:before {
             position: absolute;
             top: 0.15rem;
             left: 0rem;
             content: '';
             width: 0.06rem;
             height: 0.06rem;
             border-radius: 0.01rem;
             background-color: #6EE8FC;
             box-sizing: border-box;
           }
           &:nth-child(3n + 1){
             &:before {
               background-color: #4CA8E5;
             }
           }
           &:nth-child(3n + 2){
             &:before {
               background-color: #307FF3;
             }
           }
         }
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
        text-align: center;
        margin: 0.97rem auto;
        color:rgba(152,229,250,1);
        font-size: 0;
        span {
          display: inline-block;
          vertical-align: top;
          text-align: center;
          // width: 0.92rem;
          padding: 0 0.12rem;
          height: 0.28rem;
          line-height: 0.26rem;
          font-size:0.17rem;
          font-weight:400;
          color: #FFF;
          background:rgba(53,58,90,1);
          border-radius: 0.14rem;
          margin-left: 0.18rem;
          cursor: pointer;
          &:hover {
            cursor: pointer;
          }
        }
        .select {
          background:rgba(47,132,247,.8);
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
      width: 10.48rem;
      height: 5.12rem;
      right: 0.29rem;
      top: 0.24rem;
      z-index: 99;
      background: url('../../../assets/city-management/common-service/medical-resource/panle-03.png') no-repeat;
      background-size: 100% 100%;
      .right-echarts-01 {
        position: absolute;
        left: 6%;
        bottom: 0.54rem;
        width: 90%;
        height: 3.5rem;
      }
   }
   .right-bottom-panle {
      position: absolute;
      width: 10.48rem;
      height: 5.58rem;
      right: 0.24rem;
      bottom: 0.12rem;
      z-index: 99;
      background: url('../../../assets/city-management/common-service/medical-resource/panle-04.png') no-repeat;
     background-size: 100% 100%;
     .bottom-title-unselected {
      //  font-size:0.22rem;
      //  font-weight:500;
      //  color: #E0E3FB;
       color: rgba(255, 255, 255, 1);
        background: url("../../../assets/city-management/common-service/social-insurance/activeTable.png") center/100% 100%
     }
     .permission-title {
       padding-left: 0.2rem;
     }
      .right-bottom-title {
          margin-top: 0.1rem;
          font-size: 0.24rem;
          color: #FFFFFF;
          display: flex;
          flex-direction: row;
          align-items: center;
          img {
          width: 0.50rem;
          height: 0.50rem;
          }
        }
     .punish-box {
       .right-bottom-left {
         position: absolute;
         width: 4.6rem;
         height: 4.2rem;
         right: 0.20rem;
         top: 0.9rem;
         display: flex;
         flex-direction: column;

         .right-bottom-box {
           position: relative;
           height: 3.6rem;
           overflow: hidden;
           flex: 1;
           overflow: hidden;
           .right-bottom-inner-box {
             position: absolute;
             width: 100%;
             height: 100%;
             left: 0;
             top: 0;
           }
           .anim{
            //  animation: mymove 1s infinite;
           }
           @keyframes mymove
           {
             from {
               top:0;
             }
             to {
               top: -0.45rem;
             }
           }
           .item-li {
             display: flex;
             flex-direction: row;
             justify-content: center;
             align-items: center;
             .name {
               width: 0.8rem;
               color: #FFFFFF;
               font-size: 0.17rem;
             }
             .number {
               width: 0.45rem;
               height: 0.45rem;
               text-align: center;
               font-size: 0.17rem;
               font-weight: 800;
               line-height: 0.40rem;
               color: #FFFFFF;
               background: url('../../../assets/emergency-command/overall-situation/societal-security/no4.png') no-repeat;
              //  background-size: 85% 85%;
              //  background-position: 40% 20%;
               background-size: 100% 100%;
             }
             .number-01 {
               width: 0.45rem;
               height: 0.45rem;
               text-align: center;
               line-height: 0.40rem;
               color: #FFFFFF;
               background: url('../../../assets/emergency-command/overall-situation/societal-security/no1.png') no-repeat;
               background-size: 100% 100%;
             }
             .number-02 {
               width: 0.45rem;
               height: 0.45rem;
               text-align: center;
               line-height: 0.40rem;
               color: #FFFFFF;
               background: url('../../../assets/emergency-command/overall-situation/societal-security/no2.png') no-repeat;
               background-size: 100% 100%;
             }
             .number-03 {
               width: 0.45rem;
               height: 0.45rem;
               text-align: center;
               line-height: 0.40rem;
               color: #FFFFFF;
               background: url('../../../assets/emergency-command/overall-situation/societal-security/no3.png') no-repeat;
               background-size: 100% 100%;
             }
             .line {
               width: 2.52rem;
               height: 0.15rem;
               display: flex;
               align-items: center;
               .line-inner {
                 height: 0.10rem;
                 background:linear-gradient(90deg,rgba(102,175,235,1) 0%,rgba(123,208,240,1) 100%);
                 border-radius:0rem 0.04rem 0.04rem 0rem;
               }
             }
             .value {
               flex: 1;
               color: #EDD6AE;
               font-size: 0.17rem;
               font-weight: 800;
               margin-left: 0.1rem;
             }
           }
         }
       }
       .right-bottom-right {
         position: absolute;
         width: 4.6rem;
         height: 4rem;
         left: 0.64rem;
         top: 0.9rem;
         display: flex;
         flex-direction: column;
         .right-bottom-charts{
           flex: 1;
         }
       }
     }
     .permission-box {
       .permission-box-left {
         position: absolute;
         width: 5.6rem;
         height: 4.2rem;
         top: 0.9rem;
         left: 0.64rem;
         .permission-line-chart {
          //  width: 100%;
           width: 5.6rem;
           height: 3.6rem;
         }
       }
       .permission-box-right {
         position: absolute;
         top: 1.5rem;
         left: 6.44rem;
         width: 3.6rem;
         height: 3.6rem;
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
     left:0.44rem;
     padding-left: 0.2rem;
     font-size: 0.24rem;
     color: #FFFFFF;
    //  padding: 0.2rem 0.15rem;
      height: 0.65rem;
      line-height: 0.65rem;
     box-sizing: border-box;
     background: url('../../../assets/common/panle-title.png') no-repeat;
     background-size: 1rem 0.2rem;
     background-position-y: 100%;
     span {
       display: inline-block;
       line-height: 0.5rem;
       padding: 0 .2rem;
       cursor: pointer;
     }
   }
   .left-list {
     position: absolute;
     left:10.68rem;
     top: 1.1rem;
     z-index: 1000;
     .left-list-li {
       margin-top: 0.1rem;
      .name {
       padding: 0.05rem;
       width: 1.80rem;
       height:0.26rem;
       line-height: 0.26rem;
       color: #FFFFFF;
       font-size:0.22rem;
       font-style:italic;
       transform: perspective(1rem) rotateX(-15deg);
       transform-origin:left;
       background:rgba(213,96,44,1);
      }
      .number {
        font-size:0.45rem;
        color: #FFFFFF;
        font-weight:bold;
        font-style:italic;
      }
     }
   }
}
.maker-box {
  position: absolute;
  left: 20rem;
  top: 5rem;
  z-index: 1;
  .name {
    font-size:0.18rem;
    color: #FFFFFF;
    background:url('../../../assets/city-management/common-service/medical-resource/tilte-bg.png') no-repeat;
    background-size:100% 100%;
    height: 0.36rem;
    text-align: center;
    padding: 0.05rem;
  }
  img {
    width: 0.94rem;
    height: 1.05rem;
  }
  .line {
    width: 0.04rem;
    height: 0.64rem;
    background: #D5602C;
    margin-left: 0.45rem;
    margin-top: -0.23rem;
  }
  .dot {
    width:0.19rem;
    height:0.13rem;
    background:rgba(213,96,44,1);
    opacity:0.9;
    border-radius:50%;
    margin-left: 0.38rem;
    margin-top: -0.1rem;
  }
  .cricle {
    width:0.75rem;
    height:0.38rem;
    border:0.02rem solid rgba(213,96,44,1);
    opacity:0.3;
    margin:-0.24rem 0.08rem ;
    border-radius:50%;
    box-shadow:inset 0rem 0rem 0.05rem 0.01rem rgba(213,96,44,1);
    animation: warn 1s infinite;
    .inner-cricle {
      width:0.36rem;
      height:0.20rem;
      border:0.02rem solid rgba(213,96,44,1);
      border-radius:50%;
      margin:0.04rem auto;
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
    /*.left-top-panle,*/
    /*.left-bottom-panle,*/
    /*.right-top-panle{*/
    /*}*/
</style>
