<!--
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-01-21 14:48:57
 * @LastEditors: hangzhang
 * @LastEditTime: 2020-03-24 14:42:49
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-14 11:36:59
 -->
<template>
  <div class="test-container">
   <div class="test-container-inner">
      <button @click="getPosition">获取相机位置</button>
    <button @click="addMakers">添加maker</button>
    <button @click="removeMakers">移除maker</button>
    <button @click="addZone">添加区域</button>
    <button @click="removeZone">移除区域</button>
     <button @click="setZoneStyle">设置区域样式</button>
     <button @click="addFight">添加飞行曲线</button>
     <button @click="removeFight">移除飞行曲线</button>
      <button @click="addFight2">添加自定义飞行曲线</button>
    <button @click="removeFight2">移除自定义飞行曲线</button>
    <button @click="addZoneHeat">添加区域热力图</button>
    <button @click="removeZoneHeat">移除区域热力图</button>
    <button @click="addPointHeat">添加点位热力图</button>
     <button @click="removePointHeat">移除点位热力图</button>
    <button @click="addRadar">添加雷达扫描图</button>
    <button @click="removeRadar">移除雷达扫描图</button>
    <button @click="addScanEffect">添加扫描线</button>
    <button @click="removeScanEffect">移除扫描线</button>
    <button @click="recover">恢复</button>
    <div id="test" v-if="!isRemove" class="info-window common-info"></div>
   </div>
    <!-- 贫困人口 -->
    <div class="maker-box-poor" id="poor" v-if="poor" @click="showPoorData">
      <div class="name">贫困人口</div>
      <img src="../assets/common/poorPeopleTop.png" class="topHead">
      <div class="line"></div>
      <div class="dot"></div>
      <div class="cricle">
        <div class="inner-cricle"></div>
      </div>
      <div class="overall-situation" v-if="poorData" id="overallSituation">
        <p class="title">市中区总体情况</p>
        <ul class="situation-item">
          <li>一卡通数：<span>2,411,491</span>家</li>
          <li>贫困人数：<span>2,432</span>个</li>
          <li>老师数：<span>241</span>个</li>
          <li>预警数：<span>24,411</span>个</li>
          <li>总发人数：<span>24,100</span>个</li>
          <li>总发放金额：<span>2,410</span>个</li>
          <li><img src="../assets/common/line2.png" class="line2"></li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
import menus from '@/components/menu.vue'
import legendComponet from '@/components/legend-component'
import menu from '@/utils/menu.js'
export default {
  components: {legendComponet, menus},
  data () {
    return {
      menu: menu,
      list: [
        {
          name: '自然灾害'
        },
        {
          name: '安全生产'
        },
        {
          name: '总体概况'
        },
        {
          name: '公共卫生'
        },
        {
          name: '重大危险源'
        }, {
          name: '自然灾害2'
        },
        {
          name: '重大危险源1'
        }, {
          name: '自然灾害3'
        }
      ],
      selectIndex: -1,
      isRemove: true,
      radar: null,
      makers: [],
      lineEntities: [],
      cusids: [],
      heatIds: '',
      poor: false,
      poorData: false
    }
  },
  mounted () {

  },
  methods: {
    recover () {
      window._m.redirectDimenion()
    },
    tab (data) {
      this.selectIndex = data.index
      console.log(data)
    },
    removePointHeat () {
      window._m.removeHeatPointMap(['makersubject'])
    },
    addPointHeat () {
      window._m.createHeatZoneMap('市中区', 30)
      window._m.createHeatZoneMap('峨边彝族自治县', 50)
      window._m.createHeatZoneMap('沙湾区', 20)
      window._m.createHeatZoneMap('峨眉山市', 80)
      window._m.createHeatZoneMap('夹江县', 60)
      window._m.createHeatZoneMap('井研县', 20)
      window._m.createHeatZoneMap('五通桥区', 120)
      window._m.createHeatZoneMap('键为县', 80)
      window._m.createHeatZoneMap('沐川县', 100)
      window._m.createHeatZoneMap('马边彝族自治县', 60)
      window._m.createHeatZoneMap('金口河区', 60)
    },
    addFight () {
      this.lineEntities = [...this.lineEntities, ...window._m.addFightLine({
        startPoint: [103.548382, 28.834944],
        endPoint: [103.812983, 29.400629]
      })]
      // this.lineEntities = [...this.lineEntities, ...window._m.addFightLine({
      //   startPoint: [103.7545217500365, 29.60289695274685],
      //   endPoint: [103.74816302020817, 29.591900506175925]
      // })]
    },
    addFight2 () {
      this.cusids = [...this.cusids, ...window._m.customFight({
        startPoint: [103.74203426550554, 29.5875707907767],
        endPoint: [103.74816302020817, 29.591900506175925]
      })]
    },
    removeFight2 () {
      window._m.removeEntity(this.cusids)
    },
    removeFight () {
      window._m.removeEntity(this.lineEntities)
    },
    getPosition () {
      window._m.getCamera()
    },
    addZone () {
      // window._m.addZone()

      window._m.flyToByMector({
        x: '-1425960.8946371104',
        y: '5748110.312018258',
        z: '2919410.936429332',
        heading: '6.17906427656023',
        pitch: '-0.625409580824893',
        roll: '6.283185307179576'
      })
    },
    removeZone () {
      window._m.removeZone()
    },
    addMakers () {
      // 贫穷人口图标
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
    setZoneStyle () {
      window._m.getSouthPointByDistance({
        lon: 103.89413590578913,
        lat: 28.96122195789067
      })
    },
    removeMakers () {
      this.isRemove = true
      window._m.removeMaker()
    },
    addZoneHeat () {
      let zones = [
        {
          name: '峨边彝族自治县',
          type: '1'
        }, {
          name: '峨眉山市',
          type: '2'
        }, {
          name: '金口河区',
          type: '3'
        }
      ]
      window._m.addZoneHeatMap(zones)
    },
    removeZoneHeat () {
      window._m.removeZoneHeatMap()
    },
    addRadar () {
      let position = [106.52242034969774, 29.63435868776433]
      window.radar = window._m.addRadar(position, '#09F7F7', 1500, 5000)
    },
    removeRadar () {
      window._m.removeRadar(window.radar)
    },
    addScanEffect () {
      var options = {
        position: [106.53463185745589, 29.634728256696196],
        mode: 1,
        period: 3,
        speed: 1000,
        textureUrl: './static/CesiumAssets/images/scan.jpg'
      }
      window._m.addScanEffect(options)
    },
    removeScanEffect () {
      window._m.removeScanEffect()
    },
    showPoorData () {
      this.poorData = !this.poorData
    }
  }
}
</script>
<style lang="scss">
.test-container{
  .test-container-inner{
    position: absolute;
    z-index: 2;
  }
  .menu-box {
    position: absolute;
    width: 7rem;
    bottom:1rem;
    left: 7rem;
    z-index: 100;
  }
.len {
  bottom: 1rem;
  left: 1rem;
}
.overall-situation{
  text-align: left;
  width:2.72rem;
  height:3.2rem;
  position: absolute;
  left: 260%;
  top: -150%;
  z-index: 200;
  background: url('../assets/common/overall-situation.png') no-repeat center center;
  background-size: 100% 100%;
}
.title{
  width:1.53rem;
  height:0.21rem;
  font-size:0.21rem;
  font-family:Source Han Sans CN;
  font-weight:bold;
  color:rgba(255,255,255,1);
  padding-top: 0.2rem;
  padding-left: 0.3rem;
  padding-bottom: 0.1rem;
}
.situation-item{
  position: relative;
}
.situation-item li{
  font-size:18px;
  font-family:Source Han Sans CN;
  font-weight:bold;
  color:rgba(223,226,251,1);
  list-style: none;
  height: 0.3rem;
  line-height: 0.3rem;
  margin-top: 0.1rem;
  margin-left: 0.3rem;
}
.situation-item li span{
  font-size:22px;
  font-family:Source Han Sans CN;
  font-weight:bold;
  font-style:italic;
  color:rgba(249,230,89,1);
  padding-right: 0.1rem;
}
.relevant-info{
  width:3.19rem;
  height: 3.03rem;
  text-align: left;
  position: absolute;
  left: 150%;
  top: -150%;
  z-index: 200;
  background: url('../assets/common/relevant-info.png') no-repeat center center;
  background-size: 3.19rem 3.03rem;
}
.relevant-info .situation-item li:nth-child(2) div{
  float:left;
}
.relevant-info .situation-item li:nth-child(2) span{
  display:inline-block;
  width:1.95rem;
  padding-left:0.1rem;
}

.info-window {
  position: fixed;
  width: 0.5rem;
  height: 0.5rem;
  background: red;
  z-index:4;
  left:0;
  top:0;
}
.maker-box-poor {
  position: absolute;
  left: 20rem;
  top: 5rem;
  z-index: 200;
  text-align: center;
  .name {
    font-size:0.18rem;
    color: #FFFFFF;
    background:url('../assets/city-management/common-service/medical-resource/tilte-bg.png') no-repeat;
    background-size:100% 100%;
    height: 0.5rem;
    line-height: 0.3rem;
    text-align: center;
    padding: 0.1rem;
  }
  .topHead {
    width: 0.94rem;
    height: 1.05rem;
  }
  .line {
    width: 0.04rem;
    height: 0.64rem;
    background: #ffffff;
    margin-left: 0.42rem;
    margin-top: -0.23rem;
  }
  .line2{
    position: absolute;
    top:36%;
    left: -80%;
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
    box-shadow:inset 0px 0px 5px 1px rgba(213,96,44,1);
    animation: warn 1s infinite;
    .inner-cricle {
      width:0.36rem;
      height:0.20rem;
      border:0.02rem solid rgba(213,96,44,1);
      border-radius:50%;
      margin:0.05rem auto;
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
}}
</style>
