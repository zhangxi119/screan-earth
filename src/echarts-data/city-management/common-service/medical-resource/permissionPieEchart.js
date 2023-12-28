/*
 * @Descripttion:
 * @Author: renting
 * @Date: 2020-03-16 9:12:20
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-07 11:29:51
 */

function retrunData (param) {
  let lData = []
  let sData = []
  param.forEach(item => {
    lData.push(item.licenseType)
    sData.push({name: item.licenseType, value: item.num})
  })
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}(件)   {d}%',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    grid: {
      top: 23 * window.$rem
    },
    legend: {
      bottom: 0,
      left: 0,
      right: 0,
      // orient: 'vertical',
      data: lData,
      itemHeight: 13 * window.$rem,
      itemWidth: 13 * window.$rem,
      itemGap: 10 * window.$rem,
      height: 20 * window.$rem,
      borderRadius: 2,
      // padding: 7.5 * window.$rem,
      formatter: function (name) {
        let data2 = option.series[0].data
        let total = 0
        let tarValue = 0
        for (let i = 0, l = data2.length; i < l; i++) {
          total += data2[i].value
          if (data2[i].name === name) {
            tarValue = data2[i].value
            name = data2[i].name
          }
        }
        let p = (tarValue / total * 100).toFixed(2)
        let arr = [name + '  ' + p + '%']
        return arr.join(' ')
      },
      textStyle: {
        padding: [0, 0, 0, 5 * window.$rem],
        color: '#FFFFFF',
        fontSize: 14 * window.$rem
      }
    },
    calculable: true,
    color: [
      '#3B91F7',
      '#5FC372',
      '#EF8432',
      '#F9E659',
      '#9FFCDD',
      '#4b25e9'
    ],
    series: [
      {
        type: 'pie',
        radius: ['10%', '60%'],
        center: ['50%', '33%'],
        roseType: 'area',
        label: {
          normal: {
            color: '#FFF',
            formatter: '{c}件',
            fontSize: 16 * window.$rem
          }
        },
        labelLine: {
          length: 8 * window.$rem,
          length2: 0
        },
        data: sData
      }
    ]
  }
  return option
}
export default retrunData
