/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-24 10:59:19
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-21 21:29:22
 */
// let difSizeLegend = 15 * window.$rem
function setData (data) {
  let colorArr = [
    '#006FEC',
    '#0291FF',
    '#00D9F4',
    '#07EA62',
    '#FCE62F',
    '#F17A06',
    '#F01100',
    '#C200F3',
    '#5600F3'
  ]
  let seriesData01 = []
  let seriesData02 = []
  // let total = 34
  let legendData = []
  data.forEach((item, index) => {
    // total += item.num
    // 偶数
    seriesData01.push({
      value: item.num,
      name: item.ecoType,
      itemStyle: {
        color: colorArr[index]
      }
    })
    if (index > 0) {
      seriesData02.push({
        value: item.num,
        name: item.ecoType,
        itemStyle: {
          color: 'transparent'
        }
      })
    } else {
      seriesData02.push({
        value: item.num,
        name: item.ecoType,
        itemStyle: {
          color: colorArr[index]
        }
      })
    }
    if ((index + 1) % 2 !== 0) {
      legendData.push({
        x: '1%',
        y: 60 + (index / 2) * 8 + '%',
        itemWidth: 13 * window.$rem,
        itemHeight: 13 * window.$rem,
        align: 'left',
        data: [item.ecoType],
        formatter: name => {
          let value = ''
          data.forEach(item => {
            if (name === item.ecoType) {
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
        x: '51%',
        y: 60 + Math.floor(index / 2) * 8 + '%',
        itemWidth: 13 * window.$rem,
        itemHeight: 13 * window.$rem,
        align: 'left',
        data: [item.ecoType],
        formatter: name => {
          let value = ''
          data.forEach(item => {
            if (name === item.ecoType) {
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
            }
          }
        }
      })
    }
  })
  // let xTitle = 0
  // if (total < 10) {
  //   xTitle = 38
  // } else if (total < 100) {
  //   xTitle = 37
  // } else if (total < 1000) {
  //   xTitle = 32.5
  // }
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    title: [
      // {
      //   text: total,
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
      //   text: '',
      //   x: '24%',
      //   y: '38%',
      //   textStyle: {
      //     color: 'rgba(223,226,253,1)',
      //     fontSize: 15 * window.$rem,
      //     fontStyle: 'italic',
      //     fontWeight: 'normal'
      //   }
      // },
      // {
      //   text: '(家)',
      //   x: '35%',
      //   y: '38%',
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
        name: '企业经济类型 ',
        type: 'pie',
        radius: [60 * window.$rem, 70 * window.$rem],
        center: ['40%', '35%'],
        label: {
          show: false
        },
        data: seriesData01
      }
      // {
      //   name: '企业经济类型 ',
      //   type: 'pie',
      //   radius: [45 * window.$rem, 80 * window.$rem],
      //   center: ['40%', '35%'],
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
