<!--
 * @Descripttion: 安全生产区县总体情况点位
 * @Author: zhangxi
 * @Date: 2020-05-08 09:32:00
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-22 10:25:18
 -->
<template>
  <div>
      <div class="makers-box">
        <!-- makerArea -->
        <maker-component v-show="makerFlag" v-for="(item, index) in makersDatas" :key="index" :makerData="item">
            <div slot="maker">
                <!-- <div class="g-maker-num">666人</div> -->
                <div class="maker-img">
                    <img @click.stop.prevent="showMarkerDetail(item, index)" src="@/assets/common/event-line.png" alt="" />
                </div>
            </div>
            <img v-show="item.showTextFlag" slot="img"  src="@/assets/common/event-icon.png" alt="" class="line2" />
            <div @mouseenter="stopBanner()" @mouseleave="startBanner()" slot="text" class="g-maker-text" v-show="item.showTextFlag">
                <div>
                  <h3>{{item.district}}安全生产隐患情况</h3>
                  <div>
                    <div v-for="(ite,i) in item.detailsList" :key="i + 'a'" class="g-list-item">
                        <p>{{ite.level}}</p>
                        <p>{{ite.count}}处</p>
                        <div class="g-list-btn" @click.stop="showListDetail(item,index,ite)"></div>
                    </div>
                  </div>
                  <div class="g-detail-box" v-if="item.listFlag">
                      <div class="g-detail-close" @click.stop="closeList(item,index)"></div>
                      <p class="g-detail-title">监测点位</p>
                      <div class="g-search-box">
                          <div class="g-search-item">
                              <p>类型：</p>
                              <div class="select" @click="naturalShow = !naturalShow" id="naturalShow01">
                                <span>{{listDataItem.typeList[activeSelect].name}}</span>
                                <ul v-show="naturalShow">
                                    <li
                                    v-for="(item01, index01) in listDataItem.typeList"
                                    :key="index01"
                                    @click.stop.prevent="handleNatrual(index01)"
                                    :class="index01 === activeSelect ? 'active' : 'normal'"
                                    >{{item01.name}}</li>
                                </ul>
                              </div>
                          </div>
                          <div class="g-search-item">
                              <p>区县：</p>
                              <div class="select" @click="naturalShow2 = !naturalShow2" id="naturalShow02">
                                <span>{{listDataItem.districtList[activeSelect2].district}}</span>
                                <ul v-show="naturalShow2">
                                    <li
                                    v-for="(item02, index02) in listDataItem.districtList"
                                    :key="index02"
                                    @click.stop.prevent="handleNatrual2(index02)"
                                    :class="index02 === activeSelect2 ? 'active' : 'normal'"
                                    >{{item02.district}}</li>
                                </ul>
                              </div>
                          </div>
                          <div class="g-search-item">
                              <p>关键字查找：</p>
                              <input type="text" v-model="serachName" />
                          </div>
                          <div class="g-search-btn" @click.stop="goSearch()">筛选</div>
                      </div>
                      <div class="g-detail-list">
                          <ul class="g-title-ul">
                              <li>类型</li>
                              <li>名称</li>
                              <li>企业名称</li>
                              <li>地址</li>
                              <li>详情</li>
                          </ul>
                          <div class="g-context-box">
                              <ul class="g-content-ul" v-for="(item03,index03) in listDataItem.detailsList" :key="index03">
                                  <li @mouseenter="showTitle($event)" @mouseleave="hideTitle">{{item03.level}}</li>
                                  <li @mouseenter="showTitle($event)" @mouseleave="hideTitle">{{item03.name}}</li>
                                  <li @mouseenter="showTitle($event)" @mouseleave="hideTitle">{{item03.enterName}}</li>
                                  <li @mouseenter="showTitle($event)" @mouseleave="hideTitle">{{item03.address || ' '}} </li>
                                  <li><div class="g-detail-go" @click.stop="goTo3dDetail(item03)"></div></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </maker-component>
        <!-- makerArea-end -->
        <maker-component v-show="makerFlagDetail" v-for="(item, index) in singlePoints" :key="index + 'b'" :makerData="item">
            <div slot="maker">
                <div class="g-img-box" @click="item.showTextFlag = !item.showTextFlag">
                    <img class="big-img" :src="item.icon02" alt="" />
                    <img class="small-img" :src="item.icon01" alt="" />
                </div>
            </div>
            <img v-if="makerFlagDetail" slot="img"  src="../../../../../assets/common/event-icon.png" alt="" class="line2" />
            <!-- 详情弹框 -->
            <div slot="text" class="g-maker-natural" v-if="makerFlagDetail">
              <div class="g-close" @click="item.showTextFlag = false"></div>
              <div>
                <h3>{{markerDetail.name}}</h3>
                <!-- <div class="g-watch-btn">实时监测查看</div> -->
                <div class="g-text-item">联系人：<span>{{markerDetail.linkman01}}</span></div>
                <div class="g-text-item g-text-item2">站点地址：<span>{{markerDetail.address}}</span></div>
                <div class="g-text-item g-text-item2"><span @click="handleOpenUrl('http://117.139.86.69:9999/Government/Login.html')" style="color: #1E9FFF; cursor: pointer">乐山市安全生产综合监管信息平台</span></div>
                <!-- <div class="g-text-item g-text-item2">水位：<span>{{markerDetail.jc1001}}mm</span></div> -->
                <!-- <p>近6h监测情况</p> -->
                <!-- <div class="natural-maker-echart" :id="item.id + 'echart'"></div> -->
                <!-- <div class="g-border-line"></div> -->
                <div class="g-text-item" style="margin: 0.3rem 0 0.03rem 0;">重点危险源：<span>{{markerDetail.num2}}</span> 条</div>
                <div class="g-text-box">
                  <div v-show="makerIndex === (i + 1)" v-for="(ite, i) in markerDetail.list" :key="i">
                    <div class="g-text-item" style="width: 100%; margin-top: 0.25rem;">危险源名称：<span>{{ite.name}}</span></div>
                    <div class="g-text-item" style="width: 50%; display: inline-block;">是否挂牌：<span>{{ite.jc05005}}</span></div>
                    <div class="g-text-item" style="width: 50%; display: inline-block;">危险源等级：<span>{{ite.type}}</span></div>
                    <div class="g-text-item" style="width: 50%; display: inline-block;">危险源类型：<span>{{ite.jc05008}}</span></div>
                    <div class="g-text-item" style="line-height: 0.20rem;">负责人：<span>{{ite.jc05006}}</span></div>
                    <div class="g-text-item" style="width: 100%;line-height: 0.20rem;">负责人电话：<span>{{ite.jc05007}}</span></div>
                  </div>
                  <div class="g-text-nav">
                    <paginate
                    :nowPage="nowPage"
                    :count="pangeCount"
                    :showFlag="false"
                    @change="handleChange">
                    </paginate>
                    <div class="g-nave-page">{{makerIndex}}/{{markerDetail.num2}}</div>
                  </div>
                </div>

              </div>
            </div>
        </maker-component>
        <div class="g-detail-box2" v-if="detailFlag">
            <div class="g-detail-close" @click.stop="detailFlag = false"></div>
            <p class="g-detail-title">监测点位</p>
            <div class="g-search-box">
                <div class="g-search-item">
                    <p>类型：</p>
                    <div class="select" @click="naturalShow = !naturalShow" id="naturalShow04">
                      <span>{{listDataItem.typeList[activeSelect].name}}</span>
                      <ul v-show="naturalShow">
                          <li
                          v-for="(item01, index01) in listDataItem.typeList"
                          :key="index01"
                          @click.stop.prevent="handleNatrual(index01)"
                          :class="index01 === activeSelect ? 'active' : 'normal'"
                          >{{item01.name}}</li>
                      </ul>
                    </div>
                </div>
                <div class="g-search-item">
                    <p>区县：</p>
                    <div class="select" @click="naturalShow2 = !naturalShow2" id="naturalShow05">
                      <span>{{listDataItem.districtList[activeSelect2].district}}</span>
                      <ul v-show="naturalShow2">
                          <li
                          v-for="(item02, index02) in listDataItem.districtList"
                          :key="index02"
                          @click.stop.prevent="handleNatrual2(index02)"
                          :class="index02 === activeSelect2 ? 'active' : 'normal'"
                          >{{item02.district}}</li>
                      </ul>
                    </div>
                </div>
                <div class="g-search-item">
                    <p>关键字查找：</p>
                    <input type="text" v-model="serachName" />
                </div>
                <div class="g-search-btn" @click.stop="goSearch()">筛选</div>
            </div>
            <div class="g-detail-list">
                <ul class="g-title-ul">
                    <li>类型</li>
                    <li>名称</li>
                    <li>企业名称</li>
                    <li>地址</li>
                    <li>详情</li>
                </ul>
                <div class="g-context-box">
                    <ul class="g-content-ul" v-for="(item03,index03) in listDataItem.detailsList" :key="index03">
                        <li @mouseenter="showTitle($event)" @mouseleave="hideTitle">{{item03.level}}</li>
                        <li @mouseenter="showTitle($event)" @mouseleave="hideTitle">{{item03.name}}</li>
                        <li @mouseenter="showTitle($event)" @mouseleave="hideTitle">{{item03.enterName}}</li>
                        <li @mouseenter="showTitle($event)" @mouseleave="hideTitle">{{item03.address || ' '}} </li>
                        <li><div class="g-detail-go" @click.stop="goTo3dDetail(item03)"></div></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
// import API from '@/api/emergency-command/natural-disasters.js'
import API from '@/api/emergency-command/major-hazards/major-hazards.js'
import leshanArea from '../../../../../../static/CesiumAssets/js/leshanArea.js'
import paginate from '@/components/paginate'
import { imgPath } from '@/utils/BasePath.js'
import makerComponent from '@/components/maker-component.vue'
export default {
  components: {
    makerComponent,
    paginate
  },
  props: {
    dataList: {
      type: Array,
      required: true
    },
    type: {
      type: Number,
      default: 1,
      required: false
    }
  },
  data () {
    return {
      makersDatas: [],
      makerFlag: true,
      timer: null,
      naturalShow: false,
      naturalShow2: false,
      activeSelect: 0,
      activeSelect2: 0,
      naturalList: [
        { name: '大渡河', value: '大渡河' },
        { name: '岷江', value: '岷江' }
      ],
      singlePoints: [],
      makerFlagDetail: false,
      markerDetail: {},
      listDataItem: {
        typeList: [{name: ''}],
        districtList: [{district: ''}],
        detailsList: []
      },
      serachName: '',
      detailFlag: false,
      makerIndex: 1,
      makerIndex2: 1,
      pangeCount: 1,
      pangeCount2: 1,
      nowPage: 1
    }
  },
  created () {
  },
  mounted () {
    this.getMapData()
  },
  beforeDestroy () {
    window._m.clear()
  },
  computed: {
    isTHREE () {
      return this.$store.getters.GET_IS_THREE
    }
  },
  watch: {
    dataList: {
      handler (a, b) {
        this.getMapData()
      },
      deep: true
    },
    isTHREE (val) {
      if (val) { // 三维
        this.makerFlag = false
        this.makerFlagDetail = true
      } else { // 二维
        this.makerFlag = true
        this.makerFlagDetail = false
      }
    }
  },
  methods: {
    // 中间地图
    showMarkerDetail (item, index) {
      this.makersDatas.forEach((ite, i) => {
        if (index !== i) {
          ite.showTextFlag = false
          ite.zIndex = 1
        }
      })
      item.showTextFlag = !item.showTextFlag
      let d = item
      d.showTextFlag = true
      d.zIndex = 10
      this.$set(this.makersDatas, index, d)
    },
    handleNatrual (index) {
      this.activeSelect = index
      this.naturalShow = false
    },
    handleNatrual2 (index) {
      this.activeSelect2 = index
      this.naturalShow2 = false
    },
    handleChange (index) {
      console.log(index)
      this.makerIndex = index
    },
    handleOpenUrl (url) {
      window.open(url, 'newWindow', 'height=1080, width=4320, top=540, left=2160')
    },
    getMapData () {
      // 区县总体情况
      console.log(this.dataList)
      if (this.dataList.length) {
        let data = this.dataList
        data.forEach((item, index) => {
          if (leshanArea[item.district]) {
            item.lon = +(leshanArea[item.district].lon)
            item.lat = +(leshanArea[item.district].lat)
            if (index === 0) {
              item.zIndex = 10
              item.showTextFlag = true
            } else {
              item.showTextFlag = false
              item.zIndex = 1
            }
            item.listFlag = false
            item.id = 'natura_' + index
            this.makersDatas.push(item)
          }
        })
        console.log(this.makersDatas)
        window._m.addMakers(this.makersDatas, (type) => {
          if (type === 1) { // 三维
            this.makerFlag = false
          } else { // 二维
            this.makerFlag = true
          }
        })
        // 区域总体信息循环显示
        this.autoBanner()
      }
    },
    // 显示list详情框
    showListDetail (item, index, ite) {
      console.log(item)
      let d = this.makersDatas[index]
      d.listFlag = true
      this.getListInfo(ite)
      this.$set(this.makersDatas, index, d)
    },
    // 关闭list详情框
    closeList (item, index) {
      let d = this.makersDatas[index]
      d.listFlag = false
      this.$set(this.makersDatas, index, d)
    },
    // 筛选
    goSearch () {
      let ite = {}
      ite.levelCode = this.listDataItem.typeList[this.activeSelect].value
      ite.code = this.listDataItem.districtList[this.activeSelect2].code
      this.getListInfo(ite)
    },
    // 获取详情list框筛选条件
    getListInfo (ite) {
      console.log(ite)
      let param = {
        type: ite.levelCode,
        district: ite.code,
        name: this.serachName,
        page: 1,
        pageSize: 200
      }
      API.AREA_NATURA_DETAIL(this, param).then((resA) => {
        let res = resA.data.data
        console.log(res)
        res.districtDetailsMap.typeList.unshift({name: '全部', value: ''})
        res.districtDetailsMap.districtList.unshift({district: '全部', code: ''})
        this.listDataItem = res.districtDetailsMap
        this.listDataItem.typeList.forEach((key, v) => {
          if (ite.levelCode === key.value) {
            this.activeSelect = v
          }
        })
        this.listDataItem.districtList.forEach((key, v) => {
          if (ite.code === key.code) {
            this.activeSelect2 = v
          }
        })
      }).catch(err => {
        console.log(err)
      })
    },
    // 获取详情list框筛选条件所有
    getListInfo2 () {
      let param = {
        type: '',
        district: '',
        name: this.serachName,
        page: 1,
        pageSize: 20
      }
      API.AREA_NATURA_DETAIL(this, param).then((resA) => {
        let res = resA.data.data
        console.log(res)
        this.detailFlag = true
        res.districtDetailsMap.typeList.unshift({name: '全部', value: ''})
        res.districtDetailsMap.districtList.unshift({district: '全部', code: ''})
        this.listDataItem = res.districtDetailsMap
      }).catch(err => {
        console.log(err)
      })
    },
    // 飞翔3d点位
    goTo3dDetail (item) {
      console.log(item)
      let position = {lon: +item.lon, lat: +item.lat}
      let temp = {}
      temp.lon = +item.lon
      temp.lat = +item.lat
      temp.id = 'single_naturn'
      temp.icon01 = imgPath + item.icon01
      temp.icon02 = imgPath + item.icon02
      temp.showTextFlag = true
      temp.makerId = 'single_naturn_echart'
      this.singlePoints = [temp]
      window._m.addMakers(this.singlePoints, (type) => {
        if (type === 1) { // 三维
          this.makerFlag = false
          this.makerFlagDetail = true
        } else { // 二维
          this.makerFlag = true
          this.makerFlagDetail = false
        }
      })
      this.showDetail(item)
      window._m.getSouthPointByDistance(position, () => {
        item.showTextFlag = true
        // this.showDetail(item)
      })
    },
    showDetail (item) {
      let param = {
        // type01: item.typeCode,
        id: item.id,
        type: 'hazard'
      }
      API.AREA_POINTS_DETAIL(this, param).then((resA) => {
        let res = resA.data.data
        this.markerDetail = res.data.baseInfo
        this.markerDetail.num2 = res.data.list.length
        this.markerDetail.list = res.data.list
        this.pangeCount = this.markerDetail.num2
      }).catch(err => {
        console.log(err)
      })
    },
    closeModel (item) {
      item.showTextFlag = false
    },
    autoBanner () {
      // 区域总体信息循环显示
      let i = 0
      this.timer = setInterval(() => {
        ++i
        if (i > this.makersDatas.length - 1) {
          i = 0
        }
        this.makersDatas.forEach((item, index) => {
          if (index !== i) {
            this.makersDatas[index].showTextFlag = false
            this.makersDatas[index].zIndex = 1
          }
        })
        let d = this.makersDatas[i]
        d.showTextFlag = true
        d.zIndex = 10
        this.$set(this.makersDatas, i, d)
      }, 5000)
    },
    stopBanner () {
      clearInterval(this.timer)
    },
    startBanner () {
      this.autoBanner()
    },
    showTitle (e) {
      this.$emit('showTitle', e)
    },
    hideTitle () {
      this.$emit('hideTitle')
    }
    // 地图结束
  }
}
</script>
<style lang="scss" scoped>
// maker
  .maker-img {
    display: block;
    // width: 1.5rem;
    // height: 0.7rem;
    cursor: pointer;
    img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
  }
  .g-maker-text {
    margin: -0.2rem 0 0 0.05rem;
    // padding-left: 0.21rem;
    font-size: 0;
    position: absolute;
    // left: 23.68rem;
    // top: 2.5rem;
    width: 3.78rem;
    padding-bottom: 0.3rem;
    padding-top: 0.2rem;
    z-index: 2;
    background: url('../../../../../assets/city-management/common-service/education-resource/small-kuang.png') center no-repeat;
    background-size: 100% 100%;
    // overflow: hidden;
    h3 {
      margin: 0.1rem 0 0.1rem 0.25rem;
      font-size:0.21rem;
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
    .g-maker-text01 {
        width: 3.19rem;
        // height: 3.03rem;
        padding-bottom: 0.3rem;
        left: 13.65rem;
        top: 5.52rem;
        padding-left: 0.2rem;
        background: url('../../../../../assets/city-management/common-service/education-resource/small-kuang2.png') center no-repeat;
        background-size: 100%;
    }
    .g-list-item {
        position: relative;
        margin: 0 auto;
        width: 3.2rem;
        height: 0.5rem;
        line-height: 0.5rem;
        border-bottom:0.01rem dashed rgba(92,187,249,0.7);
        font-size: 0;
        p {
            display: inline-block;
            line-height: 0.5rem;
            font-size:0.18rem;
            font-family:Source Han Sans CN;
            font-weight:bold;
            font-style:italic;
            color:rgba(249,230,89,1);
            text-align: left;
            &:nth-child(1) {
                width: 1.4rem;
                color:rgba(223,226,251,1);
            }
        }
        .g-list-btn {
            width: 0.17rem;
            height: 0.16rem;
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -0.08rem;
            background: url('../../../../../assets/common/detail01.png') center no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
        }
    }
    .g-detail-box {
        position: absolute;
        left: 3.8rem;
        top: -0.8rem;
        padding: 0 0.21rem;
        box-sizing: border-box;
        width: 7.7rem;
        height: 4.62rem;
        background: url('../../../../../assets/common/detail-kuang.png') center no-repeat;
        background-size: 100% 100%;
        .g-detail-title {
            margin: 0.37rem 0 0.18rem 0;
            font-size:0.22rem;
            font-family:Source Han Sans CN;
            font-weight:bold;
            text-align: left;
            color:rgba(255,255,255,1);
        }
        .g-detail-close {
            position: absolute;
            right: 0.18rem;
            top: 0.32rem;
            width: 0.25rem;
            height: 0.27rem;
            background: url('../../../../../assets/common/natural-close.png') center no-repeat;
            background-size: 100%;
            cursor: pointer;
        }
        .g-search-box {
            width: 100%;
            height: auto;
            font-size: 0;
            position: relative;
            .g-search-item {
                display: inline-block;
                width: 1.8rem;
                float: left;
                margin-right: 0.2rem;
                p {
                    font-size:0.18rem;
                    font-family:Source Han Sans CN;
                    font-weight:bold;
                    color:rgba(223,226,251,1);
                }
                .select {
                    position: relative;
                    margin-right: 0.1rem;
                    margin-top: 0.1rem;
                    background:rgba(11,46,109,0.58);
                    border-radius: 0.02rem;
                    height: 0.38rem;
                    line-height: 0.38rem;
                    border: 0.02rem solid #2368b1;
                    padding: 0 0.25rem 0 0.1rem;
                    box-sizing: border-box;
                    font-size: 0.16rem;
                    font-weight: 400;
                    color: #fff;
                    // top:0.1rem;
                    span {
                        display: inline-block;
                        width: auto;
                        height: 0.38rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    cursor: pointer;
                    &::before {
                        position: absolute;
                        top: 0.1rem;
                        right: 0.08rem;
                        content: "";
                        display: block;
                        border-top: 0.05rem solid transparent;
                        border-right: 0.05rem solid transparent;
                        border-bottom: 0.05rem solid white;
                        border-left: 0.05rem solid transparent;
                    }
                    &::after {
                        position: absolute;
                        top: 0.1rem;
                        right: 0.08rem;
                        content: "";
                        display: block;
                        border-top: 0.05rem solid #fff;
                        border-right: 0.05rem solid transparent;
                        border-bottom: 0.05rem solid transparent;
                        border-left: 0.05rem solid transparent;
                    }
                    ul {
                        position: absolute;
                        top: 0.28rem;
                        left: -0.08rem;
                        width: 100%;
                        text-align: center;
                        color: #fff;
                        font-size: 0.16rem;
                        background: url("../../../../../assets/emergency-command/overall-situation/security-situation/select_bg.png")
                        no-repeat;
                            background-size: 100% 100%;
                            padding: 0.2rem 0.1rem;
                            z-index: 100;
                        li {
                            list-style-type: none;
                            height: 0.45rem;
                            line-height: 0.45rem;
                        }
                        .active {
                            color: #ffd200;
                        }
                    }
                }
                input {
                    width: 1.8rem;
                    display: inline-block;
                    margin-top: 0.1rem;
                    height: 0.38rem;
                    line-height: 0.38rem;
                    font-size: 0.16rem;
                    color: #fff;
                    border: 0.02rem solid #2368b1;
                    padding: 0 0 0 0.1rem;
                    width: 100%;
                    box-sizing: border-box;
                    border-radius: 0.02rem;
                    background:rgba(11,46,109,0.58);
                }
            }
            .g-search-btn {
                position: absolute;
                right: 0;
                top: 0.35rem;
                width: 1.11rem;
                height: 0.38rem;
                line-height: 0.38rem;
                font-size:0.18rem;
                font-family:Source Han Sans CN;
                font-weight:bold;
                color:rgba(255,254,247,1);
                text-align: center;
                background:linear-gradient(180deg,rgba(99,213,255,1),rgba(17,116,201,1));
                border-radius:0.19rem;
                cursor: pointer;
            }
        }
        .g-detail-list {
            width: 100%;
            margin-top: 1rem;
            ul {list-style: none;}
            li {list-style: none;}
            .g-title-ul {
                width: 100%;
                height: 0.4rem;
                background:rgba(34,80,180,1);
                overflow: hidden;
                li {
                    float: left;
                    width: 20%;
                    box-sizing: border-box;
                    line-height: 0.4rem;
                    font-size:0.17rem;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                    color:rgba(255,255,255,0.5);
                    &:nth-child(1) {
                        padding-left: 0.3rem;
                        width: 15%;
                    }
                    &:nth-child(2) {
                        width: 15%;
                    }
                    &:nth-child(3) {
                        width: 30%;
                    }
                    &:nth-child(4) {
                        width: 30%;
                    }
                    &:last-child {
                        width: 10%;
                    }
                }
            }
            .g-context-box {
                width: 100%;
                height: 2.2rem;
                overflow-y: auto;
                &::-webkit-scrollbar {display:none}
                .g-content-ul {
                    width: 100%;
                    overflow: hidden;
                    &:nth-child(even) {
                        background:rgba(34,80,180,0.3);
                    }
                    li {
                        float: left;
                        height: 0.44rem;
                        width: 20%;
                        line-height: 0.44rem;
                        text-align: left;
                        box-sizing: border-box;
                        font-size:0.17rem;
                        font-family:Source Han Sans CN;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        .g-detail-go {
                            margin-top: 0.08rem;
                            margin-left: 0.04rem;
                            width: 0.21rem;
                            height: 0.21rem;
                            background: url('../../../../../assets/common/detail02.png') center no-repeat;
                            background-size: 100% 100%;
                            cursor: pointer;
                        }
                        &:nth-child(1) {
                            padding-left: 0.3rem;
                            width: 15%;
                        }
                        &:nth-child(2) {
                            width: 15%;
                        }
                        &:nth-child(3) {
                            width: 30%;
                        }
                        &:nth-child(4) {
                            width: 30%;
                        }
                        &:last-child {
                            width: 10%;
                        }
                    }
                }
            }
        }
    }
  }
  .g-img-box {
    width: 1rem;
    // height: 2rem;
    left: 0;
    top: 0;
    z-index: 1;
    cursor: pointer;
    position: relative;
    .big-img {
      width: 100%;
      height: 100%;
    }
    .small-img {
      width: 0.4rem;
      height: 0.4rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 0.25rem;
    }
  }
  .g-maker-natural {
    font-size: 0;
    padding: 0 0.16rem 0.4rem 0.3rem;
    box-sizing: border-box;
    position: relative;
    width: 4.99rem;
    // min-height: 3.5rem;
    background: url("../../../../../assets/common/natural-model.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    overflow: hidden;
    .g-close {
      position: absolute;
      right: 0.25rem;
      top: 0.25rem;
      width: 0.27rem;
      height: 0.27rem;
      background: url("../../../../../assets/common/natural-close.png") no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
    p {
      font-size:0.18rem;
      margin-top: 0.2rem;
      margin-bottom: 0;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(255,255,255,1);
    }
    .natural-maker-echart {
      width: 100%;
      height: 2.1rem;
    }
    .g-watch-btn {
      position: absolute;
      top: 1.45rem;
      right: 0.61rem;
      width: 1.51rem;
      height: 0.51rem;
      line-height: 0.51rem;
      font-size:0.16rem;
      text-align: center;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(255,255,255,1);
      cursor: pointer;
      background: url("../../../../../assets/common/natural-btn.png") no-repeat;
      background-size: 100% 100%;
    }
    h3 {
      margin-top: 0.30rem;
      padding: 0 0.35rem 0 0;
      box-sizing: border-box;
      font-size:0.22rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:0.3rem;
    }
    .g-text-item {
      display: inline-block;
      min-width: 45%;
      margin-top: 0.14rem;
      // margin-bottom: 0.13rem;
      font-size:0.16rem;
      // min-width: 50%;
      // display: inline-block;
      height: 0.16rem;
      line-height: 0.16rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(223,226,251,1);
      span {
        font-size:0.16rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        font-style:italic;
        line-height: 0.16rem;
        color:rgba(249,230,89,1);
      }
      .phone-icon {
        position: relative;
        display: inline-block;
        &::after {
          content: '';
          display: inline-block;
          position: absolute;
          top: 0;
          right: -0.25rem;
          width: 0.18rem;
          height: 0.18rem;
          background: url("../../../../../assets/common/phone.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      label {
        float: left;
        line-height: 0.16rem;
      }
      .g-address {
        width: 1.95rem;
        line-height: 0.16rem;
        float: left;
      }
    }
    .g-text-item2 {
      width: 99%;
    }
    .g-all-num {
      width: 100%;
      overflow: hidden;
      list-style: none;
      li {
        float: left;
        width: 50%;
        height: 0.96rem;
        list-style: none;
        position: relative;
        p {
          padding-left: 0.3rem;
          height:0.24rem;
          font-size:0.18rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          font-style:italic;
          color:rgba(223,227,251,1);
          &::before {
            content: '';
            display: inline-block;
            width: 0.21rem;
            height: 0.24rem;
            background: url("../../../../../assets/common/maker-text.png") no-repeat;
            background-size: 100% 100%;
            position: absolute;
            left: 0;
            top: 0;
          }
        }
        .g-num-text {
          margin-left: 0.24rem;
          width: 1.45rem;
          height: 0.72rem;
          background: url("../../../../../assets/common/num-bg.png") no-repeat;
          background-size: 100% 100%;
          line-height: 0.72rem;
          text-align: center;
          font-size:0.17rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          font-style:italic;
          color:rgba(255,255,255,1);
          span {
            font-size:0.3rem;
            font-family:Impact;
            font-weight:bold;
            font-style:italic;
            color:rgba(249,230,89,1);
          }
        }

      }
    }
    .g-border-line {
      margin: 0;
      width: 100%;
      height: 0.01rem;
      border-bottom: 0.01rem dashed rgba(72,170,244,1);
    }
    .g-text-box {
      width: calc(100% - 0.12rem);
      margin-right: 0.12rem;
      margin-bottom: 0.16rem;
      padding: 0 0.2rem;
      box-sizing: border-box;
      // min-height: 1.6rem;
      height: 2.2rem;
      overflow: hidden;
      background: url("../../../../../assets/common/maker-small-box.png") no-repeat;
      background-size: 100% 100%;
      .color-green {
        color: '#73D477'
      }
      .g-text-nav {
        width: 100%;
        margin-top: 0.35rem;
        position: relative;
        .g-nave-page {
          position: absolute;
          bottom: 0.04rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.14rem;
          color: #ffffff;
          display: inline-block;
        }
      }
    }
  }
  .g-detail-box2 {
    position: absolute;
    left: 20%;
    top: 37%;
    z-index: 3;
    padding: 0 0.21rem;
    box-sizing: border-box;
    width: 7.7rem;
    height: 4.62rem;
    background: url('../../../../../assets/common/detail-kuang.png') center no-repeat;
    background-size: 100% 100%;
    .g-detail-title {
        margin: 0.37rem 0 0.18rem 0;
        font-size:0.22rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        text-align: left;
        color:rgba(255,255,255,1);
    }
    .g-detail-close {
        position: absolute;
        right: 0.18rem;
        top: 0.32rem;
        width: 0.25rem;
        height: 0.27rem;
        background: url('../../../../../assets/common/natural-close.png') center no-repeat;
        background-size: 100%;
        cursor: pointer;
    }
    .g-search-box {
        width: 100%;
        height: auto;
        font-size: 0;
        position: relative;
        .g-search-item {
            display: inline-block;
            width: 1.8rem;
            float: left;
            margin-right: 0.2rem;
            p {
                font-size:0.18rem;
                font-family:Source Han Sans CN;
                font-weight:bold;
                color:rgba(223,226,251,1);
            }
            .select {
                position: relative;
                margin-right: 0.1rem;
                margin-top: 0.1rem;
                background:rgba(11,46,109,0.58);
                border-radius: 0.02rem;
                height: 0.38rem;
                line-height: 0.38rem;
                border: 0.02rem solid #2368b1;
                padding: 0 0.25rem 0 0.1rem;
                box-sizing: border-box;
                font-size: 0.16rem;
                font-weight: 400;
                color: #fff;
                // top:0.1rem;
                span {
                    display: inline-block;
                    width: auto;
                    height: 0.38rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                cursor: pointer;
                &::before {
                    position: absolute;
                    top: 0.1rem;
                    right: 0.08rem;
                    content: "";
                    display: block;
                    border-top: 0.05rem solid transparent;
                    border-right: 0.05rem solid transparent;
                    border-bottom: 0.05rem solid white;
                    border-left: 0.05rem solid transparent;
                }
                &::after {
                    position: absolute;
                    top: 0.1rem;
                    right: 0.08rem;
                    content: "";
                    display: block;
                    border-top: 0.05rem solid #fff;
                    border-right: 0.05rem solid transparent;
                    border-bottom: 0.05rem solid transparent;
                    border-left: 0.05rem solid transparent;
                }
                ul {
                    position: absolute;
                    top: 0.28rem;
                    left: -0.08rem;
                    width: 100%;
                    text-align: center;
                    color: #fff;
                    font-size: 0.16rem;
                    background: url("../../../../../assets/emergency-command/overall-situation/security-situation/select_bg.png")
                    no-repeat;
                        background-size: 100% 100%;
                        padding: 0.2rem 0.1rem;
                        z-index: 100;
                    li {
                        list-style-type: none;
                        height: 0.45rem;
                        line-height: 0.45rem;
                    }
                    .active {
                        color: #ffd200;
                    }
                }
            }
            input {
                width: 1.8rem;
                display: inline-block;
                margin-top: 0.1rem;
                height: 0.38rem;
                line-height: 0.38rem;
                font-size: 0.16rem;
                color: #fff;
                border: 0.02rem solid #2368b1;
                padding: 0 0 0 0.1rem;
                width: 100%;
                box-sizing: border-box;
                border-radius: 0.02rem;
                background:rgba(11,46,109,0.58);
            }
        }
        .g-search-btn {
            position: absolute;
            right: 0;
            top: 0.35rem;
            width: 1.11rem;
            height: 0.38rem;
            line-height: 0.38rem;
            font-size:0.18rem;
            font-family:Source Han Sans CN;
            font-weight:bold;
            color:rgba(255,254,247,1);
            text-align: center;
            background:linear-gradient(180deg,rgba(99,213,255,1),rgba(17,116,201,1));
            border-radius:0.19rem;
            cursor: pointer;
        }
    }
    .g-detail-list {
        width: 100%;
        margin-top: 1rem;
        ul {list-style: none;}
        li {list-style: none;}
        .g-title-ul {
            width: 100%;
            height: 0.4rem;
            background:rgba(34,80,180,1);
            overflow: hidden;
            li {
                float: left;
                width: 20%;
                box-sizing: border-box;
                line-height: 0.4rem;
                font-size:0.17rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(255,255,255,0.5);
                &:nth-child(1) {
                    padding-left: 0.3rem;
                    width: 15%;
                }
                &:nth-child(2) {
                    width: 15%;
                }
                &:nth-child(3) {
                    width: 30%;
                }
                &:nth-child(4) {
                    width: 30%;
                }
                &:last-child {
                    width: 10%;
                }
            }
        }
        .g-context-box {
            width: 100%;
            height: 2.2rem;
            overflow-y: auto;
            &::-webkit-scrollbar {display:none}
            .g-content-ul {
                width: 100%;
                overflow: hidden;
                &:nth-child(even) {
                    background:rgba(34,80,180,0.3);
                }
                li {
                    float: left;
                    height: 0.44rem;
                    width: 20%;
                    line-height: 0.44rem;
                    text-align: left;
                    box-sizing: border-box;
                    font-size:0.17rem;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    .g-detail-go {
                        margin-top: 0.08rem;
                        margin-left: 0.04rem;
                        width: 0.21rem;
                        height: 0.21rem;
                        background: url('../../../../../assets/common/detail02.png') center no-repeat;
                        background-size: 100% 100%;
                        cursor: pointer;
                    }
                    &:nth-child(1) {
                        padding-left: 0.3rem;
                        width: 15%;
                    }
                    &:nth-child(2) {
                        width: 15%;
                    }
                    &:nth-child(3) {
                        width: 30%;
                    }
                    &:nth-child(4) {
                        width: 30%;
                    }
                    &:last-child {
                        width: 10%;
                    }
                }
            }
        }
    }
  }
  .g-border-line {
    margin: 0;
    width: 100%;
    height: 0.01rem;
    border-bottom: 0.01rem dashed rgba(72,170,244,1);
  }
  .g-text-box {
    width: calc(100% - 0.12rem);
    margin-right: 0.12rem;
    margin-bottom: 0.16rem;
    padding: 0 0.2rem;
    box-sizing: border-box;
    // min-height: 1.6rem;
    height: 2.2rem;
    overflow: hidden;
    background: url("../../../../../assets/common/maker-small-box.png") no-repeat;
    background-size: 100% 100%;
    .color-green {
      color: '#73D477'
    }
    .g-text-nav {
      width: 100%;
      margin-top: 0.35rem;
      position: relative;
      .g-nave-page {
        position: absolute;
        bottom: 0.04rem;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.14rem;
        color: #ffffff;
        display: inline-block;
      }
    }
  }
</style>
