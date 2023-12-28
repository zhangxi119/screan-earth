/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-18 11:03:34
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-18 19:14:37
 */
import echarts from 'echarts'
function returnData (data) {
  console.log(data)
  let xData = []
  let sData = []
  let sData1 = []
  let sData2 = []
  data.forEach(item => {
    sData1.push(item.value_done)
    sData2.push(item.value_not)
    xData.push(item.name)
  })
  sData.push({
    type: 'bar',
    name: '超期已办结',
    barWidth: 16 * window.$rem,
    stack: 'two',
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#007EFB'
        }, {
          offset: 1,
          color: '#00E7FF'
        }])
      }
    },
    data: sData1
  }, {
    type: 'bar',
    barWidth: 16 * window.$rem,
    stack: 'two',
    name: '超期未办结',
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#DB3C25'
        }, {
          offset: 1,
          color: '#FF8D1E'
        }])
      }
    },
    data: sData2
  })
  console.log(xData)
  let option = {
    legend: {
      textStyle: {
        color: 'white',
        fontSize: 16 * window.$rem
      },
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      right: 40 * window.$rem,
      top: 20 * window.$rem,
      // eslint-disable-next-line standard/array-bracket-even-spacing
      data: ['超期已办结', '超期未办结'],
      itemGap: 30 * window.$rem
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    grid: {
      left: '10%',
      right: '5%',
      bottom: '20%',
      top: '20%',
      containLabel: false
    },
    yAxis: {
      type: 'value',
      boundaryGap: true,
      name: '(件)',
      nameGap: 20 * window.$rem,
      nameTextStyle: {
        color: '#FFFFFF',
        fontSize: 14 * window.$rem,
        align: 'right',
        padding: [50 * window.$rem, 0, 0, 0]
      },
      show: true,
      axisLabel: {
        color: '#ffffff',
        margin: 17 * window.$rem,
        fontSize: 14 * window.$rem
      },
      axisLine: {
        lineStyle: {
          color: '#66F3FF'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        interval: 0,
        rotate: 25,
        margin: 15 * window.$rem,
        color: '#FFFFFF',
        fontSize: 13 * window.$rem
      },
      axisLine: {
        lineStyle: {
          color: '#66F3FF'
        }
      },
      data: xData
    },
    series: sData
  }
  return option
}
export default returnData
