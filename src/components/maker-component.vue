<!--
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-08 15:27:21
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-08 20:31:21
 -->
<template>
  <div>
      <!-- maker-start -->
      <!-- <div :class="makerData.zIndex & makerData.zIndex === 1 ? 'maker-box' : 'maker-box indexClass'" :id="makerData.id" @click="clickMaker"> -->
      <div
        :style="'margin-left: ' + mLeft + '; margin-top: ' + mTop + ';' + 'z-index: ' + (makerData.zIndex ? makerData.zIndex : '1')"
        class="maker-box"
        :id="makerData.id"
        @click="clickMaker">
        <slot name="maker">
            <!-- <img src="../assets/common/poorPeopleTop.png" alt="" class="topHead" /> -->
        </slot>
        <slot name="mini-maker" ></slot>
        <div class="maker-text" v-show="makerData.showTextFlag">
            <!-- <img  src="../assets/common/event-icon.png" alt="" class="line2" /> -->
            <slot name="img"></slot>
            <slot name="text">
              <!-- <img  src="../assets/common/event-icon.png" alt="" class="line2" /> -->
            </slot>
        </div>
      </div>
    <!-- maker-end -->
  </div>
</template>
<script>
export default {
  name: '',
  props: {
    makerData: {
      type: Object,
      required: true
    },
    mLeft: {
      type: String,
      required: false,
      default: '-0.2rem'
    },
    mTop: {
      type: String,
      required: false,
      default: '-0.83rem'
    }
  },
  mounted () {
  },
  beforeMount () {
  },
  watch: {
    makerData: {
      handler (newV, oldV) {
        this.makerData = newV
      },
      deep: true
    }
  },
  data () {
    return {
      //   makerData: {
      //       id: 'poor', // html内容id -必传
      //       showTextFlag: false, // 是否显示详细内容 -必传
      //       lon: 103.74777714303536, // 经度 -必传
      //       lat: 29.59764277605045 // 纬度 -必传
      //       echartId: 'service-maker-poor'
      //     }
    }
  },
  methods: {
    // 点击气泡事件
    clickMaker () {
      // this.makerData.showTextFlag = !this.makerData.showTextFlag
    }
  }
}
</script>
<style lang="scss" scoped>
.maker-box {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    text-align: center;
    // margin-left:0.7rem;
    // margin-top: -0.5rem;
    .maker-text{
      text-align: left;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 100%;
      top: -100%;
      margin-left: 30%;
      z-index: 2;
      .line2{
        width: 100%;
        height: 75%;
        position: absolute;
        top: 35%;
        left: -95%;
      }
    }

  }
  .indexClass {
    z-index: 3;
  }
</style>
