/*
 * @Author: zhangxi
 * @Date: 2020-02-27 14:36:07
 * @Last Modified by: zhangxi
 * @Last Modified time: 2020-02-27 16:05:13
 */
let date = ['2017年', '2018年', '2019年']
let data = [10, 20, 10]
let data2 = [5, 10, 20]
let options = {
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    top: '12%',
    left: '2%',
    right: '8%',
    bottom: '12%',
    containLabel: true
  },
  color: ['#2c5c6b', '#66d699'],
  legend: {
    show: true,
    icon: 'rect',
    right: 30,
    top: 0,
    itemWidth: 25,
    itemHeight: 5,
    shadowColor: 'rgba(255,255,255,1)',
    shadowBlur: 20,
    backgroundColor: 'rgba(0,0,0,.1)',
    textStyle: {
      color: '#93B3CC',
      fontSize: 19,
      textShadowColor: '#93B3CC',
      textShadowBlur: 1
    }

  },
  xAxis: [{
    type: 'category',
    boundaryGap: true,
    axisLine: {
      show: true,
      lineStyle: {
        color: '#bec2d3'
      }
    },
    axisLabel: {
      color: '#dae2f6',
      fontSize: 19,
      rotate: 0,
      inside: true,
      margin: 2
    },
    axisTick: {
      show: true,
      inside: true
    },
    data: date
  }],
  yAxis: [{
    type: 'value',
    nameTextStyle: {
      color: '#fff',
      align: 'right',
      fontSize: 19 * window.$rem
    },
    splitNumber: 4,
    axisTick: { show: false },
    axisLine: {
      show: false
    },
    axisLabel: {
      color: '#bec2d3',
      fontSize: 19
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'solid',
        width: 1,
        color: '#42444f'
      }
    }
  }],
  series: [
    {
      name: '企业职工',
      type: 'line',
      smooth: true, // 是否平滑曲线显示
      symbolSize: 0,
      lineStyle: {
        normal: {
          color: '#7ecad5',
          borderWidth: 2,
          shadowColor: '#6194ab', // 阴影颜色
          shadowBlur: 5 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
        },
        borderWidth: 1
      },
      areaStyle: { // 区域填充样式
        normal: {
          // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0,114,170,1)' // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: '#005981' // 50% 处的颜色
              },
              {
                offset: 0.8,
                color: 'rgba(0,20,44,0.2)' // 100% 处的颜色
              }
            ],
            globalCoord: true // 缺省为 false
          }
        }
      },
      data: data
    },
    {
      name: '城乡居民',
      type: 'line',
      smooth: true, // 是否平滑曲线显示
      symbolSize: 0,
      lineStyle: {
        normal: {
          color: '#7ac6a5',
          borderWidth: 2,
          shadowColor: '#6194ab', // 阴影颜色
          shadowBlur: 5 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
        },
        borderWidth: 1
      },
      areaStyle: { // 区域填充样式
        normal: {
          // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#2b5147' // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: '#183b36' // 50% 处的颜色
              },
              {
                offset: 0.8,
                color: 'rgba(0,20,44,0.2)' // 100% 处的颜色
              }
            ],
            globalCoord: true // 缺省为 false
          }
        }
      },
      data: data2
    }
  ]
}
export default options
