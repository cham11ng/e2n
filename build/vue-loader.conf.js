'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction ? config.build.productionSourceMap : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    extract: isProduction,
    sourceMap: sourceMapEnabled
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    img: 'src',
    source: 'src',
    image: 'xlink:href',
    video: ['src', 'poster']
  }
}
