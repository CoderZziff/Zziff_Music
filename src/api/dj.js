import { get } from 'utils/request.js'

export const getRecommendDjprogram = () => get("/personalized/djprogram")

export const getDjBanner = () => get("/dj/banner")

export const getDjCatelist = () => get("/dj/catelist")

export const getDjByCate = ({ type, limit = 5, offset = 0 }) => get("/dj/recommend/type", {
  type, limit, offset
})

export const getDjCatelistRecommend = () => get('/dj/category/recommend')

export const getDjRecommend = () => get('/dj/recommend')


// 今日优选
export const getDjPerfered = () => get('/dj/today/perfered')

// 推荐节目
export const getProgramRecommend = () => get('/program/recommend')

// 付费精选
export const getDjPaygift = () => get('/dj/paygift')

// 热门
export const getDjHot = () => get('/dj/hot')

// 电台详情
export const getDjDetail = (rid) => get('/dj/detail', {
  rid
})

// 获取电台的节目
export const getDjProgram = ({ rid, limit, offset, asc = false }) => get('/dj/program', {
  rid,
  limit,
  offset,
  asc
})
