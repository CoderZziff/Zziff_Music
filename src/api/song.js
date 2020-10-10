import { get } from 'utils/request.js'

//歌曲地址
export const getSongUrl = params => get("/song/url", { id: params })


// 歌曲详情
export const getSongDetail = ids => get("/song/detail",
  {
    ids
  })

// 获取歌词
export const getLyric = id => get("/lyric",
  {
    id
  })

export const getNewSong = () => get("/personalized/newsong")


// 心动模式 /playmode/intelligence/list?id=33894312&pid=24381616

export const getIntelligence = (id, pid) => get("/playmode/intelligence/list", {
  id,
  pid,
  _: new Date().getTime()
})


// 相似音乐
export const getSimiSong = (id) => get("/simi/song", {
  id
})

// 根据歌曲找到包含这首歌的歌单
export const getSimiPlaylist = (id) => get("/simi/playlist", {
  id
})

// 获取最近 5 个听了这首歌的用户
export const getSongUsers = (id) => get("/simi/user", {
  id
})

// 新歌速递
// 全部:0
// 华语:7
// 欧美:96
// 日本:8
// 韩国:16
export const getTopSong = (type) => get("/top/song", {
  type
})
