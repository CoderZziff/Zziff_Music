import { get } from 'utils/request.js'

export const getPlaylistComment = (id, limit = 20, offset = 0) => get("/comment/playlist", {
  id, limit, offset
})

export const getAlbumComment = (id, limit = 20, offset = 0) => get("/comment/album", {
  id, limit, offset
})

export const getMVComment = (id, limit = 20, offset = 0) => get("/comment/mv", {
  id, limit, offset
})

export const getVideoComment = (id, limit = 20, offset = 0) => get("/comment/video", {
  id, limit, offset
})

export const getSongComment = (id, limit = 20, offset = 0, before = '') => get("/comment/music", {
  id, limit, offset, before
})


export const getDjComment = (id, limit = 20, offset = 0, before = '') => get("/comment/dj", {
  id, limit, offset, before
})
