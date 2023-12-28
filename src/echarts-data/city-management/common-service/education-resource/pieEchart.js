/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-02-27 17:06:20
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-28 20:25:14
 */
function rentruenData (data) {
  let colorArr = ['#2367E4', '#6BE573', '#F9E559', '#DB349F', '#4B25E9']
  let sData = []
  let sData2 = []
  let totalNum = 0
  data.forEach((item, index) => {
    sData.push({
      value: item.schoolNum,
      name: item.schoolType,
      per: item.schoolRate,
      itemStyle: {
        color: colorArr[index]
      }
    })
    if (index === 0) {
      sData2.push({
        value: item.schoolNum,
        name: item.schoolType,
        per: item.schoolRate,
        itemStyle: {
          color: colorArr[index]
        }
      })
    } else {
      sData2.push({
        value: item.schoolNum,
        name: item.schoolType,
        per: item.schoolRate,
        itemStyle: {
          color: 'transparent'
        }
      })
    }
    totalNum += item.schoolNum
  })
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    title: [
      {
        text: totalNum,
        x: '19.5%',
        y: '43%',
        textStyle: {
          color: '#78D0FA',
          textShadowColor: 'rgba(149,229,252,0.28)',
          textShadowOffsetX: 0,
          textShadowOffsetY: 1,
          textShadowBlur: 10,
          fontSize: 30 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      },
      {
        text: '学校总数',
        x: '18.5%',
        // x: 'center',
        y: '55.5%',
        textStyle: {
          color: 'rgba(223,226,251,1)',
          fontSize: 17 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      },
      {
        text: '(所)',
        x: '23%',
        y: '65.5%',
        textStyle: {
          color: 'rgba(223,226,251,0.72)',
          fontSize: 14 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      }
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} 所 ({d}%)',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    legend: {
      x: '58%',
      y: 'center',
      show: false,
      itemWidth: 14 * window.$rem,
      itemHeight: 14 * window.$rem,
      textStyle: {
        color: 'rgba(255,255,255,1)',
        fontSize: 14 * window.$rem,
        rich: {
          a: {
            color: '#fbfcff',
            fontSize: 17 * window.$rem,
            lineHeight: 34 * window.$rem
          },
          b: {
            fontSize: 17 * window.$rem,
            color: '#75E3FB',
            lineHeight: 34 * window.$rem
          }
        }
      },
      icon: 'circle',
      orient: 'vertical',
      formatter: function (name) {
        let value = ''
        let per = ''
        data.forEach(item => {
          if (name === item.schoolType) {
            value = item.schoolNum
            per = item.schoolRate
          }
        })
        return `{a|${name} } {b| ${value}所 ${per}%}`
      }
    },
    calculable: true,
    series: [
      {
        name: '学校情况',
        type: 'pie',
        radius: [80 * window.$rem, 95 * window.$rem],
        center: ['26%', '58%'],
        label: {
          show: false
        },
        data: sData
      },
      {
        name: '学校情况',
        type: 'pie',
        radius: [80 * window.$rem, 105 * window.$rem],
        center: ['26%', '58%'],
        label: {
          show: false
        },
        data: sData2
      }
    ]
  }
  return option
}
export default rentruenData
