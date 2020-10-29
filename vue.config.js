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

    https: secure,
    disableHostCheck: false,

    proxy: {
      '^/': {
        target: target,
        changeOrigin: true,
        secure: secure,
        ws: true,
        bypass: function (req) {
          if (req.headers.accept.indexOf('html') !== -1) {
            return '/index.html'
          }
        }
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
