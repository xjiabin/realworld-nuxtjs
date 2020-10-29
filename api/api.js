export const version = '/api'

// 登录 post
export const LOGIN = `${version}/users/login`
// 注册 post
export const REGISTER = `${version}/users`
// 获取当前用户 get
export const GET_CURRENT_USER = `${version}/user`
// 修改用户信息 put
export const UPDATE_USER = `${version}/users/login`
// 获取某人的用户信息 get
export const GET_PROFILE = `${version}/profiles/:username`
// 关注用户 post
export const FOLLOW_USER = `${version}/profiles/:username/follow`
// 取消关注 delete
export const UNFOLLOW_USER = `${version}/profiles/:username/follow`
// 获取文章列表 get
export const LIST_ARTICLES = `${version}/articles`
// 获取关注的用户的文章 get
export const FEED_ARTICLES = `${version}/articles/feed`
// 获取文章详情 get
export const GET_ARTICLE = `${version}/articles/:slug`
// 创建文章 post
export const CREATE_ARTICLE = `${version}/articles`
// 修改文章 put
export const UPDATE_ARTICLE = `${version}/articles/:slug`
// 删除文章 delete
export const DELETE_ARTICLE = `${version}/articles/:slug`
// 评论文章 post
export const ADD_COMMENTS = `${version}/articles/:slug/comments`
// 获取文章评论 get
export const GET_COMMENTS = `${version}/articles/:slug/comments`
// 删除文章评论 delete
export const DELETE_COMMENTS = `${version}/articles/:slug/comments/:id`
// 收藏文章 post
export const FAVORITE_ARTICLE = `${version}/articles/:slug/favorite`
// 取消收藏文章 delete
export const UNFAVORITE_ARTICLE = `${version}/articles/:slug/favorite`
// 获取标签 get
export const GET_TAGS = `${version}/tags`
