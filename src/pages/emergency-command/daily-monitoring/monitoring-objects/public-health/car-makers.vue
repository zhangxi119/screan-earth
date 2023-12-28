<!--
 * @Descripttion:
 * @Author: wangting
 * @Date: 2020-04-11 10:47:00
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-11 15:17:57
 -->
<template>
  <div class = "car-box">
    <div class = 'car-maker' >
        <p class = 'maker-title'>川L04578
          <img  src = "@/assets/emergency-command/emergency-command-chart/close-bg.png" @click = "closeCar">
        </p>
          <div class="car-list">
            <div>当前位置: <div>市中区青江区三苏路与瑞祥路交汇处</div></div>
            <div>所属组织: <div>市中区青江区三苏路与瑞祥路交汇处</div></div>
            <div>车辆类型: <div>市中区青江区三苏路与瑞祥路交汇处</div></div>
            <div>更新时间: <div>2020年4月3日 14:14:48</div></div>
          </div>
          <div class="car-inf">
              <div>司机名称:<span>张三</span></div>
              <div>速度:<span>20km/h</span></div>
            </div>
        <p class="footer">
          <a @click="openVedio(1)">车内视频监控</a>
          <a @click="openVedio(2)">车外视频监控</a>
        </p>
    </div>
    <div class = "video-box" v-if="is_video">
      <p class = 'maker-title'><img class = "icon" src = "@/assets/emergency-command/emergency-command-chart/bg-selected.png" width="0.12rem"/>{{carTitle}}
        <img src = "@/assets/emergency-command/emergency-command-chart/close-bg.png"  @click = "closeVedio">
      </p>
      <video :src = "video_src"></video>
    </div>
  </div>
</template>
<script>
export default {
  name: 'car-maker',
  props: {
    is_car: {
      type: Boolean
    }
  },
  data () {
    return {
      is_video: true,
      video_src: '',
      carTitle: '车内视频'
    }
  },
  methods: {
    closeVedio () {
      this.is_video = !this.is_video
    },
    closeCar () {
      this.$emit('update:is_car', false)
    },
    openVedio (number) {
      if (number === 1) {
        this.carTitle = '车内视频'
      } else {
        this.carTitle = '车外视频'
      }
      this.is_video = true
    }
  }
}
</script>
<style  lang = "scss" scoped>
.car-box{
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  z-index: 1000;
   .maker-title{
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(255,255,255,1);
    font-size: .21rem;
    padding: .18rem 0;
    img{
      width:.24rem;
      height: .25rem;
      float: right;
      cursor: pointer;
    }
  }
  .car-maker{
    width: 4.05rem;
    height: 3.62rem;
    padding: .21rem .35rem;
    font-family:Source Han Sans CN;
    float: left;
    background:url('../../../../../assets/emergency-command/emergency-command-chart/car-bg.png') no-repeat center/contain;
  .car-list{
      div{
        display: flex;
        font-size: .18rem;
        font-weight:bold;
        color:rgba(223,226,251,1);
        padding-bottom: .10rem;
        div{
          flex: 1;
          white-space: normal;
          font-style:italic;
          color:rgba(249,230,89,1);
          padding-left: .05rem;
        }
      }
    }
    .car-inf{
      font-size: .18rem;
      font-weight:bold;
      display: flex;
      justify-content: space-between;
      color:rgba(223,226,251,1);
      span{
        font-style:italic;
        color:rgba(249,230,89,1);
        padding-left: .05rem;
      }
    }
    .footer{
      margin-top: .22rem;
      a{
        display: inline-block;
        border:1px solid rgba(69,143,239,1);
        color:rgba(255,255,255,1);
        font-weight: bold;
        font-size: .17rem;
        padding:0 .16rem;
        border-radius: .15rem;
        height:.3rem;
        line-height: .3rem;
        cursor: pointer;
        &:nth-child(2){
          float: right;
        }
      }
    }
  }
  .video-box{
    .maker-title{
      font-weight: normal;
      font-size: .21rem;
      .icon{
        float: left;
      }
    }
    display: flex;
    flex-direction: column;
    width: 7.73rem;
    height:5.21rem;
    padding: 0.21rem 0.35rem;
    float: left;
    margin-left: 10px;
    background: url('../../../../../assets/emergency-command/emergency-command-chart/car-vedio-bg.png') no-repeat center/contain;
    video{
      flex: 1;
      height: 3.98rem;
    }
  }
}
</style>
