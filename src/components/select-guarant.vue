<!--
 * @Descripttion:
 * @Author: renting
 * @Date: 2020-03-19
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-22 15:14:28
 -->
<template>
  <div class="heart-select">
    <div v-if="data.length>0" class="heart-select-content" @click="show = !show">
      <span  >{{data[active].name}}</span>
      <img src="@/assets/common/select-gu.png"/>
    </div>
    <ul v-show="show">
      <li
        v-for="(item,index) in data"
        :class="index == active ? 'active':'normal'"
        @click="handleChooseSelect(index, item.name, item)"
        :key="index">{{item.name}}</li>
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
    }
  },
  data () {
    return {
      active: 0,
      show: false
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
    position: absolute;
    background-size: 100% 100%;
    .heart-select-content{
      position: relative;
      text-align: left;
      height: .60rem;
      padding: 0.05rem 0.8rem 0.05rem 0.5rem;
      line-height: .5rem;
      font-size: .24rem;
      color: #83EBFF;
      // background: url("../assets/common/select-bg-gu.png") no-repeat;
      background: url('../assets/common/ecology-list.png') center center no-repeat;
      background-size: 100% 100%;
      span{
        text-align: center;
      }
      img {
        position: absolute;
        top: 0.3rem;
        right: 0.35rem;
        width: 0.15rem;
        height: 0.12rem;
      }
    }
    ul {
      background: url("../assets/common/select-bg.png") no-repeat;
      background-size: 98% 100%;
      min-height: 1.87rem;
      padding: 0.05rem 0.4rem 0.2rem 0.4rem;
      box-sizing: border-box;
      margin-top:-0.2rem;
      margin-right:-0.2rem;
    }
    li{
      height: .60rem;
      line-height: .60rem;
      list-style-type: none;
      color: #fff;
      font-size: .24rem;
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
