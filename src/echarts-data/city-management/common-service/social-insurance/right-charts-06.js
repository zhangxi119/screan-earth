/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-21 10:28:58
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-21 21:45:46
 */
import echarts from 'echarts'
function setData (data) {
  let legendData = data.typeList
  let xAxisData = []
  let seriesData = []
  let level1 = []
  let level2 = []
  let level3 = []
  let areaStyleList = [
    {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(102,210,229,0.5)'
        }, {
          offset: 1,
          color: 'rgba(102,210,229,0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    }, {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(105,213,159, 0.5)'
        }, {
          offset: 0.8,
          color: 'rgba(105,213,159, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10 * window.$rem
      }
    },
    {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(105,213,159, 0.5)'
        }, {
          offset: 0.8,
          color: 'rgba(105,213,159, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10 * window.$rem
      }
    }
  ]
  data.yearTypeNumList.forEach((item, index) => {
    let arr = item.year.split('')
    let str = ''
    arr.forEach((item, index) => {
      if (index === 4) {
        str += '-'
      }
      str += item
    })
    xAxisData.push(str)
    item.peopleNumList.forEach((newItem, newIndex) => {
      switch (newIndex) {
        case 0:
          level1.push(newItem)
          break
        case 1:
          level2.push(newItem)
          break
        case 2:
          level3.push(newItem)
          break
      }
    })
  })
  let seriesArr = [level1, level2, level3]
  legendData.forEach((item, index) => {
    seriesData.push(
      {
        name: item,
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5 * window.$rem,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: areaStyleList[index],
        itemStyle: {
          normal: {
            // color: 'rgba(102,210,229,1)',
            // borderColor: 'rgba(102,210,229,1)',
            // borderWidth: 12 * window.$rem

          }
        },
        data: seriesArr[index]
      }
    )
  })

  let options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#57617B'
        }
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    color: ['#00D0F5', '#7BF9D5', '#FFE600'],
    legend: {
      icon: 'rect',
      itemWidth: 14 * window.$rem,
      itemHeight: 5 * window.$rem,
      itemGap: 13 * window.$rem,
      data: legendData,
      top: 5 * window.$rem,
      left: 'center',
      textStyle: {
        padding: [0, 0, 0, 6 * window.$rem],
        fontSize: 17 * window.$rem,
        color: '#F1F1F3'
      }
    },
    grid: {
      left: '3%',
      right: '0%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      // boundaryGap: false,
      axisLabel: {
        color: '#FFFFFF',
        margin: 10 * window.$rem,
        interval: 0,
        textStyle: {
          fontSize: 14 * window.$rem
        }
      },
      axisLine: {
        lineStyle: {
          color: '#85E4FF'
        }
      },
      data: xAxisData
    }],
    yAxis: [{
      type: 'value',
      name: '（人）',
      nameTextStyle: {
        padding: [0, 0, 10 * window.$rem, -35 * window.$rem],
        fontSize: 14 * window.$rem,
        color: '#fff',
        align: 'right'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#57617B'
        }
      },
      axisLabel: {
        color: '#FFFFFF',
        margin: 10 * window.$rem,
        textStyle: {
          fontSize: 14 * window.$rem
        }
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'rgba(102, 243, 255, .1)'
        }
      }
    }],
    series: seriesData
  }
  return options
}

export default setData
