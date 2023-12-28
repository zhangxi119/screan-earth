<!--
 * @Descripttion: 数字规划馆地图点位轮播
 * @Author: zhangxi
 * @Date: 2020-05-19 19:58:03
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-28 10:59:30
 -->
<template>
  <div>
      <div class="makers-box">
        <!-- maker -->
        <maker-component :mLeft="'0'" :mTop="'0'" v-show="makerFlag" v-for="(item, index) in makersDatas" :key="index" :makerData="item">
            <div slot="maker">
                <!-- <div class="g-maker-num">666人</div> -->
                <div class="maker-img">
                    <img @click="showMarkerDetail(item, index)" src="../../../assets/common/event-line.png" alt="" />
                </div>
            </div>
            <img v-show="item.showTextFlag" slot="img"  src="@/assets/common/event-icon.png" alt="" class="line2" />
            <div @mouseenter="stopBanner()" @mouseleave="startBanner()" slot="text" class="g-maker-text" v-show="item.showTextFlag">
                <!-- <div v-if="type === 1">
                  <h3>{{item.qx}}总体情况</h3>
                  <div class="g-text-item">学校数：<span>{{item.schoolnum}}</span> 所</div>
                  <div class="g-text-item">学生数：<span>{{item.studentnum}}</span> 人</div>
                  <div class="g-text-item">老师数：<span>{{item.teachernum}}</span> 人</div>
                  <div class="g-text-item">计划招生人数：<span>{{item.plannum}}</span> 人</div>
                  <div class="g-text-item">少数民族学生数：<span>{{item.smallnum}}</span> 人</div>
                </div>
                <div v-if="type === 2">
                  <h3>{{item.qx}}总体情况</h3>
                  <div class="g-text-item">医疗机构数：<span>{{item.num}}</span> 家</div>
                  <div class="g-text-item">定点医疗机构数：<span>{{item.dnum}}</span> 家</div>
                  <div class="g-text-item">医疗人员数：<span>{{item.pnum}}</span> 人</div>
                  <div class="g-text-item">床位数：<span>{{item.cnum}}</span> 张</div>
                </div>
                <div v-if="type === 3">
                  <h3>{{item.kj08001}}总体情况</h3>
                  <div class="g-text-item">娱乐场所数：<span>{{item.kj08002}}</span> 家</div>
                  <div class="g-text-item">经营场所数：<span>{{item.kj08003}}</span> 家</div>
                  <div class="g-text-item">科技企业数：<span>{{item.kj08004}}</span> 家</div>
                </div> -->
                <div class="g-model-close" @click.stop="closeModel(item, index)"></div>
                <div v-if="item.type === '大数据产业园'">
                    <h3>{{item.sz09001}}</h3>
                    <div class="g-img-title">总投资：<span>{{item.sz09002}}</span> 亿元</div>
                    <div class="g-text-title">建设总规模</div>
                    <div class="g-text-item">机柜：<span>机柜不低于{{item.sz09003}}万台</span></div>
                    <div class="g-text-item g-right">服务器：<span>{{item.sz09004}}万台</span></div>
                    <div class="g-text-title">{{item.sz09009}}年企业入驻</div>
                    <div class="g-text-item">签约企业：<span>{{item.sz09005}}家</span></div>
                    <div class="g-text-item g-right">合同谈判：<span>{{item.sz09006}}家</span></div>
                    <div class="g-text-item">意向项目：<span>{{item.sz09007}}个</span></div>
                    <div class="g-text-item g-right">建成入驻：<span>{{item.sz09008}}家</span></div>
                    <div class="g-text-title">{{item.sz09012}}</div>
                    <div class="g-text-item">机柜：<span>{{item.sz09013}}万组</span></div>
                    <div class="g-text-item g-right">服务器：<span>{{item.sz09014}}万台</span></div>
                    <div class="g-text-item">入驻企业：<span>{{item.sz09015}}+</span></div>
                </div>
                <div v-if="item.type === '数字经济示范园'">
                    <h3>{{item.sz10001}}</h3>
                    <div class="g-img-title">总投资：<span>{{item.sz10002}}</span> 亿元</div>
                    <div class="g-text-title">建设总规模</div>
                    <div class="g-text-item">占地：<span>{{item.sz10003}}亩</span></div>
                    <div class="g-text-item g-text-item2">总建筑面积：<span>{{item.sz10004}}立方米</span></div>
                    <div class="g-text-title">企业入驻</div>
                    <div class="g-text-item">拟入驻项目：<span>{{item.sz10005}}个</span></div>
                    <div class="g-text-item g-right">总投资：<span>{{item.sz10006}} 亿元</span></div>
                    <div class="g-text-title">阶段进度</div>
                    <!-- <div class="g-text-item" style="width: 100%;line-height: 0.22rem;padding-right: 0.21rem;box-sizing: border-box;">阶段进度：<span>{{item.sz10007_1 + ',' + item.sz10007_2 + ',' + item.sz10007_3 + ',' + item.sz10007_4}}</span></div> -->
                    <div class="g-step-box">
                      <div class="g-step-item">{{item.sz10007_1}}</div>
                      <div class="g-step-item">{{item.sz10007_2}}</div>
                      <div class="g-step-item">{{item.sz10007_3}}</div>
                      <div class="g-step-item">{{item.sz10007_4}}</div>
                      <!-- <div class="g-step-gray"></div> -->
                    </div>
                    <div class="g-step-gray"></div>
                </div>
                <div v-if="item.type === '电子信息半导体产业园'">
                    <h3>{{item.sz11001}}</h3>
                    <div class="g-img-title">总投资：<span>{{item.sz11002}}</span> 亿元</div>
                    <div class="g-text-title">建设总规模</div>
                    <div class="g-text-item g-text-item2">总规划面积：<span>{{item.sz11003}} 平方公里</span></div>
                    <div class="g-text-item g-text-item2">首期：<span>{{item.sz11004}} 平方公里</span></div>
                    <div class="g-text-title">企业入驻</div>
                    <div class="g-text-item" style="width: 40%;">新签约项目：<span>{{item.sz11005}}个</span></div>
                    <div class="g-text-item g-right" style="width: 60%;">新签约总投资：<span>{{item.sz11006}} 亿元</span></div>
                    <div class="g-text-item" style="width: 40%;">在谈项目：<span>{{item.sz11007}}个</span></div>
                    <div class="g-text-item g-right" style="width: 60%;">在谈总投资：<span>{{item.sz11008}} 亿元</span></div>
                    <div class="g-text-item" style="width: 40%;">在建项目：<span>{{item.sz11009}}个</span></div>
                    <div class="g-text-item g-right" style="width: 60%;">在建总投资：<span>{{item.sz11010}} 亿元</span></div>
                    <div class="g-text-title">{{item.sz11011_1}}</div>
                    <div class="g-text-item g-text-item2">{{item.sz11011_2}}<span></span></div>
                    <div class="g-text-item g-text-item2">{{item.sz11011_3}}<span></span></div>
                    <!-- <div class="g-text-item" style="width: 100%;line-height: 0.22rem;padding-right: 0.21rem;box-sizing: border-box;">阶段进度：<span>{{item.sz11011_1 + ',' + item.sz11011_2 + ',' + item.sz11011_3}}</span></div> -->
                </div>
                <div v-if="item.type === '电子商务'">
                    <h3>{{item.sz08002}}</h3>
                    <div class="g-tech-echart" :id="'echarts' + item.id"></div>
                </div>
            </div>
        </maker-component>
        <!-- maker-end -->
      </div>
  </div>
</template>
<script>
// import API from '@/api/emergency-command/menu-lists.js'
// import API2 from '@/api/city-management/common-service.js'
// import API from '@/api/city-management/common-service.js'
import echarts from 'echarts'
import API from '@/api/programme/digital-economy.js'
import mapEcharts from '@/echarts-data/programme/digital-economy/map-echarts.js'
import leshanArea from '../../../../static/CesiumAssets/js/leshanArea.js'
import makerComponent from '@/components/maker-component.vue'
export default {
  components: {
    makerComponent
  },
  data () {
    return {
      makersDatas: [],
      makerFlag: true,
      timer: null,
      iIndex: 0,
      type: 1,
      dataList: [],
      areaID: []
    }
  },
  created () {
  },
  mounted () {
    // this.getMapList()
    this.getMapList()
  },
  beforeDestroy () {
    window._m.clear()
  },
  methods: {
    // 数字产业园区地图数据
    getMapList () {
      this.dataList = []
      this.makersDatas = []
      API.GET_MAP_NUMBERDATA(this, {}).then((resA) => {
        let res = resA.data.data
        this.dataList = res.mapInfo
        this.getMapPointData()
        this.drawMapArea()
        // 前往三维103.70901784365948 29.53956324493919// 103.72081432632419 29.529954431785683
        let position = {lon: 103.72081432632419, lat: 29.529954431785683, distance: 16000}
        window._m.getSouthPointByDistance(position, () => {
        })
      }).catch(err => {
        console.log(err)
      })
    },
    // 电子商务地图数据
    getMapList2 () {
      this.dataList = []
      this.makersDatas = []
      API.GET_MAP_TECH(this, {}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        this.dataList = res.mapInfo.areaList
        // 回到二维
        window._m.redirectDimenion()
        this.getMapData()
      }).catch(err => {
        console.log(err)
      })
    },
    // 显示地图详情
    showMarkerDetail (item, index) {
      this.makersDatas.forEach((ite, i) => {
        if (index !== i) {
          ite.showTextFlag = false
          ite.zIndex = 9
        } else {
          this.iIndex = index
          this.autoBanner()
        }
      })
      item.showTextFlag = !item.showTextFlag
      let d = item
      d.showTextFlag = true
      d.zIndex = 10
      this.$set(this.makersDatas, index, d)
    },
    // 绘制数字产业园区域
    drawMapArea () {
      // 大数据产业园
      let a01 = [103.700143, 29.539344, 103.702052, 29.533547, 103.708404, 29.53702, 103.705636, 29.542135]
      // let point01 = [103.7033, 29.540]
      // 电子信息半导体产业园数字经济示范园
      let a02 = [103.717673, 29.535482, 103.719519, 29.532831, 103.723671, 29.534847, 103.721761, 29.537535]
      // let point02 = [103.708618, 29.523367]
      // 电子信息半导体产业园
      let a03 = [103.706148, 29.52448, 103.710203, 29.526497, 103.710418, 29.522501, 103.707392, 29.520447]
      // let point03 = [103.720806, 29.536369]
      // [103.708769, 29.521049, 103.712545, 29.523318, 103.712255, 29.527117, 103.706279, 29.524457]
      // 绘制
      let id01 = window._m.drawZone(a01, 'rgba(70,175,254,0.8)', 'rgba(216,248,254,1)')
      let id02 = window._m.drawZone(a02, 'rgba(221,173,155,0.8)', 'rgba(255,248,246,1)')
      let id03 = window._m.drawZone(a03, 'rgba(153,242,213,0.8)', 'rgba(246,255,252,1)')
      this.areaID.push(id01)
      this.areaID.push(id02)
      this.areaID.push(id03)
    },
    // 电子商务有区县名称点位
    getMapData () {
      // 区县总体情况
      console.log(this.dataList)
      if (this.dataList.length) {
        let data = this.dataList
        data.forEach((item, index) => {
          if (leshanArea[item.sz08002]) {
            item.lon = +(leshanArea[item.sz08002].lon)
            item.lat = +(leshanArea[item.sz08002].lat)
            item.type = '电子商务'
            if (index === 0) {
              item.zIndex = 10
              item.showTextFlag = true
            } else {
              item.showTextFlag = false
              item.zIndex = 9
            }
            item.id = 'techno_area_' + index
            this.makersDatas.push(item)
          }
        })
        console.log(this.makersDatas)
        this.$nextTick(() => {
          this.makersDatas.forEach((ite, i) => {
            echarts.init(document.getElementById('echarts' + ite.id)).setOption(mapEcharts(ite), true)
          })
        })
        window._m.addMakers(this.makersDatas, (type) => {
          if (type === 1) { // 三维
            this.makerFlag = false
          } else { // 二维
            this.makerFlag = true
          }
        })
        // 区域总体信息循环显示
        this.autoBanner()
      }
    },
    // 数字产业园区无位置信息点位
    getMapPointData () {
      let data = this.dataList
      // 大数据产业园
      let temp01 = data.park09
      temp01.zIndex = 10
      temp01.type = '大数据产业园'
      temp01.lon = 103.7033
      temp01.lat = 29.540
      temp01.showTextFlag = true
      temp01.id = 'digital_area_01'
      this.makersDatas.push(temp01)
      // 数字经济示范园
      let temp02 = data.park10
      temp02.zIndex = 9
      temp02.type = '数字经济示范园'
      temp02.lon = 103.720806
      temp02.lat = 29.536369
      temp02.showTextFlag = false
      temp02.id = 'digital_area_02'
      this.makersDatas.push(temp02)
      // 电子信息半导体产业园
      let temp03 = data.park11
      temp03.zIndex = 9
      temp03.type = '电子信息半导体产业园'
      // 103.708618 29.523367
      temp03.lon = 103.70898135
      temp03.lat = 29.52577684
      temp03.showTextFlag = false
      temp03.id = 'digital_area_03'
      this.makersDatas.push(temp03)
      console.log(this.makersDatas)
      window._m.addMakers(this.makersDatas, (type) => {
        if (type === 1) { // 三维
          this.makerFlag = true
        } else { // 二维
          this.makerFlag = false
        }
      })
      // 区域总体信息循环显示
      this.autoBanner()
    },
    autoBanner () {
      // 区域总体信息循环显示
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        ++this.iIndex
        if (this.iIndex > this.makersDatas.length - 1) {
          this.iIndex = 0
        }
        this.makersDatas.forEach((item, index) => {
          if (index !== this.iIndex) {
            this.makersDatas[index].showTextFlag = false
            this.makersDatas[index].zIndex = 9
          }
        })
        let d = this.makersDatas[this.iIndex]
        d.showTextFlag = true
        d.zIndex = 10
        this.$set(this.makersDatas, this.iIndex, d)
      }, 5000)
    },
    stopBanner () {
      clearInterval(this.timer)
    },
    startBanner () {
      this.autoBanner()
    },
    closeModel (item, index) {
      let d = item
      d.showTextFlag = false
      this.stopBanner()
      this.$set(this.makersDatas, index, d)
    }
    // 地图结束
  }
}
</script>
<style lang="scss" scoped>
// maker
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
    font-size: 0;
    position: absolute;
    // left: 23.68rem;
    // top: 2.5rem;
    width: 4rem;
    padding-bottom: 0.3rem;
    padding-top: 0.2rem;
    z-index: 2;
    // background: url('../../../assets/city-management/common-service/education-resource/small-kuang.png') center no-repeat;
    background: url('../../../assets/common/kuang-num.png') center no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    box-sizing: border-box;
    .g-model-close {
        position: absolute;
        right: 0.22rem;
        top: 0.3rem;
        width: 0.24rem;
        height: 0.24rem;
        background: url('../../../assets/common/closepopicon.png') center no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
    }
    h3 {
      margin: 0.1rem 0 0.18rem 0;
      font-size:0.22rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(255,255,255,1);
    }
    .g-img-title {
        position: relative;
        padding-left: 0.25rem;
        margin-bottom: 0.1rem;
        width: 100%;
        box-sizing: border-box;
        font-size:0.17rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        font-style:italic;
        color:rgba(223,227,251,1);
        line-height: 0.21rem;
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            display: inline-block;
            width: 0.18rem;
            height: 0.2rem;
            background: url('../../../assets/common/maker-text.png') center no-repeat;
            background-size: 100% 100%;
        }
        span {
            font-size:0.24rem;
            font-family:Impact;
            font-weight:bold;
            font-style:italic;
            color:rgba(249,230,89,1);
        }
    }
    .g-text-title {
        margin-bottom: 0.1rem;
        font-size:0.18rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        color:rgba(255,255,255,1);
    }
    .g-text-item {
      width: 49%;
      display: inline-block;
      margin-bottom: 0.15rem;
      font-size:0.17rem;
      height: 0.18rem;
      line-height: 0.18rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(223,226,251,1);
      span {
        font-size:0.17rem;
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
    .g-text-item2 {
        width: 100%;
        box-sizing: border-box;
        padding-right: 0.21rem;
    }
    .g-right {
        box-sizing: border-box;
        padding-right: 0.21rem;
        text-align: right;
    }
    .g-tech-echart {
        margin: 0 auto;
        width: 3.6rem;
        height: 2rem;
    }
  }
  .g-maker-text01 {
    width: 100%;
    box-sizing: border-box;
    // height: 3.03rem;
    padding-bottom: 0.3rem;
    left: 13.65rem;
    top: 5.52rem;
    padding-left: 0.2rem;
    background: url('../../../assets/city-management/common-service/education-resource/small-kuang2.png') center no-repeat;
    background-size: 100%;
  }
  .g-step-gray {
      width: 100%;
      height: 0.5rem;
      background: rgba(0, 0, 0, 0.5);
      box-shadow: 0 0 0.3rem rgba(0, 0, 0, 1);
      position: absolute;
      bottom: 0;
      left: 0;
  }
  .g-step-box {
      position: relative;
      height: 1.55rem;
      overflow-y: auto;
      padding-left: 0.08rem;
      box-sizing: border-box;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
    .g-step-item {
      position: relative;
      padding-left: 0.2rem;
      padding-right: 0.21rem;
      padding-bottom: 0.2rem;
      box-sizing: border-box;
      line-height: 0.23rem;
      font-size:0.17rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(223,226,251,1);
      border-left: 0.01rem solid #48AAF4;
      &:last-child {
        border-color: transparent;
      }
      // blue-circle
      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        left: -0.08rem;
        top: 0;
        z-index: 2;
        width: 0.16rem;
        height: 0.16rem;
        background: url('../../../assets/common/blue-circle.png') center no-repeat;
        background-size: 100%;
      }
    }
  }
  // maker-end
</style>
