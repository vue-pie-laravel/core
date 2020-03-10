import Vue from 'vue'
import Router from 'vue-router'
import Routes from './routes'
import Guards from './guards'

Vue.use(Router)

let router = new Router({

  mode: 'history',
  routes: Routes

})

router.beforeResolve((to, from, next) => {
  // Check for and test navigation guard
  if (to.meta.hasOwnProperty('guard') && Guards.hasOwnProperty(to.meta.guard)) {
    Guards[to.meta.guard](to, from, next, router.app)
    return
  }

  // Continue as normal
  return next()
})

router.afterEach((to) => {
  document.title = to.meta.title == null ? '' : to.meta.title
})

export default router
