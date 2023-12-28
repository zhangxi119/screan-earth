<!--
 * @Descripttion:
 * @Author: chenqy
 * @Date: 2020-03-08
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-21 17:08:43
 -->
<template>
  <div class="heart-menu">
    <div class="videoShow" v-if="showVideo1">
  <span @click="showVideo1=false">X</span>
  <video controls  style="height:100%;width:100%" autoplay>
    <source src="http://10.10.190.132/video/0518.mp4" type="video/mp4">
    <source src="http://10.10.190.132/video/0518.mp4" type="video/ogg">
  </video>
</div>
    <div class="heart-menu-first">
      <div class="heart-menu-title" @click="togge">
        <p>主菜单</p>
        <div class="heart-menu-sub" @click="toHome">
          <img src="@/assets/city-management/economic-run/three-base/return-menu.png"/>
          <span>导航</span>
        </div>
      </div>
      <div :class="{changeContainer:isAnimation}">
        <div ref="menuCartoon" class = "add-menu" :class = "{changeClass:isStyle}">
          <div class="heart-menu-content" >
            <div
              class="heart-menu-name"
              v-for="(item, index) in list"
              :key="index">
              <div
                @click.stop="handleSelect(index, 1,item)"
                class="heart-single-name"
                :class="firstIndex === index ? 'active-single': 'normal'" v-html="item.name"></div>
              <div
                class="heart-menu-second"
                v-if="firstIndex==index && item.children"
                :style="computedTop(item.children.length, 'full')"
              >
                <div
                  v-for="(val, ind) in item.children"
                  class="heart-menu-second-single"
                  @click.stop="handleSelect(ind, 2,val)"
                  :class="secondIndex === ind ? 'active-second': 'normal'"
                  :key="ind">
                  <div>{{val.name}}</div>
                  <div
                    class="heart-menu-third"
                    v-if="secondIndex==ind && val.children"
                    :style="computedTop(val.children.length, 'half')">
                    <div
                      v-for="(v, i) in val.children"
                      @click.stop="handleSelect(i, 3, v)"
                      class="heart-menu-third-single"
                      :class="thirdIndex === i ? 'active-third': 'normal'"
                      :key="i">
                      <div>{{v.name}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class = "back-menu" @click="toHome"><img src = "@/assets/entry/right-menu.png"/>返回导航页</div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menus from '@/utils/menu.js'
export default {
  name: 'menus',
  data () {
    return {
      list: menus,
      firstIndex: -1,
      secondIndex: -1,
      thirdIndex: -1,
      isStyle: false,
      isAnimation: false,
      showVideo1: false
    }
  },
  mounted () {
    // 取消列表
    let that = this
    document.getElementById('app').removeEventListener('click', closeMenu)
    function closeMenu () {
      that.firstIndex = -1
      that.secondIndex = -1
      that.thirdIndex = -1
    }
    document.getElementById('app').addEventListener('click', closeMenu)
    this.$nextTick(() => {
      this.$refs.menuCartoon.addEventListener('animationend', () => {
        this.isAnimation = false
      })
      this.$refs.menuCartoon.addEventListener('transitionend', () => {
        this.isAnimation = false
      })
    })
  },
  methods: {
    // 收缩展开
    togge () {
      if (this.isAnimation) {
        return
      }
      this.isStyle = !this.isStyle
      this.isAnimation = true
    },
    toHome () {
      this.$router.push({name: 'entry'})
    },
    // 选中效果
    handleSelect (index, level, data) {
      if (level === 1) {
        this.firstIndex = this.firstIndex === index ? -1 : index
      } else if (level === 2) {
        this.secondIndex = this.secondIndex === index ? -1 : index
      } else {
        this.thirdIndex = this.thirdIndex === index ? -1 : index
      }
      if (data.route) {
        this.firstIndex = -1
        this.secondIndex = -1
        this.thirdIndex = -1
        this.$router.push({name: data.route})
      }
      if (data.href) {
        if (data.href === 'http://10.10.190.132/video/0518.mp4') {
          this.showVideo1 = true
        } else {
          window.open(data.href)
          /*              window.open (data.href,'newwindow','width='+(window.screen.width)+',height='+(window.screen.height)+ ',top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no') */
        }
        // window.open(data.href, '_blank')
      }
    },
    // 计算子列表top值
    computedTop (count, type) {
      let style = null
      let top = count * 0.53
      if (type === 'half') {
        style = {top: -top / 2 + 'rem'}
      } else {
        style = {top: -(top + 0.3) + 'rem'}
      }
      return style
    }
  }
}
</script>

<style lang="scss" scoped>
.heart-menu{
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  font-family:Source Han Sans CN;
  .changeContainer{
    overflow: hidden;
    // animation: hide 2s linear;
  }
  .add-menu{
    position:relative;
    flex:1;
    display:flex;
    height:1rem;
    transition: all 1s;
    -webkit-transition: all 1s;
    opacity: 1;
    transform: translateX(0%);
    margin-left:-0.13rem;
    margin-top: 0.3rem;
    &.changeClass{
        opacity:0;
        transform: translateX(-100%);
        // transform: translateX(0);
        animation: move 1s linear;
      }
    @keyframes move {
      0%{
        opacity: 1;
        transform: translateX(0%);
      }
      100%{
        opacity: 0;
        transform: translateX(-100%);
      }
    }
    // @keyframes hide {
    //   0%{
    //     overflow: hidden;
    //   }
    //   100%{
    //     overflow: visible;
    //   }
    // }
    .heart-menu-content{
      flex: 1;
      display: flex;
      height: .75rem;
      background: url("../assets/city-management/economic-run/three-base/menu-rect1.png") no-repeat;
      background-size: 117% 100%;
      background-position: -1rem center;
      // box-shadow: 5px 5px 5px #000 ;
      align-items: center;
      padding-left: .2rem;
      border-radius: .04rem;
      position: relative;
    }
    .heart-menu-name{
      position: relative;
      color: #74CDFB;
      font-size: .17rem;
      flex: 1;
      .heart-single-name{
        width: .8rem;
        padding: 0 .1rem;
        text-align: center;
        cursor: pointer;
      }
      .active-single{
        background: url("../assets/city-management/economic-run/three-base/fours.png") no-repeat;
        background-size: 100% 100%;
        box-shadow: 5px 5px 5px #000;
        color: #FBE754;
      }
      .heart-menu-second{
        position: absolute;
        top: -2.4rem;
        left: .3rem;
        width: 1.74rem;
        .heart-menu-second-single{
          position: relative;
          height: .53rem;
          line-height: .53rem;
          border-radius: 0.08rem;
          background: url("../assets/city-management/economic-run/three-base/down.png") no-repeat;
          background-size: 100% 70%;
          background-position-y: .07rem;
          padding-left: .5rem;
          cursor: pointer;
          &:hover{
            background: url("../assets/city-management/economic-run/three-base/normal-active.png") no-repeat;
            background-size: 103% 100%;
            background-position-y: 0;
            color: #ffed66;
          }
          &:before{
            position: absolute;
            bottom: 0;
            left: .19rem;
            content: '';
            display: block;
            height: .2rem;
            width: 2px;
            background: #00ABFB;
          }
        }
        .active-second{
          background: url("../assets/city-management/economic-run/three-base/normal-active.png") no-repeat;
          background-size: 103% 100%;
          background-position-y: 0;
          color: #FBE754;
        }
        .heart-menu-second-single:nth-last-child(1){
          &:before{
            position: absolute;
            bottom: -.3rem;
            left: 0rem;
            content: '';
            display: block;
            width: .37rem;
            height: .37rem;
            background: url("../assets/city-management/economic-run/three-base/shaow.png") no-repeat;
            background-size: 100% 100%;

          }
        }
      }
    .heart-menu-third{
      position: absolute;
      left: 2rem;
      top: -2rem;
      width: 1.74rem;
      .heart-menu-third-single{
        position: relative;
        height: .53rem;
        line-height: .53rem;
        background:  url("../assets/city-management/economic-run/three-base/down.png") no-repeat;
        background-size: 100% 70%;
        background-position-y: .07rem;
        padding-left: .5rem;
        color: #6DE1FF;
        cursor: pointer;
        &:hover{
          background: url("../assets/city-management/economic-run/three-base/normal-active.png") no-repeat;
          background-size: 103% 100%;
          background-position-y: 0;
          color: #ffed66;
        }
        &:before{
          position: absolute;
          bottom: 0;
          left: .19rem;
          content: '';
          display: block;
          height: .2rem;
          width: 2px;
          background: #00ABFB;
        }
      }
      .heart-menu-third-single:nth-last-child(1){
        &:before{
          width: 0;
        }
      }
      .active-third{
        background: url("../assets/city-management/economic-run/three-base/normal-active.png") no-repeat;
        background-size: 103% 100%;
        background-position-y: 0;
        color: #FBE754;
      }
    }
  }
  }
  .back-menu{
    color:#52CFFF;
    font-size: 0.14rem;
    font-weight:400;
    background:url('../assets/entry/right-bg.png') no-repeat;
    background-size:100% 100%;
    text-align: center;
    cursor: pointer;
    position: absolute;
    right:0.16rem;
    bottom:-.24rem;
    height:.35rem;
    width:1.22rem;
    line-height: 0.35rem;
    font-weight:400;
    img{
      vertical-align: middle;
      width:0.12rem;
      height:0.12rem;
      margin-right:0.05rem;
    }
  };
  .heart-menu-first{
    display: flex;
    align-items: center;
  }
  .heart-menu-title{
    width: 1.35rem;
    height: 1.32rem;
    // color: #7FD1F7;
    text-align: center;
    // line-height: 1.2rem;
    background: url("../assets/city-management/economic-run/three-base/menu-back3.png") no-repeat;
    background-position-x: -2px;
    background-size: 100% 100%;
    // box-shadow: 5px 5px 5px #000;
    border-radius: 50%;
    z-index: 1;
    p{
      position: absolute;
      top: 0.5rem;
      left: 0.43rem;
      font-size: .18rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(99,211,251,1);
    }
    .heart-menu-sub{
      position: absolute;
      top: 0.76rem;
      left: 0.47rem;
      line-height: .14rem;
      cursor: pointer;
      img{
        width: .12rem;
        height: .12rem;
        vertical-align: middle;
      }
      span{
        width:.28rem;
        height: .14rem;
        font-size: .14rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color:rgba(82,207,255,1);
        // vertical-align: middle;
      }
    }
  }
 .videoShow{
   position: fixed;
    left:0;
    right: 0;
    top: 0;
    z-index: 999999;
    width: 43.2rem;
    height:10.8rem;
    background: black;
  span {
    position:absolute;
    right:0.2rem;
    top:0;
    z-index:999;
    font-size:0.5rem;
    color:white;
    cursor: pointer
  }
}
}
</style>
