<!--
 * @Descripttion: 进度条
 * @Author: chenqy
 * @Date: 2020-04-03
 * @LastEditors: chenqy
 * @LastEditTime: 2020-04-03
 -->
<template>
  <div class="heart-progress">
    <div class="heart-progress-head" v-if="nameHeader">
      {{nameHeader}}
    </div>
    <div class="heart-progress-body">
      <div class="re-progress" :style="{width: progress+'%'}"></div>
      <div class="re-progress-back"></div>
    </div>
    <div class="heart-progress-foot" v-if="nameFoot">
      {{nameFoot}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'progress',
  props: {
    // 进度条前面的文字
    nameHeader: {
      type: String,
      default: ''
    },
    // 进度条后面的文字
    nameFoot: {
      type: String,
      default: ''
    },
    // 进度条百分比
    progress: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .heart-progress{
    display: flex;
    align-items: center;
    font-size: .17rem;
    height: .2rem;
    .heart-progress-head{
      width: 1rem;
      color: #FEFEFE;
    }
    .heart-progress-foot{
      width: 1.3rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #F1D5A9;
    }
    .heart-progress-body{
      flex: 1;
      position: relative;
      margin-right: .2rem;
      height: .1rem;
      .re-progress{
        transition: width 1s ease;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        height: .1rem;
        border-radius:0 .05rem .05rem 0;
        background: linear-gradient(bottom, rgba(78,176,241,1), rgba(93,211,244,1));
      }
      .re-progress-back{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height:  .1rem;
        border-radius:0 .05rem .05rem 0;
        background-color: #1C4159;
      }
    }
  }
</style>
