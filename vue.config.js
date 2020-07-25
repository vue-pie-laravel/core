const HtmlWebpackPlugin = require('html-webpack-plugin')

// Homestead
// const target = 'http://192.168.10.10'

// php artisan serve
const target = 'http://127.0.0.1:8001'

const secure = process.env.NODE_ENV === 'production'

module.exports = {

  pwa: {
    name: 'Lara CLI SPA'
  },

  devServer: {

    https: secure,
    disableHostCheck: !secure,

    proxy: {
      '^/socket.io': {
        target: target,
        changeOrigin: true,
        secure: secure,
        ws: true
      },
      '^/app': {
        target: target,
        changeOrigin: true,
        secure: secure,
        ws: true
      },
      '^/storage': {
        target: target,
        changeOrigin: true,
        secure: secure,
        ws: false
      },
      '^/api': {
        target: target,
        changeOrigin: true,
        secure: secure,
        ws: false
      }
    }

  },

  transpileDependencies: [
    // 'vuetify'
  ],

  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/templates/vue.blade.php',
        filename: '../../resources/views/layouts/vue.blade.php'
      })
    ],
    optimization: {
      splitChunks: {
        maxSize: 254000
      }
    }
  },

  chainWebpack: config => {
    config.plugins.delete('copy')
  },

  outputDir: 'public/app',
  assetsDir: 'assets',
  productionSourceMap: false,
  publicPath: '/app/',

  runtimeCompiler: true

}
