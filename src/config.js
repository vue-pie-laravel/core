export const config = {

  mountAppTo: '#app',
  requestPrefix: '/app',
  requestRetry: 60,
  defaultRedirect: '/'

}

export const plugins = {

  axios: {
    enabled: true
  },

  laravel: {
    enabled: true
  },

  echo: {
    enabled: false
  }

}
