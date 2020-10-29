import { request } from '@/plugins/request'
import {
  ADD_COMMENTS,
  FAVORITE_ARTICLE,
  FEED_ARTICLES,
  GET_ARTICLE,
  GET_COMMENTS,
  LIST_ARTICLES,
  UNFAVORITE_ARTICLE
} from './api'

/**
 * 获取公共文章列表
 * @param {Object} params 查询参
 * Filter by tag:       ?tag=AngularJS
 * Filter by author:    ?author=jake
 * Favorited by user:   ?favorited=jake
 * Limit number of articles (default is 20):        ?limit=20
 * Offset/skip number of articles (default is 0):   ?offset=0
 */
export const getArticleList = params => {
  return request({
    method: 'GET',
    url: LIST_ARTICLES,
    params
  })
}

/**
 * 获取关注的文章列表
 * @param {Object} params 查询参
 * Filter by tag:       ?tag=AngularJS
 * Filter by author:    ?author=jake
 * Favorited by user:   ?favorited=jake
 * Limit number of articles (default is 20):        ?limit=20
 * Offset/skip number of articles (default is 0):   ?offset=0
 */
export const getFeedArticleList = params => {
  return request({
    method: 'GET',
    url: FEED_ARTICLES,
    params
  })
}

/**
 * 添加点赞
 * @param {Number | String} slug 文章 slug
 */
export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: FAVORITE_ARTICLE.replace(':slug', slug)
  })
}

/**
 * 取消点赞
 * @param {Number | String} slug 文章 slug
 */
export const deleteFavorite = slug => {
  return request({
    method: 'DELETE',
    url: UNFAVORITE_ARTICLE.replace(':slug', slug)
  })
}

/**
 * 获取文章详情
 * @param {Number | String} slug 文章 slug
 */
export const getArticle = slug => {
  return request({
    method: 'GET',
    url: GET_ARTICLE.replace(':slug', slug)
  })
}

/**
 * 获取文章评论
 * @param {Number | String} slug 文章 slug
 */
export const getComments = slug => {
  return request({
    method: 'GET',
    url: GET_COMMENTS.replace(':slug', slug)
  })
}

/**
 * 发布文章评论
 * @param {Number | String} slug 文章 slug
 * @param {Object} data 评论信息：{ "comment": { "body": "His name was my name too." } }
 */
export const addComments = (slug, data) => {
  return request({
    method: 'POST',
    url: ADD_COMMENTS.replace(':slug', slug),
    data
  })
}
