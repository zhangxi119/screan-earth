/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-04-02 17:02:13
 * @LastEditors: wanglong
 * @LastEditTime: 2020-05-09 20:45:37
 */
import BASE_PATH from '@/api/basePath'
export default{
  // 2016-2020突发事故分布情况
  ACCIDENT_YEARS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/production/accident5Years', params)
  },
  // 年公共卫生影响较大区域
  PUBLIC_HEALTH_DISTRICT (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHealth/publicHealthDistrict', params)
  }, // 2016-2020突发事故分布情况
  ACCIDENT_YEARS_TOP3 (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHealth/accident5YearTop3', params)
  },
  MEDICAL_SPREAD (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHealth/medicalSpread', params)
  },
  // 医疗物资类型
  QUERY_SUPPLY_CODES (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHygiene/querySupplyCodes', params)
  },
  MEDICAL_RESOURCE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHealth/medicalResource', params)
  },
  MEDICAL_PEOPLE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHealth/medicalPeople', params)
  },
  QUERY_MAP_INFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHealth/queryMapinfo', params)
  },
  QUERY_HEALTH_INFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHealth/queryHealthInfo', params)
  },
  BED_SITUATION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHealth/bedSituation', params)
  }

}
