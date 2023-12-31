/*
 * @Author: zhangxi
 * @Date: 2020-02-27 10:21:28
 * @Last Modified by: zhangxi
 * @Last Modified time: 2020-02-27 10:50:27
 */

var options = {
  radar: {
    // shape: 'circle',
    name: {
      textStyle: {
        color: '#999999'
      }
    },
    splitArea: {
      areaStyle: {
        color: ['#fff', '#fff', '#fff', '#fff'],
        shadowColor: 'rgba(0, 100, 0, 0.3)'
      }
    },
    indicator: [
      {name: '行业信息', max: 6500},
      {name: '企业规模', max: 16000},
      {name: '企业信用', max: 30000},
      {name: '创新能力', max: 38000}
    ]
  },
  series: [{
    type: 'radar',
    data: [
      {
        value: [5000, 14000, 28000, 31000],
        name: '数据',
        itemStyle: {
          normal: {
            color: 'rgba(5, 128, 242, 0.8)'
          }
        },
        areaStyle: {
          normal: {
            color: '#0580f2'
          }
        }
      }
    ]
  }]
}
export default options
