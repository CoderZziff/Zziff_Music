import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

Vue.filter('NumberFormat', function (value) {
  if (!value) {
    return '0'
  }
  let intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
  return intPartFormat
})

Vue.filter('toWan', function (num) {
  return num >= 10000 ? (num / 10000).toFixed(1) + '万' : num
})

Vue.filter('moment', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

Vue.filter('toDate', function (val, format) {
  return moment(val).format(format || 'YYYY-MM-DD')
})

Vue.filter('duration', function (duration, type) {
  if (!duration) return '00:00'
  if (type && type == 'ms') duration = duration / 1000
  duration = Math.floor(duration)
  let minute = _pad((duration / 60) | 0)
  let second = _pad(duration % 60)
  return `${minute}:${second}`
})

function _pad (num) {
  return num < 10 ? '0' + num : num
}

