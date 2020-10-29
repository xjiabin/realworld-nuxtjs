exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ login; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ register; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ getArticleList; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ getFeedArticleList; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ addFavorite; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ deleteFavorite; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ getArticle; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ getComments; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ addComments; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ getTags; });

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(7);

// CONCATENATED MODULE: ./api/api.js
const version = '/api'; // 登录 post

const LOGIN = `${version}/users/login`; // 注册 post

const REGISTER = `${version}/users`; // 获取当前用户 get

const GET_CURRENT_USER = `${version}/user`; // 修改用户信息 put

const UPDATE_USER = `${version}/users/login`; // 获取某人的用户信息 get

const GET_PROFILE = `${version}/profiles/:username`; // 关注用户 post

const FOLLOW_USER = `${version}/profiles/:username/follow`; // 取消关注 delete

const UNFOLLOW_USER = `${version}/profiles/:username/follow`; // 获取文章列表 get

const LIST_ARTICLES = `${version}/articles`; // 获取关注的用户的文章 get

const FEED_ARTICLES = `${version}/articles/feed`; // 获取文章详情 get

const GET_ARTICLE = `${version}/articles/:slug`; // 创建文章 post

const CREATE_ARTICLE = `${version}/articles`; // 修改文章 put

const UPDATE_ARTICLE = `${version}/articles/:slug`; // 删除文章 delete

const DELETE_ARTICLE = `${version}/articles/:slug`; // 评论文章 post

const ADD_COMMENTS = `${version}/articles/:slug/comments`; // 获取文章评论 get

const GET_COMMENTS = `${version}/articles/:slug/comments`; // 删除文章评论 delete

const DELETE_COMMENTS = `${version}/articles/:slug/comments/:id`; // 收藏文章 post

const FAVORITE_ARTICLE = `${version}/articles/:slug/favorite`; // 取消收藏文章 delete

const UNFAVORITE_ARTICLE = `${version}/articles/:slug/favorite`; // 获取标签 get

const GET_TAGS = `${version}/tags`;
// CONCATENATED MODULE: ./api/user.js


/**
 * 登录
 * @param {Object} data 用户数据：{ "user": { "email": "jake@jake.jake", "password": "jakejake" } }
 */

const login = data => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: LOGIN,
    data
  });
};
/**
 * 注册
 * @param {Object} data 用户数据：{ "user": { "username": "Jacob", "email": "jake@jake.jake", "password": "jakejake"} }
 */

const register = data => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: REGISTER,
    data
  });
};
// CONCATENATED MODULE: ./api/article.js


/**
 * 获取公共文章列表
 * @param {Object} params 查询参
 * Filter by tag:       ?tag=AngularJS
 * Filter by author:    ?author=jake
 * Favorited by user:   ?favorited=jake
 * Limit number of articles (default is 20):        ?limit=20
 * Offset/skip number of articles (default is 0):   ?offset=0
 */

const getArticleList = params => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: LIST_ARTICLES,
    params
  });
};
/**
 * 获取关注的文章列表
 * @param {Object} params 查询参
 * Filter by tag:       ?tag=AngularJS
 * Filter by author:    ?author=jake
 * Favorited by user:   ?favorited=jake
 * Limit number of articles (default is 20):        ?limit=20
 * Offset/skip number of articles (default is 0):   ?offset=0
 */

const getFeedArticleList = params => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: FEED_ARTICLES,
    params
  });
};
/**
 * 添加点赞
 * @param {Number | String} slug 文章 slug
 */

const addFavorite = slug => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: FAVORITE_ARTICLE.replace(':slug', slug)
  });
};
/**
 * 取消点赞
 * @param {Number | String} slug 文章 slug
 */

const deleteFavorite = slug => {
  return Object(request["b" /* request */])({
    method: 'DELETE',
    url: UNFAVORITE_ARTICLE.replace(':slug', slug)
  });
};
/**
 * 获取文章详情
 * @param {Number | String} slug 文章 slug
 */

const getArticle = slug => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: GET_ARTICLE.replace(':slug', slug)
  });
};
/**
 * 获取文章评论
 * @param {Number | String} slug 文章 slug
 */

const getComments = slug => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: GET_COMMENTS.replace(':slug', slug)
  });
};
/**
 * 发布文章评论
 * @param {Number | String} slug 文章 slug
 * @param {Object} data 评论信息：{ "comment": { "body": "His name was my name too." } }
 */

const addComments = (slug, data) => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: ADD_COMMENTS.replace(':slug', slug),
    data
  });
};
// CONCATENATED MODULE: ./api/tag.js


/**
 * 获取所有标签列表
 */

const getTags = () => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: GET_TAGS
  });
};
// CONCATENATED MODULE: ./api/index.js




/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=f2be9f74&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_c('article-comments',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=f2be9f74&

// EXTERNAL MODULE: ./api/index.js + 4 modules
var api = __webpack_require__(27);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=0c200512&
var article_metavue_type_template_id_0c200512_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
    name: 'profile',
    params: {
      username: _vm.article.author.username
    }
  }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
      name: 'profile',
      params: {
        username: _vm.article.author.username
      }
    }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{
      active: _vm.article.author.following
    }))+"><i class=\"ion-plus-round\"></i>\n     \n    Follow Eric Simons <span class=\"counter\">(10)</span></button>\n   \n  <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{
      active: _vm.article.favorited
    }))+"><i class=\"ion-heart\"></i>\n     \n    Favorite Post <span class=\"counter\">(29)</span></button>")],2)}
var article_metavue_type_template_id_0c200512_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=0c200512&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: 'ArticleMeta',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_0c200512_render,
  article_metavue_type_template_id_0c200512_staticRenderFns,
  false,
  null,
  null,
  "26685c08"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=template&id=721d3410&
var article_commentsvue_type_template_id_721d3410_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.commentValue))+"</textarea></div> <div class=\"card-footer\">"+((_vm.user)?("<img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\">"):"<!---->")+" <button class=\"btn btn-sm btn-primary\">\n      Post Comment\n      </button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          name: 'profile',
          params: { username: comment.author.username }
        }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n       \n      "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          name: 'profile',
          params: { username: comment.author.username }
        }}},[_vm._v("\n        "+_vm._s(comment.author.username)+"\n      ")]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createAt,'MMM DD, YYYY')))+"</span>")],2)],2)})],2)}
var article_commentsvue_type_template_id_721d3410_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=template&id=721d3410&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var article_commentsvue_type_script_lang_js_ = ({
  name: 'ArticleComments',
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      commentValue: '',
      // 评论
      comments: [] // 文章评论列表

    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  mounted() {
    this.getCommentsList();
  },

  methods: {
    async getCommentsList() {
      const {
        data
      } = await Object(api["f" /* getComments */])(this.article.slug);
      this.comments = data.comments;
      this.isCommenting = false;
    },

    async onSubmit() {
      if (!this.commentValue || this.isCommenting) return; // 阻止重复提交

      this.isCommenting = true;
      await Object(api["a" /* addComments */])(this.article.slug, {
        comment: {
          body: this.commentValue
        }
      });
      this.isCommenting = false;
      this.getCommentsList();
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentsvue_type_script_lang_js_ = (article_commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue





/* normalize component */

var article_comments_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentsvue_type_script_lang_js_,
  article_commentsvue_type_template_id_721d3410_render,
  article_commentsvue_type_template_id_721d3410_staticRenderFns,
  false,
  null,
  null,
  "de3bfa2a"
  
)

/* harmony default export */ var article_comments = (article_comments_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'ArticlePage',
  components: {
    ArticleMeta: article_meta,
    ArticleComments: article_comments
  },

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api["d" /* getArticle */])(params.slug);
    const {
      article
    } = data; // 将 markdown 内容转换成 HTML 内容

    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article: article
    };
  },

  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.article.description
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue





/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "05148bcc"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map