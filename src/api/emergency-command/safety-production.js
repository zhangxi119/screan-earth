/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-18 15:06:02
 * @LastEditors: wanglong
 * @LastEditTime: 2020-05-10 17:36:46
 */
import BASE_PATH from '@/api/basePath'
/** ---------------------------------------安全生产 监测预警-----------------------------------------**/
export default {
  // 安全生产 监测预警 --- 统计信息（监测点位、累计预警次数、当前突发事件）
  CITY_QUERYCOUNT (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/safeProduction/queryCount', params)
  },
  // 安全生产 监测预警 --- 安全生产企业分布
  CITY_DISTRIBUTION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/safeProduction/queryDistribution', params)
  },
  // 安全生产 监测预警 --- 安全生产企业区域排名下拉框
  CITY_SELECTLIST (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/safeProduction/querySelectList', params)
  },
  // 安全生产 监测预警 --- 安全生产企业区域排名TOP5
  CITY_AREARANK (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/safeProduction/queryAreaRank', params)
  },
  // 安全生产 监测预警 --- 预警通知
  CITY_WARNINGINFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/safeProduction/queryWarningInfo', params)
  },
  // 安全生产 监测预警 --- 潜在隐患区域分布
  CITY_DANGER (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/safeProduction/queryPotentialDanger', params)
  },
  // 安全生产 监测预警 --- 隐患排查情况
  CITY_INVESTIGATION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/safeProduction/queryInvestigationInfo', params)
  },
  // 安全生产 监测预警 --- 隐患排查情况统计
  CITY_INVESTIGATIONCOUNT (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/safeProduction/queryInvestigationCount', params)
  },
  // 安全生产 监测预警 --- 隐患排查记录
  CITY_INVESTIGATIONRECORDS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/safeProduction/queryInvestigationRecords', params)
  },
  // 撒点 右下角小面板
  queryPointsMap (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/monitorMap/queryPoints', params)
  },
  // 右下面板
  MODELDATA (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/monitorMap/queryModal', params)
  },
  // 获取点位详情
  POINTSDETAIL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/safeProductionDetails/queryDetails', params)
  },
  // 获取重大危险源详情
  POINTSMAJORDETAIL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/safeProductionDetails/queryHazardDetail', params)
  },
  // 安全生产-区域点位list
  AREA_NATURA_DATALIST (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/safeProduction/districtOverAll', params)
  },
  // 安全生产-区域点位list
  AREA_NATURA_DETAIL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/safeProduction/districtDetails', params)
  },
  // 安全生产-区域点位详情
  AREA_POINTS_DETAIL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/detailOfLocation', params)
  }
}
/** ---------------------------------------安全态势 自然灾害-----------------------------------------**/
// 2016-2020突发事故分布情况
const ACCIDENT5YEARS = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/production/accident5Years', params)
}
// 近五年自然灾害影响排名
const NATUTE5YEARS = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/nature/nature5Years', params)
}
// 近五年自然灾害影响较大区域
const NATUTEDISTRICT = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/nature/natureDistrict', params)
}
// 近五年自然灾害影响变化情况
const NATURETREND = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/nature/natureTrend', params)
}
// 自然灾害检测点位分布区域
const NATURESPOTSPREAD = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/nature/natureSpotSpread', params)
}
// 自然灾害检测点位分布区域(点击事件)
const NATURESPOTDETAILS = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/nature/natureSpotDetails', params)
}
// 实时监测信息
const TIMEINFO = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/nature/timeInfo', params)
}
// 地图中间公共(左边框)
const OVER_ALL_SITUATION = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/production/overAllSituation', params)
}
// 地图中间公共(小键盘搜索)
const OVER_ALL_SPREAD = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/production/overAllSpread', params)
}
const QUERY_NATURE_MAP_INFO = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/nature/queryNatureMapInfo', params)
}
const QUERY_DATA_INFO = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/nature/queryDataInfoBycode', params)
}
// 自然灾害-区域点位list
const AREA_NATURA_DETAIL = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/naturalDisaster/districtDetails', params)
}
// 自然灾害-区域点位详情
const AREA_POINTS_DETAIL = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/emergency/command/detailOfLocation', params)
}
export {
  ACCIDENT5YEARS,
  NATUTE5YEARS,
  NATUTEDISTRICT,
  NATURETREND,
  NATURESPOTSPREAD,
  NATURESPOTDETAILS,
  TIMEINFO,
  OVER_ALL_SITUATION,
  OVER_ALL_SPREAD,
  QUERY_NATURE_MAP_INFO,
  QUERY_DATA_INFO,
  AREA_NATURA_DETAIL,
  AREA_POINTS_DETAIL
}
