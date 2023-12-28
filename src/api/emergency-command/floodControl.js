/*
 * @Descripttion: 防洪应急
 * @Author: chenqy
 * @Date: 2020-04-25
 * @LastEditors: chenqy
 * @LastEditTime: 2020-04-25
 */
import BASE_PATH from '@/api/basePath'
export default {
  // 面板所有数据
  LEGEND_PANEL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/flood/legendPanel', params)
  },
  // 应急专家
  EXPERTS_INFO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/flood/expertsInfo', params)
  },
  // 防汛指挥部、防汛预案信息
  HEADER_QUERTER_AND_CASE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/flood/headerquarterAndCase', params)
  },
  // 预警通知与转移安置能力
  LEFT_DATA (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/flood/leftData', params)
  },
  // 主要河流列表
  RIVER_LIST (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/flood/riverList', params)
  },
  // 根据河流查询站点
  GET_STATION_BY_RIVER (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/flood/getStationByRiver', params)
  },
  // 主要河流水位情况
  ZYHLSW_BY_STATION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/flood/zyhlswByStation', params)
  },
  // 根据类型查询点位降水统计
  DWJSTJ_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/flood/dwjstjByType', params)
  },
  // 根据应急响应等级查询应急预案信息
  QUERY_CASE_INFO_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/flood/queryCaseInfoByType', params)
  },
  // 内涝点位信息
  NL_STATION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/flood/nlStation', params)
  },
  // 根据内涝点位查询视频点位信息
  NL_VIDEOS_ID (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/flood/nlVideosById', params)
  },
  // 查询所有内涝视频点位信息
  NL_VIDEOS_STATION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/flood/nlVideoStations', params)
  },
  // 查询大江大河水位监测点及视频点位
  RIVER_STATION_VIDEO (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/flood/riverStationsAndVideo', params)
  },
  // 根据类型查询应急物资点位
  WAREHOUSE_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/warehouseByType', params)
  },
  // 根据类型查询指挥部点位
  HEADER_QUARTERS_BY_ID (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/headerquartersById', params)
  },
  // 根据类型查询应急救援队伍点位
  EMERGENCY_TEAM_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/emergencyTeamByType', params)
  },
  // 应急转移安置点
  SHELTER_LIST (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/shelterList', params)
  },
  // 根据类型查询社会保障力量点位
  SOCIAL_RESOURECE_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/socialResourceByType', params)
  },
  // 根据类型查询重点防护目标点位
  MAJOR_PROJECTTION_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/majorProtectionByType', params)
  },
  // 根据类型查询重大危险源点位
  HAZARD_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/hazardByType', params)
  },
  // 根据类型查询自然灾害监测位
  MONITORING_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/monitoringByType', params)
  },
  // 根据类型查询安全隐患点
  SATETY_PRODUCTION_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/safetyProductionByType', params)
  },
  // 根据类型查询紧急救援
  EMERGENCY_AID_BY_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/emergencyAidByType', params)
  },
  /** ************点击地图撒点信息查询详细信息************** **/
  DETAIL_OF_LOCATION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/detailOfLocation', params)
  },
  // 视频撒点
  AMB_LOCATION_ALL (vm, params) {
    return vm.$axios.post(BASE_PATH + '/screen/publicHygiene/ambLocationAll', params)
  }
}
