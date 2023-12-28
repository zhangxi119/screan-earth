/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-30 20:43:12
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-19 16:17:41
 */
import BASE_PATH from '@/api/basePath'
export default {
  // 2016-2020突发事故分布情况
  ACCIDENT_YEARS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/production/accident5Years', params)
  },
  // 近五年安全生产事故多发区域top6
  ACCIDENT_DISTRICT (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/production/accidentDistrictTop6', params)
  },
  // 近五年社会安全事故类型top5
  ACCIDENT_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/production/accidentTypeTop5', params)
  },
  // 近五年安全生产事故发生趋势
  ACCIDENT_TREND (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/production/accidentTrend5Years', params)
  },
  // 社会安全事故年度统计
  ACCIDENT_YEAR (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/production/accidentYear', params)
  },
  // 社会安全事故年度统计
  ACCIDENT_ECO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/production/accidentEco', params)
  },
  // 获取点位信息
  THING_DETAILS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/production/thingDetails', params)
  },
  QUERY_MAP_INFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/production/queryMapInfo', params)
  },
  QUERY_PRODUCTION_INFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/production/queryProductionInfo', params)
  },
  // 获取年份列表
  QUERY_YEARS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/production/queryYears', params)
  }

}
