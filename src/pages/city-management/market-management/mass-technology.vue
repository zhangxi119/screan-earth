<!--
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-04 14:45:52
 * @LastEditors: wanglong
 * @LastEditTime: 2020-05-11 21:34:41
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-15 21:31:17
 -->

<template>
  <div class="market-container">
    <head-componens name="质量技术监管"></head-componens>
    <!-- <div class="header-bg">质量技术监管</div> -->
    <div class="g-menu-box">
      <menu-list></menu-list>
    </div>
    <div class="g-nav-box">
      <nav-list @navClick="navClick" :data="selectList"></nav-list>
    </div>
    <div class="g-maker-text" style="display: none;">
      <h3>市中区总体情况</h3>
      <div class="g-text-item">
        总人数：
        <span>24</span> 家
      </div>
      <div class="g-text-item">
        参保单位数：
        <span>24,321</span>人
      </div>
      <div class="g-text-item">
        参保人数数：
        <span>241</span> 人
      </div>
      <div class="g-text-item">
        社保卡数：
        <span>24,100</span> 人
      </div>
    </div>
    <div class="main-left-top">
      <p class="g-title hover-color">特种设备登记情况</p>
      <div class="lt-box">
        <div class="lt-echart-item">
          <div class="g-small-title hover-color">
            <div class="g-small-tip"></div>特种设备登记情况
          </div>
          <div class="g-echart-box" ref="tzsbdjqk" id="tzsbdjqk"></div>
        </div>
        <div class="lt-echart-item">
          <div class="g-small-title hover-color">
            <div class="g-small-tip"></div>特种设备定期检定情况<span class="global-data-title">（截至2019年）</span>
          </div>
          <div class="lb-add-per" style="left: 0.2rem; top: 0.5rem;">
            检验总数：<span>{{checkPieData.zl02006}}</span>件
          </div>
          <div class="lb-add-per" style="left: 0.2rem; top: 0.8rem;">
            定期检验率：<span>{{checkPieData.zl02004}}%，</span>
            检验合格率：<span>{{checkPieData.zl02005}}%</span>
          </div>
          <div class="g-echart-box" style="width: 95%;" ref="tzsbdqjd"></div>
        </div>
      </div>
      <!-- <div class="dialog-toggle-btn" @click="openDialog">
        <span>查看明细</span>
        <img src="../../../assets/city-management/market-supervision/img/details-icon.png" />
      </div> -->
    </div>
    <div class="main-left-bottom">
      <div class="lb-box">
        <div class="hover-div">
          <p class="g-title hover-color">工业产品许可情况<span class="global-data-title">（截至2019年）</span></p>
          <div class="lb-item">
          <div class="g-echart-box2 lb-img-box" ref="gycpxkqk">
            <div class="lb-left-circle"></div>
            <div class="lb-bar bar01" :style="'height: 1.65rem;'">
              <div class="lb-bar-text">
                <p>{{industryPermitArr[1].zl03002}}件</p>
                <p>{{industryPermitArr[1].zl03001}}年</p>
                <div class="lb-line"></div>
              </div>
            </div>
            <div class="lb-bar bar02" :style="'height: '+ (1.65 * industryPermitArr[0].zl03002 / industryPermitArr[1].zl03002) +'rem;'">
              <div class="lb-bar-text">
                <p>{{industryPermitArr[0].zl03002}}件</p>
                <p>{{industryPermitArr[0].zl03001}}年</p>
                <div class="lb-line"></div>
              </div>
            </div>
            <ul class="lb-legend-ul">
              <li>{{industryPermitArr[1].zl03001}}年   {{industryPermitArr[1].zl03002}}件</li>
              <li>{{industryPermitArr[0].zl03001}}年   {{industryPermitArr[0].zl03002}}件</li>
            </ul>
          </div>
          <div class="lb-add-per">
            2019{{industryPermit.zl03003 >= 0 ? '新增' : '减少'}}
            <span>{{Math.abs(industryPermit.zl03003)}}</span>
            件，同比{{industryPermit.zl03004 >= 0 ? '增长' : '减少'}}
            <span>{{Math.abs(industryPermit.zl03004)}}%</span>
          </div>
        </div>
        </div>
        <div class="hover-div">
          <p class="g-title hover-color" style="left: 4.9rem;">2019工业产品检查情况</p>
          <div class="lb-item lb-item-1">
          <div class="rb-all-num">
            <p class="lt-title">抽查生产企业</p>
            <div class="lt-num-box">
              <span>{{industryCheck.zl04002}}</span>家
            </div>
          </div>
          <div class="g-echart-box2">
            <div class="rb-all-num">
              <p class="lt-title">抽查类型</p>
              <div class="lt-num-box">
                <span>{{industryCheck.zl04003}}</span>类
              </div>
            </div>
            <div class="rb-all-num rb-all-numb">
              <p class="lt-title">抽查产品品种</p>
              <div class="lt-num-box">
                <span>{{industryCheck.zl04004}}</span>种
              </div>
            </div>
            <div class="rb-all-num rb-all-numb">
              <p class="lt-title">抽查品种合格率</p>
              <div class="lt-num-box">
                <span>{{industryCheck.zl04005}}</span>%
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="main-right-top">
      <div class="rt-box">
        <div class="hover-div hover-color">
          <p class="g-title hover-color" style="left: 0">计量检定概况<span class="global-data-title">（截至2019年）</span></p>
          <div class="rt-box-item">
            <div class="g-echart-box2">
              <div class="rt-num-title">检定工作计量器具：</div>
              <div class="rt-num-box">
                <!-- <rollnum :value="720000"></rollnum> -->
                <div class="g-num-text" v-for="(item) in numArr" :key="item">
                  <span>{{item}}</span>
                </div>
                <div class="g-num-tip">
                  <span>种</span>
                </div>
              </div>
              <div class="rt-num-title ">检定工作计量器具：</div>
              <div class="rt-num-box">
                <div class="g-num-text" v-for="(item, index) in numAllArr" :key="index">
                  <span>{{item}}</span>
                </div>
                <div class="g-num-tip">
                  <span>件</span>
                </div>
              </div>
              <div class="rt-check-box">
                <div class="rt-check-item">
                  强检数：
                  <span>{{merteringData.zl05004 | toThousands}}</span>件，合格率
                  <span>{{merteringData.zl05005}}%</span>
                </div>
                <div class="rt-check-item">
                  非强检数：
                  <span>{{merteringData.zl05006 | toThousands}}</span>件，合格率
                  <span>{{merteringData.zl05007}}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-div">
          <p class="g-title hover-color" style="left: 4.32rem;">计量检定机构/检定人员情况<span class="global-data-title">（截至2019年）</span></p>
          <div class="rt-box-item">
          <div class='jianding-box'><a @click = "changeJianding(1)" class="add-jianding" :class = "isJianding === 1? 'active-jianding' : ''">检定机构</a><a @click = "changeJianding(2)" class="add-jianding" :class = "isJianding === 2? 'active-jianding' : ''">检定人员</a></div>
          <div class="g-echart-box2" ref="jljdjgqk"></div>
          <!-- <div class="g-bg-04"></div> -->
        </div>
        </div>
      </div>
    </div>
    <div class="main-right-bottom">
      <div class="rb-box">
        <div class="hover-div">
          <p class="g-title2 hover-color" style="left: 0rem">强制计量器具分类检定情况</p>
          <div class="rb-box-item">
            <div class="g-echart-box2" ref="qzjlqjdqk"></div>
          </div>
        </div>
        <div class="hover-div">
          <p class="g-title2 hover-color" style="left: 4.22rem;">强制计量器具区县检定情况<span class="global-data-title">（截至2019年）</span></p>
          <div class="rb-box-item rb-box-item-1">
          <div class="g-echart-box2" ref="qzjlqjqxqk"></div>
        </div>
        </div>
      </div>
    </div>
    <!-- <div class="market-panel-box">
      <div class="user-dos" @click="panelBig = !panelBig">
        <div class="legend">图例</div>
        <div class="icon"></div>
      </div>
      <market-panel @change="marketPanelSelect" :defaultSubMenuId="defaultSubMenuId" v-show = "panelBig"></market-panel>
    </div> -->
    <div class="dialog" v-show="isShowDialog">
      <div class="g-small-title hover-color">
        <div class="g-small-tip"></div>全市特种设备明细
      </div>
      <img
        src="../../../assets/city-management/market-supervision/img/close-icon@2x.png"
        class="close-btn"
        @click="isShowDialog=false"
        alt="关闭"
      />
      <div class="dialog-head">
        <div class="form-row">
          <!-- <div class="form-cell">
            <label for>所属单位：</label>
            <input type="text" class="text-input" />
          </div>
          <div class="form-cell">
            <label for>特种设备名称：</label>
            <input type="text" class="text-input" />
          </div>
          <div class="form-cell">
            <label for>发证日期：</label>
            <input type="text" class="text-input date" id="startDate" />
          </div>
          <div class="form-cell">
            <label for>至&nbsp;&nbsp;&nbsp;</label>
            <input type="text" id="endDate" class="text-input date" />
          </div>-->
          <div class="form-cell">
            <label for>年度：</label>
            <input type="text" class="text-input" v-model="searchObj.year" />
          </div>
          <div class="form-cell">
            <!-- <a href="javascript:void(0);" class="btn" @click="restSearch">重置</a> -->
            <a href="javascript:void(0);" class="btn primary" @click="doSearch">查询</a>
          </div>
        </div>
      </div>
      <table class="data-table" style="margin-top: 0.2rem;">
        <thead>
          <tr>
            <th>年度</th>
            <th>电梯</th>
            <th>起重机械</th>
            <th>场（厂）内专用机动车辆</th>
            <th>锅炉</th>
            <th>压力容器</th>
            <th>客运索道</th>
            <th>大型游乐设施</th>
          </tr>
        </thead>
      </table>
      <div class="dialog-body">
        <table class="data-table" style="margin-top:-.4rem">
          <thead style="visibility: hidden;">
            <tr>
              <th>年度</th>
              <th>电梯</th>
              <th>起重机械</th>
              <th>场（厂）内专用机动车辆</th>
              <th>锅炉</th>
              <th>压力容器</th>
              <th>客运索道</th>
              <th>大型游乐设施</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="deviceData.length>0">
              <tr v-for="(item,index) in  deviceData" :key="index">
                <td>{{item.zl01001}}</td>
                <td>{{item.dt}}</td>
                <td>{{item.qzjx}}</td>
                <td>{{item.clzyjdcl}}</td>
                <td>{{item.gl}}</td>
                <td>{{item.ylrq}}</td>
                <td>{{item.kysd}}</td>
                <td>{{item.dxylss}}</td>
                <!-- <td><a class="operate_btn" href="javascript:void(0);" > <img src="" alt="">位置查看</a></td> -->
              </tr>
            </template>
            <p v-else class="table-no-data">无数据</p>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import API from '@/api/city-management/common-service.js'
import menuList from '@/components/menu.vue'
import navList from '@/components/select-other.vue'
import pieChart from '@/echarts-data/city-management/market-management/mass-technology/pieEchart.js'
// import pieChart01 from '@/echarts-data/city-management/market-management/mass-technology/pieEchart01.js'
import barChart from '@/echarts-data/city-management/market-management/mass-technology/left03.js'
import barChart01 from '@/echarts-data/city-management/market-management/mass-technology/left04.js'
import barChart02 from '@/echarts-data/city-management/market-management/mass-technology/right01.js'
import barChart03 from '@/echarts-data/city-management/market-management/mass-technology/barLineEchart.js'
import marketPanel from '../market-supervision/market-panel'
// import common from '@/api/city-management/marketSupervisionMapOpreate'
import headComponens from '@/components/head-component'
export default {
  components: { navList, menuList, marketPanel, headComponens },
  data () {
    return {
      isJianding: 1,
      jiandingData: [],
      pieObject: null,
      pieObject01: null,
      barObject: null,
      barObject01: null,
      barObject02: null,
      barObject03: null,
      numArr: [], // 检定工作计量器具
      numAllArr: [], // 检定器具总量
      selectList: [
        {
          name: '市场监管',
          routeName: 'marketSupervision',
          selected: false
        },
        {
          name: '市场主体',
          routeName: 'marketSubject',
          selected: false
        },
        {
          name: '食品药品',
          selected: false,
          routeName: 'foodAndDrug'
        },
        {
          name: '质量技术',
          routeName: 'massTechnology',
          selected: true
        },
        {
          name: '放心舒心消费系统',
          selected: false,
          routeName: ''
        }
      ],
      industryPermit: {
        // 工业产品许可情况
        zl03003: '',
        zl03004: ''
      },
      industryPermitArr: [
        {zl03003: '', zl03004: ''},
        {zl03003: '', zl03004: ''}
      ],
      industryCheck: {
        // 2019工业产品检查情况
        zl04002: '',
        zl04003: '',
        zl04004: '',
        zl04005: ''
      },
      merteringData: {
        // 计量检定概况
        zl05007: '', // 非强检类合格率
        zl05002: '', // 检定种类数
        zl05003: '', // 检定总数量
        zl05004: '', // 检定强检类数量
        zl05005: '', // 强检类合格率
        zl05006: '' // 非强检类数量
      },
      defaultSubMenuId: '1001',
      isShowDialog: false,
      searchObj: {
        year: '',
        pageNum: 1,
        pageSize: 500
      },
      deviceData: [],
      panelBig: false,
      checkPieData: {}
    }
  },
  computed: {},
  filters: {
    toThousands (num) {
      let result = ''
      let counter = 0
      num = (num || 0).toString()
      for (let i = num.length - 1; i >= 0; i--) {
        counter++
        result = num.charAt(i) + result
        if (!(counter % 3) && i !== 0) {
          result = ',' + result
        }
      }
      return result
    }
  },
  methods: {
    // 左上饼图 -- 特种设备设备类型数量
    initPieEchart () {
      API.MASS_DEVICENUM(this, {})
        .then(resA => {
          let res = resA.data.data
          let pieChartData = pieChart(res.data)
          this.pieObject = echarts.init(this.$refs.tzsbdjqk)
          this.pieObject.setOption(pieChartData)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 左上柱状图 -- 特种设备定期检验情况
    initBarLine () {
      API.MASS_CHECK(this, {})
        .then(resA => {
          let res = resA.data.data
          this.checkPieData = res.data[0]
          let barChartData = barChart(res.data)
          let barObject = echarts.init(this.$refs.tzsbdqjd)
          barObject.setOption(barChartData)
          barObject.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 左下饼图 -- 工业产品许可情况
    initPieEchart01 () {
      API.MASS_INDUSTRY_PERMIT(this, {})
        .then(resA => {
          let res = resA.data.data
          this.industryPermit = res.data[0]
          this.industryPermitArr = res.data
          // let pieChart01Data = pieChart01(res.data)
          // this.pieObject01 = echarts.init(this.$refs.gycpxkqk)
          // this.pieObject01.setOption(pieChart01Data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 2019工业产品检查情况
    getNowYearCheck () {
      API.MASS_INDUSTRY_CHECK(this, {})
        .then(resA => {
          let res = resA.data.data
          this.industryCheck = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 计量检查概况
    getMertering () {
      API.MASS_MERTERING(this, {})
        .then(resA => {
          let res = resA.data.data
          this.merteringData = res.data
          this.initNumber(this.merteringData.zl05002, 'numArr')
          this.initNumber(this.merteringData.zl05003, 'numAllArr')
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 右上柱状图 -- 计量检定机构/检定人员情况
    initBarEchart () {
      API.MASS_MERTERING_PEOPLE(this, {})
        .then(resA => {
          let res = resA.data.data
          let barChart01Data = barChart01(res.data, 1)
          this.barObject01 = echarts.init(this.$refs.jljdjgqk)
          this.jiandingData = res.data
          this.barObject01.setOption(barChart01Data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 点击按钮
    changeJianding (num) {
      this.isJianding = num
      // 检定机构
      let barChart01Data = barChart01(this.jiandingData, num)
      this.barObject01.setOption(barChart01Data)
    },
    // 右下柱状图左 -- 强制计量器具分类鉴定情况
    initBarEchart02 () {
      API.MASS_MERTERING_TYPE(this, {})
        .then(resA => {
          let res = resA.data.data
          let barChart02Data = barChart02(res.data)
          this.barObject02 = echarts.init(this.$refs.qzjlqjdqk)
          this.barObject02.setOption(barChart02Data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 右下柱状图右
    initBarEchart03 () {
      API.MASS_MERTERING_AREA(this, {})
        .then(resA => {
          let res = resA.data.data
          let barChart03Data = barChart03(res.data)
          this.barObject03 = echarts.init(this.$refs.qzjlqjqxqk)
          this.barObject03.setOption(barChart03Data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 初始化数字
    initNumber (value, nameStr) {
      let number = value.toString()
      for (var i = 0; i < number.length; i++) {
        this[nameStr].push(number[i])
      }
    },
    // nav点击
    navClick (data) {
    },
    // ...common,
    initDateInput () {
      this.$nextTick(() => {
        this.$laydate.render({
          elem: '#startDate',
          theme: '#000'
        })
        this.$laydate.render({
          elem: '#endDate',
          theme: '#000'
        })
      })
    },
    openDialog (type) {
      this.isShowDialog = true
      this.queryDeviceDataByYear()
      // this.restSearch()
    },
    /// 重置查询
    restSearch () {
      this.searchObj.year = ''
      this.queryDeviceDataByYear()
    },
    doSearch () {
      this.queryDeviceDataByYear()
    },
    queryDeviceDataByYear () {
      API.QUERY_DEVICE_DATA(this, this.searchObj)
        .then(res => {
          res = res.data
          if (res.serviceSuccess) {
            this.deviceData = res.data.pageBean.list
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.initPieEchart()
    this.initBarLine()
    this.initPieEchart01()
    this.getNowYearCheck() // 2019工业产品检查情况
    this.getMertering() // 计量检定概况
    this.initBarEchart()
    this.initBarEchart02()
    this.initBarEchart03()
    // this.marketPanelSelect([this.defaultSubMenuId], '市场主体')
    this.initDateInput() // 初始化时间选择
    // window._m &&
    //   window._m.redirectDimenionFn &&
    //   window._m.redirectDimenionFn(data => {
    //     console.log('redirectDimenionFn', data)
    //   }, true)
  },
  beforeDestroy () {
    window._m.clear()
    // window._m.redirectDimenion(() => {}, true, false)
    // window._m.
  }
}
</script>

<style  lang="scss" scoped>
@import '../../../components/date-title.scss';
.global-data-title{
  color:$date-title-color;
  display:inline-block;
  font-size:$date-title-size;
}
.market-container {
  width: 43.2rem;
  height: 10.8rem;
  // width: 4320px;
  // height: 1080px;
  position: absolute;
  background: #000;
  .header-bg {
    position: absolute;
    width: 20.4rem;
    height: 1.8rem;
    line-height: 1.2rem;
    font-family: simhei;
    text-align: center;
    color: #ffffff;
    font-size: 0.45rem;
    background: url("../../../assets/city-management/common-service/medical-resource/head-bg.png")
      no-repeat;
    background-size: 100% 100%;
    left: 11.4rem;
    z-index: 99;
  }
  .g-menu-box {
    position: absolute;
    left: 11rem;
    top: 9rem;
    z-index: 101;
  }
  .g-nav-box {
    width: auto;
    position: absolute;
    left: 31.28rem;
    top: 1.05rem;
    z-index: 100;
    .g-select-box {
      width: 2.53rem;
      position: relative;
      ul {
        width: 100%;
        list-style: none;
        li {
          list-style: none;
          position: relative;
          padding-left: 0.54rem;
          margin-bottom: 0.16rem;
          box-sizing: border-box;
          width: 2.3rem;
          height: 0.54rem;
          line-height: 0.38rem;
          background: url("../../../assets/common/nav-blue.png") center
            no-repeat;
          background-size: 100%;
          font-size: 0.2rem;
          font-family: Source Han Sans CN;
          font-weight: 500;
          font-style: italic;
          color: rgba(255, 255, 255, 1);
          &::before {
            content: "";
            position: absolute;
            right: 0.09rem;
            // top: -0.45rem;
            top: -80%;
            display: inline-block;
            width: 0.02rem;
            // height: 0.7rem;
            height: 130%;
            background: #fffeff;
          }
        }
        .g-nav-active {
          line-height: 0.48rem;
          background: url("../../../assets/common/nav-orige.png") center
            no-repeat;
          background-size: 100%;
        }
        .g-big-nav {
          width: 2.53rem;
          height: 0.67rem;
          line-height: 0.67rem;
          background: url("../../../assets/common/nav-big-blue.png") center
            no-repeat;
          background-size: 100%;
          &::before {
            content: "";
            display: none;
          }
        }
      }
      // .g-nav-line {
      //   position: absolute;
      //   right: 0;
      //   top: 0;
      //   width: 0.02rem;
      //   height: 100%;
      //   background: #fffeff;
      // }
    }
  }
  .g-maker-text {
    padding-left: 0.21rem;
    box-sizing: border-box;
    position: absolute;
    left: 23.68rem;
    top: 2.5rem;
    width: 2.52rem;
    height: 2.7rem;
    background: url("../../../assets/city-management/common-service/education-resource/small-kuang.png")
      center no-repeat;
    background-size: 100%;
    h3 {
      margin: 0.3rem 0 0.18rem 0;
      font-size: 0.21rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }
    .g-text-item {
      margin-bottom: 0.22rem;
      font-size: 0.18rem;
      height: 0.18rem;
      line-height: 0.18rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(223, 226, 251, 1);
      span {
        font-size: 0.22rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        font-style: italic;
        color: rgba(249, 230, 89, 1);
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
    background: url("../../../assets/city-management/common-service/education-resource/small-kuang2.png")
      center no-repeat;
    background-size: 100%;
  }
  .g-title {
    position: absolute;
    top: 0.34rem;
    left: 0.44rem;
    font-size: 0.24rem;
    color: #ffffff;
    padding: 0.15rem 0.15rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: url("../../../assets/common/panle-title.png") no-repeat;
    background-position-y: 100%;
  }
  .g-title2 {
    position: absolute;
    top: 0.6rem;
    left: 0.44rem;
    z-index: 9;
    font-size: 0.24rem;
    color: #ffffff;
    padding: 0.15rem 0.15rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: url("../../../assets/common/panle-title.png") no-repeat;
    background-position-y: 100%;
  }
  .g-small-title {
    position: relative;
    padding-left: 0.3rem;
    margin-left: 0.15rem;
    width: auto;
    height: 0.44rem;
    line-height: 0.44rem;
    font-size: 0.2rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    .g-small-tip {
      width: 0.13rem;
      height: 0.13rem;
      border: 0.02rem solid rgba(246, 210, 71, 1);
      position: absolute;
      left: 0;
      top: 0.1rem;
      box-sizing: border-box;
      &::after {
        content: "";
        display: inline-block;
        width: 0.13rem;
        height: 0.13rem;
        position: absolute;
        left: 0.05rem;
        top: 0.05rem;
        background: rgba(53, 126, 243, 1);
      }
    }
  }
  .g-num-box {
    width: 1.51rem;
    .text-box {
      height: 0.4rem;
      line-height: 0.4rem;
      overflow: hidden;
    }
    p {
      width: 100%;
      line-height: 0.2rem;
      font-size: 0.19rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      font-style: italic;
      color: rgba(224, 227, 251, 1);
      margin: 0;
      -webkit-line-clamp: 2;
      overflow: visible;
      display: inline-block;
      vertical-align: middle;
      height: auto;
    }
    .g-num-data {
      width: 1.45rem;
      height: 0.84rem;
      margin-top: -0.05rem;
      font-size: 0.23rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      font-style: italic;
      color: rgba(255, 255, 255, 1);
      background: url("../../../assets/city-management/common-service/social-security/numbox.png")
        center no-repeat;
      background-size: 100%;
      span {
        margin-right: 0.06rem;
        line-height: 0.84rem;
        font-size: 0.36rem;
        font-family: Impact;
        font-weight: bold;
        font-style: italic;
        color: rgba(248, 230, 89, 1);
      }
    }
  }
  .g-echart-box {
    width: 100%;
    height: calc(100% - 0.44rem);
    background:url('')
  }
  .g-echart-box2 {
    width: 100%;
    height: 100%;
  }
  .lb-img-box {
    position: relative;
    .lb-left-circle {
      position: absolute;
      left: 50%;
      top: 1.54rem;
      transform: translateX(-50%);
      width: 1.67rem;
      height: 0.46rem;
      background: url("../../../assets/city-management/market-management/mass-technology/circle.png") center no-repeat;
      background-size: 100% 100%;
    }
    .lb-bar {
    }
    .bar01 {
      position: absolute;
      left: 50%;
      bottom: 1.15rem;
      margin-left: -0.38rem;
      width: 0.3rem;
      // min-height: 1.77rem;
      background: url("../../../assets/city-management/market-management/mass-technology/bar01.png") center no-repeat;
      background-size: 100% 100%;
      .lb-bar-text {
        position: absolute;
        left: -1.14rem;
        width: 1.14rem;
        p {
          padding-left: 0.12rem;
          box-sizing: border-box;
          text-align: left;
          line-height: 0.25rem;
          font-size:0.16rem;
          font-family:Source Han Sans CN;
          font-weight:400;
          font-style:italic;
          color:rgba(255,255,255,1);
          &:first-child {
            font-size: 0.18rem;
            color:rgba(249,230,89,1);
          }
          &:nth-child(2) {
            position: relative;
            margin-bottom: 0.06rem;
            &::before {
              content: '';
              position: absolute;
              right: 0.28rem;
              top: 0.08rem;
              display: inline-block;
              width: 0.09rem;
              height: 0.1rem;
              background: url("../../../assets/city-management/market-management/mass-technology/right.png") center no-repeat;
              background-size: 100% 100%;
            }
          }
        }
        .lb-line {
          width: 100%;
          height: 0.2rem;
          background: url("../../../assets/city-management/market-management/mass-technology/line01.png") center no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .bar02 {
      position: absolute;
      left: 50%;
      bottom: 1.15rem;
      margin-left: 0.1rem;
      width: 0.3rem;
      // min-height: 1.77rem;
      background: url("../../../assets/city-management/market-management/mass-technology/bar02.png") center no-repeat;
      background-size: 100% 100%;
      .lb-bar-text {
        position: absolute;
        left: 0.3rem;
        width: 1.14rem;
        p {
          padding-right: 0.12rem;
          box-sizing: border-box;
          text-align: right;
          line-height: 0.25rem;
          font-size:0.16rem;
          font-family:Source Han Sans CN;
          font-weight:400;
          font-style:italic;
          color:rgba(255,255,255,1);
          &:first-child {
            font-size: 0.18rem;
            color:rgba(249,230,89,1);
          }
          &:nth-child(2) {
            position: relative;
            margin-bottom: 0.06rem;
            &::before {
              content: '';
              position: absolute;
              left: 0.3rem;
              top: 0.08rem;
              display: inline-block;
              width: 0.09rem;
              height: 0.1rem;
              background: url("../../../assets/city-management/market-management/mass-technology/left.png") center no-repeat;
              background-size: 100% 100%;
            }
          }
        }
        .lb-line {
          width: 100%;
          height: 0.2rem;
          background: url("../../../assets/city-management/market-management/mass-technology/line02.png") center no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .lb-legend-ul {
      position: absolute;
      left: 0.7rem;
      bottom: 0.6rem;
      list-style: none;
      overflow: hidden;
      li {
        position: relative;
        padding-left: 0.25rem;
        float: left;
        margin-right: 0.28rem;
        list-style: none;
        font-size:0.17rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(255,255,255,1);
        &:first-child {
          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0.03rem;
            display: inline-block;
            width: 0.15rem;
            height: 0.15rem;
            background:rgba(60,146,247,1);
            box-shadow:0px 1px 10px 0px rgba(207,220,252,0.28);
            border-radius:0.02rem;
          }
        }
        &:last-child {
          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0.03rem;
            display: inline-block;
            width: 0.15rem;
            height: 0.15rem;
            background:#F9E058;
            box-shadow:0px 1px 10px 0px rgba(207,220,116,0.28);
            border-radius:0.02rem;
          }
        }
      }
    }
  }
  .main-left-top {
    position: absolute;
    left: 0.11rem;
    top: 0.18rem;
    z-index: 9;
    width: 10.48rem;
    height: 5.87rem;
    background: url("../../../assets/city-management/market-management/mass-technology/left-top.png")
      center no-repeat;
    background-size: 100%;
    .lt-box {
      position: absolute;
      left: 0.42rem;
      top: 1rem;
      width: 9.74rem;
      height: 4.42rem;
      .lt-echart-item {
        width: 45%;
        height: 100%;
        position: relative;
        float: left;
        &:last-child {
          width: 55%;
        }
      }
    }
  }
  .main-left-bottom {
    position: absolute;
    left: 0.1rem;
    top: 5.79rem;
    z-index: 9;
    width: 10.48rem;
    height: 4.82rem;
    background: url("../../../assets/city-management/market-management/mass-technology/left-bottom.png")
      center no-repeat;
    background-size: 100%;
    .lb-box {
      position: absolute;
      left: 0.42rem;
      top: 0;
      width: 9.82rem;
      .g-title{
        left: 0;
      }
      .lb-item {
        float: left;
        width: 45%;
        height: 3.33rem;
        position: relative;
        top: 1rem;
        overflow: hidden;
        .rb-all-num {
          margin: 0.4rem 0 0 0.1rem;
          width: 2.4rem;
          height: 1.24rem;
          float: left;
          .lt-title {
            position: relative;
            font-size: 0.22rem;
            display: inline-block;
            font-family: Source Han Sans CN;
            font-weight: bold;
            font-style: italic;
            color: rgba(224, 227, 251, 1);
            padding-left: 0.31rem;
            line-height: 0.3rem;
            height: 0.3rem;
            &::before {
              content: "";
              display: inline-block;
              width: 0.24rem;
              height: 0.3rem;
              position: absolute;
              left: 0;
              top: 0;
              background: url("../../../assets/city-management/common-service/social-security/box.png")
                center no-repeat;
              background-size: 100%;
            }
          }
          .lt-num-box {
            width: 1.45rem;
            height: 0.84rem;
            font-size: 0.23rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            font-style: italic;
            text-align: center;
            color: rgba(255, 255, 255, 1);
            background: url("../../../assets/city-management/common-service/social-security/numbox.png")
              center no-repeat;
            background-size: 100%;
            span {
              margin-right: 0.06rem;
              line-height: 0.84rem;
              font-size: 0.36rem;
              font-family: Impact;
              font-weight: bold;
              font-style: italic;
              color: rgba(248, 230, 89, 1);
            }
          }
        }
        .rb-all-numb {
          margin-top: 0.2rem;
        }
      }
      .lb-item-1{
        width: 55%;
      }
    }
  }
  .lb-add-per {
    position: absolute;
    left: 0.72rem;
    bottom: 0.25rem;
    height: 0.2rem;
    line-height: 0.2rem;
    padding-left: 0.16rem;
    box-sizing: border-box;
    font-size: 0.18rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    span {
      color: #f8e659;
    }
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -0.03rem;
      width: 0.06rem;
      height: 0.06rem;
      background: #6fe8fc;
    }
  }
  .main-right-top {
    position: absolute;
    right: 0.42rem;
    top: 0.16rem;
    z-index: 9;
    width: 9rem;
    height: 5.17rem;
    background: url("../../../assets/city-management/market-management/mass-technology/right-top.png")
      center no-repeat;
    background-size: 100%;
    .rt-box {
      width: 8.5rem;
      height: 4.9rem;
      position: absolute;
      left: 0.32rem;
      top: 0rem;
      overflow: hidden;
      .rt-box-item {
        float: left;
        width: 50%;
        height: 3.9rem;
        top: 1rem;
        position: relative;
        .rt-num-title {
          margin: 0.26rem 0 0.15rem 0.3rem;
          display: inline-block;
          height: 0.28rem;
          line-height: 0.28rem;
          padding: 0 0.15rem 0 0.07rem;
          font-size: 0.17rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          font-style: italic;
          color: rgba(249, 229, 89, 1);
          border: 0.02rem solid rgba(249, 229, 89, 1);
        }
        .g-color-orige {
          color: #d5602c;
          border-color: #d5602c;
        }
        .rt-num-box {
          // height: 0.42rem;
          margin-left: 0.3rem;
          overflow: hidden;
          .g-num-text {
            margin-right: 0.02rem;
            width: 0.32rem;
            height: 0.42rem;
            border: 0.02rem solid rgba(73, 170, 244, 1);
            border-radius: 0.04rem;
            position: relative;
            float: left;
            span {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              display: inline-block;
              width: 0.27rem;
              height: 0.36rem;
              line-height: 0.36rem;
              background: rgba(34, 100, 224, 0.7);
              border-radius: 0.04rem;
              text-align: center;
              font-size: 0.4rem;
              font-family: "digital";
              font-weight: bold;
              color: rgba(255, 255, 255, 1);
              text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5);
            }
          }
          .g-num-tip {
            margin-top: 0.1rem;
            width: 0.28rem;
            height: 0.28rem;
            border: 0.02rem solid rgba(73, 170, 244, 1);
            border-radius: 0.04rem;
            position: relative;
            float: left;
            span {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              display: inline-block;
              width: 0.21rem;
              height: 0.21rem;
              line-height: 0.21rem;
              background: rgba(34, 100, 224, 0.7);
              border-radius: 0.04rem;
              text-align: center;
              font-size: 0.14rem;
              font-family: digital display tfb;
              font-weight: bold;
              color: rgba(255, 255, 255, 1);
              text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5);
            }
          }
        }
        .rt-check-box {
          position: absolute;
          left: 0.2rem;
          bottom: 0.2rem;
          width: 3.64rem;
          height: 1.13rem;
          background: rgba(12, 46, 109, 0.26);
          border: 1px solid rgba(50, 129, 242, 0.58);
          .rt-check-item {
            margin: 0.28rem 0 0.2rem 0;
            padding-left: 0.25rem;
            position: relative;
            width: 100%;
            height: 0.22rem;
            line-height: 0.22rem;
            font-size: 0.2rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            &::before {
              content: "";
              display: inline-block;
              width: 0.06rem;
              height: 0.06rem;
              position: absolute;
              left: 0.11rem;
              top: 0.08rem;
              background: rgba(111, 232, 252, 1);
              border-radius: 1px;
            }
            &:last-child {
              margin-top: 0;
            }
            span {
              color: #f8e659;
            }
          }
        }
        .g-bg-04 {
          position: absolute;
          left: 0.25rem;
          bottom: 0.75rem;
          width: 3.78rem;
          height: 0.66rem;
          z-index: -1;
          background: url("../../../assets/city-management/market-management/mass-technology/bar-bg03.png")
            center no-repeat;
          background-size: 100%;
        }
      }
    }
  }
  .main-right-bottom {
    position: absolute;
    right: 0.46rem;
    top: 4.9rem;
    z-index: 9;
    width: 8.96rem;
    height: 5.89rem;
    // width: 1048px;
    // height: 689px;
    background: url("../../../assets/city-management/market-management/mass-technology/right-bottom.png")
      center no-repeat;
    background-size: 100%;
    .rb-box {
      width: 8.5rem;
      height: 5.32rem;
      position: absolute;
      left: 0.3rem;
      top: 0;
      overflow: hidden;
      .rb-box-item {
        float: left;
        width: 45%;
        height: 4.12rem;
        margin-top: 1.2rem;
      }
      .rb-box-item-1{
        width: 55%;
        height: 4.12rem;
      }
    }
  }
}
.market-panel-box {
  position: absolute;
  bottom: 0.2rem;
  right: 9.6rem;
  z-index: 9;
}
.dialog {
  width: 14.97rem;
  height: 6.6rem;
  //display: none;
  // background:rgba(11,45,109,0.28);
  // border:1px solid rgba(49, 128, 242, 1);
  background: url("../../../assets/city-management/market-supervision/food-drug/dialog-bg@2x.png");
  background-size: 100% 100%;
  position: absolute;
  left: 14.12rem;
  top: 2.11rem;
  z-index: 100;
  padding: 0.3rem;
  .close-btn {
    width: 0.3rem;
    height: 0.3rem;
    position: absolute;
    right: 0.3rem;
    top: 0.3rem;
    cursor: pointer;
  }
  .g-small-title {
    margin-left: 0.05rem !important;
    font-size: 0.24rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
  .dialog-head {
    .form-row {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: 0.2rem 0.1rem 0 0.1rem;
      .form-cell {
        display: flex;
        display: inline-block;
        align-items: center;
        label {
          font-size: 0.18rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: rgba(223, 226, 251, 1);
          line-height: 0.38rem;
          min-width: 0.6rem;
          text-align: center;
        }
        .text-input {
          width: 2.43rem;
          line-height: 0.38rem;
          box-sizing: border-box;
          padding: 0 0.1rem;
          height: 0.38rem;
          background: rgba(11, 46, 109, 0.58);
          border: 0.01rem solid rgba(69, 143, 239, 1);
          border-radius: 0.02rem;
          font-size: 0.17rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          font-style: italic;
          color: rgba(255, 255, 255, 1);
          outline: none;
          &.date {
            width: 1.48rem;
          }
        }
        // &:nth-child(2){
        //   margin-left: .2rem;
        // }
      }
      &:nth-child(2) {
        justify-content: flex-start;
      }
      .btn {
        //margin-left: 0.3rem;
      }
    }
  }
  .dialog-body {
    height: 4rem;
    // margin-top: 0.2rem;
    overflow: auto;
  }
}
    .data-table {
      width: 100%;
      border-spacing: 0;
      //max-height: 4rem;
      overflow: hidden;
      thead {
        tr {
          background: rgba(0,102, 181, 1);
          th {
            font-size: 0.17rem;
            font-family: Source Han Sans CN;
            line-height: 0.4rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.5);
            border: 0 none;
            margin: 0;
            text-align: center;
            width:12.5%;
          }
        }
      }
      tbody {
        tr {
          background: rgba(0,102, 181, .1);
          td {
            line-height: 0.4rem;
            font-size: 0.17rem;
            border: 0 none;
            text-align: center;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            white-space: normal;
            overflow: hidden;
            max-width: 0.6rem;
            word-break: break-all;
            padding: 0 0.1rem;
            text-overflow: ellipsis;
            width:12.5%;
          }
          &:nth-of-type(even) {
            background: rgba(0,102, 181, .26);
          }
        }
      }
    }
.dialog-toggle-btn {
  width: 1.3rem;
  height: 0.3rem;
  background: rgba(11, 46, 109, 0.58);
  border: 0.01rem solid #458fef;
  border-radius: 0.15rem;
  text-align: center;
  position: absolute;
  display: inline-block;
  right: 0.53rem;
  top: 0.5rem;
  cursor: pointer;
  span {
    font-size: 0.17rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 0.3rem;
  }
  img {
    display: inline-block;
    width: 0.16rem;
    height: 0.16rem;
    position: relative;
    top: 0.02rem;
    left: 0.05rem;
  }
}
.btn {
  // width: 1.11rem;
  background: linear-gradient(
    180deg,
    rgba(198, 211, 223, 1),
    rgba(133, 145, 155, 1)
  );
  text-decoration: none;
  border-radius: 0.19rem;
  display: inline-block;
  padding: 0.07rem 0.3rem;
  font-size: 0.18rem;
  font-family: Source Han Sans CN;
  line-height: 1.4;
  text-align: center;
  font-weight: bold;
  color: rgba(255, 254, 247, 1);
  opacity: 0.8;
  &.primary {
    background: linear-gradient(
      180deg,
      rgba(99, 213, 255, 1),
      rgba(17, 116, 201, 1)
    );
  }
  &:hover {
    opacity: 1;
  }
}
.operate_btn {
  font-size: 0.17rem;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(133, 254, 255, 1);
  img {
    width: 0.13rem;
    height: 19rem;
  }
}
.table-no-data {
  color: #fce62f;
  text-align: center;
  font-size: 0.2rem;
  width: 1rem;
  margin: 0 auto;
  position: absolute;
  right: 0;
  left: 0;
  margin-top: 0.1rem;
}
.user-dos{
    margin-left: 4rem;
    display: flex;
    width: .9rem;
    height: .2rem;
    border-radius: .2rem;
    background: rgba(0,0,0,.4);
    color: #000;
    overflow: hidden;
    font-size: .15rem;
    cursor: pointer;
    > div{
      flex: 1;
    }
    .legend{
      background: #9BE9FF;
      text-align: center;
    }
    .icon{
      background: url("../../../assets/common/top.png") no-repeat center;

    }
  }
  .small-icon{
    margin-top: .2rem;
    margin-left: 4rem;
    width: 1.4rem;
    div{
      float: left;
    }
    img{
      width: .32rem;
      height: .32rem;
    }
  }
#tzsbdjqk{
  // background: url('../../../assets/city-management/market-supervision/market-supervision/bottom-chart.png') no-repeat .82rem 2.35rem;
  // background-size: 4.38rem 3.98rem;
}
.jianding-box{
  position: absolute;
  left:0;
  right:0;
  top:0.3rem;
  z-index: 1000;
  .add-jianding{
  width:1.28rem;
  height:.28rem;
  line-height: .28rem;
  font-size:.17rem;
  font-family:Source Han Sans CN;
  font-weight:400;
  color:rgba(255,255,255,.8);
  background:rgba(53,59,90,.8);
  border-radius: 0.14rem;
  display:inline-block;
  text-align: center;
  cursor: pointer;
  float: left;
  margin-left: 0.15rem;
}
.active-jianding{
  background:#3085F7;
}
}
/*.main-left-top,*/
/*.hover-div{*/
/*}*/
</style>
