import { get } from 'utils/request.js'

// 全球榜
export const getToplist = () => get('/toplist')

export const getTopDetail = (idx) => get('/top/list',{
  idx
})

export const getToplistDetail = () => get('/toplist/detail')
