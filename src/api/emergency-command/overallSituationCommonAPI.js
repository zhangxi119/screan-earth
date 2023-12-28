/*
 * @Descripttion: 安全态势4个页面公共的接口
 * @Author: wanglong
 * @Date: 2020-03-26 16:42:31
 * @LastEditors: wanglong
 * @LastEditTime: 2020-05-07 21:37:48
 */
import BASE_PATH from '@/api/basePath'
export default {
  // 社会安全事故年度统计 shorTimeAna
  SHOR_TIME_ANA (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialSafe/shorTimeAna', params)
  },
  // 地图中间公共
  OVER_ALL_SITUATION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/production/overAllSituation', params)
  },
  // 地图中间公共(生成热力图)
  OVER_ALL_SPREAD (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/production/overAllSpread', params)
  },
  // 应急物资
  WARE_HOUSE_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/warehouseByType', params)
  },
  // 应急人力
  EMERGENCY_TEAM (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/emergencyTeamByType', params)
  },
  // 转移安置点
  SHELTER_LIST (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/shelterList', params)
  },
  // 重点防护目标点位
  MARJOR_PROTECTION_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/majorProtectionByType', params)
  },
  // 重大危险源点位
  HAZAR_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/hazardByType', params)
  },
  // 自然灾害监测位）
  MONITORING_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/monitoringByType', params)
  },
  // 型查询安全隐患点
  SAFETY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/safetyProductionByType', params)
  },
  // 获取点位信息
  THING_DETAILS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/production/thingDetails', params)
  },
  // 根据类型查询指挥部点位
  HEADER_QUARTERS_BY_ID (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/headerquartersById', params)
  }

}
