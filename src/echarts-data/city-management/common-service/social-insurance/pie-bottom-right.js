/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-24 10:59:19
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-20 16:31:59
 */

function setData (data) {
  console.log('res', data)
  let colorArr = [
    '#0291FF',
    '#00E1FC',
    '#07EA62',
    '#FCE62F']
  let seriesData01 = []
  let seriesData02 = []
  // let total = 34
  let legendData = []
  data.forEach((item, index) => {
    // total += item.peopleNum
    // 偶数
    seriesData01.push({
      value: item.peopleNum,
      name: item.insurType,
      itemStyle: {
        color: colorArr[index]
      }
    })
    if (index > 0) {
      seriesData02.push({
        value: item.peopleNum,
        name: item.insurType,
        itemStyle: {
          color: 'transparent'
        }
      })
    } else {
      seriesData02.push({
        value: item.peopleNum,
        name: item.insurType,
        itemStyle: {
          color: colorArr[index]
        }
      })
    }
    legendData.push(item.insurType)
  })
  console.log('legendData', legendData)
  // let xTitle = 29
  // if (total < 10) {
  //   xTitle = 38
  // } else if (total < 100) {
  //   xTitle = 37
  // } else if (total < 1000) {
  //   xTitle = 32.5
  // }
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    // title: [
    //   {
    //     text: '养老保险',
    //     x: xTitle + '%',
    //     y: '21%',
    //     textStyle: {
    //       color: 'rgba(250,252,255,1)',
    //       textShadowColor: 'rgba(149,229,252,0.28)',
    //       textShadowOffsetX: 0,
    //       textShadowOffsetY: 1 * window.$rem,
    //       textShadowBlur: 10 * window.$rem,
    //       fontSize: 14 * window.$rem,
    //       fontStyle: 'italic',
    //       fontFamily: 'Impact',
    //       fontWeight: 'normal'
    //     }
    //   },
    //   {
    //     text: total,
    //     x: xTitle + '%',
    //     y: '31%',
    //     textStyle: {
    //       color: 'rgba(250,252,255,1)',
    //       textShadowColor: 'rgba(149,229,252,0.28)',
    //       textShadowOffsetX: 0,
    //       textShadowOffsetY: 1 * window.$rem,
    //       textShadowBlur: 10 * window.$rem,
    //       fontSize: 26 * window.$rem,
    //       fontStyle: 'italic',
    //       fontFamily: 'Impact',
    //       fontWeight: 'normal'
    //     }
    //   },
    //   {
    //     text: '(家)',
    //     x: xTitle + 20 + '%',
    //     y: '35%',
    //     textStyle: {
    //       color: 'rgba(223,226,251,0.72)',
    //       fontSize: 11 * window.$rem,
    //       fontStyle: 'italic',
    //       fontWeight: 'normal'
    //     }
    //   },
    //   {
    //     text: '(25.5)%',
    //     x: xTitle + '%',
    //     y: '40%',
    //     textStyle: {
    //       color: 'rgba(223,226,253,1)',
    //       fontSize: 15 * window.$rem,
    //       fontStyle: 'italic',
    //       fontWeight: 'normal'
    //     }
    //   }
    // ],
    tooltip: {
      show: true,
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
    legend: {
      x: '10%',
      y: '60%',
      textStyle: {
        rich: {
          a: {
            color: 'rgba(255,255,255,1)',
            fontSize: 15 * window.$rem,
            padding: [0, 0, 0, 15]
          },
          b: {
            color: '#F2D5A9',
            fontSize: 15 * window.$rem
          }
        }
      },
      itemGap: 13 * window.$rem,
      orient: 'vertical',
      itemWidth: 13 * window.$rem,
      itemHeight: 13 * window.$rem,
      formatter: name => {
        let value = ''
        data.forEach(item => {
          if (name === item.insurType) {
            value = item.peopleNum
          }
        })
        return `{a|${name}}                      {b|${value}家}`
      }
    },
    calculable: true,
    series: [
      {
        name: '企业参保分析 ',
        type: 'pie',
        radius: [60 * window.$rem, 70 * window.$rem],
        center: ['40%', '35%'],
        label: {
          show: false
        },
        data: seriesData01
      }
      // {
      //   name: '企业参保分析 ',
      //   type: 'pie',
      //   radius: [55 * window.$rem, 85 * window.$rem],
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
