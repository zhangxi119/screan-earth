/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-04-29 22:40:09
 * @LastEditors: wanglong
 * @LastEditTime: 2020-05-11 14:58:33
 */
function returnData (data) {
  let colorIndex = ['#449FE3', '#E79B37', '#73FBFD', '#EA3FF7', '#FDF050', '#D32E52']
  let legendData = []
  let seriesData = []
  data.forEach((item, index) => {
    legendData.push(item.type)
    seriesData.push({
      name: item.type,
      value: item.money,
      itemStyle: {
        color: colorIndex[index]
      }
    })
  })
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}万元 ({d}%)',
      position: 'right',
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
      right: 30 * window.$rem,
      top: 'center',
      data: legendData,
      icon: 'circle',
      itemHeight: 15 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 12 * window.$rem,
        lineHeight: 15 * window.$rem
      },
      formatter (params) {
        let tip1 = ''
        let tip = ''
        let le = params.length // 图例文本的长度
        if (le > 8) { // 几个字换行大于几就可以了
          let l = Math.ceil(le / 8) // 有些不能整除，会有余数，向上取整
          for (let i = 1; i <= l; i++) { // 循环
            if (i < l) { // 最后一段字符不能有\n
              tip1 += params.slice(i * 8 - 8, i * 9) + '\n' // 字符串拼接
            } else if (i === l) { // 最后一段字符不一定够9个
              tip = tip1 + params.slice((l - 1) * 8, le) // 最后的拼接在最后
            }
          }
          return tip
        } else {
          tip = params // 前面定义了tip为空，这里要重新赋值，不然会替换为空
          return tip
        }
      }
    },
    series: [
      {
        name: '补贴项目资金发放总额占比',
        type: 'pie',
        radius: ['50%', '70%'],
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
        center: ['25%', '50%'],
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
