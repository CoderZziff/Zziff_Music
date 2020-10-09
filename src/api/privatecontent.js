import { get } from 'utils/request.js'

export function getPrivateContent () {
  return get('/personalized/privatecontent')
}
