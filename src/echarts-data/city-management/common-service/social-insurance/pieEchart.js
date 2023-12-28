/*
 * @Author: zhangxi
 * @Date: 2020-02-27 17:06:20
 * @Last Modified by: zhangxi
 * @Last Modified time: 2020-03-02 14:18:14
 */
// let difSizeLegend = 17 * window.$rem
function setData (data) {
  data.forEach((item, index) => {
    if (item.classType === '其他') {
      data.push(data.splice(index, 1)[0])
    }
  })
  let colorArr = [
    '#006FEC',
    '#0AD192',
    '#FCE62F',
    '#E55711',
    '#00E1FC'
  ]
  // classType
  let seriesData01 = []
  let seriesData02 = []
  // let totalCompany = 0
  let legendData = []
  // let xTitle = 34
  data.forEach((item, index) => {
    // totalCompany += item.num
    // 偶数
    seriesData01.push({
      value: item.num,
      name: item.classType,
      itemStyle: {
        color: colorArr[index]
      }
    })
    if (index > 0) {
      seriesData02.push({
        value: item.num,
        name: item.classType,
        itemStyle: {
          color: 'transparent'
        }
      })
    } else {
      seriesData02.push({
        value: item.num,
        name: item.classType,
        itemStyle: {
          color: colorArr[index]
        }
      })
    }
    if ((index + 1) % 2 !== 0) {
      legendData.push({
        x: '5%',
        y: 60 + (index / 2) * 8 + '%',
        align: 'left',
        itemWidth: 13 * window.$rem,
        itemHeight: 13 * window.$rem,
        data: [item.classType],
        formatter: name => {
          let value = ''
          data.forEach(item => {
            if (name === item.classType) {
              value = item.num
            }
          })
          return `{a|${name}}  {b|${value}}{a|家}`
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
        y: '68%',
        align: 'left',
        itemWidth: 13 * window.$rem,
        itemHeight: 13 * window.$rem,
        data: [item.classType],
        formatter: name => {
          let value = ''
          data.forEach(item => {
            if (name === item.classType) {
              value = item.num
            }
          })
          return `{a|${name}}  {b|${value}}{a|家}`
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
        y: 60 + Math.floor(index / 2) * 5 + '%',
        align: 'left',
        itemWidth: 13 * window.$rem,
        itemHeight: 13 * window.$rem,
        data: [item.classType],
        formatter: name => {
          let value = ''
          data.forEach(item => {
            if (name === item.classType) {
              value = item.num
            }
          })
          return `{a|${name}}  {b|${value}}{a|家}`
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

  // if (totalCompany < 10) {
  //   xTitle = 38
  // } else if (totalCompany < 100) {
  //   xTitle = 37
  // } else if (totalCompany < 1000) {
  //   xTitle = 35
  // }
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    title: [
      // {
      //   text: totalCompany,
      //   x: xTitle + '%',
      //   y: '28%',
      //   textStyle: {
      //     color: 'rgba(250,252,255,1)',
      //     textShadowColor: 'rgba(149,229,252,0.28)',
      //     textShadowOffsetX: 0,
      //     textShadowOffsetY: 1 * window.$rem,
      //     textShadowBlur: 10 * window.$rem,
      //     fontSize: 26 * window.$rem,
      //     fontStyle: 'italic',
      //     fontFamily: 'Impact',
      //     fontWeight: 'normal'
      //   }
      // },
      // {
      //   text: '参保单位',
      //   x: '33%',
      //   y: '35%',
      //   textStyle: {
      //     color: 'rgba(223,226,253,1)',
      //     fontSize: 15 * window.$rem,
      //     fontStyle: 'italic',
      //     fontWeight: 'normal'
      //   }
      // }
      // {
      //   text: '(家)',
      //   x: '39%',
      //   y: '44%',
      //   textStyle: {
      //     color: '#DFE2FD',
      //     fontSize: 14 * window.$rem,
      //     fontStyle: 'italic',
      //     fontWeight: 'bold'
      //   }
      // }
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
      textStyle: {
        fontSize: 17 * window.$rem
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem]
    },
    legend: legendData,
    calculable: true,
    series: [
      {
        name: '参保单位分类',
        type: 'pie',
        radius: [60 * window.$rem, 70 * window.$rem],
        center: ['44%', '35%'],
        label: {
          show: false
        },
        data: seriesData01
      }
      // {
      //   name: '参保单位分类',
      //   type: 'pie',
      //   radius: [45 * window.$rem, 80 * window.$rem],
      //   center: ['44%', '35%'],
      //   label: {
      //     show: false
      //   },
      //   data: seriesData02
      // }
    ]
  }
  return option
}
export default setData
