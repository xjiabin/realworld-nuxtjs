<template>
  <div>
    <form class="card comment-form" @submit.prevent="onSubmit">
      <div class="card-block">
        <textarea v-model="commentValue" class="form-control" placeholder="Write a comment..." rows="3"></textarea>
      </div>
      <div class="card-footer">
        <img v-if="user" :src="user.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary">
        Post Comment
        </button>
      </div>
    </form>

    <div class="card" v-for="comment in comments" :key="comment.id">
      <div class="card-block">
        <p class="card-text">{{ comment.body }}</p>
      </div>
      <div class="card-footer">
        <nuxt-link 
          :to="{
            name: 'profile',
            params: { username: comment.author.username }
          }" class="comment-author">
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link 
          :to="{
            name: 'profile',
            params: { username: comment.author.username }
          }" class="comment-author">
          {{ comment.author.username }}
        </nuxt-link>
        <span class="date-posted">{{ comment.createAt | date('MMM DD, YYYY') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getComments, addComments } from '@/api'
import { mapState } from 'vuex'

export default {
  name: 'ArticleComments',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      commentValue: '', // 评论
      comments: [] // 文章评论列表
    }
  },
  computed: {
    ...mapState(['user'])
  },
  mounted () {
    this.getCommentsList()
  },
  methods: {
    async getCommentsList () {
      const { data } = await getComments(this.article.slug)
      this.comments = data.comments
      this.isCommenting = false
    },
    async onSubmit () {
      if (!this.commentValue || this.isCommenting) return
      // 阻止重复提交
      this.isCommenting = true

      await addComments(this.article.slug, {
        comment: {
          body: this.commentValue
        }
      })
      this.isCommenting = false
      this.getCommentsList()
    }
  }
}
</script>
