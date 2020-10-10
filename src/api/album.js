import { get } from 'utils/request.js'

export const getTopAlbum = ({ limit, offset }) => get("/top/album", {
  limit, offset
})

export const getNewestAlbum = ({ limit, offset }) => get("/album/newest", {
  limit, offset
})

export const getAlbum = (id) => get("/album", {
  id
})
