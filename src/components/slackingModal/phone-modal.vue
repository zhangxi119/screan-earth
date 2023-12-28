<!--
 * @Descripttion: 应急指挥打电话弹窗
 * @Author: chenqy
 * @Date: 2020-04-21
 * @LastEditors: chenqy
 * @LastEditTime: 2020-04-21
 -->
<template>
  <div class="heart-phone">
    <div class="heart-phone-name">
      {{message.name}}
    </div>
    <div class="heart-phone-number">
      {{message.phone}}
    </div>
    <div class="heart-phone-status">
      <div>
        <div>
          <div>
            <img :src="whichImg"/>
            <span>{{statusTitle}}</span>
          </div>
          <div class="over-phone" @click="handleClose">
            <img src="../../assets/common/overcall.png"/>
            <span>挂断</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/common/callclose.png'
import img2 from '@/assets/common/overcall.png'
import img3 from '@/assets/common/call-phone.png'
import img4 from '@/assets/common/talk.png'
export default {
  name: 'phone-modal',
  props: {
    // 基本信息 电话 - 姓名
    message: {
      type: Object,
      required: true
    },
    // 通话状态
    status: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      // 通话时间
      time: 0,
      timer: null,
      imgs: [img1, img2, img3, img4],
      statusTitle: '',
      whichImg: ''
    }
  },
  methods: {
    // 计时
    getTime () {
      if (this.timer) {
        clearInterval(this.timer)
        this.time = 0
      }
      this.timer = setInterval(() => {
        this.time = this.time + 1
        let h = ~~(this.time / 60)
        let m = this.time % 60
        let stringStime = (h < 10 ? '0' + h : h) + '：' + (m < 10 ? '0' + m : m)
        this.statusTitle = stringStime
      }, 1000)
    },
    // 显示状态
    showStatus (st) {
      let img = null
      switch (st) {
        // 拨打电话
        case 'Back_DialOut':
        case 'Back_TelPhoneEvent':
          this.statusTitle = '正在呼叫...'
          img = this.imgs[2]
          break
        // 通话结束
        case 'HangUp':
        case 'Back_TalkingEnd':
          this.statusTitle = '已结束'
          clearInterval(this.timer)
          img = this.imgs[1]
          setTimeout(() => {
            this.$emit('close', false)
          }, 500)
          break
        // 通话接通
        case 'Back_BeginTalking':
          this.getTime()
          img = this.imgs[3]
          break
        case 'Back_keeplive':
          img = this.whichImg
          break
        default:
          this.statusTitle = '未接通'
          img = this.imgs[0]
          break
      }
      this.whichImg = img
    },
    // 关闭
    handleClose () {
      this.$emit('close', false)
    }
  },
  watch: {
    'status': {
      immediate: true,
      handler () {
        this.showStatus(this.status)
      }
    }
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}
</script>

<style lang="scss" scoped>
.heart-phone{
  width: 4.3rem;
  height: 3rem;
  color: #fff;
  background: url("../../assets/common/callPanle.png") no-repeat;
  background-size: 100% 100%;
  padding: 1px;
  text-align: center;
  .heart-phone-name{
    margin-top: .67rem;
    font-size: .36rem;
    font-weight: 500;
  }
  .heart-phone-number{
    margin-top: .44rem;
    font-size: .18rem
  }
  .heart-phone-status{
    margin-top: .15rem;
    font-size: .17rem;
    >div{
      > div{
        > div{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.6rem;
          margin: 0 auto;
          margin-top: .1rem;
        }
      }
    }
    img{
      width: .22rem;
      height: .22rem;
      margin-right: .04rem;
    }
  }
  .over-phone{
    cursor: pointer;
    margin-top: .1rem;
  }
}
</style>
