/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-04-09 22:32:57
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-14 21:01:09
 */
function returnData (data) {
  let legendData = []
  let seriesData = []
  let colorIndex = ['#4BAEDD', '#5FC372', '#EF8432', '#9FFCDD']
  data.forEach((item, index) => {
    legendData.push(item.classType)
    seriesData.push({value: item.num, name: item.classType, itemStyle: {color: colorIndex[index]}})
  })
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}处 ({d}%)',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    legend: {
      top: 80 * window.$rem,
      right: 80 * window.$rem,
      orient: 'vertical',
      data: legendData,
      itemGap: 18 * window.$rem,
      itemHeight: 15 * window.$rem,
      itemWidth: 15 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 17 * window.$rem,
        itemHeight: 15 * window.$rem
      },
      formatter (name) {
        let index = seriesData.findIndex((item) => {
          return item.name === name
        })
        let num = index > -1 ? seriesData[index].value : 0
        return '  ' + name + ' ' + num + '处'
      }
    },
    series: [
      {
        name: '文物保护单位分析',
        type: 'pie',
        radius: ['25%', '80%'],
        center: ['25%', '50%'],
        roseType: 'radius',
        label: {
          show: false
        },
        emphasis: {
          label: {
            show: false
          }
        },
        data: seriesData
      }
    ]
  }
  return option
}
export default returnData
