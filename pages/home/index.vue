<template>
  <div class="home-page">

    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">

        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <!-- 登录了才显示该导航 -->
              <li v-if="user" class="nav-item">
                <nuxt-link
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'your_feed'
                    }
                  }"
                  class="nav-link"
                  :class="{ active: tab === 'your_feed' }"
                  exact
                >Your Feed</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'global_feed'
                    }
                  }"
                  class="nav-link"
                  :class="{ active: tab === 'global_feed' }"
                  exact
                >Global Feed</nuxt-link>
              </li>
              <li v-if="tag" class="nav-item">
                <nuxt-link
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'tag',
                      tag: tag
                    }
                  }"
                  class="nav-link"
                  :class="{ active: tab === 'tag' }"
                  exact
                >#{{ tag }}</nuxt-link>
              </li>
            </ul>
          </div>

          <div
            class="article-preview"
            v-for="article in articles"
            :key="article.slug">
            <div class="article-meta">
              <nuxt-link :to="{
                name: 'profile',
                params: { username: article.author.username }
              }"><img :src="article.author.image" /></nuxt-link>
              <div class="info">
                <nuxt-link :to="{
                  name: 'profile',
                  params: { username: article.author.username }
                }" class="author">{{ article.author.username }}</nuxt-link>
                <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{ active: article.favorited }"
                :disabled="article.favoriteDisabled"
                @click="toggleFavorite(article)">
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link 
              :to="{
                name: 'article',
                params: { slug: article.slug }
              }"
              class="preview-link">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

          <nav>
            <ul class="pagination">
              <li
                class="page-item ng-scope"
                :class="{
                  active: item === page
                }"
                v-for="item in totalPage" :key="item">
                <nuxt-link
                  :to="{
                    home: 'home',
                    query: {
                      page: item,
                      tag: $route.query.tag,
                      tab: tab
                    }
                  }"
                  class="page-link"
                >{{ item }}</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                :to="{
                  name: 'home',
                  query: { tag: item, tab: 'tag' }
                }"
                v-for="item in tags"
                :key="item"
                class="tag-pill tag-default"
              >{{ item }}</nuxt-link>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import {
  getArticleList,
  getTags,
  getFeedArticleList,
  addFavorite,
  deleteFavorite
} from '@/api'
import { mapState } from 'vuex'

export default {
  name: 'HomeIndex',
  watchQuery: ['page', 'tag', 'tab'],
  async asyncData ({ query, store }) {
    const limit = 10
    const page = Number(query.page) || 1
    const tag = query.tag || ''
    const tab = query.tab || (store.state.user ? 'your_feed' : 'global_feed')

    const loadArticleList = store.state.user && tab === 'your_feed'
      ? getFeedArticleList
      : getArticleList

    try {
      const [ articleRes, tagsRes ] = await Promise.all([
        loadArticleList({
          limit,
          offset: (page - 1) * limit,
          tag
        }),
        getTags()
      ])

      const { articles, articlesCount } = articleRes.data
      const { tags } = tagsRes.data

      // 给所有文章添加 点赞按钮的禁用状态
      articles.forEach(article => article.favoriteDisabled = false)

      return {
        tab,
        tag,
        tags,
        page,
        limit,
        articles,
        articlesCount,
      }
    } catch (err) {
      console.log(err)
    }
  },
  computed: {
    ...mapState(['user']),
    totalPage () {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },
  methods: {
    async toggleFavorite (article) {
      article.favoriteDisabled = true
      if (article.favorited) {
        // 取消点赞
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      } else {
        // 添加点赞
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoriteDisabled = false
    }
  }
}
</script>
