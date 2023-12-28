/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2019-12-13 15:36:24
 * @LastEditors: wanglong
 * @LastEditTime: 2020-05-13 19:18:38
 */
import * as d3 from 'd3-geo'
import wall from '@/assets/common/wall.png'
import { MeshLine, MeshLineMaterial } from 'three.meshline'
import * as THREE from 'three'
const $ = window.jQuery
class Utils {
  constructor () {
    this.projection = null
  }
  lnglatToXYZ (lnglat) { // 经纬度转换成墨卡托投影
    if (!this.projection) {
      this.projection = d3.geoMercator()
        .center([103.565248, 29.083759])
        .scale(510)
        .translate([0, 0])
    }
    let [y, x] = this.projection(lnglat)
    return [x * 10, y * 10, 0]
  }
  transToPiexl () { // 转像素坐标

  }
  drawLine (points, lineColor = '#FFF', visible = true) { // points[[x,y],[x,y]] 地图区域轮廓
    const material = new MeshLineMaterial({
      lineWidth: 0.4,
      opacity: 0.8,
      transparent: true,
      near: false,
      far: false,
      depthWrite: false,
      color: 0x70c8f5
    })
    const geometry = new THREE.Geometry()
    points.forEach(d => {
      const [x, y, z] = d
      geometry.vertices.push(new THREE.Vector3(x, y, z + 8.1))
    })
    let line = new MeshLine()
    line.setGeometry(geometry)
    let meshLine = new THREE.Mesh(line.geometry, material)
    meshLine.visible = visible
    return meshLine
  }
  drawLine0 (points, lineColor = '#FFF', show) {
    const geometry = new THREE.Geometry()
    points.forEach(d => {
      const [x, y, z] = d
      geometry.vertices.push(new THREE.Vector3(x, y, z + 8.1))
    })
    let line = new MeshLine()
    line.setGeometry(geometry)
    let textureSlide = new THREE.CanvasTexture(createCanvasTexture())
    function createCanvasTexture (color) {
      let canvas = document.createElement('canvas')
      canvas.width = 16
      canvas.height = 16
      let context = canvas.getContext('2d')
      var gradient = context.createLinearGradient(canvas.width / 2, canvas.height, canvas.width / 2, 0)
      gradient.addColorStop(0, 'rgba(253,170,111,0)')
      gradient.addColorStop(0.22, 'rgba(253,170,111,1)')
      gradient.addColorStop(0.25, 'rgba(253,170,111,1)')
      gradient.addColorStop(1, 'rgba(0,90,209,0)')
      context.fillStyle = gradient
      context.fillRect(0, 0, canvas.width, canvas.height)
      return canvas
    }
    const material = new MeshLineMaterial({
      map: textureSlide,
      useMap: true,
      lineWidth: 2,
      opacity: 0.8,
      transparent: true,
      near: true,
      far: true,
      depthWrite: false
    })
    let meshLine = new THREE.Mesh(line.geometry, material)
    meshLine.visible = show
    meshLine.position.z = 1
    return meshLine
  }
  drawModel (points, color = '#005fc3') { // points[[x,y],[x,y]] 地图区域形状
    const shape = new THREE.Shape()
    points.forEach((d, i) => {
      const [x, y] = d
      if (i === 0) {
        shape.moveTo(x, y)
      } else if (i === points.length - 1) {
        shape.quadraticCurveTo(x, y, x, y)
      } else {
        shape.lineTo(x, y)
      }
    })
    const geometry = new THREE.ExtrudeGeometry(shape, {
      amount: 8,
      bevelEnabled: false
    })
    let texture = new THREE.TextureLoader().load(wall)
    texture.wrapS = THREE.MirroredRepeatWrapping
    texture.wrapT = THREE.MirroredRepeatWrapping

    texture.repeat.set(0.05, 0.1)

    const material = new THREE.MeshBasicMaterial({
      color: 0x0d3e94,
      transparent: true,
      opacity: 0.2,
      side: THREE.DoubleSide
    })
    const material02 = new THREE.MeshBasicMaterial({
      map: texture,
      useMap: true,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide
    })
    let materials = [material, material02]
    const mesh = new THREE.Mesh(geometry, materials)
    return mesh
  }
}
// 时间格式化
const formatterTime = (t) => {
  if (!t) {
    return ''
  }
  let time = new Date(t)
  let y = time.getFullYear()
  let m = time.getMonth() + 1
  let d = time.getDate()
  let h = time.getHours()
  let mm = time.getMinutes()
  return y + '-' + m + '-' + d + ' ' + h + ':' + mm
}
// 区域随机撒点
const randomPostion = {
  '马边彝族自治县': {
    creatHeatMap (data) {
      // 103.51746765777486 103.5699005994937 28.817002618671825 28.850811454327626
      for (var i = 0; i < data.length; i++) {
        let a = Math.random() > 0.5 ? 1 : -1
        data[i].lon = 103.54311498712178 + Math.random() * 0.02 * a
        data[i].lat = 28.833040918276197 + Math.random() * 0.02 * a
      }
      return data
    }
  },
  '沐川县': {
    creatHeatMap (data) {
      // 103.92551934194992  103.85311213044696 28.99183492241175  28.936126180455876
      for (var i = 0; i < data.length; i++) {
        data[i].lon = 103.89876614343211 + Math.random() * 0.03
        data[i].lat = 28.958022842306043 + Math.random() * 0.025
      }
      return data
    }
  },
  '犍为县': {
    creatHeatMap (data) {
      // 104.01157156315884  103.86933230771194 29.2402241211295 29.173441370300427
      for (var i = 0; i < data.length; i++) {
        data[i].lon = 103.94585301197444 + Math.random() * 0.05
        data[i].lat = 29.208914762643893 + Math.random() * 0.03
      }
      return data
    }
  },
  '五通桥区': {
    creatHeatMap (data) {
      // 103.85409242251059 103.74912543539465 29.35886266490242 29.43822352864062
      for (var i = 0; i < data.length; i++) {
        data[i].lon = 103.81192785311998 + Math.random() * 0.06
        data[i].lat = 29.402034718694704 + Math.random() * 0.04
      }
      return data
    }
  },
  '井研县': {
    creatHeatMap (data) {
      // 104.07186101791244 103.91804267146698 29.8484421404079 29.770492267867215
      for (var i = 0; i < data.length; i++) {
        data[i].lon = 104.06470009803368 + Math.random() * 0.05
        data[i].lat = 29.651275290720456 + Math.random() * 0.03
      }
      return data
    }
  },
  '夹江县': {
    creatHeatMap (data) {
      // 103.63604053321328 103.50952542684443 29.784591192767845 29.68980579831498
      for (var i = 0; i < data.length; i++) {
        data[i].lon = 103.57700340283559 + Math.random() * 0.05
        data[i].lat = 29.73796050856254 + Math.random() * 0.04
      }
      return data
    }
  },
  '峨眉山市': {
    creatHeatMap (data) {
      // 103.51122647091077  103.38325218140902 29.667836042997976 29.511616745998502
      for (var i = 0; i < data.length; i++) {
        data[i].lon = 103.48583979694317 + Math.random() * 0.06
        data[i].lat = 29.59766318360724 + Math.random() * 0.07
      }
      return data
    }
  },
  '沙湾区': {
    creatHeatMap (data) {
      // 103.64462563024182  103.47223500631381 29.485187082495752 29.320148636013386
      for (var i = 0; i < data.length; i++) {
        data[i].lon = 103.54379548173611 + Math.random() * 0.06
        data[i].lat = 29.41750349528361 + Math.random() * 0.057
      }
      return data
    }
  },
  '金口河区': {
    creatHeatMap (data) {
      // 103.11177138413909   103.03847178134903 29.199753968280206 29.26943667661074
      for (var i = 0; i < data.length; i++) {
        data[i].lon = 103.07574121722807 + Math.random() * 0.04
        data[i].lat = 29.247692316086244 + Math.random() * 0.035
      }
      return data
    }
  },
  '峨边彝族自治县': {
    creatHeatMap (data) {
      for (var i = 0; i < data.length; i++) {
        data[i].lon = 103.26072347256653 + Math.random() * 0.03
        data[i].lat = 29.23182093854989 + Math.random() * 0.03
      }
      return data
    }
  },
  '市中区': {
    // 103.6599703710986  103.83315463872923 29.52197464932133 29.646617715411022
    creatHeatMap (data) {
      for (var i = 0; i < data.length; i++) {
        data[i].lon = 103.74095160091426 + Math.random() * 0.07
        data[i].lat = 29.60652681171411 + Math.random() * 0.05
      }
      return data
    }
  }
}
// 移动div
const moveDiv = (id) => {
  $('#' + id).mousedown(function (e) {
    // e.pageX
    let positionDiv = $(this).offset()
    let distenceX = e.pageX - positionDiv.left
    let distenceY = e.pageY - positionDiv.top
    $(document).mousemove(function (e) {
      let x = e.pageX - distenceX
      let y = e.pageY - distenceY

      if (x < 0) {
        x = 0
      } else if (x > $(document).width() - $('#' + id).outerWidth(true)) {
        x = $(document).width() - $('#' + id).outerWidth(true)
      }

      if (y < 0) {
        y = 0
      } else if (y > $(document).height() - $('#' + id).outerHeight(true)) {
        y = $(document).height() - $('#' + id).outerHeight(true)
      }
      $('#' + id).css({
        'left': x + 'px',
        'top': y + 'px'
      })
    })
    $(document).mouseup(function () {
      $(document).off('mousemove')
    })
  })
}
// 打开第三方面
const openThirdPage = (url) => {
  let left = (window.screen.availWidth - 3200) / 2
  let top = (window.screen.availHeight - 1600) / 2
  let name = Math.random() * 100 + 'name'
  // var iTop = (window.screen.availHeight - 30 - height) / 2
  // var iLeft = (window.screen.availWidth - 10 - width) / 2
  let strWindowFeatures = `width = 3200, height = 1600, menubar = yes, location = yes, resizable = yes, scrollbars = true, status = true, left = ${left}, top = ${top}`
  window.open(url, name, strWindowFeatures)
  // console.log(iLeft, iTop, strWindowFeatures)
  console.log(left, top)
}
export default new Utils()
export {
  formatterTime,
  randomPostion,
  moveDiv,
  openThirdPage
}
