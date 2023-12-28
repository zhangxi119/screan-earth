/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-05-19 22:19:25
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-20 10:13:21
 */
// import echarts from 'echarts'
function returnData (data) {
  let total = data.sz08007 + data.sz08005
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    color: ['#F9E659', '#4F5BF3'],
    title: [
      {
        text: total,
        x: '15%',
        y: '33%',
        textStyle: {
          color: 'rgba(250,252,255,1)',
          textShadowColor: 'rgba(149,229,252,0.28)',
          textShadowOffsetX: 0,
          textShadowOffsetY: 1,
          textShadowBlur: 10,
          fontSize: 26 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      },
      {
        text: '网络零售额',
        x: '11%',
        y: '48%',
        textStyle: {
          color: 'rgba(223,226,251,1)',
          fontSize: 20 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      },
      {
        text: '(亿元)',
        x: '19%',
        y: '62%',
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
      formatter: '{a} <br/>{b}:{c}亿元',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 10 * window.$rem],
      textStyle: {
        fontSize: 14 * window.$rem
      },
      position: 'right'
    },
    legend: {
      left: '53%',
      top: 'center',
      orient: 'vertical',
      textStyle: {
        type: 'circle',
        color: '#FFFFFF',
        fontSize: 17 * window.$rem,
        rich: {
          a: {
            fontSize: 17 * window.$rem,
            // verticalAlign: 'top',
            color: '#FCE62F',
            lineHeight: 24 * window.$rem
            // align: 'right'
          },
          b: {
            fontSize: 17 * window.$rem,
            width: 180 * window.$rem
          }
        }
      },
      // icon: 'reactRound',
      itemGap: 15 * window.$rem,
      itemWidth: 14 * window.$rem,
      itemHeight: 14 * window.$rem,
      formatter: function (name) {
        //   var d = ((target / total) * 100)
        let val = 0
        if (name === '实物型网络零售额') {
          val = data.sz08005
        } else if (name === '服务型网络零售额') {
          val = data.sz08007
        }
        var arr = [
          '{b|' + name + '}',
          '{a|' + val + ' 亿元}'
        ]
        return arr.join('\n')
      }
    },
    calculable: true,
    series: [
      {
        name: '网络零售额',
        type: 'pie',
        radius: [70 * window.$rem, 85 * window.$rem],
        center: ['26%', '53%'],
        label: {
          show: false
        },
        data: [{name: '实物型网络零售额', value: data.sz08005}, {name: '服务型网络零售额', value: data.sz08007}]
      }
    ]
  }
  return option
}
export default returnData
