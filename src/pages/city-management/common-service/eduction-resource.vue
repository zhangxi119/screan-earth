<!--
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-02 10:15:41
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-11 22:24:24
 -->
<template>
   <div class="eduction-container">
    <!-- <div class="header-bg">教育资源</div> -->
    <head-component name="教育资源"></head-component>
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
            <!-- <img :src="require('@/assets/common/icon'+item.index+'.png')" /> -->
            <img :src="item.icon" />
            <p :title="item.name">{{item.name}}</p>
            <div class="check">
              <input
                @click.stop="handleSelect"
                type="checkbox"
                :id="'ck'+index"
                v-model="checkedValue"
                :value="item.name"
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
    <area-makers ref="eduction" :type="1" :dataList="areaInfoData"></area-makers>
    <!-- 区域点位maker-end -->
    <!-- 详情点位maker -->
    <maker-components :mLeft="'-0.5rem'" :mTop="'-2.18rem'" v-show="makerFlag && item[item.typeName]" v-for="(item, index) in makersDatas" :key="index" :makerData="item">
        <div slot="maker">
          <div class="g-maker-num">{{item.studentNum}}人</div>
          <div class="g-img-box" @click="item.showTextFlag = !item.showTextFlag">
            <img class="big-img" :src="item.fileId01" alt="" />
            <img class="small-img" :src="item.fileId02" alt="" />
          </div>
        </div>
        <img v-if="item.showTextFlag" slot="img"  src="@/assets/common/event-icon.png" alt="" class="line2" />
        <div slot="text" class="g-maker-text" v-show="item.showTextFlag">
          <h3>{{item.schoolType}}</h3>
          <div class="g-text-item"><label>名称：</label><span>{{item.schoolName}}</span></div>
          <div class="g-text-item">学生人数：<span>{{item.studentNum}}</span>人</div>
          <div class="g-text-item">是否重点学校：<span>{{item.keySchool}}</span></div>
          <div class="g-text-item">咨询电话：<span>{{item.phone}}</span></div>
          <div class="g-text-item"><label>地址：</label><span>{{item.address}}</span></div>
        </div>
    </maker-components>
    <!-- maker-end -->
    <div class="g-model-highschool" v-show="areaShow">
      <div class="g-model-close" @click="areaShow = false"></div>
      <div class="g-model-title">乐山市{{areaData.name}}学校情况<span>({{areaData.total}})</span></div>
      <div class="model-top">
        <div class="model-top-box" @click="schoolTypeClick(item)" v-for="(item, index) in areaData.data" :key="index">
          <p>{{item.type}}</p>
          <div class="model-top-item"><span>{{item.num}}</span> 所</div>
        </div>
      </div>
      <div class="g-scroll-box">
        <div :class="index === 0 ?'model-text-item border-top' : 'model-text-item'" v-for="(item,index) in areaTypeData" :key="index">
          <div class="g-text-left">
            <img src="../../../assets/city-management/common-service/education-resource/school.png" alt="" />
            <div class="text-left-cont">
              <p>{{item.name}}</p>
              <p>教师数<span>{{item.teacherNum}}人</span></p>
            </div>
          </div>
          <div class="model-text-address">{{item.address}}</div>
          <div class="model-school-student02">在校生数 <span>{{item.sudentNum}}</span>人</div>
          <!-- <div class="model-school-student02">毕业生数 <span>1298</span>人</div> -->
        </div>
      </div>
    </div>
    <div class="g-model-highschool g-model-highschool02" v-show="studentShow">
      <div class="g-model-close" @click="studentShow = !studentShow"></div>
      <div class="g-model-title">乐山市{{studentData.name}}学校情况<span>({{studentData.total}})</span></div>
      <div class="g-scroll-box">
        <div class="model-text-item" v-for="(item,index) in studentData.data" :key="index">
          <div class="g-text-left">
            <img src="../../../assets/city-management/common-service/education-resource/school.png" alt="" />
            <div class="text-left-cont">
              <p>{{item.name}}</p>
              <p>教师数<span>{{item.teacherNum}}人</span></p>
            </div>
          </div>
          <div class="model-text-address">{{item.address}}</div>
          <div class="model-school-student02">在校生数 <span>{{item.sudentNum}}</span>人</div>
          <!-- <div class="model-school-student02">毕业生数 <span>1298</span>人</div> -->
        </div>
      </div>
    </div>
    <!-- <div class="g-all-num">
      <div class="g-num-item">
        <div class="g-all-title">学校数量</div>
        <p>{{edAllData.schoolNum}}</p>
      </div>
      <div class="g-num-item">
        <div class="g-all-title">教职工数量</div>
        <p>{{edAllData.secondaryNum}}</p>
      </div>
      <div class="g-num-item">
        <div class="g-all-title">学生数量</div>
        <p>{{edAllData.countryStu}}</p>
      </div>
    </div> -->
    <div class="left-list">
      <div class="left-list-li">
        <div class="name">学校数量</div>
        <div class="number">{{edAllData.schoolNum}}<span>所</span></div>
      </div>
      <div class="left-list-li">
        <div class="name">教职工数量</div>
        <div class="number">{{edAllData.secondaryNum}}<span>人</span></div>
      </div>
      <div class="left-list-li">
        <div class="name">学生数量</div>
        <div class="number">{{edAllData.countryStu}}<span>人</span></div>
      </div>
      <div class="left-list-li">
        <div class="name">适龄儿童入学率</div>
        <div class="number">{{edAllData.allStuRate}}<span>%</span></div>
      </div>
      <div class="left-list-li">
        <div class="name">少数民族适龄儿童入学率</div>
        <div class="number">{{edAllData.mStuRate}}<span>%</span></div>
      </div>
    </div>
    <!-- <div class="g-study-box">
      <div class="g-stydy-title">适龄儿童入学率</div>
      <p>{{edAllData.allStuRate}}%</p>
      <div class="g-stydy-title">少数民族适龄儿童入学率</div>
      <p>{{edAllData.mStuRate}}%</p>
    </div> -->
    <!-- <div class="g-maker-text">
      <h3>市中区总体情况</h3>
      <div class="g-text-item">学校数：<span>24</span> 家</div>
      <div class="g-text-item">学生数：<span>24,321</span>人</div>
      <div class="g-text-item">老师数：<span>241</span> 人</div>
      <div class="g-text-item">计划招生人数：<span>24,100</span> 人</div>
      <div class="g-text-item">少数民族数：<span>24,112</span> 人</div>
    </div> -->
    <!-- <div class="g-maker-text g-maker-text01">
      <h3>学校</h3>
      <div class="g-text-item">名称：<span>24</span> 家</div>
      <div class="g-text-item">学生人数：<span>24,321</span>人</div>
      <div class="g-text-item">是否重点学校：<span>是</span></div>
      <div class="g-text-item">咨询电话：<span>13892342343</span></div>
      <div class="g-text-item"><label>地址：</label><span class="g-address">某某街道126号</span></div>
    </div> -->
    <div class="main-left-top">
      <div class="hover-div">
        <p class="g-title hover-color">学校情况<span class="global-data-title">（截至2020年）</span></p>
        <div class="lt-top-box">
        <div class="lt-box-item" ref="lssxxqk"></div>
        <ul class="lt-legend-box">
          <li @click="schoolClick(item)" v-for="(item, index) in schoolData" :key="index"><div class="lt-circle" :style="'background: ' + stuentColor[index] + ';'"></div> <p>{{item.schoolType}}</p>  <span>{{item.schoolNum}}所  {{item.schoolRate}}%</span></li>
        </ul>
        <div class="lt-box-item" style="height: 2.52rem;overflow: hidden;">
          <div class="g-small-title hover-color">
            <div class="g-small-tip"></div>
            各区县学校数量TOP6
          </div>
          <div class="g-four-top">
            <!-- <div class="g-fourt-main">
              <ul class="g-fourt-item" @click="areaClick(item)" v-for="(item, index) in schoolNumData" :key="index">
                <li class="bg-orange">{{ index + 1}}</li>
                <li>{{item.name}}</li>
                <li class="g-per-li">
                  <div class="g-per-line" :style="'width:' + item.value / item.total * 100 + '%;'"></div>
                </li>
                <li>{{item.value}}</li>
              </ul>
            </div> -->
            <div class="right-bottom-box">
               <div  class="right-bottom-inner-box">
                 <div class="item-li" @click="areaClick(item)" v-for="(item,index) in schoolNumData" :key="index">
                   <div class="number" :class="{'number-01':index===0,'number-02':index===1,'number-03':index===2}">
                     {{index+1}}
                   </div>
                   <div class="name">
                     {{item.name}}
                   </div>
                   <div class="line" >
                     <div class="line-inner" :style="index === 0 ? 'width: 100%;' : 'width:' + (item.value / item.total * 100).toFixed(1) + '%;'"></div>
                   </div>
                   <div class="value">{{item.value}}所</div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
      </div>
      <div class="hover-div">
        <p class="g-title title-02 hover-color">教师情况<span class="global-data-title">（截至2019年）</span></p>
        <div class="lt-bot-box">
        <div class="lt-bot-items">
          <div class="g-small-title hover-color">
            <div class="g-small-tip"></div>
            各学段教师情况
          </div>
          <div class="lt-bot-item" ref="gxdjsqk"></div>
        </div>
        <div class="lt-bot-items">
          <div class="g-small-title hover-color">
            <div class="g-small-tip"></div>
            各学段生师比情况
          </div>
          <div class="lt-bot-item" ref="gxdssbqk"></div>
        </div>
      </div>
      </div>
    </div>
    <div class="main-left-bottom">
      <div class="lb-bot-box">
        <div class="lb-bot-item hover-div">
          <p class="g-title2 hover-color">随迁子女接受教育情况<span class="global-data-title">（截至2019年）</span></p>
          <div class="lb-echart-item" ref="sqzljyqk"></div>
          <div class="lb-echart-item" ref="sqzljyqk2"></div>
          <div class="lb-echart-item" ref="sqzljyqk3"></div>
        </div>
        <div class="lb-bot-item hover-div">
          <p class="g-title2 lb-title02 hover-color">优质高中教育资源<span class="global-data-title">（截至2019年）</span></p>
          <div class="lb-right-item">
            <img class="lb-right-img" src="../../../assets/city-management/common-service/education-resource/benke.png" />
            <div class="lb-right-box">
              <div class="lb-right-text">{{highSchool.courseRate}}<span>%</span></div>
              <p>本科上线率</p>
            </div>
          </div>
          <div class="lb-right-item">
            <img class="lb-right-img" src="../../../assets/city-management/common-service/education-resource/mulu.png" />
            <div class="lb-right-box">
              <div class="lb-right-text">{{highSchool.peopleNum}}<span>%</span></div>
              <p>省一级示范性普通高中全省占比</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-right-top hover-div">
      <p class="g-title hover-color">教育规划情况</p>
      <div class="rt-main-box">
        <div class="rt-item">
          <div class="g-small-title hover-color">
            <div class="g-small-tip"></div>
            {{educationPlan.year}}年招生计划情况
          </div>
          <div class="rt-left-nav">
            <p>总招生人数</p><span>{{educationPlan.total}}</span> <p>人</p>
          </div>
          <div class="rt-left-highchart" id="echarts-get-student">
            <!-- <div class="rt-highchart-box">
              <div v-for="(item,index) in educationPlan.dataList" :key="index" :class="'rt-highchart-item rt-high-item0' + (index + 1)">
                <p class="lt-text-item01">{{item.name}}</p>
                <div class="lt-radar-per">{{item.value}} 人</div>
                <div :class="'g-border-line g-border-line0' + (index + 1)"></div>
              </div>
            </div> -->
            <div class="lt-radar-box">
              <div :class="'lt-radar-item lt-item0' + (index + 1)" v-for="(item, index) in educationPlan.dataList" :key="index">
                <p :class="index <= 1 ? 'lt-text-item01' : 'lt-text-item02'">{{index > 1 ? item.value + '人' : item.name}}</p>
                <div class="lt-radar-per">{{(item.value / educationPlan.total * 100).toFixed(1)}} %</div>
                <p :class="index > 1 ? 'lt-text-item01' : 'lt-text-item02'">{{index > 1 ? item.name : item.value + '人'}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="rt-item">
          <div class="g-small-title hover-color">
            <div class="g-small-tip"></div>
            {{+educationPlan.year - 4}}~{{+educationPlan.year}}年招生计划情况
          </div>
          <!-- <div class="rt-right-nav">
            <div @click="changeEducation(item,index)" v-for="(item,index) in educationBtn" :key="index" :class="index === educationIndex ? 'rt-right-btn active-btn' : 'rt-right-btn'">{{item}}</div>
            <div class="rt-right-btn">小学</div>
            <div class="rt-right-btn">初中</div>
          </div> -->
          <div class="rt-right-echart" ref="lssjyphbd">
          </div>
        </div>
      </div>
    </div>
    <div class="main-right-bottom hover-div">
      <p class="g-title hover-color">学生情况<span class="global-data-title">（截至2020年）</span></p>
      <div class="rb-btn-box">
        <div @click="changeNation(1)" :class="!nationFlag ? 'rb-btn rb-btn-active' : 'rb-btn'">全部</div>
        <div @click="changeNation(2)" :class="nationFlag ? 'rb-btn rb-btn-active' : 'rb-btn'">少数民族</div>
      </div>
      <div class="rb-change-box" v-show="!nationFlag">
        <div class="rb-all-top">
          <div class="rb-all-topitem">
            <div class="g-small-title hover-color">
              <div class="g-small-tip"></div>
              各学段在校学生情况
            </div>
            <div id="responsibleBody" class="responsible-body-content">
                <div class="body-item-box">
                    <div class="body-item-title">社区干部</div>
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
                            <div class="body-item-line-box"></div>
                            <div class="body-item-line-box"></div>
                            <div class="body-item-line-box"></div>
                            <div class="body-item-line-box"></div>
                            <div class="body-item-line-box"></div>
                            <div class="body-item-line-box"></div>
                            <div class="body-item-line-box"></div>
                            <div class="body-item-line-box"></div>
                        </div>
                        <div class="body-item-percent">18 <span>万</span></div>
                    </div>
                </div>
            </div>
          </div>
          <div class="rb-all-topitem">
            <div class="g-small-title hover-color">
              <div class="g-small-tip"></div>
              适龄人口变化
            </div>
            <div class="rb-all-echart" ref="slrkbhqs"></div>
          </div>
        </div>
        <div class="rb-all-bottom">
          <p class="g-title">教育机构监管情况 <span class="global-data-title">（截至2019年）</span></p>
          <div class="rb-all-numbox">
            <div class="rb-all-num" v-for="(item,index) in educationCd" :key="index">
              <p class="lt-title">{{item.supType}}</p>
              <div class="lt-num-box"><span>{{item.supNum}}</span>{{index | getUnit}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="rb-change-box rb-change-box02" v-show="nationFlag">
        <div class="rb-all-top">
          <div class="rb-all-topitem" style="width: 50%;">
            <div class="g-small-title hover-color">
              <div class="g-small-tip"></div>
              少数民族学龄在读学生情况
            </div>
            <div class="rb-all-echart02" ref="slrkbhqs01"></div>
            <div class="g-bg-04"></div>
          </div>
          <div class="rb-all-topitem" style="width: 50%;">
            <div class="g-small-title hover-color">
              <div class="g-small-tip"></div>
              少数民族年度在读学生趋势
            </div>
            <div class="rb-all-echart02" ref="slrkbhqs02"></div>
          </div>
        </div>
        <div class="rb-all-bottom">
          <p class="g-title hover-color">教育机构监管情况<span class="global-data-title">（截至2019年）</span></p>
          <div class="rb-all-numbox">
            <div class="rb-all-num" v-for="(item,index) in educationCd" :key="index">
              <p class="lt-title">{{item.supType}}</p>
              <div class="lt-num-box"><span>{{item.supNum}}</span>{{index | getUnit}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
</template>
<script>
// import Utils from '@/assets/emergency/utils/utils.js'
import echarts from 'echarts'
import { imgPath } from '@/utils/BasePath.js'
import API from '@/api/city-management/common-service.js'
import zonePositions from '../../../../static/CesiumAssets/js/zonePositions'
import headComponent from '@/components/head-component.vue'
import pieChart from '@/echarts-data/city-management/common-service/education-resource/pieEchart.js'
import pieChart2 from '@/echarts-data/city-management/common-service/education-resource/pieEchart2.js'
import barChart from '@/echarts-data/city-management/common-service/education-resource/barEchart.js'
import barChart02 from '@/echarts-data/city-management/common-service/education-resource/barEchart02.js'
import pieChart3 from '@/echarts-data/city-management/common-service/education-resource/pieEchart3.js'
import barLineChart from '@/echarts-data/city-management/common-service/education-resource/barLineEchart.js'
import context from '@/echarts-data/city-management/common-service/education-resource/percentColor.js'
import left02 from '@/echarts-data/city-management/common-service/education-resource/left02.js'
import pieEchartNew from '@/echarts-data/city-management/common-service/education-resource/pieEchart-new.js'
import makerComponents from '@/components/maker-component.vue'
import menuList from '@/components/menu.vue'
import heartPanel from '@/components/heart-panel'
import areaMakers from './area-makers.vue'
export default {
  components: {makerComponents, menuList, heartPanel, headComponent, areaMakers},
  mounted () {
    this.getleshanData() // 乐山市总体情况（头部和两个适龄入学率）
    this.initPieEchart() // 乐山市学校情况
    this.initPieEchart2() // 乐山市教师情况
    this.initPieEchart3() // 随迁子女接受义务教育情况
    this.getEducationData() // 乐山市教育规划情况
    this.getStudentData() // 乐山市学生情况
    this.educationControl() // 教育机构监管情况
    this.getMapData() // 获取地图数据
    this.getAreaInfo() // 获取区县总体情况地图数据
  },
  data () {
    return {
      // echarts对象
      pieObject: null,
      schoolData: [],
      pieObject2: null,
      pieObject3: null,
      pieObject3_2: null,
      pieObject3_3: null,
      barObject: null,
      barObject02: null,
      barLineObject: null,
      bar3dObject: null,
      makerFlag: false,
      // echarts对象结束
      areaShow: false,
      areaData: {},
      areaTypeData: [],
      studentShow: false,
      studentData: {},
      stuentColor: ['#2367E4', '#6BE573', '#F9E559', '#DB349F', '#4B25E9'],
      nationFlag: false,
      schoolNumData: [], // 各区县学校数量排行
      educationPlan: {
        total: '0',
        dataList: [],
        year: '2019'
      }, // 各学段招生计划情况
      educationBtn: [], // 乐山市教育平衡比对
      educationIndex: 0,
      educationData: {}, // 乐山市教育平衡比对数据
      highSchool: [], // 优质高中教育资源
      educationCd: [], // 教育机构监管情况
      edAllData: { // 乐山市总体情况 （头部和两个适龄入学率
        schoolNum: '',
        allStuRate: '',
        countryStu: '',
        mStuRate: '',
        secondaryNum: ''
      },
      makersDatas: [],
      makerTextShow: false,
      panelList: [
        {name: '交通基础设施', index: 9}
      ],
      panelBig: false,
      panelIndex: 1,
      // navList: [{name: '重大项目'}, {name: '监测预警'}, {name: '重大项目'}, {name: '监测预警'}],
      checkedValue: [], // panel 选中值
      areaInfoData: [] // 地图区县总体情况
    }
  },
  computed: {
  },
  filters: {
    getUnit (val) {
      let unit = ''
      switch (val) {
        case 0 : unit = '%'; break
        case 1 : unit = '家'; break
        case 2 : unit = '次'; break
        case 3 : unit = '次'; break
        case 4 : unit = '次'; break
      }
      return unit
    }
  },
  methods: {
    // 切换panel选中下标
    handlePanelActive (index) {
      this.panelIndex = index
    },
    // 切换list
    navClick (data) {
    },
    // 点击菜单
    handleClickMenu (data) {
    },
    // 多选
    handleSelect (e) {
      let that = this
      setTimeout(() => {
        this.makersDatas.forEach(item => {
          item[item.typeName] = false
        })
        this.makersDatas.forEach(item => {
          that.checkedValue.forEach(ite => {
            item[ite] = true
          })
        })
      }, 100)
    },
    // 地图区县总体情况
    getAreaInfo () {
      API.EDCCTION_AREAMAP(this, {}).then((resA) => {
        let res = resA.data.data
        this.areaInfoData = res.MapInfo
      }).catch(err => {
        console.log(err)
      })
    },
    // 乐山市学校情况
    initPieEchart () {
      // 请求接口
      API.EDCCTION_SCHOOL(this, {}).then((resA) => {
        let res = resA.data.data
        // 乐山市学校情况左饼图
        this.schoolData = res.schoolSpreadList.sort((a, b) => {
          return b.schoolNum - a.schoolNum
        })
        let echartData = pieChart(res.schoolSpreadList)
        this.pieObject = echarts.init(this.$refs.lssxxqk)
        this.pieObject.setOption(echartData)
        // 各区县学校数量排行
        let temp = []
        let total = res.districtSchoolSpreadMap.schoolsNumList[0]
        // res.districtSchoolSpreadMap.schoolsNumList.forEach(item => {
        //   total += Number(item)
        // })
        res.districtSchoolSpreadMap.schoolsNumList.forEach((item, index) => {
          temp.push({name: res.districtSchoolSpreadMap.districtsList[index], value: item, total: total})
        })
        this.schoolNumData = temp
      }).catch(err => {
        console.log(err)
      })
    },
    // left点击
    schoolClick (item) {
      API.EDCCTION_SCHOOLCLICK(this, {type: item.schoolType}).then((resA) => {
        let res = resA.data.data
        this.studentData = {name: item.schoolType, total: item.schoolNum, data: res.overallClickList}
        this.areaShow = false
        this.studentShow = true
      }).catch(err => {
        console.log(err)
      })
    },
    // right点击
    areaClick (item) {
      API.EDCCTION_AREACLICK(this, {district: item.name}).then((resA) => {
        let res = resA.data.data
        this.areaData = {name: item.name, total: item.value, data: res.districtClickList}
        this.areaTypeData = res.districtClickList[0].detailsList
        this.studentShow = false
        this.areaShow = true
      }).catch(err => {
        console.log(err)
      })
    },
    // right内部学校类型点击
    schoolTypeClick (data) {
      this.areaTypeData = data.detailsList
    },
    // 乐山市教师情况
    initPieEchart2 () {
      // 请求接口
      API.EDCCTION_TEACHER(this, {}).then((resA) => {
        let res = resA.data.data
        // 各学段教师情况
        this.pieObject2 = echarts.init(this.$refs.gxdjsqk)
        let temp = res.teacherSpreadList.sort((a, b) => {
          return b.teacherNum - a.teacherNum
        })
        let pieChart2Data = pieChart2(temp)
        this.pieObject2.setOption(pieChart2Data)
        // 各学段师生比情况
        let barChartData = barChart(res.teacMapherStuRateMap)
        this.barObject = echarts.init(this.$refs.gxdssbqk)
        this.barObject.setOption(barChartData)
      }).catch(err => {
        console.log(err)
      })
    },
    // 乐山市教育规划情况
    getEducationData () {
      API.EDCCTION_PLANNING(this, {}).then((resA) => {
        let res = resA.data.data
        // 各学段招生计划情况
        let total = 0
        let tempArr = []
        res.taapList.forEach(item => {
          total += Number(item.peopleNum)
          tempArr.push({name: item.schoolType, value: item.peopleNum})
        })
        this.educationPlan.dataList = tempArr
        this.educationPlan.total = total
        this.educationPlan.year = res.taapList[0].jy07003 || '2019'
        echarts.init(document.getElementById('echarts-get-student')).setOption(pieEchartNew(this.educationPlan))
        // 乐山市教育平衡比对
        this.educationBtn = res.eduBalanceMap.schoolTypeSet
        this.educationData = res.eduBalanceMap
        let barLineChartData = barLineChart(res.eduBalanceMap, res.eduBalanceMap.schoolTypeSet[0])
        this.barLineObject = echarts.init(this.$refs.lssjyphbd)
        this.barLineObject.setOption(barLineChartData)
      }).catch(err => {
        console.log(err)
      })
    },
    // 点击切换乐山市教育平衡比对
    changeEducation (name, index) {
      this.educationIndex = index
      let barLineChartData = barLineChart(this.educationData, name)
      this.barLineObject.setOption(barLineChartData)
    },
    // 随迁子女接受义务教育情况
    initPieEchart3 () {
      API.EDCCTION_PEOPLESTUDY(this, {}).then((resA) => {
        let res = resA.data.data
        // 随迁子女接受义务教育情况
        let total = res.mChildMap.freeEdu + res.mChildMap.normalEdu + res.mChildMap.secondaryEdu
        let option01 = pieChart3('义务教育人数', res.mChildMap.freeEdu, total)
        let option02 = pieChart3('普高人数', res.mChildMap.normalEdu, total)
        let option03 = pieChart3('中职人数', res.mChildMap.secondaryEdu, total)
        this.pieObject3 = echarts.init(this.$refs.sqzljyqk)
        this.pieObject3_2 = echarts.init(this.$refs.sqzljyqk2)
        this.pieObject3_3 = echarts.init(this.$refs.sqzljyqk3)
        this.pieObject3.setOption(option01)
        this.pieObject3_2.setOption(option02)
        this.pieObject3_3.setOption(option03)
        // 优质高中教育资源
        this.highSchool = res.gSchoolMap
      }).catch(err => {
        console.log(err)
      })
    },
    // 乐山市学生情况
    getStudentData () {
      API.EDCCTION_STUDENT(this, {}).then((resA) => {
        let res = resA.data.data
        // 各学段在校学生情况
        let tempArr = []
        res.inschoolStuMap.schoolType.forEach((item, index) => {
          tempArr.push({name: item, value: res.inschoolStuMap.peopleNum[index]})
        })
        let studentIn = {result: tempArr}
        context.init(studentIn)
        // 适龄人口变化趋势
        this.initPeopleEchart(res.peopeleChangeMap)
        // 少数民族学龄在读学生情况
        let left02Data = left02(res.mStuSchoolMap)
        this.bar3dObject = echarts.init(this.$refs.slrkbhqs01)
        this.bar3dObject.setOption(left02Data)
        // 少数民族年度在读学生趋势
        let barChart02Data = barChart02(res.mStuYearSchoolMap)
        this.barObject02 = echarts.init(this.$refs.slrkbhqs02)
        this.barObject02.setOption(barChart02Data)
      }).catch(err => {
        console.log(err)
      })
    },
    // 适龄人口变化趋势
    initPeopleEchart (data) {
      let xData = data.yearList
      let seriesData = []
      for (let key in data.schoolTypeList) {
        let sData = []
        data[data.schoolTypeList[key]].forEach(item => {
          sData.push(item.peopleNum)
        })
        let temp = {
          name: data.schoolTypeList[key],
          type: 'bar',
          stack: 'stack',
          // smooth: false,
          // showAllSymbol: true,
          // symbol: 'circle',
          // symbolSize: 8,
          barWidth: 20 * window.$rem,
          data: sData
        }
        seriesData.push(temp)
      }
      let option = {
        legend: {
          show: true,
          left: 'center',
          top: 5 * window.$rem,
          itemWidth: 14 * window.$rem,
          itemHeight: 14 * window.$rem,
          itemGap: 10 * window.$rem,
          textStyle: {
            color: 'rgba(255,255,255,1)',
            padding: [0, 0, 0, 4 * window.$rem],
            fontSize: 14 * window.$rem
          },
          formatter: function (name) {
            return name
          }
          // data: [{name: '幼儿园3～5岁', icon: 'rect'}, {name: '小学6～11岁', icon: 'rect'}]
        },
        grid: {
          left: '5%',
          right: '10%',
          bottom: '5%',
          top: '17%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          backgroundColor: 'rgba(0,53,126,0.74)',
          borderColor: '#44aaf4',
          borderWidth: 2 * window.$rem,
          padding: [10 * window.$rem, 20 * window.$rem],
          textStyle: {
            fontSize: 17 * window.$rem
          }
        },
        color: ['#469FF8', '#F9E559', '#6BE573', '#E27F31'],
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#acdeff'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            margin: 20 * window.$rem,
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              fontSize: 16 * window.$rem,
              color: '#ffffff'
            }
          },
          data: xData
        },
        yAxis: {
          name: '（人）',
          nameTextStyle: {
            fontSize: 14 * window.$rem,
            color: '#fff',
            padding: [0, 0, 5 * window.$rem, -60 * window.$rem]
          },
          type: 'value',
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#4e515c',
              type: 'dashed'
            }
          },
          axisLabel: {
            show: true,
            margin: 20 * window.$rem,
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              fontSize: 16 * window.$rem,
              color: '#ffffff'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#acdeff'
            }
          }
        },
        series: seriesData
      }
      let lineEchart = echarts.init(this.$refs.slrkbhqs)
      lineEchart.setOption(option)
    },
    // 教育机构监管情况
    educationControl () {
      API.EDCCTION_CONTROL(this, {}).then((resA) => {
        let res = resA.data.data.inSupList
        this.educationCd = res
      }).catch(err => {
        console.log(err)
      })
    },
    // 获取地图点位数据-乐山市学校情况（地图）
    getMapData () {
      API.EDCCTION_MAP(this, {}).then((resA) => {
        let res = resA.data.data
        let data = res.districtSchoolMap.districtSchoolsList
        // 渲染热力图
        let allMakerPoint = []
        let typeArr = []
        let typeData = []
        data.forEach((item, index) => {
          item.schoolList.forEach(key => {
            allMakerPoint.push({x: key.lon, y: key.lat, value: 30})
            if (index === 0) {
              if (typeArr.indexOf(key.schoolType) < 0) {
                typeArr.push(key.schoolType)
                typeData.push({name: key.schoolType, icon: imgPath + key.fileId02, bigImg: imgPath + key.fileId01})
              }
            }
          })
        })
        this.panelList = typeData
        // window._m.addHeatPointMap('education', allMakerPoint)
        // 点击底图区域
        window._m.redirectDimenionFn((name) => {
          let tempArr = []
          data.forEach(item => {
            // name = name === '马边彝族自治县' ? '马边县' : name
            // name = name === '峨边彝族自治县' ? '峨边县' : name
            // console.log(item.district, name)
            if (item.district === name) {
              item.schoolList.forEach((ite, i) => {
                let temp = {district: item.district, showTextFlag: false, typeName: ite.schoolType, [ite.schoolType]: false}
                tempArr.push(Object.assign(temp, ite))
              })
              let position = zonePositions[item.district]
              console.log(position)
              window._m.flyToByMector(position)
            }
          }, false)
          tempArr.forEach((item, index) => {
            Object.assign(item, {id: 'ed-maker' + (index + 1)})
          })
          this.makersDatas = tempArr
          this.makersDatas.forEach(item => {
            // 默认显示第一种类型
            item.fileId01 = imgPath + item.fileId01
            item.fileId02 = imgPath + item.fileId02
            item[this.panelList[0].name] = true
          })
          window._m.addMakers(tempArr, (type) => {
            if (type === 1) { // 三维
              this.makerFlag = true
              this.$refs.eduction.makerFlag = false
            } else { // 二维
              this.makerFlag = false
              this.$refs.eduction.makerFlag = true
            }
          })
          // 初始化图例第一个
          this.checkedValue[0] = this.panelList[0].name
          // 右键重置图例
          window._m.rightClick(() => {
            this.checkedValue = []
          })
        }, false)
      }).catch(err => {
        console.log(err)
      })
    },
    // 乐山市总体情况
    getleshanData () {
      API.EDCCTION_ALLDATA(this, {}).then((resA) => {
        let res = resA.data.data.overallSchoolMap
        this.edAllData = res
      }).catch(err => {
        console.log(err)
      })
    },
    // 切换民族
    changeNation (type) {
      if (type === 1) {
        this.nationFlag = false
      } else {
        this.nationFlag = true
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
.global-data-title{
  color:$date-title-color;
  display:inline-block;
  font-size:$date-title-size;
}
.eduction-container {
  width: 43.2rem;
  height: 10.8rem;
  // width: 4320px;
  // height: 1080px;
  overflow: hidden;
  position: absolute;
  background: #000;
  .g-menu-box {
    position: absolute;
    left: 11rem;
    top: 9rem;
    z-index: 9999;
  }
  .lt-radar-box {
    width: 1.58rem;
    height: 1.58rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -0.79rem;
    margin-top: -0.8rem;
    background: url('../../../assets/city-management/common-service/social-security/radar.png') center no-repeat;
    background-size: 100%;
    .lt-radar-item {
      width: 0.96rem;
      height: 0.9rem;
      position: absolute;
      .lt-text-item01 {
        padding-left: 0.16rem;
        height: 0.3rem;
        line-height: 0.3rem;
        font-size:0.18rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(255,255,255,1);
      }
      .lt-radar-per {
        padding-left: 0.16rem;
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
        padding-left: 0.16rem;
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
      bottom: -0.45rem;
    }
    .lt-item04 {
      left: -0.86rem;
      bottom: -0.45rem;
    }
  }
  .natural-panel{
    position: absolute;
    bottom: .5rem;
    right: 9.5rem;
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
      height: 85%;
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
          top: 0.06rem;
          left: 0.06rem;
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
  }
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
    z-index: 1;
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
  .g-scroll-box {
    width: 100%;
    height: 2.7rem;
    overflow-y: scroll;
  }
  .g-scroll-box::-webkit-scrollbar {
    width: 0 !important;
  }
  .g-model-highschool {
    width: 6.86rem;
    height: 5.05rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    background: url('../../../assets/city-management/common-service/education-resource/model-kuang.png') center no-repeat;
    background-size: 100%;
    .g-model-close {
      width: 0.3rem;
      height: 0.3rem;
      position: absolute;
      right: 0.1rem;
      top: 0.08rem;
      cursor: pointer;
    }
    .g-model-title {
      padding-left: 0.26rem;
      margin-top: 0.6rem;
      margin-bottom: 0.3rem;
      line-height: 0.26rem;
      font-size:0.24rem;
      font-family:Source Han Sans CN;
      font-weight:500;
      color:rgba(255,255,255,1);
      span {
        color: #D04442;
      }
    }
    .model-top {
      width: 100%;
      box-sizing: border-box;
      padding-left: 0.36rem;
      overflow: hidden;
      .model-top-box {
        margin-right: 0.23rem;
        height: 0.88rem;
        width: 1.02rem;
        float: left;
        p {
          line-height: 0.2rem;
          font-size:0.2rem;
          font-family:Source Han Sans CN;
          font-weight:400;
          color:rgba(255,255,255,1);
          text-align: center;
        }
        .model-top-item {
          width: 100%;
          height: 0.68rem;
          line-height: 0.68rem;
          font-size:0.18rem;
          font-family:Heiti SC;
          font-weight:bold;
          font-style:italic;
          text-align: center;
          color:rgba(255,255,255,1);
          background: url('../../../assets/city-management/common-service/education-resource/num-kuang.png') center no-repeat;
          background-size: 100% 100%;
          &:last-child {
            margin-right: 0;
          }
          span {
            font-size:0.24rem;
            font-family:Impact;
            font-weight:bold;
            font-style:italic;
            color:rgba(252,230,47,1);
          }
        }
      }
    }
    .model-text-item {
      margin: 0 auto;
      position: relative;
      width: 6rem;
      height: 0.88rem;
      border-bottom: 0.01rem solid rgba(255,255,255,1);
      &:last-child {
        border-bottom: none;
      }
      .g-text-left {
        width: auto;
        height: 100%;
        img {
          margin-top: 0.21rem;
          margin-right: 0.19rem;
          width: 0.5rem;
          height: 0.5rem;
          display: inline-block;
          float: left;
        }
        .text-left-cont {
          float: left;
          p {
            line-height: 0.17rem;
            font-size:0.17rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(255,255,255,1);
            &:first-child {
              margin: 0.24rem 0 0.11rem 0;
            }
            span {
              color: #F9E559;
            }
          }
        }
      }
      .model-text-address {
        position: absolute;
        right: 0.2rem;
        top: 0.24rem;
        line-height: 0.17rem;
        font-size:0.17rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(255,255,255,1);
      }
      .model-school-student {
        position: absolute;
        left: 2.53rem;
        top: 0.52rem;
        line-height: 0.17rem;
        font-size:0.17rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(255,255,255,1);
        span {
          color: #FAE45A;
        }
      }
      .model-school-student02 {
        position: absolute;
        right: 0.2rem;
        top: 0.52rem;
        line-height: 0.17rem;
        font-size:0.17rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(255,255,255,1);
        span {
          color: #FAE45A;
        }
      }
    }
    .border-top {
      border-top: 0.01rem solid rgba(255,255,255,1);
    }
  }
  .g-model-highschool02 {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .g-scroll-box {
      width: 100%;
      height: 3.6rem;
      overflow-y: scroll;
    }
    .model-text-item {
      &:last-child {
        border-bottom: 0.01rem solid rgba(255,255,255,1);
      }
    }
  }
  .g-study-box {
    position: absolute;
    right: 9.2rem;
    top: 1rem;
    z-index: 100;
    text-align: right;
    .g-stydy-title {
      position: relative;
      height: 0.36rem;
      padding: 0 0.13rem;
      background:rgba(0,0,0,1);
      border:1px solid rgba(91, 191, 255, 0.75);
      box-shadow:0px 6px 6px 0px rgba(116,187,232,0.4);
      opacity:0.95;
      line-height: 0.36rem;
      font-size:0.2rem;
      font-family:Source Han Sans CN;
      font-weight:500;
      text-align: right;
      color:rgba(152,229,250,1);
      display: inline-block;
      &::after {
        content: '';
        display: inline-block;
        width: 0.02rem;
        height: 0.16rem;
        position: absolute;
        right: 0;
        top: 0.1rem;
        background: #9BE9FF;
      }
    }
    p {
      padding-right: 0.18rem;
      font-size:0.36rem;
      text-align: right;
      line-height: 0.47rem;
      height: 0.47rem;
      font-family:DIN Condensed;
      font-weight:bold;
      font-style:italic;
      color:rgba(255,255,255,1);
    }
  }
  .left-list {
     position: absolute;
     left: 10.74rem;
     top: 1.02rem;
     z-index: 1000;
     .left-list-li {
       margin-top: 0.1rem;
      .name {
       padding: 0.01rem 0.1rem 0.02rem 0.1rem;
       display: inline-block;
       height:0.26rem;
       line-height: 0.24rem;
       color: #FFFFFF;
       font-size:0.22rem;
       font-style:italic;
       font-weight: 800;
       font-family:Source Han Sans CN;
       transform: perspective(1rem) rotateX(-15deg);
       transform-origin:left;
       background:rgba(213,96,44,1);
      }
      .number {
        height: 0.66rem;
        line-height: 0.66rem;
        font-size:0.4rem;
        color: #FFFFFF;
        font-weight:bold;
        font-style:italic;
        // font-family:Impact;
        font-family:'DIN Condensed';
        span {
          font-size: 0.24rem;
          color: #ffffff;
        }
      }
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
  .g-maker-text01 {
    width: 3.19rem;
    height: 3.03rem;
    left: 13.65rem;
    top: 5.52rem;
    padding-left: 0.2rem;
    background: url('../../../assets/city-management/common-service/education-resource/small-kuang2.png') center no-repeat;
    background-size: 100%;
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
  .g-title {
    position: absolute;
    top: 0.34rem;
    left: 0.44rem;
    font-size: 0.24rem;
    color: #FFFFFF;
    padding: 0.15rem 0.15rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: url('../../../assets/common/panle-title.png') no-repeat;
    background-size: 1rem 0.2rem;
    background-position-y: 85%;
  }
  .g-title2 {
    position: absolute;
    top: 0.44rem;
    left: 0rem;
    z-index: 9;
    font-size: 0.24rem;
    color: #FFFFFF;
    padding: 0.15rem 0.15rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: url('../../../assets/common/panle-title.png') no-repeat;
    background-size: 1rem 0.2rem;
    background-position-y: 85%;
  }
  .g-small-title {
    position: relative;
    padding-left: 0.3rem;
    margin-left: 0.27rem;
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
  .g-num-box {
    width: 1.51rem;
    .text-box {
      height: 0.40rem;
      line-height: 0.40rem;
      overflow: hidden;
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
    left: 0.17rem;
    top: 0.27rem;
    z-index: 9;
    width: 10.49rem;
    height: 7.7rem;
    background: url('../../../assets/city-management/common-service/education-resource/kuang-left-top@2x.png') center no-repeat;
    background-size: 100%;
    .lt-top-box {
      position: absolute;
      left: 0.4rem;
      top: 0.9rem;
      width: 9.9rem;
      height: 2.52rem;
      overflow: hidden;
      .lt-box-item {
        width: 50%;
        height: 100%;
        float: left;
        .g-fourt-main {
          width: 100%;
          padding-left: 0.27rem;
          margin-top: 0.05rem;
          box-sizing: border-box;
          .g-fourt-item {
            width: 100%;
            height: 0.22rem;
            margin-bottom: 0.14rem;
            overflow: hidden;
            list-style: none;
            cursor: pointer;
            &:first-child {
              li {
                &:nth-child(1) {
                  background: url('../../../assets/emergency-command/overall-situation/societal-security/no1.png') no-repeat;
                  background-size: 100% 100%;
                  font-size: 0.16rem;
                }
                &:nth-child(2) {
                  font-size: 0.16rem;
                  color: #61CDEC;
                }
                &:nth-child(3) {
                  .g-per-line {
                    width: 100%;
                    height: 0.08rem;
                    cursor: pointer;
                    background:linear-gradient(90deg,rgba(102,176,235,1) 0%,rgba(123,208,240,1) 100%);
                  }
                }
              }
            }
            &:nth-child(1) {
              .bg-orange {
                background: url('../../../assets/emergency-command/overall-situation/societal-security/no1.png') no-repeat;
                background-size: 100% 100%;
              }
            }
            li {
              float: left;
              height: 0.22rem;
              line-height: 0.22rem;
              list-style: none;
              font-size: 0.16rem;
              &:nth-child(1) {
                width: 0.25rem;
                color: #ffffff;
                text-align: center;
                background: url('../../../assets/city-management/common-service/education-resource/paiming.png') center no-repeat;
                background-size: 100%;
              }
              &:nth-child(2) {
                width: 0.6rem;
                display: inline-block;
                margin-left: 0.1rem;
                margin-right: 0.08rem;
                color: #61CDEC;
              }
              &:nth-child(3) {
                margin-top: 0.07rem;
                margin-right: 0.26rem;
                width: 2.4rem;
                height: 0.08rem;
                background: none;
                .g-per-line {
                  width: 50%;
                  height: 0.08rem;
                  background:linear-gradient(90deg,rgba(102,176,235,1) 0%,rgba(123,208,240,1) 100%);
                  border-radius:0px 4px 4px 0px;
                }
              }
              &:nth-child(4) {
                width: auto;
                display: inline-block;
                font-size: 0.17rem;
                color:rgba(102,249,244,1);
              }
            }
          }
          .g-fourt-item:hover {
            .g-per-line {
              background: #d5602c;
            }
          }
        }
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
             cursor: pointer;
             .name {
               width: 0.8rem;
               color: #FFFFFF;
               font-size: 0.17rem;
             }
             .number {
               width: 0.36rem;
              height: 0.36rem;
              text-align: center;
              font-size: 0.14rem;
              font-weight: 800;
              line-height: 0.36rem;
              color: #FFFFFF;
               background: url('../../../assets/emergency-command/overall-situation/societal-security/no4.png') no-repeat;
              //  background-size: 85% 85%;
              //  background-position: 40% 20%;
               background-size: 100% 100%;
             }
             .number-01 {
               background: url('../../../assets/emergency-command/overall-situation/societal-security/no1.png') no-repeat;
               background-size: 100% 100%;
             }
             .number-02 {
               background: url('../../../assets/emergency-command/overall-situation/societal-security/no2.png') no-repeat;
               background-size: 100% 100%;
             }
             .number-03 {
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
      .lt-legend-box {
        position: absolute;
        left: 2.58rem;
        top: 0.45rem;
        list-style: none;
        li {
          padding-left: 0.25rem;
          margin-bottom: 0.2rem;
          list-style: none;
          font-size:0.17rem;
          font-family:Source Han Sans CN;
          font-weight:400;
          color:rgba(255,255,255,1);
          position: relative;
          cursor: pointer;
          .lt-circle {
            width: 0.12rem;
            height: 0.12rem;
            background: #73FBFD;
            border-radius: 100%;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
          p {
            display: inline-block;
            width: 0.7rem;
          }
          span {
            margin-left: 0.05rem;
            color: #75E3FB;
            // float: right;
          }
        }
        li:hover {
          color: #75E3FB;
          span {
            color: #d5602c;
          }
        }
      }
    }
    .title-02 {
      top: 3.46rem;
    }
    .lt-bot-box {
      position: absolute;
      left: 0.4rem;
      top: 4.15rem;
      width: 9.9rem;
      height: 3.27rem;
      overflow: hidden;
      .lt-bot-items {
        width: 50%;
        height: 100%;
        float: left;
      }
      .lt-bot-item {
        width: 100%;
        height: calc( 100% - 0.44rem);
      }
    }

  }
  .main-left-bottom {
    position: absolute;
    left: 0.17rem;
    bottom: 0.04rem;
    z-index: 9;
    width: 10.49rem;
    height: 2.96rem;
    background: url('../../../assets/city-management/common-service/education-resource/kuang-left-bottom@2x.png') center no-repeat;
    background-size: 100%;
    .lb-title02 {
      left: 6.12rem;
    }
    .lb-bot-box {
      position: absolute;
      left: 0.4rem;
      top: 0;
      width: 9.9rem;
      height: 2.6rem;
      overflow: hidden;
      .lb-bot-item {
        margin-top: 1rem;
        height: 1.6rem;
        float: left;
        overflow: hidden;
        &:first-child {
          width: 55%;
        }
        &:last-child {
          width: 45%;
        }
        .lb-echart-item {
          width: 33.3%;
          height: 100%;
          float: left;
        }
        .lb-right-item {
          box-sizing: border-box;
          padding-left: 0.25rem;
          margin-right: 0.3rem;
          height: 100%;
          float: left;
          overflow: hidden;
          &:last-child {
            margin-right: 0;
          }
          .lb-right-img {
            margin-top: 0.44rem;
            margin-right: 0.07rem;
            width: 0.62rem;
            height: 0.62rem;
            float: left;
            display: block;
          }
          .lb-right-box {
            float: left;
            margin-top: 0.44rem;
            .lb-right-text {
              font-size:0.3rem;
              line-height: 0.28rem;
              font-family:Source Han Sans CN;
              font-weight:400;
              color:rgba(105,212,222,1);
              text-align: center;
              span {
                font-size: 0.16rem;
              }
            }
            p {
              max-width: 1.35rem;
              margin-top: 0.06rem;
              font-size:0.16rem;
              line-height: 0.2rem;
              text-align: left;
              font-family:Source Han Sans CN;
              font-weight:400;
              color:rgba(255,255,255,1);
            }
          }
        }
      }
    }
  }
  .main-right-top {
    position: absolute;
    right: 0.19rem;
    top: 0.16rem;
    z-index: 9;
    width: 9rem;
    height: 5.02rem;
    background: url('../../../assets/city-management/common-service/education-resource/kuang-right-top@2x.png') center no-repeat;
    background-size: 100%;
    .rt-main-box {
      width: 8.48rem;
      height: 3.74rem;
      position: absolute;
      left: 0.36rem;
      top: 0.9rem;
      .rt-item {
        padding-top: 0.15rem;
        box-sizing: border-box;
        height: 100%;
        width: 45%;
        float: left;
        .g-small-title {
          width: 100%;
        }
        &:last-child {
          width: 55%;
        }
        .rt-left-nav {
          margin-top: 0.1rem;
          margin-left: 0.3rem;
          overflow: hidden;
          p {
            display: inline-block;
            font-size:0.2rem;
            height: 0.25rem;
            line-height: 0.25rem;
            font-family:Source Han Sans CN;
            font-weight:500;
            color:rgba(255,255,255,1);
            float: left;
          }
          span {
            margin-left: 0.24rem;
            color: #FBDF53;
            font-family:Impact;
            font-size: 0.3rem;
            line-height: 0.25rem;
            float: left;
          }
        }
        .rt-left-highchart {
          width: 100%;
          margin-top: 0.05rem;
          height: 2.75rem;
          position: relative;
          .rt-highchart-box {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 1.62rem;
            height: 1.27rem;
            background: url('../../../assets/city-management/common-service/education-resource/highChart.png') center no-repeat;
            background-size: 100%;
            .rt-highchart-item {
              position: absolute;
              width: 1rem;
              height: 0.6rem;
              .lt-text-item01 {
                padding-left: 0.16rem;
                height: 0.3rem;
                line-height: 0.3rem;
                font-size:0.18rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(255,255,255,1);
              }
              .lt-radar-per {
                padding-left: 0.16rem;
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
                  display: none;
                  position: absolute;
                  right: 0.02rem;
                  top: 0.07rem;
                  width: 0.03rem;
                  height: 0.12rem;
                  background: #9BE9FF;
                  transform: skewX(-5deg);
                }
              }
            }
            .g-border-line {
              position: absolute;
              width: 0.5rem;
              height: 0.25rem;
            }
            .rt-high-item01 {
              left: -0.8rem;
              top: -0.6rem;
            }
            .g-border-line01 {
              left: 50%;
              transform: translateX(-50%);
              bottom: -0.25rem;
              border-top: 0.02rem solid #f8ffff;
              border-right: 0.02rem solid #f8ffff;
              transform: skewX(30deg);
            }
            .rt-high-item02 {
              right: -0.8rem;
              top: -0.6rem;
            }
            .g-border-line02 {
              left: 0;
              bottom: -0.25rem;
              border-top: 0.02rem solid #f8ffff;
              border-left: 0.02rem solid #f8ffff;
              transform: skewX(-30deg);
            }
            .rt-high-item03 {
              left: -0.8rem;
              bottom: -0.6rem;
            }
            .g-border-line03 {
              right: 0;
              top: -0.25rem;
              border-top: 0.02rem solid #f8ffff;
              border-left: 0.02rem solid #f8ffff;
              transform: skewX(-30deg);
            }
            .rt-high-item04 {
              right: -0.8rem;
              bottom: -0.6rem;
            }
            .g-border-line04 {
              left: 0;
              top: -0.25rem;
              border-top: 0.02rem solid #f8ffff;
              border-right: 0.02rem solid #f8ffff;
              transform: skewX(30deg);
            }
          }
        }
        .rt-right-nav {
          margin-top: 0.1rem;
          margin-left: 0.7rem;
          overflow: hidden;
          .rt-right-btn {
            margin-right: 0.52rem;
            float: left;
            width: 0.74rem;
            height: 0.24rem;
            line-height: 0.24rem;
            font-size:0.17rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(255,255,255,1);
            text-align: center;
            background:rgba(57,63,94,0.8);
            border-radius: 0.08rem;
          }
          .active-btn {
            background:rgba(48,133,247,0.8);
          }
        }
        .rt-right-echart {
          width: 100%;
          height: 2.8rem;
        }
      }
    }
  }
  .main-right-bottom {
    position: absolute;
    right: 0.16rem;
    bottom: 0.08rem;
    z-index: 9;
    width: 9rem;
    height: 5.76rem;
    // width: 1048px;
    // height: 689px;
    background: url('../../../assets/city-management/common-service/education-resource/kuang-right-bottom@2x.png') center no-repeat;
    background-size: 100%;
    .g-small-title {
      width: 100%;
      margin-top: 0.15rem;
    }
    .rb-btn-box {
      position: absolute;
      left: 6.57rem;
      top: 0.53rem;
      .rb-btn {
        float: left;
        box-sizing: border-box;
        padding: 0 0.23rem;
        height: 0.3rem;
        line-height: 0.3rem;
        font-size:0.17rem;
        text-align: center;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(48,133,247,1);
        background: rgba(0,0,0,0);
        border: 1px solid #3185f8;
        border-radius:0.04rem;
        cursor: pointer;
        &:last-child {
          border-left: none;
        }
      }
      .rb-btn-active {
        background: #3185f8;
        color: #ffffff;
      }
    }
    .rb-change-box {
      width: 8.5rem;
      height: 4.6rem;
      position: absolute;
      left: 0.37rem;
      top: 0.9rem;
      .rb-all-top {
        width: 100%;
        height: 3.06rem;
        overflow: hidden;
        .rb-all-topitem {
          width: 40%;
          height: 100%;
          float: left;
          position: relative;
          &:last-child {
            width: 60%;
          }
          .rb-all-echart {
            width: 5.1rem;
            // width: 100%;
            height: calc( 100% - 0.59rem);
          }
          .g-bg-04 {
            position: absolute;
            left: 0.65rem;
            bottom: 0.57rem;
            width: 3.2rem;
            height: 0.66rem;
            z-index: -1;
            background: url('../../../assets/city-management/common-service/education-resource/bar-bg04.png') center no-repeat;
            background-size: 100%;
          }
        }
      }
      .rb-all-bottom {
        width: 8.5rem;
        height: 1.72rem;
        position: absolute;
        left: 0;
        bottom: 0.1rem;
        .g-title {
          top: -0.1rem;
          left: 0.08rem;
        }
        .rb-all-numbox {
          margin-top: 0.6rem;
          margin-left: 0.15rem;
          width: 100%;
          height: 1.1rem;
          overflow: hidden;
          .rb-all-num {
            width: 1.92rem;
            height: 100%;
            margin-top: 0;
            margin-right: 0.2rem;
            float: left;
            &:nth-child(1) {
              display: none;
            }
            &:last-child {
              margin-right: 0;
            }
            .lt-title {
              position: relative;
              font-size:0.17rem;
              display: inline-block;
              font-family:Source Han Sans CN;
              font-weight:bold;
              font-style:italic;
              color:rgba(224,227,251,1);
              padding-left: 0.3rem;
              line-height: 0.4rem;
              height: 0.4rem;
              &::before {
                content: '';
                display: inline-block;
                width: 0.20rem;
                height: 0.22rem;
                position: absolute;
                left: 0;
                top: 0.1rem;
                background: url('../../../assets/city-management/common-service/social-security/box.png') center no-repeat;
                background-size: 100%;
              }
            }
            .lt-num-box {
              width: 1.45rem;
              height: 0.6rem;
              font-size:0.23rem;
              font-family:Source Han Sans CN;
              font-weight:bold;
              font-style:italic;
              text-align: center;
              color:rgba(255,255,255,1);
              background: url('../../../assets/city-management/common-service/social-security/numbox.png') center no-repeat;
              background-size: 100%;
              span {
                margin-right: 0.06rem;
                line-height: 0.6rem;
                font-size:0.28rem;
                font-family:Impact;
                font-weight:bold;
                font-style:italic;
                color:rgba(248,230,89,1);
              }
            }
          }
        }
      }
    }
    .rb-change-box02 {
      .rb-all-echart02 {
        width: 4.25rem;
        height: 2.2rem;
      }
    }
    /*责任主体开始*/
    .responsible-body-content {
      // margin-top: 0.1rem;
      .body-item-box{
          float: left;
          margin-left: 0.22rem;
          margin-top: 0.03rem;
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
          margin-top: 0 !important;
      }
      .body-item-bottom-line{
          float: left;
          height: 100%;
          margin-bottom: 0.05rem;
      }
      .body-item-line-box{
          width: 0.05rem;
          height: 0.15rem;
          float: left;
          margin-right: 0.04rem;
          margin-top: 0.05rem;
          background: rgba(65,158,255,0.3);
      }
      .temp{
          background-color: red;
      }
      .body-item-percent{
          margin: 0;
          margin-left: 0.13rem;
          text-align: left;
          text-shadow: 0 2px 1px rgba(0,0,0,0.58);
          float: right;
          // background-image: -webkit-linear-gradient(bottom,#71D8FF,#71D8FF ,#A0E3F6,#FFFFFF);
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
          color: #ABEEF5;
          font-family:Heiti SC;
          font-size: 0.17rem;
          font-weight: 700;
          // width: 35px;
          span {
            color: #4D8FE6;
            font-weight: 300;
          }
      }
    }
  }
}
  /*.hover-div{*/
  /*}*/
</style>
