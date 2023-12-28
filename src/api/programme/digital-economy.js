import BASE_PATH from '@/api/basePath'
export default {
  /** ---------------------------------------数字经济-----------------------------------------**/
  /** -------------§1数字经济发展机制---------------**/
  QUERYMECHANISM (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/digitalEconomy/queryMechanism', params)
  },
  /** -------------§1§2招商引资项目---------------**/
  queryInvestmentProjects (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/digitalEconomy/queryInvestmentProjects', params)
  },
  /** -------------§3数字产业化---------------**/
  queryIndustrialPark (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/digitalEconomy/queryIndustrialPark', params)
  },
  /** -------------§4产业数字化---------------**/
  queryCoreIndustry (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/digitalEconomy/queryCoreIndustry', params)
  },
  /** -------------§5数字政府建设情况---------------**/
  queryDigitalGovernment (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/digitalEconomy/queryDigitalGovernment', params)
  },
  /** -------------5G基础建设情况---------------**/
  queryFifthGeneration (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/digitalEconomy/queryFifthGeneration', params)
  },
  /** -------------§8地图数据-数字产业园区---------------**/
  GET_MAP_NUMBERDATA (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/digitalEconomy/queryMapDigitalIndustrialPark', params)
  },
  /** -------------§7地图数据-电子商务---------------**/
  GET_MAP_TECH (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/digitalEconomy/queryMapElectronicCommerce', params)
  }
}
