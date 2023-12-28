<!--
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-23 15:54:22
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-20 20:51:01
 -->
<template>
  <div class="operation-box-wrapper-2">
    <div class="lengend-title-right">
        <span>范围</span>
        <div class="scoped">
          <div class="scoped-inner" @click="switchFlage=true" v-show="!switchFlage"></div>
          <div class="scoped-inner-02" @click="switchFlage=false" v-show="switchFlage"></div>
          <div class="scoped-switch" :class="{'on':switchFlage}"></div>
        </div>
        <div class="distance-scroll-box">
          <slider ref="slider" :min="0" :max="50" v-model="km" unit="公里" @slideValue="slideValue"></slider>
        </div>
      </div>
    <div class="operation-content-box">
      <div class="operation-left-box">
        <div
          class="level-one-box"
          v-for="(item, index) in menulist"
          :key="index"
          :class="item.isSelected ? 'level-one-box-selected' : ''"
          @click="onOperationLeftChange(index)"
        >
          <div class="level-one-line"></div>
          <div class="level-one-text">{{item.name}}</div>
        </div>
      </div>
      <div class="operation-center-box" v-if="menuIndex==0">
        <div class="operation-classify-box" >
          <span
            class="operation-level-two"
            v-for="(item, index) in erTabList"
            :key="index"
            :class="item.isSelected ? 'operation-level-two-selected' : ''"
            @click="erTabChange(item, index)"
          >
            <template v-if="index!==1">{{item.name}}</template>
          </span>
        </div>
        <div class="operation-item-box">
          <div
            class="operation-item"
            v-for="(item, index) in erTabList[erTabIndex].data"
            :key="index"
            @click="onCheckBox(item,index)"
          >
            <div class="operation-item-top">
              <img :src="imgPath+item.icon01" />
              <div
                class="operation-check-box"
                :class="item.isSelected ? 'operation-check-box-selected' : ''"
              ></div>
            </div>
            <div class="operation-item-bottom">{{item.label}}</div>
          </div>
        </div>
      </div>
      <div class="operation-center-box" v-else>
        <div class="operation-classify-box">
          <span
            class="operation-level-two operation-level-two-selected"
          >{{menulist[menuIndex].name}}</span>
        </div>
        <div class="operation-item-box" v-if="menuIndex==1">
          <div
            class="operation-item"
            v-for="(item,index) in majorProtectionList"
            :key="index"
            @click="onCheckBox(item,index)"
          >
            <div class="operation-item-top">
              <img :src="imgPath+item.icon01" />
              <div
                class="operation-check-box"
                :class="item.isSelected ? 'operation-check-box-selected' : ''"
              ></div>
            </div>
            <div class="operation-item-bottom">{{item.label}}</div>
          </div>
        </div>
        <div class="operation-item-box" v-if="menuIndex==2">
          <div
            class="operation-item"
            v-for="(item,index) in monitoringTargetList"
            :key="index"
            @click="onCheckBox(item,index)"
          >
            <div class="operation-item-top">
              <img :src="imgPath+item.icon01" />
              <div
                class="operation-check-box"
                :class="item.isSelected ? 'operation-check-box-selected' : ''"
              ></div>
            </div>
            <div class="operation-item-bottom">{{item.label}}</div>
          </div>
        </div>
        <!-- <div class="operation-item-box" v-if="menuIndex==1">
          <div
            class="operation-item"
            v-for="(item,index) in generKeyboardlList"
            :key="index"
            @click="onCheckBox(item,index)"
          >
            <div class="operation-item-top">
              <img :src="imgPath+item.field01" />
              <div
                class="operation-check-box"
                :class="item.isSelected ? 'operation-check-box-selected' : ''"
              ></div>
            </div>
            <div class="operation-item-bottom">{{item.label}}</div>
          </div>
        </div>-->
      </div>
    </div>
    <div class="icon-box" :id="item.id" v-for="(item,index) in icons" :key="index">
      <img class="icon-img" src="@/assets/tool/end.png" />
    </div>
  </div>
</template>

<script>
import API from '@/api/emergency-command/operation-panel'
import { imgPath } from '@/utils/BasePath'
import slider from '@/components/process-drag.vue'
export default {
  name: 'operationPanel',
  components: { slider },
  props: {
    defaultMenu: {
      type: String,
      default: '社会安全'
    }
  },
  data () {
    return {
      menuIndex: 0,
      erTabIndex: 0,
      imgPath,
      menulist: [
        // 面板左侧菜单
        {
          name: '应急资源',
          isSelected: true
        },
        // {
        //   name: '突发事件',
        //   isSelected: true
        // },
        {
          name: '重点防护',
          isSelected: false
        },
        {
          name: '监测对象',
          isSelected: false
        }
      ],
      // 应急资源tab
      erTabList: [
        {
          name: '应急物资',
          isSelected: true,
          data: []
        },
        {
          name: '指挥部',
          isSelected: false,
          data: []
        },
        {
          name: '应急人力',
          isSelected: false,
          data: []
        },
        {
          name: '转移安置点',
          isSelected: false,
          data: []
        }
      ],
      majorProtectionList: [],
      monitoringTargetList: [],
      generKeyboardlList: [],
      km: 5,
      ceneterScope: {},
      icons: [],
      switchFlage: false, // 范围开关
      GLOBAL_OBJ: null,
      GLOBAL_I: null
    }
  },
  methods: {
    // 操作面板左侧菜单切换
    onOperationLeftChange (index) {
      // alert(index)
      if (index === this.menuIndex) {
        return
      }
      this.menuIndex = index
      this.menulist.forEach((item, i) => {
        if (index === i) {
          item.isSelected = true
        } else {
          item.isSelected = false
        }
      })
    },
    erTabChange (item, index) {
      if (item.isSelected) {
        return
      }
      this.erTabList.forEach((item, i) => {
        if (index === i) {
          item.isSelected = true
        } else {
          item.isSelected = false
        }
      })
      this.erTabIndex = index
    },
    // 操作面板checkbox事件
    onCheckBox (obj, i) {
      if (this.switchFlage && this.icons.length > 0) {
        this.$emit('clearAll')
        // console.log(this.GLOBAL_OBJ, this.GLOBAL_I)
        switch (this.menuIndex) {
          case 0:
            this.erTabList.forEach((obj, index) => {
              if (index !== this.erTabIndex) {
              // obj.isSelected = false
                obj.data.forEach((m, n) => {
                  m.isSelected = false
                })
              } else {
                obj.data.forEach((m, n) => {
                  if (i === n) {
                    m.isSelected = !m.isSelected
                  } else {
                    m.isSelected = false
                  }
                })
              }
            })
            break
            // case 1:
            //   this.generKeyboardlList.forEach((item, index) => {
            //     if (i === index) {
            //       item.isSelected = !item.isSelected
            //     } else {
            //       item.isSelected = false
            //     }
            //   })
            //   break
          case 1:
            this.majorProtectionList.forEach((item, index) => {
              if (i === index) {
                item.isSelected = !item.isSelected
              } else {
                item.isSelected = false
              }
            })
            break
          case 2:
            this.monitoringTargetList.forEach((item, index) => {
              if (i === index) {
                item.isSelected = !item.isSelected
              } else {
                item.isSelected = false
              }
            })
            break
        }
        this.GLOBAL_OBJ = obj
        this.GLOBAL_I = i
        this.$emit('select', obj, this.menulist[this.menuIndex].name, this.ceneterScope, this.km)
      }
    },
    getData () {
      API.GET_ALL_RESOURCE_MATERIALS(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          for (let i of res.data.data1) {
            this.erTabList[0].data.push({
              ...i,
              isSelected: false,
              type: '应急物资'
            })
          }
          for (let i of res.data.data2) {
            this.erTabList[1].data.push({
              ...i,
              isSelected: false,
              type: '指挥部信息'
            })
          }
          for (let i of res.data.data3) {
            if (i.pid !== '0') {
              this.erTabList[2].data.push({
                ...i,
                isSelected: false,
                type: '应急队伍'
              })
            }
          }
          for (let i of res.data.data4) {
            this.erTabList[3].data.push({
              ...i,
              isSelected: false,
              type: '转移安置点'
            })
          }
        }
      })
      API.GET_ALL_RESOURCE_PROTECTION(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          if (res.data.data && res.data.data.length > 0) {
            for (let i of res.data.data) {
              if (i.pid !== '0') {
                this.majorProtectionList.push({
                  ...i,
                  isSelected: false
                })
              }
            }
          }
        }
      })
      API.GET_ALL_RESOURCE_MONITOR(this, {}).then(res => {
        res = res.data
        let obj = {
          data1: '重大危险源类型',
          data2: '自然灾害监测点类型',
          data3: '安全生产类型'
        }
        if (res.serviceSuccess) {
          for (let i in res.data) {
            for (let m of res.data[i]) {
              this.monitoringTargetList.push({
                ...m,
                isSelected: false,
                type: obj[i]
              })
            }
          }
          // console.log('this.monitoringTargetList', this.monitoringTargetList)
        }
      })
      API.GENER_KEYBOARD(this, {}).then(res => {
        res = res.data
        if (res.serviceSuccess) {
          for (let i of res.data.generKeyboardList) {
            if (i.label === this.defaultMenu) {
              this.generKeyboardlList.push({
                ...i,
                isSelected: true
              })
            } else {
              this.generKeyboardlList.push({
                ...i,
                isSelected: false
              })
            }
          }
        }
      })
    },
    ///  滑动条触发
    slideValue (km) {
      this.km = km
      // console.log('km', km)
      if (this.switchFlage) {
        this.GLOBAL_OBJ.isSelected = true
        this.$emit('select', this.GLOBAL_OBJ, this.menulist[this.menuIndex].name, this.ceneterScope, this.km)
      }
    },
    // 清空所有选择状态
    clearAllStatus () {
      this.monitoringTargetList.forEach((item, index) => {
        item.isSelected = false
      })
      this.majorProtectionList.forEach((item, index) => {
        item.isSelected = false
      })
      this.erTabList.forEach((obj, index) => {
        // obj.isSelected = false
        obj.data.forEach((m, n) => {
          m.isSelected = false
        })
      })
    }
  },
  mounted () {
    // console.log('this.$axios', this.$axios)
    this.getData()
  },
  beforeDestroy () {
    this.switchFlage = false
  },
  watch: {
    // 新增范围选择
    switchFlage (val) {
      if (!val) { // 关闭范围选择
        // 清空选择状态
        this.clearAllStatus()
        // 清空maker
        this.$emit('clearAll')
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

<style lang="scss" >
.operation-box-wrapper-2 {
  width: 6.42rem;
  height: 3.98rem;
  background: url("../assets/emergency-command/emergency-command-chart/operation-bg.png")
    no-repeat center;
  background-size: 100% 100%;
  padding: 0.4rem 0.5rem 0 0.5rem;
  box-sizing: border-box;
  .operation-level-two {
    font-size: 0.16rem;
    font-weight: bold;
    color: #fff;
    margin-left: 0.15rem;
    &:first-child {
      margin-left: 0;
    }
  }
  .operation-level-two-selected {
    font-size: 0.18rem;
    color: #f8e631;
  }
  .operation-content-box {
    display: flex;
    width: 100%;
    height: 3rem;
    .operation-left-box {
      position: relative;
      margin-left: 0.2rem;
      width: 1rem;
      margin-top: 0.1rem;
      .level-one-box {
        position: absolute;
        top: 0.16rem;
        left: 0.04rem;
        width: 0.78rem;
        height: 0.6rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        .level-one-line {
          width: 0.17rem;
          height: 0.02rem;
          background: rgba(0, 211, 255, 0.6);
          margin-left: 0.08rem;
        }
        .level-one-text {
          margin-left: 0.08rem;
          width: 0.36rem;
          font-size: 0.16rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.78);
          line-height: 0.2rem;
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
          left: 0.08rem;
          top: 2.15rem;
        }
      }
      .level-one-box-selected {
        background: url("../assets/emergency-command/emergency-command-chart/operation-status-bg1.png")
          no-repeat center;
        background-size: 100% 100%;
        .level-one-text {
          font-size: 0.18rem;
          color: #ffe600;
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
      padding-right: 0.6rem;
      box-sizing: border-box;
      height: 2.5rem;
      overflow: auto;
      margin-top: .2rem;
      // margin-top: 0.5rem;
      .operation-classify-box {
        display: flex;
        align-items: center;
        margin-top: 0.14rem;
      }
      .operation-item-box {
        display: flex;
        flex-wrap: wrap;
        max-height: 3rem;
        overflow: auto;
        .operation-item {
          width: 25%;
          margin-top: 0.1rem;
          cursor: pointer;
          .operation-item-top {
            position: relative;
            img {
              width: 0.48rem;
              height: 0.48rem;
            }
            .operation-check-box {
              position: absolute;
              top: 0.1rem;
              right: 0.25rem;
              width: 0.15rem;
              height: 0.15rem;
              // border: 0.01rem solid #9be9ff;
              cursor: pointer;
              background: url("../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/checkbox@2x.png");
              background-size: 100% 100%;
              &.operation-check-box-selected {
                background-size: 100% 100%;
                background: url("../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/checkbox-active@2x.png");
              }
            }
          }
          .operation-item-bottom {
            width: 0.65rem;
            min-height: 0.35rem;
            font-size: 0.16rem;
            font-weight: 500;
            font-style: italic;
            color: #9be9ff;
            line-height: 0.2rem;
          }
        }
        &::-webkit-scrollbar {
          width: 0;
        }
      }
    }
  }

  .lengend-title-right {
    display: flex;
    flex-direction: row;
    // position: absolute;
    padding-left: 1rem;
    & > span {
      height: 0.41rem;
      line-height: 0.6rem;
      margin-left: 0.13rem;
      color:#fff;
      margin-top: .02rem;
    }
    .scoped {
      width: 0.3rem;
      height: 0.18rem;
      border-radius: 0.09rem;
      margin-top: 0.24rem;
      margin-left: 0.13rem;
      position: relative;
      .scoped-switch {
        position: absolute;
        right: 0;
        top: 0;
        width: 0.18rem;
        height: 0.18rem;
        border-radius: 0.09rem;
        background: #ffffff;
        cursor: pointer;
      }
      .on {
        left: 0;
      }
      .scoped-inner {
        position: absolute;
        left: 0;
        top: 0;
        width: 0.3rem;
        height: 0.18rem;
        border-radius: 0.09rem;
        background: #666666;
        cursor: pointer;
      }
      .scoped-inner-02 {
        position: absolute;
        left: 0;
        top: 0;
        width: 0.3rem;
        height: 0.18rem;
        border-radius: 0.09rem;
        background: #ff7e00;
        cursor: pointer;
      }
    }
  }
  .distance-scroll-box{
    width: 2rem;
    margin-left: .2rem;
  }
  .icon-box {
     position: fixed;
     z-index: 8;
     .icon-img {
       width: 0.5rem;
       height: 0.66rem;
     }
   }
}
</style>
