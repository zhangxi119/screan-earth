/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-06
 * @LastEditors: wanglong
 * @LastEditTime: 2020-05-10 15:10:04
 */

function setData (data) {
  let seriesColor = ['#E93C0D', '#F16527', '#F9E659', '#68D3FF']
  let seriesData = []
  data.data.forEach((item, index) => {
    item.forEach((childrenData, childIndex) => {
      childrenData || (item[childIndex] = 0)
    })
  })
  data.data.forEach((item, index) => {
    seriesData.push(
      {
        name: data.marks[index],
        stack: 'stack',
        type: 'bar',
        barWidth: 20 * window.$rem,
        itemStyle: {
          normal: {
            color: seriesColor[index]
            // color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            //   offset: 0,
            //   color: '#00B6E3'
            // }, {
            //   offset: 1,
            //   color: '#007EFB'
            // }])
          }
        },
        data: item
      }
    )
  })
  let options = {
    tooltip: {
      trigger: 'axis',
      // axisPointer: {
      //   type: 'cross',
      //   crossStyle: {
      //     color: '#999'
      //   }
      // },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    title: {
      text: '(处)',
      textStyle: {
        color: '#fff',
        fontSize: 14 * window.$rem,
        fontWeight: 'normal'
      },
      top: 28 * window.$rem,
      left: 14 * window.$rem
    },
    grid: {
      left: '5%',
      right: '1%',
      top: '25%',
      bottom: 3 * window.$rem,
      containLabel: true
    },
    legend: {
      top: 25 * window.$rem,
      // left: 60 * window.$rem,
      left: 'right',
      itemWidth: 14 * window.$rem,
      itemHeight: 14 * window.$rem,
      itemGap: 10 * window.$rem,
      textStyle: {
        fontSize: 16 * window.$rem,
        padding: [0, 0, 0, 6 * window.$rem],
        color: '#FFFFFF'
      },
      // data: ['一级', '二级', '三级', '四级']
      data: data.marks
    },
    xAxis: [
      {
        type: 'category',
        data: data.xAxis,
        // data: ['煤矿', '危险化学品', '工贸', '非煤矿山', '烟花爆竹'],
        offset: 10,
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisLabel: {
          interval: 0,
          // rotate: 30,
          // rotate: 25,
          // margin: 20 * window.$rem,
          align: 'center',
          color: '#FFFFFF',
          fontSize: 14 * window.$rem,
          lineHeight: 18 * window.$rem,
          formatter: function (params) {
            if (params.length <= 3) { return params }
            var newParamsName = '' // 最终拼接成的字符串
            var paramsNameNumber = params.length // 实际标签的个数
            var provideNumber = 3 // 每行能显示的字的个数
            var rowNumber = Math.ceil(paramsNameNumber / provideNumber) // 换行的话，需要显示几行，向上取整
            /**
             * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
             */
            // 条件等同于rowNumber>1
            if (paramsNameNumber > provideNumber) {
              /** 循环每一行,p表示行 */
              for (var p = 0; p < rowNumber; p++) {
                var tempStr = '' // 表示每一次截取的字符串
                var start = p * provideNumber // 开始截取的位置
                var end = start + provideNumber // 结束截取的位置
                // 此处特殊处理最后一行的索引值
                if (p === rowNumber - 1) {
                  // 最后一次不换行
                  tempStr = params.substring(start, paramsNameNumber)
                } else {
                  // 每一次拼接字符串并换行
                  tempStr = params.substring(start, end) + '\n'
                }
                newParamsName += tempStr // 最终拼成的字符串
              }
            } else {
              // 将旧标签的值赋给新标签
              newParamsName = params
            }
            // 将最终的字符串返回
            return newParamsName
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        // min: 0,
        // max: 300,
        // interval: 5,
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(102, 243, 255, .1)',
            type: 'dotted'
          }
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
