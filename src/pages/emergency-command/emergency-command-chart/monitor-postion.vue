<!--
 @Descripttion:
 * @Author: chenqy
 * @Date: 2020-05-08
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-21 16:20:23
 -->
<template>
  <div class="heart-harzd-dialog">
    <p class="title">监测点位</p>
    <img
      src="../../../assets/city-management/market-supervision/img/close-icon@2x.png"
      class="close-icon"
      @click="handleClose"
      alt
    />
    <div class="dialog-body">
      <div class="top">
        <div class="input-con select">
          <label for>类型：</label>
          <div type="text" class="input select" @click="showType = !showType">{{typeList[typeIndex].name}}</div>
          <img
            class="select-icon"
            src="../../../assets/city-management/market-supervision/img/select-icon@2x.png"
            alt
          />
          <ul class="select-container" v-show="showType">
            <li v-for="(item, index) in typeList" :key="index" @click="handleType(index)">{{item.name}}</li>
          </ul>
        </div>
        <div class="input-con select">
          <label for>区县：</label>
          <div type="text" class="input select" @click="showQx = !showQx">{{qxList[qxIndex].district}}</div>
          <img
            class="select-icon"
            src="../../../assets/city-management/market-supervision/img/select-icon@2x.png"
          />
          <ul class="select-container" v-show="showQx">
            <li v-for="(item, index) in qxList" :key="index" @click="handleQx(index)">{{item.district}}</li>
          </ul>
        </div>
        <div class="input-con">
          <label for>关键字查找：</label>
          <input type="text" class="input select" placeholder="请输入..." v-model="name"/>
          <img
            class="select-icon"
            src="../../../assets/city-management/market-supervision/img/select-icon@2x.png"
            alt
          />
        </div>
        <a href="javascript:void(0);" class="btn primary" @click="handleSearch">筛选</a>
      </div>
      <div class="bottom">
        <div class="data-table">
          <div v-for="(item,index) in tableHeadConfig"
               :key="index"
               :style="{width:item.width}"
          >{{item.name}}</div>
        </div>
        <div class="data-table-body" id="table-content">
          <div v-for="(item, index) in tableData" :key="index">
            <div :style="{width:tableHeadConfig[0].width}"  @mouseenter="showTitle($event)" @mouseleave="hideTitle">{{item.type}}</div>
            <div class="project-name" :style="{width:tableHeadConfig[1].width}"  @mouseenter="showTitle($event)" @mouseleave="hideTitle">{{item.name}}</div>
            <div :style="{width:tableHeadConfig[2].width}"  @mouseenter="showTitle($event)" @mouseleave="hideTitle">{{item.address || '---'}}</div>
            <div :style="{width:tableHeadConfig[3].width}">
              <img
                @click="handleDetail(index)"
                src="../../../assets/emergency-command/emergency-command-chart/search.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/api/emergency-command/emergency-command-chart.js'
export default {
  name: 'monitor-postion',
  beforeMount () {
    this.doSearch()
  },
  data () {
    return {
      tableHeadConfig: [
        {
          name: '类型',
          width: '23%',
          key: ''
        },
        {
          name: '名称',
          width: '30%',
          key: ''
        },
        {
          name: '地址',
          width: '41%',
          key: ''
        },
        {
          name: '详情',
          width: '6%',
          key: ''
        }
      ],
      showQx: false, // 区县下拉
      showType: false, // 类型下拉
      typeList: [
        {name: '请选择', value: ''}
      ],
      typeIndex: 0,
      qxList: [
        {district: '全部区域', code: ''}
      ],
      qxIndex: 0,
      tableData: [],
      name: '',
      page: 1,
      pageSize: 10
    }
  },
  mounted () {
    let dom = document.getElementById('table-content')
    let that = this
    dom.addEventListener('scroll', function () {
      let top = this.pageYOffset || this.scrollTop
      let clientHeight = this.clientHeight
      let scrollHeight = this.scrollHeight
      let value = scrollHeight - clientHeight - top
      if (value <= 0) {
        that.page = that.page + 1
        that.doSearch()
      }
    }, false)
  },
  methods: {
    // 关闭
    handleClose () {
      this.$emit('close')
    },
    // 详情
    handleDetail (index) {
      window._m.getSouthPointByDistance(this.tableData[index])
      this.$emit('handleLocation', this.tableData[index])
    },
    // 下拉类型
    handleType (index) {
      this.typeIndex = index
      this.showType = false
    },
    // 下拉区县
    handleQx (index) {
      this.qxIndex = index
      this.showQx = false
    },
    // 筛选
    handleSearch () {
      this.tableData = []
      this.page = 1
      this.doSearch()
    },
    // 查询数据
    doSearch () {
      let p = {
        page: this.page,
        pageSize: this.pageSize,
        type: this.typeList[this.typeIndex].value,
        district: this.qxList[this.qxIndex].district === '全部区域' ? '' : this.qxList[this.qxIndex].district,
        name: this.name
      }
      API.DISTRICT_DETAILS(this, p).then(re => {
        let data = re.data
        if (data.serviceSuccess) {
          if (this.qxList.length === 1) {
            this.qxList = [{district: '全部区域', code: ''}, ...data.data.districtDetailsMap.districtList]
            this.typeList = [{name: '请选择', value: ''}, ...data.data.districtDetailsMap.typeList]
          }
          this.tableData = [...this.tableData, ...data.data.districtDetailsMap.detailsList]
        } else {
          console.log(data.errors)
        }
      })
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

<style scoped lang="scss">
  .heart-harzd-dialog {
    width: 7.8rem;
    height: 4.1rem;
    background: url("../../../assets/emergency-command/overall-situation/natural-hazard/kuang@2x.png");
    background-size: 100% 100%;
    padding: 0.25rem 0.15rem;
    z-index: 8;
    .title {
      font-size: 0.22rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }
    .close-icon {
      position: absolute;
      right: 0.2rem;
      top: 0.3rem;
      width: 0.23rem;
      height: 0.23rem;
      cursor: pointer;
      z-index: 1;
    }
    .dialog-body {
      .top {
        //display: flex;
        position: relative;
        .btn {
          position: absolute;
          right: 0.2rem;
          top: 0.54rem;
        }
      }
    }
  }
  .input-con {
    margin-top: 0.2rem;
    position: relative;
    width: 1.8rem;
    display: inline-block;
    & + & {
      margin-left: 0.25rem;
    }
    label {
      display: block;
      font-size: 0.18rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(223, 226, 253, 1);
    }
    .input {
      width: 1.8rem;
      height: 0.38rem;
      line-height: .38rem;
      background: rgba(0, 45, 113, 0.58);
      border: 0.01rem solid rgba(41, 143, 247, 1);
      border-radius: 0.02rem;
      font-size: 0.17rem;
      padding: 0 0.05rem;
      padding-right: 0.3rem;
      box-sizing: border-box;
      font-weight: bold;
      font-style: italic;
      color: rgba(255, 255, 255, 1);
      outline: none;
      margin-top: 0.1rem;
    }
    .select-icon {
      width: 0.1rem;
      height: 0.16rem;
      position: absolute;
      right: 0.02rem;
      display: none;
      top: 0.38rem;
      border: 0.05rem solid transparent;
    }
    &.select {
      cursor: pointer;
      .select-icon {
        display: block;
      }
      .select-container {
        position: absolute;
        /* top: 0.3rem; */
        /* left: -0.1rem; */
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 0.16rem;
        background: url(data:image/png;base64,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) no-repeat;
        background-size: 100% 105%;
        padding: .1rem 0.1rem .2rem;
        z-index: 9;
        box-sizing: border-box;
        height: 3rem;
        overflow-y: auto;
        li {
          list-style-type: none;
          height: 0.45rem;
          line-height: 0.45rem;
          &:hover{
            background: rgba(0,0,0,.5);
          }
        }
      }
    }
  }
  .btn {
    // width: 1.11rem;
    background: linear-gradient(
        180deg,
        rgba(198, 211, 223, 1),
        rgba(133, 145, 155, 1)
    );
    text-decoration: none;
    border-radius: 0.19rem;
    display: inline-block;
    padding: 0.07rem 0.3rem;
    font-size: 0.18rem;
    font-family: Source Han Sans CN;
    line-height: 1.4;
    text-align: center;
    font-weight: bold;
    color: rgba(255, 254, 247, 1);
    opacity: 0.8;
    &.primary {
      background: linear-gradient(
          180deg,
          rgba(99, 213, 255, 1),
          rgba(17, 116, 201, 1)
      );
    }
    &:hover {
      opacity: 1;
    }
  }
  .data-table {
    display: flex;
    background: rgba(0, 102, 181, 1);
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.17rem;
    height: .4rem;
    align-items: center;
    padding: 0 .2rem;
    margin-top: .2rem;
    > div{
      padding: 0 .1rem;
    }
  }
  .data-table-body{
    max-height: 2.4rem;
    overflow-y: auto;
    .project-name{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    > div{
      display: flex;
      font-size: .17rem;
      color: #fff;
      padding: 0 .2rem;
      height: .4rem;
      align-items: center;
      &:nth-child(odd){
        background: rgba(23,71,175,.1);
      }
      &:nth-child(even){
        background: rgba(23,71,175,.26);
      }
      img{
        cursor: pointer;
        width: .21rem;
        height: .21rem;
      }
      > div{
        padding: 0 .1rem;
      }
    }
  }
</style>
