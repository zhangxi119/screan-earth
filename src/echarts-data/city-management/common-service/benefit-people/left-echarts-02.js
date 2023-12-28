/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-04-03 11:30:30
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-07 09:22:52
 */
function returnOption (data) {
  console.log(data)
  data = data.sort((b, a) => { return a.value - b.value })
  let colorIndex = ['#2A71E4', '#F9E559']
  let seriesData = []
  let legendData = []
  // let num = 0
  data.forEach((item, index) => {
    seriesData.push({
      value: item.value,
      name: item.name,
      itemStyle: {
        color: colorIndex[index]
      }
    })
    legendData.push(item.name)
  })
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: ({d}%)',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      },
      position: 'right'
    },
    legend: {
      orient: 'vertical',
      right: 40 * window.$rem,
      itemWidth: 14 * window.$rem,
      itemHeight: 14 * window.$rem,
      top: 'center',
      data: legendData,
      selectedMode: false,
      itemGap: 20 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        padding: [0, 0, 0, 8 * window.$rem],
        fontSize: 16 * window.$rem
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['65%', '85%'],
        center: ['30%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: false,
            fontSize: '30',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: seriesData
      }
    ]
  }
  return option
}

export default returnOption
