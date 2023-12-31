const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    static: './dist',
    open: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    compress: true,
  }
})
