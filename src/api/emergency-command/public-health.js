/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-18 14:18:58
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-09 17:20:59
 */
import BASE_PATH from '@/api/basePath'
export default {
  // 统计信息
  QUERY_COUNT (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHygiene/queryCount', params)
  },
  // 预警通知
  QUERY_WARNING_INFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHygiene/queryWarningInfo', params)
  },
  // 120网络医院关键词实时监测
  QUERY_KEY_WORD (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHygiene/queryKeyword', params)
  },
  // 医疗机构类型
  QUERY_HOSPITAL_CODES (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHygiene/queryHospitalCodes', params)
  },
  // 医疗物资类型
  QUERY_SUPPLY_CODES (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHygiene/querySupplyCodes', params)
  },
  // 应急资源储备情况
  QUERY_SUPPLY_DISTRIBUTION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHygiene/querySupplyDistribution', params)
  },
  // 应急物资点位分布
  QUERY_POINTS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHygiene/queryPoints', params)
  },
  // 医疗机构分布情况
  QUERY_HOSPITAL_DISTRIBUTION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHygiene/queryHospitalDistribution', params)
  },
  // 医护人员构成  Composition
  QUERY_PEOPLE_COMPOSITION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHygiene/queryPeopleComposition', params)
  },
  // 撒点 右下角小面板
  queryPointsMap (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/monitorMap/queryPoints', params)
  },
  // 获取救护车监测列表
  QUERYCARLIST (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHygiene/callEvent', params)
  },
  // 获取救护车详情
  QUERYCARDETAIL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHygiene/ambLocation', params)
  },
  // 获取救护车监控视频
  QUERYCARDLIVE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHygiene/ambVedios', params)
  },
  // 公共卫生-传染病定点床位统计
  HOSIPTAL_DATA (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHealth/bedSituation', params)
  },
  // 公共卫生-区域点位list
  AREA_NATURA_DATALIST (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHygiene/districtOverAll', params)
  },
  // 公共卫生-区域点位list
  AREA_NATURA_DETAIL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/publicHygiene/districtDetails', params)
  },
  // 公共卫生-区域点位详情
  AREA_POINTS_DETAIL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/detailOfLocation', params)
  }
}
