<!--
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-10 11:54:59
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-07 20:55:14
 -->
<template>
  <div>
    <circle-panel class="heart-panel" ref="navPanel" :list="circlePanelList" @tab="circlePanelTab">
      <template slot="info-box" v-if="leftIndex !== 1">
        <div class="g-panel-right">
          <p>{{circlePanelList[leftIndex].title}}</p>
          <div v-for="(item,index) in circlePanelList[leftIndex].eventList" :key="index">
            <label :for="'ck'+index">
              <img :src="circlePanelList[leftIndex].imgList[index]" />
            </label>
            <p>{{item.name}}</p>
            <div class="check">
              <input
                @click.stop="handleSelect(item,circlePanelList[leftIndex].value,$event)"
                type="checkbox"
                name="check"
                :id="'ck'+index"
                v-model="checkedValue"
                :value="item.name"
                class="check-box"
              />
              <label :for="'ck'+index" class="sy-check"></label>
            </div>
          </div>
        </div>
      </template>
      <template slot="info-box" v-else>
        <div class="g-panel-right-2">
          <div
            class="panel-box"
            v-for="(item,index) in circlePanelList"
            :key="index"
            v-if="index !== 1"
          >
            <p class="totalTitle">{{item.name}}</p>
            <div
              class="totalBox"
              v-for="(newItem,newIndex) in item.eventList"
              :key="index+newIndex"
            >
              <label :for="'ck'+index+newIndex">
                <img :src="item.imgList[newIndex]" />
              </label>
              <p>{{newItem.name}}</p>
              <!-- <p>{{'ck'+index+newIndex}}</p> -->
              <div class="check">
                <input
                  @click.stop="handleSelect(newItem,item.value,$event)"
                  type="checkbox"
                  name="check"
                  :id="'ck'+index+newIndex"
                  v-model="checkedValue"
                  :value="newItem.name"
                  class="check-box"
                />
                <label :for="'ck'+index+newIndex" class="sy-check"></label>
              </div>
            </div>
          </div>
        </div>
      </template>
    </circle-panel>
  </div>
</template>
<script>
import circlePanel from '@/components/legend-component.vue'
import API from '@/api/city-management/market-supervision.js'

export default {
  components: {
    circlePanel
  },
  data () {
    return {
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
        { name: '总体概况', title: '总体概况', eventList: [] },
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
      leftIndex: 1,
      paramList: []
    }
  },
  created () {
    switch (this.$route.path) {
      case '/marketSupervision':
        this.leftIndex = 0
        break
      case '/marketSubject':
        this.leftIndex = 1
        break
      case '/foodAndDrug':
        this.leftIndex = 2
        break
      case '/massTechnology':
        this.leftIndex = 3
        break
    }
    this.getMenu()
  },
  mounted () {},
  methods: {
    /// 左侧圆形菜单选择
    circlePanelTab (data) {
      this.leftIndex = data.index
    },
    // 右侧多选
    handleSelect (data, key, e) {
      console.log(this.selectValue)
      let params = { value: key, codes: [data.value], selected: e.target.checked }
      this.$emit('getQueryPoint', params)
    },
    // 获取数据
    getMenu () {
      API.MAP_IMAGS(this, {}).then(resp => {
        let res = resp.data.data
        console.log(res)
        // fn(data, pid) {
        //   let result = []
        //   let temp = null
        //   for (let i in data) {
        //     if (data[i].pid === pid) {
        //       result.push(data[i])
        //       temp = fn(data, data[i].id)
        //       if (temp.length > 0) {
        //         data[i].children = temp
        //       }
        //     }
        //   }
        //   return result
        // }
        res.forEach((item, index) => {
          switch (item.label) {
            case '市场主体':
              this.circlePanelList[3].eventList = [...item.codes]
              this.circlePanelList[3].value = item.value
              break
            case '食药主体':
              this.circlePanelList[2].eventList = [...item.codes]
              this.circlePanelList[2].value = item.value
              break
          }
        })
        console.log(this.circlePanelList)
        this.$refs.navPanel.init(this.circlePanelList)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.heart-panel {
  position: absolute;
  z-index: 99;
  right: 7.3rem;
  bottom: 0.5rem;
  .g-panel-right,
  .g-panel-right-2 {
    padding-top: 0.1rem;
    position: absolute;
    top: 0.1rem;
    left: 0.33em;
    width: 3.5rem;
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
