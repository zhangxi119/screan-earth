/*
 * @Descripttion:  市场监管地推操作
 * @Author: wanglong
 * @Date: 2020-04-08 15:18:27
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-13 11:46:17
 */
import API from './marketSupervisionMapApi'
export default {
  marketPanelSelect (item, name) {
    // this.activeMenuName
    try {
      if (this.activeMenuName !== name) {
        this.activeMenuName = name
      }
      window._m && window._m.removeHeatPointMap && window._m.removeHeatPointMap([], true)
      // window._m && window._m.clear && window._m.clear()
      let param
      switch (name) {
        case '市场主体':
          param = item.join(',')
          // window._m && window._m.clear && window._m.clear()
          break
        case '食品药品':
          param = item.join('')
          break
      }
      console.time('LOCATION_DISTRICT')
      API.LOCATION_DISTRICT(this, {id: param}).then((res) => {
        res = res.data
        if (res.serviceSuccess) {
          let list = res.data.data
          if (list.length > 0) {
            let arr = []
            for (let i of list) {
              arr.push({
                x: +i.lon,
                y: +i.lat,
                value: 10
              })
            }
            window._m && window._m.addHeatPointMap && window._m.addHeatPointMap('marketMap' + item.join(''), arr)
            console.timeEnd('LOCATION_DISTRICT')
          }
        }
      })
    } catch (error) {
      console.log('error', error)
    }
  }
}
