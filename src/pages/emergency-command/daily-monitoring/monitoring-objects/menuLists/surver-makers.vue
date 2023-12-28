<!--
 * @Descripttion: 监测预警模块地图撒点组件
 * @Author: zhangxi
 * @Date: 2020-04-10 16:34:43
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-22 14:55:33
 -->
<template>
  <div>
      <div class="surver-box">
          <maker-components v-for="(item, index) in markerDatas" :key="index" :makerData="item">
            <div slot="maker">
                <div v-show="!makerFlag" @click="showDetail(item)" class="g-img-box">
                    <img class="big-img" :src="item.icon02" alt="" />
                    <img class="small-img" :src="item.icon01" alt="" />
                </div>
                <img v-show="makerFlag" @click="gotoDetail(item)" class="small-img2" :src="item.icon01" alt="" />
            </div>
            <img v-if="!makerFlag" slot="img"  src="../../../../../assets/common/event-icon.png" alt="" class="line2" />
            <!-- 安全生产弹框 -->
            <div v-if="item.type === 'safety'" slot="text" class="g-maker-text" v-show="!makerFlag">
              <div class="g-close" @click="closeModel(item)"></div>
              <h3>{{markerDetail.name}}</h3>
              <div class="g-text-item">联系人：<span>{{markerDetail.user}}  {{markerDetail.tel}}</span></div>
              <div class="g-text-item">地址：<span>{{markerDetail.address}}</span></div>
              <div class="g-text-item g-text-item2"><span @click="handleOpenUrl('http://117.139.86.69:9999/Government/Login.html')" style="color: #1E9FFF; cursor: pointer">乐山市安全生产综合监管信息平台</span></div>
              <ul class="g-all-num">
                <li>
                  <p>隐患排查记录</p>
                  <div class="g-num-text"><span>{{markerDetail.num2}}</span>条</div>
                </li>
                <li>
                  <p>潜在隐患</p>
                  <div class="g-num-text"><span>{{markerDetail.num1}}</span>条</div>
                </li>
              </ul>
              <!-- <div class="g-border-line"></div> -->
              <div class="g-text-item" style="margin: 0.18rem 0 0.03rem 0;">隐患排查记录：<span>{{markerDetail.num2}}</span> 条</div>
              <div class="g-text-box">
                <div v-show="makerIndex === (index + 1)" v-for="(item, index) in markerDetail.list2" :key="index">
                  <div class="g-text-item" style="margin-top: 0.25rem;">隐患名称：<span>{{item.jc03002}}</span></div>
                  <div :class="item.jc03011 === '1' ? 'g-text-item color-green' : 'g-text-item'" style="width: 47%; display: inline-block; margin: 0;">是否挂牌：<span>{{item.jc03011 === '1' ? '已挂牌' : '未挂牌'}}</span></div>
                  <div class="g-text-item g-text-item2" style="margin-bottom: 0;">隐患状态：<span>{{item.jc03004 === '01' ? '整改完成' : '未完成'}}</span></div>
                  <div class="g-text-item g-text-item2" style="margin-bottom: 0; line-height: 0.20rem;">记录机构：<span>{{item.jc03008}}</span></div>
                  <div class="g-text-item g-text-ite2" style="line-height: 0.20rem;">排查人员：<span>{{item.jc03009}}</span></div>
                </div>
                <div class="g-text-nav">
                  <paginate
                  :nowPage="nowPage"
                  :count="pangeCount"
                  :showFlag="false"
                  @change="handleChange">
                  </paginate>
                  <div class="g-nave-page">{{makerIndex || 1}}/{{markerDetail.num2 || 1}}</div>
                </div>
              </div>
              <div class="g-text-item" style="margin: 0.12rem 0 0.03rem 0;">潜在隐患：<span>{{markerDetail.num1}}</span> 处</div>
              <div class="g-text-box" style="height: 1.8rem;">
                <div  v-show="makerIndex2 === (index + 1)" v-for="(item, index) in markerDetail.list1" :key="index">
                  <div class="g-text-item" style="margin-top: 0.25rem;">隐患名称：<span>{{item.jc03002}}</span></div>
                  <div class="g-text-item">安全隐患：<span>{{item.jc03013}}</span></div>
                  <div class="g-text-item">负责人：<span>{{item.jc03012}}</span></div>
                  <div class="g-text-item">隐患描述：<span>{{item.jc03013}}</span></div>
                </div>
                <div v-show="markerDetail.num1 > 0" class="g-text-nav" style="margin-top:0rem; ">
                  <paginate
                  :nowPage="nowPage"
                  :count="pangeCount2"
                  :showFlag="false"
                  @change="handleChange2">
                  </paginate>
                  <div class="g-nave-page">{{makerIndex2}}/{{markerDetail.num1 || 1}}</div>
                </div>
              </div>
            </div>
            <!-- 自然灾害弹框 -->
            <div v-if="item.type === 'monitor'" slot="text" class="g-maker-natural" v-show="!makerFlag">
              <div class="g-close" @click="closeModel(item)"></div>
              <!-- 地灾 -->
              <div class="maker-item" v-if="item.type01 === '01'">
                <h3>{{markerDetail.jc02003}}</h3>
                <div class="g-text-item">地理位置：<span>{{markerDetail.jc02004}}</span></div>
                <div class="g-text-item">隐患点类型：<span>{{markerDetail.jc1101}}</span></div>
                <div class="g-text-item">发展趋势：<span>{{markerDetail.jc1102}}</span></div>
                <div class="g-text-item">灾害类型：<span>{{markerDetail.TYPE}}</span></div>
                <div class="g-text-item">规模等级：<span>{{markerDetail.jc1104}}</span></div>
                <div class="g-text-item">险情等级：<span>{{markerDetail.jc1105}}</span></div>
                <div class="g-text-item">诱发因素：<span>{{markerDetail.jc1106}}</span></div>
                <div class="g-text-item">危险财产:<span>{{markerDetail.jc1107}}</span></div>
                <div class="g-text-item">威胁对象:<span>{{markerDetail.jc1108}}</span></div>
                <div class="g-text-item">威胁户数：<span>{{markerDetail.jc1109}}</span></div>
                <!-- <div class="g-text-item">威胁人数:<span>{{markerDetail.jc02003}}</span></div> -->
                <p>检测责任人</p>
                <div class="g-text-item">姓名：<span>{{markerDetail.jc1111}}</span></div>
                <div class="g-text-item">职务：<span>{{markerDetail.jc1112}}</span></div>
                <div class="g-text-item">联系电话:<span class="phone-icon" @click="handleCall(markerDetail.jc1113, markerDetail.jc1111)">{{markerDetail.jc1113}}</span></div>
              </div>
              <!-- 河道水位站 -->
              <div v-if="item.type01 === '02'">
                <h3>{{markerDetail.baseInfo.name}}</h3>
                <!-- <div class="g-watch-btn">实时监测查看</div> -->
                <div class="g-text-item">站点类型：<span>{{markerDetail.baseInfo.type01}}</span></div>
                <div class="g-text-item g-text-item2" style="margin-bottom: 0.2rem;">站点地址：<span>{{markerDetail.baseInfo.address}}</span></div>
                <table-scroll
                  :column="column[item.type01]"
                  :data="markerDetail.data"
                  :max="5"
                  :height="'2.85rem'"
                  :isScrolled="false">
                </table-scroll>
              </div>
              <!-- 内涝 -->
              <div class="makers-panel-content" v-if="item.type01 === '03'">
                <h3>{{markerDetail.baseInfo.name}}</h3>
                <div class="g-text-item g-text-item2">站点地址：<span>{{markerDetail.baseInfo.address}}</span></div>
                <div class="g-text-item g-text-item2">站点类型：<span>{{markerDetail.baseInfo.type01}}</span></div>
                <div class="g-text-item">积水深度：<span>{{markerDetail.data.jc04004}}</span></div>
                <div class="g-text-item g-text-item2">上报时间：<span>{{markerDetail.data.jc04001}}</span></div>
                <div class="g-text-item g-text-item2">联系人：<span>{{markerDetail.baseInfo.jc02018}}</span></div>
                <div class="g-text-item">联系电话:<span class="phone-icon" @click="handleCall(markerDetail.baseInfo.jc02019, markerDetail.baseInfo.jc02018)">{{markerDetail.baseInfo.jc02019}}</span></div>
                <p>点位视频</p>
                <div class="video-content-box">
                  <div
                    class="one-video"
                    @click="handlePlayVideo(markerDetail.baseInfo.id, item1.jc13003, item1.jc13002)"
                    v-for="(item1, i) in markerDetail.video"
                    :key="i">
                    <span>{{item1.jc13002}}</span>
                    <img src="../../../../../assets/common/play.png">
                  </div>
                </div>
                <img
                  class="video-close"
                  v-show="showDetailVideo"
                  @click="showDetailVideo = false"
                  src="../../../../../assets/common/closepopicon.png">
                <div class="video-name" v-if="showDetailVideo">{{videoName}}</div>
                <div v-if="showDetailVideo" class="maker-panle" style="z-index: 9; left: 5rem; top: 3rem;" :id="'d-v-'+markerDetail.baseInfo.id"></div>
              </div>
              <!-- 气象站 -->
              <div v-if="item.type01 === '04'">
                <h3>{{markerDetail.baseInfo.name}}</h3>
                <!-- <div class="g-watch-btn">实时监测查看</div> -->
                <div class="g-text-item">站点类型：<span>{{markerDetail.baseInfo.type01}}</span></div>
                <div class="g-text-item g-text-item2" style="margin-bottom: 0.2rem;">站点地址：<span>{{markerDetail.baseInfo.address}}</span></div>
                <table-scroll
                  :column="column[item.type01]"
                  :data="markerDetail.data"
                  :max="5"
                  :height="'2.85rem'"
                  :isScrolled="false">
                </table-scroll>
              </div>
              <!-- 水库水文站 -->
              <div v-if="item.type01 === '05'">
                <h3>{{markerDetail.baseInfo.name}}</h3>
                <div class="g-text-item">站点类型：<span>{{markerDetail.baseInfo.type01}}</span></div>
                <div class="g-text-item g-text-item2" style="margin-bottom: 0.2rem;">站点地址：<span>{{markerDetail.baseInfo.address}}</span></div>
                <table-scroll
                  :column="column[item.type01]"
                  :data="markerDetail.data"
                  :max="5"
                  :height="'2.85rem'"
                  :isScrolled="false">
                </table-scroll>
              </div>
              <!-- 雨量站 -->
              <div v-if="item.type01 === '06'">
                <h3>{{markerDetail.baseInfo.name}}</h3>
                <div class="g-text-item">站点类型：<span>{{markerDetail.baseInfo.type01}}</span></div>
                <div class="g-text-item g-text-item2" style="margin-bottom: 0.2rem;">站点地址：<span>{{markerDetail.baseInfo.address}}</span></div>
                <table-scroll
                  :column="column[item.type01]"
                  :data="markerDetail.data"
                  :max="5"
                  :height="'2.85rem'"
                  :isScrolled="false">
                </table-scroll>
              </div>
              <!-- 水文局水文站 -->
              <div class="makers-panel-content" v-if="item.type01 === '07'">
                <h3>{{markerDetail.baseInfo.name}}</h3>
                <div class="one"><span>水位：</span>{{markerDetail.data.jc04004 ? markerDetail.data.jc04004+'m': '无'}}</div>
                  <div class="one">
                    <div><span>超警水位：</span><span :style="{color: chooseImg(markerDetail.data.jc02011, markerDetail.data.jc04004).color}">{{(markerDetail.data.jc04004 && markerDetail.data.jc02011) ? (markerDetail.data.jc04004 - markerDetail.data.jc02011).toFixed(3)+'m' : '无'}}</span></div>
                    <div><span>超保水位：</span><span :style="{color: chooseImg(markerDetail.data.jc02014, markerDetail.data.jc04004).color}">{{(markerDetail.data.jc04004 && markerDetail.data.jc02014) ? (markerDetail.data.jc04004 - markerDetail.data.jc02014).toFixed(3)+'m' : '无'}}</span></div>
                  </div>
                  <div class="one"><span>更新时间：</span>{{markerDetail.data.jc04001}}</div>
                  <div class="open-url" @click="handleOpenUrl('http://www.scsqzx.com/newApp/')">四川省水情信息服务平台</div>
                  <p>点位视频</p>
                  <div class="video-content-box">
                    <div
                      class="one-video"
                      @click="handlePlayVideo(markerDetail.baseInfo.id, item1.jc13003, item1.jc13002)"
                      v-for="(item1, i) in markerDetail.video"
                      :key="i">
                      <span>{{item1.jc13002}}</span>
                      <img src="../../../../../assets/common/play.png">
                    </div>
                  </div>
                  <img
                    class="video-close"
                    v-show="showDetailVideo"
                    @click="showDetailVideo = false"
                    src="../../../../../assets/common/closepopicon.png">
                  <div class="video-name" v-if="showDetailVideo">{{videoName}}</div>
                  <div v-if="showDetailVideo" class="maker-panle" style="z-index: 9; left: 5rem; top: 3rem;" :id="'d-v-'+markerDetail.baseInfo.id"></div>
              </div>
            </div>
            <!-- 重大危险源弹框 -->
            <div v-if="item.type === 'hazard'" slot="text" class="g-maker-text" v-show="!makerFlag">
              <div class="g-close" @click="closeModel(item)"></div>
              <!-- <h3>{{markerDetail.name}}</h3>
              <div class="g-text-item">公司名称：<span>{{(markerDetail.jc01003)}}</span></div>
              <div class="g-text-item">联系人：<span>{{markerDetail.user}}  {{markerDetail.tel}}</span></div>
              <div class="g-text-item">地址：<span>{{markerDetail.address}}</span></div> -->
              <!-- <ul class="g-all-num">
                <li>
                  <p>重大危险源</p>
                  <div class="g-num-text"><span>01</span>条</div>
                </li>
              </ul> -->
              <!-- 勿删 -->
              <!-- <div class="g-border-line"></div>
              <div class="g-text-item" style="margin: 0.18rem 0 0.03rem 0;">隐患排查记录：<span>{{markerDetail.num2}}</span> 条</div>
              <div class="g-text-box">
                <div v-show="makerIndex === (index + 1)" v-for="(item, index) in markerDetail.list2" :key="index">
                  <div class="g-text-item" style="margin-top: 0.25rem;">隐患名称：<span>{{item.jc03002}}</span></div>
                  <div :class="item.jc03011 === '1' ? 'g-text-item color-green' : 'g-text-item'" style="width: 47%; display: inline-block; margin: 0;">是否挂牌：<span>{{item.jc03011 === '1' ? '已挂牌' : '未挂牌'}}</span></div>
                  <div class="g-text-item" style="width: 50%; display: inline-block; margin: 0;">隐患状态：<span>{{item.jc03004 === '01' ? '整改完成' : '未完成'}}</span></div>
                  <div class="g-text-item" style="margin-bottom: 0.25rem; line-height: 0.20rem;">记录机构：<span>{{item.jc03008}}</span></div>
                  <div class="g-text-item" style="line-height: 0.20rem;">排查人员：<span>{{item.jc03009}}</span></div>
                </div>
                <div class="g-text-nav">
                  <paginate
                  :nowPage="nowPage"
                  :count="pangeCount"
                  :showFlag="false"
                  @change="handleChange">
                  </paginate>
                  <div class="g-nave-page">{{makerIndex}}/{{markerDetail.num2}}</div>
                </div>
              </div> -->
              <div>
                <h3>{{markerDetail.name}}</h3>
                <!-- <div class="g-watch-btn">实时监测查看</div> -->
                <div class="g-text-item">联系人：<span>{{markerDetail.linkman01}}</span></div>
                <div class="g-text-item g-text-item2">站点地址：<span>{{markerDetail.address}}</span></div>
                <div class="g-text-item g-text-item2"><span @click="handleOpenUrl('http://117.139.86.69:9999/Government/Login.html')" style="color: #1E9FFF; cursor: pointer">乐山市安全生产综合监管信息平台</span></div>
                <!-- <div class="g-text-item g-text-item2">水位：<span>{{markerDetail.jc1001}}mm</span></div> -->
                <!-- <p>近6h监测情况</p> -->
                <!-- <div class="natural-maker-echart" :id="item.id + 'echart'"></div> -->
                <!-- <div class="g-border-line"></div> -->
                <div class="g-text-item" style="margin: 0.3rem 0 0.03rem 0;">重点危险源：<span>{{markerDetail.num2}}</span> 条</div>
                <div class="g-text-box">
                  <div v-show="makerIndex === (i + 1)" v-for="(ite, i) in markerDetail.list" :key="i">
                    <div class="g-text-item" style="width: 100%; margin-top: 0.25rem;">危险源名称：<span>{{ite.name}}</span></div>
                    <div class="g-text-item" style="width: 50%; display: inline-block;">是否挂牌：<span>{{ite.jc05005}}</span></div>
                    <div class="g-text-item" style="width: 50%; display: inline-block;">危险源等级：<span>{{ite.type}}</span></div>
                    <div class="g-text-item" style="width: 50%; display: inline-block;">危险源类型：<span>{{ite.jc05008}}</span></div>
                    <div class="g-text-item" style="line-height: 0.20rem;">负责人：<span>{{ite.jc05006}}</span></div>
                    <div class="g-text-item" style="width: 100%;line-height: 0.20rem;">负责人电话：<span>{{ite.jc05007}}</span></div>
                  </div>
                  <div class="g-text-nav">
                    <paginate
                    :nowPage="nowPage"
                    :count="pangeCount"
                    :showFlag="false"
                    @change="handleChange">
                    </paginate>
                    <div class="g-nave-page">{{makerIndex}}/{{markerDetail.num2}}</div>
                  </div>
                </div>

              </div>
            </div>
            <!-- 公共卫生-疾控中心 -->
            <div v-if="item.type === 'hygiene'" slot="text" class="g-maker-text" v-show="!makerFlag" style="width: 4.5rem;">
              <div class="g-close" @click="closeModel(item)"></div>
              <h3>{{item.name}}</h3>
              <div class="g-text-item g-text-item2">联系人：<span>{{item.linkPeople}}</span></div>
              <div class="g-text-item g-text-item2">联系人电话：<span>{{item.phone}}</span></div>
              <div class="g-text-item g-text-item2">地址：<span>{{item.address}}</span></div>
              <!-- <div class="g-text-item g-text-item2">更新时间：<span>组织名称组织</span></div>
              <div class="g-text-item">司机名称：<span>组织=</span></div>
              <div class="g-text-item">速度：<span>组织</span></div>
              <div class="g-text-btn">
                <div class="g-btn-item" @click="showVideo(item, 1)">车内视频监控</div>
                <div class="g-btn-item" @click="showVideo(item, 2)">车外视频监控</div>
              </div>
              <div class = "video-box" v-if="is_video">
                <p class = 'maker-title'>
                  <img class = "icon" src = "@/assets/emergency-command/emergency-command-chart/bg-selected.png" width="0.12rem"/>{{videoTitle}}
                  <img src = "@/assets/emergency-command/emergency-command-chart/close-bg.png"  @click = "closeVedio">
                </p>
                <video :src = "'video_src'"></video>
              </div> -->
            </div>
            <!-- 公共卫生-传染测定医院 -->
            <div v-if="item.type === 'publichealth'" slot="text" class="g-maker-text" v-show="!makerFlag" style="width: 4.5rem;">
              <div class="g-close" @click="closeModel(item)"></div>
              <!-- <h3>{{item.name}}</h3>
              <div class="g-text-item g-text-item2">联系人：<span>{{item.linkPeople}}</span></div>
              <div class="g-text-item g-text-item2">联系人电话：<span>{{item.phone}}</span></div>
              <div class="g-text-item g-text-item2">地址：<span>{{item.address}}</span></div> -->
              <!-- <div class="g-text-item g-text-item2">更新时间：<span>组织名称组织</span></div>
              <div class="g-text-item">司机名称：<span>组织=</span></div>
              <div class="g-text-item">速度：<span>组织</span></div>
              <div class="g-text-btn">
                <div class="g-btn-item" @click="showVideo(item, 1)">车内视频监控</div>
                <div class="g-btn-item" @click="showVideo(item, 2)">车外视频监控</div>
              </div>
              <div class = "video-box" v-if="is_video">
                <p class = 'maker-title'>
                  <img class = "icon" src = "@/assets/emergency-command/emergency-command-chart/bg-selected.png" width="0.12rem"/>{{videoTitle}}
                  <img src = "@/assets/emergency-command/emergency-command-chart/close-bg.png"  @click = "closeVedio">
                </p>
                <video :src = "'video_src'"></video>
              </div> -->
              <div class="modal-content">
                <div class="modal-content-box">
                  <!-- <p class="modal-cont-title">{{item.hospitalName}}</p><span>&nbsp;(乐山市第二人民医院)</span> -->
                  <p class="modal-cont-title">{{item.hospitalName}}</p><span>&nbsp;</span>
                </div>
                <div class="modal-content-box">
                  <label class="modal-cont-label">位置：</label>
                  <span class="modal-cont-text">{{item.address}}</span>
                </div>
                <div class="modal-content-box">
                  <label class="modal-cont-label">联系方式：</label>
                  <span class="modal-cont-text">{{item.phone}}</span>
                  <img src="@/assets/emergency-command/emergency-command-chart/icon-tel.png"/>
                </div>
                <div class="modal-content-box">
                  <label class="modal-cont-label">医疗机构级别：</label>
                  <span class="modal-cont-text">{{item.level}}</span>
                </div>
                <div class="modal-chart-box clearfix">
                  <div class="modal-chart-botton">
                    <button :class="{active:selectedSpecial}" @click="clickSpecial(item)">专用病房</button>
                    <button :class="{active:selectedBurden}" style="margin-left:.1rem" @click="clickBurden(item)">负压病房</button>
                  </div>
                  <div class="modal-chart-option1">
                    <div class="echrat-pub01" :id="'echrat-pub01-' + item.id"></div>
                    <div class="g-add-message" style="left:29%">
                      <span class="weight-font" style="position:relative;top:0.1rem">{{putTotal01}}</span>
                      <p class="weight-font-1">病房总数</p>
                    </div>
                  </div>
                  <div class="modal-chart-option2">
                    <div class="echrat-pub02" :id="'echrat-pub02-' + item.id"></div>
                    <div class="g-add-message" style="left:71%">
                      <span class="weight-font" style="position:relative;top:0.1rem">{{putTotal02}}</span>
                      <p class="weight-font-1">病床总数</p>
                    </div>
                  </div>
                </div>
                <div class="modal-content-box">
                  <ul class="clearfix">
                    <li style="float:left">
                      <label class="modal-cont-label">负压救护车数量：</label>
                      <span class="modal-cont-text">{{item.carNum}}辆</span>
                    </li>
                    <li style="float:right">
                      <label class="modal-cont-label">负压担架数：</label>
                      <span class="modal-cont-text">{{item.litterNum}}副</span>
                    </li>
                  </ul>
                  <ul class="clearfix">
                    <li style="float:left">
                      <label class="modal-cont-label">床旁血液净化器：</label>
                      <span class="modal-cont-text">{{item.bloodNum}}台</span>
                    </li>
                    <li style="float:right">
                      <label class="modal-cont-label">体外膜肺氧合：</label>
                      <span class="modal-cont-text">{{item.oxgyNum}}台</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
         </maker-components>
      </div>
    <!-- 通讯弹窗 -->
    <div id="communication" v-show="isCallShow">
      <phone-modal
        v-if="isCallShow"
        @close="handleCloseCom"
        :status="callStatus"
        :message="callParam"></phone-modal>
    </div>
  </div>
</template>
<script>
// import API from '@/api/emergency-command/menu-lists.js'
// import { imgPath } from '@/utils/BasePath.js'
import API from '@/api/emergency-command/natural-disasters.js'
import API2 from '@/api/emergency-command/safety-production.js'
import echarts from 'echarts'
import makerComponents from '@/components/maker-component2.vue'
import {option1, option2} from '@/echarts-data/emergency-command/daily-monitoring/monitoring-objects/public-health/pannelChart.js'
import paginate from '@/components/paginate'
import modelOption from '@/echarts-data/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/model-echart.js'
import tableScroll from '@/components/table-scroll'
import {imgPath, phoneWebSktPath} from '@/utils/BasePath'
import WebSocketHelper from '@/utils/WebSocketHelper'
import { moveDiv } from '@/utils/utils'
import phoneModal from '@/components/slackingModal/phone-modal' // 手机电话弹窗
export default {
  components: {
    makerComponents,
    paginate,
    tableScroll,
    phoneModal
  },
  data () {
    return {
      markerDatas: [],
      makerFlag: true,
      markerDetail: {
        num1: 1,
        num2: 1,
        baseInfo: {},
        data: []
      },
      // 安全生产
      makerIndex: 1,
      makerIndex2: 1,
      pangeCount: 1,
      pangeCount2: 1,
      nowPage: 1,
      // 公共卫生
      is_video: false,
      videoTitle: '车内视频监控',
      selectedSpecial: true,
      selectedBurden: false,
      putTotal01: 0,
      putTotal02: 0,
      // 总的
      column: {
        // 河道水位站
        '02': [
          {name: '河道水位(m)', width: '1.5rem', dataIndex: 'jc04004'},
          {name: '监测时间', width: '2.5rem', dataIndex: 'jc04001'}
        ],
        // 气象站
        '04': [
          {name: '降水量(mm)', width: '1.5rem', dataIndex: 'jc04004'},
          {name: '监测时间', width: '2.5rem', dataIndex: 'jc04001'}
        ],
        // 水库水文站
        '05': [
          {name: '库上水位(m)', width: '1.5rem', dataIndex: 'jc04008'},
          // {name: '库下水位(m)', width: '1.5rem', dataIndex: 'jc04009'},
          {name: '蓄水量(m3)', width: '1.5rem', dataIndex: 'jc04010'},
          {name: '监测时间', width: '2.5rem', dataIndex: 'jc04001'}
        ],
        // 雨量站
        '06': [
          {name: '时段降水量(mm)', width: '1.5rem', dataIndex: 'jc04005'},
          {name: '日降水量(mm)', width: '1.5rem', dataIndex: 'jc04006'},
          {name: '时段长', width: '1.5rem', dataIndex: 'jc04007'},
          {name: '监测时间', width: '2.5rem', dataIndex: 'jc04001'}
        ]
      },
      waterColor: ['#FD2000', '#FF7800', '#FCE62F', '#33D5FF', '#7EFFDB'],
      showDetailVideo: false, // 水文站视频显示
      videoName: '', // 水文站点点击视频列表名称
      swfurl: './static/libs/flowplayer/flowplayer-3.2.18.swf',
      // 电话
      webskt: null, //  websocket实列
      isWebSktFirst: true,
      phoneSkt: null, // websocket电话实列
      callStatus: '', // 通话状态
      isCallShow: false,
      callParam: {
        name: '',
        phone: ''
      } // 通话信息
    }
  },
  created () {
  },
  beforeMount () {
    this.initPhoneWebScoket()
  },
  mounted () {
    moveDiv('communication')
  },
  methods: {
    // 建立电话webscoket连接
    initPhoneWebScoket () {
      let that = this
      // webScoket 电话通讯
      let currentUser = { 'Action': 'Login', 'PlatFormCode': 'Default', 'GongHao': '10000', 'FenJi': '6000', 'AgentGroupName': '座席1组' }
      let phoneParam = {
        url: phoneWebSktPath,
        open: function () {
          console.log('电话短信webScoket连接成功！')
          that.phoneSkt.send(JSON.stringify(currentUser))
        },
        message: function (e) {
          try {
            let status = e.data.split('(')[0]
            that.callStatus = status
            setTimeout(() => {
              if (status === 'Back_TalkingEnd') {
                that.callStatus = 'Back_DialOut'
              }
            }, 600)
          } catch (e) {
            console.log(e)
          }
        },
        isKeepAlive: true,
        // '{"Action": "keeplive", "GongHao": "10000", "FenJi": "6000", "PlatFormCode": "Default", "Params": ""}',
        keepData: '{"Action": "keeplive", "GongHao": "10000", "FenJi": "6000", "PlatFormCode": "Default", "Params": ""}',
        keepAliveTime: 10,
        isReConnect: true
      }
      this.phoneSkt = new WebSocketHelper(phoneParam)
      this.phoneSkt.init()
    },
    // 打电话
    handleCall (phone, name) {
      this.callParam = {
        name,
        phone
      }
      if (this.phoneSkt && this.phoneSkt.wsState === 1 && this.callStatus !== '') {
        // 电话参数  018281563658
        let currentUser = { 'Action': 'DialOut', 'PlatFormCode': 'Default', 'GongHao': '10000', 'FenJi': '6000', 'AgentGroupName': '座席1组', 'Params': phone }
        this.phoneSkt.send(JSON.stringify(currentUser))
        this.isCallShow = true
      } else {
        console.log('短信电话websocket初始化失败')
      }
    },
    // 关闭电话
    handleCloseCom (flag) {
      this.isCallShow = flag
    },
    // 选择图片
    chooseImg (num0, num1) {
      if (!num0) {
        return {
          color: this.waterColor[4]
        }
      }
      let l = (+num1) - (+num0)
      let index = -1
      if (l > -0.25) {
        index = 0
      } else if (l <= -0.25 && l > -0.5) {
        index = 1
      } else if (l <= -0.5 && l > -1) {
        index = 2
      } else if (l <= -1 && l >= -2) {
        index = 3
      } else {
        index = 4
      }
      let obj = {
        color: this.waterColor[index]
      }
      return obj
    },
    // 水文站播放视频
    handlePlayVideo (id, url, name) {
      this.showDetailVideo = false
      this.videoName = name
      setTimeout(() => {
        this.showDetailVideo = true
        this.$nextTick(() => {
          this.playVideo('d-v-' + id, url)
        })
      })
    },
    // 播放视频
    playVideo (id, url) {
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
    // 获取点位
    getPoints (data, ceneterScope, km) {
      this.markerDatas = []
      let tempArr = []
      if (data.length === 0) {
        return
      }
      // let arr = [{name: 'a', name2: '1', value: '2'}, {name: 'b', name2: '1', value: '3'}, {name: 'a', name2: '2', value: '100'}, {name: 'a', name2: '1', value: '101'}]
      // 经纬度相同的点位去重
      // var obj = {}
      // function deWeightFour (arr) {
      //   if (arr.length === 0) {
      //     return arr
      //   }
      //   arr = arr.reduce(function (a, b) {
      //     // obj[b.name] ? '' : obj[b.name] = true && a.push(b)
      //     if (!obj[b.lon + b.lat]) {
      //       obj[b.lon + b.lat] = true
      //       a.push(b)
      //     }
      //     return a
      //   }, [])
      //   return arr
      // }
      data.forEach((item, i) => {
        API.queryPointsMap(this, { type: item.type, code: item.value }).then(resp => {
          let res = resp.data.data.points
          res.forEach((ite, index) => {
            ite.lon = +ite.lon
            ite.lat = +ite.lat
            ite.icon01 = imgPath + ite.icon01
            ite.icon02 = imgPath + ite.icon02
            let tep = {
              showTextFlag: false,
              makerId: ite.id,
              id: ite.id + '_' + i + '_' + index
            }
            ite = Object.assign(ite, tep)
          })
          tempArr = tempArr.concat(res)
          let _temarr = []
          if (ceneterScope.lon) {
            tempArr.forEach((d) => {
              if (window._m.getSpaceDistanceByLon([ceneterScope, {lon: d.lon * 1, lat: d.lat * 1}], km)) {
                _temarr.push(d)
              }
            })
          } else {
            _temarr = tempArr
          }
          // this.markerDatas = this.markerDatas.concat(res)
          this.markerDatas = _temarr
          window._m.addMakers(this.markerDatas, (type) => {
            if (type === 1) { // 三维
              this.makerFlag = false
            } else { // 二维
              this.makerFlag = true
            }
          })
        }).catch(err => {
          console.log(err)
        })
      })
    },
    // 点击二维点位
    gotoDetail (item) {
      // item.showTextFlag = true
      let position = {lon: +item.lon, lat: +item.lat}
      window._m.getSouthPointByDistance(position, () => {
        item.showTextFlag = true
        this.showDetail(item)
      })
    },
    // 点击三维点位
    showDetail (item) {
      this.markerDatas.forEach(i => {
        i.showTextFlag = false
      })
      item.showTextFlag = true
      // 自然灾害
      if (item.type === 'monitor') {
        // if (item.type01 === '05') { // 水情
        //   this.getWaterDetail(item)
        // } else if (item.type01 === '01') { // 地灾
        //   this.getGeologicDetail(item)
        // } else if (item.type01 === '03') { // 内涝
        //   this.getWaterhazardDetail(item)
        // } else { // 其它
        //   this.getNaturalDetail(item)
        // }
        if (item.type01 === '01') { // 地灾
          this.getGeologicDetail(item)
        } else { // 其它
          this.getNaturalDetail(item)
        }
      }
      // 安全生产
      if (item.type === 'safety') {
        this.getSafetyDetail(item)
      }
      // 重大危险源
      if (item.type === 'hazard') {
        this.getMajorDetail(item)
      }
      // 公共健康
      if (item.type === 'publichealth') {
        this.loadChart(item, 1)
      }
    },
    // 关闭点位弹框
    closeModel (item) {
      item.showTextFlag = false
    },
    // 水情详情
    getWaterDetail (item) {
      API.QUERY_WATER_DETAIL(this, {id: item.makerId, name: item.name}).then(resV => {
        let res = resV.data.data
        let i = res.queryWaterDetail.details.length - 1
        this.markerDetail = Object.assign(res.queryWaterDetail.details[i], item)
        echarts.init(document.getElementById(item.id + 'echart')).setOption(modelOption(res.queryWaterDetail))
      }).catch(err => {
        console.log(err)
      })
    },
    // 地灾详情
    getGeologicDetail (item) {
      API.QUERY_ROID_DETAIL(this, {id: item.makerId}).then(resV => {
        let res = resV.data.data
        this.markerDetail = Object.assign(res.queryGeologicHazardDetail[0], item)
      }).catch(err => {
        console.log(err)
      })
    },
    // 内涝详情
    getWaterhazardDetail (item) {
      API.QUERY_RAIN_DETAIL(this, {id: item.makerId}).then(resV => {
        let res = resV.data.data
        this.markerDetail = Object.assign(res.queryWaterHazardDetail[0], item)
      }).catch(err => {
        console.log(err)
      })
    },
    // 自然灾害总详情
    getNaturalDetail (item) {
      API.QUERY_ALL_DETAIL(this, {type01: item.type01, id: item.makerId, type: item.type}).then(resV => {
        let res = resV.data.data
        this.markerDetail = Object.assign(res.data, item)
      }).catch(err => {
        console.log(err)
      })
    },
    // 安全生产详情
    getSafetyDetail (item) {
      API2.POINTSDETAIL(this, { id: item.makerId })
        .then(resV => {
          let res = resV.data.data
          this.markerDetail = Object.assign(res.details, item)
          this.pangeCount = this.markerDetail.num2
          this.pangeCount1 = this.markerDetail.num1
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 公共卫生详情
    // getPublicDetail (item) {
    //   API2.POINTSDETAIL(this, { id: item.makerId })
    //     .then(resV => {
    //       let res = resV.data.data
    //       console.log(res)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // },
    // 重大危险源详情
    getMajorDetail (item) {
      // API2.POINTSMAJORDETAIL(this, { id: item.makerId })
      //   .then(resV => {
      //     let res = resV.data.data
      //     console.log(res)
      //     this.markerDetail = Object.assign(res.queryHazardDetail.jc01[0], item)
      //     // this.pangeCount = this.markerDetail.count
      //     // this.pangeCount1 = this.markerDetail.num1
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
      API.QUERY_ALL_DETAIL(this, {id: item.makerId, type: 'hazard'}).then((resA) => {
        let res = resA.data.data
        this.markerDetail = Object.assign(res.data.baseInfo, item)
        this.markerDetail.num2 = res.data.list.length
        this.markerDetail.list = res.data.list
        this.pangeCount = this.markerDetail.num2
      }).catch(err => {
        console.log(err)
      })
    },
    handleOpenUrl (url) {
      window.open(url, 'newWindow', 'height=1080, width=4320, top=540, left=2160')
    },
    // 安全生产模态框分页按钮
    handleChange (index) {
      this.makerIndex = index
    },
    handleChange2 (index) {
      this.makerIndex2 = index
    },
    // 点击公共卫生maker视频监控
    showVideo (item, type) {
      // if (type === 1) { // 车内视频
      //   this.videoTitle = '车内视频监控'
      // } else if (type === 2) { // 车外视频
      //   this.videoTitle = '车外视频监控'
      // }
      this.is_video = true
    },
    closeVedio () {
      this.is_video = false
    },
    // 专用病房点击
    clickSpecial (item) {
      this.selectedSpecial = true
      this.selectedBurden = false
      this.loadChart(item, 1)
    },
    // 负压病房点击
    clickBurden (item) {
      this.selectedBurden = true
      this.selectedSpecial = false
      this.loadChart(item, 2)
    },
    loadChart (item, type) {
      let myChart1 = document.getElementById('echrat-pub01-' + item.id)
      let myChart2 = document.getElementById('echrat-pub02-' + item.id)
      if (type === 1) {
        let data1 = {value1: item.specialReSum, value2: item.specialSum}
        this.putTotal01 = item.specialSum
        echarts.init(myChart1).setOption(option1(data1), true)
        let data2 = {value1: item.specialReBedSum, value2: item.specialBedSum}
        this.putTotal02 = item.specialBedSum
        echarts.init(myChart2).setOption(option2(data2), true)
      } else if (type === 2) {
        let data1 = {value1: item.negPreReSum, value2: item.negPreSum}
        this.putTotal01 = item.negPreSum
        echarts.init(myChart1).setOption(option1(data1), true)
        let data2 = {value1: item.negPreReBedSum, value2: item.negPreBedSum}
        this.putTotal02 = item.negPreBedSum
        echarts.init(myChart2).setOption(option2(data2), true)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
// maker
/* 通讯弹窗 */
  #communication,
  #note,
  #history-modal{
    position: absolute;
    left: 15rem;
    top: 5rem;
    z-index: 20;
    cursor: move;
  }
  .g-img-box {
    width: 1rem;
    // height: 2rem;
    left: -50%;
    top: -0.5rem;
    z-index: 1;
    cursor: pointer;
    position: relative;
    .big-img {
      width: 100%;
      height: 100%;
    }
    .small-img {
      width: 0.4rem;
      height: 0.4rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 0.25rem;
    }
  }
  .g-text-btn {
    margin-top: 0.1rem;
    width: 100%;
    height: 0.32rem;
    display: flex;
    justify-content: space-around;
    .g-btn-item {
      height: 0.32rem;
      line-height: 0.32rem;
      cursor: pointer;
      padding: 0 0.16rem;
      font-size:0.17rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(255,255,255,1);
      border:1px solid rgba(69,143,239,1);
      border-radius: 0.15rem;
    }
  }
  .small-img2 {
    width: 0.4rem;
    height: 0.4rem;
    cursor: pointer;
  }
  .video-box{
    position: absolute;
    left: 100%;
    top: -20%;
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
    .maker-title{
      font-weight: normal;
      font-size: .21rem;
      img {
        width: 0.21rem;
        height: 0.21rem;
      }
      .icon{
        width: 0.35rem;
        height: 0.35rem;
        float: left;
      }
    }
    display: flex;
    flex-direction: column;
    width: 7.73rem;
    height:5.21rem;
    padding: 0.21rem 0.35rem;
    float: left;
    margin-left: 0.1rem;
    background: url('../../../../../assets/emergency-command/emergency-command-chart/car-vedio-bg.png') no-repeat center/contain;
    video{
      flex: 1;
      height: 3.98rem;
    }
  }
  .g-maker-text {
    padding: 0.1rem 0.16rem 0.4rem 0.25rem;
    box-sizing: border-box;
    width: 4.36rem;
    font-size: 0;
    // min-height: 6.86rem;
    background: url("../../../../../assets/common/maker-model.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    // overflow: hidden;
    .g-close {
      position: absolute;
      right: 0.21rem;
      top: 0.25rem;
      cursor: pointer;
      width: 0.26rem;
      height: 0.26rem;
      background: url("../../../../../assets/common/natural-close.png") no-repeat;
      background-size: 100% 100%;
    }
    h3 {
      margin-top: 0.20rem;
      padding: 0 0.35rem 0 0;
      box-sizing: border-box;
      font-size:0.22rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:0.3rem;
    }
    .g-text-item {
      display: inline-block;
      min-width: 46%;
      margin-top: 0.14rem;
      margin-bottom: 0.13rem;
      font-size:0.16rem;
      height: 0.16rem;
      line-height: 0.16rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(223,226,251,1);
      span {
        position: relative;
        font-size:0.16rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        font-style:italic;
        line-height: 0.16rem;
        color:rgba(249,230,89,1);
      }
      label {
        float: left;
        line-height: 0.16rem;
      }
      .g-address {
        width: 1.95rem;
        line-height: 0.16rem;
        float: left;
      }
    }
    .g-text-item2 {
      width: 99%;
    }
    .g-all-num {
      width: 100%;
      overflow: hidden;
      list-style: none;
      li {
        float: left;
        width: 50%;
        height: 0.96rem;
        list-style: none;
        position: relative;
        p {
          padding-left: 0.3rem;
          height:0.24rem;
          font-size:0.18rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          font-style:italic;
          color:rgba(223,227,251,1);
          &::before {
            content: '';
            display: inline-block;
            width: 0.21rem;
            height: 0.24rem;
            background: url("../../../../../assets/common/maker-text.png") no-repeat;
            background-size: 100% 100%;
            position: absolute;
            left: 0;
            top: 0;
          }
        }
        .g-num-text {
          margin-left: 0.24rem;
          width: 1.45rem;
          height: 0.72rem;
          background: url("../../../../../assets/common/num-bg.png") no-repeat;
          background-size: 100% 100%;
          line-height: 0.72rem;
          text-align: center;
          font-size:0.17rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          font-style:italic;
          color:rgba(255,255,255,1);
          span {
            font-size:0.3rem;
            font-family:Impact;
            font-weight:bold;
            font-style:italic;
            color:rgba(249,230,89,1);
          }
        }

      }
    }
    .g-border-line {
      margin: 0;
      width: 100%;
      height: 0.01rem;
      border-bottom: 0.01rem dashed rgba(72,170,244,1);
    }
    .g-text-box {
      position: relative;
      width: calc(100% - 0.12rem);
      margin-right: 0.12rem;
      margin-bottom: 0.16rem;
      padding: 0 0.2rem;
      font-size: 0;
      box-sizing: border-box;
      // min-height: 1.6rem;
      height: 2.2rem;
      overflow: hidden;
      background: url("../../../../../assets/common/maker-small-box.png") no-repeat;
      background-size: 100% 100%;
      .color-green {
        color: '#73D477'
      }
      .g-text-nav {
        width: 100%;
        // margin-top: 0.35rem;
        position: absolute;
        bottom: 0.1rem;
        left: 0;
        .g-nave-page {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.14rem;
          color: #ffffff;
          display: inline-block;
        }
      }
    }
  }
  .g-maker-natural {
    font-size: 0;
    padding: 0.05rem 0.3rem 0.4rem 0.3rem;
    box-sizing: border-box;
    position: relative;
    width: 4.99rem;
    // min-height: 3.5rem;
    background: url("../../../../../assets/common/natural-model.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    // overflow: hidden;
    .g-close {
      position: absolute;
      right: 0.25rem;
      top: 0.25rem;
      width: 0.27rem;
      height: 0.27rem;
      background: url("../../../../../assets/common/natural-close.png") no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
    p {
      font-size:0.18rem;
      margin-top: 0.2rem;
      margin-bottom: 0;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(255,255,255,1);
    }
    .natural-maker-echart {
      width: 100%;
      height: 2.1rem;
    }
    .g-watch-btn {
      position: absolute;
      top: 1.45rem;
      right: 0.61rem;
      width: 1.51rem;
      height: 0.51rem;
      line-height: 0.51rem;
      font-size:0.16rem;
      text-align: center;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(255,255,255,1);
      cursor: pointer;
      background: url("../../../../../assets/common/natural-btn.png") no-repeat;
      background-size: 100% 100%;
    }
    h3 {
      margin-top: 0.30rem;
      padding: 0 0.35rem 0 0;
      box-sizing: border-box;
      font-size:0.22rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:0.3rem;
    }
    .g-text-item {
      display: inline-block;
      min-width: 45%;
      margin-top: 0.14rem;
      // margin-bottom: 0.13rem;
      font-size:0.16rem;
      // min-width: 50%;
      // display: inline-block;
      height: 0.16rem;
      line-height: 0.16rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(223,226,251,1);
      span {
        font-size:0.16rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        font-style:italic;
        line-height: 0.16rem;
        color:rgba(249,230,89,1);
      }
      .phone-icon {
        position: relative;
        display: inline-block;
        &::after {
          content: '';
          display: inline-block;
          position: absolute;
          top: 0;
          right: -0.25rem;
          width: 0.18rem;
          height: 0.18rem;
          background: url("../../../../../assets/common/phone.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      label {
        float: left;
        line-height: 0.16rem;
      }
      .g-address {
        width: 1.95rem;
        line-height: 0.16rem;
        float: left;
      }
    }
    .g-text-item2 {
      width: 99%;
    }
    .g-all-num {
      width: 100%;
      overflow: hidden;
      list-style: none;
      li {
        float: left;
        width: 50%;
        height: 0.96rem;
        list-style: none;
        position: relative;
        p {
          padding-left: 0.3rem;
          height:0.24rem;
          font-size:0.18rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          font-style:italic;
          color:rgba(223,227,251,1);
          &::before {
            content: '';
            display: inline-block;
            width: 0.21rem;
            height: 0.24rem;
            background: url("../../../../../assets/common/maker-text.png") no-repeat;
            background-size: 100% 100%;
            position: absolute;
            left: 0;
            top: 0;
          }
        }
        .g-num-text {
          margin-left: 0.24rem;
          width: 1.45rem;
          height: 0.72rem;
          background: url("../../../../../assets/common/num-bg.png") no-repeat;
          background-size: 100% 100%;
          line-height: 0.72rem;
          text-align: center;
          font-size:0.17rem;
          font-family:Source Han Sans CN;
          font-weight:bold;
          font-style:italic;
          color:rgba(255,255,255,1);
          span {
            font-size:0.3rem;
            font-family:Impact;
            font-weight:bold;
            font-style:italic;
            color:rgba(249,230,89,1);
          }
        }

      }
    }
    .g-border-line {
      margin: 0;
      width: 100%;
      height: 0.01rem;
      border-bottom: 0.01rem dashed rgba(72,170,244,1);
    }
    .g-text-box {
      width: calc(100% - 0.12rem);
      margin-right: 0.12rem;
      margin-bottom: 0.16rem;
      padding: 0 0.2rem;
      box-sizing: border-box;
      // min-height: 1.6rem;
      height: 2.2rem;
      overflow: hidden;
      background: url("../../../../../assets/common/maker-small-box.png") no-repeat;
      background-size: 100% 100%;
      .color-green {
        color: '#73D477'
      }
      .g-text-nav {
        width: 100%;
        margin-top: 0.35rem;
        position: relative;
        .g-nave-page {
          position: absolute;
          bottom: 0.04rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.14rem;
          color: #ffffff;
          display: inline-block;
        }
      }
    }
  }
  .modal-content{
    margin-top: 0.4rem;
    padding-right: 0.1rem;
    overflow: hidden;
    .modal-content-box{
      padding-bottom: .1rem;
      .modal-cont-title{
        display: inline-block;
        font-weight: bold;
        font-size: .17rem;
        color:rgba(255,255,255,1);
      }
      span{
        font-size: .17rem;
        color:rgba(255,255,255,1);
      }
      .modal-cont-label{
        font-size: .17rem;
        font-weight:bold;
        color:rgba(223,226,253,1);
      }
      .modal-cont-text{
        font-size: .17rem;
        font-weight:bold;
        font-style:italic;
        color:rgba(252,230,47,1);
      }
      img{
        margin-left: .1rem;
        width: 0.2rem;
        height: 0.2rem;
        cursor: pointer;
      }
    }
    .modal-chart-box{
      border-top: 1px dashed rgba(0,255,238,0.5);
      border-bottom: 1px dashed rgba(0,255,238,0.5);
      padding: .1rem;
      margin: .1rem 0;
      overflow: hidden;
      .modal-chart-botton{
        text-align: center;
        button{
          outline: none;
          border: none;
          width: .92rem;
          height: .28rem;
          border:1px solid rgba(24,187,252,1);
          border-radius:.14rem;
          background-color: rgba(0,25,60,1);
          color:rgba(24,187,252,1);
          font-weight:400;
          font-size:.17rem;
          cursor: pointer;
        }
        .active{
          background:rgba(0,132,255,1);
          color:rgba(255,255,255,1);
        }
      }
      .modal-chart-option1{
        // width: 50%;
        float: left;
        .echrat-pub01 {
          width: 1.8rem;
          height: 2rem;
        }
      }
      .modal-chart-option2{
        // width: 50%;
        float: left;
        .echrat-pub02 {
          width: 1.8rem;
          height: 2rem;
        }
      }
      .g-add-message{
        position: absolute;
        left: 23%;
        top: 58%;
        transform: translate(-50%, -50%);
        font-size: .17rem;
        font-weight: bold;
        font-style: italic;
        color: #fff;
        text-align: center;
        width: 1.3rem;
        span{
          padding-right: .03rem;
          background-image: -webkit-linear-gradient(bottom, #F9FBFF, #57D2FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: .26rem;
          font-family: Impact;
          font-weight: bold;
          font-style: italic
        }
        .weight-uniy{
          margin-left: -2px;
        }
        p {
          margin-top: .1rem;
        }
      }
    }
  }
  .makers-panel-content{
    // width: 4rem;
    // float: left;
    // margin-top: 3rem;
    // margin-left: 1.3rem;
    // background: url("../../../../../assets/common/win-info-icon-02.png") no-repeat;
    // background-size: 100% 100%;
    // padding: .5rem .3rem;
    // color: #fff;
    // transform: translate(-50%, -50%);
    .makers-panel-close{
      font-size: .22rem;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      img{
        cursor: pointer;
        width: .3rem;
        height: .3rem;
      }
    }
    .one{
      display: flex;
      color: #DFE2FD;
      font-size: .18rem;
      mamrgin: .05rem 0;
      > div{
        flex: 1;
        margin-top: .17rem;
        span:nth-child(2){
          color: #FCE62F;
        }
      }
    }
    p{
      font-size: .19rem;
      font-weight: bold;
    }
    .video-close{
      position: absolute;
      top: 3.2rem;
      left: 9.9rem;
      z-index: 10;
      cursor: pointer;
      width: .3rem;
      height: .3rem;
    }
    .open-url{
      cursor: pointer;
      color: #007DDB;
      font-size: .16rem;
      margin: .05rem 0;
    }
    .video-content-box{
      max-height: 1.5rem;
      overflow-y: auto;
      .one-video{
        color: #DFE2FD;
        font-size: .18rem;
        display: flex;
        justify-content: space-between;
        padding: .18rem 0;
        border-bottom: .01rem dashed #30BDFF;
        img{
          width: .24rem;
          height: .24rem;
          cursor: pointer;
        }
      }
    }
    .video-name{
      position: absolute;
      width: 2.8rem;
      top: 3.2rem;
      left: 5.2rem;
      font-size: .16rem;
      color: #fff;
      z-index: 99;
    }
    .maker-panle {
      position: absolute;
      box-sizing: border-box;
      padding: 0.2rem;
      left: 1rem;
      top: 0.1rem;
      width: 5.5rem;
      height: 3.6rem;
      background: url("../../../../../assets/city-management/city-facilities/notice-bg.png")
      center no-repeat;
      background-size: 100% 100%;
      z-index: -1;
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
  // maker-end
</style>
