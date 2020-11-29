import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _65f80dde = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _2f7d9e45 = () => interopDefault(import('../pages/message.vue' /* webpackChunkName: "pages/message" */))
const _1a30bf5d = () => interopDefault(import('../pages/partners.vue' /* webpackChunkName: "pages/partners" */))
const _f46edb20 = () => interopDefault(import('../pages/players.vue' /* webpackChunkName: "pages/players" */))
const _c5e6556a = () => interopDefault(import('../pages/teamsummertime.vue' /* webpackChunkName: "pages/teamsummertime" */))
const _5b39fb10 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/optic-livesite/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _65f80dde,
    name: "contact"
  }, {
    path: "/message",
    component: _2f7d9e45,
    name: "message"
  }, {
    path: "/partners",
    component: _1a30bf5d,
    name: "partners"
  }, {
    path: "/players",
    component: _f46edb20,
    name: "players"
  }, {
    path: "/teamsummertime",
    component: _c5e6556a,
    name: "teamsummertime"
  }, {
    path: "/",
    component: _5b39fb10,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
