import { get } from 'utils/request.js'

export function getBanner () {
  return get('/banner')
}
