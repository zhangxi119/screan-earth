/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-04-13 20:23:10
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-13 20:23:44
 */
import sz from '../images/zone/sz.png'
import eb from '../images/zone/eb.png'
import jk from '../images/zone/jk.png'
import sw from '../images/zone/sw.png'
import em from '../images/zone/em.png'
import jj from '../images/zone/jj.png'
import jy from '../images/zone/jy.png'
import wt from '../images/zone/wt.png'
import qw from '../images/zone/qw.png'
import mc from '../images/zone/mc.png'
import mb from '../images/zone/mb.png'

let mapPoints = {
  '市中区': {lon: '103.731909', lat: '29.579459', img: sz},
  '峨边彝族自治县': {lon: '103.17144759803993', lat: '29.092320222621108', img: eb},
  '金口河区': {lon: '103.0498171172697', lat: '29.340730491460505', img: jk},
  '沙湾区': {lon: '103.53837912661115', lat: '29.324989427901677', img: sw},
  '峨眉山市': {lon: '103.3608351100639', lat: '29.48108970080883', img: em},
  '夹江县': {lon: '103.578479', lat: '29.744034', img: jj},
  '井研县': {lon: '104.01429221011918', lat: '29.610130805505975', img: jy},
  '五通桥区': {lon: '103.823375', lat: '29.41306', img: wt},
  '犍为县': {lon: '103.955651', lat: '29.213968', img: qw},
  '沐川县': {lon: '103.907969', lat: '28.962066', img: mc},
  '马边彝族自治县': {lon: '103.46384535877796', lat: '28.865337491502974', img: mb}
}
let mapPointsEasy = {
  '市中区': {lon: '103.731909', lat: '29.579459', img: sz},
  '峨边县': {lon: '103.17144759803993', lat: '29.092320222621108', img: eb},
  '金口河': {lon: '103.0498171172697', lat: '29.340730491460505', img: jk},
  '沙湾区': {lon: '103.53837912661115', lat: '29.324989427901677', img: sw},
  '峨眉山': {lon: '103.3608351100639', lat: '29.48108970080883', img: em},
  '夹江县': {lon: '103.578479', lat: '29.744034', img: jj},
  '井研县': {lon: '104.01429221011918', lat: '29.610130805505975', img: jy},
  '五通桥': {lon: '103.823375', lat: '29.41306', img: wt},
  '犍为县': {lon: '103.955651', lat: '29.213968', img: qw},
  '沐川县': {lon: '103.907969', lat: '28.962066', img: mc},
  '马边县': {lon: '103.46384535877796', lat: '28.865337491502974', img: mb}
}
export default mapPoints
export {
  mapPointsEasy
}
