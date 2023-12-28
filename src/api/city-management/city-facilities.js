/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-15 13:31:44
 * @LastEditors: wanglong
 * @LastEditTime: 2020-05-09 17:14:20
 */
import BASE_PATH from '@/api/basePath'
/** ---------------------------------------城市设施概况分分析-----------------------------------------**/
export default {
  // 城市设施 --- 城市设施总情况
  CITY_SITUATION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/facility/overallSituation', params)
  },
  // 城市设施 --- 事件处理
  CITY_EVENTHANDING (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/facility/eventHanding', params)
  },
  // 城市设施 --- 热门事件
  CITY_HOTEVENT (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/facility/hotEvent', params)
  },
  // 城市设施 --- 今日事件
  CITY_TODAYTHING (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/facility/todayThing', params)
  },
  // 城市设施 --- 执法情况
  CITY_ENFORCELAW (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/facility/enforceLaw', params)
  },
  // 城市设施 --- 垃圾处理情况
  CITY_GARBAGE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/facility/garbage', params)
  },
  // 城市设施 --- 创文创卫
  CITY_CULHEALTH (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/facility/cCulAndHealth', params)
  },
  // 城市设施 --- 城市设施概况
  CITY_FACILITY (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/facility/facilitySituation', params)
  },
  // 城市设施 --- 视频监控目录
  CITY_CLASSVIDEOS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/facility/classVideos', params)
  },
  // 城市设施 --- 获取小键盘图标，名字等信息
  gener_Ceyboard (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/facility/generKeyboard', params)
  },
  // 城市设施详情（中间地图）点位信息
  facility_Details (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/facility/facilityDetails', params)
  },
  // 获取近三年水位情况
  MONITOR_DETAILS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/facility/monitorDetails', params)
  },
  // 查询轨迹
  DISTRICT_CAR_LOCUS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/facility/carLocus', params)
  },
  // 查询视频列表byName
  SELECT_VIDEO_BYNAME (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/facility/searchVedios', params)
  },
  // select points
  SELECT_VIDEO_POINT (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/facility/vediosPoint', params)
  },
  // 城市管理-城市设施
  SANITATION_OVERVIEW (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/facility/sanitaTionOverview', params)
  },
  // 城市管理-城市设施
  DUMP_SISTUATION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/facility/dumpSituation', params)
  },
  // 城市管理-城市设施
  CAR_INFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/facility/carInfo', params)
  },
  // 城市管理-城市设施
  DISTRICT_OVER_ALL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/facility/districtOverAll', params)
  }

}
