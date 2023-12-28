/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-10 10:49:55
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-18 16:49:28
 */

function returnData (data) {
  let color = ['#469FF8', '#E76043', '#7BFBA8']
  let xData = data.yearSet
  let seriesData = []
  for (let key in data.schoolTypeSet) {
    let temp = {
      name: data.schoolTypeSet[key],
      type: 'bar',
      data: data[data.schoolTypeSet[key]],
      barWidth: 12 * window.$rem, // 柱子宽度
      barGap: 1 // 柱子之间间距
      // itemStyle: {
      //   normal: {
      //     color: '#469FF8',
      //     opacity: 1
      //   }
      // }
    }
    seriesData.push(temp)
  }
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
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
    color: color,
    legend: {
      data: data.schoolTypeSet,
      right: 10 * window.$rem,
      textStyle: {
        color: '#fff',
        fontSize: 14 * window.$rem
      },
      itemWidth: 14 * window.$rem,
      itemHeight: 14 * window.$rem,
      itemGap: 35 * window.$rem
    },
    grid: {
      left: '3%',
      right: '4%',
      top: '13%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: xData,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#a8d7de',
          width: 2 * window.$rem,
          type: 'solid'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        margin: 13 * window.$rem,
        textStyle: {
          fontFamily: 'Microsoft YaHei',
          fontSize: 14 * window.$rem,
          color: '#ffffff'
        }
      }
    }],
    yAxis: [{
      type: 'value',
      name: '（人）',
      nameTextStyle: {
        fontSize: 13 * window.$rem,
        color: '#fff',
        padding: [0, 0, 5 * window.$rem, -30 * window.$rem]
      },
      axisLabel: {
        formatter: '{value}',
        textStyle: {
          fontSize: 14 * window.$rem,
          color: '#ffffff'
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#a8d7de',
          width: 1 * window.$rem,
          type: 'solid'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.3)',
          type: 'dashed'
        }
      }
    }],
    series: seriesData
  }
  return option
}
export default returnData
