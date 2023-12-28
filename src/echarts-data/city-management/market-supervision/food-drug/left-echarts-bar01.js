/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-10 11:01:23
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-15 20:57:49
 */
// import echarts from 'echarts'
function createOptions (xdata, data) {
  return {
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
      },
      formatter: function (data) {
        let str = `<div>${data[0].name}</div>`
        if (data.length > 0) {
          for (let i of data) {
            switch (i.seriesIndex) {
              case 0:
                str += `${i.seriesName}: ${i.value} 家次<br>`
                break

              case 1:
                str += `${i.seriesName}: ${i.value} 家次<br>`
                break
              case 2:
                str += `${i.seriesName}: ${i.value} 家次<br>`
                break
              default:
                str += ''
            }
          }
        }
        return str
      }
    },
    legend: {
      show: true,
      data: ['检查经营主体家次', '发现违法违规经营主体家次', '完成整改主体家次'],
      top: 20 * window.$rem,
      textStyle: { // 图例文字的样式
        color: '#FFFFFF',
        fontSize: 16 * window.$rem
      }
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {show: false},
        offset: 10 * window.$rem,
        data: xdata,
        axisLabel: {
          textStyle: {
            color: '#fff', // 坐标的字体颜色
            fontSize: 16 * window.$rem,
            marginTop: '5'
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
        name: '(家次)',
        nameLocation: 'end',
        nameTextStyle: {
          color: '#fff',
          fontSize: 14 * window.$rem,
          align: 'right',
          padding: [0, 0, 8 * window.$rem, 0]
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
    series: data,
    grid: {
      x: 80 * window.$rem,
      y: 120 * window.$rem,
      x2: 50 * window.$rem,
      y2: '19.5%',
      borderWidth: 10 * window.$rem
    }
  }
}
export default createOptions
