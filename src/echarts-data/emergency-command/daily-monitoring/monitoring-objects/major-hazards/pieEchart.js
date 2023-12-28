/*
 * @Author: zhangxi
 * @Date: 2020-02-27 17:06:20
 * @Last Modified by: zhangxi
 * @Last Modified time: 2020-03-02 14:18:14
 */
// import echarts from 'echarts'
function setData (data) {
  let seriesData = []
  let totalData = 0
  let itemStyleList = ['#E93C0D', '#F16527', '#F9E659', '#68D3FF']
  data.forEach((item, index) => {
    totalData += item.value
    seriesData.push({
      value: item.value,
      name: item.name,
      itemStyle: {
        color: itemStyleList[index]
      }
    })
  })
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    color: ['#E93C0D', '#F16527', '#F9E659', '#68D3FF'],
    title: [
      {
        text: totalData,
        x: 'center',
        y: '30%',
        textStyle: {
          color: 'rgba(250,252,255,1)',
          textShadowColor: 'rgba(149,229,252,0.28)',
          textShadowOffsetX: 0,
          textShadowOffsetY: 1,
          textShadowBlur: 10 * window.$rem,
          fontSize: 26 * window.$rem,
          fontStyle: 'italic',
          fontFamily: 'Impact',
          fontWeight: 'normal'
        }
      },
      {
        text: '总量',
        x: '40%',
        y: '45%',
        textStyle: {
          color: 'rgba(223,226,251,1)',
          fontSize: 20 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      },
      {
        text: '(处)',
        x: '53%',
        y: '47%',
        textStyle: {
          color: 'rgba(223,226,251,0.72)',
          fontSize: 14 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      }
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    calculable: true,
    series: [
      {
        name: '等级分布',
        type: 'pie',
        radius: [55 * window.$rem, 75 * window.$rem],
        center: ['50%', '41%'],
        label: {
          show: false
        },
        emphasis: {
          show: false,
          textStyle: {
            fontSize: 20 * window.$rem,
            fontWeight: 'bold'
          }
        },
        data: seriesData
      }
    ]
  }
  return option
}

export default setData
