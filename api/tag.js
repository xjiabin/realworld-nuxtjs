import { request } from '@/plugins/request'
import { GET_TAGS } from './api'

/**
 * 获取所有标签列表
 */
export const getTags = () => {
  return request({
    method: 'GET',
    url: GET_TAGS
  })
}
