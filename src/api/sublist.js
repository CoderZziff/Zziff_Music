import { get } from 'utils/request.js'

export const getArtist = ({ limit = 20, offset = 0 }) => get('/artist/sublist', {
  limit,
  offset,
  _: new Date().getTime()
})

export const getMv = ({ limit = 50, offset = 0 }) => get('/mv/sublist', {
  limit,
  offset,
  _: new Date().getTime()
})

export const getSubAlbum = ({ limit = 20, offset = 0 }) => get('/album/sublist', {
  limit,
  offset,
  _: new Date().getTime()
})
