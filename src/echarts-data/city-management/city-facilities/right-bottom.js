/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-12 11:13:19
 * @LastEditors: wanglong
 * @LastEditTime: 2020-05-12 10:50:28
 */
import echarts from 'echarts'
function returnData (data) {
  let xData = []
  let yData = []
  // data = data.splice(data.length / 2, 6)
  data.forEach(element => {
    xData.push(element.date)
    yData.push(+element.weight)
  })
  let options = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      // axisPointer: {
      //   type: 'line'
      // },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    // legend: {
    //   right: '15%',
    //   top: '2%',
    //   itemWidth: 20 * window.$rem,
    //   itemHeight: 7 * window.$rem,
    //   icon: 'roundRect',
    //   textStyle: {
    //     color: '#FFFFFF',
    //     fontSize: 17 * window.$rem
    //   },
    //   data: ['处理量']
    // },
    grid: {
      left: '0%',
      right: '0%',
      top: '15%',
      bottom: '20%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: xData,
        axisTick: {
          show: false,
          alignWithLabel: false
        },
        offset: 10,
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#8CF0FC'
          }
        },
        axisLabel: {
          margin: 5 * window.$rem,
          fontSize: 14 * window.$rem,
          interval: 0,
          color: '#FFFFFF',
          rotate: 45
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '(万吨)',
        nameGap: 15 * window.$rem,
        nameTextStyle: {
          color: '#fff',
          fontSize: 13 * window.$rem,
          align: 'right'
        },
        axisLabel: {
          formatter: '{value}',
          color: '#FFFFFF',
          margin: 10 * window.$rem,
          fontSize: 15 * window.$rem
        },
        axisPointer: {
          type: 'shadow'
        },
        interval: 0.5,
        axisLine: {
          lineStyle: {
            color: '#8CF0FC'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '垃圾倾倒量',
        type: 'line',
        //  barWidth: 20 * window.$rem,
        symbol: 'circle',
        smooth: true,
        symbolSize: '0',
        smoth: true,
        lineStyle: {
          width: 2 * window.$rem
        },
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#4EB4DE'
            }, {
              offset: 1,
              color: '#307FF3'
            }])
          }
        },
        data: yData
      }
    ]
  }
  return options
}
export default returnData
