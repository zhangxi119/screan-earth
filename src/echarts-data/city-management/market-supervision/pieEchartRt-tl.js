/*
 * @Author: zhangxi
 * @Date: 2020-02-27 17:06:20
 * @Last Modified by: zhangxi
 * @Last Modified time: 2020-03-02 14:18:14
 */
import echarts from 'echarts'
let option = {
  backgroundColor: 'rgba(0,0,0,0)',
  title: [
    {
      text: '58%',
      x: '15%',
      y: '45%',
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
      text: '食品药品',
      x: '9%',
      y: '80%',
      textStyle: {
        color: 'rgba(223,226,251,1)',
        fontSize: 19 * window.$rem,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }
    }
  ],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
    backgroundColor: 'rgba(0,53,126,0.74)',
    borderColor: '#44aaf4',
    borderWidth: 2 * window.$rem,
    padding: [10, 20],
    textStyle: {
      fontSize: 17 * window.$rem
    }
  },
  calculable: true,
  series: [
    {
      name: '面积模式',
      type: 'pie',
      radius: [45, 60],
      center: ['26%', '53%'],
      label: {
        show: false
      },
      data: [
        {
          value: 8471,
          name: '不合格',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#0B62DF'
            }, {
              offset: 1,
              color: '#58E7F9'
            }])
          }
        },
        {
          value: 1471,
          name: '合格',
          itemStyle: {
            color: '#58E7F9'
          }
        }
      ]
    }
  ]
}
export default option
