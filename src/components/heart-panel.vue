<!--
 * @Descripttion:
 * @Author: chenqy
 * @Date: 2020-03-09
 * @LastEditors: chenqy
 * @LastEditTime: 2020-03-09
 -->
<template>
  <div>
    <div class="g-panel-bx">
      <div
        class="g-panel-content"
        :style="list.length ? {width: '2rem'} : {width: '1rem'}">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="g-panel-content-singe"
          @click="handleClick(index)"
          :class="'g-panel-content-singe'+index ">
          <div :class="activeIndex === index ? 'g-panel-singe-active' : 'g-panel-singe-normal'">{{item.name}}</div>
        </div>
      </div>
      <div class="content">
        <slot name="panel-content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'heart-panel',
  props: {
    list: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      activeIndex: 1 // 激活下标
    }
  },
  methods: {
    handleClick (index) {
      this.activeIndex = index
      this.$emit('changeActive', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.g-panel-bx{
  position: relative;
  width: 6.4rem;
  height: 3.5rem;
  background: url("../assets/city-management/economic-run/three-base/list-back.png") no-repeat;
  background-size: 100% 100%;
  .g-panel-content{
    /*display: flex;*/
    /*flex-direction: column;*/
    position: absolute;
    left: .6rem;
    top: .4rem;
    width: 2rem;
    height: 3rem;
    border-radius: 50%;
    /*box-shadow:10px 0px 50px 20px pink inset;*/
    /*overflow: hidden;*/
    .g-panel-content-singe{
      display: flex;
      position: relative;
      align-items: center;
      position: absolute;
      color: #A7ACB5;
      font-size: .15rem;
      height: 25%;
      &::before{
        content: '';
        display: block;
        position: absolute;
        top: .32rem;
        left: -.14rem;
        width: .22rem;
        height: 2px;
        background: #00D3FF;
      }
    }
    .g-panel-singe-active{
      height: .35rem;
      line-height: .3rem;
      padding: 0.1rem ;
      color: #FFE600;
      background: linear-gradient(left, rgba(0,110,203,1), rgba(0,110,203,.2));
    }
    .g-panel-singe-normal{
      height: .35rem;
      line-height: .3rem;
      padding: 0.1rem ;
    }
    .g-panel-content-singe0{
      top: 0;
      left: .5rem;
    }
    .g-panel-content-singe1{
      top: 25%;
      left: .15rem;
    }
    .g-panel-content-singe2{
      top: 50%;
      left: .15rem;;
    }
    .g-panel-content-singe3{
      top: 75%;
      left: .5rem;
    }
  }
  .content{
    position: relative;
  }
}
</style>
