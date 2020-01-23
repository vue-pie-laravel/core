const HtmlWebpackPlugin = require('html-webpack-plugin')

const target = 'http://192.168.10.10'

module.exports = {

  pwa: {
    name: 'Lara CLI SPA'
  },

  devServer: {
    https: true,
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: target,
        changeOrigin: true,
        secure: false,
        ws: true
      },
      '^/app': {
        target: target,
        changeOrigin: true,
        secure: false,
        ws: true
      },
      '^/socket.io': {
        target: target
      }
    }
  },

  assetsDir: 'assets',
  publicPath: '/app/',
  outputDir: 'public/app',
  productionSourceMap: false,

  transpileDependencies: [
    'vuetify'
  ],

  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/templates/app.blade.php',
        filename: '../../resources/views/layouts/app.blade.php'
      })
    ],
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 254000
      }
    }
  }

}
