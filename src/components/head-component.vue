<!--
 * @Descripttion:
 * @Author: leizq
 * @Date: 2020-04-24 19:06:41
 * @LastEditors: leizq
 * @LastEditTime: 2020-04-29 15:11:08
 -->
<template>
   <div class="head" :style="{zIndex:zIndex}">
     {{name}}
   </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 9
    }
  }
}
</script>
<style lang="scss" scoped>
.head {
  position: absolute;
  width: 100%;
  height: 1.76rem;
  line-height: 0.9rem;
  background: url('../assets/common/head-common.png') no-repeat;
  background-size:100% 100%;
  font-size: 0.40rem;
  color: #FFFFFF;
  text-align: center;
  z-index: 9;
}
</style>
