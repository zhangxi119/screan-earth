/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-02-27 17:06:20
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-22 10:12:23
 */
function returnData (data) {
  console.log(data)
  let xData = []
  let sData = []
  let legendData = []
  data.forEach((item, index) => {
    xData.push(item.zl02002)
    sData.push({name: item.zl02002, value: item.zl02003})

    if ((index + 1) % 2 !== 0) {
      legendData.push({
        x: '30%',
        y: 70 + (index / 2) * 8 + '%',
        align: 'left',
        itemWidth: 13 * window.$rem,
        itemHeight: 13 * window.$rem,
        data: [item.zl02002],
        formatter: name => {
          let value = ''
          data.forEach(item => {
            if (name === item.zl02002) {
              value = item.zl02003
            }
          })
          return `{a|${name}}  {b|${value}}{a|件}`
        },
        textStyle: {
          rich: {
            a: {
              color: 'rgba(255,255,255,1)',
              fontSize: 15 * window.$rem,
              padding: [0, 0, 0, 15]
            },
            b: {
              color: '#FCE62F',
              fontSize: 15 * window.$rem
            },
            c: {
              fontSize: 15 * window.$rem
            }
          }
        }
      })
    } else if (index === 3) {
      legendData.push({
        x: '61%',
        y: '77%',
        align: 'left',
        itemWidth: 13 * window.$rem,
        itemHeight: 13 * window.$rem,
        data: [item.zl02002],
        formatter: name => {
          let value = ''
          data.forEach(item => {
            if (name === item.zl02002) {
              value = item.zl02003
            }
          })
          return `{a|${name}}  {b|${value}}{a|件}`
        },
        textStyle: {
          rich: {
            a: {
              color: 'rgba(255,255,255,1)',
              fontSize: 15 * window.$rem,
              padding: [0, 0, 0, 15]
            },
            b: {
              color: '#FCE62F',
              fontSize: 15 * window.$rem
            },
            c: {
              fontSize: 15 * window.$rem
            }
          }
        }
      })
    } else {
      legendData.push({
        x: '61%',
        y: 69 + Math.floor(index / 2) * 8 + '%',
        align: 'left',
        itemWidth: 13 * window.$rem,
        itemHeight: 13 * window.$rem,
        data: [item.zl02002],
        formatter: name => {
          let value = ''
          data.forEach(item => {
            if (name === item.zl02002) {
              value = item.zl02003
            }
          })
          return `{a|${name}}  {b|${value}}{a|件}`
        },
        textStyle: {
          rich: {
            a: {
              color: 'rgba(255,255,255,1)',
              fontSize: 15 * window.$rem,
              padding: [0, 0, 0, 15]
            },
            b: {
              color: '#FCE62F',
              fontSize: 15 * window.$rem
            },
            c: {
              fontSize: 15 * window.$rem
            }
          }
        }
      })
    }
  })
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    color: ['#E5993A', '#69CD6D', '#7D28D8', '#4CAEDD', '#f8e659', '#5C5BF6'],
    title: [
      // {
      //   text: '检定情况',
      //   x: 'center',
      //   y: '42%',
      //   textStyle: {
      //     color: 'rgba(250,252,255,1)',
      //     textShadowColor: 'rgba(149,229,252,0.28)',
      //     textShadowOffsetX: 0,
      //     textShadowOffsetY: 1,
      //     textShadowBlur: 10,
      //     fontSize: 24 * window.$rem,
      //     fontStyle: 'italic',
      //     fontWeight: 'normal'
      //   }
      // }
    ],
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    legend: legendData,
    calculable: true,
    series: [
      {
        name: '工业产品许可情况',
        type: 'pie',
        roseType: 'radius',
        radius: [10 * window.$rem, 50 * window.$rem],
        center: ['center', '45%'],
        label: {
          show: true,
          color: '#fff',
          fontSize: 16 * window.$rem,
          formatter: '{c}件'
        },
        labelLine: {
          lineStyle: {
            type: 'solid'
          },
          show: true
        },
        data: sData
      }
    ]
  }
  return option
}
export default returnData
