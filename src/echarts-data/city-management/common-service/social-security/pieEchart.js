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
      text: '28,309,871',
      x: '14%',
      y: '40%',
      textStyle: {
        color: 'rgba(250,252,255,1)',
        textShadowColor: 'rgba(149,229,252,0.28)',
        textShadowOffsetX: 0,
        textShadowOffsetY: 1,
        textShadowBlur: 10,
        fontSize: 26,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }
    },
    {
      text: '补充',
      x: '14%',
      y: '60%',
      textStyle: {
        color: 'rgba(223,226,251,1)',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }
    },
    {
      text: '(万元)',
      x: '24%',
      y: '60%',
      textStyle: {
        color: 'rgba(223,226,251,0.72)',
        fontSize: 14,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }
    }
  ],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    x: 'right',
    y: 'center',
    textStyle: {
      color: 'rgba(255,255,255,1)',
      fontSize: 17
    },
    // data: ['就业专项（113万元）26.9%', '稳岗补贴（101万元）26.9%', '职位津贴（89万元）26.9%', '社保补贴（82万元）26.9%']
    data: [
      {name: '就业专项（113万元）26.9%', textStyle: {color: 'rgba(255,255,255,1)', fontSize: 17}},
      {name: '稳岗补贴（101万元）26.9%', textStyle: {color: 'rgba(102,222,248,1)', fontSize: 17}},
      {name: '职位津贴（89万元）26.9%', textStyle: {color: 'rgba(255,255,255,1)', fontSize: 17}},
      {name: '社保补贴（82万元）26.9%', textStyle: {color: 'rgba(255,255,255,1)', fontSize: 17}}
    ]
  },
  calculable: true,
  series: [
    {
      name: '面积模式',
      type: 'pie',
      radius: [80, 95],
      center: ['26%', '53%'],
      label: {
        show: false
      },
      data: [
        {
          value: 34,
          name: '就业专项（113万元）26.9%',
          itemStyle: {
            color: '#3F91F7'
          }
        },
        {
          value: 52,
          name: '稳岗补贴（101万元）26.9%',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#66DEF8'
            }, {
              offset: 1,
              color: '#66DEF8'
            }])
          }
        },
        {
          value: 23,
          name: '职位津贴（89万元）26.9%',
          itemStyle: {
            color: '#6BE673'
          }
        },
        {
          value: 23,
          name: '社保补贴（82万元）26.9%',
          itemStyle: {
            color: '#F1E44D'
          }
        }
      ]
    },
    {
      name: '面积模式',
      type: 'pie',
      radius: [80, 105],
      center: ['26%', '53%'],
      label: {
        show: false
      },
      data: [
        {
          value: 34,
          name: '就业专项（113万元）26.9%',
          itemStyle: {

            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#3F91F7'
            }, {
              offset: 1,
              color: '#3F91F7'
            }])
          }
        },
        {
          value: 52,
          name: '稳岗补贴（101万元）26.9%',
          itemStyle: {
            color: 'transparent'
          }
        },
        {
          value: 23,
          name: '职位津贴（89万元）26.9%',
          itemStyle: {
            color: 'transparent'
          }
        },
        {
          value: 23,
          name: '社保补贴（82万元）26.9%',
          itemStyle: {
            color: 'transparent'
          }
        }
      ]
    }
  ]
}
export default option
