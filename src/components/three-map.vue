<!--
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-05 10:23:11
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-03-13 09:42:27
 -->
 <template>
  <div></div>
 </template>
<script>
import mapData from '@/assets/common/ls.json'
import Utils from '@/utils/utils.js'
import * as THREE from 'three'
export default {
  data () {
    return {
      mapData: mapData,
      id: '',
      scene: null, // 场景
      camera: null, // 相机
      renderer: null, // 渲染器
      mouse: null, // 鼠标
      mapWindowList: [],
      activeData: [] // 默认选中区域
    }
  },
  methods: {
    transform (arr) {
      let proxyz = Utils.lnglatToXYZ(arr)
      let worldVector = new THREE.Vector3(proxyz[0], proxyz[1], proxyz[2])
      let vector = worldVector.project(this.camera)

      let canvas = document.getElementById(this.id)
      const rect = canvas.getBoundingClientRect()
      let x = Math.round(((vector.x + 1) / 2) * canvas.clientWidth + rect.left) / window.$rem
      let y = Math.round(-(vector.y - 0.9) / 2 * canvas.clientHeight + rect.top) / window.$rem
      return [x, y]
    },
    conversion () {
      this.mapData.features.forEach((d, j) => { // 遍历每个area
        d.vector3 = []// 给每个area增加笛卡尔参数
        d.geometry.coordinates[0].forEach((_d, i) => { // 每个面
          if (_d[0] instanceof Array) { // 数组包含数组--面里面包含面
            d.center = Utils.lnglatToXYZ(d.properties.center)
            d.vector3[i] = []
            _d.forEach(c => {
              let xyz = Utils.lnglatToXYZ(c)
              d.vector3[i].push(xyz)
            })
          } else { // 单个面的每个点经纬度
            d.center = Utils.lnglatToXYZ(this.center(_d))
            let xyz = Utils.lnglatToXYZ(_d)
            d.vector3.push(xyz)
          }
        })
      })
    },
    initTHREE (id, activeData, noEvent) {
      // this.conversion()
      this.id = id
      this.activeData = activeData
      let w = document.getElementById(this.id).clientWidth
      let h = document.getElementById(this.id).clientHeight
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(75, w / h, 1, 1000)
      // 设置相机
      this.camera.position.x = 80
      this.camera.position.y = -40
      this.camera.position.z = 60
      this.camera.up.x = 0
      this.camera.up.y = 0
      this.camera.up.z = 1
      this.camera.lookAt(0, 0, 0)
      // 消除事件
      if (!noEvent) {
        this.mouseEvent()
      }
      this.drawMap()
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      this.renderer.setSize(w, h)
      document.getElementById(this.id).appendChild(this.renderer.domElement)
      this.animateThree()

      this.mapWindowList.map((item) => {
        let worldVector = new THREE.Vector3(item.center[0], item.center[1], item.center[2])
        let vector = worldVector.project(this.camera)

        let canvas = document.getElementById(this.id)
        const rect = canvas.getBoundingClientRect()

        item.left = Math.round(((vector.x + 1) / 2) * canvas.clientWidth + rect.left) / window.$rem
        item.top = Math.round(-(vector.y - 0.9) / 2 * canvas.clientHeight + rect.top) / window.$rem
        return item
      })
      return this.mapWindowList
    },
    drawMap () { // 绘制地图模块--（区域、边线）
      if (!this.mapData) {
        console.error('this.mapData 数据不能是null')
        return false
      }
      // 把经纬度转换成x,y,z 坐标
      // this.mapData.features.forEach(d => {
      //   d.vector3 = []
      //   d.geometry.coordinates.forEach((coordinates, i) => {
      //     d.vector3[i] = []
      //     coordinates.forEach((c, j) => {
      //       if (c[0] instanceof Array) {
      //         d.vector3[i][j] = []
      //         c.forEach(cinner => {
      //           let cp = Utils.lnglatToXYZ(cinner)
      //           d.vector3[i][j].push(cp)
      //         })
      //       } else {
      //         let cp = Utils.lnglatToXYZ(c)
      //         d.vector3[i].push(cp)
      //       }
      //     })
      //   })
      // })
      // 绘制地图模型
      const group = new THREE.Group()
      const lineGroup = new THREE.Group()
      this.mapData.features.forEach(d => {
        const g = new THREE.Group() // 用于存放每个地图模块。||省份
        g.data = d
        let name = d.properties.name
        // 构建信息窗口页面坐标
        let center = d.center
        this.mapWindowList.push({
          name,
          center
        })
        // 默认选中效果
        let active = false
        if (this.activeData && this.activeData.indexOf(d.properties.name) !== -1) {
          active = true
        }
        d.vector3.forEach((points, i) => {
        // 多个面
          if (points[0][0] instanceof Array) {
            points.forEach((p, _i) => {
              const mesh = Utils.drawModel(p)
              const lineMesh = Utils.drawLine(p)
              const _line = Utils.drawLine0(p, '#FF9A2F', active)
              _line.name = name
              _line.center = center
              mesh.center = center
              mesh.name = name
              lineGroup.add(_line)
              this.scene.add(lineMesh)
              g.add(mesh)
            })
          } else {
            if (i === 0) {
              // 单个面
              const mesh = Utils.drawModel(points)
              const lineMesh = Utils.drawLine(points)
              const _line = Utils.drawLine(points, '#FF9A2F', false)
              _line.name = name
              _line.center = center
              mesh.center = center
              mesh.name = name
              lineGroup.add(_line)
              this.scene.add(lineMesh)
              g.add(mesh)
            }
          }
        })
        group.add(g)
      })
      this.group = group // 丢到全局去
      this.lineGroup = lineGroup

      this.scene.add(lineGroup)
      this.scene.add(group)
    },
    mouseEvent () {
      this.mouse = new THREE.Vector2()
      this.raycaster = new THREE.Raycaster()
      document.getElementById(this.id).addEventListener('mousemove', this.onMouseMove, false)
    },
    animateThree () {
      this.renderer.render(this.scene, this.camera)
      requestAnimationFrame(this.animateThree)
    },
    onMouseMove (event) {
      this.meshes = []
      this._meshes = []
      this.group.children.forEach(g => {
        g.children.forEach(mesh => {
          this.meshes.push(mesh)
        })
      })
      this.lineGroup.children.forEach(g => {
        this._meshes.push(g)
      })
      let canvas = document.getElementById(this.id)
      const rect = canvas.getBoundingClientRect()
      // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
      this.mouse.x = ((event.clientX - rect.left) / canvas.clientWidth) * 2 - 1
      this.mouse.y = -((event.clientY - rect.top) / canvas.clientHeight) * 2 + 1
      // 计算物体和射线的焦点
      this.raycaster.setFromCamera(this.mouse, this.camera)
      const intersects = this.raycaster.intersectObjects(this.meshes)
      if (intersects.length > 0) {
        let mesh = intersects[0].object
        this._meshes.forEach(d => {
          if (mesh.name === d.name) {
            this.$emit('move', d.name)
            d.visible = true
          } else {
            d.visible = false
          }
        })
      } else {
        this._meshes.forEach(d => {
          d.visible = false
        })
        this.$emit('clear')
      }
    }
  }
}
</script>
