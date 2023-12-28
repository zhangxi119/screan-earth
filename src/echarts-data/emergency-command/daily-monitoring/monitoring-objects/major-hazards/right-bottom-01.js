/*
 * @Descripttion:
 * @Author: luoxi
 * @Date: 2020-03-08 15:39:25
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-15 11:52:26
 */
import echarts from 'echarts'
var values = [999, 888, 777, 666, 555, 444, 333, 222, 111, 50]
var names = [{ name: '杭州市第三人民医院1' }, { name: '浙江大学第一附属医院2' }, { name: '浙江大学第一附属医院3' }, { name: '浙江大学第一附属医院4' }, { name: '浙江大学第一附属医院5' }, { name: '浙江大学第一附属医院6' }]
var values1 = values.slice(0, 3)
var names1 = names.slice(0, 3).map((item, index) => {
  return index + 1 + '  ' + item.name
})
var names2 = names.slice(3, 6).map((item, index) => {
  return index + 6 + '  ' + item.name
})

let optionsTwo = {
  backgroundColor: 'transparent',
  legend: {
    data: ['1级', '2级', '3级', '4级'],
    textStyle: {
      color: '#fff',
      fontSize: 16 * window.$rem
    }
  },
  tooltip: {
    trigger: 'axis',
    show: true,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    axisPointer: { type: 'none' },
    textStyle: {
      color: '#3c3c3c',
      fontSize: 17 * window.$rem
    },
    formatter: function (p) {
      return '一级：' + p[1].value + '&nbsp;&nbsp;&nbsp;' + '二级：' + p[2].value + '<br>' + '三级：' + p[3].value + '&nbsp;&nbsp;&nbsp;' + '四级：' + p[4].value
    },
    extraCssText: `box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);background:rgba(14,53,121,0.76);
    border:1px solid rgba(161, 234, 255, 0.66);
    box-shadow:0px 0.07rem 0.18rem 0px rgba(0,41,220,0.24);
    font-size:0.14rem;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(255,255,255,1);
    border-radius:2px;
    width:1.5rem;`
  },
  grid: [{
    width: '40%',
    left: '4%',
    height: '60%',
    top: 45 * window.$rem,
    right: '0',
    bottom: '0'
  },
  {
    width: '40%',
    height: '60%',
    left: '51%',
    top: 45 * window.$rem,
    right: '0',
    bottom: '0'
  }
  ],
  xAxis: [{
    gridIndex: 0,
    show: false
  }, {
    gridIndex: 1,
    show: false
  }],
  yAxis: [{
    gridIndex: 0,
    splitLine: 'none',
    axisTick: 'none',
    axisLine: 'none',
    axisLabel: {
      verticalAlign: 'bottom',
      align: 'left',
      padding: [0, 0, 18 * window.$rem, 8 * window.$rem],
      textStyle: {
        color: '#ADB2C7',
        fontSize: 17 * window.$rem
      }
    },
    label: {
      normal: {
        show: true,
        // label 的position位置可以是top bottom left,right,也可以是固定值
        // 在这里需要上下统一对齐,所以用固定值
        position: [0, '-100%'],
        rich: { // 富文本
          white: { // 自定义颜色
            color: '#ffffff'
          },
          start1: {
            backgroundColor: {
              // image: uploadedDataURL1,
            }
          },
          start2: {
            backgroundColor: { // 这里可以添加你想自定义的图片
              // image: uploadedDataURL2,
            }
          }
        }
        // formatter: function (data) {
        //   //富文本固定格式{colorName|这里填你想要写的内容}
        //   if (paiming[data.dataIndex] == 1) {
        //     return '{start1|}{red|' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}' + '                                                           ' + '{white|    总销售额:}{gray|' + zongjine[data.dataIndex] + '}{white|元}';
        //   } else if (paiming[data.dataIndex] == 2) {
        //     return '{start1|}{yellow|' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}' + '                                                           ' + '{white|    总销售额:}{gray|' + zongjine[data.dataIndex] + '}{white|元}';
        //   } else if (paiming[data.dataIndex] == 3) {
        //     return '{start1|}{green|' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}' + '                                                           ' + '{white|    总销售额:}{gray|' + zongjine[data.dataIndex] + '}{white|元}';
        //   } else {
        //     return '{start2|}{white|' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}' + '                                                           ' + '{white|    总销售额:}{gray|' + zongjine[data.dataIndex] + '}{white|元}';
        //   }

        // },
      }
    },
    data: names1,
    inverse: true
  },
  {
    gridIndex: 0,
    splitLine: 'none',
    axisTick: 'none',
    axisLine: 'none',
    data: values1,
    inverse: true,
    axisLabel: {
      show: true,
      verticalAlign: 'bottom',
      align: 'right',
      padding: [0, -15 * window.$rem, 15 * window.$rem, 0],
      textStyle: {
        color: '#fff',
        fontSize: '17'
      },
      formatter: function (value) {
        return '{x|' + value + '}  {y|' + '元}'
      },
      rich: {
        y: {
          color: '#ADB2C7',
          fontSize: 20 * window.$rem
        },
        x: {
          color: '#32F19F',
          fontSize: 20 * window.$rem
        }
      }
    }
  },
  // {
  //   gridIndex: 0,
  //   splitLine: 'none',
  //   axisTick: 'none',
  //   axisLine: 'none',
  //   data: []
  // },
  {
    gridIndex: 1,
    splitLine: 'none',
    axisTick: 'none',
    axisLine: 'none',
    axisLabel: {
      verticalAlign: 'bottom',
      align: 'left',
      padding: [0, 0, 18 * window.$rem, 8 * window.$rem],
      textStyle: {
        color: '#ADB2C7',
        fontSize: 17 * window.$rem
      }
    },
    data: names2,
    inverse: true
  },
  {
    gridIndex: 1,
    splitLine: 'none',
    axisTick: 'none',
    axisLine: 'none',
    data: values1,
    inverse: true,
    axisLabel: {
      show: true,
      verticalAlign: 'bottom',
      align: 'right',
      padding: [0, -15 * window.$rem, 15 * window.$rem, 0],
      textStyle: {
        color: '#9BE9FF',
        fontSize: 17 * window.$rem
      },
      formatter: function (value) {
        return '{x|' + value + '}  {y|' + '元}'
      },
      rich: {
        y: {
          color: '#ADB2C7',
          fontSize: 20 * window.$rem
        },
        x: {
          color: '#32F19F',
          fontSize: 20 * window.$rem
        }
      }
    }
  }
    // {
    //   gridIndex: 1,
    //   splitLine: 'none',
    //   axisTick: 'none',
    //   axisLine: 'none',
    //   data: []
    // }
  ],
  series: [{ // 内边框
    name: '',
    type: 'pictorialBar',
    symbol: 'reat',
    // barWidth: '9%',
    // barMaxWidth: '20%',
    symbolOffset: ['-0.5%', 0],
    symbolSize: ['77%', 22 * window.$rem],
    itemStyle: {
      normal: {
        //   color: function(params) {
        //       var num = myColor.length;
        //       return myColor[params.dataIndex % num]
        //   },
        // color:'transparent',
        opacity: 0.2,
        barBorderRadius: 5 * window.$rem
      }
    },
    z: -20,
    symbolRepeat: null,
    symbolBoundingData: 2000,
    data: [891, 1220, 660],
    animationEasing: 'elasticOut'
    // label: {
    //   normal: {
    //     show: true,
    //     position: 'right',
    //     offset: [10, 0],
    //     textStyle: {
    //       color: 'darkorange',
    //       fontSize: 18
    //     }
    //   }
    // }

  },
  {
    // current data
    name: '',
    type: 'pictorialBar',
    symbol: 'rect',
    symbolRepeat: true,
    //  symbolMargin: '20%',
    stack: '2',
    //  symbolClip: true,
    symbolSize: [10 * window.$rem, 20 * window.$rem, 30 * window.$rem],
    symbolBoundingData: 2000,
    label: {
      normal: {
        //  show: true,
        position: 'right',
        offset: [-60 * window.$rem, 30 * window.$rem],
        textStyle: {
          color: 'darkorange',
          fontSize: 18 * window.$rem
        }
      }
    },
    data: [{
      'value': 80,
      'itemStyle': {
        'normal': {
          'color': '#ff5715'
        }
      }
    },
    {
      'value': 30,
      'itemStyle': {
        'normal': {
          'color': '#ff9915'
        }
      }
    },
    {
      'value': 60,
      'itemStyle': {
        'normal': {
          'color': '#ffdb15'
        }
      }
    }
    ],
    animationEasing: 'elasticOut',
    animationDelay: function (dataIndex, params) {
      return params.index * 30
    }
  },
  {
    name: '2级',
    type: 'pictorialBar',
    symbol: 'rect',
    symbolRepeat: true,
    symbolMargin: '20%',
    symbolClip: true,
    symbolSize: [10 * window.$rem, 20 * window.$rem, 30 * window.$rem],
    stack: '2',
    symbolBoundingData: 2000,
    label: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#6BE7F8'
        }, {
          offset: 1,
          color: '#4F8DEB'
        }], false)
      }
    },
    data: [{
      'value': 110,
      'itemStyle': {
        'normal': {
          'color': '#f3715'
        }
      }
    },
    {
      'value': 210,
      'itemStyle': {
        'normal': {
          'color': '#ff2915'
        }
      }
    },
    {
      'value': 620,
      'itemStyle': {
        'normal': {
          'color': '#ff2215'
        }
      }
    }
    ],
    animationEasing: 'elasticOut',
    animationDelay: function (dataIndex, params) {
      return params.index * 30
    }
  },
  {
    name: '3级',
    type: 'pictorialBar',
    symbol: 'rect',
    symbolRepeat: true,
    symbolMargin: '20%',
    symbolClip: true,
    symbolSize: [10 * window.$rem, 20 * window.$rem, 30 * window.$rem],
    stack: '2',
    symbolBoundingData: 2000,
    label: {
      normal: {
        //  show: true,
        position: 'right',
        offset: [-60 * window.$rem, 30 * window.$rem],
        textStyle: {
          color: 'darkorange',
          fontSize: 18 * window.$rem
        }
      }
    },
    data: [{
      'value': 70,
      'itemStyle': {
        'normal': {
          'color': '#ff2731'
        }
      }
    },
    {
      'value': 50,
      'itemStyle': {
        'normal': {
          'color': '#fff'
        }
      }
    },
    {
      'value': 60,
      'itemStyle': {
        'normal': {
          'color': '#369'
        }
      }
    }
    ],
    animationEasing: 'elasticOut',
    animationDelay: function (dataIndex, params) {
      return params.index * 30
    }
  },
  {
    name: '4级',
    type: 'pictorialBar',
    symbol: 'rect',
    symbolRepeat: true,
    symbolMargin: '20%',
    symbolClip: true,
    symbolSize: [10 * window.$rem, 20 * window.$rem, 30 * window.$rem],
    stack: '2',
    symbolBoundingData: 2000,
    label: {
      normal: {
        //  show: true,
        position: 'right',
        offset: [-60 * window.$rem, 30 * window.$rem],
        textStyle: {
          color: 'darkorange',
          fontSize: 18 * window.$rem
        }
      }
    },
    data: [{
      'value': 70,
      'itemStyle': {
        'normal': {
          'color': '#ff2731'
        }
      }
    },
    {
      'value': 50,
      'itemStyle': {
        'normal': {
          'color': '#fff'
        }
      }
    },
    {
      'value': 60,
      'itemStyle': {
        'normal': {
          'color': '#369'
        }
      }
    }
    ],
    animationEasing: 'elasticOut',
    animationDelay: function (dataIndex, params) {
      return params.index * 30
    }
  },
  { // 内边框
    name: '',
    xAxisIndex: 1,
    yAxisIndex: 3,
    type: 'pictorialBar',
    symbol: 'reat',
    // barWidth: '9%',
    // barMaxWidth: '20%',
    symbolOffset: ['-0.5%', 0],
    symbolSize: ['77%', 22 * window.$rem],
    itemStyle: {
      normal: {
        //  color: function(params) {
        //      var num = myColor.length;
        //      return myColor[params.dataIndex % num]
        //  },
        opacity: 0.2,
        barBorderRadius: 5 * window.$rem
      }
    },
    z: -20,
    symbolRepeat: null,
    symbolBoundingData: 2000,
    data: [891, 1220, 660],
    animationEasing: 'elasticOut'
    // label: {
    //   normal: {
    //     show: true,
    //     position: 'right',
    //     offset: [10, 0],
    //     textStyle: {
    //       color: 'darkorange',
    //       fontSize: 18
    //     }
    //   }
    // }

  },
  {
    // current data
    name: '',
    xAxisIndex: 1,
    yAxisIndex: 3,
    type: 'pictorialBar',
    symbol: 'rect',
    symbolRepeat: true,
    //  symbolMargin: '20%',
    stack: '2',
    //  symbolClip: true,
    symbolSize: [10 * window.$rem, 20 * window.$rem, 30 * window.$rem],
    symbolBoundingData: 2000,
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#6BE7F8'
        }, {
          offset: 1,
          color: '#4F8DEB'
        }], false)
      }
    },
    label: {
      normal: {
        //  show: true,
        position: 'right',
        offset: [-60 * window.$rem, 30 * window.$rem],
        textStyle: {
          color: 'darkorange',
          fontSize: 18 * window.$rem
        }
      }
    },
    data: [{
      'value': 80,
      'itemStyle': {
        'normal': {
          'color': '#ff5715'
        }
      }
    },
    {
      'value': 30,
      'itemStyle': {
        'normal': {
          'color': '#ff9915'
        }
      }
    },
    {
      'value': 60,
      'itemStyle': {
        'normal': {
          'color': '#ffdb15'
        }
      }
    }
    ],
    animationEasing: 'elasticOut',
    animationDelay: function (dataIndex, params) {
      return params.index * 30
    }
  },
  {
    name: '2级',
    xAxisIndex: 1,
    yAxisIndex: 3,
    type: 'pictorialBar',
    symbol: 'rect',
    symbolRepeat: true,
    symbolMargin: '20%',
    symbolClip: true,
    symbolSize: [10 * window.$rem, 20 * window.$rem, 30 * window.$rem],
    stack: '2',
    symbolBoundingData: 2000,
    label: {
      normal: {
        //  show: true,
        position: 'right',
        offset: [-60 * window.$rem, 30 * window.$rem],
        textStyle: {
          color: 'darkorange',
          fontSize: 18 * window.$rem
        }
      }
    },
    data: [{
      'value': 110,
      'itemStyle': {
        'normal': {
          'color': '#f3715'
        }
      }
    },
    {
      'value': 210,
      'itemStyle': {
        'normal': {
          'color': '#ff2915'
        }
      }
    },
    {
      'value': 620,
      'itemStyle': {
        'normal': {
          'color': '#ff2215'
        }
      }
    }
    ],
    animationEasing: 'elasticOut',
    animationDelay: function (dataIndex, params) {
      return params.index * 30
    }
  },
  {
    name: '3级',
    xAxisIndex: 1,
    yAxisIndex: 3,
    type: 'pictorialBar',
    symbol: 'rect',
    symbolRepeat: true,
    symbolMargin: '20%',
    symbolClip: true,
    symbolSize: [10 * window.$rem, 20 * window.$rem, 30 * window.$rem],
    stack: '2',
    symbolBoundingData: 2000,
    label: {
      normal: {
        //  show: true,
        position: 'right',
        offset: [-60 * window.$rem, 30 * window.$rem],
        textStyle: {
          color: 'darkorange',
          fontSize: 18 * window.$rem
        }
      }
    },
    data: [{
      'value': 70,
      'itemStyle': {
        'normal': {
          'color': '#ff2731'
        }
      }
    },
    {
      'value': 50,
      'itemStyle': {
        'normal': {
          'color': '#fff'
        }
      }
    },
    {
      'value': 60,
      'itemStyle': {
        'normal': {
          'color': '#369'
        }
      }
    }
    ],
    animationEasing: 'elasticOut',
    animationDelay: function (dataIndex, params) {
      return params.index * 30
    }
  },
  {
    name: '4级',
    xAxisIndex: 1,
    yAxisIndex: 3,
    type: 'pictorialBar',
    symbol: 'rect',
    symbolRepeat: true,
    symbolMargin: '20%',
    symbolClip: true,
    symbolSize: [10 * window.$rem, 20 * window.$rem, 30 * window.$rem],
    stack: '2',
    symbolBoundingData: 2000,
    label: {
      normal: {
        //  show: true,
        position: 'right',
        offset: [-60 * window.$rem, 30 * window.$rem],
        textStyle: {
          color: 'darkorange',
          fontSize: 18 * window.$rem
        }
      }
    },
    data: [{
      'value': 70,
      'itemStyle': {
        'normal': {
          'color': '#ff2731'
        }
      }
    },
    {
      'value': 50,
      'itemStyle': {
        'normal': {
          'color': '#fff'
        }
      }
    },
    {
      'value': 60,
      'itemStyle': {
        'normal': {
          'color': '#369'
        }
      }
    }
    ],
    animationEasing: 'elasticOut',
    animationDelay: function (dataIndex, params) {
      return params.index * 30
    }
  }
  ]
}
export default optionsTwo
