<!--
 * @Descripttion:
 * @Author: chengqiyu
 * @Date: 2020-03-2
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-21 11:46:54
 -->
<template>
  <div
    class="heart-scroll-table"
    @mouseover="stopScroll"
    @mouseout="scroll">
    <div class="heart-scroll-table-header">
      <div
        v-for="(item,index) in column"
        :key="index"
        :style="item.width ? 'width:'+item.width : 'flex: 1'">
        <div class="header-name">{{item.name}}</div>
      </div>
    </div>
    <div class="heart-scroll-table-body" :style="{height: height ? height : 'auto', overflow: isScrolled ? 'hidden' : 'auto'}">
      <div
        class="source-body"
        :style="'top:'+StartTop+'rem'">
        <div
          v-for="(item,index) in data"
          class="body-single"
          :key="index"
          :class="index%2==0? 'active-single':'trans-single'"
          @click="handleClick(item)">
          <div
            v-for="(value, ind) in column"
            :style="value.width ? 'width:'+value.width : 'flex: 1'"
            :key="ind">
            <span style="text-align:center" v-if="value.type === 'formatter'">{{formatterTime(item[value.dataIndex])}}</span>
            <span style="text-align:center" v-else @mouseenter="showTitle($event)" @mouseleave="hideTitle">{{item[value.dataIndex] || '---'}}</span>
          </div>
        </div>
      </div>
      <div
        class="source-copy-body"
        v-if="isShow"
        :style="'top:'+copyStartTop+'rem'">
        <div
          v-for="(item,index) in data"
          class="body-single"
          :key="index"
          :class="index%2==0? 'active-single':'trans-single'"
          @click="handleClick(item)">
          <div
            v-for="(value, ind) in column"
            :style="value.width ? 'width:'+value.width : 'flex: 1'"
            :key="ind"
            :title="item[value.dataIndex]"
            class="costom-title">
            <span style="text-align:center" v-if="value.type === 'formatter'">{{formatterTime(item[value.dataIndex])}}</span>
            <span style="text-align:center" v-else>{{item[value.dataIndex] || '---'}}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { formatterTime } from '@/utils/utils'
export default {
  name: 'scroll-table',
  props: {
    column: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    // 最大条数  --- 超过以后就开始滚动
    max: {
      type: Number
    },
    isScrolled: {
      type: Boolean,
      default: true
    },
    height: {
      type: String
    }
  },
  mounted () {
    let max = this.max || 8
    this.copyStartTop = this.data.length * 0.45
    if (this.data.length > max && this.isScrolled) {
      this.isScroll = true
      this.isShow = true
      this.scroll()
    }
  },
  data () {
    return {
      isScroll: false, // 是否滚动
      isShow: false, // 是否渲染重复Body
      StartTop: 0,
      copyStartTop: 0,
      timer: null
    }
  },
  methods: {
    setStyle () {
      return {
        height: this.height ? this.height : 'auto',
        overflow: this.isScrolled ? 'hidden' : 'auto'
      }
    },
    formatterTime (t) {
      return formatterTime(t)
    },
    scroll () {
      if (this.data.length <= this.max || !this.isScrolled) return
      // 最大列表高度
      let maxHeight = this.data.length * 0.45
      let that = this
      this.timer = setInterval(function () {
        that.StartTop = that.StartTop - 0.02
        that.copyStartTop = that.copyStartTop - 0.02
        if (Math.abs(that.StartTop) > maxHeight) {
          that.StartTop = maxHeight
        }
        if (Math.abs(that.copyStartTop) > maxHeight) {
          that.copyStartTop = maxHeight
        }
      }, 60)
    },
    // 停用
    stopScroll () {
      clearInterval(this.timer)
    },
    // 点击方法
    handleClick (item) {
      this.$emit('handleChoose', item.id, item)
    },
    // 鼠标移入显示标题
    showTitle (e) {
      this.$emit('showTitle', e)
    },
    hideTitle () {
      this.$emit('hideTitle')
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
  .heart-scroll-table-header{
    display: flex;
    padding: .1rem .2rem;
    align-items: center;
    background:rgba(0,102,181,.7);
    font-size: .18rem;
    font-weight: 400;
    color: #b6becd;
    text-align: left;
    .header-name{
      width: 100%;
      margin-left: .15rem;
      white-space: pre-wrap;
    }
  }
  .heart-scroll-table-body{
    position: relative;
    overflow: hidden;
    //margin-right: .1rem;
    box-sizing: border-box;
    .source-body{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      /*transition: top ease 1s;*/
    }
    .source-copy-body{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      /*transition: top ease 1s;*/
    }
  }
  .body-single{
    padding: 0 .2rem;
    background: rgba(0,102,181,.1);
    font-size: .16rem;
    border: .01rem solid transparent;
    &:hover {
      background: rgba(7,69,182,1);
      border: .01rem solid rgba(0,171,251,1);
    }
    > div{
      padding-left: .15rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      box-sizing: border-box;
    }
  }
  .active-single{
    display: flex;
    background: rgba(0,102,181,.26);
    height: .45rem;
    align-items: center;
    color: #fff;
    text-align: left;
  }
  .trans-single{
    display: flex;
    height: .45rem;
    align-items: center;
    color: #fff;
    text-align: left;
  }
  .position-address{
    width: .17rem;
    height: .23rem;
  }
</style>
