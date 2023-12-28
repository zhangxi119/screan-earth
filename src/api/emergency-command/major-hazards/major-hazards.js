/*
 * @Descripttion:
 * @Author: luoxi
 * @Date: 2020-03-18 15:41:33
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-09 11:51:01
 */

import BASE_PATH from '@/api/basePath'
export default {
  /// 重大危险源企业分布
  queryDistribution (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/majorHazard/queryDistribution', params)
  },
  /// 重大危险源上报情况
  queryReports (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/majorHazard/queryReports', params)
  },
  // 重大危险源上报情况统计
  queryReportsCount (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/majorHazard/queryReportsCount', params)
  },
  /// 预警通知
  queryWarningInfo (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/majorHazard/queryWarningInfo', params)
  },
  // 获取下拉框列表
  querySelectList (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/majorHazard/querySelectList', params)
  },
  // 危险源企业区域统计排行TOP5
  queryAreaRank (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/majorHazard/queryAreaRank', params)
  },
  // 企业危险源数量统计
  queryHazardNumberRank (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/majorHazard/queryHazardNumberRank', params)
  },
  // 重大危险源明细
  queryHazardDetails (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/majorHazard/queryHazardDetails', params)
  },
  // 撒点 /screen/majorHazard/queryPoints
  queryPoints (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/majorHazard/queryPoints', params)
  },
  // 撒点 右下角小面板
  queryPointsMap (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/monitorMap/queryPoints', params)
  },
  // 重大危险源-区域点位list
  AREA_NATURA_DATALIST (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/majorHazard/districtOverAll', params)
  },
  // 重大危险源-区域点位list
  AREA_NATURA_DETAIL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/majorHazard/districtDetails', params)
  },
  // 重大危险源-区域点位详情
  AREA_POINTS_DETAIL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/detailOfLocation', params)
  }
}
