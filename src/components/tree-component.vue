<!--
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-12 10:19:35
 * @LastEditors: wangting
 * @LastEditTime: 2020-05-08 20:17:45
 -->
<template>
  <div class="tree-box-container">
     <ul>
      <li v-for="(item,index) in list" :key="index">
        <div class="tree-title" @click="change(item)">
          <img v-if="selectItem&&selectItem.id===item.id" class="icon" src="@/assets/common/tree-icon02.png"/>
          <img v-else class="icon" src="@/assets/common/tree-icon.png"/>
          <span :class="{'selected':selectItem&&selectItem.id===item.id}" :title = "item.name">{{item.name}}</span>
          <img v-if="item.isfolder&&!item.show" class="icon-03" src="@/assets/common/tree-icon03.png"/>
          <img v-if="item.isfolder&&item.show" class="icon-04" src="@/assets/common/tree-icon01.png"/>
        </div>
        <tree-component v-show="item.show" :list="item.children"></tree-component>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'tree-component',
  props: {
    list: {
      type: Array,
      require: true
    }
  },
  computed: {
    selectItem () {
      return this.$store.getters.GET_RECURSION
    }
  },
  methods: {
    change (item) {
      this.$store.commit('SET_RECURSION', item)
    }
  }
}
</script>
<style lang="scss">
.tree-box-container {
  width: 100%;
   ul li {
   list-style-type: none;
   margin-top: 0.05rem;
   margin-left: 0.1rem;
  }
  .tree-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.18rem;
    color:rgba(243,249,255,1);
    .icon {
      width: 0.29rem;
      height: 0.29rem;
    }
    .icon-03 {
      width: 0.08rem;
      height: 0.14rem;
      margin-left: 0.1rem;
    }
    .icon-04 {
      width: 0.14rem;
      height: 0.08rem;
      margin-left: 0.1rem;
    }
    .selected {
      color: #85FEFF;
    }
    span{
      overflow: hidden;
      white-space:nowrap;
      text-overflow: ellipsis;
    }
  }
}

</style>
