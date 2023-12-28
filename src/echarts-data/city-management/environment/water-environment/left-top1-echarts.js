/*
 * @Descripttion:
 * @Author: wangting
 * @Date: 2020-04-13 14:12:32
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-14 11:52:00
 */
function returnOption (data) {
  let colorIndex = ['#2E70E4', '#66DEF8', '#6BE673', '#F1E44D', '#E28031', '#DC3421']
  let seriesData = []
  let legendData = []
  data.forEach((item, index) => {
    seriesData.push({
      value: item.value,
      name: item.name,
      itemStyle: {
        color: colorIndex[index]
      },
      emphasis: {
        label: {
          show: false,
          fontSize: 17 * window.$rem,
          fontWeight: 'bold',
          formatter: '{b}: {d}%'
        }
      },
      label: {
        show: false,
        position: 'center',
        formatter: '{d}%',
        fontSize: 12 * window.$rem
      },
      labelLine: {show: false}
    })
    legendData.push(item.name)
  })
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)',
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
      right: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      itemWidth: 15 * window.$rem,
      itemGap: 15 * window.$rem,
      textStyle: {
        color: 'white',
        fontSize: 17 * window.$rem
      },
      data: legendData
    },
    series: [
      {
        name: '水质级别构成',
        type: 'pie',
        center: ['40%', '45%'],
        radius: ['60%', '80%'],
        data: seriesData
      }
    ]
  }
  return option
}
export default returnOption
