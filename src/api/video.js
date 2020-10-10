import { get } from 'utils/request.js'

export const getVideo = (groupId) => {
  let id = groupId || 5100
  return get(`/video/group?id=${id}&_=${new Date().getTime()}`)
}
// /video/group/list
export const getVideoCates = () => get('/video/group/list')

export const getVideoUrl = (id) => get(`/video/url?id=${id}`)

export const getVideoDetail = (id) => get(`/video/detail?id=${id}`)

// 相关视频
export const getRelatedVideo = (id) => get(`/related/allvideo?id=${id}`)

// 收藏视频 t : 1 为收藏,其他为取消收藏
export const subVideo = (id, t) => get('/video/sub',{
  id, t
})
