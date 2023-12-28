/*
 * @Descripttion:
 * @Author: chenqy
 * @Date: 2020-04-13
 * @LastEditors: chenqy
 * @LastEditTime: 2020-04-13
 */
class GradientColor {
  constructor (startColor, endColor, step) {
    this.startColor = startColor // 开始颜色
    this.endColor = endColor // 结束颜色
    this.step = step // 划分多少个区域
  }
  init () {
    let startRGB = this.colorRgb(this.startColor)// 转换为rgb数组模式
    let startR = startRGB[0]
    let startG = startRGB[1]
    let startB = startRGB[2]
    let endRGB = this.colorRgb(this.endColor)
    let endR = endRGB[0]
    let endG = endRGB[1]
    let endB = endRGB[2]
    let sR = (endR - startR) / this.step// 总差值
    let sG = (endG - startG) / this.step
    let sB = (endB - startB) / this.step
    let colorArr = []
    for (var i = 0; i < this.step; i++) {
      // 计算每一步的hex值
      var hex = this.colorHex('rgb(' + parseInt((sR * i + startR)) + ',' + parseInt((sG * i + startG)) + ',' + parseInt((sB * i + startB)) + ')')
      colorArr.push(hex)
    }
    return colorArr
  }
  // html颜色值转换rgb颜色值
  colorRgb (color) {
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
    let sColor = color.toLowerCase()
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = '#'
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
        }
        sColor = sColorNew
      }
      // 处理六位的颜色值
      var sColorChange = []
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
      }
      return sColorChange
    } else {
      return sColor
    }
  }
  colorHex (rgb) {
    var _this = rgb
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
    if (/^(rgb|RGB)/.test(_this)) {
      var aColor = _this.replace(/(?:(|)|rgb|RGB)*/g, '').split(',')
      var strHex = '#'
      for (var i = 0; i < aColor.length; i++) {
        var hex = Number(aColor[i]).toString(16)
        hex = hex < 10 ? 0 + '' + hex : hex// 保证每个rgb的值为2位
        if (hex === '0') {
          hex += hex
        }
        strHex += hex
      }
      if (strHex.length !== 7) {
        strHex = _this
      }
      return strHex
    } else if (reg.test(_this)) {
      var aNum = _this.replace(/#/, '').split('')
      if (aNum.length === 6) {
        return _this
      } else if (aNum.length === 3) {
        var numHex = '#'
        for (let i = 0; i < aNum.length; i += 1) {
          numHex += (aNum[i] + aNum[i])
        }
        return numHex
      }
    } else {
      return _this
    }
  }
}
export default GradientColor
