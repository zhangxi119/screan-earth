<!--
 * @Descripttion:
 * @Author: leizq
 * @Date: 2020-05-21 10:26:41
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-21 10:32:24
-->
<template>
  <!-- 显示标题完整信息 -->
  <div id="title-tooltip" class="left-top-tooltip">
    {{tooltipContent}}
  </div>
</template>

<script>
export default {
  name: 'textModal',
  data () {
    return {
      tooltipContent: ''
    }
  },
  methods: {
    // 鼠标移入显示标题
    showTooltip (e) {
      let tooltip = document.getElementById('title-tooltip')
      if (tooltip.style.display !== 'inline') {
        tooltip.innerText = e.target.innerText
        tooltip.style.left = e.pageX + 'px'
        tooltip.style.top = e.pageY - 80 + 'px'
        tooltip.style.display = 'inline'
      }
    },
    hideTooltip () {
      let tooltip = document.getElementById('title-tooltip')
      tooltip.style.display = 'none'
    }
  }
}
</script>
<style lang="scss" scoped>
  .left-top-tooltip{
    display: none;
    position: absolute;
    z-index: 1001;
    font-size: 0.17rem;
    background-color: rgba(0,53,126,0.74);
    color:#ffffff;
    border: 0.02rem solid #44aaf4;
    border-radius: 0.05rem;
    padding: 0.1rem 0.2rem
  }
</style>
