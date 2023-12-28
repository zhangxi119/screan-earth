/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-15 10:47:32
 * @LastEditors: hangzhang
 * @LastEditTime: 2020-03-15 15:18:07
 */
import BASE_PATH from '@/api/basePath'

export default {
  /** ---------------------------------------工具条-----------------------------------------**/
  /** -------------获取视频目录接口---------------**/
  GET_CATALOGUE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/toolbarVeios/generCatalogue', params)
  },
  /** -------------获取视频列表---------------**/
  QUERY_VIDEOS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/toolbarVeios/queryVedios', params)
  },
  /** -------------按区域查询视频---------------**/
  QUERY_VIDEO_BY_R (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/toolbarVeios/queryAreaVedios', params)
  },
  /** -------------景区点位信息---------------**/
  E_MEITODAY_OVERALL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/tour/eMeitodayOverall', params)
  },
  /*  /!** -------------乐山大佛---各景点总体信息---------------**!/
  HEART (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/tour/scenicOverall', params)
  }, */
  /** -------------乐山大佛---景区今日总情况---------------**/
  RUN (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/tour/scenicOverall', params)
  }
}
