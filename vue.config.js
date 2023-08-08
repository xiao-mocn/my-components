const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  devServer: {
    port: 1108,
    open: true,
    hot: true,
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule('svg')
  //     .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  //     .use('url-loader')
  //     .loader('url-loader')
  //     .options({
  //       limit: 10000,
  //       name: 'img/[name].[ext]'
  //     })
  //     .end()
  // }
})
