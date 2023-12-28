<!--
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-04-16 10:51:10
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-16 14:16:02
 -->
<template>
  <div>
     <div class="btn-group">
       <button @click="startMeasure">测量距离</button>
     </div>
  </div>
</template>

<script>
import tool from '../components/tool'
export default {
  components: {tool},
  methods: {
    startMeasure () {
      window._m.measureLineSpace()
    }
  }
}
</script>

<style lang="scss">
.btn-group{
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
}
// .toolbox{
//   position:absolute;
//   top: 4rem;
//   left: 3rem;
//   z-index: 100;
// }
</style>
