import { get } from 'utils/request.js'

export function getRecommendDjprogram () {
  return get('/personalized/djprogram')
}
export function getDjBanner () {
  return get('/dj/banner')
}
export function getDjCatelist () {
  return get('/dj/catelist')
}
export function getDjByCate ({ type, limit = 5, offset = 0 }) {
  return get('/dj/recommend/type', {
    params: {
      type, limit, offset
    }
  })
}
export function getDjCatelistRecommend () {
  return get('/dj/category/recommend')
}
export function getDjRecommend () {
  return get('/dj/recommend')
}
// 今日优选
export function getDjPerfered () {
  return get('/dj/today/perfered')
}
// 推荐节目
export function getProgramRecommend () {
  return get('/program/recommend')
}
// 付费精选
export function getDjPaygift () {
  return get('/dj/paygift')
}
// 热门
export function getDjHot () {
  return get('/dj/hot')
}
// 电台详情
export function getDjDetail (rid) {
  return get('/dj/detail', {
    params: {
      rid
    }
  })
}
// 获取电台的节目
export function getDjProgram ({ rid, limit, offset, asc = false }) {
  return get('/dj/program', {
    params: {
      rid,
      limit,
      offset,
      asc
    }
  })
}
