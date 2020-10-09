import { get } from 'utils/request.js'

export function login_cellphone (params) {
  return get('/login/cellphone', {
    params
  })
}

// type: 签到类型 , 默认 0, 其中 0 为安卓端签到 ,1 为 web/PC 签到
export function daily_signin (type) {
  return get('/daily_signin', {
    params: {
      type
    }
  })
}

// 用户详情
export function user_detail (uid) {
  return get('/user/detail', {
    params: {
      uid,
      _: new Date().getTime()
    }
  })
}

// 获取用户信息 , 歌单，收藏，mv, dj 数量
export function user_subcount (uid) {
  return get('/user/subcount', {
    params: {
      uid,
      _: new Date().getTime()
    }
  })
}

// 获取用户私信
export function user_msg_private ({ limit = 10, offset = 0 }) {
  return get('/msg/private', {
    params: { limit, offset }
  })
}

// 获取用户关注列表
export function user_follower ({ uid, limit = 10, offset = 0 }) {
  return get('/user/follows', {
    params: { uid, limit, offset }
  })
}

// 获取用户粉丝列表
export function user_followed ({ uid, limit = 10, lasttime = -1 }) {
  return get('/user/followeds', {
    params: { uid, limit, lasttime }
  })
}

// 关注/取消关注用户
export function user_follow ({ t, id }) {
  return get('/follow', {
    params: { t, id }
  })
}

// 获取用户歌单
export function getUserPlaylist (uid) {
  let params = {
    uid,
    limit: 10000
  }
  if (process.env.NODE_ENV !== 'production') {
    params.timestamp = new Date().getTime()
  }
  return get('/user/playlist', {
    params
  })
}

export function getUserCloud (uid) {
  return get('/user/cloud', {
    params: {
      uid
    }
  })
}

// 获取用户喜欢歌曲列表
export function getUserLikeSongs (uid) {
  let params = {
    uid
  }
  if (process.env.NODE_ENV === 'production') {
    params.timestamp = new Date().getTime()
  }
  return get('/likelist', {
    params
  })
}

// 喜欢音乐
export function likeMusic (musicId, isLike) {
  return get('/like', {
    params: {
      id: musicId,
      like: isLike
    }
  })
}

// 收藏专辑 t  1:收藏,2:取消收藏
export function subAlbum ({ t, id }) {
  return get('/album/sub', {
    params: {
      t,
      id
    }
  })
}

// 收藏歌单 t  1:收藏,2:取消收藏
export function likePlaylist (t, pid) {
  return get('/playlist/subscribe', {
    params: {
      t,
      id: pid
    }
  })
}

// 删除创建的歌单
export function deletePlaylist (id) {
  return get('/playlist/delete', {
    params: {
      id
    }
  })
}

/**
 * 新建歌单
 * @param {*歌单名} name
 * @param {*privacy : 是否设置为隐私歌单，默认否，传'10'则设置成隐私歌单} privacy
 */
export function createPlaylist ({ name, privacy }) {
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
export function addSongToList ({ op, tracks, pid }) {
  return get('/playlist/tracks', {
    params: {
      op, tracks, pid
    }
  })
}

// 私人fm
export function getFm () {
  return get('/personal_fm?_=' + new Date().getTime())
}

// 每日推荐歌曲
export function getRecommendSongs () {
  return get('/recommend/songs')
}

// 用户动态
export function getUserEvent ({ uid, limit = 30, lasttime = -1 }) {
  return get('/user/event', {
    params: {
      uid, limit, lasttime
    }
  })
}

// 动态
export function getEvent ({ pagesize = 30, lasttime = -1 }) {
  return get('/event', {
    params: {
      pagesize, lasttime
    }
  })
}

// 订阅电台 1订阅,0订阅
export function subDj ({ t, rid }) {
  return get('/dj/sub', {
    params: {
      t, rid
    }
  })
}

// 收藏歌手 1为收藏,其他取消订阅
export function subArtist ({ t, id }) {
  return get('/artist/sub', {
    params: {
      t, id
    }
  })
}

export function getHotTopic ({ limit = 30, offset = 0 }) {
  return get('/hot/topic', {
    params: {
      limit, offset
    }
  })
}
