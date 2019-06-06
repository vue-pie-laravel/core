path = require('path');

const target = 'http://192.168.10.10';

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {

    pwa: {
        name: 'Lara CLI SPA',
        msTileColor: '#4DBA87'
    },

    baseUrl: undefined,
    assetsDir: undefined,

    devServer: {
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

    outputDir: 'public',
    runtimeCompiler: true,
    filenameHashing: true,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined,

    chainWebpack: config => {

        config.plugins.delete('copy');

        if(isProduction) {

            config
                .plugin('html')
                .tap(args => {
                    args[0].template = 'src/templates/app.blade.php';
                    args[0].filename = '../resources/views/app.blade.php';
                    return args
                })

        }

    },

    configureWebpack: {
        resolve: {
            alias: {
                '~' : path.resolve(__dirname,'src')
            }
        }
    }

}
