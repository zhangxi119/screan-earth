<!--
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-02-26 14:45:52
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-10 03:27:41
 -->

<template>
   <div class="security-container">
     <div class="header-bg">社保服务</div>
     <div class="g-nav-box">
       <nav-list
          :data="selectList"
          icon="map"
          :width="1.73"
          :height=".45">
        </nav-list>
     </div>
     <div class="g-maker-text">
        <h3>市中区总体情况</h3>
        <div class="g-text-item">总人数：<span>24</span> 家</div>
        <div class="g-text-item">参保单位数：<span>24,321</span>人</div>
        <div class="g-text-item">参保人数数：<span>241</span> 人</div>
        <div class="g-text-item">社保卡数：<span>24,100</span> 人</div>
      </div>
      <div class="g-maker-text g-maker-text01">
        <h3>XXXX网点名称</h3>
        <div class="g-text-item">咨询电话：<span>24</span> 家</div>
        <div class="g-text-item">参保人数：<span>24,321</span>人</div>
        <div class="g-text-item"><label>地址：</label><span class="g-address">乐山市市中区某某街道126号</span></div>
      </div>
    <div class="main-left-top">
      <p class="g-title">社会保险</p>
      <ul>
        <li>
          <p class="lt-title">乐山市总人数</p>
          <div class="lt-num-box"><span>69062</span>万</div>
          <div class="lt-data-percent">
            <div class="g-tongbi">
              <p>同比</p>
              <p>10% <span>↓</span></p>
            </div>
            <div class="g-tongbi">
              <p>环比</p>
              <p class="color-green">10% <span>↑</span></p>
            </div>
          </div>
        </li>
        <li>
          <p class="lt-title">乐山市总人数</p>
          <div class="lt-num-box"><span>69062</span>万</div>
          <div class="lt-data-percent">
            <div class="g-tongbi">
              <p>同比</p>
              <p>10% <span>↓</span></p>
            </div>
            <div class="g-tongbi">
              <p>环比</p>
              <p class="color-green">10% <span>↑</span></p>
            </div>
          </div>
        </li>
        <li>
          <p class="lt-title">乐山市总人数</p>
          <div class="lt-num-box"><span>69062</span>万</div>
          <div class="lt-data-percent">
            <div class="g-tongbi">
              <p>同比</p>
              <p>10% <span>↓</span></p>
            </div>
            <div class="g-tongbi">
              <p>环比</p>
              <p class="color-green">10% <span>↑</span></p>
            </div>
          </div>
        </li>
        <li>
          <p class="lt-title">乐山市总人数</p>
          <div class="lt-num-box"><span>69062</span>万</div>
          <div class="lt-data-percent">
            <div class="g-tongbi">
              <p>同比</p>
              <p>10% <span>↓</span></p>
            </div>
            <div class="g-tongbi">
              <p>环比</p>
              <p class="color-green">10% <span>↑</span></p>
            </div>
          </div>
        </li>
      </ul>
      <div class="g-lt-right">
        <!-- <div class="g-radar-echart" ref="radarEchart"></div> -->
        <div class="lt-radar-box">
          <div class="lt-radar-item lt-item01">
            <p class="lt-text-item01">养老保险</p>
            <div class="lt-radar-per">26.9 %</div>
            <p class="lt-text-item02">3223 张</p>
          </div>
          <div class="lt-radar-item lt-item02">
            <p class="lt-text-item01">养老保险</p>
            <div class="lt-radar-per">26.9 %</div>
            <p class="lt-text-item02">3223 张</p>
          </div>
          <div class="lt-radar-item lt-item03">
            <p class="lt-text-item02">3223 张</p>
            <div class="lt-radar-per">26.9 %</div>
            <p class="lt-text-item01">养老保险</p>
          </div>
          <div class="lt-radar-item lt-item04">
            <p class="lt-text-item02">3223 张</p>
            <div class="lt-radar-per">26.9 %</div>
            <p class="lt-text-item01">养老保险</p>
          </div>
        </div>
      </div>
    </div>
    <div class="main-left-bottom">
      <p class="g-title2"></p>
      <div class="g-lb-nav">
        <div @click="changeInsure(index)" v-for="(item, index) in nList" :key="index" :class="index === nIndex ? 'lb-nav-item lb-nav-active' : 'lb-nav-item'">{{item.name}}</div>
        <!-- <div class="lb-nav-item">医疗保险</div>
        <div class="lb-nav-item">工伤保险</div>
        <div class="lb-nav-item">失业保险</div>
        <div class="lb-nav-item">住房保障</div>
        <div class="lb-nav-item">公积金</div>
        <div class="lb-nav-item">社保卡</div> -->
      </div>
      <div class="lb-container">
        <div class="g-lb-item" v-show="nIndex === 0">
          <div class="lb-cont-num">
            <div class="lb-num-box">
              <div class="g-small-title">
                <div class="g-small-tip"></div>
                企业职工
              </div>
              <div class="g-num-container">
                <div class="g-num-box">
                  <div class="text-box">
                    <p>退休人数</p>
                  </div>
                  <div class="g-num-data"><span>69054</span>万</div>
                </div>
                <div class="g-num-box">
                  <div class="text-box">
                    <p>退休人数</p>
                  </div>
                  <div class="g-num-data"><span>69054</span>万</div>
                </div>
              </div>
            </div>
            <div class="lb-num-box">
              <div class="g-small-title">
                <div class="g-small-tip"></div>
                机关事业单位
              </div>
              <div class="g-num-container">
                <div class="g-num-box">
                  <div class="text-box">
                    <p>退休人数</p>
                  </div>
                  <div class="g-num-data"><span>69054</span>万</div>
                </div>
                <div class="g-num-box">
                  <div class="text-box">
                    <p>退休人数</p>
                  </div>
                  <div class="g-num-data"><span>69054</span>万</div>
                </div>
              </div>
            </div>
            <div class="lb-num-box">
              <div class="g-small-title">
                <div class="g-small-tip"></div>
                城乡居民
              </div>
              <div class="g-num-container">
                <div class="g-num-box">
                  <div class="text-box">
                    <p>退休人数</p>
                  </div>
                  <div class="g-num-data"><span>69054</span>万</div>
                </div>
                <div class="g-num-box">
                  <div class="text-box">
                    <p>退休人数</p>
                  </div>
                  <div class="g-num-data"><span>69054</span>万</div>
                </div>
              </div>
            </div>
          </div>
          <div class="lb-cont-echart">
            <div class="lb-echart-item">
              <div class="g-small-title"><div class="g-small-tip"></div>参保人员趋势</div>
              <div class="lb-echart-cont" ref="cbryqs"></div>
            </div>
            <div class="lb-echart-item">
              <div class="g-small-title"><div class="g-small-tip"></div>基金收入趋势</div>
              <div class="lb-echart-cont" ref="jjsrqs"></div>
            </div>
          </div>
        </div>
        <div class="g-lb-item" v-show="nIndex === 1">
          <div class="lb-cont-num">
            <div class="lb-num-box">
              <div class="g-small-title" style="margin-left: 0;">
                <div class="g-small-tip"></div>
                参保信息
              </div>
              <div class="g-num-container">
                <div class="g-num-box">
                  <div class="text-box">
                    <p>退休人数</p>
                    <div class="g-up-add">32家 ↑</div>
                  </div>
                  <div class="g-num-data"><span>69054</span>万</div>
                </div>
                <div class="g-num-box">
                  <div class="text-box">
                    <p>退休人数</p>
                  </div>
                  <div class="g-num-data"><span>69054</span>万</div>
                </div>
                <div class="g-num-box">
                  <div class="text-box">
                    <p>退休人数</p>
                  </div>
                  <div class="g-num-data"><span>69054</span>万</div>
                </div>
                <div class="g-num-box">
                  <div class="text-box">
                    <p>退休人数</p>
                  </div>
                  <div class="g-num-data"><span>69054</span>万</div>
                </div>
              </div>
            </div>
            <div class="lb-num-box">
              <div class="g-small-title" style="margin-left: 0;">
                <div class="g-small-tip"></div>
                基金收集信息
              </div>
              <div class="g-num-container">
                <div class="g-num-box">
                  <div class="text-box">
                    <p>退休人数</p>
                  </div>
                  <div class="g-num-data"><span>69054</span>万</div>
                </div>
                <div class="g-num-box">
                  <div class="text-box">
                    <p>退休人数</p>
                  </div>
                  <div class="g-num-data"><span>69054</span>万</div>
                </div>
              </div>
            </div>
          </div>
          <div class="lb-cont-list">
            <div class="g-small-title" style="margin-left: 0;">
              <div class="g-small-tip"></div>
              基金支出
            </div>
            <ul class="g-lb-ul">
              <li>
                <div class="g-change-text">
                  <p class="lt-title">乐山市总人数乐山市总人数</p>
                </div>
                <div class="lt-num-box"><span>69062</span>万</div>
              </li>
              <li>
                <div class="g-change-text">
                  <p class="lt-title">乐山市总人数</p>
                </div>
                <div class="lt-num-box"><span>69062</span>万</div>
              </li>
              <li>
                <div class="g-change-text">
                  <p class="lt-title">乐山市总人数</p>
                </div>
                <div class="lt-num-box"><span>20</span>万</div>
              </li>
              <li>
                <div class="g-change-text">
                  <p class="lt-title">乐山市总人数</p>
                </div>
                <div class="lt-num-box"><span>20</span>万</div>
              </li>
              <li>
                <div class="g-change-text">
                  <p class="lt-title">乐山市总人数乐山市总人数</p>
                </div>
                <div class="lt-num-box"><span>20</span>万</div>
              </li>
              <li>
                <div class="g-change-text">
                  <p class="lt-title">乐山市总人数</p>
                </div>
                <div class="lt-num-box"><span>20</span>万</div>
              </li>
              <li>
                <div class="g-change-text">
                  <p class="lt-title">乐山市总人数乐山市总人数</p>
                </div>
                <div class="lt-num-box"><span>69062</span>万</div>
              </li>
              <li>
                <div class="g-change-text">
                  <p class="lt-title">乐山市总人数乐山市总人数</p>
                </div>
                <div class="lt-num-box"><span>69062</span>万</div>
              </li>
              <li>
                <div class="g-change-text">
                  <p class="lt-title">乐山市总人数乐山市总人数</p>
                </div>
                <div class="lt-num-box"><span>69062</span>万</div>
              </li>
              <li>
                <div class="g-change-text">
                  <p class="lt-title">乐山市总人数乐山市总人数</p>
                </div>
                <div class="lt-num-box"><span>69062</span>万</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="main-right-top">
      <p class="g-title">保障情况</p>
      <div class="rt-box">
        <div class="rt-item">
          <img src="../../../assets/city-management/common-service/social-security/1@2x.png" alt="" />
          <div class="g-num-box">
            <div class="text-box">
              <p>退休人数</p>
            </div>
            <div class="g-num-data"><span>69054</span>万</div>
          </div>
        </div>
        <div class="rt-item">
          <img src="../../../assets/city-management/common-service/social-security/2@2x.png" alt="" />
          <div class="g-num-box">
            <div class="text-box">
              <p>城镇居民最低生活保障人数</p>
            </div>
            <div class="g-num-data"><span>69054</span>万</div>
          </div>
        </div>
        <div class="rt-item">
          <img src="../../../assets/city-management/common-service/social-security/3@2x.png" alt="" />
          <div class="g-num-box">
            <div class="text-box">
              <p>退休人数</p>
            </div>
            <div class="g-num-data"><span>69054</span>万</div>
          </div>
        </div>
        <div class="rt-item">
          <img src="../../../assets/city-management/common-service/social-security/4@2x.png" alt="" />
          <div class="g-num-box">
            <div class="text-box">
              <p>退休人数</p>
            </div>
            <div class="g-num-data"><span>69054</span>万</div>
          </div>
        </div>
        <div class="rt-item">
          <img src="../../../assets/city-management/common-service/social-security/5@2x.png" alt="" />
          <div class="g-num-box">
            <div class="text-box">
              <p>退休人数</p>
            </div>
            <div class="g-num-data"><span>69054</span>万</div>
          </div>
        </div>
        <div class="rt-item">
          <img src="../../../assets/city-management/common-service/social-security/6@2x.png" alt="" />
          <div class="g-num-box">
            <div class="text-box">
              <p>退休人数</p>
            </div>
            <div class="g-num-data"><span>69054</span>万</div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-right-bottom">
      <p class="g-title2">社会补助信息</p>
      <div class="g-pie-box">
        <div class="g-pie-item" ref="shbzxx"></div>
        <div class="g-pie-item" ref="shbzxx2"></div>
      </div>
      <div class="g-bar-box">
        <div class="g-small-title">
          <div class="g-small-tip"></div>
          领取补偿人数趋势
        </div>
        <div class="g-bar-cont" ref="lqbcrsqs"></div>
        <div class="g-echart-bg"></div>
      </div>
    </div>
   </div>
</template>
<script>
// import Utils from '@/assets/emergency/utils/utils.js'
import echarts from 'echarts'
import navList from '@/components/select.vue'
// import radarChart from '@/assets/city-management/common-service/social-security/js/radarEchart.js'
// import lineChart from '@/assets/city-management/common-service/social-security/js/lineEchart.js'
// import pieChart from '@/assets/city-management/common-service/social-security/js/pieEchart.js'
// import barChart from '@/assets/city-management/common-service/social-security/js/barEchart.js'
import radarChart from '@/echarts-data/city-management/common-service/social-security/radarEchart.js'
import lineChart from '@/echarts-data/city-management/common-service/social-security/lineEchart.js'
import pieChart from '@/echarts-data/city-management/common-service/social-security/pieEchart.js'
import barChart from '@/echarts-data/city-management/common-service/social-security/barEchart.js'
export default {
  components: {navList},
  mounted () {
    // this.initRadarEchart()
    this.initLineEchart()
    this.initPieEchart()
    this.initBarEchart()
    // this.chartResize()
  },
  data () {
    return {
      radarObject: null,
      lineObject: null,
      lineObject2: null,
      pieObject: null,
      pieObject2: null,
      barObject: null,
      selectList: [
        {name: '全部区域'},
        {name: '总部经济区'},
        {name: '五通桥基地'},
        {name: '犍为基地'},
        {name: '夹江基地'}
      ],
      nList: [
        {name: '退休保险'},
        {name: '医疗保险'},
        {name: '工伤保险'},
        {name: '失业保险'},
        {name: '住房保障'},
        {name: '公积金'},
        {name: '社保卡'}
      ],
      nIndex: 0
    }
  },
  computed: {
  },
  methods: {
    // 左上雷达图
    initRadarEchart () {
      this.radarData = echarts.init(this.$refs.radarEchart)
      this.radarData.setOption(radarChart)
    },
    // 左下折线图
    initLineEchart () {
      // var that = this
      this.lineObject = echarts.init(this.$refs.cbryqs)
      this.lineObject2 = echarts.init(this.$refs.jjsrqs)
      this.lineObject.setOption(lineChart)
      this.lineObject2.setOption(lineChart)
    },
    // 切换保险种类
    changeInsure (index) {
      this.nIndex = index
    },
    // 右下饼图
    initPieEchart () {
      this.pieObject = echarts.init(this.$refs.shbzxx)
      this.pieObject2 = echarts.init(this.$refs.shbzxx2)
      this.pieObject.setOption(pieChart)
      this.pieObject2.setOption(pieChart)
    },
    // 右下柱状图
    initBarEchart () {
      this.barObject = echarts.init(this.$refs.lqbcrsqs)
      this.barObject.setOption(barChart)
    },
    chartResize () {
      let that = this
      window.addEventListener('resize', function () {
        if (that.radarData) {
          that.radarData.resize()
          that.lineObject.resize()
          that.lineObject2.resize()
        }
      })
    }
  }
}
</script>

<style  lang="scss" scoped>
.security-container {
  width: 43.2rem;
  height: 10.8rem;
  // width: 4320px;
  // height: 1080px;
  position: absolute;
  background: #000;
  .header-bg {
     position: absolute;
     width: 20.40rem;
     height: 1.80rem;
     line-height: 1.20rem;
     font-family: simhei;
     text-align: center;
     color: #FFFFFF;
     font-size: 0.45rem;
     background: url('../../../assets/city-management/common-service/medical-resource/head-bg.png') no-repeat;
     background-size:100% 100%;
     left:11.4rem;
     z-index: 99;
  }
  .g-nav-box {
    position: absolute;
    left: 30.61rem;
    top: 1rem;
    z-index: 100;
  }
  .g-maker-text {
    padding-left: 0.21rem;
    box-sizing: border-box;
    position: absolute;
    left: 23.68rem;
    top: 2.5rem;
    width: 2.52rem;
    height: 2.70rem;
    background: url('../../../assets/city-management/common-service/education-resource/small-kuang.png') center no-repeat;
    background-size: 100%;
    h3 {
      margin: 0.30rem 0 0.18rem 0;
      font-size:21px;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(255,255,255,1);
    }
    .g-text-item {
      margin-bottom: 0.22rem;
      font-size:0.18rem;
      height: 0.18rem;
      line-height: 0.18rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(223,226,251,1);
      span {
        font-size:0.22rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        font-style:italic;
        color:rgba(249,230,89,1);
      }
      label {
        float: left;
      }
      .g-address {
        width: 1.95rem;
        line-height: 0.25rem;
        float: left;
      }
    }
  }
  .g-maker-text01 {
    width: 3.19rem;
    height: 3.03rem;
    left: 13.65rem;
    top: 5.52rem;
    padding-left: 0.2rem;
    background: url('../../../assets/city-management/common-service/education-resource/small-kuang2.png') center no-repeat;
    background-size: 100%;
  }
  .g-title {
    display: inline-block;
    margin: 0.52rem 0 0 0.62rem;
    font-size:0.24rem;
    line-height: 0.23rem;
    text-align: center;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(255,255,255,1);
  }
  .g-title2 {
    display: inline-block;
    position: absolute;
    margin: 0.62rem 0 0 0.67rem;
    font-size:0.24rem;
    line-height: 0.23rem;
    text-align: center;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(255,255,255,1);
  }
  .g-small-title {
    position: relative;
    padding-left: 0.3rem;
    margin: 0.1rem 0 0.1rem 0;
    margin: 0 auto;
    width: 1.6rem;
    height: 0.44rem;
    line-height: 0.44rem;
    font-size:0.2rem;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(255,255,255,1);
    .g-small-tip {
      width: 0.13rem;
      height: 0.13rem;
      border:0.02rem solid rgba(246,210,71,1);
      position: absolute;
      left: 0;
      top: 0.1rem;
      box-sizing: border-box;
      &::after {
        content: '';
        display: inline-block;
        width: 0.13rem;
        height: 0.13rem;
        position: absolute;
        left: 0.05rem;
        top: 0.05rem;
        background:rgba(53,126,243,1);
      }
    }
  }
  .lt-title {
    position: relative;
    font-size:0.19rem;
    display: inline-block;
    font-family:Source Han Sans CN;
    font-weight:bold;
    font-style:italic;
    color:rgba(224,227,251,1);
    padding-left: 0.3rem;
    line-height: 0.24rem;
    height: 0.24rem;
    &::before {
      content: '';
      display: inline-block;
      width: 0.23rem;
      height: 0.26rem;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background: url('../../../assets/city-management/common-service/social-security/box.png') center no-repeat;
      background-size: 100%;
    }
  }
  .lt-num-box {
    margin-left: 0.15rem;
    width: 1.45rem;
    height: 0.84rem;
    font-size:0.23rem;
    font-family:Source Han Sans CN;
    text-align: center;
    font-weight:bold;
    font-style:italic;
    color:rgba(255,255,255,1);
    background: url('../../../assets/city-management/common-service/social-security/numbox.png') center no-repeat;
    background-size: 100%;
    span {
      margin-right: 0.06rem;
      line-height: 0.84rem;
      font-size:0.36rem;
      font-family:Impact;
      font-weight:bold;
      font-style:italic;
      color:rgba(248,230,89,1);
    }
  }
  .g-num-box {
    width: 1.58rem;
    .text-box {
      height: 0.40rem;
      line-height: 0.40rem;
      overflow: hidden;
      position: relative;
      .g-up-add {
        display: inline-block;
        position: absolute;
        left: 0.9rem;
        top: 0.08rem;
        height: 0.4rem;
        line-height: 0.4rem;
        font-weight:bold;
        font-style:italic;
        color:rgba(104,225,162,1);
      }
    }
    p {
      width: 100%;
      line-height: 0.20rem;
      font-size:0.19rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      font-style:italic;
      color:rgba(224,227,251,1);
      margin:0;
      -webkit-line-clamp:2;
      overflow:visible;
      display:inline-block;
      vertical-align:middle;
      height:auto;
    }
    .g-num-data {
      width: 1.45rem;
      height: 0.84rem;
      margin-top: -0.05rem;
      font-size:0.23rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      font-style:italic;
      color:rgba(255,255,255,1);
      background: url('../../../assets/city-management/common-service/social-security/numbox.png') center no-repeat;
      background-size: 100%;
      span {
        margin-right: 0.06rem;
        line-height: 0.84rem;
        font-size:0.36rem;
        font-family:Impact;
        font-weight:bold;
        font-style:italic;
        color:rgba(248,230,89,1);
      }
    }
  }
  .main-left-top {
    position: absolute;
    left: 0.29rem;
    top: 0.24rem;
    z-index: 9;
    width: 10.48rem;
    height: 3.92rem;
    background: url('../../../assets/city-management/common-service/social-security/kuang-left-top@2x.png') center no-repeat;
    background-size: 100%;
    ul {
      margin-left: 0.79rem;
      margin-top: 0.34rem;
      width: 5.45rem;
      height: 2.28rem;
      list-style: none;
      overflow: hidden;
      li {
        list-style: none;
        margin-bottom: 0.13rem;
        width: 2.5rem;
        height: 1.05rem;
        float: left;
        position: relative;
        font-size: 0;
        .lt-data-percent {
          display: inline-block;
          position: absolute;
          right: 0.1rem;
          top: 0;
          width: 0.7rem;
          height: 100%;
          .g-tongbi {
            width: 100%;
            height: 0.44rem;
            p {
              padding-left: 0.05rem;
              font-size:0.14rem;
              font-family:Source Han Sans CN;
              font-weight:bold;
              font-style:italic;
              color:rgba(224,227,251,1);
              line-height: 0.2rem;
              &:last-child {
                padding-left: 0;
                font-size:0.18rem;
                line-height: 0.24rem;
                font-style: normal;
                font-family:Source Han Sans CN;
                font-weight:bold;
                font-style:italic;
                color:rgba(220,100,47,1);
              }
              span {
                font-style: normal;
              }
            }
            .color-green {
              color: rgba(104,225,162,1) !important;
            }
          }
        }
      }
    }
    .g-lt-right {
      position: absolute;
      right: 0.6rem;
      top: 0.45rem;
      width: 3.67rem;
      height: 2.77rem;
      .g-radar-echart {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -0.5rem;
        margin-top: -0.5rem;
        width: 1rem;
        height: 1rem;
      }
      .lt-radar-box {
        width: 1.58rem;
        height: 1.58rem;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -0.79rem;
        margin-top: -0.59rem;
        background: url('../../../assets/city-management/common-service/social-security/radar.png') center no-repeat;
        background-size: 100%;
        .lt-radar-item {
          width: 0.96rem;
          height: 0.9rem;
          position: absolute;
          .lt-text-item01 {
            padding-left: 0.16rem;
            height: 0.3rem;
            line-height: 0.3rem;
            font-size:0.18rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(255,255,255,1);
          }
          .lt-radar-per {
            padding-left: 0.16rem;
            width: 100%;
            height: 0.24rem;
            line-height: 0.24rem;
            font-size:0.18rem;
            font-family:Source Han Sans CN;
            font-weight:bold;
            transform: skewX(-5deg);
            color:rgba(155,233,255,1);
            background: rgba(106,180,201,0.15);
            position: relative;
            &::after {
              content: '';
              display: inline-block;
              position: absolute;
              right: 0.02rem;
              top: 0.07rem;
              width: 0.03rem;
              height: 0.12rem;
              background: #9BE9FF;
              transform: skewX(-5deg);
            }
          }
          .lt-text-item02 {
            padding-left: 0.16rem;
            height: 0.3rem;
            line-height: 0.3rem;
            font-size:0.18rem;
            font-family:Source Han Sans CN;
            font-weight:bold;
            font-style:italic;
            color:rgba(237,214,174,1);
          }
        }
        .lt-item01 {
          left: -0.86rem;
          top: -0.45rem;
        }
        .lt-item02 {
          right: -0.86rem;
          top: -0.45rem;
        }
        .lt-item03 {
          right: -0.86rem;
          bottom: -0.45rem;
        }
        .lt-item04 {
          left: -0.86rem;
          bottom: -0.45rem;
        }
      }
    }
  }
  .main-left-bottom {
    position: absolute;
    left: 0.29rem;
    top: 3.89rem;
    z-index: 9;
    width: 10.48rem;
    height: 6.89rem;
    background: url('../../../assets/city-management/common-service/social-security/kuang-left-bottom@2x.png') center no-repeat;
    background-size: 100%;
    .g-lb-nav {
      position: absolute;
      left: 0.65rem;
      top: 0.44rem;
      width: 8rem;
      height: 0.6rem;
      overflow: hidden;
      .lb-nav-item {
        margin-right: 0.42rem;
        float: left;
        font-size:0.22rem;
        line-height: 0.6rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(224,227,251,1);
      }
      .lb-nav-active {
        font-size: 0.24rem;
        color:rgba(255,255,255,1);
      }
    }
    .lb-container {
      margin-top: 1.25rem;
      margin-left: 0.64rem;
      width: 9.7rem;
      height: 5.2rem;
      .lb-cont-num {
        // width: 100%;
        // height: 100%;
        overflow: hidden;
        .lb-num-box {
          // margin-right: 0.1rem;
          // width: 3.05rem;
          width: auto;
          height: 1.7rem;
          overflow: hidden;
          float: left;
          .g-num-container {
            width: auto;
            // height: 1.75rem;
            float: left;
            .g-num-box {
              float: left;
            }
          }
        }
      }
      .g-lb-item {
        width: 100%;
        height: 100%;
        .lb-cont-list {
          margin-top: 0.15rem;
          width: 100%;
          height: calc( 100% - 1.8rem );
          .g-lb-ul {
            width: 100%;
            overflow: hidden;
            li {
              float: left;
              margin: 0 0.2rem 0.2rem 0.1rem;
              .g-change-text {
                width: 1.6rem;
                height: 0.48rem;
                line-height: 0.48rem;
                .lt-title {
                  margin:0;
                  line-height: 0.24rem;
                  -webkit-line-clamp:2;
                  overflow:visible;
                  display:inline-block;
                  vertical-align:middle;
                  height:auto;
                }
              }
              .lt-num-box {
                height: 0.74rem;
                line-height: 0.74rem;
                span {
                  line-height: 0.74rem;
                }
              }
            }
          }
        }
      }
      .lb-cont-echart {
        margin-top: 0.05rem;
        width: 100%;
        overflow: hidden;
        .lb-echart-item {
          width: 50%;
          float: left;
          .g-small-title {
            margin-left: 0.3rem;
          }
          .lb-echart-cont {
            width: 4.6rem;
            height: 2.72rem;
          }
        }
      }
    }
  }
  .main-right-top {
    position: absolute;
    right: 0.32rem;
    top: 0.24rem;
    z-index: 9;
    width: 10.48rem;
    height: 3.89rem;
    background: url('../../../assets/city-management/common-service/social-security/kuang-left-top@2x.png') center no-repeat;
    background-size: 100%;
    .rt-box {
      margin-top: 0.27rem;
      margin-left: 0.95rem;
      width: 8.88rem;
      height: 2.5rem;
      overflow: hidden;
      .rt-item {
        margin-right: 0.15rem;
        width: 2.8rem;
        height: 1.2rem;
        float: left;
        position: relative;
        .g-num-box {
          margin-left: 1.25rem;
        }
        img {
          position: absolute;
          left: 0.2rem;
          top: 0.15rem;
          display: block;
          width: 0.88rem;
          height: 100%;
        }
      }
    }
  }
  .main-right-bottom {
    position: absolute;
    right: 0.32rem;
    top: 3.89rem;
    z-index: 9;
    width: 10.48rem;
    height: 6.89rem;
    // width: 1048px;
    // height: 689px;
    background: url('../../../assets/city-management/common-service/social-security/kuang-left-bottom@2x.png') center no-repeat;
    background-size: 100%;
    .g-pie-box {
      margin-left: 0.4rem;
      margin-top: 1.15rem;
      width: 9.76rem;
      height: 2.22rem;
      // width: 976px;
      // height: 222px;
      overflow: hidden;
      .g-pie-item {
        float: left;
        width: 50%;
        height: 100%;
      }
    }
    .g-bar-box {
      position: relative;
      margin-left: 0.4rem;
      margin-top: 0.25rem;
      width: 9.76rem;
      height: 3rem;
      .g-small-title {
        margin-left: 0.4rem;
        margin-bottom: 0;
      }
      .g-bar-cont {
        width: 100%;
        height: 2.5rem;
      }
      .g-echart-bg {
        position: absolute;
        left: 0.76rem;
        bottom: 0.82rem;
        width: 8.30rem;
        height: 0.7rem;
        background: url('../../../assets/city-management/common-service/social-security/echart-bg.png') center no-repeat;
        background-size: 100%;
      }
    }
  }
}
</style>
