import { get } from 'utils/request.js'

export function getTopAlbum ({ limit, offset }) {
  return get('/top/album', {
    params: {
      limit, offset
    }
  })
}

export function getNewestAlbum ({ limit, offset }) {
  return get('/album/newest', {
    params: {
      limit, offset
    }
  })
}

export function getAlbum (id) {
  return get('/album', {
    params: {
      id
    }
  })
}
