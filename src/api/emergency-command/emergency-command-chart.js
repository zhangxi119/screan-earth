/*
 * @Descripttion:应急指挥一张图接口
 * @Author: renting
 * @Date: 2020-03-11
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-03-23 10:14:46
 */

import BASE_PATH from '@/api/basePath'
export default {
  // 全部资源：应急物资
  GET_ALL_RESOURCE_MATERIALS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/resourceOfAll', params)
  },
  // 全部资源：重点防护
  GET_ALL_RESOURCE_PROTECTION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/majorProtectionType', params)
  },
  // 全部资源：监测对象
  GET_ALL_RESOURCE_MONITOR (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/monitoringTarget', params)
  },
  // 全部资源：紧急救援
  GET_ALL_RESOURCE_RESCUE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/emergencyAidType', params)
  },
  // 预案资源
  GET_PLAN_RESOUCE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/plantResouce', params)
  },
  // 左侧面板
  EMERGENCY_LEFT (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/leftChartData', params)
  },
  // 右侧面板
  EMERGENCY_RIGHT (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/rightChartData', params)
  },
  // 启动预案
  START_PLANT (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/startPlant', params)
  },
  // 应急指挥
  PLANT_DICT (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/plantDict', params)
  },
  // 根据类型查询应急物资点位
  WAREHOUSE_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/warehouseByType', params)
  },
  // 根据类型查询指挥部点位
  HEADER_QUARTERS_BY_ID (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/headerquartersById', params)
  },
  // 根据类型查询应急救援队伍点位
  EMERGENCY_TEAM_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/emergencyTeamByType', params)
  },
  // 应急转移安置点
  SHELTER_LIST (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/shelterList', params)
  },
  // 根据类型查询社会保障力量点位
  SOCIAL_RESOURECE_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/socialResourceByType', params)
  },
  // 根据类型查询重点防护目标点位
  MAJOR_PROJECTTION_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/majorProtectionByType', params)
  },
  // 根据类型查询重大危险源点位
  HAZARD_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/hazardByType', params)
  },
  // 根据类型查询自然灾害监测位
  MONITORING_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/monitoringByType', params)
  },
  // 根据类型查询安全隐患点
  SATETY_PRODUCTION_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/safetyProductionByType', params)
  },
  // 根据类型查询紧急救援
  EMERGENCY_AID_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/emergencyAidByType', params)
  },
  // 传染病定点医院
  PUBLIC_HEALTH_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/publicHealthByType', params)
  },
  // 历史应急事件
  HISTOEY_EMERGENCY_EVENTS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/historyEmergencyEvents', params)
  },
  /** ************点击地图撒点信息查询详细信息************** **/
  DETAIL_OF_LOCATION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/detailOfLocation', params)
  },
  // 视频撒点
  AMB_LOCATION_ALL (vm, params) {
    return vm.$axios.post(BASE_PATH + '/screen/publicHygiene/ambLocationAll', params)
  },
  // 救护车视频
  QUERYCARDLIVE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHygiene/ambVedios', params)
  },
  // 监测点位弹窗
  DISTRICT_DETAILS (vm, params) {
    return vm.$axios.post(BASE_PATH + '/screen/naturalDisaster/districtDetails', params)
  },
  // 短信发送
  SEND_MESSAGE (vm, params) {
    return vm.$axios.post(BASE_PATH + '/commonRestService/sendMessage', params)
  }
}
