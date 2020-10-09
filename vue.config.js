
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'api': '@/api',
                'utils': '@/utils',
                'views': '@/views',
                'config': '@/config',
                'router': '@/router',
                'layouts': '@/layouts',
                'mixins': '@/mixins'
            }
        }
    },
    devServer: {
        proxy: {//解决跨域问题
            '/api': {
                // 此处的写法，目的是为了 将 /api 替换成 https://autumnfish.cn/
                target: 'https://autumnfish.cn/',
                // 允许跨域
                ws: true, // 代理长连接
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },

    pluginOptions: { // 第三方插件配置
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, './src/assets/css/var.less')] // less所在文件路径
        }
    }

}
