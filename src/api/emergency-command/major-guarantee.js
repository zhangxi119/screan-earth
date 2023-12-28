/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-14 11:28:40
 * @LastEditors: luoxi
 * @LastEditTime: 2020-03-26 16:12:14
 */
import BASE_PATH from '@/api/basePath'
export default {
  // 获取活动详情
  GET_DETAILS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/activity/queryActivityList', params)
  },
  // 动保障人员信息查询
  QUERY_ENSUREMAN (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/activity/queryEnsureMan', params)
  },
  // 查询检测点位信息
  QUERY_KEYMONIOR (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/activity/queryKeyMonior', params)
  },
  // 查询预警信息
  QUERY_WARNINFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/activity/queryWarnInfo', params)
  },
  // 查询一定范围应急资源展示
  QUERY_EMERGENCYINFOBYID (vm, params) {
    return vm.$axios.post(BASE_PATH + 'queryEmergencyInfoByid ', params)
  },
  // 查询重要视频点位信息
  QUERY_VIDEO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/activity/querVideo ', params)
  },
  // 天气预报
  QUERY_WEATHER_INFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/weather/forecast2', params)
  },
  // 应急资源展示
  QUERY_START_EMERGENCY (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/activity/queryStartEmergency', params)
  },
  // 查询活动区域
  QUERY_ACTIVITY (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/activity/queryActivityArea', params)
  },
  // 查询安保人员信息
  QUERY_SECURITY (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/activity/queryActivityEnsureMan', params)
  },
  // 根据类型查询应急物资点位
  WAREHOUSE_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/activity/warehouseByType', params)
  },
  // 根据类型查询应急救援队伍
  EMERGENCY_TEAM_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/activity/emergencyTeamByType', params)
  },
  // 查询转移安置点点位信息
  SHELTER_LIST (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/activity/shelterList', params)
  },
  // §12根据类型查询社会保障力量
  SOCIAL_RESOURECE_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/activity/socialResourceByType', params)
  },
  // 根据类型查询重点防护目标
  MAJOR_PROJECTTION_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/activity/majorProtectionByType', params)
  },
  // §14根据类型重大危险源点位信息
  HAZARD_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/activity/hazardByType', params)
  },
  // §15据类型查询自然灾害监测点位
  MONITORING_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/activity/monitoringByType', params)
  },
  // §16根据类型查询安全隐患点
  SATETY_PRODUCTION_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/activity/safetyProductionByType', params)
  },
  // §17根据类型查询紧急救援
  EMERGENCY_AID_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/activity/emergencyAidByType', params)
  },
  // §18查询点位详情
  DETAIL_OF_LOCATION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/activity/detailOfLocation', params)
  }

}
