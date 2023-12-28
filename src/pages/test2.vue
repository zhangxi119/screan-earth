<!--
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-08 15:49:42
 * @LastEditors: hangzhang
 * @LastEditTime: 2020-03-13 17:08:07
 -->
<template>
   <div class="video-container">
      <div class="video-left">
        <div class="title">视频监控</div>
        <div class="input-box">
          <input placeholder="请输入" type="text"/>
          <div class="serach-button">
            <img src="@/assets/common/search-icon.png"/>
          </div>
        </div>
        <div class="tree-box">
          <tree-component :list="treeList"></tree-component>
        </div>
      </div>
      <div class="video-right">
       <div class="video-list">
         <div :style="margin" class="video-inner-list">
            <div
            v-for="(item,index) in videoArray" :key="index"
            :class="{
              'three':selectSpeedIndex===0,
              'two':selectSpeedIndex===1,
              'one':selectSpeedIndex===2,
              'select-video':selectVideoIndex===index
            }"
            >
            <div :id="'video-item'+index"  class="video-item"></div>
            <div  @click="selectVideoBoder(index)" class="video-layer"></div>
            </div>
         </div>
       </div>
      </div>
      <div class="select-box">
         <div @click="selectSpeed(1)" class="select-item" :class="{'selected':selectSpeedIndex===1}">2X</div>
         <div @click="selectSpeed(2)" class="select-item" :class="{'selected':selectSpeedIndex===2}">1X</div>
      </div>
      <img class="close" src="@/assets/common/close-icon.png"/>
   </div>
</template>
<script>
import treeComponent from '@/components/tree-component'
export default {
  components: {
    treeComponent
  },
  computed: {
    margin () {
      return {
        'margin-top': `${this.marginTop}rem`
      }
    },
    selectNode () {
      return this.$store.getters.GET_RECURSION
    }
  },
  watch: {
    selectNode (val) {
      let index = 0
      if (this.selectVideoIndex > -1) {
        index = this.selectVideoIndex
      }
      this.create('video-item' + index, val.url)
    }
  },
  data () {
    return {
      marginTop: 0,
      swfurl: './static/libs/flowplayer/flowplayer-3.2.18.swf',
      selectSpeedIndex: 1,
      videoArray: [
        {
          id: '',
          url: 'http://10.10.190.23:9916/hcvs_camera_4824.flv'
        },
        { id: '',
          url: 'http://10.10.190.23:9916/hcvs_camera_4825.flv'
        },
        { id: '',
          url: 'http://10.10.190.23:9916/hcvs_camera_4826.flv'
        },
        { id: '',
          url: 'http://10.10.190.23:9916/hcvs_camera_4827.flv'
        }
      ], // 前4个视频
      videoObjectList: [],
      selectVideoIndex: -1,
      treeList: [
        { id: 0,
          name: '1标题',
          show: false,
          children: [
            {
              id: 1,
              name: '1.1级标题',
              url: 'http://10.10.190.23:9916/hcvs_camera_7953.flv'
            },
            {
              id: 4,
              name: '1.2级标题',
              url: 'http://10.10.190.23:9916/hcvs_camera_5835.flv'
            }
          ]
        }
      ]
    }
  },

  mounted () {
    this.videoArray.forEach((item, index) => {
      this.create('video-item' + index, item.url)
    })
  },
  methods: {
    create (id, url) {
      let p = window.$f(id, this.swfurl, {
        clip: {
          url: url,
          autoPlay: true,
          autoBuffering: true
        },
        plugins: {
          controls: null
        }
      })
      this.videoObjectList.push(p)
    },
    selectVideoBoder (index) {
      this.selectVideoIndex = index
      this.$store.commit('SET_RECURSION', null)
    },
    selectSpeed (type) {
      this.selectSpeedIndex = type
      if (this.selectVideoIndex <= 7 && this.selectVideoIndex >= 4 && type === 1) {
        this.marginTop = -4.6
      } else if (this.selectVideoIndex === 8 && type === 1) {
        this.marginTop = -9.2
      } else if (this.selectVideoIndex > 0 && type === 2) {
        this.marginTop = -4.6 * this.selectVideoIndex
      } else {
        this.marginTop = 0
      }
    }

  }
}
</script>
<style lang="scss">
.video-container {
  position: absolute;
  left: 1rem;
  top: 1rem;
  width: 9.77rem;
  height: 5.67rem;
  background: url('../assets/common/video-bg.png') no-repeat;
  background-size: 100% 100%;
  z-index: 100;
  .close {
    position: absolute;
    width: 0.45rem;
    height: 0.46rem;
    top: -0.2rem;
    right: -0.2rem;
  }
  .video-left {
    position: absolute;
    left:0;
    top: 0;
    width: 2.9rem;
    height: 100%;
    .title {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      font-size: 0.21rem;
      color: #FFFFFF;
    }
    .input-box {
      position: absolute;
      width: 2.20rem;
      height: 0.35rem;
      top: 0.9rem;
      left: 0.5rem;
      display: flex;
      flex-direction: row;
      input {
        width: 1.8rem;
        border: 0.01rem solid #48AAF4;
        background:rgba(5,58,99,0.28);
        font-size: 0.16rem;
        color: #FFFFFF;
        padding-left: 0.1rem;
        box-sizing: border-box;
      }
      .serach-button {
        width: 0.40rem;
        height: 0.35rem;
        background: #00A6EA;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        img {
          width: 0.20rem;
          height: 0.20rem;
        }
      }
    }
    .tree-box {
      position: absolute;
      left: 0.4rem;
      top: 1.5rem;
      width: 2.30rem;
      height: 4rem;
      overflow: auto;

    }
  }
  .video-right {
    position: absolute;
    width: 6.3rem;
    height: 4.7rem;
    right: 0.5rem;
    top: 0.8rem;
    .video-list {
      position: absolute;
      width: 100%;
      height:100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      overflow: hidden;
      .video-inner-list {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      .video-item {
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 0.05rem;
        box-sizing: border-box;
      }
      .video-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 100;
      }
      .three {
        position: relative;
        width: 1.8rem;
        height: 1.33rem;
        margin: 0.05rem 0.08rem;
      }
      .two {
        position: relative;
        width: 2.9rem;
        height: 2.0rem;
        margin: 0.15rem 0.08rem;
      }
      .one {
        position: relative;
        width: 5.8rem;
        height: 4.0rem;
        margin: 0.3rem 0.2rem;
      }
      .select-video {
          border: 0.03rem solid #48AAF4;
      }
    }
  }
  .select-box {
     position: absolute;
     right: 0.5rem;
     top: 0.5rem;
     display: flex;
     flex-direction: row;
     align-items: center;
     .select-item {
        width:0.48rem;
        height: 0.22rem;
        background:#0B2D6D;
        font-size: 0.16rem;
        color: #FFFFFF;
        margin: 0 0.1rem;
        text-align: center;
        border: 0.01rem solid #48AAF4;
     }
     .selected {
          background: #00A6EA;
      }

  }
}
</style>
