/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-15 10:47:32
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-26 20:26:52
 */
import BASE_PATH from '@/api/basePath'

export default {
  /** ---------------------------------------导航-----------------------------------------**/
  /** -------------获取基础信息---------------**/
  GET_BASE_INFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/navigation/getOverallSituation', params)
  },
  /** -------------获取常住人口城镇化率趋势---------------**/
  GET_UR_BAN_RATE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/navigation/getUrbanizationRate', params)
  },
  /** -------------获取本周热点---------------**/
  // GET_HOT_DOTS (vm, params) {
  //   return vm.$axios.post(BASE_PATH + 'screen/navigation/getHotspot', params)
  // },
  /** -------------获取本日突发事件---------------**/
  // GET_EMERGEN (vm, params) {
  //   return vm.$axios.post(BASE_PATH + 'screen/navigation/getEmergencies', params)
  // },
  /** -------------查询城市事件态势---------------**/
  // GET_EVENT (vm, params) {
  //   return vm.$axios.post(BASE_PATH + 'screen/navigation/getEventSituation', params)
  // },
  /** -------------获取天气---------------**/
  GET_WETHER (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/weather/forecast', params)
  },
  /** -------------获取挂图作战---------------**/
  GET_PICTURE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/navigation/getMajorProjects', params)
  },
  /** -------------心连心服务---------------**/
  HEART (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/navigation/getHeartToHeartService', params)
  },
  /** -------------景区运行情况---------------**/
  RUN (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/navigation/getOperationOfScenicSpot', params)
  },
  /** -------------城市突发事件---------------**/
  CITY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/navigation/getUrbanEvents', params)
  },
  /** -------------信息资源接入情况---------------**/
  INFOR_SITE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/navigation/getInformationResources', params)
  },
  /** -------------视频---------------**/
  VEDIO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/navigation/getMonitoringData', params)
  }
}
