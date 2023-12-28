<!--
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-04-15 19:15:56
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-06-04 10:45:23
 -->
<template>
  <div class="tool-container-box">
    <div class="tool-container" :class="{'hide-tool':!isShowTool}">
      <div class="tool-more" v-show="isShowTool">
        <div class="tool-left">
          <div class="item">
            <img src="@/assets/tool/clear-icon.png" class="icon"/>
            <span class="desc" @click="clearAll">清除</span>
          </div>
          <div class="item">
            <img src="@/assets/tool/mark-icon.png" class="icon"/>
            <span class="desc" @click="addIcon">标注</span>
          </div>
        </div>
        <div class="tool-right">
          <div class="item">
            <img src="@/assets/tool/range-icon.png" class="icon"/>
            <span class="desc" @click="areaSelect">范围选择</span>
            <img src="@/assets/tool/select-icon.png" class="select-icon" alt/>
            <div v-if="isShowScope" class="scope">
              <div class="rect" @click="drawReact"></div>
              <div class="cricle" @click="drawCricle"></div>
              <!-- <div class="custom" @click="drawCustom"></div> -->
            </div>
          </div>
          <div class="item">
            <img src="@/assets/tool/area-icon.png" class="icon"/>
            <span class="desc" @click="leshanName">{{leshanRegion.name}}</span>
            <img src="@/assets/tool/select-icon.png" class="select-icon" alt/>
            <div class="zone-list" v-if="isZone">
              <div class="zone-inner">
                <div
                  class="zone-item"
                  @click="selectZone(item)"
                  v-for="(item,index) in selectList"
                  :key="index"
                >{{item.name}}
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="@/assets/tool/distance-icon.png" class="icon"/>
            <span class="desc" @click="measureLineSpace">测距</span>
          </div>
          <div class="item">
            <img src="@/assets/tool/path-icon.png" class="icon"/>
            <span class="desc" @click="selectLoad">最佳路径</span>
            <img src="@/assets/tool/select-icon.png" class="select-icon" alt/>
          </div>
          <div class="item">
            <img src="@/assets/tool/video-icon.png" class="icon"/>
            <span class="desc" @click.stop="controlVideo">视频监控</span>
            <img src="@/assets/tool/select-icon.png" class="select-icon" alt/>
            <div class="video-list" v-if="isVideoListName">
              <div
                @click="videoSelectIndex=0"
                class="video-name"
                :class="{'selected':videoSelectIndex===0}"
              >视频列表
              </div>
              <div
                @click="selectVideoByR"
                class="video-name"
                :class="{'selected':videoSelectIndex===1}"
              >视频点位
              </div>
              <div
                @click="selectVideoByR2"
                class="video-name"
                :class="{'selected':videoSelectIndex===2}"
              >综合视频
              </div>
            </div>
          </div>
          <div class="item">
            <img src="@/assets/tool/area-icon.png" class="icon"/>
            <span
              class="desc"
              @click="importArea"
            >{{selectedModel && selectedModel.name || ''}}</span>
            <img src="@/assets/tool/select-icon.png" class="select-icon" alt/>
            <div class="zone-list" v-if="isShowModelList">
              <div class="zone-inner">
                <div
                  class="zone-item"
                  @click="selectModel(item)"
                  v-for="(item,index) in model"
                  :key="index"
                >{{item.name}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="compass" @click="isShowTool=!isShowTool" id="compass">
        <div class="needle"></div>
      </div>
    </div>
    <!-- <div class="video-model"> -->
    <div class="video-left" v-show="videoSelectIndex===0">
      <img class="close-img" @click="closeVideo(1)" src="@/assets/common/closepopicon.png"/>
      <div class="video-title-01">视频监控</div>
      <div class="vedioSearch">
        <input type="text" placeholder="请输入内容..." v-model="searchVideo"/>
        <button @click="searchVideoFuc">搜索</button>
      </div>
      <div class="tree-box">
        <div>
          <p class="tree-title" @click="showTreeFirst(1)">
            <img class="icon"
                 :src='!isShowC ? require("@/assets/common/tree-icon.png"):require("@/assets/common/tree-icon02.png")'/>
            <span :class="{'selected':isShowC}">默认列表</span>
            <img :class="isShowC ? 'icon-04' : 'icon-03' "
                 :src='!isShowC ? require("@/assets/common/tree-icon03.png") : require("@/assets/common/tree-icon01.png")'/>
          </p>
          <tree-component :list="treeList" v-show="isShowC"></tree-component>
        </div>
        <div>
          <p class="tree-title" @click="showTreeFirst(2)">
            <img class="icon"
                 :src='!isShowC2 ? require("@/assets/common/tree-icon.png"):require("@/assets/common/tree-icon02.png")'/>
            <span :class="{'selected':isShowC2 }">自定义列表</span>
            <img :class="isShowC2 ? 'icon-04' : 'icon-03' "
                 :src='!isShowC2 ? require("@/assets/common/tree-icon03.png") : require("@/assets/common/tree-icon01.png")'/>
          </p>
          <tree-component :list="customeList" v-show="isShowC2"></tree-component>
        </div>
      </div>
      <div class="right-list">
        <div class="right-list-box-01">
          <div class="right-title-01" @mouseenter="showTooltip($event)" @mouseleave="hideTooltip">{{videoListName}}</div>
          <div class="right-title-02" @mouseenter="showTooltip($event)" @mouseleave="hideTooltip" @click="selectVideoByR2">综合视频</div>
          <div class="right-title-02" @mouseenter="showTooltip($event)" @mouseleave="hideTooltip" @click="addVideoLocation">视频点位</div>
        </div>
        <div class="name-list-box" ref="listBox" @scroll="videoScroll">
          <div
            @click="item.status2 && selectPlay(item)"
            v-for="(item,index) in videosML"
            :key="index"
            class="name-item"
            :class="{'selected':videoNowPlay&&item.id===videoNowPlay.id}"
          >
            <template v-if="item.status2">
              <div class="name" :title="item.name">{{item.name}}</div>
              <img v-if="videoNowPlay&&item.id===videoNowPlay.id" src="@/assets/tool/bg-title-04.png"/>
              <img v-else src="@/assets/tool/bg-title-05.png"/>
            </template>
            <template v-else>
              <div class="name" :title="item.name">{{item.name}}</div>
              <img :src="imgPath+ item.fileId01"/>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="video-right" v-show="isVideoShow">
      <img class="close-img" @click="closeVideo(2)" src="@/assets/common/closepopicon.png"/>
      <div class="video-title-01">{{videoName}}</div>
      <div class="select-video" id="select-video"></div>
      <div class="select-videos">
        <div class="select-inner-videos" :style="{'width':innerWidth+'rem',left:-left+'rem'}">
          <div class="video-item" v-show="item.display"  v-for="(item,index) in nowVideoList" :key="index" :data-src="item.url"
               :data-id="item.id" :data-name="item.name">
            <div class="video-item-name" :title="item.name">{{item.name}}</div>
            <div class="img-box">
              <img
                class="close-img-little"
                @click="closeVideoIndex($event,item,index)"
                src="@/assets/common/closepopicon.png"
                alt
              />
              <img class="big-img" @click="turnBigVideo(item)" src="@/assets/tool/big.png" alt/>
            </div>
            <div class="video-item-01" :id="'video'+item.id"></div>
          </div>

        </div>
      </div>
      <div class="dot-box" style="color:#FFFFFF;">
        <!-- {{bannerIndex}}{{nowVideoList.length*2.7}} -->
        <!-- {{bannerDotIndex}} -->
        <span v-for="(i) in nowVideoListSpan" :key="i" :class="{'active':bannerDotIndex===i-1}"></span>
      </div>
      <img
        @click="rightMethods"
        v-show="nowVideoList.length>3"
        class="left-trangle"
        src="@/assets/tool/trangle.png"
      />
      <img
        @click="leftMethods"
        v-show="nowVideoList.length>3"
        class="right-trangle"
        src="@/assets/tool/trangle.png"
      />
    </div>
    <div class="video-maker" v-show="!item.iscrossFlag" :id="item.id" v-for="(item,index) in zoneVideos" :key="index">
      <template v-if="item.status2===1">
        <div class="three-box" @click="openVideo(item)" @mouseenter="item.hoverFlag = true"
             @mouseleave="item.hoverFlag = false">
          <div v-show="item.hoverFlag" class="g-info-text">{{item.name}}</div>
          <img class="maker-3d-img" :class="{'twod':!threeType}" src="@/assets/common/video.png"/>
          <img class="maker-3d-box-img" v-if="threeType" src="@/assets/common/video-box.png"/>
          <div class="video-type" v-if="item.type && threeType" :class="{'twod-type':threeType}" >{{item.type}}</div>
        </div>
      </template>
      <template v-else>
        <div class="three-box" @mouseenter="item.hoverFlag = true" @mouseleave="item.hoverFlag = false">
          <div v-show="item.hoverFlag" class="g-info-text">{{item.name}}</div>
          <img class="maker-3d-img" :class="{'twod':!threeType}" src="@/assets/common/video-none.png"/>
          <img class="maker-3d-box-img" v-if="threeType" src="@/assets/common/video-box-none.png"/>
          <div class="video-type"  v-if="item.type && threeType" :class="{'twod-type':threeType}" style="color:#CBE3F1">{{item.type}}</div>
        </div>
      </template>
    </div>
    <div v-for="(item) in icons" :key="item.id" :id="item.id" class="tool-icon">
      <img class="icon" v-if="item.type===1" src="@/assets/tool/icon.png"/>
      <div class="icon-01" v-if="item.type===2">
        <div class="name">起</div>
        <img src="@/assets/tool/start.png"/>
      </div>
      <div class="icon-01" v-if="item.type===3">
        <div class="name">终</div>
        <img src="@/assets/tool/end.png"/>
        <p>{{preload}} 米</p>
      </div>
    </div>
    <div v-for="(item) in icons02" :key="item.id" :id="item.id" class="tool-icon-02">
      <div class="cricle-icon" v-if="item.type===4">
        <div class="cricle-icon-out">
          <div class="cricle-icon-inner"></div>
        </div>
        <div class="cricle-label">
          <div>{{item.distance ? item.distance + '米' : '起点'}}</div>
          <img class="dete" @click="gbLocation" v-if="item.end" src="@/assets/tool/dete.png"/>
        </div>
      </div>
    </div>
    <div class="tool-makers" v-for="(item) in makers" :id="item.id" :key="item.id">
      <img class="icon" @click="changeIconStatus(item)" src="@/assets/tool/icon.png"/>
      <div class="maker-tk" v-if="item.isShow">
        <img class="maker-close" @click="item.isShow=false" src="@/assets/common/closepopicon.png"/>
        <div class="maker-title">添加标注</div>
        <div class="maker-name-p">标注名称：</div>
        <textarea class="textarea" v-model="item.name"></textarea>
        <div class="maker-button">
          <div class="maker-detele maker-button-common" @click="deleteIcon(item)">删除</div>
          <div class="maker-sure maker-button-common" @click="item.isShow=false">确定</div>
        </div>
      </div>
      <div class="maker-name" v-if="item.name&&!item.isShow">{{item.name}}</div>
    </div>
    <!-- 视频弹框 -->
    <div  class="change-maker-panel"
         :class="{'change-maker-panel-select':bigVideoSelectId===item.id+'-video-panle'}"
         v-show="item.display" :style="{'top':4+(index+1)*0.5+'rem','left':18+(index+1)*0.5+'rem'}"
         :id="'maker-panle-video'+item.id" v-for="(item,index) in zoneVideosSelect" :key="item.id">
      <p>{{item.name}}</p>
      <img class="close-img" src="@/assets/common/closepopicon.png" @click="hideVideoSelect(item)"/>
      <img class="big-img"  v-if="bigVideoSelectId!==item.id+'-video-panle'" src="@/assets/tool/big-img.png"  @click="bigVideoSelect(item)"/>
      <img class="samall-img" v-if="bigVideoSelectId===item.id+'-video-panle'" src="@/assets/tool/small-img.png" @click="bigVideoSelectId=''"/>
      <div
        class="maker-panle"
        :id="item.id+'-video-panle'"
      ></div>
    </div>

    <!-- 峨眉景区点位信息 -->
    <div class="em" v-if="is3DTOURView">
      <div
        :id="item.id"
        v-for="(item, index) in tourismList"
        :key="index">
        <img class="icon" v-if="item.id==='tourism-emei'" src="@/assets/tool/tour/em.png" @click="choosedTourism = item.name">
        <img class="icon" v-if="item.id==='tourism-lxgy'"  src="@/assets/tool/tour/gy.png" @click="choosedTourism = item.name">
        <img class="direction" v-if="item.name === choosedTourism" src="../assets/common/event-icon2.png">
        <!-- 弹窗 -->
        <div class="more">
          <modal-one
            v-if="item.name === choosedTourism"
            :datas="item"
            @openDetail="videoSelectIndex=0"
            @close="handleCloseDetail"></modal-one>
        </div>
      </div>
    </div>
     <!-- 景区点位信息 -->
    <div class="tourism-point" v-if="is3DTOURView&&isShowTour">
      <div
        :id="item.id"
        class="tourism-tour"
        :class="{'select-zindex':selectZIndex===item.id}"
        v-for="(item, index) in tourismListCommon"
        :key="index">
        <img class="direction" v-if="item.scenicName === selectTourName" src="../assets/common/event-icon2.png">
        <!-- 弹窗 -->
        <div class="more">
          <modal-two
           :datas="item"
            v-if="item.scenicName === selectTourName"
            @close="handleCloseDetail"
            @openDetail="videoSelectIndex=0"
           ></modal-two>
        </div>
      </div>
    </div>
    <!-- 精模点位标题信息 -->
    <div class="tourism-title" v-show="is3DTOURView&&isLoad" :class="{'select-zindex':selectZIndex===item.id}" :id="item.id" v-for="(item) in models" :key="item.id">
      <img class="icon" @click="showTours(item)" :src="item.icon">
    </div>
    <div v-if="isShowDF&&is3DView" id="scenicSpot" class="scenicSpot" >
      <p class="scenicTittle">
        <span>乐山大佛景区</span>
        <img @click="isShowDF=false" src='../assets/common/natural-close.png' alt="">
      </p>
      <p class="scenicSubtitle">今日售票统计
        <span style="margin-left:2.7rem">
          <span class='subtittleWord'>游客最大承载量</span>
          <span class="subtittleNum">28000</span>
          <span>人次</span>
      </span>
      </p>

      <div class="totalSub">
        <div class="subImgWord">
          <div class="ims">
            <img src="../assets/tool/senseOne.png">
            <div>
              <p>售票人数</p>
              <p><span v-text='price.peoNum'></span><span> 人次</span></p>
            </div>
          </div>
        </div>
        <div class="subImgWord" style="margin-left: 0.4rem">
          <div class="ims">
            <img src="../assets/tool/senseTwo.png">
            <div>
              <p>售票金额</p>
              <p><span v-text='price.priceSum'></span><span> 元</span></p>
            </div>
          </div>
        </div>
      </div>
      <div class="totalNums">
        <div class="totalNum totalNumLeft">
          <p class="leftTittle">今日景区人数统计</p>
          <div class="people">
            <div class="peopleDiv">
              <p class="peopleDivWord">入园人数</p>
              <p class="peopleDivNum"><span style="color: #66FAFF" v-text='peoples.getInPeo'></span><span> 人</span></p>
            </div>
            <div class="peopleDiv">
              <p class="peopleDivWord">在园人数</p>
              <p class="peopleDivNum"><span style="color: #FEFD75" v-text='peoples.ingPeo'></span><span> 人</span></p>
            </div>
            <div class="peopleDiv">
              <p class="peopleDivWord">出园人数</p>
              <p class="peopleDivNum"><span style="color: #90FAAA" v-text='peoples.outPeo'></span><span> 人</span></p>
            </div>
          </div>
        </div>
        <div class="totalNum totalNumRight">
          <p class="rightTittle">今日停车位统计</p>
          <div class="people">
            <div class="peopleDiv">
              <p class="peopleDivWord">总停车位</p>
              <p class="peopleDivNum"><span style="color: #66FAFF" v-text='car.allsum'></span><span> 个</span></p>
            </div>
            <div class="peopleDiv">
              <p class="peopleDivWord">已停车位</p>
              <p class="peopleDivNum"><span style="color: #FEFD75" v-text=car.ingNum></span><span> 个</span></p>
            </div>
            <div class="peopleDiv">
              <p class="peopleDivWord">剩余车位</p>
              <p class="peopleDivNum"><span style="color: #90FAAA" v-text='car.levenum'></span><span> 个</span></p>
            </div>
          </div>
        </div>
      </div>
      <div class="totalNums">
        <div class="totalNum totalNumLeft">
          <p class="leftTittle">今日实名游客量</p>
          <div class="finish-pie">
            <div class="finish" id="run-box"></div>
            <div class="finish-text">
              <p>{{count2.value}}</p>
              <p>{{count2.name}}</p>
              <p>({{count2.unit}})</p>
            </div>
          </div>
        </div>
        <div class="totalNum totalNumRight">
          <p class="rightTittle">近15日停车场车辆接待趋势</p>
          <div class="stopCarLine"></div>
        </div>
      </div>
      <div class="totalNums">
        <div class="totalNum totalNumLeft">
          <p class="leftTittle">实名客源省份排名</p>
          <div class="timer-pro" v-for="(item,index) in todayList" :key="index">
            <div class='numb' :class="{one:index===0,two:index===1,three:index===2,other:index>=3}">{{index + 1}}
            </div>
            <div class="pro">
              <p>{{item.name}}</p>
              <div class='pro-c'>
                <div :style="{width:(item.value/todayList[0].value)*100 + '%'}"></div>
              </div>
            </div>
            <div class="text">{{item.value}}人</div>
          </div>
        </div>
        <div class="totalNum totalNumRight">
          <p class="rightTittle">近15日收费游客接待趋势</p>
          <div class="tourLine"></div>
        </div>
      </div>
    </div>
    <!-- 显示标题完整信息 -->
    <text-modal ref="textModal"></text-modal>
  </div>
</template>

<script>
import lys from '@/assets/tool/tour/lys.png'
import jqzd from '@/assets/tool/tour/jqzd.png'
import hhw from '@/assets/tool/tour/hhw.png'
import wys from '@/assets/tool/tour/wys.png'
import dfbm from '@/assets/tool/tour/dfbm.png'
import dfnm from '@/assets/tool/tour/dfnm.png'
import dfdm from '@/assets/tool/tour/dfdm.png'
import jdf from '@/assets/tool/tour/jdf.png'
import bxd from '@/assets/tool/tour/bxd.png'
import lbt from '@/assets/tool/tour/lbt.png'

import API from '@/api/tool'
import echarts from 'echarts'
import run from '@/echarts-data/tool/run'
import { openThirdPage, moveDiv } from '@/utils/utils'
import treeComponent from '@/components/tree-component'
import zonePositions from '../../static/CesiumAssets/js/zonePositions'
import { imgPath } from '@/utils/BasePath.js'
import modalOne from '@/components/slackingModal/tourism-modal'
import modalTwo from '@/components/slackingModal/tourism-modal-1'
import model from '@/components/model.js'
import textModal from '@/components/text-modal' // 显示标题完整信息
export default {
  components: {treeComponent, modalOne, modalTwo, textModal},
  name: 'tool',
  data () {
    return {
      bigVideoSelectId: '',
      isShowTour: false,
      isShowDF: false,
      isShowC: true,
      isShowC2: false,
      imgPath,
      videoName: '视频监控',
      isShowTool: false,
      isLoadData: false, // 是否加载完成景点数据
      tourismList: [], // 景区点位
      tourismListCommon: [], // 景区点位2
      selectZIndex: '',
      tourCommons: [],
      choosedTourism: '',
      icons: [], // 点击添加的位置信息
      videoNowPlay: null, // 当前播放视频
      icons02: [], // 测距点位数组
      makers: [], // makers
      isShowScope: false, // 是否显示范围选择
      defaultTreeList: [], // 默认树形数组
      treeList: [], // 树形结构
      customeList: [],
      nowVideoList: [], // 当前视频列表
      isVideoShow: false,
      videoListName: '乐山市', // 视频列表名字
      videosIndex: 0, // 当前加入视频数量
      swfurl: './static/libs/flowplayer/flowplayer-3.2.18.swf',
      videosML: [], // 视频分页
      bannerIndex: 0, // banner下标
      isVideoListName: false, // 是否显示视频目录
      videoSelectIndex: -1, // 显示视频选项列表 下标
      commonVideo: false,
      isZone: false,
      searchVideo: null,
      isShowModelList: false,
      isNextPage: true,
      leshanRegion: {name: '乐山市', totalName: '乐山市'}, // 区域选择名字
      selectList: [
        {name: '乐山市', value: -1, totalName: '乐山市'},
        {name: '市中区', value: 0, totalName: '市中区'},
        {name: '沙湾区', value: 1, totalName: '沙湾区'},
        {name: '五通桥区', value: 2, totalName: '五通桥区'},
        {name: '金口河区', value: 3, totalName: '金口河区'},
        {name: '峨眉山市', value: 4, totalName: '峨眉山市'},
        {name: '犍为县', value: 5, totalName: '犍为县'},
        {name: '井研县', value: 6, totalName: '井研县'},
        {name: '夹江县', value: 7, totalName: '夹江县'},
        {name: '沐川县', value: 8, totalName: '沐川县'},
        {name: '峨边县', value: 9, totalName: '峨边彝族自治县'},
        {name: '马边县', value: 10, totalName: '马边彝族自治县'}
      ],
      model,
      models: [],
      selectVideoId: '',
      selectVideoName: '',
      pageNum: 1,
      pageSize: 10,
      zoneVideos: [{hoverFlag: true, name: 'wt'}],
      zoneVideosSelect: [], // 打开视频的列表
      zoneVideos2: [],
      areaSelectVideoId: '',
      // threeType: 0, // 2d 3d 标志 0 2d 1 3d,
      selectedModel: {name: '重点区域'},
      arrVideoItem: [],
      // is3DView: 0,
      scenicArrow: '../assets/tool/put-down.png',
      count2: {
        name: '实名游客量',
        unit: '人',
        value: 0
      },
      runData: {
        map: {},
        a: {},
        arr: [{
          dh03001: '1',
          dh03002: '1',
          dh03003: '1',
          dh03004: 'https://www.baidu.com'
        }]
      },
      todayList: [
        {
          name: ' ',
          value: 0
        }, {
          name: ' ',
          value: 0
        }, {
          name: ' ',
          value: 0
        }],
      carNum15Days: [],
      peoNumFees15Days: [],
      todayParkOverAll: {},
      todayPeoOverAll: {},
      todayTicketOverAll: {},
      price: {
        peoNum: '',
        priceSum: ''
      },
      peoples: {
        getInPeo: '', // 入园人数
        ingPeo: '', // 在园人数
        outPeo: '' // 境外人数
      },
      car: {
        allsum: '',
        ingNum: '',
        levenum: ''
      }
      // searchVideo: ''
    }
  },

  filters: {
    foamterThoand (val) {
      if (val) {
        return val.toString().replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')
      }
    }
  },
  computed: {
    selectTourName () {
      return this.$store.getters.GET_TourName
    },
    isLoad () {
      return this.$store.getters.GET_ISLOADMAP
    },
    is3DView () {
      return this.$store.getters.GET_IS_THREE
    },
    is3DTOURView () {
      return this.$store.getters.GET_isTOUR
    },
    preload () {
      return this.$store.getters.GET_PRELOAD
    },
    innerWidth () {
      if (this.nowVideoListDot.length % 3 === 0) {
        return 8.1 * this.nowVideoListDot.length / 3 === 0 ? 8.1 : 8.1 * this.nowVideoListDot.length / 3
      } else {
        return 8.1 * (parseInt(this.nowVideoListDot.length / 3) + 1)
      }
    },
    bannerIndexDot () {
      if (this.nowVideoListDot.length % 3 === 0) {
        return 8.1 * this.nowVideoListDot.length / 3 === 0 ? 8.1 : 8.1 * this.nowVideoListDot.length / 3
      } else {
        return 8.1 * (parseInt(this.nowVideoListDot.length / 3) + 1)
      }
    },
    left () {
      return -8.1 * this.bannerIndex
    },
    bannerDotIndex () {
      return this.left / 8.1
    },
    selectNode () {
      return this.$store.getters.GET_RECURSION
    },
    areaName () {
      return this.$store.getters.get_areaName
    },
    nowVideoListDot () {
      return this.nowVideoList.filter((d) => {
        return d.display === true
      })
    },
    nowVideoListSpan () {
      if (this.nowVideoListDot.length <= 3) {
        return 0
      } else {
        return Math.ceil(this.nowVideoListDot.length / 3)
      }
    },
    threeType () {
      console.log(this.$store.getters.GET_IS_THREE)
      return this.$store.getters.GET_IS_THREE
    },
    crossMaskers () {
      return this.$store.getters.GET_CROSS_MAKERS
    },
    GET_isLogin () {
      return this.$store.getters.GET_isLogin
    }
  },
  watch: {
    is3DView (val) {
      if (!val) {
        this.isShowDF = false
      }
    },
    '$route' (val) {
      if (val && window._m) {
        this.clearAll()
      }
      this.isShowDF = false
      console.log(val)
    },
    GET_isLogin (val) {
      if (val === 1) {
        this.initGenerCatalogue() // 初始化视频目录
        this.getPointerTourism()
      }
    },
    isLoad (val) {
      if (val) {
        let models = []
        let _models = []
        model.forEach((item) => {
          if (item.address) {
            let {lon, lat, height} = item.address
            let {id} = item
            models.push({
              lon,
              lat,
              height,
              id
            })
            _models.push(item)
          }
        })
        this.models = _models
        window._m.addAttractionsMakers(models)
      }
    },
    crossMaskers (val) {
      if (val.length && val.length > 0) {
        this.zoneVideos.forEach((item, index) => {
          item.iscrossFlag = false
        })
        val.forEach((d, i) => {
          let index = this.zoneVideos.findIndex((_d) => {
            return _d.id === d.id
          })
          if (index > -1) {
            let _i = this.zoneVideos[index]
            _i.iscrossFlag = true
            this.$set(this.zoneVideos, index, _i)
          }
        })
      } else {
        let zoneVideos = this.zoneVideos
        zoneVideos.forEach((item, index) => {
          item.iscrossFlag = false
        })
        this.zoneVideos = zoneVideos
      }
    },
    videoSelectIndex (val) {
      if (val === 0 && this.defaultTreeList.length === 0) {
        this.initGenerCatalogue() // 初始化视频目录
      }
    },
    selectNode (val) {
      // 点击视频目录列表
      if (val && val.isfolder) {
        if (val.children) {
          this.defaultTreeList.forEach(d => {
            if (d.id === val.id) {
              d.show = !d.show
            }
          })
          let list = this.proJSON(this.defaultTreeList, 0)
          this.treeList = list
        } else {
          this.initGenerCatalogue(val.id, val.name)
        }
      }
    },
    areaName (val) {
      this.selectedModel = {name: '重点区域'}
      this.leshanRegion = val
    }
  },
  mounted () {
    this.leshanRegion = this.$store.getters.get_areaName
    if (this.$store.getters.GET_isLogin === 1) {
      this.initGenerCatalogue() // 初始化视频目录
      this.getPointerTourism()
    }
  },
  methods: {
    // 鼠标移入显示标题
    showTooltip (e) {
      this.$refs.textModal.showTooltip(e)
    },
    hideTooltip () {
      this.$refs.textModal.hideTooltip()
    },
    // 景点展示
    showTour (item) {
      this.choosedTourism = item.scenicName
      this.selectZIndex = item.id
    },
    // 景区撒点
    getPointerTourism () {
      API.E_MEITODAY_OVERALL(this, {}).then(re => {
        if (re.data.serviceSuccess) {
          this.tourismList = []
          let data = re.data.data.eMeitodayOverallMap
          let data2 = re.data.data.greenHeartOverallMap
          data.id = 'tourism-emei'
          data2.id = 'tourism-lxgy'
          this.tourismList.push(data)
          this.tourismList.push(data2)
          window._m.addAttractionsMakers([data, data2])
        } else {
          console.log(re.data.errors)
        }
      })
    },
    // 关闭景点弹窗
    handleCloseDetail () {
      this.choosedTourism = ''
      this.$store.commit('SET_TourName', '')
    },
    searchVideoFuc () {
      let id = this.selectVideoId
      let pageNum = this.pageNum
      let pageSize = this.pageSize
      let name = this.searchVideo
      API.QUERY_VIDEOS(this, {pageNum, pageSize, id, name})
        .then(res => {
          let data = res.data
          if (data.serviceSuccess) {
            let result = data.data.queryVediosList
            if (result.length > 0) {
              this.videosML = result
            } else {
              this.videosML = []
              this.isNextPage = false
            }
          }
        }).catch(function (error) {
          console.log(error)
        })
    },
    areaSelect () {
      this.isShowScope = !this.isShowScope
      this.isZone = false
      this.isShowModelList = false
      this.isVideoListName = false
    },
    leshanName () {
      this.isZone = !this.isZone
      this.isShowScope = false
      this.isShowModelList = false
      this.isVideoListName = false
    },
    importArea () {
      this.isShowModelList = !this.isShowModelList
      this.isShowScope = false
      this.isZone = false
      this.isVideoListName = false
    },
    controlVideo () {
      // 控制视频目录显示
      this.isVideoListName = !this.isVideoListName
      this.isShowScope = false
      this.isZone = false
      this.isShowModelList = false
      this.videoSelectIndex = -1
    },
    // 关闭选中的区域视频
    hideVideoSelect (item) {
      this.bigVideoSelectId = ''
      let index = this.zoneVideosSelect.findIndex((d) => {
        return item.id === d.id
      })
      if (index > -1) {
        let _d = this.zoneVideosSelect[index]
        _d.display = false
        this.$set(this.zoneVideosSelect, index, _d)
      }
    },
    bigVideoSelect (item) {
      this.bigVideoSelectId = item.id + '-video-panle'
    },
    showTreeFirst (num) {
      if (num === 1) {
        this.isShowC = !this.isShowC
      } else {
        this.isShowC2 = !this.isShowC2
      }
    },
    openVideo (item) {
      if (item.status2 === 1) {
        let index = this.zoneVideosSelect.findIndex((d) => {
          return item.id === d.id
        })

        if (index < 0) {
          item.display = true
          this.zoneVideosSelect.push(item)
          this.$nextTick(() => {
            this.create(item.id + '-video-panle', item.url)
            moveDiv('maker-panle-video' + item.id)
          })
        } else {
          let _d = this.zoneVideosSelect[index]
          _d.display = true
          this.$set(this.zoneVideosSelect, index, _d)
        }
      }
    },
    addVideoLocation () {
      if (this.videosML.length > 0) {
        this.zoneVideos = [...this.zoneVideos, ...this.videosML]
        this.zoneVideos.forEach((item) => {
          item.iscrossFlag = false
          item.hoverFlag = false
          item.isShowPanle = false
        })
        window._m.addToolsVideoMakers(this.videosML, type => {

        })
      }
    },
    videoScroll () {
      let tpScrollTop = this.$refs.listBox.scrollTop
      let h = this.$refs.listBox.clientHeight
      let n = this.videosML.length * 0.77 * window.$rem * 100
      let id = this.selectVideoId
      let pageNum = this.pageNum
      let pageSize = this.pageSize
      let name = this.searchVideo
      if (tpScrollTop + n >= h && this.isNextPage) {
        this.pageNum++
        API.QUERY_VIDEOS(this, {pageNum, pageSize, id, name}).then(res => {
          let data = res.data
          if (data.serviceSuccess) {
            let result = data.data.queryVediosList
            if (result.length > 0) {
              this.videosML = [...this.videosML, ...result]
            } else {
              this.isNextPage = false
            }
          }
        })
      }
    },
    turnBigVideo (item) {
      this.videoName = item.name
      this.create('select-video', item.url)
    },
    selectZone (item) {
      this.leshanRegion = item
      this.isZone = false
      this.$store.commit('set_areaName', item)
      let position = zonePositions[item.totalName]
      window._m.flyToByMector(position)
    },
    // 关闭缩略视频
    closeVideoIndex (event, item, i) {
      let nowVideoListDot = this.nowVideoListDot
      let len = nowVideoListDot.length
      let index = nowVideoListDot.findIndex(d => {
        return d.id === item.id
      })
      let _index = this.nowVideoList.findIndex(d => {
        return d.id === item.id
      })
      if (index !== 0 && index % 3 === 0) {
        this.bannerIndex++
      }
      let _d = this.nowVideoList[_index]
      _d.display = false
      this.$set(this.nowVideoList, _index, _d)

      if (len === index + 1 && index !== 0) { // 删除最后一个
        let preitem = this.nowVideoListDot[index - 1]
        this.videoName = preitem.name
        this.create('select-video', preitem.url)
      } else if (len === 1 && index === 0) { // 删除第一个
        this.videoName = ''
        this.videoNowPlay = null
      }
    },
    closeVideo (type) {
      // 关闭视频弹框
      this.isVideoShow = false
      this.nowVideoList = []
      this.videoNowPlay = null
      this.videosIndex = 0
      this.bannerIndex = 0
      if (type === 1) {
        this.videoSelectIndex = -1
        // this.$store.commit('SET_RECURSION', '')
      }
    },
    create (id, url) {
      window.$f(id, this.swfurl, {
        clip: {
          url: url,
          autoPlay: true,
          autoBuffering: true
        },
        plugins: {
          controls: null
        }
      })
    },
    selectPlay (item) {
      this.videoName = item.name
      this.isVideoShow = true
      item.display = true
      this.$nextTick(() => {
        if (this.videoNowPlay && this.videoNowPlay.id === item.id) {
          return false
        }
        this.videosIndex++
        this.videoNowPlay = item
        this.create('select-video', item.url)
        let index = this.nowVideoList.findIndex(d => {
          return d.id === item.id
        })
        if (this.videosIndex >= 1 && index < 0) {
          this.nowVideoList.push(item)
          this.$nextTick(() => {
            this.create('video' + item.id, item.url)
          })
        } else {
          let _d = this.nowVideoList[index]
          _d.display = true
          this.$set(this.nowVideoList, index, _d)
        }
      })
    },
    initGenerCatalogue (id, name) {
      API.GET_CATALOGUE(this, {id}).then(res => {
        let data = res.data
        if (data.serviceSuccess) {
          // 初始化时
          if (!name) {
            this.customeList = data.data.catalogueMap.generCustoCatalogueList
          }
          let result = data.data.catalogueMap.generCatalogueList
          if (result && result.length > 0) {
            this.defaultTreeList = [...this.defaultTreeList, ...result]
            this.defaultTreeList.forEach(item => {
              if (item.pid === item.id) {
                item.pid = 0
              }
              if (item.id === id) {
                item.show = true
              }
            })
            let list = this.proJSON(this.defaultTreeList, 0)
            this.treeList = list
          } else {
            this.videosML = []
            this.videoListName = name
            this.pageNum = 1
            this.pageSize = 10
            this.isNextPage = true
            this.selectVideoId = id
            this.selectVideoName = name
            API.QUERY_VIDEOS(this, {
              pageNum: this.pageNum,
              pageSize: this.pageSize,
              id
            }).then(res => {
              let data = res.data
              if (data.serviceSuccess) {
                let result = data.data.queryVediosList
                // console.log(result)
                if (result.length > 0) {
                  this.videosML = [...this.videosML, ...result]
                } else {
                  this.isNextPage = false
                }
              }
            })
          }
        }
      })
    },
    proJSON (oldArr, pid) {
      let newArr = []
      oldArr.forEach(item => {
        if (item.pid === pid) {
          let obj = {
            id: item.id,
            name: item.name,
            show: item.show,
            isfolder: item.isfolder,
            url: item.url
          }
          let children = this.proJSON(oldArr, item.id)
          if (children.length > 0) {
            obj.children = children
          }
          newArr.push(obj)
        }
      })
      return newArr
    },
    rightMethods () {
      if (-this.left < 0) {
        this.bannerIndex++
      }
    },
    leftMethods () {
      if (Math.abs(this.left) < this.innerWidth - 8.1) {
        this.bannerIndex--
      }
    },
    drawReact () {
      // 画矩形
      window._m.drawReact()
    },
    drawCricle () {
      // 画圆形
      window._m.drawCricle()
    },
    drawCustom () {
      // 画自定义形状
      window._m.drawCustomShap(icon => {
        this.icons.push(icon)
        window._m.addToolsMakers(this.icons)
      })
    },
    selectLoad () {
      // 最佳路径
      window._m.selectPreLoad(icon => {
        this.icons.push(icon)
        window._m.addToolsMakers(this.icons)
      })
    },
    measureLineSpace () {
      // 测距
      window._m.measureLineSpace(icon => {
        this.icons02.push(icon)
        window._m.addToolsMakers(this.icons02)
      })
    },
    gbLocation () {
      // 删除测距地标
      window._m.clearToolMakers(this.icons02)
      window._m.clearToolLineEnty()
      this.icons02 = []
    },
    addIcon () {
      // 添加标注
      window._m.addIcon(obj => {
        this.makers.push(obj)
        window._m.addToolsMakers(this.makers)
      })
    },
    changeIconStatus (item) {
      // 改变标注显示
      this.makers.forEach(d => {
        if (d.id === item.id) {
          d.isShow = true
        } else {
          d.isShow = false
        }
      })
    },
    deleteIcon (item) {
      // 删除标注
      let index = this.makers.findIndex(d => {
        return d.id === item.id
      })
      let _ = this.makers[index]
      this.makers.splice(index, 1)
      window._m.clearToolMakers([_])
    },
    clearAll () {
      this.$store.commit('SET_CURSOR', false)
      this.$store.commit('SET_PRELOAD', 0)
      // 删除所有
      this.zoneVideosSelect = []
      this.icons02 = []
      this.icons = []
      this.makers = []
      this.zoneVideos = []
      this.zoneVideos2 = []
      window._m.clearToolMakers()
      window._m.clearToolAllEntity()
    },
    selectVideoByR () {
      // 按区域查询视频
      this.videoSelectIndex = 1
      window._m.drawCricle(o => {
        console.log('半径信息', o)
        API.QUERY_VIDEO_BY_R(this, o).then(res => {
          let data = res.data
          if (data.serviceSuccess) {
            let result = data.data.queryAreaVediosList
            result.forEach((item) => {
              item.iscrossFlag = false
              item.hoverFlag = false
            })
            this.zoneVideos = [...this.zoneVideos, ...result]
            this.zoneVideos.forEach((item) => {
              item.iscrossFlag = false
              item.hoverFlag = false
              item.isShowPanle = false
            })
            window._m.addToolsVideoMakers(result, type => {
              this.threeType = type
            })
          }
        })
      }, 5000)
    },
    selectVideoByR2 () {
      openThirdPage('http://10.10.190.13:9917/admin/')
    },
    selectModel (item) {
      this.choosedTourism = item.name
      this.selectedModel = item
      this.isShowModelList = false
      if (item.name === '乐山大佛') {
        setTimeout(() => {
          this.queryDFInfo()
        }, 3000)
      } else {
        this.isShowDF = false
      }
      window._m.flyToByMector(item.position)
    },

    dealChart (myChart, index) {
      myChart.on('mouseover', function (e) {
        if (e.dataIndex !== index) {
          myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index
          })
        }
      })
      myChart.on('mouseout', function (e) {
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: index
        })
      })
    },
    // 查询景点信息
    initDataTour (peoSituationList) {
      // API.RUN(this, {}).then(re => {
      // if (re.status) {
      let tours = peoSituationList
      // re.data.data.returnMap.scenicOverallMap.peoSituationList // 景点数
      this.tourismListCommon = tours.map((d, i) => {
        d.id = 'tour' + i
        switch (d.scenicName) {
          case '凌云寺':
            d.icon = lys
            break
          case '九曲栈道':
            d.icon = jqzd
            break
          case '花湖湾':
            d.icon = hhw
            break
          case '乌尤寺':
            d.icon = wys
            break
          case '大佛北门':
            d.icon = dfbm
            break
          case '大佛南门':
            d.icon = dfnm
            break
          case '大佛东门':
            d.icon = dfdm
            break
          case '嘉定坊':
            d.icon = jdf
            break
          case '八仙洞':
            d.icon = bxd
            break
          case '灵宝塔':
            d.icon = lbt
            break
        }

        return d
      })
      this.tourismListCommon = this.tourismListCommon.filter((d) => {
        return d.scenicName !== '乐山大佛'
      })
      this.isShowTour = true
      window._m.addAttractionsMakers(this.tourismListCommon)
      window._m.addToursEntities(this.tourismListCommon)
      // }
      // }).catch(err => { console.log(err) })
    },
    // 点击乐山大佛
    showTours (item) {
      if (item.name === '乐山大佛') {
        this.queryDFInfo()
      }
      window._m.flyToByMector(item.position)
    },
    queryDFInfo () {
      this.isShowDF = true
      this.$nextTick(() => {
        moveDiv('scenicSpot')
        if (!this.isLoadData) {
          this.initData()
        } else {
          this.initStopCarLine()
          this.initTourLine()
          window._m.showOrHiddenToursEntities(true)
          this.isShowTour = true
        }
      })

      // if (this.tourismListCommon.length === 0) {
      //   this.initDataTour()
      // } else {
      //   window._m.showOrHiddenToursEntities(true)
      //   this.isShowTour = true
      // }
    },
    // 点击乐山大佛
    initData () {
      API.RUN(this, {}).then(re => {
        if (re.status) {
          this.isLoadData = true
          this.carNum15Days = re.data.data.returnMap.todayOverallMap.carNum15Days // 停车15天
          this.peoNumFees15Days = re.data.data.returnMap.todayOverallMap.peoNumFees15Days
          this.todayParkOverAll = re.data.data.returnMap.todayOverallMap.todayParkOverAll
          this.todayPeoOverAll = re.data.data.returnMap.todayOverallMap.todayPeoOverAll
          this.todayTicketOverAll = re.data.data.returnMap.todayOverallMap.todayTicketOverAll // 售票

          this.price.peoNum = this.todayTicketOverAll.peoNum
          this.price.priceSum = this.todayTicketOverAll.priceSum
          // 园内人数
          this.peoples.getInPeo = this.todayPeoOverAll.getInPeo
          this.peoples.ingPeo = this.todayPeoOverAll.ingPeo
          this.peoples.outPeo = this.todayPeoOverAll.outPeo
          // 停车数
          this.car.allsum = this.todayParkOverAll.allsum
          this.car.ingNum = this.todayParkOverAll.ingNum
          this.car.levenum = this.todayParkOverAll.levenum
          this.initStopCarLine()
          this.initTourLine()
          this.initPeople()

          // 景点
          let peoSituationList = re.data.data.returnMap.scenicOverallMap.peoSituationList
          this.initDataTour(peoSituationList)
        }
      }).catch(err => { console.log(err) })
    },
    initStopCarLine () { // 停车
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementsByClassName('stopCarLine')[0])
      let begindate = []
      let carNum = []
      this.carNum15Days.forEach(function (item, index, i) {
        begindate.push(item.begindate)
        carNum.push(item.carNum)
      })
      let option = {
        grid: {
          left: '5%',
          right: '10%',
          top: '20%',
          bottom: '8%',
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'item'
        },

        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            // x轴的字体样式
            axisLabel: {
              interval: 4,
              textStyle: {
                color: '#fff',
                fontSize: 16 * window.$rem
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#4EA3DC'
              }
            },
            axisTick: {
              show: false
            },
            data: begindate
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '辆',
            nameTextStyle: {
              color: '#fff',
              fontSize: 16 * window.$rem
            },
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#fff',
                fontSize: 16 * window.$rem
              }
            },
            axisLine: {
              lineStyle: {
                color: '#4EA3DC'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#fff',
                type: 'dashed',
                opacity: 0.2
              }
            }
          }
        ],
        series: [
          {
            name: '当日车辆',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: '#4EA3DC',
                lineStyle: {
                  color: '#4EA3DC',
                  width: 3 * window.$rem
                }
              }
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: 'red'
                }
              }
            },
            data: carNum
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    initTourLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementsByClassName('tourLine')[0])
      let time = []
      let peoNum = []
      this.peoNumFees15Days.forEach(function (item, index, i) {
        time.push(item.time)
        peoNum.push(item.peoNum)
      })
      let option = {
        grid: {
          left: '5%',
          right: '10%',
          top: '20%',
          bottom: '8%',
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'item'
        },

        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              color: '#fff',
              interval: 4,
              textStyle: {
                color: '#fff',
                fontSize: 16 * window.$rem
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#4EA3DC'
              }
            },
            axisTick: {
              show: false
            },
            data: time
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '人',
            nameTextStyle: {
              color: '#fff',
              fontSize: 16 * window.$rem
            },
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#fff',
                fontSize: 16 * window.$rem
              }
            },
            axisLine: {
              lineStyle: {
                color: '#4EA3DC'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#fff',
                type: 'dashed',
                opacity: 0.2
              }
            }
          }
        ],
        series: [
          {
            name: '当日人次',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: '#4EA3DC',
                lineStyle: {
                  color: '#4EA3DC',
                  width: 3 * window.$rem
                }
              }
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: 'red'
                }
              }
            },
            data: peoNum
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    initPeople () {
      let runCharts = echarts.init(document.getElementById('run-box'))
      let runData = {
        data: [{
          name: '省内游客',
          value: 0
        }, {
          name: '省外游客',
          value: 0
        }, {
          name: '境外游客',
          value: 0
        }],
        total: 0 + 0 + 0
      }
      runCharts.setOption(run(runData))
      this.count2.value = runData.total
      runCharts.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0
      })
      this.dealChart(runCharts, 0)
    },
    initSite () {

    }
  }
}
</script>

<style lang='scss' scoped>
  .em {
    > div {
      position: absolute;
      z-index: 9;
    }
    > div:nth-child(2){
      z-index: 8;
    }
    .icon {
      cursor: pointer;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 6;
    }
    .direction {
      position: absolute;
      top: -.7rem;
      left: .35rem;
      width: 1.13rem;
      height: .55rem;
    }
    .more {
      position: absolute;
      left: 1.6rem;
      top: -1.8rem;
      z-index:9;
    }
  }
  .tourism-point {
    > div {
      position: absolute;
      z-index: 7;
      margin-top: -0.80rem;
      margin-left: -0.20rem;
    }
    .icon {
      cursor: pointer;
      position: absolute;
      width: .37rem;
      height: 1.44rem;
      z-index: 1;
    }
    .direction {
      position: absolute;
      top: -.7rem;
      left: .35rem;
      width: 1.13rem;
      height: .55rem;
    }
    .makers-title {
      position: absolute;
      color: #fff;
      font-size: .16rem;
      left: 0.19rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      z-index: 1;
      cursor: pointer;
      > div {
       text-align: center;
       padding: .05rem 0;
       font-size: .18rem;
       background:rgba(213,96,44,1);
       font-style:italic;
       color:rgba(255,255,255,1);
       text-shadow:1px 1px 0px rgba(0, 0, 0, 0.2);
      }
      p {
        font-size: 0.10rem;
        font-weight:bold;
        font-style:italic;
        color:rgba(93,92,92,1);
        padding: 0 0.05rem;
        background:rgba(255,255,254,.8);
      }
    }
    .more {
      position: absolute;
      left: 1.6rem;
      top: -1.5rem;
      z-index:9;
    }
  }

  .tool-container-box {
    position: absolute;
    width: 43.2rem;
    height: 10.8rem;
    .tool-container {
      position: absolute;
      z-index: 10;
      bottom: 0.7rem;
      left: 21rem;
      display: flex;
      align-items: center;
      .zone-list {
        position: absolute;
        left: 0.9rem;
        width: 1.3rem;
        height: 2.06rem;
        background: url("../assets/tool/zone-list.png") no-repeat;
        background-size: 100% 100%;
        z-index: 10;
        top: -1.25rem;
        overflow: hidden;
        padding-top: 0.05rem;
        padding-bottom: 0.15rem;
        box-sizing: border-box;
        .zone-inner {
          width: 1.3rem;
          height: 1.8rem;
          overflow: auto;
          .zone-item {
            text-align: center;
            font-size: 0.16rem;
            color: #ffffff;
            height: 0.3rem;
            width: 1rem;
            margin: auto;
            line-height: 0.3rem;
            border-bottom: 0.01rem dashed #7de6ff;
          }
        }
      }
      .compass {
        width: 0.84rem;
        height: 0.84rem;
        background: url("../assets/tool/compass-bg.png");
        background-size: 100% 100%;
        position: relative;
        .needle {
          background: url("../assets/tool/compass-needle.png");
          height: 0.6rem;
          width: 0.26rem;
          background-size: 100% 100%;
          position: absolute;
          left: 0.29rem;
          top: 0.12rem;
        }
      }
      .tool-more {
        width: 4.6rem;
        height: 0.76rem;
        background: url("../assets/tool/tool-bg.png");
        background-size: 100% 100%;
        margin-right: -0.4rem;
        padding-right: 1rem;
        box-sizing: border-box;
        display: flex;
        padding: 0.1rem;
        flex-wrap: wrap;
        .tool-left {
          .item {
            height: 0.2rem;
            display: flex;
            align-items: center;
            position: relative;
            cursor: pointer;
            margin-right: 0.1rem;
            span {
              margin-left: 0.05rem;
            }
            .icon {
              width: 0.2rem;
              height: 0.2rem;
            }
            .desc {
              font-size: 0.16rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
            }
            &:nth-child(2) {
              margin-top: .1rem;
            }
          }
        }
        .tool-right {
          flex: 1;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          .item {
            height: 0.2rem;
            display: flex;
            align-items: center;
            position: relative;
            width: 25%;
            justify-content: center;
            cursor: pointer;
            margin-left: 0.2rem;
            span {
              margin-left: 0.08rem;
            }
            .select-icon {
              position: absolute;
              width: 0.08rem;
              height: 0.14rem;
              right: -0.12rem;
              top: 0.054rem;
            }
            .icon {
              width: 0.2rem;
              height: 0.2rem;
            }
            .desc {
              font-size: 0.16rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              width: 0.64rem;
              color: rgba(255, 255, 255, 1);
              &:hover,
              &:active {
                color: #52cfff;
              }
            }
            .video-list {
              position: absolute;
              left: 1rem;
              top: -0.58rem;
              height: 1.06rem;
              width: 1.04rem;
              background: url("../assets/tool/more-react.png") no-repeat;
              background-size: 100% 100%;
              z-index: 999;
              padding: 0.1rem 0;
              box-sizing: border-box;
              .video-name {
                width: 0.65rem;
                margin: auto;
                text-align: center;
                font-size: 0.16rem;
                color: #ffffff;
                padding-bottom: 0.05rem;
                border-bottom: 0.01rem dashed #52cfff;
              }
              .selected {
                color: #52cfff;
              }
            }
            .scope {
              position: absolute;
              left: 1rem;
              width: 0.48rem;
              height: 0.87rem;
              background: url("../assets/tool/fw.png") no-repeat;
              background-size: 100% 100%;
              z-index: 999;
              display: flex;
              flex-direction: column;
              align-items: center;
              .rect {
                width: 0.16rem;
                height: 0.14rem;
                border: 0.01rem solid #ffffff;
                margin-top: 0.15rem;
              }
              .cricle {
                width: 0.16rem;
                height: 0.16rem;
                border-radius: 50%;
                border: 0.01rem solid #ffffff;
                margin-top: 0.2rem;
              }
              .custom {
                width: 0.16rem;
                height: 0.14rem;
                background: url("../assets/tool/custom.png") no-repeat;
                background-size: 100% 100%;
                margin-top: 0.06rem;
              }
            }
          }
        }
      }
    }
    .video-left {
      position: fixed;
      top: 1.53rem;
      left: 14.07rem;
      width: 7.76rem;
      height: 7.71rem;
      background: url("../assets/tool/video-left.png") no-repeat;
      background-size: 100% 100%;
      z-index: 20;
      .close-img {
        position: absolute;
        top: 0.3rem;
        right: 0.3rem;
        width: 0.32rem;
      }
      .video-title-01 {
        position: absolute;
        font-size: 0.24rem;
        color: #ffffff;
        top: 0.34rem;
        left: 0.46rem;
      }
      .tree-box {
        position: absolute;
        left: 0.3rem;
        top: 0.78rem;
        width: 2.3rem;
        height: 6.5rem;
        overflow: auto;
        z-index: 999;
        border-right: 0.01rem solid #008bfc;
        .first-title {
          color: #85FEFF;
          font-weight: 400;
          font-size: 0.18rem;
        }
      }
      .right-list {
        position: absolute;
        right: 0.5rem;
        top: 0.78rem;
        width: 4.3rem;
        height: 6.5rem;
        .right-list-box-01 {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          .right-title-01 {
            width: 1.45rem;
            height: 0.56rem;
            background: url("../assets/tool/bg-title.png") no-repeat;
            background-size: 100% 100%;
            color: #83ebff;
            font-size: 0.18rem;
            font-style: italic;
            text-align: center;
            line-height: 0.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 0 .05rem;
          }
          .right-title-02 {
            width: 1.13rem;
            height: 0.38rem;
            background: url("../assets/tool/bg-title-02.png") no-repeat;
            background-size: 100% 100%;
            color: #ffffff;
            font-size: 0.18rem;
            font-style: italic;
            text-align: center;
            line-height: 0.38rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 0 .05rem;
          }
        }
        .name-list-box {
          position: absolute;
          width: 100%;
          height: 5.9rem;
          overflow-x: hidden;
          overflow-y: auto;
          .name-item {
            height: 0.53rem;
            margin-top: 0.1rem;
            margin-bottom: 0.14rem;
            background: url("../assets/tool/bg-title-03.png") no-repeat;
            background-size: 100% 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .name {
              font-size: 0.18rem;
              flex: 1;
              padding-left: 0.17rem;
              box-sizing: border-box;
              margin-top: -0.1rem;
              letter-spacing: 0.01rem;
              background-image: -webkit-linear-gradient(bottom, #89f7fe, #66a6ff);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            img {
              width: 0.32rem;
              height: 0.32rem;
              margin-right: 0.2rem;
            }
          }
          .selected {
            .name {
              font-weight: 600 !important;
            }
          }
        }
      }
    }
    .video-right {
      position: fixed;
      width: 8.91rem;
      height: 7.73rem;
      top: 1.53rem;
      left: 22.28rem;
      background: url("../assets/tool/video-right.png") no-repeat;
      background-size: 100% 100%;
      z-index: 30;
      .close-img {
        position: absolute;
        top: 0.3rem;
        right: 0.3rem;
        width: 0.32rem;
      }
      .video-title-01 {
        position: absolute;
        font-size: 0.24rem;
        color: #ffffff;
        top: 0.34rem;
        left: 0.46rem;
      }
      .select-video {
        position: absolute;
        width: 8.2rem;
        height: 4.61rem;
        top: 0.81rem;
        left: 0.36rem;
      }
      .select-videos {
        position: absolute;
        width: 8.1rem;
        height: 1.5rem;
        bottom: 0.69rem;
        left: 0.36rem;
        overflow: hidden;
      }
      .select-inner-videos {
        height: 1.5rem;
        position: absolute;
        top: 0;
        left: 0;
        .video-item {
          float: left;
          width: 2.6rem;
          height: 1.5rem;
          font-size: 0.3rem;
          color: #ffffff;
          margin-right: 0.05rem;
          margin-left: 0.05rem;
          position: relative;
          .video-item-01 {
            position: absolute;
            width: 100%;
            height: 100%;
          }
          .video-item-name {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 100%;
            z-index: 10;
            background: rgba(0, 0, 0, 0.5);
            font-size: 0.18rem;
            color: #FFFFFF;
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
          }
          .img-box {
            position: absolute;
            right: -.01rem;
            top: -0.029rem;
            width: 1rem;
            z-index: 10;
            img {
              float: right;
              width: 0.2rem;
              // margin-right: 0.1rem;
              &.big-img {
                margin-right: 0.05rem;
              }
            }
          }
        }
      }
      .dot-box {
        width: 3.5rem;
        height: 0.20rem;
        position: absolute;
        bottom: 0.24rem;
        left: 2.7rem;
        text-align: center;
        span {
          width: 0.08rem;
          height: 0.08rem;
          display: inline-block;
          border-radius: 100%;
          background: rgba(102, 243, 255, .4);
          cursor: pointer;
          margin-right: 0.05rem;
          &.active {
            background: #66F3FF
          }
        }
      }
      .left-trangle {
        width: 0.14rem;
        height: 0.17rem;
        position: absolute;
        bottom: 0.25rem;
        left: 2.46rem;
        transform: rotate(180deg);
        cursor: pointer;
      }
      .right-trangle {
        width: 0.14rem;
        height: 0.17rem;
        position: absolute;
        bottom: 0.25rem;
        right: 2.36rem;
        cursor: pointer;
      }
    }

    .video-maker {
      position: absolute;
      z-index: 8;
      .three-box {
        position: absolute;
        height: 1.18rem;
        width: 1.5rem;
        top: -1.0rem;
        left: -0.75rem;
        cursor: pointer;
        .maker-3d-img {
          position: absolute;
          width: 0.5rem;
          left: 0.55rem;
          top: 0.35rem;
        }
        .twod {
          top: 0.53rem;
        }
        .twod-type {
          top: 1.0rem;
        }
        .maker-3d-box-img {
          width: 1.5rem;
          left: 0;
          top: 0;
        }
        .g-info-text {
          position: absolute;
          left: 50%;
          top: -0.35rem;
          transform: translateX(-50%);
          white-space: nowrap;
          display: inline-block;
          padding: 0 0.1rem;
          height: 0.3rem;
          line-height: 0.3rem;
          font-size: 0.20rem;
          font-weight: 800;
          border-radius: 0.04rem;
          border: 0.01rem solid #80CDFA;
          font-style: italic;
          color: #FFFFFF;
        }
        .video-type {
          position: absolute;
          bottom: 0.1rem;
          width: 100%;
          text-align: center;
          font-size: 0.13rem;
          color: #FEA04C;
        }
      }
      .maker-panle {
        .title {
          font-size: 0.21rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #ffffff;
        }
        .content {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.15rem;
        }
      }
    }
    .video-border {
      position: fixed;
      width: 15.1rem;
      height: 9.26rem;
      left: 14.05rem;
      top: 0.9rem;
      background: url("../assets/tool/video-border.png") no-repeat;
      background-size: 100% 100%;
      z-index: 35;
      .video-border-title {
        width: 14.51rem;
        position: absolute;
        left: 0.36rem;
        top: 0.36rem;
        font-size: 0.24rem;
        font-weight: 600;
        color: #ffffff;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        img {
          width: 0.34rem;
          height: 0.34rem;
          cursor: pointer;
        }
      }
      .iframe-box {
        position: absolute;
        width: 14.4rem;
        height: 8.1rem;
        background: rgba(18, 110, 255, 0.5);
        left: 0.36rem;
        bottom: 0.35rem;
        iframe {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    }
    .tool-icon {
      position: absolute;
      z-index: 10;
      .icon {
        width: 0.4rem;
        height: 0.5rem;
      }
      .icon-01 {
        width: 0.5rem;
        height: 0.66rem;
        position: relative;
        .name {
          position: absolute;
          left: 0;
          top: 0;
          width: 0.5rem;
          height: 0.66rem;
          color: #ffffff;
          font-size: 0.2rem;
          text-align: center;
          line-height: 0.45rem;
        }
        p {
          position: absolute;
          color: #ffffff;
          left:50%;
          transform: translateX(-50%);
          font-size: 0.16rem;
          white-space: nowrap;
          padding: .03rem .2rem;
          background-color: rgba(0, 72, 107, .5);
          border: .02rem solid rgba(103, 207, 255, .75);
        }
        img {
          width: 0.5rem;
          height: 0.66rem;
        }
      }
    }
    .tool-icon-02 {
      position: absolute;
      z-index: 8;
      .cricle-icon {
        position: relative;
        margin-top: 0.28rem;
        margin-left: -0.18rem;
        .cricle-icon-out {
          width: 0.36rem;
          height: 0.36rem;
          border-radius: 50%;
          background: #ea1a1a;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .cricle-icon-inner {
            width: 0.22rem;
            height: 0.22rem;
            border-radius: 50%;
            margin: auto;
            background: #ffffff;
          }
        }
        .cricle-label {
          position: absolute;
          top: 0.36rem;
          left: 0.36rem;
          padding: 0.07rem 0.15rem;
          box-sizing: border-box;
          background: rgba(0, 25, 60, 0.8);
          border: 0.02rem solid rgba(125, 230, 255, 0.75);
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: auto;
          color: #ffffff;
          font-size: 0.17rem;
          overflow: hidden;
          white-space: nowrap;
          letter-spacing: 0.01rem;
          .gb {
            width: 0.12rem;
            height: 0.12rem;
            margin-left: 0.15rem;
          }
          .dete {
            width: 0.15rem;
            height: 0.14rem;
            margin-left: 0.15rem;
          }
        }
      }
    }
    .tool-makers {
      position: absolute;
      z-index: 8;
      .maker-name {
        position: absolute;
        top: -0.55rem;
        left: -100%;
        padding: 0.07rem 0.15rem;
        box-sizing: border-box;
        color: #ffffff;
        white-space: nowrap;
        letter-spacing: 0.01rem;
        font-size: 0.17rem;
        background: rgba(0, 25, 60, 0.8);
        border: 0.02rem solid rgba(125, 230, 255, 0.75);
      }
      .icon {
        width: 0.4rem;
        height: 0.5rem;
        position: absolute;
      }
      .maker-tk {
        position: absolute;
        width: 4.2rem;
        height: 2.7rem;
        background: url("../assets/tool/maker-tk.png") no-repeat;
        background-size: 100% 100%;
        top: -2.8rem;
        z-index: 999;
        .maker-close {
          position: absolute;
          width: 0.25rem;
          height: 0.27rem;
          right: 0.16rem;
          top: 0.25rem;
          cursor: pointer;
        }
        .maker-title {
          font-size: 0.22rem;
          color: #ffffff;
          font-weight: bold;
          margin-top: 0.22rem;
          margin-left: 0.25rem;
          letter-spacing: 0.01rem;
        }
        .maker-name-p {
          font-size: 0.18rem;
          color: #ffffff;
          margin-left: 0.25rem;
          margin-top: 0.08rem;
        }
        .textarea {
          margin-top: 0.14rem;
          width: 3.48rem;
          height: 0.67rem;
          font-size: 0.17rem;
          color: #ffffff;
          font-style: italic;
          padding: 0.1rem;
          margin-left: 0.25rem;
          background: rgba(0, 45, 113, 0.58);
          border: 0.01rem solid rgba(41, 143, 247, 1);
        }
        .maker-button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 0.2rem;
          .maker-button-common {
            width: 1.11rem;
            height: 0.38rem;
            text-align: center;
            border-radius: 0.19rem;
            color: #ffffff;
            font-size: 0.18rem;
            margin-left: 0.2rem;
            line-height: 0.38rem;
            cursor: pointer;
          }
          .maker-detele {
            background: linear-gradient(
                180deg,
                rgba(195, 212, 224, 1),
                rgba(130, 145, 156, 1)
            );
          }
          .maker-sure {
            background: linear-gradient(
                180deg,
                rgba(32, 215, 255, 1),
                rgba(0, 117, 208, 1)
            );
          }
        }
      }
    }
    .hide-tool {
      left: 25.2rem;
    }
  }

  .tree-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.18rem;
    color: rgba(243, 249, 255, 1);
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
  }

  .change-maker-panel {
    padding-top: .31rem;
    position: absolute;
    box-sizing: border-box;
    padding: 0.2rem;
    left: 20rem;
    top: 4rem;
    z-index: 9;
    width: 5.5rem;
    height: 3.9rem;
    font-size: 0.18rem;
    color: #FFFFFF;
    background: url("../assets/city-management/city-facilities/notice-bg.png") center no-repeat;
    background-size: 100% 100%;
    cursor: move;
    .maker-panle {
      width: 5.1rem;
      height: 3rem;
      margin-top: 0.1rem;
    }
    .close-img {
      position: absolute;
      cursor: pointer;
      right: 0.2rem;
      width: 0.26rem;
      height: 0.27rem;
      top: 0.3rem;
    }
    .big-img {
      position: absolute;
      cursor: pointer;
      right: 0.7rem;
      width: 0.26rem;
      height: 0.27rem;
      top: 0.3rem;
    }
    .samall-img {
      position: absolute;
      cursor: pointer;
      right: 0.7rem;
      width: 0.26rem;
      height: 0.27rem;
      top: 0.3rem;
    }
  }
  .change-maker-panel-select {
    padding: 0.3rem 0.4rem;
    left: 16rem!important;
    top: 1.8rem!important;
    z-index: 9;
    width: 13.60rem;
    height: 8.20rem;
    background:rgba(0,25,60,0.8);
    background-size: 100% 100%;
    border-radius: 0.20rem;
    cursor: move;
    .maker-panle {
      width: 12.80rem;
      height: 7.20rem;
      margin-top: 0.15rem;
    }
    .close-img {
      position: absolute;
      cursor: pointer;
      right: 0.2rem;
      width: 0.26rem;
      height: 0.27rem;
      top: 0.3rem;
    }
    .big-img {
      position: absolute;
      cursor: pointer;
      right: 0.7rem;
      width: 0.26rem;
      height: 0.27rem;
      top: 0.3rem;
    }
  }

  .vedioSearch {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0.34rem;
    right: 2rem;
    input {
      background: rgba(0, 45, 113, 0.58);
      border: 0.01rem solid rgba(41, 143, 247, 1);
      border-right: none;
      border-radius: 0.18rem 0 0 0.18rem;
      font-weight: 400;
      font-style: italic;
      color: rgba(255, 255, 255, .5);
      font-size: 0.17rem;
      height: .36rem;
      width: 2.6rem;
      line-height: 0.36rem;
      padding-left: 0.3rem;
      box-sizing: border-box;
      background: url('../assets/entry/search.png') no-repeat 0.1rem center/0.18rem 0.17rem;
    }
    button {
      background: rgba(41, 143, 247, 1);
      border: 0.01rem solid rgba(41, 143, 247, 1);
      border-radius: 0 0.18rem 0.18rem 0;
      color: #fff;
      height: 0.36rem;
      line-height: 0.36rem;
      text-align: center;
      width: 0.55rem;
      font-size: 0.17rem;
      font-weight: 400;
      font-style: italic;
      cursor: pointer;
      box-sizing: border-box;
    }
    img {
      width: 0.30rem;
      cursor: pointer;
      margin-left: 0.3rem;
    }
  }

  .scenicSpot {
    width: 6.86rem;
    right: 10.0rem;
    top: 1.5rem;
    padding: 0.3rem 0.1rem;
    background: url("../assets/tool/kuang.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    z-index: 8;
    cursor: move;
    .scenicTittle {
      width: 6.52rem;
      margin: auto;
    }
    .scenicTittle span {
      display: inline-block;
      font-size: 0.22rem;
      color: #FFFFFF;
      width: 1.38rem;
      height: 0.22rem;
    }
    .scenicTittle img {
      height: 0.26rem;
      width: 0.26rem;
      float: right;
      cursor: pointer;
    }
    .scenicSubtitle {
      font-size: 0.18rem;
      color: #FFFFFF;
      width: 6.52rem;
      height: 0.19rem;
      margin: 0.15rem auto 0 auto;
      font-family: Source Han Sans CN;
      font-weight: bold;
      margin-bottom: 0.2rem;
      .subtittleWord{
        font-size: 0.17rem;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: white;
      }
      .subtittleNum{
        font-size: 0.26rem;
        font-family: Impact;
        font-weight: bold;
        font-style: italic;
        color: #fce74d;
      }
    }
    .totalSub {
      margin-top: 0.1rem;
      height: 0.88rem;
      width: 6.52rem;
      margin: 0.1rem auto 0 auto;
      background-image: url("../assets/tool/kuang-two.png");
      background-size:100% 100%;
      .subImgWord {
        float: left;
        width: 3rem;
        height: 0.88rem;
        .ims {
          margin-left: 0.4rem;
          height: 0.8rem;
          img {
            float: left;
            margin-top: 0.25rem;
            margin-right: 0.2rem;
          }
          div {
            float: left;
            margin-top: 0.2rem;
            p:nth-of-type(1) {
              font-size: 0.17rem;
              font-family: Source Han Sans CN;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
            }
            p:nth-of-type(2) span:nth-of-type(1) {
              width: 0.45rem;
              height: 0.22rem;
              font-size: 0.26rem;
              font-family: Impact;
              font-weight: bold;
              font-style: italic;
              color: rgba(252, 231, 77, 1);
            }
            p:nth-of-type(2) span:nth-of-type(2) {
              width: 0.31rem;
              height: 0.15rem;
              font-size: 0.15rem;
              font-family: Source Han Sans CN;
              font-weight: bold;
              font-style: italic;
              color: rgba(255, 255, 255, 1);
            }
          }
        }
      }
    }
    .totalNums {
      width: 6.52rem;
      margin: 0.1rem auto 0 auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .totalNum {
        width: 50%;
        .stopCarLine {
          height: 2rem;
          width: 100%;
        }
      }
      .totalNumLeft {
        width: 50%;
        .leftTittle {
          font-size: 0.18rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }
        .people {
          height: 0.76rem;
          margin-top: 0.1rem;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .peopleDiv {
            .peopleDivWord {
              width: 0.69rem;
              font-size: 0.17rem;
              font-weight: 400;
              color: rgba(247, 249, 243, 1);
              font-family: Source Han Sans CN;
              background: linear-gradient(0deg, rgba(202, 253, 251, 1) 0.146484375%, rgba(255, 255, 255, 1) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .peopleDivNum {
              width: 1.01rem;
              height: 0.58rem;
              background-image: url("../assets/city-management/common-service/social-insurance/number-box.png");
              line-height: 0.58rem;
              background-size: 60% 100%;
              background-repeat: no-repeat;
            }
            .peopleDivNum span:nth-of-type(1) {
              font-size: 0.26rem !important;
              font-family: Impact;
              font-weight: bold;
              font-style: italic;

            }
            .peopleDivNum span:nth-of-type(2) {
              font-size: 0.15rem;
              color: #ffffff;
            }
          }
          .peopleDiv:nth-of-type(3) {
            border-right: 0.01rem dashed rgba(93, 184, 249, 1)
          }
        }
        .timer-pro {
          display: flex;
          font-family: Source Han Sans CN;
          padding: 0 0.50rem 0 5%;
          align-items: flex-end;
          margin-bottom: 0.22rem;
          .numb {
            width: .45rem;
            height: 0.45rem;
            font-size: .17rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            text-align: center;
            line-height: 0.35rem;
            background-repeat: no-repeat;
            background-position: 40% 20%;
            position: relative;
            top: 0.1rem;
          }
          .other {
            background-size: 0.45rem 0.45rem;
            background-image: url("../assets/emergency-command/overall-situation/societal-security/no4.png");
          }
          .one {
            background-size: 0.45rem 0.45rem;
            background-image: url("../assets/emergency-command/overall-situation/societal-security/no1.png");
          }
          .two {
            background-size: 0.45rem 0.45rem;
            background-image: url("../assets/emergency-command/overall-situation/societal-security/no2.png");
          }
          .three {
            background-size: 0.45rem 0.45rem;
            background-image: url("../assets/emergency-command/overall-situation/societal-security/no3.png");
          }
          .pro {
            padding-right: 0.14rem;
            flex: 1;
            p {
              font-size: 0.17rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: rgba(254, 254, 254, 1);
              margin-bottom: 0.08rem;
            }
            .pro-c {
              height: 0.06rem;
              width: 100%;
              background: rgba(92, 200, 255, .5);
              border-radius: 0 .03rem 0.03rem 0;
              width: 100%;
              position: relative;
              & > div {
                position: absolute;
                border-radius: 0 .03rem 0.03rem 0;
                left: 0;
                height: 0.06rem;
                width: 50%;
                background: linear-gradient(90deg, rgba(78, 176, 241, 1) 0%, rgba(93, 211, 244, 1) 100%);
              }
            }
          }
          .text {
            font-size: 0.18rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(241, 213, 169, 1);
          }
        }
      }
      .totalNumRight {
        width: 50%;
        .rightTittle {
          font-size: 0.18rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }
        .people {
          height: 0.76rem;
          margin-top: 0.1rem;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .peopleDiv {
            .peopleDivWord {
              width: 0.69rem;
              font-size: 0.17rem;
              font-weight: 400;
              color: rgba(247, 249, 243, 1);
              font-family: Source Han Sans CN;
              background: linear-gradient(0deg, rgba(202, 253, 251, 1) 0.146484375%, rgba(255, 255, 255, 1) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .peopleDivNum {
              width: 1.01rem;
              height: 0.58rem;
              background-image: url("../assets/city-management/common-service/social-insurance/number-box.png");
              line-height: 0.58rem;
              background-size: 60% 100%;
              background-repeat: no-repeat;
            }
            .peopleDivNum span:nth-of-type(1) {
              font-size: 0.26rem !important;
              font-family: Impact;
              font-weight: bold;
              font-style: italic;

            }
            .peopleDivNum span:nth-of-type(2) {
              font-size: 0.15rem;
              color: #ffffff;
            }
          }
        }
        .tourLine {
          height: 2rem;
          width: 100%;
        }
      }
    }
    .totalNums:nth-of-type(3) {
      height: 2.1rem;
    }
    .finish-pie {
      position: relative;
      .finish {
        height: 2rem;
      }
    }
    .finish-text {
      position: absolute;
      width: 40%;
      left: 4%;
      top: 20%;
      z-index: 10000;
      p {
        text-align: center;
        &:first-child {
          font-size: 0.34rem;
          font-family: Impact;
          font-weight: 400;
          font-style: italic;
          color: rgba(250, 252, 255, 1);
          text-shadow: 0 0.01rem 0.1rem rgba(121, 231, 255, 0.28);

          background: linear-gradient(180deg, rgba(249, 251, 255, 1) 0%, rgba(27, 185, 225, 1) 99.0478515625%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        font-size: 0.17rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        font-style: italic;
        color: rgba(223, 226, 253, 1);
      }
    }
  }
  .tourism-title {
    position:absolute;
    z-index: 6;
    left: 20rem;
    top: 5rem;
    img {
      position: absolute;
      left:50%;
      cursor: pointer;
      transform: translateX(-50%)
    }
  }
  .select-zindex {
    z-index: 10!important;
  }

</style>
