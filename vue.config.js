const vuxLoader = require('vux-loader')
const path = require('path')

module.exports = {
  configureWebpack: config => {
    vuxLoader.merge(config, {
      plugins: ['vux-ui', 'duplicate-style']
    })
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/styles/index.less')],
      injector: 'append'
    }
  }
}
