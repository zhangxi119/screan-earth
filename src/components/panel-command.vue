<!--
 * @Descripttion:
 * @Author: chenqy
 * @Date: 2020-05-22
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-25 16:25:05
 -->
<template>
  <div class="panel-content-box">
    <!-- 操作面板 -->
    <div class="natural-panel">
      <div class="user-dos" @click="panelBig = !panelBig">
        <div class="legend">图例</div>
        <div class="icon"></div>
      </div>
      <div class="operation-box-wrapper" v-show= "panelBig">
        <!-- 头部 -->
        <div class="operation-title-box">
          <div class="resource-tab-item"
               v-for="(item, index) in resourceTabList"
               v-if="!item.hidden"
               :key="index"
               :class="item.isSelected ? 'resource-tab-item-selected' : ''"
               @click="onChangeResource(item)">
            {{item.name}}
          </div>
          <div class="distance-box">
            <!--<span class="distance-title">资源核心</span>-->
            <div class="distance-scroll-box">
              <div class="scoped" @click="switchFlage = !switchFlage">
                <div class="scoped-inner" v-show="!switchFlage"></div>
                <div class="scoped-inner-02" v-show="switchFlage"></div>
                <div class="scoped-switch" :class="{'on':switchFlage}"></div>
              </div>
              <div style="width: 1.2rem">
                <slider ref="slider" :min=0 :max=50 v-model="km" unit="公里" @slideValue="slideValue"></slider>
              </div>
            </div>
            <!--<div class="distance-infinite" @click="resetKm">不限</div>-->
          </div>
        </div>
        <!-- 全部资源 -->
        <div class="operation-content-box" v-if="resourceTabValue === '默认内容'">
          <div class="operation-left-box">
            <div class="level-one-box"
                 v-for="(item, index) in operationLeftList"
                 :key="index"
                 :class="item.isSelected ? 'level-one-box-selected' : ''"
                 @click="onOperationLeftChange(index)">
              <div class="level-one-line"></div>
              <div class="level-one-text">{{item.name}}</div>
            </div>
          </div>
          <div class="operation-center-box">
            <div class="operation-classify-box">
          <span class="operation-level-two"
                v-for="(item, index) in operationLeftList[operationLeftListIndex].data"
                :key="index"
                :class="item.isSelected ? 'operation-level-two-selected' : ''"
                @click="onSelectLevelTwo(item, index)">{{operationLeftListIndex === 2 ? '':item.name}}</span>
            </div>
            <div
              :class="operationLeftListIndex === 2 ? 'operation-item-box1' : 'operation-item-box'"
              v-if="operationLeftList[operationLeftListIndex].data.length > 0">
              <!-- <div class="mmask" v-if="!switchFlage"></div> -->
              <!-- 二级菜单 -->
              <div class="operation-item"
                   v-if="operationLeftListIndex != 2"
                   v-for="(items, index) in operationLeftList[operationLeftListIndex].data[operationLevelTwoIndex].data"
                   :key="index">
                <p>{{items[0].title}}</p>
                <div class="operation-item-single">
                  <div v-for="(item, ind) in items" :key="ind">
                    <div class="operation-item-top" @click="onCheckBox(item, ind, 'first', index)">
                      <img :src="imgPath+item.icon01"/>
                      <div class="operation-check-box"
                           :class="item.isSelected ? 'operation-check-box-selected' : ''"
                      ></div>
                    </div>
                    <div class="operation-item-bottom">{{item.label}}</div>
                  </div>
                </div>
              </div>
              <!-- 监控对象二级菜单 -->
              <div class="monitor-menu" v-if="operationLeftListIndex == 2">
                <div
                  v-for="(value, ind) in operationLeftList[operationLeftListIndex].data[operationLevelTwoIndex].data"
                  :key="ind">
                  <p>{{ind === 0 ? '重大危险源' : ind === 1 ? '自然灾害监测点' : ind === 2 ? '安全生产' : '公共卫生'}}</p>
                  <div class="monitor-detail">
                    <div class="operation-item"
                         v-for="(item, index) in value"
                         :key="index">
                      <div class="operation-item-top"  @click="onCheckBox(item, index, 'monitor', ind)">
                        <img :src="imgPath+item.icon01"/>
                        <div class="operation-check-box"
                             :class="item.isSelected ? 'operation-check-box-selected' : ''"
                        ></div>
                      </div>
                      <div class="operation-item-bottom">{{item.label}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 预案资源 -->
        <div class="plan-resource" v-else>
          <div class="resource-contents" v-if="resourceData">
            <div>
              <p>紧急救援力量</p>
              <div class="resource-content">
                <div class="operation-item"
                     v-for="(item, index) in resourceData.data2"
                     :key="index">
                  <div class="operation-item-top" @click="onCheckBox(item, index, 'data2', 2)">
                    <img :src="imgPath+item.icon01"/>
                    <div class="operation-check-box"
                         :class="item.isSelected ? 'operation-check-box-selected' : ''"
                    ></div>
                  </div>
                  <div class="operation-item-bottom">{{item.label}}</div>
                </div>
              </div>
            </div>
            <div>
              <p>应急物资</p>
              <div class="resource-content">
                <div class="operation-item"
                     v-for="(item, index) in resourceData.data1"
                     :key="index">
                  <div class="operation-item-top"  @click="onCheckBox(item, index, 'data1', 0)">
                    <img :src="imgPath+item.icon01"/>
                    <div class="operation-check-box"
                         :class="item.isSelected ? 'operation-check-box-selected' : ''"
                    ></div>
                  </div>
                  <div class="operation-item-bottom">{{item.label}}</div>
                </div>
              </div>
            </div>
            <div>
              <p>转移安置点</p>
              <div class="resource-content">
                <div class="operation-item"
                     v-for="(item, index) in resourceData.data3"
                     :key="index">
                  <div class="operation-item-top"  @click="onCheckBox(item, index, 'data3', 3)">
                    <img :src="imgPath+item.icon01"/>
                    <div class="operation-check-box"
                         :class="item.isSelected ? 'operation-check-box-selected' : ''"
                    ></div>
                  </div>
                  <div class="operation-item-bottom">{{item.label}}</div>
                </div>
              </div>
            </div>
            <div>
              <p>社会保障力量</p>
              <div class="resource-content">
                <div class="operation-item"
                     v-for="(item, index) in resourceData.data4"
                     :key="index">
                  <div class="operation-item-top" @click="onCheckBox(item, index, 'data4', 4)">
                    <img :src="imgPath+item.icon01"/>
                    <div class="operation-check-box"
                         :class="item.isSelected ? 'operation-check-box-selected' : ''"
                    ></div>
                  </div>
                  <div class="operation-item-bottom">{{item.label}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 范围标记点位 -->
    <div class="icon-box" :id="item.id" v-for="(item) in icons" :key="item.id">
      <img class="icon-img" src="@/assets/tool/end.png" />
    </div>
    <!-- 面板makers 十种类型-->
    <div
      class="panel-makers-box"
      v-for="(item, index) in panelData"
      :style="{zIndex: item.id === positionId ? 9 : 8}"
      :key="index">
      <div
        class="panel-makers"
        v-for="(val, ind) in item"
        v-if="val.lon && !val.cantShow"
        :id="val.id"
        :key="ind"
        :style="{zIndex: val.idCopy === positionId ? 9 : 8}">
        <div class="img-box" @click.stop="handleSeeDetail(val.idCopy, index !== 'DETRAIL_MONITOR' ? val.type : 'monitor', val.type01 || val.typeCode)">
          <img class="inside" :class="{'inside-2d':showOutImg !== 1}" :src="imgPath+val.icon01">
          <img v-if="showOutImg === 1" class="outside" :src="imgPath+val.icon02">
        </div>
        <div class="makers-title" :style="{top: showOutImg!=1 ? '.1rem' : '-.3rem'}" :title="val.name">{{val.name}}</div>
        <!-- 下钻窗口 -->
        <div class="down-deep-box" v-if="val.idCopy === positionId">
          <modal-one
            v-if="makerBoxType === 'one'"
            :data="makerDetail"
            @close="handleCloseDetail">
            <div slot="modal-costom" class="modal-jc">
              <div class="costom-modal costom-two">
                <div class="costom-small" v-if=" makerType !== 'aid' && makerType !== '002'">
                  <span>联系人：</span>
                  <span>{{makerDetail.baseInfo.linkman01}}</span>
                </div>
              </div>
              <div class="costom-modal costom-two">
                <div class="costom-big" v-if="makerType !== '002'">
                  <span>联系电话：</span>
                  <span>{{makerDetail.baseInfo.phone01}}</span>
                  <img @click="handleCall(makerDetail.baseInfo.phone01, makerDetail.baseInfo.linkman01)" class="phone-icon" src="../assets/emergency-command/emergency-command-chart/icon-tel.png">
                </div>
              </div>
              <div class="costom-modal costom-one">
                <span>地址：</span>
                <span>{{makerDetail.baseInfo.address}}</span>
              </div>
              <!--每个不同类型的点位的特殊信息-->
              <div class="costom-modal costom-one" v-if="makerType === 'shelter'">
                <span>可容纳人数：</span>
                <span>{{makerDetail.baseInfo.zh18003}}人</span>
              </div>
              <div class="costom-modal costom-one" v-if="makerType === 'team'">
                <span>队伍规模：</span>
                <span>{{makerDetail.baseInfo.num}}人</span>
              </div>
            </div>
          </modal-one>
          <!--<modal-two></modal-two>-->
          <modal-three
            v-if="makerBoxType === 'three'"
            :data="makerDetail"
            @close="handleCloseDetail">
            <div slot="modal-costom" class="modal-jc" v-if="makerType !== '07'">
              <div class="costom-modal costom-two">
                <div class="costom-big">
                  <span>联系人：</span>
                  <span>{{makerDetail.baseInfo.linkman01 || ''}} </span>
                </div>
                <div class="costom-small"><span>联系方式：</span><span>{{makerDetail.baseInfo.phone01}}</span></div>
              </div>
            </div>
          </modal-three>
          <modal-four
            v-if="makerBoxType === 'four'"
            :data="makerDetail"
            :type="makerType"
            @handleCall="handleCall"
            @close="handleCloseDetail"></modal-four>
          <modal-five
            v-if="makerBoxType === 'five'"
            :data="makerDetail"
            :type="makerType"
            @close="handleCloseDetail">
            <div slot="modal-costom" class="modal-jc">
              <div
                @click="handleOpenUrl('http://117.139.86.69:9999/Government/Login.html')"
                class="costom-modal costom-one">
                <span style="color: #1E9FFF; cursor: pointer">乐山市安全生产综合监管信息平台</span>
              </div>
            </div>
          </modal-five>
          <modal-six
            v-if="makerBoxType === 'six'"
            :data="makerDetail"
            :type="makerType"
            :columnFirm="column[makerType]"
            @close="handleCloseDetail"></modal-six>
          <modal-seven
            v-if="makerBoxType === 'seven'"
            :data="makerDetail.baseInfo"
            @call="handleCall"
            @close="handleCloseDetail"></modal-seven>
          <!-- 水文站弹窗 -->
          <div class="kkk-jkl" v-if="makerBoxType === 'waterStation'">
            <!--<img class="line" src="../assets/common/event-icon2.png">-->
            <div class="makers-panel-content">
              <div class="makers-panel-close"><span>{{makerDetail.baseInfo.jc02005}}-{{makerDetail.baseInfo.name}}</span>
                <img @click.stop="makerBoxType = '';showDetailVideo = false" src="../assets/common/closepopicon.png">
              </div>
              <div class="one"><span>水位：</span>{{makerDetail.data.jc04004 ? makerDetail.data.jc04004+'m': '无'}}</div>
              <div class="one">
                <div><span>超警水位：</span><span :style="{color: chooseImg(makerDetail.data.jc02011, makerDetail.data.jc04004).color}">{{(makerDetail.data.jc04004 && makerDetail.data.jc02011) ? (makerDetail.data.jc04004 - makerDetail.data.jc02011).toFixed(3)+'m' : '无'}}</span></div>
                <div><span>超保水位：</span><span :style="{color: chooseImg(makerDetail.data.jc02014, makerDetail.data.jc04004).color}">{{(makerDetail.data.jc04004 && makerDetail.data.jc02014) ? (makerDetail.data.jc04004 - makerDetail.data.jc02014).toFixed(3)+'m' : '无'}}</span></div>
              </div>
              <div class="one"><span>更新时间：</span>{{makerDetail.data.jc04001}}</div>
              <div class="open-url" @click="handleOpenUrl('http://www.scsqzx.com/newApp/')">四川省水情信息服务平台</div>
              <p>点位视频</p>
              <div class="video-content-box">
                <div
                  class="one-video"
                  @click="handlePlayVideo(makerDetail.baseInfo.id, item1.jc13003, item1.jc13002)"
                  v-for="(item1, i) in makerDetail.video"
                  :key="i">
                  <span>{{item1.jc13002}}</span>
                  <img src="../assets/common/play.png">
                </div>
              </div>
              <div class="outside-video" v-if="showDetailVideo">
                <img
                  class="video-close"
                  @click="showDetailVideo = false"
                  src="../assets/common/closepopicon.png">
                <div class="video-name">{{videoName}}</div>
                <div class="maker-panle" style="z-index: 9;" :id="'d-v-'+makerDetail.baseInfo.id"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/api/emergency-command/emergency-command-chart.js'
import slider from '@/components/process-drag.vue'
import {imgPath} from '@/utils/BasePath'
import modalOne from '@/components/slackingModal/modal-one' // 下钻窗口
import modalTwo from '@/components/slackingModal/modal-two' // 下钻窗口
import modalThree from '@/components/slackingModal/modal-three' // 下钻窗口
import modalFour from '@/components/slackingModal/modal-four' // 下钻窗口
import modalFive from '@/components/slackingModal/modal-five' // 下钻窗口
import modalSix from '@/components/slackingModal/modal-six' // 下钻窗口
import modalSeven from '@/components/slackingModal/modal-seven' // 下钻窗口
export default {
  name: 'panel-command',
  components: {
    slider,
    modalOne,
    modalTwo,
    modalThree,
    modalFour,
    modalFive,
    modalSix,
    modalSeven
  },
  data () {
    return {
      waterColor: ['#FD2000', '#FF7800', '#FCE62F', '#33D5FF', '#7EFFDB'],
      resourceTabList: [
        {
          name: '默认内容',
          isSelected: true
        },
        {
          name: '预案内容',
          hidden: true,
          isSelected: false
        }
      ],
      resourceTabValue: '默认内容',
      // 面板左侧菜单
      operationLeftList: [
        {
          name: '应急资源',
          requestObj: API.GET_ALL_RESOURCE_MATERIALS,
          isSelected: true,
          data: []
        },
        {
          name: '重点防护',
          requestObj: API.GET_ALL_RESOURCE_PROTECTION,
          isSelected: false,
          data: []
        },
        {
          name: '监测对象',
          requestObj: API.GET_ALL_RESOURCE_MONITOR,
          isSelected: false,
          data: []
        }
        // {
        //   name: '紧急救援',
        //   requestObj: API.GET_ALL_RESOURCE_RESCUE,
        //   isSelected: false,
        //   data: []
        // }
      ],
      column: {
        '02': [
          {name: '河道水位(m)', width: '1.5rem', dataIndex: 'jc04004'},
          {name: '监测时间', width: '2.5rem', dataIndex: 'jc04001'}
        ],
        '04': [
          {name: '降水量(mm)', width: '1.5rem', dataIndex: 'jc04004'},
          {name: '监测时间', width: '2.5rem', dataIndex: 'jc04001'}
        ],
        '05': [
          {name: '库上水位(m)', width: '1.5rem', dataIndex: 'jc04008'},
          {name: '库下水位(m)', width: '1.5rem', dataIndex: 'jc04009'},
          {name: '蓄水量(m3)', width: '1.5rem', dataIndex: 'jc04010'},
          {name: '监测时间', width: '2.5rem', dataIndex: 'jc04001'}
        ],
        '06': [
          {name: '时段降水量(mm)', width: '1.5rem', dataIndex: 'jc04005'},
          {name: '日降水量(mm)', width: '1.5rem', dataIndex: 'jc04006'},
          {name: '时段长', width: '1.5rem', dataIndex: 'jc04007'},
          {name: '监测时间', width: '2.5rem', dataIndex: 'jc04001'}
        ]
      },
      planResource: [], // 预案资源
      resourceData: [],
      operationLeftListIndex: 0,
      operationLevelTwoIndex: 0,
      km: 5, // 操作面板，默认5公里
      ceneterScope: {},
      icons: [],
      switchFlage: false,
      panelBig: false,
      showDetailVideo: false, // 水文站视频显示
      panelData: {},
      imgPath: imgPath,
      positionId: '',
      makerBoxType: '', // 点位弹窗类型
      makerType: '', // 当前点位类型
      makerDetail: {}, // 点位详细数据
      showOutImg: 0, // 展示图标外层
      swfurl: './static/libs/flowplayer/flowplayer-3.2.18.swf'
    }
  },
  mounted () {
    this.getPlanResource()
    this.getOperationList()
  },
  methods: {
    // 获取预案资源
    getPlanResource () {
      API.GET_PLAN_RESOUCE(this, {eventId: 1}).then((res) => {
        if (res.data.serviceSuccess) {
          let data = res.data.data
          this.resourceData = data
        } else {
          console.log(res.data.errors)
        }
      })
    },
    // 获取物资
    getOperationList () {
      this.operationLeftList[0].requestObj(this, {}).then((res) => {
        if (res.data.serviceSuccess) {
          let data = res.data.data
          this.operationLeftList[0].data = [] // 应急资源 data2，data3 有pid需要转换 --- 未做
          this.operationLeftList[0].data.push({name: '应急物资', data: [data.data1], isSelected: true})
          // this.operationLeftList[0].data.push({name: '指挥部', data: [data.data2], isSelected: false})
          this.operationLeftList[0].data.push({name: '应急人力', data: this.formatterTwoMenu(data.data3), isSelected: false})
          this.operationLeftList[0].data.push({name: '转移安置点', data: [data.data4], isSelected: false})
          this.operationLeftList[0].data.push({name: '社会保障', data: [data.data5], isSelected: false})
        }
      })
    },
    // 全部资源清空面板勾选状态
    clearCheckedBox (data) {
      for (let i = 0, j = data.length; i < j; i++) {
        if (Object.prototype.toString.call(data[i]) === '[object Object]') {
          this.clearCheckedBox(data[i].data)
        } else if (Object.prototype.toString.call(data[i]) === '[object Array]') {
          for (let m = 0, k = data[i].length; m < k; m++) {
            data[i][m].isSelected = false
          }
        }
      }
    },
    // 预案资源清空面板勾选状态
    clearCheckedBox1 () {
      for (let k in this.resourceData) {
        if (this.resourceData[k]) {
          for (let i = 0; i < this.resourceData[k].length; i++) {
            this.resourceData[k][i].isSelected = false
          }
        }
      }
    },
    // 默认资源与预案资源切换
    onChangeResource (obj) {
      if (obj.name === this.resourceTabValue) {
        return
      }
      this.resourceTabValue = obj.name
      this.resourceTabList.forEach((item, index) => {
        if (item.name === obj.name) {
          item.isSelected = true
        } else {
          item.isSelected = false
        }
      })
      // 清空点位信息
      this.panelData = {}
      this.makerBoxType = ''
      // 清空面板勾选状态
      this.clearCheckedBox(this.operationLeftList)
      this.clearCheckedBox1()
    },
    // 操作面板 -- 左侧菜单切换
    onOperationLeftChange (index) {
      this.operationLevelTwoIndex = 0
      if (index === this.operationLeftListIndex) {
        return
      }
      this.operationLeftListIndex = index
      this.operationLeftList.forEach((item, i) => {
        if (index === i) {
          item.isSelected = true
        } else {
          item.isSelected = false
        }
      })
      if (!this.operationLeftList[index].data.length) { // 如果data有数据，则不再从后台获取
        this.operationLeftList[index].requestObj(this).then((res) => {
          if (res.data.serviceSuccess) {
            let data = res.data.data
            this.operationLeftList[index].data = []
            switch (index) {
              case 0:
                this.operationLeftList[index].data.push({name: '应急物资', data: [data.data1], isSelected: true})
                // this.operationLeftList[index].data.push({name: '指挥部', data: [data.data2], isSelected: false})
                this.operationLeftList[index].data.push({name: '应急人力', data: this.formatterTwoMenu(data.data3), isSelected: false})
                this.operationLeftList[index].data.push({name: '转移安置点', data: [data.data4], isSelected: false})
                this.operationLeftList[index].data.push({name: '社会保障', data: [data.data5], isSelected: false})
                break
              case 1: // 重点 防护 data有pid需要转换 --- 未做，用commonUtils.translateDataToTree转换
                data = data.data
                // data = commonUtils.translateDataToTree(data)
                this.operationLeftList[index].data.push({name: '重点防护目标', data: this.formatterTwoMenu(data), isSelected: true})
                break
              case 2: // 监测 对象
                this.operationLeftList[index].data.push({name: '监测对象', data: [data.data1, data.data2, data.data3, data.data4], isSelected: true})
                break
              case 3: // 紧急 救援
                data = data.data
                this.operationLeftList[index].data.push({name: '紧急救援', data: [data], isSelected: true})
                break
            }
          }
        })
      }
    },
    // 操作面板右侧title切换
    onSelectLevelTwo (item, index) {
      if (item.isSelected) {
        return
      }
      // 切换title，清空之前选择的点位信息
      this.resourceId = []
      switch (index) {
        case 0:
          this.pointType = 'WAREHOUSE_BY_TYPE'
          break
        case 1:
          this.pointType = 'WAREHOUSE_BY_TYPE'
          break
        case 2:
          this.pointType = 'WAREHOUSE_BY_TYPE'
          break
        case 3:
          this.pointType = 'SHELTER_LIST'
          break
        default:
          this.pointType = 'SOCIAL_RESOURECE_BY_TYPE'
          break
      }
      this.operationLeftList[this.operationLeftListIndex].data.forEach((obj, i) => {
        if (index === i) {
          obj.isSelected = true
        } else {
          obj.isSelected = false
        }
      })
      this.operationLevelTwoIndex = index
    },
    /**
     * 根据勾选面板向地图撒点
     * @param type 撒点类型
     */
    pointsToMap () {
      if (!this.resourceId || !this.ceneterScope.lon || !this.switchFlage) {
        return false
      }
      this.resourceId.forEach(re => {
        let type = re.type
        let ids = re.ids.toString()
        // let eventId = this.eventDetail && this.eventDetail.id
        // let radii = this.km
        // let lon = this.eventDetail && this.eventDetail.lon
        // let lat = this.eventDetail && this.eventDetail.lat
        // eventId: eventId, radii, lon, lat
        API[type](this, {type: ids}).then(res => {
          if (res.data.serviceSuccess) {
            let datas = res.data.data.data || []
            this.$set(this.panelData, re.type, datas)
            datas.map((re, index) => {
              re.idCopy = re.id
              re.id = re.id + index
            })
            // 计算点位是否在范围之内
            for (let key in this.panelData) {
              if (this.panelData[key]) {
                for (let i = 0; i < this.panelData[key].length; i++) {
                  let item = this.panelData[key][i]
                  if (item.lon) {
                    if (window._m.getSpaceDistanceByLon([this.ceneterScope, {lon: +item.lon, lat: +item.lat}], this.km)) {
                      item.cantShow = false
                    } else {
                      item.cantShow = true
                    }
                  }
                }
              }
            }
            window._m.addMakers(datas, (flag) => {
              this.showOutImg = flag
            })
          } else {
            console.log(res.data.errors)
          }
        })
      })
    },
    // 操作面板checkbox事件
    onCheckBox (obj, index, type, pind) {
      if (!this.ceneterScope.lon || !this.switchFlage) {
        return false
      }
      // 撒点调用的接口名称
      // HEADER_QUARTERS_BY_ID
      let menuEvent = [
        ['WAREHOUSE_BY_TYPE', 'EMERGENCY_TEAM_BY_TYPE', 'SHELTER_LIST', 'SOCIAL_RESOURECE_BY_TYPE'],
        ['MAJOR_PROJECTTION_BY_TYPE'],
        ['HAZARD_BY_TYPE', 'MONITORING_BY_TYPE', 'SATETY_PRODUCTION_BY_TYPE', 'PUBLIC_HEALTH_BY_TYPE'],
        ['EMERGENCY_AID_BY_TYPE']
      ]
      if (obj.isSelected) {
        obj.isSelected = !obj.isSelected
      } else {
        obj.isSelected = true
      }
      let apiType = '' // 调用接口类型
      // 全部资源选择
      if (type === 'first') {
        let p = this.operationLeftList[this.operationLeftListIndex].data[this.operationLevelTwoIndex].data[pind]
        this.$set(p, index, obj)
        let ids = [] // 选中的资源点id
        p.map(re => {
          if (re.isSelected) {
            ids.push(re.id)
          }
        })
        apiType = menuEvent[this.operationLeftListIndex][this.operationLevelTwoIndex]
        this.resourceId = [{type: apiType, ids}]
      } else if (type === 'monitor') {
        let p = this.operationLeftList[this.operationLeftListIndex].data[this.operationLevelTwoIndex].data
        let m = p[pind]
        this.$set(m, index, obj)
        let ids = [] // 选中的资源点id
        // 构造点击点位 数据类型
        apiType = menuEvent[this.operationLeftListIndex][pind]
        let objs = {
          type: apiType,
          ids: []
        }
        for (let j = 0; j < p[pind].length; j++) {
          if (p[pind][j].isSelected) {
            objs.ids.push(p[pind][j].id)
          }
        }
        ids.push(objs)
        this.resourceId = ids
      } else {
        // 预案资源选择
        let p = this.resourceData[type]
        let apiType = menuEvent[0][pind]
        this.$set(p, index, obj)
        let objs = {
          type: apiType,
          ids: []
        }
        for (let j = 0; j < p.length; j++) {
          if (p[j].isSelected) {
            objs.ids.push(p[j].id)
          }
        }
        this.resourceId = [objs]
      }
      // 获取选中的数组，并调用接口
      this.pointsToMap()
    },
    // 控制区域
    slideValue (km) { // 区域范围
      this.km = km
      this.pointsToMap()
    },
    formatterTwoMenu (data) {
      let arr = []
      let obj = {}
      let t = ''
      data.map(re => {
        if (re.pid === '0') {
          if (!obj[re.id]) {
            obj[re.id] = []
            t = re.label
          }
        } else {
          re.title = t
          obj[re.pid].push(re)
        }
      })
      for (let key in obj) {
        arr.push(obj[key])
      }
      return arr
    },
    // 点击maker出现详细信息
    handleSeeDetail (id, type, type01) {
      this.positionId = id
      console.log(id, type, type01)
      // 弹窗分类样式总和
      let types = {
        goods: 'three',
        warehouse: 'three',
        team: 'one',
        shelter: 'one',
        social: 'one',
        '007': 'three',
        headerquarter: 'four',
        protection: 'four',
        hazard: 'five',
        monitor: '',
        '01': 'four',
        '02': 'six',
        '03': 'four',
        '04': 'six',
        '05': 'six',
        '06': 'six',
        '07': 'waterStation', // 水位站弹窗
        '002': 'one',
        '003': 'seven',
        safety: 'five',
        aid: 'one'
      }
      if (type === 'monitor' || type === 'publichealth') {
        this.makerType = type01
      } else if (type === 'social') {
        if (type01 === '007') {
          this.makerType = type01
        } else {
          this.makerType = type
        }
      } else {
        this.makerType = type
      }
      // this.makerType = type01 || type
      // 根据后台返回的type 和 type01 确定弹窗样式
      let eId = this.eventDetail ? this.eventDetail.id : ''
      console.log(this.makerBoxType)
      API.DETAIL_OF_LOCATION(this, { id: id, type: type, eventId: eId, type01: type01 }).then(res => {
        if (res.data.serviceSuccess) {
          let data = res.data.data
          if (Object.keys(res.data.data).length) {
            this.makerDetail = data.data
            this.makerBoxType = types[this.makerType]
          } else {

          }
        } else {
          console.log(res.data.errors)
        }
      })
    },
    // 关闭maker详细信息
    handleCloseDetail () {
      this.makerBoxType = ''
    },
    // 水文站播放视频
    handlePlayVideo (id, url, name) {
      this.showDetailVideo = false
      this.videoName = name
      setTimeout(() => {
        this.showDetailVideo = true
        this.$nextTick(() => {
          this.playVideo('d-v-' + id, url)
        })
      })
    },
    // 播放视频
    playVideo (id, url) {
      window.$f(id, this.swfurl, {
        clip: {
          url: url,
          autoPlay: true,
          autoBuffering: true
        },
        plugins: {
          controls: null
        }
      })
    },
    // 选择图片
    chooseImg (num0, num1) {
      if (!num0) {
        return {
          color: this.waterColor[4]
        }
      }
      let l = (+num1) - (+num0)
      let index = -1
      if (l > -0.25) {
        index = 0
      } else if (l <= -0.25 && l > -0.5) {
        index = 1
      } else if (l <= -0.5 && l > -1) {
        index = 2
      } else if (l <= -1 && l >= -2) {
        index = 3
      } else {
        index = 4
      }
      let obj = {
        color: this.waterColor[index]
      }
      return obj
    },
    // 拨打电话
    handleCall (phone, name) {
      console.log(phone, name)
      // this.$emit('handleCall', phone, name)
    }
  },
  watch: {
    // 新增范围选择
    switchFlage (val) {
      if (!val) { // 关闭范围选择
        // 清空选择状态
        this.clearCheckedBox(this.operationLeftList)
        this.clearCheckedBox1()
        // 清空maker
        this.panelData = {}
        this.ceneterScope = {}
        window._m.clearToolMakers(this.icons)
        this.icons = []
        this.$store.commit('SET_CURSOR', false)
      } else {
        this.$store.commit('SET_CURSOR', true)
        window._m.addIcon((o) => {
          let {longitude, latitude} = window._m.transWgs84(o.position)
          this.ceneterScope = {
            lon: longitude,
            lat: latitude
          }
          this.icons.push(o)
          this.$store.commit('SET_CURSOR', false)
          window._m.addToolsMakers(this.icons)
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .panel-content-box{
    .icon-box {
      position: absolute;
      z-index: 15;
      .icon-img {
        width: 0.5rem;
        height: 0.66rem;
      }
    }
    .natural-panel{
      position: absolute;
      bottom: .5rem;
      right: 8rem;
      z-index: 99999;
      .user-dos{
        margin-left: 4.5rem;
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
          background: url("../assets/common/top.png") no-repeat center;

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
    }
    .operation-box-wrapper {
      z-index: 3;
      width: 6.42rem;
      height: 3.98rem;
      background: url("../assets/emergency-command/emergency-command-chart/operation-bg.png") no-repeat center;
      background-size: 100% 100%;
      padding: 0.4rem 0.5rem 0 0.5rem;
      box-sizing: border-box;
      .operation-title-box {
        display: flex;
        padding-left: 0.58rem;
        box-sizing: border-box;
        .resource-tab-item {
          width:0.82rem;
          height:0.25rem;
          line-height: 0.25rem;
          font-size:0.16rem;
          font-weight:500;
          color: #FFF;
          text-align: center;
          margin-left: 0.05rem;
          margin-top: 0.25rem;
        }
        .resource-tab-item-selected {
          background-color: #E55711;
          border-radius: 0.13rem;
        }
        .distance-box {
          flex: 1;
          display: flex;
          margin-left: 0.05rem;
          margin-top: .05rem;
          font-size:0.14rem;
          font-weight:400;
          font-style:italic;
          color: #DFE2FD;
          height: 0.5rem;
          .distance-title {
            width: 0.65rem;
            padding-top: .22rem;
          }
          .distance-scroll-box {
            display: flex;
            align-items: end;
            width: 1.8rem;
            margin-left: 0.07rem;
            .scoped {
              width: 0.3rem;
              height: 0.18rem;
              border-radius: 0.09rem;
              margin: .2rem .13rem 0;
              position: relative;
              .scoped-switch {
                position: absolute;
                right: 0;
                top: 0;
                width: 0.18rem;
                height: 0.18rem;
                border-radius: 0.09rem;
                background: #FFFFFF;
                cursor: pointer;
              }
              .on {
                left: 0;
              }
              .scoped-inner {
                position: absolute;
                left: 0;
                top: 0;
                width: 0.30rem;
                height: 0.18rem;
                border-radius: 0.09rem;
                background:#666666;
                cursor: pointer;
              }
              .scoped-inner-02 {
                position: absolute;
                left: 0;
                top: 0;
                width: 0.30rem;
                height: 0.18rem;
                border-radius: 0.09rem;
                background:#FF7E00;
                cursor: pointer;
              }
            }
          }
          .distance-infinite {
            width: 0.52rem;
            height: 0.25rem;
            margin-top: .3rem;
            line-height: 0.25rem;
            font-size: 0.14rem;
            margin-left: .1rem;
            font-style: italic;
            color:#DFE2FD;
            background:#00ABFB;
            border-radius: 0.13rem;
            text-align: center;
            cursor: pointer;
          }
        }
      }
      .operation-content-box {
        display: flex;
        width: 100%;
        height: 3rem;
        .operation-left-box {
          position: relative;
          margin-left: 0.1rem;
          width: 1rem;
          .level-one-box {
            position: absolute;
            top: 0.16rem;
            left: 0.04rem;
            width: 0.78rem;
            height: 0.49rem;
            display: flex;
            align-items: center;
            cursor: pointer;
            .level-one-line {
              width:0.17rem;
              height:0.02rem;
              background:rgba(0,211,255,0.6);
              margin-left: 0.08rem;
            }
            .level-one-text {
              margin-left: 0.08rem;
              width: 0.36rem;
              font-size:0.16rem;
              font-weight:500;
              color:rgba(255,255,255,.78);
              line-height:0.2rem;
            }
            &:nth-child(2) {
              left: -0.05rem;
              top: 0.83rem;
            }
            &:nth-child(3) {
              left: -0.03rem;
              top: 1.55rem;
            }
            &:nth-child(4) {
              left: 0.1rem;
              top: 2.15rem;
            }
          }
          .level-one-box-selected {
            background: url("../assets/emergency-command/emergency-command-chart/operation-status-bg1.png") no-repeat center;
            background-size: 100% 100%;
            .level-one-text {
              font-size: 0.18rem;
              color: #FFE600;
            }
            &:nth-child(2) {
              background-image: url("../assets/emergency-command/emergency-command-chart/operation-status-bg2.png");
            }
            &:nth-child(3) {
              background-image: url("../assets/emergency-command/emergency-command-chart/operation-status-bg3.png");
            }
            &:nth-child(4) {
              background-image: url("../assets/emergency-command/emergency-command-chart/operation-status-bg4.png");
            }

          }
        }
        .operation-center-box {
          flex: 1;
          margin-right: 0.3rem;
          height: 2.6rem;
          overflow-y: auto;
          .operation-classify-box {
            display: flex;
            align-items: center;
            margin-top: 0.14rem;
            .operation-level-two {
              font-size:0.16rem;
              font-weight:bold;
              color:#FFF;
              margin-left: 0.1rem;
              cursor: pointer;
              &:first-child {
                margin-left: 0;
              }
            }
            .operation-level-two-selected {
              font-size: 0.18rem;
              color: #F8E631;
            }

          }
          .operation-item-box {
            position: relative;
            .mmask{
              position: absolute;
              width: 100%;
              height: 100%;
              z-index: 9;
            }
            .operation-item {
              > p{
                color: #fff;
                font-size: .17rem;
                margin-top: .1rem;
              }
              .operation-item-single{
                display: flex;
                flex-wrap: wrap;
                > div {
                  width: 25%;
                  margin-top: 0.18rem;
                }
              }
              .operation-item-top {
                position: relative;
                cursor: pointer;
                img {
                  width: 0.48rem;
                  height: 0.48rem;
                }
                .operation-check-box {
                  position: absolute;
                  top: 0.1rem;
                  right: 0.25rem;
                  width:0.15rem;
                  height:0.15rem;
                  border:0.01rem solid #9BE9FF;
                }
                .operation-check-box-selected{
                  background: #FFD200;
                  text-align: center;
                  &::after{
                    position: absolute;
                    top: -.05rem;
                    font-size: .18rem;
                    right: 0rem;
                    font-weight: bold;
                    content: '\2714';
                    color: #000;
                  }
                }
              }
              .operation-item-bottom {
                width: 80%;
                height: 0.35rem;
                font-size: 0.16rem;
                font-weight: 500;
                font-style: italic;
                color: #9BE9FF;
                line-height:0.2rem;
                text-align: center;
              }
            }
          }
          .operation-item-box1 {
            p{
              color: #fff;
              font-size: .18rem;
              margin-top: .1rem;
            }
            .monitor-detail{
              display: flex;
              flex-wrap: wrap;
            }
            .operation-item {
              width: 25%;
              margin-top: 0.18rem;
              .operation-item-top {
                position: relative;
                cursor: pointer;
                img {
                  width: 0.48rem;
                  height: 0.48rem;
                }
                .operation-check-box {
                  position: absolute;
                  top: 0.1rem;
                  right: 0.25rem;
                  width:0.15rem;
                  height:0.15rem;
                  border:0.01rem solid #9BE9FF;
                }
                .operation-check-box-selected{
                  background: #FFD200;
                  text-align: center;
                  &::after{
                    position: absolute;
                    top: -.05rem;
                    font-size: .18rem;
                    right: 0rem;
                    font-weight: bold;
                    content: '\2714';
                    color: #000;
                  }
                }
              }
              .operation-item-bottom {
                width: 80%;
                height:0.35rem;
                font-size:0.16rem;
                font-weight:500;
                font-style:italic;
                color:#9BE9FF;
                line-height:0.2rem;
              }
            }
          }
        }
      }
    }
    .panel-makers{
      position: absolute;
      cursor: pointer;
      /*width: 1rem;*/
      /*height: 1.3rem;*/
      margin-top: -1rem;
      margin-left:-0.5rem;
      .down-deep-box{
        position: absolute;
        margin-left: 1.5rem;
        margin-top: -1rem;
        .kkk-jkl{
          margin-top: -1.3rem;
          margin-left: .35rem;
          >img{
            position: absolute;
            top: .8rem;
            left: -1rem;
            width: .8rem;
            height: .8rem;
          }
        }
        .makers-panel-content{
          width: 4rem;
          float: left;
          margin-top: 3rem;
          margin-left: 1.8rem;
          background: url("../assets/common/win-info-icon-02.png") no-repeat;
          background-size: 100% 100%;
          padding: .5rem .3rem;
          color: #fff;
          transform: translate(-50%, -50%);
          .makers-panel-close{
            font-size: .22rem;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            img{
              cursor: pointer;
              width: .3rem;
              height: .3rem;
            }
          }
          .one{
            display: flex;
            color: #DFE2FD;
            font-size: .18rem;
            mamrgin: .05rem 0;
            > div{
              flex: 1;
              margin-top: .17rem;
              span:nth-child(2){
                color: #FCE62F;
              }
            }
          }
          p{
            font-size: .19rem;
            font-weight: bold;
          }
          .open-url{
            cursor: pointer;
            color: #007DDB;
            font-size: .16rem;
            margin: .05rem 0;
          }
          .video-content-box{
            max-height: 1.5rem;
            overflow-y: auto;
            .one-video{
              color: #DFE2FD;
              font-size: .18rem;
              display: flex;
              justify-content: space-between;
              padding: .18rem 0;
              border-bottom: .01rem dashed #30BDFF;
              img{
                width: .24rem;
                height: .24rem;
                cursor: pointer;
              }
            }
          }
          .outside-video{
            position: absolute;
            z-index: 9;
            left: 5rem;
            top: 2rem;
            padding: 0.2rem;
            background: url("../assets/city-management/city-facilities/notice-bg.png")
            center no-repeat;
            background-size: 100% 100%;
            .video-name{
              width: 4rem;
              font-size: .16rem;
              color: #fff;
              z-index: 99;
            }
            .video-close{
              position: absolute;
              top: .24rem;
              left: 5rem;
              z-index: 10;
              cursor: pointer;
              width: .3rem;
              height: .3rem;
            }
            .maker-panle{
              margin-top: .1rem;
              width: 5.2rem;
              height: 3.8rem;
            }
          }
        }
      }
      &:hover{
        z-index: 999 !important;
      }
      .img-box:hover ~ .makers-title{
        display: block;
      }
      .makers-title{
        display: none;
        position: absolute;
        top: .1rem;
        left: 50%;
        color: #fff;
        font-size: .16rem;
        padding: .03rem .2rem;
        white-space: nowrap;
        background-color: rgba(0,72,107,.5);
        border: .02rem solid rgba(103, 207, 255, .75);
      }
      .inside{
        position: absolute;
        left: .35rem;
        top: .28rem;
        z-index: 2;
        width: .35rem;
        height: .35rem;
      }
      .inside-2d {
        top: .6rem;
      }
      .outside{
        position: absolute;
        top: 0;
        left: 0;
        width: 1rem;
        height: 1.2rem;
      }
    }
  }
</style>
