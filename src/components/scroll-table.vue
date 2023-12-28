<!--
 * @Descripttion:
 * @Author: chengqiyu
 * @Date: 2020-03-2
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-22 15:19:17
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
        :style="item.width ? 'width:'+item.width : 'flex: 1'">{{item.name}}</div>
    </div>
    <div class="heart-scroll-table-body" :style="height?'height:'+height: 'auto'">
      <div
        class="source-body"
        :style="'top:'+StartTop+'rem'">
        <div
          v-for="(item,index) in data"
          class="body-single"
          :key="index"
          :class="index%2==0? 'active-single':'trans-single'">
          <div
            v-for="(value, k, ind) in item"
            :style="column[ind].width ? 'width:'+column[ind].width : 'flex: 1'"
            :key="ind" >
            <span v-if="column[ind].type != 'img'" :title="value">{{value}}</span>
            <img v-else :src="value" class="position-address">
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
          :class="index%2==0? 'active-single':'trans-single'">
          <div
            v-for="(value, k, ind) in item"
            :style="column[ind].width ? 'width:'+column[ind].width : 'flex: 1'"
            :key="ind" >
            <span v-if="column[ind].type != 'img'" :title="value">{{value}}</span>
            <img v-else :src="value" class="position-address">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    height: {
      type: String
    }
  },
  beforeMount () {
    let max = this.max || 8
    this.copyStartTop = this.data.length * 0.45
    if (this.data.length > max) {
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
    scroll () {
      // 最大列表高度
      let maxHeight = this.data.length * 0.45
      let that = this
      this.timer = setInterval(function () {
        that.StartTop = that.StartTop - 0.03
        that.copyStartTop = that.copyStartTop - 0.03
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
      console.log(1)
      clearInterval(this.timer)
    },
    beforeDestroy () {
      if (this.timer) {
        clearInterval(this.timer)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .heart-scroll-table-header{
    display: flex;
    height: .45rem;
    line-height: .45rem;
    background: rgba(0,102,181,.7);
    font-size: .18rem;
    font-weight: 400;
    color: #FFFFFF;
    text-align: center;
  }
  .heart-scroll-table-body{
    position: relative;
    overflow: hidden;
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
    background: rgba(0,102,181,.1);
    > div{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .active-single{
    display: flex;
    background: rgba(0,102,181,.26);
    height: .45rem;
    align-items: center;
    color: #fff;
    text-align: center;
  }
  .trans-single{
    display: flex;
    height: .45rem;
    align-items: center;
    color: #fff;
    text-align: center;
  }
  .position-address{
    width: .17rem;
    height: .23rem;
  }
</style>
