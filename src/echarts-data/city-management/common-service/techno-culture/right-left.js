/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-04-09 22:32:57
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-15 11:37:12
 */
function returnData (data) {
  let colorIndex = ['#2266E4', '#6BE673', '#F9E659']
  let legendData = []
  let seriesData = []
  data.forEach((item, index) => {
    legendData.push(item.enterType)
    seriesData.push({
      value: item.num,
      name: item.enterType,
      itemStyle: {color: colorIndex[index]}
    })
  })
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}家 ({d}%)',
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
      bottom: '12%',
      left: '10%',
      data: legendData,
      itemHeight: 15 * window.$rem,
      itemWidth: 15 * window.$rem,
      icon: 'rect',
      itemGap: 18 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 17 * window.$rem
      },
      formatter (name) {
        let index = seriesData.findIndex((item) => {
          return item.name === name
        })
        let num = index > -1 ? seriesData[index].value : 0
        return ' ' + name + ' ' + num + '家'
      }
    },
    series: [
      {
        name: '科技型高新科技企业情况',
        type: 'pie',
        radius: ['60%', '75%'],
        center: ['50%', '30%'],
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
