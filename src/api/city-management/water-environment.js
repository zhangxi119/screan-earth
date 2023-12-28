import BASE_PATH from '@/api/basePath'
export default {
  queryNotRealTime (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/water/queryNotRealTime', params)
  },
  queryRealTime (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/water/queryRealTime', params)
  }
}
