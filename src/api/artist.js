import { get } from 'utils/request.js'


export const getArtistList = ({ cat = '全部', limit = 30, offset = 0, initial = '' }) => get("/artist/list", {
  cat,
  limit,
  offset,
  initial
})

export const getArtistAlbum = ({ id, limit = 30, offset = 0 }) => get("/artist/album", {
  id,
  limit,
  offset
})

export const getArtistMV = ({ id, limit = 10, offset = 0 }) => get("/artist/mv", {
  id,
  limit,
  offset
})

export const getArtistSongs = ({ id, limit = 30, offset = 0 }) => get("/artist", {
  id,
  limit,
  offset
})

export const getArtistDesc = ({ id, limit = 30, offset = 0 }) => get("/artist/desc", {
  id,
  limit,
  offset
})

// 相似歌手
export const getArtistSimi = ({ id, limit = 30, offset = 0 }) => get("/simi/artist", {
  id,
  limit,
  offset
})

// 歌手排行榜
export const getArtistSimi = () => get("/toplist/artist")
