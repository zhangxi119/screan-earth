/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2019-08-29 21:39:20
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-26 14:51:57
 */
export default {
  state () {
    return {
      CURSOR: false,
      RECURSION: null, // 递归选中对象
      areaName: {name: '乐山市', totalName: '乐山市'},
      isTHREE: false, // 是否3维
      crossMakers: [], // 3维越界makers
      isload: 1,
      PRELOAD: 0, // 最佳路径距离
      isLoadMap: false, // 是否加载完地图
      isLogin: 0,
      isTOUR: false, // 景点显示高度
      selectTourName: '' // tourName
    }
  },
  getters: {
    GET_TourName (state) {
      return state.selectTourName
    },
    GET_isTOUR (state) {
      return state.isTOUR
    },
    GET_isLogin (state) {
      let isLogin = state.isLogin
      if (!state.isLogin) {
        isLogin = parseInt(sessionStorage.getItem('isLogin'))
      }
      return isLogin
    },
    GET_ISLOADMAP (state) {
      let isLoadMap = state.isLoadMap
      return isLoadMap
    },
    GET_RECURSION (state) {
      let recursion = state.RECURSION
      return recursion
    },
    GET_IS_THREE (state) {
      return state.isTHREE
    },
    GET_CROSS_MAKERS (state) {
      return state.crossMakers
    },
    get_areaName (state) {
      let areaName = state.areaName
      return areaName
    },
    GET_CURSOR (state) {
      let CURSOR = state.CURSOR
      return CURSOR
    },
    GET_PRELOAD (state) {
      let PRELOAD = state.PRELOAD
      return PRELOAD
    }
  },
  mutations: {
    SET_TourName (state, selectTourName) {
      state.selectTourName = selectTourName
    },
    SET_isTOUR (state, isTOUR) {
      state.isTOUR = isTOUR
    },
    SET_isLogin (state, isLogin) {
      state.isLogin = isLogin
      sessionStorage.setItem('isLogin', JSON.stringify(isLogin))
    },
    SET_ISLOADMAP (state, isLoadMap) {
      state.isLoadMap = isLoadMap
    },
    SET_PRELOAD (state, PRELOAD) {
      state.PRELOAD = PRELOAD
    },
    SET_RECURSION (state, recursion) {
      state.RECURSION = recursion
    },
    set_areaName (state, recursion) {
      state.areaName = recursion
    },
    SET_IS_THREE (state, isTHREE) {
      state.isTHREE = isTHREE
    },
    SET_CROSS_MAKERS (state, crossMakers) {
      state.crossMakers = crossMakers
    },
    set_isload (state, val) {
      state.isload = val
    },
    SET_CURSOR (state, CURSOR) {
      state.CURSOR = CURSOR
    }
  }
}
