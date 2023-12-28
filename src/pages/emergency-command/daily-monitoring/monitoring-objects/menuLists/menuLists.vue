<!--
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-23 15:53:30
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-08 10:01:03
 -->
<template>
  <div >
    <circle-panel :selectIndex="defalutIndex" class="heart-panel" ref="navPanel" :list="circlePanelList" @tab="circlePanelTab">
      <template slot="info-box">
        <div class="g-panel-right">
          <div class="lengend-title">
            <!-- {{circlePanelList[leftIndex].title}} -->
           <p class="lengend-title-name">{{circlePanelList[leftIndex].title}}</p>
            <div class="lengend-title-right">
              <span>范围</span>
              <div class="scoped">
                <div class="scoped-inner" @click="switchFlage=true" v-show="!switchFlage"></div>
                <div class="scoped-inner-02" @click="switchFlage=false" v-show="switchFlage"></div>
                <div class="scoped-switch" :class="{'on':switchFlage}"></div>
              </div>
              <div class="distance-scroll-box">
              <slider ref="slider" :min=0 :max=50 v-model="km" unit="公里" @slideValue="slideValue"></slider>
              </div>
            </div>
          </div>
          <div class="g-item-box lenged-item" v-for="(item,index) in circlePanelList[leftIndex].eventList" :key="index"  @click.stop="handleSelect(item)" >
            <img :src="circlePanelList[leftIndex].imgList[index]" />
            <p>{{item.name}}</p>
            <div class="check">
              <!-- <input
                @change="handleSelect(item,circlePanelList[leftIndex].value,$event)"
                type="checkbox"
                name="check"
                :id="'ck'+index"
                v-model="checkedValue"
                :value="item"
                class="check-box"
              /> -->
               <label  :class="{'sy-checked':item.check}" class="sy-check"></label>
            </div>
          </div>
        </div>
      </template>
    </circle-panel>
  </div>
</template>
<script>
import circlePanel from '@/components/legend-component2.vue'
import API from '@/api/emergency-command/menu-lists.js'
import { imgPath } from '@/utils/BasePath.js'
import slider from '@/components/process-drag.vue'
export default {
  components: {
    circlePanel,
    slider
  },
  props: {
    ceneterScope: {
      type: Object
    }
  },
  computed: {

  },
  data () {
    return {
      switchFlage: false, // 范围开关
      km: 5,

      checkedValue: [],
      selectValue: [],
      circlePanelList: [
        // eslint-disable-next-line standard/array-bracket-even-spacing
        {
          name: '自然灾害',
          title: '自然灾害',
          imgList: [],
          eventList: []
        },
        {
          name: '重大危险源',
          title: '重大危险源',
          imgList: [],
          eventList: []
        },
        {
          name: '安全生产',
          title: '安全生产',
          eventList: [],
          imgList: []
        },
        {
          name: '公共卫生',
          title: '公共卫生',
          eventList: [],
          imgList: []
        }
      ],
      leftIndex: 2,
      defalutIndex: 2,
      paramList: []
    }
  },
  mounted () {
    switch (this.$route.path) {
      case '/majorHazards':
        this.leftIndex = 1
        this.defalutIndex = 1
        break
      case '/safetyProduction':
        this.leftIndex = 2
        this.defalutIndex = 2
        break
      case '/naturalDisasters':
        this.leftIndex = 0
        this.defalutIndex = 0
        break
      case '/publicHealth':
        this.leftIndex = 3
        this.defalutIndex = 3
        break
    }
    this.getMenu()
  },
  watch: {
    switchFlage (val) {
      if (!val) { // 关闭范围选择
        // 清空选择状态
        this.circlePanelList.forEach((d) => {
          if (d.eventList.length > 0) {
            d.eventList.forEach((_d) => {
              _d.check = false
            })
          }
        })
        this.$emit('removeIcon')
        this.checkedValue = []
        this.$emit('getQueryPoint', this.checkedValue)
      } else {
        this.$emit('addIcon')
      }
    }
  },
  methods: {
    slideValue (km) {
      this.km = km
      this.$emit('getQueryPoint', this.checkedValue, km)
    },
    /// 左侧圆形菜单选择
    circlePanelTab (data) {
      this.leftIndex = data.index
      this.defalutIndex = data.index
    },
    // 右侧多选
    handleSelect (data) {
      if (!this.switchFlage || !this.ceneterScope.lon) {
        return false
      }
      if (!data.check) {
        data.check = true
        this.checkedValue.push(data)
      } else {
        data.check = false
        let index = this.checkedValue.findIndex((d) => {
          return d.value === data.value
        })
        if (index > -1) {
          this.checkedValue.splice(index, 1)
        }
      }
      let km = this.km
      this.$emit('getQueryPoint', this.checkedValue, km)
    },
    // 获取数据
    getMenu () {
      API.queryModal(this, {}).then(resp => {
        let res = resp.data.data.data
        res.forEach((item, index) => {
          item.codes.forEach(ite => {
            ite.type = item.value
            ite.check = false
          })
          switch (item.name) {
            case '安全生产':
              this.circlePanelList[2].eventList = [...item.codes]
              this.circlePanelList[2].value = item.value
              let temp3 = []
              item.codes.forEach(ite => {
                temp3.push(imgPath + ite.icon)
              })
              this.circlePanelList[2].imgList = temp3
              break
            case '重大危险源':
              this.circlePanelList[1].eventList = [...item.codes]
              this.circlePanelList[1].value = item.value
              let temp1 = []
              item.codes.forEach(ite => {
                temp1.push(imgPath + ite.icon)
              })
              this.circlePanelList[1].imgList = temp1
              break
            case '自然灾害':
              this.circlePanelList[0].eventList = [...item.codes]
              this.circlePanelList[0].value = item.value
              let temp0 = []
              item.codes.forEach(ite => {
                temp0.push(imgPath + ite.icon)
              })
              this.circlePanelList[0].imgList = temp0
              break
            case '公共卫生':
              this.circlePanelList[3].eventList = [...item.codes]
              this.circlePanelList[3].value = item.value
              let temp4 = []
              item.codes.forEach(ite => {
                temp4.push(imgPath + ite.icon)
              })
              this.circlePanelList[3].imgList = temp4
              break
          }
        })
        // this.checkedValue[0] = this.circlePanelList[this.leftIndex].eventList[0]
        // this.$emit('getQueryPoint', this.checkedValue)
        this.$refs.navPanel.init(this.circlePanelList)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.heart-panel {
    .g-panel-right {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      color: #9be9ff;
      font-size: 0.16rem;
      font-style: italic;
      justify-content: flex-start;
      padding-top: 0.1rem;
      .lengend-title {
        width: 85%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .distance-scroll-box {
          width: 1.4rem;
          margin-left: 0.13rem;
          margin-top: -0.02rem;
        }
        .lengend-title-name {
          margin-top: 0.2rem;
        }

        .lengend-title-right {
          display: flex;
          flex-direction: row;
          &>span {
            height: 0.41rem;
            line-height: 0.6rem;
            margin-left: 0.13rem;
          }
           .scoped {
            width: 0.30rem;
            height: 0.18rem;
            border-radius: 0.09rem;
            margin-top: 0.2rem;
            margin-left: 0.13rem;
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
      }
      .lenged-item-box {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
      }
      .lenged-item {
        text-align: center;
        position: relative;
        cursor: pointer;
        img {
          width: 0.43rem;
          height: 0.43rem;
        }
        .check {
          position: absolute;
          right: 0;
          top: 0;
          z-index: 12;
        }
        .sy-check {
          display: block;
          width: 0.16rem;
          height: 0.16rem;
          line-height: 0.16rem;
          position: absolute;
          border: 0.01rem solid #9be9ff;
          top: 0.06rem;
          left: 0.06rem;

        }
        .sy-checked:before {
          display: block;
          content: "\2714";
          text-align: center;
          font-size: 0.16rem;
          color: #000;
          background: #ffcf06;
        }
      }
    }
  .g-panel-right,
  .g-panel-right-2 {
    padding-top: 0.1rem;
    position: absolute;
    top: 0.1rem;
    left: 0.33em;
    width: 3.8rem;
    height: 78%;
    color: #fff;
    z-index: 99;
    overflow-y: auto;
    overflow-x: hidden;
    > p {
      margin-bottom: 0.1rem;
      font-size: 0.16rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #fff;
      letter-spacing: 1px;
    }
    > div {
      position: relative;
      width: 0.65rem;
      display: inline-block;
      text-align: center;
      margin-bottom: 0.1rem;
      margin-right: 0.2rem;
      img {
        width: 0.45rem;
        height: 0.49rem;
      }
      p {
        font-size: 0.16rem;
        font-weight: bold;
        font-style: italic;
        color: #9be9ff;
      }
      .check {
        position: absolute;
        right: 0.02rem;
        top: 0;
      }
      .sy-check {
        display: block;
        width: 0.16rem;
        height: 0.16rem;
        line-height: 0.16rem;
        cursor: pointer;
        position: absolute;
        border: 1px solid #9be9ff;
        top: 6px;
        left: 6px;
      }
      input[type="checkbox"] {
        visibility: hidden;
      }
      .check-box:checked + label:before {
        display: block;
        content: "\2714";
        text-align: center;
        font-size: 0.16rem;
        color: #000;
        background: #ffcf06;
      }
    }
  }
  .g-item-box {
    float: left;
  }
  .g-panel-right-2 {
    .panel-box {
      width: 100%;
    }
    .totalTitle {
      margin-bottom: 0.1rem;
      font-size: 0.16rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #fff;
      letter-spacing: 1px;
      text-align: left;
    }
    .totalBox {
      width: 0.65rem;
      float: left;
      margin-right: 0.2rem;
      margin-bottom: 0.1rem;
      position: relative;
    }
    img {
      width: 0.45rem;
      height: 0.49rem;
    }
    p {
      font-size: 0.16rem;
      font-weight: bold;
      font-style: italic;
      color: #9be9ff;
    }
    .check {
      position: absolute;
      right: 0.02rem;
      top: 0;
    }
    .sy-check {
      display: block;
      width: 0.16rem;
      height: 0.16rem;
      line-height: 0.16rem;
      cursor: pointer;
      position: absolute;
      border: 1px solid #9be9ff;
      top: 6px;
      left: 6px;
    }
    input[type="checkbox"] {
      visibility: hidden;
    }
    .check-box:checked + label:before {
      display: block;
      content: "\2714";
      text-align: center;
      font-size: 0.16rem;
      color: #000;
      background: #ffcf06;
    }
  }
}
</style>
