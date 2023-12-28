/*
 * @Descripttion:
 * @Author: luoxi
 * @Date: 2020-03-20 09:42:27
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-29 14:22:53
 */

import BASE_PATH from '@/api/basePath'
export default {
  // 总体情况的最上面三个
  socialSafe (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialSecurity/socialSafe', params)
  },
  /** -------------城市管理-社会保险---------------**/
  /** -------------总体情况---------------**/
  overAllSituation (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialInsurance/overAllSituation', params)
  },
  /** -------------各保险详情（养老-医疗-工伤-失业-社保卡）---------------**/
  insurDetails (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialInsurance/insurDetails', params)
  },
  // 地图中间公共(生成热力图)
  INSURE_DETAILS_MAP (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialSecurity/insureDetails', params)
  },
  // 参保人数类型分布弹框
  peoeTypeOld (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialInsurance/peoeTypeOld', params)
  },
  // 参保人数类型分布弹框
  peoNumInjur (vm, params) {
    return vm.$axios.post(BASE_PATH + '/screen/socialInsurance/peoNumInjur', params)
  },
  // 参保人数类型分布弹框
  QUERYMAPLIST (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialInsurance/queryMapinfo', params)
  }
}
