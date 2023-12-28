<!--
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-11 10:10:01
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-09 22:10:08
 -->
<template>
  <div class="g-select-box"
  :style="{width: width+'rem', height: height+'rem'}">
      <ul>
          <li
          @click="handleChooseSelect(item, index)"
          v-for="(item,index) in data" :key="index"
          :style="item.name.length < 7 ? 'font-size: 0.2rem;' : 'font-size: 0.16rem;'"
          :class="getClass(index,item)">{{item.name}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'heartSelect',
  props: {
    // 下拉数据data - 格式
    //  [
    //     {
    //       name: '市场监管',
    //       routeName: 'marketSupervision',
    //       selected: true
    //     },
    //     {
    //       name: '市场主体',
    //       routeName: 'marketSubject',
    //       selected: false
    //     },
    //   ]
    data: {
      type: Array,
      required: true
    },
    // 状态active 位置  0为第一条(若传入的data中定义了selected,以后者为准)
    active: {
      type: Number,
      default: 0
    },
    // 宽度
    width: {
      type: Number,
      default: 2.3
    },
    // 高度
    height: {
      type: Number,
      default: 0.44
    }
  },
  mounted () {
  },
  beforeMount () {
    this.activeTemp = this.active
    this.data.forEach((item, index) => {
      if (item.selected) {
        this.activeTemp = index
      }
    })
  },
  watch: {
    data: {
      handler (newVal, objVal) {
        this.activeTemp = this.active
        newVal.forEach((item, index) => {
          if (item.selected) {
            this.activeTemp = index
          }
        })
      }
    }
  },
  data () {
    return {
      activeTemp: 0
    }
  },
  methods: {
    getClass (index, item) {
      if (item.routeName === '') {
        if (item.selected === true) {
          return 'g-nav-active'
        } else {
          return ''
        }
      }
      if (index === 0 && index === this.activeTemp) {
        return 'g-nav-active'
      } else if (index === this.activeTemp) {
        return 'g-nav-active'
      } else {
        return ''
      }
    },
    handleChooseSelect (item, index) {
      ///  因为社会安全页面需要有返回值 所以修改了下
      if (item.routeName === '') {
        this.data.forEach((item, index) => {
          item.selected = false
        })
        item.selected = true
        this.$emit('select', item)
      }
      if (this.$route.name === item.routeName || !item.routeName) {
        return
      }
      this.$router.push({name: item.routeName})
    }
  }
}
</script>

<style lang="scss" scoped>
  .g-select-box {
      display: none;
      width: 2.53rem;
      position: absolute;
      ul {
        width: 100%;
        list-style: none;
        li {
          cursor: pointer;
          list-style: none;
          position: relative;
          padding-left: 0.54rem;
          margin-bottom: 0.16rem;
          box-sizing: border-box;
          width: 2.3rem;
          height: 0.54rem;
          line-height: 0.38rem;
          background: url('../assets/common/nav-blue.png') center no-repeat;
          background-size: 100%;
          font-size:0.2rem;
          font-family:Source Han Sans CN;
          font-weight:500;
          font-style:italic;
          color:rgba(255,255,255,1);
          &::before {
            content: '';
            position: absolute;
            right: 0.09rem;
            // top: -0.45rem;
            top: -80%;
            display: inline-block;
            width: 0.02rem;
            // height: 0.7rem;
            height: 138%;
            background: #fffeff;
          }
          &:first-child {
            // padding-left: 0.54rem;
            // margin-bottom: 0.16rem;
            // box-sizing: border-box;
            // width: 2.53rem;
            // height: 0.67rem;
            // line-height: 0.67rem;
            // font-size: 0.22rem;
            // background: url('../assets/common/nav-big-blue.png') center no-repeat;
            // background-size: 100%;
            // font-family:Source Han Sans CN;
            // font-weight:500;
            // font-style:italic;
            // color:rgba(255,255,255,1);
            &::before {
              content: '';
              display: none;
            }
          }
        }
        .g-nav-active {
          line-height: 0.48rem;
          background: url('../assets/common/nav-orige.png') center no-repeat;
          background-size: 100%;
        }
        .g-big-active {
           line-height: 0.54rem;
          background: url('../assets/common/nav-big-orige.png') center no-repeat !important;
          background-size: 100% !important;
        }
      }
    }
</style>
