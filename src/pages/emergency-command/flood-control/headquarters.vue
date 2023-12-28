<!--
 @Descripttion:
 * @Author: renting
 * @Date: 2020-04-26
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-21 20:15:22
 -->
<template>
  <div class="heart-head-quaters">
    <div class="heart-head-head">
      <div class="heart-head-head-one">
        <div class="area-title"></div>
        <div class="area-name" @click="handleNav(0)" :style="{fontWeight: active===0?'bold':'normal'}">指挥部</div>
        <div class="area-name" @click="handleNav(1)" :style="{fontWeight: active===1?'bold':'normal'}">应急预案</div>
      </div>
      <div class="heart-head-head-two">
        <img @click="handleClose" src="../../../assets/common/natural-close.png">
      </div>
    </div>
    <div class="heart-head-singe-box" v-show="active===0">
      <div class="heart-head-singe">
        <div class="heart-head-sing-head">
          <span>指挥长</span>
          <div class="line"></div>
          <img
            src="../../../assets/common/lleft.png"
            :style="{transform: choosed.one ? 'rotate(90deg)' : 'rotate(0deg)'}"
            @click="handleShow('one')">
        </div>
        <div class="heart-head-sing-body" v-show="choosed.one">
          <div style="width: 100%">
            <div class="name" style="width: auto">{{data.data1.fx01005}}</div>
            <img @click="note(data.data1.fx01006, data.data1.fx01005)" src="../../../assets/emergency-command/emergency-command-chart/message-d.png">
            <img @click="phone(data.data1.fx01006, data.data1.fx01005)" src="../../../assets/common/phone.png">
          </div>
        </div>
      </div>
      <div class="heart-head-singe">
        <div class="heart-head-sing-head">
          <span>办公室</span>
          <div class="line"></div>
          <img
            src="../../../assets/common/lleft.png"
            :style="{transform: choosed.two ? 'rotate(90deg)' : 'rotate(0deg)'}"
            @click="handleShow('two')">
        </div>
        <div class="heart-head-sing-body1" v-show="choosed.two">
          <div>
            <div class="body-one">
              <div class="name">
                <span>办公室负责人：</span>
                <span>{{data.data1.fx01001}}</span>
              </div>
            </div>
            <div class="body-two">
              <span>电话：</span>
              <span>{{data.data1.fx01002}}</span>
              <img @click="note(data.data1.fx01002, data.data1.fx01001)" src="../../../assets/emergency-command/emergency-command-chart/message-d.png">
              <img @click="phone(data.data1.fx01002, data.data1.fx01001)" src="../../../assets/common/phone.png">
            </div>
          </div>
          <div>
            <div class="body-one">
              <div class="name">
                <span>办公室负责人：</span>
                <span>{{data.data1.fx01003}}</span>
              </div>
            </div>
            <div class="body-two">
              <span>电话：</span>
              <span>{{data.data1.fx01004}}</span>
              <img @click="note(data.data1.fx01004, data.data1.fx01003)" src="../../../assets/emergency-command/emergency-command-chart/message-d.png">
              <img @click="phone(data.data1.fx01004, data.data1.fx01003)" src="../../../assets/common/phone.png">
            </div>
          </div>
        </div>
      </div>
      <div class="heart-head-singe">
        <div class="heart-head-sing-head">
          <span>副指挥长</span>
          <div class="line"></div>
          <img
            src="../../../assets/common/lleft.png"
            :style="{transform: choosed.three ? 'rotate(90deg)' : 'rotate(0deg)'}"
            @click="handleShow('three')">
        </div>
        <div class="heart-head-sing-body" v-show="choosed.three">
          <div v-for="(item, index) in data.data2" :key="index">
            <div class="name" @mouseenter="showTitle($event)" @mouseleave="hideTitle">{{item.fx02002}}</div>
            <img @click="note(item.fx02003, item.fx02002)" src="../../../assets/emergency-command/emergency-command-chart/message-d.png">
            <img @click="phone(item.fx02003, item.fx02002)" src="../../../assets/common/phone.png">
          </div>
        </div>
      </div>
      <div class="heart-head-singe">
        <div class="heart-head-sing-head">
          <span>成员单位</span>
          <div class="line"></div>
          <img
            src="../../../assets/common/lleft.png"
            :style="{transform: choosed.four ? 'rotate(90deg)' : 'rotate(0deg)'}"
            @click="handleShow('four')">
        </div>
        <div class="heart-head-sing-body" v-show="choosed.four">
          <div  v-for="(item, index) in data.data3" :key="index">
            <div class="name" @mouseenter="showTitle($event)" @mouseleave="hideTitle">{{item.fx02002}}</div>
            <img @click="note(item.fx02003, item.fx02002)" src="../../../assets/emergency-command/emergency-command-chart/message-d.png">
            <img @click="phone(item.fx02003, item.fx02002)" src="../../../assets/common/phone.png">
          </div>
        </div>
      </div>
    </div>
    <div class="heart-head-font-box" v-show="active===1">
      <div class="heart-head-singe">
        <div class="heart-head-sing-head">
          <span>江河洪水预警标准</span>
          <div class="line"></div>
          <img
            src="../../../assets/common/lleft.png"
            :style="{transform: choosed.five ? 'rotate(90deg)' : 'rotate(0deg)'}"
            @click="handleShow('five')">
        </div>
        <div class="heart-head-sing-font" v-show="choosed.five">
          {{data4.fx03001}}
        </div>
      </div>
      <div class="heart-ttt">
        <span>应急响应</span>
        <div class="select-response">
          <nav-list
            v-if="data.data5"
            :data="data.data5"
            :activeIndex="warnIndex"
            @handleClick="chooseWarningLevel"></nav-list>
        </div>
      </div>
      <div class="heart-head-singe">
        <div class="heart-head-sing-head point-head">
          <span>{{change(warnLevel)}}级应急响应启动条件和程序</span>
          <div class="line"></div>
          <img
            src="../../../assets/common/lleft.png"
            :style="{transform: choosed.six ? 'rotate(90deg)' : 'rotate(0deg)'}"
            @click="handleShow('six')">
        </div>
        <div class="heart-head-sing-font" v-show="choosed.six">
          {{data4.fx03003}}
        </div>
      </div>
      <div class="heart-head-singe">
        <div class="heart-head-sing-head point-head">
          <span>{{change(warnLevel)}}级应急响应行动</span>
          <div class="line"></div>
          <img
            src="../../../assets/common/lleft.png"
            :style="{transform: choosed.seven ? 'rotate(90deg)' : 'rotate(0deg)'}"
            @click="handleShow('seven')">
        </div>
        <div class="heart-head-sing-font" v-show="choosed.seven">
          {{data4.fx03004}}
        </div>
      </div>
      <div class="heart-head-singe">
        <div class="heart-head-sing-head point-head">
          <span>{{change(warnLevel)}}级应急响应终止</span>
          <div class="line"></div>
          <img
            src="../../../assets/common/lleft.png"
            :style="{transform: choosed.eight ? 'rotate(90deg)' : 'rotate(0deg)'}"
            @click="handleShow('eight')">
        </div>
        <div class="heart-head-sing-font" v-show="choosed.eight">
          {{data4.fx03005}}
        </div>
      </div>
      <div class="heart-head-singe">
        <div class="heart-head-sing-head point-head">
          <span>附表</span>
          <div class="line"></div>
          <img
            src="../../../assets/common/lleft.png"
            :style="{transform: choosed.night ? 'rotate(90deg)' : 'rotate(0deg)'}"
            @click="handleShow('night')">
        </div>
        <div class="heart-head-sing-jkl" v-show="choosed.night">
          <div>
            <div>乐山市防汛抢险指挥流程图</div>
            <div>乐山市重要水库基本情况表</div>
          </div>
          <div>
            <div>乐山市防汛指挥网络图</div>
            <div>乐山市主要江河洪水等级划分表</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navList from '@/components/select-normal.vue'
import APIS from '@/api/emergency-command/floodControl.js'
export default {
  name: 'headquarters',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    navList
  },
  mounted () {
    let i = 0
    this.data.data5.map((re, index) => {
      if (re.id === this.data4.fx03002) {
        i = index
      }
    })
    this.warnIndex = i
    this.data4 = JSON.parse(JSON.stringify(this.data.data4))
  },
  data () {
    return {
      choosed: {},
      active: 0,
      warningLevelList: [
        {label: 'Ⅰ级方案'}
      ],
      warnLevel: '01',
      warnIndex: 0,
      data4: {}
    }
  },
  methods: {
    handleShow (flag) {
      if (this.choosed[flag]) {
        this.$set(this.choosed, flag, false)
      } else {
        this.$set(this.choosed, flag, true)
      }
    },
    // 切换
    handleNav (flag) {
      this.active = flag
    },
    // 关闭
    handleClose () {
      this.$emit('close')
    },
    // 改变预案等级
    chooseWarningLevel (index, item) {
      this.warnLevel = item.id
      this.queryCaseInfoByType(item.id)
    },
    change (f) {
      let j = ''
      this.data.data5.map(re => {
        if (re.id === f) {
          j = re.label
        }
      })
      return j.split(' ')[0]
    },
    // 根据应急响应等级查询应急预案信息
    queryCaseInfoByType (type) {
      APIS.QUERY_CASE_INFO_TYPE(this, {type}).then((resA) => {
        if (resA.data.serviceSuccess) {
          this.data4 = resA.data.data.data
          console.log(resA.data.data.data)
        } else {
          console.log(resA.data.errors)
        }
      })
    },
    // 电话、短信
    note (phone, name) {
      this.$emit('handleNote', phone, name)
    },
    phone (phone, name) {
      this.$emit('handleCall', phone, name)
    },
    // 鼠标移入显示标题
    showTitle (e) {
      this.$emit('showTitle', e)
    },
    hideTitle () {
      this.$emit('hideTitle')
    }
  }
}
</script>

<style lang="scss" scoped>
  .heart-head-quaters{
    width: 6.5rem;
    padding: .4rem .3rem .4rem .3rem;
    background: url("../../../assets/common/popfailbg.png") no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    .area-title{
      height: .25rem;
      position: relative;
      font-size: .2rem;
      color: rgba(255,255,255,1);
      padding-left: .2rem;
      &:after{
        content: '';
        position: absolute;
        top: .1rem;
        left: .14rem;
        width: .13rem;
        height: .13rem;
        background: rgba(0,126,251,1);
      }
      &:before{
        box-sizing: border-box;
        content: '';
        position: absolute;
        top: .05rem;
        left: .1rem;
        width: .13rem;
        height: .13rem;
        border: 2px solid rgba(253,209,0,1);
      }
    }
    .heart-head-head{
      display: flex;
      justify-content: space-between;
      .heart-head-head-one{
        display: flex;
        align-items: center;
        .area-title{
          color: #fff;
          font-size: .24rem;
        }
        .area-name{
          cursor: pointer;
          color: #E0E3FB;
          font-size: .22rem;
          margin-left: .22rem;
        }
      }
      .heart-head-head-two{
        img{
          width: .3rem;
          height: .3rem;
          cursor: pointer;
        }
      }
    }
    .heart-head-singe-box,
    .heart-head-font-box{
      cursor: default;
      height: 5.6rem;
      overflow-y: auto;
    }
    .heart-head-singe{
      font-size: .18rem;
      font-weight: bold;
      color: #fff;
      padding-left: .1rem;
      margin-top: .2rem;
      .heart-head-sing-head{
        display: flex;
        align-items: center;
        .line{
          flex: 1;
          border-bottom: .01rem dashed rgba(0,255,238,.4);
          margin: 0 .2rem;
        }
        img{
          width: .15rem;
          height: .15rem;
          cursor: pointer;
          transition: transform ease .3s;
        }
      }
      .heart-head-sing-body{
        font-weight: normal;
        max-height: 2.4rem;
        overflow: auto;
        > div{
          float: left;
          width: 33%;
          text-align: center;
          margin-top: .23rem;
          display: flex;
          font-size: .17rem;
          .name{
            position: relative;
            padding-left: .2rem;
            width: 1.1rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: left;
            &::before{
              position: absolute;
              top: .08rem;
              left: .1rem;
              content: '';
              display: block;
              width: .06rem;
              height: .06rem;
              background: #27EBFF;
            }
          }
        }
        img{
          width: .25rem;
          height: .25rem;
          margin-left: .08rem;
          cursor: pointer;
        }
        &::after{
          content: '';
          display: block;
          width: 0;
          clear: both;
          overflow: hidden;
        }
      }
      .heart-head-sing-body1{
        > div{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-right: .5rem;
          margin-top: .12rem;
          img{
            width: .25rem;
            height: .25rem;
          }
          .body-one{
            font-weight: normal;
            margin-top: .03rem;
            img{
              cursor: pointer;
            }
            .name{
              position: relative;
              padding-left: .25rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              &::before{
                position: absolute;
                top: .08rem;
                left: .1rem;
                content: '';
                display: block;
                width: .06rem;
                height: .06rem;
                background: #27EBFF;
              }
              font-size: .18rem;
              color: #fff;
              span:nth-child(2){
                color: #FBE62F;
              }
            }
          }
          .body-two{
            display: flex;
            align-items: center;
            font-weight: normal;
            img{
              margin-left: .05rem;
              cursor: pointer;
            }
            span:nth-child(2){
              color: #FBE62F;
              margin-right: .1rem;
            }
          }
        }
      }
    }
    .heart-ttt{
      display: flex;
      align-items: center;
      margin-top: .2rem;
      justify-content: space-between;
      padding-left: .1rem;
      > span{
        font-size: .18rem;
        font-weight: bold;
        color: #fff;
      }
      .select-response{
        width: 1.2rem;
        height: .3rem;
        border: .01rem solid #298FF7;
        border-radius: .02rem;
        cursor: pointer;
        font-weight: bold;
        font-style: italic;
      }
    }
    .heart-head-sing-font{
      margin-top: .2rem;
      padding: .17rem;
      background: rgba(131,235,255,0.2);
      color: #DFE2FD;
      font-size: .16rem;
      line-height: 180%;
      letter-spacing: .015rem;
      border-radius: .05rem;
    }
    .heart-head-sing-jkl{
      > div {
        display: flex;
        color: #27EBFF;
        font-size: .18rem;
        font-weight: bold;
        div{
          flex: 1;
          position: relative;
          padding-left: .2rem;
          margin-top: .1rem;
          font-style: italic;
          &::before{
            position: absolute;
            top: .08rem;
            left: .02rem;
            content: '';
            display: block;
            width: .06rem;
            height: .06rem;
            background: #27EBFF;
          }
        }
      }
    }
    .point-head{
      position: relative;
      padding-left: .2rem;
      &::before{
        position: absolute;
        top: .08rem;
        left: .02rem;
        content: '';
        display: block;
        width: .06rem;
        height: .06rem;
        background: #27EBFF;
      }
    }
  }
</style>
