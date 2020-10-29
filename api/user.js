import { request } from '@/plugins/request'
import { LOGIN, REGISTER } from './api'

/**
 * 登录
 * @param {Object} data 用户数据：{ "user": { "email": "jake@jake.jake", "password": "jakejake" } }
 */
export const login = data => {
  return request({
    method: 'POST',
    url: LOGIN,
    data
  })
}

/**
 * 注册
 * @param {Object} data 用户数据：{ "user": { "username": "Jacob", "email": "jake@jake.jake", "password": "jakejake"} }
 */
export const register = data => {
  return request({
    method: 'POST',
    url: REGISTER,
    data
  })
}
