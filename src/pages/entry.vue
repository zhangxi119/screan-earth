<!--
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-01-20 10:17:39
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-22 15:54:01
 -->
<template>
  <div class="index-container">
     <div class="videoShow" v-if="showVideo1" >
      <span  @click="showVideo1=false">X</span>
      <video controls  style="height:100%;width:100%" autoplay>
        <source src="http://10.10.190.132/video/0518.mp4" type="video/mp4">
        <source src="http://10.10.190.132/video/0518.mp4" type="video/ogg">
      </video>
    </div>
<!-- 右下方视频放大 -->
    <div class="videoRights" v-if='videoRightsShows'>
      <p v-text='openText'></p>
      <img class="close-img" @click="closeVideoRight" src="@/assets/common/closepopicon.png"/>
      <div class="videoRightbottom" id="videoRightbottom"></div>
    </div>
    <div class="wholeCl">
      <iframe src ="http://117.176.87.62:81/bd-chart-lsxlx/" id="ifr1" name="ifr1" width="100%" height="100%"></iframe>
    </div>
    <img class="img-bg" src="@/assets/entry/bg.png"/>
    <img class="img-bg" src="@/assets/entry/bg2.png"/>
    <img class="img-bg-03" src="@/assets/entry/bg3.png"/>
    <div class="container-header">乐山市心连心服务中心</div>
    <div class="xuanfu xf1" :class="{xuanfuActive:isShow}" @click="shuzi">数字规<br/>划馆</div>
    <div class="xuanfu xf2" :class="{xuanfuActive:isShow}" @click="tozhihui" id='btn_full_scr'>智慧旅<br/>游平台</div>
    <!--左边部分-->
    <div class="index-left">
      <div class="index-left-top">
        <p class="left-top-title">行政区划</p>
        <div class="left-top-box">
          <div class="left-area">
            <p>区域面积</p>
            <p>{{leftData.area | foamterThoand}}<span>k㎡</span></p>
          </div>
          <div class="right-area">
            <p><span><img
              src="@/assets/entry/icon01.png"/>区</span><span><label>{{leftData.zone}}</label>&nbsp;&nbsp;个</span></p>
            <p><span><img src="@/assets/entry/icon02.png"/>县</span><span><label>{{leftData.county}}</label>&nbsp;&nbsp;个</span>
            </p>
            <p><span><img src="@/assets/entry/icon03.png"/>代管县级市</span><span><label>{{leftData.county02}}</label>&nbsp;&nbsp;个</span>
            </p>
          </div>
        </div>
      </div>
      <div class="index-left-center">
        <p class="left-top-title">人口</p>
        <div class="left-center-box">
          <div>
            <p>户籍人口</p>
            <p>{{leftData.dh01005}} <span>万人</span></p>
          </div>
          <div>
            <p>常住人口</p>
            <p>{{leftData.dh01006}}  <span>万人</span></p>
          </div>
        </div>
        <p class="left-top-title-02">常住人口城镇化率趋势<img src="@/assets/entry/icon04.png"/></p>
        <div class="left-echarts" id="left-echarts"></div>
      </div>
      <div class="index-left-bottom">
        <p class="left-top-title">经济</p>
        <div class="gdp-box">
          <div class="gdp-c">
            <p class="gdp-title"><img src="@/assets/entry/country.png"/>全市GDP</p>
            <p><span>{{leftData.dh01007 | foamterThoand}}</span>亿元</p>
            <div :class="leftData.dh01008<0?'down-rate':''"><span>增速</span>
              <img
                :src="leftData.dh01010 >=0 ? require('@/assets/city-management/common-service/social-insurance/up-arrow.png') : require('@/assets/city-management/common-service/social-insurance/down-arrow.png')"/>
              {{leftData.dh01008}}%
            </div>
          </div>
          <div class="gdp-c">
            <p class="gdp-title"><img src="@/assets/entry/personGdp.png"/>人均GDP</p>
            <p><span>{{leftData.dh01009 | foamterThoand }}</span>元</p>
            <div :class="leftData.dh01008<0?'down-rate':''"><span>比上年增加</span><img
              :src="leftData.dh01010 >=0 ? require('@/assets/city-management/common-service/social-insurance/up-arrow.png') : require('@/assets/city-management/common-service/social-insurance/down-arrow.png')"/>
              {{leftData.dh01010}} 元
            </div>
          </div>
          <div class="gdp-c">
            <p class="gdp-title"><img src="@/assets/entry/urse.png"/>农村人均可支配收入</p>
            <p><span>{{leftData.dh01011 | foamterThoand }}</span>元</p>
            <div :class="leftData.dh01012<0?'down-rate':''"><span>增速</span> <img
              :src="leftData.dh01012 >=0 ? require('@/assets/city-management/common-service/social-insurance/up-arrow.png') : require('@/assets/city-management/common-service/social-insurance/down-arrow.png')"/>{{leftData.dh01012
              }} %
            </div>
          </div>
          <div class="gdp-c">
            <p class="gdp-title"><img src="@/assets/entry/cityUse.png"/>城镇人均可支配收入</p>
            <p><span>{{rightData.dh01013 | foamterThoand }}</span>元</p>
            <div :class="leftData.dh01008<0?'down-rate':''"><span>增速</span> <img
              :src="leftData.dh01010 >=0 ? require('@/assets/city-management/common-service/social-insurance/up-arrow.png') : require('@/assets/city-management/common-service/social-insurance/down-arrow.png')"/>{{rightData.dh01014
              }}%
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--右侧部分-->
    <div class="index-right">
      <div class="index-right-weather">
        <div class="wether-01">
          <img :src="forecast.img.icon"/>
          {{forecast.tem}}
          <em class="shesidu">℃</em>
          <em class="qin">{{forecast.wea}}</em>
          <em class="qin">{{forecast.temScope}}</em>
        </div>
        <div class="wether-02">
          <div>{{forecast.aqi}}</div>
          <div><span>PM2.5</span><span>{{forecast.aqiLevel}}</span></div>
        </div>
        <div class="wether-03">
          <div>{{date}}</div>
          <div>{{forecast.date}}  {{forecast.week}}</div>
        </div>
      </div>
      <div class="timer-box" id="timer-box" @mouseover="mouseOver" @mouseleave="timers">
        <div class="timer-content">
          <div id="scroll2-box">
            <!-- 第一部分 -->
            <div class="index-right-bottom">
              <p class="right-top-title">城市突发事件</p>
              <div class="right-bottom-box" :style="{'justify-content': city.list.length>0 ? 'flex-start':'center'}">
                <div class="page3" v-if="city.list.length">
                  <img src="@/assets/entry/righicon.png" @click="paeg3(1)"/>
                  <template>
                    <div v-if="city.list.length>3" class="page-text">{{city.pageI}}<br/>/<br/>{{city.list.length}}</div>
                    <div v-else><span v-for="(item,index) in city.list" :key="index"
                                      :class="{active:index+1 === city.pageI}"></span></div>
                  </template>
                  <img src="@/assets/entry/righicon.png" @click="paeg3(2)"/>
                </div>
                <div class="right-bottom-01">
                  <div class="right-bottom-inner">
                    <p :style="{color:city.list.length>0 ? '#FF7E00': '#7effdb'}">{{city.count}}</p>
                    <p>今日突发事件</p>
                  </div>
                </div>
                <div class="right-bottom-02" v-if="city.list.length">
                  <p><span>事件类别：</span><span>{{city.list[city.pageI - 1].type}}</span></p>
                  <p><span>事件名称：</span><span>{{city.list[city.pageI - 1].name}}</span></p>
                  <p><span>发生区域：</span><span>{{city.list[city.pageI - 1].area}}</span></p>
                  <p><span>事件级别：</span><span>{{city.list[city.pageI - 1].grade}}</span></p>
                  <p><span>发生时间：</span><span>{{city.list[city.pageI - 1].date}}</span></p>
                </div>
              </div>
              <p class="right-top-title02">城市事件态势
                <img src="@/assets/entry/icon04.png"/>
              </p>
              <div class="right-echarts" id="right-echarts"></div>
            </div>
            <!-- 第二部分 -->
            <div class="one-timer index-right-top">
              <p class="right-top-title">景区运行情况</p>
              <div class="right-top-box">
                <div class="right-top-box-01">
                  <p class="titl2">大佛景区当日实时客流量</p>
                  <img src="@/assets/entry/bar.png"/>
                  <p>{{runData.map.dfjq | foamterThoand}}<span style="font-size:0.16rem;margin-left:0.05rem">人次</span>
                  </p>
                </div>
                <div class="right-top-box-01">
                  <p class="titl2">峨眉山景区当日实时客流量</p>
                  <img src="@/assets/entry/bar.png"/>
                  <p>{{runData.map.emsjq | foamterThoand}}<span style="font-size:0.16rem;margin-left:0.05rem">人次</span>
                  </p>
                </div>
              </div>
              <p class="right-top-title02">A级旅游景区
                <img src="@/assets/entry/icon04.png"/>
              </p>
              <!-- <div class="timer-pro" v-for="(item,index) in runData.list" :key = "index">
                  <div class = 'numb' :class = "{one:index===0,two:index===1,three:index===2,other:index>=3}">{{index+1}}</div>
                  <div class="pro">
                    <p>{{item.name}}</p>
                    <div class = 'pro-c'>
                      <div :style = "{width:(item.value/runData.list[0].value)*100 + '%'}"></div>
                    </div>
                  </div>
                  <div class = "text">{{item.value | foamterThoand}}人次</div>
              </div> -->
              <div class="finish-pie">
                <div class="finish" id="run-box"></div>
                <div class="finish-text">
                  <p>{{count2.value}}</p>
                  <p>{{count2.name}}</p>
                  <p>({{count2.unit}})</p>
                </div>
              </div>
            </div>
            <!-- 第三部分 -->
            <div class="second-timer index-right-top">
              <p class="right-top-title">心连心服务</p>
              <div class="right-top-box">
                <div class="right-top-box-01">
                  <p class="titl2">今日受理</p>
                  <p class="num2"><span class="first">{{todayData.xl01007 | foamterThoand}} </span>件</p>
                </div>
                <div class="right-top-box-01">
                  <p class="titl2">今日办结</p>
                  <p class="num2"><span class="second">{{todayData.xl01008 | foamterThoand }} </span>件</p>
                </div>
                <div class="right-top-box-01">
                  <p class="titl2">今日转办</p>
                  <p class="num2"><span class="third">{{todayData.xl01009 | foamterThoand }} </span>件</p>
                </div>
              </div>
              <p class="right-top-title02">今日热门问题TOP5
                <img src="@/assets/entry/icon04.png"/>
              </p>
              <div class="timer-pro" v-for="(item,index) in todayList" :key="index">
                <div class='numb' :class="{one:index===0,two:index===1,three:index===2,other:index>=3}">{{index + 1}}
                </div>
                <div class="pro">
                  <p>{{item.name}}</p>
                  <div class='pro-c'>
                    <div :style="{width:(item.value/todayList[0].value)*100 + '%'}"></div>
                  </div>
                </div>
                <div class="text">{{item.value | foamterThoand}}件</div>
              </div>
              <!-- <div class="news-box">
                <div class = "title">
                  <div>事件名称</div>
                  <div>事件类型</div>
                  <div>发生区县</div>
                  <div>时间</div>
                </div>
                <div class = "news-content">
                  <div v-for= "(item,index) in todayList" :key = "index">
                    <div :title = "item.be1201">{{item.be1201}}</div>
                    <div :title = "item.be1202"  :class = "{yanzhong:item.be1202 === '严重',putong:item.be1202 === '普通',zhuli:item.be1202 === '处理中'}">{{item.be1202}}</div>
                    <div :title = "item.be1203">{{item.be1203}}</div>
                    <div :title = "item.be1204">{{item.be1204}}</div>
                  </div>
                </div>
              </div> -->
            </div>
            <!-- 第四部分 -->
            <div class="four">
              <p class="right-top-title">挂图作战项目基本情况</p>
              <div class="right-top-box" v-if="picTureData.length">
                <div class="right-top-box-01">
                  <p class="titl2">{{picTureData[0].name}}</p>
                  <p class="num2"><span class="first">{{picTureData[0].value}} </span>个大项目({{picTureData[1].value}})个子项
                  </p>
                </div>
                <div class="right-top-box-01">
                  <p class="titl2">{{picTureData[2].name}}</p>
                  <p class="num2"><span
                    class="second">{{picTureData[2].value | foamterThoand}}</span>{{picTureData[2].unit}}</p>
                </div>
                <div class="right-top-box-01">
                  <p class="titl2">{{picTureData[3].name}}</p>
                  <p class="num2"><span class="third">{{picTureData[3].value}}</span>{{picTureData[3].unit}}</p>
                </div>
              </div>
              <p class="right-top-title02">项目开工及完成情况
                <img src="@/assets/entry/icon04.png"/>
              </p>
              <div class="finish-pie">
                <div class="finish-text">
                  <p>{{count.value}}</p>
                  <p>{{count.name}}</p>
                  <p>({{count.unit}})</p>
                </div>
                <div class="finish" id="finish"></div>
              </div>
            </div>
            <!-- 第五部分 -->
            <div class="five">
              <p class="right-top-title">信息资源接入情况</p>
              <p class="right-top-title02">系统接入
                <img src="@/assets/entry/icon04.png"/>
              </p>
              <div class="right-top-box" v-if="picTureData.length">
                <div class="right-top-box-01" @click="showSystem">
                  <p class="titl2">系统接入总数</p>
                  <p class="num2"><span class="first" v-text="systemNum"></span>个
                  </p>
                </div>
                <div class="right-top-box-01">
                  <p class="titl2">视频接入总数</p>
                  <p class="num2"
                     @click="videoSelectIndex=0"
                     :class="{'selected':videoSelectIndex===0}"
                  ><span class="second" v-text="videoNum"></span>路</p>
                </div>
              </div>
              <p class="right-top-title02">数据接入
                <img src="@/assets/entry/icon04.png"/>
              </p>
              <div class="data-add">
                <div>
                  <span class="five-title">数据共享提供部门总数</span>
                  <span class="five-num" v-text="infor.shareCom"></span>
                  <span class="five-unit">家</span>
                </div>
                <div>
                  <span class="five-title">累计数据存储</span>
                  <span class="five-num" v-text="infor.shareGb"></span>
                  <span class="five-unit">GB</span>
                </div>
                <div>
                  <span class="five-title">累计归集数据总量</span>
                  <span class="five-num" v-text="((infor.shareTotal)/10000).toFixed(2)"></span>
                  <span class="five-unit">亿条</span>
                </div>
              </div>
            </div>
            <!-- 重复第一部分 -->
            <div class="index-right-bottom">
              <p class="right-top-title">城市突发事件</p>
              <div class="right-bottom-box" :style="{'justify-content': city.list.length>0 ? 'flex-start':'center'}">
                <div class="page3" v-if="city.list.length">
                  <img src="@/assets/entry/righicon.png" @click="paeg3(1)"/>
                  <template>
                    <div v-if="city.list.length>3" class="page-text">{{city.pageI}}<br/>/<br/>{{city.list.length}}</div>
                    <div v-else><span v-for="(item,index) in city.list" :key="index"
                                      :class="{active:index+1 === city.pageI}"></span></div>
                  </template>
                  <img src="@/assets/entry/righicon.png" @click="paeg3(2)"/>
                </div>
                <div class="right-bottom-01">
                  <div class="right-bottom-inner">
                    <p :style="{color:city.list.length>0 ? '#FF7E00': '#7effdb'}">{{city.count}}</p>
                    <p>今日突发事件</p>
                  </div>
                </div>
                <div class="right-bottom-02" v-if="city.list.length">
                  <p><span>事件类别：</span><span>{{city.list[city.pageI - 1].type}}</span></p>
                  <p><span>事件名称：</span><span>{{city.list[city.pageI - 1].name}}</span></p>
                  <p><span>发生区域：</span><span>{{city.list[city.pageI - 1].area}}</span></p>
                  <p><span>事件级别：</span><span>{{city.list[city.pageI - 1].grade}}</span></p>
                  <p><span>发生时间：</span><span>{{city.list[city.pageI - 1].date}}</span></p>
                </div>
              </div>
              <p class="right-top-title02">城市事件态势
                <img src="@/assets/entry/icon04.png"/>
              </p>
              <div class="right-echarts" id="right-echarts2"></div>
            </div>
          </div>
          <div class="page2 timerPage">
            <img src="@/assets/entry/righicon.png" @click="rightTimer(1)"/>
            <div>
              <span v-for="(item,index) in  [1,2,3,4,5]" :key="index" :class="{'active': item === rightI}"></span>
            </div>
            <img src="@/assets/entry/righicon.png" @click="rightTimer(2)"/>
          </div>
        </div>
      </div>
      <div class="timer2-box">
        <div class="title3">
          <img src="@/assets/entry/right2.png" @click="clickPage(1)"/>
          <div class="bottom-title">
            <div id="scroll-title">
              <div id='bottom-title'>{{vedio.monitor[0] ? vedio.monitor[0].title : ''}}</div><!--
              -->
              <div>{{vedio.monitor[1] ? vedio.monitor[1].title : ''}}</div><!--
              -->
              <div>{{vedio.monitor[2] ? vedio.monitor[2].title : ''}}</div><!--
              -->
              <div>{{vedio.monitor[3] ? vedio.monitor[3].title : ''}}</div>
            </div>
          </div>
          <img src="@/assets/entry/right2.png" @click="clickPage(2)">
        </div>
        <div class="content">
          <div class="scroll" id="scroll" v-if="vedio.monitor.length">
            <div class="first vedio2" id="content">
              <div v-for="(item,index) in vedio.monitor[0].arr" :key="index">
                <div :id="item.id + 'vedio' "></div>
                <p>{{item.name}}</p>
                <img src="../assets/entry/openBig.png" alt=""  @click='openBigVideo(item)'>
              </div>
            </div>
            <div class="first vedio2" id="content">
              <div v-for="(item,index) in vedio.monitor[1].arr" :key="index">
                <div :id="item.id + 'vedio' "></div>
                <p>{{item.name}}</p>
                <img src="../assets/entry/openBig.png" alt=""  @click='openBigVideo(item)'>
              </div>
            </div>
            <div class="first vedio2" id="content">
              <div v-for="(item,index) in vedio.monitor[2].arr" :key="index">
                <div :id="item.id + 'vedio' "></div>
                <p>{{item.name}}</p>
                <img src="../assets/entry/openBig.png" alt=""  @click='openBigVideo(item)'>
              </div>
            </div>
            <div class="four">
              <div class="four-title"><p>{{vedio.text.zd06003}}</p> <span>{{vedio.text.zd06005}}</span></div>
              <div class="four-c">
                <img src="@/assets/city-management/economic-run/major-project/tp.jpg" class="guhao"/>
                <div class="posi">{{vedio.text.zd06003}}</div>
                <div>{{vedio.text.zd06008}}</div>
              </div>
              <div class="inf yipai">
                <div>总投资: <span>{{vedio.text.zd06009}}万</span></div>
                <div>{{vedio.text.zd06001}}年计划投资: <span> {{vedio.text.zd06010}}万</span></div>
              </div>
              <div class="inf">
                指挥长：<span>{{vedio.text.zd06011}}</span>
              </div>
              <div class="inf">
                牵头单位：<span>{{vedio.text.zd06012}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="page2">
          <img src="@/assets/entry/righicon.png" @click="clickPage2(1)"/>
          <div>
            <span v-for="(item,index) in vedio.page" :key="index" :class="vedio.i === item ? 'active': ''"></span>
            <!-- <span></span><span></span><span></span> -->
          </div>
          <img src="@/assets/entry/righicon.png" @click="clickPage2(2)"/>
        </div>
      </div>
    </div>
    <!--中心部分-->
    <div class="index-center" id="index-center">
      <div @click="showImg(1)" class="center-common "
           :class="[{'select-center':isShow===1}, leftSeyStyle[0] ]">
        <div class="center-01-inner">
          <img src="@/assets/entry/panle01.png"/>
          <div v-if="isShow===1" class="text-container"><p>{{viewText[0]}}</p></div>
        </div>
      </div>
      <div @click="showImg(2)" class="center-common" :class="[{'select-center':isShow===2},leftSeyStyle[1]]">
        <div class="center-01-inner">
          <img src="@/assets/entry/panle02.png"/>
          <div v-if="isShow===2" class="text-container"><p>{{viewText[1]}}</p></div>
        </div>
      </div>
      <div @click="showImg(3)" class="center-common" :class="[{'select-center':isShow===3},leftSeyStyle[2]]">
        <div class="center-01-inner">
          <img src="@/assets/entry/panle03.png"/>
          <div v-if="isShow===3" class="text-container"><p>{{viewText[2]}}</p></div>
        </div>
      </div>
      <div @click="showImg(4)" class="center-common" :class="[{'select-center':isShow===4}, rightSeyStyle[0]]">
        <div class="center-02-inner">
          <img src="@/assets/entry/panle04.png"/>
          <div v-if="isShow===4" class="text-container"><p>{{viewText[3]}}</p></div>
        </div>
      </div>
      <div @click="showImg(5)" class="center-common" :class="[{'select-center':isShow===5},rightSeyStyle[1]]">
        <div class="center-02-inner">
          <img src="@/assets/entry/panle05.png"/>
          <div v-if="isShow===5" class="text-container"><p>{{viewText[4]}}</p></div>
        </div>
      </div>
      <div @click="showImg(6)" class="center-common" :class="[{'select-center':isShow===6},rightSeyStyle[2]]">
        <div class="center-02-inner">
          <img src="@/assets/entry/panle06.png"/>
          <div v-if="isShow===6" class="text-container"><p>{{viewText[5]}}</p></div>
        </div>
      </div>
      <div class="earth-div" id="earth-div">
        <img src="@/assets/entry/linght.png"/>
        <img src="@/assets/entry/linght.png"/>
      </div>
      <div class="ring-img-box">
        <img src="@/assets/entry/ring.png"/>
      </div>
      <div class="ring-02-box">
        <img class="ring-02" src="@/assets/entry/ring2.png"/>
      </div>
      <div class='ball'>
        <div class="ball-box">
          <div @click="toPage('macroEconomy')" class="ball-img-01  common-img">
            <span>
              城市综合<br/>管理
            </span>
          </div>
          <div @click="toPage('publicHealth')" class="ball-img-02  common-img">
            <span>
              应急指挥<br/>调度
            </span>
          </div>
          <div @click="toPage('serviceJoin')" class="ball-img-03  common-img">
            <span>
              心连心<br/>服务
            </span>
          </div>
          <!-- <div @click="toPage('digitalEconomy')" class="ball-img-03  common-img">
            <span>
              数字规<br />划馆
            </span>
          </div> -->
        </div>
      </div>
    </div>
    <!-- 弹框 -->
    <div class="dialog" v-show="isDalog">
      <div class="hed">
        <span><img src='../assets/common/top-title.png'/>第三方系统接入详情</span>
        <div>
          <!--          <input type="text" placeholder="请输入内容..."/>
                    <button>搜索</button>
                    -->
          <img src='../assets/common/closepopicon.png' style="cursor: pointer" @click="isDalog = false">
        </div>
      </div>
      <div class="date-table">
        <div class="thead">
          <div class="fir">序号</div>
          <div class="sc">第三方系统名称</div>
          <div class="thi">提供部门</div>
          <div class="add">地址链接</div>
        </div>
        <div class="tbody">
          <div v-for="(item, index) in runData.arr" :key="index">
            <div class="fir" v-text="item.dh03001"></div>
            <div class="sc" v-text="item.dh03002"  @click="goNewPage(item.dh03004)"></div>
            <div class="thi" v-text="item.dh03003"></div>
            <div class="add" @click="goNewPage(item.dh03004)" :title='item.dh03004' v-text="item.dh03004"></div>
          </div>
        </div>
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
          <treeComponent :list="treeList" v-show="isShowC"></treeComponent>
        </div>
        <div>
          <p class="tree-title" @click="showTreeFirst(2)">
            <img class="icon"
                 :src='!isShowC2 ? require("@/assets/common/tree-icon.png"):require("@/assets/common/tree-icon02.png")'/>
            <span :class="{'selected':isShowC2 }">自定义列表</span>
            <img :class="isShowC2 ? 'icon-04' : 'icon-03' "
                 :src='!isShowC2 ? require("@/assets/common/tree-icon03.png") : require("@/assets/common/tree-icon01.png")'/>
          </p>
          <treeComponent :list="customeList" v-show="isShowC2"></treeComponent>
        </div>
      </div>
      <div class="right-list">
        <div class="right-list-box-01">
          <div class="right-title-01">{{videoListName}}</div>
          <div class="right-title-02" @click="selectVideoByR2">综合视频</div>
          <!-- <div class="right-title-02" @click="addVideoLocation">视频点位</div> -->
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
          <div class="video-item" v-show="item.display"  v-for="(item,index) in nowVideoList" :key="index" :data-src="item.url" :data-id="item.id" :data-name="item.name">
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
  </div>
</template>
<script>
import API from '@/api/entry/entry'
import APIS from '@/api/tool'
import treeComponent from '@/components/tree-component'
import { imgPath } from '@/utils/BasePath.js'
import echarts from 'echarts'
import options from '@/echarts-data/entry/left-charts-01'
import options02 from '@/echarts-data/entry/right-charts-01'
import earth from '@/assets/entry/map.png'
import dot from '@/assets/entry/dot.png'
import UpPoint from '@/utils/upPoint.js'
import * as THREE from 'three'
import ThreeBSP from '@/utils/threeBsp.js'
import finish from '@/echarts-data/entry/finish'
import run from '@/echarts-data/entry/run'
import duoyun from '@/assets/city-management/environment/atmospheric-environment/duoyun.png'
import xiaoyu from '@/assets/city-management/environment/atmospheric-environment/xiaoyu.png'
import yintian from '@/assets/city-management/environment/atmospheric-environment/yintian.png'
import zhongyu from '@/assets/city-management/environment/atmospheric-environment/zhongyu.png'
import baoyu from '@/assets/city-management/environment/atmospheric-environment/baoyu.png'
import qingtian from '@/assets/city-management/environment/atmospheric-environment/qingtian.png'
// import CesiumMap from '@/utils/CesiumMap.js'
import { openThirdPage } from '@/utils/utils'
// import store from '../store'

export default {
  components: {treeComponent},
  name: 'entry',
  data () {
    return {
      showVideo1: false,
      isDalog: false,
      videoRightsShows: false,
      openText: '',
      swfurl: './static/libs/flowplayer/flowplayer-3.2.18.swf',
      weathObject: {
        'duoyun': {
          icon: duoyun,
          color: '#00BF62'
        },
        'xiaoyu': {
          icon: xiaoyu,
          color: '#4CA3FF'
        },
        'yintian': {
          icon: yintian,
          color: '#4CA3FF'
        },
        'zhongyu': {
          icon: zhongyu,
          color: '#4CA3FF'
        },

        'baoyu': {
          icon: baoyu,
          color: '#4CA3FF'
        },
        'qingtian': {
          icon: qingtian,
          color: '#FFD13B'
        }
      },
      leftData: {
        area: '', // 区域面积
        zone: '', // 区
        county: '', // 县
        county02: '', // 代管县级
        dh01005: '', // 户籍人口
        dh01006: '', // 常住人口
        dh01007: '', // GDP（亿元）
        dh01008: '', // GDP增速
        dh01009: '', // 人均GDP（元）
        dh01010: '', // 人均GDP比上年增加（元）
        dh01011: '', // 采购人经理指数
        dh01012: '' // 城乡居民消费指数
      },
      rightData: {
        dh01013: '', // 累计诉求总数
        dh01014: '', // 累计办结数
        dh01015: '', // 累计办结率
        emergenciesNum: '', // 今日发生事件数
        emergenciesMap: {
          dh04001: '无', // 事件累类别
          dh04002: '无', // 事件名称
          dh04003: '无', // 发生区域
          dh04004: '无', // 事件级别
          dh04005: '无'// 发生时间
        }
      },
      forecast: {
        img: '',
        dq03008: '', // 天气
        dq03007: '', // 首要污染物
        dq03006: '', // 污染等级
        dq03005: '', // 污染指数（AQI）
        dq03002: ''// 平均温度
      },
      animate: false,
      isShow: false,
      earthImgData: null,
      earthImg: null,
      points: null,
      deg: 0,
      news: [],
      rightPage: 1,
      timer: null,
      rightI: 1, // 右上角分页
      picTureData: [],
      count: {},
      count2: {
        name: '总量',
        unit: '个',
        value: 0
      },
      todayData: {},
      todayList: [],
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
      city: {
        count: 0,
        pageI: 1,
        list: []
      },
      vedio: {
        monitor: [],
        arr: [],
        text: {},
        page: [], // 分页数组
        i: 1 // 当前是第几页
      },
      leftSeyStyle: ['center-01', 'center-02', 'center-03'],
      rightSeyStyle: ['center-04', 'center-05', 'center-06'],
      timer2: null,
      date: '',
      isMove: false,
      isfinish: false, // 测试广告图有没有完全正中央显示完
      timer3: null,
      timer4: null,
      infor: {
        shareCom: '',
        shareGb: '',
        shareTotal: ''
      },
      systemNum: '',
      videoNum: '',
      isShowC: true,
      isShowC2: false,
      videoName: '视频监控',
      imgPath,
      isShowTool: false,
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
      videosML: [], // 视频分页
      bannerIndex: 0, // banner下标
      isVideoListName: false, // 是否显示视频目录
      videoSelectIndex: -1, // 显示视频选项列表 下标
      commonVideo: false,
      isZone: false,
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
      model: [
        {
          position: {
            x: -1317655.119432193,
            y: 5386179.838193813,
            z: 3153499.1923701754,
            heading: 4.31377375123299,
            pitch: -0.5405465492437114,
            roll: 1.0658141036401503e-14
          },
          name: '万达'
        },
        {
          position: {
            x: -1317175.715799436,
            y: 5387679.204009034,
            z: 3149956.0900064684,
            heading: 2.427872873640347,
            pitch: -0.31828566999820573,
            roll: 1.7763568394002505e-14
          },
          name: '新华联广场'
        },
        {
          position: {
            x: -1319905.0095070181,
            y: 5389520.247466356,
            z: 3145581.7503181463,
            heading: 1.9625550867261783,
            pitch: -0.2084260166161629,
            roll: 1.687538997430238e-14
          },
          name: '乐山大佛'
        },
        {
          position: {
            x: -1319650.3930299762,
            y: 5388878.605911296,
            z: 3147747.267372376,
            heading: 1.7341186727968418,
            pitch: -0.5720260194939666,
            roll: 6.283185307179586
          },
          name: '嘉定'
        },
        {
          position: {
            x: -1320113.9774410136,
            y: 5388482.622065374,
            z: 3148138.4253683817,
            heading: 1.6879395178026915,
            pitch: -0.8184258653501018,
            roll: 6.283185307179558
          },
          name: '嘉州'
        },
        {
          position: {
            x: -1319762.8111422316,
            y: 5390461.305994358,
            z: 3145646.5365286176,
            heading: 0.6064540424053826,
            pitch: -0.5768742556158073,
            roll: 6.283185307179586
          },
          name: '市政府'
        },
        {
          position: {
            x: -1319081.5842226471,
            y: 5388201.850409644,
            z: 3148351.860994478,
            heading: 1.211606261811724,
            pitch: -0.36112612530496957,
            roll: 6.283185307179533
          },
          name: '牛咡桥'
        },
        {
          position: {
            x: -1319275.5886583417,
            y: 5388119.292070516,
            z: 3148552.9240406184,
            heading: 5.425051261557934,
            pitch: -0.42481825927358496,
            roll: 6.28318530717954
          },
          name: '市委'
        },
        {
          position: {
            x: -1314730.8017899173,
            y: 5387478.1263826825,
            z: 3151098.0881601227,
            heading: 3.925860402463735,
            pitch: -0.2846534261790892,
            roll: 6.28318530717951
          },
          name: '心连心服务'
        },
        {
          position: {
            x: -1317331.7316650122,
            y: 5389326.505296595,
            z: 3149297.7901933803,
            heading: 5.873438292586951,
            pitch: -0.4919435009411819,
            roll: 2.042810365310288e-14
          },
          name: '世豪广场'
        }
      ],
      selectVideoId: '',
      selectVideoName: '',
      pageNum: 1,
      pageSize: 10,
      zoneVideos: [{hoverFlag: true, name: 'wt'}],
      zoneVideos2: [],
      areaSelectVideoId: '',
      threeType: 0, // 2d 3d 标志 0 2d 1 3d,
      selectedModel: {name: '重点区域'},
      arrVideoItem: [],
      windowObjectReference: '',
      searchVideo: '',
      viewText: [
        '乐山中心城区对岸，岷江、青衣江、大渡河在乐山大佛脚下汇流。在此三江交汇之地，通过现代光影技术展现乐山古城和乐山凌云九峰景象。“夜游三江”是第四届四川国际旅游交易博览会的重头戏，主要夜景范围跨度约7公里，夜景线路总长约24公里，是省内已建成的单个夜景项目中最大的一个。夜景分为4大篇章，依次是心中有佛、睡佛初醒、古城再现、国画山水。',
        '十方普贤圣像是金顶的中心。端凝祥和的普贤端坐在大象和莲花座台上，四方云雾飘浮缭绕。当太阳的霞光照在佛像的宝顶上时，无数的祥光瑞气从金佛上反射出来，为云海镶上瑰丽的金边。十方普贤圣像为铜铸镏金工艺佛像造像，通高48米（代表阿弥陀佛的48个愿望），总重量达660吨，由台座和十方普贤像组成。',
        '乐山大佛，又名凌云大佛，位于四川省乐山市南岷江东岸凌云寺侧，濒大渡河、青衣江和岷江三江汇流处。大佛为弥勒佛坐像，通高71米，是中国最大的一尊摩崖石刻造像。乐山大佛和凌云山、乌尤山、巨形卧佛等景点组成的属于国家5A级旅游景区，是世界文化与自然双重遗产峨眉山-乐山大佛的组成部分。',
        '嘉阳小火车，一辆运行在四川南部的小县城－－犍为县城北15公里远的一条只有19.84千米的窄轨铁路上的“老爷火车”。有“工业革命的活化石”，“工业革命的绝版景观”，比大熊猫还要珍贵的国宝之美誉。这辆蒸汽火车的轨道距离仅762毫米，比国家标准列车的轨距少了近一半，铁路全线仅19284米，往返一次需2个小时。',
        '犍为文庙始建于北宋，重建于明代洪武四年，迄今已有600多年历史，在全国现存文庙中，规模居全国第四，四川第一。犍为文庙结构完整，规模气势宏大，特别是石刻、雕刻技艺十分精美，其明清风格的宏大的宫殿式古建筑群独具特色，是古代劳动人民智慧的结晶和民族艺术精品的集中体现。2006年，犍为文庙被列为第六批国家重点文物保护单位。',
        '峨眉山位于中国四川峨眉山市境内，景区面积154平方公里，最高峰万佛顶海拔3099米。地势陡峭，风景秀丽，有"秀甲天下"之美誉。它是中国四大佛教名山之一，有寺庙约26座，重要的有八大寺庙，佛事频繁。1996年12月6日，峨眉山乐山大佛作为文化与自然双重遗产被联合国教科文组织列入世界遗产名录。'
      ]
    }
  },
  watch: {
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
    }
  },
  mounted () {
    let _this = this
    this.timer3 = setInterval(this.getDate, 1000)
    this.lunBoGuangGao()
    this.initData()
    let $ = window.jQuery

    $('#app').on('mouseover', '.select-center', function () {
      if (_this.isShow && _this.isfinish) {
        _this.isMove = true
        clearInterval(this.timer2)
      }
    })

    $('#app').on('mouseout', '.select-center', function () {
      if (_this.isMove) {
        _this.isShow = false
        _this.isMove = false
        _this.lunBoGuangGao()
      }
    })

    this.$nextTick(() => {
      document.getElementById('index-center').addEventListener('transitionend', () => {
        this.isfinish = true
      })
    })
    let w = document.getElementById('index-center').clientWidth
    let h = document.getElementById('index-center').clientHeight

    this.points = new UpPoint('star', w, h, 20, 0, 200, 1)

    document.getElementById('index-center').appendChild(this.points.init('#10C0FF'))
    // 旋转球体
    let outWidth = $('.ball-box').width()
    $('.ball-box').height(outWidth)
    // 获取半径
    const rWidth = outWidth / 2
    // 获得弧度
    const radian = 2 * Math.PI / 360 * 60
    // 长边
    const langWidth = Math.sin(radian) * rWidth
    // icon的长度
    const iconWidth = $('.ball-img-01').width()

    $('.ball-img-01').css({
      top: 0 - iconWidth / 2,
      left: rWidth - iconWidth / 2
    })

    $('.ball-img-02').css({
      top: rWidth * 1.5 - iconWidth / 2,
      left: rWidth - langWidth - iconWidth / 2
    })

    $('.ball-img-03').css({
      top: rWidth * 1.5 - iconWidth / 2,
      left: outWidth - (rWidth - langWidth) - iconWidth / 2
    })
    $('.close-img-little').click(function () {
      alert('dcs')
      $(this).closest('.video-item').remove()
    })
    this.initEarth()
    this.renderCanvas()
    this.initGenerCatalogue() // 初始化视频目录
    this.leshanRegion = this.$store.getters.get_areaName
  },

  methods: {
    openBigVideo (val) {
      this.videoRightsShows = true
      this.openText = val.name
      this.$nextTick(() => {
        this.create('videoRightbottom', val.url)
      })
    },
    closeVideoRight () {
      this.videoRightsShows = false
    },
    searchVideoFuc () {
      let id = this.selectVideoId
      let pageNum = this.pageNum
      let pageSize = this.pageSize
      let name = this.searchVideo
      console.log(pageNum, pageSize, id, name)
      APIS.QUERY_VIDEOS(this, {pageNum, pageSize, id, name})
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
    goNewPage (val) {
      openThirdPage(val)
    },
    hideVideo () {
      this.threeType = 0
    },
    showTreeFirst (num) {
      if (num === 1) {
        this.isShowC = !this.isShowC
      } else {
        this.isShowC2 = !this.isShowC2
      }
    },
    openVideo (item) {
      this.areaSelectVideoId = item.id
      let {lon, lat} = item
      window._m.getSouthPointByDistance(
        {
          lon,
          lat
        },
        () => {}
      )
    },
    addVideoLocation () {
      if (this.videosML.length > 0) {
        this.zoneVideos2 = this.videosML
        this.$nextTick(() => {
          this.videosML.forEach(d => {
            this.create(d.id + '-video-panle', d.url)
          })
        })
        window._m.addToolsVideoMakers(this.videosML, type => {
          this.threeType = type
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
        APIS.QUERY_VIDEOS(this, {pageNum, pageSize, id, name}).then(res => {
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
    // showTreeFirst (num) {
    //   if (num === 1) {
    //     this.isShowC = !this.isShowC
    //   } else {
    //     this.isShowC2 = !this.isShowC2
    //   }
    // },
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
      APIS.GET_CATALOGUE(this, {id}).then(res => {
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
            APIS.QUERY_VIDEOS(this, {
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
    selectVideoByR2 () {
      // this.commonVideo = true
      openThirdPage('http://10.10.190.13:9917/admin/')
    },
    selectModel (item) {
      this.selectedModel = item
      this.isShowModelList = false
      window._m.flyToByMector(item.position)
    },
    shuzi () {
      this.showVideo1 = true
    },
    tozhihui () {
      window.open('http://117.176.87.62:81/bd-chart-lsxlx/')
    },
    showSystem () {
      this.isDalog = true
    },
    getDate () {
      let date = new Date()
      let h = date.getHours()
      h = h < 10 ? '0' + h : h
      let min = date.getMinutes()
      min = min < 10 ? '0' + min : min
      let s = date.getSeconds()
      s = s < 10 ? '0' + s : s
      this.date = h + ':' + min + ':' + s
    },
    /**
     * 右上角点击分页
     *  @param  {Number}  numb    1表示左 2表示右
     */
    rightTimer (numb) {
      if (numb === 1) {
        this.rightI--
        if (this.rightI === 0) {
          this.rightI = 5
        }
      } else {
        this.rightI++
        if (this.rightI === 6) {
          this.rightI = 1
        }
      }
      this.scrool2()
    },
    /**
     * 右上角定时器
     */
    scrool2 () {
      let dom2 = document.getElementById('scroll2-box')
      let dom = document.getElementById('timer-box')
      let w = dom.offsetWidth
      dom2.style.marginLeft = -(this.rightI - 1) * w + 'px'
      if (this.rightI === 6) {
        this.rightI = 1
        setTimeout(() => {
          dom2.style.marginLeft = 0 + 'px'
          dom2.style.transition = 'all 0s'
          dom2.style.WebkitTransition = 'all 0s'
        }, 2000)
      } else {
        dom2.style.transition = 'all 10s'
        dom2.style.WebkitTransition = 'all .6s'
      }
    },
    // 䡆播广告图
    lunBoGuangGao () {
      this.timer2 = setInterval(() => {
        let copy = this.leftSeyStyle[2]
        let copy2 = this.rightSeyStyle[2]

        this.leftSeyStyle[2] = this.leftSeyStyle[1]
        this.leftSeyStyle[1] = this.leftSeyStyle[0]
        this.leftSeyStyle[0] = copy

        this.rightSeyStyle[2] = this.rightSeyStyle[1]
        this.rightSeyStyle[1] = this.rightSeyStyle[0]
        this.rightSeyStyle[0] = copy2
      }, 1000 * 15)
    },
    // 每个大类的具体分页
    clickPage2 (num) {
      if (num === 1) {
        if (this.vedio.i === 1) {
          this.vedio.i = this.vedio.monitor[this.rightPage - 1].pageActive.length
        } else {
          this.vedio.i--
        }
      } else {
        if (this.vedio.i === this.vedio.monitor[this.rightPage - 1].pageActive.length) {
          this.vedio.i = 1
        } else {
          this.vedio.i++
        }
      }
      this.$set(this.vedio.monitor[this.rightPage - 1], 'active', this.vedio.i)
      if (this.rightPage === 4) {
        this.dealVedio(2, this.vedio.monitor[3], this.vedio.i, 3)
      } else {
        this.dealVedio(1, this.vedio.monitor[this.rightPage - 1].data, this.vedio.i, this.rightPage - 1)
      }
    },
    // 右上角自动切换
    timers () {
      this.timer = setInterval(() => {
        this.rightI++
        this.scrool2()
      }, 1000 * 10)
    },
    mouseOver () {
      clearInterval(this.timer)
    },
    // 右上角数据
    paeg3 (num) {
      if (num === 1) {
        if (this.city.pageI === 1) {
          this.city.pageI = this.city.list.length
        } else {
          this.city.pageI--
        }
      } else {
        if (this.city.pageI === this.city.list.length) {
          this.city.pageI = 1
        } else {
          this.city.pageI++
        }
      }
    },
    // 右下角大类切换
    clickPage (num) {
      let dom = document.getElementById('content')
      let dom2 = document.getElementById('scroll')
      let titleDom = document.getElementById('bottom-title')
      let titleW = titleDom.offsetWidth
      let w = dom.offsetWidth
      let left = parseInt(dom2.style.marginLeft) || 0
      // 向上
      if (num === 1) {
        if (this.rightPage === 1) {
          left = -dom.offsetWidth * 3
          this.rightPage = 4
        } else {
          left = left + w
          this.rightPage--
        }
      } else if (num === 2) {
        // 向下
        if (this.rightPage === 4) {
          left = 0
          this.rightPage = 1
        } else {
          left = left - w
          this.rightPage++
        }
      }
      dom2.style.marginLeft = left + 'px'
      document.getElementById('scroll-title').style.marginLeft = -(titleW * (this.rightPage - 1)) + 'px'

      if (this.rightPage === 4) {
        this.dealVedio(2, this.vedio.monitor[3], 1, 3)
      } else {
        this.dealVedio(1, this.vedio.monitor[this.rightPage - 1].data, 1, this.rightPage - 1)
      }
      this.vedio.page = this.vedio.monitor[this.rightPage - 1].pageActive
      this.vedio.i = 1
    },
    toPage (name) {
      this.$router.push({name: name})
      // let data = this.$store.state.config.isload
      // if (data === 1 && !this.isFresh) {
      //   alert('第一次')
      //   window._m = new CesiumMap()
      //   window._m.init('cesium-containner').open('http://10.10.190.132/iserver/services/3D-YSSJwork/rest/realspace', () => {
      //     window._m.setStyle()
      //     window._m.initDimension()
      //     window.document.oncontextmenu = function (e) {
      //       e.preventDefault()
      //       if (!window._m.isActiveDrawCustom && !window._m.isActiveDrawLine) {
      //         let areaNow = {name: '乐山市', totalName: '乐山市'}
      //         store.commit('set_areaName', areaNow)
      //         window._m.redirectDimenion()
      //       }
      //     }
      //   })
      //   let load = 2
      //   store.commit('set_isload', load)
      //   this.isFresh = true
      //   console.log(this.$store.state.config.isload + !this.isFresh)
      //   this.$router.push({name: name})
      // } else {
      //   alert('第二次')
      //   this.$router.push({name: name})
      // }
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
    // 右边心连心，景区旅游情况等定时调用接口
    timeAjax () {
      // 心连心服务
      API.HEART(this, {}).then(re => {
        if (re.status) {
          re = re.data.data.service
          this.todayData = {...re.map}
          this.todayList = re.list
        }
      }).catch(err => {
        console.log(err)
      })
      // 景区运行情况
      API.RUN(this, {}).then(re => {
        if (re.status) {
          // console.log(re)
          let re1 = re.data.data.scenics
          this.runData.map = {...re1.map}
          this.runData.a = {...re1.a}
          let runCharts = echarts.init(document.getElementById('run-box'))
          let runData = {
            data: [{
              name: '5A级',
              value: this.runData.a['5a']
            }, {
              name: '4A级',
              value: this.runData.a['4a']
            }, {
              name: '3A级以下',
              value: this.runData.a['3a'] + this.runData.a['2a']
            }],
            total: this.runData.a['5a'] + this.runData.a['4a'] + this.runData.a['3a'] + this.runData.a['2a']
          }
          runCharts.setOption(run(runData))
          this.count2.value = runData.total
          runCharts.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
          })
          this.dealChart(runCharts, 0)
        }
      }).catch(err => { console.log(err) })
      // 城市事件态势
      API.CITY_TYPE(this, {}).then(re => {
        if (re.status) {
          re = re.data.data.events
          this.city.count = re.map1.count
          this.city.list = re.map1.list
          echarts.init(document.getElementById('right-echarts')).setOption(options02(re.map2))
          echarts.init(document.getElementById('right-echarts2')).setOption(options02(re.map2))
        }
      }).catch(err => {
        console.log(err)
      })
    },
    dealVedio (flag, list, page, i) {
      this.vedio.monitor[i].arr = []
      if (flag === 1) { // 处理视频
        for (let x = (page - 1) * 4; x < page * 4; x++) {
          let d = list[x]
          if (d) {
            this.vedio.monitor[i].arr.push(d)
            this.$nextTick(() => {
              this.create(d.id + 'vedio', d.url)
            })
          }
        }
        // console.log(this.vedio.monitor)
      } else {
        this.vedio.text = {...list.data[page - 1]}
      }
    },
    initData () {
      this.timer4 = setInterval(() => {
        this.timeAjax()
      }, 1000 * 60 * 60)
      // 右下角视频
      API.VEDIO(this, {}).then(re => {
        if (re.status) {
          re = re.data.data
          this.vedio.monitor = re.monitor
          // 分页
          this.vedio.monitor.forEach((item, index) => {
            let len2 = 1
            let arr = []
            if (index !== 3) {
              len2 = Math.ceil(item.data.length / 4)
            } else {
              len2 = item.data.length
            }
            for (let x = 0; x < len2; x++) {
              arr.push(x + 1)
            }
            this.$set(this.vedio.monitor[index], 'pageActive', arr)
            this.$set(this.vedio.monitor[index], 'arr', [])
          })
          this.vedio.page = this.vedio.monitor[0].pageActive
          this.$nextTick(() => {
            this.dealVedio(1, this.vedio.monitor[0].data, 1, 0)
          })
        }
      }).catch(err => { console.log(err) })
      // 获取右边挂图作战
      API.GET_PICTURE(this, {}).then(res => {
        if (res.status) {
          let data = res.data.data.projects
          this.picTureData = [...data.baseinfo]
          this.count = {...data.completion}
          this.timers()
          // 渲染饼图
          // 项目开工及完成情况
          let mycharts = echarts.init(document.getElementById('finish'))
          mycharts.setOption(finish([...this.picTureData, this.count]))
          mycharts.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
          })
          this.dealChart(mycharts, 0)
        }
      }).catch(err => { console.log(err) })
      this.timeAjax()
      API.GET_BASE_INFO(this)
        .then((res) => {
          if (res.status === 200) {
            let result = res.data.data.sung
            this.leftData.area = result.dh01001
            this.leftData.zone = result.dh01002
            this.leftData.county = result.dh01003
            this.leftData.county02 = result.dh01004
            this.leftData.dh01005 = result.dh01005
            this.leftData.dh01006 = result.dh01006
            this.leftData.dh01007 = result.dh01007
            this.leftData.dh01008 = result.dh01008
            this.leftData.dh01009 = result.dh01009
            this.leftData.dh01010 = result.dh01010
            this.leftData.dh01011 = result.dh01011
            this.leftData.dh01012 = result.dh01012

            this.rightData.dh01013 = result.dh01013
            this.rightData.dh01014 = result.dh01014
            this.rightData.dh01015 = result.dh01015
          }
        })
        .catch((e) => {
          console.log(e)
        })
      API.GET_UR_BAN_RATE(this).then((res) => {
        if (res.status === 200) {
          let result = res.data.data.urbanization
          let xdata = []
          let ydata = []
          result.forEach((item) => {
            xdata.push(item.dh02001)
            ydata.push(item.dh02002)
          })
          console.log(xdata, ydata)
          echarts.init(document.getElementById('left-echarts')).setOption(options(xdata, ydata))
        }
      })
        .catch((e) => {
          console.log(e)
        })
      API.GET_WETHER(this)
        .then((res) => {
          if (res.status === 200) {
            let result = res.data.data.forecast[0]
            if (result.wea.indexOf('多云') > -1) {
              result.img = this.weathObject['duoyun']
            } else if (result.wea.indexOf('小雨') > -1) {
              result.img = this.weathObject['xiaoyu']
            } else if (result.wea.indexOf('阴') > -1) {
              result.img = this.weathObject['yintian']
            } else if (result.wea.indexOf('中雨') > -1) {
              result.img = this.weathObject['zhongyu']
            } else if (result.wea.indexOf('暴雨') > -1) {
              result.img = this.weathObject['baoyu']
            } else if (result.wea.indexOf('晴') > -1) {
              result.img = this.weathObject['qingtian']
            } else {
              result.img = this.weathObject['duoyun']
            }
            this.forecast = result
          }
        })
        .catch((e) => {
          console.log(e)
        })
      API.INFOR_SITE(this)
        .then((res) => {
          if (res.status === 200) {
            let data = res.data.data.information.data
            let num = res.data.data.information.system.total
            // console.log(data)
            this.infor.shareCom = data.dh04001
            this.infor.shareGb = data.dh04002
            this.infor.shareTotal = data.dh04003
            this.videoNum = data.dh04005
            this.systemNum = num
            this.runData.arr = res.data.data.information.system.list
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    showImg (type) {
      this.isfinish = false
      // 图片不在正中央显示的时候(点击时隐藏)
      if (this.isShow === type) {
        this.isShow = false
        this.lunBoGuangGao()
      } else {
        // 有图片在中央显示的时候
        this.isShow = type
        clearInterval(this.timer2)
      }
      // setTimeout(() => {
      //   this.isfinish = true
      // }, 0)
    },
    renderCanvas () {
      let $ = window.jQuery
      this.points.clear()
      this.points.draw()

      this.deg += 0.1
      $('.ring-img-box img').css({
        transform: 'rotateX(86deg) rotateY(0deg) translateY(3rem) rotateZ(' + this.deg + 'deg)'
      })
      // var list = $('.common-img')
      // for (var i = 0; i < list.length; i++) {
      //   var item = list[i]
      //   var translateYFront = $(item).css('transform')
      //   var values = translateYFront.split('(')[1].split(')')[0].split(',')
      //   var a = values[0]
      //   var b = values[1]

      //   var scale = Math.sqrt(a * a + b * b)
      //   if (scale > 0.9) {
      //     $(item).addClass('select-img')
      //     $(item).removeClass('common-img-bg')
      //   } else {
      //     $(item).removeClass('select-img')
      //     $(item).addClass('common-img-bg')
      //   }
      // }
      window.requestAnimationFrame(this.renderCanvas)
    },
    initEarth () {
      this.earthImg = document.createElement('img')
      this.earthImg.src = earth
      this.earthImg.onload = () => {
        let earthCanvas = document.createElement('canvas')
        let earthCtx = earthCanvas.getContext('2d')

        earthCanvas.width = this.earthImg.width
        earthCanvas.height = this.earthImg.height
        earthCtx.drawImage(this.earthImg, 0, 0, this.earthImg.width, this.earthImg.height)
        this.earthImgData = earthCtx.getImageData(0, 0, this.earthImg.width, this.earthImg.height)

        let camera = null
        let scene = null
        let renderer = null
        let fov = 45
        let near = 0.1
        let far = 1000
        let group = new THREE.Group()
        scene = new THREE.Scene() // 创建场景

        camera = new THREE.PerspectiveCamera(fov, document.getElementById('earth-div').clientWidth / document.getElementById('earth-div').clientHeight, near, far) // 创建摄像机
        camera.position.z = 450
        camera.position.y = -30
        camera.lookAt(0, 0, 0)
        var spotLight = new THREE.PointLight(0xffffff, 3, 0)
        spotLight.position.set(0, -20, 400)
        spotLight.angle = Math.PI / 5
        spotLight.penumbra = 0.2
        spotLight.castShadow = true
        spotLight.shadow.camera.near = 3
        spotLight.shadow.camera.far = 400
        scene.add(spotLight)

        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true
        }) // 创建一个WebGL渲染器并设置其大小
        renderer.shadowMapEnabled = true
        renderer.setSize(document.getElementById('earth-div').clientWidth, document.getElementById('earth-div').clientHeight)

        var earthParticles = this.createEarthParticles(100)
        earthParticles.position.set(0, -160, 0)
        var ring = this.createdRing()
        group.add(ring)
        group.add(earthParticles)
        scene.add(group)

        window.addEventListener('resize', function () {
          render()
        }, false)

        function render () {
          group.rotation.y -= 0.005
          renderer.render(scene, camera)
          requestAnimationFrame(render)
        }

        document.getElementById('earth-div').appendChild(renderer.domElement)
        render()
      }
    },
    createdRing () {
      var group = new THREE.Group()
      var bsp = this.created3dRing(150, 130, 200, 1)
      var bsp2 = this.created3dRing(150, 140, 180, 1, 0, 0.7)
      var bsp3 = bsp.subtract(bsp2)
      var material = new THREE.MeshPhongMaterial({
        color: 0x1794e0,
        specular: 0x1794e0,
        transparent: false,
        side: THREE.DoubleSide
      })
      var ringMesh = bsp3.toMesh(material)
      ringMesh.rotation.x = 90 * Math.PI / 180
      ringMesh.position.set(0, -120, 0)
      group.add(ringMesh)

      let bspI = this.created3dRing(114, 106, 200, 1, 0, 0.98)
      var _ring = bspI.toMesh(material)
      _ring.rotation.x = 90 * Math.PI / 180
      _ring.position.set(0, -120, 0)
      group.add(_ring)

      return group
    },
    created3dRing (out, inner, n, amount, thetaStart, thetaLength) {
      var c = null
      var _c = null
      var cp = null
      var _cp = null
      if (thetaLength) {
        c = new THREE.CircleGeometry(out, n, thetaStart, Math.PI * 2 * thetaLength)
        _c = new THREE.CircleGeometry(inner, n, thetaStart, Math.PI * 2 * thetaLength)
        cp = c.vertices
        _cp = _c.vertices
      } else {
        c = new THREE.CircleGeometry(out, n)
        _c = new THREE.CircleGeometry(inner, n)
        cp = c.vertices
        _cp = _c.vertices
        cp.shift()
        _cp.shift()
      }
      var material = new THREE.MeshPhongMaterial({
        color: 0x1794e0,
        specular: 0x111111,
        side: THREE.DoubleSide
      })
      var Oshape = new THREE.Shape()
      cp.forEach((d, i) => {
        var y = d.y
        var x = d.x
        if (i === 0) {
          Oshape.moveTo(x, y)
        } else if (i === cp.length - 1) {
          Oshape.lineTo(x, y, x, y)
        } else {
          Oshape.lineTo(x, y)
        }
      })
      var Omesh = new ThreeBSP(new THREE.Mesh(new THREE.ExtrudeGeometry(Oshape, {
        amount: amount,
        bevelEnabled: false
      }), material))

      var Ishape = new THREE.Shape()
      _cp.forEach((d, i) => {
        var y = d.y
        var x = d.x
        if (i === 0) {
          Ishape.moveTo(x, y)
        } else if (i === _cp.length - 1) {
          Ishape.lineTo(x, y, x, y)
        } else {
          Ishape.lineTo(x, y)
        }
      })
      var Imesh = new ThreeBSP(new THREE.Mesh(new THREE.ExtrudeGeometry(Ishape, {
        amount: amount,
        bevelEnabled: false
      }), material))
      var bsp = Omesh.subtract(Imesh)

      return bsp
    },
    createEarthParticles (radius) {
      let earthParticles = new THREE.Object3D()
      let group = new THREE.Group()
      // 创建地球
      let positions = []
      let materials = []
      let sizes = []
      let dotTexture = new THREE.TextureLoader().load(dot)
      let pos = null
      let size = null
      for (let i = 0; i < 2; i++) {
        positions[i] = {
          positions: []
        }
        sizes[i] = {
          sizes: []
        }
        let mat = new THREE.PointsMaterial()
        mat.size = 5
        mat.color = new THREE.Color(0x73c1fb)
        mat.map = dotTexture
        mat.depthWrite = false
        mat.transparent = true
        mat.opacity = 0.5
        mat.side = THREE.FrontSide
        mat.blending = THREE.AdditiveBlending
        let n = i / 2
        mat.t_ = n * Math.PI * 2
        mat.speed_ = 0.05
        mat.min_ = 0.2 * Math.random() + 0.5
        mat.delta_ = 0.1 * Math.random() + 0.1
        mat.opacity_coef_ = 1
        materials.push(mat)
      }
      let spherical = new THREE.Spherical()
      spherical.radius = radius
      const step = 250
      for (let i = 0; i < step; i++) {
        let vec = new THREE.Vector3()
        let radians = step * (1 - Math.sin(i / step * Math.PI)) / step + 0.5 // 每个纬线圈内的角度均分
        for (let j = 0; j < step; j += radians) {
          let c = j / step // 底图上的横向百分比
          let f = i / step // 底图上的纵向百分比
          let index = Math.floor(2 * Math.random())
          pos = positions[index]
          size = sizes[index]
          if (this.isLandByUV(c, f)) { // 根据横纵百分比判断在底图中的像素值
            spherical.theta = c * Math.PI * 2 - Math.PI / 2 // 横纵百分比转换为theta和phi夹角
            spherical.phi = f * Math.PI * 70 / 180 // 横纵百分比转换为theta和phi夹角
            vec.setFromSpherical(spherical) // 夹角转换为世界坐标
            pos.positions.push(vec.x)
            pos.positions.push(vec.y)
            pos.positions.push(vec.z)
            if (j % 3 === 0) {
              size.sizes.push(6.0)
            }
          }
        }
      }
      for (let i = 0; i < positions.length; i++) {
        let pos = positions[i]
        let size = sizes[i]
        let bufferGeom = new THREE.BufferGeometry()
        let typedArr1 = new Float32Array(pos.positions.length)
        let typedArr2 = new Float32Array(size.sizes.length)
        for (let j = 0; j < pos.positions.length; j++) {
          typedArr1[j] = pos.positions[j]
        }
        for (let j = 0; j < size.sizes.length; j++) {
          typedArr2[j] = size.sizes[j]
        }
        bufferGeom.addAttribute('position', new THREE.BufferAttribute(typedArr1, 3))
        bufferGeom.addAttribute('size', new THREE.BufferAttribute(typedArr2, 1))
        bufferGeom.computeBoundingSphere()
        let particle = new THREE.Points(bufferGeom, materials[i])
        earthParticles.add(particle)
      }
      group.add(earthParticles)
      // 创建辉光
      var material = this.createdShader()
      var geometry = new THREE.SphereGeometry(1.1 * radius, 66, 44, 0, Math.PI * 2, 0, Math.PI * 70 / 180)
      group.add(new THREE.Mesh(geometry, material))
      return group
    },
    // 创建辉光
    createdShader () {
      var vertexShader = [
        'varying vec3    vVertexWorldPosition;',
        'varying vec3    vVertexNormal;',
        'varying vec4    vFragColor;',
        'void main(){',
        '    vVertexNormal  = normalize(normalMatrix * normal);', // 将法线转换到视图坐标系中
        '    vVertexWorldPosition   = (modelMatrix * vec4(position, 1.0)).xyz;', // 将顶点转换到世界坐标系中
        '    // set gl_Position',
        '    gl_Position    = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
        '}'
      ].join('\n')
      var fragmentShader = [
        'uniform vec3    glowColor;',
        'uniform float   coeficient;',
        'uniform float   power;',
        'varying vec3    vVertexNormal;',
        'varying vec3    vVertexWorldPosition;',
        'varying vec4    vFragColor;',
        'void main(){',
        '    vec3 worldCameraToVertex= vVertexWorldPosition - cameraPosition;', // 世界坐标系中从相机位置到顶点位置的距离
        '    vec3 viewCameraToVertex    = (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;', // 视图坐标系中从相机位置到顶点位置的距离
        '    viewCameraToVertex = normalize(viewCameraToVertex);', // 规一化
        '    float intensity       = pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);',
        '    gl_FragColor      = vec4(glowColor, intensity);',
        '}' // vVertexNormal视图坐标系中点的法向量
        // viewCameraToVertex视图坐标系中点到摄像机的距离向量
        // dot点乘得到它们的夹角的cos值
        // 从中心向外面角度越来越小（从钝角到锐角）从cos函数也可以知道这个值由负变正，不透明度最终从低到高
      ].join('\n')
      var material = new THREE.ShaderMaterial({
        uniforms: {
          coeficient: {
            type: 'f',
            value: 1.0
          },
          power: {
            type: 'f',
            value: 3
          },
          glowColor: {
            type: 'c',
            value: new THREE.Color(0x1794e0)
          }
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        blending: THREE.NormalBlending,
        transparent: true
      })
      return material
    },
    isLandByUV (c, f) {
      if (!this.earthImgData) { // 底图数据
        console.error('data error!')
      }
      let n = parseInt(this.earthImg.width * c) // 根据横纵百分比计算图象坐标系中的坐标
      let o = parseInt(this.earthImg.height * f / 2) // 根据横纵百分比计算图象坐标系中的坐标
      return this.earthImgData.data[4 * (o * this.earthImgData.width + n)] === 0 // 查找底图中对应像素点的rgba值并判断
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
    crossMaskers () {
      return this.$store.getters.GET_CROSS_MAKERS
    }
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
    if (this.timer2) {
      clearInterval(this.timer2)
      this.timer2 = null
    }
    if (this.timer3) {
      clearInterval(this.timer3)
      this.timer3 = null
    }
    if (this.timer4) {
      clearInterval(this.timer4)
      this.timer4 = null
    }
  }
}
</script>
<style lang="scss" scoped>
  .index-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 10.80rem;
    width: 43.20rem;
    z-index: 1000;
    background: #010717;
    .videoRights{
        position: absolute;
        width: 13.60rem;
        height: 8.20rem;
        top: 1.3rem;
        background:rgba(0,25,60,0.8);
        border-radius: 0.20rem;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 1001;
        padding: 0.2rem;
        p{
        position: absolute;
        top: 0.3rem;
        left: 0.3rem;
        width: 0.32rem;
        color: #fff;
        font-size: 0.3rem;
        width: 50%;
        }
      .close-img{
        position: absolute;
        top: 0.3rem;
        right: 0.3rem;
        width: 0.32rem;
      }
      .videoRightbottom{
          width: 12.80rem;
          height: 7.20rem;
          margin-top: 0.8rem;
          margin-left: 0.4rem;
      }
    }
    .videoShow{
     position: absolute;
      left:0;
      right: 0;
      margin: auto;
      top: 0;
      z-index: 999;
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
    .anim {
      animation: mymove 1s infinite;
    }
    @keyframes mymove {
      from {
        top: 0;
      }
      to {
        top: -0.45rem;
      }
    }
    .container-header {
      position: absolute;
      width: 100%;
      height: 1.80rem;
      line-height: 1.20rem;
      font-family: simhei;
      text-align: center;
      color: #FFFFFF;
      font-size: 0.45rem;
      background: url('../assets/common/head-common.png') no-repeat;
      background-size: 100% 100%;
      // left: 11.4rem;
      z-index: 9;
    }
    .img-bg {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .index-left {
      position: absolute;
      width: 6.01rem;
      height: 10.68rem;
      left: 0.1rem;
      top: 0;
      box-sizing: border-box;
      background: url('../assets/entry/panle.png') no-repeat;
      background-size: 100% 100%;
      z-index: 10;
    }
    .index-center {
      width: 71.6%;
      position: absolute;
      left: 14.2%;
      height: 100%;
      overflow: hidden;
    }
    .index-right {
      position: absolute;
      width: 6.01rem;
      height: 10.68rem;
      right: 0;
      top: 0;
      overflow: auto;
      box-sizing: border-box;
      background: url('../assets/entry/panle.png') no-repeat;
      background-size: 100% 100%;
      z-index: 10;
    }
    .center-common {
      z-index: 3;
      transition: all 2s;
    }
    .center-common img {
      position: absolute;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    .center-01 {
      position: absolute;
      width: 25%;
      height: 40%;
      left: 2%;
      top: 10%;
      transform-style: preserve-3d;
      perspective: 8.0rem;
      color: #FFFFFF;
      transform: rotateX(20deg);
      z-index: 1;
    }
    .center-01 .center-01-inner,
    .center-02 .center-01-inner {
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      transform: rotateY(17deg);
    }
    .center-02 {
      position: absolute;
      width: 25%;
      height: 40%;
      left: 2%;
      top: 51%;
      transform-style: preserve-3d;
      perspective: 8.0rem;
      color: #FFFFFF;
      transform: rotateX(-10deg);
      z-index: 2;
    }
    .center-03 {
      position: absolute;
      width: 27%;
      height: 55%;
      left: 10%;
      top: 23%;
      transform-style: preserve-3d;
      perspective: 8.0rem;
      color: #FFFFFF;
      transform: rotateX(11deg);
      z-index: 3;
      .center-01-inner {
        background: url('../assets/entry/border-bg.png') no-repeat;
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        transform: rotateY(13deg);
      }
    }
    .center-04 {
      position: absolute;
      width: 25%;
      height: 40%;
      right: 2%;
      top: 10%;
      transform-style: preserve-3d;
      perspective: 8rem;
      color: #FFFFFF;
      transform: rotateX(20deg);
      z-index: 1;
    }
    .center-05 {
      position: absolute;
      width: 25%;
      height: 40%;
      right: 2%;
      top: 51%;
      transform-style: preserve-3d;
      perspective: 8.0rem;
      color: #FFFFFF;
      transform: rotateX(-10deg);
      z-index: 2;
    }
    .center-04 .center-02-inner,
    .center-05 .center-02-inner {
      background: url('../assets/entry/border-bg.png') no-repeat;
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      transform: rotateY(-17deg);
    }
    .center-06 {
      position: absolute;
      width: 27%;
      height: 55%;
      right: 10%;
      top: 23%;
      transform-style: preserve-3d;
      perspective: 8rem;
      color: #FFFFFF;
      transform: rotateX(11deg);
      z-index: 3;
      .center-02-inner {
        background: url('../assets/entry/border-bg.png') no-repeat;
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        transform: rotateY(-13deg);
      }
    }
    .center-center {
      top: 4% !important;
      width: 200% !important;
      height: 218% !important;
      transform: translateX(50%) rotateY(0deg) !important;
      transition: transform 500ms ease 0s, opacity 500ms ease 0s;
    }
    .center-center-02 {
      top: -104% !important;
      width: 202% !important;
      height: 218% !important;
      transform: translateX(50%) rotateY(0deg) !important;
      transition: transform 500ms ease 0s, opacity 500ms ease 0s;
    }
    .center-center-03 {
      top: -21% !important;
      width: 190% !important;
      height: 157% !important;
      transform: translateX(25%) rotateY(0deg) !important;
      transition: transform 500ms ease 0s, opacity 500ms ease 0s;
    }
    .center-center-04 {
      top: 4% !important;
      width: 202% !important;
      height: 218% !important;
      transform: translateX(-103%) rotateY(0deg) !important;
      transition: transform 500ms ease 0s, opacity 500ms ease 0s;
    }
    .center-center-05 {
      top: -104% !important;
      width: 202% !important;
      height: 218% !important;
      transform: translateX(-103%) rotateY(0deg) !important;
      transition: transform 500ms ease 0s, opacity 500ms ease 0s;
    }
    .center-center-06 {
      top: -21% !important;
      width: 190% !important;
      height: 157% !important;
      transform: translateX(-76%) rotateY(0deg) !important;
      transition: transform 500ms ease 0s, opacity 500ms ease 0s;
    }
    .select-center {
      position: absolute;
      width: 10.85rem !important;;
      height: 7.694rem !important;;
      left: 10.03rem !important;;
      top: 1.26rem !important;;
      transform: none !important;
      z-index: 100 !important;
      transition: all 2s;
      .center-01-inner {
        transform: none !important;
      }
      .center-02-inner {
        transform: none !important;
      }
      .text-container{
        position:absolute;
        left:0.72rem;
        bottom:0.55rem;
        width: 9.57rem;
        // height: 1.59rem;
        background:linear-gradient(0deg,rgba(3,0,0,0.24) 0%,rgba(0,0,0,0.14) 99%);
        animation: centerText 4s linear;
        p{
          width:9.57rem;
          font-family:xinghai;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:0.3rem;
          text-shadow:1px 2px 0px rgba(0, 0, 0, 0.46);
          font-size: 0.24rem;
        }
        @keyframes centerText{
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacit: 1;
          }
        }
      }
    }
    /*左侧*/
    .index-left-top {
      width: 90%;
      margin-top: 2.5%;
      margin-left: 3%;
      box-sizing: border-box;
      margin-top: 0.44rem;
    }
    .left-top-title,
    .right-top-title {
      width: 90%;
      margin-left: 5%;
      font-size: 0.25rem;
      color: #F3C10C;
      height: 0.45rem;
      line-height: 0.45rem;
      font-family: simhei;
      border-bottom: 1px solid rgba(255, 255, 255, 1);
    }

    .left-top-box {
      width: 90%;
      margin-left: 5%;
      display: flex;
      flex-direction: row;
    }

    .left-area {
      width: 50%;
    }

    .left-area p:first-of-type {
      margin-top: 0.2rem;
      color: #FFFFFF;
      font-size: 0.21rem;
    }

    .left-area p:last-of-type {
      font-family: 'Impact';
      margin-top: 0.25rem;
      font-family: Impact;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      text-shadow: 0px 3px 3px rgba(4, 4, 4, 0.15);

      background: linear-gradient(0deg, rgba(139, 143, 151, 1) 0%, rgba(255, 255, 255, 1) 53.4423828125%, rgba(139, 143, 151, 1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 0.41rem;
      font-weight: 400;
    }

    .left-area p:last-of-type span {
      color: #01FFD0;
      font-size: 0.21rem;
      margin-left: 0.17rem;
      font-family: "microsoft yahei"
    }

    .right-area {
      flex: 1;
      margin-top: 0.11rem;
    }

    .right-area p {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      color: #FFFFFF;
      margin-top: 0.1rem;
      font-size: 0.21rem;
      padding-right: 0.05rem;
      box-sizing: border-box;
    }
    .right-area p span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .right-area p img {
      width: 0.17rem;
      height: 0.18rem;
      margin-right: 0.1rem;
    }
    .right-area p label {
      font-family: 'Impact';
      color: #FBFA12;
      font-size: 0.25rem;
      font-weight: 600;
    }

    .index-left-center {
      width: 90%;
      margin-top: 0.2rem;
      margin-left: 3%;
      box-sizing: border-box;
    }

    .left-center-box {
      width: 90%;
      margin-left: 3%;
      margin-top: 0.21rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .left-center-box > div:first-of-type {
      width: 50%;
    }

    .left-center-box > div:first-of-type p:first-of-type,
    .left-center-box > div:last-of-type p:first-of-type {
      margin-top: 0.1rem;
      color: #FFFFFF;
      font-size: 0.21rem;
      width: 90%;
      margin-left: 5%;
    }

    .left-center-box > div:first-of-type p:last-of-type,
    .left-center-box > div:last-of-type p:last-of-type {
      margin-top: 0.12rem;
      color: #FFFFFF;
      font-size: 0.41rem;
      width: 90%;
      margin-left: 5%;
      font-family: Impact;
      font-weight: bold;
      color: rgba(125, 239, 255, 1);
      text-shadow: 0px 3px 3px rgba(4, 4, 4, 0.15);

      background: linear-gradient(0deg, rgba(139, 143, 151, 1) 0%, rgba(255, 255, 255, 1) 53.4423828125%, rgba(139, 143, 151, 1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .left-center-box > div:first-of-type p:last-of-type span,
    .left-center-box > div:last-of-type p:last-of-type span {
      font-size: 0.2rem;
      margin-left: 0.10rem;
    }

    .left-center-box > div:last-of-type {
      flex: 1;
    }

    .index-left-center .left-top-title-02 {
      width: 90%;
      margin-left: 3%;
      font-size: 0.22rem;
      color: #FFFFFF;
      font-family: simhei;
      margin-top: 0.33rem;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .index-left-center .left-top-title-02 img {
      width: 1.88rem;
      margin-left: 0.13rem;
    }
    .left-echarts {
      width: 90%;
      margin-left: 3%;
      margin-top: 0.17rem;
      height: 1.83rem;
    }

    .index-left-bottom {
      width: 90%;
      margin-left: 3%;
      box-sizing: border-box;
    }

    .left-bottom-box {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 0.21rem;
    }
    .left-bottom-box-02 {
      position: relative;
      height: 1.45rem;
      text-align: center;
      margin-top: 0.2rem;
      font-size: 0.19rem;
      img {
        width: 2.28rem;
        height: 1.35rem;
      }
      .right {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        color: #FEAC7E;
        p {
          font-size: 0.24rem;
          color: #FFFFFF;
          font-weight: 600;
          margin-top: 0.1rem;
        }
      }
      .left {
        position: absolute;
        top: 0.1rem;
        left: 0.5rem;
        color: #68E564;
        p {
          font-size: 0.24rem;
          color: #FFFFFF;
          font-weight: 600;
          margin-top: 0.1rem;
        }
      }
    }
    .left-bottom-box > div:first-of-type {
      width: 50%;
      margin-top: 0.25rem;
    }

    .left-bottom-box > div:first-of-type p:first-of-type,
    .left-bottom-box > div:last-of-type p:first-of-type {
      margin-top: 0.1rem;
      color: #FFFFFF;
      font-size: 0.15rem;
      width: 90%;
      margin-left: 5%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-size: 0.21rem;
    }

    .left-bottom-box > div:first-of-type p:first-of-type img,
    .left-bottom-box > div:last-of-type p:first-of-type img {
      margin-right: 0.05rem;
      width: 0.33rem;
      height: 0.26rem;
    }

    .left-bottom-box > div:first-of-type p:nth-of-type(2),
    .left-bottom-box > div:last-of-type p:nth-of-type(2) {
      font-family: Impact;
      margin-top: 0.12rem;
      color: #FFFFFF;
      font-size: 0.33rem;
      width: 90%;
      margin-left: 5%;
    }

    .left-bottom-box > div:first-of-type p:nth-of-type(2) span,
    .left-bottom-box > div:last-of-type p:nth-of-type(2) span {
      font-size: 0.20rem;
      margin-left: 10px;
    }

    .left-bottom-box > div:first-of-type p:nth-of-type(3),
    .left-bottom-box > div:last-of-type p:nth-of-type(3) {
      font-size: 0.16rem;
      display: flex;
      flex-direction: row;
      width: 90%;
      margin-left: 5%;
      margin-top: 0.05rem;
      color: #FFFFFF;
      align-items: center;
      justify-content: center;
    }

    .left-bottom-box > div:first-of-type p:nth-of-type(3) span {
      font-size: 0.21rem;
      margin-left: 0.20rem;
      color: #34FBD0;
      font-family: Impact;
    }

    .left-bottom-box > div:last-of-type p:nth-of-type(3) span {
      font-size: 0.21rem;
      margin-left: 0.20rem;
      color: #F5D120;
      font-family: Impact;
    }

    .left-bottom-box > div:last-of-type {
      flex: 1;
      margin-top: 0.25rem;
    }

    /*右侧*/
    .index-right-top {
      // margin-left: 3%;
      box-sizing: border-box;
    }
    .index-right-weather {
      height: 1.25rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      color: #FFFFFF;
      .wether-03 {
        width: 1.52rem;
        position: relative;
        padding-left: 0.17rem;
        div {
          color: #fff;
          font-size: 0.2rem;
          &:last-child {
            font-size: 0.16rem;
            font-weight: bold;
          }
        }
      }
      .wether-01 {
        font-size: 0.40rem;
        width: 2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        // margin-left: 0.3rem;
        margin-top: 0.5rem;
        // padding-right: 5%;
        padding-left: 0.5rem;
        border-right: 0.04rem solid #FFFFFF;
        position: relative;
        .shesidu {
          font-size: .15rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          font-style: normal;
          position: absolute;
          left: 1.3rem;
          top: 0rem;
        }
        img {
          width: 0.4rem;
          height: 0.38rem;
        }
        span {
          font-size: 0.20rem;
          width: 0.5rem;
          height: 0.5rem;
          line-height: 0.6rem;
          margin-right: 0.1rem;
        }
      }
      .wether-02 {
        margin-top: 0.5rem;
        font-size: 0.20rem;
        text-align: center;
        border-right: 0.04rem solid #FFFFFF;
        width: 1.4rem;
        text-indent: 0.15rem;
        & > Div {
          display: inline-block;
          float: left;
          &:first-child {
            font-size: 0.40rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
          }
          &:last-child {
            span {
              display: block;
              color: #fff;
              font-size: 0.16rem;
              font-weight: 400;
              text-align: left;
              margin-left: -.1rem;
              &:nth-child(2) {
                font-weight: bold;
                color: rgba(99, 254, 162, 1);
                font-size: 0.17rem;
              }
            }
          }
        }
        p {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-top: 0.1rem;
          span:first-of-type {
            font-size: 0.33rem;
          }
          span:last-of-type {
            font-size: 0.19rem;
            padding: 0.02rem 0.1rem;
            border-radius: 0.08rem;
            margin-left: 0.1rem;
          }
          .common {
            color: #90FAAA;
            border: 0.02rem solid #90FAAA;
          }
          .warn {
            color: #F3C10C;
            border: 0.02rem solid #F3C10C;
          }

        }

      }
      .wether-03 {
        margin-top: 0.4rem;
        margin-right: 0.5rem;
        font-size: 0.20rem;
        display: flex;
        flex-direction: column;
        img {
          width: 0.53rem;
          height: 0.45rem;
          margin-left: 0.15rem;
        }
      }
    }
    .right-top-box {
      padding-right: 0.3rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      align-content: center;
      text-align: center;
    }

    .right-top-box-01 {
      flex: 1.2;
      margin-top: 0.14rem;
      color: #FFFFFF;
      font-size: 0.19rem;
    }
    .right-top-box-01 img {
      width: 1.03rem;
      height: 0.34rem;
      margin-top: 0.1rem;
    }
    .right-top-box-01 p {
      // margin-top: 0.1rem;
    }
    .right-top-box-01 p img {
      margin-top: 0.16rem;
    }
    .right-top-box-01 p:last-of-type {
      font-size: 0.26rem;
      font-style: italic;
      color: #FEFC75;
    }

    .right-top-box-01:nth-of-type(2) p:last-of-type {
      color: #8FF7FD;
      font-size: 0.26rem;
    }

    .right-top-box-01:nth-of-type(3) p:last-of-type {
      color: #90FAAA;
      font-size: 0.26rem;
    }

    .right-top-title02 {
      font-size: 0.22rem;
      color: #FFFFFF;
      width: 90%;
      margin-left: 5%;
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 0.1rem;
    }
    .right-top-title02 img {
      width: .88rem;
      margin-left: 0.13rem;
    }

    ul li {
      list-style-type: none;
    }

    .news-box {
      position: relative;
      width: 85%;
      margin-left: 5%;
      margin-top: 5px;
      height: 2.5rem;
      overflow: auto;
      .news-content {
        & > div {
          display: flex;
          &:nth-child(2n) {
            background: rgba(7, 69, 182, .26);
          }
          & > div {
            flex: 1;
            color: #fff;
            font-size: 0.18rem;
            font-weight: 400;
            line-height: 0.48rem;
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding: 0 0.02rem;
            &:first-child {
              padding-left: 0.2rem;
              width: 1.4rem;
              text-align: left;
            }
            &:nth-child(2) {
              flex: 1;
            }
            &:nth-child(3) {
              width: 1rem;
            }
            &:nth-child(4) {
              width: 1rem;
            }
            &.yanzhong {
              color: #FF7E00
            }
            &.putong {
              color: #66FAFF
            }
            &.zhuli {
              color: #FDFE58
            }
          }
        }
      }
      .title {
        height: 0.45rem;
        background: #0066B5;
        font-size: .18rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, .5);
        display: flex;
        div {
          font-size: 0.18rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          text-align: center;
          &:first-child {
            width: 1.4rem;
            padding-left: 0.2rem;
            text-align: left;
          }
          flex: 1;
          line-height: 0.45rem;
        }
      }
    }
    .num2 {
      background-image: url("../assets/city-management/common-service/social-insurance/number-box.png");
      height: 0.85rem;
      line-height: 0.85rem;
      font-size: 0.16rem !important;
      color: #fff !important;
      background-size: 60% 100%;
      background-repeat: no-repeat;
      background-position: center;
      span {
        font-size: 0.28rem;
        font-family: Impact;
        font-weight: bold;
        font-style: italic;
        color: rgba(253, 254, 88, 1);
      }
    }
    .titl2 {
      font-size: 0.18rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(247, 249, 243, 1);
      background: linear-gradient(0deg, rgba(188, 255, 252, 1) 0.146484375%, rgba(255, 255, 255, 1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .first {
      cursor: pointer;
      color: #FDFE58 !important;
    }
    .first:hover {
      color: #66FAFF !important;
    }
    .second {
      cursor: pointer;
      color: #FDFE58 !important;
    }
    .second:hover {
      color: #66FAFF !important;
    }
    .third {
      color: #90FAAA !important;
    }
    .news-box ul {
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
    }
    .news-box ul li {
      font-family: Impact;
      padding: 0.15rem 0;
      color: #FFFFFF;
      font-size: 0.20rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px dashed #43FAFA;
      box-sizing: border-box;
    }

    .news-box ul li span:last-of-type {
      font-style: italic;
      color: #E5DE26;
    }

    .index-right-bottom {
      box-sizing: border-box;
    }

    .right-bottom-box {
      width: 90%;
      margin-left: 5%;
      display: flex;
      flex-direction: row;
      margin-top: 0.20rem;
      position: relative;
    }

    .right-bottom-01 {
      width: 1.55rem;
      height: 1.55rem;
      border: 0.04rem solid #00EAFC;
      border-radius: 50%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: relative;
    }

    .right-bottom-inner {
      width: 1.2rem;
      height: 0.6rem;
      border: 0.01rem solid #00EAFC;
      border-radius: 50% 50% 0 0/100% 100% 0 0;
      border-bottom: none;
      margin-top: -0.60rem;
    }

    .right-bottom-inner p:first-of-type {
      font-family: Impact;
      font-size: 0.45rem;
      color: #FF7E00;
      // margin-top: 0.6rem;
      padding-bottom: 0.1rem;
      padding-top: 0.05rem;
      border-bottom: 0.01rem solid #ADB9C0;
    }

    .right-bottom-inner p:last-of-type {
      text-align: center;
      color: #FFFFFF;
      margin-top: 0.1rem;
      font-size: 0.17rem;
      font-family: 'digital';
      font-weight: bold;
      color: rgba(239, 255, 255, 1);
    }

    .right-bottom-02 {
      flex: 1;
      margin-left: 0.50rem;
      margin-bottom: 0.2rem;
    }

    .right-bottom-02 p {
      font-size: 0.16rem;
      margin-bottom: 0.1rem;
    }

    .right-bottom-02 p span:first-of-type {
      color: #A6D7FF;
    }

    .right-bottom-02 p span:last-of-type {
      color: #FFFFFF;
    }

    .right-echarts {
      width: 90%;
      margin-left: 5%;
      height: 1.8rem;
    }

    .earth-div {
      position: absolute;
      width: 15.45rem;
      height: 8.10rem;
      left: 25%;
      top: 2.35rem;
      z-index: 2;
    }
    .earth-div > img {
      position: absolute;
      width: 90%;
      bottom: 10%;
      left: 6%;
    }
    .ring-img-box {
      position: absolute;
      width: 4.5rem;
      height: 4.5rem;
      left: 41.6%;
      bottom: -1%;
      transform-style: preserve-3d;
      perspective: 8.0rem;
      z-index: 0;
    }

    .ring-img-box img {
      width: 5rem;
      height: 5rem;
      transform: rotateX(86deg) rotateY(0deg) translateY(3.0rem);
    }

    .img-bg-03 {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    .ball {
      perspective: 30rem;
      perspective-origin: 50% 50%;
      position: absolute;
      left: 40%;
      top: 10%;
      z-index: 4;
    }
    .ball-box {
      width: 6rem;
      height: 6rem;
      position: absolute;
      left: 39.5%;
      top: 17%;
      transform-style: preserve-3d;
      perspective: -100;
      z-index: 4;
      border-radius: 50%;
      transform: rotateX(68deg);
      animation: cir 28s linear 0s infinite;
    }
    .ring-02-box {
      position: absolute;
      width: 12rem;
      height: 12rem;
      left: 30.5%;
      top: -6%;
      z-index: 4;
      transform-style: preserve-3d;
      perspective: 8.0rem;
      transform: rotateX(81deg);
      animation: cir2 28s linear 0s infinite;

    }
    .ring-02 {
      position: absolute;
      width: 100%;
      height: 100%;

    }
    @keyframes cir2 {
      0% {
        transform: rotateX(81deg) rotateZ(0deg)
      }
      100% {
        transform: rotateX(81deg) rotateZ(360deg)
      }
    }
    .common-img {
      position: absolute;
      width: 3.58rem;
      height: 2.91rem;
      cursor: pointer;
    }
    .common-img span {
      position: absolute;
      width: 3.58rem;
      font-size: 0.32rem;
      font-family: sans-serif;
      padding-top: 1rem;
      color: #FFFFFF;
      box-sizing: border-box;
      text-align: center;
      z-index: 5;
    }

    .common-img-bg:after, .common-img:after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: url('../assets/entry/ball01.png') no-repeat;
      background-size: 100% 100%;
      opacity: 0.8;
    }
    .common-img:hover {
      animation-play-state: 'paused';
      cursor: pointer;
      &:after {
        background: url('../assets/entry/ball02.png') no-repeat;
        background-size: 100% 100%;
      }
    }
    .select-img {
      width: 3.58rem;
      height: 2.91rem;
      // background:url('../assets/entry/ball02.png') no-repeat;
      background-size: 100% 100%;
    }
    .ball-img-01 {
      animation: rotate_c1 28s linear 0s infinite
    }
    .ball-img-02 {
      animation: rotate_c2 28s linear 0s infinite
    }
    .ball-img-03 {
      animation: rotate_c3 28s linear 0s infinite
    }
    .ball-box:hover {
      animation-play-state: paused;
    }

    .ball-box:hover .common-img {
      animation-play-state: paused;
    }
    .ball-box:hover .ring-02-box {
      animation-play-state: paused;
    }

    @keyframes rotate_c1 {
      0% {
        transform: rotateX(-90deg) rotateY(0deg) scale(0.8);
      }
      25% {
        transform: rotateX(-90deg) rotateY(90deg) scale(0.8);
      }
      50% {
        transform: rotateX(-90deg) rotateY(180deg) scale(1);
      }
      75% {
        transform: rotateX(-90deg) rotateY(270deg) scale(0.8);
      }
      100% {
        transform: rotateX(-90deg) rotateY(360deg) scale(0.8);
      }
    }
    @keyframes rotate_c2 {
      0% {
        transform: rotateX(-90deg) rotateY(0deg) scale(0.8);
      }
      25% {
        transform: rotateX(-90deg) rotateY(90deg) scale(0.8);
      }
      50% {
        transform: rotateX(-90deg) rotateY(180deg) scale(0.8);
      }
      75% {
        transform: rotateX(-90deg) rotateY(270deg) scale(1);
      }
      100% {
        transform: rotateX(-90deg) rotateY(360deg) scale(0.9);
      }
    }
    @keyframes rotate_c3 {
      0% {
        transform: rotateX(-90deg) rotateY(0deg) scale(0.9);
      }
      25% {
        transform: rotateX(-90deg) rotateY(90deg) scale(1);
      }
      50% {
        transform: rotateX(-90deg) rotateY(180deg) scale(0.8);
      }
      75% {
        transform: rotateX(-90deg) rotateY(270deg) scale(0.8);
      }
      100% {
        transform: rotateX(-90deg) rotateY(360deg) scale(0.8);
      }
    }
    @keyframes cir {
      0% {
        transform: rotateX(85deg) rotateZ(0deg)
      }
      100% {
        transform: rotateX(85deg) rotateZ(360deg)
      }
    }
  }

  .gdp-box {
    padding: 0.37rem .2rem 0 0.43rem;
    font-family: Source Han Sans CN;
    .gdp-c {
      width: 50%;
      float: left;
      display: inline-block;
      &:nth-child(2n) {
        float: right;
      }
      &:nth-child(3), &:nth-child(4) {
        margin-top: 0.3rem;
      }
      .gdp-title {
        img {
          width: .33rem;
          height: .26rem;
          margin-right: 0.05rem;
          vertical-align: middle;
        }
        font-size: .21rem;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        margin-bottom: .10rem;
        margin-top: .10rem;
      }
      p {
        color: #fff;
        font-size: .16rem;
        &:nth-child(2) {
          span {
            font-size: .33rem;
            font-family: Impact;
            font-weight: bold;
            color: rgba(125, 239, 255, 1);
            text-shadow: 0px 3px 3px rgba(4, 4, 4, 0.15);
            background: linear-gradient(0deg, rgba(139, 143, 151, 1) 0%, rgba(255, 255, 255, 1) 53.4423828125%, rgba(139, 143, 151, 1) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            padding-right: 0.05rem;
          }
        }
      }
      & > div {
        font-size: .21rem;
        font-family: Impact;
        font-weight: 400;
        color: #36EC8C;
        span {
          font-size: .16rem;
          color: #fff;
          font-weight: 400;
          margin-right: 0.1rem;
        }
        img {
          width: 0.14rem;
          height: 0.2rem;
        }
      }
      .down-rate {
        color: #EC5236
      }
    }
  }

  //第一个定时器
  .timer-pro {
    display: flex;
    font-family: Source Han Sans CN;
    padding: 0 0.50rem 0 5%;
    align-items: flex-end;
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
        border-radius: 0px .03rem 0.03rem 0px;
        width: 100%;
        position: relative;
        & > div {
          position: absolute;
          border-radius: 0px .03rem 0.03rem 0px;
          left: 0px;
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

  .third-box {
    .top {
      display: flex;
      .tufa-event {
        width: 1.55rem;
        height: 1.55rem;
      }
    }
  }

  .finish-pie {
    position: relative;
    .finish {
      height: 2.85rem;
    }
  }

  .finish-text {
    position: absolute;
    width: 40%;
    left: 4%;
    top: 29%;
    z-index: 10000;
    p {
      text-align: center;
      &:first-child {
        font-size: 0.34rem;
        font-family: Impact;
        font-weight: 400;
        font-style: italic;
        color: rgba(250, 252, 255, 1);
        text-shadow: 0px 1px 10px rgba(121, 231, 255, 0.28);

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

  .timer-box {
    height: 4.8rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    width: 5.5rem;
    padding: 0 0.2rem;
    box-sizing: border-box;
    overflow: hidden;
    #scroll2-box {
      flex: 1;
      transition: all .6s;
      white-space: nowrap;
      overflow: hidden;
      font-size: 0;
      & > div {
        vertical-align: top;
        height: 100%;
        display: inline-block;
        width: 5.5rem;
      }
    }
  }

  .timer2-box {
    padding: 0.45rem .42rem;
    box-sizing: border-box;
    height: 4.4rem;
    margin-left: 0.12rem;
    display: flex;
    flex-direction: column;
    font-family: Source Han Sans CN;
    position: relative;
    top: -.1rem;
    background: url("../assets/entry/timer2-box.png") no-repeat 0.24rem /5rem 4.09rem;
    .title3 {
      box-sizing: border-box;
      padding: 0 .3rem 0 0;
      width: 98%;
      height: .23rem;
      line-height: .23rem;
      font-size: 0.24rem;
      display: flex;
      align-items: center;
      img {
        width: .2rem;
        height: .17rem;
        float: left;
        cursor: pointer;
        &:first-child {
          transform: rotate(-180deg);
          // float:right
        }
      }
      div {
        flex: 1;
        font-size: 0.24rem;
        font-weight: 500;
        color: #FBC000;
        text-align: center;
        overflow: hidden;
        & > div {
          white-space: nowrap;
          display: inline-block;
          & > div {
            width: 4.3rem;
          }
        }
      }
    }
    .content {
      flex: 1;
      padding: 0.2rem .3rem 0 0;
      box-sizing: border-box;
      transition: all .6s;
      overflow: hidden;
      .scroll {
        width: auto;
        white-space: nowrap;
        overflow: hidden;
        height: 100%;
        transition: all .6s;
        & > div {
          height: 100%;
          width: 5rem;
          display: inline-block;
        }
        .vedio2 {
          // &>div{
          // width:100%;
          // height:50%;
          & > div {
            position: relative;
            width: 2.25rem;
            height: 48%;
            display: inline-block;
            float: left;
            &:nth-child(2n) {
              margin-left: 0.1rem;
            }
            &:nth-child(3), &:nth-child(4) {
              margin-top: 0.1rem;
            }
            & > div {
              height: 100%;
            }
            p {
              position: absolute;
              bottom: 0.1rem;
              left: 0.05rem;
              color: #fff;
              font-size: 0.14rem;
            }
            img {
              position: absolute;
              bottom: 0.1rem;
              right: 0.05rem;
              height: 0.14rem;
              width: 0.14rem;
            }
          }
          // }
        }
        .four {
          position: relative;
          top: -0.12rem;
          padding-right: 0.5rem;
          box-sizing: border-box;
          .four-title {
            font-size: .22rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            p {
              width: 80%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              float: left
            }
            span {
              color: #FCE62F;
              font-size: 0.17rem;
              font-weight: bold;
              margin-left: .15rem;
            }
          }
          .four-c {
            font-size: .16rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: .24rem;
            display: flex;
            position: relative;
            margin-top: 0.1rem;
            .posi {
              position: absolute;
              width: 1.7rem;
              left: 0.05rem;
              bottom: 0.1rem;
              color: #fff;
              font-size: .14rem;
              height: 0.2rem;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            img {
              width: 1.83rem;
              height: 1.25rem;
            }
            & > div {
              flex: 1;
              height: 1.25rem;
              word-break: break-all;
              word-wrap: break-word;
              white-space: pre-wrap;
              text-align: left;
            }
          }
          .inf {
            font-size: .17rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: rgba(223, 226, 253, 1);
            margin-bottom: 0.2rem;
            span {
              font-weight: bold;
              font-style: italic;
              color: rgba(252, 230, 47, 1);
              margin-left: 0.05rem;
            }
          }
          .yipai {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }

  .page3 {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      width: 0.12rem;
      height: 0.12rem;
      cursor: pointer;
      &:first-child {
        transform: rotate(-90deg);
      }
      &:last-child {
        transform: rotate(90deg);
      }
    }
    & > div {
      margin: 0.45rem 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        width: 0.08rem;
        height: 0.08rem;
        display: block;
        cursor: pointer;
        margin-bottom: 0.05rem;
        border-radius: 100%;
        background: rgba(102, 243, 255, .4);
      }
      .active {
        background: #66F3FF;
      }
    }
  }

  .page-text {
    color: #66F3FF;
    font-size: 0.14rem;
    font-weight: bold;
  }

  .xuanfu {
    cursor: pointer;
    padding-top: 0.3rem;
    box-sizing: border-box;
    width: 1.56rem;
    height: 1.32rem;
    color: rgba(255, 255, 255, 0.5);
    font-style: italic;
    font-size: .27rem;
    text-align: center;
    background: url('../assets/entry/circle.png') no-repeat center/100% 100%;
    position: absolute;
    z-index: 10;
    top: 2rem;
    &.xf1 {
      left: 36%;
    }
    &.xf2 {
      right: 36%;
    }
    &.xuanfuActive {
      z-index: 0;
    }
  }

  #scroll-title {
    transition: all .2s;
  }

  .qin {
    font-size: 0.17rem;
    color: #fff;
    position: absolute;
    left: 1.5rem;
    font-style: normal;
    top: 0rem
  }

  .qin:last-of-type {
    top: 0.22rem
  }

  .page2 {
    padding: 0 .3rem 0 0;
    box-sizing: border-box;
    height: .30rem;
    line-height: .3rem;
    display: flex;
    // padding-bottom:0.2rem;
    justify-content: center;
    align-items: center;
    img {
      width: 0.11rem;
      height: 0.12rem;
      cursor: pointer;
      &:first-child {
        transform: rotate(-180deg);
      }
    }
    & > div {
      text-align: center;
      margin: 0 0.45rem;
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
  }

  div.timerPage {
    padding: 0 0 0 0.2rem;
  }

  .timer-content {
    height: 4.8rem;
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .bottom-title {
    width: 4.4rem;
  }

  .data-add {
    height: 1.94rem;
    background: url('../assets/entry/fiveBg.png') no-repeat left center/90%;
    font-family: Source Han Sans CN;
    position: relative;
    & > div {
      position: absolute;
      left: 2.2rem;
      line-height: 0.25rem;
      &:nth-child(1) {
        top: 0;
      }
    ;
      &:nth-child(2) {
        top: .68rem;
        left: 2.45rem;
      }
    ;
      &:nth-child(3) {
        top: 1.34rem;
        left: 2.15rem;
      }
      .five-title {
        font-size: .16rem;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
      }
      .five-num {
        color: #FDFE58;
        font-size: .24rem;
        font-family: Impact;
        font-weight: bold;
        font-style: italic;
        color: rgba(253, 254, 88, 1);
        margin-left: 0.8em;
      }
      .five-unit {
        font-size: 0.16rem;
        font-weight: bold;
        font-style: italic;
        color: #fff;
      }
    }
  }

  .dialog {
    position: absolute;
    width: 10.43rem;
    height: 6.01rem;
    left: 50%;
    top: 50%;
    z-index: 100000000;
    transform: translate(-50%, -50%);
    font-family: Source Han Sans CN;
    background: url('../assets/entry/block.png') no-repeat left center/100% 100%;
    display: flex;
    flex-direction: column;
    padding: 0 0.4rem 0.2rem 0.4rem;
    .hed {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-top: 0.3rem;
      padding-bottom: 0.25rem;
      span {
        font-size: .24rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        img {
          width: 0.32rem;
          vertical-align: middle;
        }
      }
      div {
        display: flex;
        align-items: center;
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
          border-radius: 0px 0.18rem 0.18rem 0px;
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
    }
    .date-table {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow-y:scroll;
      .thead {
        height: 0.44rem;
        line-height: 0.44rem;
        color: #fff;
        background: rgba(20, 79, 187, .7);
        color: #fff;
        font-size: 0.17rem;
        font-weight: 400;
        display: flex;
      }
      .tbody {
        flex: 1;
        & > div {
          display: flex;
          height: 0.44rem;
          line-height: 0.44rem;
          font-size: 0.17rem;
          font-weight: 400;
          color: #fff;
          &:nth-child(2n) {
            background: rgba(7, 69, 182, .26);
          }
          .add {
            color: #85FEFF;
            cursor: pointer;
          }
        }
      }
      .fir {
        width: 0.6rem;
      }
      .sc {
        flex: 1.2rem;
        cursor: pointer
      }
      .sc:hover {
        color: #85FEFF;
      }
/*       .thi {
  width: 1rem
} */
      .add {
        flex: 1;
      }
      .fir, .sc, .thi, .add {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
        padding: 0 0.1rem;
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
      cursor: pointer;
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
      border-radius: 0px 0.18rem 0.18rem 0px;
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
    .wholeCl{
    position: fixed;
    top:0;
    left: 0;
    height: 100%;
    width: 100%;
    display: none;
  }
</style>
