/*
 * @description: 经济运行模块接口
 * @Author: chenqy
 * @Date: 2020-03-05
 * @Last Modified by: chenqy
 * @Last Modified time: 2020-03-05
 */
import BASE_PATH from '@/api/basePath'
/** ---------------------------------------总部三基地-----------------------------------------**/
// 一总部三基地 --- 概况、规上企业和重大项目
const QUERY_SURVEY = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/headquartersBase/querySurvey', params)
}
// 一总部三基地 --- 获取地图数据
const QUERY_INTRODUCTIONS = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/headquartersBase/queryIntroduction', params)
}
// 一总部三基地 --- 获取单项数据分析echart图形数据
const QUERY_ANALYSIS = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/headquartersBase/queryAnalysis', params)
}
// 一总部三基地 --- 获取近三年主要指标情况数据
const QUERY_THREEDATA = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/headquartersBase/queryThreeData', params)
}
/** ---------------------------------------乐山市宏观经济综合概况-----------------------------------------**/
/** -------------通过区县名字获取详情---------------**/
const MACRO_MAPDETAIL = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/macroEconomy/mapInfo', params)
}
/** -------------2015-2019年地区生产总值增长趋势 + 2015-2019年三次产业增加值占生产总值比重(%)---------------**/
const MACRO_DEVELOP = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/macroEconomy/mainIndicators', params)
}
/** -------------财政收支情况---------------**/
const MACRO_INCOME = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/macroEconomy/finance', params)
}
/** -------------投资与进出口情况---------------**/
const MACRO_INOUT = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/macroEconomy/importAndExport', params)
}
/** -------------资源生活保障---------------**/
const MACRO_SOURCEBASE = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/macroEconomy/resources', params)
}
/** -------------旅游收入情况---------------**/
const MACRO_GETTOURISMREVENUE = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/macroEconomy/getTourismRevenue', params)
}
/** -------------人民生活和社会保障---------------**/
const MACRO_PEOPLESURE = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/macroEconomy/lifeAndSecurity', params)
}
const QUERY_THREE_DATA = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/headquartersBase/queryThreeData', params)
}
/** ---------------------------------------重大项目-----------------------------------------**/
// 获取表格&list接口数据
const PEOJECT_QUERY_SURVEY = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/majorProjects/querySurvey', params)
}
// 获取echart图形接口数据
const PEOJECT_QUERY_ANALYSIS = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/majorProjects/queryAnalysis', params)
}
// 点击地图获取区县数据
const PEOJECT_QUERY_MAPINFO = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/majorProjects/mapInfo', params)
}
// 点击地图获取点位数据
const PEOJECT_POINT_DATA = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/majorProjects/pointData', params)
}
// 点击点位获取项目详情数据
const PEOJECT_QUERY_DETAILS = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/majorProjects/queryDetails', params)
}
// 点击建设批次 显示弹窗
const PEOJECT_QUERY_ENTRY_NAMES = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/majorProjects/queryEntryNames', params)
}
// 热力图
const PEOJECT_QUERY_HEATMAP = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/majorProjects/queryHeatMap', params)
}
// 获取地图柱状图项目类型获取对应项目列表
const queryMapClickNames = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/majorProjects/queryMapClickNames', params)
}
const QUERY_PROJECT_SITUATION = (vm, params) => {
  return vm.$axios.post(BASE_PATH + 'screen/majorProjects/queryProjectSituation', params)
}
export {
  QUERY_SURVEY,
  QUERY_INTRODUCTIONS,
  QUERY_ANALYSIS,
  MACRO_DEVELOP,
  MACRO_INCOME,
  MACRO_INOUT,
  MACRO_SOURCEBASE,
  MACRO_GETTOURISMREVENUE,
  MACRO_PEOPLESURE,
  QUERY_THREE_DATA,
  QUERY_THREEDATA,
  MACRO_MAPDETAIL,
  PEOJECT_QUERY_SURVEY,
  PEOJECT_QUERY_ANALYSIS,
  PEOJECT_QUERY_MAPINFO,
  PEOJECT_POINT_DATA,
  PEOJECT_QUERY_DETAILS,
  PEOJECT_QUERY_ENTRY_NAMES,
  PEOJECT_QUERY_HEATMAP,
  queryMapClickNames,
  QUERY_PROJECT_SITUATION
}
