'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const env = require('../config/prod.env')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  optimization: {
    concatenateModules: true ,
    splitChunks: {
       cacheGroups:{
          commons: {
             chunks: 'initial',
             minChunks: 2,
             maxInitialRequests: 5,
             minSize: 0
          },
          vendor: {
             test: /node_modules/,
             chunks: 'initial',
             name: 'vendor',
             priority: 10,
             enforce: true,
          },
          styles: {
             name: 'styles',
             test: /\.scss$/,
             chunks: 'all',
             enforce: true,
          }
       }
    },
    runtimeChunk: {
       name: 'runtime'
    },
   },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    }),
    new PrerenderSpaPlugin({
      staticDir: path.join(__dirname, '../dist'),
      routes: ['/'],
      renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
        inject: {},
      })
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      title: '創順科技',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new webpack.HashedModuleIdsPlugin(),
    // new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.LoaderOptionsPlugin({ options: {} }),
  ]
})
module.exports = webpackConfig
