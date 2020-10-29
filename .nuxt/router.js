import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3703a4f6 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _c25cbcaa = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _c252eaee = () => interopDefault(import('..\\pages\\sign' /* webpackChunkName: "" */))
const _cd09cd46 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _272822ef = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _2b34cb39 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _ff7546ac = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _3703a4f6,
    children: [{
      path: "",
      component: _c25cbcaa,
      name: "home"
    }, {
      path: "/login",
      component: _c252eaee,
      name: "login"
    }, {
      path: "/register",
      component: _c252eaee,
      name: "register"
    }, {
      path: "/register",
      component: _c252eaee,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _cd09cd46,
      name: "profile"
    }, {
      path: "/settings",
      component: _272822ef,
      name: "settings"
    }, {
      path: "/editor",
      component: _2b34cb39,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _ff7546ac,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
