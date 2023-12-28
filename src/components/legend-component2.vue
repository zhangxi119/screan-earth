<!--
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-08 15:49:42
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-18 14:12:21
 -->
<template>
  <div class="legend-container">
      <div class="legend-inner-container">
        <div class="legend-titles-box">
          <div @click="change(item)" class="circle-item"
          v-for="(item,index) in yPoints"
          :class="{'select':index===selectIndex}"
          :style="{'left':item.x+'rem','top':item.y+'rem'}"
          :key="index">
          <span class="line"></span>
          <span class="name"  v-html="item._name"></span>
          </div>
        </div>
      </div>
      <div class="change-box">
        <slot name="info-box"></slot>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    selectIndex: {
      type: Number,
      default: 2,
      required: false
    }
  },
  data () {
    return {
      radiusY: 1.65,
      radiusX: 1.65,
      degreeHeight: 3 / 4.8,
      top: 1.6,
      yPoints: [],
      points: []
    }
  },
  methods: {
    init (list) {
      this.list = list
      let points = this.list
      this.getYPoints(points)
    },
    // 点击切换tab
    change (item) {
      if (!item.name) {
        return false
      }
      let index = this.list.findIndex((_d) => {
        return _d.name === item.name
      })
      this.$emit('tab', {data: this.list[index], index: index})
      // this.index = index
      // if (!item.name) {
      //   return false
      // }
      // let index = this.list.findIndex((_d) => {
      //   return _d.name === item.name
      // })
      // if (this.list.length >= 5) {
      //   let points = [item]
      //   let afterPoints = [...this.list.slice(index + 1, index + 3)]
      //   if (afterPoints.length < 2) {
      //     afterPoints = [...afterPoints, ...this.list.slice(0, 2 - afterPoints.length)]
      //   }
      //   let beforePoints = []
      //   if (index >= 2) {
      //     beforePoints = [...this.list.slice(index - 2, index)]
      //   } else {
      //     beforePoints = [...this.list.slice(this.list.length - (2 - index), this.list.length), ...this.list.slice(0, index)]
      //   }
      //   points = [...beforePoints, ...points, ...afterPoints]
      //   this.getYPoints(points)
      // } else {
      //   let list = this.points
      //   let index = list.findIndex((_d) => {
      //     return _d.name === item.name
      //   })

      //   let tmp = list[2]
      //   list[2] = list[index]
      //   list[index] = tmp
      //   this.getYPoints(list)
      // }
      // this.$emit('tab', {data: this.list[index], index: index})
    },
    // 获取分割点y轴坐标
    getYPoints (points) {
      let yPoints = points.map((item) => {
        if (item.name) {
          item._name = item.name.slice(0, 2) + '<br/>' + item.name.slice(2)
        } else {
          item._name = ''
        }
        return item
      })
      for (let i = 1; i < 5; i++) {
        let y = Math.abs(this.degreeHeight * i)
        let _y = Math.abs(this.top - this.degreeHeight * i)
        let x = this.radiusX - this.getPoint(_y) - 0.20
        yPoints[i - 1].x = x
        yPoints[i - 1].y = y
      }
      this.yPoints = yPoints
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
  width: 5.68rem;
  height: 3.06rem;
  background: url('../assets/common/list-back.png') no-repeat;
  background-size: 100% 100%;
  .legend-inner-container {
    position: absolute;
    width: 1.65rem;
    height: 2.9rem;
    left: 0.5rem;
    top: 0.1rem;
    z-index: 10;
    overflow: hidden;
    border-radius: 55% 45%;
    .legend-titles-box {
      position: absolute;
      width: 1.65rem;
      height: 2.9rem;
      border: 1px solid blue;
      .circle-item {
        position: absolute;
        height: 0.48rem;
        width: 0.9rem;
        padding-left: 0.2rem;
        color: rgba(255,255,255,0.78);
        font-size: 0.14rem;
        margin-top: -0.25rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        .line {
          width: 0.12rem;
          height: 0.02rem;
          background: rgba(22,208,255,0.6);
          margin-right: 0.1rem;
        }
      }
      .select {
        color: #FCE62F;
        background-image: linear-gradient(to right, rgba(33,110,196,0.8) , rgba(33,110,196,0));
        }
    }
  }
  .change-box {
    position: absolute;
    right: 0.5rem;
    top: 0.3rem;
    width: 3.8rem;
    height: 2.66rem;
    z-index: 20;
  }
}

</style>
