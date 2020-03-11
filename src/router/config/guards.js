export default {

  auth (to, from, next, vm) {
    if (!vm.isAuthenticated) {
      alert('Login required')
      return next({ name: 'login', query: { redirect: to.path } })
    }

    return next()
  }

}
