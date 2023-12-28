/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-02 16:35:04
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-28 14:12:52
 */
function setData (data) {
  let legendData = data.typeList
  let xAxisData = []
  let seriesData = []
  let level1 = []
  let level2 = []
  let level3 = []
  let level4 = []
  let level5 = []
  let level6 = []
  let areaStyleList = [
    '#0064EC',
    '#0AD192',
    '#FCE62F',
    '#E55711',
    '#00E1FC',
    '#6612FF'
  ]
  data.yearTypeNumList.forEach((item, index) => {
    // xAxisData.push(item.year)
    let arr = item.year.split('')
    let str = ''
    arr.forEach((item, index) => {
      if (index === 4) {
        str += '-'
      }
      str += item
    })
    xAxisData.push(str)
    try {
      item.moneyNumList.forEach((nItem, newIndex) => {
        let newItem = (nItem / 10000).toFixed(1)
        switch (newIndex) {
          case 0:
            level1.push(newItem)
            break
          case 1:
            level2.push(newItem)
            break
          case 2:
            level4.push(newItem)
            // level3.push(newItem)
            break
          case 3:
            level3.push(newItem)
            // level4.push(newItem)
            break
          case 4:
            level5.push(newItem)
            break
          case 5:
            level6.push(newItem)
            break
        }
      })
    } catch (e) {
      console.lpg(e)
    }
  })
  let seriesArr = [level1, level2, level3, level4, level5, level6]
  legendData.forEach((item, index) => {
    seriesData.push(
      {
        name: item,
        type: 'bar',
        barGap: 0,
        barWidth: 10 * window.$rem,
        itemStyle: {
          normal: {
            color: areaStyleList[index]
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
        animation: false
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
      top: 30 * window.$rem,
      left: 'center',
      itemHeight: 14 * window.$rem,
      itemWidth: 14 * window.$rem,
      textStyle: {
        padding: [0, 0, 0, 2 * window.$rem],
        color: '#FFFFFF',
        fontSize: 17 * window.$rem
      },
      // data: ['基金', '门诊', '门诊特殊疾病', '药店', '门统', '住院']
      data: legendData
    },
    grid: {
      left: '1%',
      right: '1%',
      bottom: '5%',
      top: '20%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: xAxisData,
        position: 'bottom',
        offset: 0,
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisLabel: {
          rotate: 20,
          margin: 20 * window.$rem,
          color: '#FFFFFF',
          fontSize: 15 * window.$rem
        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        name: '（万元）',
        nameTextStyle: {
          padding: [0, 0, 2 * window.$rem, -38 * window.$rem],
          fontSize: 14 * window.$rem,
          color: '#fff',
          align: 'right'
        },
        min: 0,
        max: 250000,
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dotted',
            color: 'rgba(102, 243, 255, .1)'
          }
        },
        axisLabel: {
          formatter: '{value}',
          color: '#FFFFFF',
          fontSize: 15 * window.$rem
        },
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: seriesData
  }
  return options
}

export default setData
