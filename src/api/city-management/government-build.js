/*
 * @description: 政务建设
 * @Author: chenqy
 * @Date: 2020-03-12
 * @Last Modified by: chenqy
 * @Last Modified time: 2020-03-12
 */
import BASE_PATH from '@/api/basePath'
// 政务服务 -- 获取非图表信息
const queryInfos = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/government/queryInfos', params)
}
// 政务服务 -- 获取图表信息
const queryCharts = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/government/queryCharts', params)
}
// 政务服务 -- 查询指定区县预警列表
const queryPunishment = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/government/queryWarning', params)
}
// 政务服务 -- 查询指定区县督办列表
const queryPoints = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/government/querySupervision', params)
}
// 政务服务 -- 获取实时空气质量
const queryRealTime = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/air/queryRealTime', params)
}
// 政务服务 -- 查询指定区县超时列表
const queryOvertime = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/air/queryOvertime', params)
}
// 政务服务 -- 查询指定区县行政事项列表
const queryAdministration = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/air/queryAdministration', params)
}
// 查询区县业务办理情况
const queryDistrictEvent = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/government/queryDistrictEvent', params)
}
// 查询业务办理情况月情况变化
const QUERY_EVENT_HANDLE = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/government/queryEventHandle', params)
}
// 查询业务办理情况月情况变化
const QUERY_HANDLING_DEPTHT = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/government/queryHandlingDeptht', params)
}
export {
  queryInfos,
  queryCharts,
  queryPunishment,
  queryPoints,
  queryRealTime,
  queryOvertime,
  queryAdministration,
  queryDistrictEvent,
  QUERY_EVENT_HANDLE,
  QUERY_HANDLING_DEPTHT
}
