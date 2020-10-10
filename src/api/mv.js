import { get } from 'utils/request.js'

export const getPersonalizedMV = () => get('/personalized/mv')

// area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部
// type: 类型,可选值为全部,官方版,原生,现场版,网易出品,不填则为全部
// order: 排序,可选值为上升最快,最热,最新,不填则为上升最快
// limit: 取出数量 , 默认为 30
// offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
export const getAllMV = ({ area = '全部', type = '全部', order = '上升最快', limit = 30, offset = 0 }) => get('/mv/all',{
  area, type, order, limit, offset
})

export const getTopMV = ({ limit = 30, offset = 0 }) => get('/top/mv',{
  limit, offset
})

export const getNewMV = ({ limit = 10 }) => get('/mv/first',{
  limit
})

export const getMVInfo = (mvid) => get('/mv/detail',{
  mvid
})

export const getMvUrl = (id) => get('/mv/url',{
  id
})

export const getSimiMV = (mvid) => get('/simi/mv',{
  mvid
})

// 收藏视频 t : 1 为收藏,其他为取消收藏
export const subMV = (mvid, t) => get('/mv/sub',{
  mvid, t
})
