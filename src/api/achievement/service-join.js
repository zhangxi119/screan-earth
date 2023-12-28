/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-19 10:03:26
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-03-19 17:03:25
 */

import BASE_PATH from '@/api/basePath'

export default {
  /** ---------------------------------------乐山市心连心资源信息-----------------------------------------**/
  /** -------------诉求总体情况---------------**/
  RESOURCE_APPEAL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/appealOverall', params)
  },
  /** -------------诉求办理情况（诉求受理渠道）---------------**/
  RESOURCE_SITUATION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/appealAcceptanceChannel', params)
  },
  /** -------------诉求办理情况（诉求类型）---------------**/
  RESOURCE_SITUATIONTYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getLetterType', params)
  },
  /** -------------诉求办理情况（热门分类TOP5）---------------**/
  RESOURCE_HOTTOP5TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getPopularClassification', params)
  },
  /** -------------诉求趋势---------------**/
  RESOURCE_APPEALTREND (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getAcceptanceTrend', params)
  },
  /** -------------热点问题TOP5---------------**/
  RESOURCE_HOTTOP5 (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getHotIssues', params)
  },
  /** -------------市级部门办理量TOP10---------------**/
  RESOURCE_WORKTOP10 (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getDepartmentHandling', params)
  },
  /** -------------区县部门办理量TOP10---------------**/
  RESOURCE_AREAWORKTOP10 (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getCountyHandling', params)
  },
  /** -------------市级部门抽查回访满意率TOP10---------------**/
  RESOURCE_PLEASEDTOP10 (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getDepartmentSatisfaction', params)
  },
  /** -------------区县部门抽查回访满意率TOP10---------------**/
  RESOURCE_AREAPLEASEDTOP10 (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getCountySatisfaction', params)
  },
  /** -------------市级部门超期办理情况---------------**/
  RESOURCE_WORKINGSITUATION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getDepartmentOvertimeDeal', params)
  },
  /** -------------市级区县超期办理情况---------------**/
  RESOURCE_AREAWORKINGSITUATION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getCountyOvertimeDeal', params)
  },
  /** -------------区县总体情况（地图点击后查询）---------------**/
  RESOURCE_AREADETAIL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getCountyTotality', params)
  },
  /** -------------视频监控---------------**/
  RESOURCE_LIVEVIDEO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getVideoSurveillance', params)
  },
  /** -------------诉求类型下钻---------------**/
  RESOURCE_GETAPPEALTYPETREND (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getAppealTypeTrend', params)
  },
  /** -------------部门超期办理情况数据下钻---------------**/
  RESOURCE_getDepartmentOverdueHandling (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getDepartmentOverdueHandling', params)
  },
  /** -------------区县超期办理情况数据下钻(无数据)---------------**/
  RESOURCE_getCountyOverdueHandling (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getCountyOverdueHandling', params)
  },
  /** -------------下钻-部门办理趋势---------------**/
  RESOURCE_getDepartmentHandlingTrend (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getDepartmentHandlingTrend', params)
  },
  /** -------------下钻-区县办理趋势---------------**/
  RESOURCE_getCountyHandlingTrend (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getCountyHandlingTrend', params)
  },
  /** -------------数据下钻-今日受理（！！！按诉求分类无数据）---------------**/
  RESOURCE_getAcceptedToday (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getAcceptedToday', params)
  },
  /** -------------数据下钻-诉求总数（！！！无数据）---------------**/
  RESOURCE_getTotalOfAppeals (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getTotalOfAppeals', params)
  },
  /** -------------数据下钻-在线办结数（！！！无数据）---------------**/
  RESOURCE_getNumberOfOnline (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/heartLinked/getNumberOfOnline', params)
  }
}
