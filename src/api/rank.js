import { get } from 'utils/request.js'

// 全球榜
export function getToplist () {
  return get('/toplist')
}

export function getTopDetail (idx) {
  return get('/top/list', {
    params: {
      idx
    }
  })
}

export function getToplistDetail () {
  return get('/toplist/detail')
}
