const HtmlWebpackPlugin = require('html-webpack-plugin')

// Homestead
// const target = 'http://192.168.10.10'

// php artisan serve
const target = 'http://127.0.0.1:8001'

const secure = false

module.exports = {

  pwa: {
    name: 'Lara CLI SPA'
  },

  devServer: {

    https: false,
    disableHostCheck: true,

    proxy: {
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
        ws: true
      },
      '^/app': {
        target: target,
        changeOrigin: true,
        secure: secure,
        ws: true
      },
      '^/socket.io': {
        target: target
      }
    }

  },

  transpileDependencies: [
    // 'vuetify'
  ],

  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/templates/app.blade.php',
        filename: '../../resources/views/app.blade.php'
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
