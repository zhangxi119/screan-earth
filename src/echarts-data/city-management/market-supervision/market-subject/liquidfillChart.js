/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-04-15 14:31:14
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-23 23:26:41
 */
export default {
  series: [{
    type: 'liquidFill',
    data: [{
      value: 0.6,
      itemStyle: {
        color: '#00FFED'
        // color: {
        //   type: 'linear',
        //   x: 0.5,
        //   y: 0.5,
        //   r: 0.5,
        //   colorStops: [{
        //     offset: 0, color: '#00AEFF' // 0% 处的颜色
        //   }, {
        //     offset: 1, color: '#00FFED' // 100% 处的颜色
        //   }],
        //   globalCoord: false // 缺省为 false
        // }
      }
    }],
    itemStyle: {
      // opacity: 0.8
    },
    outline: {
      show: false
    },
    emphasis: {
      itemStyle: {
        // opacity: 1
      }
    },
    backgroundStyle: {
      color: 'transparent'
    },
    // center: ['50%', '50%'],
    // radius: [0, '100%'],
    label: {
      show: true,
      color: '#FFFF',
      insideColor: '#fff',
      fontSize: 16 * window.$rem,
      fontWeight: 'bold',
      align: 'center',
      baseline: 'middle',
      position: 'inside'
    }
  }]
}
