import { get } from 'utils/request.js'

// 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频
export const getSearch = ({ keyword, limit = 30, offset = 0, type = 1 }) => get('/search', {
  keywords: keyword, limit, offset, type
})

export const getSearchHot = () => get('/search/hot')

export const getSearchSuggest = (keywords) => get('/search/suggest', {
  keywords
})

// 获取搜索匹配
export const getSearchMultimatch = (keywords) => get('/search/multimatch', {
  keywords
})
