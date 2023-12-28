/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-06
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-19 17:46:05
 */
// import echarts from 'echarts'
function returnData (data) {
  let value1 = 0
  let value2 = 0
  let value3 = 0
  // let totalMoney = 0
  data.forEach(item => {
    // totalMoney += item.zt04005
    if (item.zt04003 === 1) { // 企业
      value1 = item.zt04005
    } else if (item.zt04003 === 2) { // 个体工商
      value2 = item.zt04005
    } else if (item.zt04003 === 3) { // 农专合作社
      value3 = item.zt04005
    }
  })
  let option = {
    color: ['#5FC372', '#4BAEDD', '#EF8432'],
    backgroundColor: 'rgba(0,0,0,0)',
    // title: [
    //   {
    //     text: totalMoney,
    //     x: '16%',
    //     y: '36%',
    //     textStyle: {
    //       color: 'rgba(250,252,255,1)',
    //       textShadowColor: 'rgba(149,229,252,0.28)',
    //       textShadowOffsetX: 0,
    //       textShadowOffsetY: 1,
    //       textShadowBlur: 10 * window.$rem,
    //       fontSize: 24 * window.$rem,
    //       fontStyle: 'italic',
    //       fontWeight: 400,
    //       fontFamily: 'Impact'
    //     }
    //   },
    //   {
    //     text: '新增',
    //     x: '15%',
    //     y: '46%',
    //     textStyle: {
    //       color: 'rgba(223,226,251,1)',
    //       fontSize: 19 * window.$rem,
    //       fontStyle: 'italic',
    //       fontWeight: 'bold'
    //     }
    //   },
    //   {
    //     text: '(万元)',
    //     x: '25%',
    //     y: '47%',
    //     textStyle: {
    //       color: 'rgba(223,226,251,0.72)',
    //       fontSize: 15 * window.$rem,
    //       fontStyle: 'italic',
    //       fontWeight: 400
    //     }
    //   }
    // ],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    legend: {
      orient: 'vertical',
      // right: 0,
      left: '60%',
      top: '30%',
      itemGap: 20 * window.$rem,
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      textStyle: {
        color: 'rgba(255,255,255,1)',
        padding: [0, 0, 0, 4 * window.$rem],
        fontSize: 17 * window.$rem
      },
      data: [
        {name: '企业'},
        {name: '个体'},
        {name: '农专'}
      ]
    },
    calculable: true,
    series: [
      {
        name: '注册资本',
        type: 'pie',
        radius: [60 * window.$rem, 75 * window.$rem],
        center: ['26%', '45%'],
        label: {
          show: false
        },
        // data: [
        //   {
        //     value: value2,
        //     name: '个体商户 ' + value2 + '万 ' + (value2 / totalMoney * 100).toFixed(2) + '%',
        //     itemStyle: {
        //       color: '#2266E4'
        //     }
        //   },
        //   {
        //     value: value1,
        //     name: '企业 ' + value1 + '万 ' + (value1 / totalMoney * 100).toFixed(2) + '%',
        //     itemStyle: {
        //       color: '#6BE673'
        //     }
        //   },
        //   {
        //     value: value3,
        //     name: '农专 ' + value3 + '万 ' + (value3 / totalMoney * 100).toFixed(2) + '%',
        //     itemStyle: {
        //       color: '#F9E659'
        //     }
        //   }
        // ]
        data: [
          {
            value: value2,
            name: '个体'
            // itemStyle: {
            //   color: '#2266E4'
            // }
          },
          {
            value: value1,
            name: '企业'
            // itemStyle: {
            //   color: '#6BE673'
            // }
          },
          {
            value: value3,
            name: '农专'
            // itemStyle: {
            //   color: '#F9E659'
            // }
          }
        ]
      }
      // {
      //   name: '注册资本',
      //   type: 'pie',
      //   radius: [60 * window.$rem, 85 * window.$rem],
      //   center: ['26%', '45%'],
      //   label: {
      //     show: false
      //   },
      //   data: [
      //     {
      //       value: value2,
      //       name: '个体商户',
      //       itemStyle: {
      //         color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
      //           offset: 0,
      //           color: '#2266E4'
      //         }, {
      //           offset: 1,
      //           color: '#2266E4'
      //         }])
      //       }
      //     },
      //     {
      //       value: value1,
      //       name: '个体商户',
      //       itemStyle: {
      //         color: 'transparent'
      //       }
      //     },
      //     {
      //       value: value3,
      //       name: '个体商户',
      //       itemStyle: {
      //         color: 'transparent'
      //       }
      //     }
      //   ]
      // }
    ]
  }
  return option
}
export default returnData
