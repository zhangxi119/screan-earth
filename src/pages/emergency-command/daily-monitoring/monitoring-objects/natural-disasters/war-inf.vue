<!--
 * @Descripttion:
 * @Author: wangting
 * @Date: 2020-04-18 14:34:41
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-06-05 11:22:29
 -->
<template>
   <div class="main-right-center command-container">
        <p class="g-title">预警信息</p>
        <div class="warning-info-box" :style="{height: height}" @click="handleWarn(true)">
          <ul class="warning-info-list" ref="scroll2" :class="{anim:animate2 === true}" @mouseenter="enter(2)" @mouseleave="leave(2)">
            <li class="warning-info-item" ref="scrollLi2" v-for="(item, index) in listC" :key="index">
              <div class="warning-list-box">
                <div class="warning-text">
                  <div class="warning-type">
                    <img src="../../../../../assets/emergency-command/emergency-command-chart/bg-selected.png"/>
                    <span :title="item.zh06001" :style="{color: item.zh06001 === '通知' ? '#79F5D3' : '#FFF116'}">{{item.zh06001}}</span>
                  </div>
                  <div class="warning-from">{{item.zh06002}}</div>
                  <div class="warning-time">{{item.zh06003}}</div>
                </div>
                <p>{{item.zh06004.length > 110 ? item.zh06004 + '...' : item.zh06004}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
</template>
<script>

export default {
  props: {
    labelList: {
      type: Array
    },
    height: {
      type: String,
      default: '2.1rem',
      required: false
    }
  },
  data () {
    return {
      timers: '',
      listC: [],
      animate2: false
    }
  },
  mounted () {},
  watch: {
    labelList (newValue, oldValue) {
      this.listC = this.labelList.concat([])
      this.init()
    }
  },
  methods: {
    init () {
      if (this.listC.length > 2) { // 预警信息
        this.timers = setInterval(this.scroll2, 2 * 1000)
      }
    },
    scroll2 () {
      let scroll = this.$refs.scroll2
      let scrollLi = this.$refs.scrollLi2
      if (scroll) {
        scroll.style.marginTop = (scrollLi[0].offsetHeight * (-1) + 'px')
      }
      this.animate2 = !this.animate2
      setTimeout(() => {
        this.listC.push(this.listC[0])
        this.listC.shift()
        scroll && (scroll.style.marginTop = '0')
        this.animate2 = !this.animate2
      }, 500)
    },
    // 单出显示所有预警信息
    handleWarn () {
      this.$emit('close', true)
    },
    enter () {
      clearInterval(this.timers)
    },
    leave () {
      this.timers = setInterval(this.scroll2, 3 * 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.main-right-center {
  position: absolute;
  // z-index: 9;
  // width: 7.01rem;
  // height: 3.47rem;
  background: url('../../../../../assets/emergency-command/emergency-command-chart/bg-small.png') center no-repeat;
  background-size: 100%;
  .warning-info-box {
    height: 2.1rem;
    overflow: hidden;
    transition: all 0.5s;
    cursor: pointer;
    .warning-info-list {
      width: 100%;
      overflow: hidden;
      list-style: none;
      padding: 0 0.5rem;
      box-sizing: border-box;
      .warning-info-item {
        height: .95rem;
        overflow: hidden;
        padding: .05rem 0;
        .warning-list-box {
          p {
            line-height: 0.2rem;
            font-size: 0.16rem;
            font-weight:400;
            color: #FFF;
            margin-top: 0.04rem;
            padding-left: 0.08rem;
            line-height: 135%;
          }
          .warning-text {
            display: flex;
            align-items: center;
            font-size:0.18rem;
            font-weight:400;
            color: #E0E3FB;
            .warning-type {
              flex: 1;
              display: flex;
              align-items: center;
              img {
                width: 0.32rem;
                height: 0.33rem;
              }
              span {
                flex: 1;
                font-size: 0.21rem;
                color: #FFF116;
                width: 1rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
            .warning-from{
              flex: 1;
            }
            .warning-time {
              width: 2rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
        &:first-child {
        }
      }
    }
    .anim{
      transition: all 0.5s;
    }
  }
}
 .command-container {
   .g-title {
      display: inline-block;
      margin: 0.5rem 0 0 0.5rem;
      font-size:0.24rem;
      line-height: 0.23rem;
      text-align: center;
      font-family:Source Han Sans CN;
      font-weight:500;
      color:rgba(255,255,255,1);
      padding-left: 0.15rem;
      padding-bottom: .2rem;
      background: url('../../../../../assets/emergency-command/emergency-command-chart/title-line.png') center no-repeat;
      background-position: 0 .2rem;
      background-size: .87rem .25rem;
      &:hover {
        color: #ffed66;
        text-shadow:0 0 0.1rem rgba(228,205,38,0.28);
      }
    }
 }
</style>
