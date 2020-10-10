import { get } from 'utils/request.js'

export const getPlaylistTags = () => get("/playlist/hot")

export const getUserPlaylist = (uid) => get("/user/playlist", {
  uid
})


export const getPlaylistDetail = id => get("/playlist/detail",
  {
    id: id,
    _: new Date().getTime()
  })



export const getPlaylistCatlist = () => get("/playlist/catlist")

export const getPersonalizedPlaylist = () => get("/personalized")


export const getTopPlaylist = ({ cat = '全部', limit = 10, offset = 0, order = 'new' }) => get("/top/playlist",
  {
    cat,
    limit,
    offset,
    order
  })



// 精品歌单 before: 分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据
export const getHighPlaylist = ({ cat = '全部', limit = 20, before = '' }) => get("/top/playlist/highquality",
  {
    cat,
    limit,
    before
  })

export const getRelatedPlaylist = id => get("/related/playlist",
  {
    id
  })

export const getRecommendPlaylist = () => get('/personalized')

export const getPlaylistSubscribers = ({ limit = 20, offset = 0, id }) => get('/playlist/subscribers',{
  id,
  limit,
  offset
})
