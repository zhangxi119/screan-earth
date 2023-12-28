<!--
 * @Descripttion:
 * @Author: fujifeng
 * @Date: 2020-05-26 13:00:06
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app" :class="{'cursor-cus':cursor}">
    <router-view class="route-view"/>
    <tool></tool>
    <div id="cesium-containner"></div>
  </div>
</template>
<script>
import tool from '@/components/tool'
import CesiumMap from '@/utils/CesiumMap.js'
import store from './store'

export default {
  name: 'App',
  components: {tool},
  mounted () {
    this.listenPage()
  },
  computed: {
    cursor () {
      return this.$store.getters.GET_CURSOR
    }
  },
  methods: {
    listenPage () {
      // let self = this
      // window.onload = function (e) {
      // let path = self.$route.path
      // if ((path !== '/entry' && path !== '/login') && !this.isFresh) {
      window._m = new CesiumMap()
      // window._m.init('cesium-containner').open('http://10.10.190.132/iserver/services/3D-LSMap/rest/realspace', () => {
         window._m.init('cesium-containner').open('http://172.20.27.122:8090/iserver/services/3D-workLS/rest/realspace', () => {
        window._m.setStyle()
        window._m.initDimension()
        window.document.oncontextmenu = function (e) {
          e.preventDefault()
          if (!window._m.isActiveDrawCustom && !window._m.isActiveDrawLine) {
            let areaNow = {name: '乐山市', totalName: '乐山市'}
            store.commit('set_areaName', areaNow)
            window._m.redirectDimenion()
          }
        }
      })
      // }
      // }
    }
  }

}
</script>
<style>
.cursor-cus .cesium-viewer{
 cursor: url('/static/CesiumAssets/images/draw.cur'),auto!important;
}
  /*液晶字体*/
  @font-face {
    font-family: 'digital';
    src: url('./assets/font/digital-display-tfb.woff.ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: Impact;
    src: url('./assets/font/Impact.ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: xinghai;
    src: url('./assets/font/stxingka.ttf');
    font-weight: normal;
    font-style: normal;
  }
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar {
    width: 0rem;
    height: 0rem;
    background-color: #F5F5F5;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 0.1rem;
    background-color: #F5F5F5;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 0.1rem;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
    background-color: #c8c8c8;
  }

  * {
    padding: 0;
    margin: 0;
  }

  #app {
    position: absolute;
    height: 10.80rem;
    width: 43.20rem;
    overflow: hidden;
  }

  .route-view {
    position: absolute;
    height: 10.80rem;
    width: 43.20rem;
  }

  #cesium-containner {
    position: absolute;
    height: 10.80rem;
    width: 43.20rem;
    z-index: 0;
  }
</style>
