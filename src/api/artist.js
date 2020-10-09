import { get } from 'utils/request.js'

export function getArtistList ({ cat = '全部', limit = 30, offset = 0, initial = '' }) {
  return get('/artist/list', {
    params: {
      cat,
      limit,
      offset,
      initial
    }
  })
}

export function getArtistAlbum ({ id, limit = 30, offset = 0 }) {
  return get('/artist/album', {
    params: {
      id,
      limit,
      offset
    }
  })
}

export function getArtistMV ({ id, limit = 10, offset = 0 }) {
  return get('/artist/mv', {
    params: {
      id,
      limit,
      offset
    }
  })
}

export function getArtistSongs ({ id, limit = 30, offset = 0 }) {
  return get('/artists', {
    params: {
      id,
      limit,
      offset
    }
  })
}

export function getArtistDesc ({ id, limit = 30, offset = 0 }) {
  return get('/artist/desc', {
    params: {
      id,
      limit,
      offset
    }
  })
}
// 相似歌手
export function getArtistSimi ({ id, limit = 30, offset = 0 }) {
  return get('/simi/artist', {
    params: {
      id,
      limit,
      offset
    }
  })
}

// 歌手排行榜
export function getTopArtist () {
  return get('/toplist/artist')
}
