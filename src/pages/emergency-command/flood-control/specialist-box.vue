<template>
  <div class="heart-specialist">
    <div class="heart-specialist-title">
      <span>应急专家</span>
      <img src="@/assets/emergency-command/emergency-command-chart/close-bg.png" @click = "closeNotice"/>
    </div>
    <div class="heart-specialist-head">
      <div>专家</div><div>专业</div><div>操作</div>
    </div>
    <div class="heart-specialist-body">
      <div
        class="heart-single-body"
        v-for="(item, index) in data"
        v-show="index >=(nowPage-1)*4 && index<nowPage*4"
        :key="index">
        <div>{{item.fx07001}}</div>
        <div class="length">{{item.fx07004}}</div>
        <div>
          <img @click="note(item.fx07005, item.fx07001)" src="../../../assets/emergency-command/emergency-command-chart/message-d.png">
          <img @click="phone(item.fx07005, item.fx07001)" src="../../../assets/common/phone.png">
        </div>
      </div>
    </div>
    <div class="heart-specialist-none" v-if="!data.length">暂无数据</div>
    <div class="heart-specialist-page">
      <paginate
        :nowPage="nowPage"
        :count="Math.ceil(data.length/4)"
        @change="handleChange"></paginate>
    </div>
  </div>
</template>

<script>
import paginate from '@/components/paginate'
export default {
  name: 'specialistBox',
  components: {
    paginate
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      nowPage: 1
    }
  },
  mounted () {
    console.log(this.data)
  },
  methods: {
    closeNotice () {
      this.$emit('close')
    },
    handleChange (page) {
      this.nowPage = page
    },
    // 电话、短信
    note (phone, name) {
      this.$emit('handleNote', phone, name)
    },
    phone (phone, name) {
      this.$emit('handleCall', phone, name)
    }
  }
}
</script>

<style lang="scss" scoped>
.heart-specialist{
  width: 4.78rem;
  height: 3.92rem;
  background: url("../../../assets/common/win-info-icon-02.png") no-repeat;
  background-size: 100% 100%;
  .heart-specialist-title{
    display: flex;
    font-weight: bold;
    color: #fff;
    justify-content: space-between;
    padding: .4rem 5%;
    font-size: .22rem;
    img{
      width: .25rem;
      height: .25rem;
      cursor: pointer;
    }
  }
  .heart-specialist-head{
    display: flex;
    width: 90%;
    height: .4rem;
    font-size: .17rem;
    background: rgba(20,79,187,.78);
    align-items: center;
    margin: 0 auto;
    > div{
      flex: 1;
      color: rgba(255,255,255,.5);
      text-align: center;
    }
  }
  .heart-specialist-body{
    font-size: .16rem;
    .heart-single-body{
      width: 90%;
      margin: 0 auto;
      display: flex;
      height: .4rem;
      align-items: center;
      &:nth-child(even){
        background: rgba(7,69,182,.3);;
      }
      > div{
        flex: 1;
        color: #fff;
        text-align: center;
      }
      .length{
        width: 2.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    img{
      width: .22rem;
      height: .22rem;
      margin-left: .1rem;
      cursor: pointer;
    }
  }
  .heart-specialist-none{
    font-size: .22rem;
    color: #fff;
    text-align: center;
    margin-top: .2rem;
  }
  .heart-specialist-page{
    margin-top: .25rem;
  }
}
</style>
