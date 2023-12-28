<!--
 * @Descripttion:
 * @Author: chenqy
 * @Date: 2020-03-03
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-21 17:20:41
 -->
<template>
  <div
    class="heart-select"
    :class="status==='normal'?'heart-select-normal':'heart-select-active'"
    :style="{width: width+'rem', height: height+'rem'}">
    <div
      class="heart-select-content"
      @click="show = !show">
      <!-- <img v-if="icon && icon !=='none'" :src="icons[icon]"> -->
      <span class="heart-name">{{data[active].name}}</span>
       <img
            src="../assets/emergency-command/overall-situation/societal-security/icon.png"
          />
    </div>
    <ul class="select-drap" v-show="show" >
      <li
        v-for="(item,index) in data"
        :class="index == active ? 'active':'normal'"
        @click="handleChooseSelect(index, item.name,item)"
        :key="index"><span>{{item.name}}</span></li>
    </ul>
  </div>
</template>

<script>
const good = require('@/assets/city-management/economic-run/three-base/select-good.png')
const map = require('@/assets/city-management/economic-run/three-base/select-map.png')
export default {
  name: 'heartSelect',
  props: {
    // 默认显示
    titleName: {
      type: String
    },
    // 下拉数据
    data: {
      type: Array,
      required: true
    },
    // 图标  参考引入图片名称
    icon: {
      type: String,
      default: 'none'
    },
    // 状态  normal(普通)  active(激活)
    status: {
      type: String,
      default: 'normal'
    },
    // 宽度
    width: {
      type: Number,
      default: 1.5
    },
    // 高度
    height: {
      type: Number,
      default: 0.4
    }
  },
  beforeMount () {
    if (this.titleName) {
      let that = this
      this.data.map((item, index) => {
        if (item.name === that.titleName) {
          that.active = index
        }
      })
    }
  },
  data () {
    return {
      active: 0,
      show: false,
      icons: {
        good,
        map
      }
    }
  },
  methods: {
    handleChooseSelect (index, name, item) {
      this.active = index
      this.show = false
      this.$emit('handleClick', name, item)
    }
  }
}
</script>

<style lang="scss" scoped>
  // .heart-select-normal{
  //   background: url("../assets/city-management/economic-run/three-base/select-bk.png") no-repeat;
  // }
  // .heart-select-active{
  //   background: url("../assets/city-management/economic-run/three-base/select-act.png") no-repeat;
  // }
  .heart-select{
    background-size: 100% 100%;
    height: .4rem;
    .heart-select-content{
      padding-right: 0.3rem;
      padding-left: .1rem;
      height: .4rem;
      line-height: .4rem;
      font-size: .18rem;
      border:1px solid #298FF7;
      border-radius: .16rem;
      color: #fff;
      background-color: #002d71;
      text-align: center;
      // background: url("../assets/common/right-a.png") no-repeat;
      // background-size: .1rem .16rem;
      // background-position: 90% 48%;
      .heart-name{
        display: inline-block;
        // padding-right: .2rem;
        text-align: center;
      }
      >img {
        width: 0.1rem;
        height: 0.15rem;
        position: absolute;
        top: 0.14rem;
        right: 0.1rem;
      }
    }
    .select-drap{
      background-image:url("../assets/emergency-command/overall-situation/security-situation/select_bg.png");
      background-position: left top;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      // height: 1.7rem;
      width: 100%;
      overflow-y: auto;
      padding-top: 0.15rem;
      padding-bottom: 0.2rem;
      padding-left: 0.1rem;
      padding-right: .1rem;
      margin-left: -0.1rem;
      box-sizing: content-box;
      margin-top: -.1rem;
    }
    li{
      height: .30rem;
      line-height: .30rem;
      list-style-type: none;
      color: #fff;
      margin: 5px 0 5px 8px;
      font-size: .17rem;
      padding-right: .1rem;
      cursor: pointer;
      &:hover,
      &.active,
      &:active {
        color: #ffd200 !important;
      }
      > span{
        display: inline-block;
        width: 100%;
        text-align: center;
      }
    }
    // .active{
    //   background: url("../assets/city-management/economic-run/three-base/down-at.png") no-repeat;
    //   background-size: 105% 125%;
    //   color: #F76824;
    //   background-position: -3px -4px;
    // }
    // .normal{
    //   background: url("../assets/city-management/economic-run/three-base/down.png") no-repeat;
    //   background-size: 100% 90%;
    // }
  }
</style>
