<!--
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-04-08 15:28:00
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-26 16:31:45
 -->
<template>
  <div class="operation-box-wrapper">
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
      <div class="operation-center-box">
        <div class="operation-classify-box">
          <span
            class="operation-level-two operation-level-two-selected"
          >{{menulist[menuIndex].name}}</span>
        </div>
              <div class="operation-item-box" v-if="menulist[menuIndex].children&&menulist[menuIndex].children.length>0">
          <div
            class="operation-item"
            v-for="(item,index) in menulist[menuIndex].children"
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
    </div>
  </div>
</template>

<script>
import {imgPath} from '@/utils/BasePath'
// import API from '../../../api/city-management/marketSupervisionMapApi'
export default {
  name: 'marketPanel',
  props: {
    defaultSubMenuId: {
      type: String,
      default: '1001'
    }
  },
  data () {
    return {
      imgPath,
      menulist: [
        // 面板左侧菜单
        {
          name: '市场主体',
          isSelected: true,
          children: []
        },
        {
          name: '食品药品',
          isSelected: false,
          children: []
        }
      ],
      menuIndex: 0
    }
  },
  methods: {
    circlePanelTab (data) {
      // let _that = this
      // this.$nextTick(function () {
      // console.log('circlePanelTab', data)
      this.menuIndex = data.index
      // })
    },
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
    /// 获取面板信息
    getMenuInfo () {
      // API.ICONS(this, {}).then((res) => {
      //   res = res.data
      //   if (res.serviceSuccess) {
      //     let list = res.data.data
      //     for (let i of list) {
      //       if (i.pid === '10') {
      //         if (this.defaultSubMenuId === i.id) {
      //           this.menulist[0].children.push({
      //             ...i,
      //             isSelected: true
      //           })
      //         } else {
      //           this.menulist[0].children.push({
      //             ...i,
      //             isSelected: false
      //           })
      //         }
      //       } else if (i.pid === '20') {
      //         if (this.defaultSubMenuId === i.id) {
      //           this.menulist[1].children.push({
      //             ...i,
      //             isSelected: true
      //           })
      //         } else {
      //           this.menulist[1].children.push({
      //             ...i,
      //             isSelected: false
      //           })
      //         }
      //       }
      //     }
      //   }
      // })
    },
    clearLastMenu (index) {
      this.menulist[index] && this.menulist[index].children.map((item) => {
        item.isSelected = false
      })
    },
    onCheckBox (item, index) {
      switch (this.menulist[this.menuIndex].name) {
        case '市场主体':
          this.clearLastMenu(1)
          if (item.isSelected === true) {
            item.isSelected = false
            // window._m.clear()
            window._m && window._m.removeHeatPointMap && window._m.removeHeatPointMap(['marketMap' + item.id], true)
          } else {
            item.isSelected = true
          }
          let arr = []
          this.menulist[this.menuIndex].children.map(item => {
            if (item.isSelected) {
              arr.push(item.id)
            }
          })
          if (arr.length > 0) {
            this.$emit('change', arr, this.menulist[this.menuIndex].name)
          } else {
            /// alert(1313)
            window._m.clear()
            // window._m && window._m.removeHeatPointMap && window._m.removeHeatPointMap([], false)
          }
          break
        case '食品药品':
          this.clearLastMenu(0)
          if (item.isSelected === true) {
            item.isSelected = false
            // window._m.clear()
            window._m && window._m.removeHeatPointMap && window._m.removeHeatPointMap(['marketMap' + item.id], true)
          } else {
            this.menulist[this.menuIndex].children && this.menulist[this.menuIndex].children.map((i, ind) => {
              i.isSelected = false
              return i
            })
            item.isSelected = true
            this.$emit('change', [item.id], this.menulist[this.menuIndex].name)
          }
          break
      }
    }
  },
  mounted () {
    this.getMenuInfo()
  }
}
</script>

<style lang='scss' scoped>
.operation-box-wrapper {
width: 5.68rem;
    height: 3.06rem;
  background: url("../../../assets/emergency-command/emergency-command-chart/operation-bg.png")
    no-repeat center;
  background-size: 100% 100%;
  padding: 0.4rem 0.5rem 0 0.5rem;
  box-sizing: border-box;
  .operation-content-box {
    display: flex;
    width: 100%;
    height: 3rem;
    .operation-left-box {
      position: relative;
      margin-left: 0.2rem;
      width: 1rem;
      margin-top: 0.3rem;
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
        background: url("../../../assets/emergency-command/emergency-command-chart/operation-status-bg1.png")
          no-repeat center;
        background-size: 100% 100%;
        .level-one-text {
          font-size: 0.18rem;
          color: #ffe600;
        }
        &:nth-child(2) {
          background-image: url("../../../assets/emergency-command/emergency-command-chart/operation-status-bg2.png");
        }
        &:nth-child(3) {
          background-image: url("../../../assets/emergency-command/emergency-command-chart/operation-status-bg3.png");
        }
        &:nth-child(4) {
          background-image: url("../../../assets/emergency-command/emergency-command-chart/operation-status-bg4.png");
        }
      }
    }
    .operation-center-box {
      flex: 1;
      padding-right: 0.6rem;
      box-sizing: border-box;
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
          .operation-item-top {
            position: relative;
            img {
              width: 0.48rem;
              height: 0.48rem;
            }
            .operation-check-box {
              position: absolute;
              top: 0.05rem;
              right: 0.05rem;
              width: 0.15rem;
              height: 0.15rem;
              // border: 0.01rem solid #9be9ff;

              background: url("../../../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/checkbox@2x.png");
              background-size: 100% 100%;
              &.operation-check-box-selected {
                background-size: 100% 100%;
                background: url("../../../assets/emergency-command/daily-monitoring/monitoring-objects/public-health/checkbox-active@2x.png");
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
}
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
</style>
