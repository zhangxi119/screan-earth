/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-08 10:05:12
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-17 10:03:30
 */
// 各区域规划面积
function returnData (data) {
  let xData = []
  let sData = []
  data.forEach(item => {
    xData.push(item.zy07003)
    sData.push(item.zy07004)
  })
  let option = {
    color: ['#3398DB'],
    title: {
      text: '(个)',
      textStyle: {
        color: '#FFF',
        fontSize: 14 * window.$rem
      },
      top: 10 * window.$rem,
      left: 30 * window.$rem
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10, 20],
      textStyle: {
        fontSize: 17 * window.$rem
      },
      formatter: function (data) {
        let str = `<div>${data[0].name}</div>`
        if (data.length > 0) {
          for (let i of data) {
            switch (i.seriesIndex) {
              case 0:
                str += `${i.seriesName}: ${i.value} 个<br>`
                break

              case 1:
                str += `${i.seriesName}: ${i.value} 个<br>`
                break
              default:
                str += ''
            }
          }
        }
        return str
      }
    },
    grid: {
      top: 50 * window.$rem,
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        offset: 10 * window.$rem,
        data: xData,
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisLabel: {
          color: '#fff',
          fontSize: 15 * window.$rem,
          // interval: 0,
          rotate: 30
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        // min: 0,
        // max: 8000,
        // interval: 100,
        axisLabel: {
          color: '#fff',
          fontSize: 15 * window.$rem
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#2B2E3D',
            type: 'dashed'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        }
      }
    ],
    series: [
      {
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#F6C46B'
            }, {
              offset: 1, color: '#EF8432'
            }]
          }
        },
        name: '特种设备数量',
        type: 'bar',
        barWidth: 20 * window.$rem,
        data: sData
      }
    ]
  }
  return option
}
export default returnData
