<template>
  <div class="digital-economy-container">
    <head-component name="数字经济"></head-component>
    <div class="left-panle">
      <div class="hover-div">
        <div class="title title-color">数字经济发展机制（{{mechanism.sz01001}}年）<img src="@/assets/common/panle-title.png"/></div>
        <div class="mechanism">
        <div class="first">
          <img src="@/assets/programme/digital-economy/top-left.png" alt="">
          <div class="num">
            <p>数字经济发展协会会员</p>
            <p><span>{{mechanism.sz01002}}</span>家</p>
          </div>
        </div>
        <div class="center" @click="showTopPop=!showTopPop">
          <img src="@/assets/programme/digital-economy/top-center.png" alt="">
          <div class="num" style="width: 1.5rem">
            <p>顶层规划</p>
            <p><span>{{mechanism.sz01003}}</span>个</p>
          </div>
          <div class="pop" v-show="showTopPop">
            <p>{{mechanism.sz01005_1}}</p>
            <p>{{mechanism.sz01005_2}}</p>
          </div>
        </div>
        <div class="last">
          <img src="@/assets/programme/digital-economy/top-right.png" alt="">
          <div class="num">
            <p>经济发展支持政策</p>
            <p><span>{{mechanism.sz01004}}</span>条</p>
          </div>
        </div>
      </div>
      </div>
      <div class="hover-div">
        <div class="title2 title-color">数字产业发展情况（{{mechanism.sz01001}}年）<img src="@/assets/common/panle-title.png"/></div>
        <transition-group name="slide" class="slide-wrap">
        <div class="swipe-item" v-show="coreIndex===0" key='0' @mouseenter="stop" @mouseleave="autoPlay">
          <div class="little-title">招商引资项目</div>
          <div class="swipe-item-left">
            <p class="p1"><span>大数据运营</span>  {{investmentProjects.sz03002}}</p>
            <p class="p2"><span>信息安全中心</span>  {{investmentProjects.sz03003}}</p>
            <p class="p3"><span>IDC大数据中心</span>  {{investmentProjects.sz03004}}</p>
          </div>
          <div class="swipe-item-right">
            <div class="company-num">签约数字企业：</div>
            <div class="monitoring-left-value">
              <div v-for="(item, index) in keyCompanyNum" :key="index">{{item}}</div>
              <div class="monitor-unit">家</div>
            </div>
            <div class="company-num2">完成投资金额：</div>
            <div class="monitoring-left-value">
              <div v-for="(item, index) in keyCompanyNum2" :key="index">{{item}}</div>
              <div class="monitor-unit">亿</div>
              <div class="monitor-unit">元</div>
            </div>
          </div>
        </div>
        <div class="swipe-item2" v-show="coreIndex===1" key='1' @mouseenter="stop" @mouseleave="autoPlay">
          <div class="little-title">数字产业化</div>
          <ul class="toIndustry">
            <li>
              <p>大数据产业园</p>
              <p>总投资：<span>{{industrialPark.sz04002}}</span> 亿元</p>
              <div id="left-echarts-01"></div>
              <div class="main-count">
                <p>{{industrialPark.sz04003+industrialPark.sz04005+industrialPark.sz04006+industrialPark.sz04007}}</p>
                <p>企业</p>
                <p>(家)</p>
              </div>
            </li>
            <li>
              <p>数字经济创新示范区</p>
              <p>总投资：<span>{{industrialPark.sz04008}}</span> 亿元</p>
              <div id="left-echarts-02"></div>
              <div class="main-count">
                <p>{{industrialPark.sz04009+industrialPark.sz04010+industrialPark.sz04011}}</p>
                <p>企业</p>
                <p>(家)</p>
              </div>
            </li>
            <li>
              <p>电子信息半导体产业园</p>
              <p>总投资：<span>{{industrialPark.sz04012}}</span> 亿元</p>
              <div id="left-echarts-03"></div>
              <div class="main-count">
                <p>{{industrialPark.sz04013+industrialPark.sz04014}}</p>
                <p>企业</p>
                <p>(家)</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="swipe-item3" v-show="coreIndex===2" key='2' @mouseenter="stop" @mouseleave="autoPlay">
          <div class="little-title">产业数字化</div>
          <ul class="toNumber">
            <li>
              <img src="@/assets/programme/digital-economy/to-number-item1.png" alt="">
              <p>入驻企业</p>
              <p>约<span>{{coreIndustry.sz05002}}</span>户</p>
            </li>
            <li>
              <img src="@/assets/programme/digital-economy/to-number-item2.png" alt="">
              <p>信息化建设</p>
              <p>累计近<span>{{coreIndustry.sz05003}}</span>亿元</p>
            </li>
            <li>
              <img src="@/assets/programme/digital-economy/to-number-item3.png" alt="">
              <p>企业上云</p>
              <p><span>{{coreIndustry.sz05004}}</span>户</p>
            </li>
          </ul>
        </div>
      </transition-group>
      </div>
      <div class="hover-div">
        <div class="title3 title-color">数字政府建设情况（{{mechanism.sz01001}}年）<img src="@/assets/common/panle-title.png"/></div>
        <div class="left-bottom1">
        <div :class="[qiuActive1? 'top1 qiu-active':'top1 qiu']" @mouseenter="showMain1" @click="showMain1" @mouseleave="hideMain">
          <div class="main">
            <p>信息化</p>
            <p>项目</p>
          </div>
          <div class="main-pop" v-show="qiuActive1">
            <div class="item">
              <p>申报资金</p>
              <div class="count"><span>{{digitalGovernment.sz07002}} </span>亿元</div>
            </div>
            <div class="item">
              <p>累计备案项目</p>
              <div class="count"><span>{{digitalGovernment.sz07003}} </span>个</div>
            </div>
            <div class="item">
              <p>审减资金</p>
              <div class="count">约 <span>{{digitalGovernment.sz07004}} </span>万元</div>
            </div>
          </div>
        </div>
        <div  :class="[qiuActive2? 'top2 qiu-active':'top2 qiu']" @mouseenter="showMain2" @click="showMain2" @mouseleave="hideMain">
          <div class="main">
            <p>云服务</p>
            <p>建设</p>
          </div>
          <div class="main-pop2" v-show="qiuActive2">
            <div class="yun">{{digitalGovernment.sz07005}}</div>
            <div class="yun">上云部门：<span>{{digitalGovernment.sz07006}}</span>个</div>
            <div class="yun">上云系统：<span>{{digitalGovernment.sz07007}}</span>个</div>
          </div>
        </div>
        <div  :class="[qiuActive3? 'center1 qiu-active':'center1 qiu']" @mouseenter="showMain3"  @click="showMain3" @mouseleave="hideMain">
          <div class="main">
            <p>政务网</p>
            <p>站管理</p>
          </div>
          <div class="main-pop3" v-show="qiuActive3">
            <div class="zhengwu">{{digitalGovernment.sz07008}}</div>
            <div class="zhengwu">完成集约化部门：<span>{{digitalGovernment.sz07009}}</span>个</div>
            <div class="zhengwu">完成集约化区县：<span>{{digitalGovernment.sz07010}}</span>个</div>
          </div>
        </div>
        <div  :class="[qiuActive4? 'center2 qiu-active':'center2 qiu']" @mouseenter="showMain4"  @click="showMain4" @mouseleave="hideMain">
          <div class="main">
            <p>重点项</p>
            <p>目建设</p>
          </div>
          <div class="main-pop4" v-show="qiuActive4">
            <div class="impor"><span>01. </span>{{digitalGovernment.sz07011_1}}</div>
            <div class="impor"><span>02. </span>{{digitalGovernment.sz07011_2}}</div>
            <div class="impor"><span>03. </span>{{digitalGovernment.sz07011_3}}</div>
            <div class="impor"><span>04. </span>{{digitalGovernment.sz07011_4}}</div>
          </div>
        </div>
      </div>
      </div>
      <div class="hover-div">
        <div class="title4 title-color">新基建建设情况（{{mechanism.sz01001}}年）<img src="@/assets/common/panle-title.png"/></div>
        <div class="left-top-title">2019年2月24日数字经济局正式挂牌成立</div>
        <div class="left-bottom2">
          <div :class="[gotoTop?'menu-wrap2':'menu-wrap']">
            <div class="li0" @click="goTop">
            <p class="li-title">通信产业</p>
            <P>业务总量：<span>{{fifthGeneration.sz06009}}</span> 亿元</P>
          </div>
          <div class="li1">
            <p class="li-title">5G投资</p>
            <P>签约金额：<span>{{fifthGeneration.sz06002}}</span> 亿元</P>
          </div>
          <div :class="[showChange?'li2-1':'li2']">
            <p class="li-title">5G建设</p>
            <P>5G站点：<span>{{fifthGeneration.sz06003}}</span> 个  投资金额：<span>{{fifthGeneration.sz06004}}</span> 亿元</P>
          </div>
          <div :class="[showChange?'li3-1':'li3']">
            <p class="li-title">5G创新</p>
            <P>{{fifthGeneration.sz06005_1}}</P>
          </div>
          <div :class="[showChange?'li4-1':'li4']" @click="golow">
            <p class="li-title">无线电管理</p>
            <P>销售备案：<span>{{fifthGeneration.sz06006}}</span> 件  排查干扰：<span>{{fifthGeneration.sz06007}}</span> 起</P>
            <P>查处“黑广播”： <span>{{fifthGeneration.sz06008}}</span> 起</P>
          </div>
          </div>
        </div>
      </div>
      <!-- <div class="swipe-wrap">
        <ul class="swipe" ref="swiper">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="left-button" @click="P">q</div>
        <div class="right-button" @click="goNext">p</div>
      </div> -->
      <div class="swipe-bottom">
        <div class="prov" @click="goProv"></div>
        <div :class="[coreIndex===0?'circle-active':'circle']"></div>
        <div :class="[coreIndex===1?'circle-active':'circle']"></div>
        <div :class="[coreIndex===2?'circle-active':'circle']"></div>
        <div class="next" @click="goNext"></div>
      </div>
    </div>
    <!-- 侧边栏 -->
    <div class="left-lists">
      <ul>
        <li>
          <div class="title">网络交易总额</div>
          <p><span>{{generalOverview.sz02002}}</span>亿元</p>
          <div class="list-botttom">同比增长 <img src="@/assets/programme/digital-economy/zengzhang1.png" alt=""><span>{{generalOverview.sz02003}}% </span>  省内第 <span>{{generalOverview.sz02004}}</span> 位</div>
        </li>
        <li>
          <div class="title">网络零售额</div>
          <p><span>{{generalOverview.sz02005}}</span>亿元</p>
          <div class="list-botttom">同比增长 <img src="@/assets/programme/digital-economy/zengzhang1.png" alt=""><span>{{generalOverview.sz02006}}% </span>  省内第 <span>{{generalOverview.sz02007}}</span> 位</div>
        </li>
        <li>
          <div class="title">农村网络零售额</div>
          <p><span> {{generalOverview.sz02008}} </span>亿元</p>
        </li>
      </ul>
    </div>
    <div class="right-panle"></div>
    <!-- 视频 -->
    <div class="videoShow" v-if="showVideo1">
      <span style="position:absolute;right:0.2rem;top:0;z-index:99;font-size:0.5rem;color:white" @click="showVideo1=false">X</span>
      <video controls  style="height:100%;width:100%;z-index:9999;" autoplay>
        <source src="http://10.10.190.132/video28e136edc9039b4d4269c89aa3311b6a.mp4" type="video/mp4">
        <source src="http://10.10.190.132/video28e136edc9039b4d4269c89aa3311b6a.mp4" type="video/ogg">
      </video>
    </div>
    <div class="show-video" v-show="littleshow"  @click="littleshow = !littleshow"><span>5G + 无 人 机 表 演</span><img src="../../../assets/programme/digital-economy/video-toright.png"></div>
    <div class="g-live-video" v-show="!littleshow">
        <div class="g-live-title" @click="littleshow=!littleshow"><span>5G + 无 人 机 表 演</span><img src="../../../assets/programme/digital-economy/video-toleft.png"></div>
        <div class="g-live-item">
          <img src="../../../assets/achievement/service-join/bofang.png" @click="playvideo1" class="playvideo1">
          <video>
            <source src="http://10.10.190.132/video28e136edc9039b4d4269c89aa3311b6a.mp4" type="video/mp4">
          </video>
        </div>
      </div>
      <!-- 视频结束 -->
      <div class="g-menu-box">
        <menu-list></menu-list>
      </div>
      <!-- 右侧 -->
     <div class="right-panle">
      <div class="title hover-color">发展目标（2020-2025年）<img src="@/assets/common/panle-title.png"/></div>
      <div class="right-panle-top-left">
        <span>全省数字经济发展先导示范区</span>
      </div>
      <div class="right-panle-top-center">
        <div @click="rightSelectIndex=0" :class="{'select-icon':rightSelectIndex===0}" class="cricle-01 cricle-common">
         4个<br/>数字产业化
        </div>
        <img class="cricle-img-01" v-if="rightSelectIndex===0" src="@/assets/programme/digital-economy/right-arrow.png"/>
        <div @click="rightSelectIndex=1" :class="{'select-icon':rightSelectIndex===1}" class="cricle-02 cricle-common">
         5个<br/>产业数字化
        </div>
        <img class="cricle-img-02"  v-if="rightSelectIndex===1" src="@/assets/programme/digital-economy/right-arrow.png"/>
      </div>
      <div class="right-panle-top-right">
        <div class="right-top-box">
          <div class="right-top-box-item" :class="{'select-color':item.id===rightInfoWindowId}" @click="selectRightTop(item)" v-for="(item,i) in rightTopList[rightSelectIndex]" :key="i">{{item.text}}</div>
        </div>
      </div>
    </div>
    <div class="right-panle-02">
      <div class="title hover-color">发展方向和重点（2020-2025年）<img src="@/assets/common/panle-title.png"/></div>
      <div class="right-panple-02-left">
        <div class="banner-box" @mouseenter="stop2" @mouseleave="slideRight">
          <img class="left-arrow"  @click="add" src="@/assets/programme/digital-economy/left-a.png"/>
          <img class="right-arrow" @click="reduce" src="@/assets/programme/digital-economy/right-a.png"/>
          <div :class="['banner-'+item.index]" class=" banner-item" v-for="(item,index) in banner" :key="index">
           <img :src="item.info.icon"/>
           <p>{{item.info.name}}</p>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="dot"></div>
      <div class="right-panple-02-right">
        <div class="right-info-title"><img src="@/assets/common/top-title.png"/>{{selectBannerList.title}}</div>
        <div class="right-info-box">
          <div class="right-info-box-item" @click="selectRightTop02(item)"  :class="{'border-none':index===selectBannerList.list.length-1}" v-for="(item,index) in selectBannerList.list" :key="index">
            <div class="icon-react"></div><span :title="item.text">{{item.text}}</span>
            <div class="more"> >></div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-info" v-if="rightInfoWindowId!=0">
      <div class="right-info-title">{{rightInfoWindow.title}}</div>
      <img class="close" @click="rightInfoWindowId=0" src="@/assets/common/closepopicon.png"/>
      <div class="text-box">
       <img src="@/assets/programme/digital-economy/icon01.png" align="left"  hspace="5" vspace="5"/>
       {{rightInfoWindow.info}}
      </div>
    </div>
    <div class="right-info-02 right-info" v-if="rightInfoWindowId02!=0" >
      <div class="right-info-title" @mouseenter="showTooltip($event)" @mouseleave="hideTooltip">{{rightInfoWindow02.title}}</div>
      <img class="close" @click="rightInfoWindowId02=0" src="@/assets/common/closepopicon.png"/>
      <div class="text-box" v-html="rightInfoWindow02.info">

      </div>
    </div>
    <!-- 右侧结束 -->
    <areaMakers  ref="mapMakers"></areaMakers>
    <ul class="map-nav-box">
      <li @click="showMapList(1)">数字产业园区</li>
      <li @click="showMapList(2)">电子商务</li>
    </ul>
        <!-- 显示标题完整信息 -->
    <text-modal ref="textModal"></text-modal>
  </div>
</template>
<script>
import echarts from 'echarts'
import API from '@/api/programme/digital-economy.js'
import headComponent from '@/components/head-component'
import option1 from '@/echarts-data/programme/digital-economy/left-center-echarts-01.js'
import option2 from '@/echarts-data/programme/digital-economy/left-center-echarts-02.js'
import option3 from '@/echarts-data/programme/digital-economy/left-center-echarts-03.js'
import icon01 from '@/assets/programme/digital-economy/icon-01.png'
import icon02 from '@/assets/programme/digital-economy/icon-02.png'
import icon03 from '@/assets/programme/digital-economy/icon-03.png'
import icon04 from '@/assets/programme/digital-economy/icon-04.png'
import icon05 from '@/assets/programme/digital-economy/icon-05.png'
import text from '@/components/text.js'
import areaMakers from '@/pages/programme/digital-economy/area-makers.vue'
import menuList from '@/components/menu.vue'
import textModal from '@/components/text-modal' // 显示标题完整信息
export default {
  components: {headComponent, areaMakers, menuList, textModal},
  data () {
    return {
      showVideo1: false,
      showVideo2: false,
      littleshow: true,
      qiuActive1: false,
      qiuActive2: false,
      qiuActive3: false,
      qiuActive4: false,
      showTopPop: false,
      coreIndex: 0,
      gotoTop: false,
      showChange: false,
      mechanism: {}, // 数字经济发展机制
      investmentProjects: {}, // 招商引资项目
      industrialPark: {}, // 数字产业化
      coreIndustry: {}, // 产品数字化
      digitalGovernment: {}, // 数字政府建设情况
      fifthGeneration: {}, // 5G基础建设情况
      generalOverview: {}, // 电子商务
      keyCompanyNum: '',
      keyCompanyNum2: '',
      rightSelectIndex: 0,
      rightInfoWindowId: 0,
      timer: null,
      timer2: null,
      rightInfoWindow: {
        title: '',
        icon: '',
        info: ''
      },
      rightInfoWindowId02: 0,
      rightInfoWindow02: {
        title: '',
        info: ''
      },
      rightTopList: [
        [{
          text: '数字产业化聚集区',
          id: 1
        }, {
          text: '电子信息半导体产业园',
          id: 2
        }, {
          text: '宝德未来科技产业园',
          id: 3
        }, {
          text: '高-沙IDC产业示范带',
          id: 4
        }], [{
          text: '产业数字化示范园',
          id: 5
        }, {
          text: '西部文旅数字经济产业园',
          id: 6
        }, {
          text: '五-沙智能制造示范带',
          id: 7
        }, {
          text: '犍-沐智慧农业示范带',
          id: 8
        }, {
          text: '乐-峨智慧文旅示范带',
          id: 9
        }]
      ],
      selectBannerList: {
        title: '构建数字基础设施新体系',
        list: [
          {
            text: '抢抓5G网络建设机遇，加快5G商用部署步伐',
            id: 10
          },
          {
            text: '推进IPv6规模部署，加快新型泛在网络建设',
            id: 11
          }, {
            text: '打造新型信息基础设施体系，构建产业发展公共 服务平台',
            id: 12
          }, {
            text: '加强网络信息安全保障体系建设',
            id: 13
          }
        ]
      },
      banner: [{
        info: {
          name: '新体系',
          icon: icon05,
          selectBannerList: {
            title: '构建数字基础设施新体系',
            list: [
              {
                text: '抢抓5G网络建设机遇，加快5G商用部署步伐',
                id: 10
              },
              {
                text: '推进IPv6规模部署，加快新型泛在网络建设',
                id: 11
              }, {
                text: '打造新型信息基础设施体系，构建产业发展公共 服务平台',
                id: 12
              }, {
                text: '加强网络信息安全保障体系建设',
                id: 13
              }
            ]
          }
        },

        index: 0
      }, {
        info: {
          name: '新业态',
          icon: icon01,
          selectBannerList: {
            title: '培育数字融合应用新业态',
            list: [
              {
                text: '发展专业化生产性服务平台，大力发展平台经济',
                id: 14
              },
              {
                text: '依托乐山文化资源优势，发展数字文化创意产业',
                id: 15
              }, {
                text: '努力营造推进共享经济健康良性发展的良好氛围',
                id: 16
              }, {
                text: '深化网络支付应用场景，促进网络支付规模化应用',
                id: 17
              }, {
                text: '着力加强供给侧结构性改革，深化零售在消费领域的应用',
                id: 18
              }
            ]
          }
        },
        index: 1
      }, {
        info: {
          name: '新能力',
          icon: icon02,
          selectBannerList: {
            title: '赋能城市数字化治理新能力',
            list: [
              {
                text: '加快数字政府建设，推进政府数字化转型',
                id: 19
              },
              {
                text: '推动智慧民生应用服务，切实提高群众获得感',
                id: 20
              }
            ]
          }
        },
        index: 2
      }, {
        info: {
          name: '新动能',
          icon: icon03,
          selectBannerList: {
            title: '激发产业数字化新动能',
            list: [
              {
                text: '大力发展数字农业，推动农业“接二连三”融合发展',
                id: 21
              },
              {
                text: '推动制造业智能化发展，全面提升数字化能力',
                id: 22
              }, {
                text: '发展智慧文旅，推动文旅融合共兴',
                id: 23
              }, {
                text: '力发展电子商务，推进电子商务与传统产业深度融合',
                id: 24
              }, {
                text: '依托保税物流中心，大力发展智慧物流',
                id: 25
              }
            ]
          }
        },
        index: 3
      }, {
        info: {
          name: '新高地',
          icon: icon04,
          selectBannerList: {
            title: '打造数字产业化新高地',
            list: [
              {
                text: '推动高新区主战场建设',
                id: 26
              },
              {
                text: '发展软件和信息技术服务',
                id: 27
              }, {
                text: '大力发展电子信息产业',
                id: 28
              }, {
                text: '积极布局新兴前沿信息产业',
                id: 29
              }
            ]
          }
        },
        index: 4
      }]
    }
  },
  mounted () {
    this.getQueryMechanism()
    this.getQueryInvestmentProjects()
    this.getQueryIndustrialPark()
    this.getQueryCoreIndustry()
    this.getQueryDigitalGovernment()
    this.getQueryFifthGeneration()
    this.getQueryMapElectronicCommerce()
    this.autoPlay()
    this.slideRight()
  },
  methods: {
    showMapList (type) {
      if (type === 1) { // 数字产业园区
        this.$refs.mapMakers.getMapList()
      } else { // 电子商务
        this.$refs.mapMakers.getMapList2()
      }
    },
    autoPlay () {
      this.timer = setInterval(() => {
        this.coreIndex += 1
        if (this.coreIndex > 2) {
          this.coreIndex = 0
        }
      }, 5000)
    },
    stop () {
      clearInterval(this.timer)
      this.timer = null
    },
    stop2 () {
      clearInterval(this.timer2)
      this.timer2 = null
    },
    goTop () {
      this.gotoTop = true
      this.showChange = true
    },
    golow () {
      this.gotoTop = false
      this.showChange = false
    },
    // 获取侧边栏数据(电子商务)
    getQueryMapElectronicCommerce () {
      API.GET_MAP_TECH(this, {}).then((resA) => {
        let res = resA.data.data
        console.log(res.mapInfo.generalOverview)
        this.generalOverview = res.mapInfo.generalOverview
      }).catch(err => {
        console.log(err)
      })
    },
    // 数字经济发展机制
    getQueryMechanism () {
      API.QUERYMECHANISM(this, {}).then((resA) => {
        let res = resA.data.data
        console.log(res.mechanism)
        this.mechanism = res.mechanism
      }).catch(err => {
        console.log(err)
      })
    },
    // §2招商引资项目
    getQueryInvestmentProjects () {
      API.queryInvestmentProjects(this, {}).then((resA) => {
        let res = resA.data.data
        this.investmentProjects = res.investmentProjects
        console.log(res)
        let strNum = res.investmentProjects.sz03005 + ''
        if (strNum.length < 5) {
          let lose = 5 - strNum.length
          for (let i = 0; i < lose; i++) {
            strNum = '0' + strNum
          }
        }
        let strNum2 = res.investmentProjects.sz03006 + ''
        console.log(strNum2)
        if (strNum2.length < 5) {
          let lose = 5 - strNum2.length
          for (let i = 0; i < lose; i++) {
            strNum2 = '0' + strNum2
          }
        }
        this.keyCompanyNum = strNum
        this.keyCompanyNum2 = strNum2
      }).catch(err => {
        console.log(err)
      })
    },
    // §3数字产业化
    getQueryIndustrialPark () {
      API.queryIndustrialPark(this, {}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        this.industrialPark = res.industrialPark
        let param1 = [{
          data: res.industrialPark.sz04003,
          name: '正在洽谈企业'
        }, {
          data: res.industrialPark.sz04005,
          name: '合同协议谈判阶段企业'
        }, {
          data: res.industrialPark.sz04006,
          name: '已签约企业'
        }, {
          data: res.industrialPark.sz04007,
          name: '拟建成时签约企业'
        }]
        let param2 = [{
          data: res.industrialPark.sz04009,
          name: '正在洽谈企业'
        }, {
          data: res.industrialPark.sz04010,
          name: '拟入驻企业'
        }, {
          data: res.industrialPark.sz04011,
          name: '已签约入驻企业'
        }]
        let param3 = [{
          data: res.industrialPark.sz04013,
          name: '在谈拟入驻项目'
        }, {
          data: res.industrialPark.sz04014,
          name: '正式签约项目'
        }]
        this.$nextTick(() => {
          echarts.init(document.getElementById('left-echarts-01')).setOption(option1(param1))
          echarts.init(document.getElementById('left-echarts-02')).setOption(option2(param2))
          echarts.init(document.getElementById('left-echarts-03')).setOption(option3(param3))
        })
      }).catch(err => {
        console.log(err)
      })
    },
    // §4产业数字化
    getQueryCoreIndustry () {
      API.queryCoreIndustry(this, {}).then((resA) => {
        console.log(resA)
        let res = resA.data.data
        console.log(res)
        this.coreIndustry = res.coreIndustry
      }).catch(err => {
        console.log(err)
      })
    },
    // §5数字政府建设情况
    getQueryDigitalGovernment () {
      API.queryDigitalGovernment(this, {}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        this.digitalGovernment = res.digitalGovernment
      }).catch(err => {
        console.log(err)
      })
    },
    // 5G基础建设情况
    getQueryFifthGeneration () {
      API.queryFifthGeneration(this, {}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        this.fifthGeneration = res.fifthGeneration
      }).catch(err => {
        console.log(err)
      })
    },
    hideMain () {
      this.qiuActive2 = false
      this.qiuActive3 = false
      this.qiuActive4 = false
      this.qiuActive1 = false
    },
    showMain1 () {
      this.qiuActive2 = false
      this.qiuActive3 = false
      this.qiuActive4 = false
      this.qiuActive1 = !this.qiuActive1
    },
    showMain2 () {
      this.qiuActive2 = !this.qiuActive2
      this.qiuActive1 = false
      this.qiuActive3 = false
      this.qiuActive4 = false
    },
    showMain3 () {
      this.qiuActive3 = !this.qiuActive3
      this.qiuActive2 = false
      this.qiuActive1 = false
      this.qiuActive4 = false
    },
    showMain4 () {
      this.qiuActive4 = !this.qiuActive4
      this.qiuActive2 = false
      this.qiuActive3 = false
      this.qiuActive1 = false
    },
    playvideo1 () {
      this.showVideo1 = true
      this.showVideo2 = false
    },
    playvideo2 () {
      this.showVideo2 = true
      this.showVideo1 = false
    },
    goProv () {
      console.log('goProv')
      this.coreIndex -= 1
      if (this.coreIndex < 0) {
        this.coreIndex = 2
      }
    },
    goNext () {
      console.log('goNext')
      this.coreIndex += 1
      if (this.coreIndex > 2) {
        this.coreIndex = 0
      }
    },
    selectRightTop (item) {
      let o = text[item.id]
      this.rightInfoWindowId = item.id
      this.rightInfoWindow.title = item.text
      this.rightInfoWindow.icon = item.icon
      this.rightInfoWindow.info = o
    },
    selectRightTop02 (item) {
      let o = text[item.id]
      this.rightInfoWindowId02 = item.id
      this.rightInfoWindow02.title = item.text
      this.rightInfoWindow02.info = o
    },
    add () {
      this.banner.forEach((d) => {
        if (d.index < 4) {
          d.index++
        } else {
          d.index = 0
        }
        if (d.index === 0) {
          this.selectBannerList = d.info.selectBannerList
        }
      })
    },
    reduce () {
      this.banner.forEach((d) => {
        if (d.index > 0) {
          d.index--
        } else {
          d.index = 4
        }
        if (d.index === 0) {
          this.selectBannerList = d.info.selectBannerList
        }
      })
    },
    slideRight () {
      this.timer2 = setInterval(() => {
        this.add()
      }, 5000)
    },
    // 鼠标移入显示标题
    showTooltip (e) {
      this.$refs.textModal.showTooltip(e)
    },
    hideTooltip () {
      this.$refs.textModal.hideTooltip()
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../../../components/date-title.scss';
.digital-economy-container{
  position: absolute;
  background: #000000;
  .g-menu-box {
    position: absolute;
    left: 11.8rem;
    top: 9rem;
    z-index: 100;
  }
  .map-nav-box {
    list-style: none;
    position: absolute;
    left: 31rem;
    top: 1.1rem;
    z-index: 9;
    li {
      margin: 0;
      margin-bottom: 0.1rem;
      list-style: none;
      width: 1.47rem;
      height: 0.42rem;
      line-height: 0.42rem;
      text-align: center;
      font-size:0.18rem;
      font-family:Source Han Sans CN;
      font-weight:500;
      font-style:italic;
      color:rgba(155,233,252,1);
      background: url('../../../assets/common/model-kuang.png') no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
  }
  // 左侧
  .left-panle{
    position: absolute;
    width: 11.29rem;
    height: 9.99rem;
    top: 0.37rem;
    left: 0.28rem;
    background: url('../../../assets/programme/digital-economy/left-background.png') no-repeat;
    background-size: 100% 100%;
    z-index: 99;
    .title {
       position: absolute;
       top: 0.50rem;
       left: 0.46rem;
       height: 0.45rem;
       font-size: 0.24rem;
       color: #FFFFFF;
       padding: 0 0.16rem;
        img {
          position: absolute;
          width: 0.87rem;
          height: 0.18rem;
          left: 0;
          bottom: 0;
        }
     }
     .title2 {
       position: absolute;
       top: 2.2rem;
       left: 0.46rem;
       height: 0.45rem;
       font-size: 0.24rem;
       color: #FFFFFF;
       padding: 0 0.16rem;
        img {
          position: absolute;
          width: 0.87rem;
          height: 0.18rem;
          left: 0;
          bottom: 0;
        }
     }
     .title3 {
       position: absolute;
       top: 6rem;
       left: 0.46rem;
       height: 0.45rem;
       font-size: 0.24rem;
       color: #FFFFFF;
       padding: 0 0.16rem;
        img {
          position: absolute;
          width: 0.87rem;
          height: 0.18rem;
          left: 0;
          bottom: 0;
        }
     }
     .title4 {
       position: absolute;
       top: 6rem;
       left: 5.46rem;
       height: 0.45rem;
       font-size: 0.24rem;
       color: #FFFFFF;
       padding: 0 0.16rem;
        img {
          position: absolute;
          width: 0.87rem;
          height: 0.18rem;
          left: 0;
          bottom: 0;
        }
     }
     .left-top-title {
       position: absolute;
       width:3.18rem;
      font-size:0.17rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      font-style:italic;
      color:rgba(255,255,255,1);
      background: url('../../../assets/programme/digital-economy/left-top-line.png') no-repeat center center;
      background-size: 100% 100%;
      right: 0.5rem;
      top: 0.3rem;
      height: 0.8rem;
      line-height: 0.8rem;
     }
     .mechanism{
       position: absolute;
       top: 1.3rem;
       width: 100%;
       height: 0.75rem;
       img {
         width: 0.75rem;
         height: 0.75rem;
         float: left;
       }
       .num {
        width:2rem;
        height:0.18rem;
        font-size:0.18rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        font-style:italic;
        color:rgba(223,227,251,1);
        float: left;
        box-sizing: border-box;
        text-align: center;
        span{
          padding-right: 0.15rem;
          font-size:0.28rem;
          font-family:Impact;
          font-weight:bold;
          font-style:italic;
          color:rgba(252,230,77,1);
        }
        p:nth-child(1){
          padding-bottom: 0.05rem;
        }
        p:nth-child(2){
          background: url('../../../assets/programme/digital-economy/item-count.png') no-repeat center center;
          height: 0.5rem;
          line-height: 0.5rem;
        }
       }
       .first{
         display: inline-block;
        margin-left: 0.8rem;
       }
       .center {
         display: inline-block;
         margin-left: 1.12rem;
         position: relative;
         .pop{
           position: absolute;
           width: 3.41rem;
           height: 0.85rem;
           background: url('../../../assets/programme/digital-economy/left-top-pop.png') no-repeat;
           top: -0.6rem;
           left: 1.3rem;
           background-size: 100% 100%;
           p{
            font-size:0.16rem;
            font-family:Source Han Sans CN;
            font-weight:bold;
            font-style:italic;
            color:rgba(255,255,255,1);
            line-height: 0.2rem;
            padding-top: 0.1rem;
            padding-left: 0.1rem;
           }
         }
       }
       .last {
         display: inline-block;
         margin-left: 0.6rem;
       }
     }
     .swipe-item {
       width: 10rem;
       height: 3rem;
       position: absolute;
       .swipe-item-left {
         width: 5.21rem;
         height: 1.83rem;
         position: absolute;
         top: 0.8rem;
         left: 0.4rem;
         background: url('../../../assets/programme/digital-economy/left-center1.png') no-repeat center center;
         background-size: 100% 100%;
         p {
           font-size:0.16rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          font-style:italic;
          color:rgba(223,227,251,1);
         }
         span {
           font-size:0.17rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          color:rgba(0,0,0,1);
          padding-right: 0.2rem;
         }
         .p1{
           position: absolute;
           top: 0;
           left: 1.6rem;
         }
         .p2{
           position: absolute;
           top: 0.55rem;
            left: 2rem;
         }
         .p3{
           position: absolute;
           top: 1.2rem;
           left: 2.4rem;
         }
       }
       .swipe-item-right {
         width: 4rem;
         height: 1.83rem;
         position: absolute;
         left: 6.5rem;
         top: 0.5rem;
         .company-num{
            margin-top: .1rem;
            margin-left: .3rem;
            width: 1.56rem;
            height: .28rem;
            font-size: .17rem;
            font-family:Source Han Sans CN;
            font-weight: bold;
            font-style: italic;
            color: #FCE62F;
            border: 2px solid #FCE62F;
            text-align: center;
            line-height: .28rem;
          }
          .company-num2{
            margin-top: .1rem;
            margin-left: .3rem;
            width: 1.56rem;
            height: .28rem;
            font-size: .17rem;
            font-family:Source Han Sans CN;
            font-weight: bold;
            font-style: italic;
            color: #D5602C;
            border: 2px solid #D5602C;
            text-align: center;
            line-height: .28rem;
          }
          .monitoring-left-value{
            margin: .1rem 0 .1rem .25rem;
            display: flex;
            font-size: .42rem;
            color: #fff;
            align-items: flex-end;
            font-family: 'digital';
          }
          .monitoring-left-value>div{
            width: .35rem;
            height: .37rem;
            text-align: center;
            line-height: .37rem;
            border: 2px solid #189DDB;
            background: rgba(6, 75, 178, 0.8);
            border-radius: 5px;
            margin-left: 3px;
            padding: 3px;
            font-weight: bold;
          }
          .monitoring-left-value > .monitor-unit {
            width: .24rem;
            height: .24rem;
            line-height: .24rem;
            font-size: .18rem;
            font-weight: normal;
          }
       }
     }
     .swipe-item2 {
       width: 10rem;
       height: 3rem;
       position: absolute;
       .toIndustry{
         width: 10rem;
         height: 2.5rem;
         margin-top: 0.6rem;
         display: flex;
         justify-content: space-around;
         li {
           width: 2rem;
           height: 2rem;
           text-align: center;
           position: relative;
           p {
             font-size:0.18rem;
              font-family:Source Han Sans CN;
              font-weight:500;
              color:rgba(255,255,255,1);
              line-height: 0.3rem;
              span {
                font-size:0.2rem;
                font-family:Impact;
                font-weight:400;
                width: 0.35rem;
                display: inline-block;
                font-style:italic;
                color:rgba(250,252,255,1);
                text-shadow:0px 1px 10px rgba(147,229,252,0.28);
                background:linear-gradient(180deg,rgba(249,251,255,1) 0%, rgba(119,208,250,1) 100%);
                -webkit-background-clip:text;
                -webkit-text-fill-color:transparent;

              }
           }
         }
         .main-count {
           position: absolute;
           left: 0.5rem;
           right: 0;
           top: 1rem;
           width: 1rem;
           height: 0.7rem;
           p {
             font-size:0.16rem;
            font-family:Source Han Sans CN;
            font-weight:bold;
            font-style:italic;
            color:rgba(223,226,251,1);
            line-height: 0.2rem;
           }
           p:nth-child(1){
             font-size:0.28rem;
            font-family:Impact;
            font-weight:400;
            font-style:italic;
            color:rgba(250,252,255,1);
            line-height: 0.3rem;
            text-shadow:0px 1px 10px rgba(147,229,252,0.28);

            background:linear-gradient(180deg,rgba(249,251,255,1) 0%, rgba(85,183,221,1) 99.0478515625%);
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
           }
         }
         #left-echarts-01{
           width: 3rem;
           height: 1.4rem;
           position: absolute;
         }
         #left-echarts-02{
           width: 3rem;
           height: 1.4rem;
           position: absolute;
         }
         #left-echarts-03{
           width: 3rem;
           height: 1.4rem;
           position: absolute;
         }
       }
     }
     .swipe-item3 {
       width: 10rem;
       height: 3rem;
       position: absolute;
       .toNumber {
         width: 10rem;
         height: 2.5rem;
         margin-top: 0.6rem;
         display: flex;
         justify-content: space-around;
         li {
           width: 1.29rem;
           height: 2rem;
           background: url('../../../assets/programme/digital-economy/left-center-item.png');
           text-align: center;
           background-size: 1.29rem 2rem;
           img{
             margin-top: 0.2rem;
           }
           p{
             font-size:0.18rem;
              font-family:Source Han Sans CN;
              font-weight:bold;
              font-style:italic;
              color:rgba(223,227,251,1);
              span{
                font-family: Impact;
                font-weight: bold;
                font-style: italic;
                color: #fce64d;
                font-size:0.3rem;
                // font-family:Source Han Sans CN;
                // font-weight:bold;
                // font-style:italic;
                // display: inline-block;
                // color:rgba(252,230,77,1);
                // text-shadow:0px 2px 3px rgba(35,98,191,0.3);
                // background:linear-gradient(0deg,rgba(57,141,239,1) 0%, rgba(101,220,246,1) 100%);
                // -webkit-background-clip:text;
                // -webkit-text-fill-color:transparent;
                padding:0 0.05rem;
              }
           }
         }
       }
     }
     .little-title {
        position: absolute;
        top: 0.1rem;
        font-size:0.2rem;
        font-family:Source Han Sans CN;
        font-weight:500;
        color:rgba(255,255,255,1);
        height: 0.33rem;
        line-height: 0.33rem;
        padding-left: 0.4rem;
        background: url('../../../assets/programme/digital-economy/little-title.png') no-repeat left center;
       }
     .swipe-bottom {
         width: 2rem;
         height: 0.18rem;
         position: absolute;
         left: 0;
         right: 0;
         bottom: 4.1rem;
         margin: auto;
         text-align: center;
         .prov {
           width: 0.18rem;
           height: 100%;
           position: absolute;
           left: 0;
           background: url('../../../assets/programme/digital-economy/prov.png') no-repeat center center;
           cursor:pointer
         }
         .next {
           width: 0.18rem;
           height: 100%;
           position: absolute;
           right: 0;
           top: 0;
           background: url('../../../assets/programme/digital-economy/next.png') no-repeat center center;
           cursor:pointer
         }
         .circle {
           width: 0.08rem;
           height: 0.08rem;
           border-radius: 50%;
           margin: 0 0.1rem;
           background: #8CF0FC;
           display: inline-block;
           opacity: 0.4;
           margin-top: 0.05rem;
         }
         .circle-active {
           width: 0.08rem;
           height: 0.08rem;
           border-radius: 50%;
           display: inline-block;
           margin: 0 0.1rem;
           background: #8CF0FC;
           margin-top: 0.05rem;
         }
       }
    .left-bottom1{
      width: 3rem;
      height: 2.5rem;
      background: url('../../../assets/programme/digital-economy/left-bottom1.png') no-repeat center bottom;
      position: absolute;
      left: 1rem;
      top: 6.6rem;
      .top1 {
        width: 0.93rem;
        height: 1.2rem;
        position: absolute;
        left: 0.5rem;
        top: -0.2rem;
      }
      .top2 {
        width: 0.93rem;
        height: 1.2rem;
        position: absolute;
        left: 1.7rem;
        top: -0.2rem;
      }
      .center1 {
        width: 0.93rem;
        height: 1.2rem;
        position: absolute;
        left: -0.2rem;
        top: 0.8rem;
      }
      .center2 {
        width: 0.93rem;
        height: 1.2rem;
        position: absolute;
        left: 2.3rem;
        top: 0.8rem;
      }
      .qiu {
        background: url('../../../assets/programme/digital-economy/circle-03.png') no-repeat center bottom;
        cursor: pointer;
        background-size: 100% auto;
      }
      .qiu-active {
        background: url('../../../assets/programme/digital-economy/qiu-active.png') no-repeat center bottom;
        cursor: pointer;
        background-size: 100% 100%;
      }
      .main {
        margin-top: 0.5rem;
      }
      .main-pop {
        width: 3rem;
        height: 2rem;
        position: absolute;
        top: -0.5rem;
        right: -2.7rem;
        z-index: 100;
        background: url('../../../assets/programme/digital-economy/main-pop.png') no-repeat;
        background-size: 100% 100%;
        .item:nth-child(1) {
          margin-top: 0.2rem;
        }
        .item:nth-child(2) {
          margin-top: 0.2rem;
        }
        .item:nth-child(3) {
          margin-top: 0.1rem;
        }
        .item {
          width: 1.2rem;
          height: 0.8rem;
          margin-left: 0.2rem;
          display: inline-block;
          .count {
            width: 1.2rem;
            height: 0.56rem;
            background: url('../../../assets/programme/digital-economy/item-count.png') no-repeat;
            background-size: 1.2rem 0.56rem;
            font-size:0.15rem;
            font-family:Source Han Sans CN;
            font-weight:bold;
            font-style:italic;
            color:rgba(255,255,255,1);
            line-height: 0.56rem;
            text-align: center;
            span {
              font-size:0.26rem;
              font-family:Impact;
              font-weight:bold;
              font-style:italic;
              color:rgba(254,253,117,1);
              // padding-right: rem;
            }
          }
        }
      }
      p {
        font-size:0.16rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(255,255,255,1);
        text-shadow:1px 1px 0px rgba(0, 0, 0, 0.24);
        text-align: center;
      }
      .main-pop2 {
        width: 2.1rem;
        height: 1.45rem;
        position: absolute;
        top: -0.5rem;
        right: -1.8rem;
        z-index: 100;
        background: url('../../../assets/programme/digital-economy/main-pop.png') no-repeat;
        background-size: 2.1rem 1.45rem;
        .yun {
          font-size:0.17rem;
          font-family:Source Han Sans CN;
          font-weight:400;
          color:rgba(247,249,243,1);
          background:linear-gradient(0deg,rgba(202,253,251,1) 0.146484375%, rgba(255,255,255,1) 100%);
          -webkit-background-clip:text;
          text-align: left;
          padding-top: 0.1rem;
          margin-left: 0.2rem;
          vertical-align:middle;
          padding-left: 0.3rem;
          span {
            font-size:0.22rem;
            font-family:Impact;
            font-weight:bold;
            font-style:italic;
            color:rgba(254,253,117,1);
          }
        }
        .yun:nth-child(1) {
          background: url('../../../assets/programme/digital-economy/yunfuwu1.png') no-repeat left bottom;
          margin-top: 0.1rem;
          background-size: 0.3rem 0.3rem;
          background-position: 0 0.08rem;
        }
        .yun:nth-child(2) {
          background: url('../../../assets/programme/digital-economy/yunfuwu2.png') no-repeat left bottom;
          background-size: 0.3rem 0.3rem;
          background-position: 0 0.08rem;
        }
        .yun:nth-child(3) {
          background: url('../../../assets/programme/digital-economy/yunfuwu3.png') no-repeat left bottom;
          background-size: 0.3rem 0.3rem;
          background-position: 0 0.08rem;
        }
      }
      .main-pop3 {
        width: 2.48rem;
        height: 1.45rem;
        position: absolute;
        top: -0.5rem;
        left: 0.6rem;
        z-index: 100;
        background: url('../../../assets/programme/digital-economy/main-pop.png') no-repeat;
        background-size: 2.48rem 1.45rem;
        .zhengwu {
          font-size:0.17rem;
          font-family:Source Han Sans CN;
          font-weight:400;
          color:rgba(247,249,243,1);
          background:linear-gradient(0deg,rgba(202,253,251,1) 0.146484375%, rgba(255,255,255,1) 100%);
          -webkit-background-clip:text;
          text-align: left;
          padding-top: 0.1rem;
          margin-left: 0.2rem;
          vertical-align:middle;
          padding-left: 0.3rem;
          span {
            font-size:0.22rem;
            font-family:Impact;
            font-weight:bold;
            font-style:italic;
            color:rgba(254,253,117,1);
          }
        }
        .zhengwu:nth-child(1) {
          background: url('../../../assets/programme/digital-economy/zhengwu1.png') no-repeat left bottom;
          margin-top: 0.1rem;
          background-size: 0.3rem 0.3rem;
          background-position: 0 0.08rem;
        }
        .zhengwu:nth-child(2) {
          background: url('../../../assets/programme/digital-economy/zhengwu2.png') no-repeat left bottom;
          background-size: 0.3rem 0.3rem;
          background-position: 0 0.08rem;
        }
        .zhengwu:nth-child(3) {
          background: url('../../../assets/programme/digital-economy/zhengwu3.png') no-repeat left bottom;
          background-size: 0.3rem 0.3rem;
          background-position: 0 0.08rem;
        }
      }
      .main-pop4 {
        width: 3.93rem;
        height: 1.59rem;
        position: absolute;
        top: -0.5rem;
        left: 0.6rem;
        z-index: 100;
        background: url('../../../assets/programme/digital-economy/main-pop.png') no-repeat;
        background-size: 3.93rem 1.59rem;
        .impor{
          font-size:0.17rem;
          font-family:Source Han Sans CN;
          font-weight:400;
          color:rgba(247,249,243,1);
          background:linear-gradient(0deg,rgba(202,253,251,1) 0.146484375%, rgba(255,255,255,1) 100%);
          -webkit-background-clip:text;
          margin: 0.1rem;
          padding-left: 0.1rem;
          span{
            font-size:0.18rem;
            font-family:Impact;
            font-weight:bold;
            font-style:italic;
            color:rgba(254,253,117,1);
          }
        }
        .impor:nth-child(1){
          margin-top: 0.2rem;
        }
      }
    }
    .left-bottom2 {
      height: 3rem;
      background: url('../../../assets/programme/digital-economy/earth.png') no-repeat;
      position: absolute;
      width: 5rem;
      position: absolute;
      left: 6rem;
      top: 6.4rem;
      background-size: 2rem 3rem;
      background-position: 3rem -1rem;
      overflow: hidden;
      .menu-wrap {
        width: 5rem;
        height: 3rem;
      }
      .menu-wrap2 {
        height: 3.5rem;
        width: 5rem;
        position: absolute;
        top: -0.7rem;
      }
      p{
        font-size:0.16rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        font-style:italic;
        color:rgba(223,227,251,1);
        text-align: right;
        padding-top: 0.1rem;
        span{
          font-size:0.2rem;
          font-family:Impact;
          font-weight:400;
          font-style:italic;
          color:#77D0FA;
          text-shadow:0px 1px 10px rgba(147,229,252,0.28);

          background:linear-gradient(180deg,rgba(249,251,255,1) 0%, rgba(119,208,250,1) 100%);
          -webkit-background-clip:text;
        }
      }
      .li-title {
        font-size:0.17rem;
        font-family:Source Han Sans CN;
        font-weight:500;
        font-style:italic;
        color:#061823;
        text-align: right;
      }
      .li0{
        width: 2rem;
        margin-left: 0.8rem;
        background: url('../../../assets/programme/digital-economy/5gbg1.png') no-repeat 0.3rem 0;
        background-size: 2rem 0.45rem;
        padding-right: 0.4rem;
      }
      .li1{
        width: 2rem;
        margin-left: 0.7rem;
        background: url('../../../assets/programme/digital-economy/5gbg1.png') no-repeat 0.4rem 0;
        background-size: 2rem 0.45rem;
        padding-right: 0.4rem;
      }
      .li2{
        width: 2.8rem;
        margin-left: 0.3rem;
        background: url('../../../assets/programme/digital-economy/5gbg2.png') no-repeat 0.4rem 0;
        background-size: 2.8rem 0.45rem;
        padding-right: 0.4rem;
      }
      .li2-1{
        width: 2.8rem;
        background: url('../../../assets/programme/digital-economy/5gbg2.png') no-repeat 0.4rem 0;
        background-size: 2.8rem 0.45rem;
        padding-right: 0.4rem;
      }
      .li3{
        width: 2.8rem;
        margin-left: 1.4rem;
        background: url('../../../assets/programme/digital-economy/5gbg2.png') no-repeat 0.4rem 0;
        background-size: 2.8rem 0.45rem;
        padding-right: 0.4rem;
      }
      .li3-1{
        width: 2.8rem;
        margin-left: 0.3rem;
        background: url('../../../assets/programme/digital-economy/5gbg2.png') no-repeat 0.4rem 0;
        background-size: 2.8rem 0.45rem;
        padding-right: 0.4rem;
      }
      .li4{
        width: 2.8rem;
        margin-left: 1.4rem;
        margin-top: 1rem;
        background: url('../../../assets/programme/digital-economy/5gbg3.png') no-repeat 0.4rem 0;
        background-size: 2.8rem 0.45rem;
        padding-right: 0.4rem;
      }
      .li4-1{
        width: 2.8rem;
        margin-left: 1.4rem;
        background: url('../../../assets/programme/digital-economy/5gbg3.png') no-repeat 0.4rem 0;
        background-size: 2.8rem 0.45rem;
        padding-right: 0.4rem;
      }
    }
    .slide-wrap {
      width: 10rem;
      height: 3rem;
      position: absolute;
      left: 0.7rem;
      top: 2.8rem;
      overflow: hidden;
    }
    .swipe-wrap {
      width: 30rem;
      height: 3rem;
      position: absolute;
      left: 0.7rem;
      top: 3.3rem;
    }
    @keyframes show {
        0% {
            opacity: 0;
            left: 10rem;
        }
        100% {
            opacity: 1;
            left: 0;
        }
    }
    @keyframes hide {
        0% {
            opacity: 1;
            left: 0rem;
        }
        100% {
            opacity: 0;
            left: -10rem;
        }
    }
    .slide-enter-active {
        animation: show 1.2s;
    }
    .slide-leave-active {
        animation: hide 1.2s;
    }
    .slide-enter, .slide-leave-to {
        opacity: 0;
    }
  }
  // 右侧
  // .right-panle{
  //   position: absolute;
  //   width: 11.29rem;
  //   height: 9.99rem;
  //   top: 0.37rem;
  //   left: 31.5rem;
  //   background: url('../../../assets/achievement/service-join/left-panle.png') no-repeat;
  //   background-size: 100% 100%;
  //   z-index: 99;
  // }
  // 视频
  .videoShow{
    position: absolute;
    left:0;
    right: 0;
    margin: auto;
    top: 0;
    z-index: 9999;
    width: 43.2rem;
    height:10.8rem;
    background: black;
  }
  .videoShow2{
    position: absolute;
    left:0;
    right: 0;
    margin: auto;
    top: 0;
    width: 43.2rem;
    height:10.8rem;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: black;
  }
  .show-video{
    width: 0.49rem;
    height: 2.5rem;
    position: absolute;
    left: 11.5rem;
    bottom: 2rem;
    background: url('../../../assets/programme/digital-economy/video-title.png') no-repeat;
    background-size: 100% 100%;
    text-align: center;
    z-index: 99;
    span{
    display: inline-block;
    font-size:0.2rem;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(255,255,255,1);
    display: inline-block;
    margin-top: 0.2rem;
    line-height:0.25rem;
    width: 0.21rem;
    }
    img{
      position: absolute;
      bottom: 0.4rem;
      left: 0.17rem;
    }
  }
  .g-live-video {
    padding-top: 0.2rem;
    padding-left: 0.1rem;
    box-sizing: border-box;
    position: absolute;
    bottom: 2.4rem;
    left: 11.5rem;
    width: 2.78rem;
    height: 2rem;
    background: url('../../../assets/programme/digital-economy/video-bg2.png') no-repeat;
    background-size: 2.78rem 2rem;
    z-index: 98;
    video {
      width: 2.4rem;
      height:1.6rem;
    }
    .g-live-title {
      width: 0.49rem;
      height: 2.5rem;
      position: absolute;
      left: 2.9rem;
      bottom: -0.4rem;
      background: url('../../../assets/programme/digital-economy/video-title.png') no-repeat;
      background-size: 100% 100%;
      text-align: center;
      span{
      display: inline-block;
      font-size:0.2rem;
      font-family:Source Han Sans CN;
      font-weight:500;
      color:rgba(255,255,255,1);
      display: inline-block;
      margin-top: 0.2rem;
      line-height:0.25rem;
      width: 0.21rem;
      }
      img{
        position: absolute;
        bottom: 0;
        left: 0.17rem;
        bottom: 0.4rem;
      }
    }
    .playvideo1{
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        z-index:100;
      }
      .playvideo2{
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        left: 0;
        right: 0;
        top: 2rem;
        bottom: 0;
        margin: auto;
        z-index:100;
      }
    .g-live-item {
      width: 2.4rem;
      height: 1.35rem;
      // background: gray;
      margin: 0.1rem 0.1rem 0 0.1rem;
      &:nth-child(even) {
        margin-right: 0;
      }
    }
  }
  // 视频结束
  .left-lists {
      position: absolute;
      left: 11.5rem;
      top: 1rem;
      width: 4rem;
      height: 3.3rem;
      z-index: 99;
      li {
        margin-top: 0.2rem;
      }
      .title{
        padding: 0.01rem 0.1rem 0.02rem 0.1rem;
        display: inline-block;
        height: 0.26rem;
        line-height: 0.24rem;
        color: #FFFFFF;
        font-size: 0.22rem;
        font-style: italic;
        font-weight: 800;
        font-family: Source Han Sans CN;
        -webkit-transform: perspective(1rem) rotateX(-15deg);
        transform: perspective(1rem) rotateX(-15deg);
        -webkit-transform-origin: left;
        transform-origin: left;
        background: #d5602c;
      }
      p{
        font-size:0.2rem;
        font-family:Heiti SC;
        font-weight:300;
        font-style:italic;
        color:rgba(255,255,255,1);
        span {
          font-size:0.4rem;
          font-family:DIN Condensed;
          font-weight:bold;
          font-style:italic;
          color:rgba(255,255,255,1);
        }
      }
      .list-botttom{
        font-size:0.22rem;
        font-family:Adobe Heiti Std;
        font-weight:normal;
        font-style:italic;
        color:rgba(255,255,255,1);
        img {
          width: 0.18rem;
          height: 0.2rem;
        }
        span{
          font-size:0.22rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          color:rgba(255,255,255,1);
        }
      }
    }
  .right-panle {
     position: absolute;
     z-index: 95;
     right: 0.30rem;
     top: 0.24rem;
     width: 10.48rem;
     height: 5.28rem;
     background: url('../../../assets/programme/digital-economy/right-panle.png') no-repeat;
     background-size: 100% 100%;
     .title {
       position: absolute;
       top: 0.50rem;
       left: 0.46rem;
       height: 0.45rem;
       font-size: 0.24rem;
       color: #FFFFFF;
       padding: 0 0.16rem;
        img {
          position: absolute;
          width: 0.87rem;
          height: 0.18rem;
          left: 0;
          bottom: 0;
        }
     }
     .right-panle-top-left {
       position: absolute;
       top: 1.32rem;
       left: 0.97rem;
       width: 1.65rem;
       height: 2.87rem;
       background: url('../../../assets/programme/digital-economy/right-left.png') no-repeat;
       background-size: 100% 100%;
       span {
         position: absolute;
         top: 0.18rem;
         left: 0.23rem;
         line-height: 0.19rem;
         height: 2.46rem;
         color: #FFFFFF;
         font-size: 0.16rem;
         width: 0.21rem;
       }
     }
     .right-panle-top-center {
       width: 1.70rem;
       height: 3.20rem;
       position: absolute;
       left: 2.61rem;
       top: 1.23rem;
       .cricle-common {
         position: absolute;
         width: 1.32rem;
         height: 1.29rem;
         background: url('../../../assets/programme/digital-economy/cricle-01.png') no-repeat;
         background-size: 100% 100%;
         color: #FFFFFF;
         font-size: 0.15rem;
         text-align: center;
         padding-top: 0.4rem;
         padding-left: 0.1rem;
         box-sizing: border-box;
         cursor: pointer;
       }
       .select-icon {
         background: url('../../../assets/programme/digital-economy/cricle-02.png') no-repeat;
         background-size: 100% 100%;
       }
       .cricle-01 {
         top: 0;
         left: 0;
       }
        .cricle-02 {
         bottom: 0;
         left: 0;
       }
       .cricle-img-01 {
         position: absolute;
         width: 0.16rem;
         height: 0.22rem;
         right: 0;
         top: 0.53rem;
       }
        .cricle-img-02 {
         position: absolute;
         width: 0.16rem;
         height: 0.22rem;
         right: 0;
         bottom: 0.53rem;
       }
     }
     .right-panle-top-right {
       position: absolute;
       right: 0.44rem;
       top: 1.10rem;
       width: 5.74rem;
       height: 3.40rem;
       background: url('../../../assets/programme/digital-economy/right-bg-0.png') no-repeat;
       background-size: 100% 100%;
       .select-color {
         color:#F8E66E!important;
       }
       .right-top-box {
          position: absolute;
          width: 2.45rem;
          height: 2.24rem;
          left: 1.46rem;
          top: 0.55rem;
          overflow-y: auto;
          overflow-x: hidden;
          .right-top-box-item {
            width: 2.42rem;
            height: 0.56rem;
            line-height: 0.56rem;
            text-align: center;
            color: #FFFFFF;
            font-size: 0.16rem;
            // margin-top: 0.03rem;
            background: url('../../../assets/programme/digital-economy/right-item.png') no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
          }
       }
     }
   }
   .right-panle-02 {
     position: absolute;
     z-index: 8;
     right: 0.30rem;
     bottom: 0.2rem;
     width: 10.48rem;
     height: 5.28rem;
     background: url('../../../assets/programme/digital-economy/right-panle.png') no-repeat;
     background-size: 100% 100%;
      .title {
       position: absolute;
       top: 0.50rem;
       left: 0.46rem;
       height: 0.45rem;
       font-size: 0.24rem;
       color: #FFFFFF;
       padding: 0 0.16rem;
       z-index: 9;
        img {
          position: absolute;
          width: 0.87rem;
          height: 0.18rem;
          left: 0;
          bottom: 0;
        }
     }
     .right-panple-02-left {
       position: absolute;
       width: 6.50rem;
       height: 5.05rem;
       background: url('../../../assets/programme/digital-economy/right-bg-01.png') no-repeat;
       background-size: 100% 100%;
       z-index: 8;
       .banner-box {
         position: absolute;
         top: 1.23rem;
         left: 1.42rem;
         width: 3.5rem;
         height: 2.70rem;
         .left-arrow {
           position: absolute;
           width: 0.15rem;
           height: 0.18rem;
           bottom: 0.7rem;
           left: 0.8rem;
           cursor: pointer;
         }
         .right-arrow {
           position: absolute;
           width: 0.15rem;
           height: 0.18rem;
           bottom: 0.7rem;
           right: 0.7rem;
           cursor: pointer;
         }
         .banner-item {
           position: absolute;
           width: 0.76rem;
           height: 0.87rem;
           background: url('../../../assets/programme/digital-economy/banner-common.png') no-repeat;
           background-size: 100% 100%;
           transition: 1s all;
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           color: #B6EDFF;
           img {
            width: 0.25rem;
            height: 0.26rem;
            margin-top: -0.05rem;
          }
          p {
            margin-top: 0.05rem;
            font-size:0.16rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:0.3rem;
          }
         }
         .banner-0 {
          bottom: -0.1rem;
          left: 1.0rem;
          width: 1.63rem;
          height: 1.81rem;
          background: url('../../../assets/programme/digital-economy/banner-select.png') no-repeat;
          background-size: 100% 100%;
          color: #FFFFFF;
          font-size: 0.20rem;
          img {
            width: 0.41rem;
            height: 0.35rem;
          }
           p {
            margin-top: 0.1rem;
            font-size:0.2rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:0.3rem;
          }
         }
         .banner-1 {
           left: 0;
           bottom: 0.8rem;
         }
          .banner-2 {
           width: 0.82rem;
           height: 0.89rem;
           left: 0.6rem;
           bottom: 1.7rem;
         }
          .banner-3 {
           width: 0.82rem;
           height: 0.89rem;
           left: 1.9rem;
           bottom: 1.8rem;
         }
          .banner-4 {
           left: 2.8rem;
           bottom: 1.0rem;
         }
       }
     }
     .line {
       position: absolute;
       left: 4.0rem;
       bottom: 1.8rem;
       width:1.67rem;
       height:0.01rem;
       z-index:9;
       background:rgba(255,208,133,1);
     }
     .dot {
       width: 0.1rem;
       height: 0.1rem;
       position: absolute;
       left: 5.7rem;
       bottom: 1.75rem;
       border-radius: 50%;
       border: 0.01rem solid rgba(255,208,133,1);
     }
     .right-panple-02-right {
      position: absolute;
      width: 4.21rem;
      height:3.04rem;
      background: url('../../../assets/programme/digital-economy/right-bg-02.png') no-repeat;
      background-size: 100% 100%;
      top: 1.26rem;
      right: 0.45rem;
      padding: 0.24rem;
      box-sizing: border-box;
      .right-info-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 0.2rem;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: white;
        img {
          width: 0.40rem;
          height: 0.40rem;
        }
      }
      .right-info-box {
        height: 2.1rem;
        overflow-y: auto;
        .border-none {
          border: none!important;
        }
        .right-info-box-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          font-size: 0.17rem;
          color: #FFFFFF;
          position: relative;
          padding: 0.13rem 0.12rem 0.13rem 0;
          border-bottom: 0.01rem dashed #9BE9FF;
          .icon-react {
            width: 0.06rem;
            height: 0.06rem;
            background: #6EE8FC;
            margin-right: 0.1rem;
          }
          span{
            width: 3.2rem;
            text-overflow: ellipsis;
            height: 0.25rem;
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
          }
          .more {
            position: absolute;
            bottom: 0.14rem;
            right: 0;
            color: #6EE8FC;
            font-size: 0.15rem;
            cursor: pointer;
          }
        }
      }
     }
   }
    .right-info {
     position: absolute;
     width: 4.93rem;
     height: 4.35rem;
     right: 13.0rem;
     top: 0.8rem;
     background: url('../../../assets/programme/digital-economy/tk.png') no-repeat;
     background-size: 100% 100%;
     padding: 0.24rem;
     box-sizing: border-box;
     z-index: 9;
     .right-info-title {
       font-size: 0.22rem;
       padding: 0.1rem 0;
       width: 80%;
      overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
       color: #FFFFFF;
        font-family: Source Han Sans CN;
        font-weight: bold;
     }
     .close {
       position: absolute;
       width: 0.24rem;
       height: 0.24rem;
       right: 0.24rem;
       top: 0.30rem;
       cursor: pointer;
     }
     .text-box {
       width: 100%;
       height: 3.5rem;
       font-size: 0.17rem;
       color: #FFFFFF;
       line-height: 0.28rem;
       overflow-x:hidden;
       overflow-y: auto;
       img {
         width: 1.90rem;
         height: 1.07rem;
         margin-right: 0.2rem;
       }
     }
   }
   .right-info-02  {
     top: 4.5rem;
      .text-box {
        text-indent: 0.20rem;
        p {
          text-indent: 0.20rem;
          margin-bottom: 0.20rem;
        }
      }
   }
}
  .hover-div{
    &:hover  .title-color{
      color: #9be9fc;
    }
  }
</style>
