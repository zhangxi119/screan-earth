<!--
 * @Descripttion: 一总部三基地
 * @Author: chengqiyu
 * @Date: 2020-03-2
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-21 20:37:07
 -->
<template>
  <div class="medical-resource-container">
    <!--<div class="header-bg"></div>-->
    <head-component name="一总部三基地"></head-component>
    <div class="left-content">
      <div>
        <div class="title-model">
          <div class="title hover-color">一总部三基地概况<span class="global-data-title">（截至2019年）</span></div>
          <div class="title-select" style="z-index: 9;">
            <div class="select" @click="naturalShow = !naturalShow">
              <span>{{selectList[activeSelect].name}}</span>
              <ul v-if="naturalShow">
                <li
                  v-for="(item, index) in selectList"
                  :key="index"
                  @click.stop="handleChoose(index, 0)"
                  :class="index === activeSelect ? 'active' : 'normal'"
                >{{item.name}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="base-list">
          <div class="base-list-single"
               @click="handleChangeEchart(index, item.name, item.unit)"
               v-for="(item,index) in baseCondition"
               :key="index">
            <div class="base-list-single-title" :class="index===activeIndex ? 'base-list-single-active':'base-list-single-normal'">
              <div>{{item.name}}</div>
            </div>
            <div class="base-list-single-value">
              <div class="vl">{{item.value}}</div>
              <div class="unit">{{item.unit}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="plan-area">
        <div>
          <div class="area-title hover-color">{{titleName}}</div>
          <div id="each-area">
            <div class="progress-content-single" v-for="(item, index) in progressList" :key="index">
              <heart-progress
                :nameHeader='item.nameHeader'
                :nameFoot='item.nameFoot'
                :progress='item.progress / maxProgress * 100'></heart-progress>
            </div>
          </div>
        </div>
        <div style="position: relative">
          <div class="area-title hover-color">{{titleName}}占比</div>
          <div id="each-ratio"></div>
          <div class="each-ratio-font" :style="setPosition(titleName)">{{titleName}}占比</div>
        </div>
      </div>
      <div class="year-area">
        <div class="area-title select-area hover-color">
          <span>近三年主要指标情况</span>
          <div class="title-select" style="z-index: 9;">
            <div class="select" @click="naturalShow1 = !naturalShow1">
              <span>{{selectList[activeSelect1].name}}</span>
              <ul v-if="naturalShow1">
                <li
                  v-for="(item, index) in selectList"
                  :key="index"
                  @click.stop="handleChoose(index, 1)"
                  :class="index === activeSelect1 ? 'active' : 'normal'"
                >{{item.name}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="year-areas">
          <div id="year-areas1"></div>
          <div id="year-areas2"></div>
          <div id="year-areas3"></div>
          <div id="year-areas4"></div>
        </div>
      </div>
    </div>
    <div class="right-top-panle">
      <div class="panle-title select-area hover-color">
        <span>规上企业<span class="global-data-title">（截至2019年）</span></span>
        <div class="title-select" style="z-index: 9;">
          <div class="select" @click="naturalShow2 = !naturalShow2">
            <span>{{selectList[activeSelect2].name}}</span>
            <ul v-if="naturalShow2">
              <li
                v-for="(item, index) in selectList"
                :key="index"
                @click.stop="handleChoose(index, 2)"
                :class="index === activeSelect2 ? 'active' : 'normal'"
              >{{item.name}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right-echarts-01">
        <scroll-table
          v-if="sct1"
          :column="columnFirm"
          :data="company"
          :max="7"
          :height="'2.85rem'"
          @showTitle="showTooltip"
          @hideTitle="hideTooltip"></scroll-table>
      </div>
    </div>
    <div class="right-bottom-panle">
      <div class="panle-title select-area hover-color">
        <span>重大项目<span class="global-data-title">（截至2019年）</span></span>
        <div class="title-select" style="z-index: 9;">
          <div class="select" @click="naturalShow3 = !naturalShow3">
            <span>{{selectList[activeSelect3].name}}</span>
            <ul v-if="naturalShow3">
              <li
                v-for="(item, index) in selectList"
                :key="index"
                @click.stop="handleChoose(index, 3)"
                :class="index === activeSelect3 ? 'active' : 'normal'"
              >{{item.name}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right-echarts-02">
        <scroll-table
          v-if="sct2"
          :column="columnProject"
          :data="project"
          :max="7"
          :height="'2.85rem'"
          @showTitle="showTooltip"
          @hideTitle="hideTooltip"></scroll-table>
      </div>
    </div>
    <!--<div class="map-content">-->
      <!--<div class="center-three-map" id="three-map"></div>-->
    <!--</div>-->
    <!--<three-map ref="threeMap"></three-map>-->
    <!-- tooltip样式 -->
    <div class="window-box"
         :class="'window-box'+index"
         v-for="(item, index) in introduction"
         :key="index">
      <div class="window-box-left">
        <p>{{item.name}}</p>
        <div class="tooltip-content">
          <div v-for="(val, ind) in item.data" :key="ind">
            <div class="tooltip-name">{{val.name}}：</div>
            <div class="tooltip-decs">{{val.content}}</div>
          </div>
        </div>
      </div>
      <img :src="imgs[index]"/>
    </div>
    <div class="menu-three">
      <menu-list></menu-list>
    </div>
    <div class="mask"></div>
    <div id="tourism">
      <tourism-modal1></tourism-modal1>
    </div>
     <!-- 显示标题完整信息 -->
    <text-modal ref="textModal"></text-modal>
  </div>
</template>
<script>
import * as threeBaseApis from '@/api/city-management/economy-run'
import heartSelect from '@/components/select.vue'
import scrollTable from '@/components/table-scroll.vue'
import heartProgress from '@/components/heart-progress.vue'
import menuList from '@/components/menu.vue'
// import threeMap from '@/components/three-map.vue'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/title'
import { qAreaRadio, yArea } from '../../../echarts-data/city-management/economic-run/three-base'
import headComponent from '@/components/head-component'
import tourismModal1 from '@/components/slackingModal/tourism-modal'
import textModal from '@/components/text-modal' // 显示标题完整信息
const pos0 = require('@/assets/city-management/economic-run/three-base/pos0.png')
const pos1 = require('@/assets/city-management/economic-run/three-base/pos1.png')
const pos2 = require('@/assets/city-management/economic-run/three-base/pos2.png')
const pos3 = require('@/assets/city-management/economic-run/three-base/pos3.png')
export default {
  components: {
    headComponent,
    heartSelect,
    scrollTable,
    menuList,
    heartProgress,
    tourismModal1,
    textModal
  },
  data () {
    return {
      imgs: [pos0, pos2, pos1, pos3],
      titleName: '规划面积',
      activeIndex: 0,
      mapPosition: [], // 地图区县点位
      mapWindowList: '',
      // 地图数据
      introduction: [],
      sct1: false,
      sct2: false,
      // 下拉列表数据
      naturalShow: false,
      naturalShow1: false,
      naturalShow2: false,
      naturalShow3: false,
      activeSelect: 0,
      activeSelect1: 0,
      activeSelect2: 0,
      activeSelect3: 0,
      selectList: [
        {name: '全部区域'},
        {name: '总部经济区'},
        {name: '五通桥基地'},
        {name: '犍为基地'},
        {name: '夹江基地'}
      ],
      baseCondition: [],
      // 规上企业
      columnFirm: [
        {name: '所属基地', width: '1.5rem', dataIndex: 'base'},
        {name: '企业名称', width: '2.5rem', dataIndex: 'name'},
        {name: '企业地址', dataIndex: 'address'},
        {name: '主营业务', dataIndex: 'business'}
      ],
      company: [],
      // 重大项目
      columnProject: [
        {name: '所属基地', width: '1.5rem', dataIndex: 'base'},
        {name: '项目名称', width: '5rem', dataIndex: 'name'},
        {name: '建设地址', dataIndex: 'address'},
        {name: '全年建设进度', dataIndex: 'business'}
      ],
      project: [],
      progressList: [], // 规划面积
      maxProgress: 0 // 规划面积进度条最大值
    }
  },
  beforeMount () {
    // 地图重新定位
    window._m.scene.camera.setView({
      destination: new window._m.Cesium.Cartesian3(-1424096.636565844, 5743398.498337534, 2929576.6429510023),
      orientation: {
        heading: 6.17906427656023,
        pitch: -0.625409580824893,
        roll: 6.283185307179576
      }
    })
  },
  mounted () {
    this.getProjects()
    this.handleChangeEchart(0, '规划面积', '平方公里')
    this.handleMapData()
    this.handleGetThreeYear()
  },
  methods: {
    // 获取概况、规上企业和重大项目数据
    getProjects (type = -1, name = '') {
      threeBaseApis.QUERY_SURVEY(this, {name: name}).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data
          if (type === -1) {
            this.project = data.project
            this.company = data.company
            this.baseCondition = data.threeBase
            this.sct1 = true
            this.sct2 = true
          } else if (type === 0) {
            this.baseCondition = data.threeBase
          } else if (type === 2) {
            this.company = data.company
            this.sct1 = true
          } else {
            this.project = data.project
            this.sct2 = true
          }
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 点击左上列表
    handleChangeEchart (data, name, unit = '平方公里') {
      this.activeIndex = data
      this.titleName = name
      // 拼接后台参数
      let baseNum = 1003 + data
      let base = 'zb0' + baseNum
      threeBaseApis.QUERY_ANALYSIS(this, {name: base}).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data
          let pieData = data.histogramAndPie
          let max = 0 // 进度条最大值
          let pgList = [] // 进度条数据
          // 玫瑰图
          // qAreaRadio.legend.data = pieData.xAxis
          let pieReWrite = []
          pieData.data.map((re, index) => {
            let obj = {name: pieData.xAxis[index], value: re}
            pieReWrite.push(obj)
            pgList.push({nameHeader: pieData.xAxis[index], progress: re, nameFoot: re + unit})
            if (re > max) {
              max = re
            }
          })
          // qAreaRadio.series[0].data = pieReWrite
          this.maxProgress = max * 1.3
          this.progressList = pgList
          // 图形实例化
          echarts.init(document.getElementById('each-ratio')).setOption(qAreaRadio(pieData, pieReWrite, this.titleName, unit))
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 地图数据接口
    handleMapData () {
      threeBaseApis.QUERY_INTRODUCTIONS(this).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data
          this.introduction = data.introduction
          this.handleWeight()
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 获取近三年主要指标情况数据
    handleGetThreeYear (name = '') {
      threeBaseApis.QUERY_THREEDATA(this, {name: name}).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data
          echarts.init(document.getElementById('year-areas1')).setOption(yArea(data.threeData.zb01004, '已开发面积', '(平方公里)', true))
          echarts.init(document.getElementById('year-areas2')).setOption(yArea(data.threeData.zb01007, '营业收入', '(亿元)'))
          echarts.init(document.getElementById('year-areas3')).setOption(yArea(data.threeData.zb01006, '固定资产投资', '(亿元)'))
          echarts.init(document.getElementById('year-areas4')).setOption(yArea(data.threeData.zb01013, '招商引资签约额', '(亿元)'))
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 下拉框选择
    // type = 0 修改一总部三基地概况 type = 1 近三年主要指标情况 type = 2规上企业、规上企业
    handleChoose (index, type) {
      let selectName = this.selectList[index].name === '全部区域' ? '' : this.selectList[index].name
      if (type === 0) {
        this.naturalShow = false
        this.activeSelect = index
        this.getProjects(type, selectName)
      } else if (type === 1) {
        this.naturalShow1 = false
        this.activeSelect1 = index
        this.handleGetThreeYear(selectName)
      } else if (type === 2) {
        this.naturalShow2 = false
        this.sct1 = false
        this.activeSelect2 = index
        this.getProjects(type, selectName)
      } else {
        this.naturalShow3 = false
        this.sct2 = false
        this.activeSelect3 = index
        this.getProjects(type, selectName)
      }
    },
    setPosition (data) {
      let p = {}
      if (data.length > 6) {
        p.top = '1.3rem'
        p.left = '1.34rem'
      } else {
        p.top = '1.4rem'
        p.left = '1.34rem'
      }
      return p
    },
    // 一总部三基地着重
    handleWeight (color) {
      let mapData = [{
        name: '市中区',
        color: 'rgba(210,255,113,0.5)'
      }, {
        name: '犍为县',
        color: 'rgba(48,243,255,0.5)'
      }, {
        name: '五通桥区',
        color: 'rgba(112,255,183,0.5)'
      }, {
        name: '夹江县',
        color: 'rgba(255,198,151,0.5)'
      }]
      let entities = window._m.areaEntities
      for (let i = 0; i < entities.length; i++) {
        let entity = entities[i]
        for (let j = 0; j < mapData.length; j++) {
          if (mapData[j].name === entity._name) {
            entity.polygon.material = window._m.Cesium.Color.fromCssColorString(mapData[j].color)
            break
          }
        }
      }
    },
    // 鼠标移入显示标题
    showTooltip (e) {
      this.$refs.textModal.showTooltip(e)
    },
    hideTooltip () {
      this.$refs.textModal.hideTooltip()
    }
  },
  beforeDestroy () {
    this.handleWeight('#61cdec')
    // 重置地图
    let entities = window._m.areaEntities
    for (let i = 0; i < entities.length; i++) {
      let entity = entities[i]
      entity.polygon.outline = false
      entity.polygon.material = window._m.Cesium.Color.fromCssColorString('rgba(60,126,113, 0.01)')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../components/date-title.scss';
#tourism{
  position: absolute;
  z-index: 200;
}
.global-data-title{
  color:$date-title-color;
  display:inline-block;
  font-size:$date-title-size;
}
  .each-ratio-font{
    position: absolute;
    font-size: .18rem;
    color: #fff;
    font-weight: bold;
    width: 1.1rem;
    text-align: center;
  }
  .select-area{
    display: flex;
    justify-content: space-between;
    .select {
      position: relative;
      margin-right: 0.1rem;
      background: #034073;
      border-radius: 0.2rem;
      height: 0.3rem;
      line-height: 0.3rem;
      border: 2px solid #2368b1;
      padding: 0 .35rem 0 .2rem;
      font-size: 0.16rem;
      color: #fff;
      cursor: pointer;
      &::before {
        position: absolute;
        top: 0.11rem;
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
        top: 0.11rem;
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
        padding: 0.2rem 0.1rem;
        z-index: 100;
        li {
          list-style-type: none;
          height: 0.45rem;
          line-height: 0.45rem;
        }
        .active {
          color: #ffd200;
        }
      }
    }
  }
  .mask{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    background: transparent;
  }
  .menu-three{
    position: absolute;
    left: 14.5rem;
    bottom: 0.5rem;
    z-index: 999;
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
      margin-left: -.1rem;
      color: #fff;
      background: url("../../../assets/city-management/economic-run/three-base/title-icon.png") no-repeat;
      background-position: -0rem .2rem;
      background-size: .87rem .25rem;
    }
    .select {
      position: relative;
      margin-right: 0.1rem;
      background: #034073;
      border-radius: 0.2rem;
      height: 0.3rem;
      line-height: 0.3rem;
      border: 2px solid #2368b1;
      padding: 0 .35rem 0 .2rem;
      font-size: 0.16rem;
      color: #fff;
      cursor: pointer;
      &::before {
        position: absolute;
        top: 0.11rem;
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
        top: 0.11rem;
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
        padding: 0.2rem 0.1rem;
        z-index: 100;
        li {
          list-style-type: none;
          height: 0.45rem;
          line-height: 0.45rem;
        }
        .active {
          color: #ffd200;
        }
      }
    }
  }
  .base-list{
    box-sizing: border-box;
    padding: 0 .1rem;
    height: 2.64rem;
    .base-list-single{
      display: inline-block;
      width: 16.65%;
      font-size: .19rem;
      font-weight:bold;
      font-style:italic;
      color:rgba(223,226,253,1);
      cursor: pointer;
      &:hover .base-list-single-title{
        color: #5DD2F4;
      }
    }
    /*.base-list-single:nth-last-child(1){*/
      /*width: 21%;*/
    /*}*/
    .base-list-single-active{
      background: url("../../../assets/city-management/economic-run/three-base/rect.png") no-repeat;
      background-position-x: .15rem;
      >div{
        color: #5DD2F4;
      }
    }
    .base-list-single-normal{
      background: url("../../../assets/city-management/economic-run/three-base/rect.png") no-repeat;
      background-position-x: .15rem;
    }
    .base-list-single-title{
      background-size: .23rem .26rem;
      padding-left: .45rem;
      margin-top: .16rem;
    }
    .base-list-single-value{
      display: flex;
      align-items: center;
      justify-content: center;
      height: .85rem;
      background: url("../../../assets/city-management/economic-run/three-base/num-bk.png") no-repeat;
      background-size: 100% 100%;
      .vl{
        font-size: .34rem;
        font-weight: bold;
        font-style: italic;
        font-family: Impact;
        color: rgba(252,230,47,1);
      }
      .unit{
        font-size: 0.16rem;
        font-style: italic;
        color: rgba(255,255,255,1);
        margin-left: .05rem;
        margin-top: .08rem;
      }
    }
  }
  .area-title{
    position: relative;
    font-size: .2rem;
    color: rgba(255,255,255,1);
    padding-left: .25rem;
    &:after{
      content: '';
      position: absolute;
      top: .1rem;
      left: .04rem;
      width: .13rem;
      height: .13rem;
      background: rgba(0,126,251,1);
    }
    &:before{
      box-sizing: border-box;
      content: '';
      position: absolute;
      top: .05rem;
      left: 0;
      width: .13rem;
      height: .13rem;
      border: 2px solid rgba(253,209,0,1);
    }
  }
  #each-area,
  #each-ratio{
    height: calc(100% - .4rem);
  }
  .progress-content-single{
    width: 85%;
    margin-left: .1rem;
    margin-top: .33rem;
  }
  #year-areas{
    height: 100%;
    display: flex;
    > div {
      flex: 1;
    }
  }
  .plan-area{
    box-sizing: border-box;
    padding-left: .2rem;
    height: 2.7rem;
    display: flex;
    margin-top: .1rem;
    > div{
      flex: 1;
    }
  }
  .year-area{
    box-sizing: border-box;
    padding-left: .2rem;
    margin-top: .1rem;
    height: 2.9rem;
  }
  .medical-resource-container {
    position: absolute;
    background: url("../../../assets/common/bg.png") no-repeat;
    background-size: 100% 100%;
    .tool-tip {
      background:rgba(0,18,55,0.4);
      border:2px solid rgba(72,170,244,1);
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
      background-size: 100% 100%;
      .right-echarts-01 {
        position: absolute;
        left: 6%;
        bottom: 0.54rem;
        width: 90%;
        height: 3.2rem;
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
      .right-echarts-02{
        position: absolute;
        left: 6%;
        top: 1.1rem;
        width: 90%;
        height: 3.2rem;
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
      left:0.44rem;
      font-size: 0.24rem;
      color: #FFFFFF;
      width: 11rem;
      padding: 0.15rem 0.15rem 0.15rem .22rem;
      box-sizing: border-box;
      background: url('../../../assets/city-management/common-service/medical-resource/panle-title.png') no-repeat;
      background-position: .08rem 0.35rem;
      background-size: .87rem .25rem;
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
  .map-content{
    position: absolute;
    left: 14rem;
    top: 0;
    width: 17rem;
    height: 10.80rem;
    background: url('../../../assets/common/cloud.png') no-repeat;
    background-size: 49% 92%;
    background-position: 40% 113%;
  }
  /*#three-map{*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*background: url('../../../assets/common/electron.png') no-repeat;*/
    /*background-size: 80% 62%;*/
    /*background-position: 20% 94%;*/
  /*}*/
  .window-box{
    position:absolute;
    width: 5.2rem;
    height:2.8rem;
    z-index: 9;
    margin-left:-5.2rem;
    margin-top:-2.1rem;
    color: #FFFFFF;
    font-size: 0.21rem;
    display: flex;
    flex-direction: row;
    p{
      font-size: .21rem;
      font-weight: bold;
      color: #fff;
      margin-bottom: .2rem;
    }
    .window-box-left {
      position: absolute;
      width: 3.90rem;
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
          width: .9rem;
        }
        .tooltip-decs{
          flex: 1;
          font-size: .18rem;
          font-weight: bold;
          font-style: italic;
          color: #FCE62F;
          line-height: 130%;
        }
      }
    }
    img {
      position: absolute;
      margin-top: 0.9rem
    }
  }
  .window-box3{
    left: 20.19rem;
    top: 3.88rem;
    .window-box-left{
      top: 0;
      left: 0;
    }
    img{
      top: -0.5rem;
      left: 4rem;
      width: 3rem;
    }
  }
  .window-box2{
    left: 28.81rem;
    top: 4.53rem;
    .window-box-left{
      top: 3.5rem;
      left: 3.7rem;
    }
    img{
      width: 2.9rem;
      margin-left: .8rem;
      margin-top: 3rem;
    }
  }
  .window-box0{
    left: 15.79rem;
    top: 6rem;
    .window-box-left{
      top: 1rem;
      left: 4rem;
    }
    img{
      width: 4.5rem;
      top: -1.7rem;
      left: 8rem;
    }
  }
  .window-box1{
    left: 27.79rem;
    top: 5rem;
    .window-box-left{
      top: -1rem;
      left: 4.5rem;
    }
    img{
      width: 3.7rem;
      top: -1rem;
      left: 0.8rem;
    }
  }
  /*.right-top-panle,*/
  /*.right-bottom-panle,*/
  /*.left-content{*/
  /*}*/
</style>
