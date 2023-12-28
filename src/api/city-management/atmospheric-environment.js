import BASE_PATH from '@/api/basePath'
export default {
  air (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/air/queryNotRealTime', params)
  }
}
