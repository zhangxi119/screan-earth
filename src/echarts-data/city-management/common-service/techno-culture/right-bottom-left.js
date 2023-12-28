/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-04-09 22:32:57
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-15 11:37:01
 */
function returnData (data) {
  let legendData = []
  let seriesData = []
  let colorIndex = ['#EF8432', '#F9E659', '#6BE673']
  data.forEach((item, index) => {
    legendData.push(item.relicType)
    seriesData.push({value: item.num, name: item.relicType, itemStyle: {color: colorIndex[index]}})
  })
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}个 ({d}%)',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    legend: {
      orient: 'vertical',
      top: 80 * window.$rem,
      right: 0,
      data: legendData,
      itemHeight: 15 * window.$rem,
      itemWidth: 15 * window.$rem,
      icon: 'rect',
      itemGap: 18 * window.$rem,
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
        return '  ' + name + ' ' + num + '个'
      }
    },
    series: [
      {
        name: '非遗文化分析',
        type: 'pie',
        radius: ['60%', '75%'],
        center: ['38%', '50%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: false,
            textStyle: {
              fontSize: 30 * window.$rem,
              fontWeight: 'bold'
            }
          }
        },

        labelLine: {
          normal: {
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
