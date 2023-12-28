/*
 * @Author: zhangxi
 * @Date: 2020-02-20 15:16:59
 * @Last Modified by: zhangxi
 * @Last Modified time: 2020-02-21 13:55:14
 */

import lowHeatImg from '../../static/CesiumAssets/images/20.png'
import midHeatImg from '../../static/CesiumAssets/images/30.png'
import hightHeatImg from '../../static/CesiumAssets/images/45.png'

class CesiumUtils {
  constructor () {
    this.viewer = null
    this.scene = null
    this.Cesium = window.Cesium
    this.loaded = false
    this.makers = []
    this.layers = null
    this.zoneData = null // 区域数据
    this.lowHeatImg = lowHeatImg
    this.midHeatImg = midHeatImg
    this.hightHeatImg = hightHeatImg
    this.$ = window.jQuery
  }
  init (id) {
    let Cesium = this.Cesium
    this.viewer = new Cesium.Viewer(id, {
      infoBox: false,
      selectionIndicator: false
    })
    // 地图底图
    // var mapbox = new Cesium.MapboxImageryProvider({
    //   mapId: 'mapbox.dark',
    //   accessToken: 'pk.eyJ1IjoieW91bmdnaXMiLCJhIjoiY2o5Z3owdTViMnR5djJ3bGczaGw4ODdhZSJ9.K7Zmkra18V7CuynSW3rlRQ'
    // })
    // 初始化时添加经纬度投影地图图层
    // this.viewer.imageryLayers.addImageryProvider(mapbox)
    // 自定义地图底图
    this.viewer.imageryLayers.addImageryProvider(new Cesium.SingleTileImageryProvider({url: './static/CesiumAssets/images/gray4.jpg'}))
    this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK) // 禁止左键双击
    // 初始化时添加经纬度投影地图图层
    // this.viewer.imageryLayers.addImageryProvider(mapbox)

    // this.viewer.scene.globe.depthTestAgainstTerrain = true

    var scene = this.viewer.scene
    this.scene = scene
    // 太阳光-月亮光
    scene.sun.show = false
    scene.moon.show = false
    this.render()
    return this
  }
  // 打开地图场景
  open (url, cb) {
    var promise = this.scene.open(url)
    this.Cesium.when(promise, (layers) => {
      try {
        this.loaded = true

        this.layers = layers
        // 设置相机
        // this.setCamera()
        this.setCamera({lon: 103.744872, lat: 29.602731, height: 200})
        if (typeof cb === 'function') {
          cb()
        }
      } catch (e) {
        console.log(e)
      }
    }, (e) => {
      console.log(e, '地图数据加载失败！')
    })
  }
  setStyle () {
    let Cesium = window.Cesium
    this.scene.sun.show = false
    this.scene.moon.show = false
    // 大气
    this.scene.skyAtmosphere.show = false
    this.scene.skyAtmosphere.hueShift = -0.78
    this.scene.skyAtmosphere.saturationShift = -0.94
    this.scene.skyAtmosphere.brightnessShift = -0.44
    this.scene.fog.enabled = false
    this.scene.globe.enableLighting = true
    // 添加环境光源
    this.scene.lightSource.ambientLightColor = Cesium.Color.fromCssColorString('rgba(86,90,101,0.8)')
    this.setAllLight()
    // 天空盒子
    let currentSkyBox = new Cesium.SkyBox({
      sources: {
        positiveX: './static/CesiumAssets/images/sky9.jpg',
        negativeX: './static/CesiumAssets/images/sky9.jpg',
        positiveY: './static/CesiumAssets/images/sky9.jpg',
        negativeY: './static/CesiumAssets/images/sky9.jpg',
        positiveZ: './static/CesiumAssets/images/sky9.jpg',
        negativeZ: './static/CesiumAssets/images/sky9.jpg'
      }
    })
    this.viewer.scene.skyBox = currentSkyBox
    // 添加精模光源
    var position = Cesium.Cartesian3.fromDegrees(106.5404241769007, 29.588614738375803, 2000)
    var options = {
      color: Cesium.Color.fromCssColorString('rgba(255,233,209, 1)'), // 光源颜色
      cutoffDistance: 2700,
      decay: 0.5,
      intensity: 4
    }
    var position2 = Cesium.Cartesian3.fromDegrees(106.5195011555967, 29.617303016260024, 2000)
    var options2 = {
      color: Cesium.Color.fromCssColorString('rgba(255,233,209, 1)'), // 光源颜色
      cutoffDistance: 5000,
      decay: 0.5,
      intensity: 1
    }
    var pointLight = new Cesium.PointLight(position, options)
    var pointLight2 = new Cesium.PointLight(position2, options2)
    this.scene.addLightSource(pointLight)
    this.scene.addLightSource(pointLight2)
    // 添加道路
    // this.addLines('rgba(255,114,0, 1.0)')

    // 加载白模
    var layer01 = this.scene.layers.find('modelH@Data')
    var layer02 = this.scene.layers.find('modelM@Data')
    var layer03 = this.scene.layers.find('modelD@Data')
    this.setLayers(layer01, '01')
    this.setLayers(layer02, '02')
    this.setLayers(layer03, '03')
    // 添加区域数据
    var promiseData = Cesium.GeoJsonDataSource.load('./static/CesiumAssets/json/cq.json')
    promiseData.then((dataSource) => {
      this.viewer.dataSources.add(dataSource)
      let entities = dataSource.entities.values
      this.zoneData = entities
      for (let i = 0; i < entities.length; i++) {
        let entity = entities[i]
        entity.show = false
      }
    }).otherwise((error) => {
      console.log(error)
    })
  }
  // 添加全局光源
  setAllLight () {
    let Cesium = window.Cesium
    var position1 = new Cesium.Cartesian3(-1586935.064231279, 5323685.281797321, 3141668.320506441)
    var targetPosition1 = new Cesium.Cartesian3(-1572891.6259222326, 5316416.346522472, 3154530.1876635756)
    var options1 = {
      color: Cesium.Color.fromCssColorString('rgba(222,222,222,0.5)'), // 光源颜色
      targetPosition: targetPosition1,
      intensity: 0.5
    }
    var options2 = {
      color: Cesium.Color.fromCssColorString('rgba(222,222,222,0.4)'), // 光源颜色
      intensity: 1
    }
    var directionalLightH1 = new Cesium.DirectionalLight(position1, options1)
    var directionalLightH2 = new Cesium.DirectionalLight(position1, options2)
    this.scene.addLightSource(directionalLightH1)
    this.scene.addLightSource(directionalLightH2)
  }
  setLayers (layer, type) {
    var Cesium = this.Cesium
    var hypsometricSetting = new Cesium.HypsometricSetting()
    var colorTable = new Cesium.ColorTable()
    colorTable.insert(110, Cesium.Color.fromCssColorString('rgba(111,120,137, 0.9)'))
    colorTable.insert(68, Cesium.Color.fromCssColorString('rgba(111,120,137, 0.9)'))
    colorTable.insert(55, Cesium.Color.fromCssColorString('rgba(111,120,137, 0.9)'))
    colorTable.insert(45, Cesium.Color.fromCssColorString('rgba(111,120,137, 0.9)'))
    colorTable.insert(10, Cesium.Color.fromCssColorString('rgba(111,120,137, 0.9)'))
    colorTable.insert(2, Cesium.Color.fromCssColorString('rgba(111,120,137, 0.9)'))

    hypsometricSetting.DisplayMode = Cesium.HypsometricSettingEnum.DisplayMode.FACE
    hypsometricSetting.LineInterval = 1.0

    if (type === '01') { // 纹理图片存在
      hypsometricSetting.emissionTextureUrl = './static/CesiumAssets/images/gao2.jpg'
      hypsometricSetting.emissionTexCoordScale = new Cesium.Cartesian2(0.05, 0.05)
    } else if (type === '02') {
      hypsometricSetting.emissionTextureUrl = './static/CesiumAssets/images/zhong2.jpg'
      hypsometricSetting.emissionTexCoordScale = new Cesium.Cartesian2(0.05, 0.05)
    } else if (type === '03') {
      hypsometricSetting.emissionTextureUrl = './static/CesiumAssets/images/dilou2.jpg'
      hypsometricSetting.emissionTexCoordScale = new Cesium.Cartesian2(0.1, 0.1)
    }
    layer.hypsometricSetting = {
      hypsometricSetting: hypsometricSetting
    }
  }
  addLines (color) {
    var Cesium = this.Cesium
    var promiseroute11 = Cesium.GeoJsonDataSource.load('./static/CesiumAssets/json/lineback_1.json')
    promiseroute11.then((dataSource) => {
      this.viewer.dataSources.add(dataSource)
      var Routes11 = dataSource.entities.values
      for (var i = 0; i < Routes11.length; i++) {
        var line = Routes11[i]
        line.polyline.material = new Cesium.PolylineGlowMaterialProperty({ // 设置Glow材质
          glowPower: 0.1,
          color: Cesium.Color.fromCssColorString(color)
        })
        line.polyline.width = 10
      }
    }).otherwise((error) => {
      console.log(error)
    })

    var promiseroute2 = Cesium.GeoJsonDataSource.load('./static/CesiumAssets/json/lineback2_1.json')
    promiseroute2.then((dataSource) => {
      this.viewer.dataSources.add(dataSource)
      var Routes2 = dataSource.entities.values
      for (var i = 0; i < Routes2.length; i++) {
        var line = Routes2[i]
        line.polyline.material = new Cesium.PolylineGlowMaterialProperty({ // 设置Glow材质
          glowPower: 0.1,
          color: Cesium.Color.fromCssColorString(color)
        })
        line.polyline.width = 10
      }
    }).otherwise((error) => {
      console.log(error)
    })
    var promiseroute3 = Cesium.GeoJsonDataSource.load('./static/CesiumAssets/json/lineback3_1.json')
    promiseroute3.then((dataSource) => {
      this.viewer.dataSources.add(dataSource)
      var Routes3 = dataSource.entities.values
      for (var i = 0; i < Routes3.length; i++) {
        var line = Routes3[i]
        line.polyline.material = new Cesium.PolylineGlowMaterialProperty({ // 设置Glow材质
          glowPower: 0.1,
          color: Cesium.Color.fromCssColorString(color)
        })
        line.polyline.width = 10
      }
    }).otherwise((error) => {
      console.log(error)
    })
  }
  render () {
    let Cesium = this.Cesium
    this.scene.postRender.addEventListener(() => {
      if (this.makers.length) {
        var canvasHeight = this.scene.canvas.height
        var windowPosition = new Cesium.Cartesian2()
        var windowPositionBot = new Cesium.Cartesian2()
        this.makers.forEach((d, i) => {
          Cesium.SceneTransforms.wgs84ToWindowCoordinates(this.scene, d.position, windowPosition)
          Cesium.SceneTransforms.wgs84ToWindowCoordinates(this.scene, d.positionBot, windowPositionBot)
          // 气泡顶部
          this.$('#_maker' + d.id).css('bottom', (canvasHeight - windowPosition.y - 10) + 'px')
          this.$('#_maker' + d.id).css('left', (windowPosition.x - 25) + 'px')
          this.$('#_maker' + d.id).show()

          this.$('#' + d.domId).css('top', (windowPosition.y - 25) + 'px')
          this.$('#' + d.domId).css('left', (windowPosition.x + 15) + 'px')

          // 气泡底部
          this.$('#_maker_b' + d.id).css('top', (windowPositionBot.y) + 'px')
          this.$('#_maker_b' + d.id).css('left', (windowPositionBot.x) + 'px')
          this.$('#_maker_b' + d.id).show()
        })
      }
    })
  }
  setCamera (position) {
    let Cesium = this.Cesium
    if (position) {
      this.scene.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, position.height),
        orientation: {
          heading: position.heading || 3.0028428811806167,
          pitch: position.pitch || -0.16793453160814997,
          roll: position.roll || 0.000028857340462096204
        }
      })
    } else {
      this.scene.camera.setView({
        destination: new Cesium.Cartesian3(-1576564.0176574204, 5314777.805220344, 3155446.871195887),
        orientation: {
          heading: 3.0028428811806167,
          pitch: -0.16793453160814997,
          roll: 0.000028857340462096204
        }
      })
    }
  }
  flyTo (position) {
    if (position) {
      this.scene.camera.flyTo({
        destination: this.Cesium.Cartesian3.fromDegrees(position.lon, position.lat, position.height),
        orientation: {
          heading: position.heading,
          pitch: position.pitch,
          roll: position.roll
        }
      })
    }
  }
  // 添加标记
  addMakers (makers, cb) {
    let Cesium = this.Cesium
    this.makers = [] // 置空
    makers.forEach((_d, i) => {
      var scenePosition = Cesium.Cartesian3.fromDegrees(_d.lon, _d.lat, _d.height)
      var scenePositionBot = Cesium.Cartesian3.fromDegrees(_d.lon, _d.lat, 0)
      this.makers.push({
        position: scenePosition,
        positionBot: scenePositionBot,
        id: _d.id,
        domId: _d.domId,
        makerId: 'cylinder' + _d.id // 光柱实体id
      })
      var windowPosition = new Cesium.Cartesian2()
      Cesium.SceneTransforms.wgs84ToWindowCoordinates(this.scene, scenePosition, windowPosition)
      // 画出光柱
      this.viewer.entities.add({
        id: 'cylinder' + _d.id,
        polyline: {
          positions: [Cesium.Cartesian3.fromDegrees(_d.lon, _d.lat, 0), Cesium.Cartesian3.fromDegrees(_d.lon, _d.lat, _d.height)],
          width: 6,
          material: new Cesium.PolylineGlowMaterialProperty({
            glowPower: 0.1,
            taperPower: 0.3,
            color: Cesium.Color.fromCssColorString('rgba(255,240,108, 1.0)')
          })
        }
      })
      // 构建气泡
      var makerHtml = '<div id="_maker' + _d.id + '" class="_maker-bubble"><img src="./static/CesiumAssets/images/icon.png"/>'
      var makerBHtml = '<div id="_maker_b' + _d.id + '" class="_maker-bubble-bottom"><div class="_maker-bubble-bottom-inner"></div></div>'

      makerHtml += '</div>'
      this.$('body').append(makerHtml)
      this.$('body').append(makerBHtml)

      this.$('._maker-bubble').click(() => {
        if (typeof cb === 'function') {
          cb(_d.id)
        }
      })
    })
  }
  // 移除标记
  removeMaker (id) {
    if (id) {
      this.viewer.entities.removeById('cylinder' + id)
      this.$('#_maker' + id).remove()
      this.$('#_maker_b' + id).remove()
    } else {
      this.makers.forEach((d) => {
        this.viewer.entities.removeById(d.makerId)
      })
      this.$('._maker-bubble').remove()
      this.$('._maker-bubble-bottom').remove()
    }
  }
  // 点热力图
  addHeatPointMap (bounds, data, valueMin, valueMax) {
    var viewer = this.viewer
    if (!this.heatMap) {
      this.heatMap = window.CesiumHeatmap.create(
        viewer,
        bounds, {
          // heatmap.js options go here
        }
      )
      this.heatMap.setWGS84Data(valueMin, valueMax, data)
    } else {
      this.heatMap.show(true)
    }
  }
  // 移除热力图
  hideHeatPointMap (name) {
    this.heatMap.show(false)
  }
  // 添加区域热力图
  addZoneHeatMap (items) {
    let Cesium = this.Cesium
    let entities = this.zoneData
    let heatEntities = []
    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i]
      var name = entity.name
      items.forEach((item) => {
        if (item.name === name) {
          heatEntities.push({
            entity: entity,
            type: item.type
          })
        }
      })
    }
    for (let j = 0; j < heatEntities.length; j++) {
      let entity = heatEntities[j].entity
      let imgType = heatEntities[j].type
      let image = null
      if (imgType === '1') {
        image = this.lowHeatImg
      } else if (imgType === '2') {
        image = this.midHeatImg
      } else {
        image = this.hightHeatImg
      }
      entity.polygon.material = new Cesium.ImageMaterialProperty({
        image: image,
        transparent: false
      })
      entity.polygon.outline = false
      entity.polygon.extrudedHeight = 100.0
      var img = new Image()
      img.src = image
      img.onload = () => {
        entity.show = true
      }
    }
  }
  // 移除区域热力图
  removeZoneHeatMap () {
    let entities = this.zoneData
    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i]
      entity.show = false
    }
  }
  // 雷达图
  addRadar (position, color, r, d) {
    let Cesium = this.Cesium
    var viewer = this.viewer
    var c = new Cesium.Cartographic(Cesium.Math.toRadians(position[0]), Cesium.Math.toRadians(position[1]), 0)
    var _c = Cesium.Color.fromCssColorString(color)
    var s = window.AddRadarScanPostStage(viewer, c, r, _c, d)
    return s
  }
  // 移除雷达图
  removeRadar (ScanPostStage) {
    this.viewer.scene.postProcessStages.remove(ScanPostStage)
  }
  // 添加扫描线
  addScanEffect (options) {
    let Cesium = this.Cesium
    var position = options.position // 中心点
    var mode = options.mode // 扫描模式
    var period = options.period || 1.0 // 扫描时间 1秒
    var speed = options.speed || 500.0 // 速度 默认500米每秒
    var textureUrl = options.textureUrl // 扫描图片
    var color = options.color
    if (mode === 1) {
      mode = Cesium.ScanEffectMode.CIRCLE
    } else {
      mode = Cesium.ScanEffectMode.LINE
    }
    this.viewer.scene.scanEffect.show = true
    this.viewer.scene.scanEffect.mode = mode
    this.viewer.scene.scanEffect.centerPostion = Cesium.Cartesian3.fromDegrees(position[0], position[1], 2.0)
    if (color) {
      this.viewer.scene.scanEffect.color = color
    }
    if (textureUrl) {
      this.viewer.scene.scanEffect.textureUrl = textureUrl
    }
    this.viewer.scene.scanEffect.period = period
    this.viewer.scene.scanEffect.speed = speed
  }
  // 移除扫描线
  removeScanEffect () {
    this.viewer.scene.scanEffect.show = false
  }
  // 添加点光源
  addPointLight (position, cutoffDistance, color) {
    let Cesium = this.Cesium
    try {
      let positions = Cesium.Cartesian3.fromDegrees(position[0], position[1], position[2])
      var options = {
        color: Cesium.Color.fromCssColorString(color), // 光源颜色
        cutoffDistance: cutoffDistance,
        decay: 0.5,
        intensity: 8
      }
      var pointLight = new Cesium.PointLight(positions, options)
      this.scene.addLightSource(pointLight)
      return pointLight
    } catch (e) {
      console.log(e)
      return null
    }
  }
  // 移除点光源
  removeLight (lightSource) {
    this.scene.removeLightSource(lightSource)
  }
  // 地图点击事件
  click (cb, errcb) {
    let Cesium = this.Cesium
    var _this = this
    var handler = new Cesium.ScreenSpaceEventHandler(this.scene.canvas)
    handler.setInputAction((e) => {
      try {
        // 获取点击位置笛卡尔坐标
        var position = _this.scene.pickPosition(e.position)
        // 从笛卡尔坐标获取经纬度
        var cartographic = Cesium.Cartographic.fromCartesian(position)
        var longitude = Cesium.Math.toDegrees(cartographic.longitude)
        var latitude = Cesium.Math.toDegrees(cartographic.latitude)
        if (typeof cb === 'function') {
          cb(longitude, latitude)
        }
      } catch (e) {
        if (typeof errcb === 'function') {
          errcb()
        }
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
  }
  // 获取相机的位置
  getCamera () {
    console.log(this.scene.camera)
    return this.scene.camera
  }
}
export default CesiumUtils
