<!--
 @Descripttion:
 * @Author: renting
 * @Date: 2020-03-20
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-26 10:14:11
 -->
<template>
  <div class="slider-wrapper">
    <div class="slider-title">
      <!-- <span class="min-unti">0{{unit}}</span> -->
      <span class="min-unti"></span>
      <span class="max-unti">{{max}}{{unit}}</span>
    </div>
    <div class="slider" ref="slider">
      <div class="process" :style="{width}"></div>
      <div class="thunk" ref="trunk" :style="{left}">
        <div class="block"></div>
        <div class="tips">
          <span>{{parseInt(scale * (max - min))}}{{unit}}</span>
          <i class="fas fa-caret-down" ></i>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
/*
 * min 进度条最小值
 * max 进度条最大值
 * v-model 对当前值进行双向绑定实时显示拖拽进度
 * */
export default{
  props: ['min', 'max', 'value', 'unit'],
  data () {
    return {
      slider: null, // 滚动条DOM元素
      thunk: null, // 拖拽DOM元素
      per: this.value // 当前值
    }
  },
  // 渲染到页面的时候
  mounted () {
    this.slider = this.$refs.slider
    this.thunk = this.$refs.trunk
    var _this = this
    this.thunk.onmousedown = function (e) {
      var width = parseInt(_this.width)
      var disX = e.clientX
      document.onmousemove = function (e) {
        // value, left, width
        // 当value变化的时候，会通过计算属性修改left，width

        // 拖拽的时候获取的新width
        var newWidth = e.clientX - disX + width
        // 拖拽的时候得到新的百分比
        var scale = newWidth / _this.slider.offsetWidth
        _this.per = Math.ceil((_this.max - _this.min) * scale + _this.min)
        _this.per = Math.max(_this.per, _this.min)
        _this.per = Math.min(_this.per, _this.max)
      }
      document.onmouseup = function () {
        _this.$emit('slideValue', parseInt(_this.scale * (_this.max - _this.min)))
        document.onmousemove = document.onmouseup = null
      }
      return false
    }
  },
  computed: {
    // 设置一个百分比，提供计算slider进度宽度和trunk的left值
    // 对应公式为  当前值-最小值/最大值-最小值 = slider进度width / slider总width
    // trunk left =  slider进度width + trunk宽度/2
    scale () {
      // console.log((this.per - this.min) / (this.max - this.min))
      return (this.per - this.min) / (this.max - this.min)
    },

    width () {
      if (this.slider) {
        return this.slider.offsetWidth * this.scale + 'px'
      } else {
        return 0 + 'px'
      }
    },
    left () {
      if (this.slider) {
        return this.slider.offsetWidth * this.scale - this.thunk.offsetWidth / 2 + 'px'
      } else {
        return 0 + 'px'
      }
    }
  },
  methods: {
    reset () {
      this.per = 0
    }
  }
}
</script>
<style scoped>
  .box {
    margin:1rem auto 0;
    width:80%
  }
  .clear:after {
    content:'';
    display:block;
    clear:both;
  }
  .slider {
    position:relative;
    height:0.1rem;
    background:#e4e7ed;
    border-radius:0.05rem;
    margin-top: 0.1rem;
    cursor:pointer
  }
  .slider-title {
    display: flex;
    font-size:0.13rem;
    font-weight:400;
    font-style:italic;
    color: #DFE2FD;
  }
  .min-unti {
    flex: 1;
  }
  .max-unti {
    flex: 1;
    text-align: right;
  }
  .slider-box {
    position: relative;
    height: 0.3rem;
  }
  .slider .process {
    position:absolute;
    left:0;
    top:0;
    width:1.12rem;
    height:0.1rem;
    border-radius:0.05rem;
    background:#409eff
  }
  .slider .thunk {
    position:absolute;
    left:1rem;
    top:-0.07rem;
    width:0.2rem;
    height:0.2rem
  }
  .slider .block {
    width:0.1rem;
    height:0.2rem;
    border-radius:0.1rem;
    border:0.02rem solid #409eff;
    background:rgba(255,255,255,1);
    transition:.2s all
  }
  .slider .tips {
    position:absolute;
    left:-0.07rem;
    bottom:0.2rem;
    min-width:0.5rem;
    text-align:center;
    font-size:0.13rem;
    font-weight:400;
    font-style:italic;
    padding: 0.02rem 0;
    background: rgba(229,87,17, 0.8);
    color: #DFE2FD;
    border-radius: 0.05rem;
  }
  .slider .tips i {
    position:absolute;
    margin-left:-0.05rem;
    left:50%;
    bottom:-0.09rem;
    font-size:0.16rem;
    color:#000
  }
  .slider .block:hover {
    transform:scale(1.1);
    opacity:.6
  }
</style>
