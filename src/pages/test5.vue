<!--
 * @Descripttion:
 * @Author: cqy
 * @Date:
 * @LastEditors: cqy
 * @LastEditTime:
 -->
<template>
  <div>
    <div class="value-line">
      <!--<button style="position: absolute; z-index: 99" @click="getRandomValues">随机等值线</button>-->
      <button style="position: absolute; z-index: 99" @click="handleV">随机等值线</button>
      <div id="kkkk-video"></div>
    </div>
  </div>
</template>

<script>
// import * as turf from '@turf/turf'
// import lsJson from '../../static/CesiumAssets/json/leshan.json'
export default {
  methods: {
    /* getRandomValues () {
      console.log(turf)
      let points = turf.randomPoint(30, { bbox: turf.bbox(lsJson) })
      turf.featureEach(points, function (currentFeature, featureIndex) {
        currentFeature.properties = { value: (Math.random() * 100).toFixed(2) }
      })
      let interpolateOptions = {
        gridType: 'points',
        property: 'value',
        units: 'degrees',
        weight: 10
      }
      let grid = turf.interpolate(points, 0.05, interpolateOptions)
      grid.features.map((i) => (i.properties.value = i.properties.value.toFixed(2)))
      var isobandsOptions = {
        zProperty: 'value',
        commonProperties: {
          'fill-opacity': 0.8
        },
        breaksProperties: [
          {fill: '#e3e3ff'},
          {fill: '#c6c6ff'},
          {fill: '#a9aaff'},
          {fill: '#8e8eff'},
          {fill: '#7171ff'},
          {fill: '#5554ff'},
          {fill: '#3939ff'},
          {fill: '#1b1cff'}
        ]
      }
      // 获取等值线
      let isobands = turf.isobands(
        grid,
        [1, 10, 20, 30, 50, 70, 100],
        isobandsOptions
      )
      let lsJson1 = turf.flatten(lsJson)
      let isobands1 = turf.flatten(isobands)
      var features = []
      isobands1.features.forEach(function (layer1) {
        lsJson1.features.forEach(function (layer2) {
          let intersection = null
          try {
            intersection = turf.intersect(layer1, layer2)
          } catch (e) {
            layer1 = turf.buffer(layer1, 0)
            intersection = turf.intersect(layer1, layer2)
          }
          if (intersection != null) {
            intersection.properties = layer1.properties
            intersection.id = Math.random() * 100000
            features.push(intersection)
          }
        })
      })

      var intersection = turf.featureCollection(features)
      let weatherLine = window._m.Cesium.GeoJsonDataSource.load(intersection, {clampToGround: true})
      console.log(weatherLine)
      weatherLine.then((dataSource) => {
        console.log(dataSource)
        window._m.viewer.dataSources.add(dataSource)
        let entities = dataSource.entities.values
        this.areaEntities = entities
        this.defaultEntitis = [...this.defaultEntitis, ...entities]
        for (let i = 0; i < entities.length; i++) {
          let entity = entities[i]
          entity.show = true
          entity.polygon.outline = true
          entity.polygon.height = 3500
          entity.polygon.extrudedHeight = 2000
          // entity.polygon.material = window._m.Cesium.Color.fromCssColorString('rgba(60,126,113,0.01)')
          // entity.type = 'TwoDimension'
        }
      }).otherwise((error) => {
        console.log(error)
      })
    }, */
    handleV () {
      this.playVideo('kkkk-video', 'http://10.10.190.24:9916/hcvs_camera_sub_35408.flv')
    },
    // 播放视频
    playVideo (id, url) {
      window.$f(id, './static/libs/flowplayer/flowplayer-3.2.18.swf', {
        clip: {
          url: url,
          autoPlay: true,
          autoBuffering: true
        },
        plugins: {
          controls: null
        }
      })
    }
  }
}
</script>

<style lang="scss">
  #kkkk-video{
    position: absolute;
    left: 2rem;
    z-index: 99;
    width: 3rem;
    height: 3rem;
  }
</style>
