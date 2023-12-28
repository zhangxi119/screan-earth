<!--
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-20 18:02:44
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-27 16:27:51
 -->
<template>
  <div class="heart-paginate">
    <div class="heart-paginate-prev" @click="handleClick(active<=1?1:active-1)">
      <img src="@/assets/common/left.png">
    </div>
    <div class="heart-paginate-content" v-show="showFlag">
      <div
        v-for="item in count"
        @click="handleClick(item)"
        :class="item === active ? 'active-page' : 'normal'"
        :key="item"></div>
    </div>
    <div v-show="!showFlag">
      <slot name="other-page-way"></slot>
    </div>
    <div class="heart-paginate-next" @click="handleClick(active>=count?count:active+1)">
      <img src="@/assets/common/right.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'paginate',
  props: {
    nowPage: {
      type: Number,
      required: false
    },
    count: {
      type: Number,
      required: true
    },
    showFlag: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  data () {
    return {
      active: this.nowPage || 1
    }
  },
  methods: {
    handleClick (index) {
      this.active = index
      this.$emit('change', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.heart-paginate{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: .15rem;
    height: .18rem;
  }
  .heart-paginate-prev{
    cursor: pointer;
    margin-right: .15rem;
  }
  .heart-paginate-content{
    display: flex;
    align-items: center;
    >div{
      cursor: pointer;
      width: .12rem;
      height: .12rem;
      border-radius: 50%;
      background: #00ABFB;
      margin: 0 .05rem;
    }
    .active-page{
      background: #FFD200;
    }
  }
  .heart-paginate-next{
    cursor: pointer;
    margin-left: .2rem;
  }
}
</style>
