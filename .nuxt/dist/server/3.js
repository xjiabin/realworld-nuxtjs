exports.ids = [3];
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/sign/index.vue?vue&type=template&id=34a25048&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">"+_vm._ssrEscape(_vm._s(_vm.isLogin ? 'Sign up' : 'Sign in'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(messages,feild){return ((_vm._ssrList((messages),function(message,index){return ("<li>"+_vm._ssrEscape(_vm._s(feild)+" "+_vm._s(message))+"</li>")})))}))+"</ul> <form>"+((!_vm.isLogin)?("<fieldset class=\"form-group\"><input type=\"text\" required=\"required\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset>"):"<!---->")+" <fieldset class=\"form-group\"><input type=\"email\" required=\"required\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" required=\"required\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? 'Sign up' : 'Sign in')+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/sign/index.vue?vue&type=template&id=34a25048&

// EXTERNAL MODULE: ./api/index.js + 4 modules
var api = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sign/index.vue?vue&type=script&lang=js&
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

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var signvue_type_script_lang_js_ = ({
  name: 'SignPage',
  middleware: 'notAuth',

  data() {
    return {
      user: {
        username: '1996',
        email: '1996@mail.com',
        password: 'aa123456'
      },
      errors: {} // 错误信息

    };
  },

  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  },
  methods: {
    async onSubmit() {
      try {
        let res = this.isLogin ? await Object(api["i" /* login */])({
          user: this.user
        }) : await Object(api["j" /* register */])({
          user: this.user
        }); // 保存用户的登录状态

        this.$store.commit('setUser', res.data.user); // 将登录状态持久化
        // 这部分登录逻辑一定是运行在客户端的，因为这需要用户手动操作。

        Cookie.set('user', res.data.user); // 跳转到首页

        this.$router.push('/');
      } catch (err) {
        this.errors = err.response.data.errors;
        console.dir(err);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/sign/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_signvue_type_script_lang_js_ = (signvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/sign/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_signvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6de5b97a"
  
)

/* harmony default export */ var sign = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map