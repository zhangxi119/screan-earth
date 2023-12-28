<!--
 * @Descripttion: 应急指挥短信弹窗
 * @Author: chenqy
 * @Date: 2020-04-21
 * @LastEditors: chenqy
 * @LastEditTime: 2020-04-21
 -->
<template>
  <div class="heart-note">
    <div class="heart-note-head">
      <img class="heart-note-head-title" src="../../assets/city-management/common-service/techno-culture/point.png"/>
      <span>短信编辑</span>
      <img @click="handleClose" class="heart-note-close" src="../../assets/common/closepopicon.png">
    </div>
    <div class="heart-note-people">
      <div class="heart-note-sp">收件人：</div>
      <div class="heart-note-ps">
        {{message.name}}
      </div>
    </div>
    <div class="heart-note-content">
      <div class="heart-note-sp">内容编辑：</div>
      <div class="heart-note-ps">
        <textarea v-model="SendContent"></textarea>
      </div>
    </div>
    <div class="heart-note-do">
      <div class="heart-note-btn" @click="handleSend">发送</div>
    </div>
  </div>
</template>

<script>
import API from '@/api/emergency-command/emergency-command-chart.js'
// const notePath = process.env.NODE_ENV === 'development' ? 'http://10.10.10.214:8085' : 'http://10.10.10.214:8085'
export default {
  name: 'note-modal',
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      SendContent: '' // 发送内容
    }
  },
  methods: {
    handleClose () {
      this.$emit('close', false)
    },
    // 发送短信
    handleSend () {
      let param = {
        sendContent: this.SendContent,
        sendTel: this.message.phone,
        sendName: this.message.name.replace(/ /g, '')
      }
      API.SEND_MESSAGE(this, param).then(re => {
        if (re.data.data.ReturnFlag) {
          this.$emit('close', false)
          alert(re.data.data.ReturnMsg)
        } else {
          alert(re.data.data.ReturnMsg)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.heart-note{
  width: 5.8rem;
  height: 4.6rem;
  background: url("../../assets/common/callPanle.png") no-repeat;
  background-size: 100% 100%;
  padding: 1px;
  padding: .2rem .3rem;
  box-sizing: border-box;
  .heart-note-head{
    font-size: .24rem;
    color: #fff;
    margin-top: .12rem;
    .heart-note-head-title{
      width: .5rem;
      height: .5rem;
      vertical-align: middle;
    }
    .heart-note-close{
      float: right;
      width: .28rem;
      height: .28rem;
      margin-top: .08rem;
      cursor: pointer;
    }
  }
  .heart-note-people{
    display: flex;
    color: #DFE2FD;
    font-weight: bold;
    font-size: .18rem;
    justify-content: center;
    padding: 0 .15rem;
    margin-top: .2rem;
    .heart-note-sp{
      width: 1rem;
      margin-left: .04rem;
      height: .38rem;
      line-height: .38rem;
      text-align: right;
    }
    .heart-note-ps{
      flex: 1;
      border: .01rem solid #298FF7;
      border-radius: .02rem;
      height: .38rem;
      line-height: .38rem;
      font-style: italic;
      padding-left: .05rem;
    }
  }
  .heart-note-content{
    display: flex;
    font-weight: bold;
    font-size: .18rem;
    margin-top: .2rem;
    color: #DFE2FD;
    padding: 0 .15rem;
    .heart-note-sp{
      width: 1rem;
      margin-left: .04rem;
      text-align: right;
    }
    .heart-note-ps{
      flex: 1;
      border: .01rem solid #298FF7;
      border-radius: .02rem;
      height: 2rem;
      textarea{
        box-sizing: border-box;
        color: #fff;
        font-size: .18rem;
        padding: .05rem;
        width: 100%;
        height: 100%;
        resize: none;
        background: transparent;
        border: none;
      }
    }
  }
  .heart-note-do{
    .heart-note-btn{
      margin: .25rem auto 0;
      height: .38rem;
      width: 1.11rem;
      line-height: .38rem;
      text-align: center;
      border-radius: .38rem;
      color: #fff;
      font-weight: bold;
      font-size: .18rem;
      background: linear-gradient(top, #20D7FF, #0075D0);
      cursor: pointer;
    }
  }
}
</style>
