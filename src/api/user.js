import { get } from 'utils/request.js'

export const login_cellphone = (params) => get('/login/cellphone', {
  params
})

// type: 签到类型 , 默认 0, 其中 0 为安卓端签到 ,1 为 web/PC 签到
export const daily_signine = (type) => get('/daily_signi', {
  type
})

// 用户详情
export const user_detail = (uid) => get('/user/detail', {
  uid,
  _: new Date().getTime()
})

// 获取用户信息 , 歌单，收藏，mv, dj 数量
export const user_subcount = (uid) => get('/user/subcount', {
  uid,
  _: new Date().getTime()
})

// 获取用户私信
export const user_msg_private = ({ limit = 10, offset = 0 }) => get('/msg/private', {
  imit, offset
})

// 获取用户关注列表
export const user_follower = ({ uid, limit = 10, offset = 0 }) => get('/user/follows', {
  uid, limit, offset
})

// 获取用户粉丝列表
export const user_followed = ({ uid, limit = 10, lasttime = -1 }) => get('/user/followeds', {
  uid, limit, lasttime
})

// 关注/取消关注用户
export const user_follow = ({ t, id }) => get('/follow', {
  t, id
})

// 获取用户歌单
export const getUserPlaylist = (uid, limit = 10000) => get('/user/playlist', {
  uid, limit
})

export const getUserCloud = (uid) => get('/user/cloud', {
  uid
})

// 获取用户喜欢歌曲列表
export const getUserLikeSongs = (uid) => get('/likelist', {
  uid,
  timestamp: new Date().getTime()
})

// 喜欢音乐
export const likeMusic = (musicId, isLike) => get('/like', {
  id: musicId,
  like: isLike
})

// 收藏专辑 t  1:收藏,2:取消收藏
export const subAlbum = ({ t, id }) => get('/album/sub', {
  t,
  id
})

// 收藏歌单 t  1:收藏,2:取消收藏
export const likePlaylist = (t, pid) => get('/playlist/subscribe', {
  t,
  id: pid
})

// 删除创建的歌单
export const deletePlaylist = (id) => get('/playlist/delete', {
  id
})

/**
 * 新建歌单
 * @param {*歌单名} name
 * @param {*privacy : 是否设置为隐私歌单，默认否，传'10'则设置成隐私歌单} privacy
 */
export const createPlaylist = ({ name, privacy }) => {
  let params = {
    name
  }
  if (privacy) {
    params.privacy = 10
  }
  return get('/playlist/create', {
    params
  })
}

// 对歌单添加或删除歌曲
export const addSongToList = ({ op, tracks, pid }) => get('/playlist/tracks', {
  op, tracks, pid
})

// 私人fm
export const getFm = () => get('/personal_fm?_=' + new Date().getTime())

// 每日推荐歌曲
export const getRecommendSongs = () => get('/personal_fm?_=' + new Date().getTime())


// 用户动态
export const getUserEvent = ({ uid, limit = 30, lasttime = -1 }) => get('/user/event',{
  uid, limit, lasttime
})

// 动态
export const getEvent = ({ pagesize = 30, lasttime = -1 }) => get('/event',{
  pagesize, lasttime
})

// 订阅电台 1订阅,0订阅
export const subDj = ({ t, rid }) => get('/dj/sub',{
  t, rid
})

// 收藏歌手 1为收藏,其他取消订阅
export const subArtist = ({ t, id }) => get('/artist/sub',{
  t, id
})

export const getHotTopic = ({ limit = 30, offset = 0 }) => get('/hot/topic',{
  limit, offset
})
