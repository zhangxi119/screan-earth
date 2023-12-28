<!--
 * @Descripttion:
 * @Author: ypk
 * @Date: 2020-04-08 09:17:08
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-07 14:50:16
 -->
<template>
  <div class="techno-culture-container">
      <!-- <div class="header-bg">科技文化</div> -->
      <head-component name="科技文化"></head-component>
      <div class="g-menu-box">
        <menu-list></menu-list>
      </div>
      <!-- maker -->
      <maker-component v-for="(item, index) in makerDatas" :key="index" :makerData="item">
          <div slot="maker">
            <div v-if="makerFlag">
              <div class="g-maker-num">{{item.district}}</div>
              <div class="g-img-box" @click="item.showTextFlag = !item.showTextFlag">
                <img class="big-img" :src="item.fileid01" alt="" />
                <img class="small-img" :src="item.fileid02" alt="" />
              </div>
            </div>
            <img @click="to3dMaker(item)" class="maker-small" style="width: 0.5rem;height: 0.5rem;" v-else :src="item.fileid02" alt="" />
          </div>
          <!-- <div slot="text" class="g-maker-text" v-show="item.showTextFlag">
            <h3>{{item.schoolType}}</h3>
            <div class="g-text-item"><label>名称：</label><span>{{item.schoolName}}</span></div>
            <div class="g-text-item">学生人数：<span>{{item.studentNum}}</span>人</div>
            <div class="g-text-item">是否重点学校：<span>{{item.keySchool}}</span></div>
            <div class="g-text-item">咨询电话：<span>{{item.phone}}</span></div>
            <div class="g-text-item"><label>地址：</label><span>{{item.address}}</span></div>
          </div> -->
      </maker-component>
    <!-- <div slot="text" class="g-maker-text">
        <h3>学校</h3>
        <div class="g-text-item">名称：<span>1</span></div>
        <div class="g-text-item">学生人数：<span>1</span>人</div>
        <div class="g-text-item">是否重点学校：<span>1</span></div>
        <div class="g-text-item">咨询电话：<span>1</span></div>
        <div class="g-text-item"><label>地址：</label><span>乐山市市中区某某街道126号</span></div>
        <div class="g-video-watch">查看监控</div>
    </div> -->
    <!-- 区域点位maker -->
    <area-makers :type="3" :dataList="areaInfoData"></area-makers>
    <!-- 区域点位maker-end -->
    <div class="natural-panel">
        <div class="user-dos" @click="panelBig = !panelBig">
          <div class="legend">图例</div>
          <div class="icon"></div>
        </div>
        <heart-panel
          v-if="panelBig"
          :list="[]"
          @changeActive="handlePanelActive">
          <div class="g-panel-right" slot="panel-content">
            <!-- <p>项目类型</p> -->
            <ul class="g-panel-btn">
              <li @click="tabShowFlag = !tabShowFlag" :class="tabShowFlag ? 'g-active' : ''">文化遗产</li>
              <li @click="tabShowFlag = !tabShowFlag" :class="!tabShowFlag ? 'g-active' : ''">科技型高新企业</li>
            </ul>
            <div v-show="tabShowFlag" v-for="(item,index) in panelObj.list01" :key="index">
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
            <div v-show="!tabShowFlag" v-for="(item,index) in panelObj.list02" :key="index + 'a'">
              <img :src="item.icon" />
              <p :title="item.name">{{item.name}}</p>
              <div class="check">
                <input
                  @change.stop="handleSelect"
                  type="checkbox"
                  :id="'c'+index"
                  v-model="checkedValue"
                  :value="item.id"
                  class="check-box"/>
                <label :for="'c'+index" class="sy-check"></label>
              </div>
            </div>
          </div>
        </heart-panel>
        <!-- <div class="small-icon" v-else>
          <div v-for="(item,index) in panelList" :key="index">
            <img :src="require('@/assets/common/icon'+item.index+'.png')" />
            <img :src="item.icon" />
          </div>
        </div> -->
      </div>
      <div class="left-top">
          <div class="panle-title">总体概况</div>
          <div class="sub">
            <span>高新科技</span>
          </div>
          <ul class="situation">
              <li>
                  <div class="item">省级工程技术 研究中心</div>
                  <div class="count"><span>{{overallSituation.provinceCenNum}}</span><span>个</span></div>
              </li>
              <li>
                  <div class="item">市级工程技术 研究中心</div>
                  <div class="count"><span>{{overallSituation.cityCenNum}}</span><span>个</span></div>
              </li>
              <li>
                  <div class="item">省级科普基地 数量</div>
                  <div class="count"><span>{{overallSituation.scienceBaseNum}}</span><span>个</span></div>
              </li>
              <li>
                  <div class="item">市级科技型 企业</div>
                  <div class="count"><span>{{overallSituation.cityScienceEnterNum}}</span><span>个</span></div>
              </li>
              <li>
                  <div class="item">省级以上科技 企业孵化器</div>
                  <div class="count"><span>{{overallSituation.provinceIncNum}}</span><span>个</span></div>
              </li>
              <li>
                  <div class="item">高新技术企业</div>
                  <div class="count"><span>{{overallSituation.highEnterNum}}</span><span>个</span></div>
              </li>
              <li>
                  <div class="item">省级科技项目 立项</div>
                  <div class="count"><span>{{overallSituation.provinceProNum}}</span><span>个</span></div>
              </li>
              <li>
                  <div class="item">市级科技项目 立项</div>
                  <div class="count"><span>{{overallSituation.cityProNum}}</span><span>个</span></div>
              </li>
          </ul>
          <div class="sub2">
            <span>文化遗产</span>
          </div>
          <ul class="situation2">
              <li>
                  <div class="item">非遗文化</div>
                  <div class="count"><span>{{overallSituation.fixRelicNum}}</span><span>项</span></div>
              </li>
              <li>
                  <div class="item">文物保护单位</div>
                  <div class="count"><span>{{overallSituation.protectClassNum}}</span><span>家</span></div>
              </li>
              <li>
                  <div class="item">A级景区数量</div>
                  <div class="count"><span>{{overallSituation.aViewNum}}</span><span>家</span></div>
              </li>
              <li>
                  <div class="item">星级酒店数量</div>
                  <div class="count"><span>{{overallSituation.starHotelNum}}</span><span>家</span></div>
              </li>
              <li>
                  <div class="item">图书馆数量</div>
                  <div class="count"><span>{{overallSituation.libraryNum}}</span><span>家</span></div>
              </li>
              <li>
                  <div class="item">博物馆数量</div>
                  <div class="count"><span>{{overallSituation.museumNum}}</span><span>家</span></div>
              </li>
              <li>
                  <div class="item">文化馆数量</div>
                  <div class="count"><span>{{overallSituation.culturalCenterNum}}</span><span>家</span></div>
              </li>
              <li>
                  <div class="item">美术馆数量</div>
                  <div class="count"><span>{{overallSituation.artMuseumNum}}</span><span>家</span></div>
              </li>
              <li>
                  <div class="item">广播人口覆盖率</div>
                  <div class="count"><span>{{overallSituation.airRate}}</span><span>%</span></div>
              </li>
              <li>
                  <div class="item">电视人口覆盖率</div>
                  <div class="count"><span>{{overallSituation.tvRate}}</span><span>%</span></div>
              </li>
          </ul>
      </div>
      <div class="left-bottom">
          <div class="panle-title">科技成果</div>
          <div class="panle-main">
            <div class="left">
              <div class="top">科技成果获省政府科技 进步奖</div>
              <div class="center">{{overallSituation.provincePriceNum}}</div>
              <div class="bottom">项</div>
            </div>
            <div class="right">
              <div class="top">技术合同认定登记</div>
              <div class="center">{{overallSituation.tecContractNum}}</div>
              <div class="bottom">万元</div>
            </div>
          </div>
      </div>
      <div class="right-top">
          <div class="panle-title">科技型高新科技企业情况</div>
          <div class="left" >
           <div class="classify-allnum">
              <p>{{allNum}}</p>
              <div><span>企业</span><span>（家）</span></div>
            </div>
           <div id="right-left"></div>
          </div>
          <div class="right" id="right-right"></div>
      </div>
      <div class="right-bottom">
          <div class="panle-title">乐山特色文化</div>
          <div class="sub">
            <span>非遗文化分析</span>
          </div>
          <div class="sub2">
            <span>文物保护单位分析</span>
          </div>
          <div class="left" >
            <div class="classify-allnum">
              <p>{{allNum02}}</p>
              <div><span>非遗文化</span><span>（项）</span></div>
            </div>
            <div id="right-bottom-left"></div>
          </div>
          <div class="right" id="right-bottom-right"></div>
          <ul class="tvWatch">
            <li>全市有广播电视台:<span>{{overallSituation.broadcastNum}}</span>座</li>
            <li>有线广播电视用户:<span>{{overallSituation.broPeoNum}}</span>万户</li>
            <li>可移动文物:<span>{{overallSituation.unFixRelicNum}}</span>件(套)</li>
          </ul>
      </div>
      <div class="tk-box" style="display: none;">
        <div class="tk-box-title">国家非遗文化</div>
        <div class="tk-list-box">
          <div class="tk-item" v-for="(i) in 5" :key="i">
            <div class="tk-item-left">
              <div class="tk-title">夹江手工造纸</div>
              <div class="tk-text">
                从隋唐初创到明清兴盛，夹江竹纸一步一步走向成熟， 《夹江县志》载：“竹纸粗精大小皆备……皆售之下 南川东等地，精者用作书签，粗者用作神楮。
              </div>
            </div>
            <div class="tk-item-right"></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import API from '@/api/city-management/common-service.js'
import echarts from 'echarts'
import { imgPath } from '@/utils/BasePath.js'
import headComponent from '@/components/head-component.vue'
import option from '@/echarts-data/city-management/common-service/techno-culture/right-left.js'
import option1 from '@/echarts-data/city-management/common-service/techno-culture/right-right.js'
import option2 from '@/echarts-data/city-management/common-service/techno-culture/right-bottom-left.js'
import option3 from '@/echarts-data/city-management/common-service/techno-culture/right-bottom-right.js'
import makerComponent from '@/components/maker-component.vue'
import heartPanel from '@/components/heart-panel.vue'
import menuList from '@/components/menu.vue'
import areaMakers from './area-makers.vue'
export default {
  components: {makerComponent, menuList, heartPanel, headComponent, areaMakers},
  data () {
    return {
      overallSituation: {},
      relicNumList: [], // 非遗
      proRelicClassNumList: [],
      makersDatas: [],
      allNum: 0,
      allNum02: 0,
      // 地图部分
      panelBig: false,
      panelList: [
        {name: '交通基础设施', index: 9, bigImg: '', icon: '', id: ''}
      ],
      panelObj: {},
      mapDatas: [],
      checkedValue: [],
      areaName: '',
      makerDatas: [],
      makerFlag: true, // maker和图例控制
      tabShowFlag: true,
      // 地图部分结束
      areaInfoData: []
    }
  },
  mounted () {
    this.initOverallData()
    this.initEnterpriseTypeNumList()
    this.initSpecialCulture()
    this.getMapData()
    this.getAreaInfo()
  },
  methods: {
    // 地图区县总体情况
    getAreaInfo () {
      API.TECHNO_AREAMAP(this, {}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        this.areaInfoData = res.mapinfo
      }).catch(err => {
        console.log(err)
      })
    },
    // 地图操作 - start
    // 获取地图数据
    getMapData () {
      // 获取图例
      API.TECHNO_MAPIMGS(this).then((resV) => {
        let res = resV.data.data.generKeyboardList
        let temp = []
        let tempObj = {}
        res.forEach(item => {
          if (item.label === '文化遗产') {
            tempObj.list01 = item.typeList
          } else if (item.label === '科技高新企业') {
            tempObj.list02 = item.typeList
          }
        })
        tempObj.list01.forEach((item, index) => {
          temp.push(Object.assign(item, {name: item.label, showType: '01', index: index, id: item.id, icon: imgPath + item.fileid02, bigImg: ''}))
        })
        tempObj.list02.forEach((item, index) => {
          temp.push(Object.assign(item, {name: item.label, showType: '02', index: index, id: item.id, icon: imgPath + item.fileid02, bigImg: ''}))
        })
        this.panelObj = tempObj
        this.panelList = temp
        console.log(this.panelList)
        this.checkedValue[0] = this.panelList[0].id
        this.getMapAreaData(this.checkedValue.toString())
      }).catch((e) => {
        console.log(e)
      })
    },
    // 点击图例
    handleSelect (e) {
      if (this.checkedValue.length === 0) {
        this.makerDatas = []
      } else {
        this.getMapAreaData(this.checkedValue.toString())
      }
    },
    // 点击左大列表（无）
    handlePanelActive () {
    },
    // 点击地图请求区域数据
    getMapAreaData (id) {
      if (id) {
        id = ',' + id + ','
      } else {
        return
      }
      API.TECHNO_MAPDATAS(this, {id: id}).then((resV) => {
        let res = resV.data.data.keyboardClickList
        let tempArr = []
        res.forEach((item, index) => {
          item.lon = Number(item.lon)
          item.lat = Number(item.lat)
          item.fileid01 = imgPath + item.fileid01
          item.fileid02 = imgPath + item.fileid02
          let temp = {id: 'ed-maker' + (index + 1), district: item.name, showTextFlag: false}
          tempArr.push(Object.assign(item, temp))
        })
        this.makerDatas = tempArr
        window._m.addMakers(this.makerDatas, (type) => {
          if (type === 1) { // 三维
            this.makerFlag = true
          } else { // 二维
            this.makerFlag = false
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
    to3dMaker (item) {
      let position = {lon: Number(item.lon), lat: Number(item.lat)}
      window._m.getSouthPointByDistance(position, () => {
      })
    },
    // 地图操作 - end
    initOverallData () {
      API.SCIENCEOVERALLSITUATION(this, {}).then(resp => {
        this.overallSituation = resp.data.data.overallSituationMap
      })
    },
    initEnterpriseTypeNumList () {
      API.SCIENCEENTERPRISETYPENUMLIST(this).then(resp => {
        let leftOption = resp.data.data.enterpriseTypeNumList
        let allNum = 0
        leftOption.forEach((item, index) => {
          allNum += item.num
        })
        this.allNum = allNum
        echarts.init(document.getElementById('right-left')).setOption(option(leftOption))
        let rightOption = resp.data.data.districtEnterpriseNumList
        echarts.init(document.getElementById('right-right')).setOption(option1(rightOption))
      })
    },
    initSpecialCulture () {
      API.SPECIALCULTURE(this, {}).then(resp => {
        this.relicNumList = resp.data.data.relicNumList
        let allNum = 0
        this.relicNumList.forEach((item, index) => {
          allNum += item.num
        })
        this.allNum02 = allNum
        let chart = echarts.init(document.getElementById('right-bottom-left'))
        chart.setOption(option2(this.relicNumList))
        chart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: 0
        })
        chart.on('mouseover', function (e) {
          // 当检测到鼠标悬停事件，取消默认选中高亮
          chart.dispatchAction({
            type: 'downplay'
          })
          // 高亮显示悬停的那块
          chart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: e.dataIndex
          })
        })
        // 检测鼠标移出后显示之前默认高亮的那块
        chart.on('mouseout', function (e) {
          chart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
          })
        })

        this.proRelicClassNumList = resp.data.data.proRelicClassNumList
        echarts.init(document.getElementById('right-bottom-right')).setOption(option3(this.proRelicClassNumList))
      })
    },
    beforeDestroy () {
      try {
        window._m.clear()
      } catch (error) {

      }
    }
  }
}
</script>

<style lang="scss" scoped>
.techno-culture-container{
    position: absolute;
    background: #000000;
    overflow: hidden;
    // 地图样式-start
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
        > .g-panel-btn {
            width: 100%;
            height: 0.25rem;
            margin-left: .3rem;
            margin-bottom: .1rem;
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
              font-size:0.16rem;
              font-family:Source Han Sans CN;
              font-weight:500;
              color:rgba(255,255,255,1);
              cursor: pointer;
            }
            .g-active {
              background: #D5602C;
            }
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
    .maker-small {
      width: 0.5rem;
      height: 0.5rem;
      cursor: pointer;
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
    // 地图样式-end
    .tk-box {
     position: absolute;
     left: 50%;
     top: 20%;
     width: 6.86rem;
     height: 5.05rem;
     background: url('../../../assets/city-management/common-service/techno-culture/tk.png') no-repeat;
     background-size: 100% 100%;
     z-index: 99;
     .tk-box-title {
       position: absolute;
       width: 100%;
       font-size: 0.24rem;
       color: #FFFFFF;
       left: 0.25rem;
       top: 0.55rem;
     }
     .tk-list-box {
       position: absolute;
       top: 0.9rem;
       left: 0.25rem;
       width: 6.2rem;
       height: 4rem;
       overflow-y: auto;
       overflow-x: hidden;
       .tk-item {
         width: 6.2rem;
         height: 1.44rem;
         background: url('../../../assets/city-management/common-service/techno-culture/tk-inner.png') no-repeat;
         background-size: 100% 100%;
         margin: 0 0.04rem;
         display: flex;
         flex-direction: row;
         justify-content: center;
         align-items: center;
          .tk-item-left {
           flex: 1;
           padding: 0.2rem;
           box-sizing: border-box;
           .tk-title {
             color: #DFE2FB;
             font-size: .18rem;
             margin: 0.05rem 0;
             padding-left: 0.1rem;
             box-sizing: border-box;
           }
           .tk-text {
             color: #FFFFFF;
             font-size: 0.17rem;
             padding-left: 0.1rem;
             box-sizing: border-box;
              display: -webkit-box;
              /*! autoprefixer: off */
              -webkit-box-orient: vertical;
              /* autoprefixer: on */
              -webkit-line-clamp: 3;
              overflow: hidden;
           }
          }
         .tk-item-right {
           width: 1.50rem;
           height: 1.0rem;
           margin-right: 0.2rem;
           margin-top: 0.1rem;
         }
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
    .left-top{
        position: absolute;
        width: 10.48rem;
        height: 7.27rem;
        left: 0.29rem;
        top: 0.24rem;
        z-index: 99;
        background: url('../../../assets/city-management/common-service/techno-culture/leftTopBackground.png') no-repeat;
        background-size: 100% 100%;
        .panle-title {
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
        .sub{
          position: absolute;
          left:0.6rem;
          top:1rem;
          display: inline-block;
          width:2.9rem;
          height:0.3rem;
          line-height: 0.30rem;
          font-size: 0.20rem;
          font-weight: 600;
          box-sizing: border-box;
          padding-left: 0.5rem;
          color: #EFF8FE;
          background: url('../../../assets/city-management/common-service/benefit-people/point.png') left center no-repeat;
          background-size: 0.54rem 0.54rem;
        }
        .sub2{
          position: absolute;
          left:0.6rem;
          top:4rem;
          display: inline-block;
          width:2.9rem;
          height:0.3rem;
          line-height: 0.30rem;
          box-sizing: border-box;
          padding-left: 0.5rem;
          font-size: 0.20rem;
          font-weight: 600;
          color: #EFF8FE;
          background: url('../../../assets/city-management/common-service/benefit-people/point.png') left center no-repeat;
          background-size: 0.54rem 0.54rem;
        }
        .situation{
            width: 10rem;
            position: absolute;
            left: 0.73rem;
            top: 1.2rem;
            li{
                list-style: none;
                display: inline-block;
                width: 1.3rem;
                height: 1.1rem;
                text-align: center;
                font-size:0.18rem;
                font-family:Source Han Sans CN;
                font-style:italic;
                color:rgba(223,227,251,1);
                box-sizing: border-box;
                margin-right: 0.6rem;
                margin-top: 0.2rem;
                .count{
                    height: 0.84rem;
                    background: url('../../../assets/city-management/common-service/techno-culture/numcase.png') no-repeat center center;
                    background-size: 1.45rem 0.84rem;
                    span:nth-child(1) {
                      line-height: 0.84rem;
                      font-size:0.26rem;
                      font-family:Impact;
                      font-weight:bold;
                      font-style:italic;
                      color:rgba(249,230,89,1);
                    }
                    span:nth-child(2) {
                      font-size:0.18rem;
                      font-family:Source Han Sans CN;
                      font-weight:bold;
                      font-style:italic;
                      color:rgba(255,255,255,1);
                      padding-left: 0.1rem;
                    }
                }
            }
            li:nth-child(1){
              margin-left: 0;
            }
            li:nth-child(5){
              margin-left: 0;
            }
        }
        .situation2{
            width: 10rem;
            position: absolute;
            left: 0.73rem;
            top: 4.3rem;
            li{
                list-style: none;
                display: inline-block;
                width: 1.38rem;
                height: 1.1rem;
                text-align: center;
                font-size: 0.18rem;
                font-family:Source Han Sans CN;
                font-style:italic;
                color:rgba(223,227,251,1);
                box-sizing: border-box;
                margin-right: 0.5rem;
                margin-top: 0.1rem;
                .count{
                    height: 0.84rem;
                    background: url('../../../assets/city-management/common-service/techno-culture/numcase.png') no-repeat center center;
                    background-size: 1.45rem 0.84rem;
                    span:nth-child(1) {
                      line-height: 0.84rem;
                      font-size:0.26rem;
                      font-family:Impact;
                      font-weight:bold;
                      font-style:italic;
                      color:rgba(249,230,89,1);
                    }
                    span:nth-child(2) {
                      font-size:0.18rem;
                      font-family:Source Han Sans CN;
                      font-weight:bold;
                      font-style:italic;
                      color:rgba(255,255,255,1);
                      padding-left: 0.1rem;
                    }
                }
            }
            li:nth-child(1){
              margin-left: 0;
            }
            li:nth-child(5){
              margin-left: 0;
            }
        }
    }
    .left-bottom{
        position: absolute;
        width: 10.48rem;
        height: 3.44rem;
        left: 0.29rem;
        top: 7.3rem;
        z-index: 99;
        background: url(/static/img/background-big.b1c4a83.png) no-repeat;
        background-size: 100% 3.44rem;
        .panle-title{
          position: absolute;
          top: 0.12rem;
          left:0.3rem;
          font-size: 0.24rem;
          color: #FFFFFF;
          padding: 0.15rem 0.18rem;
          box-sizing: border-box;
          background: url('../../../assets/common/panle-title.png') no-repeat;
          background-position-y: 100%;
          background-size: 0.58rem 0.19rem;
        }
        .panle-main{
          position: absolute;
          left: 0;
          top: 0.5rem;
          right: 0;
          bottom: 0;
          margin: auto;
          width: 9.33rem;
          height: 2.74rem;
          background: url('../../../assets/city-management/common-service/techno-culture/leftBottom.png') no-repeat center center;
          background-size:100% 100%;
          .left{
            color:rgba(223,227,251,1);
            position: absolute;
            left: 0.9rem;
            top: 0.8rem;
            font-family:Impact;
            text-align: center;
            .top{
              width:1.70rem;
              height:0.41rem;
              font-size:0.17rem;
              font-family:Source Han Sans CN;
              font-weight:400;
              font-style:italic;
              color:rgba(223,227,251,1);
              line-height:0.24rem;
              text-align: center;
            }
            .center{
              font-size:0.28rem;
              padding-top: 0.1rem;
            }
            .bottom {
              font-size:0.17rem;
            }
          }
          .right{
            color:rgba(223,227,251,1);
            position: absolute;
            left: 7.0rem;
            top: 0.8rem;
            text-align: center;
            .top{
              width:1.37rem;
              height:0.17rem;
              font-size:0.17rem;
              font-family:Source Han Sans CN;
              font-weight:400;
              font-style:italic;
              color:rgba(223,227,251,1);
            }
            .center{
              font-size:0.28rem;
              font-family:Impact;
              font-weight:400;
              padding: 0.1rem 0;
              padding-top: 0.2rem;
            }
            .bottom {
              font-size:0.17rem;
            }
          }
        }
    }
    .right-top{
        position: absolute;
        width: 10.48rem;
        height: 5.32rem;
        right:0;
        top: 0.24rem;
        z-index: 99;
        background: url('../../../assets/city-management/common-service/techno-culture/rightTopBackground.png') no-repeat;
        background-size: 100% 5.32rem;
        .panle-title{
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
        .left{
          width: 2.7rem;
          height: 72%;
          position: absolute;
          top: 1.3rem;
          left:0.6rem;
          #right-left {
            position: absolute;
            width: 100%;
            height: 100%;
          }
           .classify-allnum{
            position: absolute;
            width: 100%;
            top: 0.9rem;
            font-style: italic;
            text-align: center;
            p{
              margin-bottom: .05rem;
              font-size: .26rem;
              letter-spacing: 0.01rem;
              font-weight: bold;
              color: #fff;
              font-family:Impact;
              background-image: -webkit-linear-gradient(bottom, #F9FBFF, #57D2FF);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            span:nth-child(1){
              font-size: .20rem;
              font-weight: bold;
              font-style: italic;
              color: #DFE2FD;
            }
            span:nth-child(2){
              font-size: .14rem;
              font-style: italic;
              color: rgba(223,226,253,0.72);
            }
          }
        }
        .right{
          width: 6.6rem;
          height: 72%;
          position: absolute;
          top:0.8rem;
          left: 3.4rem;
        }
    }
    .right-bottom{
        position: absolute;
        width: 10.48rem;
        height: 5.37rem;
        right: 0;
        top: 5.3rem;
        z-index: 100;
        background: url('../../../assets/city-management/common-service/benefit-people/background-big.png') no-repeat;
        background-size: 100% 100%;
        .panle-title{
            position: absolute;
            top: 0.34rem;
            left:0.44rem;
            font-size: 0.24rem;
            color: #FFFFFF;
            padding: 0.15rem 0.15rem;
            box-sizing: border-box;
            background: url('../../../assets/common/panle-title.png') no-repeat;
            background-size: 0.58rem 0.19rem;
            background-position-y: 100%;
        }
        .sub{
          position: absolute;
          left:0.76rem;
          top:1.1rem;
          display: inline-block;
          width:2.9rem;
          height:0.3rem;
          box-sizing: border-box;
          padding-left: 0.5rem;
          color: #EFF8FE;
          font-size: 0.20rem;
          background: url('../../../assets/city-management/common-service/benefit-people/point.png') left center no-repeat;
          background-size: 0.54rem 0.54rem;
        }
        .sub2{
          position: absolute;
          left:5rem;
          top:1.1rem;
          display: inline-block;
          width:2.9rem;
          height:0.3rem;
          font-size: 0.20rem;
          box-sizing: border-box;
          padding-left: 0.5rem;
          color: #EFF8FE;
          background: url('../../../assets/city-management/common-service/benefit-people/point.png') left center no-repeat;
          background-size: 0.54rem 0.54rem;
        }
        .left{
          position: absolute;
          left: 0.6rem;
          width: 40%;
          margin-left: -5%;
          height: 50%;
          top: 1.3rem;
          #right-bottom-left {
            position: absolute;
            width: 100%;
            height: 100%;
          }
          .classify-allnum{
            position: absolute;
            width: 100%;
            top: 1.0rem;
            left: -10%;
            font-style: italic;
            text-align: center;
            p{
              margin-bottom: .05rem;
              font-size: .26rem;
              letter-spacing: 0.01rem;
              font-weight: bold;
              color: #fff;
              font-family:Impact;
              background-image: -webkit-linear-gradient(bottom, #F9FBFF, #57D2FF);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            span:nth-child(1){
              font-size: .20rem;
              font-weight: bold;
              font-style: italic;
              color: #DFE2FD;
            }
            span:nth-child(2){
              font-size: .14rem;
              font-style: italic;
              color: rgba(223,226,253,0.72);
            }
          }
        }
        .right{
          position: absolute;
          left: 5rem;
          width: 50%;
          height: 50%;
          top: 1.3rem;
        }
        .tvWatch{
          position: absolute;
          bottom: 0.6rem;
          display: flex;
          justify-content: space-around;
          left: 0.6rem;
          li{
            list-style: none;
            height: 0.31rem;
            width: 3.2rem;
            font-size:0.20rem;
            line-height: 0.31rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(239,248,254,1);
            line-height:0.24rem;
            padding-left: 0.3rem;
            box-sizing: border-box;
            vertical-align: middle;
          }
          li span{
            font-size:0.24rem;
            font-family:Impact;
            font-weight:bold;
            font-style:italic;
            color:rgba(252,230,47,1);
            padding-left: 0.1rem;
            padding-right: 0.1rem;
          }
          li:nth-child(1){
            background: url('../../../assets/city-management/common-service/techno-culture/iconWatch.png') no-repeat center left;
            background-size: 0.27rem 0.31rem;
          }
          li:nth-child(2){
            background: url('../../../assets/city-management/common-service/techno-culture/iconUserTV.png') no-repeat center left;
            background-size: 0.27rem 0.31rem;
          }
          li:nth-child(3){
            background: url('../../../assets/city-management/common-service/techno-culture/iconRelic.png') no-repeat center left;
            background-size: 0.27rem 0.31rem;
          }
        }
    }
    .g-maker-text {
      padding: 0 0.2rem 0.2rem 0.35rem;
      position: absolute;
      left: 40%;
      top: 50%;
      z-index: 1;
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
      .g-video-watch {
        margin: 0 auto;
        width: 1.21rem;
        height: 0.32rem;
        line-height: 0.32rem;
        text-align: center;
        background: url('../../../assets/common/natural-btn.png') center no-repeat;
        background-size: 100% 100%;
        font-size:0.18rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        font-style:italic;
        color:rgba(237,214,174,1);
      }
    }
}
</style>
