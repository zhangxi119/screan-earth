<!--
 * @Descripttion:社会保险
 * @Author: luoxi
 * @Date: 2020-03-14 13:49:17
 * @LastEditors: wangting
 * @LastEditTime: 2020-05-07 15:39:24
 -->
<template>
  <div class="security-container-inf">
    <!-- 别删此条注释！！ -->
    <!-- <div class = "legend-box">
      <img src = "../../../assets/city-management/common-service/social-insurance/icon.jpg"/>
      社保卡办理点
    </div> -->
    <!-- <div class="header-bg">乐山市社会保险资源信息</div> -->
    <head-component name="社会保险资源信息"></head-component>
    <div class="g-menu-box">
        <menu-list></menu-list>
     </div>
     <!-- maker -->
    <maker-component v-show="makerFlag&&!isTHREE" v-for="(item, index) in makersDatas" :key="index" :makerData="item">
        <div slot="maker">
          <!-- <div class="g-maker-num">666人</div> -->
          <div class="maker-img">
            <img @click="showMarkerDetail(item, index)" src="../../../assets/common/event-line.png" alt="" />
          </div>
        </div>
        <img v-show="item.showTextFlag" slot="img"  src="@/assets/common/event-icon.png" alt="" class="line2" />
        <div @mouseenter="stopBanner()" @mouseleave="startBanner()" slot="text" class="g-maker-text" v-show="item.showTextFlag">
          <h3>{{item.district}}</h3>
          <div class="g-text-item">办理点数量：<span>{{item.bld}}</span> 个</div>
          <!-- <div class="g-text-item">参保人数：<span>{{item.peopleNum}}</span> 人</div>
          <div class="g-text-item">社保卡数：<span>{{item.cardNum}}</span> 张</div>
          <div class="g-text-item">公租房数：<span>{{item.houseNum}}</span> 家</div>
          <div class="g-text-item">房屋改造户数：<span>{{item.changeNum}}</span> 家</div> -->
        </div>
    </maker-component>
    <!-- maker-end -->
    <!-- <div class="g-nav-box">
      <nav-list :data="selectList" icon="map" :width="1.73" :height=".45"></nav-list>
    </div>-->
    <div class="g-maker-text" style="display: none;">
      <h3>市中区总体情况</h3>
      <div class="g-text-item">
        总人数：
        <span>24</span> 家
      </div>
      <div class="g-text-item">
        参保单位数：
        <span>24,321</span>人
      </div>
      <div class="g-text-item">
        参保人数：
        <span>241</span> 人
      </div>
      <div class="g-text-item">
        社保卡数：
        <span>24,100</span> 人
      </div>
    </div>
    <div class="g-maker-text g-maker-text01" style="display: none;">
      <h3>XXXX网点名称</h3>
      <div class="g-text-item">
        咨询电话：
        <span>24</span> 家
      </div>
      <div class="g-text-item">
        参保人数：
        <span>24,321</span>人
      </div>
      <div class="g-text-item">
        <label>地址：</label>
        <span class="g-address">全市市中区某某街道126号</span>
      </div>
    </div>
    <div class="main-left-top">
      <p class="g-title hover-color" style="margin: 0.62rem 0 0 0.02rem;">总体情况</p>
      <span style="font-size:0.14rem;color: #999999">（截至2019年）</span>
      <ul>
        <li>
          <p class="title">
            全市常住人口
            <span style="font-size:0.14rem;color: #999999">（截至2019年）</span>
          </p>

          <div class="main-data">
            <div class="left-main-data">
              <span>{{ztqk_lssczrk.num|foamterThoand}}</span>万人
            </div>
            <div class="right-main-data">
              同比：
              <span
                :class="{'up-data':ztqk_lssczrk.rate >= 0,'down-data':ztqk_lssczrk.rate < 0}"
              >{{ztqk_lssczrk.rate | donwData}}%</span>
            </div>
          </div>
        </li>
        <!-- <li>
          <p class="title">参保人数</p>
          <div class="main-data">
            <div class="left-main-data">
              <span>{{ztqk_cbsr.num|foamterThoand}}</span>人
            </div>
            <div class="right-main-data">
              同比：
              <span
                :class="{'up-data':ztqk_cbsr.rate >= 0,'down-data':ztqk_cbsr.rate < 0}"
              >{{Math.abs(ztqk_cbsr.rate)}}%</span>
            </div>
          </div>
        </li> -->
        <li>
          <p class="title">发卡总量</p>
          <div class="main-data">
            <div class="left-main-data">
              <span>{{ztqk_fkzl.num|foamterThoand}}</span>张
            </div>
            <div class="right-main-data">
              同比：
              <span
                :class="{'up-data':ztqk_fkzl.rate >= 0,'down-data':ztqk_fkzl.rate < 0}"
              >{{Math.abs(ztqk_fkzl.rate) | donwData}}%</span>
            </div>
          </div>
        </li>
      </ul>
      <div class="three-echart">
        <!-- <div class="item">
          <div class="g-small-title">
            <div class="g-small-tip"></div>常住人口男女比例
          </div>
          <div class="czrknvbl" style="height: 100%;position: relative; top: -0.44rem;" ref="czrknvbl"></div>
        </div> -->
        <div class="item">
          <div class="g-small-title hover-color">
            <div class="g-small-tip"></div>参保人数男女比例
          </div>
          <div class="czrknvbl"  style="height: 100%;position: relative; top: -0.44rem;" ref="cbrsnnbl"></div>
        </div>
        <div class="item" style="width:6.9rem">
          <div class="g-small-title hover-color">
            <div class="g-small-tip"></div>各区县发卡量排行
          </div>
          <div class="czrknvbl" ref="gqxfklph"></div>
        </div>
      </div>
      <div class="middle-line">
        <div class="middle-left">
          <!-- 参保单位总数：
          <span>{{ztqk_cbdwzs.num}}</span>家 -->
          <label>参保单位总数：</label>
          <span style="margin-right:.1rem">{{ztqk_cbdwzs.num|foamterThoand}}</span>
          <label> 家</label>
          <span style="font-size:0.14rem;color: #999999">（截至2019年）</span>
        </div>
        <!-- <div class="middle-right">
          同比：
          <span
            :class="{'up-data':ztqk_fkzl.rate >= 0,'down-data':ztqk_fkzl.rate < 0}"
          >{{Math.abs(ztqk_cbdwzs.rate) | donwData}}%</span>
        </div> -->
      </div>
      <div class="left-bottom">
        <div class="item">
          <div class="g-small-title hover-color">
            <div class="g-small-tip"></div>参保单位分类
          </div>
          <div class = "mouseCompany" style="left:36%">
            <p><span>{{count1}}</span>家</p>
            <p>参保单位</p>
          </div>
          <div style="top:-.2rem" class="czrknvbl" ref="cbdwfl"></div>
        </div>
        <div class="item">
          <div class="g-small-title hover-color">
            <div class="g-small-tip"></div>企业经济类型
          </div>
           <div class = "mouseCompany">
            <p><span>{{count2}}</span>家</p>
            <p>企业类型</p>
          </div>
          <div style="top:-.2rem" class="czrknvbl" ref="qyjjlx"></div>
        </div>
        <!-- <div class="item">
          <div class="g-small-title">
            <div class="g-small-tip"></div>企业参保分析
          </div>
          <div class = "mouseCompany">
            <p><span>{{this.chartMouse.num}}</span>家</p>
            <p>{{this.chartMouse.title}}</p>
          </div>
          <div style="top:-.2rem" class="czrknvbl" ref="pieBottomRight"></div>
          <div class="g-lt-right">
            <div class="lt-radar-box" v-for="(item,index) in enterpriseInsurList" :key="index">
              <div
                class="lt-radar-item"
                :class="{'lt-item01':index==0,'lt-item02':index==1,'lt-item03':index==2,'lt-item04':index==3}"
              >
                <p
                  :class="{'lt-text-item01':index==0 || index == 1,'lt-text-item02':index==2 || index == 3,}"
                >{{(index == 0 || index == 1) ? item.insurType : item.peopleNum + '家'}}</p>
                <div class="lt-radar-per">{{item.rate}} %</div>
                <p
                  :class="{'lt-text-item02':index==0 || index == 1,'lt-text-item01':index==2 || index == 3,}"
                >{{(index == 0 || index == 1) ? item.peopleNum + '家' : item.insurType}}</p>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <div class="main-right-bottom">
      <p class="g-title2"></p>
      <div class="g-lb-nav">
        <div
          @click="changeInsure(index)"
          v-for="(item, index) in nList"
          :key="index"
          :class="index === nIndex ? 'lb-nav-item lb-nav-active' : 'lb-nav-item'"
        >{{item.name}}</div>
        <!-- <div class="lb-nav-item">医疗保险</div>
        <div class="lb-nav-item">工伤保险</div>
        <div class="lb-nav-item">失业保险</div>
        <div class="lb-nav-item">住房保障</div>
        <div class="lb-nav-item">公积金</div>
        <div class="lb-nav-item">社保卡</div>-->
      </div>
      <div class="lb-container">
        <div class="g-lb-item g-lb-item-1" v-show="nIndex === 0">
          <div class="changeIndex">
            <div :class="{ 'select': getIndex === 0, 'get': true }" @click="getOrOut(0)"><p>收入</p></div>
            <div :class="{ 'select': getIndex === 1, 'out': true }" @click="getOrOut(1)"><p>支出</p></div>
          </div>
          <div v-show="getIndex === 1">
            <div class="lb-cont-num">
              <div class="lb-num-box">
                <div class="g-small-title hover-color">
                  <div class="g-small-tip"></div>上月末支出情况
                </div>
                <div class="g-num-container">
                  <!-- <div class="g-box">
                    <img
                      src="../../../assets/city-management/common-service/social-insurance/unit-number.png"
                      alt="#"
                    />
                    <div class="g-box-left">
                      受保单位
                      <h1>
                        <span>223</span>家
                      </h1>
                    </div>
                  </div>-->
                  <div class="g-box">
                    <img
                      src="../../../assets/city-management/common-service/social-insurance/insurance-number-right.png"
                      alt="#"
                    />
                    <div class="g-box-left">
                      <p>支出总人数</p>
                      <h1>
                        <span>{{outPeoSum | foamterThoand}}</span>人
                      </h1>
                    </div>
                  </div>
                  <div class="g-box">
                    <img
                      src="../../../assets/city-management/common-service/social-insurance/money-amount.png"
                      alt="#"
                    />
                    <div class="g-box-left" @click = "showSocialType">
                      <p>基金支出</p>
                      <h1>
                        <span>{{outMoneySum | foamterThoand }}</span>万
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lb-cont-echart">
              <div class="lb-echart-item">
                <div class="g-small-title hover-color">
                  <div class="g-small-tip"></div>支出人员趋势
                </div>
                <div class="lb-echart-cont" ref="symcbqk"></div>
              </div>
            </div>
            <div class="lb-cont-echart">
              <div class="lb-echart-item">
                <div class="g-small-title hover-color">
                  <div class="g-small-tip"></div>支出金额趋势
                </div>
                <div class="lb-echart-cont" ref="jjsrqs"></div>
              </div>
            </div>
          </div>
          <div v-show="getIndex === 0">
            <div class="lb-cont-num">
              <div class="lb-num-box">
                <div class="g-small-title">
                  <div class="g-small-tip"></div>上月末参保情况
                </div>
                <div class="g-num-container">
                  <div class="g-box">
                    <img
                      src="../../../assets/city-management/common-service/social-insurance/protect-unit.png"
                      alt="#"
                    />
                    <div class="g-box-left">
                      <p>参保单位</p>
                      <h1>
                        <span>{{clssNum | foamterThoand}}</span>家
                      </h1>
                    </div>
                  </div>
                  <div class="g-box">
                    <img
                      src="../../../assets/city-management/common-service/social-insurance/money-amount.png"
                      alt="#"
                    />
                    <div class="g-box-left">
                      <p>基金收入</p>
                      <h1>
                        <span>{{moneySum | foamterThoand}}</span>万
                      </h1>
                    </div>
                  </div>
                  <div class="g-box">
                    <img
                      src="../../../assets/city-management/common-service/social-insurance/insurance-number-right.png"
                      alt="#"
                    />
                    <div class="g-box-left" >
                      <p>参保人次</p>
                      <h1>
                        <span>{{peopleNum | foamterThoand  }}</span>人次
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lb-cont-echart">
              <div class="lb-echart-item">
                <div class="g-small-title hover-color">
                  <div class="g-small-tip"></div>参保人员趋势
                </div>
                <div class="lb-echart-cont" ref="cbryqs"></div>
              </div>
            </div>
            <div class="lb-cont-echart">
              <div class="lb-echart-item">
                <div class="g-small-title hover-color">
                  <div class="g-small-tip"></div>基金收入趋势
                </div>
                <div class="lb-echart-cont" ref="jjsrqs2"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="g-lb-item" v-show="nIndex === 1">
          <div class="hospital-org">
            <div class="img-title">
              <img
                src="../../../assets/city-management/common-service/social-insurance/hospital-org.png"
                alt="#"
              />
              <div class="info">
                国家组织药品集中采购中选药品
                <span>25</span>类
              </div>
              <div class="detail" @click="selectPill">详情</div>
              <div class="table-list" ref="selectTable">
                <div class="close" @click="closeTable"></div>
                <div class="title">国家组织药品集中采购中选药品目录和降价情况</div>
                <div class="question-list">
                  <div class="question-item">
                    <div class="self-adaptation type">序号</div>
                    <div class="name self-adaptation">药品通用名</div>
                    <div class="operation self-adaptation">原规格包装</div>
                    <div class="buyPrice self-adaptation">原采购价格</div>
                    <div class="oldPrice self-adaptation">
                      原价格
                      <br />(元/片、支)
                    </div>
                    <div class="selectPag self-adaptation">中选规格包装</div>
                    <div class="singlePrice self-adaptation">
                      计价
                      <br />单位
                    </div>
                    <div class="selcetPriceByBox self-adaptation">中选价格 (元/盒)</div>
                    <div class="selectPriceBySingle self-adaptation">
                      中选价格
                      <br />(元/片、支)
                    </div>
                    <div class="self-adaptation lowerRate">降价幅度 (%)</div>
                  </div>
                  <div
                    class="question-item"
                    v-for=" (item,index) in orgMedicalDetailsList"
                    :key="index"
                  >
                    <div class="self-adaptation type">{{index+1}}</div>
                    <div class="name self-adaptation">{{item.name}}</div>
                    <div class="operation self-adaptation">{{item.cover}}</div>
                    <div class="buyPrice self-adaptation">{{item.shouldPrice}}</div>
                    <div class="oldPrice self-adaptation">{{item.shouldUnitPrice}}</div>
                    <div class="selectPag self-adaptation">{{item.cCover}}</div>
                    <div class="singlePrice self-adaptation">{{item.unit}}</div>
                    <div class="selcetPriceByBox self-adaptation">{{item.cPrice}}</div>
                    <div class="selectPriceBySingle self-adaptation">{{item.cUnitPrice}}</div>
                    <div class="self-adaptation lowerRate">{{item.downRate}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lb-cont-num lb-cont-num1">
            <div class="lb-num-box">
              <div class="g-small-title hover-color" style="margin-left: 0;">
                <div class="g-small-tip"></div>参保人员趋势
              </div>
              <div class="g-num-container">
                <div class="right-echarts-02" id="right-echarts-02"></div>
              </div>
            </div>
            <div class="lb-num-box">
              <div class="g-small-title hover-color" style="margin-left: 0;">
                <div class="g-small-tip"></div>基金收入趋势
              </div>
              <div class="g-num-container">
                <div class="g-num-box">
                  <div class="right-echarts-03" id="right-echarts-03"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="lb-cont-list right-charts-04-box">
            <div class="g-small-title hover-color" style="margin-left: 0;">
              <div class="g-small-tip"></div>结算总人次
            </div>
            <div class="right-echarts-04" id="right-echarts-04"></div>
            <div class="g-small-title hover-color" style="margin-left: 0;">
              <div class="g-small-tip"></div>结算总金额
            </div>
            <div class="right-echarts-05" id="right-echarts-05"></div>
          </div>
        </div>
        <div class="g-lb-item g-lb-item2" v-show="nIndex === 2">
          <div class="lb-cont-num">
            <div class="lb-num-box">
              <div class="g-small-title hover-color" style="margin-left: 0;">
                <div class="g-small-tip"></div>参保信息
                <span style="font-size:0.14rem;color: #999999">（截至2019年）</span>
              </div>
              <div class="g-num-container" style="width:12rem">
                <div class="g-num-box">
                  <div class="img-box">
                    <img
                      src="../../../assets/city-management/common-service/social-insurance/unit-number.png"
                      alt="#"
                    />
                  </div>
                  <div class="text-box">
                    <p>单位数</p>
                    <div class="g-up-add" :class = "classIncrease >= 0 ? 'updata':'downData'"> <em></em> {{classIncrease}}家</div>
                  </div>
                  <div class="g-num-data">
                    <span>{{calssNum | foamterThoand}}</span>家
                  </div>
                </div>
                <div class="g-num-box  g-num-box-padding">
                  <div class="img-box">
                    <img
                      src="../../../assets/city-management/common-service/social-insurance/insurance-number-right.png"
                      alt="#"
                    />
                  </div>
                  <div class="text-box">
                    <p>参保人数</p>
                    <div class="g-up-add" :class = "peopleIncrease >= 0 ? 'updata':'downData'"><em></em>{{peopleIncrease | getMoney}}万人</div>
                  </div>
                  <div class="g-num-data">
                    <span>{{gs_peopleNum | getMoney}}</span>万人
                  </div>
                </div>
                <div class="g-num-box">
                  <div class="img-box">
                    <img
                      src="../../../assets/city-management/common-service/social-insurance/pro-num.png"
                      alt="#"
                    />
                  </div>
                  <div class="text-box">
                    <p>项目参保个数</p>
                  </div>
                  <div class="g-num-data">
                    <span>{{projectNum | foamterThoand}}</span>个
                  </div>
                </div>
                <div class="g-num-box">
                  <div class="img-box">
                    <img
                      src="../../../assets/city-management/common-service/social-insurance/pro-protect.png"
                      alt="#"
                    />
                  </div>
                  <div class="text-box">
                    <p>项目参保人数</p>
                  </div>
                  <div class="g-num-data">
                    <span>{{projectPeo | foamterThoand}}</span>人
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lb-cont-list">
            <div class="g-small-title" style="margin-left: 0;">
              <div class="g-small-tip"></div>基金征收信息
              <span style="font-size:0.14rem;color: #999999">（截至2019年）</span>
            </div>
            <div class="g-middle-box">
              <div class="g-img-box">
                <div class="left-box">
                  <h2>基金征收</h2>
                  <span>{{fundNum | foamterThoand}}</span>&nbsp;万元
                </div>
                <div class="right-box right-box-1"></div>
              </div>
              <div class="g-img-box">
                <div class="left-box">
                  <h2>项目基金征收</h2>
                  <span>{{projectFund | foamterThoand}}</span>&nbsp;万元
                </div>
                <div class="right-box right-box-2"></div>
              </div>
            </div>
          </div>
          <div class="lb-cont-list">
            <div class="g-small-title" style="margin-left: 0;">
              <div class="g-small-tip"></div>基金支出
              <span style="font-size:0.14rem;color: #999999">（截至2019年）</span>
            </div>
            <div class="g-box-bottom">
              <div class="left-box">
                <div class="top-box">
                  <h3 style="margin-bottom: .23rem;">支出总人数</h3>
                  <span>{{peopleCount | foamterThoand}}</span>&nbsp;人
                </div>
                <div class="bottom-box">
                  <h3 style="margin-top:.24rem">基金支出总</h3>
                  <h3 style="margin-bottom: .23rem;">金额</h3>
                  <span>{{fundCount |getMoney |getMoney | foamterThoand}}</span>&nbsp;亿元
                </div>
              </div>
              <div class="right-box">
                <div class="found-box" @click="showisPermanent">
                  <p><img style = "width:0.35rem;height:0.41rem" src = "../../../assets/city-management/common-service/social-insurance/disabled.png"/>伤残待遇基金情况</p>
                  <div>
                     <div class="found-text">
                       <p>享受人数</p>
                       <p><span>{{injuryPeople | foamterThoand}}</span>人</p>
                     </div>
                      <div class="found-text">
                       <p>基金支出金额</p>
                       <p><span>{{fundOut | getMoney | foamterThoand}}</span>万元</p>
                     </div>
                  </div>
                </div>
                 <div class="found-box">
                  <p><img  style = "width:0.39rem;height:0.37rem" src = "../../../assets/city-management/common-service/social-insurance/hand-heart.png"/>生活护理基金情况</p>
                  <div>
                     <div class="found-text">
                       <p>领取人数</p>
                       <p><span>{{lifePeople | foamterThoand }}</span>人</p>
                     </div>
                      <div class="found-text">
                       <p>基金支出金额</p>
                       <p><span>{{lifeFund|getMoney | foamterThoand}}</span>万元</p>
                     </div>
                  </div>
                </div>
                <div class="found-box">
                  <p><img style = "width:0.35rem;height:0.36rem"    src = "../../../assets/city-management/common-service/social-insurance/help.png"/>辅助器具安装基金情况</p>
                  <div>
                     <div class="found-text">
                       <p>安装配置人数</p>
                       <p><span>{{implementPeo | foamterThoand }}</span>人</p>
                     </div>
                      <div class="found-text">
                       <p>基金支出金额</p>
                       <p><span>{{implementFund  | foamterThoand}}</span>元</p>
                     </div>
                  </div>
                </div>
                 <div class="found-box">
                  <p><img style = "width:0.37rem;height:0.38rem"  src = "../../../assets/city-management/common-service/social-insurance/help.png"/>工亡基金情况</p>
                  <div>
                     <div class="found-text">
                       <p>工亡人数</p>
                       <p><span>{{deathNum | foamterThoand}}</span>人</p>
                     </div>
                      <div class="found-text">
                       <p>基金支出金额</p>
                       <p><span>{{deathFund | foamterThoand}}</span>万元</p>
                     </div>
                  </div>
                </div>
                <!-- <div class="item" @click="showisPermanent">
                  <img
                    src="../../../assets/city-management/common-service/social-insurance/disabled.png"
                    alt="#"
                  />
                  <h3>享受伤残待遇人数</h3>
                  <div class="people-num">
                    <span>{{injuryPeople}}</span>人
                  </div>
                </div>
                <div class="item">
                  <img
                    src="../../../assets/city-management/common-service/social-insurance/disabled.png"
                    alt="#"
                  />
                  <h3>基金支出金额</h3>
                  <div class="people-num">
                    <span>{{fundOut | getMoney}}</span>万
                  </div>
                </div>
                <div class="item">
                  <img
                    src="../../../assets/city-management/common-service/social-insurance/hand-heart.png"
                    alt="#"
                    style="width:.52rem;height:.48rem"
                  />
                  <h3>领取生活护理费人数</h3>
                  <div class="people-num">
                    <span>{{lifePeople}}</span>万人
                  </div>
                </div>
                <div class="item">
                  <img
                    src="../../../assets/city-management/common-service/social-insurance/hand-heart.png"
                    alt="#"
                    style="width:.52rem;height:.48rem"
                  />
                  <h3>基金支出金额</h3>
                  <div class="people-num">
                    <span>{{implementFund | getMoney}}</span>万
                  </div>
                </div>
                <div class="item">
                  <img
                    src="../../../assets/city-management/common-service/social-insurance/help.png"
                    alt="#"
                    style="height:.49rem"
                  />
                  <h3>辅助器具安装</h3>
                  <h3>配置人数</h3>
                  <div class="people-num" style="position:relative;top:-.14rem;">
                    <span>{{implementPeo}}</span>人
                  </div>
                </div>
                <div class="item">
                  <img
                    src="../../../assets/city-management/common-service/social-insurance/help.png"
                    alt="#"
                    style="height:.49rem"
                  />
                  <h3 style="margin-bottom:.1rem">基金支出金额</h3>
                  <div class="people-num">
                    <span>{{lifeFund | getMoney}}</span>万
                  </div>
                </div>
                <div class="item">
                  <img
                    src="../../../assets/city-management/common-service/social-insurance/dead-people.png"
                    alt="#"
                    style="height:.49rem"
                  />
                  <h3 style="margin-bottom:.1rem">死亡人数</h3>
                  <div class="people-num">
                    <span>{{deathNum}}</span>人
                  </div>
                </div>
                <div class="item">
                  <img
                    src="../../../assets/city-management/common-service/social-insurance/dead-people.png"
                    alt="#"
                    style="height:.49rem"
                  />
                  <h3 style="margin-bottom:.1rem">基金支出金额</h3>
                  <div class="people-num">
                    <span>{{deathFund}}</span>万
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="g-lb-item" v-show="nIndex === 3">
          <div class="lb-cont-num lb-cont-num3">
            <div class="lb-num-box-left">
              <div class="g-small-title" style="margin-left: 0;">
                <div class="g-small-tip"></div>今年失业保险情况
                <span style="font-size:0.14rem;color: #999999">（截至2020年）</span>
              </div>
              <div class="g-num-container">
                <div class="g-num-box">
                  <div class="left">
                    <img
                      src="../../../assets/city-management/common-service/social-insurance/unit-number.png"
                      alt
                    />
                  </div>
                  <div class="right">
                    <div class="text-box">
                      <p>参保单位数</p>
                    </div>
                    <div class="g-num-data">
                      <span>{{classNum | foamterThoand}}</span>家
                      <div class="rate">
                        同比：
                        <div class="g-up-add" :class = "calssIncrease >= 0 ? 'updata g-up-add':'downData'">{{calssIncrease | donwData}}家 <em></em></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="g-num-box">
                  <div class="left">
                    <img
                      src="../../../assets/city-management/common-service/social-insurance/insurance-number.png"
                      alt
                    />
                  </div>
                  <div class="right">
                    <div class="text-box">
                      <p>参保人数</p>
                    </div>
                    <div class="g-num-data">
                      <span>{{sy_peopleNum | getMoney}}</span>万人
                      <div class="rate">
                        同比：
                        <div class="g-up-add" :class = "sy_peopleIncrease >= 0 ? 'updata':'downData'">{{sy_peopleIncrease | getMoney | donwData}}万 <em ></em></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="g-num-box">
                  <div class="left">
                    <img
                      src="../../../assets/city-management/common-service/social-insurance/unemployment-rate.png"
                      alt
                    />
                  </div>
                  <div class="right">
                    <div class="text-box">
                      <p>登记失业率</p>
                    </div>
                    <div class="g-num-data">
                      <span>{{losRate}}</span>%
                      <!-- <div class="rate">
                        同比：
                        <div class="g-up-add">32家 ↑</div>
                      </div>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lb-num-box-right">
              <div class="g-small-title" style="margin-left: 0;">
                <div class="g-small-tip"></div>企业吸纳失业人员TOP6
                <span style="font-size:0.14rem;color: #999999">（截至2020年）</span>
              </div>
              <div class="g-num-container">
                <div>
                  <div class="left-bottom-box">
                    <div class="left-bottom-inner-box">
                      <div class="item-li" v-for="(item,index) in items" :key="index">
                        <div
                          class="number"
                          :class="{'number-01':index===0,'number-02':index===1,'number-03':index===2}"
                        >{{index+1}}</div>
                        <div class="name-line">
                          <div class="name">{{item.enterName}}</div>
                          <div class="line">
                            <div class="line-inner" :style="'width:' + (index === 0 ? 100 : (item.peoNum / items[0].peoNum * 100)) + '%'"></div>
                          </div>
                        </div>
                        <div class="value">{{item.peoNum}}人</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lb-cont-list" style="margin-top:-.4rem">
            <div class="g-small-title" style="margin-left: 0;">
              <div class="g-small-tip"></div>基金支出分析
            </div>
            <div id="right-charts-01" class="right-charts-01" style="bottom:.9rem;left:.5rem"></div>
          </div>
        </div>
        <div class="g-lb-item g-lb-item4" v-show="nIndex === 4">
          <div class="cbxx">
            <div class="info">
              <span class="msg">全市常住人口:</span>
              <span class="num">{{peoNum | foamterThoand}}</span>
              <span class="msg">万人</span>
            </div>
          </div>
          <div class="lb-cont-num">
            <div class="lb-num-box">
              <div class="g-small-title" style="width:5.7rem">
                <div class="g-small-tip"></div>参保信息
                <span style="font-size:0.14rem;color: #999999">（截至2019年）</span>
              </div>
              <div class="g-num-container g-num-container1">
                <div class="left-img">
                  <img
                    src="../../../assets/city-management/common-service/social-insurance/id-card.png"
                    alt="#"
                  />
                </div>
                <div class="right-info">
                  <div class="top-msg">
                    <img
                      src="../../../assets/city-management/common-service/social-insurance/bao.png"
                      alt="#"
                    />
                    <div class="num-msg">
                      <h3>激活卡数量</h3>
                      <span>{{cardNum | foamterThoand}}</span>
                      张
                    </div>
                  </div>
                 <!-- <div class="bottom-msg">
                    <img
                      src="../../../assets/city-management/common-service/social-insurance/circle-rate.png"
                      alt="#"
                    />
                    <div class="num-msg">
                      <h3>发卡占比</h3>
                      <div class="body-item-bottom-line">
                        <div class="body-item-line-box" :class="{temp:fkArr >= 1}"></div>
                        <div class="body-item-line-box" :class="{temp:fkArr >= 2}"></div>
                        <div class="body-item-line-box" :class="{temp:fkArr >= 3}"></div>
                        <div class="body-item-line-box" :class="{temp:fkArr >= 4}"></div>
                        <div class="body-item-line-box" :class="{temp:fkArr >= 5}"></div>
                        <div class="body-item-line-box" :class="{temp:fkArr >= 6}"></div>
                        <div class="body-item-line-box" :class="{temp:fkArr >= 7}"></div>
                        <div class="body-item-line-box" :class="{temp:fkArr >= 8}"></div>
                        <div class="body-item-line-box" :class="{temp:fkArr >= 9}"></div>
                        <div class="body-item-line-box" :class="{temp:fkArr >= 10}"></div>
                        &lt;!&ndash; <div class="body-item-line-box"></div>
                        <div class="body-item-line-box"></div>
                        <div class="body-item-line-box"></div>
                        <div class="body-item-line-box"></div>
                        <div class="body-item-line-box"></div>&ndash;&gt;
                        <span>{{cardRate}}%</span>
                      </div>
                    </div>
                  </div>-->
                </div>
              </div>
            </div>
            <div class="lb-num-box">
              <div class="g-small-title" style="margin-left:0.2rem;">
                <div class="g-small-tip"></div>社保卡社保功能激活占比
              </div>
              <div class="g-num-container g-num-container2">
                <div class="sbkjhgnzb" ref="sbkjhgnzb"></div>
              </div>
            </div>
          </div>
          <div class="lb-cont-list">
            <div class="g-small-title" style="margin-left: 0;">
              <div class="g-small-tip"></div>各区县社保卡办理点情况
            </div>
            <div class="fkblqkfx" ref="fkblqkfx"></div>
          </div>
        </div>
      </div>
    </div>
     <!-- 参保人数类型分布弹框 -->
     <div class = "social-type-box"  :class = "{activeType:issocialType}">
       <p>享受养老保险待遇人员情况
         <img src = "../../../assets/emergency-command/emergency-command-chart/close-bg.png" @click = "showSocialType" />
        </p>
       <div id="type-bar" class="add-box"></div>
     </div>
     <!-- 享受伤残待遇人数类型 -->
     <div class = "social-type-box funnul-box" v-show = "isPermanent">
       <p>享受伤残待遇人数类型
         <img src = "../../../assets/emergency-command/emergency-command-chart/close-bg.png" @click = "showisPermanent" />
        </p>
       <div id="type-funnel" class="add-box">
          <img src="@/assets/achievement/service-join/gold-tower.png"/>
         <div class="funnel-text">
           <div v-for = "(item,index) in funnaData.numList" :key = "index">
              <span>{{item}}</span>
               <span>{{funnaData.typeList[index]}}</span>
           </div>
         </div>
       </div>
     </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import API from '@/api/city-management/social-insurance.js'
// import API2 from '@/api/city-management/common-service.js'
import navList from '@/components/select.vue'
import menuList from '@/components/menu.vue'
import headComponent from '@/components/head-component.vue'
import options from '@/echarts-data/city-management/common-service/social-insurance/right-charts-01.js'
import options2 from '@/echarts-data/city-management/common-service/social-insurance/right-charts-02.js'
import options3 from '@/echarts-data/city-management/common-service/social-insurance/right-charts-03.js'
import options4 from '@/echarts-data/city-management/common-service/social-insurance/right-charts-04.js'
import options5 from '@/echarts-data/city-management/common-service/social-insurance/right-charts-05.js'
import options6 from '@/echarts-data/city-management/common-service/social-insurance/right-charts-06.js'
import options7 from '@/echarts-data/city-management/common-service/social-insurance/right-charts-07.js'
import options8 from '@/echarts-data/city-management/common-service/social-insurance/right-charts-08.js'
import options9 from '@/echarts-data/city-management/common-service/social-insurance/right-charts-09.js'
import options10 from '@/echarts-data/city-management/common-service/social-insurance/circle-echarts.js'
import options11 from '@/echarts-data/city-management/common-service/social-insurance/right-charts-11.js'
// import radar from '@/echarts-data/city-management/common-service/social-insurance/radar.js'
import leshanArea from '../../../../static/CesiumAssets/js/leshanArea.js'
import radar2 from '@/echarts-data/city-management/common-service/social-insurance/radar2.js'
import top5 from '@/echarts-data/city-management/common-service/social-insurance/top5.js'
import pieEchart from '@/echarts-data/city-management/common-service/social-insurance/pieEchart.js'
import pieEchartMiddle from '@/echarts-data/city-management/common-service/social-insurance/pieEchart-middle.js'
import socialType from '@/echarts-data/city-management/common-service/social-insurance/social-type.js'
import company from '@/echarts-data/city-management/common-service/social-insurance/pie-bottom-right.js'
import makerComponent from '@/components/maker-component.vue'
export default {
  components: { navList, menuList, headComponent, makerComponent },
  mounted () {
    this.initEcharts()
    this.getMapData() // 地图点位数据
    this.overAllSituation()
    this.socialSafe()
    this.insurDetails()
    // this.getHeatMapData()
    this.issocialTypeData()
    this.peoNumInjur()
  },
  data () {
    return {
      selectList: [
        { name: '全部区域' },
        { name: '总部经济区' },
        { name: '五通桥基地' },
        { name: '犍为基地' },
        { name: '夹江基地' }
      ],
      nList: [
        { name: '养老保险' },
        { name: '医疗保险' },
        { name: '工伤保险' },
        { name: '失业保险' },
        { name: '社保卡' }
      ],
      nIndex: 0,
      getIndex: 0,
      items: [
        {
          index: 0,
          name: '峨眉山市',
          value: 55,
          rate: 95
        },
        {
          index: 1,
          name: '市中区',
          value: 55,
          rate: 80
        },
        {
          index: 2,
          name: '沙湾区',
          value: 55,
          rate: 70
        },
        {
          index: 3,
          name: '五通桥区',
          value: 55,
          rate: 60
        },
        {
          index: 4,
          name: '金口河区',
          value: 55,
          rate: 50
        },
        {
          index: 5,
          name: '口河区',
          value: 55,
          rate: 50
        }
      ],
      outPeoSum: 0, // 支出总人数
      outMoneySum: 0, // 支出总额
      clssNum: 0, // 参保单位
      moneySum: 0, // 缴费总额
      peopleNum: 0, // 参保人数
      classIncrease: 0,
      peopleIncrease: 0,
      projectNum: 0,
      projectPeo: 0,
      fundNum: 0,
      projectFund: 0,
      calssNum: 0,
      gs_peopleNum: 0,
      implementFund: 0,
      peopleCount: 0,
      injuryPeople: 0,
      fundOut: 0,
      lifePeople: 0,
      lifeFund: 0,
      fundCount: 0,
      implementPeo: 0,
      deathNum: 0,
      deathFund: 0,
      orgMedicalDetailsList: [], // 医疗详情
      // 失业保险
      farmerPrice: 0,
      sy_peopleIncrease: 0,
      losRate: 0,
      farmerOut: 0,
      classNum: 0,
      calssIncrease: 0,
      sy_peopleNum: 0,
      // 社保卡
      cardRate: 0,
      cardNum: 0,
      actFuncNum: 0,
      peoNum: 0,
      actFuncRate: 0,
      fkArr: 0,
      // 总体情况
      ztqk_lssczrk: { num: 1, rate: 0 },
      ztqk_cbsr: { num: 1, rate: 0 },
      ztqk_fkzl: { num: 1, rate: 0 },
      ztqk_cbdwzs: { num: 1, rate: 0 },
      // 企业参保分析
      enterpriseInsurList: [],
      issocialType: false,
      isPermanent: false,
      funnaData: {},
      count1: 0,
      count2: 0,
      chartMouse: {
        title: '',
        num: 0,
        rate: 0
      },
      // 新增地图
      makersDatas: [],
      makerFlag: true,
      makerFlag2: false
    }
  },
  computed: {
    isTHREE () {
      return this.$store.getters.GET_IS_THREE
    }
  },
  filters: {
    getMoney (val) {
      return (val / 10000).toFixed(2)
    },
    foamterThoand (val) {
      return val.toString().replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')
    },
    donwData (val) {
      if (val < 0) {
        return val.toString().substr(1)
      } else {
        return val
      }
    }
  },
  methods: {
    // 选择药品
    selectPill () {
      this.$refs.selectTable.style.display = 'block'
    },
    closeTable () {
      this.$refs.selectTable.style.display = 'none'
    },
    // 总体情况
    overAllSituation () {
      API.overAllSituation(this, {})
        .then(resp => {
          let res = resp.data.data
          // 常驻人口男女比例
          // let peopleRateMap = res.peopleRateMap
          // this.initRadar(peopleRateMap)
          // 参保人口男女比例
          let insurPeopleRateMap = res.insurPeopleRateMap
          this.initRadar2(insurPeopleRateMap)
          // 各区县发卡量排行前五
          let cardTop5DistrictList = res.cardTop5DistrictList
          this.initTop5(cardTop5DistrictList)
          // 参保单位分类
          let insurClassTypeList = res.insurClassTypeList
          this.initQYDWFL(insurClassTypeList)
          // 企业经济类型
          let enterpriseEcoList = res.enterpriseEcoList
          this.initQYJJLX(enterpriseEcoList)
          // 企业参保分析
          this.enterpriseInsurList = res.enterpriseInsurList
          let chartData = this.enterpriseInsurList
          let pieBottomRight = echarts.init(this.$refs.pieBottomRight)
          let total = 0
          chartData.forEach((item, index) => {
            total += item.peopleNum
          })
          let data = res.enterpriseInsurList[0]
          this.chartMouse.title = data.insurType
          this.chartMouse.num = data.peopleNum
          this.chartMouse.rate = (data.peopleNum / total * 100).toFixed(2)
          pieBottomRight.setOption(company(this.enterpriseInsurList))
          pieBottomRight.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
          })
          this.dealChart(pieBottomRight)
        })
        .catch(err => {
          console.log(err)
        })
    },
    dealChart (myChart, index) {
      let _this = this
      myChart.on('mouseover', function (e) {
        if (e.dataIndex !== index) {
          myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index
          })
          _this.chartMouse.title = e.name
          _this.chartMouse.num = e.value
          _this.chartMouse.rate = e.percent
        }
      })
      myChart.on('mouseout', function (e) {
        index = e.dataIndex
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: e.dataIndex
        })
        _this.chartMouse.title = e.name
        _this.chartMouse.num = e.value
        _this.chartMouse.rate = e.percent
      })
    },
    // 城市管理-社会保险
    insurDetails () {
      API.insurDetails(this, {})
        .then(resp => {
          let res = resp.data.data
          // 养老保险-支出人员趋势
          let oldOutPeoTrendMap = res.oldOutPeoTrendMap
          echarts
            .init(this.$refs.symcbqk)
            .setOption(options6(oldOutPeoTrendMap))
          // 养老保险-支出金额趋势 jjsrqs
          let oldOutMonTrendMap = res.oldOutMonTrendMap
          echarts
            .init(this.$refs.jjsrqs)
            .setOption(options7(oldOutMonTrendMap))
          // 养老保险-支出总人数
          this.outPeoSum = res.oldInsurAllMap.outPeoSum
          // 养老保险-支出总额
          this.outMoneySum = res.oldInsurAllMap.outMoneySum
          // 养老保险-参保单位
          this.clssNum = res.oldInsurAllMap.clssNum
          // 养老保险-缴费总额
          this.moneySum = res.oldInsurAllMap.moneySum
          // 养老保险-参保人数
          this.peopleNum = res.oldInsurAllMap.peopleNum
          // 养老保险-参保人员趋势
          let oldSafeTrendMap = res.oldSafeTrendMap
          echarts.init(this.$refs.cbryqs).setOption(options8(oldSafeTrendMap))
          // 养老保险-基金收入趋势
          let oldSafeFundTrendMap = res.oldSafeFundTrendMap
          echarts
            .init(this.$refs.jjsrqs2)
            .setOption(options9(oldSafeFundTrendMap))
          // 医疗保险-参保人员趋势
          let medicalPeoTrendMap = res.medicalPeoTrendMap
          echarts
            .init(document.getElementById('right-echarts-02'))
            .setOption(options2(medicalPeoTrendMap))
          // 医疗保险-基金收入趋势
          let medicalMonTrendMap = res.medicalMonTrendMap
          echarts
            .init(document.getElementById('right-echarts-03'))
            .setOption(options3(medicalMonTrendMap))
          // 医疗保险-结算总人次
          let medicalPeoSumMap = res.medicalPeoSumMap
          echarts
            .init(document.getElementById('right-echarts-04'))
            .setOption(options4(medicalPeoSumMap))
          // 医疗保险-结算总金额
          let medicalMonSumMap = res.medicalMonSumMap
          echarts
            .init(document.getElementById('right-echarts-05'))
            .setOption(options5(medicalMonSumMap))
          // 医疗详情
          this.orgMedicalDetailsList = res.orgMedicalDetailsList
          // 工伤保险-参保信息
          //  "jobSafeMap": {
          // "peopleIncrease": 2, 增长参保人数
          // "classIncrease": 2, 增长单位数
          // "projectPeo": 2, 项目参保人数
          // "projectNum": 2, 参保项目个数
          // "projectFund": 2.0000, 项目基金征收（万元）
          // "peopleNum": 2, 参保人数
          // "calssNum": "2", 单位数
          // "fundNum": 2.0000 基金征收（万元）
          // deathNum
          // deathFund
          // 工伤保险
          this.classIncrease = res.jobSafeMap.classIncrease
          this.peopleIncrease = res.jobSafeMap.peopleIncrease
          this.deathNum = res.jobSafeFundMap.deathNum
          this.deathFund = res.jobSafeFundMap.deathFund
          this.projectNum = res.jobSafeMap.projectNum
          this.projectPeo = res.jobSafeMap.projectPeo
          this.fundNum = res.jobSafeMap.fundNum
          this.projectFund = res.jobSafeMap.projectFund
          this.calssNum = res.jobSafeMap.calssNum
          this.gs_peopleNum = res.jobSafeMap.peopleNum

          this.implementFund = res.jobSafeFundMap.implementFund
          this.peopleCount = res.jobSafeFundMap.peopleCount
          this.injuryPeople = res.jobSafeFundMap.injuryPeople
          this.fundOut = res.jobSafeFundMap.fundOut
          this.lifePeople = res.jobSafeFundMap.lifePeople
          this.lifeFund = res.jobSafeFundMap.lifeFund
          this.fundCount = res.jobSafeFundMap.fundCount
          this.implementPeo = res.jobSafeFundMap.implementPeo

          // 失业保险
          this.farmerPrice = res.losWorkMap.farmerPrice
          this.sy_peopleIncrease = res.losWorkMap.peopleIncrease
          this.losRate = res.losWorkMap.losRate
          this.farmerOut = res.losWorkMap.farmerOut
          this.classNum = res.losWorkMap.classNum
          this.calssIncrease = res.losWorkMap.calssIncrease
          this.sy_peopleNum = res.losWorkMap.peopleNum
          let losFundOutList = res.losFundOutList
          echarts
            .init(document.getElementById('right-charts-01'))
            .setOption(options(losFundOutList))
          //  "sinCardMap":
          // "cardRate": 2.0000, 发卡占比
          // "cardNum": 2.0000, 办卡数量
          // "actFuncNum": 2, 激活社保卡功能数
          // "peoNum": 2, 乐山常驻人口
          // "actFuncRate": 2.0000 激活社保卡功能白分比
          // 社保卡
          this.cardRate = res.sinCardMap.cardRate
          this.cardNum = res.sinCardMap.cardNum
          this.actFuncNum = res.sinCardMap.actFuncNum
          this.peoNum = res.sinCardMap.peoNum
          this.actFuncRate = res.sinCardMap.actFuncRate
          this.fkArr = Math.floor(this.cardRate / 10 + 1)
          echarts
            .init(this.$refs.sbkjhgnzb)
            .setOption(options10(this.actFuncRate))
          this.items = res.enterprisePeoTop6List
          // cardDealSituationList
          // 社保卡-发卡办理情况分析
          let cardDealSituationList = res.cardPointMap
          echarts
            .init(this.$refs.fkblqkfx)
            .setOption(options11(cardDealSituationList))
        })
        .catch(err => {
          console.log(err)
        })
    },
    //  总体情况第一排三个框
    socialSafe () {
      API.socialSafe(this, {})
        .then(resp => {
          let res = resp.data.data.socialSafeList
          res.forEach(item => {
            switch (item.safeType) {
              case '常住人口':
                this.ztqk_lssczrk.num = item.safeNum
                this.ztqk_lssczrk.rate = item.tRate
                break
              case '参保人数':
                this.ztqk_cbsr.num = item.safeNum
                this.ztqk_cbsr.rate = item.tRate
                break
              case '发卡总量':
                this.ztqk_fkzl.num = item.safeNum
                this.ztqk_fkzl.rate = item.tRate

                break
              case '参保单位总数':
                this.ztqk_cbdwzs.num = item.safeNum
                this.ztqk_cbdwzs.rate = item.tRate
                break
            }
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    initEcharts () {},
    // 常驻人口男女比例
    // initRadar (data) {
    //   let radarEchart = echarts.init(this.$refs.czrknvbl)
    //   radarEchart.setOption(radar(data))
    // },
    // 左上的雷达图2
    initRadar2 (data) {
      let radarEchart = echarts.init(this.$refs.cbrsnnbl)
      radarEchart.setOption(radar2(data))
    },
    // 左上的柱状图
    initTop5 (data) {
      let radarEchart = echarts.init(this.$refs.gqxfklph)
      radarEchart.setOption(top5(data))
    },
    // 参保单位分类
    initQYDWFL (data) {
      let radarEchart = echarts.init(this.$refs.cbdwfl)
      radarEchart.setOption(pieEchart(data))
      data.forEach((item, index) => {
        this.count1 += item.num
      })
      // this.delMouse(radarEchart, 0)
    },
    // 处理鼠标移上去的效果
    delMouse (chart, index) {
      chart.dispatchAction({
        type: 'highlight',
        seriesIndex: index,
        dataIndex: index
      })
      chart.on('mouseover', function (e) {
        if (e.dataIndex !== index) {
          chart.dispatchAction({
            type: 'downplay',
            seriesIndex: index,
            dataIndex: index
          })
        }
      })
      chart.on('mouseout', function (e) {
        index = e.dataIndex
        chart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: e.dataIndex
        })
      })
    },
    // 企业经济类型
    initQYJJLX (data) {
      let radarEchart = echarts.init(this.$refs.qyjjlx)
      radarEchart.setOption(pieEchartMiddle(data))
      data.forEach((item, indx) => {
        this.count2 += item.num
      })
      // this.delMouse(radarEchart, 0)
    },
    // 切换保险种类
    changeInsure (index) {
      this.nIndex = index
    },
    // 支出柱子点击
    getOrOut (index) {
      this.getIndex = index
    },
    // 中间地图
    showMarkerDetail (item, index) {
      this.makersDatas.forEach((ite, i) => {
        if (index !== i) {
          ite.showTextFlag = false
        }
      })
      item.showTextFlag = !item.showTextFlag
    },
    getMapData () {
      // 区县总体情况
      API.QUERYMAPLIST(this, {}).then((resA) => {
        let res = resA.data.data
        console.log(res)
        let data = res.Mapinfo
        data.forEach((item, index) => {
          if (leshanArea[item.district]) {
            item.lon = Number(leshanArea[item.district].lon)
            item.lat = Number(leshanArea[item.district].lat)
            if (index === 0) {
              item.zIndex = 3
              item.showTextFlag = true
            } else {
              item.showTextFlag = false
              item.zIndex = 1
            }
            item.id = 'social' + index
            this.makersDatas.push(item)
          }
        })
        console.log(this.makersDatas)
        window._m.addMakers(this.makersDatas, (type) => {
          if (type === 1) { // 三维
            this.makerFlag = true
            this.makerFlag2 = true
          } else { // 二维
            this.makerFlag = true
            this.makerFlag2 = false
          }
        })
        // 区域总体信息循环显示
        this.autoBanner()
      }).catch(err => {
        console.log(err)
      })
    },
    autoBanner () {
      // 区域总体信息循环显示
      let i = 0
      this.timer = setInterval(() => {
        ++i
        if (i > this.makersDatas.length - 1) {
          i = 0
        }
        this.makersDatas.forEach((item, index) => {
          if (index !== i) {
            this.makersDatas[index].showTextFlag = false
            this.makersDatas[index].zIndex = 1
          }
        })
        this.makersDatas[i].showTextFlag = true
        this.makersDatas[i].zIndex = 3
      }, 5000)
    },
    stopBanner () {
      clearInterval(this.timer)
    },
    startBanner () {
      this.autoBanner()
    },
    // 地图结束
    // 热力图
    getHeatMapData () {
      API.INSURE_DETAILS_MAP(this, {}).then((res) => {
        res = res.data
        if (res.serviceSuccess) {
          let list = res.data.insureDetailsList
          let arr = []
          for (let i of list) {
            arr.push({
              y: +i.lat,
              x: +i.lon,
              value: 30
            })
          }
          window._m.addHeatPointMap('INSURE_DETAILS_MAP', arr)
        }
      })
    },
    peoNumInjur () {
      let _this = this
      API.peoNumInjur(this, {}).then(re => {
        if (re.data.serviceSuccess) {
          let data = re.data.data.peoNumInjurMap
          _this.funnaData = Object.assign({}, data)
        }
      })
    },
    // 显示
    showisPermanent () {
      this.isPermanent = !this.isPermanent
    },
    // 参保人数类型弹框
    issocialTypeData () {
      API.peoeTypeOld(this, {}).then(re => {
        if (re.data.serviceSuccess) {
          echarts.init(document.getElementById('type-bar')).setOption(socialType(re.data.data.peoeTypeOldMap))
        }
      })
    },
    // 显示隐藏弹框
    showSocialType () {
      this.issocialType = !this.issocialType
    }
  },
  beforeDestroy () {
    window._m.clear()
  }
}
</script>

<style  lang="scss" scoped>
  @import '../../../components/date-title.scss';
.security-container-inf {
  width: 43.2rem;
  height: 10.8rem;
  // width: 4320px;
  // height: 1080px;
  position: absolute;
  background: #000;
  .g-menu-box {
    position: absolute;
    left: 11.8rem;
    top: 9rem;
    z-index: 100;
  }
  .header-bg {
    position: absolute;
    width: 20.4rem;
    height: 1.8rem;
    line-height: 1.2rem;
    font-family: simhei;
    text-align: center;
    color: #ffffff;
    font-size: 0.45rem;
    background: url("../../../assets/city-management/common-service/medical-resource/head-bg.png")
      no-repeat;
    background-size: 100% 100%;
    left: 11.4rem;
    z-index: 99;
  }
  .g-nav-box {
    position: absolute;
    left: 30.61rem;
    top: 1rem;
    z-index: 100;
  }
  // .g-maker-text {
  //   padding-left: 0.21rem;
  //   box-sizing: border-box;
  //   position: absolute;
  //   left: 23.68rem;
  //   top: 2.5rem;
  //   width: 2.52rem;
  //   height: 2.7rem;
  //   background: url("../../../assets/city-management/common-service/education-resource/small-kuang.png")
  //     center no-repeat;
  //   background-size: 100%;
  //   h3 {
  //     margin: 0.3rem 0 0.18rem 0;
  //     font-size: 0.21rem;
  //     font-family: Source Han Sans CN;
  //     font-weight: bold;
  //     color: rgba(255, 255, 255, 1);
  //   }
  //   .g-text-item {
  //     margin-bottom: 0.22rem;
  //     font-size: 0.18rem;
  //     height: 0.18rem;
  //     line-height: 0.18rem;
  //     font-family: Source Han Sans CN;
  //     font-weight: bold;
  //     color: rgba(223, 226, 251, 1);
  //     span {
  //       font-size: 0.22rem;
  //       font-family: Source Han Sans CN;
  //       font-weight: bold;
  //       font-style: italic;
  //       color: rgba(249, 230, 89, 1);
  //     }
  //     label {
  //       float: left;
  //     }
  //     .g-address {
  //       width: 1.95rem;
  //       line-height: 0.25rem;
  //       float: left;
  //     }
  //   }
  // }
  // .g-maker-text01 {
  //   width: 3.19rem;
  //   height: 3.03rem;
  //   left: 13.65rem;
  //   top: 5.52rem;
  //   padding-left: 0.2rem;
  //   background: url("../../../assets/city-management/common-service/education-resource/small-kuang2.png")
  //     center no-repeat;
  //   background-size: 100%;
  // }
  .maker-img {
    display: block;
    // width: 1.5rem;
    // height: 0.7rem;
    cursor: pointer;
    img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
  }
  .g-maker-text {
    margin: -0.2rem 0 0 0.05rem;
    padding-left: 0.21rem;
    position: absolute;
    // left: 23.68rem;
    // top: 2.5rem;
    width: 2.52rem;
    padding-bottom: 0.3rem;
    padding-top: 0.2rem;
    z-index: 2;
    background: url('../../../assets/common/win-info-icon-02.png') center no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    box-sizing: border-box;
    h3 {
      margin: 0.15rem 0 0.15rem 0;
      font-size:0.21rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(255,255,255,1);
    }
    .g-text-item {
      margin-bottom: 0.22rem;
      font-size:0.18rem;
      height: 0.18rem;
      line-height: 0.18rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(223,226,251,1);
      span {
        font-size:0.22rem;
        font-family:Source Han Sans CN;
        font-weight:bold;
        font-style:italic;
        color:rgba(249,230,89,1);
      }
      label {
        float: left;
      }
      .g-address {
        width: 1.95rem;
        line-height: 0.25rem;
        float: left;
      }
    }
  }
  .g-maker-text01 {
    width: 3.19rem;
    // height: 3.03rem;
    padding-bottom: 0.3rem;
    left: 13.65rem;
    top: 5.52rem;
    padding-left: 0.2rem;
    background: url('../../../assets/city-management/common-service/education-resource/small-kuang2.png') center no-repeat;
    background-size: 100%;
  }
  .g-title {
    display: inline-block;
    margin: 0.52rem 0 0 0.62rem;
    font-size: 0.24rem;
    line-height: 0.23rem;
    text-align: center;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
  .g-title2 {
    display: inline-block;
    position: absolute;
    margin: 0.62rem 0 0 0.67rem;
    font-size: 0.24rem;
    line-height: 0.23rem;
    text-align: center;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
  .g-small-title {
    position: relative;
    padding-left: 0.3rem;
    height: 0.44rem;
    line-height: 0.44rem;
    font-size: 0.2rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    .g-small-tip {
      width: 0.13rem;
      height: 0.13rem;
      border: 0.02rem solid rgba(246, 210, 71, 1);
      position: absolute;
      left: 0;
      top: 0.15rem;
      box-sizing: border-box;
      &::after {
        content: "";
        display: inline-block;
        width: 0.13rem;
        height: 0.13rem;
        position: absolute;
        left: 0.03rem;
        top: 0.03rem;
        background: rgba(53, 126, 243, 1);
      }
    }
  }
  .lt-title {
    position: relative;
    font-size: 0.19rem;
    display: inline-block;
    font-family: Source Han Sans CN;
    font-weight: bold;
    font-style: italic;
    color: rgba(224, 227, 251, 1);
    padding-left: 0.3rem;
    line-height: 0.24rem;
    height: 0.24rem;
    &::before {
      content: "";
      display: inline-block;
      width: 0.23rem;
      height: 0.26rem;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background: url("../../../assets/city-management/common-service/social-security/box.png")
        center no-repeat;
      background-size: 100%;
    }
  }
  .lt-num-box {
    margin-left: 0.15rem;
    width: 1.45rem;
    height: 0.84rem;
    font-size: 0.23rem;
    font-family: Source Han Sans CN;
    text-align: center;
    font-weight: bold;
    font-style: italic;
    color: rgba(255, 255, 255, 1);
    span {
      margin-right: 0.06rem;
      line-height: 0.84rem;
      font-size: 0.36rem;
      font-family: Impact;
      font-weight: bold;
      font-style: italic;
      color: rgba(248, 230, 89, 1);
    }
  }
  .g-num-box {
    width: 2.45rem;
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    &.g-num-box-padding{
     .g-up-add{
       padding-left: .1rem;
     }
    }
    .img-box {
      float: left;
      width: 0.82rem;
      height: 1.05rem;
      margin-top: 0.1rem;
      img {
        width: 0.82rem;
        height: 1.05rem;
      }
    }
    .text-box {
      height: 0.4rem;
      line-height: 0.4rem;
      overflow: hidden;
      position: relative;
      .g-up-add {
        display: inline-block;
        position: absolute;
        left: 0.8rem;
        top: 0.02rem;
        font-size: 0.19rem;
        height: 0.4rem;
        line-height: 0.4rem;
        font-weight: 500;
        color: rgba(104, 225, 162, 1);
      }
    }
    p {
      width: 100%;
      line-height: 0.2rem;
      font-size: 0.19rem;
      padding-left: 0.08rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      font-style: italic;
      color: rgba(224, 227, 251, 1);
      margin: 0;
      -webkit-line-clamp: 2;
      overflow: visible;
      display: inline-block;
      vertical-align: middle;
      height: auto;
    }
    .g-num-data {
      text-align: center;
      float: left;
      width: 1.45rem;
      height: 0.84rem;
      margin-top: -0.15rem;
      background: url("../../../assets/city-management/common-service/social-security/numbox.png")
        center no-repeat;
      background-size: contain;
      font-size: 0.23rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      font-style: italic;
      color: rgba(255, 255, 255, 1);
      span {
        margin-right: 0.06rem;
        line-height: 0.84rem;
        font-size: 0.36rem;
        font-family: Impact;
        font-weight: bold;
        font-style: italic;
        color: rgba(248, 230, 89, 1);
      }
    }
  }
  .g-lb-item4 {
    .cbxx {
      width: 10.05rem;
      height: 0.5rem;
      padding: 0.17rem 0 0.38rem 0;
      background: url("../../../assets/city-management/common-service/social-insurance/right-top-kuang.png")
        center no-repeat;
      background-size: contain;
      text-align: center;
      .info {
        .msg {
          font-size: 0.32rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          font-style: italic;
          margin-bottom: 0.1rem;
          color: rgba(223, 226, 253, 1);
          background: linear-gradient(
            0deg,
            rgba(167, 182, 195, 1) 0.68359375%,
            rgba(124, 140, 152, 1) 29.7607421875%,
            rgba(228, 239, 248, 1) 74.31640625%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          top: -0.1rem;
        }
        .num {
          font-size: 0.57rem;
          font-family: Impact;
          font-weight: bold;
          font-style: italic;
          background: transparent;
          color: rgba(255, 230, 0, 1);
        }
      }
    }
    .lb-cont-num,
    .lb-cont-list {
      padding-left: 0.3rem;
      position: relative;
      .fkblqkfx {
        width: 9.8rem;
        height: 2.6rem;
        position: absolute;
        left: 0;
        top: 0.15rem;
      }
    }
    .lb-cont-num {
      height: 3.61rem;
      margin-top: 0.39rem;
      .lb-num-box {
        overflow: unset !important;
        height: auto !important;
      }
      .g-num-container1 {
        width: 5.9rem !important;
        height: 3.21rem;
        margin-top: 0.2rem;
        display: flex;
        .left-img {
          img {
            width: 3.01rem;
            height: 2.77rem;
            position: relative;
            left: -0.25rem;
          }
        }
        .right-info {
          height: 2.3rem;
          width: 3.5rem;
          position: relative;
          left: -0.28rem;
          top: 0.18rem;
          img {
            width: 0.82rem;
            // float: left;
          }
          .num-msg {
            float: right;
            width: 1.9rem;
            font-size: 0.2rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            font-style: italic;
            color: rgba(255, 255, 255, 1);
            h3 {
              font-size: 0.19rem;
              font-family: Source Han Sans CN;
              font-weight: bold;
              font-style: italic;
              color: rgba(223, 226, 253, 1);
              margin-bottom: 0.2rem;
            }
            span {
              font-size: 0.36rem;
              font-family: Impact;
              font-weight: bold;
              font-style: italic;
              color: rgba(255, 230, 0, 1);
            }
          }
          .top-msg {
            img {
              height: 1.1rem;
            }
          }
          .bottom-msg {
            span {
              margin-left: 0.1rem;
            }
            img {
              height: 1.19rem;
            }
          }
        }
      }
      .g-num-container2 {
        margin-left: 0.2rem;
        margin-top: 0.1rem;
        height: 3.41rem;
        width: 3.04rem !important;
        position: relative;
        .sbkjhgnzb {
          background: url("../../../assets/city-management/common-service/social-insurance/wheel-circle.jpg")
            center no-repeat;
          background-size: 100% 100%;
          width: 3.04rem;
          height: 3.04rem;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }
  }
  .main-left-top {
    position: absolute;
    left: 0.28rem;
    top: 0.37rem;
    z-index: 9;
    width: 10.58rem;
    height: 9.99rem;
    padding-left: 0.71rem;
    background: url("../../../assets/city-management/common-service/social-insurance/big-kuang.png")
      center no-repeat;
    background-size: 100%;
    ul {
      margin-top: 0.48rem;
      width: 10.18rem;
      list-style: none;
      overflow: hidden;
      li {
        list-style: none;
        padding: 0.22rem 0.24rem 0.2rem 0.36rem;
        width: 4.35rem;
        height: 0.59rem;
        background: url("../../../assets/city-management/common-service/social-insurance/left-top-kuang.png")
          center no-repeat;
        background-size: 100% 100%;
        float: left;
        position: relative;
        font-size: 0;
        &:nth-of-type(2) {
          margin-left: 0.10rem;
        }
        .title {
          font-size: 0.17rem;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          margin-left: 0.2rem;
        }
        .main-data {
          width: 100%;
          height: 0.34rem;
          .left-main-data,
          .right-main-data {
            height: 100%;
          }
          .left-main-data {
            float: left;
            font-size: 0.17rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(223, 226, 253, 1);
            margin-left: 0.2rem;
            span {
              font-size: 0.31rem;
              font-family: Impact;
              font-weight: bold;
              font-style: italic;
              margin-right: 0.03rem;
              color: rgba(255, 231, 0, 1);
            }
          }
          .right-main-data {
            float: right;
            margin-top: 0.1rem;
            font-size: 0.19rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(224, 227, 251, 1);
            height: 0.18rem;
            .up-data {
              color: #00E59C;
              font-weight: bold;
              font-style: italic;
              font-size:0.2rem;
            }
            .down-data {
              color: #E55711;
              font-weight: bold;
              font-style: italic;
              font-size:0.2rem;
            }
            .up-data::before,
            .down-data::before {
              content: "";
              display: inline-block;
              width: 0.12rem;
              height: 0.18rem;
              position: relative;
              left: -0.05rem;
            }
            .up-data::before {
              background: url("../../../assets/city-management/common-service/social-insurance/up-arrow.png")
                center no-repeat;
              background-size: cover;
            }
            .down-data::before {
              top: 0.05rem;
              background: url("../../../assets/city-management/common-service/social-insurance/down-arrow.png")
                center no-repeat;
              background-size: cover;
            }
          }
        }
      }
    }
    .three-echart,
    .left-bottom {
      margin-top: 0.08rem;
      width: 10.18rem;
      display: flex;
      .item {
        // width: 3.22rem;
        flex:1;
        margin-right: 0.26rem;
        height: 2.89rem;
        position: relative;
        &:nth-of-type(3) {
          margin-right: 0;
        }
        .czrknvbl {
          position: relative;
          left: 0;
          top: 0;
          height: 2.4rem;
        }
        .g-lt-right {
          position: absolute;
          right: 0.2rem;
          top: -0.1rem;
          width: 3.67rem;
          height: 3.3rem;
          .g-radar-echart {
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -0.5rem;
            margin-top: -0.5rem;
            width: 1rem;
            height: 1rem;
          }
          .lt-radar-box {
            width: 1.58rem;
            height: 1.58rem;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -0.79rem;
            margin-top: -0.59rem;
            background: url("../../../assets/city-management/common-service/social-security/radar.png")
              center no-repeat;
            background-size: 100%;
            .lt-radar-item {
              width: 0.96rem;
              height: 0.9rem;
              position: absolute;
              .lt-text-item01 {
                padding-left: 0.16rem;
                height: 0.3rem;
                line-height: 0.3rem;
                font-size: 0.18rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
              }
              .lt-radar-per {
                padding-left: 0.16rem;
                width: 100%;
                height: 0.24rem;
                line-height: 0.24rem;
                font-size: 0.18rem;
                font-family: Source Han Sans CN;
                font-weight: bold;
                transform: skewX(-5deg);
                color: rgba(155, 233, 255, 1);
                background: rgba(106, 180, 201, 0.15);
                position: relative;
                &::after {
                  content: "";
                  display: inline-block;
                  position: absolute;
                  right: 0.02rem;
                  top: 0.07rem;
                  width: 0.03rem;
                  height: 0.12rem;
                  background: #9be9ff;
                  transform: skewX(-5deg);
                }
              }
              .lt-text-item02 {
                padding-left: 0.16rem;
                height: 0.3rem;
                line-height: 0.3rem;
                font-size: 0.18rem;
                font-family: Source Han Sans CN;
                font-weight: bold;
                font-style: italic;
                color: rgba(237, 214, 174, 1);
              }
            }
            .lt-item01 {
              left: -0.86rem;
              top: -0.45rem;
            }
            .lt-item02 {
              right: -0.86rem;
              top: -0.45rem;
            }
            .lt-item03 {
              right: -0.86rem;
              bottom: -0.45rem;
            }
            .lt-item04 {
              left: -0.86rem;
              bottom: -0.45rem;
            }
          }
        }
      }
    }
    .left-bottom {
      .item {
        height: 3.5rem;
        .czrknvbl {
          height: 3.1rem;
        }
      }
    }
    .middle-line {
      width: 9.077rem;
      height: 0.333rem;
      background: url("../../../assets/city-management/common-service/social-insurance/left-middle-kuang.png")
        center no-repeat;
      background-size: cover;
      padding: 0.23rem 0.47rem 0.21rem 0.45rem;
      display: flex;
      .middle-left {
        font-size: 0.19rem;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        flex: 1;
        label {
          line-height: 0.333rem;
          float: left;
        }
        span {
          float: left;
          line-height: 0.333rem;
          font-size: 0.31rem;
          font-family: Impact;
          font-weight: bold;
          font-style: italic;
          color: rgba(255, 231, 0, 1);
        }
      }
      .middle-right {
        margin-top: 0.05rem;
        width: 1.5rem;
        font-size: 0.19rem;
        line-height: 0.19rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(224, 227, 251, 1);
        .up-data {
          color:rgba(0,229,156,1);
        }
        .down-data {
          color:rgba(229,87,17,1);
        }
        .up-data::before,
        .down-data::before {
          content: "";
          display: inline-block;
          width: 0.12rem;
          height: 0.18rem;
          position: relative;
          left: -0.05rem;
        }
        .up-data::before {
          // top: 0.03rem;
          background: url("../../../assets/city-management/common-service/social-insurance/up-arrow.png")
            center no-repeat;
          background-size: cover;
        }
        .down-data::before {
          // top: 0.03rem;
          background: url("../../../assets/city-management/common-service/social-insurance/down-arrow.png")
            center no-repeat;
          background-size: cover;
        }
        span {
          font-size: 0.24rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          font-style: italic;
          position: relative;
          color: rgba(0, 229, 156, 1);
          top: 0.02rem;
        }
      }
    }
  }
  .main-right-bottom {
    position: absolute;
    top: 0.37rem;
    right: 0.36rem;
    z-index: 9;
    width: 11.29rem;
    height: 9.99rem;
    background: url("../../../assets/city-management/common-service/social-insurance/big-kuang.png")
      center no-repeat;
    background-size: 100%;
    .g-lb-nav {
      position: absolute;
      left: 0.65rem;
      top: 0.44rem;
      width: 8rem;
      height: 0.6rem;
      overflow: hidden;
      .lb-nav-item {
        // margin-right: 0.42rem;
        float: left;
        font-size: 0.22rem;
        cursor: pointer;
        line-height: 0.5rem;
        padding:0 .2rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(224, 227, 251, 1);
      }
      .lb-nav-active {
        // font-size: 0.24rem;
        color: rgba(255, 255, 255, 1);
        background: url("../../../assets/city-management/common-service/social-insurance/activeTable.png") center/100% 100%

      }
    }
    .lb-container {
      margin-top: 1.25rem;
      margin-left: 0.64rem;
      width: 10.06rem;
      height: 5.2rem;
      .lb-cont-num {
        // width: 100%;
        // height: 100%;
        overflow: hidden;
        .lb-num-box {
          // margin-right: 0.1rem;
          // width: 3.05rem;
          width: auto;
          height: 1.7rem;
          overflow: hidden;
          float: left;
          .g-num-container {
            width: auto;
            // height: 1.75rem;
            float: left;
            .g-num-box {
              float: left;
            }
          }
        }
      }
      .lb-cont-num3 {
        display: flex;
        height: 4.77rem;
        .lb-num-box-left {
          width: 4.31rem;
          .g-num-container {
            padding-left: 0.29rem;
            padding-top: 0.2rem;
            .g-num-box {
              display: flex;
              img {
                width: 0.82rem;
                height: 0.99rem;
                margin-right: 0.26rem;
              }
              .right {
                position: relative;
                left: 0;
                top: -0.13rem;
                .g-num-data {
                  .rate {
                    position: relative;
                    top: -0.87rem;
                    right: -1.4rem;
                    .g-up-add {
                      height: 0.4rem;
                      line-height: 0.4rem;
                      font-weight: bold;
                      font-style: italic;
                      color: rgba(104, 225, 162, 1);
                    }
                  }
                }
              }
            }
          }
        }
        .lb-num-box-right {
          flex: 1;
          .g-num-container {
            width: 100%;
            height: 100%;
            position: relative;
            .left-bottom-box {
              position: relative;
              flex: 1;
              overflow: hidden;
              .left-bottom-inner-box {
                width: 100%;
                height: 100%;
              }
              .item-li {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                height: 0.45rem;
                margin-top: 0.13rem;
                .name-line {
                  display: flex;
                  flex-direction: column;
                  > div {
                    margin: 0.05rem 0;
                  }
                }
                .name {
                  color: #ffffff;
                  font-size: 0.17rem;
                }
                .number {
                  width: 0.45rem;
                  height: 0.45rem;
                  text-align: center;
                  line-height: 0.4rem;
                  font-size: 0.17rem;
                  color: #ffffff;
                  background: url("../../../assets/emergency-command/overall-situation/societal-security/no4.png")
                    no-repeat;
                  background-size: 85% 85%;
                  background-position: 40% 20%;
                }
                .number-01 {
                  width: 0.45rem;
                  height: 0.45rem;
                  text-align: center;
                  line-height: 0.4rem;
                  color: #ffffff;
                  background: url("../../../assets/emergency-command/overall-situation/societal-security/no1.png")
                    no-repeat;
                  background-size: 100% 100%;
                }
                .number-02 {
                  width: 0.45rem;
                  height: 0.45rem;
                  text-align: center;
                  line-height: 0.4rem;
                  color: #ffffff;
                  background: url("../../../assets/emergency-command/overall-situation/societal-security/no2.png")
                    no-repeat;
                  background-size: 100% 100%;
                }
                .number-03 {
                  width: 0.45rem;
                  height: 0.45rem;
                  text-align: center;
                  line-height: 0.4rem;
                  color: #ffffff;
                  background: url("../../../assets/emergency-command/overall-situation/societal-security/no3.png")
                    no-repeat;
                  background-size: 100% 100%;
                }
                .line {
                  width: 4.57rem;
                  height: 0.1rem;
                  display: flex;
                  align-items: center;
                  background: linear-gradient(
                    90deg,
                    rgba(102, 175, 235, 0.3) 0%,
                    rgba(123, 208, 240, 0.3) 100%
                  );
                  border-radius: 0.05rem;
                  .line-inner {
                    height: 0.1rem;
                    background: linear-gradient(
                      90deg,
                      rgba(102, 175, 235, 1) 0%,
                      rgba(123, 208, 240, 1) 100%
                    );
                    border-radius: 0px 0.04rem 0.04rem 0px;
                  }
                }
                .value {
                  flex: 1;
                  color: #edd6ae;
                  font-size: 0.17rem;
                  margin-left: 0.1rem;
                  margin-top: 0.3rem;
                }
              }
            }
          }
        }
      }
      .hospital-org {
        width: 9.68rem;
        height: 0.96rem;
        background: url("../../../assets/city-management/common-service/social-insurance/right-detail-kuang.png")
          center no-repeat;
        background-size: 100% 100%;
        padding-left: 0.38rem;
        font-size: 0.22rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        font-style: italic;
        color: rgba(223, 226, 253, 1);
        padding-top: 0.17rem;
        position: relative;
        .table-list {
          display: none;
          width: 8.22rem;
          height: 4.37rem;
          padding-top: 0.43rem;
          padding-left: 0.27rem;
          padding-right: 0.32rem;
          padding-bottom: 0.2rem;
          position: absolute;
          background: url("../../../assets/city-management/common-service/social-insurance/table-bg.png")
            center no-repeat;
          background-size: 100% 100%;
          left: -10rem;
          top: 0;
          .close {
            width: 0.24rem;
            height: 0.24rem;
            position: absolute;
            right: 0.46rem;
            top: 0.44rem;
            background: url("../../../assets/city-management/common-service/social-insurance/close.png")
              center no-repeat;
            background-size: 100% 100%;
          }
          .title {
            font-size: 0.24rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            line-height: 0.24rem;
            color: rgba(255, 255, 255, 1);
            margin-bottom: 0.22rem;
          }
        }
        .img-title {
          position: relative;
          img {
            width: 0.85rem;
            height: 1.12rem;
          }
          .info {
            position: absolute;
            left: 0.95rem;
            top: 0.15rem;
            span {
              font-size: 0.36rem;
              font-family: Impact;
              font-weight: bold;
              font-style: italic;
              color: rgba(255, 230, 0, 1);
            }
          }
          .detail {
            width: 0.86rem;
            height: 0.42rem;
            border: 1px solid #0087ff;
            border-radius: 0.21rem;
            text-align: center;
            line-height: 0.42rem;
            position: absolute;
            right: 0.36rem;
            top: 0.2rem;
            cursor: pointer;
          }
        }
      }
      .lb-cont-num1 {
        height: 3.5rem;
        .lb-num-box {
          height: 100%;
          &:nth-of-type(1) {
            width: 4.9rem;
            margin-right: 0.26rem;
          }
          &:nth-of-type(2) {
            width: 4.9rem;
          }
          .g-num-container {
            width: 100%;
            height: 90%;
            position: relative;
            .right-echarts-02,
            .right-echarts-03 {
              position: absolute;
              left: 0;
              top: -0.1rem;
              width: 4.9rem;
              height: 3.15rem;
            }
          }
        }
      }
      .right-charts-04-box {
        display: flex;
        position: relative;
        left: 0;
        top: 0;
        .g-small-title {
          width: 5rem;
        }
        .right-echarts-04 {
          position: absolute;
          left: 0;
          top: 0.15rem;
          width: 5.03rem;
          height: 3.38rem;
        }
        .right-echarts-05 {
          position: absolute;
          right: 0;
          top: 0.15rem;
          width: 5.03rem;
          height: 3.38rem;
        }
      }
      .g-lb-item {
        width: 100%;
        height: 100%;
        .lb-cont-list {
          margin-top: 0.15rem;
          width: 100%;
          // height: calc(100% - 1.2rem);
          .right-charts-01 {
            position: absolute;
            left: 0.7rem;
            bottom: 0.6rem;
            width: 10.4rem;
            height: 3.2rem;
          }
          .g-middle-box {
            height: 1.31rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-top: 0.31rem;
            padding-bottom: 0.4rem;
            .g-img-box {
              width: 4.04rem;
              height: 0.91rem;
              background: url("../../../assets/city-management/common-service/social-insurance/gs-middle-kuang.png")
                center no-repeat;
              background-size: 100% 100%;
              padding: 0.3rem 0.39rem 0.1rem 0.48rem;
              display: flex;
              justify-content: space-between;
              .left-box {
                font-size: 0.17rem;
                font-family: Source Han Sans CN;
                font-weight: 500;
                color: rgba(255, 255, 255, 1);
                h2 {
                  font-size: 0.2rem;
                  margin-bottom: 0.12rem;
                }
                span {
                  font-size: 0.31rem;
                  font-family: Impact;
                  font-weight: bold;
                  font-style: italic;
                  color: rgba(255, 231, 0, 1);
                }
              }
              .right-box {
                width: 0.75rem;
                height: 0.76rem;

              }
              .right-box-1 {
                background: url("../../../assets/city-management/common-service/social-insurance/jj-blue.png")
                  center no-repeat;
                background-size: 100% 100%;
              }
              .right-box-2 {
                background: url("../../../assets/city-management/common-service/social-insurance/jj-orange.png")
                  center no-repeat;
                background-size: 100% 100%;
              }
            }
          }
        }
      }
      .g-lb-item-1 {
        padding-left: 1rem;
        height: 8.2rem;
        width: 8.96rem;
        position: relative;
        .changeIndex {
          position: absolute;
          height: 7.93rem;
          width: 0.44rem;
          left: 0.16rem;
          top: 0.15rem;
          p {
            display: inline-block;
            width: 0.18rem;
            height: 0.3rem;
            line-height: 0.3rem;
          }
          .get,
          .out {
            height: 50%;
            text-align: center;
            line-height: 3.97rem;
            width: 100%;
            // border: 0.03rem solid rgba(0, 0, 0, 1);
            background: url("../../../assets/city-management/common-service/social-insurance/zhuzi.png")
              center no-repeat;
            background-size: cover;
            font-size: 0.2rem;
            font-family: Source Han Sans CN;
            border-bottom: none;
            border-top: none;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
          }
          .select {
            background: #54bcec;
          }
        }
        .lb-cont-num,
        .lb-num-box {
          height: 1.77rem;
          width: 100%;
          .g-num-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            .g-box {
              position: relative;
              left: 0;
              top: 0;
              // width: 33%;
              padding-top: 0.35rem;
              padding-bottom: 0.16rem;
              display: flex;
              img {
                width: 0.82rem;
                height: 1.05rem;
                display: inline-block;
              }
              .g-box-left {
                // position: absolute;
                margin-left: 0.3rem;
                left: 1.2rem;
                top: 0.33rem;
                font-size: 0.2rem;
                font-family: Source Han Sans CN;
                font-weight: bold;
                font-style: italic;
                color: rgba(255, 255, 255, 1);
                p {
                  font-size:0.18rem;
                  line-height: 0.18rem;
                  font-family:Source Han Sans CN;
                  font-weight:bold;
                  font-style:italic;
                  color:rgba(223,226,253,1);
                  margin: 0;
                }
                h1 {
                  // width: 1.45rem;
                  height: 0.84rem;
                  line-height: 0.84rem;
                  font-size: 0.18rem;
                  text-align: center;
                  margin-left:-0.26rem;
                  background: url("../../../assets/common/num-bg.png") center no-repeat;
                  background-size: 100% 100%;

                }
                span {
                  font-size: 0.36rem;
                  font-family: Impact;
                  font-weight: bold;
                  font-style: italic;
                  color: rgba(255, 230, 0, 1);
                }
              }
            }
          }
        }
      }
      .g-lb-item2 {
        .lb-cont-list {
          height: auto;
          margin-top: -0.1rem;
          .g-box-bottom {
            width: 10.06rem;
            height: 3.47rem;
            display: flex;
            .left-box {
              width: 1.41rem;
              height: 2.55rem;
              background: url("../../../assets/city-management/common-service/social-insurance/gs-left-kuang.png")
                center no-repeat;
              background-size: 100% 100%;
              margin-top: 0.22rem;
              margin-right: 0.05rem;
              padding-top: 0.46rem;
              padding-bottom: 0.4rem;
              padding-left: 0.43rem;
              padding-right: 0.2rem;
              .top-box,
              .bottom-box {
                width: 1.13rem;
                height: 1.2rem;
                font-size: 0.17rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: rgba(223, 226, 253, 1);
                h3 {
                  font-size: 0.19rem;
                  font-family: Source Han Sans CN;
                  font-weight: 500;
                  color: rgba(255, 255, 255, 1);
                }
                span {
                  margin-top: 0.23rem;
                  font-size: 0.31rem;
                  font-family: Impact;
                  font-weight: bold;
                  font-style: italic;
                  color: rgba(255, 231, 0, 1);
                }
              }
              .top-box {
                border-bottom: 1px dashed #00abfb;
              }
            }
            .right-box {
              // flex: 1;
              width: 9.5rem;
              display: flex;
              flex-flow: wrap;
              .item {
                width: 1.83rem;
                margin-top: 0.1rem;
                margin-right: 0.23rem;
                height: 50%;
                text-align: center;
                &:nth-of-type(4) {
                  margin-right: 0;
                }
                &:nth-of-type(8) {
                  margin-right: 0;
                }
                img {
                  width: 0.47rem;
                  height: 0.56rem;
                  margin: 0 auto;
                }
                h3 {
                  font-size: 0.19rem;
                  font-family: Source Han Sans CN;
                  font-weight: bold;
                  font-style: italic;
                  color: rgba(223, 227, 253, 1);
                }
                .people-num {
                  width: 100%;
                  height: 0.98rem;
                  font-size: 0.23rem;
                  font-family: Source Han Sans CN;
                  font-weight: bold;
                  font-style: italic;
                  color: rgba(255, 255, 255, 1);
                  background: url("../../../assets/city-management/common-service/social-insurance/number-box.png")
                    center no-repeat;
                  background-size: 100% 100%;
                  span {
                    font-size: 0.36rem;
                    font-family: Impact;
                    font-weight: bold;
                    line-height: 0.98rem;
                    font-style: italic;
                    color: rgba(253, 230, 47, 1);
                  }
                }
              }
            }
          }
        }
      }
      .lb-cont-echart {
        margin-top: 0.05rem;
        width: 100%;
        overflow: hidden;
        .lb-echart-item {
          width: 50%;
          float: left;
          .lb-echart-cont {
            position: relative;
            width: 8.96rem;
            height: 2.72rem;
          }
        }
      }
    }
  }
}
.body-item-bottom-line {
  float: left;
  height: 100%;
  margin-top: -0.01rem;
  width: 2.2rem;
}
.body-item-line-box {
  width: 0.08rem;
  height: 0.31rem;
  float: left;
  margin-right: 0.05rem;
  margin-top: 0.08rem;
  background: #145e64;
}
.temp {
  background-color: #21feff;
}

.question-list {
  height: 3.8rem;
  overflow-y: auto;
  .question-item {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(7, 69, 182, 0.2);
    height: 0.48rem;
    div {
      border-right: 1px solid #144fbb;
      border-bottom: 1px solid #144fbb;
      font-size: 0.14rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      text-align: center;
    }
    &:nth-of-type(1) {
      background: rgba(20, 79, 187, 0.6);
      height: 0.45rem;
      div {
        font-size: 0.15rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }
    .self-adaptation {
      display: flex;
      align-items: center;
      height: 100%;
      justify-content: center;
      border-right: 1px solid #144fbb;
      border-bottom: 1px solid #144fbb;
    }
    .type {
      flex: 0 0 4%;
      padding: 0 0.05rem;
    }
    .name {
      flex: 6%;
      padding: 0 0.05rem;
    }
    .operation {
      flex: 0 0 10%;
      padding: 0 0.05rem;
    }
    .buyPrice {
      flex: 6%;
      padding: 0 0.05rem;
    }
    .oldPrice {
      flex: 6%;
      padding: 0 0.05rem;
    }
    .selectPag {
      flex: 8%;
      padding: 0 0.05rem;
    }
    .singlePrice {
      flex: 2%;
      padding: 0 0.05rem;
    }
    .selcetPriceByBox {
      flex: 4%;
      padding: 0 0.05rem;
    }
    .selectPriceBySingle {
      flex: 6%;
      padding: 0 0.05rem;
    }
    .lowerRate {
      flex: 4%;
      padding: 0 0.05rem;
    }
  }
}

.social-type-box{
  width:6.56rem;
  height:4.89rem;
  position:absolute;
  font-family:Source Han Sans CN;
  right:12.59rem;
  top:2rem;
  background:url('../../../assets/city-management/common-service/social-insurance/addSocial.png') no-repeat center/100% 100%;
  display: flex;
  flex-direction: column;
  padding:0.41rem 0.3rem;
  z-index: -1;
  &.activeType{
    z-index: 1000
  }
  p{
    font-size:.22rem;
    font-weight:bold;
    color:rgba(255,255,255,1);
    padding-left:0.3rem;
    background:url('../../../assets/emergency-command/emergency-command-chart/bg-selected.png') no-repeat left center/0.32rem ;
    img{
      float:right;
      cursor: pointer;
      width:.3rem;
      height:auto;
    }
  }
  .add-box{
    flex:1
  }
  &.funnul-box{
    top:auto;
    width:4.47rem;
    height:3.59rem;
    right:11.79rem;
    bottom:0.71rem;
    z-index: 1000;
    &>div{
      text-align: center;
      position: relative;
      padding-top:0.29rem;
      img{
       height:2.7rem;
       margin-top:.29rem
      }
      .funnel-text{
        position: absolute;
        top:0;
        left:0;
        right:0;
        div{
          overflow: hidden;
          &:nth-child(1){
            margin-top:1.4rem
          }
          &:nth-child(2){
            margin-top: .25rem;
            span:nth-child(1){
              margin-left: .65rem;
            }
            span:nth-child(2){
              margin-left: 2.4rem;
            }
          }
          &:nth-child(3){
            margin-top: 0.2rem;
            span:nth-child(1){
              margin-left: 0.85rem;
              font-size:.20rem;
            }
            span:nth-child(2){
              margin-left: 2rem;
            }
          }
          &:nth-child(4){
            margin-top: 0.15rem;
            span{font-size: .16rem;}
           span:nth-child(1){
              margin-left: 1.05rem;
            }
            span:nth-child(2){
              margin-left: 1.8rem;
            }
          }
          &:nth-child(5){
            margin-top: .1rem;
            span{font-size: .16rem;}
            span:nth-child(1){
              margin-left: 1.25rem;
            }
            span:nth-child(2){
              margin-left: 1.1rem;
            }
          }
        }
        span{
          &:nth-child(1){
            font-size:.22rem;
            font-family:Impact;
            font-weight:bold;
            font-style:italic;
            color:rgba(255,230,0,1);
            float: left;
            margin-left: 0.35rem;
          }
          &:nth-child(2){
            float:left;
            font-size:.17rem;
            margin-left: 2.8rem;
            font-weight:400;
            color:rgba(255,255,255,1);
            text-shadow:0px 1px 10px rgba(121,231,255,0.28);
            background:linear-gradient(180deg,rgba(249,251,255,1) 0%, rgba(87,210,255,1) 100%);
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
          }
        }
      }
    }
  }
}
.updata em,.downData em{
  display:inline-block;
   width: 0.12rem;
   height: 0.18rem;
}
.updata em{
   background: url("../../../assets/city-management/common-service/social-insurance/up-arrow.png") no-repeat left center/80% auto
}
.downData{
  color:#E55711 !important;
}
.downData em{
   background: url("../../../assets/city-management/common-service/social-insurance/down-arrow.png") no-repeat left center/80% auto
}
.found-box{
  height:auto;
  display: inline-block;
  &:nth-child(2n){
    margin-left: .28rem;
  }
  &:nth-child(1),&:nth-child(2){
    margin-top: .25rem;
  }
   &:nth-child(3),&:nth-child(4){
    margin-top: .25rem;
  }
  &>p{
    font-size:.2rem;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(255,255,255,1);
    img{
      vertical-align: middle;
    }
  }
  &>div{
    width:100%;
    font-size:.17rem;
    font-family:Source Han Sans CN;
    font-weight:bold;
    font-style:italic;
    color:rgba(223,227,253,1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:1.17rem;
    padding:.2rem .3rem;
    width:3.92rem;
    box-sizing: border-box;
    background:url('../../../assets/city-management/common-service/social-insurance/fund.png') no-repeat center/100% 100%;
    .found-text{
        p:nth-child(2){
          margin-top:.1rem;
          span{
            font-size:.36rem;
            font-family:Impact;
            font-weight:bold;
            font-style:italic;
            color:rgba(253,230,47,1);
          }
        }
    }
  }
}
.mouseCompany{
  position: absolute;
  left:32%;
  top:28%;
  p{
    font-size:.14rem;
    font-family:Source Han Sans CN;
    font-weight:bold;
    font-style:italic;
    color:rgba(223,226,253,1);
    text-align: center;
    span{
      font-size: 0.24rem;
      font-family:Impact;
      font-weight:400;
      font-style:italic;

      text-shadow:0px 1px 10px rgba(121,231,255,0.28);
      background:linear-gradient(180deg,rgba(249,251,255,1) 0%, rgba(87,210,255,1) 100%);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      padding-right: .05rem;
    }
    &:last-child{
     font-size:.16rem;
     margin-top:0.05rem;
     color:rgba(250,252,255,1);
    }
  }
}
.classNum{
  position:absolute;
  top:28%;
  left:35%;
  text-align: center;
  font-size: 0.24rem;
  font-family:Impact;
  font-weight:400;
  padding-right:.05rem;
  font-style:italic;
  color:rgba(250,252,255,1);
  text-shadow:0px 1px 10px rgba(121,231,255,0.28);
  background:linear-gradient(180deg,rgba(249,251,255,1) 0%, rgba(87,210,255,1) 100%);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
.legend-box{
  position:absolute;
  right:11.7rem;
  bottom:0.65rem;
  width:3.10rem;
  height:0.88rem;
  background:url('../../../assets/city-management/common-service/social-insurance/fund.png') no-repeat center/100%;
  color:#fff;
  font-size: 0.26rem;
  font-weight: bold;
  font-family:Source Han Sans CN;
  text-align: center;
  line-height: 0.88rem;
  z-index: 100;
  img{
    vertical-align: middle;
    width:0.30rem;
  }
}
  /*.main-left-top,*/
  /*.main-right-bottom{*/
  /*}*/
</style>
