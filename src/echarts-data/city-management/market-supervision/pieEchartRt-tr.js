/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-08 10:05:12
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-14 21:31:39
 */
import echarts from 'echarts'
function returnData (data) {
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    // title: [
    //   {
    //     text: data.zy06002,
    //     x: '14%',
    //     y: '40%',
    //     textStyle: {
    //       color: 'rgba(250,252,255,1)',
    //       textShadowColor: 'rgba(149,229,252,0.28)',
    //       textShadowOffsetX: 0,
    //       textShadowOffsetY: 1,
    //       textShadowBlur: 10,
    //       fontSize: 26 * window.$rem,
    //       fontStyle: 'italic',
    //       fontWeight: 'normal'
    //     }
    //   },
    //   {
    //     text: '抽查家次',
    //     x: '16%',
    //     y: '57%',
    //     textStyle: {
    //       color: 'rgba(223,226,251,1)',
    //       fontSize: 19 * window.$rem,
    //       fontStyle: 'italic',
    //       fontWeight: 'normal'
    //     }
    //   }
    // ],
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
    legend: {
      x: '50%',
      y: 'center',
      orient: 'vertical',
      textStyle: {
        color: 'rgba(255,255,255,1)',
        fontSize: 17 * window.$rem
      },
      itemHeight: 10 * window.$rem,
      itemWidth: 10 * window.$rem,
      data: [
        { name: '合格', textStyle: { color: 'rgba(255,255,255,1)', fontSize: 17 * window.$rem } },
        { name: '不合格', textStyle: { color: 'rgba(255,255,255,1)', fontSize: 17 * window.$rem } }
      ]
    },
    calculable: true,
    series: [
      {
        name: '年度检查情况',
        type: 'pie',
        radius: [60 * window.$rem, 75 * window.$rem],
        center: ['26%', '53%'],
        label: {
          show: false
        },
        data: [
          {
            value: data.zy06004,
            name: '不合格',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#4EB4DE'
              }, {
                offset: 1,
                color: '#307FF3'
              }])
            }
          },
          {
            value: data.zy06003,
            name: '合格',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#F9E659'
              }, {
                offset: 1,
                color: '#F2B84E'
              }])
            }
          }
        ]
      }
      // {
      //   name: '面积模式',
      //   type: 'pie',
      //   radius: [55 * window.$rem, 80 * window.$rem],
      //   center: ['26%', '53%'],
      //   label: {
      //     show: false
      //   },
      //   data: [
      //     {
      //       value: data.zy06004,
      //       name: '不合格',
      //       itemStyle: {
      //         color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
      //           offset: 0,
      //           color: '#4EB4DE'
      //         }, {
      //           offset: 1,
      //           color: '#307FF3'
      //         }])
      //       }
      //     },
      //     {
      //       value: data.zy06003,
      //       name: '合格',
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
