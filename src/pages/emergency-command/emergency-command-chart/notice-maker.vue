<!--
 * @Descripttion:
 * @Author: wangting
 * @Date: 2020-04-12 14:03:19
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-21 16:12:40
 -->
<template>
  <div class = "noticadd notice-box">
    <p class = "notice-title">预警/通知
      <img src="@/assets/emergency-command/emergency-command-chart/close-bg.png" @click = "closeNotice"/>
    </p>
    <div class="notice-list">
      <div class="notice-list-content" v-for = "(item,index) in data" :key = "index">
        <div class="content-title" :style="{color: item.zh06005 === '通知' ? '#79F5D3' : '#FFF116'}">
          <img  class = "span-icon" src = "../../../assets/emergency-command/emergency-command-chart/bg-selected.png"/>
          <span class="content-title-name" @mouseenter="showTitle($event)" @mouseleave="hideTitle">{{item.zh06001}}</span>
          <div>
            <span class = "company company-name" @mouseenter="showTitle($event)" @mouseleave="hideTitle">{{item.zh06002}}</span>
            <span class = "company">{{item.zh06003}}</span>
            <img src = "@/assets/emergency-command/emergency-command-chart/down.png"  @click = "toggleNotice(index)"  :class = "{active_img:listC['ind'+index]}"/>
          </div>
        </div>
          <div class="content-list" v-show = "listC['ind'+index]">
            {{item.zh06004}}
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isShowNotice: {
      type: Boolean
    },
    data: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      listC: {}// 保存点击时的index
    }
  },
  methods: {
    // 关闭弹框
    closeNotice () {
      this.$emit('close', false)
    },
    // 切换列表显示隐藏
    toggleNotice (i) {
      i = 'ind' + i
      let getValue = this.listC[i]
      if (getValue) {
        this.$set(this.listC, i, false)
      } else {
        this.$set(this.listC, i, true)
      }
    },
    // 鼠标移入显示标题
    showTitle (e) {
      this.$emit('showTitle', e)
    },
    hideTitle () {
      this.$emit('hideTitle')
    }
  }
}
</script>
<style  lang="scss"  scoped >
.noticadd.notice-box{
  width: 7.63rem !important;
  /*height: 8.5rem !important;*/
  z-index: 200;
  box-sizing: border-box;
  background: url('../../../assets/emergency-command/emergency-command-chart/notice-bg.png') left top/100% 100% no-repeat !important;
  padding: 0.95rem 0.45rem .3rem .45rem;
  position: absolute;
  // top: 1rem !important;
  // left: 9rem;
  .notice-title{
    margin-top: -0.95rem !important;
    font-size:.24rem;
    line-height: 0.85rem;
    color: #fff;
    position: relative;
    img{
      width: 0.30rem;
      right: -.15rem;
      cursor: pointer;
      position: absolute;
      top:50%;
      transform: translateY(-50%);
    }
  }
  .notice-footer{
    line-height: 0.71rem;
    margin-bottom: -0.71rem;
    font-weight:400;
    color:rgba(2,173,255,1);
    font-size: .18rem;
    text-align: center;
  }
  .notice-list{
    max-height: 7.25rem;
    overflow: auto;
    cursor: default;
    .notice-list-content{
      margin-bottom: .16rem;
      .content-title{
        height: .44rem;
        line-height: .44rem;
        background: rgba(20,79,187,0.3)    left center/0.32rem no-repeat ;
        font-weight:500;
        color:rgba(255,241,22,1);
        font-size: .22rem;
        .content-title-name{
          display: inline-block;
          width: 3rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .span-icon{
          width:0.32rem;
          height: 0.32rem;
          border:1px dashed gray;
          display: inline-block;
          float: left;
          box-sizing: border-box;
          margin-top:0.06rem;
          margin-left: 0.05rem;
          padding:.02rem;
        }
        div{
          float: right;
          img{
            cursor: pointer;
            height: 0.19rem;
            margin-right: .1rem;
            transform: rotate(0);
            transition: all .2s;
            &.active_img {
              transform: rotate(-90deg);
            }
          }
          .company{
            color: rgba(224,227,251,1);
            font-size: 0.18rem;
            &:first-child{
              margin-right: 0.34rem;
            }
          }
          .company-name{
            width: 1rem;
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            vertical-align: middle;
            &:first-child{
              margin-right: 0.14rem;
            }
          }
        }
      }
      .content-list{
        color: #fff;
        font-size: 0.18rem;
        padding: .18rem .1rem 0 .1rem;
      }
    }
  }
}
</style>
