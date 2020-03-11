import DynamicComponent from '@/utility/DynamicComponent/handler'

export default [

  {
    path: '/app',
    redirect: '/'
  },

  {
    name: 'index',
    path: '/',
    meta: {
      title: 'Welcome',
      layout: 'example'
    },
    component: () => ({
      ...DynamicComponent, component: import('@/views/welcome')
    })
  },

  {
    name: 'guarded',
    path: '/guarded',
    meta: {
      title: 'Guarded',
      layout: 'example',
      guard: 'auth'
    },
    component: () => ({
      ...DynamicComponent, component: import('@/views/welcome')
    })
  },

  {
    name: 'login',
    path: '/auth/login',
    meta: {
      title: 'Auth Login'
    },
    component: () => ({
      ...DynamicComponent, component: import('@/views/auth/login')
    })
  },

  {
    path: '*',
    component: () => ({
      ...DynamicComponent, component: import('@/views/status/404')
    })
  }

]
