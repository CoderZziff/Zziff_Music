import { get } from 'utils/request.js'

export function login_cellphone (params) {
  return get('/login/cellphone', {
    params
  })
}
export function login_email (params) {
  return get('/login/cellphone', {
    params
  })
}
export function login_refresh () {
  return get('/login/refresh')
}
export function login_status () {
  return get('/login/status')
}
export function logout () {
  return get('/logout')
}
