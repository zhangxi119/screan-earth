<!--
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-02-11 13:48:10
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-10 03:30:20
 -->
<template>
   <div class="emergency-container">
     <!-- 左上 -->
    <div class="left-top-panle">
      <div class="left-title">安全生产等级划分</div>
      <div class="left-scroll-number clear">
         <div class="left-scroll-title">区域内监管企业</div>
         <div class="left-number-box"></div>
       </div>
       <div class="left-company-box clear">
        <div class="company-cell" v-for="(item,index) in leftcompanydata" :key="index">
           <div><img :src="item.icon"/><span>{{item.name}}</span></div>
           <div class="number">{{item.number}}<span>家</span></div>
        </div>
       </div>
       <div class="left-title-03">重大危险源分级统计</div>
       <div class="left-ball">
          <div id="point-box"></div>
          <div class="ball ball-01">
            <div class="ball-name">&nbsp;一级<br/>危险源</div>
            <div class="ball-number" >3<span>种</span></div>
          </div>
          <div class="ball ball-02">
            <div class="ball-name">&nbsp;二级<br/>危险源</div>
            <div class="ball-number" >2<span>种</span></div>
          </div>
          <div class="ball ball-03">
            <div class="ball-name">&nbsp;三级<br/>危险源</div>
            <div class="ball-number" >5<span>种</span></div>
          </div>
          <div class="ball ball-04">
            <div class="ball-name">&nbsp;四级<br/>危险源</div>
            <div class="ball-number" >4<span>种</span></div>
          </div>
          <div class="waring"></div>
        </div>
        <div class="left-title-05">重大危险源分类统计</div>
        <div class="left-box-05">
          <div v-for="(item,index) in leftUpData" :key="index" class="left-right-b-cell">
            <div class="left-up">
              <div :style="{'height':item.height}"></div>
              <div class="left-up-img">
                <span>{{item.n}}</span>
                <span></span>
                <img src=@/assets/emergency/up.png/>
                <div></div>
              </div>
              <div class="left-line"><div class="left-inner-line"></div></div>
            </div>
            <img class="bottom-img" src="@/assets/emergency/10.png"/>
            <img class="bottom-img" src="@/assets/emergency/11.png"/>
            <img class="bottom-img" src="@/assets/emergency/13.png"/>
            <img src="@/assets/emergency/16.png" class="bottom-scacle"/>
            <div class="left-up-name">{{item.name}}</div>
          </div>
        </div>
    </div>
    <!-- 左下 -->
    <div class="left-bottom-panle">
      <div class="common-title left-title-07">隐患排查治理统计</div>
      <div id="left-chart-07"></div>
      <div class="left-bg-07"></div>
      <div class="left-07-text">
        <div class="item">已销案</div>
        <div class="item">等待审核</div>
        <div class="item">暂存</div>
        <div class="item">申请销案</div>
        <div class="item">审核</div>
      </div>
      <div class="common-title left-title-10">安全隐患区域分布统计</div>
      <div class="canvas" id="threemap-box"></div>
      <div class="g-canvas-panle">
          <div class="g-panle-box-o">
            <div  :style="tansAnimate" class="g-panle-box">
              <ul class="g-panle-ul" v-for="(item,index) in arr" :key="index" >
                <li @click="showZone(name)"  v-for="(name) in item" :key="name">
                    <p class="cancas-name">{{name}}</p>
                    <div class="cancas-numer">
                      <p class="cancas-number-len"></p>
                    </div>
                </li>
              </ul>
           </div>
          </div>
          <div class="cancas-control">
              <img id="banenerUp"  @click="bannerUp" src="@/assets/emergency/up-01.png" alt="">
              <div id="banner-dot">
                <div :class="{'selected-dot':_index===index+1}" class="dot" v-for="(_index) in arr.length" :key="_index"></div>
              </div>
              <img id="bannerDown"  @click="bannerDown" src="@/assets/emergency/down-01.png" alt="">
          </div>
        </div>
        <div class="common-title left-title-08">隐患数据按监管行业统计</div>
        <div class="pie-item pie-item-01">
          <div class="pie-charts" id="pie-01"></div>
          <div class="pie-text">危险化学品</div>
        </div>
        <div class="pie-item pie-item-02">
          <div class="pie-charts" id="pie-02"></div>
          <div class="pie-text">烟花爆竹</div>
        </div>
        <div class="pie-item pie-item-03">
          <div class="pie-charts" id="pie-03"></div>
          <div class="pie-text">非煤矿山</div>
        </div>
        <div class="pie-item pie-item-04">
          <div class="pie-charts" id="pie-04"></div>
          <div class="pie-text">工商贸</div>
        </div>
    </div>
    <!-- 右上 -->
    <div class="right-top-panle">
      <div class="common-title right-title-01">安全生产事故年度态度分析</div>
      <div id="right-chart-01"></div>
      <div class="common-title right-title-02">安全生产事故月度态度分析</div>
      <div id="right-chart-02"></div>
    </div>
    <!-- 右下 -->
    <div class="right-bottom-panle ">
      <div class="common-title right-title-03">图层专题</div>
      <div class="right-bottom-01 clear">
        <div class="right-outer clear">
        <div class="item-title">应急资源</div>
        <div class="item-inner clear">
          <div class="item" v-for="(item,index) in rightBottomList1" :key="index">危险源</div>
        </div>
        </div>
        <div class="right-outer clear">
        <div class="item-title">服务单位</div>
        <div class="item-inner clear">
          <div class="item" v-for="(item,index) in rightBottomList2" :key="index">交通服务</div>
        </div>
        </div>
        <div class="right-outer clear">
        <div class="item-title">重点机构</div>
        <div class="item-inner clear">
          <div class="item" v-for="(item,index) in rightBottomList1" :key="index">医疗机构</div>
        </div>
        </div>
        <div class="right-outer">
        <div class="item-title">重点地名</div>
        <div class="item-inner">
          <div class="item" v-for="(item,index) in rightBottomList2" :key="index">交通资源</div>
        </div>
        </div>
      </div>
      <div class="common-title right-title-04">视频监控</div>
      <div class="right-bottom-02 clear">
          <div class="item" v-for="(item,index) in videoList" :key="index">
            <div class="item-top">
              <img :src="item.imgUrl" alt="">
              <div class="item-text"><button v-if="item.backBtn !== ''">{{item.backBtn}}</button>
              <span>{{item.time}}</span></div>
            </div>
            <div class="item-bottom">{{item.text}}</div>
          </div>
      </div>
    </div>
    <div class="left-plane-right zindex-level">
      <p class="left-plane-right-name">当日事件量</p>
      <p class="left-plane-right-number">106</p>
      <p class="left-plane-right-name">社会安全</p>
      <p class="left-plane-right-number">106</p>
      <p class="left-plane-right-name">自然灾害</p>
      <p class="left-plane-right-number">106</p>
      <p class="left-plane-right-name">自然灾害</p>
      <p class="left-plane-right-number">106</p>
      <p class="left-plane-right-name">自然灾害</p>
      <p class="left-plane-right-number">106</p>
    </div>
   </div>
</template>
<script>
import UpPoint from '@/utils/upPoint.js'
import level01 from '@/assets/emergency/01.png'
import level02 from '@/assets/emergency/02.png'
import level03 from '@/assets/emergency/03.png'
import level04 from '@/assets/emergency/04.png'
import sp01 from '@/assets/emergency/sp1.jpg'
import sp02 from '@/assets/emergency/sp2.jpg'
import echarts from 'echarts'
import echartsOptions04 from '@/assets/emergency/echartsData/left04.js'
import left05 from '@/assets/emergency/echartsData/left05.js'
import left06 from '@/assets/emergency/echartsData/left06.js'
import mapData from '@/assets/emergency/mapjson/ls.json'
import * as THREE from 'three'
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Utils from '@/assets/emergency/utils/utils.js'
export default {
  mounted () {
    window.jQuery('.left-number-box').rollNum({
      deVal: '101010'
    })// 数字滚动
    this.initEcharts()
    this.conversion()// 转化地图数据
    this.initTHREE()
    this.initPoint()
  },
  data () {
    return {
      point: null,
      mapData: mapData,
      scene: null, // 场景
      camera: null, // 相机
      renderer: null, // 渲染器
      labelRenderer: null,
      controls01: null, // 控制器
      controls02: null, // 控制器
      mouse: null, // 鼠标

      index: 0,
      d: 0,
      arr: [],
      leftcompanydata: [
        {
          name: '一级危险企业',
          number: 0,
          icon: level01
        }, {
          name: '二级危险企业',
          number: 0,
          icon: level02
        }, {
          name: '三级危险企业',
          number: 0,
          icon: level03
        }, {
          name: '四级危险企业',
          number: 0,
          icon: level04
        }],
      leftUpData: [
        {
          name: '危险源',
          n: 429,
          height: 0
        },
        {
          name: '危险源',
          n: 298,
          height: '10px'
        },
        {
          name: '危险源',
          n: 447,
          height: 0
        }, {
          name: '危险源',
          n: 279,
          height: '20px'
        },
        {
          name: '危险源',
          n: 356,
          height: 0
        }
      ],
      rightBottomList1: [
        {
          name: '查看监控'
        },
        {
          name: '防护目标'
        },
        {
          name: '公安队伍'
        },
        {
          name: '应急队伍'
        },
        {
          name: '危险源'
        },
        {
          name: '公共服务'
        }
      ],
      rightBottomList2: [
        {
          name: '医疗机构'
        },
        {
          name: '教育部门'
        },
        {
          name: '金融机构'
        },
        {
          name: '公司企业'
        },
        {
          name: '机关团体'
        }
      ],
      videoList: [
        {
          imgUrl: sp01,
          backBtn: '回放',
          time: '2019-06-28 13:20',
          text: '友谊路2号路口'
        },
        {
          imgUrl: sp01,
          backBtn: '',
          time: '2019-06-28 13:20',
          text: '友谊路2号路口'
        },
        {
          imgUrl: sp02,
          backBtn: '',
          time: '2019-06-28 13:20',
          text: '友谊路2号路口'
        },
        {
          imgUrl: sp01,
          backBtn: '',
          time: '2019-06-28 13:20',
          text: '友谊路2号路口'
        },
        {
          imgUrl: sp01,
          backBtn: '回放',
          time: '2019-06-28 13:20',
          text: '友谊路2号路口'
        },
        {
          imgUrl: sp01,
          backBtn: '',
          time: '2019-06-28 13:20',
          text: '友谊路2号路口'
        },
        {
          imgUrl: sp02,
          backBtn: '',
          time: '2019-06-28 13:20',
          text: '友谊路2号路口'
        },
        {
          imgUrl: sp01,
          backBtn: '',
          time: '2019-06-28 13:20',
          text: '友谊路2号路口'
        }

      ]
    }
  },
  computed: {
    tansAnimate () {
      return {
        transform: `translate3d(0, ${this.d}px, 0)`,
        transition: 'all 0.6s linear'
      }
    }
  },
  methods: {
    initPoint () { // 粒子动画
      let w = document.getElementById('point-box').clientWidth
      let h = document.getElementById('point-box').clientHeight
      this.point = new UpPoint('star', w, h, 10, 3, 30)
      let color = '#10C0FF'
      let canvas = this.point.init(color)
      document.getElementById('point-box').appendChild(canvas)
      this.renderCanvas()
    },
    renderCanvas () {
      this.point.clear()
      this.point.draw(true)
      window.requestAnimationFrame(this.renderCanvas)
    },
    initTHREE () {
      let w = document.getElementById('threemap-box').clientWidth
      let h = document.getElementById('threemap-box').clientHeight
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

      this.mouseEvent()

      this.drawMap()
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      this.renderer.setSize(w, h)
      document.getElementById('threemap-box').appendChild(this.renderer.domElement)

      this.labelRenderer = new CSS2DRenderer()
      this.labelRenderer.setSize(w, h)
      this.labelRenderer.domElement.style.position = 'absolute'
      this.labelRenderer.domElement.style.top = 0
      document.getElementById('threemap-box').appendChild(this.labelRenderer.domElement)

      this.controls01 = new OrbitControls(this.camera, this.labelRenderer.domElement)
      this.controls02 = new OrbitControls(this.camera, this.renderer.domElement)
      this.animate()
    },
    fourArr (list01, list02) {
      if (list02.length > 4) {
        list01.push(list02.slice(0, 4))
        let _list02 = list02.slice(4)
        return this.fourArr(list01, _list02)
      } else {
        list01.push(list02)
        return list01
      }
    },
    conversion () { // 转化地图数据
      let lsNames = []
      this.mapData.features.forEach((d, j) => { // 遍历每个area
        lsNames.push(d.properties.name)
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
      this.arr = this.fourArr([], lsNames)
    },
    drawMap () { // 绘制地图模块--（区域、边线）
      if (!this.mapData) {
        console.error('this.mapData 数据不能是null')
        return false
      }
      // 把经纬度转换成x,y,z 坐标
      this.mapData.features.forEach(d => {
        d.vector3 = []
        d.geometry.coordinates.forEach((coordinates, i) => {
          d.vector3[i] = []
          coordinates.forEach((c, j) => {
            if (c[0] instanceof Array) {
              d.vector3[i][j] = []
              c.forEach(cinner => {
                let cp = Utils.lnglatToXYZ(cinner)
                d.vector3[i][j].push(cp)
              })
            } else {
              let cp = Utils.lnglatToXYZ(c)
              // 计算中心坐标
              d.vector3[i].push(cp)
            }
          })
        })
      })
      // 绘制地图模型
      const group = new THREE.Group()
      const lineGroup = new THREE.Group()
      this.mapData.features.forEach(d => {
        const g = new THREE.Group() // 用于存放每个地图模块。||省份
        g.data = d
        let name = d.properties.name
        let center = d.center
        const __line = Utils.drawLine2(center, name)
        __line.name = name
        lineGroup.add(__line)

        d.vector3.forEach((points, i) => {
        // 多个面
          if (points[0][0] instanceof Array) {
            points.forEach((p, _i) => {
              const mesh = Utils.drawModel(p)
              mesh.name = name
              const lineMesh = Utils.drawLine(p)
              const _line = Utils.drawLine0(p, '#FF9A2F', false)
              _line.name = name
              _line.center = center
              lineGroup.add(_line)
              this.scene.add(lineMesh)
              g.add(mesh)
            })
          } else {
            if (i === 0) {
              // 单个面
              const mesh = Utils.drawModel(points)
              mesh.name = name
              const lineMesh = Utils.drawLine(points)
              const _line = Utils.drawLine(points, '#FF9A2F', false)
              _line.name = name
              _line.center = center
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
      document.getElementById('threemap-box').addEventListener('mousemove', this.onMouseMove, false)
    },
    showZone (name) {
      this._meshes = []
      this.lineGroup.children.forEach(g => {
        this._meshes.push(g)
      })
      this._meshes.forEach(d => {
        if (name === d.name) {
          d.visible = true
          if (d.type === 'Line') {
            d.position.z = 0.8
          }
        } else {
          d.visible = false
        }
      })
      setTimeout(() => {
        this._meshes.forEach(d => {
          d.visible = false
        })
      }, 5000)
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
      let canvas = document.getElementById('threemap-box')
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
            d.visible = true
            if (d.type === 'Line') {
              d.position.z = 0.8
            }
          } else {
            d.visible = false
          }
        })
      } else {
        this._meshes.forEach(d => {
          d.visible = false
        })
      }
    },
    animate () {
      this.renderer.render(this.scene, this.camera)

      this.labelRenderer.render(this.scene, this.camera)

      requestAnimationFrame(this.animate)
    },
    initEcharts () {
      let charts07 = echarts.init(document.getElementById('left-chart-07'))
      charts07.setOption(echartsOptions04)
      let chartsPie01 = echarts.init(document.getElementById('pie-01'))
      chartsPie01.setOption(left05.options1)

      let chartsPie02 = echarts.init(document.getElementById('pie-02'))
      chartsPie02.setOption(left05.options2)
      let chartsPie03 = echarts.init(document.getElementById('pie-03'))
      chartsPie03.setOption(left05.options3)
      let chartsPie04 = echarts.init(document.getElementById('pie-04'))
      chartsPie04.setOption(left05.options4)
      let chartsline01 = echarts.init(document.getElementById('right-chart-01'))
      chartsline01.setOption(left06)
      let chartsline02 = echarts.init(document.getElementById('right-chart-02'))
      chartsline02.setOption(left06)
    },
    bannerUp () {
      let $ = window.jQuery
      let l = $('.g-panle-ul').height()
      if (this.index > 0) {
        this.index--
        this.d = -this.index * l
      }
    },
    bannerDown () {
      let $ = window.jQuery
      let l = $('.g-panle-ul').height()
      if (this.index < this.arr.length - 1) {
        this.index++
        this.d = -this.index * l
      }
    }
  }
}
</script>

<style  lang="scss" scoped>
.emergency-container {
  position: absolute;

.left-top-panle {
  position: absolute;
  width: 7.53rem;
  height: 5.0rem;
  left: 0.26rem;
  top: 0.8rem;
  background: url('../assets/emergency/kuang.png');
  background-size: cover;
  z-index: 99;
}
.left-title {
  float: left;
  height: 0.4rem;
  font-size: 0.18rem;
  color: #C9E0F3;
  text-shadow: 0 0 10px #C9E0F3;
  background: url('../assets/emergency/title-bg.png') no-repeat;
  background-position-y: 12px;
  padding-left: 10px;
  margin-left: 0.3rem;
  margin-top: 0.5rem;
  box-sizing: border-box;
}
.left-scroll-number {
  position: absolute;
  left: 0.27rem;
  top: 1.02rem;
}
.left-scroll-title {
  float: left;
  font-size: 0.12rem;
  color: #222222;
  background: #BAFBFF;
  margin-left: 0.17rem;
  letter-spacing: 1px;
  padding: 0px 5px;
  transform: skewX(-10deg);
}
.left-number-box {
  width: 2.20rem;
  margin-top: 0.28rem;
  margin-left: 0.1rem;
}
.dataNums {
  position: absolute;
  display: block;
  height:160px;
  text-align:center;
  left: 0.1rem;
}
.dataNums .dataOne{
  width:0.3rem;
  height:0.4rem;
  margin: 0px 0.03rem;
  text-align: center;
  background: url('../assets/emergency/number-bg.png');
  font-family: "Arial";
  border-radius: 0.05rem;
  float: left;
  list-style: none;
}
.dataNums .dataBoc {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.dataNums .dataBoc .tt {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dataNums .tt span{
  width:100%;
  height:100%;
  color:#FFFFFF;
  text-shadow: 0 0 0.10rem #B8DCF9;
  font-size: 0.25rem;
  line-height: 0.4rem;
  float: left;
}
.dataNum1{
  position: absolute;
  top: 56%;
  width: 20%;
  float: left;
  color:#FFFFFF;
  text-shadow: 0 0 0.10rem #B8DCF9;
  font-size: 0.36rem;
  text-align: center;
  left: 17%;
}
.dataNum2{
  position: absolute;
  top: 56%;
  width: 20%;
  float: left;
  color:#FFFFFF;
  text-shadow: 0 0 0.10rem #B8DCF9;
  font-size: 0.36rem;
  text-align: center;
  left: 40%;
}
.dataNum3{
  position: absolute;
  top: 56%;
  width: 20%;
  float: left;
  padding-left: 5%;
  color:#FFFFFF;
  text-shadow: 0 0 0.10rem #B8DCF9;
  font-size: 0.36rem;
  text-align: center;
  left: 60%;
}
.left-company-box {
  position: absolute;
  right: 0.1rem;
  top: 0.62rem;
  width: 4.40rem;
}
.company-cell {
  float: left;
  width: 1.10rem;
}
.company-cell > div {
  display: flex;
  flex-direction: row;
}
.company-cell span {
  color: #FFFFFF;
  font-size: 0.12rem;
  margin-left: 0.05rem;
}
.company-cell  .number {
  width:0.68rem;
  height: 0.38rem;
  float: left;
  line-height: 0.38rem;
  font-size: 0.17rem;
  color: #FFFFFF;
  font-style: italic;
  margin-top: 0.22rem;
  margin-left: 0.24rem;
  background: url('../assets/emergency/line.png')
}
.company-cell  .number span{
  font-style: 0.14rem;
}
.left-title-03 {
  position: absolute;
  height: 0.40rem;
  font-size: 0.18rem;
  color: #C9E0F3;
  text-shadow: 0 0 0.10rem #C9E0F3;
  background: url('../assets/emergency/title-bg.png') no-repeat;
  background-position-y: 0.12rem;
  padding-left: 0.10rem;
  left: 0.32rem;
  top: 2.40rem;
  box-sizing: border-box;
}
.left-ball {
  position: absolute;
  top: 3.30rem;
  left: 0.50rem;
  width: 2.85rem;
  height: 1.27rem;
  background: url('../assets/emergency/ball.png') no-repeat;
  background-size: 100%;
}
#point-box {
   position: absolute;
   width: 50%;
   left: 40%;
   height: 100%;
}
.ball {
  position: absolute;
  width: 0.77rem;
  height: 0.87rem;
  background: url('../assets/emergency/ball-01.png') no-repeat;
  background-size: 100%;
}
.ball-name {
  font-size: 0.12rem;
  padding-left: 0.22rem;
  box-sizing: border-box;
  color: #AED1ED;
  font-weight: 800;
  margin-top: 0.18rem;
  font-style:italic;
  text-shadow: 0 0 0.20rem #AED1ED;
}
.ball-number {
  text-align: center;
  font-style: italic;
  line-height: 0.18rem;
}
.ball-number span {
  font-size: 12px;
}
.ball-01 .ball-number {
  color: #E87484;
  text-shadow: 0 0 0.20rem #E87484;
}
.ball-02 .ball-number {
  color: #F2B049;
  text-shadow: 0 0 20rem #F2B049;
}
.ball-03 .ball-number {
  color: #AED1ED;
  text-shadow: 0 0 20rem #AED1ED;
}
.ball-04 .ball-number {
  color: #AED1ED;
  text-shadow: 0 0 20rem #AED1ED;
}
.ball-01 {
  left: 1.18rem;
  top: -0.15rem;
}
.ball-02 {
  left: 1.93rem;
  top: -0.15rem;
}
.ball-03 {
  left: 1.57rem;
  top: 0.49rem;
}
.ball-04 {
  left: 2.32rem;
  top: 0.49rem;
}
.waring {
  width: 0.60rem;
  height: 0.68rem;
  position: absolute;
  left: 0.38rem;
  top: 0.44rem;
  background: url('../assets/emergency/trag-02.png');
  background-size: 100%;
  animation: fade 600ms infinite;
}
.left-title-05 {
  position: absolute;
  height: 0.40rem;
  font-size: 0.18rem;
  color: #C9E0F3;
  text-shadow: 0 0 0.10rem #C9E0F3;
  background: url('../assets/emergency/title-bg.png') no-repeat;
  background-position-y: 0.12rem;
  padding-left: 0.10rem;
  left: 4rem;
  top: 2.4rem;
  box-sizing: border-box;
}
.left-box-05 {
  position: absolute;
  right: 0.50rem;
  bottom: 0;
  width: 3rem;
  height: 2.0rem;
  display: flex;
  flex-direction: row;
}
.left-right-b-cell {
  flex: 1;
  height: 1.43rem;
  position: relative;
}
.left-right-b-cell .bottom-img:first-of-type {
  position: absolute;
  bottom: 0.07rem;
  left: 0.27rem;
}
.left-right-b-cell .bottom-img:nth-of-type(2) {
  position: absolute;
  bottom: 0.05rem;
  left: 0.24rem;
}

.left-right-b-cell .bottom-img:nth-of-type(3) {
  position: absolute;
  bottom: 0.02rem;
  left: 0.17rem;
  width: 0.28rem;
  height: 0.34rem;
}
.left-box-05 .bottom-scacle {
  position: absolute;
  bottom: -0.02rem;
  width: 0.46rem;
  height: 0.30rem;
  left: 0.08rem;
  animation: animate2 1500ms infinite;
}
.left-up {
  height: 1.34rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.left-line {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.left-inner-line {
  width: 1px;
  height: 100%;
  background: #30769A;
  flex: 1;
}
.left-up .left-up-img {
  position: relative;
}

.left-up .left-up-img div{
  width: 0.05rem;
  height: 0.05rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: -0.05rem;
  border-radius: 0.05rem;
  border: 1px solid rgb(48, 118, 154);
}
.left-up-img span:first-of-type{
  position: absolute;
  width: 100%;
  top: 0.05rem;
  left: -0.02rem;
  font-size: 0.12rem;
  font-style: italic;
  color: #EDD6AE;
  text-align: center;
  text-shadow: 0 0 0.20rem #EDD6AE;
}
.left-up .left-up-img span:nth-of-type(2) {
  width: 0.08rem;
  height: 0.02rem;
  background: #EDD6AE;
  margin: auto;
  position: absolute;
  top: 0.22rem;
  left: 0.16rem;
}
.left-up img{
  width: 0.41rem;
  height: 0.37rem;
}
.left-up-name {
  position: absolute;
  width: 100%;
  font-style: italic;
  font-size: 0.12rem;
  color: #EDD6AE;
  text-align: center;
  bottom: -18px;
}
@keyframes animate2 {
    from {
      opacity: 1.0;
    }
    50% {
      opacity: 0.6;
    }
    to {
      opacity: 0;
    }
}
@keyframes fade {
    from {
        opacity: 1.0;
    }
    50% {
        opacity: 0.4;
    }
    to {
        opacity: 1.0;
    }
}
.left-bottom-panle {
  position: absolute;
  width: 7.53rem;
  height: 5.0rem;
  bottom: 0.1rem;
  left: 0.26rem;
  background: url('../assets/emergency/kuang.png');
  background-size: cover;
  z-index: 99;
}
.left-title-07 {
    left: 0.30rem;
    top: 0.39rem;
}
.common-title {
    position: absolute;
    height: 0.40rem;
    font-size: 0.18rem;
    color: #C9E0F3;
    text-shadow: 0 0 0.10rem #C9E0F3;
    background: url('../assets/emergency/title-bg.png') no-repeat;
    background-position-y: 0.12rem;
    padding-left: 0.10rem;
    box-sizing: border-box;
}
#left-chart-07 {
  width: 3.20rem;
  height: 2rem;
  position: absolute;
  top: 0.5rem;
  left: 0.40rem;
}
.left-bg-07 {
  position: absolute;
  width: 3rem;
  height: 0.8rem;
  top: 1.5rem;
  left: 0.6rem;
  background: url('../assets/emergency/lbg.png') 100%/cover no-repeat;
}
.left-07-text {
  width: 3.10rem;
  position: absolute;
  left: 0.5rem;
  top: 2.4rem;
  display:flex;
  flex-direction: row;
  justify-content: center;

}
.left-07-text .item {
  font-size:0.12rem;
  flex:1;
  font-family:Source Han Sans CN;
  font-weight:bold;
  color:rgba(126,227,255,1);
  text-align: center;
  margin-left: 0.06rem;
}
.left-title-10 {
  position: absolute;
  left: 4.5rem;
  top: 0.3rem;
}
.canvas {
  position: absolute;
  left: 3.57rem;
  top: 0.1rem;
  width: 4rem;
  height: 3.73rem;
}
.g-canvas-panle {
  width: 3.5rem;
  height: 0.8rem;
  position: absolute;
  left: 3.77rem;
  bottom: 0.3rem;
  overflow: hidden;
}
.g-panle-box {
  width: 100%;
}
.g-panle-box-o {
  height: 0.5rem;
  overflow: hidden;
}
.g-panle-ul {
  width: 100%;
  height: 0.5rem;
  float: left;
}
.g-panle-ul > li {
  width: 50%;
  overflow: hidden;
  float: left;
  padding-right: 0.20rem;
  box-sizing: border-box;
}
.g-panle-ul > li:nth-child(even) {
  margin-right: 0;
}
.cancas-name {
  margin-right: 0.05rem;
  float: left;
  font-size: 0.12rem;
  color: #EDD6AE;
}
.cancas-numer {
  float: right;
  width: 0.60rem;
  height: 0.05rem;
  background: #063263;
  margin-top: 0.06rem;
  border-radius: 0.04rem;
  cursor: pointer;
}
.cancas-number-len {
  width: 20%;
  height: 100%;
  background-image: linear-gradient(to right, #1164de, #58e5f7);
  border-radius: 0.04rem;
}
.cancas-control {
  width: 0.20rem;
  height: 0.60rem;
  position: absolute;
  right: 1.77rem;
  bottom: -0.07rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotateZ(-90deg);
}
.cancas-control img {
  width: 0.1rem;
  height: 0.08rem;
}
.cancas-control > div {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content:center;
}
.cancas-control > div .dot {
  width: 0.04rem;
  height: 0.04rem;
  margin: 0.05rem 0;
  border-radius: 0.02rem;
  background: #85E4FF;
}
.selected-dot {
  background: #EDD6AE!important;
}
.left-title-08 {
  top: 2.90rem;
  left: 0.30rem;
}
.pie-item {
  width: 0.80rem;
  height: 0.90rem;
  position: absolute;
  bottom: 0.50rem;
  left: 0.35rem;
}
.pie-charts {
  width: 0.80rem;
  height: 0.79rem;
  position: absolute;
}

.pie-item-02 {
  left: 1.05rem;
}
.pie-item-03{
  left: 1.75rem;
}
.pie-item-04 {
  left: 2.45rem;
}
.pie-item-05 {
  left: 3.15rem;
}
.pie-item-06 {
  left: 3.5rem;
}
.pie-text {
  width: 100%;
  height: 0.11rem;
  font-size:10px;
  font-family:Source Han Sans CN;
  font-weight:bold;
  color:#fefefe;
  position: absolute;
  text-align: center;
  bottom: 0.07rem;
}
.right-top-panle {
  position: absolute;
  width: 6.52rem;
  height: 5.09rem;
  right: 0.1rem;
  top: 0.8rem;
  background: url('../assets/emergency/right-top-panle.png');
  background-size:100% 100%;
  z-index:99;
}
.right-bottom-panle {
  position: absolute;
  width: 6.21rem;
  height: 4.8rem;
  right: 0;
  bottom: 0.1rem;
  background: url('../assets/emergency/right-bottom-panle.png');
  background-size: 100% 100%;
  z-index:99;
}
.right-title-01 {
  left: 0.3rem;
  top: 0.3rem;
}
.right-title-02 {
  left:0.3rem;
  top: 2.45rem;
}
#right-chart-01,
#right-chart-02 {
  width: 6.20rem;
  height: 2.5rem;
  position: absolute;
  top: 0.18rem;
  left: 0.40rem;
}
 #right-chart-02 {
  top:2.4rem;
}
.box-test {
  position: absolute;
  left: 0;
  z-index: 4;
  width: 2.5rem;
  height: 1rem;
  margin-left: 1.25rem;
  margin-top: -0.5rem;
  box-sizing: border-box;
}
.box-test span {
  position: absolute;
  left: 0.2rem;
  top: 0.63rem;
  font-size: 0.12rem;
  padding: 0.05rem 10px;
  color: #FFF;
  border-bottom: 1px solid #EDD6AE;
}
.box-test-01 {
  width: 1rem;
  height: 1rem;
  box-sizing: border-box;
  float: left;
}
.box-test-01::before{
  content:"";
  position:absolute;
  left:0;
  top:0;
  width:0.2rem;
  height:1rem;
  box-sizing:border-box;
  border-bottom:1px solid #EDD6AE;
  transform-origin:bottom center;
  transform:rotateZ(-45deg) scale(1.414);
}
.box-test-02 {
  float:left;
  width:1rem;
  height:0.5rem;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  box-sizing:border-box;
  transform-origin:bottom center;
  transform:scale(1.414);
}
.right-title-03 {
  left: 0.17rem;
  top: 0.3rem;
}
.right-bottom-01 {
  position:absolute;
  left: 0.30rem;
  top: 0.70rem;
}
.right-outer {
  width: 1.50rem;
  float: left;
  margin-left:-0.03rem;
}
.right-outer:first-child{
  margin-left: 0;
}
.right-outer .item-title {
  width:0.51rem;
  height:0.12rem;
  font-size:12px;
  font-family:Source Han Sans CN;
  font-weight:bold;
  font-style:italic;
  color:rgba(155,233,255,1);
  margin-bottom: 0.05rem;
}
.right-outer .item-inner {
  width: 100%;
}
.right-outer .item {
  width: 0.66rem;
  height: 0.27rem;
  background: url('../assets/emergency/an.png') 100%/cover no-repeat;
  font-size:0.01rem;
  font-family:Source Han Sans CN;
  font-weight:bold;
  color:rgba(237,214,174,1);
  margin-top: 0.03rem;
  float: left;
  line-height: 0.24rem;
  text-indent: 0.05rem;
}
.right-outer .item:nth-child(2n+2){
  margin-left:0.05rem;
}
.right-title-04 {
  left: 0.17rem;
  top: 1.9rem;
}
.right-bottom-02 {
  width: 95%;
  position: absolute;
  left: 0.30rem;
  top: 2.3rem;
}
.right-bottom-02 .item{
  float: left;
  width: 1.40rem;
  margin-left: 0.06rem;
  margin-bottom: 0.22rem;
}
.right-bottom-02 .item:nth-child(4n+1) {
  margin-left: 0;
}
.right-bottom-02 .item-top {
  width: 1.40rem;
  height: 0.80rem;
  position: relative;
}
.right-bottom-02 .item-top img{
  width: 1.40rem;
  height: 0.80rem;
  z-index: -1;
}
.right-bottom-02 .item-top .item-text {
  position: absolute;
  bottom: 0;
  left: 0;
}
.right-bottom-02 .item-top button {
  width:0.30rem;
  height:0.16rem;
  background:rgba(46,113,246,1);
  border-radius:0.06rem;
  font-size:0.09rem;
  font-family:Source Han Sans CN;
  font-weight:400;
  color:rgba(226,241,252,1);
  border: none;

}
.right-bottom-02 .item-top span {
  font-size:0.09rem;
  font-family:Source Han Sans CN;
  font-weight:400;
  color:rgba(226,241,252,1);
  text-indent: 0.01rem;
}
.right-bottom-02 .item-bottom {
  margin-top: 0.02rem;
  font-size:0.1rem;
  font-family:Source Han Sans CN;
  font-weight:400;
  color:rgba(226,241,252,1);
  text-indent: 1px;
}
.left-plane-right {
  position: absolute;
  left: 7.90rem;
  top: 1.50rem;
  width: 0.85rem;
  z-index:99;
}
.right-plane-left {
  position: absolute;
  right: 6.60rem;
  top: 0.70rem;
  width: 0.85rem;
  }
  .left-plane-right-name {
  margin-top: 0.10rem;
  padding-left: 5px;
  box-sizing: border-box;
  background: #C86834;
  color: #fefefe;
  font-size: 0.14rem;
  transform:skew(-10deg)
  }
  .left-plane-right-number {
  color: #fdfdfd;
  font-size: 0.24rem;
  font-style: italic;
  }
}
</style>
