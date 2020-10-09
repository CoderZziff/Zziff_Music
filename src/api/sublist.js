import { get } from 'utils/request.js'

export function getArtist ({ limit = 20, offset = 0 }) {
  return get('/artist/sublist', {
    params: {
      limit,
      offset,
      _: new Date().getTime()
    }
  })
}

export function getMv ({ limit = 50, offset = 0 }) {
  return get('/mv/sublist', {
    params: {
      limit,
      offset,
      _: new Date().getTime()
    }
  })
}

export function getSubAlbum ({ limit = 20, offset = 0 }) {
  return get('/album/sublist', {
    params: {
      limit,
      offset,
      _: new Date().getTime()
    }
  })
}
