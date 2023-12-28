<!--
 * @Descripttion: 科教文卫区县总体情况点位
 * @Author: zhangxi
 * @Date: 2020-04-23 20:39:34
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-30 14:33:50
 -->
<template>
  <div>
      <div class="makers-box">
        <!-- maker -->
        <maker-component v-show="makerFlag" v-for="(item, index) in makersDatas" :key="index" :makerData="item">
            <div slot="maker">
                <!-- <div class="g-maker-num">666人</div> -->
                <div class="maker-img">
                    <img @click="showMarkerDetail(item, index)" src="../../../assets/common/event-line.png" alt="" />
                </div>
            </div>
            <img v-show="item.showTextFlag" slot="img"  src="@/assets/common/event-icon.png" alt="" class="line2" />
            <div @mouseenter="stopBanner()" @mouseleave="startBanner()" slot="text" class="g-maker-text" v-show="item.showTextFlag">
                <div v-if="type === 1">
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
import leshanArea from '../../../../static/CesiumAssets/js/leshanArea.js'
import makerComponent from '@/components/maker-component.vue'
export default {
  components: {
    makerComponent
  },
  props: {
    dataList: {
      type: Array,
      required: true
    },
    type: {
      type: Number,
      default: 1,
      required: true
    }
  },
  data () {
    return {
      makersDatas: [],
      makerFlag: true,
      timer: null
    }
  },
  created () {
  },
  mounted () {
    this.getMapData()
  },
  beforeDestroy () {
    window._m.clear()
  },
  watch: {
    dataList: {
      handler (a, b) {
        this.getMapData()
      },
      deep: true
    }
  },
  methods: {
    // 中间地图
    showMarkerDetail (item, index) {
      this.makersDatas.forEach((ite, i) => {
        if (index !== i) {
          ite.showTextFlag = false
          ite.zIndex = 1
        }
      })
      item.showTextFlag = !item.showTextFlag
      let d = item
      d.showTextFlag = true
      d.zIndex = 3
      this.$set(this.makersDatas, index, d)
    },
    getMapData () {
      // 区县总体情况
      console.log(this.dataList)
      if (this.dataList.length) {
        let data = this.dataList
        data.forEach((item, index) => {
          if (this.type === 3) {
            if (leshanArea[item.kj08001]) {
              item.lon = Number(leshanArea[item.kj08001].lon)
              item.lat = Number(leshanArea[item.kj08001].lat)
              if (index === 0) {
                item.zIndex = 3
                item.showTextFlag = true
              } else {
                item.showTextFlag = false
                item.zIndex = 1
              }
              item.id = 'techno_area_' + index
              this.makersDatas.push(item)
            }
          } else {
            if (leshanArea[item.qx]) {
              item.lon = Number(leshanArea[item.qx].lon)
              item.lat = Number(leshanArea[item.qx].lat)
              if (index === 0) {
                item.zIndex = 3
                item.showTextFlag = true
              } else {
                item.showTextFlag = false
                item.zIndex = 1
              }
              item.id = 'eduction_area_' + index
              this.makersDatas.push(item)
            }
          }
        })
        console.log(this.makersDatas)
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
        let d = this.makersDatas[i]
        d.showTextFlag = true
        d.zIndex = 3
        this.$set(this.makersDatas, i, d)
      }, 5000)
    },
    stopBanner () {
      clearInterval(this.timer)
    },
    startBanner () {
      this.autoBanner()
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
    width: 2.52rem;
    padding-bottom: 0.3rem;
    padding-top: 0.2rem;
    z-index: 2;
    background: url('../../../assets/city-management/common-service/education-resource/small-kuang.png') center no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    h3 {
      margin: 0.1rem 0 0.18rem 0;
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
  // maker-end
</style>
