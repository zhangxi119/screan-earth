/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-01-20 10:35:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-01 17:51:29
 */
import zonePositions from '../../static/CesiumAssets/js/zonePositions'
import zoneHeatMap from '../../static/CesiumAssets/js/zoneHeatMap'
import leshanArea from '../../static/CesiumAssets/js/leshanArea'
import pointsPos from '../../src/utils/positions'
import store from '../store'
class CesiumUtils {
  constructor () {
    // this.loadURL = 'http://10.10.190.132/iserver/services/transportationAnalyst-LSMap/rest/networkanalyst/LoadNetwork@DataXY'
    // this.MapURL = 'http://10.10.190.132/iserver/services/3D-LSmap3d-2/rest/realspace/datas/LSmap'
    // this.satelliteMap = 'http://10.10.190.132:8090/iserver/services/3D-satelliteMap/rest/realspace/datas/cloudgreen@map'
    this.loadURL = 'http://172.20.27.122:8090/iserver/services/transportationAnalyst-LSMap/rest/networkanalyst/LoadNetwork@DataXY'
    this.MapURL = 'http://172.20.27.122:8090/iserver/services/3D-workLS/rest/realspace/datas/LSmap'
    this.satelliteMap = 'http://172.20.27.122:8090/iserver/services/3D-satelliteMap/rest/realspace/datas/cloudgreen@map'
    this.Cesium = window.Cesium
    this.zonePositions = zonePositions
    this.viewer = null
    this.scene = null
    this.makers = [] // 3dmaker标记位置
    this.toolMakers = []// 工具标记位置
    this.attractionsMakers = [] // 景点标记
    this.changeMakerFn = null// 切换3dmaker和二维maker方法
    this.imageryLayer = null // 自制底图
    this.satelliteLayer = null // 卫星影像地图
    this.defaultEntitis = [] // 默认实体
    this.$ = window.jQuery
    this._defaultEntitis = []// 默认实体2
    this.trackedEntity = null // trackedEntity 监控实体
    this.trackedEntityFn = null // 实体轨迹运动结束时回调
    this.bounds = { // 乐山范围
      west: 102.71134967853116,
      east: 104.29984671263112,
      south: 28.30014244119183,
      north: 30.003978023820316
    }
    this.areaEntities = [] // 区县实体
    this.wallEntity = []
    this.heatMaps = [] // 热力图数组
    this.rewirteDimensionClick = null // 重写二维地图点击事件
    this.notDownDimenion = false // 二维点击是否下钻 true 不下去，false 下去
    this.modalPosition = {} // 应急指挥弹窗位置

    this.isActiveDrawReact = false // 是否激活绘制矩形
    this.reactDrawShaps = []// 矩形实体对象数组

    this.isActiveDrawCricle = false // 是否激活绘制圆形
    this.cricleDrawShaps = [] // 圆形实体对象数组

    this.isActiveDrawCustom = false // 是否激活绘制自定义形状
    this.customDrawShaps = [] // 自定义形状实体对象数组
    this.loadComputed = [] // 最佳路径实体
    this.isActiveDrawLine = false // 是否激活绘制线条
    this.lineDrawShaps = [] // 测距线条实体
    this.borderEntities = [] // 边界轮廓实体
    this.crossMakers = [] // 三维越界maker
    this.toursEntities = [] // 景点实体
  }
  defaultDimensionClick (name) { // 二维地图点击操作方法
    // if (name && !this.notDownDimenion) { // 飞向3D地图
    //   let position = this.zonePositions[name]
    //   this.flyToByMector(position)
    // }
    if (this.rewirteDimensionClick && typeof this.rewirteDimensionClick === 'function') {
      this.rewirteDimensionClick(name)
    }
  }
  init (id) {
    let Cesium = this.Cesium

    this.viewer = new Cesium.Viewer(id, {
      infoBox: false,
      selectionIndicator: false
    })
    // 乐山地图
    this.imageryLayer = new Cesium.ImageryLayer(new Cesium.SuperMapImageryProvider({
      url: this.MapURL,
      packingRequest: 1
    }))
    // 卫星影像
    this.satelliteLayer = new Cesium.ImageryLayer(new Cesium.SuperMapImageryProvider({
      url: this.satelliteMap,
      packingRequest: 1
    }))
    // this.imageryLayer._indexedDBSetting.isOpen = true
    this.satelliteLayer._indexedDBSetting.isOpen = true
    this.viewer.imageryLayers.add(this.satelliteLayer)
    this.viewer.imageryLayers.add(this.imageryLayer)

    this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK) // 禁止左键双击
    this.viewer.scene.globe.depthTestAgainstTerrain = true

    var scene = this.viewer.scene
    this.scene = scene
    // 太阳光
    scene.sun.show = true
    this.render()
    return this
  }
  // 打开地图场景
  open (url, cb) {
    let Cesium = this.Cesium
    var promise = this.scene.open(url)
    this.Cesium.when(promise, (layers) => {
      store.commit('SET_ISLOADMAP', true)
      try {
        for (var layer of layers) {
          layer.maxVisibleAltitude = 80000
          layer.visibleDistanceMax = 80000
        }
        let handler = new Cesium.ScreenSpaceEventHandler(this.scene.canvas)
        handler.setInputAction((e) => {
          var pick = this.viewer.scene.pick(e.position)
          if (Cesium.defined(pick) && (pick.id.type === 'TwoDimension')) { // 点击二维地图操作
            this.defaultDimensionClick(pick.id.name)// 飞向3D地图
          }
          if (Cesium.defined(pick) && (pick.id.type === 'tour')) { // 点击二维地图操作
            store.commit('SET_TourName', pick.id.tourName)
          }
          // 获取点击位置笛卡尔坐标
          let position = this.scene.pickPosition(e.position)
          // 从笛卡尔坐标获取经纬度
          let cartographic = Cesium.Cartographic.fromCartesian(position)
          let longitude = Cesium.Math.toDegrees(cartographic.longitude)
          let latitude = Cesium.Math.toDegrees(cartographic.latitude)

          if (typeof cb === 'function') {
            console.log('笛卡尔坐标', position)
            console.log('经纬度坐标', longitude, latitude)
          }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
        // 设置相机 二维地图
        this.scene.camera.setView({
          destination: new Cesium.Cartesian3(-1396865.8130487765, 5687296.718953628, 2923389.1514718523),
          orientation: {
            heading: 6.200476425824968,
            pitch: -0.5326830651755197,
            roll: 6.283185307179567
          }
        })

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
    this.viewer.scene.globe.depthTestAgainstTerrain = true
    var ambientOcclusion = this.viewer.scene.postProcessStages.ambientOcclusion
    ambientOcclusion.enabled = true
    ambientOcclusion.uniforms.ambientOcclusionOnly = false
    ambientOcclusion.uniforms.intensity = 3
    ambientOcclusion.uniforms.bias = 0.1
    ambientOcclusion.uniforms.lengthCap = 0.03
    ambientOcclusion.uniforms.stepSize = 1
    ambientOcclusion.uniforms.blurStepSize = 0.86
    // 大气
    this.scene.skyAtmosphere.show = false
    this.scene.skyAtmosphere.hueShift = -0.78
    this.scene.skyAtmosphere.saturationShift = -0.94
    this.scene.skyAtmosphere.brightnessShift = -0.44
    this.scene.fog.enabled = false
    this.scene.globe.enableLighting = true
    // 开启泛光
    this.scene.bloomEffect.show = false
    this.scene.bloomEffect.threshold = 0.01
    this.scene.bloomEffect.bloomIntensity = 0.05

    this.viewer.scene.hdrEnabled = true
    // 添加环境光源
    this.scene.lightSource.ambientLightColor = Cesium.Color.fromCssColorString('rgba(11,55,108,1)')

    // 新增直射光1--西南侧光
    var position = Cesium.Cartesian3.fromDegrees(103.70215338757275, 29.54148992675349, 71)
    var targetPosition1 = Cesium.Cartesian3.fromDegrees(103.77232798687302, 29.632022732715672, 1)
    var dirLightOptions = {
      targetPosition: targetPosition1,
      color: new Cesium.Color(1, 1, 1, 1),
      intensity: 0.2
    }
    let directionalLight1 = new Cesium.DirectionalLight(position, dirLightOptions)
    this.scene.addLightSource(directionalLight1)
    // 新增直射光1--南侧光
    var position2 = Cesium.Cartesian3.fromDegrees(103.73095167211254, 29.51372257545027, 91)
    var targetPosition2 = Cesium.Cartesian3.fromDegrees(103.75454215930779, 29.671353567961955, 1)
    var dirLightOptions2 = {
      targetPosition: targetPosition2,
      color: new Cesium.Color(1, 1, 1, 1),
      intensity: 0.2
    }
    let directionalLight2 = new Cesium.DirectionalLight(position2, dirLightOptions2)
    this.scene.addLightSource(directionalLight2)
    // 新增直射光1--东北侧光
    var position3 = Cesium.Cartesian3.fromDegrees(103.77232798687302, 29.632022732715672, 1)
    var targetPosition3 = Cesium.Cartesian3.fromDegrees(103.70215338757275, 29.54148992675349, 91)
    var dirLightOptions3 = {
      targetPosition: targetPosition3,
      color: new Cesium.Color(1, 1, 1, 1),
      intensity: 0.2
    }
    let directionalLight3 = new Cesium.DirectionalLight(position3, dirLightOptions3)
    this.scene.addLightSource(directionalLight3)
    // 新增直射光1--顶光
    var position4 = Cesium.Cartesian3.fromDegrees(106.492, 29.593, 100)
    var targetPosition4 = Cesium.Cartesian3.fromDegrees(106.492, 29.593, 10)
    var dirLightOptions4 = {
      targetPosition: targetPosition4,
      color: new Cesium.Color(1, 1, 1, 1),
      intensity: 0.15
    }
    let directionalLight4 = new Cesium.DirectionalLight(position4, dirLightOptions4)
    this.scene.addLightSource(directionalLight4)

    let layer01 = this.scene.layers.find('HighDataBuilings@DataXY')
    let layer02 = this.scene.layers.find('MidHighBuildings@DataXY')
    let layer03 = this.scene.layers.find('MidBuildings@DataXY')
    let layer04 = this.scene.layers.find('MidLowBuildings@DataXY')
    let layer05 = this.scene.layers.find('LowBuildings@DataXY')
    this.setLayers(layer01, '01')
    this.setLayers(layer02, '02')
    this.setLayers(layer03, '03')
    this.setLayers(layer04, '04')
    this.setLayers(layer05, '05')
    for (let i in pointsPos) {
      pointsPos[i].points.forEach((item) => {
        this.scene.addLightSource(new Cesium.PointLight(Cesium.Cartesian3.fromDegrees(item.lon, item.lat, item.h), {
          color: Cesium.Color.fromCssColorString('#FFFFFF'),
          cutoffDistance: pointsPos[i].range,
          decay: 1,
          intensity: 0.8
        }))
      })
    }
  }
  /**
   * @name: 重置飞向2维地图
   * @param {fn} // 赋予二维地图点击事件
   * @param {notDownDimenion} 是否下钻 true 不下钻
   * @param {isResetMakerFn} 是否将maker change事件置空 true 置空
   * @return: null
   */
  redirectDimenion (fn, isResetMakerFn, notDownDimenion) {
    let Cesium = this.Cesium
    if (fn) {
      this.rewirteDimensionClick = fn
    }
    if (notDownDimenion) {
      this.notDownDimenion = notDownDimenion
    }
    if (isResetMakerFn) {
      this.changeMakerFn = null // 重置
    }

    this.scene.camera.flyTo({
      destination: new Cesium.Cartesian3(-1396865.8130487765, 5687296.718953628, 2923389.1514718523),
      orientation: {
        heading: 6.200476425824968,
        pitch: -0.5326830651755197,
        roll: 6.283185307179567
      }
    })
  }
  /**
   * @name: 只重定方法
   * @param {notDownDimenion} 是否下钻 true 不下钻
   * @return: null
   */
  redirectDimenionFn (fn, notDownDimenion) {
    if (notDownDimenion) {
      this.notDownDimenion = notDownDimenion
    }
    if (fn) {
      this.rewirteDimensionClick = fn
    }
  }
  /**
   * @name: 添加二维地图
   * @param {notDownDimenion} 是否下钻 true 不下钻
   * @return: null
   */
  initDimension (fn, notDownDimenion) {
    if (notDownDimenion) {
      this.notDownDimenion = notDownDimenion
    }
    if (fn) {
      this.rewirteDimensionClick = fn// 添加二维地图点击事件
    }
    let Cesium = this.Cesium

    Object.keys(leshanArea).forEach((key) => {
      let d = leshanArea[key]
      this.viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(d.lon * 1, d.lat * 1, 2000),
        billboard: {
          image: d.img,
          scale: 0.5
        }
      })
    })

    let promiseData = Cesium.GeoJsonDataSource.load('./static/CesiumAssets/json/leshan.json', {clampToGround: true})
    promiseData.then((dataSource) => {
      this.viewer.dataSources.add(dataSource)
      let entities = dataSource.entities.values
      this.areaEntities = entities
      this.defaultEntitis = [...this.defaultEntitis, ...entities]
      for (let i = 0; i < entities.length; i++) {
        let entity = entities[i]
        entity.show = true
        entity.polygon.outline = false
        entity.polygon.height = 3500
        entity.polygon.extrudedHeight = 2000
        entity.polygon.material = Cesium.Color.fromCssColorString('rgba(60,126,113,0.01)')
        entity.type = 'TwoDimension'
      }
    }).otherwise((error) => {
      console.log(error)
    })

    var border2 = Cesium.GeoJsonDataSource.load('./static/CesiumAssets/json/border.json')
    border2.then((dataSource) => {
      this.viewer.dataSources.add(dataSource)
      let entities = dataSource.entities.values
      this.defaultEntitis = [...this.defaultEntitis, ...entities]
      let ey = []
      for (let i = 0; i < entities.length; i++) {
        let line = entities[i]
        line.polyline.width = 0
        let _values = line.polyline.positions._value
        let ___values = []
        _values.forEach((item) => {
          let cartographic = Cesium.Cartographic.fromCartesian(item)
          let longitude = Cesium.Math.toDegrees(cartographic.longitude)
          let latitude = Cesium.Math.toDegrees(cartographic.latitude)
          ___values.push(longitude, latitude, 4000)
        })

        let _____entity = this.viewer.entities.add({
          nameArea: entities[i]._name,
          wall: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights(___values),
            material: new Cesium.PolylineGlowMaterialProperty({
              glowPower: 0.05,
              color: new Cesium.ColorMaterialProperty(new Cesium.CallbackProperty((time) => {
                return Cesium.Color.ORANGERED.withAlpha(0.9)
              }, false))
              // Cesium.Color.fromCssColorString('#ffd1db')
            })
          }
        })
        ey.push(_____entity)
        this.defaultEntitis.push(_____entity)
        this.borderEntities.push(_____entity)
      }
      this.wallEntity = ey
    })
    var border = Cesium.GeoJsonDataSource.load('./static/CesiumAssets/json/border2.json')

    border.then((dataSource) => {
      this.viewer.dataSources.add(dataSource)
      let entities = dataSource.entities.values
      this.defaultEntitis = [...this.defaultEntitis, ...entities]
      let points = []
      for (let i = 0; i < entities.length; i++) {
        let line = entities[i]
        line.polyline.width = 0
        let _values = line.polyline.positions._value
        let ____values = []

        _values.forEach((item, j) => {
          let cartographic = Cesium.Cartographic.fromCartesian(item)
          let longitude = Cesium.Math.toDegrees(cartographic.longitude)
          let latitude = Cesium.Math.toDegrees(cartographic.latitude)
          ____values.push(longitude, latitude, 2000)

          if (j % 150 === 0) { // 每150个点取出来
            points.push({
              longitude,
              latitude,
              h: 2000,
              is: true
            })
          }
        })
        let ____entity = this.viewer.entities.add({
          wall: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights(____values),
            material: new Cesium.PolylineGlowMaterialProperty({
              glowPower: 0.1,
              color: new Cesium.ColorMaterialProperty(new Cesium.CallbackProperty((time) => {
                return Cesium.Color.ORANGERED.withAlpha(0.9)
              }, false))
              // Cesium.Color.fromCssColorString('#ffd1db')
            })
          }
        })
        this.defaultEntitis.push(____entity)
        this.borderEntities.push(____entity)
      }

      points.forEach((d, j) => {
        let speed = 10
        if (j % 5 === 0) {
          speed = 50
        }
        this.viewer.entities.add({
          position: new Cesium.CallbackProperty(() => {
            if (d.h < 5000 && d.is) {
              d.h = d.h + speed
              if (d.h >= 5000) {
                d.is = false
              }
            } else if (d.h <= 5000 && !d.is) {
              d.h = d.h - speed
              if (d.h <= 2000) {
                d.is = true
              }
            }
            return Cesium.Cartesian3.fromDegrees(d.longitude, d.latitude, d.h)
          }, false),
          billboard: {
            image: './static/CesiumAssets/images/point.png'
          }
        })
      })
    })
    // 河流
    var promisehlData = Cesium.GeoJsonDataSource.load('./static/CesiumAssets/json/NewDataset_2.json', {clampToGround: true})
    promisehlData.then((dataSource) => {
      this.viewer.dataSources.add(dataSource)
      let entities = dataSource.entities.values

      // this.defaultEntitis = [...this.defaultEntitis, ...entities]
      for (let i = 0; i < entities.length; i++) {
        let entity = entities[i]
        entity.show = false
        let polygon1 = new Cesium.PolygonGeometry({
          polygonHierarchy: entity.polygon.hierarchy._value,
          extrudedHeight: 0,
          height: 1,
          vertexFormat: Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT
        })
        let River1 = new Cesium.Primitive({
          geometryInstances: new Cesium.GeometryInstance({
            geometry: polygon1
          }),
          appearance: new Cesium.EllipsoidSurfaceAppearance({
            aboveGround: true
          }),
          show: true
        })
        let River1Material = new Cesium.Material({
          fabric: {
            type: 'Water',
            uniforms: {
              baseWaterColor: Cesium.Color.fromCssColorString('rgba(11,55,108,1)'),
              normalMap: './static/CesiumAssets/images/water.jpg',
              frequency: 100.0,
              animationSpeed: 0.01,
              amplitude: 10.0
            }
          }
        })

        River1.appearance.material = River1Material
        this.viewer.scene.primitives.add(River1)
        this.viewer.entities.remove(entity)
      }
    }).otherwise((error) => {
      console.log(error)
    })
    let loadData = Cesium.GeoJsonDataSource.load('./static/CesiumAssets/json/loadData.json', {clampToGround: true})
    loadData.then((dataSource) => {
      this.viewer.dataSources.add(dataSource)
      let entities = dataSource.entities.values
      this._defaultEntitis = [...this._defaultEntitis, ...entities]
      for (let i = 0; i < entities.length; i++) {
        let line = entities[i]
        line.polyline.material = new Cesium.PolylineGlowMaterialProperty({
          glowPower: 0.1,
          color: Cesium.Color.fromCssColorString('#ffdf2d')
        })
        line.polyline.width = 10
      }
    }).otherwise((error) => {
      console.log(error)
    })
  }
  /**
   * @name: 定位经纬度，传入经纬度，定位该经纬度中心
   * @param {type}
   * @return:
   */
  getSouthPointByDistance (position, fn) {
    let Cesium = this.Cesium
    var entity = this.viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(+position.lon, +position.lat),
      point: {
        color: Cesium.Color.RED,
        pixelSize: 1
      }
    })
    let distance = position.distance || 5000
    this.viewer.flyTo(entity, {
      duration: position.ms || 3,
      offset: new Cesium.HeadingPitchRange(0.0, Cesium.Math.toRadians(-40.0), distance)
    }).then(() => {
      this.viewer.entities.remove(entity)
      if (typeof fn === 'function') {
        fn()
      }
    })
  }
  /**
   * @name:设置建筑样式
   * @param {layer 图层}
   * @return:null
   */
  setLayers (layer, type) {
    // layer.clearMemoryImmediately = false
    var Cesium = this.Cesium
    var hypsometricSetting = new Cesium.HypsometricSetting()
    if (type === '01') { // 纹理图片存在
      hypsometricSetting.emissionTextureUrl = './static/CesiumAssets/images/01.png'
      hypsometricSetting.emissionTexCoordScale = new Cesium.Cartesian2(0.01, 1)
    } else if (type === '02') {
      hypsometricSetting.emissionTextureUrl = './static/CesiumAssets/images/02.png'
      hypsometricSetting.emissionTexCoordScale = new Cesium.Cartesian2(0.1, 0.5)
    } else if (type === '03') {
      hypsometricSetting.emissionTextureUrl = './static/CesiumAssets/images/03.png'
      hypsometricSetting.emissionTexCoordScale = new Cesium.Cartesian2(0.5, 1)
    } else if (type === '04') {
      hypsometricSetting.emissionTextureUrl = './static/CesiumAssets/images/04.png'
      hypsometricSetting.emissionTexCoordScale = new Cesium.Cartesian2(0.1, 1)
    } else if (type === '05') {
      layer.style3D.emissionColor = new Cesium.Color(0, 0.7, 0.8, 1)
      hypsometricSetting.emissionTextureUrl = './static/CesiumAssets/images/05.png'
      hypsometricSetting.emissionTexCoordScale = new Cesium.Cartesian2(1, 0.1)
    }
    layer.hypsometricSetting = {
      hypsometricSetting: hypsometricSetting
    }
  }
  /**
   * @name:渲染maker
   * @return:null
   */
  render () {
    let Cesium = this.Cesium
    this.scene.postRender.addEventListener(() => {
      var heading = this.viewer.camera.heading

      var x = -Cesium.Math.toDegrees(heading)
      var degrees = 'rotate(' + x + 'deg)'
      this.$('#compass').css('transform', degrees)

      let height = this.viewer.camera.positionCartographic.height
      if (height > 7000) {
        store.commit('SET_isTOUR', false)
      } else {
        store.commit('SET_isTOUR', true)
      }
      if (height > 1300) {
        this.showOrHiddenToursEntities(false)
      } else {
        this.showOrHiddenToursEntities(true)
      }
      if (height > 50000) { //  展示二维地图
        this.heatMaps.forEach((item) => {
          if (!this.isHide) {
            item._layer.show = true
          }
        })

        this.defaultEntitis.forEach((item) => {
          item.show = true
        })
        this._defaultEntitis.forEach((item) => {
          item.show = false
        })
        this.imageryLayer.show = false
        this.satelliteLayer.show = true

        if (typeof this.changeMakerFn === 'function') {
          this.changeMakerFn(0)
        }
        store.commit('SET_IS_THREE', false)// 更改状态为二维
        store.commit('SET_CROSS_MAKERS', [])
      } else { // 展示底图图层
        store.commit('SET_IS_THREE', true)// 更改状态为三维
        this.heatMaps.forEach((item) => {
          item._layer.show = false
        })
        this.defaultEntitis.forEach((item) => {
          item.show = false
        })
        this._defaultEntitis.forEach((item) => {
          item.show = true
        })
        this.imageryLayer.show = true
        this.satelliteLayer.show = false
        if (typeof this.changeMakerFn === 'function') {
          this.changeMakerFn(1)
        }
      }

      if (height < 100000) { // 边界显示控制
        this.borderEntities.forEach((en) => {
          en.show = false
        })
      } else {
        this.borderEntities.forEach((en) => {
          en.show = true
        })
      }
      if (this.makers.length) {
        let crossMakers = this.crossMakers // 缓存
        this.makers.forEach((d, i) => {
          let windowPosition = new Cesium.Cartesian2()
          Cesium.SceneTransforms.wgs84ToWindowCoordinates(this.scene, d.position, windowPosition)

          // 气泡顶部
          if (windowPosition) {
            this.$('#' + d.id).css('top', (windowPosition.y) + 'px')
            this.$('#' + d.id).css('left', (windowPosition.x) + 'px')
          }
          // 三维越界maker 控制
          // let index = crossMakers.findIndex((_d) => {
          //   return d.id === _d.id
          // })
          // if (windowPosition.y <= 0 || windowPosition.x <= 0 || windowPosition.y > 1080 * window.$rem || windowPosition.x > 4320 * window.$rem) {
          //   if (index < 0) {
          //     crossMakers.push(d)
          //   }
          // } else {
          //   if (index > -1) {
          //     crossMakers.splice(index, 1)
          //   }
          // }
        })
        store.commit('SET_CROSS_MAKERS', crossMakers)
      }
      if (this.toolMakers.length) {
        let crossMakers = this.crossMakers // 缓存
        this.toolMakers.forEach((d, i) => {
          let windowPosition = new Cesium.Cartesian2()
          Cesium.SceneTransforms.wgs84ToWindowCoordinates(this.scene, d.position, windowPosition)
          // 气泡顶部
          if (windowPosition) {
            this.$('#' + d.id).css('top', (windowPosition.y) - 50 * window.$rem + 'px')
            this.$('#' + d.id).css('left', (windowPosition.x) + 'px')
          }
          // 三维越界maker 控制
          let index = crossMakers.findIndex((_d) => {
            return d.id === _d.id
          })
          if (windowPosition.y <= 0 || windowPosition.x <= 0 || windowPosition.y > 1080 * window.$rem || windowPosition.x > 4320 * window.$rem) {
            if (index < 0) {
              crossMakers.push(d)
            }
          } else {
            if (index > -1) {
              crossMakers.splice(index, 1)
            }
          }
        })
        store.commit('SET_CROSS_MAKERS', crossMakers)
      }
      if (this.attractionsMakers.length) {
        this.attractionsMakers.forEach((d, i) => {
          let windowPosition = new Cesium.Cartesian2()
          Cesium.SceneTransforms.wgs84ToWindowCoordinates(this.scene, d.position, windowPosition)
          // 气泡顶部
          if (windowPosition) {
            this.$('#' + d.id).css('top', (windowPosition.y) - 50 * window.$rem + 'px')
            this.$('#' + d.id).css('left', (windowPosition.x) + 'px')
          }
        })
      }
      if (Object.keys(this.modalPosition).length) {
        for (let m in this.modalPosition) {
          let crossMakers = this.crossMakers // 缓存
          let obj = this.modalPosition[m]
          let windowPosition = new Cesium.Cartesian2()
          Cesium.SceneTransforms.wgs84ToWindowCoordinates(this.scene, obj.position, windowPosition)
          // 气泡顶部
          if (windowPosition) {
            this.$('#' + obj.id).css('top', (windowPosition.y) + 'px')
            this.$('#' + obj.id).css('left', (windowPosition.x) + 'px')
          }

          // 三维越界maker 控制
          let index = crossMakers.findIndex((_d) => {
            return obj.id === _d.id
          })
          if (windowPosition.y <= 0 || windowPosition.x <= 0 || windowPosition.y > 1080 * window.$rem || windowPosition.x > 4320 * window.$rem) {
            if (index < 0) {
              crossMakers.push(obj)
            }
          } else {
            if (index > -1) {
              crossMakers.splice(index, 1)
            }
          }
          store.commit('SET_CROSS_MAKERS', crossMakers)
        }
      }
    })
    this.viewer.scene.preUpdate.addEventListener(() => {
      if (this.trackedEntity) {
        var center = this.trackedEntity.position.getValue(this.viewer.clock.currentTime)
        if (center) {
          if (this.trackedEntity.hpRange) {
            this.viewer.camera.lookAt(center, this.trackedEntity.hpRange)
          }
          // var windowPosition = new Cesium.Cartesian2()
          // Cesium.SceneTransforms.wgs84ToWindowCoordinates(this.scene, center, windowPosition)
          // // 气泡顶部
          // this.$('#' + this.trackedEntity.DomID).css('top', (windowPosition.y) + 'px')
          // this.$('#' + this.trackedEntity.DomID).css('left', (windowPosition.x) + 'px')
        } else {
          this.viewer.entities.remove(this.trackedEntity)
          this.trackedEntity = null// 置空
          if (typeof this.trackedEntityFn === 'function') {
            this.trackedEntityFn()
          }
        }
      }
    })
  }

  flyToByLon (position) {
    if (position) {
      this.scene.camera.flyTo({
        destination: this.Cesium.Cartesian3.fromDegrees(+position.lon, +position.lat, +position.height),
        orientation: {
          heading: position.heading,
          pitch: position.pitch,
          roll: position.roll
        }
      })
    }
  }
  flyToByMector (position) {
    let Cesium = this.Cesium
    if (position) {
      this.scene.camera.flyTo({
        destination: new Cesium.Cartesian3(position.x, position.y, position.z),
        orientation: {
          heading: position.heading,
          pitch: position.pitch,
          roll: position.roll
        }
      })
    }
  }
  /**
   * @name: 添加标记
   * @param {makers 标记数据}
   * @param {fn maker 变化回调} 以 1500 做分界线，高于回调为0，低于回调为1，分别显示同一maker 根据高度不同显示不同样式
   * @return:
   */
  addMakers (makers, fn) {
    let Cesium = this.Cesium
    this.changeMakerFn = fn
    makers.forEach((d, i) => {
      if (d.lon) {
        let lon = d.lon * 1
        let lat = d.lat * 1
        let scenePosition = Cesium.Cartesian3.fromDegrees(lon, lat, 1)
        this.makers.push({
          position: scenePosition,
          id: d.id
        })
        Cesium.SceneTransforms.wgs84ToWindowCoordinates(this.scene, scenePosition, new Cesium.Cartesian2())

        // this.viewer.entities.add({
        //   position: scenePosition,
        //   point: {
        //     color: Cesium.Color.ORANGERED,
        //     pixelSize: 10
        //   }
        // })
      }
    })
  }
  /**
   * @name: 添加景点标记
   * @param {makers 标记数据}
   * @return:
   */
  addAttractionsMakers (makers) {
    let Cesium = this.Cesium
    makers.forEach((d, i) => {
      if (d.lon) {
        let lon = d.lon * 1
        let lat = d.lat * 1
        let h = d.height * 1 || 50
        let scenePosition = Cesium.Cartesian3.fromDegrees(lon, lat, +h)
        this.attractionsMakers.push({
          position: scenePosition,
          id: d.id
        })
        Cesium.SceneTransforms.wgs84ToWindowCoordinates(this.scene, scenePosition, new Cesium.Cartesian2())

        // this.viewer.entities.add({
        //   position: scenePosition,
        //   point: {
        //     color: Cesium.Color.ORANGERED,
        //     pixelSize: 10
        //   }
        // })
      }
    })
  }
  /**
   * @name: 添加乐山景点
   * @param {makers 标记数据}
   * @return:
   */
  addToursEntities (makers) {
    let Cesium = this.Cesium
    console.log(makers)
    makers.forEach((d, i) => {
      if (d.lon) {
        let lon = d.lon * 1
        let lat = d.lat * 1
        let h = d.height * 1 || 50
        let scenePosition = Cesium.Cartesian3.fromDegrees(lon, lat, +h)
        let en = this.viewer.entities.add({
          position: scenePosition,
          billboard: {
            image: d.icon,
            horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            pixelOffset: new Cesium.Cartesian2(-20 * window.$rem, 15 * window.$rem),
            width: 130,
            height: 144
          },
          type: 'tour',
          tourName: d.scenicName
        })
        // this.viewer.entities.add({
        //   position: scenePosition,
        //   point: {
        //     color: Cesium.Color.ORANGERED,
        //     pixelSize: 10
        //   }
        // })
        this.toursEntities.push(en)
      }
    })
  }
  /**
   * @name: 显示或者隐藏景点信息
   * @param {makers 标记数据}
   * @return:
   */
  showOrHiddenToursEntities (show) {
    this.toursEntities.forEach((d) => {
      d.show = show
    })
  }
  // 移除标记
  removeMaker (ids) {
    if (ids) {
      ids.forEach((item) => {
        let index = this.makers.findIndex((d) => {
          return d.id === item
        })
        this.makers.splice(index, 1)
      })
    } else {
      this.makers = []
    }
  }
  /*
  * @name: 添加点位热力图
  * @param {data} 点位信息 数据格式 [{x:经度，y:纬度，value:10},......] value 一般传10 颜色程度1-100 调整
  * @param {valueMin} 最小值
  * @param {valueMax} 最大值
  * @return:
  */
  addHeatPointMap (id, data, valueMin = 0, valueMax = 100) {
    let viewer = this.viewer
    let bounds = this.bounds
    let heatMap = window.CesiumHeatmap.create(
      viewer,
      bounds, {
        // heatmap.js options go here
      }
    )
    heatMap.id = id
    heatMap.setWGS84Data(valueMin, valueMax, data)
    this.heatMaps.push(heatMap)
  }
  /**
  * @name: 创建区域热力图
  * @param {name} 区域名字
  * @return:
  */
  createHeatZoneMap (name, val) {
    var viewer = this.viewer
    let bounds = this.bounds
    let data = zoneHeatMap[name].creatHeatMap(val)
    let heatMap = window.CesiumHeatmap.create(
      viewer,
      bounds
    )
    heatMap.setWGS84Data(0, 100, data)
    this.heatMaps.push(heatMap)
  }
  /**
  * @name: 移除or隐藏热力图
  * @param {ids} 热力图id
  * @param {isRemove} 是否移除热力图
  * @return:
  */
  removeHeatPointMap (ids, isRemove) {
    if (ids && ids.length > 0) {
      ids.forEach((d) => {
        let index = this.heatMaps.findIndex((item) => {
          return d === item.id
        })
        if (index > -1) {
          if (isRemove) {
            this.viewer.entities.remove(this.heatMaps[index]._layer)
            this.heatMaps.splice(index, 1)
          } else {
            this.heatMaps[index]._layer.show = false
            this.heatMaps[index].isHide = true
          }
        }
      })
    } else {
      if (isRemove) {
        this.heatMaps.forEach((item) => {
          this.viewer.entities.remove(item._layer)
        })
        this.heatMaps = []
      } else {
        this.heatMaps.forEach((item) => {
          item._layer.show = false
          item.isHide = true
        })
      }
    }
  }
  /**
  * @name:  清除maker 热力 置空方法
  * @return:
  */
  clear () {
    this.trackedEntityFn = null
    this.changeMakerFn = null// 切换3dmaker和二维maker方法
    this.rewirteDimensionClick = null// 置空二维地图重写点击方法
    this.makers = []
    this.heatMaps.forEach((item) => {
      this.viewer.entities.remove(item._layer)
    })
    this.crossMakers = []
    this.heatMaps = []
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
      return null
    }
  }
  // 移除点光源
  removeLight (lightSource) {
    this.scene.removeLightSource(lightSource)
  }
  // 获取相机的位置
  getCamera () {
    console.log(this.scene.camera)
    return this.scene.camera
  }
  removeEntity (entities) {
    if (entities && entities.length > 0) {
      entities.forEach((id) => {
        this.viewer.entities.remove(this.viewer.entities.getById(id))
      })
    } else {
      this.viewer.entities.removeAll()
    }
  }
  /**
   * @name:飞行曲线
   * @params {startPoint 起点位置}
   *         {endPoint，终点位置}
   *         {lineColor，线条颜色}
   *         {lineWidth，线条宽度}
   *         {trailColor，尾迹颜色}
   *         {trailWidth，尾迹线宽度}
   *         {trailLength，轨迹长度}
   *         {period，运动时间}
   *         {num， 精度数，数字越大越精细，运动轨迹更流畅}
   * @return {array(entity)}
   */
  addFightLine ({startPoint,
    endPoint,
    lineColor = 'rgba(118, 233, 241, 0.2)',
    lineWidth = 2,
    trailColor = 'rgba(255, 255, 255, 1)',
    trailWidth = 3,
    trailLength = 0.05,
    period = 5,
    num = 1000}) {
    let Cesium = this.Cesium
    let ceStartPoint = Cesium.Cartesian3.fromDegrees(+startPoint[0], +startPoint[1], 0)
    let ceEndPoint = Cesium.Cartesian3.fromDegrees(+endPoint[0], +endPoint[1], 0)
    let BZPoints = this.getBZPoints(ceStartPoint, ceEndPoint, num)
    let a = this.viewer.entities.add({
      polyline: {
        positions: BZPoints,
        width: lineWidth,
        material: Cesium.Color.fromCssColorString(lineColor)
      }
    })
    let b = this.viewer.entities.add({ // 尾迹线
      polyline: {
        positions: BZPoints,
        width: trailWidth, // 线的宽度，像素为单位
        material: new Cesium.PolylineTrailMaterialProperty({ // 尾迹线材质
          color: Cesium.Color.fromCssColorString(trailColor),
          trailLength,
          period
        })
      }
    })
    return [a.id, b.id]
  }

  /**
   * @name: 返回两点之间的贝塞尔曲线坐标点
   * @params {startPoint 起点位置}
   *         {endPoint，终点位置}
   *         {num, 精度数，数字越大越精细，运动轨迹更流畅}
   * @return:
   */
  getBZPoints (startPoint, endPoint, num = 500) {
    let Cesium = this.Cesium
    let addPointCartesian = new Cesium.Cartesian3()
    Cesium.Cartesian3.add(startPoint, endPoint, addPointCartesian)
    let midPointCartesian = new Cesium.Cartesian3()
    Cesium.Cartesian3.divideByScalar(addPointCartesian, 2, midPointCartesian)
    let midPointCartographic = Cesium.Cartographic.fromCartesian(midPointCartesian)
    // 除以的这个数越小 开始的位置聚集的位置就越陡，越大 开始的位置线就越平缓，
    midPointCartographic.height = Cesium.Cartesian3.distance(startPoint, endPoint) / 4
    let midPoint = new Cesium.Cartesian3()
    Cesium.Ellipsoid.WGS84.cartographicToCartesian(midPointCartographic, midPoint)
    let spline = Cesium.HermiteSpline.createNaturalCubic({
      times: [0.0, 0.5, 1],
      points: [startPoint, midPoint, endPoint]
    })
    let curvePointsArr = []
    for (let i = 0, len = num; i < len; i++) {
      curvePointsArr.push(spline.evaluate(i / len))
    }
    return curvePointsArr
  }
  /**
   * @name: 计算轨迹点位property
   * @params{points} 点位数组
   *  @params{time} 点位时间段 设置与points长度一样效果最佳
   * @return:
   */
  computeRoamingLineProperty (points, time = 4000, speed = 15) {
    let Cesium = this.Cesium
    let property = new Cesium.SampledPositionProperty()
    let pointLength = points.length
    let tempTime = time - time % pointLength
    let increment = tempTime / pointLength
    let start = Cesium.JulianDate.now()
    let stop = Cesium.JulianDate.addSeconds(start, tempTime, new Cesium.JulianDate())
    this.viewer.clock.startTime = start.clone()
    this.viewer.clock.stopTime = stop.clone()
    this.viewer.clock.currentTime = start.clone()
    this.viewer.clock.multiplier = speed

    for (let i = 0; i < pointLength; i++) {
      let time = Cesium.JulianDate.addSeconds(start, i * increment, new Cesium.JulianDate())
      let position = Cesium.Cartesian3.fromDegrees(points[i].lon, points[i].lat, points[i].h)
      property.addSample(time, position)
    }
    return {
      property,
      start,
      stop
    }
  }
  /**
   * @name: 移动轨迹跟踪
   * @param {points} 运动点位
   * @param {domId} 绑定dom元素id
   * @param {speed} 运动速度
   * @param {hpr} 方位角对象 heading,旋转角 【0-360】，pitch【0-360】 俯仰角,range，镜头距离跟踪地点距离
   * @return:
   */
  trajectory (points, domId, trackedEntityFn, speed, hpr) {
    let Cesium = this.Cesium
    this.viewer.clock.shouldAnimate = true
    let hpRange = {}
    hpRange.heading = Cesium.Math.toRadians(90)
    hpRange.pitch = Cesium.Math.toRadians(-50)
    hpRange.range = 1000
    if (hpr) {
      hpRange.heading = Cesium.Math.toRadians(hpr.heading)
      hpRange.pitch = Cesium.Math.toRadians(hpr.pitch)
      hpRange.range = hpr.range
    }

    this.trackedEntityFn = trackedEntityFn
    let {property, start, stop} = this.computeRoamingLineProperty(points, points.length, speed)
    let en = this.viewer.entities.add({
      availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
        start: start,
        stop: stop
      })]),
      position: property,
      orientation: new Cesium.VelocityOrientationProperty(property),
      model: {
        uri: './static/CesiumAssets/ExportModel.gltf',
        scale: 10,
        minimumPixelSize: 120
      }
    })
    en.position.setInterpolationOptions({// 点插值
      interpolationDegree: 5,
      interpolationAlgorithm: Cesium.LagrangePolynomialApproximation
    })
    en.DomID = domId
    en.hpRange = hpRange
    this.viewer.trackedEntity = en

    this.trackedEntity = en// 重置监测实体
  }
  clearTrajectory () {
    let Cesium = this.Cesium
    this.viewer.clock.shouldAnimate = false
    this.viewer.trackedEntity = null
    this.viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)

    if (this.trackedEntity) {
      this.viewer.entities.remove(this.trackedEntity)
      this.trackedEntity = null
      this.viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
      if (typeof this.trackedEntityFn === 'function') {
        this.trackedEntityFn()
      }
    }
  }
  /**
   * @name: 自定义飞行曲线
   * @params {startPoint 起点位置}
   *         {endPoint，终点位置}
   *         {lineColor，线条颜色}
   *         {lineWidth，线条宽度}
   *         {num， 精度数，数字越大越精细，运动轨迹更流畅}
   */
  customFight ({startPoint,
    endPoint,
    lineColor = 'rgba(118, 233, 241, 0.1)',
    lineWidth = 1,
    num = 500}) {
    let Cesium = this.Cesium
    let ceStartPoint = Cesium.Cartesian3.fromDegrees(+startPoint[0], +startPoint[1], 0)
    let ceEndPoint = Cesium.Cartesian3.fromDegrees(+endPoint[0], +endPoint[1], 0)
    let BZPoints = this.getBZPoints(ceStartPoint, ceEndPoint, num)
    let animationObj = {
      stepsRange: {
        start: 0,
        end: num
      },
      trails: 1,
      duration: 8
    }

    var _range = animationObj.stepsRange.end - animationObj.stepsRange.start

    var isAvailable = function isAvailable (currentTime) {
      if (!Cesium.defined(currentTime)) {
        throw new Cesium.DeveloperError('time is required.')
      }

      var nMS = Cesium.JulianDate.toDate(currentTime).getTime() / animationObj.duration
      var time = (nMS % _range + animationObj.stepsRange.start)

      var trails = 1
      if (time && this.nameID > time - trails && this.nameID < time) {
        return true
      } else {
        return false
      }
    }
    let entities = []
    let a = this.viewer.entities.add({
      polyline: {
        positions: BZPoints,
        width: lineWidth,
        material: Cesium.Color.fromCssColorString(lineColor)
      }
    })
    entities.push(a.id)
    for (let i = 0, len = BZPoints.length; i < len; i++) {
      let en = this.viewer.entities.add({
        position: BZPoints[i],
        nameID: i,
        point: {
          color: Cesium.Color.WHITE,
          pixelSize: 5
        }
      })
      en.isAvailable = isAvailable
      entities.push(en.id)
    }
    return entities
  }
  click (cb) {
    let Cesium = this.Cesium
    var handler = new Cesium.ScreenSpaceEventHandler(this.scene.canvas)
    handler.setInputAction((e) => {
      if (typeof cb === 'function') {
        cb()
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
  }
  // 鼠标右键
  rightClick (cb) {
    let _self = this
    window.document.oncontextmenu = function (e) {
      e.preventDefault()
      if (!_self.isActiveDrawCustom) {
        window._m.redirectDimenion()
        if (cb && typeof cb === 'function') {
          cb()
        }
      }
    }
  }
  setBloomEffect (isStart) {
    this.scene.bloomEffect.show = isStart
  }
  // 绘制区域形状
  drawZone (points, zoneColor, lineColor) {
    let Cesium = this.Cesium
    let lineFlag = false
    if (lineColor) {
      lineFlag = true
    } else {
      lineFlag = false
      lineColor = 'rgba(0, 0, 0, 0)'
    }
    let entity = this.viewer.entities.add({
      polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArray(points),
        extrudedHeight: 2,
        material: Cesium.Color.fromCssColorString(zoneColor),
        outline: lineFlag,
        outlineColor: Cesium.Color.fromCssColorString(lineColor),
        outlineWidth: 1,
        arcType: Cesium.ArcType.RHUMB
      }
    })
    return entity.id
  }
  /**
   * @name: 绘制矩形框
   * @return: null
   */
  drawReact () {
    this.viewer.scene.globe.depthTestAgainstTerrain = false
    this.isActiveDrawReact = true
    let Cesium = this.Cesium
    let handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas)
    let shape = {// 矩形对象
      points: [],
      rect: null,
      entity: null
    }
    handler.setInputAction((movement) => {
      if (this.isActiveDrawReact) {
        let tempPosition = this.getPointFromWindowPoint(movement.position)
        if (shape.points.length === 0) {
          shape.points.push(this.viewer.scene.globe.ellipsoid.cartesianToCartographic(tempPosition))
          shape.rect = Cesium.Rectangle.fromCartographicArray(shape.points)
          shape.rect.east += 0.000001
          shape.rect.north += 0.000001
          shape.entity = this.viewer.entities.add({
            rectangle: {
              clampToGround: true,
              coordinates: shape.rect,
              material: Cesium.Color.BLACK.withAlpha(0.1),
              outline: true,
              outlineWidth: 20,
              outlineColor: Cesium.Color.fromCssColorString('#006DFF'),
              height: 10,
              heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
            }
          })
          this.reactDrawShaps.push(shape.entity) // 将实体缓存
        } else { // 结束
          handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE)
          handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK)
          console.log(this.reactDrawShaps)
        }
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
    handler.setInputAction((movement) => {
      if (shape.points.length === 0) {
        return
      }
      var moveEndPosition = this.getPointFromWindowPoint(movement.endPosition)
      // 选择的点在球面上
      if (moveEndPosition) {
        shape.points[1] = this.viewer.scene.globe.ellipsoid.cartesianToCartographic(moveEndPosition)
        shape.rect = Cesium.Rectangle.fromCartographicArray(shape.points)
        if (shape.rect.west === shape.rect.east) { shape.rect.east += 0.000001 }
        if (shape.rect.south === shape.rect.north) { shape.rect.north += 0.000001 }
        shape.entity.rectangle.coordinates = shape.rect
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
  }
  getPointFromWindowPoint (point) {
    if (this.viewer.scene.terrainProvider.constructor.name === 'EllipsoidTerrainProvider') {
      return this.viewer.camera.pickEllipsoid(point, this.viewer.scene.globe.ellipsoid)
    } else {
      var ray = this.viewer.scene.camera.getPickRay(point)
      return this.viewer.scene.globe.pick(ray, this.viewer.scene)
    }
  }
  /**
   * @name: 绘制矩形框
   * @return: null
   */
  drawCricle (cb, radius) {
    store.commit('SET_CURSOR', true)
    this.isActiveDrawCricle = true
    let Cesium = this.Cesium
    let isEnd = false
    let circle = {
      points: [],
      rect: null,
      entity: null,
      r: 1
    }
    let callBackPos = () => {
      const minlon = Cesium.Math.toDegrees(circle.points[0].longitude)
      const minlat = Cesium.Math.toDegrees(circle.points[0].latitude)
      const maxlon = Cesium.Math.toDegrees(circle.points[1].longitude)
      const maxlat = Cesium.Math.toDegrees(circle.points[1].latitude)
      const r = this.getFlatternDistance(minlat, minlon, maxlat, maxlon)
      if (r) {
        return r
      }
      return 1
    }
    let tempPosition
    let cartographic1
    let tempLon
    let tempLat
    let ShapeEventHandler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas)
    ShapeEventHandler.setInputAction((click) => {
      tempPosition = this.getPointFromWindowPoint(click.position)
      // 选择的点在球面上
      if (tempPosition && this.isActiveDrawCricle) {
        if (circle.points.length === 0) {
          cartographic1 = Cesium.Ellipsoid.WGS84.cartesianToCartographic(tempPosition)
          circle.points.push(this.viewer.scene.globe.ellipsoid.cartesianToCartographic(tempPosition))
          circle.points.push(this.viewer.scene.globe.ellipsoid.cartesianToCartographic(tempPosition))
          tempLon = Cesium.Math.toDegrees(cartographic1.longitude)
          tempLat = Cesium.Math.toDegrees(cartographic1.latitude)
          circle.entity = this.viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(tempLon, tempLat),
            ellipse: {
              semiMinorAxis: new Cesium.CallbackProperty(callBackPos, false),
              semiMajorAxis: new Cesium.CallbackProperty(callBackPos, false),
              fill: false,
              material: Cesium.Color.BLACK.withAlpha(0.4),
              outline: true,
              outlineWidth: 4,
              outlineColor: Cesium.Color.fromCssColorString('#006DFF'),
              heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
            }
          })
          this.cricleDrawShaps.push(circle.entity)
        } else {
          if (!isEnd) {
            store.commit('SET_CURSOR', false)
            ShapeEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE)
            ShapeEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK)
            let o = {
              lon: tempLon,
              lat: tempLat,
              radius: callBackPos() / 1000
            }
            if (typeof cb === 'function') {
              cb(o)
            }
          }
        }
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
    ShapeEventHandler.setInputAction((movement) => {
      if (circle.points.length === 0) {
        return
      }
      let moveEndPosition = this.getPointFromWindowPoint(movement.endPosition)
      // 选择的点在球面上
      if (moveEndPosition) {
        if (radius && callBackPos() > radius) {
          store.commit('SET_CURSOR', false)
          ShapeEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE)
          ShapeEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK)
          let o = {
            lon: tempLon,
            lat: tempLat,
            radius: parseInt(callBackPos() / 1000)
          }
          if (typeof cb === 'function') {
            cb(o)
          }
          isEnd = true
        }
        circle.points.pop()
        circle.points.push(this.viewer.scene.globe.ellipsoid.cartesianToCartographic(moveEndPosition))
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
  }
  /**
   * @name: 绘制自定义形状
   * @return: null
   */
  drawCustomShap (iconCallback) {
    let Cesium = this.Cesium
    this.isActiveDrawCustom = true
    let _this = this

    let PolygonPrimitive = (function () {
      function _ (positions) {
        this.options = {
          polygon: {
            hierarchy: [],
            fill: false,
            material: Cesium.Color.BLACK.withAlpha(0.4),
            outline: true,
            outlineWidth: 4,
            outlineColor: Cesium.Color.fromCssColorString('#006DFF'),
            closeTop: true,
            closeBottom: true,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
          }
        }
        this.hierarchy = positions
        this._init()
      }

      _.prototype._init = function () {
        let _self = this
        let _update = function () {
          return _self.hierarchy
        }
        // 实时更新polygon.hierarchy
        this.options.polygon.hierarchy = new Cesium.CallbackProperty(_update, false)
        let _entity = _this.viewer.entities.add(this.options)
        this.customDrawShaps.push(_entity) // 将实体放入
      }
      return _
    })()

    let handler = new Cesium.ScreenSpaceEventHandler(_this.viewer.scene.canvas)
    let positions = []
    let poly

    // 鼠标单击画点
    handler.setInputAction((movement) => {
      let cartesian = _this.viewer.scene.camera.pickEllipsoid(movement.position, _this.viewer.scene.globe.ellipsoid)
      if (positions.length === 0) {
        positions.push(cartesian.clone())
      }
      let _ = _this.viewer.entities.add({
        position: cartesian,
        point: {
          color: Cesium.Color.RED,
          pixelSize: 1
        }
      })
      let id = _.id
      _this.viewer.entities.remove(_)
      let obj = {
        id,
        position: cartesian,
        type: 1
      }
      iconCallback(obj)
      positions.push(cartesian)
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
    // 鼠标移动
    handler.setInputAction((movement) => {
      let cartesian = _this.viewer.scene.camera.pickEllipsoid(movement.endPosition, _this.viewer.scene.globe.ellipsoid)
      if (positions.length >= 2) {
        if (!Cesium.defined(poly)) {
          poly = new PolygonPrimitive(positions)
        } else {
          if (cartesian !== undefined) {
            positions.pop()
            cartesian.y += (1 + Math.random())
            positions.push(cartesian)
          }
        }
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
    // 鼠标右键单击结束绘制
    handler.setInputAction(function (movement) {
      let cartesian = _this.viewer.scene.camera.pickEllipsoid(movement.position, _this.viewer.scene.globe.ellipsoid)
      if (positions.length === 0) {
        positions.push(cartesian.clone())
      }
      let _ = _this.viewer.entities.add({
        position: cartesian,
        point: {
          color: Cesium.Color.RED,
          pixelSize: 1
        }
      })
      let id = _.id
      _this.viewer.entities.remove(_)
      let obj = {
        id,
        position: cartesian,
        type: 1
      }
      iconCallback(obj)
      setTimeout(() => {
        _this.isActiveDrawCustom = false
      }, 0)
      handler.destroy()
    }, Cesium.ScreenSpaceEventType.RIGHT_CLICK)
  }
  /**
   * @name: 筛选最佳路径
   * @return: null
   */
  selectPreLoad (iconCallback) {
    let SuperMap = window.SuperMap
    let Cesium = this.Cesium
    let handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas)
    let positions = []
    // 鼠标单击画点
    handler.setInputAction((movement) => {
      let cartesian = this.viewer.scene.camera.pickEllipsoid(movement.position, this.viewer.scene.globe.ellipsoid)
      if (positions.length === 0) {
        positions.push(cartesian.clone())
        let _ = this.viewer.entities.add({
          position: cartesian,
          point: {
            color: Cesium.Color.RED,
            pixelSize: 1
          }
        })
        let id = _.id
        this.viewer.entities.remove(_)
        let obj = {
          id,
          position: cartesian,
          type: 2
        }
        iconCallback(obj)
      } else if (positions.length === 1) {
        positions.push(cartesian.clone())
        let nodeArray = []
        positions.forEach((position) => {
          let cartographic = Cesium.Cartographic.fromCartesian(position)
          let longitude = Cesium.Math.toDegrees(cartographic.longitude)
          let latitude = Cesium.Math.toDegrees(cartographic.latitude)
          let height = cartographic.height
          let point = new SuperMap.Geometry.Point(longitude, latitude, height)
          nodeArray.push(point)
        })
        let _ = this.viewer.entities.add({
          position: cartesian,
          point: {
            color: Cesium.Color.RED,
            pixelSize: 1
          }
        })
        let id = _.id
        this.viewer.entities.remove(_)
        let obj = {
          id,
          position: cartesian,
          type: 3
        }
        iconCallback(obj)
        this.computeLoad(nodeArray)
        handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK)
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
  }
  /**
   * @name: 计算最佳路径
   * @return: null
   */
  computeLoad (nodeArray) {
    let SuperMap = window.SuperMap
    var findPathService, parameter, analystParameter, resultSetting
    resultSetting = new SuperMap.REST.TransportationAnalystResultSetting({
      returnEdgeFeatures: true,
      returnEdgeGeometry: true,
      returnEdgeIDs: true,
      returnNodeFeatures: true,
      returnNodeGeometry: true,
      returnNodeIDs: true,
      returnPathGuides: true,
      returnRoutes: true
    })
    analystParameter = new SuperMap.REST.TransportationAnalystParameter({
      resultSetting: resultSetting,
      weightFieldName: 'SmLength'
    })
    parameter = new SuperMap.REST.FindPathParameters({
      isAnalyzeById: false,
      nodes: nodeArray,
      hasLeastEdgeCount: false,
      parameter: analystParameter
    })
    if (nodeArray.length <= 1) {
      return false
    }
    findPathService = new SuperMap.REST.FindPathService(this.loadURL, {
      eventListeners: {'processCompleted': this.processCompleted.bind(this)}
    })
    findPathService.processAsync(parameter)
  }
  processCompleted (findPathEventArgs) {
    let Cesium = this.Cesium
    var result = findPathEventArgs.result
    console.log('最佳路径1', findPathEventArgs.result.pathList[0].weight)
    let weight = findPathEventArgs.result.pathList[0].weight
    store.commit('SET_PRELOAD', parseInt(weight))
    var points = []
    for (var k = 0; k < result.pathList[0].route.components.length; k++) {
      points.push(result.pathList[0].route.components[k].x)
      points.push(result.pathList[0].route.components[k].y)
      points.push(10)
    }
    let load = this.viewer.entities.add({
      polyline: {
        positions: Cesium.Cartesian3.fromDegreesArrayHeights(points),
        width: 6,
        material: new Cesium.PolylineOutlineMaterialProperty({
          outline: false,
          color: Cesium.Color.fromCssColorString('#00D372')
        })
      }
    })
    this.loadComputed.push(load)// 将实体放入
  }
  /**
   * @name: 测量距离
   * @return: null
   */
  measureLineSpace (iconCallback) {
    this.isActiveDrawLine = true
    let Cesium = this.Cesium
    var _this = this
    var PolyLinePrimitive = (function () {
      function _ (positions) {
        this.options = {
          polyline: {
            show: true,
            positions: [],
            material: Cesium.Color.fromCssColorString('#EA1A1A'),
            width: 4
          }
        }
        this.positions = positions
        this._init()
      }

      _.prototype._init = function () {
        var _self = this
        var _update = function () {
          return _self.positions
        }
        // 实时更新polyline.positions
        this.options.polyline.positions = new Cesium.CallbackProperty(_update, false)
        let en = _this.viewer.entities.add(this.options)
        _this.lineDrawShaps.push(en)
      }
      return _
    })()

    let handler = new Cesium.ScreenSpaceEventHandler(_this.viewer.scene.canvas)
    let positions = []
    let _positions = []
    var poly
    // 鼠标左键单击画点
    handler.setInputAction((movement) => {
      let cartesian = _this.viewer.scene.camera.pickEllipsoid(movement.position, _this.viewer.scene.globe.ellipsoid)
      _positions.push(cartesian)
      let obj = {
        position: cartesian,
        type: 4
      }
      if (positions.length === 0) {
        obj.start = true
        positions.push(cartesian.clone())
      }
      let _ = _this.viewer.entities.add({
        position: cartesian,
        point: {
          color: Cesium.Color.RED,
          pixelSize: 1
        }
      })
      let id = _.id
      obj.id = id
      _this.viewer.entities.remove(_)

      if (_positions.length >= 2) {
        // let minposition = _positions[_positions.length - 2]
        // let maxposition = _positions[_positions.length - 1]
        let r = this.getSpaceDistance(_positions)
        obj.distance = parseInt(r)
      }
      positions.push(cartesian)
      iconCallback(obj)
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
    // 鼠标移动
    handler.setInputAction(function (movement) {
      var cartesian = _this.viewer.scene.camera.pickEllipsoid(movement.endPosition, _this.viewer.scene.globe.ellipsoid)
      if (positions.length >= 2) {
        if (!Cesium.defined(poly)) {
          poly = new PolyLinePrimitive(positions)
        } else {
          if (cartesian !== undefined) {
            positions.pop()
            cartesian.y += (1 + Math.random())
            positions.push(cartesian)
          }
        }
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
    // 单击鼠标右键结束画线
    handler.setInputAction((movement) => {
      let cartesian = _this.viewer.scene.camera.pickEllipsoid(movement.position, _this.viewer.scene.globe.ellipsoid)
      _positions.push(cartesian)
      let obj = {
        position: cartesian,
        type: 4,
        end: true
      }
      if (positions.length === 0) {
        obj.start = true
        positions.push(cartesian.clone())
      }
      let _ = _this.viewer.entities.add({
        position: cartesian,
        point: {
          color: Cesium.Color.RED,
          pixelSize: 1
        }
      })
      let id = _.id
      obj.id = id
      _this.viewer.entities.remove(_)

      if (_positions.length >= 2) {
        let minposition = _positions[_positions.length - 2]
        let maxposition = _positions[_positions.length - 1]
        let r = this.getSpaceDistance([minposition, maxposition])
        obj.distance = parseInt(r)
      }

      iconCallback(obj)
      setTimeout(() => {
        _this.isActiveDrawLine = false
      }, 5)
      handler.destroy()
    }, Cesium.ScreenSpaceEventType.RIGHT_CLICK)
  }
  /**
   * @name: 添加标注
   * @return: null
   */
  addIcon (cb) {
    let Cesium = this.Cesium
    var handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas)

    // 单击鼠标左键画点
    handler.setInputAction((movement) => {
      let cartesian = this.viewer.scene.camera.pickEllipsoid(movement.position, this.viewer.scene.globe.ellipsoid)
      let en = this.viewer.entities.add({
        position: cartesian,
        point: {
          color: Cesium.Color.RED,
          pixelSize: 1,
          heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
        }
      })
      let id = en.id
      let o = {
        position: cartesian,
        name: '',
        isShow: false,
        id
      }
      cb(o)
      this.viewer.entities.remove(en)
      handler.destroy()
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
  }
  /**
   * @name: 添加工具条maker
   * @return: null
   */
  addToolsMakers (makers) {
    let Cesium = this.Cesium
    makers.forEach((d, i) => {
      if (d.position) {
        this.toolMakers.push({
          position: d.position,
          id: d.id
        })
        // this.viewer.entities.add({
        //   position: d.position,
        //   point: {
        //     color: Cesium.Color.RED,
        //     pixelSize: 10
        //   }
        // })
        Cesium.SceneTransforms.wgs84ToWindowCoordinates(this.scene, d.position, new Cesium.Cartesian2())
      }
    })
  }
  addToolsVideoMakers (makers, fn) {
    let Cesium = this.Cesium
    // this.changeMakerFn = fn
    makers.forEach((d, i) => {
      if (d.lon) {
        let lon = d.lon * 1
        let lat = d.lat * 1
        let scenePosition = Cesium.Cartesian3.fromDegrees(lon, lat, 1)
        this.toolMakers.push({
          position: scenePosition,
          id: d.id
        })
        // this.viewer.entities.add({
        //   position: scenePosition,
        //   point: {
        //     color: Cesium.Color.RED,
        //     pixelSize: 10
        //   }
        // })
        Cesium.SceneTransforms.wgs84ToWindowCoordinates(this.scene, scenePosition, new Cesium.Cartesian2())
      }
    })
  }
  clearToolAllEntity () {
    this.toolMakers = []
    this.reactDrawShaps.forEach((d) => {
      this.viewer.entities.remove(d)
    })
    this.cricleDrawShaps.forEach((d) => {
      this.viewer.entities.remove(d)
    })
    this.customDrawShaps.forEach((d) => {
      this.viewer.entities.remove(d)
    })
    this.loadComputed.forEach((d) => {
      this.viewer.entities.remove(d)
    })
    this.lineDrawShaps.forEach((d) => {
      this.viewer.entities.remove(d)
    })
  }
  clearToolMakers (makers) {
    if (makers && makers.length !== 0) {
      makers.forEach((d) => {
        let index = this.toolMakers.findIndex((_d) => {
          return d.id === _d.id
        })
        if (index > -1) {
          this.toolMakers.splice(index, 1)
        }
      })
    } else {
      this.toolMakers = []
    }
  }
  clearToolLineEnty () {
    this.lineDrawShaps.forEach((d) => {
      this.viewer.entities.remove(d)
    })
  }
  /**
   * @name: 计算两点之间距离
   * @return: null
   */
  getFlatternDistance (lat1, lng1, lat2, lng2) {
    var EARTH_RADIUS = 6378137.0 // 单位M
    var PI = Math.PI

    function getRad (d) {
      return d * PI / 180.0
    }
    var f = getRad((lat1 + lat2) / 2)
    var g = getRad((lat1 - lat2) / 2)
    var l = getRad((lng1 - lng2) / 2)

    var sg = Math.sin(g)
    var sl = Math.sin(l)
    var sf = Math.sin(f)

    var s, c, w, r, d, h1, h2
    var a = EARTH_RADIUS
    var fl = 1 / 298.257

    sg = sg * sg
    sl = sl * sl
    sf = sf * sf

    s = sg * (1 - sl) + (1 - sf) * sl
    c = (1 - sg) * (1 - sl) + sf * sl

    w = Math.atan(Math.sqrt(s / c))
    r = Math.sqrt(s * c) / w
    d = 2 * w * a
    h1 = (3 * r - 1) / 2 / c
    h2 = (3 * r + 1) / 2 / s

    return d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg))
  }
  /**
   * @name: 计算距离
   * @return: null
   */
  getSpaceDistance (positions) {
    let Cesium = this.Cesium
    var distance = 0
    for (var i = 0; i < positions.length - 1; i++) {
      var point1cartographic = Cesium.Cartographic.fromCartesian(positions[i])
      var point2cartographic = Cesium.Cartographic.fromCartesian(positions[i + 1])
      /** 根据经纬度计算出距离**/
      var geodesic = new Cesium.EllipsoidGeodesic()
      geodesic.setEndPoints(point1cartographic, point2cartographic)
      var s = geodesic.surfaceDistance
      // console.log(Math.sqrt(Math.pow(distance, 2) + Math.pow(endheight, 2)));
      // 返回两点之间的距离
      s = Math.sqrt(Math.pow(s, 2) + Math.pow(point2cartographic.height - point1cartographic.height, 2))
      distance = distance + s
    }
    return distance.toFixed(2)
  }
  /**
   * @name: 两点之间距离
   * @return: null
   */
  getSpaceDistanceByLon (positions, km) {
    let Cesium = this.Cesium
    var distance = 0
    let _positions = []
    positions.forEach((d) => {
      _positions.push(Cesium.Cartesian3.fromDegrees(d.lon, d.lat, 1))
    })
    for (var i = 0; i < _positions.length - 1; i++) {
      var point1cartographic = Cesium.Cartographic.fromCartesian(_positions[i])
      var point2cartographic = Cesium.Cartographic.fromCartesian(_positions[i + 1])
      /** 根据经纬度计算出距离**/
      var geodesic = new Cesium.EllipsoidGeodesic()
      geodesic.setEndPoints(point1cartographic, point2cartographic)
      var s = geodesic.surfaceDistance
      // console.log(Math.sqrt(Math.pow(distance, 2) + Math.pow(endheight, 2)));
      // 返回两点之间的距离
      s = Math.sqrt(Math.pow(s, 2) + Math.pow(point2cartographic.height - point1cartographic.height, 2))
      distance = distance + s
    }
    if (distance.toFixed(2) < km * 1000) {
      return true
    } else {
      return false
    }
  }
  /**
   * @name: 笛卡尔转84坐标系
   * @return: null
   */
  transWgs84 (position) {
    let Cesium = this.Cesium
    let cartographic = Cesium.Cartographic.fromCartesian(position)
    let longitude = Cesium.Math.toDegrees(cartographic.longitude)
    let latitude = Cesium.Math.toDegrees(cartographic.latitude)
    return {
      longitude, latitude
    }
  }
}

export default CesiumUtils
