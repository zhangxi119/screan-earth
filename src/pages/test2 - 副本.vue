<!--
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-08 15:49:42
 * @LastEditors: hangzhang
 * @LastEditTime: 2020-03-11 16:26:01
 -->

<template>
   <div class="circle-container">
    <div class="legend-container">
       <div class="legend-inner-container">
         <div class="legend-titles-box"></div>
       </div>
    </div>
    <div class="left">
       <div class="circel-content">
         <div class="circle-border"></div>
           <div class="circle-item" :style="{'left':item.x+'rem','top':item.y+'rem'}" v-for="(item,index) in yPoints" :key="index">{{index}}</div>
       </div>
    </div>
   </div>
</template>
<script>
export default {
  data () {
    return {
      radiusY: 4,
      radiusX: 2,
      degreeHeight: 6 / 13,
      top: 3,
      yPoints: []
    }
  },
  mounted () {
    this.getYPoints()
  },
  methods: {
    // 获取分割点y轴坐标
    getYPoints () {
      let yPoints = []
      for (let i = 1; i < 13; i++) {
        let y = Math.abs(this.degreeHeight * i)
        let _y = Math.abs(this.top - this.degreeHeight * i)
        let x = this.radiusX - this.getPoint(_y) + 0.2
        yPoints.push({
          x, y
        })
      }
      this.yPoints = yPoints
      return yPoints
    },
    // 已知椭圆的两条半径以及纵坐标的值求 x坐标的绝对值
    getPoint: function (_y) {
      return Math.sqrt((1 - Math.pow(_y, 2) / Math.pow(this.radiusY, 2)) * Math.pow(this.radiusX, 2))
    }
  }
}
</script>
<style lang="scss">
.legend-container {
  position: absolute;
  width: 5.38rem;
  height: 3.06rem;
  top: 1rem;
  right: 1rem;
  background: url('../assets/common/list-back.png') no-repeat;
  background-size: 100% 100%;
  .legend-inner-container {
    position: absolute;
    width: 1.65rem;
    height: 2.9rem;
    left: 0.5rem;
    top: 0.1rem;
    z-index: 10;
    border: 1px solid red;
    border-radius: 55% 55%;
    .legend-titles-box {
      position: absolute;
      width: 1.65rem;
      height: 2.9rem;
      border: 1px solid blue;
    }
  }
}
.circle-container {
  position: absolute;
  z-index: 10;
  background: #010717;
}
.left {
  position: absolute;
  left: 1rem;
  top: 1rem;
  width: 2rem;
  height: 8.0rem;

}
.circle-border {
  position: absolute;
  left: 0rem;
  width: 4rem;
  height: 8rem;
  top: -1rem;
  box-shadow: 0 0 50px #286FBD inset;
  border-radius: 50% 50%;
}
.circel-content {
  position: absolute;
  color: #FFFFFF;
  width: 2rem;
  top: 1rem;
  height: 6.0rem;
  /* border: 1px solid red; */
  overflow: hidden;
}
.circle-item {
 position: absolute;
 color: #FFFFFF;
}
</style>
