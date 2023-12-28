/*
 * @Descripttion: 市场监管，市场主体，食品药品，质量技术 4张图的地图操作API
 * @Author: wanglong
 * @Date: 2020-04-08 15:19:22
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-08 15:25:43
 */
import BASE_PATH from '../basePath'
export default {
  // 图例图标
  ICONS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/marketRegulation/icons', params)
  },
  // 点击图例获取热力点位
  LOCATION_DISTRICT (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/marketRegulation/locationOfDistrict', params)
  }
}
