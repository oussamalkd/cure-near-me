import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6921ed2b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _dd511982 = () => interopDefault(import('..\\pages\\_slug\\index.vue' /* webpackChunkName: "pages/_slug/index" */))
const _e0be5c12 = () => interopDefault(import('..\\pages\\_slug\\_slug.vue' /* webpackChunkName: "pages/_slug/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _6921ed2b,
    name: "index"
  }, {
    path: "/:slug",
    component: _dd511982,
    name: "slug"
  }, {
    path: "/:slug/:slug",
    component: _e0be5c12,
    name: "slug-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
