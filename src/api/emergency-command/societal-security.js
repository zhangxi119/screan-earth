/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-21 10:32:01
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-19 16:58:01
 */
import BASE_PATH from '@/api/basePath'
export default {
  // 2016-2020突发事故分布情况
  ACCIDENT_YEARS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/production/accident5Years', params)
  },
  // 近五年安全生产事故多发区域top6
  ACCIDENT_DISTRICT (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialSafe/accidentDistrictTop6', params)
  },
  // 近五年社会安全事故类型top5
  ACCIDENT_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialSafe/accidentTypeTop5', params)
  },
  // 近五年安全生产事故发生趋势
  ACCIDENT_TREND (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialSafe/accidentTrend5Years', params)
  },
  // 社会安全事故年度统计
  ACCIDENT_YEAR (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialSafe/accidentYear', params)
  },
  // 社会安全事故年度统计 shorTimeAna
  SHOR_TIME_ANA (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialSafe/shorTimeAna', params)
  },
  // 获取点位信息
  THING_DETAILS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialSafe/thingDetails', params)
  },
  QUERY_MAP_INFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialSafe/queryMapInfo', params)
  },
  QUERY_SOCIAL_INFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialSafe/querySocialInfo', params)
  },
  QUERY_YEARS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialSafe/queryYears', params)
  }
}
