const vuxLoader = require('vux-loader')
const path = require('path')

module.exports = {
  devServer: {
      proxy: 'http://47.100.29.191:18080/',
      host: 'api.fuliqian.com',
      port: '3000'
  },
  configureWebpack: config => {
    vuxLoader.merge(config, {
      plugins: ['vux-ui', 'duplicate-style']
    })
  },

  // pluginOptions: {
  //   'style-resources-loader': {
  //     preProcessor: 'less',
  //     patterns: [path.resolve(__dirname, 'src/styles/index.less')],
  //     injector: 'append'
  //   }
  // }
}
