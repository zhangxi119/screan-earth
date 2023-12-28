/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-19 16:07:57
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-12 14:51:17
 */
import BASE_PATH from '@/api/basePath'
/** ---------------------------------------自然灾害 监测预警-----------------------------------------**/
export default {
  // 自然灾害 监测预警 --- 统计信息（监测点位、累计预警次数、当前突发事件）
  CITY_QUERYCOUNT (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/naturalDisaster/queryCount', params)
  },
  // 自然灾害 监测预警 --- 易发事故风险点监测
  CITY_POINTCOUNT (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/naturalDisaster/queryPointCount', params)
  },
  // 自然灾害 监测预警 --- 实时监测信息
  CITY_REALTIMEINFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/naturalDisaster/queryRealTimeInfo', params)
  },
  // 自然灾害 监测预警 --- 预警通知
  CITY_WARNINGINFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/naturalDisaster/queryWarningInfo', params)
  },
  // 自然灾害 监测预警 --- 监测点位分布情况
  CITY_DISTRIBUTION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/naturalDisaster/queryDistribution', params)
  },
  // 自然灾害 监测预警 --- 主要水系监测情况
  CITY_MONITORING (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/naturalDisaster/queryWaterMonitoring', params)
  },
  // 自然灾害 监测预警 --- 地质灾害隐患类型统计
  CITY_COUNT (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/naturalDisaster/queryGeologicHazardCount', params)
  },
  // 撒点 右下角小面板
  queryPointsMap (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/monitorMap/queryPoints', params)
  },
  // 点位水雨详情
  QUERY_WATER_DETAIL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/safeProductionDetails/queryWaterDetail', params)
  },
  // 点位地灾详情
  QUERY_ROID_DETAIL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/safeProductionDetails/queryGeologicHazardDetail', params)
  },
  // 点位内涝详情
  QUERY_RAIN_DETAIL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/safeProductionDetails/queryWaterHazardDetail', params)
  },
  // 点位内涝详情
  QUERY_ALL_DETAIL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/detailOfLocation', params)
  },
  // 安全生产详情
  // 获取点位详情
  POINTSDETAIL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/safeProductionDetails/queryDetails', params)
  },
  // 自然灾害-区域点位list
  AREA_NATURA_DATALIST (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/naturalDisaster/districtOverAll', params)
  },
  // 自然灾害-区域点位list
  AREA_NATURA_DETAIL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/naturalDisaster/districtDetails', params)
  },
  // 自然灾害-区域点位详情
  AREA_POINTS_DETAIL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/detailOfLocation', params)
  }
}
