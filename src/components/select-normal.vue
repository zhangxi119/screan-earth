<!--
 * @Descripttion:
 * @Author: renting
 * @Date: 2020-03-19
 * @LastEditors: chenqy
 * @LastEditTime: 2020-03-30
 -->
<template>
  <div class="heart-select">
    <div class="heart-select-content" @click="show = !show">
      <span>{{data[active].label}}</span>
      <img src="../assets/common/select-arrow.png"/>
    </div>
    <ul v-show="show">
      <li
        v-for="(item,index) in data"
        :class="index == active ? 'active':'normal'"
        @click="handleChooseSelect(index, item.label, item)"
        :key="index">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'heartSelect',
  props: {
    // 下拉数据
    data: {
      type: Array,
      required: true
    },
    value: {
      type: String
    },
    activeIndex: {
      type: Number
    }
  },
  data () {
    return {
      active: 0,
      show: false
    }
  },
  mounted () {
    if (this.activeIndex || this.activeIndex === 0) {
      this.active = this.activeIndex
    }
  },
  beforeMount () {
    if (this.value) {
      let i = 0
      this.data.map((re, index) => {
        if (re.id === this.value) {
          i = index
        }
      })
      this.active = i
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
  .heart-select{
    background-size: 100% 100%;
    height: .4rem;
    .heart-select-content{
      position: relative;
      padding-left: .2rem;
      height: .28rem;
      line-height: .28rem;
      font-size: .17rem;
      color: #fff;
      img {
        position: absolute;
        top: .09rem;
        right: .1rem;
        width: .07rem;
        height: .12rem;
      }
    }
    ul {
      position: absolute;
      background: url("../assets/common/select-bg.png") no-repeat center;
      background-size: 100% 100%;
      min-width: 1.42rem;
      min-height: 1.87rem;
      padding: 0.08rem 0.13rem 0 0.1rem;
      box-sizing: border-box;
      margin: -0.08rem 0 0 -0.1rem;
    }
    li{
      height: .41rem;
      line-height: .41rem;
      list-style-type: none;
      color: #fff;
      font-size: .17rem;
      text-align: center;
      border-bottom: 0.01rem dashed #298FF7;
      &:last-child {
        border-bottom: none;
      }
    }
    .active{
      color: #FBE62F;
    }
    .normal{
      color: #FFF;
    }
  }
</style>
