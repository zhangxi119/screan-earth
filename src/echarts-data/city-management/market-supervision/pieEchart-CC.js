/*
 * @Author: zhangxi
 * @Date: 2020-02-27 17:06:20
 * @Last Modified by: zhangxi
 * @Last Modified time: 2020-03-02 14:18:14
 */
import echarts from 'echarts'
let option = {
  backgroundColor: 'rgba(0,0,0,0)',
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
    backgroundColor: 'rgba(0,53,126,0.74)',
    borderColor: '#44aaf4',
    borderWidth: 2 * window.$rem,
    padding: [10, 20],
    textStyle: {
      fontSize: 17 * window.$rem
    }
  },
  legend: {
    x: '44%',
    y: 'center',
    orient: 'vertical',
    textStyle: {
      color: 'rgba(255,255,255,1)',
      fontSize: 14 * window.$rem
    },
    width: '30',
    height: '130',
    data: [
      {name: '食品监管', textStyle: {color: '#2870E4', fontSize: 17}},
      {name: '药品监管', textStyle: {color: '#3A91F7', fontSize: 17}},
      {name: '无照经营', textStyle: {color: '#64DEF8', fontSize: 17}},
      {name: '产品质量', textStyle: {color: '#6BE573', fontSize: 17}},
      {name: '特种设备', textStyle: {color: '#F1E44D', fontSize: 17}},
      {name: '商标侵权', textStyle: {color: '#E38031', fontSize: 17}},
      {name: '消费者权益保护', textStyle: {color: '#DD3421', fontSize: 17}},
      {name: '违反登记', textStyle: {color: '#B12FEA', fontSize: 17}},
      {name: '其他', textStyle: {color: '#4B1FE9', fontSize: 17}}
    ]
  },
  calculable: true,
  series: [
    {
      name: '',
      type: 'pie',
      radius: [60, 75],
      center: ['26%', '53%'],
      label: {
        show: false
      },
      data: [
        {
          value: 895,
          name: '食品监管',
          itemStyle: {
            color: '#2266E4'
          }
        },
        {
          value: 1095,
          name: '药品监管',
          itemStyle: {
            color: '#3A91F7'
            // color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            //   offset: 0,
            //   color: '#6BE673'
            // }, {
            //   offset: 1,
            //   color: '#6BE673'
            // }])
          }
        },
        {
          value: 1095,
          name: '无照经营',
          itemStyle: {
            color: '#64DEF8'
          }
        },
        {
          value: 1095,
          name: '产品质量',
          itemStyle: {
            color: '#6BE573'
          }
        },
        {
          value: 1095,
          name: '特种设备',
          itemStyle: {
            color: '#F1E44D'
          }
        },
        {
          value: 1095,
          name: '商标侵权',
          itemStyle: {
            color: '#E38031'
          }
        },
        {
          value: 1095,
          name: '消费者权益保护',
          itemStyle: {
            color: '#DD3421'
          }
        },
        {
          value: 1095,
          name: '违反登记',
          itemStyle: {
            color: '#B12FEA'
          }
        },
        {
          value: 1095,
          name: '其他',
          itemStyle: {
            color: '#4B1FE9'
          }
        }
      ]
    },
    {
      name: '',
      type: 'pie',
      radius: [55, 80],
      center: ['26%', '53%'],
      label: {
        show: false
      },
      data: [
        {
          value: 895,
          name: '食品监管',
          itemStyle: {

            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#3B91F7'
            }, {
              offset: 1,
              color: '#3F91F7'
            }])
          }
        },
        {
          value: 1095,
          name: '药品监管',
          itemStyle: {
            color: 'transparent'
          }
        },
        {
          value: 1095,
          name: '无照经营',
          itemStyle: {
            color: 'transparent'
          }
        },
        {
          value: 1095,
          name: '产品质量',
          itemStyle: {
            color: 'transparent'
          }
        },
        {
          value: 1095,
          name: '特种设备',
          itemStyle: {
            color: 'transparent'
          }
        },
        {
          value: 1095,
          name: '商标侵权',
          itemStyle: {
            color: 'transparent'
          }
        },
        {
          value: 1095,
          name: '消费者权益保护',
          itemStyle: {
            color: 'transparent'
          }
        },
        {
          value: 1095,
          name: '违反登记',
          itemStyle: {
            color: 'transparent'
          }
        },
        {
          value: 1095,
          name: '其他',
          itemStyle: {
            color: 'transparent'
          }
        }
      ]
    }
  ]
}
export default option
