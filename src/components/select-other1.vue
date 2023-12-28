<!--
 * @Descripttion:
 * @Author: chenqy
 * @Date: 2020-03-27 10:10:01
 * @LastEditors: chenqy
 * @LastEditTime: 2020-03-27 11:02:25
 -->
<template>
  <div class="g-select-box"
  :style="{width: width+'rem', height: height+'rem'}">
    <p>{{data[activeTemp].name}}年</p>
      <ul>
          <li
          @click="handleChooseSelect(item, index)"
          v-for="(item,index) in data" :key="index"
          :style="item.name.length < 5 ? 'font-size: 0.2rem;' : 'font-size: 0.16rem;'"
          :class="index === activeTemp ? 'g-nav-active' : ''">{{item.name}}年</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'heartSelect',
  props: {
    data: {
      type: Array,
      required: true
    },
    // 状态active 位置  0为第一条(若传入的data中定义了selected,以后者为准)
    active: {
      type: Number,
      default: 0
    },
    // 宽度
    width: {
      type: Number,
      default: 2.3
    },
    // 高度
    height: {
      type: Number,
      default: 0.44
    }
  },
  beforeMount () {
    this.activeTemp = this.active
  },
  data () {
    return {
      activeTemp: 0
    }
  },
  methods: {
    handleChooseSelect (item, index) {
      this.activeTemp = index
      this.$emit('select', item)
    }
  }
}
</script>

<style lang="scss" scoped>
  .g-select-box {
      width: 2.53rem;
      position: absolute;
      p{
        padding-left: 0.54rem;
        margin-bottom: 0.16rem;
        box-sizing: border-box;
        width: 2.53rem;
        height: 0.67rem;
        line-height: 0.67rem;
        font-size: 0.22rem;
        background: url('../assets/common/nav-big-blue.png') center no-repeat;
        background-size: 100%;
        font-family:Source Han Sans CN;
        font-weight:500;
        font-style:italic;
        color:rgba(255,255,255,1);
      }
      ul {
        width: 100%;
        list-style: none;
        li {
          list-style: none;
          position: relative;
          padding-left: 0.54rem;
          margin-bottom: 0.16rem;
          box-sizing: border-box;
          width: 2.3rem;
          height: 0.54rem;
          line-height: 0.38rem;
          background: url('../assets/common/nav-blue.png') center no-repeat;
          background-size: 100%;
          font-size:0.2rem;
          font-family:Source Han Sans CN;
          font-weight:500;
          font-style:italic;
          color:rgba(255,255,255,1);
          &::before {
            content: '';
            position: absolute;
            right: 0.09rem;
            // top: -0.45rem;
            top: -80%;
            display: inline-block;
            width: 0.02rem;
            // height: 0.7rem;
            height: 138%;
            background: #fffeff;
          }
        }
        .g-nav-active {
          line-height: 0.48rem;
          background: url('../assets/common/nav-orige.png') center no-repeat;
          background-size: 100%;
        }
      }
    }
</style>
