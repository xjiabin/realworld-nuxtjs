exports.ids = [2];
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=469223ea&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'your_feed' },attrs:{"to":{
                  name: 'home',
                  query: {
                    tab: 'your_feed'
                  }
                },"exact":""}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'global_feed' },attrs:{"to":{
                  name: 'home',
                  query: {
                    tab: 'global_feed'
                  }
                },"exact":""}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'tag' },attrs:{"to":{
                  name: 'home',
                  query: {
                    tab: 'tag',
                    tag: _vm.tag
                  }
                },"exact":""}},[_vm._v("#"+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
              name: 'profile',
              params: { username: article.author.username }
            }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                name: 'profile',
                params: { username: article.author.username }
              }}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ active: article.favorited }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
              name: 'article',
              params: { slug: article.slug }
            }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item ng-scope",{
                active: item === _vm.page
              }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                  home: 'home',
                  query: {
                    page: item,
                    tag: _vm.$route.query.tag,
                    tab: _vm.tab
                  }
                }}},[_vm._v(_vm._s(item))])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\">","</div>",_vm._l((_vm.tags),function(item){return _c('nuxt-link',{key:item,staticClass:"tag-pill tag-default",attrs:{"to":{
                name: 'home',
                query: { tag: item, tab: 'tag' }
              }}},[_vm._v(_vm._s(item))])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=469223ea&

// EXTERNAL MODULE: ./api/index.js + 4 modules
var api = __webpack_require__(27);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'HomeIndex',
  watchQuery: ['page', 'tag', 'tab'],

  async asyncData({
    query,
    store
  }) {
    const limit = 10;
    const page = Number(query.page) || 1;
    const tag = query.tag || '';
    const tab = query.tab || (store.state.user ? 'your_feed' : 'global_feed');
    const loadArticleList = store.state.user && tab === 'your_feed' ? api["g" /* getFeedArticleList */] : api["e" /* getArticleList */];

    try {
      const [articleRes, tagsRes] = await Promise.all([loadArticleList({
        limit,
        offset: (page - 1) * limit,
        tag
      }), Object(api["h" /* getTags */])()]);
      const {
        articles,
        articlesCount
      } = articleRes.data;
      const {
        tags
      } = tagsRes.data; // 给所有文章添加 点赞按钮的禁用状态

      articles.forEach(article => article.favoriteDisabled = false);
      return {
        tab,
        tag,
        tags,
        page,
        limit,
        articles,
        articlesCount
      };
    } catch (err) {
      console.log(err);
    }
  },

  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    async toggleFavorite(article) {
      article.favoriteDisabled = true;

      if (article.favorited) {
        // 取消点赞
        await Object(api["c" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        // 添加点赞
        await Object(api["b" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c4919036"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map