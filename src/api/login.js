import { get } from 'utils/request.js'

export const login_cellphone = (params) => get('/login/cellphone',{
  params
})

export const login_email = (params) => get('/login/email',{
  params
})

export const login_refresh = () => get('/login/refresh')

export const login_status = () => get('/login/status')

export const logout = () => get('/logout')
