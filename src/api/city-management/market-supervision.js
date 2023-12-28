/*
 * @Descripttion:市场监管接口
 * @Author: hangzhang
 * @Date: 2020-03-10 11:09:50
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-26 15:08:50
 */
import BASE_PATH from '@/api/basePath'
export default {
  /** -------------地图---------------**/
  /** -------------获取图例---------------**/
  MAP_IMAGS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/marketRegulation/icons', params)
  },
  /** -------------食品药品---------------**/
  /** -------------食品药品 & 食品许可概况、食品主体构成、餐饮服务量化分级评定---------------**/
  FOOD_LICENSE_INFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/feedsMedical/foodLicenseInfo', params)
  },
  /** -------------食品药品 & 食品监督管理情况、食品各环节检查情况、季度检查情况---------------**/
  FOOD_INSPECTION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/feedsMedical/foodInspection', params)
  },
  /** -------------食品药品 & 药品---------------**/
  DISTRICT_OF_MEDICAL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/feedsMedical/medicalInfo', params)
  },
  /** -------------食品药品 & 医疗器械---------------**/
  MEDICAL_EQUIPEMENT (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/feedsMedical/medicalEquipment', params)
  },
  /** -------------市场主体---------------**/
  /** -------------市场主体概况和年构成信息---------------**/
  SUBJECT_SURVEY (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/subject/overviewAndComposition', params)
  },
  /** -------------市场主体前五排行+市场主体年度变化---------------**/
  SUBJECT_TOP5 (vm, params) { // data2左 data1右
    return vm.$axios.post(BASE_PATH + 'screen/subject/annualTrendAndIndustry', params)
  },
  /** -------------市场主体月新增概况、月新增主体结构分析---------------**/
  SUBJECT_MOUTHADD (vm, params) { // data2左 data1右
    return vm.$axios.post(BASE_PATH + 'screen/subject/compositionAnalysisOfMonth', params)
  },
  /** -------------行业类型分布 + 月增长趋势---------------**/
  SUBJECT_SIXMOUTH (vm, params) { // data2左 data1右
    return vm.$axios.post(BASE_PATH + 'screen/subject/monthlyTrendAndIndustry', params)
  },
  /** -------------市场主体---------------**/
  GET_LOCATIONS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/marketRegulation/locationOfDistrict', params)
  },

  /** ---------------------------------------市场监管-----------------------------------------**/
  /** -------------地图点位数据---------------**/
  MARKET_MAINMAP (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/marketRegulation/districtOfSubject', params)
  },
  /** -------------市场主体概况---------------**/
  MARKET_MAIN (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/marketRegulation/subjectInfo', params)
  },
  /** -------------双随机一公开---------------**/
  MARKET_DOUBLEVIEW (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/marketRegulation/doubleRandomInfo', params)
  },
  /** -------------食品药品情况---------------**/
  MARKET_FOODMEDICINAL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/marketRegulation/foodAndDrugInfo', params)
  },
  /** -------------特种设备 + 行政执法---------------**/
  MARKET_DEVICEAREA (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/marketRegulation/districtOfEquipmentAndCase', params)
  },
  /// 查询双随机情况明细
  QUERY_RANDOM_DETAIL_INFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/marketRegulation/queryRandomDetailInfo', params)
  },
  // 主体详情
  QUERY_MAIN_INFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/subject/queryMainInfo', params)
  },
  // 企业分类
  QUERY_BUSINESS_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/subject/queryBusinessType', params)
  },
  // 食品药品医疗器械详情
  QUERY_GOODS_DETAINLS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/feedsMedical/queryGoodsDetailed', params)
  },

  /// /市场监管 主页  地图区县主体数据
  QUERY_MAP_DATA (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/marketRegulation/queryMapData', params)
  },
  /// 根据区县  查询主体信息
  QUERY_DATA_INFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/marketRegulation/queryDataInfo', params)
  },
  ///  食品药品 地图信息
  QUERY_MAP_INFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/feedsMedical/queryMapinfo', params)
  }

}
