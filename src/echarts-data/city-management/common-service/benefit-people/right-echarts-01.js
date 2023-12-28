/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-04-03 11:30:30
 * @LastEditors: leizq
 * @LastEditTime: 2020-04-30 00:00:44
 */
// import echarts from 'echarts'
function returnData (data) {
  let seriesData = []
  let legendData = []
  let xData = data.dealTypeList
  data.dealNumList && data.dealNumList.reverse()
  data.dealNumList.forEach((item, index) => {
    seriesData.push({
      name: item.deal,
      type: 'bar',
      barGap: 0,
      barWidth: 14 * window.$rem,
      data: item.dealNumList
    })
    legendData.push(item.deal)
  })
  let option = {
    color: ['#F9E559', '#E27F31', '#3B92F7'],
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
    legend: {
      data: legendData,
      itemGap: 30 * window.$rem,
      itemWidth: 14 * window.$rem,
      itemHeight: 14 * window.$rem,
      right: 50 * window.$rem,
      textStyle: { // 图例文字的样式
        color: '#EFF8FE',
        fontSize: 16 * window.$rem
      }
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {show: false},
        data: xData,
        axisLabel: {
          textStyle: {
            color: '#EFF8FE', // 坐标的字体颜色
            fontSize: 16 * window.$rem,
            lineHeight: 30 * window.$rem
          }
        },
        axisLine: {
          lineStyle: {
            color: '#8CF0FC'// 更改坐标轴颜色
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '(个)',
        nameGap: 15 * window.$rem,
        nameTextStyle: {
          color: 'rgba(255,255,255,0.6)',
          fontSize: 14 * window.$rem,
          align: 'right'
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: ['#ccc'],
            opacity: 0.5
          }
        },
        axisLabel: {
          textStyle: {
            color: '#EFF8FE', // 坐标的字体颜色
            fontSize: 16 * window.$rem
          }
        },
        axisLine: {
          lineStyle: {
            color: '#8CF0FC'// 坐标轴的颜色
          }
        }
      }
    ],
    series: seriesData,
    grid: {
      x: 40 * window.$rem,
      y: 40 * window.$rem,
      x2: 40 * window.$rem,
      y2: 40 * window.$rem,
      borderWidth: 16 * window.$rem
    }
  }
  return option
}
export default returnData
