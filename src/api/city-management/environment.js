/*
 * @description: 生态环境
 * @Author: chenqy
 * @Date: 2020-03-10
 * @Last Modified by: chenqy
 * @Last Modified time: 2020-03-10
 */
import BASE_PATH from '@/api/basePath'
// 生态环境 -- 获取非图表信息
const queryInfos = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/ecology/queryInfos', params)
}
// 生态环境 -- 获取图表信息
const queryCharts = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/ecology/queryCharts', params)
}
// 生态环境 -- 查询指定年份企业处罚信息
const queryPunishment = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/ecology/queryPunishment', params)
}
// 生态环境 -- 查询地图点位信息
const queryPoints = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/ecology/queryPoints', params)
}
// 生态环境 -- 获取实时空气质量
const queryRealTime = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/air/queryRealTime', params)
}
// 水环境 -- 获取非实时信息
const WATERQUERYNOTREALTIME = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/water/queryNotRealTime', params)
}
// 水环境 -- 获取实时信息
const WATERQUERYREALTIME = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/water/queryRealTime', params)
}
// 大气环境 -- 获取实时信息
const AIR = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/air/queryNotRealTime', params)
}
// 大气环境 -- 获取天气情况
const WEATHER = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/weather/forecast2', params)
}
// 生态环境 -- 中间地图点位
const COMPANIES = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/ecology/queryPoints', params)
}
// 生态环境 -- 区县AQI
const AREAAQI = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/ecology/queryAQI', params)
}
// 生态环境 -- 区县监测站点
const AREAPOINTS = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/ecology/queryPoints', params)
}
export default{
  queryInfos,
  queryCharts,
  queryPunishment,
  queryPoints,
  queryRealTime,
  WATERQUERYNOTREALTIME,
  WATERQUERYREALTIME,
  AIR,
  COMPANIES,
  WEATHER,
  AREAAQI,
  AREAPOINTS
}
